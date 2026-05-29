import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, Globe, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "US Tenant Rights by State: California, New York, Florida | LeasePlain",
  description:
    "Comprehensive guide to US tenant rights by state — federal protections, California AB 1482, New York rent stabilization, Florida landlord-tenant law, and where to file complaints.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/united-states" },
  openGraph: {
    type: "website",
    title: "US Tenant Rights by State: California, New York, Florida | LeasePlain",
    description: "Comprehensive guide to US tenant rights by state — federal protections, California AB 1482, New York rent stabilization, Florida landlord-tenant law, and where to file complaints.",
    url: "https://leaseplain.com/tenant-rights/united-states",
  },
  keywords: ["US tenant rights by state", "American renter rights", "tenant protection United States", "California tenant rights", "New York tenant rights", "Florida tenant rights", "Fair Housing Act", "rent control USA"],
};

const faqItems = [
  {
    question: "Which US states have rent control?",
    answer: "Rent control exists at the state or local level, not federally. California has a statewide rent cap under AB 1482 (5% + CPI, max 10%), plus stronger local ordinances in cities like San Francisco, Los Angeles, and Oakland. New York has rent stabilization covering approximately one million NYC apartments and a Good Cause Eviction law (2024) limiting no-fault rent increases. Oregon has statewide rent control (7% + CPI, max 10%). New Jersey, Maryland, and Washington DC have local rent control laws. Florida, Texas, and most Southern states have no rent control — in fact, Florida HB 1417 (2023) preempted all local rent control ordinances statewide.",
  },
  {
    question: "What is the security deposit limit in California?",
    answer: "Under AB 12 (effective July 1, 2024), California landlords can charge a maximum security deposit of one month's rent — for both furnished and unfurnished units. There is one exception: small landlords who own no more than two residential properties with a combined total of four or fewer units may charge up to two months' rent for unfurnished units. Before July 1, 2024, the limit was two months' rent for unfurnished units and three months' for furnished units.",
  },
  {
    question: "How long does a landlord have to return a security deposit in Florida?",
    answer: "Under Florida Statutes § 83.49, if a landlord intends to make no deductions, the deposit must be returned within 15 days of the tenant vacating. If the landlord intends to make deductions, they must send an itemized written notice of the claim within 30 days of the tenant vacating. If the landlord fails to send this itemized notice within 30 days, they forfeit the right to make any deductions from the deposit.",
  },
  {
    question: "What is Good Cause Eviction in New York?",
    answer: "The Good Cause Eviction Law, enacted as part of New York's 2024 budget, applies automatically in New York City and allows municipalities statewide to opt in. For covered tenants, landlords must have a valid legal reason (good cause) to evict or to refuse lease renewal. For no-fault non-renewals (such as the landlord wanting the unit back without fault by the tenant), landlords may only raise rent by the lesser of 8.82% or 5% plus CPI. The law applies to buildings with four or more units but has exemptions for small landlords (owner-occupied buildings of 10 or fewer units), owner-occupied buildings of four or fewer units, and buildings less than 30 years old.",
  },
  {
    question: "Can a landlord raise rent by any amount in Florida?",
    answer: "Yes. Florida has no statewide rent control, and since HB 1417 took effect in July 2023, no local government in Florida can enact or maintain a rent control ordinance. This law expressly preempted Miami-Dade County's rent stabilization measure that voters had approved in 2022. A Florida landlord can raise rent by any amount — 10%, 50%, or more — with proper notice. The required notice period depends on the tenancy type: 15 days for month-to-month, 30 days for tenancies over one year, 60 days if over two years, and 90 days if over three years.",
  },
];

