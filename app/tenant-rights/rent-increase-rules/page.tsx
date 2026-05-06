import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingUp, CheckCircle, AlertTriangle, ChevronRight, Upload } from "lucide-react";

export const metadata: Metadata = {
  title: "Ontario Rent Increase Rules – Guideline, Notice & Your Rights | LeasePlain",
  description:
    "Complete guide to rent increase rules in Ontario. The annual guideline, 90-day notice requirements, above-guideline increases, and how to dispute an illegal increase.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/rent-increase-rules" },
};

const guidelines = [
  { year: "2025", rate: "2.5%" },
  { year: "2024", rate: "2.5%" },
  { year: "2023", rate: "2.5%" },
  { year: "2022", rate: "1.2%" },
  { year: "2021", rate: "0% (freeze due to COVID-19)" },
];

const rules = [
  "Rent can only be increased once every 12 months.",
  "The landlord must give at least 90 days written notice using the proper N1 form.",
  "The increase must not exceed the annual Rent Increase Guideline — unless a legal exemption applies.",
  "Guideline exemptions include: units first occupied after November 15, 2018; some non-profit housing; care homes.",
  "An above-guideline increase (AGI) requires a LTB application and is only granted for specific reasons.",
  "If a landlord does not use the correct form or give proper notice, the increase is void.",
];

const disputeSteps = [
  { step: "Verify the notice", detail: "Confirm the notice is on Form N1, was given at least 90 days before the effective date, and the increase amount is correct." },
  { step: "Check the guideline", detail: "Compare the proposed increase against the Ontario Rent Increase Guideline for that year. If it exceeds the guideline, it may be illegal." },
  { step: "Check your exemption status", detail: "If your unit was first occupied after November 15, 2018, the guideline may not apply. Verify this with your tenancy agreement or building records." },
  { step: "File a T1 application", detail: "If the increase is illegal, file a T1 — Tenant Application for a Rebate of Money the Landlord Owes — with the Landlord and Tenant Board." },
];

export default function RentIncreaseRulesPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/tenant-rights" className="hover:underline">Tenant Rights</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Rent Increase Rules</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
              Tenant Rights Guide
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Ontario Rent Increase Rules: What's Legal and What's Not
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Your landlord cannot raise your rent whenever they want. Ontario law sets strict limits
              on how often, how much, and how a rent increase must be communicated. Here's everything
              you need to know.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Core Rules</h2>
                <ul className="flex flex-col gap-3">
                  {rules.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">Ontario Rent Increase Guidelines</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Each year, the Ontario government announces the maximum allowable rent increase
                  for the following year. The guideline is based on the Ontario Consumer Price Index.
                </p>
                <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <th className="text-left px-5 py-3 font-semibold text-slate-700">Year</th>
                        <th className="text-left px-5 py-3 font-semibold text-slate-700">Guideline Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {guidelines.map((g, i) => (
                        <tr key={g.year} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                          <td className="px-5 py-3 font-medium text-slate-900">{g.year}</td>
                          <td className="px-5 py-3 text-slate-700">{g.rate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Source: Ontario Ministry of Municipal Affairs and Housing. Check ontario.ca for the most current guideline.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Above-Guideline Increases (AGIs)</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  A landlord who wants to raise rent beyond the guideline must apply to the LTB for
                  an above-guideline increase. The LTB only grants AGIs for specific reasons:
                </p>
                <ul className="flex flex-col gap-2.5 text-sm text-slate-700">
                  {[
                    "Extraordinary increases in property taxes or utility costs",
                    "Capital expenditures (major repairs or improvements to the building)",
                    "Increases in operating costs for security services",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 mt-5">
                  <p className="text-sm text-amber-800 leading-relaxed">
                    <strong>Important:</strong> If your landlord files an AGI application, you have the
                    right to contest it at the LTB hearing. You can dispute the necessity of the
                    expenditures, their reasonableness, or the accuracy of the claimed costs. Consider
                    getting legal help before an AGI hearing.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">How to Dispute an Illegal Rent Increase</h2>
                <div className="flex flex-col gap-4">
                  {disputeSteps.map((item, i) => (
                    <div key={item.step} className="flex items-start gap-4 bg-slate-50 rounded-xl p-5 border border-slate-100">
                      <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm mb-1">{item.step}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your lease's rent increase clause</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and our AI will flag any rent increase provisions that may
                  exceed your legal protections.
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
                    { label: "Rent Increase Clause", href: "/lease-clause/rent-increase" },
                    { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
                    { label: "Breaking a Lease", href: "/tenant-rights/breaking-a-lease" },
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
