# Deploying LeasePlain to Cloudflare Pages

## Prerequisites

- [Cloudflare account](https://dash.cloudflare.com)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/): `npm install -g wrangler`
- Node.js 18+
- Anthropic API key from [console.anthropic.com](https://console.anthropic.com)
- Stripe account from [dashboard.stripe.com](https://dashboard.stripe.com)

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

Copy the `database_id` from the output into `wrangler.toml`, then apply the schema:

```bash
wrangler d1 execute leaseplain-db --file=db/schema.sql
```

---

## Step 3 — Create an R2 Bucket

```bash
wrangler r2 bucket create leaseplain-pdfs
```

---

## Step 4 — Set All Secrets

```bash
# AI
wrangler secret put ANTHROPIC_API_KEY

# Auth — generate with: openssl rand -base64 32
wrangler secret put BETTER_AUTH_SECRET

# GitHub OAuth (create at github.com/settings/developers)
# Callback URL: https://leaseplain.com/api/auth/callback/github
wrangler secret put GITHUB_CLIENT_ID
wrangler secret put GITHUB_CLIENT_SECRET

# Google OAuth (create at console.cloud.google.com)
# Callback URL: https://leaseplain.com/api/auth/callback/google
wrangler secret put GOOGLE_CLIENT_ID
wrangler secret put GOOGLE_CLIENT_SECRET

# Stripe (get from dashboard.stripe.com/test/apikeys)
wrangler secret put STRIPE_SECRET_KEY
wrangler secret put STRIPE_WEBHOOK_SECRET

# Stripe Price IDs (create products at dashboard.stripe.com/test/products)
wrangler secret put STRIPE_PRO_PRICE_ID   # $9/month product
wrangler secret put STRIPE_TEAM_PRICE_ID  # $29/month product
```

---

## Step 5 — Set Up Stripe Products

1. Go to **Stripe Dashboard → Products → Add product**
2. Create a **Pro** product: $9/month recurring → copy the Price ID
3. Create a **Team** product: $29/month recurring → copy the Price ID
4. Set both as secrets via `wrangler secret put`

### Stripe Webhook

Register your webhook endpoint in Stripe Dashboard:

- Endpoint URL: `https://leaseplain.com/api/stripe/webhook`
- Events to listen for:
  - `checkout.session.completed`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`

Copy the webhook signing secret → `wrangler secret put STRIPE_WEBHOOK_SECRET`

---

## Step 6 — Connect GitHub to Cloudflare Pages

1. Go to [Cloudflare Dashboard → Pages](https://dash.cloudflare.com/) → **Create a project**
2. Connect `jongeric/Leaseplain`
3. Build configuration:
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
4. Add environment variable in the Pages dashboard:
   - `NEXT_PUBLIC_APP_URL` = `https://leaseplain.com`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = your Stripe publishable key
5. Add D1 and R2 bindings under **Settings → Functions → Bindings**

---

## Step 7 — Custom Domain

In Cloudflare Pages dashboard → **Custom domains** → add `leaseplain.com`.
DNS managed by Cloudflare gets automatic SSL.

---

## Step 8 — Deploy

Cloudflare Pages auto-deploys on push to `main`. Or manually:

```bash
npm run build
wrangler pages deploy .next
```

---

## Local Development

```bash
cp .env.example .env.local
# Fill in at minimum: BETTER_AUTH_SECRET (any string locally)
# Optionally: ANTHROPIC_API_KEY for real analysis
# Skip Stripe keys to stay in mock payment mode
npm run dev
```

App runs at `http://localhost:3000`. All features work without real API keys:
- Auth works with email/password (social logins require OAuth app credentials)
- Analysis falls back to realistic mock data
- Stripe falls back to mock checkout/portal URLs

---

## OAuth Setup for Local Dev

### GitHub OAuth App
1. Go to github.com/settings/developers → **New OAuth App**
2. Homepage URL: `http://localhost:3000`
3. Callback URL: `http://localhost:3000/api/auth/callback/github`
4. Copy Client ID and Secret → add to `.env.local`

### Google OAuth App
1. Go to console.cloud.google.com → **Credentials → OAuth 2.0 Client IDs**
2. Authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
3. Copy Client ID and Secret → add to `.env.local`
