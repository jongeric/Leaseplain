import Anthropic from "@anthropic-ai/sdk";
import type { DocumentBlockParam } from "@anthropic-ai/sdk/resources/messages/messages";
import { LeaseAnalysis } from "./types";

const SYSTEM_PROMPT = `You are a helpful assistant that analyzes residential lease agreements for clarity only. You do NOT provide legal advice. You translate dense lease language into plain English so tenants can better understand what they are agreeing to.

Always remind users that your analysis is for informational purposes only and is not a substitute for professional legal advice.`;

const ANALYSIS_PROMPT = `Analyze this residential lease agreement for clarity only. Do not provide legal advice. Return a structured plain-English report with the following sections in valid JSON format:

{
  "summary": "A plain-English paragraph summarizing the key terms of the lease (property, rent, term, deposit, main responsibilities).",
  "financialTerms": [
    { "label": "Term name", "value": "Amount or description", "note": "Optional clarifying note" }
  ],
  "redFlags": [
    { "title": "Short title", "description": "Plain-English explanation of why this is concerning", "severity": "high|medium|low" }
  ],
  "unclearClauses": [
    { "title": "Clause title", "description": "Explanation of what is unclear or missing" }
  ],
  "questionsToAsk": ["Question 1", "Question 2", ...],
  "negotiationSuggestions": ["Suggestion 1", "Suggestion 2", ...]
}

Use simple language a non-lawyer can understand. Be thorough but concise. Focus on things that directly affect the tenant's money, rights, and living situation.`;

function parseClaudeResponse(text: string): Omit<LeaseAnalysis, "id" | "createdAt"> {
  const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/) ||
    text.match(/(\{[\s\S]*\})/);

  if (!jsonMatch) {
    throw new Error("Could not parse structured response from Claude");
  }

  const parsed = JSON.parse(jsonMatch[1].trim());

  return {
    summary: parsed.summary ?? "",
    financialTerms: parsed.financialTerms ?? [],
    redFlags: parsed.redFlags ?? [],
    unclearClauses: parsed.unclearClauses ?? [],
    questionsToAsk: parsed.questionsToAsk ?? [],
    negotiationSuggestions: parsed.negotiationSuggestions ?? [],
  };
}

function makeClient(apiKey?: string) {
  return new Anthropic({ apiKey: apiKey ?? process.env.ANTHROPIC_API_KEY });
}

export async function analyzeLeaseWithClaude(leaseText: string, apiKey?: string): Promise<Omit<LeaseAnalysis, "id" | "createdAt">> {
  const USER_PROMPT = `${ANALYSIS_PROMPT}\n\nLEASE TEXT:\n${leaseText}`;

  const message = await makeClient(apiKey).messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: USER_PROMPT }],
  });

  const content = message.content[0];
  if (content.type !== "text") throw new Error("Unexpected response type from Claude");
  return parseClaudeResponse(content.text);
}

export async function analyzeLeaseWithClaudePDF(pdfBuffer: ArrayBuffer, apiKey?: string): Promise<Omit<LeaseAnalysis, "id" | "createdAt">> {
  const documentBlock: DocumentBlockParam = {
    type: "document",
    source: {
      type: "base64",
      media_type: "application/pdf",
      data: Buffer.from(pdfBuffer).toString("base64"),
    },
  };

  const message = await makeClient(apiKey).messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: [documentBlock, { type: "text", text: ANALYSIS_PROMPT }],
      },
    ],
  });

  const content = message.content[0];
  if (content.type !== "text") throw new Error("Unexpected response type from Claude");
  return parseClaudeResponse(content.text);
}
