import { NextRequest, NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const result: Record<string, unknown> = {};

  // Only allow from same origin or with a secret param to prevent abuse
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  if (token !== "lp-debug-2026") {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let d1: any = null;
  try {
    const ctx = await getCloudflareContext({ async: true });
    d1 = (ctx.env as Record<string, unknown>).DB ?? null;
    result.d1_bound = !!d1;
    result.better_auth_secret_in_env = !!(ctx.env as Record<string, unknown>).BETTER_AUTH_SECRET;
  } catch (e) {
    result.d1_bound = false;
    result.cf_context_error = String(e);
  }

  if (!d1) {
    result.auth_mode = "memoryAdapter — accounts are lost on Worker restart";
    return NextResponse.json(result);
  }

  result.auth_mode = "D1";

  try {
    const userCols = await d1.prepare("PRAGMA table_info(user)").all();
    result.user_columns = (userCols.results as { name: string; type: string; notnull: number; dflt_value: unknown }[]);
  } catch (e) {
    result.user_columns_error = String(e);
  }

  try {
    const accountCols = await d1.prepare("PRAGMA table_info(account)").all();
    result.account_columns = (accountCols.results as { name: string; type: string; notnull: number; dflt_value: unknown }[]);
  } catch (e) {
    result.account_columns_error = String(e);
  }

  try {
    const userCount = await d1
      .prepare("SELECT COUNT(*) as n FROM user")
      .first() as { n: number } | null;
    result.user_count = userCount?.n ?? 0;
  } catch (e) {
    result.user_table_error = String(e);
  }

  try {
    const accountCount = await d1
      .prepare("SELECT COUNT(*) as n FROM account")
      .first() as { n: number } | null;
    result.account_count = accountCount?.n ?? 0;
  } catch (e) {
    result.account_table_error = String(e);
  }

  // Check if the queried email exists (pass ?email=... param)
  const email = url.searchParams.get("email");
  if (email) {
    try {
      const user = await d1
        .prepare("SELECT id, email, createdAt FROM user WHERE email = ? LIMIT 1")
        .bind(email.toLowerCase())
        .first() as { id: string; email: string; createdAt: string } | null;
      result.email_exists = !!user;
      if (user) {
        result.user_created_at = user.createdAt;
        const account = await d1
          .prepare("SELECT id, providerId FROM account WHERE userId = ? LIMIT 1")
          .bind(user.id)
          .first() as { id: string; providerId: string } | null;
        result.account_record_exists = !!account;
        result.account_provider = account?.providerId ?? null;
      }
    } catch (e) {
      result.email_check_error = String(e);
    }
  }

  // Pass ?action=test_insert to attempt a throwaway user insert and surface
  // the real underlying D1 error (better-auth swallows it as a generic
  // "Failed to create user" message).
  if (url.searchParams.get("action") === "test_insert") {
    const id = `debug-${Date.now()}`;
    const now = new Date().toISOString();
    try {
      await d1
        .prepare(
          `INSERT INTO user (id, name, email, emailVerified, createdAt, updatedAt, plan)
           VALUES (?, ?, ?, ?, ?, ?, ?)`
        )
        .bind(id, "Debug Probe", `${id}@debug.local`, 0, now, now, "free")
        .run();
      result.test_insert_ok = true;
      await d1.prepare("DELETE FROM user WHERE id = ?").bind(id).run();
    } catch (e) {
      result.test_insert_error = String(e);
    }
  }

  return NextResponse.json(result);
}
