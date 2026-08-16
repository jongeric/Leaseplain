// Data for the tenant legal-help directory (/tenant-lawyer).
// Facts here are province-wide, stable, and publicly verifiable — we do NOT
// list individual firms until they submit a verified listing via the
// "get listed" form. The per-city pages explain the real routes to tenant
// legal help in Ontario and invite professionals to be listed.

export interface DirectoryCity {
  slug: string;
  name: string;
  region: string; // e.g. "Greater Toronto Area"
  blurb: string; // one-line local framing
}

export const DIRECTORY_CITIES: DirectoryCity[] = [
  { slug: "toronto", name: "Toronto", region: "Greater Toronto Area", blurb: "Ontario's largest and most competitive rental market, with the busiest LTB caseload in the province." },
  { slug: "ottawa", name: "Ottawa", region: "Eastern Ontario", blurb: "A large tenant population spanning students, public servants, and long-term renters." },
  { slug: "mississauga", name: "Mississauga", region: "Greater Toronto Area", blurb: "A major GTA rental hub where above-guideline increases and own-use evictions are common disputes." },
  { slug: "hamilton", name: "Hamilton", region: "Golden Horseshoe", blurb: "A fast-rising market where renovictions and rapid rent growth drive many tenant disputes." },
  { slug: "brampton", name: "Brampton", region: "Greater Toronto Area", blurb: "A growing GTA city with many first-time renters and multi-tenant households." },
  { slug: "london", name: "London", region: "Southwestern Ontario", blurb: "A large student and family rental market centred on post-secondary housing." },
  { slug: "kitchener", name: "Kitchener", region: "Waterloo Region", blurb: "A tech-driven market with tight vacancy and frequent rent-increase questions." },
  { slug: "waterloo", name: "Waterloo", region: "Waterloo Region", blurb: "A student-heavy market where subletting, assignment, and deposit disputes are common." },
  { slug: "kingston", name: "Kingston", region: "Eastern Ontario", blurb: "A university city with a large student-rental sector and seasonal turnover." },
  { slug: "oshawa", name: "Oshawa", region: "Durham Region", blurb: "An east-GTA market with strong demand and rising rents." },
];

export function getCity(slug: string): DirectoryCity | undefined {
  return DIRECTORY_CITIES.find((c) => c.slug === slug);
}

// ── Directory listings ───────────────────────────────────────────────────────
// Verified professionals appear here. We only publish real, LSO-verified
// listings submitted through the "get listed" flow — no placeholder firms.
// `featured` controls priority placement and the badge (the paid tier).
export interface DirectoryListing {
  name: string;         // person or practice name
  role: "Paralegal" | "Lawyer" | "Community legal clinic";
  cities: string[];     // city slugs served
  blurb: string;
  contactUrl?: string;  // website or booking link
  featured?: boolean;
}

export const LISTINGS: DirectoryListing[] = [
  // Populated as verified professionals join. Featured listings render first.
];

export function getListingsByCity(citySlug: string): DirectoryListing[] {
  return LISTINGS.filter((l) => l.cities.includes(citySlug)).sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );
}

// The "ladder" of tenant legal help in Ontario, cheapest/most-accessible first.
// All contact points are province-wide and stable.
export interface HelpOption {
  title: string;
  who: string;
  cost: string;
  detail: string;
  contact?: string;
}

export const HELP_OPTIONS: HelpOption[] = [
  {
    title: "Community legal clinics",
    who: "Free legal help for lower-income tenants",
    cost: "Free (income-tested)",
    detail:
      "Ontario has a network of community legal clinics funded by Legal Aid Ontario. They give advice and can represent eligible tenants at the Landlord and Tenant Board (LTB). Eligibility is usually based on income. This is the first place many tenants should look.",
    contact: "Find your local clinic through Legal Aid Ontario: 1-800-668-8258",
  },
  {
    title: "Tenant Duty Counsel",
    who: "Free same-day advice at the LTB",
    cost: "Free",
    detail:
      "The Tenant Duty Counsel Program offers free, confidential advice to tenants on the day of their LTB hearing. They can help you understand your options and sometimes speak on your behalf — but it is same-day help, not ongoing representation, so prepare in advance.",
  },
  {
    title: "Licensed paralegals",
    who: "Can represent you at the LTB",
    cost: "Paid (varies)",
    detail:
      "Ontario is distinctive: licensed paralegals — regulated by the Law Society of Ontario — can represent tenants at the LTB, often at a lower cost than a lawyer. For most residential tenancy disputes, a paralegal experienced in landlord-tenant matters is a common and cost-effective choice.",
  },
  {
    title: "Tenant lawyers",
    who: "For complex cases and appeals",
    cost: "Paid (varies)",
    detail:
      "A lawyer may be the right call for complex matters, large claims, or an appeal of an LTB order to Divisional Court. The Law Society Referral Service can connect you with a lawyer or paralegal for a short free consultation to assess your situation.",
    contact: "Law Society Referral Service — connects you for a free consultation",
  },
  {
    title: "Self-help legal information",
    who: "Understand your rights before you act",
    cost: "Free",
    detail:
      "For step-by-step, plain-language guidance on tenant issues and LTB forms, Steps to Justice (from CLEO) and the Advocacy Centre for Tenants Ontario (ACTO) are trusted, free resources. LeasePlain's own guides explain your rights before you decide whether you need representation.",
  },
];
