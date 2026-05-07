import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { MOCK_ANALYSIS } from "@/lib/mockAnalysis";
import { analyzeLeaseWithClaude, analyzeLeaseWithClaudePDF } from "@/lib/claude";
import { saveAnalysis } from "@/lib/db";
import { uploadPDF } from "@/lib/r2";
import { auth } from "@/lib/auth";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    const userId = session?.user.id;
    const isPro = false; // Pro tier not yet implemented — all users get teaser view

    const formData = await req.formData();
    const textField = formData.get("text");
    const fileField = formData.get("file");

    const id = randomUUID();
    const createdAt = new Date().toISOString();
    let filename: string | undefined;
    let pdfKey: string | undefined;
    let analysisData;

    if (textField && typeof textField === "string") {
      const leaseText = textField.trim();

      if (leaseText.length < 100) {
        return NextResponse.json(
          { error: "Lease text is too short. Please provide more complete lease content." },
          { status: 400 }
        );
      }

      if (process.env.ANTHROPIC_API_KEY) {
        analysisData = await analyzeLeaseWithClaude(leaseText);
      } else {
        await new Promise((r) => setTimeout(r, 1200));
        analysisData = { ...MOCK_ANALYSIS };
      }

      await saveAnalysis({ id, createdAt, userId, rawText: leaseText, teaser: !isPro, ...analysisData });

    } else if (fileField && fileField instanceof Blob) {
      const file = fileField as File;
      filename = file.name;

      if (file.type !== "application/pdf") {
        return NextResponse.json(
          { error: "Only PDF files are supported." },
          { status: 400 }
        );
      }
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { error: "File too large. Maximum size is 10MB." },
          { status: 400 }
        );
      }

      const buffer = await file.arrayBuffer();

      // Store to R2 (no-op in local dev)
      const key = `leases/${randomUUID()}.pdf`;
      pdfKey = (await uploadPDF(key, buffer)) ?? undefined;

      if (process.env.ANTHROPIC_API_KEY) {
        // Send PDF bytes directly to Claude — no pdf-parse needed
        analysisData = await analyzeLeaseWithClaudePDF(buffer);
      } else {
        await new Promise((r) => setTimeout(r, 1200));
        analysisData = { ...MOCK_ANALYSIS };
      }

      await saveAnalysis({ id, createdAt, filename, pdfKey, userId, teaser: !isPro, ...analysisData });

    } else {
      return NextResponse.json(
        { error: "Please provide lease text or a PDF file." },
        { status: 400 }
      );
    }

    return NextResponse.json({ id, teaser: !isPro, analysis: analysisData });
  } catch (err) {
    console.error("[/api/analyze] Error:", err);
    return NextResponse.json(
      { error: "Analysis failed. Please try again." },
      { status: 500 }
    );
  }
}
