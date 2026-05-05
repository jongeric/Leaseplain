# Deploying LeasePlain to Cloudflare Pages

## Prerequisites

- [Cloudflare account](https://dash.cloudflare.com)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/): `npm install -g wrangler`
- Node.js 18+
- Anthropic API key from [console.anthropic.com](https://console.anthropic.com)

---

## Step 1 — Authenticate with Cloudflare

```bash
wrangler login
```

---

## Step 2 — Create a D1 Database

```bash
wrangler d1 create leaseplain-db
```

Copy the `database_id` from the output and paste it into `wrangler.toml`:

```toml
[[d1_databases]]
binding = "DB"
database_name = "leaseplain-db"
database_id = "PASTE_YOUR_ID_HERE"
```

Apply the schema:

```bash
wrangler d1 execute leaseplain-db --file=db/schema.sql
```

---

## Step 3 — Create an R2 Bucket

```bash
wrangler r2 bucket create leaseplain-pdfs
```

The bucket binding is already configured in `wrangler.toml` as `LEASE_BUCKET`.

---

## Step 4 — Set Secrets

```bash
wrangler secret put ANTHROPIC_API_KEY
# Paste your Anthropic API key when prompted
```

---

## Step 5 — Connect GitHub to Cloudflare Pages

1. Go to [Cloudflare Dashboard → Pages](https://dash.cloudflare.com/) → **Create a project**
2. Connect your GitHub repository (`jongeric/leaseplain`)
3. Set the build configuration:
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
4. Add environment variables in the Cloudflare Pages dashboard:
   - `NEXT_PUBLIC_APP_URL` = `https://leaseplain.com`
5. Add D1 and R2 bindings under **Settings → Functions → Bindings**

---

## Step 6 — Deploy

Push to the `main` branch — Cloudflare Pages auto-deploys on every push.

Or deploy manually:

```bash
npm run build
wrangler pages deploy .next
```

---

## Local Development

```bash
cp .env.example .env.local
# Optionally add ANTHROPIC_API_KEY to .env.local for real Claude analysis
npm run dev
```

App runs at `http://localhost:3000`. Without `ANTHROPIC_API_KEY`, the app uses
mock analysis data — perfect for building and testing the UI.

---

## Stripe Integration (Future)

When ready to enable payments:

1. Create products in the [Stripe Dashboard](https://dashboard.stripe.com)
2. Add secrets:
   ```bash
   wrangler secret put STRIPE_SECRET_KEY
   wrangler secret put STRIPE_WEBHOOK_SECRET
   ```
3. Add `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` as a Pages env variable
4. Replace the mock payment CTAs in `/pricing` with real Stripe Checkout sessions

---

## Custom Domain

In the Cloudflare Pages dashboard → **Custom domains** → add `leaseplain.com`.
Make sure your DNS is managed by Cloudflare for automatic SSL.
