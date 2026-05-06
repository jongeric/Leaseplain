import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LogOut, AlertTriangle, CheckCircle, ChevronRight, Upload } from "lucide-react";

export const metadata: Metadata = {
  title: "Early Termination Clause Explained – Breaking a Lease Legally | LeasePlain",
  description:
    "Understand early termination clauses in your lease. Learn when you can legally break a lease in Ontario, what notice is required, and what penalties are enforceable.",
  alternates: { canonical: "https://leaseplain.com/lease-clause/early-termination" },
};

const tenantRights = [
  "You can end a fixed-term tenancy by giving 60 days written notice before the end of the term (Form N9).",
  "You can sublet or assign your lease to another person — the landlord cannot unreasonably withhold consent.",
  "If your landlord refuses to allow an assignment, you can terminate with 30 days notice.",
  "Victims of domestic violence or sexual violence can end a tenancy with 28 days notice.",
  "Tenants in long-term care or supportive housing situations may have special early exit rights.",
  "If a landlord fails to provide the unit as agreed, you may have grounds to terminate without penalty.",
];

const redFlags = [
  "Large flat-fee "lease break penalty" (e.g., two or three months rent) — these are often unenforceable in Ontario",
  "Forfeiture of your entire security deposit for early termination",
  "Clause waives your right to sublet or assign the lease",
  "Clause requires "advertising costs" or "re-leasing fees" payable to the landlord",
  "Short notice periods (less than 60 days for fixed-term, less than 60 days for monthly)",
  "Clause prevents you from leaving even in safety-related circumstances",
];

const questions = [
  "What is the process if I need to leave before the lease ends — do you accept assignments?",
  "Is there a formal lease-break fee, or would you expect compensation only for actual vacancy losses?",
  "How quickly do you typically re-rent a unit in this building?",
  "Would you agree to add a mutual early-termination clause we both can invoke with proper notice?",
];

export default function EarlyTerminationPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/lease-clauses" className="hover:underline">Lease Clauses</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Early Termination</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <LogOut className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Clause Explained
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Early Termination Clause: Can You Break Your Lease Legally?
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              An early termination clause sets the rules for leaving before your lease ends. In
              Ontario, tenants have more rights to break a lease than many landlords let on — and
              large "lease-break fees" are often unenforceable.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Is an Early Termination Clause?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  An early termination clause (sometimes called a "lease-break clause") specifies what
                  happens if you want to leave before your lease term is up. Landlords often use these
                  clauses to deter tenants from leaving early by imposing financial penalties.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  However, in Ontario, the <em>Residential Tenancies Act</em> gives tenants significant
                  rights to end a tenancy, and many common lease-break penalty clauses are not
                  enforceable as written. Your landlord has a <strong>duty to mitigate</strong> — they
                  cannot simply charge you rent for the remainder of your lease if the unit could be
                  re-rented.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as a Tenant in Ontario</h2>
                <ul className="flex flex-col gap-3">
                  {tenantRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">The Duty to Mitigate</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Ontario law requires your landlord to take reasonable steps to re-rent the unit after
                  you leave — even if you break the lease early. They cannot simply leave it empty and
                  charge you for the remaining months. If the landlord fails to mitigate, a court or
                  LTB adjudicator may reduce or eliminate the amount you owe.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags to Watch For</h2>
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

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your termination clause</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI flags early termination clauses that impose excessive penalties or
                  waive rights you're entitled to under Ontario law.
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
                    { label: "Breaking a Lease in Ontario", href: "/tenant-rights/breaking-a-lease" },
                    { label: "Subletting Clause", href: "/lease-clause/subletting" },
                    { label: "Security Deposit", href: "/lease-clause/security-deposit" },
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
