import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Los Angeles Tenant Rights & Lease Review | LA Rent Control Explained | LeasePlain",
  description:
    "Understand your rights as an LA renter: LA Rent Stabilization Ordinance (RSO), AB 1482 statewide rent cap, just cause eviction, security deposit limits, and HCIDLA resources.",
  alternates: { canonical: "https://leaseplain.com/united-states/california/los-angeles" },
  openGraph: {
    title: "Los Angeles Tenant Rights & Lease Review | LA Rent Control Explained | LeasePlain",
    description: "Understand your rights as an LA renter: LA Rent Stabilization Ordinance (RSO), AB 1482 statewide rent cap, just cause eviction, security deposit limits, and HCIDLA resources.",
    url: "https://leaseplain.com/united-states/california/los-angeles",
    type: "website",
  },
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/united-states/california/los-angeles",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
  "url": "https://leaseplain.com/united-states/california/los-angeles",
};

const laTenantProtections = [
  "The LA Rent Stabilization Ordinance (RSO) applies to most rental units built on or before October 1, 1978 in the City of Los Angeles — covering roughly 650,000 units — and limits annual rent increases to a percentage set each year by HCIDLA.",
  "AB 1482 (California Tenant Protection Act, 2019) provides a statewide rent cap of 5% plus local CPI (maximum 10%) for most residential units not covered by a local ordinance like the RSO, for tenants who have lived in the unit for 12+ months.",
  "Just Cause eviction requirements apply citywide under both the RSO and AB 1482: after 12 months of tenancy, landlords need a legally recognized reason — non-payment, lease violation, owner move-in, etc. — to terminate a tenancy.",
  "Security deposits are capped at 1 month's rent for unfurnished units and 2 months' rent for furnished units under California Civil Code 1950.5 (as amended by AB 12, effective July 2024). Landlords must return deposits within 21 days of move-out.",
  "The LA Housing + Community Investment Department (HCIDLA) administers the RSO, accepts complaints about unlawful rent increases, and can order landlords to reduce illegal rents.",
  "Landlords must give at least 24 hours advance written notice before entering a unit for non-emergency repairs, inspections, or showings under California Civil Code 1954.",
  "Tenants in RSO buildings have the right to request relocation assistance when evicted for no-fault reasons such as owner move-in, substantial remodel, or Ellis Act withdrawal — amounts vary by unit and household type.",
  "No-fault evictions under the RSO (e.g., owner move-in, Ellis Act) require payment of relocation assistance — in 2024 amounts ranged from approximately $8,800 to over $23,000 depending on unit size, tenancy length, and household circumstances.",
];

const laLeaseRedFlags = [
  "Rent increases above the RSO allowable amount — if your unit was built before October 1978, any rent increase exceeding the current RSO cap (typically 3–5% in recent years) without prior HCIDLA approval may be illegal.",
  "Unlawful eviction tactics and cash-for-keys pressure — under RSO, a landlord offering cash-for-keys must provide at minimum the statutory relocation assistance amount; accepting less may waive your rights if not negotiated carefully.",
  "Sublease restrictions in RSO buildings — California Civil Code 1995.310 allows landlords to withhold consent to sublease only on reasonable grounds; outright bans on subletting in RSO units may be unenforceable in some circumstances.",
  "\"No-cause eviction\" language in leases for city-covered buildings — any lease clause purporting to allow no-cause eviction after 12 months in an RSO or AB 1482 unit is unenforceable and may constitute landlord harassment.",
  "Missing or incomplete rent stabilization disclosure — HCIDLA rules require landlords of RSO units to notify tenants in writing of their RSO rights at the start of tenancy; absence of this disclosure is itself a violation.",
  "Waiver of habitability rights — California law (Civ. Code 1942.1) prohibits landlords from requiring tenants to waive the implied warranty of habitability; any such clause is void and unenforceable.",
];

const laResources = [
  { name: "LA Housing + Community Investment Dept (HCIDLA)", desc: "Administers the RSO, handles rent increase complaints, and registers rental units. File complaints at housing.lacity.gov." },
  { name: "LA County Dept of Consumer & Business Affairs", desc: "Provides free tenant-landlord mediation, information about the unincorporated LA County rental market, and housing resources." },
  { name: "Bet Tzedek Legal Services", desc: "Provides free civil legal help to low-income LA residents including tenant representation in eviction court and lease counseling." },
  { name: "ACCE (Alliance of Californians for Community Empowerment)", desc: "Tenant organizing and advocacy group active in LA neighborhoods; runs tenant hotlines and workshops on RSO rights." },
  { name: "LA Rent Adjustment Commission", desc: "Hears appeals of HCIDLA decisions on RSO rent adjustments; tenants can participate in hearings affecting their building." },
];

