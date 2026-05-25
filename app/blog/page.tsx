import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tenant Rights Blog | Canadian Rental Law Updates | LeasePlain",
  description:
    "Guides, updates, and plain-English explanations of Canadian rental law — rent increase rules, eviction notices, tenant rights by province, and more.",
  alternates: { canonical: "https://leaseplain.com/blog" },
  openGraph: {
    title: "Tenant Rights Blog | Canadian Rental Law Updates | LeasePlain",
    description:
      "Guides, updates, and plain-English explanations of Canadian rental law — rent increase rules, eviction notices, tenant rights by province, and more.",
    url: "https://leaseplain.com/blog",
    type: "website",
  },
};

const posts = [
  {
    href: "/blog/ontario-rent-increase-guideline-2026",
    title: "Ontario Rent Increase Guideline 2026: What Tenants Need to Know",
    excerpt:
      "Ontario's rent increase guideline for 2026 is set at 2.5%. Here's what that means for your rent, who is exempt, and what to do if your landlord goes over the limit.",
    date: "January 15, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/bc-rent-increase-2026",
    title: "BC Rent Increase Limit 2026: Rules for BC Tenants",
    excerpt:
      "British Columbia's 2026 rent increase cap is calculated using the CPI + 2% formula. Learn the rules, the required notice period, and how the RTB enforces limits.",
    date: "February 1, 2026",
    category: "British Columbia",
  },
  {
    href: "/blog/how-to-fight-an-illegal-eviction-ontario",
    title: "How to Fight an Illegal Eviction in Ontario",
    excerpt:
      "Not every eviction notice in Ontario is valid. Learn what makes a notice invalid, what your rights are at the LTB, and how to file a T2 application for bad-faith eviction.",
    date: "February 15, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/security-deposit-rules-canada",
    title: "Security Deposit Rules by Province: What Can Your Landlord Actually Charge?",
    excerpt:
      "Deposit rules vary dramatically across Canada — from no deposits at all in Quebec to one month's rent in Alberta. Here's a province-by-province breakdown of what landlords can and cannot charge.",
    date: "March 1, 2026",
    category: "Canada",
  },
  {
    href: "/blog/lease-red-flags-to-watch-for",
    title: "7 Lease Red Flags Every Canadian Renter Should Know Before Signing",
    excerpt:
      "Some lease clauses look official but are actually unenforceable — or even illegal. Here are seven red flags to spot before you put pen to paper.",
    date: "March 15, 2026",
    category: "Lease Tips",
  },
  {
    href: "/blog/moving-out-ontario-checklist",
    title: "Moving Out in Ontario: Tenant Checklist for Getting Your Deposit Back",
    excerpt:
      "Moving out in Ontario involves more steps than most tenants realize. Follow this checklist to serve proper notice, document the unit, and protect your last month's rent deposit.",
    date: "April 1, 2026",
    category: "Ontario",
  },
];

const categoryColor: Record<string, string> = {
  Ontario: "bg-blue-50 text-blue-700 border-blue-100",
  "British Columbia": "bg-emerald-50 text-emerald-700 border-emerald-100",
  Canada: "bg-slate-50 text-slate-700 border-slate-200",
  "Lease Tips": "bg-amber-50 text-amber-700 border-amber-100",
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".speakable-summary"]
            }
          }).replace(/</g, "\u003c")
        }}
      />
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
      ]} />
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Blog</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Tenant Rights Blog
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Plain-English guides, provincial law updates, and practical advice for Canadian
              renters — covering rent increases, eviction rules, deposits, and more.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <article
                  key={post.href}
                  className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${
                        categoryColor[post.category] ?? "bg-slate-50 text-slate-600 border-slate-200"
                      }`}
                    >
                      <Tag className="w-3 h-3" aria-hidden="true" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Calendar className="w-3 h-3" aria-hidden="true" />
                      {post.date}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-900 leading-snug mb-2">
                      <Link href={post.href} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">{post.excerpt}</p>
                  </div>

                  <div className="mt-auto pt-2">
                    <Link
                      href={post.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline"
                    >
                      Read more
                      <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