export default function UnitedStatesTenantRightsPage() {
  return (
    <>
      <ArticleSchema
        headline="US Tenant Rights by State: California, New York, Florida"
        description="Comprehensive guide to US tenant rights by state — federal protections, California AB 1482, New York rent stabilization, Florida landlord-tenant law, and where to file complaints."
        url="https://leaseplain.com/tenant-rights/united-states"
        datePublished="2025-01-15"
        dateModified="2026-05-29"
        keywords={["US tenant rights by state", "American renter rights", "tenant protection United States", "California tenant rights", "New York tenant rights", "Florida tenant rights"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tenant Rights", href: "https://leaseplain.com/tenant-rights" },
        { name: "United States", href: "https://leaseplain.com/tenant-rights/united-states" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer },
        })),
      }).replace(/</g, "<") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://leaseplain.com/tenant-rights/united-states",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".speakable-summary"],
        },
      }).replace(/</g, "<") }} />
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/tenant-rights" className="hover:underline">Tenant Rights</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>United States</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              US Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              US Tenant Rights by State: California, New York, Florida
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Tenant rights in the United States are governed primarily by state law, with
              significant additional protections in many cities. Federal law sets a baseline
              through the Fair Housing Act and other statutes. This guide covers federal
              protections, state-by-state key rules, and where to get help.
            </p>
          </div>
        </section>

        {/* How the US system works */}
        <section className="py-14 px-4 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How US Tenancy Law Works</h2>
            <div className="grid md:grid-cols-2 gap-6 text-slate-700 text-sm leading-relaxed mb-8">
              <div>
                <p className="mb-3">
                  Unlike Canada — where each province has a comprehensive residential tenancy
                  statute — the United States has no single federal residential tenancy framework.
                  Tenant rights are governed primarily by <strong>state law</strong>, with
                  substantial additional protections in many <strong>cities and counties</strong>,
                  particularly around rent stabilization and just-cause eviction.
                </p>
                <p>
                  The result is extreme variation. A tenant in San Francisco has some of the
                  strongest protections in North America. A tenant in rural Texas may have very
                  few. Even within the same state, city ordinances can dramatically change a
                  tenant&apos;s rights.
                </p>
              </div>
              <div>
                <p className="mb-3">
                  <strong>Federal law</strong> plays a major role in anti-discrimination
                  protections. The <em>Fair Housing Act</em>, the <em>Americans with Disabilities
                  Act</em>, the <em>Violence Against Women Act</em>, and the{" "}
                  <em>Lead Disclosure Rule</em> all apply nationwide regardless of state law.
                </p>
                <p>
                  State laws govern rent control (or its absence), security deposit rules, notice
                  requirements, and eviction procedures. Courts and administrative tribunals vary
                  significantly in how quickly and fairly they process tenant claims.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">LeasePlain is primarily focused on Canada</h3>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Our AI lease analyzer and tenant rights guides are currently optimized for
                    Canadian law — primarily Ontario. We are actively building US state coverage.
                    In the meantime, this page provides a substantive overview of key protections.
                  </p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center gap-2 mt-3 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <Upload className="w-3.5 h-3.5" aria-hidden="true" />
                    Analyze a Canadian Lease Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Federal protections */}
        <section className="py-14 px-4 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Federal Protections — Apply in Every State</h2>
            <p className="text-slate-600 text-sm mb-8 leading-relaxed">
              These federal laws apply to all residential tenants in the United States,
              regardless of which state or city they live in.
            </p>

            <div className="flex flex-col gap-6">

              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-slate-900">Fair Housing Act (42 U.S.C. § 3604)</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Federal — applies to all landlords</p>
                  </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  The Fair Housing Act prohibits discrimination in the sale, rental, or financing
                  of housing based on seven protected characteristics: <strong>race, color,
                  national origin, religion, sex, familial status, and disability</strong>. It is
                  illegal for a landlord to refuse to rent, set different terms or conditions, or
                  otherwise treat a tenant differently because of any of these characteristics.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Many states and cities extend these protections further — adding source of income,
                  sexual orientation, gender identity, age, and immigration status as protected
                  classes. The federal law sets a floor, not a ceiling.
                </p>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-slate-900">Lead Disclosure Rule (42 U.S.C. § 4852d)</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Applies to pre-1978 housing</p>
                  </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Landlords of housing built before 1978 must disclose any known lead-based paint
                  hazards and provide tenants with an EPA-approved informational pamphlet{" "}
                  (<em>Protect Your Family from Lead in Your Home</em>) before the lease is signed.
                  This applies to all 50 states. Violations carry civil penalties of up to $19,507
                  per violation (adjusted for inflation). Lead exposure — particularly in older
                  housing stock — remains a significant health risk, especially for children.
                </p>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-slate-900">Violence Against Women Act (VAWA)</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Applies to federally assisted housing; many states extend broader coverage</p>
                  </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  VAWA protects survivors of domestic violence, dating violence, sexual assault, and
                  stalking from being evicted or denied housing because they are victims of such
                  crimes. A landlord in federally assisted housing cannot evict a tenant solely
                  because they were the victim of abuse, nor can they hold an incident of
                  abuse-related crime against the tenant at lease renewal. Survivors may also
                  have the right to an emergency lease transfer to a different unit. Many states
                  and cities have enacted analogous protections that apply to private (non-subsidized)
                  housing.
                </p>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-slate-900">Americans with Disabilities Act — Reasonable Accommodation</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Federal; also enforced through Fair Housing Act Section 504</p>
                  </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Landlords must provide <strong>reasonable accommodations</strong> — changes in
                  rules, policies, or services — when necessary for a person with a disability to
                  have equal opportunity to use and enjoy the housing. They must also allow{" "}
                  <strong>reasonable modifications</strong> (physical changes to the unit or
                  common areas) at the tenant&apos;s expense, unless the landlord receives federal
                  funding. Examples: allowing a guide dog despite a no-pets policy; installing a
                  grab bar in a bathroom; assigning a reserved accessible parking space. Landlords
                  cannot charge extra fees or deposits solely because of a disability-related
                  accommodation.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* State-by-state detail */}
        <section className="py-14 px-4 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">State-by-State Key Rules</h2>
            <p className="text-slate-600 text-sm mb-8 leading-relaxed">
              Detailed rules for major states. Local ordinances may be significantly stronger —
              always check your city&apos;s rules as well.
            </p>

            {/* California */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-slate-900 text-xl">California</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Key legislation: AB 1482 (Tenant Protection Act, 2019) · AB 12 (2024)</p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Rent Cap — AB 1482 (Tenant Protection Act, 2019)</h4>
                  <p className="text-sm text-slate-700 leading-relaxed mb-2">
                    California&apos;s statewide rent cap limits annual increases to the lower of:
                    (a) <strong>5% plus the local CPI</strong> (Consumer Price Index), or (b)
                    <strong> 10% total</strong>. The cap applies to buildings that are 15 or more
                    years old — buildings built before January 1, 2005 are generally covered as of
                    2020 (the cutoff year rolls forward annually). Single-family homes and
                    condominiums are exempt unless owned by a corporation or REIT. Mobile homes,
                    hotels, dormitories, and units already subject to local rent control are also exempt.
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Cities including San Francisco, Los Angeles (RSO covers pre-1979 buildings), Oakland,
                    and San Jose have their own rent ordinances that are often stricter than the
                    statewide cap — including lower percentage caps and wider coverage.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Security Deposit — AB 12 (effective July 1, 2024)</h4>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Maximum: 1 month's rent for both furnished and unfurnished units",
                      "Small-landlord exception: landlords who own no more than 2 residential properties with a combined total of 4 or fewer units may charge up to 2 months' rent for unfurnished units",
                      "Before July 1, 2024: limit was 2 months (unfurnished) or 3 months (furnished)",
                      "Return deadline: 21 days after tenant vacates, with itemized statement",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Just Cause Eviction — AB 1482</h4>
                  <p className="text-sm text-slate-700 leading-relaxed mb-2">
                    For covered units, after a tenant has resided there for 12 months (or if any
                    occupant has lived there for 24+ months), the landlord must have just cause to
                    evict. There are 15 enumerated just-cause reasons split between:
                  </p>
                  <ul className="flex flex-col gap-2 mb-2">
                    {[
                      "At-fault causes: non-payment of rent, criminal activity, damage to property, refusal to grant lawful entry, assignment or sublease in violation of lease",
                      "No-fault causes (require relocation assistance): owner move-in, demolition, withdrawal from rental market, government order requiring vacancy",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                        <ChevronRight className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    No-fault evictions require the landlord to pay relocation assistance equal to
                    one month&apos;s rent directly to the tenant.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Notice Requirements</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-50">
                          <th className="text-left p-2.5 border border-slate-100 font-semibold text-slate-700">Situation</th>
                          <th className="text-left p-2.5 border border-slate-100 font-semibold text-slate-700">Notice Required</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Non-payment of rent", "3-day notice to pay or quit"],
                          ["Curable lease violation", "3-day notice to cure or quit"],
                          ["Uncurable lease violation", "3-day unconditional notice to quit"],
                          ["No-fault termination (tenant < 1 year)", "30-day notice"],
                          ["No-fault termination (tenant ≥ 1 year)", "60-day notice"],
                        ].map(([situation, notice]) => (
                          <tr key={situation} className="border-b border-slate-100">
                            <td className="p-2.5 text-slate-700 border border-slate-100">{situation}</td>
                            <td className="p-2.5 font-semibold text-blue-700 border border-slate-100">{notice}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* New York */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-slate-900 text-xl">New York</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Key legislation: HSTPA (2019) · Good Cause Eviction Law (2024)</p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Rent Stabilization — HSTPA (2019)</h4>
                  <p className="text-sm text-slate-700 leading-relaxed mb-2">
                    New York&apos;s Housing Stability and Tenant Protection Act (2019) significantly
                    strengthened rent stabilization. Rent stabilization generally applies to buildings
                    with 6 or more units built before 1974 in New York City, covering approximately
                    one million apartments.
                  </p>
                  <ul className="flex flex-col gap-2">
                    {[
                      "HSTPA eliminated luxury decontrol — apartments can no longer be deregulated when rent exceeds a threshold or when a high-income tenant vacates",
                      "Major Capital Improvement (MCI) rent increases are now capped at 2% per year and must be removed from the rent after 30 years",
                      "Individual Apartment Improvement (IAI) increases are capped at $89/month per $15,000 of improvements (reset each tenancy)",
                      "RGB annual guidelines 2024–2025 lease year: 2.75% (one-year lease), 5.25% (two-year lease)",
                      "Security deposit: capped at 1 month's rent statewide for all residential tenancies",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Good Cause Eviction Law (2024)</h4>
                  <p className="text-sm text-slate-700 leading-relaxed mb-2">
                    Effective April 2024, New York enacted a statewide Good Cause Eviction Law that
                    applies automatically in New York City and allows other municipalities to opt in.
                    For covered tenants:
                  </p>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Landlords must have a legitimate reason (good cause) to commence eviction proceedings or to refuse to renew a lease",
                      "For no-fault non-renewals: landlord may only raise rent by the lesser of 8.82% or 5% plus CPI; if the proposed increase exceeds this, the tenant can contest it in court",
                      "Applies to buildings with 4 or more units; owner-occupied buildings of 10 or fewer units are exempt",
                      "Exemptions: buildings less than 30 years old (rolling), buildings subject to existing rent stabilization, subsidized housing, dormitories, co-ops",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Notice Requirements</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-50">
                          <th className="text-left p-2.5 border border-slate-100 font-semibold text-slate-700">Situation</th>
                          <th className="text-left p-2.5 border border-slate-100 font-semibold text-slate-700">Notice Required</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Non-payment of rent", "14-day rent demand; then eviction proceeding"],
                          ["Holdover (lease expired)", "30-day notice if tenancy < 1 year; 60-day if 1–2 years; 90-day if > 2 years"],
                          ["Lease non-renewal (stabilized)", "Must offer renewal 90–150 days before expiration"],
                        ].map(([situation, notice]) => (
                          <tr key={situation} className="border-b border-slate-100">
                            <td className="p-2.5 text-slate-700 border border-slate-100">{situation}</td>
                            <td className="p-2.5 font-semibold text-blue-700 border border-slate-100">{notice}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Florida */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-slate-900 text-xl">Florida</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Key legislation: Florida Residential Landlord and Tenant Act · HB 1417 (2023)</p>
                </div>
              </div>

              <div className="space-y-5">

                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <p className="text-sm text-amber-800 font-semibold mb-1">No rent control anywhere in Florida</p>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    HB 1417, which took effect July 1, 2023, expressly preempts all local
                    rent control ordinances in Florida. No city or county — including Miami-Dade,
                    which had passed a rent stabilization measure in 2022 — can regulate rent
                    amounts. Landlords may raise rent by any amount.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Security Deposit Rules</h4>
                  <p className="text-sm text-slate-700 leading-relaxed mb-2">
                    Florida Statutes § 83.49 governs security deposits. There is no cap on the
                    deposit amount, but the landlord must hold it using one of three permitted methods —
                    disclosed in writing within 30 days of receipt:
                  </p>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Method 1: Non-interest-bearing separate Florida banking institution account",
                      "Method 2: Interest-bearing account — tenant receives 75% of annualized interest rate or 5% per year, whichever the landlord elects",
                      "Method 3: Surety bond posted by the landlord",
                      "Return with no deductions: landlord must return within 15 days of tenant vacating",
                      "Return with deductions: landlord must send itemized written notice of claim within 30 days; failure to do so forfeits the right to make deductions",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Notice Requirements</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-50">
                          <th className="text-left p-2.5 border border-slate-100 font-semibold text-slate-700">Situation</th>
                          <th className="text-left p-2.5 border border-slate-100 font-semibold text-slate-700">Notice Required</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Non-payment of rent", "3-day notice (excluding weekends and legal holidays)"],
                          ["Curable lease violation", "7-day notice to cure"],
                          ["Uncurable lease violation", "7-day notice of termination"],
                          ["Month-to-month termination", "15 days before end of monthly period"],
                          ["Tenancy > 1 year", "30-day notice"],
                          ["Tenancy > 2 years", "60-day notice"],
                          ["Tenancy > 3 years", "90-day notice (updated 2023)"],
                        ].map(([situation, notice]) => (
                          <tr key={situation} className="border-b border-slate-100">
                            <td className="p-2.5 text-slate-700 border border-slate-100">{situation}</td>
                            <td className="p-2.5 font-semibold text-blue-700 border border-slate-100">{notice}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>

            {/* Texas */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-slate-900 text-xl">Texas</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Key legislation: Texas Property Code, Title 8 (Landlord and Tenant)</p>
                </div>
              </div>
              <ul className="flex flex-col gap-2">
                {[
                  "No statewide rent control; Houston, Dallas, Austin, and San Antonio have no rent caps",
                  "Security deposit: no statutory cap; must be returned within 30 days of move-out with itemized deductions",
                  "3-day notice to vacate required before filing eviction (unlawful detainer) for non-payment",
                  "Landlord must repair conditions materially affecting health or safety within a reasonable time after written notice — typically 7 days",
                  "Tenant may terminate lease early without penalty if landlord fails to repair habitability conditions",
                  "Retaliation (eviction or rent increase within 6 months of tenant asserting rights) is presumed retaliatory under Texas Property Code § 92.331",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Where to file complaints */}
        <section className="py-14 px-4 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Where to File Tenant Complaints</h2>
            <p className="text-slate-600 text-sm mb-8 leading-relaxed">
              The right agency depends on the type of complaint and which state you are in.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3">California</h3>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  {[
                    "Local housing authority or code enforcement (habitability, repairs)",
                    "California Department of Consumer Affairs (general tenant issues)",
                    "California Civil Rights Department (DFEH) for housing discrimination",
                    "NYC-equivalent: no single body — county courts for most disputes",
                    "LA Housing Dept (LAHD) for RSO complaints in Los Angeles",
                    "SF Rent Board for rent ordinance issues in San Francisco",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 leading-relaxed">
                      <ChevronRight className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3">New York</h3>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  {[
                    "NYC HPD (Housing Preservation and Development) for habitability and city code violations",
                    "DHCR (Division of Housing and Community Renewal) for rent stabilization issues",
                    "NYS Division of Housing and Community Renewal for statewide issues",
                    "NYC Commission on Human Rights for discrimination",
                    "Housing Court (NYC Civil Court) for eviction defense",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 leading-relaxed">
                      <ChevronRight className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3">Florida</h3>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  {[
                    "County court small claims division (deposit disputes up to $8,000)",
                    "Florida Commission on Human Relations (FCHR) for housing discrimination",
                    "HUD Fair Housing complaint (federal discrimination cases)",
                    "Local code enforcement for habitability and maintenance issues",
                    "Florida Bar Referral Service to find a tenant's rights attorney",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 leading-relaxed">
                      <ChevronRight className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 px-4 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-sm mb-8 leading-relaxed">
              Common questions about tenant rights in the United States.
            </p>
            <div className="flex flex-col gap-5">
              {faqItems.map((faq) => (
                <div key={faq.question} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Red flags */}
        <section className="py-14 px-4 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Red Flags in US Leases</h2>
            <div className="flex flex-col gap-3">
              {[
                "Lease waiving your right to a habitable unit — unenforceable in all 50 states (implied warranty of habitability)",
                "Excessive late fees beyond what state law permits (many states cap late fees at $50–$100 or 5% of rent)",
                "Lease purporting to allow eviction without court process — landlords must use courts in all US states",
                "Failure to disclose lead-based paint in pre-1978 buildings — a federal violation",
                "Discrimination based on a protected class in lease application or terms",
                "Security deposit held in landlord's operating account rather than a separate trust account (required in many states)",
                "No-pets clause used to refuse service or emotional support animals — this violates the Fair Housing Act",
              ].map((flag) => (
                <div key={flag} className="flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <p className="text-sm text-slate-700 leading-relaxed">{flag}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom links */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-bold text-slate-900 mb-4">More Tenant Rights Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/tenant-rights/canada"
                className="group bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-200 hover:bg-blue-50 transition-all"
              >
                <p className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors text-sm mb-1 flex items-center gap-1">
                  Canadian Tenant Rights Guide <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                </p>
                <p className="text-xs text-slate-500">Province-by-province: Ontario, BC, Alberta, Quebec</p>
              </Link>
              <Link
                href="/lease-clauses"
                className="group bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-200 hover:bg-blue-50 transition-all"
              >
                <p className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors text-sm mb-1 flex items-center gap-1">
                  Lease Clause Library <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                </p>
                <p className="text-xs text-slate-500">Understand every clause in your lease</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
