import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, AlertTriangle, CheckCircle, ChevronRight, Upload } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/lease-clause/late-fees",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
};

export const metadata: Metadata = {
  title: "Late Fee Clause Explained – Are Late Fees Legal in Ontario? | LeasePlain",
  description:
    "Understand late fee clauses in your lease. Learn whether your landlord can legally charge late fees in Ontario and what the law actually allows.",
  alternates: { canonical: "https://leaseplain.com/lease-clause/late-fees" },
  keywords: ["late fee clause lease", "are late fees legal Ontario", "late rent fee Canada", "RTA late payment rules", "landlord late fee enforceable"],
  openGraph: {
    title: "Late Fee Clause Explained – Are Late Fees Legal in Ontario? | LeasePlain",
    description: "Understand late fee clauses in your lease. Learn whether your landlord can legally charge late fees in Ontario and what the law actually allows.",
    url: "https://leaseplain.com/lease-clause/late-fees",
    type: "website",
  },
};

const keyFacts = [
  "Ontario's Residential Tenancies Act does not permit landlords to charge late fees as a general matter.",
  "Provisions in a lease imposing a financial penalty for late rent are generally unenforceable under the RTA.",
  "A landlord's remedy for late rent is to serve an N4 notice (non-payment of rent) — not to charge extra.",
  "NSF (non-sufficient funds) charges: landlords may charge up to $20 for a returned cheque or failed payment.",
  "Any clause charging daily penalties, percentage fees, or administrative fees on late rent is likely void.",
];

const redFlags = [
  'Any clause charging a flat fee for late rent (e.g., "$50 late fee if rent not received by the 5th")',
  "Daily or weekly interest charges on overdue rent",
  '"Administrative fee" or "processing fee" for late payment',
  "Percentage-based late charges (e.g., 2% per month on overdue rent)",
  "NSF fee exceeding $20",
  "Automatic rent increase if lease is not renewed — unrelated but often buried near payment clauses",
];

const whatToKnow = [
  {
    q: "What happens if I pay rent late?",
    a: "Your landlord can serve you an N4 Notice to End Tenancy for Non-Payment of Rent. You then have 14 days to pay all rent owing. If you pay in full within 14 days, the tenancy continues as normal.",
  },
  {
    q: "Can a landlord charge anything for late payment?",
    a: "Only an NSF fee up to $20 if a cheque or payment bounced. No other financial penalties for late payment are legal under the RTA.",
  },
  {
    q: "What if I signed a lease with a late fee clause?",
    a: "The clause is likely void under the RTA. You cannot contract out of tenant protections. Even if you signed it, you are not legally required to pay it — but you should get legal advice before withholding payment.",
  },
];

const questions = [
  "Does this lease include any late payment fees — and are you aware these may not be enforceable under the RTA?",
  "If I pay late, what is your process — do you immediately serve an N4, or do you give a grace period?",
  "If my payment bounces, what is the NSF fee you charge, and is it in writing?",
];

const faqs = [
  { q: "Are late fees legal in Canadian leases?", a: "Late fees are explicitly prohibited in Ontario (the RTA bans illegal charges). In BC and other provinces, the rules are stricter — any penalty fee not permitted by the tenancy act is generally void. Check your province's law before paying a late fee." },
  { q: "What can a landlord do if I pay rent late in Canada?", a: "The landlord can issue an eviction notice for non-payment of rent. In Ontario, this is an N4 notice, giving tenants 14 days to pay the arrears and void the notice. Most provinces have similar processes with a grace period." },
  { q: "How much late fee is too much?", a: "In provinces that do permit late fees (a minority), courts will not enforce punitive or exorbitant fees. A reasonable administrative charge proportional to actual administrative cost may be enforced; large percentage-based fees typically will not be." },
  { q: "Can a landlord charge NSF fees for a bounced cheque?", a: "In Ontario, landlords may charge up to $20 for a returned cheque under the RTA — this is a statutory maximum, not a pass-through of actual bank fees." },
  { q: "What should I do if my lease includes a late fee clause?", a: "First, check whether late fees are permitted in your province. If they are not (as in Ontario), the clause is void even though you signed the lease. If you are charged an illegal late fee, dispute it with your province's tenancy tribunal." },
];

export default function LateFeesPage() {
  return (
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Lease Clauses", href: "https://leaseplain.com/lease-clauses" },
        { name: "Late Fees", href: "https://leaseplain.com/lease-clause/late-fees" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema).replace(/</g, "<") }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(faq => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a }
            }))
          }).replace(/</g, "<")
        }}
      />
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/lease-clauses" className="hover:underline">Lease Clauses</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Late Fees</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Clause Explained
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Late Fee Clause: Are Late Rent Fees Actually Legal in Ontario?
            </h1>
            <p className="speakable-summary text-lg text-slate-600 max-w-2xl leading-relaxed">
              Many leases include late fee clauses — but in Ontario, most of them are not legally
              enforceable. Here's what the law actually says about charging extra for late rent.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Ontario Law Says</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The <em>Residential Tenancies Act, 2006</em> (RTA) sets out a complete framework
                  for what landlords can and cannot do when rent is unpaid. Notably, the RTA does not
                  give landlords the right to impose late fees — it instead provides a specific legal
                  remedy: the <strong>N4 Notice to End Tenancy for Non-Payment of Rent</strong>.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Any provision in a lease that imposes a financial penalty beyond what the RTA
                  authorizes is generally void. This means the typical "$50 late fee" or "2% monthly
                  interest" clause that appears in many leases is likely unenforceable against an
                  Ontario tenant.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Facts About Late Fees in Ontario</h2>
                <ul className="flex flex-col gap-3">
                  {keyFacts.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                  Even if you signed it, you may not owe it
                </h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Under the RTA, a landlord and tenant cannot contract out of tenant protections —
                  meaning any clause in your lease that violates the Act is void, even if you signed
                  the lease. If a landlord is charging you late fees, you can file a T1 application
                  with the LTB to recover any fees already paid.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags in Late Fee Clauses</h2>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Questions</h2>
                <div className="flex flex-col divide-y divide-slate-100">
                  {whatToKnow.map((item) => (
                    <div key={item.q} className="py-5">
                      <h3 className="font-semibold text-slate-900 mb-2 text-sm">{item.q}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
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
                <FAQAccordion items={faqs} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Does your lease include late fees?</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and our AI will flag any late fee provisions and explain whether
                  they're enforceable under Ontario law.
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
                    { label: "Security Deposit", href: "/lease-clause/security-deposit" },
                    { label: "Rent Increase Clause", href: "/lease-clause/rent-increase" },
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
