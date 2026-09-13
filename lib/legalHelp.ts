// Data for the tenant legal-help directory (/tenant-lawyer).
// Facts here are province-wide, stable, and publicly verifiable — we do NOT
// list individual firms until they submit a verified listing via the
// "get listed" form. The per-city pages explain the real routes to tenant
// legal help in Ontario and invite professionals to be listed.

export type Province = "ON" | "BC" | "AB" | "QC";

export interface DirectoryCity {
  slug: string;
  name: string;
  province: Province;
  region: string; // e.g. "Greater Toronto Area"
  blurb: string; // one-line local framing
}

export const DIRECTORY_CITIES: DirectoryCity[] = [
  // Ontario
  { slug: "toronto", name: "Toronto", province: "ON", region: "Greater Toronto Area", blurb: "Ontario's largest and most competitive rental market, with the busiest LTB caseload in the province." },
  { slug: "ottawa", name: "Ottawa", province: "ON", region: "Eastern Ontario", blurb: "A large tenant population spanning students, public servants, and long-term renters." },
  { slug: "mississauga", name: "Mississauga", province: "ON", region: "Greater Toronto Area", blurb: "A major GTA rental hub where above-guideline increases and own-use evictions are common disputes." },
  { slug: "hamilton", name: "Hamilton", province: "ON", region: "Golden Horseshoe", blurb: "A fast-rising market where renovictions and rapid rent growth drive many tenant disputes." },
  { slug: "brampton", name: "Brampton", province: "ON", region: "Greater Toronto Area", blurb: "A growing GTA city with many first-time renters and multi-tenant households." },
  { slug: "london", name: "London", province: "ON", region: "Southwestern Ontario", blurb: "A large student and family rental market centred on post-secondary housing." },
  { slug: "kitchener", name: "Kitchener", province: "ON", region: "Waterloo Region", blurb: "A tech-driven market with tight vacancy and frequent rent-increase questions." },
  { slug: "waterloo", name: "Waterloo", province: "ON", region: "Waterloo Region", blurb: "A student-heavy market where subletting, assignment, and deposit disputes are common." },
  { slug: "kingston", name: "Kingston", province: "ON", region: "Eastern Ontario", blurb: "A university city with a large student-rental sector and seasonal turnover." },
  { slug: "oshawa", name: "Oshawa", province: "ON", region: "Durham Region", blurb: "An east-GTA market with strong demand and rising rents." },
  // British Columbia
  { slug: "vancouver", name: "Vancouver", province: "BC", region: "Metro Vancouver", blurb: "One of Canada's most expensive rental markets, with heavy demand on the Residential Tenancy Branch." },
  { slug: "burnaby", name: "Burnaby", province: "BC", region: "Metro Vancouver", blurb: "A dense Metro Vancouver market where rent increases and renovictions drive many disputes." },
  { slug: "surrey", name: "Surrey", province: "BC", region: "Metro Vancouver", blurb: "One of BC's fastest-growing cities, with a large and diverse tenant population." },
  { slug: "victoria", name: "Victoria", province: "BC", region: "Vancouver Island", blurb: "A tight, low-vacancy market where deposit and eviction disputes are common." },
  // Alberta
  { slug: "calgary", name: "Calgary", province: "AB", region: "Southern Alberta", blurb: "A large market with no rent control, where deposit and notice disputes go to the RTDRS." },
  { slug: "edmonton", name: "Edmonton", province: "AB", region: "Central Alberta", blurb: "Alberta's capital, with a big student and government-worker rental population." },
  // Quebec
  { slug: "montreal", name: "Montreal", province: "QC", region: "Greater Montreal", blurb: "Quebec's largest rental market, with strong tenant protections and an active network of housing committees." },
  { slug: "quebec-city", name: "Quebec City", province: "QC", region: "Capitale-Nationale", blurb: "A stable rental market where repossession and rent-increase disputes go to the TAL." },
  { slug: "laval", name: "Laval", province: "QC", region: "Greater Montreal", blurb: "A large suburban market next to Montreal, covered by the same Civil Code protections." },
];

export function getCity(slug: string): DirectoryCity | undefined {
  return DIRECTORY_CITIES.find((c) => c.slug === slug);
}

// Province-level facts used to render the per-city pages accurately. Tenant
// legal-help systems differ by province (tribunal, who can represent you, and
// the free services available), so the city template reads from here.
export interface ProvinceMeta {
  code: Province;
  name: string;          // "Ontario"
  tribunal: string;      // short: "LTB"
  tribunalFull: string;  // "Landlord and Tenant Board"
  lawSociety: string;    // credential-verifying body
  legalAid: string;      // legal aid line / body
  systemNote: string;    // one line on how help works in the province
  guides: Array<{ label: string; href: string }>;
}

