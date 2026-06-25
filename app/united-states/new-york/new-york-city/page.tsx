import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "NYC Tenant Rights: Rent Stabilization, DHCR & Lease Help | LeasePlain",
  description:
    "Know your rights as a New York City renter: rent stabilization, DHCR complaints, Good Cause Eviction law, 1-month security deposit cap, and free right to counsel in Housing Court.",
  alternates: { canonical: "https://leaseplain.com/united-states/new-york/new-york-city" },
  openGraph: {
    title: "NYC Tenant Rights: Rent Stabilization, DHCR & Lease Help | LeasePlain",
    description: "Know your rights as a New York City renter: rent stabilization, DHCR complaints, Good Cause Eviction law, 1-month security deposit cap, and free right to counsel in Housing Court.",
    url: "https://leaseplain.com/united-states/new-york/new-york-city",
    type: "website",
  },
};

const faqItems = [
                  {
                    q: "How do I find out if my NYC apartment is rent-stabilized?",
                    a: "Several methods work: (1) Check your lease — rent-stabilized leases must include a Rent Stabilization Lease Rider (form RA-LR1) stating the legal regulated rent. (2) Search the DHCR's Rent Stabilization Lookup tool at apps.hcr.ny.gov/BuildingSearch. (3) Request your apartment's rent history from DHCR via a Freedom of Information Law (FOIL) request. Buildings built before 1974 with 6 or more units in NYC are generally covered unless they were deregulated.",
                  },
                  {
                    q: "What is Good Cause Eviction and how does it apply in NYC?",
                    a: "The Good Cause Eviction law, enacted in April 2024, applies automatically in New York City and covers most market-rate rental apartments not already covered by stronger local protections. It limits annual rent increases to 5% plus the local CPI (capped at 10%) and requires landlords to show a legally recognized reason (good cause) before refusing to renew a lease or commencing a nonpayment proceeding. In NYC, most units not covered by the RSO or other stronger laws fall under Good Cause — but single-family homes, condos, and some recently constructed buildings may be exempt. Consult a housing attorney to confirm your unit's coverage.",
                  },
                  {
                    q: "My landlord is raising my stabilized rent by more than the RGB guideline — what can I do?",
                    a: "You can file a rent overcharge complaint with the DHCR. Under HSTPA 2019, tenants can look back up to 6 years for overcharges. If the DHCR finds a willful overcharge, it can award treble damages (three times the overcharge amount) plus interest and attorney's fees. File your complaint promptly — the process takes time, but the lookback period protects you.",
                  },
                  {
                    q: "Can a NYC landlord keep my security deposit for normal wear and tear?",
                    a: "No. Under New York law, a landlord can only deduct from your security deposit for actual damages beyond normal wear and tear, unpaid rent, and certain cleaning costs if the unit was left in significantly worse condition than received. The deposit must be returned within 14 days of the tenancy ending with an itemized written statement. If the landlord fails to return the deposit within 14 days without a written itemization, they lose the right to retain any portion of it.",
                  },
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

const nycRights = [
  "NYC Rent Stabilization covers approximately one million apartments — primarily in buildings of 6 or more units built before 1974. Stabilized tenants' rents can only increase by the percentage set annually by the NYC Rent Guidelines Board (RGB).",
  "Rent-stabilized tenants have the right to a lease renewal on substantially the same terms, with only guideline-permitted increases. A landlord cannot refuse to renew without a legal basis.",
  "The Good Cause Eviction law (enacted April 2024) applies automatically in New York City. Other New York municipalities may opt in via local legislation. It limits annual rent increases for non-rent-stabilized apartments to 5% plus local CPI (max 10%), and requires landlords to show good cause before nonrenewal or eviction.",
  "Security deposits are capped at one month's rent under the 2019 Housing Stability and Tenant Protection Act (HSTPA). Any deposit exceeding one month must be returned, and landlords must return deposits with an itemized statement within 14 days of tenancy end.",
  "NYC provides a free Right to Counsel for low-income tenants facing eviction in Housing Court in all five boroughs — qualifying tenants are entitled to a free attorney, not just advice.",
  "The Division of Housing and Community Renewal (DHCR) administers rent stabilization statewide. Tenants can file complaints about rent overcharges, improper deregulation, and service reductions at nyshcr.gov.",
  "For non-payment of rent, NYC landlords must serve a 14-day rent demand notice before filing a proceeding in Housing Court — this is a mandatory prerequisite to the court process.",
  "Landlords are prohibited from retaliating against tenants for filing DHCR complaints, organizing a tenant association, or exercising any legal right — retaliatory eviction is an affirmative defense in Housing Court.",
];

const nycLeaseRedFlags = [
  "Missing rent stabilization rider — rent-stabilized leases must include a Rent Stabilization Lease Rider (form RA-LR1) disclosing the legal regulated rent. If your lease omits this, you may have grounds to challenge the rent being charged.",
  "Preferential rent clauses — some stabilized leases set rent below the legal regulated rent (a 'preferential rent'). After HSTPA 2019, landlords can no longer jump to the full legal rent at renewal — they can only raise by the RGB guideline amount. Beware of pre-2019 leases with preferential rent language.",
  "Deregulation attempts through substantial rehabilitation — landlords sometimes claim units were 'substantially rehabilitated' to exit rent stabilization. This claim requires DHCR approval and must meet strict legal standards; review any such claim carefully.",
  "High amenity and building service fees in luxury buildings — market-rate leases in new luxury buildings often include monthly fees for amenities (gym, concierge, package room) that are not separately regulated. Confirm whether these fees are included in rent for Good Cause purposes.",
  "Lease clauses purporting to waive DHCR rights — any provision in a lease that waives your right to file a DHCR complaint, seek a rent overcharge determination, or participate in a DHCR proceeding is void under New York law.",
  "Broker fee obligations shifted to tenants — under the NYC Fairness in Apartment Rental Expenses (FARE) Act effective June 2025, the party who hires the broker (typically the landlord) must pay the broker's commission. Lease clauses requiring tenants to pay broker fees hired by the landlord are now unlawful.",
];

const nycResources = [
  { name: "Division of Housing and Community Renewal (DHCR)", desc: "Handles rent stabilization complaints, overcharge claims, MCI applications, and preferential rent questions at nyshcr.gov." },
  { name: "NYC Housing Court", desc: "Free right to counsel for qualifying low-income tenants in eviction proceedings — apply at the Housing Court Help Center in your borough." },
  { name: "Met Council on Housing", desc: "Tenant education, a free telephone hotline, and organizing support. One of NYC's oldest tenant advocacy organizations." },
  { name: "Legal Aid Society", desc: "Provides free legal representation to low-income New Yorkers in Housing Court eviction cases and DHCR proceedings." },
  { name: "Tenant Protection Unit (NY Attorney General)", desc: "Investigates systemic landlord fraud — including illegal deregulation schemes — and can seek injunctions and restitution for tenants." },
];

export default function NewYorkCityPage() {
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
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              New York City, New York
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              NYC Tenant Rights: Rent Stabilization, DHCR &amp; Lease Protections
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              New York City has the most complex and tenant-protective rental regulatory system in the
              United States. Rent stabilization covers nearly half the city&apos;s rental units, the 2019
              HSTPA closed longstanding loopholes, and the April 2024 Good Cause Eviction law extended
              protections to market-rate renters in New York City. Knowing which laws apply to your apartment is essential.
            </p>
            <div className="mt-8">
              <Link
                href="/upload"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Upload className="w-4 h-4" aria-hidden="true" />
                Analyze My NYC Lease
              </Link>
            </div>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">NYC&apos;s Rental Regulatory System</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  New York City is home to approximately 2.3 million rental units — the largest rental
                  market in the United States. Nearly half are rent-stabilized, governed by the NYC Rent
                  Stabilization Law and administered by the Division of Housing and Community Renewal (DHCR)
                  and the NYC Rent Guidelines Board (RGB), which sets allowable annual increases each June.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  The <strong>Housing Stability and Tenant Protection Act of 2019 (HSTPA)</strong> was a
                  sweeping reform that eliminated most pathways to deregulate stabilized apartments, capped
                  preferential rent increases, limited rent increases for major capital improvements and
                  individual apartment improvements, and strengthened harassment protections. The{" "}
                  <strong>Good Cause Eviction law (April 2024)</strong> extended rent cap and just-cause
                  protections to most market-rate tenants in New York City (other municipalities may opt in).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">NYC Tenant Protections</h2>
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
                <h3 className="font-semibold text-blue-900 mb-3">Major Capital Improvements (MCI) &amp; Individual Apartment Improvements (IAI)</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  In rent-stabilized buildings, landlords can apply to DHCR for rent increases to recover
                  the cost of building-wide improvements (MCIs — e.g., new boiler, roof, windows). After
                  HSTPA 2019, MCI increases are <strong>temporary</strong> — they expire once the cost is
                  recovered — and are capped at 2% of the regulated rent per year. IAIs (work in individual
                  apartments) can also support rent increases, but HSTPA capped IAI rent increases to 1/168th
                  of the cost per month (1/180th for buildings with 35+ units), up to a maximum of
                  $15,000 in eligible improvements over a 15-year period, and the increase expires
                  after 30 years. Tenants have the right to
                  challenge both MCI and IAI applications at DHCR by submitting written objections during
                  the comment period.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">NYC Lease Red Flags</h2>
                <ul className="flex flex-col gap-3">
                  {nycLeaseRedFlags.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">NYC Tenant Resources</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  NYC has an exceptionally strong ecosystem of tenant advocacy organizations, city agencies,
                  and legal aid providers. Whether you need help challenging a rent overcharge, defending
                  an eviction, or understanding your stabilization status, these resources can help:
                </p>
                <ul className="flex flex-col gap-4">
                  {nycResources.map((r) => (
                    <li key={r.name} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                      <span><strong>{r.name}</strong> — {r.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>

            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your NYC lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI reviews your NYC lease for rent stabilization compliance, illegal clauses, and
                  HSTPA violations — in plain English.
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
                    { label: "California Tenant Rights", href: "/united-states/california" },
                    { label: "Miami Tenant Rights", href: "/united-states/florida/miami" },
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
              <h2 className="text-3xl font-bold text-white mb-3">Renting in New York City?</h2>
              <p className="text-blue-100 leading-relaxed max-w-xl">
                Upload your lease and get a plain-English breakdown before you sign. Know your rent stabilization and Good Cause rights.
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