export default function LosAngelesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "United States", href: "https://leaseplain.com/united-states" },
        { name: "California", href: "https://leaseplain.com/united-states/california" },
        { name: "Los Angeles", href: "https://leaseplain.com/united-states/california/los-angeles" },
      ]} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/united-states" className="hover:underline">United States</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/united-states/california" className="hover:underline">California</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Los Angeles</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Los Angeles, California
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Los Angeles Tenant Rights: Rent Control, Just Cause &amp; Lease Protections
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Los Angeles has some of the strongest tenant protections in the United States. The LA Rent
              Stabilization Ordinance (RSO), AB 1482 statewide rent cap, and citywide just-cause eviction
              rules give LA renters significant rights — but only if you know which laws apply to your unit.
            </p>
            <div className="mt-8">
              <Link
                href="/upload"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Upload className="w-4 h-4" aria-hidden="true" />
                Analyze My LA Lease
              </Link>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The LA Rent Stabilization Ordinance &amp; AB 1482</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Los Angeles operates a two-tiered system of tenant protections. The <strong>LA Rent Stabilization
                  Ordinance (RSO)</strong>, administered by HCIDLA, applies to most rental units in buildings built
                  on or before October 1, 1978 — roughly 650,000 units citywide. RSO units have strict rent increase
                  limits set annually and require just cause for eviction regardless of tenancy length.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  For units not covered by the RSO (primarily newer buildings), California&apos;s statewide{" "}
                  <strong>AB 1482 (Tenant Protection Act, 2019)</strong> provides a rent cap of 5% plus the local
                  CPI (never exceeding 10% total) and just-cause eviction protections after 12 months of tenancy.
                  Some units are exempt from AB 1482 entirely — single-family homes owned by individuals,
                  condos sold separately, and units built within the last 15 years.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">LA Tenant Protections</h2>
                <ul className="flex flex-col gap-3">
                  {laTenantProtections.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Is My LA Unit Under RSO or AB 1482?</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  If your building was built before October 1, 1978 and contains two or more units, it is
                  most likely RSO-covered. You can verify by searching the HCIDLA&apos;s online rental registry
                  at <strong>housing.lacity.gov</strong>. If the building was built after 1978 but before 2009
                  (i.e., more than 15 years old), AB 1482 likely applies — check whether you&apos;ve lived there
                  more than 12 months, which triggers just-cause protections. Single-family homes, condos, and
                  buildings less than 15 years old are typically exempt from both laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">LA Lease Red Flags</h2>
                <ul className="flex flex-col gap-3">
                  {laLeaseRedFlags.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Resources for LA Tenants</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Los Angeles has a robust network of tenant advocacy organizations, city agencies, and
                  legal aid providers. Whether you need help understanding your RSO rights, filing an
                  overcharge complaint, or defending against an unlawful eviction, these resources can help:
                </p>
                <ul className="flex flex-col gap-4">
                  {laResources.map((r) => (
                    <li key={r.name} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                      <span><strong>{r.name}</strong> — {r.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  {
                    q: "Does LA's RSO apply to my apartment?",
                    a: "The LA RSO applies to most rental units in buildings built on or before October 1, 1978 in the City of Los Angeles. Check the HCIDLA's online rental registry at housing.lacity.gov to confirm your unit's status. If your building is newer, California's AB 1482 may provide a statewide rent cap and just-cause protections after 12 months of tenancy.",
                  },
                  {
                    q: "What is 'just cause' eviction and does it apply in LA?",
                    a: "Just cause eviction means a landlord can only evict you for a legally recognized reason — such as non-payment of rent, a material lease violation, or the owner moving in. In Los Angeles, RSO buildings require just cause at all times. For non-RSO units, AB 1482 requires just cause after 12 months of tenancy. Without a qualifying reason, the eviction notice is invalid and you have grounds to fight it.",
                  },
                  {
                    q: "What is the Ellis Act and how does it affect LA tenants?",
                    a: "The Ellis Act is a California state law that allows landlords to remove all units in a building from the rental market (i.e., go out of the rental business entirely). In LA, Ellis Act evictions of RSO tenants require advance notice (120 days, or one year for seniors/disabled tenants) and payment of relocation assistance. Tenants also have a right of first refusal if the units return to the market within 10 years. Ellis Act abuse is a major issue in LA — contact HCIDLA or an attorney if you receive this notice.",
                  },
                  {
                    q: "How much is the security deposit limit in Los Angeles?",
                    a: "California law (as amended by AB 12 effective July 2024) caps security deposits at 1 month's rent for unfurnished units and 2 months' rent for furnished units. This limit applies to all LA landlords. The deposit must be returned within 21 days of move-out along with an itemized statement of any deductions. Landlords cannot deduct for normal wear and tear.",
                  },
                ]} />
              </div>

            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your LA lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI reviews your LA lease against the RSO and AB 1482, flagging illegal rent increases,
                  missing disclosures, and unenforceable clauses.
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
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Pages</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "California Tenant Rights", href: "/united-states/california" },
                    { label: "Florida Tenant Rights", href: "/united-states/florida" },
                    { label: "NYC Tenant Rights", href: "/united-states/new-york/new-york-city" },
                    { label: "United States Overview", href: "/united-states" },
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
            </aside>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">Renting in Los Angeles?</h2>
              <p className="text-blue-100 leading-relaxed max-w-xl">
                Upload your lease and get a plain-English breakdown before you sign. Know your RSO and AB 1482 rights.
              </p>
            </div>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap flex-shrink-0"
            >
              <Upload className="w-4 h-4" aria-hidden="true" />
              Analyze My Lease
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
}
