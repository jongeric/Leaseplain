import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckSquare, ChevronRight, Upload } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "20 Questions to Ask Before Signing a Lease | LeasePlain",
  description:
    "The questions every renter should ask before signing a lease in Ontario — about the unit, lease terms, the landlord, and fees.",
  alternates: { canonical: "https://leaseplain.com/resources/questions-before-signing" },
  openGraph: {
    title: "20 Questions to Ask Before Signing a Lease | LeasePlain",
    description: "The questions every renter should ask before signing a lease in Ontario — about the unit, lease terms, the landlord, and fees.",
    url: "https://leaseplain.com/resources/questions-before-signing",
  },
  keywords: ["questions to ask before signing a lease", "lease signing checklist", "what to ask landlord", "renter questions Ontario", "before you sign a lease"],
};

export default function QuestionsBeforeSigningPage() {
  return (
    <>
      <ArticleSchema
        headline="20 Questions to Ask Before Signing a Lease"
        description="The questions every renter should ask before signing a lease in Ontario — about the unit, lease terms, the landlord, and fees."
        url="https://leaseplain.com/resources/questions-before-signing"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["questions to ask before signing a lease", "lease signing checklist", "what to ask landlord", "renter questions Ontario", "before you sign a lease"]}
      />
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/resources" className="hover:underline">Resources</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/resources/before-you-sign" className="hover:underline">Before You Sign</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Questions to Ask</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <CheckSquare className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Resource
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              20 Questions to Ask Before Signing a Lease
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Asking the right questions before signing can save you from costly surprises. Here
              are 20 questions every renter should ask their landlord.
            </p>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">About the Unit</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Before you fall in love with a unit, make sure you understand exactly what you're
                  getting — and what might be lurking beneath the surface.
                </p>
                <ol className="space-y-3" start={1}>
                  {[
                    "What's included in the rent? (Utilities, parking, storage, laundry, internet?)",
                    "Has the unit had any pest issues — cockroaches, bedbugs, or mice? When were they last treated?",
                    "When was the unit last renovated? Are there any known maintenance issues?",
                    "What's the heating and cooling system? Who pays for heat and electricity?",
                    "How is garbage and recycling handled? Is there in-suite laundry or shared laundry?",
                  ].map((q, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-7 h-7 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <p className="text-slate-700 leading-relaxed pt-0.5">{q}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">About the Lease Terms</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Understanding the structure of your lease before you sign protects you from
                  unexpected obligations.
                </p>
                <ol className="space-y-3" start={6}>
                  {[
                    "Is the lease fixed-term or month-to-month? What are the exact start and end dates?",
                    "What are the notice periods? How much notice do I need to give to end the tenancy?",
                    "Can I sublet the unit if I need to leave temporarily? What is the process?",
                    "Are there any restrictions on guests or additional occupants?",
                    "What alterations, if any, am I allowed to make to the unit?",
                  ].map((q, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-7 h-7 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {i + 6}
                      </span>
                      <p className="text-slate-700 leading-relaxed pt-0.5">{q}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">About the Landlord</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Your landlord's responsiveness and track record matter as much as the unit itself.
                </p>
                <ol className="space-y-3" start={11}>
                  {[
                    "How do you handle maintenance requests? Is there an online portal or phone number?",
                    "What is your typical response time for urgent repairs (e.g., no heat, water leaks)?",
                    "How many units do you manage? Is there an on-site superintendent?",
                    "Have there been any Landlord and Tenant Board (LTB) orders against you or this property?",
                    "Who do I contact in an after-hours emergency?",
                  ].map((q, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-7 h-7 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {i + 11}
                      </span>
                      <p className="text-slate-700 leading-relaxed pt-0.5">{q}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">About Rent and Fees</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Get full clarity on every dollar you'll owe — before you commit.
                </p>
                <ol className="space-y-3" start={16}>
                  {[
                    "What payment methods do you accept? Is e-transfer or pre-authorized debit available?",
                    "Are there any NSF (non-sufficient funds) fees? (In Ontario, these are capped at $20.)",
                    "What does the last month's rent deposit cover? Will it earn interest?",
                    "Are there any fees not listed in the lease — move-in fees, amenity charges, or admin fees?",
                    "Has the rent been increased recently? When was the last increase and by how much?",
                  ].map((q, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-7 h-7 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {i + 16}
                      </span>
                      <p className="text-slate-700 leading-relaxed pt-0.5">{q}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <h3 className="font-bold text-slate-900 mb-2">Pro Tip</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Ask these questions in writing (email or text) so you have a record of the
                  answers. Any verbal promises that contradict the lease may be hard to enforce
                  without documentation.
                </p>
              </div>
            </div>

            {/* Sidebar */}

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "What is the most important question to ask before signing a lease?", a: "Ask for a complete breakdown of all monthly costs — rent, utilities, parking, locker, and any other fees. Hidden costs can add hundreds of dollars per month beyond the advertised rent." },
                  { q: "Should I ask to see the landlord's identity?", a: "Yes. Ask for government-issued ID and verify the landlord actually owns or manages the property. Rental scams often involve people posing as landlords for properties they don't control." },
                  { q: "Is it reasonable to ask about the building's maintenance history?", a: "Absolutely. Ask when the building was last inspected, whether there are any outstanding work orders, and how maintenance requests are handled. A landlord who is evasive about maintenance is a yellow flag." },
                  { q: "Can I ask for the previous tenant's rent amount?", a: "In provinces with rent control, the previous tenant's rent is legally relevant because landlords may try to reset the rent to market rate between tenancies. Ask, and compare it to what you're being offered. In Ontario, former tenants can request their rent history." },
                  { q: "What should I ask about the lease renewal process?", a: "Ask: Will rent increase at renewal? By how much? When will you be notified? Can you go month-to-month? Understanding the renewal process upfront prevents surprises when your first term ends." }
                ]} />
              </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">AI Lease Review</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and get a plain-English breakdown in seconds.
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
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "What to Check Before Signing", href: "/resources/check-before-signing-lease" },
                    { label: "Lease Red Flags", href: "/resources/lease-red-flags" },
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
    </>
  );
}
