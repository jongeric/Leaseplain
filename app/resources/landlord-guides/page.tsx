import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, ChevronRight, Upload } from "lucide-react";

export const metadata: Metadata = {
  title: "Landlord Guides: Lease Resources for Property Owners | LeasePlain",
  description:
    "Practical lease guides for landlords — avoid common mistakes, create airtight leases, and understand your obligations under Canadian landlord-tenant law.",
  alternates: { canonical: "https://leaseplain.com/resources/landlord-guides" },
};

const articles = [
  {
    title: "Landlord Lease Checklist: What Every Lease Must Include",
    description:
      "A step-by-step checklist for landlords creating or reviewing a residential lease — covering the clauses, disclosures, and terms you can't afford to miss.",
    href: "/resources/landlord-lease-checklist",
  },
  {
    title: "Common Landlord Lease Mistakes (and How to Avoid Them)",
    description:
      "The most frequent lease drafting errors that create legal exposure for landlords — and what to do instead.",
    href: "/resources/landlord-lease-mistakes",
  },
];

export default function LandlordGuidesPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/resources" className="hover:underline">Resources</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Landlord Guides</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
              Landlord Guides
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight max-w-3xl">
              Landlord Guides: Lease Resources for Property Owners
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Creating a compliant, enforceable lease protects you and your tenant. These guides walk
              through what Canadian landlords need to know about drafting, reviewing, and managing
              residential lease agreements.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group bg-white border border-slate-100 rounded-2xl shadow-sm p-6 flex items-start gap-4 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed">{article.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 flex-shrink-0 self-center transition-colors" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">Review your lease before sending it</h2>
              <p className="text-blue-100 leading-relaxed max-w-xl">
                Upload any lease — as a landlord or tenant — and get a plain-English analysis of every clause.
              </p>
            </div>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap flex-shrink-0"
            >
              <Upload className="w-4 h-4" aria-hidden="true" />
              Analyze a Lease
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
