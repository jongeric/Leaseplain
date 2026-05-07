import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help in Vancouver, BC | Tenant Rights & Lease Review | LeasePlain",
  description:
    "Vancouver renters: understand your rights under BC's Residential Tenancy Act. Learn about Vancouver's high-rent market, vacancy control debates, RTB disputes, and common lease issues.",
  alternates: { canonical: "https://leaseplain.com/canada/british-columbia/vancouver" },
};

const vancouverRights = [
  "The BC Residential Tenancy Act applies to all private residential rentals in Vancouver, including condominiums and basement suites.",
  "Security deposits are capped at 0.5x one month's rent — no exceptions.",
  "Annual rent increases are limited to the allowable percentage set by the BC provincial government (CPI-based).",
  "Landlords must give at least one month's written notice to end a tenancy; four months notice if the reason is personal use by the landlord.",
  "Fixed-term leases cannot require you to vacate at end of term unless specific statutory conditions are met.",
  "The RTB dispute resolution process is accessible and relatively affordable compared to civil court.",
  "A landlord who bad-faith terminates a tenancy (e.g., false personal use claim) can be ordered to pay 12 months' compensation.",
];

const vancouverLeaseIssues = [
  "Demand for deposits above 0.5x monthly rent — a common illegal practice in Vancouver's high-demand market.",
  "Month-to-month leases with informal \"rent review\" clauses allowing the landlord to increase rent at will — not permitted under the RTA.",
  "Clauses requiring tenant to pay strata (condo) fines directly — landlords must first be fined by the strata, and any pass-through to tenants must comply with the RTA.",
  "Fixed-term lease end-of-term vacate requirements used to reset rent to market — this practice was curtailed by the 2021 RTA amendment.",
  "Unreasonably short cure periods for lease violations — BC law requires specific minimum notice periods before any eviction process begins.",
];

export default function VancouverPage() {
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
              <Link href="/canada/british-columbia" className="hover:underline">British Columbia</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Vancouver</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Vancouver, British Columbia
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in Vancouver, BC | Tenant Rights &amp; Lease Review
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Vancouver is one of the most expensive rental markets in the world. Tight vacancy rates,
              high investor ownership, and a heated debate about vacancy control have made understanding
              BC's Residential Tenancy Act essential for every renter in the city.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Vancouver's Rental Market Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Vancouver's rental vacancy rate has hovered near historic lows for most of the past
                  decade. The combination of a constrained housing supply, strong immigration-driven
                  demand, and a large share of investor-owned condominiums has created a market where
                  tenants face intense competition and landlords hold significant leverage at the point
                  of lease signing.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Once you have a tenancy, however, BC law provides meaningful protections. Annual rent
                  increases are capped, landlords cannot freely terminate fixed-term leases to reset
                  rent, and the RTB provides a relatively accessible dispute process. The challenge
                  for Vancouver tenants is knowing these rights exist — and exercising them.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as a Vancouver Renter</h2>
                <ul className="flex flex-col gap-3">
                  {vancouverRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Vacancy Control: The Ongoing Debate</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  BC currently has vacancy decontrol — meaning when a tenant moves out, the landlord
                  can set rent at any level for a new tenant, regardless of what the previous tenant
                  paid. Tenant advocates have long argued for vacancy control (where rent limits follow
                  the unit, not the tenant), as implemented in some US cities. As of 2026, BC has not
                  adopted vacancy control, but it remains a live political debate. This means once you
                  have a tenancy, staying put preserves the rent you negotiated; leaving voluntarily
                  resets the market rate.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in Vancouver</h2>
                <ul className="flex flex-col gap-3">
                  {vancouverLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The RTB Dispute Process in Vancouver</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The Residential Tenancy Branch handles disputes through a written or telephone
                  arbitration process. Vancouver-area applications are filed online or by phone.
                  Hearings are typically conducted by telephone within 30 to 60 days of filing.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  For complex disputes, the Vancouver Tenants Union and the Tenant Resource Advisory
                  Centre (TRAC) offer free guides, advice, and referrals to legal representation.
                  TRAC's website is an excellent resource for understanding your rights under the BC RTA.
                </p>
              </div>

            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Review your Vancouver lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI checks your Vancouver lease against the BC Residential Tenancy Act, flagging
                  illegal deposits, prohibited vacate clauses, and more.
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
                    { label: "BC Tenant Rights", href: "/canada/british-columbia" },
                    { label: "BC Tenant Rights Guide", href: "/tenant-rights/british-columbia" },
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
  );
}
