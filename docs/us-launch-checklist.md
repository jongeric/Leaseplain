# US Launch Checklist

The US beachhead content (California, New York, Texas, Florida, Illinois + four
by-state comparison hubs) is built and deployed **behind `noindex`**. This is the
sequence to take it live once the legal review clears. Nothing here should ship
until step 1 is signed off.

## Beachhead inventory (all currently `robots: noindex, follow`)

State pages
- `app/united-states/california/page.tsx`
- `app/united-states/new-york/page.tsx`
- `app/united-states/florida/page.tsx`
- `app/united-states/texas/page.tsx`
- `app/united-states/illinois/page.tsx`
- `app/united-states/page.tsx` (US hub)
- `app/united-states/california/los-angeles/page.tsx`
- `app/united-states/new-york/new-york-city/page.tsx`
- `app/united-states/florida/miami/page.tsx`

By-state comparison hubs
- `app/united-states/security-deposit-limits-by-state/page.tsx`
- `app/united-states/rent-control-by-state/page.tsx`
- `app/united-states/eviction-notice-periods-by-state/page.tsx`
- `app/united-states/landlord-entry-rules-by-state/page.tsx`

## 1. Legal review (prerequisite — do not skip)
- Have a licensed US attorney (or per-state counsel) review every page.
- Each figure is tied to a named statute to make this fast — check against:
  - CA: Civ. Code §§ 1947.12 (AB 1482), 1950.5 (AB 12), 1954; CCP § 1161.
  - NY: Gen. Oblig. Law § 7-108; RPAPL § 711; RPL § 226-c; Rent Stabilization Law / HSTPA.
  - TX: Tex. Prop. Code §§ 92.101–92.109, 24.005; Loc. Gov't Code § 214.902.
  - FL: Fla. Stat. §§ 83.49, 83.53, 83.56; 2023 preemption (§ 125.0103).
  - IL: 765 ILCS 710 / 715; 50 ILCS 825; Forcible Entry & Detainer Act; Chicago RLTO.
- Confirm the "general information, not legal advice" disclaimer wording is adequate
  for US/UPL exposure.

## 2. Flip to indexable
- Remove `robots: { index: false, follow: true }` from every file in the inventory above.
- Decide the "AI Analysis Coming Soon" badge per page: keep it while the US analyzer
  isn't live (honest), or remove once US analysis ships. Do **not** claim US lease
  analysis works until it does.

## 3. Add to the sitemap (`app/sitemap.ts`)
Add to both `LAST_MODIFIED` and the `url(...)` list (only after they're indexable —
noindexed URLs should not be in the sitemap):
- the 5 state pages + 3 city pages + US hub
- the 4 comparison hubs (priority 0.8, monthly)

## 4. US Q&A set (drafted, held)
- 18 answers are drafted in `lib/usAnswers.ts` (exported as `US_ANSWERS`) covering
  rent increases, deposit limits, landlord entry, and eviction notice for CA/NY/TX/FL/IL.
- The file is imported nowhere, so it renders no pages and can't be indexed while held.
- At launch: merge `US_ANSWERS` into `ANSWERS` in `lib/answers.ts` (or wire a dedicated
  US answers route), then add each slug to `app/sitemap.ts`. They can't carry per-page
  `noindex`, which is why they were kept out of the live index until now.

## 5. Entry points & navigation
- Footer already links `/united-states`. Consider adding a US item to the Navbar
  Locations dropdown and a US card to the homepage "Free Tools & Cross-Canada Data"
  strip (rename to reflect US + Canada).
- Keep US and Canada as distinct internal-link clusters so they don't dilute each other.

## 6. OG images
- The comparison hubs use default OG. Generate static cards if desired (extend the
  existing OG generator pattern) for better social/AEO presentation.

## 7. Post-launch in Google Search Console
- Resubmit `sitemap.xml`.
- URL-inspect + Request Indexing on the 5 state pages and 4 hubs.
- Watch the US rows in the Performance report (there's already latent US demand —
  ~12.8k impressions/6 mo while noindexed).

## 8. Ongoing accuracy discipline
- US figures change yearly. Set a recurring review:
  - CA AB 1482 cap (CPI-linked) and any new tenant-protection laws.
  - NY Rent Guidelines Board annual increase.
  - FL/TX/IL preemption status and any new statutes.
- Keep each page's "last reviewed" date current when you verify.

## Next content (after launch)
- Expand the beachhead: Washington, Georgia, Pennsylvania.
- City pages for top metros (Houston, Dallas, Chicago RLTO, SF, San Diego).
- A US tenant-lawyer directory mirroring `/tenant-lawyer`.
- Port the generator (`scripts/gen-province-posts` → a state version) for scale.
