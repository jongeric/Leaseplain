import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, ChevronRight, Upload, CheckCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "New York Tenant Rights & Lease Help | Coming Soon | LeasePlain",
  description:
    "Learn about New York tenant rights under the Housing Stability & Tenant Protection Act, rent stabilization, and DHCR oversight. LeasePlain's AI lease analysis for New York is coming soon.",
  alternates: { canonical: "https://leaseplain.com/united-states/new-york" },
  openGraph: {
    title: "New York Tenant Rights & Lease Help | Coming Soon | LeasePlain",
    description: "Learn about New York tenant rights under the Housing Stability & Tenant Protection Act, rent stabilization, and DHCR oversight. LeasePlain's AI lease analysis for New York is coming soon.",
    url: "https://leaseplain.com/united-states/new-york",
    type: "website",
  },
};

const nyProtections = [
  "The Housing Stability and Tenant Protection Act of 2019 (HSTPA) strengthened rent stabilization protections for over one million New York City apartments.",
  "Rent-stabilized tenants are entitled to lease renewals — landlords cannot refuse without legal cause.",
  "Security deposits in New York are capped at one month's rent for most residential tenancies.",
  "Landlords must return security deposits within 14 days of tenancy end with an itemized statement of deductions.",
  "The Division of Housing and Community Renewal (DHCR) oversees rent stabilization and handles tenant complaints.",
  "Landlords are prohibited from harassing tenants in rent-stabilized buildings to force them out (tenant harassment is a violation under state law).",
  "Free right to counsel in eviction proceedings is available in New York City for qualifying low-income tenants.",
];

const cities = [
  { name: "New York City", href: "/united-states/new-york/new-york-city", desc: "Rent stabilization, DHCR, free right to counsel in evictions" },
];

export default function NewYorkPage() {
  return (
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "United States", href: "https://leaseplain.com/united-states" },
        { name: "New York", href: "https://leaseplain.com/united-states/new-york" },
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
              <span>New York</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-amber-200">
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              AI Analysis Coming Soon
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              New York Tenant Rights &amp; Lease Help | Coming Soon
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              New York has some of the strongest tenant protections in the United States, anchored by
              the 2019 Housing Stability and Tenant Protection Act and New York City's rent stabilization
              system. LeasePlain's AI lease analysis for New York is in development — here's what you
              need to know about NY tenant rights in the meantime.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">New York Tenancy Law Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  New York tenancy law operates at two levels: New York State sets baseline protections
                  for all renters, and New York City adds an additional layer through its rent
                  stabilization and rent control systems. The 2019 HSTPA significantly strengthened
                  both layers — closing loopholes that had allowed landlords to deregulate apartments,
                  capping security deposits, and expanding protections against harassment and
                  retaliatory eviction.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Outside of New York City, most New York State renters are market-rate tenants
                  without rent stabilization protections. They are covered by the Real Property Law
                  and a series of state-level tenant protections enacted through the HSTPA, including
                  the security deposit cap, notice requirements, and anti-harassment provisions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Key New York Tenant Protections</h2>
                <ul className="flex flex-col gap-3">
                  {nyProtections.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">The HSTPA: A Landmark 2019 Reform</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  The Housing Stability and Tenant Protection Act of 2019 was the most significant
                  expansion of tenant rights in New York in decades. Key changes included: eliminating
                  "vacancy bonuses" that landlords used to rapidly increase stabilized rents between
                  tenancies; capping security deposits at one month's rent statewide; requiring
                  longer notice periods for large rent increases and lease non-renewals; and
                  strengthening protections against tenant harassment in stabilized buildings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">New York Cities</h2>
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
                <p className="mt-4 text-sm text-slate-500">More NY cities coming soon — Buffalo, Albany, Rochester, and others.</p>
              </div>

            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "Does New York have rent control?", a: "Yes. New York has one of the most extensive rent regulation systems in the US. New York City has rent-stabilized and rent-controlled apartments. The 2019 Housing Stability and Tenant Protection Act strengthened these protections significantly." },
                  { q: "What is the security deposit limit in New York?", a: "New York caps security deposits at one month's rent for most residential tenancies under the 2019 tenant protection law. This applies statewide for most leases." },
                  { q: "How does rent stabilization work in New York?", a: "Rent-stabilized apartments in New York City have regulated rents that can only increase by amounts set annually by the Rent Guidelines Board. Tenants have the right to lease renewals, and landlords cannot refuse to renew without legal cause." },
                  { q: "What notice is required for eviction in New York?", a: "New York landlords must give proper written notice before starting eviction proceedings. For non-payment, a 14-day notice. For month-to-month tenancies, 30 days (for tenancies under one year) to 90 days (for tenancies over two years) depending on the length of tenancy." },
                  { q: "What are tenant rights in New York regarding repairs?", a: "New York landlords must maintain apartments in a habitable condition. Tenants can file a complaint with the city's Department of Housing Preservation and Development (HPD) for serious violations. Serious code violations can result in civil penalties for landlords." }
                ]} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Analyze My Lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  New York AI analysis coming soon. Canadian lease? Upload it now for a full
                  provincial-law review.
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
                    { label: "New York City Lease Help", href: "/united-states/new-york/new-york-city" },
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
  );
}
