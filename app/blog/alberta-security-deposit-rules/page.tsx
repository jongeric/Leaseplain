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
  title: "Alberta Security Deposit Rules: Damage Deposits & Refunds | LeasePlain",
  description:
    "In Alberta a security (damage) deposit can't exceed one month's rent, must be held in an interest-bearing trust account, and has to be returned within 10 days of move-out. The rules on deductions, interest, and inspections.",
  alternates: { canonical: "https://leaseplain.com/blog/alberta-security-deposit-rules" },
  openGraph: {
    title: "Alberta Security Deposit Rules: Damage Deposits & Refunds | LeasePlain",
    description:
      "Deposit caps, interest, inspection reports, and the 10-day refund rule in Alberta.",
    url: "https://leaseplain.com/blog/alberta-security-deposit-rules",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["alberta security deposit rules", "damage deposit alberta", "getting damage deposit back alberta", "how much deposit can a landlord charge alberta", "security deposit interest alberta"],
};

const faqItems = [
  {
    q: "How much can a landlord charge for a deposit in Alberta?",
    a: "No more than one month's rent as of the start of the tenancy. Alberta doesn't allow a separate additional pet deposit stacked on top — the total security deposit is capped at one month's rent.",
  },
  {
    q: "Does my deposit earn interest in Alberta?",
    a: "Yes. Security deposits must be held in an interest-bearing trust account, and the landlord must pay interest at the province's prescribed rate, paid annually or at the end of the tenancy depending on your agreement.",
  },
  {
    q: "When do I get my deposit back in Alberta?",
    a: "Generally within 10 days of moving out, the landlord must return the deposit or provide a statement of any deductions with the balance (or a good-faith estimate). A final statement and any money owing must reach you within 30 days of the tenancy ending. Deductions are only allowed for unpaid rent and damage beyond normal wear and tear.",
  },
  {
    q: "What can I do if my Alberta landlord keeps my deposit unfairly?",
    a: "Request the itemized statement of deductions, then file a claim through the Residential Tenancy Dispute Resolution Service (RTDRS) or Provincial Court. Move-out photos and the inspection report are strong evidence.",
  },
];

export default function AlbertaSecurityDepositRulesPage() {
  return (
    <>
      <ArticleSchema
        headline={"Alberta Security Deposit Rules: Damage Deposits, Interest & Refunds"}
        description={"In Alberta a security (damage) deposit can't exceed one month's rent, must be held in an interest-bearing trust account, and has to be returned within 10 days of move-out. The rules on deductions, interest, and inspections."}
        url="https://leaseplain.com/blog/alberta-security-deposit-rules"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["alberta security deposit rules", "damage deposit alberta", "getting damage deposit back alberta"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Alberta Security Deposit Rules", href: "https://leaseplain.com/blog/alberta-security-deposit-rules" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/alberta-security-deposit-rules",
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
                <span>Alberta Security Deposit Rules</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Alberta
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
                Alberta Security Deposit Rules: Damage Deposits &amp; Refunds
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Alberta lets landlords collect a damage deposit, but caps it, requires it to earn interest, and gives them a tight 10-day deadline to return it. Here&apos;s exactly what a landlord can charge and keep — and how to get your money back.
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
                  <p className="text-slate-700 leading-relaxed">In Alberta, a <strong>security deposit (damage deposit) can&apos;t be more than one month&apos;s rent</strong> at the start of the tenancy. Unlike some provinces, there&apos;s no separate pet deposit allowed on top — a landlord can require a higher single deposit (still capped at one month&apos;s rent) but can&apos;t stack an extra pet deposit beyond that.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">It Must Earn Interest</h2>
                  <p className="text-slate-700 leading-relaxed">Your deposit has to be held in an <strong>interest-bearing trust account</strong>, and the landlord must pay you interest at the province&apos;s prescribed rate. Depending on your agreement, interest is paid annually or at the end of the tenancy. It&apos;s small, but it&apos;s yours.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Inspection Reports Protect You</h2>
                  <p className="text-slate-700 leading-relaxed">Alberta requires a <strong>move-in and move-out inspection report</strong>. The landlord must give you the chance to be present for both, and complete a written report. Without a proper inspection, it&apos;s much harder for a landlord to justify keeping your deposit for damage. Always get a copy and note existing damage at move-in.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The 10-Day Refund Rule</h2>
                  <p className="text-slate-700 leading-relaxed">After you move out, the landlord generally has <strong>10 days</strong> to return your deposit, or — if there are deductions — to provide a <strong>statement of account</strong> with any balance owing (or a good-faith estimate). A <strong>final statement and any remaining money</strong> must reach you within <strong>30 days</strong> of the tenancy ending. They can deduct for unpaid rent and damage beyond normal wear and tear, but must account for every dollar.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Disputing Deductions</h2>
                  <p className="text-slate-700 leading-relaxed">If you think a deduction is unfair, ask for the itemized statement and compare it against what&apos;s actually allowed. You can bring a claim through the <strong>Residential Tenancy Dispute Resolution Service (RTDRS)</strong> or Provincial Court to recover money wrongly withheld. Photos from move-out are powerful evidence.</p>
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
                      { label: "How Much Notice to End a Tenancy in Alberta", href: "/blog/alberta-notice-to-end-tenancy" },
                      { label: "Alberta Rent Increase Rules", href: "/blog/alberta-rent-increase-rules" },
                      { label: "Security Deposit Rules Across Canada", href: "/blog/security-deposit-rules-canada" },
                      { label: "Alberta Tenant Rights", href: "/canada/alberta" },
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
