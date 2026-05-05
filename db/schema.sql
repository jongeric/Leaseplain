-- LeasePlain — Cloudflare D1 Schema
-- Apply with: wrangler d1 execute leaseplain-db --file=db/schema.sql

-- ─── better-auth tables ──────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS user (
  id                TEXT PRIMARY KEY,
  name              TEXT NOT NULL,
  email             TEXT NOT NULL UNIQUE,
  email_verified    INTEGER NOT NULL DEFAULT 0,
  image             TEXT,
  plan              TEXT NOT NULL DEFAULT 'free',
  stripe_customer_id TEXT,
  created_at        TEXT NOT NULL,
  updated_at        TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS session (
  id          TEXT PRIMARY KEY,
  expires_at  TEXT NOT NULL,
  token       TEXT NOT NULL UNIQUE,
  ip_address  TEXT,
  user_agent  TEXT,
  user_id     TEXT NOT NULL,
  created_at  TEXT NOT NULL,
  updated_at  TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS account (
  id                      TEXT PRIMARY KEY,
  account_id              TEXT NOT NULL,
  provider_id             TEXT NOT NULL,
  user_id                 TEXT NOT NULL,
  access_token            TEXT,
  refresh_token           TEXT,
  id_token                TEXT,
  access_token_expires_at TEXT,
  refresh_token_expires_at TEXT,
  scope                   TEXT,
  password                TEXT,
  created_at              TEXT NOT NULL,
  updated_at              TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS verification (
  id          TEXT PRIMARY KEY,
  identifier  TEXT NOT NULL,
  value       TEXT NOT NULL,
  expires_at  TEXT NOT NULL,
  created_at  TEXT,
  updated_at  TEXT
);

-- ─── LeasePlain tables ────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS analyses (
  id          TEXT PRIMARY KEY,
  user_id     TEXT,
  filename    TEXT,
  pdf_key     TEXT,
  raw_text    TEXT,
  result_json TEXT NOT NULL,
  created_at  TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_analyses_user_id ON analyses(user_id);
CREATE INDEX IF NOT EXISTS idx_analyses_created_at ON analyses(created_at DESC);

CREATE TABLE IF NOT EXISTS subscriptions (
  id                     TEXT PRIMARY KEY,
  user_id                TEXT NOT NULL UNIQUE,
  stripe_subscription_id TEXT,
  plan                   TEXT NOT NULL DEFAULT 'free',
  status                 TEXT NOT NULL DEFAULT 'active',
  current_period_start   TEXT,
  current_period_end     TEXT,
  created_at             TEXT NOT NULL,
  updated_at             TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);
