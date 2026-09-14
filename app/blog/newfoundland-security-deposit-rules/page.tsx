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
  title: "Newfoundland Security Deposit Rules: Limits & Refunds | LeasePlain",
  description:
    "In Newfoundland and Labrador a security deposit is capped (three-quarters of a month's rent for monthly tenancies) and must be returned within 10 days of move-out. The rules on limits and refunds.",
  alternates: { canonical: "https://leaseplain.com/blog/newfoundland-security-deposit-rules" },
  openGraph: {
    title: "Newfoundland Security Deposit Rules: Limits & Refunds | LeasePlain",
    description:
      "Deposit limits and the 10-day return rule in Newfoundland & Labrador.",
    url: "https://leaseplain.com/blog/newfoundland-security-deposit-rules",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["newfoundland security deposit", "damage deposit newfoundland", "getting deposit back newfoundland", "how much deposit nl", "security deposit rules newfoundland labrador"],
};

const faqItems = [
  {
    q: "How much can a landlord charge for a deposit in Newfoundland?",
    a: "Up to three-quarters of one month's rent for a monthly or fixed-term tenancy (about two weeks' rent for week-to-week). Landlords can't demand more.",
  },
  {
    q: "When do I get my deposit back in Newfoundland?",
    a: "Generally within 10 days of moving out, with interest, unless the landlord has a claim for unpaid rent or damage beyond normal wear and tear.",
  },
  {
    q: "What can a landlord deduct from my deposit in Newfoundland?",
    a: "Only unpaid rent and damage beyond normal wear and tear — not routine cleaning or ordinary wear.",
  },
  {
    q: "Where do I dispute a deposit in Newfoundland?",
    a: "Through Residential Tenancies (Service NL), which resolves disputes and issues decisions.",
  },
];

export default function NewfoundlandSecurityDepositRulesPage() {
  return (
    <>
      <ArticleSchema
        headline={"Newfoundland & Labrador Security Deposit Rules: Limits & Refunds"}
        description={"In Newfoundland and Labrador a security deposit is capped (three-quarters of a month's rent for monthly tenancies) and must be returned within 10 days of move-out. The rules on limits and refunds."}
        url="https://leaseplain.com/blog/newfoundland-security-deposit-rules"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["newfoundland security deposit", "damage deposit newfoundland", "getting deposit back newfoundland"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Newfoundland Security Deposits", href: "https://leaseplain.com/blog/newfoundland-security-deposit-rules" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/newfoundland-security-deposit-rules",
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
                <span>Newfoundland Security Deposits</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Newfoundland & Labrador
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
                Newfoundland Security Deposit Rules: Limits &amp;amp; Refunds
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Newfoundland and Labrador caps what a landlord can hold as a deposit and sets a quick deadline to return it. Here&apos;s what a landlord can charge and how to get it back.
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
                  <p className="text-slate-700 leading-relaxed">In Newfoundland and Labrador a security deposit is capped at <strong>three-quarters (¾) of one month&apos;s rent</strong> for a monthly or fixed-term tenancy (about <strong>two weeks&apos; rent</strong> for a week-to-week tenancy). A landlord can&apos;t demand more.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The 10-Day Return Rule</h2>
                  <p className="text-slate-700 leading-relaxed">After you move out, the landlord generally has <strong>10 days</strong> to return your deposit (with interest) unless they have a claim for unpaid rent or damage beyond normal wear and tear.</p>
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If There&apos;s a Dispute</h2>
                  <p className="text-slate-700 leading-relaxed">If the landlord won&apos;t return your deposit, apply to <strong>Residential Tenancies</strong> (Service NL). A move-in and move-out record and photos are your strongest evidence.</p>
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
                      { label: "Newfoundland Rent Increase Rules", href: "/blog/newfoundland-rent-increase-rules" },
                      { label: "Notice to End a Tenancy in Newfoundland", href: "/blog/newfoundland-notice-to-end-tenancy" },
                      { label: "Security Deposit Rules Across Canada", href: "/blog/security-deposit-rules-canada" },
                      { label: "Newfoundland Tenant Rights", href: "/canada/newfoundland-and-labrador" },
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
