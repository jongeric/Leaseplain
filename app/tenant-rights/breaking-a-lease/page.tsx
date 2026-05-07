import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LogOut, CheckCircle, AlertTriangle, ChevronRight, Upload, FileText } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Breaking a Lease in Ontario – Your Rights & Options | LeasePlain",
  description:
    "Can you break a lease early in Ontario? Learn your options: subletting, assignment, N9 notice, domestic violence provisions, and what the landlord can legally charge.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/breaking-a-lease" },
};

const options = [
  {
    title: "Wait Until the End of Term",
    form: null,
    notice: "60 days before end of fixed term",
    description: "Give 60 days written notice using Form N9 before the last day of your fixed term. This is the cleanest exit and involves no penalty.",
    suitable: "Best option if your timeline allows.",
  },
  {
    title: "Sublet Your Unit",
    form: "No form — written request to landlord",
    notice: "Request landlord consent in writing",
    description: "You temporarily hand your unit to another person for a set period, then return. You remain responsible for rent. Good for short absences (work abroad, travel).",
    suitable: "Best for temporary departures.",
  },
  {
    title: "Assign Your Lease",
    form: "No specific form — written agreement",
    notice: "Request landlord consent; 30-day termination right if refused",
    description: "You permanently transfer all lease rights to a new tenant. Once accepted, you are generally released. If the landlord refuses without reasonable grounds, you can terminate with 30 days notice.",
    suitable: "Best for permanent departure during fixed term.",
  },
  {
    title: "Mutual Agreement with Landlord",
    form: "N11 — Agreement to Terminate",
    notice: "As agreed by both parties",
    description: "Both you and your landlord agree in writing to end the tenancy early. Both parties sign Form N11. This is the fastest, cleanest option if your landlord cooperates.",
    suitable: "Best if landlord agrees.",
  },
  {
    title: "Domestic or Sexual Violence",
    form: "N15 — Tenant Notice to Terminate",
    notice: "28 days",
    description: "Victims of domestic violence or sexual violence can terminate a tenancy with only 28 days notice using Form N15. Supporting documentation is required. Your privacy is protected.",
    suitable: "For tenant safety emergencies.",
  },
];

const landlordLimitations = [
  "Cannot lock you out or remove your belongings — must get an LTB eviction order.",
  "Must take reasonable steps to re-rent the unit (duty to mitigate).",
  "Cannot charge you rent beyond what they could have recovered from a reasonable re-rental effort.",
  "Large flat 'lease break fees' specified in leases are generally not enforceable under Ontario law.",
  "Cannot keep your last month's rent deposit for damages — it must be applied to the last month.",
];

export default function BreakingALeasePage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/tenant-rights" className="hover:underline">Tenant Rights</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Breaking a Lease</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <LogOut className="w-3.5 h-3.5" aria-hidden="true" />
              Tenant Rights Guide
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Breaking a Lease in Ontario: Your Options and Rights
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Needing to leave before your lease ends is stressful — but Ontario tenants have more
              options than most landlords let on. Here's every legitimate path to ending your
              tenancy early, and what your landlord can legally recover from you.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Options for Leaving Early</h2>
                <div className="flex flex-col gap-5">
                  {options.map((option) => (
                    <div key={option.title} className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="font-semibold text-slate-900">{option.title}</h3>
                        {option.form && (
                          <div className="flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-100 flex-shrink-0">
                            <FileText className="w-3 h-3" aria-hidden="true" />
                            {option.form}
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-3">{option.description}</p>
                      <div className="flex flex-wrap gap-3 text-xs">
                        <span className="bg-slate-50 text-slate-600 px-2.5 py-1 rounded-full border border-slate-100">
                          Notice: {option.notice}
                        </span>
                        <span className="bg-green-50 text-green-700 px-2.5 py-1 rounded-full border border-green-100">
                          {option.suitable}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Your Landlord Cannot Do</h2>
                <ul className="flex flex-col gap-3">
                  {landlordLimitations.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                  The Duty to Mitigate
                </h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  If you leave before your lease ends, your landlord must take reasonable steps to
                  find a new tenant. They cannot simply leave the unit empty and charge you for all
                  remaining months. If they fail to mitigate, any claim they have against you
                  is significantly reduced. Document your notice and communications in writing.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-3">Practical Tip: Negotiate First</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Before pursuing formal routes, talk to your landlord. Many landlords are willing
                  to sign an N11 (mutual agreement to terminate) when a tenant has a legitimate
                  reason to leave — especially if you offer to help find a replacement tenant.
                  A co-operative exit is almost always faster and less costly than a formal process.
                </p>
              </div>
            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your early termination clause</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and our AI will explain your early termination options and flag
                  any unenforceable penalty clauses.
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
                    { label: "Early Termination Clause", href: "/lease-clause/early-termination" },
                    { label: "Subletting Clause", href: "/lease-clause/subletting" },
                    { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
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
