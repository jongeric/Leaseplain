-- LeasePlain — Seed data for local development / testing
-- Apply with: wrangler d1 execute leaseplain-db --file=db/seed.sql

INSERT OR IGNORE INTO users (id, email, name, plan, created_at, updated_at)
VALUES (
  'user_dev_001',
  'dev@leaseplain.com',
  'Dev User',
  'pro',
  datetime('now'),
  datetime('now')
);
