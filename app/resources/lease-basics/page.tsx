import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, ChevronRight, Upload } from "lucide-react";

export const metadata: Metadata = {
  title: "Lease Basics: Guides to Rental Agreements | LeasePlain",
  description:
    "Master the fundamentals of lease agreements. Plain-English guides explaining what a lease is, how to read one, and the differences between lease types.",
  alternates: { canonical: "https://leaseplain.com/resources/lease-basics" },
};

const articles = [
  {
    title: "What Is a Lease Agreement?",
    description:
      "A plain-English explanation of what a lease agreement is, what it must include, and how it becomes legally binding in Ontario.",
    href: "/resources/what-is-a-lease-agreement",
  },
  {
    title: "How to Read a Lease Agreement",
    description:
      "A step-by-step guide to reading every section of a residential lease — what each clause means and what to watch for.",
    href: "/resources/how-to-read-a-lease",
  },
  {
    title: "Lease Agreement Explained: Every Section Decoded",
    description:
      "A complete breakdown of every standard section in a residential lease, written in plain English.",
    href: "/resources/lease-agreement-explained",
  },
  {
    title: "Lease vs Rental Agreement: What's the Difference?",
    description:
      "Fixed-term leases and month-to-month rental agreements differ in important ways. Learn which is right for your situation.",
    href: "/resources/lease-vs-rental-agreement",
  },
];

export default function LeaseBasicsPage() {
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
              <span>Lease Basics</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Basics
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight max-w-3xl">
              Lease Basics: Everything You Need to Know About Rental Agreements
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Whether you're signing your first lease or your tenth, these guides break down the
              fundamentals of rental agreements in plain English.
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
                    <BookOpen className="w-5 h-5 text-blue-600" aria-hidden="true" />
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
              <h2 className="text-3xl font-bold text-white mb-3">Ready to Review Your Lease?</h2>
              <p className="text-blue-100 leading-relaxed max-w-xl">
                Upload your lease and get a plain-English breakdown of every clause in seconds.
              </p>
            </div>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap flex-shrink-0"
            >
              <Upload className="w-4 h-4" aria-hidden="true" />
              Analyze My Lease
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
