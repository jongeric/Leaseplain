import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { MOCK_ANALYSIS } from "@/lib/mockAnalysis";
import { analyzeLeaseWithClaude, analyzeLeaseWithClaudePDF } from "@/lib/claude";
import { analyzeLeaseRuleBased } from "@/lib/ruleBasedAnalysis";
import { saveAnalysis, isUserPro } from "@/lib/db";
import { uploadPDF } from "@/lib/r2";
import { getCloudflareContext } from "@opennextjs/cloudflare";
// PDFParse is imported dynamically inside the PDF path to avoid a module-level
// crash if the package fails to initialize in the CF Worker environment.

export const runtime = "nodejs";
export const maxDuration = 60;

function classifyApiError(msg: string): string {
  const m = msg.toLowerCase();
  if (m.includes("credit balance") || m.includes("billing") || m.includes("quota") || m.includes("insufficient_quota")) {
    return "The AI service is temporarily unavailable due to a billing issue. Please try again later or contact support.";
  }
  if (m.includes("timeout") || m.includes("timed out") || m.includes("etimedout")) {
    return "This PDF took too long to process. Try a smaller file (under 2MB) or paste the key sections as text.";
  }
  if (m.includes("401") || m.includes("authentication") || m.includes("invalid x-api-key") || m.includes("invalid api key")) {
    return "API configuration error. Please contact support.";
  }
  if (m.includes("too large") || m.includes("max_bytes") || m.includes("file size")) {
    return "This PDF is too complex for direct upload. Please paste the lease text instead.";
  }
  if (m.includes("rate limit") || m.includes("rate_limit") || m.includes("429")) {
    return "Too many requests. Please wait a moment and try again.";
  }
  return "Analysis failed. Please try again or paste your lease as text.";
}

// Lightweight session lookup directly from D1 — avoids spinning up full auth instance
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getUserIdFromSession(req: NextRequest, d1: any): Promise<string | null> {
  if (!d1) return null;
  try {
    const cookieHeader = req.headers.get("cookie") ?? "";
    const match = cookieHeader.match(/better-auth\.session_token=([^;]+)/);
    if (!match) return null;
    const token = decodeURIComponent(match[1]);
    const row = await d1
      .prepare("SELECT userId FROM session WHERE token = ? AND expiresAt > ? LIMIT 1")
      .bind(token, new Date().toISOString())
      .first() as { userId: string } | null;
    return row?.userId ?? null;
  } catch {
    return null;
  }
}

