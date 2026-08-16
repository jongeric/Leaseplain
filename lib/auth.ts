import { betterAuth } from "better-auth";
import { memoryAdapter } from "@better-auth/memory-adapter";
import { kyselyAdapter } from "@better-auth/kysely-adapter";
import { Kysely } from "kysely";
import { D1Dialect } from "kysely-d1";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { ensureTables } from "@/lib/migrate";

// In-memory store for dev / non-D1 environments.
// Data is ephemeral — for production, provision a Cloudflare D1 database.
const memDb = {
  user: [] as Record<string, unknown>[],
  session: [] as Record<string, unknown>[],
  account: [] as Record<string, unknown>[],
  verification: [] as Record<string, unknown>[],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createAuth(d1?: any, overrides?: { secret?: string }) {
  // Resolve secret at call time — Cloudflare secrets are NOT in process.env at
  // module load time; they must be passed in from the request handler context.
  const secret =
    overrides?.secret ??
    process.env.BETTER_AUTH_SECRET ??
    "dev-secret-change-in-production";

  const baseURL =
    process.env.BETTER_AUTH_URL ??
    process.env.NEXT_PUBLIC_APP_URL ??
    "http://localhost:3000";

  const config = {
    secret,
    baseURL,
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
    },
    session: {
      cookieCache: {
        enabled: true,
        maxAge: 60 * 5,
      },
    },
  };

  if (d1) {
    return betterAuth({
      ...config,
      database: kyselyAdapter(
        new Kysely({ dialect: new D1Dialect({ database: d1 }) }),
        { type: "sqlite" }
      ),
    });
  }

  return betterAuth({
    ...config,
    database: memoryAdapter(memDb),
  });
}

// Singleton kept only for type inference (`Session`/`User` below) — do NOT use
// its `.api` for real session checks, it has no D1 binding and reads from an
// empty in-memory store. Use `getServerSession` instead.
export const auth = createAuth();

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;

// Resolves the D1-backed auth instance (matching the one used by the sign-in
// route handler) and returns the current session, for use in server
// components and route handlers outside of /api/auth/[...all].
export async function getServerSession(headers: Headers) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let d1: any = undefined;
  let secret: string | undefined;
  try {
    const ctx = await getCloudflareContext({ async: true });
    const env = ctx.env as Record<string, unknown>;
    d1 = env.DB;
    if (typeof env.BETTER_AUTH_SECRET === "string" && env.BETTER_AUTH_SECRET.length > 0) {
      secret = env.BETTER_AUTH_SECRET;
    }
    if (d1) await ensureTables(d1);
  } catch { /* local dev — no CF context */ }

  return createAuth(d1, { secret }).api.getSession({ headers });
}
