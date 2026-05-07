import { betterAuth } from "better-auth";
import { memoryAdapter } from "@better-auth/memory-adapter";
import { kyselyAdapter } from "@better-auth/kysely-adapter";
import { Kysely } from "kysely";
import { D1Dialect } from "kysely-d1";

const AUTH_CONFIG = {
  secret: process.env.BETTER_AUTH_SECRET ?? "dev-secret-change-in-production",
  baseURL: process.env.BETTER_AUTH_URL ?? process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",

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

  user: {
    additionalFields: {
      plan: {
        type: "string" as const,
        defaultValue: "free",
        input: false,
      },
      stripeCustomerId: {
        type: "string" as const,
        required: false,
        input: false,
      },
    },
  },
} as const;

// In-memory store for dev / non-D1 environments.
// Data is ephemeral — for production, provision a Cloudflare D1 database.
const memDb = {
  user: [] as Record<string, unknown>[],
  session: [] as Record<string, unknown>[],
  account: [] as Record<string, unknown>[],
  verification: [] as Record<string, unknown>[],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createAuth(d1?: any) {
  if (d1) {
    return betterAuth({
      ...AUTH_CONFIG,
      database: kyselyAdapter(
        new Kysely({ dialect: new D1Dialect({ database: d1 }) }),
        { type: "sqlite" }
      ),
    });
  }

  return betterAuth({
    ...AUTH_CONFIG,
    database: memoryAdapter(memDb),
  });
}

// Singleton used by server components / middleware for session checks.
// The route handler creates its own instance with the D1 binding when available.
export const auth = createAuth();

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
