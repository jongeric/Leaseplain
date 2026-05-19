import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, ChevronRight, Upload, CheckCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help in New York City | Tenant Rights (Coming Soon) | LeasePlain",
  description:
    "Learn about NYC tenant rights: rent stabilization, DHCR, major capital improvements (MCI), and the right to counsel. LeasePlain's AI lease analysis for New York City is coming soon.",
  alternates: { canonical: "https://leaseplain.com/united-states/new-york/new-york-city" },
  openGraph: {
    title: "Lease Help in New York City | Tenant Rights (Coming Soon) | LeasePlain",
    description: "Learn about NYC tenant rights: rent stabilization, DHCR, major capital improvements (MCI), and the right to counsel. LeasePlain's AI lease analysis for New York City is coming soon.",
    url: "https://leaseplain.com/united-states/new-york/new-york-city",
    type: "website",
  },
};

const nycRights = [
  "Over one million NYC apartments are rent-stabilized — landlords can only increase rent by the annual percentage set by the NYC Rent Guidelines Board.",
  "Rent-stabilized tenants have the right to a lease renewal on the same terms (with only guideline increases).",
  "Security deposits are capped at one month's rent under the 2019 HSTPA — any excess must be returned.",
  "Landlords must return security deposits within 14 days of tenancy end with a written itemized statement.",
  "NYC provides a free right to counsel for low-income tenants facing eviction in Housing Court.",
  "The Division of Housing and Community Renewal (DHCR) handles rent stabilization complaints and overcharge claims.",
  "Tenants can apply for rent overcharge refunds going back up to 6 years if a landlord improperly deregulated a stabilized apartment.",
  "Landlords are prohibited from retaliating against tenants who exercise their legal rights (e.g., filing complaints, organizing).",
];

const nycLeaseIssues = [
  "Leases that fail to disclose a unit's rent-stabilized status — tenants may be owed overcharge refunds.",
  "Major Capital Improvement (MCI) surcharges added to rent without proper DHCR approval and notice.",
  "Individual Apartment Improvement (IAI) rent increases claimed for work not actually done — a significant fraud vector.",
  "Lease clauses requiring tenants to waive the right to a jury trial or waive protections under the NYC Administrative Code.",
  "Broker fees charged to tenants — under NYC law (FARE Act), the party who hires the broker (typically the landlord) must pay the broker's fee.",
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/united-states/new-york/new-york-city",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
  "url": "https://leaseplain.com/united-states/new-york/new-york-city",
};

export default function NewYorkCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "United States", href: "https://leaseplain.com/united-states" },
        { name: "New York", href: "https://leaseplain.com/united-states/new-york" },
        { name: "New York City", href: "https://leaseplain.com/united-states/new-york/new-york-city" },
      ]} />
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/united-states" className="hover:underline">United States</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/united-states/new-york" className="hover:underline">New York</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>New York City</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-amber-200">
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              AI Analysis Coming Soon
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in New York City | Tenant Rights (Coming Soon)
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              New York City has the most complex rental regulatory system in the United States.
              Rent stabilization, DHCR oversight, free right to counsel, and a maze of capital
              improvement rules make understanding your lease essential — and often contentious.
              LeasePlain's AI analysis for NYC is in development.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">NYC's Rental Market Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  New York City is home to approximately 2.3 million rental units, making it the
                  largest rental market in the United States. Roughly half of those units are
                  rent-stabilized under the city's rent stabilization system, administered by the
                  Division of Housing and Community Renewal (DHCR) and the NYC Rent Guidelines Board.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  For market-rate renters, NYC can be extraordinarily expensive. For stabilized
                  tenants, however, the regulatory framework provides meaningful rent and tenure
                  security — if tenants know how to assert their rights. The 2019 HSTPA closed
                  many loopholes that had allowed landlords to deregulate apartments, and the
                  current system is significantly more protective than before.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as a NYC Renter</h2>
                <ul className="flex flex-col gap-3">
                  {nycRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Major Capital Improvements (MCI) in NYC</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  In rent-stabilized buildings, landlords can apply to the DHCR for a permanent
                  rent increase to recover the cost of building-wide capital improvements (e.g.,
                  new roof, boiler, windows) — these are called Major Capital Improvements (MCIs).
                  Under the HSTPA, the rent increase from an MCI is now temporary (it expires after
                  the MCI cost is fully recovered) rather than permanent, and it is capped at 2%
                  of the regulated rent per year. Tenants have the right to challenge MCI applications
                  at the DHCR by participating in the administrative process.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in NYC</h2>
                <ul className="flex flex-col gap-3">
                  {nycLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <span className="text-amber-500 font-bold flex-shrink-0 mt-0.5">!</span>
                      <span className="text-slate-700 text-sm leading-relaxed">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">NYC Tenant Resources</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  NYC has an exceptionally strong ecosystem of tenant advocacy organizations:
                </p>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>NYC Housing Court</strong> — free right to counsel for qualifying tenants facing eviction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>DHCR (nyshcr.gov)</strong> — rent stabilization complaints, MCI challenges, overcharge claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Met Council on Housing</strong> — tenant education, hotline, and organizing support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Urban Justice Center</strong> — legal representation for low-income NYC tenants</span>
                  </li>
                </ul>
              </div>

            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "How do I find out if my NYC apartment is rent-stabilized?", a: "Check the NYC Rent Guidelines Board website (or nyc.gov/hpd) or use the NYC FOIL/DHCR records to look up your building. Buildings built before 1974 with 6+ units are often covered. You can also check your lease — rent-stabilized leases say so on the first page." },
                  { q: "Can a NYC landlord refuse to renew my lease?", a: "For rent-stabilized apartments, landlords must offer a lease renewal unless there is a legal basis for non-renewal (e.g., owner's personal use, building demolition). For market-rate apartments, landlords generally can decline to renew with proper notice." },
                  { q: "What is the NYC preferential rent and how does it affect me?", a: "Some rent-stabilized tenants pay a 'preferential rent' below their unit's legal regulated rent. After the 2019 HSTPA, landlords can only raise the rent by the RGB increase — they can no longer jump to the full legal rent when a tenant renews." },
                  { q: "What is the NYC DHCR?", a: "The Division of Housing and Community Renewal (DHCR) is the state agency that oversees rent stabilization in NYC and New York State. Tenants can file complaints about rent overcharges, improper lease renewals, and service reductions with the DHCR." },
                  { q: "Can I break a lease in NYC for any reason?", a: "Not without consequences. You can negotiate an early termination with your landlord, sublet (with consent), or assign the lease. Domestic violence victims have special protections allowing earlier termination. Leaving without following the legal process exposes you to liability for unpaid rent." }
                ]} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Analyze My Lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  NYC AI analysis is coming soon. Canadian lease? Upload it today for a free
                  analysis against your provincial law.
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
                    { label: "New York State Tenant Rights", href: "/united-states/new-york" },
                    { label: "United States Overview", href: "/united-states" },
                    { label: "California Tenant Rights", href: "/united-states/california" },
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
      </main>

      <Footer />
    </div>
    </>
  );
}
