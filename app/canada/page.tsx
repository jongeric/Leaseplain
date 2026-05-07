import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tenant Rights & Lease Help in Canada | LeasePlain",
  description:
    "Understand Canadian tenant rights by province. Each province has its own Residential Tenancies Act. Learn about Ontario, BC, Alberta, and Quebec rental law.",
  alternates: { canonical: "https://leaseplain.com/canada" },
};

const provinces = [
  {
    name: "Ontario",
    href: "/canada/ontario",
    law: "Residential Tenancies Act (RTA)",
    body: "Ontario Landlord and Tenant Board (LTB)",
    highlights: ["60 days notice to end tenancy", "Annual rent increase guideline", "No application fee for tenants"],
  },
  {
    name: "British Columbia",
    href: "/canada/british-columbia",
    law: "Residential Tenancy Act (RTA)",
    body: "Residential Tenancy Branch (RTB)",
    highlights: ["Security deposit capped at 0.5x monthly rent", "Pet deposit capped at 0.5x monthly rent", "Rent increases tied to BC CPI"],
  },
  {
    name: "Alberta",
    href: "/canada/alberta",
    law: "Residential Tenancies Act (RTA)",
    body: "RTDRS (Residential Tenancy Dispute Resolution Service)",
    highlights: ["No province-wide rent control", "Security deposit capped at 1x monthly rent", "3 months notice for fixed-term non-renewal"],
  },
  {
    name: "Quebec",
    href: "/canada/quebec",
    law: "Civil Code of Quebec",
    body: "Tribunal administratif du logement (TAL)",
    highlights: ["Mandatory standard lease form (bail)", "July 1 moving day tradition", "Right of first refusal on renewal"],
  },
];

const keyFacts = [
  "Each Canadian province and territory has its own residential tenancy legislation — there is no single national tenancy law.",
  "Most provinces cap security deposits, though the limits vary significantly.",
  "Rent control rules differ: Ontario and BC have annual guideline increases; Alberta has none.",
  "Notice periods for ending a tenancy range from 28 days to 3 months depending on the province and reason.",
  "Tenant advocacy boards and dispute resolution services are available in every province at little or no cost.",
  "Standard lease forms are mandatory in Ontario and Quebec; other provinces may use custom leases.",
];

export default function CanadaPage() {
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
              <span>Canada</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Canadian Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Tenant Rights &amp; Lease Help in Canada
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Canada has no single national tenancy law. Each province governs landlord-tenant
              relationships through its own legislation, courts, and dispute resolution bodies. Understanding
              which provincial law applies to your lease is the first step in protecting your rights as
              a renter.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How Canadian Tenancy Law Works</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Under the Canadian Constitution, property and civil rights fall under provincial
                  jurisdiction. This means every province has enacted its own Residential Tenancies Act
                  (or equivalent), with its own rules about deposits, rent increases, notice periods,
                  evictions, and dispute resolution. Quebec is the most distinct — it uses the Civil
                  Code of Quebec and a separate Act Respecting Lessor and Lessee, with disputes heard
                  at the Tribunal administratif du logement (TAL).
                </p>
                <p className="text-slate-700 leading-relaxed">
                  The province where your rental unit is physically located determines which law applies,
                  regardless of where your landlord is based. A clause in your lease that violates
                  provincial law is generally unenforceable — even if both you and your landlord signed it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Facts About Canadian Tenant Protections</h2>
                <ul className="flex flex-col gap-3">
                  {keyFacts.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">Browse by Province</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {provinces.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {p.name}
                        </h3>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors mt-0.5" aria-hidden="true" />
                      </div>
                      <p className="text-xs text-blue-600 font-medium mb-2">{p.law}</p>
                      <p className="text-xs text-slate-500 mb-3">{p.body}</p>
                      <ul className="flex flex-col gap-1">
                        {p.highlights.map((h) => (
                          <li key={h} className="text-xs text-slate-600 flex items-start gap-1.5">
                            <span className="text-blue-400 flex-shrink-0 mt-0.5">•</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </Link>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  More provinces coming soon — New Brunswick, Nova Scotia, Manitoba, Saskatchewan, and others.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Lease Clauses vs. Provincial Law</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  A lease clause cannot legally take away rights granted by provincial legislation. For
                  example, if an Ontario lease says a landlord can increase rent by any amount during a
                  tenancy, that clause is void — the rent increase guideline under the RTA still applies.
                  LeasePlain's AI analysis checks your lease against the specific rules of your province
                  and flags any clauses that attempt to override your legal rights.
                </p>
              </div>

            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your Canadian lease and our AI will flag clauses that may violate your provincial
                  tenant rights — for free.
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
                    { label: "BC Tenant Rights", href: "/canada/british-columbia" },
                    { label: "Alberta Tenant Rights", href: "/canada/alberta" },
                    { label: "Quebec Tenant Rights", href: "/canada/quebec" },
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
