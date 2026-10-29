// US Q&A answers for the 8-state beachhead (CA/NY/TX/FL/IL/WA/GA/PA).
// Merged into ANSWERS via lib/answers.ts, so these render at /answers/<slug>.
// Figures verified against state statutes (Oct 2026). General information,
// not legal advice.

import type { AnswerDef } from "./answers";

export const US_ANSWERS: AnswerDef[] = [
  // ─── California ──────────────────────────────────────────────────────────
  {
    slug: "how-much-can-my-landlord-raise-rent-in-california",
    question: "How much can my landlord raise rent in California?",
    category: "Rent",
    shortAnswer:
      "For most covered units, no more than 5% plus the local CPI, with a hard maximum of 10% per year, under AB 1482. Stricter local rent control (Los Angeles, San Francisco, Oakland) can set a lower cap. Buildings under 15 years old and most single-family homes are exempt.",
    blocks: [
      { type: "p", text: "AB 1482 (the Tenant Protection Act of 2019) caps annual increases statewide and limits them to one increase in 12 months. The cap is 5% plus the regional CPI, never exceeding 10% total." },
      { type: "p", text: "If your unit is exempt from AB 1482 — a newer building or a single-family home not owned by a corporation — a local rent-control ordinance may still apply, so check your city's rules." },
    ],
    related: [
      { label: "California tenant rights", href: "/united-states/california" },
      { label: "Rent control by state", href: "/united-states/rent-control-by-state" },
    ],
    keywords: ["how much can landlord raise rent california", "california rent cap", "ab 1482 rent increase"],
  },
  {
    slug: "what-is-the-security-deposit-limit-in-california",
    question: "What is the security deposit limit in California?",
    category: "Deposits",
    shortAnswer:
      "As of July 1, 2024, AB 12 caps security deposits at one month's rent for all units, with a limited exception for qualifying small landlords (natural persons who own two or fewer properties with four or fewer units) who may charge up to two months. The deposit must be returned within 21 days with an itemized statement.",
    blocks: [
      { type: "p", text: "Before AB 12, California allowed up to two months (unfurnished) or three months (furnished). The new one-month cap applies to furnished and unfurnished units alike." },
    ],
    related: [
      { label: "California tenant rights", href: "/united-states/california" },
      { label: "Security deposit limits by state", href: "/united-states/security-deposit-limits-by-state" },
    ],
    keywords: ["california security deposit limit", "ab 12 deposit cap", "security deposit california"],
  },
  {
    slug: "can-my-landlord-enter-without-notice-in-california",
    question: "Can my landlord enter without notice in California?",
    category: "Privacy",
    shortAnswer:
      "No. Under California Civil Code § 1954, a landlord must give at least 24 hours' written notice before entering for repairs, inspections, or showings, and must enter during normal business hours. No notice is required for a genuine emergency or if you consent at the time.",
    blocks: [
      { type: "p", text: "The notice must state the reason and a reasonable date and time. Repeated entry without proper notice can breach your right to quiet enjoyment — keep a log." },
    ],
    related: [
      { label: "Landlord entry rules by state", href: "/united-states/landlord-entry-rules-by-state" },
      { label: "California tenant rights", href: "/united-states/california" },
    ],
    keywords: ["can my landlord enter without notice california", "california 24 hour notice", "civil code 1954"],
  },
  {
    slug: "how-much-notice-to-evict-in-california",
    question: "How much notice does a landlord have to give to evict in California?",
    category: "Eviction",
    shortAnswer:
      "For non-payment of rent, a 3-day notice to pay or quit (excluding weekends and holidays). To end a month-to-month tenancy, 30 days if you've lived there under a year and 60 days if a year or more. Covered tenants of 12+ months can only be removed for 'just cause' under AB 1482.",
    blocks: [
      { type: "p", text: "A notice is not an eviction. If you don't move or pay, the landlord must file an unlawful-detainer case and win before you can be removed; only a sheriff can carry out the eviction." },
    ],
    related: [
      { label: "Eviction notice periods by state", href: "/united-states/eviction-notice-periods-by-state" },
      { label: "California tenant rights", href: "/united-states/california" },
    ],
    keywords: ["how much notice to evict california", "3 day notice california", "just cause eviction california"],
  },

  // ─── New York ────────────────────────────────────────────────────────────
  {
    slug: "how-much-can-my-landlord-raise-rent-in-new-york",
    question: "How much can my landlord raise rent in New York?",
    category: "Rent",
    shortAnswer:
      "It depends on whether your unit is rent-stabilized. Rent-stabilized units (about one million in NYC, plus ETPA municipalities) can only rise by the percentage the Rent Guidelines Board sets each year. Market-rate units have no cap, but a landlord must give 30–90 days' notice for an increase of 5% or more.",
    blocks: [
      { type: "p", text: "Under the 2019 HSTPA, for a market-rate tenant a landlord must give 30 days' notice (tenancy under a year), 60 days (1–2 years), or 90 days (2+ years) before raising rent 5% or more or not renewing." },
    ],
    related: [
      { label: "New York tenant rights", href: "/united-states/new-york" },
      { label: "Rent control by state", href: "/united-states/rent-control-by-state" },
    ],
    keywords: ["how much can landlord raise rent new york", "nyc rent stabilization increase", "rent guidelines board"],
  },
  {
    slug: "what-is-the-security-deposit-limit-in-new-york",
    question: "What is the security deposit limit in New York?",
    category: "Deposits",
    shortAnswer:
      "One month's rent. Since the 2019 HSTPA, a New York landlord cannot collect more than one month as a security deposit, and must return it within 14 days of move-out with an itemized statement of any deductions.",
    blocks: [
      { type: "p", text: "If the landlord misses the 14-day deadline, they generally forfeit the right to keep any of the deposit (N.Y. Gen. Oblig. Law § 7-108)." },
    ],
    related: [
      { label: "New York tenant rights", href: "/united-states/new-york" },
      { label: "Security deposit limits by state", href: "/united-states/security-deposit-limits-by-state" },
    ],
    keywords: ["new york security deposit limit", "nyc security deposit law", "one month deposit new york"],
  },
  {
    slug: "can-my-landlord-enter-without-notice-in-new-york",
    question: "Can my landlord enter without notice in New York?",
    category: "Privacy",
    shortAnswer:
      "New York has no fixed statewide notice period, but a landlord must give reasonable advance notice (commonly treated as about 24 hours) and may enter only for a legitimate reason at a reasonable time — never without cause. Your lease or a local rule (such as in New York City) may set specifics, and emergencies are the exception.",
    blocks: [
      { type: "p", text: "Because there's no hard statutory number, get the notice requirement written into your lease and ask for notice in writing. A landlord who enters repeatedly without reasonable notice can breach your right to quiet enjoyment." },
    ],
    related: [
      { label: "Landlord entry rules by state", href: "/united-states/landlord-entry-rules-by-state" },
      { label: "New York tenant rights", href: "/united-states/new-york" },
    ],
    keywords: ["can my landlord enter without notice new york", "new york landlord entry", "nyc landlord notice to enter"],
  },
  {
    slug: "how-much-notice-to-evict-in-new-york",
    question: "How much notice does a landlord have to give to evict in New York?",
    category: "Eviction",
    shortAnswer:
      "For non-payment, a 14-day demand for rent. To end a month-to-month tenancy or not renew, 30 days' notice (tenancy under a year), 60 days (1–2 years), or 90 days (2+ years) under the HSTPA. A notice is only the first step — the landlord must still win a court case to evict.",
    blocks: [
      { type: "p", text: "Some New York localities have added 'good cause' eviction protections; statewide there is no general just-cause requirement, but the long notice periods give longer-term tenants real time." },
    ],
    related: [
      { label: "Eviction notice periods by state", href: "/united-states/eviction-notice-periods-by-state" },
      { label: "New York tenant rights", href: "/united-states/new-york" },
    ],
    keywords: ["how much notice to evict new york", "14 day notice new york", "90 day notice nyc"],
  },

  // ─── Texas ───────────────────────────────────────────────────────────────
  {
    slug: "how-much-can-my-landlord-raise-rent-in-texas",
    question: "How much can my landlord raise rent in Texas?",
    category: "Rent",
    shortAnswer:
      "There's no limit. Texas has no rent control, and state law bars cities from enacting it except in a declared housing emergency. During a fixed-term lease the rent can't change, but at renewal or on a month-to-month tenancy a landlord can raise it by any amount with proper notice.",
    blocks: [
      { type: "p", text: "Your protection in Texas is the lease: the rent is locked for the term, and a month-to-month increase requires advance written notice (commonly 30 days, or whatever the lease states)." },
    ],
    related: [
      { label: "Texas tenant rights", href: "/united-states/texas" },
      { label: "Rent control by state", href: "/united-states/rent-control-by-state" },
    ],
    keywords: ["how much can landlord raise rent texas", "texas rent control", "rent increase texas"],
  },
  {
    slug: "what-is-the-security-deposit-limit-in-texas",
    question: "What is the security deposit limit in Texas?",
    category: "Deposits",
    shortAnswer:
      "Texas sets no cap on the deposit amount. The landlord must refund the deposit within 30 days of you surrendering the unit and giving a forwarding address. A landlord who keeps it in bad faith can owe three times the wrongfully withheld amount plus $100 and attorney's fees.",
    blocks: [
      { type: "p", text: "Give a written forwarding address — the 30-day clock and the landlord's duty to itemize depend on it (Tex. Prop. Code §§ 92.103–92.109)." },
    ],
    related: [
      { label: "Texas tenant rights", href: "/united-states/texas" },
      { label: "Security deposit limits by state", href: "/united-states/security-deposit-limits-by-state" },
    ],
    keywords: ["texas security deposit limit", "texas deposit return 30 days", "security deposit texas"],
  },
  {
    slug: "can-my-landlord-enter-without-notice-in-texas",
    question: "Can my landlord enter without notice in Texas?",
    category: "Privacy",
    shortAnswer:
      "Texas has no general statute setting an entry-notice period, so the lease controls. If your lease is silent, insist on reasonable advance notice in writing. A landlord still can't abuse entry to harass you, and self-help lockouts or utility shutoffs are illegal.",
    blocks: [
      { type: "p", text: "Because Texas law leaves routine entry to the lease, read that clause carefully before signing and negotiate a notice requirement if it's missing." },
    ],
    related: [
      { label: "Landlord entry rules by state", href: "/united-states/landlord-entry-rules-by-state" },
      { label: "Texas tenant rights", href: "/united-states/texas" },
    ],
    keywords: ["can my landlord enter without notice texas", "texas landlord entry", "landlord notice to enter texas"],
  },

  // ─── Florida ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-the-security-deposit-limit-in-florida",
    question: "What is the security deposit limit in Florida?",
    category: "Deposits",
    shortAnswer:
      "Florida sets no cap on the deposit amount. If the landlord makes no claim, they must return the full deposit within 15 days. If they intend to keep any of it, they must send written notice within 30 days or forfeit the claim (Fla. Stat. § 83.49).",
    blocks: [
      { type: "p", text: "A 2023 law also lets landlords offer an optional monthly fee in lieu of a deposit — read the terms, as that fee is usually non-refundable." },
    ],
    related: [
      { label: "Florida tenant rights", href: "/united-states/florida" },
      { label: "Security deposit limits by state", href: "/united-states/security-deposit-limits-by-state" },
    ],
    keywords: ["florida security deposit limit", "florida deposit return 15 days", "security deposit florida"],
  },
  {
    slug: "how-much-can-my-landlord-raise-rent-in-florida",
    question: "How much can my landlord raise rent in Florida?",
    category: "Rent",
    shortAnswer:
      "There's no limit. Florida has no rent control, and a 2023 state law bars local governments from adopting it. The rent is fixed during a lease term; for a month-to-month tenancy a landlord can raise it with at least 30 days' written notice before the next period.",
    blocks: [
      { type: "p", text: "Your protection is the lease and the notice rule — a landlord can't raise rent mid-term, and must give proper notice to change it at renewal or month-to-month." },
    ],
    related: [
      { label: "Florida tenant rights", href: "/united-states/florida" },
      { label: "Rent control by state", href: "/united-states/rent-control-by-state" },
    ],
    keywords: ["how much can landlord raise rent florida", "florida rent control", "rent increase florida"],
  },
  {
    slug: "can-my-landlord-enter-without-notice-in-florida",
    question: "Can my landlord enter without notice in Florida?",
    category: "Privacy",
    shortAnswer:
      "No. Under Fla. Stat. § 83.53, a landlord must give at least 12 hours' notice to enter for repairs, and may enter only between 7:30 a.m. and 8:00 p.m. Entry must be for a reasonable purpose, and emergencies are the exception.",
    blocks: [
      { type: "p", text: "Florida's 12-hour rule is shorter than many states', but it's firm — a landlord can't drop by at will or outside the permitted hours." },
    ],
    related: [
      { label: "Landlord entry rules by state", href: "/united-states/landlord-entry-rules-by-state" },
      { label: "Florida tenant rights", href: "/united-states/florida" },
    ],
    keywords: ["can my landlord enter without notice florida", "florida 12 hour notice", "landlord entry florida"],
  },

  // ─── Illinois ────────────────────────────────────────────────────────────
  {
    slug: "what-is-the-security-deposit-limit-in-illinois",
    question: "What is the security deposit limit in Illinois?",
    category: "Deposits",
    shortAnswer:
      "Illinois has no statewide cap on the deposit amount. For landlords with five or more units, the Security Deposit Return Act requires an itemized statement within 30 days and a refund within 45 days of move-out. Chicago's RLTO adds interest and stricter rules.",
    blocks: [
      { type: "p", text: "Where you rent matters: a Chicago tenant gets the RLTO's deposit-interest and penalty protections, while elsewhere in Illinois the thinner state statutes apply (765 ILCS 710 / 715)." },
    ],
    related: [
      { label: "Illinois tenant rights", href: "/united-states/illinois" },
      { label: "Security deposit limits by state", href: "/united-states/security-deposit-limits-by-state" },
    ],
    keywords: ["illinois security deposit limit", "chicago security deposit", "security deposit illinois"],
  },
  {
    slug: "how-much-can-my-landlord-raise-rent-in-illinois",
    question: "How much can my landlord raise rent in Illinois?",
    category: "Rent",
    shortAnswer:
      "There's no limit. Illinois has no rent control, and the Rent Control Preemption Act bars its cities from enacting it. The rent is fixed during a lease; for a month-to-month tenancy a landlord can raise it with at least 30 days' written notice.",
    blocks: [
      { type: "p", text: "Repeal of the preemption has been proposed repeatedly but hasn't passed, so no Illinois city — including Chicago — currently has rent control." },
    ],
    related: [
      { label: "Illinois tenant rights", href: "/united-states/illinois" },
      { label: "Rent control by state", href: "/united-states/rent-control-by-state" },
    ],
    keywords: ["how much can landlord raise rent illinois", "illinois rent control", "rent increase chicago"],
  },
  {
    slug: "how-much-notice-to-evict-in-illinois",
    question: "How much notice does a landlord have to give to evict in Illinois?",
    category: "Eviction",
    shortAnswer:
      "A 5-day written notice for non-payment of rent and a 10-day notice for a lease violation, after which the landlord must file a court case under the Forcible Entry and Detainer Act. To end a month-to-month tenancy, 30 days' notice. Only a court can order an eviction — lockouts are illegal.",
    blocks: [
      { type: "p", text: "Chicago's RLTO adds cure rights and other protections, so a Chicago tenant may have more room to fix a non-payment or defend an eviction than one elsewhere in the state." },
    ],
    related: [
      { label: "Eviction notice periods by state", href: "/united-states/eviction-notice-periods-by-state" },
      { label: "Illinois tenant rights", href: "/united-states/illinois" },
    ],
    keywords: ["how much notice to evict illinois", "5 day notice illinois", "chicago eviction notice"],
  },

  // ─── Washington ──────────────────────────────────────────────────────────
  {
    slug: "how-much-can-my-landlord-raise-rent-in-washington",
    question: "How much can my landlord raise rent in Washington?",
    category: "Rent",
    shortAnswer:
      "Since HB 1217 took effect in May 2025, most increases are capped at the lesser of 7% plus CPI or 10% in any 12-month period — 9.683% for 2026 — and no increase is allowed in the first 12 months of a tenancy. Manufactured-home lots are capped at 5%.",
    blocks: [
      { type: "p", text: "The cap is new: Washington had no statewide rent limit before HB 1217. A landlord must also give at least 90 days' written notice of an increase (180 days in Seattle)." },
    ],
    related: [
      { label: "Washington tenant rights", href: "/united-states/washington" },
      { label: "Rent control by state", href: "/united-states/rent-control-by-state" },
    ],
    keywords: ["how much can landlord raise rent washington", "washington rent cap", "hb 1217 rent increase"],
  },
  {
    slug: "what-is-the-security-deposit-limit-in-washington",
    question: "What is the security deposit limit in Washington?",
    category: "Deposits",
    shortAnswer:
      "Washington has no statewide dollar cap on the deposit amount, but the landlord must give a written move-in condition checklist and return the deposit within 30 days of move-out with an itemized statement. Seattle caps deposits at one month's rent.",
    blocks: [
      { type: "p", text: "The move-in checklist matters: without a written condition report signed at move-in, a landlord generally can't claim against your deposit for damage (RCW 59.18.260)." },
    ],
    related: [
      { label: "Washington tenant rights", href: "/united-states/washington" },
      { label: "Security deposit limits by state", href: "/united-states/security-deposit-limits-by-state" },
    ],
    keywords: ["washington security deposit limit", "seattle deposit cap", "security deposit washington"],
  },
  {
    slug: "can-my-landlord-enter-without-notice-in-washington",
    question: "Can my landlord enter without notice in Washington?",
    category: "Privacy",
    shortAnswer:
      "No. Under RCW 59.18.150, a Washington landlord must give at least 2 days' notice to enter for repairs or inspections, and at least 1 day's notice to show the unit to prospective tenants or buyers. Entry must be at reasonable times, with emergencies the only exception.",
    blocks: [
      { type: "p", text: "A landlord who enters repeatedly without proper notice can be liable, and the tenant may have remedies for the intrusion." },
    ],
    related: [
      { label: "Landlord entry rules by state", href: "/united-states/landlord-entry-rules-by-state" },
      { label: "Washington tenant rights", href: "/united-states/washington" },
    ],
    keywords: ["can my landlord enter without notice washington", "washington 2 day notice", "rcw 59.18.150"],
  },
  {
    slug: "how-much-notice-to-evict-in-washington",
    question: "How much notice does a landlord have to give to evict in Washington?",
    category: "Eviction",
    shortAnswer:
      "For non-payment of rent, a 14-day pay-or-vacate notice. Washington also requires 'just cause' to end most tenancies (RCW 59.18.650), so a landlord can't simply decline to renew because the lease term lapsed. Only a court can order an eviction.",
    blocks: [
      { type: "p", text: "The 14-day non-payment notice (up from 3 days in 2019) and the statewide just-cause rule make Washington one of the more tenant-protective states." },
    ],
    related: [
      { label: "Eviction notice periods by state", href: "/united-states/eviction-notice-periods-by-state" },
      { label: "Washington tenant rights", href: "/united-states/washington" },
    ],
    keywords: ["how much notice to evict washington", "14 day pay or vacate washington", "just cause eviction washington"],
  },

  // ─── Georgia ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-the-security-deposit-limit-in-georgia",
    question: "What is the security deposit limit in Georgia?",
    category: "Deposits",
    shortAnswer:
      "As of July 1, 2024, the Safe at Home Act (HB 404) caps Georgia security deposits at two months' rent — the state's first deposit limit. The deposit must be returned within 30 days of move-out with an itemized written statement of any deductions.",
    blocks: [
      { type: "p", text: "Before HB 404, Georgia had no statutory cap. The same law also added a duty of habitability, requiring landlords to keep units fit to live in." },
    ],
    related: [
      { label: "Georgia tenant rights", href: "/united-states/georgia" },
      { label: "Security deposit limits by state", href: "/united-states/security-deposit-limits-by-state" },
    ],
    keywords: ["georgia security deposit limit", "safe at home act deposit", "security deposit georgia"],
  },
  {
    slug: "how-much-can-my-landlord-raise-rent-in-georgia",
    question: "How much can my landlord raise rent in Georgia?",
    category: "Rent",
    shortAnswer:
      "There's no limit. Georgia has no rent control, and state law preempts cities and counties from enacting it. The rent is fixed during a lease term; at renewal or on a month-to-month tenancy a landlord can raise it with proper notice.",
    blocks: [
      { type: "p", text: "For a month-to-month tenancy, a landlord generally must give 60 days' notice to change terms or end the tenancy, while a tenant gives 30 days." },
    ],
    related: [
      { label: "Georgia tenant rights", href: "/united-states/georgia" },
      { label: "Rent control by state", href: "/united-states/rent-control-by-state" },
    ],
    keywords: ["how much can landlord raise rent georgia", "georgia rent control", "rent increase georgia"],
  },
  {
    slug: "can-my-landlord-enter-without-notice-in-georgia",
    question: "Can my landlord enter without notice in Georgia?",
    category: "Privacy",
    shortAnswer:
      "Georgia has no statute setting a landlord entry-notice period, so the lease controls. If your lease is silent, ask for reasonable advance notice in writing and keep a record of entries. A landlord still can't use entry to harass a tenant.",
    blocks: [
      { type: "p", text: "Because the law leaves routine entry to the lease, read that clause before signing and negotiate a notice requirement if it's missing." },
    ],
    related: [
      { label: "Landlord entry rules by state", href: "/united-states/landlord-entry-rules-by-state" },
      { label: "Georgia tenant rights", href: "/united-states/georgia" },
    ],
    keywords: ["can my landlord enter without notice georgia", "georgia landlord entry", "landlord notice to enter georgia"],
  },

  // ─── Pennsylvania ────────────────────────────────────────────────────────
  {
    slug: "what-is-the-security-deposit-limit-in-pennsylvania",
    question: "What is the security deposit limit in Pennsylvania?",
    category: "Deposits",
    shortAnswer:
      "Pennsylvania caps deposits at two months' rent during the first year of a lease, dropping to one month's rent from the second year onward. The landlord must return the deposit within 30 days of move-out with an itemized list of deductions.",
    blocks: [
      { type: "p", text: "If the landlord misses the 30-day deadline (or fails to itemize), the tenant can sue for up to double the amount wrongfully withheld. Deposits held more than five years generally earn interest for the tenant." },
    ],
    related: [
      { label: "Pennsylvania tenant rights", href: "/united-states/pennsylvania" },
      { label: "Security deposit limits by state", href: "/united-states/security-deposit-limits-by-state" },
    ],
    keywords: ["pennsylvania security deposit limit", "pa deposit two months", "security deposit pennsylvania"],
  },
  {
    slug: "how-much-can-my-landlord-raise-rent-in-pennsylvania",
    question: "How much can my landlord raise rent in Pennsylvania?",
    category: "Rent",
    shortAnswer:
      "There's no limit. Pennsylvania has no statewide rent control, and no Pennsylvania city has it in practice. The rent is fixed during a lease term; at renewal or on a month-to-month tenancy a landlord can raise it with proper written notice.",
    blocks: [
      { type: "p", text: "Your protection is the lease and the notice rule — a landlord can't raise rent mid-term, and must give proper notice to change it." },
    ],
    related: [
      { label: "Pennsylvania tenant rights", href: "/united-states/pennsylvania" },
      { label: "Rent control by state", href: "/united-states/rent-control-by-state" },
    ],
    keywords: ["how much can landlord raise rent pennsylvania", "pennsylvania rent control", "rent increase pennsylvania"],
  },
  {
    slug: "how-much-notice-to-evict-in-pennsylvania",
    question: "How much notice does a landlord have to give to evict in Pennsylvania?",
    category: "Eviction",
    shortAnswer:
      "For non-payment of rent, a landlord generally must give a 10-day written notice to quit before filing in court. But many standard Pennsylvania leases waive this notice, and courts enforce the waiver — so check your lease. Only a court can order an eviction.",
    blocks: [
      { type: "p", text: "For ending a term, the notice is typically 15 days for a lease of a year or less and 30 days for a longer one, unless the lease says otherwise." },
    ],
    related: [
      { label: "Eviction notice periods by state", href: "/united-states/eviction-notice-periods-by-state" },
      { label: "Pennsylvania tenant rights", href: "/united-states/pennsylvania" },
    ],
    keywords: ["how much notice to evict pennsylvania", "10 day notice to quit pennsylvania", "pennsylvania eviction notice"],
  },
  {
    slug: "can-my-landlord-enter-without-notice-in-pennsylvania",
    question: "Can my landlord enter without notice in Pennsylvania?",
    category: "Privacy",
    shortAnswer:
      "Pennsylvania has no statute fixing a landlord's entry-notice period, so the lease governs and courts expect reasonable advance notice. If your lease is silent, ask for notice in writing, and remember a landlord can't enter to harass you or without a legitimate reason.",
    blocks: [
      { type: "p", text: "Some cities, like Philadelphia, add local protections — check your local ordinance alongside your lease." },
    ],
    related: [
      { label: "Landlord entry rules by state", href: "/united-states/landlord-entry-rules-by-state" },
      { label: "Pennsylvania tenant rights", href: "/united-states/pennsylvania" },
    ],
    keywords: ["can my landlord enter without notice pennsylvania", "pennsylvania landlord entry", "landlord notice to enter pa"],
  },
];
