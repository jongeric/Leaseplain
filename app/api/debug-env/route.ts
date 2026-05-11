import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export const runtime = "nodejs";

export async function GET() {
  const result: Record<string, unknown> = {
    process_env_has_key: !!process.env.ANTHROPIC_API_KEY,
    process_env_key_prefix: process.env.ANTHROPIC_API_KEY?.slice(0, 7) ?? null,
  };

  try {
    const ctx = await getCloudflareContext({ async: true });
    const env = ctx.env as Record<string, unknown>;
    const cfKey = env.ANTHROPIC_API_KEY;
    result.cf_context_ok = true;
    result.cf_env_has_key = typeof cfKey === "string" && cfKey.length > 0;
    result.cf_env_key_prefix = typeof cfKey === "string" ? cfKey.slice(0, 7) : null;
    result.cf_env_has_db = !!env.DB;
    result.cf_env_keys = Object.keys(env).filter(k => !["DB", "ASSETS"].includes(k));
  } catch (e) {
    result.cf_context_ok = false;
    result.cf_context_error = String(e);
  }

  return NextResponse.json(result);
}
