import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Nova Scotia Tenant Rights: Lease Help & Renter Protections | LeasePlain",
  description:
    "Understand your rights as a Nova Scotia renter under the Residential Tenancies Act. Learn about the rent increase cap, government-held security deposits, Director of Residential Tenancies hearings, and lease protections in Halifax and across Nova Scotia.",
  alternates: { canonical: "https://leaseplain.com/canada/nova-scotia" },
  openGraph: {
    title: "Nova Scotia Tenant Rights: Lease Help & Renter Protections | LeasePlain",
    description: "Understand your rights as a Nova Scotia renter under the Residential Tenancies Act. Learn about the rent increase cap, government-held security deposits, Director of Residential Tenancies hearings, and lease protections in Halifax and across Nova Scotia.",
    url: "https://leaseplain.com/canada/nova-scotia",
    type: "website",
  },
};

const tenantProtections = [
  "Annual rent increases are capped — Nova Scotia introduced a provincial rent cap tied to CPI to protect tenants from steep increases.",
  "Landlords must give at least 4 months written notice before any rent increase takes effect — one of the longest notice requirements in Canada.",
  "Security deposits are capped at half a month's rent and must be paid directly to the Director of Residential Tenancies, not held by the landlord.",
  "The Director of Residential Tenancies holds deposits in a government trust account for the duration of the tenancy, providing strong protection against landlord misuse.",
  "Landlords must give 24 hours written notice before entering a rental unit, except in genuine emergencies.",
  "Landlords cannot evict a tenant without a formal order from a Residential Tenancies Officer — self-help eviction is illegal.",
  "Tenants have access to free hearings through the Residential Tenancies Program to resolve disputes with landlords.",
  "Landlords cannot disconnect utilities or remove doors and windows as a means of forcing a tenant out of the unit.",
];

const watchInLeases = [
  "Clauses purporting to allow rent increases above the provincial CPI-based cap — these are unenforceable under the Residential Tenancies Act.",
  "Any provision stating the landlord holds the security deposit directly — in Nova Scotia, the deposit must be paid to the Director, not the landlord.",
  "Shortened notice periods for rent increases — Nova Scotia requires a full 4 months written notice before any increase takes effect.",
  "Clauses waiving the tenant's right to apply to the Residential Tenancies Officer or the Director for dispute resolution.",
  "Provisions purporting to allow landlord entry without 24 hours notice for non-emergency inspections or repairs.",
];

const cities = [
  { name: "Halifax", href: "/canada/nova-scotia/halifax", desc: "Nova Scotia's largest and fastest-growing rental market — significant rent growth in recent years" },
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
  "url": "https://leaseplain.com/canada/nova-scotia",
};

export default function NovaScotiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema).replace(/</g, "\u003c") }} />
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Canada", href: "https://leaseplain.com/canada" },
        { name: "Nova Scotia", href: "https://leaseplain.com/canada/nova-scotia" },
      ]} />
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/locations" className="hover:underline">Locations</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/canada" className="hover:underline">Canada</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Nova Scotia</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Nova Scotia Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Nova Scotia Tenant Rights: Lease Help &amp; Renter Protections
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Nova Scotia's <em>Residential Tenancies Act</em> provides meaningful protections for renters
              — including a provincial rent increase cap, government-held security deposits managed by the
              Director of Residential Tenancies, and free access to hearing officers for dispute resolution.
              Whether you rent in Halifax or elsewhere in the province, understanding these protections
              is essential before signing any lease.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Nova Scotia Residential Tenancies Act</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The <em>Residential Tenancies Act</em> governs virtually all private residential rental
                  units in Nova Scotia. The <strong>Residential Tenancies Program</strong>, administered
                  through Service Nova Scotia, appoints the <strong>Director of Residential Tenancies</strong>{" "}
                  and Residential Tenancies Officers (RTOs) to administer the Act and hear disputes. RTOs
                  have authority to issue binding orders on a wide range of tenancy matters, and decisions
                  can be appealed to the Small Claims Court.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Nova Scotia's program is designed to be accessible — tenants do not need a lawyer to
                  file an application. Hearings can be held in person or by telephone at various Service
                  Nova Scotia offices across the province. The Director of Residential Tenancies plays a
                  unique role in Nova Scotia: unlike most other Canadian provinces, the Director holds
                  all security deposits in a government trust account rather than allowing landlords to
                  hold them directly, providing an extra layer of financial protection for tenants.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Tenant Protections</h2>
                <ul className="flex flex-col gap-3">
                  {tenantProtections.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Nova Scotia Rent Cap Explained</h3>
                <p className="text-sm text-blue-800 leading-relaxed mb-3">
                  Nova Scotia introduced a rent increase cap in 2020 in response to rapidly rising rental
                  costs across the province. The cap is tied to the provincial Consumer Price Index (CPI)
                  and limits how much rent can increase in any 12-month period. This applies to existing
                  tenancies — a landlord setting the initial rent for a new tenancy is not constrained by
                  the cap, but once a tenancy is established, subsequent increases must comply.
                </p>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Landlords must give <strong>4 months written notice</strong> before any rent increase
                  takes effect — this is one of the longest notice requirements in Canada. Only one rent
                  increase per 12-month period is permitted. Any increase that exceeds the cap, or that
                  is given without the required 4 months notice, is unenforceable and the tenant is not
                  required to pay it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What to Watch for in Nova Scotia Leases</h2>
                <ul className="flex flex-col gap-3">
                  {watchInLeases.map((w) => (
                    <li key={w} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">Nova Scotia Cities</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {cities.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {c.name}
                        </h3>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors mt-0.5" aria-hidden="true" />
                      </div>
                      <p className="text-sm text-slate-600">{c.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "Does Nova Scotia have rent control?", a: "Nova Scotia introduced a rent cap in 2020, limiting annual rent increases to 5% for existing tenants. This cap applies to most residential tenancies and is enforced through the Residential Tenancies Program." },
                  { q: "How are security deposits handled in Nova Scotia?", a: "Nova Scotia requires landlords to deposit the security deposit (up to half a month's rent) with the Director of Residential Tenancies, not hold it themselves. This protects tenants from landlords who spend the deposit." },
                  { q: "What body handles landlord-tenant disputes in Nova Scotia?", a: "The Residential Tenancies Program administers disputes. The Director of Residential Tenancies hears applications for rent increases, evictions, deposit returns, and maintenance complaints." },
                  { q: "How much notice must a Nova Scotia landlord give to end a tenancy?", a: "For non-payment of rent, landlords must give 15 days' notice. For other breaches, the notice period is generally longer. For a fixed-term lease, landlords must give 3 months' notice if they do not intend to renew." },
                  { q: "Are pet clauses enforceable in Nova Scotia leases?", a: "Generally yes, but human rights legislation protects service animals. A no-pets clause in a Nova Scotia lease is usually valid for regular pets, though the Human Rights Act requires accommodation for animals assisting persons with disabilities." }
                ]} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your Nova Scotia lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI reviews your lease against the Nova Scotia Residential Tenancies Act and flags
                  clauses that may exceed the rent cap, waive deposit protections, or limit your rights.
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
                    { label: "Nova Scotia Tenant Rights", href: "/tenant-rights/nova-scotia" },
                    { label: "Canada Overview", href: "/canada" },
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
