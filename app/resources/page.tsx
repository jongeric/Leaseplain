import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, ChevronRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Tenant Resources & Lease Guides | LeasePlain",
  description:
    "Free guides for tenants: how to read a lease, lease red flags, what to check before signing, AI lease review benefits, and more.",
  alternates: { canonical: "https://leaseplain.com/resources" },
};

const articles = [
  {
    title: "How to Read a Lease Agreement",
    description: "A step-by-step guide to reading your residential lease — what each section means and what to pay close attention to.",
    href: "/resources/how-to-read-a-lease",
    readTime: "8 min read",
    category: "Guides",
  },
  {
    title: "Lease Agreement Explained: Every Section Decoded",
    description: "A complete breakdown of every standard section in a residential lease, written in plain English.",
    href: "/resources/lease-agreement-explained",
    readTime: "12 min read",
    category: "Guides",
  },
  {
    title: "What to Check Before Signing a Lease",
    description: "A practical checklist of everything you should verify — about the unit, the landlord, and the terms — before putting pen to paper.",
    href: "/resources/check-before-signing-lease",
    readTime: "6 min read",
    category: "Checklists",
  },
  {
    title: "AI Lease Review: Benefits, Limitations & How It Works",
    description: "What AI can and can't do when reviewing a lease — and why using it as a first step (not a replacement for a lawyer) makes sense.",
    href: "/resources/ai-lease-review",
    readTime: "5 min read",
    category: "About AI",
  },
  {
    title: "Lease Red Flags: 15 Warning Signs in Any Rental Agreement",
    description: "The most common problematic clauses in residential leases, what they mean for you, and whether they're enforceable.",
    href: "/resources/lease-red-flags",
    readTime: "10 min read",
    category: "Red Flags",
  },
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              Free Tenant Resources
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Guides & Tenant Resources
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Free, plain-English guides to help you understand your lease, know your rights,
              and rent with confidence. No jargon. No legal fees.
            </p>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-6">
              {articles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group flex flex-col sm:flex-row sm:items-start justify-between gap-4 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <BookOpen className="w-5 h-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{article.category}</span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" aria-hidden="true" />
                          {article.readTime}
                        </span>
                      </div>
                      <h2 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
                        {article.title}
                      </h2>
                      <p className="text-sm text-slate-500 leading-relaxed">{article.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 flex-shrink-0 mt-1 transition-colors self-center" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-blue-600">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to analyze your specific lease?</h2>
            <p className="text-blue-100 mb-8">
              General guides are a start — but your lease is unique. Upload it and get a report
              tailored to your exact clauses.
            </p>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Analyze My Lease
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
