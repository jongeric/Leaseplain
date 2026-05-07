import { createAuth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { ensureTables } from "@/lib/migrate";

export const runtime = "nodejs";

async function getHandler() {
  let d1: unknown = undefined;

  try {
    const ctx = await getCloudflareContext({ async: true });
    d1 = (ctx.env as Record<string, unknown>).DB;
    if (d1) await ensureTables(d1);
  } catch {
    // Not in Cloudflare environment (local dev) — use memory adapter
  }

  const { GET, POST } = toNextJsHandler(createAuth(d1));
  return { GET, POST };
}

export async function GET(req: Request) {
  const { GET } = await getHandler();
  return GET(req);
}

export async function POST(req: Request) {
  const { POST } = await getHandler();
  return POST(req);
}
