import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { MapPin, ShieldCheck, CheckCircle, ChevronRight, Upload, Phone, Thermometer, Building2 } from "lucide-react";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tenant Rights in Toronto – Local Resources & Housing Help | LeasePlain",
  description:
    "Tenant rights guide for Toronto renters. Ontario RTA applies city-wide, plus Toronto-specific protections: RentSafeTO, stricter heat rules, rooming houses, and condo rentals.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/toronto" },
  openGraph: {
    type: "website",
    title: "Tenant Rights in Toronto – Local Resources & Housing Help | LeasePlain",
    description: "Tenant rights guide for Toronto renters. Ontario RTA applies city-wide, plus Toronto-specific protections: RentSafeTO, stricter heat rules, rooming houses, and condo rentals.",
    url: "https://leaseplain.com/tenant-rights/toronto",
  },
  keywords: ["tenant rights Toronto", "Toronto housing help", "Toronto tenant legal clinic", "RentSafeTO", "renting in Toronto", "Ontario RTA Toronto"],
};

const localResources = [
  {
    name: "Landlord and Tenant Board (LTB)",
    description: "The primary tribunal for resolving rental disputes in Ontario. Toronto hearings are conducted virtually via Microsoft Teams, with in-person options at Toronto North (Yonge/Lawrence), Toronto South (downtown), Toronto East, and Toronto West hearing locations.",
    contact: "1-888-332-3234",
    website: "tribunalsontario.ca/ltb",
  },
  {
    name: "Tenant Duty Counsel",
    description: "Free legal representation at LTB hearings for low-income tenants, provided by Legal Aid Ontario. Available at most in-person hearing locations and by phone before virtual hearings.",
    contact: "1-800-668-8258",
    website: "legalaid.on.ca",
  },
  {
    name: "ACTO — Advocacy Centre for Tenants Ontario",
    description: "Toronto Tenant Hotline: 416-922-4999. ACTO provides legal information, advice, and advocacy for low-income tenants across Ontario, with a strong Toronto presence.",
    contact: "416-922-4999",
    website: "acto.ca",
  },
  {
    name: "Parkdale Community Legal Services",
    description: "Free legal services for low-income residents in Toronto's west end, with a strong focus on tenant rights and LTB representation.",
    contact: "(416) 531-2411",
    website: "parkdalelegal.org",
  },
  {
    name: "Toronto Community Housing (TCH)",
    description: "Canada's largest social housing provider. TCH tenants have some different rights and procedures. Apply for social housing through the Housing Connections wait-list (toronto.ca/housingconnections).",
    contact: "416-981-5500",
    website: "torontohousing.ca",
  },
  {
    name: "Centre for Equality Rights in Accommodation (CERA)",
    description: "Focuses on discrimination in housing. If you believe a landlord refused you based on a protected ground (race, family status, disability, etc.), CERA can advise and assist.",
    contact: "(416) 944-0087",
    website: "equalityrights.org/cera",
  },
];

const commonTorontoIssues = [
  { issue: "Above-guideline rent increases (AGIs)", note: "More common in Toronto's large apartment buildings where landlords claim extraordinary capital expenditure increases. You have the right to contest at the LTB. Request all documentation." },
  { issue: "N13 evictions (renovation, demolition — 'renoviction')", note: "Renoviction is increasingly common in Toronto. Under the RTA, if you receive an N13, you have the right of first refusal to return at the same rent after work is done. Give written notice to exercise this right." },
  { issue: "Illegal rent above legal maximum", note: "If you think your rent was raised illegally or above the guideline without LTB approval, file a T1 application with the LTB to recover the overpayment." },
  { issue: "Property standards violations", note: "Contact the City's 311 line to report infestations, heat failures, elevator outages, and unsafe conditions. Applicable to ALL rental units regardless of building size." },
];

