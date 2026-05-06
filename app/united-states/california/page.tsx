import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, ChevronRight, Upload, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "California Tenant Rights & Lease Help | Coming Soon | LeasePlain",
  description:
    "Learn about California tenant rights under AB 1482, statewide rent cap, just cause eviction, and the Anti-Price Gouging Law. LeasePlain's AI lease analysis for California is coming soon.",
  alternates: { canonical: "https://leaseplain.com/united-states/california" },
};

const californiaProtections = [
  "AB 1482 (Tenant Protection Act of 2019) caps annual rent increases at 5% plus local CPI, with a maximum of 10%, for most covered tenancies.",
  "AB 1482 also requires \"just cause\" for evictions of tenants who have lived in a unit for 12 months or more.",
  "Security deposits in California are capped at one month's rent for unfurnished units and two months' rent for furnished units (as of legislation effective April 2024).",
  "Landlords must return security deposits within 21 days of tenancy end with an itemized statement.",
  "The Anti-Price Gouging Law (Penal Code § 396) prohibits rent increases above 10% in declared state of emergency areas.",
  "Local rent control ordinances (e.g., Los Angeles RSO, San Francisco Rent Ordinance) may provide additional protections beyond AB 1482.",
  "Landlords must maintain rental units in habitable condition — tenants have the right to \"repair and deduct\" for serious habitability issues.",
];

const cities = [
  { name: "Los Angeles", href: "/united-states/california/los-angeles", desc: "LA RSO, HCIDLA, rent stabilization for pre-1978 buildings" },
];

export default function CaliforniaPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/united-states" className="hover:underline">United States</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>California</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-amber-200">
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              AI Analysis Coming Soon
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              California Tenant Rights &amp; Lease Help | Coming Soon
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              California enacted landmark statewide tenant protections in 2019 with AB 1482, capping
              rent increases and requiring just cause for most evictions. LeasePlain's AI lease
              analysis for California is in development — here's a guide to current California tenant
              rights.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">California Tenancy Law Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  California's tenancy law landscape is a patchwork of state law and local ordinances.
                  The state's baseline is set by the Civil Code, the Code of Civil Procedure (for
                  evictions), and the landmark <em>Tenant Protection Act of 2019 (AB 1482)</em>.
                  On top of state law, many California cities have enacted their own stronger
                  protections — particularly rent stabilization and just-cause eviction rules.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  AB 1482 does not apply to all rentals. Key exemptions include: single-family homes
                  and condos (unless owned by a corporation or REIT), buildings constructed within
                  the last 15 years (on a rolling basis), and owner-occupied duplexes. If your
                  unit is exempt from AB 1482, you may still be covered by a local ordinance.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Key California Tenant Protections</h2>
                <ul className="flex flex-col gap-3">
                  {californiaProtections.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">AB 1482: Just Cause Eviction</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Under AB 1482, California landlords cannot evict tenants who have lived in a covered
                  unit for 12 months or longer without "just cause." Just cause includes both
                  "at-fault" reasons (non-payment of rent, criminal activity, lease violations) and
                  "no-fault" reasons (owner move-in, substantial remodel, withdrawal of unit from
                  rental market). For no-fault evictions, the landlord must pay the tenant one
                  month's rent as relocation assistance. These protections represent a major
                  departure from California's historically landlord-friendly eviction framework.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">California Cities</h2>
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
                <p className="mt-4 text-sm text-slate-500">More California cities coming soon — San Francisco, San Diego, Oakland, and others.</p>
              </div>

            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Analyze My Lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  California AI analysis coming soon. Canadian lease? Upload it now for a free
                  provincial-law analysis.
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
                    { label: "Los Angeles Lease Help", href: "/united-states/california/los-angeles" },
                    { label: "United States Overview", href: "/united-states" },
                    { label: "New York Tenant Rights", href: "/united-states/new-york" },
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