export const PROVINCE_META: Record<Province, ProvinceMeta> = {
  ON: {
    code: "ON",
    name: "Ontario",
    tribunal: "LTB",
    tribunalFull: "Landlord and Tenant Board",
    lawSociety: "Law Society of Ontario",
    legalAid: "Legal Aid Ontario (1-800-668-8258)",
    systemNote: "Ontario's tenant-help system is the same across the province.",
    guides: [
      { label: "Got an N4 (non-payment)?", href: "/blog/n4-non-payment-rent-ontario" },
      { label: "Fighting an illegal eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
      { label: "Bad-faith N12 & compensation", href: "/blog/bad-faith-n12-t5-compensation-ontario" },
      { label: "Landlord won't repair", href: "/blog/withholding-rent-repairs-ontario" },
      { label: "2026 rent increase rules", href: "/blog/ontario-rent-increase-guideline-2026" },
      { label: "All Ontario tenant rights", href: "/tenant-rights/ontario" },
    ],
  },
  BC: {
    code: "BC",
    name: "British Columbia",
    tribunal: "RTB",
    tribunalFull: "Residential Tenancy Branch",
    lawSociety: "Law Society of British Columbia",
    legalAid: "Legal Aid BC",
    systemNote: "BC's tenant-help system is province-wide, and RTB hearings are designed to be accessible without a lawyer.",
    guides: [
      { label: "BC rent increase rules", href: "/blog/bc-rent-increase-rules" },
      { label: "Can my landlord evict me in BC?", href: "/blog/bc-eviction-notices-rtb" },
      { label: "BC security deposit rules", href: "/blog/bc-security-deposit-rules" },
      { label: "Notice to end a tenancy in BC", href: "/blog/bc-notice-to-end-tenancy" },
      { label: "Breaking a lease in BC", href: "/blog/bc-breaking-a-lease" },
      { label: "All BC tenant rights", href: "/tenant-rights/british-columbia" },
    ],
  },
  AB: {
    code: "AB",
    name: "Alberta",
    tribunal: "RTDRS",
    tribunalFull: "Residential Tenancy Dispute Resolution Service",
    lawSociety: "Law Society of Alberta",
    legalAid: "Legal Aid Alberta",
    systemNote: "Alberta's tenant-help system is province-wide, and the RTDRS is a faster, lower-cost alternative to court.",
    guides: [
      { label: "Alberta rent increase rules", href: "/blog/alberta-rent-increase-rules" },
      { label: "The Alberta eviction process", href: "/blog/alberta-eviction-process" },
      { label: "Alberta security deposit rules", href: "/blog/alberta-security-deposit-rules" },
      { label: "Notice to end a tenancy in Alberta", href: "/blog/alberta-notice-to-end-tenancy" },
      { label: "Breaking a lease in Alberta", href: "/blog/alberta-breaking-a-lease" },
      { label: "All Alberta tenant rights", href: "/tenant-rights/alberta" },
    ],
  },
  QC: {
    code: "QC",
    name: "Quebec",
    tribunal: "TAL",
    tribunalFull: "Tribunal administratif du logement",
    lawSociety: "Barreau du Québec",
    legalAid: "Commission des services juridiques (legal aid)",
    systemNote: "Quebec's tenant-help system is province-wide, built around the Civil Code and the TAL, with a strong network of housing committees.",
    guides: [
      { label: "Can a landlord ask for a deposit in Quebec?", href: "/blog/quebec-security-deposit-rules" },
      { label: "Quebec rent increase rules", href: "/blog/quebec-rent-increase-rules" },
      { label: "Repossession & eviction in Quebec", href: "/blog/quebec-repossession-eviction" },
      { label: "Ending a lease in Quebec", href: "/blog/quebec-ending-your-lease" },
      { label: "Assigning or subletting in Quebec", href: "/blog/quebec-lease-assignment-sublet" },
      { label: "All Quebec tenant rights", href: "/tenant-rights/quebec" },
    ],
  },
};

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

export const HELP_OPTIONS_BY_PROVINCE: Record<Province, HelpOption[]> = {
  ON: [
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
  ],
  BC: [
    {
      title: "TRAC — Tenant Resource & Advisory Centre",
      who: "Free tenant information and self-help",
      cost: "Free",
      detail:
        "TRAC is BC's dedicated tenant resource. Its tenant infoline, template letters, and plain-language guides help you understand your rights and prepare for a Residential Tenancy Branch (RTB) dispute. This is the first stop for most BC tenants.",
      contact: "TRAC tenant infoline and online resources",
    },
    {
      title: "Access Pro Bono",
      who: "Free legal advice for eligible BC residents",
      cost: "Free (income-tested)",
      detail:
        "Access Pro Bono runs free legal advice clinics across BC where you can get a short consultation with a volunteer lawyer, including on residential tenancy issues. Book ahead — sessions are in demand.",
    },
    {
      title: "Community advocates & Legal Aid BC",
      who: "Advocacy and representation for lower-income tenants",
      cost: "Free (income-tested)",
      detail:
        "Many BC communities have tenant advocates (often through the province's advocacy network) who can help prepare and, in some cases, represent you at the RTB. Legal Aid BC's coverage of tenancy matters is limited, but it can point you to the right service.",
    },
    {
      title: "Representing yourself at the RTB",
      who: "The default at the Residential Tenancy Branch",
      cost: "Free",
      detail:
        "The RTB dispute process is designed to be used without a lawyer, and you can bring an agent or advocate to help. Filing is done online; a modest fee applies, with fee waivers available. Preparation and evidence matter more than formal representation.",
    },
    {
      title: "Tenant lawyers",
      who: "For complex matters and judicial review",
      cost: "Paid (varies)",
      detail:
        "For high-value claims, complex cases, or a judicial review of an RTB decision in the BC Supreme Court, a lawyer may be worth it. The Law Society of BC's referral service can connect you for a short initial consultation.",
      contact: "Law Society of BC lawyer referral service",
    },
  ],
  AB: [
    {
      title: "CPLEA & self-help information",
      who: "Understand your rights before you act",
      cost: "Free",
      detail:
        "The Centre for Public Legal Education Alberta (CPLEA) publishes trusted, plain-language guides on Alberta tenancy law, and the RTDRS is built to be accessible. Knowing your case well is the foundation for everything else.",
    },
    {
      title: "Student legal clinics & community clinics",
      who: "Free help for eligible tenants",
      cost: "Free (income-tested)",
      detail:
        "Student Legal Services of Edmonton, Student Legal Assistance in Calgary, Calgary Legal Guidance, and the Edmonton Community Legal Centre offer free help to lower-income tenants — including advice and, in some cases, representation.",
    },
    {
      title: "Legal Aid Alberta",
      who: "Legal help for lower-income Albertans",
      cost: "Free (income-tested)",
      detail:
        "Legal Aid Alberta provides advice and representation for eligible clients. Coverage of residential tenancy matters is limited, but it can direct you to the right clinic or service for your situation.",
    },
    {
      title: "Representing yourself at the RTDRS",
      who: "A faster, lower-cost alternative to court",
      cost: "Low fee (waivers available)",
      detail:
        "Most Alberta tenancy disputes can go to the Residential Tenancy Dispute Resolution Service instead of Provincial Court. You can bring an agent or advocate to represent you. Filing fees are modest, and evidence is what wins.",
    },
    {
      title: "Tenant lawyers",
      who: "For complex disputes and large claims",
      cost: "Paid (varies)",
      detail:
        "For complex matters, large claims, or Provincial Court, a lawyer may be the right call. The Law Society of Alberta's Lawyer Referral Service can connect you for a short initial consultation.",
      contact: "Law Society of Alberta Lawyer Referral Service",
    },
  ],
  QC: [
    {
      title: "Comités logement (housing committees)",
      who: "Free tenant advice and advocacy",
      cost: "Free",
      detail:
        "Quebec has a strong network of local comités logement and tenant associations that give free advice, help you understand your rights, prepare your file, and sometimes accompany you to the Tribunal administratif du logement (TAL). This is the first stop for most Quebec tenants.",
    },
    {
      title: "Éducaloi & self-help information",
      who: "Understand your rights before you act",
      cost: "Free",
      detail:
        "Éducaloi and the TAL publish clear, plain-language information on Quebec tenancy law. Because the TAL is designed to be accessible, many tenants handle straightforward cases with good preparation and free advice.",
    },
    {
      title: "Legal aid (aide juridique)",
      who: "Legal help for lower-income tenants",
      cost: "Free (income-tested)",
      detail:
        "Quebec's legal aid network provides advice and representation to eligible lower-income tenants. Coverage of tenancy matters varies, but it can point you to the right service and represent you in qualifying cases.",
    },
    {
      title: "Representing yourself at the TAL",
      who: "Common at the housing tribunal",
      cost: "Low fee (waivers available)",
      detail:
        "Many tenants present their own case at the TAL, often with a housing committee's help to prepare. Filing carries a modest fee, and evidence — your lease, photos, and written communications — is what decides the case.",
    },
    {
      title: "Tenant lawyers",
      who: "For complex matters and appeals",
      cost: "Paid (varies)",
      detail:
        "For complex disputes, large claims, or an appeal, a lawyer may be worth it. The Barreau du Québec's referral service can connect you with a lawyer for an initial consultation.",
      contact: "Barreau du Québec lawyer referral service",
    },
  ],
};

// Backwards-compatible default (Ontario) for any consumer that hasn't yet
// switched to the province-keyed map.
export const HELP_OPTIONS: HelpOption[] = HELP_OPTIONS_BY_PROVINCE.ON;
