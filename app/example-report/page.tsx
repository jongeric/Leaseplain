import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText, DollarSign, AlertTriangle, ShieldCheck,
  Lightbulb, Eye, CheckCircle, Upload, ChevronRight,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Example Lease Analysis Report | LeasePlain",
  description:
    "See what a LeasePlain analysis report looks like. A sample plain-English breakdown of a residential lease showing all six report sections.",
  alternates: { canonical: "https://leaseplain.com/example-report" },
};

export default function ExampleReportPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        {/* Header */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              Example Report
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Sample Lease Analysis Report
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              This is an example of what LeasePlain produces when you upload your lease. All
              content below is based on a fictional standard Ontario residential lease for
              illustration purposes.
            </p>
          </div>
        </section>

        {/* Mock report */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Report header card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Analyzed lease</p>
                  <p className="font-semibold text-slate-900">123 Maple Street, Unit 4B – Toronto, ON</p>
                  <p className="text-sm text-slate-500 mt-0.5">12-month fixed term · $2,100/month · Analyzed May 6, 2026</p>
                </div>
                <div className="flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                  <AlertTriangle className="w-3.5 h-3.5" aria-hidden="true" />
                  3 Red Flags Found
                </div>
              </div>
            </div>

            {/* Section 1: Summary */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100 bg-slate-50">
                <FileText className="w-5 h-5 text-blue-600" aria-hidden="true" />
                <h2 className="font-bold text-slate-900">Plain-English Summary</h2>
              </div>
              <div className="p-6 text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  This is a standard 12-month fixed-term lease for a one-bedroom apartment in Toronto.
                  The tenancy begins <strong>June 1, 2026</strong> and ends <strong>May 31, 2027</strong>.
                  After that date, the lease automatically converts to a month-to-month tenancy unless
                  either party provides proper notice to terminate.
                </p>
                <p>
                  The lease is mostly standard but includes <strong>three clauses worth your attention</strong>:
                  a late fee provision (which is not enforceable under Ontario law), a maintenance
                  clause that improperly shifts some landlord obligations to the tenant, and a
                  subletting prohibition that cannot override your rights under the RTA.
                </p>
              </div>
            </div>

            {/* Section 2: Financial Terms */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100 bg-slate-50">
                <DollarSign className="w-5 h-5 text-blue-600" aria-hidden="true" />
                <h2 className="font-bold text-slate-900">Key Financial Terms</h2>
              </div>
              <div className="p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: "Monthly Rent", value: "$2,100.00" },
                    { label: "Rent Due Date", value: "1st of each month" },
                    { label: "Security Deposit", value: "$2,100 (last month's rent)" },
                    { label: "Deposit Interest", value: "Annual — at provincial guideline rate" },
                    { label: "Utilities Included", value: "Water only. Electricity and gas are tenant's responsibility." },
                    { label: "NSF Fee", value: "$20 (permissible)" },
                    { label: "Parking", value: "$100/month — included in total rent" },
                    { label: "Late Fee Clause", value: "$75 per month — likely unenforceable in Ontario" },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col gap-0.5">
                      <p className="text-xs text-slate-400 uppercase tracking-wide">{item.label}</p>
                      <p className="text-sm font-medium text-slate-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3: Red Flags */}
            <div className="bg-white border border-amber-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-amber-100 bg-amber-50">
                <AlertTriangle className="w-5 h-5 text-amber-600" aria-hidden="true" />
                <h2 className="font-bold text-amber-900">Red Flags (3 Found)</h2>
              </div>
              <div className="divide-y divide-slate-100">
                {[
                  {
                    title: "Late fee clause ($75/month for overdue rent)",
                    severity: "High",
                    detail: "Section 12.3 imposes a $75 late fee for any rent received after the 5th of the month. Late fee provisions are generally not enforceable under the Ontario Residential Tenancies Act. The landlord's remedy for non-payment is the N4 process.",
                  },
                  {
                    title: "Maintenance clause shifts landlord duties to tenant",
                    severity: "Medium",
                    detail: "Section 8.1 states the tenant is responsible for 'all minor repairs up to $200.' This conflicts with the Ontario RTA, under which landlords must maintain the unit in good repair regardless of cost. This clause is void in so far as it contradicts the Act.",
                  },
                  {
                    title: '"Subletting strictly prohibited" — likely unenforceable',
                    severity: "Medium",
                    detail: "Section 14.2 prohibits subletting entirely. Under the RTA, tenants have the right to sublet or assign the lease. Landlords cannot unreasonably withhold consent. This clause cannot override your statutory rights.",
                  },
                ].map((flag) => (
                  <div key={flag.title} className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-semibold text-slate-900 text-sm">{flag.title}</h3>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border flex-shrink-0 ${flag.severity === "High" ? "bg-red-50 text-red-700 border-red-100" : "bg-amber-50 text-amber-700 border-amber-100"}`}>
                        {flag.severity}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{flag.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Rights & Obligations */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100 bg-slate-50">
                <ShieldCheck className="w-5 h-5 text-blue-600" aria-hidden="true" />
                <h2 className="font-bold text-slate-900">Your Rights & Obligations</h2>
              </div>
              <div className="p-6 grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Your Rights</p>
                  <ul className="flex flex-col gap-2">
                    {[
                      "24 hours written notice before landlord entry",
                      "Annual rent increase limited to guideline",
                      "Right to sublet or assign with landlord consent",
                      "Quiet enjoyment of the unit",
                      "Maintenance by landlord regardless of cost",
                    ].map((r) => (
                      <li key={r} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Your Obligations</p>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Pay rent on the 1st of each month",
                      "Keep the unit clean and undamaged",
                      "No pets per Section 10.1",
                      "No smoking inside the unit or common areas",
                      "Give 60 days written notice before vacating",
                    ].map((r) => (
                      <li key={r} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-slate-300 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5: Questions */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100 bg-slate-50">
                <Lightbulb className="w-5 h-5 text-blue-600" aria-hidden="true" />
                <h2 className="font-bold text-slate-900">Questions to Ask Your Landlord</h2>
              </div>
              <div className="p-6">
                <ul className="flex flex-col gap-3">
                  {[
                    "Section 12.3 includes a $75 late fee — are you aware this is generally not enforceable under Ontario law?",
                    "Section 8.1 says I'm responsible for repairs up to $200 — can you clarify which specific repairs this applies to?",
                    "The lease prohibits subletting. If my circumstances change and I need to assign the lease, what is your process?",
                    "Is the parking space ($100/month) at a reserved spot, and is it included in the deposit calculation?",
                    "What is the building's average hydro cost per month for a one-bedroom unit?",
                  ].map((q) => (
                    <li key={q} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 6: Unusual Clauses */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100 bg-slate-50">
                <Eye className="w-5 h-5 text-blue-600" aria-hidden="true" />
                <h2 className="font-bold text-slate-900">Unusual Clauses</h2>
              </div>
              <div className="p-6 text-sm text-slate-700 leading-relaxed space-y-4">
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Section 15.4 — "No-guest policy after 11pm"</p>
                  <p>The lease restricts guests from remaining in the unit after 11pm. While landlords can set reasonable guest policies, an outright 11pm curfew for guests is unusually restrictive and may be difficult to enforce. Clarify this before signing if you anticipate regular guests.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Section 17.1 — "Landlord may take photos of the unit for marketing"</p>
                  <p>This clause allows the landlord to photograph the unit for marketing purposes. If privacy is a concern, you may want to negotiate that photos be taken only after you've vacated, or with your consent.</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs text-slate-500 leading-relaxed">
              <strong className="text-slate-600">Note:</strong> This is a fictional example for demonstration purposes only.
              It does not represent a real lease or real analysis. LeasePlain analyses are based on the actual content
              of your specific lease and may differ significantly. This is not legal advice.
            </div>

            {/* CTA */}
            <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-3">Get your own analysis</h2>
              <p className="text-blue-100 mb-6">Upload your lease and get a report like this — tailored to your exact clauses — in under a minute.</p>
              <Link
                href="/upload"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
              >
                <Upload className="w-4 h-4" aria-hidden="true" />
                Upload My Lease
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
