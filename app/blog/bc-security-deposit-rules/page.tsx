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
  title: "BC Security Deposit Rules: Damage Deposits & Getting It Back | LeasePlain",
  description:
    "In British Columbia your landlord can charge a security deposit of up to half a month's rent, plus a separate pet damage deposit. The rules on deposits, deductions, and the 15-day return deadline — with the double-your-money penalty.",
  alternates: { canonical: "https://leaseplain.com/blog/bc-security-deposit-rules" },
  openGraph: {
    title: "BC Security Deposit Rules: Damage Deposits & Getting It Back | LeasePlain",
    description:
      "Deposit caps, deductions, and the 15-day return rule in BC — plus when the landlord owes you double.",
    url: "https://leaseplain.com/blog/bc-security-deposit-rules",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["bc security deposit rules", "damage deposit bc", "pet damage deposit bc", "getting security deposit back bc", "how much deposit can a landlord charge bc"],
};

const faqItems = [
  {
    q: "How much can a landlord charge for a deposit in BC?",
    a: "A security deposit can be no more than half of one month's rent. If pets are allowed, the landlord can also collect a pet damage deposit of up to another half month's rent. Together they can't exceed one month's rent. Landlords can't demand extra 'cleaning' or 'key' deposits.",
  },
  {
    q: "When does my landlord have to return my deposit in BC?",
    a: "Within 15 days of the later of the day the tenancy ends and the day you give your forwarding address in writing. Within that window the landlord must either return the full deposit (with interest) or apply to the Residential Tenancy Branch to keep some or all of it.",
  },
  {
    q: "What if the landlord doesn't return my deposit on time?",
    a: "If the landlord misses the 15-day deadline and hasn't applied to the RTB, they generally must pay you double the deposit. You can file for dispute resolution at the Residential Tenancy Branch to recover it.",
  },
  {
    q: "Can the landlord keep my deposit for normal wear and tear?",
    a: "No. Landlords can only deduct for damage beyond reasonable wear and tear, unpaid rent, or amounts you agree to in writing — and only through a proper move-out condition inspection or an RTB order. Faded paint, worn carpet, and minor marks are normal wear and tear.",
  },
];

export default function BcSecurityDepositRulesPage() {
  return (
    <>
      <ArticleSchema
        headline={"BC Security Deposit Rules: Damage Deposits, Interest & Getting It Back"}
        description={"In British Columbia your landlord can charge a security deposit of up to half a month's rent, plus a separate pet damage deposit. The rules on deposits, deductions, and the 15-day return deadline — with the double-your-money penalty."}
        url="https://leaseplain.com/blog/bc-security-deposit-rules"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["bc security deposit rules", "damage deposit bc", "pet damage deposit bc"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "BC Security Deposit Rules", href: "https://leaseplain.com/blog/bc-security-deposit-rules" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/bc-security-deposit-rules",
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
                <span>BC Security Deposit Rules</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  British Columbia
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  September 11, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                BC Security Deposit Rules: Damage Deposits &amp; Getting It Back
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Unlike Ontario, British Columbia lets landlords collect a real security deposit — but it&apos;s capped, tightly regulated, and must come back to you fast. Here&apos;s exactly what a landlord can charge, what they can deduct, and how to get every dollar back.
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
                  <p className="text-slate-700 leading-relaxed mb-3">In BC a <strong>security deposit is capped at half of one month&apos;s rent</strong>. If the landlord allows pets, they can collect a separate <strong>pet damage deposit</strong> of up to another half month&apos;s rent. Combined, deposits can&apos;t exceed one month&apos;s rent.</p>
                  <p className="text-slate-700 leading-relaxed">Landlords <strong>cannot</strong> demand extra deposits for cleaning, keys, or &quot;administration.&quot; If your lease asks for more than the legal maximum, that term isn&apos;t enforceable.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Condition Inspection Matters</h2>
                  <p className="text-slate-700 leading-relaxed">BC requires a <strong>move-in and move-out condition inspection report</strong>, done together by you and the landlord. This report is your best protection. If the landlord doesn&apos;t offer you two opportunities to do the move-out inspection, they generally <strong>lose the right to claim against your deposit</strong> for damage. Always get a copy.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The 15-Day Return Rule</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">After your tenancy ends and you&apos;ve given your <strong>forwarding address in writing</strong>, the landlord has <strong>15 days</strong> to either return your full deposit (plus any interest owed) or apply to the Residential Tenancy Branch (RTB) to keep some or all of it.</p>
                  <p className="text-slate-700 leading-relaxed">You can also agree in writing to let them keep a specific amount. Anything else, and the clock is against them.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Miss the Deadline? They Owe You Double</h2>
                  <p className="text-slate-700 leading-relaxed">This is the rule landlords forget. If the 15 days pass and the landlord hasn&apos;t returned the deposit or applied to the RTB, they generally must pay you <strong>double the deposit amount</strong>. To claim it, file for dispute resolution at the RTB. Keep proof of the date you gave your forwarding address — that starts the clock.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What They Can (and Can&apos;t) Deduct</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">A landlord can only make deductions in specific situations:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Can:</strong> unpaid rent, damage beyond reasonable wear and tear, and amounts you agree to in writing.</li>
                    <li><strong>Can&apos;t:</strong> normal wear and tear — faded paint, worn carpet, minor scuffs, small nail holes.</li>
                    <li><strong>Can&apos;t:</strong> routine cleaning if you left the unit reasonably clean.</li>
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
                      { label: "How Much Notice to End a Tenancy in BC", href: "/blog/bc-notice-to-end-tenancy" },
                      { label: "BC Rent Increase Rules", href: "/blog/bc-rent-increase-rules" },
                      { label: "Security Deposit Rules Across Canada", href: "/blog/security-deposit-rules-canada" },
                      { label: "BC Tenant Rights", href: "/canada/british-columbia" },
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
