import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, CheckCircle, ChevronRight, Upload, Clock } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "How to Read a Lease Agreement – Step-by-Step Guide | LeasePlain",
  description:
    "Learn how to read a residential lease agreement. A step-by-step guide covering each section, what to look for, and the questions to ask before signing.",
  alternates: { canonical: "https://leaseplain.com/resources/how-to-read-a-lease" },
};

const steps = [
  {
    title: "Start with the parties and property",
    content: "The first section identifies who the landlord and tenant are, and describes the rental unit. Verify every detail is correct: your full name, the full address (including unit number), and the landlord's name and contact information. Errors here can cause problems later.",
    checkpoints: [
      "Is your full legal name spelled correctly?",
      "Is the full property address correct, including unit number?",
      "Is the landlord's full name and contact info listed?",
    ],
  },
  {
    title: "Read the term and dates carefully",
    content: "This section sets when your lease starts and when it ends. For a fixed-term lease, the end date matters — it determines when you need to give notice if you want to leave. Understand whether the lease converts to month-to-month automatically at the end of the term.",
    checkpoints: [
      "Is the start date correct?",
      "Is the end date what you agreed on?",
      "What happens at the end of the term — does it auto-renew?",
    ],
  },
  {
    title: "Understand the rent section",
    content: "Beyond the monthly amount, check: the due date, accepted payment methods, what happens if payment fails (NSF fees), and whether any utilities are included. Any fees buried in this section — parking, locker, appliance rental — should be itemized.",
    checkpoints: [
      "Is the rent amount exactly what was agreed?",
      "When is rent due, and is there a grace period?",
      "Are any utilities or services included in the rent?",
      "What is the NSF fee (should not exceed $20 in Ontario)?",
    ],
  },
  {
    title: "Review the security deposit terms",
    content: "In Ontario, the only lawful deposit is a last month's rent deposit. Verify the amount (maximum one month's rent), confirm it earns annual interest at the provincial guideline rate, and note how it will be applied when you move out.",
    checkpoints: [
      "Is the deposit equal to exactly one month's rent or less?",
      "Is interest on the deposit mentioned?",
      "Is the deposit labeled as 'last month's rent'?",
    ],
  },
  {
    title: "Read the rules and restrictions",
    content: "This section covers guests, pets, smoking, alterations, and conduct. These are some of the most commonly disputed clauses. Know exactly what you are and are not permitted to do. Watch for vague language like 'excessive noise' without definition.",
    checkpoints: [
      "Are there pet restrictions — and do they apply to you?",
      "What are the rules around guests and occupants?",
      "Can you make any alterations? If so, what are the conditions?",
    ],
  },
  {
    title: "Check maintenance and repair responsibilities",
    content: "Identify who is responsible for what. Landlords in Ontario must maintain the unit — but many leases attempt to shift some of that duty to tenants. Any clause making you responsible for appliances the landlord owns or structural repairs is suspect.",
    checkpoints: [
      "Does the clause shift landlord maintenance duties to you?",
      "Who handles appliance maintenance?",
      "What is the process for submitting maintenance requests?",
    ],
  },
  {
    title: "Read the termination clauses",
    content: "Understand how either party can end the tenancy. Pay attention to notice periods, the form of notice required, and any early termination penalties. Large flat-fee penalties are often unenforceable in Ontario.",
    checkpoints: [
      "What notice do you need to give to end the tenancy?",
      "Are there early termination penalties — and do they seem excessive?",
      "What grounds can the landlord use to terminate?",
    ],
  },
  {
    title: "Look for any unusual or added clauses",
    content: "Most leases end with additional terms added by the landlord. These are the riskiest section of any lease. Read each one carefully. Any clause that contradicts your rights under the Ontario RTA is void — but you need to know it's there.",
    checkpoints: [
      "Are there any prohibitions you weren't told about verbally?",
      "Do any clauses seem to remove your statutory rights?",
      "Is there anything here you don't understand?",
    ],
  },
];

export default function HowToReadALeasePage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/resources" className="hover:underline">Resources</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>How to Read a Lease</span>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100">
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                Guide
              </div>
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <Clock className="w-3 h-3" aria-hidden="true" />
                8 min read
              </span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              How to Read a Lease Agreement: A Step-by-Step Guide
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Most residential leases are 15–40 pages of dense legal language. Here's how to read
              yours systematically — section by section — so nothing catches you off guard after
              you sign.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <p className="text-slate-700 leading-relaxed">
                Before you start reading, set aside at least 30–60 minutes. Read the entire lease
                — not just the highlighted parts your landlord points to. If something is unclear,
                note it. If something seems wrong, flag it. Never sign under pressure to decide
                immediately.
              </p>

              {steps.map((step, i) => (
                <div key={step.title}>
                  <div className="flex items-start gap-4 mb-4">
                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <h2 className="text-xl font-bold text-slate-900 leading-snug pt-0.5">{step.title}</h2>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4 ml-12">{step.content}</p>
                  <div className="ml-12 bg-slate-50 border border-slate-100 rounded-xl p-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">Checkpoints</p>
                    <ul className="flex flex-col gap-2">
                      {step.checkpoints.map((cp) => (
                        <li key={cp} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          {cp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-2">After You've Read It</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Once you've read the full lease, make a list of anything unclear, anything that
                  concerns you, or anything that differs from what you were told verbally. Put those
                  questions in writing to your landlord before signing. If the landlord cannot explain
                  a clause satisfactorily, consider getting legal advice before you proceed.
                </p>
              </div>
            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Let AI read your lease first</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and get a plain-English breakdown in under a minute. A great
                  first step before reading every page yourself.
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
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Guides</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Lease Red Flags", href: "/resources/lease-red-flags" },
                    { label: "What to Check Before Signing", href: "/resources/check-before-signing-lease" },
                    { label: "Lease Agreement Explained", href: "/resources/lease-agreement-explained" },
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
