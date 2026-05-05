# LeasePlain

**Understand your residential lease in plain English — before you sign.**

LeasePlain is an AI-powered SaaS web app where users upload a lease PDF or paste lease text and receive a structured, plain-English analysis. Not legal advice.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| AI | Claude API (Anthropic) |
| Database | Cloudflare D1 |
| File Storage | Cloudflare R2 |
| Deployment | Cloudflare Pages |
| Payments | Stripe (placeholder — mocked for MVP) |

---

## Features

- Paste lease text or upload a PDF
- AI-powered analysis via Claude (falls back to mock data without API key)
- Structured report with 6 sections:
  1. Plain-English Summary
  2. Key Financial Terms
  3. Red Flags (with severity levels)
  4. Unclear or Missing Clauses
  5. Questions to Ask Before Signing
  6. Tenant-Friendly Negotiation Suggestions
- Analysis history saved in Cloudflare D1
- PDF storage in Cloudflare R2
- Stripe-ready subscription structure
- Mobile-responsive UI

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page |
| `/login` | Login / signup placeholder |
| `/dashboard` | Analysis history |
| `/upload` | Upload or paste a lease |
| `/analysis/[id]` | Analysis result page |
| `/pricing` | Pricing plans |

---

## Local Development

```bash
# 1. Clone and install
git clone https://github.com/jongeric/leaseplain.git
cd leaseplain
npm install

# 2. Set up environment
cp .env.example .env.local
# Add ANTHROPIC_API_KEY to .env.local (optional — app uses mock data without it)

# 3. Run dev server
npm run dev
```

App runs at `http://localhost:3000`.

**No API key needed for development** — the app uses realistic mock analysis data automatically when `ANTHROPIC_API_KEY` is not set.

---

## Database

Schema is in `db/schema.sql`. See `DEPLOYMENT.md` for full Cloudflare D1 setup.

---

## Deployment

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for full step-by-step Cloudflare Pages deployment instructions including D1, R2, secrets, and custom domain setup.

---

## Disclaimer

LeasePlain is not a law firm and does not provide legal advice. All analysis is for informational purposes only. Always consult a licensed attorney before signing any lease agreement.
