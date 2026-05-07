import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { BookOpen, AlertTriangle, CheckCircle, TrendingDown } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Glossary | Plain-English Definitions of Rental Terms | LeasePlain",
  description:
    "Understand every term in your lease. Plain-English definitions of security deposit, guarantor, subletting, holdover tenant, force majeure, quiet enjoyment, and 15+ more rental terms.",
  alternates: { canonical: "https://leaseplain.com/glossary" },
};

const terms = [
  { slug: "security-deposit", term: "Security Deposit", category: "Financial", risk: "medium" },
  { slug: "rent-increase", term: "Rent Increase", category: "Financial", risk: "high" },
  { slug: "late-fees", term: "Late Fees", category: "Financial", risk: "medium" },
  { slug: "grace-period", term: "Grace Period", category: "Financial", risk: "low" },
  { slug: "termination-clause", term: "Termination Clause", category: "Duration", risk: "high" },
  { slug: "lease-renewal", term: "Lease Renewal", category: "Duration", risk: "medium" },
  { slug: "holdover-tenant", term: "Holdover Tenant", category: "Duration", risk: "high" },
  { slug: "occupancy-limits", term: "Occupancy Limits", category: "Obligations", risk: "medium" },
  { slug: "maintenance-clause", term: "Maintenance Clause", category: "Obligations", risk: "medium" },
  { slug: "subletting", term: "Subletting", category: "Obligations", risk: "medium" },
  { slug: "guarantor", term: "Guarantor", category: "Obligations", risk: "high" },
  { slug: "joint-and-several-liability", term: "Joint and Several Liability", category: "Obligations", risk: "high" },
  { slug: "force-majeure", term: "Force Majeure", category: "Special Clauses", risk: "low" },
  { slug: "quiet-enjoyment", term: "Quiet Enjoyment", category: "Special Clauses", risk: "low" },
  { slug: "habitability", term: "Habitability", category: "Special Clauses", risk: "low" },
];

const categories = [
  {
    name: "Financial",
    description: "Terms related to money, deposits, fees, and rent",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    name: "Duration",
    description: "Terms about lease length, renewal, and end-of-tenancy",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    name: "Obligations",
    description: "Terms about tenant and landlord responsibilities",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    name: "Special Clauses",
    description: "Specific legal provisions and tenant rights",
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

const faqs = [
  {
    q: "What is the most important term to understand in a lease?",
    a: "The termination clause is often the most critical — it determines how and when either party can end the lease. Security deposit terms are a close second, as disputes over deposits are the most common landlord-tenant conflict.",
  },
  {
    q: "What does 'joint and several liability' mean in plain English?",
    a: "If you share a lease with roommates under joint and several liability, each of you is individually responsible for the entire rent — not just your share. If a roommate doesn't pay their portion, the landlord can pursue any one tenant for the full amount.",
  },
  {
    q: "Is a guarantor the same as a co-signer?",
    a: "They're similar but not identical. A guarantor typically pays only if the tenant defaults, while a co-signer is equally liable from the start. In practice, many landlords use the terms interchangeably. Check your specific agreement's language.",
  },
  {
    q: "Do all lease terms apply regardless of what my lease says?",
    a: "No. In most Canadian provinces and US states, certain tenant rights exist by law and cannot be waived by a lease clause. For example, landlords cannot legally withhold a security deposit for normal wear and tear, even if a lease clause suggests otherwise. Understanding applicable law in your jurisdiction matters as much as reading your lease.",
  },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "LeasePlain Lease Glossary",
  description: "Plain-English definitions of common residential lease terms",
  url: "https://leaseplain.com/glossary",
  numberOfItems: terms.length,
  itemListElement: terms.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.term,
    url: `https://leaseplain.com/glossary/${t.slug}`,
  })),
};

const riskBadge = (risk: string) => {
  if (risk === "high")
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700 border border-red-200">
        <AlertTriangle className="w-3 h-3" /> High
      </span>
    );
  if (risk === "medium")
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700 border border-amber-200">
        <TrendingDown className="w-3 h-3" /> Medium
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
      <CheckCircle className="w-3 h-3" /> Low
    </span>
  );
};

