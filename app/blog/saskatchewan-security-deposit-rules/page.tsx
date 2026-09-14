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
  title: "Saskatchewan Security Deposit Rules: Damage Deposits & Refunds | LeasePlain",
  description:
    "In Saskatchewan a security (damage) deposit can't exceed one month's rent, can be paid in instalments, and must be returned within 7 business days of move-out. Deductions and how to get it back.",
  alternates: { canonical: "https://leaseplain.com/blog/saskatchewan-security-deposit-rules" },
  openGraph: {
    title: "Saskatchewan Security Deposit Rules: Damage Deposits & Refunds | LeasePlain",
    description:
      "Deposit cap, instalments, and the 7-business-day return rule in Saskatchewan.",
    url: "https://leaseplain.com/blog/saskatchewan-security-deposit-rules",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["saskatchewan security deposit", "damage deposit saskatchewan", "getting deposit back saskatchewan", "how much deposit saskatchewan", "security deposit rules sk"],
};

const faqItems = [
  {
    q: "How much can a landlord charge for a deposit in Saskatchewan?",
    a: "No more than one month's rent. It can often be paid in instalments rather than all upfront, and can't be topped up with extra cleaning or key deposits.",
  },
  {
    q: "When do I get my deposit back in Saskatchewan?",
    a: "Generally within 7 business days of moving out, the landlord must return the deposit or provide a statement of deductions. Deductions are only for unpaid rent/utilities and damage beyond normal wear.",
  },
  {
    q: "Can I pay my Saskatchewan damage deposit in instalments?",
    a: "Often yes — landlords commonly collect part at move-in and the balance over the following months. Confirm the schedule in writing.",
  },
  {
    q: "What if my landlord won't return my deposit in Saskatchewan?",
    a: "Apply to the Office of Residential Tenancies (ORT). A move-in/move-out inspection report and photos are strong evidence.",
  },
];

export default function SaskatchewanSecurityDepositRulesPage() {
  return (
    <>
      <ArticleSchema
        headline={"Saskatchewan Security Deposit Rules: How Much, Instalments & Refunds"}
        description={"In Saskatchewan a security (damage) deposit can't exceed one month's rent, can be paid in instalments, and must be returned within 7 business days of move-out. Deductions and how to get it back."}
        url="https://leaseplain.com/blog/saskatchewan-security-deposit-rules"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["saskatchewan security deposit", "damage deposit saskatchewan", "getting deposit back saskatchewan"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Saskatchewan Security Deposits", href: "https://leaseplain.com/blog/saskatchewan-security-deposit-rules" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/saskatchewan-security-deposit-rules",
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
                <span>Saskatchewan Security Deposits</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Saskatchewan
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
                Saskatchewan Security Deposit Rules: Damage Deposits &amp;amp; Refunds
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Saskatchewan lets landlords collect a damage deposit up to one month&apos;s rent, but caps it, lets you pay it in instalments, and sets a fast return deadline. Here&apos;s what a landlord can charge and keep.
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
                  <p className="text-slate-700 leading-relaxed">In Saskatchewan, a <strong>security (damage) deposit can&apos;t exceed one month&apos;s rent</strong>. You can often pay it in <strong>instalments</strong> — commonly half at move-in and the rest over the following months — rather than all at once.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The 7-Business-Day Return Rule</h2>
                  <p className="text-slate-700 leading-relaxed">After you move out, the landlord generally has <strong>7 business days</strong> to return your deposit (with any interest) if they have no claim, or to provide a statement of deductions. They can deduct for unpaid rent, unpaid utilities, or damage beyond normal wear and tear.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What They Can (and Can&apos;t) Deduct</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">Deductions are limited to:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Unpaid rent or utilities</strong> you owe.</li>
                    <li><strong>Damage</strong> beyond normal wear and tear.</li>
                    <li><strong>Not</strong> normal wear and tear — faded paint, worn carpet, minor marks.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If There&apos;s a Dispute</h2>
                  <p className="text-slate-700 leading-relaxed">If the landlord won&apos;t return your deposit, apply to the <strong>Office of Residential Tenancies (ORT)</strong>. A move-in and move-out inspection and photos are your strongest evidence.</p>
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
                    Estimate your deposit refund and the landlord&apos;s deadline with our free calculator.
                  </p>
                  <Link href="/tools/deposit-calculator" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Deposit Return Calculator
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Saskatchewan Rent Increase Rules", href: "/blog/saskatchewan-rent-increase-rules" },
                      { label: "Notice to End a Tenancy in Saskatchewan", href: "/blog/saskatchewan-notice-to-end-tenancy" },
                      { label: "Security Deposit Rules Across Canada", href: "/blog/security-deposit-rules-canada" },
                      { label: "Saskatchewan Tenant Rights", href: "/canada/saskatchewan" },
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
