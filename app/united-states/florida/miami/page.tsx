import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Miami Tenant Rights & Lease Review | Florida Landlord-Tenant Law | LeasePlain",
  description:
    "Understand your rights as a Miami renter under Florida's Residential Landlord and Tenant Act. Security deposit rules, Miami-Dade tenant protections, eviction notices, and lease red flags explained.",
  alternates: { canonical: "https://leaseplain.com/united-states/florida/miami" },
  openGraph: {
    title: "Miami Tenant Rights & Lease Review | Florida Landlord-Tenant Law | LeasePlain",
    description: "Understand your rights as a Miami renter under Florida's Residential Landlord and Tenant Act. Security deposit rules, Miami-Dade tenant protections, eviction notices, and lease red flags explained.",
    url: "https://leaseplain.com/united-states/florida/miami",
    type: "website",
  },
};

const faqItems = [
                  {
                    q: "Does Miami have rent control?",
                    a: "No. Florida state law preempts local governments from enacting rent control or additional tenant protection ordinances. Miami and Miami-Dade County cannot cap rent increases. Miami-Dade's 2022 Tenant's Bill of Rights — which required advance notice of rent increases above 5% — was preempted by Florida HB 1417 (effective July 1, 2023) and is no longer enforceable.",
                  },
                  {
                    q: "What is the 3-day notice in Florida and does it apply to Miami?",
                    a: "Yes. Under Florida Statute 83.56, before a Miami landlord can file for eviction due to non-payment of rent, they must serve the tenant with a written 3-day notice to pay rent or vacate. The 3 days excludes weekends and legal holidays. If you pay the full amount owed within that 3-day window, the landlord cannot proceed with eviction. Keep written proof of any payment you make during this period.",
                  },
                  {
                    q: "Does the Miami-Dade Tenant's Bill of Rights still protect me?",
                    a: "No. The Miami-Dade Tenant's Bill of Rights (passed 2022) was preempted by Florida HB 1417, which took effect July 1, 2023. HB 1417 prohibits local governments from enacting ordinances that regulate landlord-tenant relationships beyond what state law provides. As a result, the Miami-Dade ordinance is no longer enforceable. Tenant protections in Miami are now governed exclusively by the Florida Residential Landlord and Tenant Act (Chapter 83).",
                  },
                  {
                    q: "Can a Miami condo association rule override my lease?",
                    a: "Condo association rules (bylaws and rules and regulations) apply to tenants in Miami condo buildings and are typically incorporated into your lease. They can restrict pets, parking, move-in hours, and other conduct. However, condo rules cannot override Florida state landlord-tenant law. For example, a condo association cannot impose a security deposit beyond what your lease states, and it cannot grant eviction rights the FRLTA does not authorize. Always request the full condo documents before signing a Miami condo lease.",
                  },
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/united-states/florida/miami",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
  "url": "https://leaseplain.com/united-states/florida/miami",
};

const miamiRights = [
  "Florida's Residential Landlord and Tenant Act (FRLTA), codified at Florida Statutes Chapter 83, is the primary law governing Miami leases and applies to all residential tenancies statewide.",
  "Security deposits have no statutory cap in Florida, but landlords must hold them using one of three methods under Florida Statute 83.49: (1) a non-interest-bearing Florida bank account, (2) an interest-bearing Florida bank account (with interest paid to the tenant), or (3) a surety bond posted with the county circuit court clerk. Written notice of the method used must be provided within 30 days of receiving the deposit.",
  "Landlords must return your security deposit within 15 days if they make no claim, or within 30 days with an itemized written statement of deductions.",
  "Florida has no statewide rent control law. Miami-Dade's Tenant's Bill of Rights (2022) was preempted by Florida HB 1417 (effective July 1, 2023) and is no longer enforceable — Florida law prohibits local tenant protection ordinances beyond state law.",
  "For non-payment of rent, your landlord must give you a written 3-day notice (excluding weekends and legal holidays) before filing for eviction.",
  "Landlords must give at least 12 hours advance notice before entering your unit for non-emergency repairs or inspections, and may only enter at reasonable times.",
  "For a lease violation other than non-payment, landlords must give 7 days written notice to cure the violation before proceeding with eviction.",
  "Landlords have a duty to maintain the rental unit in a habitable condition, including working plumbing, structural integrity, pest control, and compliance with building codes — this obligation cannot be waived in the lease.",
];

