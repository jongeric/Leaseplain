import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Lease Help in Edmonton, Alberta | Tenant Rights | LeasePlain",
  description:
    "Edmonton renters: understand your rights under Alberta's Residential Tenancies Act. Learn about Edmonton's government and university rental market, no rent control, and the RTDRS process.",
  alternates: { canonical: "https://leaseplain.com/canada/alberta/edmonton" },
};

const edmontonRights = [
  "Alberta's Residential Tenancies Act (RTA) applies fully to all private residential rentals in Edmonton.",
  "Security deposits are capped at one month's rent — no exceptions regardless of market conditions.",
  "Landlords can only raise rent once per year with at least 3 months written notice — no rent control cap applies.",
  "Edmonton tenants can apply to the RTDRS — there is a dedicated Edmonton office for in-person hearings.",
  "Landlords must provide an itemized accounting of any deposit deductions within 10 days of tenancy end.",
  "Tenant obligations must be specified in writing; landlords cannot impose new obligations mid-tenancy without mutual agreement.",
];

const edmontonLeaseIssues = [
  "\"Damage deposits\" framed separately from security deposits to collect more than one month's rent total — not permitted under the Alberta RTA.",
  "Student leases in Oliver, Garneau, or Whyte Avenue neighbourhoods with end-of-term vacate clauses — fixed-term leases convert to month-to-month unless proper notice is given.",
  "Clauses that permit landlord entry without notice — Alberta requires written notice (24 hours for most purposes).",
  "Short-term furnished suites marketed as \"corporate housing\" attempting to avoid RTA protections — most private residential rentals are covered regardless of furnishing.",
  "Rental agreements drafted as \"license agreements\" or \"room rental agreements\" to evade the RTA — Alberta courts look at the substance of the arrangement, not the label.",
];

export default function EdmontonPage() {
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
              <Link href="/canada/alberta" className="hover:underline">Alberta</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Edmonton</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Edmonton, Alberta
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in Edmonton, Alberta | Tenant Rights
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Edmonton's rental market is anchored by the provincial government, the University of
              Alberta, and a growing technology sector. With no provincial rent control, understanding
              the Alberta RTA's deposit rules and notice requirements is essential for every Edmonton renter.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Edmonton's Rental Market Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Edmonton has historically offered more affordable rents than Vancouver or Toronto,
                  making it an attractive destination for renters priced out of other major Canadian
                  cities. The University of Alberta's south campus and the surrounding Garneau and
                  Strathcona neighbourhoods host a large student rental market, while Glenora,
                  Oliver, and downtown neighbourhoods attract government and professional renters.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  The early 2020s brought rising rents to Edmonton as interprovincial migration
                  accelerated and the construction pipeline lagged demand. Without rent control,
                  tenants in Edmonton face potentially significant rent increases at renewal — though
                  the 3-month notice requirement gives them some lead time to plan.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as an Edmonton Renter</h2>
                <ul className="flex flex-col gap-3">
                  {edmontonRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Rent Increases Without Rent Control</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Because Alberta has no rent control, Edmonton landlords can — and sometimes do —
                  use renewal time to dramatically increase rents. Your protection is procedural:
                  the landlord must give you at least 3 months written notice before the increase
                  takes effect. If they fail to provide adequate notice, the increase is invalid.
                  Receiving a rent increase notice is also an opportunity to negotiate — in a
                  soft rental market, a well-timed counter-offer may result in a lower increase
                  or additional lease concessions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in Edmonton</h2>
                <ul className="flex flex-col gap-3">
                  {edmontonLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Tenant Resources in Edmonton</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Edmonton tenants can access dispute resolution and legal help through:
                </p>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>RTDRS Edmonton Office</strong> — in-person and phone hearings for tenancy disputes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Student Legal Services (University of Alberta)</strong> — free legal help for U of A students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Edmonton Community Legal Centre</strong> — free legal advice for qualifying tenants</span>
                  </li>
                </ul>
              </div>

            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Review your Edmonton lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and our AI will flag issues under the Alberta RTA — including
                  deposit caps, notice requirements, and entry provisions.
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
                    { label: "Alberta Tenant Rights", href: "/canada/alberta" },
                    { label: "Calgary Lease Help", href: "/canada/alberta/calgary" },
                    { label: "Alberta Tenant Rights Guide", href: "/tenant-rights/alberta" },
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
