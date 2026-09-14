// Data for the tenant legal-help directory (/tenant-lawyer).
// Facts here are province-wide, stable, and publicly verifiable — we do NOT
// list individual firms until they submit a verified listing via the
// "get listed" form. The per-city pages explain the real routes to tenant
// legal help in Ontario and invite professionals to be listed.

export type Province = "ON" | "BC" | "AB" | "QC" | "MB" | "NS" | "SK" | "NB" | "PE" | "NL";

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
  // Manitoba
  { slug: "winnipeg", name: "Winnipeg", province: "MB", region: "Manitoba", blurb: "Manitoba's largest rental market, with rent-guideline and deposit disputes handled by the Residential Tenancies Branch." },
  { slug: "brandon", name: "Brandon", province: "MB", region: "Westman", blurb: "Manitoba's second city, with a steady student and family rental population." },
  // Nova Scotia
  { slug: "halifax", name: "Halifax", province: "NS", region: "Halifax Regional Municipality", blurb: "Nova Scotia's largest and fastest-rising rental market, where the 5% rent cap and deposit disputes are common." },
  { slug: "dartmouth", name: "Dartmouth", province: "NS", region: "Halifax Regional Municipality", blurb: "Part of the Halifax region, covered by the same Residential Tenancies Program." },
  // Saskatchewan
  { slug: "regina", name: "Regina", province: "SK", region: "Southern Saskatchewan", blurb: "Saskatchewan's capital, where deposit and notice disputes go to the Office of Residential Tenancies." },
  { slug: "saskatoon", name: "Saskatoon", province: "SK", region: "Central Saskatchewan", blurb: "Saskatchewan's largest city, with a big student and newcomer rental population." },
  // New Brunswick
  { slug: "moncton", name: "Moncton", province: "NB", region: "New Brunswick", blurb: "New Brunswick's largest city, where deposits are held by the Tenant and Landlord Relations Office." },
  { slug: "fredericton", name: "Fredericton", province: "NB", region: "New Brunswick", blurb: "New Brunswick's capital, with a large student and government-worker rental population." },
  { slug: "saint-john", name: "Saint John", province: "NB", region: "New Brunswick", blurb: "A historic port city covered by the same Residential Tenancies Tribunal." },
  // Prince Edward Island
  { slug: "charlottetown", name: "Charlottetown", province: "PE", region: "Prince Edward Island", blurb: "PEI's capital and largest rental market, home to the IRAC Residential Tenancy Office." },
  // Newfoundland & Labrador
  { slug: "st-johns", name: "St. John's", province: "NL", region: "Newfoundland & Labrador", blurb: "Newfoundland's capital and largest rental market, covered by Residential Tenancies (Service NL)." },
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
  MB: {
    code: "MB",
    name: "Manitoba",
    tribunal: "RTB",
    tribunalFull: "Residential Tenancies Branch",
    lawSociety: "Law Society of Manitoba",
    legalAid: "Legal Aid Manitoba",
    systemNote: "Manitoba's tenant-help system is province-wide, centred on the Residential Tenancies Branch and its Commission.",
    guides: [
      { label: "Manitoba rent increase rules", href: "/blog/manitoba-rent-increase-rules" },
      { label: "The Manitoba eviction process", href: "/blog/manitoba-eviction-process" },
      { label: "Manitoba security deposit rules", href: "/blog/manitoba-security-deposit-rules" },
      { label: "Notice to end a tenancy in Manitoba", href: "/blog/manitoba-notice-to-end-tenancy" },
      { label: "All Manitoba tenant rights", href: "/canada/manitoba" },
    ],
  },
  NS: {
    code: "NS",
    name: "Nova Scotia",
    tribunal: "Residential Tenancies",
    tribunalFull: "Residential Tenancies Program",
    lawSociety: "Nova Scotia Barristers' Society",
    legalAid: "Nova Scotia Legal Aid",
    systemNote: "Nova Scotia's tenant-help system is province-wide, run through the Residential Tenancies Program, with appeals to Small Claims Court.",
    guides: [
      { label: "Nova Scotia rent increase rules (5% cap)", href: "/blog/nova-scotia-rent-increase-rules" },
      { label: "The Nova Scotia eviction process", href: "/blog/nova-scotia-eviction-process" },
      { label: "Nova Scotia security deposit rules", href: "/blog/nova-scotia-security-deposit-rules" },
      { label: "Notice to end a tenancy in Nova Scotia", href: "/blog/nova-scotia-notice-to-end-tenancy" },
      { label: "All Nova Scotia tenant rights", href: "/canada/nova-scotia" },
    ],
  },
  SK: {
    code: "SK",
    name: "Saskatchewan",
    tribunal: "ORT",
    tribunalFull: "Office of Residential Tenancies",
    lawSociety: "Law Society of Saskatchewan",
    legalAid: "Legal Aid Saskatchewan",
    systemNote: "Saskatchewan's tenant-help system is province-wide, centred on the Office of Residential Tenancies (ORT).",
    guides: [
      { label: "Saskatchewan rent increase rules", href: "/blog/saskatchewan-rent-increase-rules" },
      { label: "The Saskatchewan eviction process", href: "/blog/saskatchewan-eviction-process" },
      { label: "Saskatchewan security deposit rules", href: "/blog/saskatchewan-security-deposit-rules" },
      { label: "Notice to end a tenancy in Saskatchewan", href: "/blog/saskatchewan-notice-to-end-tenancy" },
      { label: "All Saskatchewan tenant rights", href: "/canada/saskatchewan" },
    ],
  },
  NB: {
    code: "NB",
    name: "New Brunswick",
    tribunal: "RTT",
    tribunalFull: "Residential Tenancies Tribunal",
    lawSociety: "Law Society of New Brunswick",
    legalAid: "Legal Aid New Brunswick",
    systemNote: "New Brunswick's tenant-help system is province-wide, run through the Residential Tenancies Tribunal (Service New Brunswick), which also holds deposits.",
    guides: [
      { label: "New Brunswick rent increase rules", href: "/blog/new-brunswick-rent-increase-rules" },
      { label: "The New Brunswick eviction process", href: "/blog/new-brunswick-eviction-process" },
      { label: "New Brunswick security deposit rules", href: "/blog/new-brunswick-security-deposit-rules" },
      { label: "Notice to end a tenancy in New Brunswick", href: "/blog/new-brunswick-notice-to-end-tenancy" },
      { label: "All New Brunswick tenant rights", href: "/canada/new-brunswick" },
    ],
  },
  PE: {
    code: "PE",
    name: "Prince Edward Island",
    tribunal: "IRAC",
    tribunalFull: "Residential Tenancy Office (IRAC)",
    lawSociety: "Law Society of Prince Edward Island",
    legalAid: "Community Legal Information (PEI)",
    systemNote: "PEI's tenant-help system is province-wide, run through the Residential Tenancy Office of the Island Regulatory and Appeals Commission (IRAC).",
    guides: [
      { label: "PEI rent increase rules (IRAC allowable)", href: "/blog/pei-rent-increase-rules" },
      { label: "The PEI eviction process", href: "/blog/pei-eviction-process" },
      { label: "PEI security deposit rules", href: "/blog/pei-security-deposit-rules" },
      { label: "Notice to end a tenancy in PEI", href: "/blog/pei-notice-to-end-tenancy" },
      { label: "All PEI tenant rights", href: "/canada/prince-edward-island" },
    ],
  },
  NL: {
    code: "NL",
    name: "Newfoundland & Labrador",
    tribunal: "Residential Tenancies",
    tribunalFull: "Residential Tenancies (Service NL)",
    lawSociety: "Law Society of Newfoundland and Labrador",
    legalAid: "Newfoundland and Labrador Legal Aid",
    systemNote: "Newfoundland and Labrador's tenant-help system is province-wide, run through Residential Tenancies (Service NL).",
    guides: [
      { label: "Newfoundland rent increase rules", href: "/blog/newfoundland-rent-increase-rules" },
      { label: "The Newfoundland eviction process", href: "/blog/newfoundland-eviction-process" },
      { label: "Newfoundland security deposit rules", href: "/blog/newfoundland-security-deposit-rules" },
      { label: "Notice to end a tenancy in Newfoundland", href: "/blog/newfoundland-notice-to-end-tenancy" },
      { label: "All Newfoundland tenant rights", href: "/canada/newfoundland-and-labrador" },
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
  MB: [
    {
      title: "Residential Tenancies Branch",
      who: "Free information and dispute resolution",
      cost: "Free",
      detail:
        "Manitoba's Residential Tenancies Branch (RTB) provides information, mediates disputes, and issues orders on rent, repairs, and deposits. It's the first stop for most tenant questions and claims, with the Residential Tenancies Commission handling appeals.",
    },
    {
      title: "Tenant advocates & community services",
      who: "Free help preparing your case",
      cost: "Free",
      detail:
        "Organizations such as the Community Unemployed Help Centre and other Winnipeg-area services help tenants understand their rights, prepare documents, and navigate RTB hearings.",
    },
    {
      title: "Legal Aid Manitoba",
      who: "Legal help for lower-income tenants",
      cost: "Free (income-tested)",
      detail:
        "Legal Aid Manitoba can provide advice and, in qualifying cases, representation. Coverage of tenancy matters is limited, but it can direct you to the right service.",
    },
    {
      title: "Representing yourself at the RTB",
      who: "Common at the Branch",
      cost: "Free",
      detail:
        "The RTB is designed to be used without a lawyer. Preparation and evidence — your lease, rent records, photos, and written communications — matter more than formal representation.",
    },
    {
      title: "Tenant lawyers",
      who: "For complex matters and appeals",
      cost: "Paid (varies)",
      detail:
        "For complex disputes or an appeal to the Residential Tenancies Commission or court, a lawyer may help. The Law Society of Manitoba's referral service can connect you for an initial consultation.",
      contact: "Law Society of Manitoba lawyer referral service",
    },
  ],
  NS: [
    {
      title: "Residential Tenancies Program",
      who: "Free information and dispute resolution",
      cost: "Free",
      detail:
        "Nova Scotia's Residential Tenancies Program (Access Nova Scotia) provides information and resolves disputes over rent, deposits, and evictions, with decisions by the Director and appeals to Small Claims Court.",
    },
    {
      title: "Dalhousie Legal Aid Service & community help",
      who: "Free advice and advocacy",
      cost: "Free (income-tested)",
      detail:
        "Dalhousie Legal Aid Service and community organizations help tenants understand their rights, prepare their case, and navigate the Residential Tenancies Program, especially in the Halifax area.",
    },
    {
      title: "Nova Scotia Legal Aid",
      who: "Legal help for lower-income tenants",
      cost: "Free (income-tested)",
      detail:
        "Nova Scotia Legal Aid can provide advice and, in qualifying cases, representation. Coverage of tenancy matters is limited, but it can point you to the right service.",
    },
    {
      title: "Representing yourself",
      who: "Common in the Residential Tenancies Program",
      cost: "Low fee (waivers available)",
      detail:
        "The Program is designed to be used without a lawyer. Your lease, rent records, photos, and written communications are what decide a case.",
    },
    {
      title: "Tenant lawyers",
      who: "For complex matters and appeals",
      cost: "Paid (varies)",
      detail:
        "For complex disputes or an appeal to Small Claims Court, a lawyer may help. The Nova Scotia Barristers' Society Lawyer Referral Service can connect you for an initial consultation.",
      contact: "Nova Scotia Barristers' Society Lawyer Referral Service",
    },
  ],
  SK: [
    {
      title: "Office of Residential Tenancies (ORT)",
      who: "Free information and dispute resolution",
      cost: "Free info; low filing fee",
      detail:
        "Saskatchewan's Office of Residential Tenancies handles most tenancy disputes — rent, deposits, and evictions — with hearings and binding orders. Its website has plain-language guides and forms.",
    },
    {
      title: "Free legal clinics",
      who: "Free help for eligible tenants",
      cost: "Free (income-tested)",
      detail:
        "CLASSIC (Community Legal Assistance Services for Saskatoon Inner City) and Pro Bono Law Saskatchewan offer free legal help, including on tenancy issues, for eligible residents.",
    },
    {
      title: "Legal Aid Saskatchewan",
      who: "Legal help for lower-income tenants",
      cost: "Free (income-tested)",
      detail:
        "Legal Aid Saskatchewan can provide advice and, in qualifying cases, representation, and can direct you to the right service for a tenancy matter.",
    },
    {
      title: "Representing yourself at the ORT",
      who: "Common at the Office",
      cost: "Low fee (waivers available)",
      detail:
        "The ORT is built to be accessible without a lawyer. Preparation and evidence — your lease, payment records, and inspection photos — matter most.",
    },
    {
      title: "Tenant lawyers",
      who: "For complex disputes and appeals",
      cost: "Paid (varies)",
      detail:
        "For complex matters or an appeal, a lawyer may help. The Law Society of Saskatchewan's referral service can connect you for an initial consultation.",
      contact: "Law Society of Saskatchewan lawyer referral service",
    },
  ],
  NB: [
    {
      title: "Residential Tenancies Tribunal",
      who: "Free information and dispute resolution",
      cost: "Free",
      detail:
        "New Brunswick's Residential Tenancies Tribunal (Service New Brunswick) provides information, holds deposits, mediates, and issues decisions on rent, deposits, and evictions. It's the first stop for most tenant questions.",
    },
    {
      title: "PLEIS-NB & community legal info",
      who: "Free plain-language legal information",
      cost: "Free",
      detail:
        "The Public Legal Education and Information Service of New Brunswick (PLEIS-NB) publishes clear guides on tenant rights and the Tribunal process, in English and French.",
    },
    {
      title: "Legal Aid New Brunswick",
      who: "Legal help for lower-income tenants",
      cost: "Free (income-tested)",
      detail:
        "Legal Aid New Brunswick can provide advice and, in qualifying cases, representation, and can point you to the right service for a tenancy matter.",
    },
    {
      title: "Tenant lawyers",
      who: "For complex matters and appeals",
      cost: "Paid (varies)",
      detail:
        "For complex disputes or an appeal, a lawyer may help. The Law Society of New Brunswick's referral service can connect you for an initial consultation.",
      contact: "Law Society of New Brunswick referral service",
    },
  ],
  PE: [
    {
      title: "Residential Tenancy Office (IRAC)",
      who: "Free information and dispute resolution",
      cost: "Free info; low filing fee",
      detail:
        "PEI's Residential Tenancy Office, part of the Island Regulatory and Appeals Commission (IRAC), sets the allowable rent increase, provides forms, and decides disputes on rent, deposits, and evictions.",
    },
    {
      title: "Community Legal Information (PEI)",
      who: "Free plain-language legal information",
      cost: "Free",
      detail:
        "Community Legal Information PEI publishes guides on tenant rights and the IRAC process to help you understand and prepare your case.",
    },
    {
      title: "Legal Aid & clinics",
      who: "Legal help for lower-income tenants",
      cost: "Free (income-tested)",
      detail:
        "PEI Legal Aid and community services can provide advice and direct you to the right help for a tenancy matter.",
    },
    {
      title: "Tenant lawyers",
      who: "For complex matters and appeals",
      cost: "Paid (varies)",
      detail:
        "For complex disputes or an appeal to IRAC, a lawyer may help. The Law Society of PEI can connect you with one.",
      contact: "Law Society of Prince Edward Island",
    },
  ],
  NL: [
    {
      title: "Residential Tenancies (Service NL)",
      who: "Free information and dispute resolution",
      cost: "Free info; low filing fee",
      detail:
        "Newfoundland and Labrador's Residential Tenancies section (Service NL) provides information and forms and decides disputes on rent, deposits, and evictions.",
    },
    {
      title: "Public Legal Information (PLIAN)",
      who: "Free plain-language legal information",
      cost: "Free",
      detail:
        "The Public Legal Information Association of Newfoundland and Labrador (PLIAN) publishes guides and runs a legal information line to help tenants understand their rights.",
    },
    {
      title: "Newfoundland and Labrador Legal Aid",
      who: "Legal help for lower-income tenants",
      cost: "Free (income-tested)",
      detail:
        "Legal Aid can provide advice and, in qualifying cases, representation, and can direct you to the right service.",
    },
    {
      title: "Tenant lawyers",
      who: "For complex matters and appeals",
      cost: "Paid (varies)",
      detail:
        "For complex disputes or an appeal, a lawyer may help. The Law Society of Newfoundland and Labrador can connect you with one.",
      contact: "Law Society of Newfoundland and Labrador",
    },
  ],
};

// Backwards-compatible default (Ontario) for any consumer that hasn't yet
// switched to the province-keyed map.
export const HELP_OPTIONS: HelpOption[] = HELP_OPTIONS_BY_PROVINCE.ON;