const miamiRedFlags = [
  "Condo association rule incorporations — Miami has a vast inventory of investor-owned condos; leases that incorporate condo association rules can expose you to fines, move-in fees, and restrictions. Always request a copy of the condo docs before signing.",
  "Hurricane and flood insurance clauses — some Miami leases attempt to shift the cost of hurricane shutter installation, flood preparedness, or storm damage remediation onto tenants. Under Florida law, structural maintenance is the landlord's responsibility.",
  "Vacation rental and subletting restrictions — Miami and Miami Beach have strict short-term rental ordinances; leases may prohibit any subletting or platforms like Airbnb, and violations can result in eviction.",
  "Rent-to-income screening ratios — Miami landlords often require 3x or 4x monthly rent in verifiable income. Review these requirements carefully, as some screening criteria may conflict with Fair Housing Act protections.",
  "Month-to-month conversion fees — some Miami leases include a premium (sometimes 10–25% above base rent) that automatically kicks in if a fixed-term lease converts to month-to-month. This may be buried in the lease.",
  "Late fee structures — Florida law caps late fees only if the lease specifies them; review the grace period and late fee amount to ensure they are clearly stated and reasonable.",
];

const miamiResources = [
  { name: "Miami-Dade County Consumer Services Department", desc: "Handles complaints about landlord-tenant disputes and provides mediation services for Miami-Dade renters." },
  { name: "Florida Bar Lawyer Referral Service", desc: "Connects tenants with Florida-licensed attorneys for a low-cost initial consultation on lease and landlord-tenant issues." },
  { name: "Legal Services of Greater Miami", desc: "Provides free civil legal assistance to low-income Miami residents, including tenant representation in eviction proceedings." },
  { name: "Miami-Dade Housing Choice Voucher Program", desc: "Administers Section 8 vouchers; tenants with vouchers have additional protections against source-of-income discrimination." },
];