const faqItems = [
  {
    q: "What is RentSafeTO and how do I look up my building's score?",
    a: "RentSafeTO is the City of Toronto's Apartment Building Standards program. Buildings with 3 or more storeys or 10 or more units must register. Each building receives an annual audit score from 1 to 100 based on compliance with maintenance and safety standards. You can look up your building's score at toronto.ca/rentsafe. A low score indicates unresolved maintenance issues. You can also file a complaint through the RentSafeTO portal to trigger an audit of your building.",
  },
  {
    q: "Does Toronto have stronger tenant protections than the rest of Ontario?",
    a: "Yes, in some areas. Toronto's Municipal Code Chapter 497 sets a minimum heat standard of 21°C (vs. the provincial 20°C) and a maximum summer temperature of 26°C when AC is included in the tenancy. The RentSafeTO program requires larger buildings to register and undergo regular audits — a requirement that does not exist province-wide. Toronto also has specific licensing rules for rooming houses. However, the Ontario RTA is the primary law — Toronto's rules add to, but do not replace, provincial protections.",
  },
  {
    q: "How do I report a heat complaint in Toronto?",
    a: "Call 311 (Toronto's main city services line) to report a heat complaint. Toronto Municipal Code Chapter 497 requires landlords to maintain at least 21°C from September 15 to June 1. Bylaw enforcement officers can inspect and issue orders. You should also document the issue in writing to your landlord and file a T6 application at the LTB if the problem is not promptly resolved. Both routes (city bylaw and LTB) can be pursued simultaneously.",
  },
  {
    q: "What are my rights as a Toronto condo tenant?",
    a: "If you rent a condo unit, the RTA fully applies to your tenancy — your landlord is the unit owner. Your landlord must give you a copy of the condo corporation's rules, and you are bound by those rules. However, the condo corporation cannot evict you directly — only your landlord can, and only through the LTB process. If the condo corporation takes action that affects your unit (e.g., shutting off amenities), your landlord is responsible under the RTA for ensuring your quiet enjoyment. Disputes between the landlord and the condo corporation are the landlord's problem, not yours.",
  },
  {
    q: "Where do I go for free tenant legal help in Toronto?",
    a: "Toronto has several free tenant legal resources: (1) Tenant Duty Counsel at LTB hearings — call Legal Aid Ontario at 1-800-668-8258. (2) ACTO (Advocacy Centre for Tenants Ontario) at 416-922-4999. (3) Parkdale Community Legal Services at (416) 531-2411 for west-end residents. (4) Other community legal clinics across the city — search legalaid.on.ca/clinic-finder. (5) Steps to Justice (stepstojustice.ca) for free online guides. Many clinics prioritize low-income tenants.",
  },
];

