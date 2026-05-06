/**
 * Cloudflare D1 database helpers.
 *
 * In production these run inside a Cloudflare Worker/Pages Function
 * where `process.env.DB` is a D1Database binding.
 *
 * For local Next.js dev, calls fall through to the mock layer.
 */

import { LeaseAnalysis } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type D1Database = any;

function getDB(): D1Database | null {
  // Cloudflare bindings are available via env in Workers;
  // in Next.js dev they are undefined.
  return (process.env as Record<string, unknown>).DB ?? null;
}

export async function saveAnalysis(
  analysis: Omit<LeaseAnalysis, "id"> & { id: string; userId?: string; rawText?: string }
): Promise<void> {
  const db = getDB();
  if (!db) return; // no-op in local dev

  await db
    .prepare(
      `INSERT INTO analyses (id, user_id, filename, raw_text, result_json, created_at)
       VALUES (?, ?, ?, ?, ?, ?)`
    )
    .bind(
      analysis.id,
      analysis.userId ?? null,
      analysis.filename ?? null,
      analysis.rawText ?? null,
      JSON.stringify(analysis),
      analysis.createdAt
    )
    .run();
}

export async function getAnalysisById(id: string): Promise<LeaseAnalysis | null> {
  const db = getDB();
  if (!db) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const row = await db
    .prepare("SELECT result_json FROM analyses WHERE id = ?")
    .bind(id)
    .first() as { result_json: string } | null;

  if (!row) return null;
  return JSON.parse(row.result_json) as LeaseAnalysis;
}

export async function countAnalysesThisMonth(userId: string): Promise<number> {
  const db = getDB();
  if (!db) return 0;

  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const row = await db
    .prepare(
      "SELECT COUNT(*) as count FROM analyses WHERE user_id = ? AND created_at >= ?"
    )
    .bind(userId, startOfMonth.toISOString())
    .first() as { count: number } | null;

  return row?.count ?? 0;
}

export async function listAnalysesByUser(userId: string): Promise<LeaseAnalysis[]> {
  const db = getDB();
  if (!db) return [];

  const { results } = await db
    .prepare(
      "SELECT result_json FROM analyses WHERE user_id = ? ORDER BY created_at DESC LIMIT 50"
    )
    .bind(userId)
    .all() as { results: { result_json: string }[] };

  return results.map((r: { result_json: string }) => JSON.parse(r.result_json) as LeaseAnalysis);
}
