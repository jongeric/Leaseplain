import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, ChevronRight, Upload, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "US Tenant Rights & Lease Help — Coming to LeasePlain | LeasePlain",
  description:
    "LeasePlain is expanding to the United States. Learn about US tenant rights by state — New York, California, Florida, and more — and how US leases differ from Canadian ones.",
  alternates: { canonical: "https://leaseplain.com/united-states" },
};

const usStates = [
  {
    name: "New York",
    href: "/united-states/new-york",
    law: "Housing Stability & Tenant Protection Act (HSTPA)",
    highlight: "Rent stabilization, DHCR, strong eviction protections",
  },
  {
    name: "California",
    href: "/united-states/california",
    law: "AB 1482 Tenant Protection Act",
    highlight: "Statewide 5% + CPI rent cap, just cause eviction",
  },
  {
    name: "Florida",
    href: "/united-states/florida",
    law: "Florida Residential Landlord & Tenant Act",
    highlight: "No statewide rent control, landlord-friendly framework",
  },
];

const usVsCanada = [
  "US tenancy law is governed at the state level — there is no national equivalent to Canada's provincial tenancy acts.",
  "Security deposit rules vary widely: some states cap deposits at 1–2 months' rent; others have no cap.",
  "Eviction procedures in the US are typically faster and less tenant-protective than Canadian province-level systems.",
  "Rent control is available in only a handful of US cities and states — most US renters have no rent increase protection.",
  "Unlike Ontario and Quebec, no US state requires a standard government lease form — leases are typically custom documents.",
  "US landlords may require renters' insurance as a lease condition more commonly than Canadian landlords do.",
];

export default function UnitedStatesPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/locations" className="hover:underline">Locations</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>United States</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-amber-200">
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              Coming Soon to LeasePlain
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              US Tenant Rights &amp; Lease Help — Coming to LeasePlain
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              LeasePlain is expanding to the United States. Our AI lease analysis is currently
              calibrated for Canadian provincial law. US state-level analysis — starting with New York,
              California, and Florida — is in development. In the meantime, explore the educational
              guides below to understand how US tenancy law works.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How US Tenancy Law Works</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  In the United States, residential tenancy law is a matter of state — not federal —
                  jurisdiction. Each state has enacted its own landlord-tenant statutes, and many
                  cities have passed additional local ordinances. For example, New York City's rent
                  stabilization rules operate on top of New York State law; Los Angeles has its
                  own Rent Stabilization Ordinance layered on top of California's AB 1482.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Federal law has a limited role — primarily through the Fair Housing Act, which
                  prohibits housing discrimination based on race, color, national origin, religion,
                  sex, familial status, and disability. But beyond anti-discrimination protections,
                  each state sets its own rules for deposits, evictions, maintenance, and lease terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How US Leases Differ from Canadian Leases</h2>
                <ul className="flex flex-col gap-3">
                  {usVsCanada.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">Browse by State</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {usStates.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {s.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-1.5 py-0.5 rounded-full border border-amber-200">
                            Soon
                          </span>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors mt-0.5" aria-hidden="true" />
                        </div>
                      </div>
                      <p className="text-xs text-blue-600 font-medium mb-1">{s.law}</p>
                      <p className="text-sm text-slate-600">{s.highlight}</p>
                    </Link>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  More states coming soon — Texas, Illinois, Washington, and others.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Currently Available: Canadian Lease Analysis</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  LeasePlain's AI currently analyzes leases under Ontario, BC, Alberta, and Quebec law.
                  If you have a Canadian lease, you can upload it today and receive a detailed analysis.
                  US state analysis is under active development — enter your email on our homepage to
                  be notified when your state is supported.
                </p>
              </div>

            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Analyze My Lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Canadian lease? Upload it now for a free AI analysis against your provincial law.
                  US analysis coming soon.
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
                    { label: "New York Tenant Rights", href: "/united-states/new-york" },
                    { label: "California Tenant Rights", href: "/united-states/california" },
                    { label: "Florida Tenant Rights", href: "/united-states/florida" },
                    { label: "All Locations", href: "/locations" },
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
