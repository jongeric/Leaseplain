import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { MOCK_ANALYSIS } from "@/lib/mockAnalysis";
import { analyzeLeaseWithClaude } from "@/lib/claude";
import { saveAnalysis } from "@/lib/db";
import { uploadPDF } from "@/lib/r2";

export const runtime = "nodejs";
export const maxDuration = 60;

async function extractTextFromPDF(buffer: ArrayBuffer): Promise<string> {
  // Dynamic import so pdf-parse doesn't break edge builds
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pdfParseModule = await import("pdf-parse") as any;
  const pdfParse = pdfParseModule.default ?? pdfParseModule;
  const data = await pdfParse(Buffer.from(buffer));
  return data.text;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const textField = formData.get("text");
    const fileField = formData.get("file");

    let leaseText = "";
    let filename: string | undefined;
    let pdfKey: string | undefined;

    if (textField && typeof textField === "string") {
      leaseText = textField.trim();
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

      // Extract text for analysis
      try {
        leaseText = await extractTextFromPDF(buffer);
      } catch {
        return NextResponse.json(
          { error: "Could not extract text from the uploaded PDF. Please try pasting the text instead." },
          { status: 422 }
        );
      }
    } else {
      return NextResponse.json(
        { error: "Please provide lease text or a PDF file." },
        { status: 400 }
      );
    }

    if (leaseText.length < 100) {
      return NextResponse.json(
        { error: "Lease text is too short. Please provide more complete lease content." },
        { status: 400 }
      );
    }

    const id = randomUUID();
    const createdAt = new Date().toISOString();

    let analysisData;

    if (process.env.ANTHROPIC_API_KEY) {
      // Real Claude analysis
      analysisData = await analyzeLeaseWithClaude(leaseText);
    } else {
      // Mock analysis for development (no API key needed)
      await new Promise((r) => setTimeout(r, 1200)); // simulate latency
      analysisData = {
        summary: MOCK_ANALYSIS.summary,
        financialTerms: MOCK_ANALYSIS.financialTerms,
        redFlags: MOCK_ANALYSIS.redFlags,
        unclearClauses: MOCK_ANALYSIS.unclearClauses,
        questionsToAsk: MOCK_ANALYSIS.questionsToAsk,
        negotiationSuggestions: MOCK_ANALYSIS.negotiationSuggestions,
      };
    }

    const analysis = {
      id,
      createdAt,
      filename,
      pdfKey,
      ...analysisData,
    };

    // Persist to D1 (no-op in local dev)
    await saveAnalysis({ ...analysis, rawText: leaseText });

    return NextResponse.json({ id, analysis });
  } catch (err) {
    console.error("[/api/analyze] Error:", err);
    return NextResponse.json(
      { error: "Analysis failed. Please try again." },
      { status: 500 }
    );
  }
}
