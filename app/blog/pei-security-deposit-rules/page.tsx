import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock } from "lucide-react";
import ReviewedByline from "@/components/ReviewedByline";
import TableOfContents from "@/components/TableOfContents";
import ReadingProgress from "@/components/ReadingProgress";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "PEI Security Deposit Rules: Limits, Interest & Refunds | LeasePlain",
  description:
    "In Prince Edward Island a security deposit can't exceed one month's rent, earns interest, and must be returned within 15 days of the tenancy ending. Deductions and how to get it back through IRAC.",
  alternates: { canonical: "https://leaseplain.com/blog/pei-security-deposit-rules" },
  openGraph: {
    title: "PEI Security Deposit Rules: Limits, Interest & Refunds | LeasePlain",
    description:
      "Deposit cap, interest, and the 15-day return rule in PEI, plus what a landlord can deduct.",
    url: "https://leaseplain.com/blog/pei-security-deposit-rules",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["pei security deposit", "damage deposit pei", "getting deposit back pei", "how much deposit pei", "security deposit rules prince edward island"],
};

const faqItems = [
  {
    q: "How much can a landlord charge for a deposit in PEI?",
    a: "No more than one month's rent. Landlords can't demand more or add extra cleaning, key, or pet deposits.",
  },
  {
    q: "When do I get my deposit back in PEI?",
    a: "Generally within 15 days of the tenancy ending if the landlord has no claim. If they want to keep part of it, they must apply to IRAC's Residential Tenancy Office.",
  },
  {
    q: "Does my PEI deposit earn interest?",
    a: "Yes, at the set rate, added when the deposit is returned.",
  },
  {
    q: "What if my landlord won't return my deposit in PEI?",
    a: "Apply to the Residential Tenancy Office (IRAC). Move-in and move-out photos are strong evidence.",
  },
];

export default function PeiSecurityDepositRulesPage() {
  return (
    <>
      <ArticleSchema
        headline={"PEI Security Deposit Rules: Limits, Interest & Refunds"}
        description={"In Prince Edward Island a security deposit can't exceed one month's rent, earns interest, and must be returned within 15 days of the tenancy ending. Deductions and how to get it back through IRAC."}
        url="https://leaseplain.com/blog/pei-security-deposit-rules"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["pei security deposit", "damage deposit pei", "getting deposit back pei"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "PEI Security Deposits", href: "https://leaseplain.com/blog/pei-security-deposit-rules" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/pei-security-deposit-rules",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".speakable-summary"] },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <div className="flex flex-col min-h-full">
        <Navbar />
        <ReadingProgress />

        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
                <Link href="/" className="hover:underline">Home</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <Link href="/blog" className="hover:underline">Blog</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>PEI Security Deposits</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Prince Edward Island
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  September 11, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  5 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                PEI Security Deposit Rules: Limits, Interest &amp;amp; Refunds
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Prince Edward Island caps the deposit a landlord can hold and sets a clear deadline to return it. Here&apos;s what a landlord can charge, what they can keep, and how to recover your deposit through IRAC.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How Much Can They Charge?</h2>
                  <p className="text-slate-700 leading-relaxed">In PEI a <strong>security deposit can&apos;t exceed one month&apos;s rent</strong>. A landlord can&apos;t demand more, or add extra cleaning, key, or pet deposits on top.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Interest and Where It&apos;s Held</h2>
                  <p className="text-slate-700 leading-relaxed">The deposit is held pending the end of the tenancy and <strong>earns interest</strong> at the set rate. Any dispute over it goes to the <strong>Residential Tenancy Office</strong>, part of the Island Regulatory and Appeals Commission (IRAC).</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The 15-Day Return Rule</h2>
                  <p className="text-slate-700 leading-relaxed">After your tenancy ends, the landlord generally has <strong>15 days</strong> to return your deposit if they have no claim. If they want to keep some or all of it, they must apply to IRAC rather than simply holding it.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What They Can Deduct</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">Deductions are limited to:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Unpaid rent</strong> owing at the end of the tenancy.</li>
                    <li><strong>Damage</strong> beyond normal wear and tear.</li>
                    <li><strong>Not</strong> normal wear and tear — faded paint, worn carpet, minor marks.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">How much should you get back?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Estimate your deposit refund with our free calculator.
                  </p>
                  <Link href="/tools/deposit-calculator" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Deposit Return Calculator
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "PEI Rent Increase Rules", href: "/blog/pei-rent-increase-rules" },
                      { label: "Notice to End a Tenancy in PEI", href: "/blog/pei-notice-to-end-tenancy" },
                      { label: "Security Deposit Rules Across Canada", href: "/blog/security-deposit-rules-canada" },
                      { label: "PEI Tenant Rights", href: "/canada/prince-edward-island" },
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