export default function GlossaryPage() {
  return (
    <div className="flex flex-col min-h-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Navbar />

      <main>
        {/* Hero */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <BreadcrumbNav
              items={[
                { label: "Home", href: "/" },
                { label: "Glossary" },
              ]}
              className="text-indigo-300 mb-6 [&_a]:text-indigo-300 [&_a:hover]:text-white [&_span.text-slate-900]:text-white"
            />
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-indigo-400" />
              <h1 className="text-4xl font-bold">Lease Glossary</h1>
            </div>
            <p className="text-xl text-slate-300 max-w-2xl">
              Plain-English definitions of every term you might encounter in a residential lease.
              Know what you&apos;re signing before you sign it.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
          {/* Categories */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Browse by Category</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((cat) => {
                const catTerms = terms.filter((t) => t.category === cat.name);
                return (
                  <div
                    key={cat.name}
                    className={`${cat.bg} border rounded-xl p-4`}
                  >
                    <h3 className={`font-semibold text-sm ${cat.color} mb-1`}>{cat.name}</h3>
                    <p className="text-xs text-slate-600 mb-2">{cat.description}</p>
                    <p className="text-xs text-slate-500">{catTerms.length} terms</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* All Terms by Category */}
          {categories.map((cat) => {
            const catTerms = terms.filter((t) => t.category === cat.name);
            return (
              <section key={cat.name} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${cat.bg} border ${cat.color.replace("text-", "border-")}`} />
                  {cat.name} Terms
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {catTerms.map((term) => (
                    <Link
                      key={term.slug}
                      href={`/glossary/${term.slug}`}
                      className="flex items-center justify-between p-3.5 border border-slate-100 rounded-xl hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors group"
                    >
                      <span className="font-medium text-slate-900 group-hover:text-indigo-700 text-sm">
                        {term.term}
                      </span>
                      {riskBadge(term.risk)}
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}

          {/* A-Z Quick Index */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">A–Z Index</h2>
            <div className="columns-2 sm:columns-3 gap-4">
              {[...terms].sort((a, b) => a.term.localeCompare(b.term)).map((term) => (
                <div key={term.slug} className="mb-2 break-inside-avoid">
                  <Link
                    href={`/glossary/${term.slug}`}
                    className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
                  >
                    {term.term}
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Internal links to related pages */}
          <section className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Related Resources</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-700 mb-2">Lease Clauses</h3>
                <ul className="space-y-1.5">
                  {[
                    { label: "Security Deposit Clause", href: "/lease-clause/security-deposit" },
                    { label: "Termination Clause", href: "/lease-clause/termination-clause" },
                    { label: "Maintenance & Repairs", href: "/lease-clause/maintenance-repairs" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-indigo-600 hover:underline">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-700 mb-2">Tenant Rights</h3>
                <ul className="space-y-1.5">
                  {[
                    { label: "Ontario Tenant Rights", href: "/tenant-rights/ontario" },
                    { label: "BC Tenant Rights", href: "/tenant-rights/british-columbia" },
                    { label: "Alberta Tenant Rights", href: "/tenant-rights/alberta" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-indigo-600 hover:underline">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-700 mb-2">Learn More</h3>
                <ul className="space-y-1.5">
                  {[
                    { label: "How to Read a Lease", href: "/resources/how-to-read-a-lease" },
                    { label: "Lease Red Flags", href: "/resources/lease-red-flags" },
                    { label: "First-Time Renter Guide", href: "/resources/first-time-renter-guide" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-indigo-600 hover:underline">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Common Questions</h2>
            <FAQAccordion items={faqs} />
          </section>
        </div>
      </main>

      <CTASection
        heading="Ready to decode your lease?"
        subheading="Upload your lease and LeasePlain will identify every clause, explain it in plain English, and flag anything unusual."
        variant="dark"
      />

      <Footer />
    </div>
  );
}