export default function TorontoTenantRightsPage() {
  return (
    <>
      <ArticleSchema
        headline="Tenant Rights in Toronto – Local Resources & What You Need to Know"
        description="Tenant rights guide for Toronto renters. Ontario RTA applies city-wide, plus Toronto-specific protections: RentSafeTO, stricter heat rules, rooming houses, and condo rentals."
        url="https://leaseplain.com/tenant-rights/toronto"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["tenant rights Toronto", "Toronto housing help", "Toronto tenant legal clinic", "RentSafeTO", "renting in Toronto", "Ontario RTA Toronto"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tenant Rights", href: "https://leaseplain.com/tenant-rights" },
        { name: "Toronto", href: "https://leaseplain.com/tenant-rights/toronto" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }).replace(/</g, "<") }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://leaseplain.com/tenant-rights/toronto",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".speakable-summary"],
        },
      }).replace(/</g, "<") }} />
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/tenant-rights" className="hover:underline">Tenant Rights</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Toronto</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Toronto Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Tenant Rights in Toronto: Local Protections & What You Need to Know
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Toronto renters are protected by the same Ontario{" "}
              <em>Residential Tenancies Act</em> as all Ontario tenants — but the city adds its
              own layer of protections through RentSafeTO, stricter heat rules, and local
              enforcement. Here&apos;s what&apos;s different in Toronto.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              {/* Section 1: RentSafeTO */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  <span className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-blue-600" aria-hidden="true" />
                    RentSafeTO: Toronto&apos;s Apartment Building Standards Program
                  </span>
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  RentSafeTO is a City of Toronto bylaw program that holds larger rental buildings
                  to a higher maintenance standard than the provincial minimum. It applies to
                  buildings with <strong>3 or more storeys or 10 or more units</strong>.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                    <p className="font-semibold text-blue-900 text-sm mb-2">What it requires</p>
                    <ul className="flex flex-col gap-2">
                      {[
                        "Mandatory registration with the City",
                        "Annual building audits with a score of 1–100",
                        "Scores posted publicly at toronto.ca/rentsafe",
                        "Landlords ordered to repair deficiencies before re-inspection",
                      ].map((item) => (
                        <li key={item} className="text-xs text-blue-800 leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                    <p className="font-semibold text-slate-900 text-sm mb-2">What you can do</p>
                    <ul className="flex flex-col gap-2">
                      {[
                        "Look up your building's score at toronto.ca/rentsafe",
                        "File a complaint to trigger an audit",
                        "Audit reports are public — request yours",
                        "Combine with a T6 LTB application for stronger remedies",
                      ].map((item) => (
                        <li key={item} className="text-xs text-slate-600 leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed text-sm">
                  A low RentSafeTO score is powerful evidence at an LTB hearing. If your building
                  scored poorly and has unresolved audit deficiencies that affect your unit, reference
                  those findings in your T6 application.
                </p>
              </div>

              {/* Section 2: Toronto heat rules */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  <span className="flex items-center gap-2">
                    <Thermometer className="w-5 h-5 text-blue-600" aria-hidden="true" />
                    Toronto&apos;s Municipal Heat Rules (Chapter 497)
                  </span>
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Toronto has stricter heat requirements than the provincial standard:
                </p>
                <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 mb-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-orange-600 font-semibold uppercase tracking-wide mb-1">Heating Season</p>
                      <p className="font-bold text-orange-900 text-lg">Min. 21°C</p>
                      <p className="text-sm text-orange-800">September 15 to June 1</p>
                      <p className="text-xs text-orange-600 mt-1">(Provincial standard: 20°C, Sept 1–June 15)</p>
                    </div>
                    <div>
                      <p className="text-xs text-orange-600 font-semibold uppercase tracking-wide mb-1">Summer (if AC included)</p>
                      <p className="font-bold text-orange-900 text-lg">Max. 26°C</p>
                      <p className="text-sm text-orange-800">When AC is part of the tenancy</p>
                      <p className="text-xs text-orange-600 mt-1">Landlord must maintain functional AC</p>
                    </div>
                  </div>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    "Call 311 to report a heat complaint — a bylaw officer can inspect within 24 hours for emergencies.",
                    "Document the temperature with a thermometer and timestamped photos.",
                    "Send a written complaint to your landlord at the same time as calling 311.",
                    "File a T6 at the LTB if the problem is not quickly resolved — the two processes can run simultaneously.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 3: Property standards bylaw */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">City of Toronto Property Standards Bylaw</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Unlike RentSafeTO, the City&apos;s property standards bylaw applies to{" "}
                  <strong>all</strong> rental units regardless of building size — including basement
                  apartments, semi-detached houses, and single-family homes converted into rentals.
                </p>
                <ul className="flex flex-col gap-3 mb-5">
                  {[
                    "File a complaint by calling 311 (24 hours a day, 7 days a week).",
                    "A property standards officer will inspect the unit and can issue a compliance order.",
                    "Compliance orders require landlords to make specific repairs by a deadline.",
                    "Failure to comply with a property standards order is an offence.",
                    "A property standards officer's inspection report is valuable evidence at an LTB hearing.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 4: Social housing and RGI */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Social Housing and Rent-Geared-to-Income (RGI)</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                    <p className="font-semibold text-slate-900 text-sm mb-2">Toronto Community Housing (TCH)</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      TCH is the largest social housing provider in Canada, with over 58,000 units.
                      TCH tenants are covered by the RTA but also subject to TCH&apos;s own policies and
                      the Housing Services Act. If you have a dispute with TCH, you can still file
                      at the LTB.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                    <p className="font-semibold text-slate-900 text-sm mb-2">Rent-Geared-to-Income (RGI)</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      RGI housing caps rent at approximately 30% of household income. Access is
                      through the centralized Housing Connections waitlist at{" "}
                      <strong>toronto.ca/housingconnections</strong>. Current wait times are
                      measured in years — apply early and keep your information updated.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5: Common Toronto issues */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">Common Issues for Toronto Tenants</h2>
                <div className="flex flex-col gap-4">
                  {commonTorontoIssues.map((item) => (
                    <div key={item.issue} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                      <p className="font-semibold text-slate-900 text-sm mb-1">{item.issue}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 6: Renoviction */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                  Renoviction: A Toronto-Specific Concern
                </h3>
                <p className="text-sm text-blue-800 leading-relaxed mb-3">
                  &ldquo;Renoviction&rdquo; — where landlords evict tenants under the guise of major renovations
                  to re-rent at higher rates — is increasingly common in Toronto. Under the RTA, if
                  you receive an N13 (eviction for demolition, repairs, or conversion), you have the
                  right to return to the unit at the same rent after the work is done.
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Give written notice to the landlord before vacating that you intend to exercise your right of first refusal to return.",
                    "The landlord must give you at least 120 days' notice for renovation eviction (Form N13).",
                    "You are entitled to compensation equal to 3 months' rent while displaced.",
                    "If the landlord refuses to let you return, file a T5 application at the LTB.",
                  ].map((item) => (
                    <li key={item} className="text-xs text-blue-800 leading-relaxed flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 7: Rooming houses */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Rooming Houses in Toronto</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Rooming houses — buildings where multiple tenants share common spaces like kitchens
                  and bathrooms — have a distinct licensing regime in Toronto:
                </p>
                <ul className="flex flex-col gap-3 mb-5">
                  {[
                    "Toronto Municipal Code Chapter 285 governs rooming house licensing. Operators must obtain a licence from the city.",
                    "Rooming house tenants are covered by the RTA just like other tenants — they can file T6, T2, and other applications.",
                    "Unlicensed rooming houses are a bylaw violation — report to 311, but this does not eliminate your tenancy rights.",
                    "Heat, property standards, and entry rules all apply equally to rooming houses.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 8: Condo rentals */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Renting a Condominium Unit in Toronto</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Many Toronto rentals are condominium units rented by individual owners. This
                  creates a unique three-party relationship between the tenant, the landlord (unit
                  owner), and the condo corporation:
                </p>
                <div className="flex flex-col gap-3 mb-5">
                  {[
                    { point: "The RTA fully applies", detail: "Your landlord is the unit owner. The RTA governs your tenancy, including maintenance, entry, and eviction rules." },
                    { point: "You must follow condo rules", detail: "Your landlord must give you a copy of the condo corporation's rules. You are bound by them, even if they weren't in your lease. Common rules cover noise, amenities, move-in/move-out procedures, and pets." },
                    { point: "The condo corporation cannot evict you", detail: "Only your landlord can initiate eviction through the LTB. If the condo corporation has a complaint about your conduct, they must address it through the landlord." },
                    { point: "Landlord responsible for condo-related disruptions", detail: "If the condo corporation takes action that affects your quiet enjoyment (e.g., restricting amenity access, entering common areas), your landlord is responsible under the RTA — not the corporation." },
                    { point: "Status certificate matters", detail: "If your landlord owes condo fees, a lien can be placed on the unit. This does not affect your tenancy directly, but it's a risk to be aware of if purchasing." },
                  ].map((item) => (
                    <div key={item.point} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>{item.point}:</strong> {item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 9: Local resources */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">Toronto Tenant Resources</h2>
                <div className="flex flex-col gap-5">
                  {localResources.map((resource) => (
                    <div key={resource.name} className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-semibold text-slate-900 text-sm">{resource.name}</h3>
                        <div className="flex items-center gap-1 text-xs text-slate-400 flex-shrink-0">
                          <Phone className="w-3 h-3" aria-hidden="true" />
                          {resource.contact}
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-1.5">{resource.description}</p>
                      <span className="text-xs text-blue-600">{resource.website}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>

            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your Toronto lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI flags lease clauses that violate Ontario tenant protections — relevant
                  for any rental in Toronto.
                </p>
                <Link
                  href="/upload"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                >
                  <Upload className="w-4 h-4" aria-hidden="true" />
                  Analyze My Lease
                </Link>
                <p className="text-xs text-blue-200 mt-3 text-center">Not legal advice</p>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Guides</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Repairs & Maintenance Rights", href: "/tenant-rights/repairs-maintenance" },
                    { label: "Landlord Responsibilities", href: "/tenant-rights/landlord-responsibilities" },
                    { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
                    { label: "Rent Increase Rules", href: "/tenant-rights/rent-increase-rules" },
                    { label: "Breaking a Lease", href: "/tenant-rights/breaking-a-lease" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                        <ChevronRight className="w-3 h-3" aria-hidden="true" />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">Quick Contacts</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "City of Toronto (heat, property standards)", contact: "311" },
                    { label: "LTB (tenant disputes)", contact: "1-888-332-3234" },
                    { label: "ACTO Tenant Hotline", contact: "416-922-4999" },
                    { label: "Legal Aid Ontario", contact: "1-800-668-8258" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-xs text-slate-500 leading-tight">{item.label}</p>
                      <p className="text-sm font-semibold text-slate-900">{item.contact}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">LTB Hearing Locations — Toronto</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Most Toronto hearings are now virtual (Microsoft Teams). In-person locations include:<br /><br />
                  <strong>Toronto North</strong> — Yonge/Lawrence area<br />
                  <strong>Toronto South</strong> — Downtown<br />
                  <strong>Toronto East</strong><br />
                  <strong>Toronto West</strong><br /><br />
                  Check <strong>tribunalsontario.ca/ltb</strong> for current hearing schedules.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
