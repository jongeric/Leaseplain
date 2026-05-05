-- LeasePlain — Cloudflare D1 Schema
-- Apply with: wrangler d1 execute leaseplain-db --file=db/schema.sql

-- Users table (stub for future auth integration)
CREATE TABLE IF NOT EXISTS users (
  id          TEXT PRIMARY KEY,
  email       TEXT UNIQUE NOT NULL,
  name        TEXT,
  plan        TEXT NOT NULL DEFAULT 'free',  -- 'free' | 'pro' | 'team'
  stripe_customer_id TEXT,
  created_at  TEXT NOT NULL,
  updated_at  TEXT NOT NULL
);

-- Analyses table — stores each lease analysis result
CREATE TABLE IF NOT EXISTS analyses (
  id          TEXT PRIMARY KEY,
  user_id     TEXT,                        -- NULL for guest/unauthenticated
  filename    TEXT,                        -- original uploaded filename
  pdf_key     TEXT,                        -- R2 object key for the uploaded PDF
  raw_text    TEXT,                        -- extracted/pasted lease text
  result_json TEXT NOT NULL,              -- full JSON of the LeaseAnalysis object
  created_at  TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Index for fast user-based history queries
CREATE INDEX IF NOT EXISTS idx_analyses_user_id ON analyses(user_id);
CREATE INDEX IF NOT EXISTS idx_analyses_created_at ON analyses(created_at DESC);

-- Subscriptions table (Stripe-ready)
CREATE TABLE IF NOT EXISTS subscriptions (
  id                   TEXT PRIMARY KEY,
  user_id              TEXT NOT NULL UNIQUE,
  stripe_subscription_id TEXT,
  plan                 TEXT NOT NULL DEFAULT 'free',
  status               TEXT NOT NULL DEFAULT 'active',  -- 'active' | 'canceled' | 'past_due'
  current_period_start TEXT,
  current_period_end   TEXT,
  created_at           TEXT NOT NULL,
  updated_at           TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
