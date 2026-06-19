// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function ensureTables(d1: any): Promise<void> {
  const stmts = [
    `CREATE TABLE IF NOT EXISTS user (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      emailVerified INTEGER NOT NULL DEFAULT 0,
      image TEXT,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL,
      plan TEXT NOT NULL DEFAULT 'free',
      stripeCustomerId TEXT
    )`,
    `CREATE TABLE IF NOT EXISTS session (
      id TEXT PRIMARY KEY,
      token TEXT NOT NULL UNIQUE,
      expiresAt TEXT NOT NULL,
      ipAddress TEXT,
      userAgent TEXT,
      userId TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL
    )`,
    `CREATE TABLE IF NOT EXISTS account (
      id TEXT PRIMARY KEY,
      accountId TEXT NOT NULL,
      providerId TEXT NOT NULL,
      userId TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
      accessToken TEXT,
      refreshToken TEXT,
      idToken TEXT,
      accessTokenExpiresAt TEXT,
      refreshTokenExpiresAt TEXT,
      scope TEXT,
      password TEXT,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL
    )`,
    `CREATE TABLE IF NOT EXISTS verification (
      id TEXT PRIMARY KEY,
      identifier TEXT NOT NULL,
      value TEXT NOT NULL,
      expiresAt TEXT NOT NULL,
      createdAt TEXT,
      updatedAt TEXT
    )`,
    `CREATE TABLE IF NOT EXISTS analyses (
      id TEXT PRIMARY KEY,
      user_id TEXT,
      filename TEXT,
      raw_text TEXT,
      result_json TEXT NOT NULL,
      created_at TEXT NOT NULL
    )`,
    `CREATE TABLE IF NOT EXISTS subscriptions (
      user_id TEXT PRIMARY KEY,
      stripe_customer_id TEXT NOT NULL,
      stripe_subscription_id TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'active',
      updated_at TEXT NOT NULL
    )`,
  ];

  for (const sql of stmts) {
    await d1.prepare(sql).run();
  }

  // CREATE TABLE IF NOT EXISTS is a no-op against a table created by an
  // earlier schema version, so columns added later (e.g. plan,
  // stripeCustomerId) never get backfilled — every insert referencing them
  // then fails. Add any columns that are missing from existing tables.
  await ensureColumns(d1, "user", [
    { name: "plan", ddl: "plan TEXT NOT NULL DEFAULT 'free'" },
    { name: "stripeCustomerId", ddl: "stripeCustomerId TEXT" },
  ]);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function ensureColumns(d1: any, table: string, columns: { name: string; ddl: string }[]): Promise<void> {
  const info = await d1.prepare(`PRAGMA table_info(${table})`).all();
  const existing = new Set((info.results as { name: string }[]).map((r) => r.name));
  for (const col of columns) {
    if (!existing.has(col.name)) {
      await d1.prepare(`ALTER TABLE ${table} ADD COLUMN ${col.ddl}`).run();
    }
  }
}