export default function MiamiPage() {
  return (
    <>
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
        }).replace(/</g, "\u003c") }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema).replace(/</g, "\u003c") }} />
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "United States", href: "https://leaseplain.com/united-states" },
        { name: "Florida", href: "https://leaseplain.com/united-states/florida" },
        { name: "Miami", href: "https://leaseplain.com/united-states/florida/miami" },
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
              <Link href="/united-states/florida" className="hover:underline">Florida</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Miami</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Miami, Florida
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Miami Tenant Rights: Florida Landlord-Tenant Law Explained
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Miami&apos;s competitive rental market, large condo inventory, and hurricane-prone climate
              create lease issues you won&apos;t find anywhere else. Florida&apos;s Residential Landlord and
              Tenant Act (Chapter 83) sets baseline protections — and knowing them is your first line of defense.
            </p>
            <div className="mt-8">
              <Link
                href="/upload"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Upload className="w-4 h-4" aria-hidden="true" />
                Analyze My Miami Lease
              </Link>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Florida&apos;s Residential Landlord and Tenant Act</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Florida Statutes Chapter 83 — the <strong>Florida Residential Landlord and Tenant Act (FRLTA)</strong> —
                  is the state law that governs almost all private residential rentals in Miami and throughout Florida.
                  It sets out the rights and duties of landlords and tenants, including habitability obligations, security
                  deposit handling, entry notice requirements, and the eviction process.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Florida has no statewide rent control, and the state legislature has preempted local governments
                  from enacting rent caps or additional tenant protections. Note: Miami-Dade&apos;s Tenant&apos;s Bill of Rights (2022) was preempted by Florida HB 1417, effective July 1, 2023, and is no longer enforceable. Florida law prohibits local rent control or tenant protection ordinances beyond state law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Know Your Rights as a Miami Renter</h2>
                <ul className="flex flex-col gap-3">
                  {miamiRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Security Deposit Rules Under Florida Statute 83.49</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Florida Statute 83.49 specifies three methods for holding security deposits. Your landlord must use one of: (1) a <strong>non-interest-bearing Florida bank account</strong> (not commingled with other funds); (2) an <strong>interest-bearing Florida bank account</strong> (landlord must pay tenant at least 75% of annualized interest or 5% simple interest per year); or (3) a <strong>surety bond</strong> posted with the county circuit court clerk. Within 30 days of
                  receiving your deposit, they must send you written notice stating which method they&apos;re using
                  and, if a bank account, which bank. Failure to do so can affect their ability to make deductions.
                  Deposits must be returned within 15 days if no claim is made, or within 30 days with an itemized
                  written statement if deductions are taken.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags to Watch in Miami Leases</h2>
                <ul className="flex flex-col gap-3">
                  {miamiRedFlags.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Miami Lease Issues &amp; Where to Get Help</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Miami renters face a unique combination of challenges: a fast-moving rental market,
                  a large share of condo units governed by additional association rules, and extreme weather
                  that creates disputes about property condition and insurance. The following local resources
                  can help you understand your rights or connect you with legal assistance:
                </p>
                <ul className="flex flex-col gap-4">
                  {miamiResources.map((r) => (
                    <li key={r.name} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                      <span><strong>{r.name}</strong> — {r.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                <h3 className="font-semibold text-amber-900 mb-3">Miami Rental Market Context: What Makes Miami Leases Unique</h3>
                <p className="text-sm text-amber-800 leading-relaxed mb-3">
                  Miami&apos;s rental market is shaped by several factors that tenants elsewhere don&apos;t face. The
                  city&apos;s large inventory of investor-owned condominiums means many tenants are governed by
                  both a residential lease and a condo association&apos;s rules and regulations. Tropical weather
                  — including hurricane season from June through November — creates additional legal questions
                  around habitability, storm preparation, and insurance obligations.
                </p>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Miami&apos;s status as a major international city also means many tenants come from countries
                  where landlord-tenant law works very differently. Florida law applies equally to all
                  tenants regardless of citizenship or immigration status — if you are renting a residential
                  unit in Miami, the FRLTA protects you.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Eviction Process in Miami: What Landlords Must Do</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Florida has a strictly procedural eviction process. Before a landlord can file for eviction
                  in Miami-Dade County Court, they must follow specific notice requirements under Florida
                  Statute 83.56:
                </p>
                <ul className="flex flex-col gap-3 mb-4">
                  <li className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Non-payment of rent:</strong> 3-day written notice to pay or vacate (excluding weekends and legal holidays). If you pay in full within the 3-day window, the landlord cannot proceed with eviction.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Curable lease violation:</strong> 7-day written notice giving the tenant an opportunity to cure the violation. If you remedy the issue within 7 days, the eviction cannot proceed.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Incurable lease violation:</strong> 7-day written notice of termination with no right to cure (for serious violations such as criminal activity on the premises).</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>End of lease term / no cause:</strong> For month-to-month tenancies, at least 30 days written notice before the end of the monthly period. For annual leases with no renewal, proper written notice as specified in the lease or statute.</span>
                  </li>
                </ul>
                <p className="text-slate-700 leading-relaxed text-sm">
                  If a landlord fails to follow these notice procedures exactly — even a technical defect in
                  delivery or timing — a Miami-Dade court may dismiss the eviction. If you receive an eviction
                  notice, count the days carefully and consult Legal Services of Greater Miami or a private
                  attorney immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>

            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your Miami lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI reviews your Miami lease against Florida&apos;s FRLTA and Miami-Dade rules, flagging
                  condo conflicts, deposit irregularities, and prohibited clauses.
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
                    { label: "Florida Tenant Rights", href: "/united-states/florida" },
                    { label: "United States Overview", href: "/united-states" },
                    { label: "California Tenant Rights", href: "/united-states/california" },
                    { label: "New York City Tenant Rights", href: "/united-states/new-york/new-york-city" },
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
              <h2 className="text-3xl font-bold text-white mb-3">Renting in Miami?</h2>
              <p className="text-blue-100 leading-relaxed max-w-xl">
                Upload your lease and get a plain-English breakdown before you sign. Know your Florida rights.
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
