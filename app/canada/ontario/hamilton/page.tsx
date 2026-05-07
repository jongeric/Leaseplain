import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help in Hamilton, Ontario | Tenant Rights | LeasePlain",
  description:
    "Hamilton renters: understand your rights under the Ontario Residential Tenancies Act. Learn about Hamilton's fast-growing rental market and GTA-spillover pressures on local tenants.",
  alternates: { canonical: "https://leaseplain.com/canada/ontario/hamilton" },
};

const hamiltonRights = [
  "The Ontario Residential Tenancies Act (RTA) applies fully to all private residential rentals in Hamilton.",
  "Rent increases are limited to the Ontario annual guideline — no exceptions without an LTB above-guideline application.",
  "Landlords must use the Ontario standard lease form for most residential tenancies.",
  "Tenants can file LTB applications at no cost; landlords pay a fee.",
  "Hamilton tenants have the right to request repairs; failure to maintain a unit allows tenants to apply for a rent abatement.",
  "Older rental stock (pre-2018) benefits from full rent control; newer builds after November 15, 2018 are exempt from the guideline.",
];

const hamiltonLeaseIssues = [
  "Older housing stock may have maintenance and habitability issues — ensure your lease includes clear language about who is responsible for major repairs.",
  "Some Hamilton landlords operating older multi-unit buildings include outdated clauses that have been superseded by the RTA.",
  "Renovation-eviction (\"renoviction\") attempts — a growing issue in Hamilton as landlords seek to upgrade older units. A valid N13 notice requires an LTB order, and tenants have a right of first refusal to return at the same rent.",
  "Informal month-to-month arrangements without a written lease — you still have full RTA protection, but documenting everything in writing is strongly advised.",
  "Basement apartment leases with clauses that purport to limit the landlord's maintenance obligations — these are void under the RTA.",
];

export default function HamiltonPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/canada" className="hover:underline">Canada</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/canada/ontario" className="hover:underline">Ontario</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Hamilton</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Hamilton, Ontario
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in Hamilton, Ontario | Tenant Rights
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Hamilton's rental market has been transformed by GTA spillover demand, bringing rising
              rents, increased renoviction pressure, and new landlords to an older housing stock.
              The Ontario RTA protects every Hamilton renter — here's what you need to know.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Hamilton's Rental Market Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Hamilton has undergone significant gentrification over the past decade. Renters
                  priced out of Toronto and Mississauga moved to Hamilton, driving up demand and rents
                  in neighbourhoods like Beasley, Stipley, Crown Point, and the downtown core.
                  McMaster University and Mohawk College also contribute a large student renter population.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Much of Hamilton's rental stock is older — single-family homes converted to multi-unit
                  buildings, Victorian-era row houses, and mid-century walk-up apartments. This means
                  maintenance and repair issues are common, and tenants should understand their rights
                  to demand a habitable unit before and throughout their tenancy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as a Hamilton Renter</h2>
                <ul className="flex flex-col gap-3">
                  {hamiltonRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Renovictions in Hamilton</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Hamilton has seen a notable rise in "renovictions" — landlords serving N13 notices
                  (eviction for extensive renovations or demolition) in order to remove long-term
                  tenants paying below-market rents. Under the Ontario RTA, a landlord cannot evict
                  you for renovation without first obtaining an LTB order, paying compensation, and
                  offering you the right of first refusal to return at your previous rent. If you
                  receive an N13 notice, seek legal advice immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in Hamilton</h2>
                <ul className="flex flex-col gap-3">
                  {hamiltonLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">LTB & Tenant Resources in Hamilton</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Hamilton tenants file LTB applications through the Tribunals Ontario portal. Hearings
                  are primarily held by videoconference. Free resources in the area include:
                </p>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Hamilton Community Legal Clinic</strong> — free legal advice for low-income tenants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Tenant Duty Counsel</strong> — free legal representation at LTB hearings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>McMaster Student Union Off-Campus Resource Centre</strong> — student tenancy help</span>
                  </li>
                </ul>
              </div>

            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Review your Hamilton lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and our AI will check for clauses that conflict with the Ontario RTA —
                  including issues common in older Hamilton rental units.
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
                    { label: "Ontario Tenant Rights", href: "/canada/ontario" },
                    { label: "Toronto Lease Help", href: "/canada/ontario/toronto" },
                    { label: "Mississauga Lease Help", href: "/canada/ontario/mississauga" },
                    { label: "Ontario Tenant Rights Guide", href: "/tenant-rights/ontario" },
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
