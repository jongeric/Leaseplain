import { createAuth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { ensureTables } from "@/lib/migrate";

export const runtime = "nodejs";

async function getHandler() {
  let d1: unknown = undefined;
  let secret: string | undefined;

  try {
    const ctx = await getCloudflareContext({ async: true });
    const env = ctx.env as Record<string, unknown>;
    d1 = env.DB;
    // Cloudflare secrets are not in process.env — read them from ctx.env
    if (typeof env.BETTER_AUTH_SECRET === "string" && env.BETTER_AUTH_SECRET.length > 0) {
      secret = env.BETTER_AUTH_SECRET;
    }
    if (d1) {
      await ensureTables(d1);
    } else {
      console.error("[auth] D1 binding not found — falling back to memoryAdapter");
    }
  } catch (e) {
    console.error("[auth] getCloudflareContext failed:", e);
  }

  const { GET, POST } = toNextJsHandler(createAuth(d1, { secret }));
  return { GET, POST };
}

export async function GET(req: Request) {
  const { GET } = await getHandler();
  return GET(req);
}

export async function POST(req: Request) {
  try {
    const { POST } = await getHandler();
    return POST(req);
  } catch (e) {
    console.error("[auth] POST handler error:", e);
    return new Response(JSON.stringify({ error: "Auth error", detail: String(e) }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}