async function handlePOST(req: NextRequest): Promise<NextResponse> {
  // ── 1. Resolve Cloudflare env bindings ──────────────────────────────────────
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let d1: any = undefined;
  let cfApiKey: string | undefined;
  try {
    const ctx = await getCloudflareContext({ async: true });
    const env = ctx.env as Record<string, unknown>;
    d1 = env.DB;
    if (typeof env.ANTHROPIC_API_KEY === "string" && env.ANTHROPIC_API_KEY.length > 0) {
      cfApiKey = env.ANTHROPIC_API_KEY;
    }
  } catch { /* local dev — no CF context */ }

  const anthropicApiKey = cfApiKey ?? process.env.ANTHROPIC_API_KEY;
  console.log(
    "[analyze] key present:", !!anthropicApiKey,
    "| source:", cfApiKey ? "cf_env" : process.env.ANTHROPIC_API_KEY ? "process_env" : "NONE",
    "| key prefix:", anthropicApiKey?.slice(0, 7) ?? "n/a",
  );

  // ── 2. Session / pro status ─────────────────────────────────────────────────
  const userId = await getUserIdFromSession(req, d1) ?? undefined;
  const isPro = userId ? await isUserPro(userId) : false;

  // ── 3. Parse form data ──────────────────────────────────────────────────────
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch (err) {
    console.error("[analyze] formData parse error:", err);
    return NextResponse.json({ error: "Could not read the uploaded file. Please try again." }, { status: 400 });
  }

  const textField = formData.get("text");
  const fileField = formData.get("file");

  const id = randomUUID();
  const createdAt = new Date().toISOString();
  let filename: string | undefined;
  let pdfKey: string | undefined;
  let analysisData;
  let usedRealAnalysis = false;
  let ruleBasedFallback = false;

  // ── 4a. Text path ───────────────────────────────────────────────────────────
  if (textField && typeof textField === "string") {
    const leaseText = textField.trim();

    if (leaseText.length < 100) {
      return NextResponse.json(
        { error: "Lease text is too short. Please provide more complete lease content." },
        { status: 400 },
      );
    }

    if (anthropicApiKey) {
      try {
        analysisData = await analyzeLeaseWithClaude(leaseText, anthropicApiKey);
        usedRealAnalysis = true;
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        console.warn("[analyze] Claude text error — falling back to rule-based:", msg);
        analysisData = analyzeLeaseRuleBased(leaseText);
        ruleBasedFallback = true;
      }
    } else {
      console.warn("[analyze] No API key — using rule-based analysis for text input");
      analysisData = analyzeLeaseRuleBased(leaseText);
      ruleBasedFallback = true;
    }

    try {
      await saveAnalysis({ id, createdAt, userId, rawText: leaseText, teaser: !isPro, ...analysisData });
    } catch (err) {
      console.error("[analyze] saveAnalysis error (text):", err);
      // non-fatal — analysis was successful, just not persisted
    }

  // ── 4b. PDF path ────────────────────────────────────────────────────────────
  } else if (fileField && fileField instanceof Blob) {
    const file = fileField as File;
    filename = file.name;

    if (file.type !== "application/pdf") {
      return NextResponse.json({ error: "Only PDF files are supported." }, { status: 400 });
    }
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large. Maximum size is 10MB." }, { status: 400 });
    }

    let buffer: ArrayBuffer;
    try {
      buffer = await file.arrayBuffer();
    } catch (err) {
      console.error("[analyze] arrayBuffer error:", err);
      return NextResponse.json({ error: "Could not read the PDF file. Please try again." }, { status: 400 });
    }

    // Upload to R2 (best-effort — never blocks the analysis)
    try {
      const key = `leases/${randomUUID()}.pdf`;
      pdfKey = (await uploadPDF(key, buffer)) ?? undefined;
    } catch (err) {
      console.warn("[analyze] R2 upload failed (non-fatal):", err);
    }

    // Extract text from the PDF first — sending text to Claude is 5-10x faster
    // than the PDF binary API and avoids Cloudflare's 30s wall-clock timeout.
    let extractedText: string | null = null;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { PDFParse } = await import("pdf-parse") as any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const parser = new PDFParse(new Uint8Array(buffer)) as any;
      const pdfDoc = await parser.load();
      const numPages: number = pdfDoc.numPages ?? 0;
      const pages: string[] = [];
      for (let i = 1; i <= numPages; i++) {
        const page = await pdfDoc.getPage(i);
        const content = await page.getTextContent();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const pageText = content.items.map((item: any) => item.str ?? "").join(" ");
        pages.push(pageText);
      }
      const text = pages.join("\n").trim();
      if (text.length > 200) {
        extractedText = text;
        console.log("[analyze] PDF text extracted:", text.length, "chars from", numPages, "pages");
      } else {
        console.warn("[analyze] PDF text too short after extraction, falling back to PDF API");
      }
    } catch (err) {
      console.warn("[analyze] pdf-parse failed, falling back to PDF API:", err instanceof Error ? err.message : err);
    }

    if (anthropicApiKey) {
      try {
        if (extractedText) {
          console.log("[analyze] Analyzing extracted text from PDF");
          analysisData = await analyzeLeaseWithClaude(extractedText, anthropicApiKey);
        } else {
          console.log("[analyze] Sending PDF binary to Claude:", file.name, Math.round(file.size / 1024), "KB");
          analysisData = await analyzeLeaseWithClaudePDF(buffer, anthropicApiKey);
        }
        usedRealAnalysis = true;
        console.log("[analyze] Analysis complete");
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        console.warn("[analyze] Claude PDF error — falling back to rule-based:", msg);
        const textForFallback = extractedText ?? "";
        if (textForFallback.length > 100) {
          analysisData = analyzeLeaseRuleBased(textForFallback);
          ruleBasedFallback = true;
        } else {
          return NextResponse.json({ error: classifyApiError(msg) }, { status: 500 });
        }
      }
    } else {
      console.warn("[analyze] No API key — using rule-based analysis for PDF input");
      const textForFallback = extractedText ?? "";
      if (textForFallback.length > 100) {
        analysisData = analyzeLeaseRuleBased(textForFallback);
        ruleBasedFallback = true;
      } else {
        analysisData = { ...MOCK_ANALYSIS };
        ruleBasedFallback = true;
      }
    }

    try {
      await saveAnalysis({ id, createdAt, filename, pdfKey, userId, teaser: !isPro, ...analysisData });
    } catch (err) {
      console.error("[analyze] saveAnalysis error (PDF):", err);
      // non-fatal
    }

  } else {
    return NextResponse.json({ error: "Please provide lease text or a PDF file." }, { status: 400 });
  }

  return NextResponse.json({ id, teaser: !isPro, usedRealAnalysis, ruleBasedFallback, analysis: analysisData });
}

export async function POST(req: NextRequest) {
  try {
    return await handlePOST(req);
  } catch (err) {
    console.error("[analyze] Unhandled route error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
