import { toNextJsHandler } from "better-auth/next-js";
import { createAuth } from "@/lib/auth";

async function getHandler() {
  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const { env } = await getCloudflareContext({ async: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const db = (env as any).DB as Parameters<typeof createAuth>[0];
    return toNextJsHandler(createAuth(db));
  } catch {
    return toNextJsHandler(createAuth());
  }
}

export async function GET(request: Request) {
  return (await getHandler()).GET(request);
}

export async function POST(request: Request) {
  return (await getHandler()).POST(request);
}
