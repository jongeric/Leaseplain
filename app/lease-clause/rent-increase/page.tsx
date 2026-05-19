import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingUp, AlertTriangle, CheckCircle, ChevronRight, Upload } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Rent Increase Clause Explained – Rules, Notice & Your Rights | LeasePlain",
  description:
    "Learn how rent increase clauses work in Ontario. Understand the annual guideline, how much notice is required, and when a rent increase is illegal.",
  alternates: { canonical: "https://leaseplain.com/lease-clause/rent-increase" },
  openGraph: {
    title: "Rent Increase Clause Explained – Rules, Notice & Your Rights | LeasePlain",
    description: "Learn how rent increase clauses work in Ontario. Understand the annual guideline, how much notice is required, and when a rent increase is illegal.",
    url: "https://leaseplain.com/lease-clause/rent-increase",
    type: "website",
  },
};

const rights = [
  "Your landlord must give you at least 90 days written notice before any rent increase takes effect.",
  "Rent can only be increased once every 12 months, regardless of what the lease says.",
  "The increase must comply with the provincial Rent Increase Guideline unless a rent exemption applies.",
  "New builds occupied for the first time after November 15, 2018 are currently exempt from the guideline.",
  "You may agree in writing to a rent increase above the guideline — but this must be voluntary and informed.",
  "A rent increase notice served on the wrong form (not Form N1) is invalid.",
];

const redFlags = [
  "Clause allows the landlord to increase rent at any time without 90 days notice",
  "Lease specifies a fixed annual rent increase percentage that may exceed the guideline",
  "Lease attempts to waive your right to challenge a rent increase",
  "Rent increase tied to the Consumer Price Index without a cap",
  "Clause allows rent increase upon lease renewal without proper notice",
];

const questions = [
  "Is this unit exempt from rent increase guidelines (e.g., first occupied after November 15, 2018)?",
  "How will you notify me of a rent increase — in writing, on Form N1?",
  "Has the rent been increased in the last 12 months? If so, when?",
  "Is there any clause here that increases rent automatically — and if so, what triggers it?",
];

export default function RentIncreasePage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/lease-clauses" className="hover:underline">Lease Clauses</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Rent Increase</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Clause Explained
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Rent Increase Clause: Rules, Notice Requirements & Your Rights
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              A rent increase clause outlines when and how your landlord can raise your rent. In
              Ontario, rent increases are governed by the Residential Tenancies Act — and many
              landlords include clauses that overstep these legal limits.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How Rent Increases Work in Ontario</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  In Ontario, landlords cannot raise your rent whenever they want. The{" "}
                  <em>Residential Tenancies Act, 2006</em> (RTA) sets strict rules:
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Each year, the Ontario government sets a <strong>Rent Increase Guideline</strong> — the
                  maximum percentage a landlord can increase rent for most tenants. For 2025, the
                  guideline is <strong>2.5%</strong>. For 2024, it was 2.5%. These numbers are tied to the Ontario
                  Consumer Price Index (CPI) and are announced each August for the following year.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  If a landlord wants to increase rent above the guideline, they must apply to the
                  Landlord and Tenant Board (LTB) for an "above-guideline increase" (AGI). AGIs are
                  only granted for specific reasons — extraordinary increases in operating costs,
                  capital expenditures, or security services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Legal Rights</h2>
                <ul className="flex flex-col gap-3">
                  {rights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-3">The 2018 Exemption — Does It Apply to You?</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Units in buildings first occupied for residential purposes after <strong>November 15, 2018</strong>{" "}
                  are currently exempt from the rent increase guideline under Ontario law. This means
                  landlords of newer buildings can raise rent by any amount — provided they still give
                  90 days written notice and only raise rent once every 12 months.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed mt-3">
                  If you are renting a newly built unit, check your lease carefully for this exemption.
                  It does not eliminate all protections, but it does remove the guideline cap.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags in Rent Increase Clauses</h2>
                <ul className="flex flex-col gap-3">
                  {redFlags.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Questions to Ask Your Landlord</h2>
                <ul className="flex flex-col gap-3">
                  {questions.map((q) => (
                    <li key={q} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "How much notice is required for a rent increase in Canada?", a: "Most provinces require 3 months' written notice. Ontario requires 90 days. BC requires 3 months. Alberta requires 3 months. Notice must typically be in writing on a prescribed form and given only once every 12 months." },
                  { q: "Can my landlord raise rent above the provincial guideline?", a: "In provinces with rent control (Ontario for pre-2018 buildings, BC, Manitoba, PEI), raises above the guideline require tribunal approval. In provinces without rent control (Alberta, Saskatchewan, New Brunswick), landlords can raise by any amount with proper notice." },
                  { q: "What is a rent-increase guideline?", a: "Provincial governments publish an annual guideline — the maximum percentage landlords can raise rent without approval. Ontario's is based on inflation; BC's is tied to the CPI. Exceeding the guideline without approval is illegal in rent-controlled provinces." },
                  { q: "Can a landlord raise rent when I renew my lease?", a: "Generally yes, but only once per 12-month period and with the required notice. In Ontario, a lease renewal itself does not trigger a new rental period — existing rent-control protections continue regardless of whether you sign a new lease or go month-to-month." },
                  { q: "Is a verbal rent increase enforceable?", a: "No. Virtually all Canadian provinces require rent increases to be in writing. A verbal promise or text message is not sufficient. Landlords must use the prescribed written notice form (e.g., Ontario Form N1) and give adequate advance notice." }
                ]} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Does your lease have a rent increase clause?</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and we'll identify any rent increase provisions and flag ones
                  that may exceed your legal protections.
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
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Clauses</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Security Deposit", href: "/lease-clause/security-deposit" },
                    { label: "Late Fees", href: "/lease-clause/late-fees" },
                    { label: "Early Termination", href: "/lease-clause/early-termination" },
                    { label: "Subletting", href: "/lease-clause/subletting" },
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

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">Further Reading</h3>
                <Link href="/tenant-rights/rent-increase-rules" className="text-xs text-blue-600 hover:underline">
                  → Ontario Rent Increase Rules (full guide)
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
