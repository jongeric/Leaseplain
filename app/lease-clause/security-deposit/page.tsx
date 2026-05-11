import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, AlertTriangle, CheckCircle, ChevronRight, Upload } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Security Deposit Clause Explained – What Tenants Need to Know | LeasePlain",
  description:
    "Understand what a security deposit clause means, how much your landlord can legally charge, and when you're entitled to get it back — with interest.",
  alternates: { canonical: "https://leaseplain.com/lease-clause/security-deposit" },
};

const rights = [
  "The maximum security deposit in Ontario is one month's rent — no more.",
  "The deposit must be applied toward the last month's rent, not held as a general damage fund.",
  "Your landlord must pay you interest on the deposit every year, at the provincial rent increase guideline rate.",
  "If the landlord does not use the deposit for last month's rent, they must return it with all accrued interest.",
  "Requesting a damage deposit in addition to the last-month's-rent deposit is illegal in Ontario.",
];

const redFlags = [
  "Deposit exceeding one month's rent",
  "Lease calls the deposit a “damage deposit” or “cleaning deposit” (illegal in Ontario)",
  "No mention of interest on the deposit",
  "Clause says deposit can be used for “any damages at landlord’s discretion”",
  "Landlord does not provide a receipt for the deposit",
  "Clause waives your right to recover the deposit",
];

const questions = [
  "How will my deposit be held — in a separate trust account?",
  "How and when will you pay me the annual interest?",
  "Under what specific circumstances would you deduct from my deposit?",
  "Will you provide a written move-in inspection report so we agree on the property's condition?",
];

export default function SecurityDepositPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/lease-clauses" className="hover:underline">Lease Clauses</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Security Deposit</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Clause Explained
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Security Deposit Clause: What It Means and What's Legal
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              A security deposit clause outlines how much you must pay upfront, how it's held, and
              when you get it back. In Ontario, this clause is heavily regulated — many landlords
              include terms that are actually illegal.
            </p>
          </div>
        </section>

        {/* Content + sidebar */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Is a Security Deposit?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  A security deposit is money paid to your landlord before you move in. It is meant to
                  protect the landlord against unpaid rent or damage beyond normal wear and tear.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  In Ontario, the law is clear: a landlord can only collect a <strong>last month's rent
                  deposit</strong>. This means the deposit must be applied to your final month of
                  tenancy — not used as a general damage fund. Calling it a "security deposit" or
                  "damage deposit" and using it any other way is a violation of the{" "}
                  <em>Residential Tenancies Act, 2006</em> (RTA).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Legal Rights in Ontario</h2>
                <ul className="flex flex-col gap-3">
                  {rights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What to Watch for in Your Lease</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Security deposit clauses are one of the most commonly abused sections of a residential
                  lease. Here are the red flags our analyzer looks for:
                </p>
                <ul className="flex flex-col gap-3">
                  {redFlags.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                  Damage Deposits Are Illegal in Ontario
                </h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Some landlords include a clause requiring a separate "damage deposit" or "key deposit"
                  in addition to the last month's rent. This is not permitted under the RTA. If your
                  lease contains such a clause, you are not legally required to pay it — and you can
                  file an application with the Landlord and Tenant Board (LTB) to recover any
                  amount already paid.
                </p>
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

            {/* Sidebar */}

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "What is a security deposit?", a: "A security deposit is money paid to the landlord before moving in, held to cover potential damages beyond normal wear and tear or unpaid rent. Most Canadian provinces cap the amount at one month's rent or half a month's rent." },
                  { q: "Can a landlord keep my entire security deposit?", a: "No. Landlords can only deduct for damages that exceed normal wear and tear, unpaid rent, or unpaid utilities — they must provide an itemized written statement. Taking the entire deposit without documentation is illegal in every Canadian province." },
                  { q: "What is the difference between a security deposit and last month's rent?", a: "A security deposit is for damages; last month's rent is applied to your final month of tenancy. Ontario only permits last month's rent (not a separate damage deposit). Other provinces (like BC and Alberta) allow a separate security deposit." },
                  { q: "How long does a landlord have to return my deposit?", a: "Return timelines vary by province: BC requires 15 days, Alberta 10 days, Manitoba 14 days, and Saskatchewan 7 business days after tenancy end. If the landlord misses the deadline, you may be entitled to double the deposit amount." },
                  { q: "What counts as normal wear and tear?", a: "Normal wear and tear includes minor scuffs on walls, small nail holes from pictures, carpet worn from normal use, and faded paint. Landlords cannot deduct for these — only for damage caused by negligence, misuse, or accidents." }
                ]} />
              </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your lease's deposit clause</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and our AI will flag any deposit clauses that are unusual,
                  one-sided, or illegal under Ontario law.
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
                    { label: "Rent Increase", href: "/lease-clause/rent-increase" },
                    { label: "Late Fees", href: "/lease-clause/late-fees" },
                    { label: "Early Termination", href: "/lease-clause/early-termination" },
                    { label: "Maintenance Responsibilities", href: "/lease-clause/maintenance" },
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
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">Ontario Resources</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  For deposit disputes, file an application with the{" "}
                  <strong>Landlord and Tenant Board (LTB)</strong> using Form T1 — Application for a
                  Rent Rebate. Visit <strong>tribunalsontario.ca/ltb</strong> for more information.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
