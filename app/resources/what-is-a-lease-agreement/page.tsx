import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, ChevronRight, Upload } from "lucide-react";

export const metadata: Metadata = {
  title: "What Is a Lease Agreement? A Plain-English Explanation | LeasePlain",
  description:
    "Learn what a lease agreement is, what it must include, and how it becomes legally binding in Ontario. A plain-English guide for renters.",
  alternates: { canonical: "https://leaseplain.com/resources/what-is-a-lease-agreement" },
};

export default function WhatIsALeaseAgreementPage() {
  return (
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
              <Link href="/resources/lease-basics" className="hover:underline">Lease Basics</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>What Is a Lease Agreement?</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Resource
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              What Is a Lease Agreement? A Plain-English Explanation
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              A lease agreement is one of the most important documents you'll ever sign. Here's
              exactly what it is, what it must contain, and why it matters.
            </p>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Is a Lease Agreement?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  A lease agreement is a legally binding contract between a tenant and a landlord.
                  It sets out the terms under which the tenant can occupy the rental unit — including
                  how much rent is owed, when it's due, how long the tenancy lasts, and the rules
                  both parties must follow.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Once signed, a lease is binding on both parties. The landlord cannot change the
                  terms mid-lease (for example, raise the rent outside of the permitted annual
                  increase), and the tenant cannot unilaterally leave without following the proper
                  notice process.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  In plain terms: it's the rulebook for your tenancy, and both sides have agreed
                  to follow it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Elements of Every Lease</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Every residential lease should cover the following core terms:
                </p>
                <ul className="space-y-3">
                  {[
                    { term: "Rent amount", detail: "The total monthly rent, including any separate charges for parking or storage." },
                    { term: "Payment date", detail: "When rent is due each month (typically the 1st) and the accepted payment methods." },
                    { term: "Lease duration", detail: "Whether the lease is fixed-term (e.g., one year) or month-to-month." },
                    { term: "Notice periods", detail: "How much notice each party must give before ending the tenancy." },
                    { term: "Rules about pets", detail: "Whether pets are permitted — though note that no-pets clauses are void under Ontario's Residential Tenancies Act." },
                    { term: "Rules about guests and occupants", detail: "Who is permitted to live in or regularly stay at the unit." },
                    { term: "Subletting", detail: "Whether and how you may sublet or assign your lease." },
                  ].map((item) => (
                    <li key={item.term} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2" />
                      <div>
                        <span className="font-semibold text-slate-900">{item.term}: </span>
                        <span className="text-slate-700">{item.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Fixed-Term vs Month-to-Month Leases</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5">
                    <h3 className="font-bold text-slate-900 mb-2">Fixed-Term Lease</h3>
                    <p className="text-slate-700 text-sm leading-relaxed mb-3">
                      A fixed-term lease locks in the tenancy for a set period — most commonly one
                      year. During that time, neither party can simply end the agreement without
                      cause; both sides have security.
                    </p>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-0.5 text-blue-400 flex-shrink-0" aria-hidden="true" />Rent is locked in for the term</li>
                      <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-0.5 text-blue-400 flex-shrink-0" aria-hidden="true" />Harder to leave early without consequences</li>
                      <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-0.5 text-blue-400 flex-shrink-0" aria-hidden="true" />Automatically becomes month-to-month at the end</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5">
                    <h3 className="font-bold text-slate-900 mb-2">Month-to-Month</h3>
                    <p className="text-slate-700 text-sm leading-relaxed mb-3">
                      A month-to-month agreement renews automatically each month. Either party can
                      end it by giving proper notice — typically 60 days for tenants in Ontario.
                    </p>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-0.5 text-blue-400 flex-shrink-0" aria-hidden="true" />More flexibility to leave with 60 days notice</li>
                      <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-0.5 text-blue-400 flex-shrink-0" aria-hidden="true" />Landlord can also end tenancy with proper notice</li>
                      <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-0.5 text-blue-400 flex-shrink-0" aria-hidden="true" />Common after a fixed term expires</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Makes a Lease Legally Binding in Ontario?
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  For a residential lease to be legally binding in Ontario, it must meet the
                  requirements of the <em>Residential Tenancies Act, 2006</em> (RTA):
                </p>
                <ul className="space-y-3">
                  {[
                    "It must be signed by both the landlord and the tenant.",
                    "It must use Ontario's Standard Lease form for most residential tenancies (required since April 30, 2018). Landlords who don't use it can be required to provide it within 21 days of a tenant's request.",
                    "It cannot contain clauses that waive rights granted by the RTA — those clauses are void even if both parties sign them.",
                    "It must accurately identify the parties and the rental unit.",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-slate-700 leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <p className="text-sm text-amber-800 leading-relaxed">
                    <strong>Important:</strong> Even if you sign a lease with an illegal clause
                    (e.g., a damage deposit, a no-pets rule), that specific clause is void — but
                    the rest of the lease remains valid.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
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
                    { label: "How to Read a Lease", href: "/resources/how-to-read-a-lease" },
                    { label: "Lease Agreement Explained", href: "/resources/lease-agreement-explained" },
                    { label: "Lease vs Rental Agreement", href: "/resources/lease-vs-rental-agreement" },
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
