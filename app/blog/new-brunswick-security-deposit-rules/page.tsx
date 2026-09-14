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
  title: "New Brunswick Security Deposit Rules: What a Landlord Can Charge | LeasePlain",
  description:
    "In New Brunswick a security deposit is capped (one month's rent for most leases), and the landlord must send it to the Tenant and Landlord Relations Office to hold. The rules on limits, holding, and refunds.",
  alternates: { canonical: "https://leaseplain.com/blog/new-brunswick-security-deposit-rules" },
  openGraph: {
    title: "New Brunswick Security Deposit Rules: What a Landlord Can Charge | LeasePlain",
    description:
      "Deposit limits, the Tenant and Landlord Relations Office, and refunds in New Brunswick.",
    url: "https://leaseplain.com/blog/new-brunswick-security-deposit-rules",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["new brunswick security deposit", "damage deposit new brunswick", "security deposit refund new brunswick", "how much deposit new brunswick", "rental deposit nb"],
};

const faqItems = [
  {
    q: "How much can a landlord charge for a deposit in New Brunswick?",
    a: "For most leases, one month's rent (one week's rent for weekly tenancies). Landlords can't demand more or stack extra deposits on top.",
  },
  {
    q: "Who holds my deposit in New Brunswick?",
    a: "The landlord must send it to the Tenant and Landlord Relations Office (Service New Brunswick) within 15 days — they can't hold it themselves. It earns interest while held.",
  },
  {
    q: "How do I get my deposit back in New Brunswick?",
    a: "It's returned with interest when both sides agree, or when the Residential Tenancies Tribunal decides a dispute. Deductions are only for unpaid rent or damage beyond normal wear and tear.",
  },
  {
    q: "Can my landlord keep my deposit for cleaning?",
    a: "No — not for routine cleaning or normal wear and tear. Only genuine damage or unpaid rent can be claimed, and the Tribunal decides disputes.",
  },
];

export default function NewBrunswickSecurityDepositRulesPage() {
  return (
    <>
      <ArticleSchema
        headline={"New Brunswick Security Deposit Rules: Limits, Holding & Refunds"}
        description={"In New Brunswick a security deposit is capped (one month's rent for most leases), and the landlord must send it to the Tenant and Landlord Relations Office to hold. The rules on limits, holding, and refunds."}
        url="https://leaseplain.com/blog/new-brunswick-security-deposit-rules"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["new brunswick security deposit", "damage deposit new brunswick", "security deposit refund new brunswick"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "New Brunswick Security Deposits", href: "https://leaseplain.com/blog/new-brunswick-security-deposit-rules" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/new-brunswick-security-deposit-rules",
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
                <span>New Brunswick Security Deposits</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  New Brunswick
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
                New Brunswick Security Deposit Rules: What a Landlord Can Charge
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                New Brunswick handles deposits differently: the landlord can&apos;t keep your money in their own account — it goes to a government office for safekeeping. Here&apos;s what a landlord can charge and how you get it back.
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
                  <p className="text-slate-700 leading-relaxed">In New Brunswick a security deposit is capped at <strong>one month&apos;s rent</strong> for most leases (one week&apos;s rent for a weekly tenancy; higher for a mobile-home site). A landlord can&apos;t demand more or add extra deposits on top.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Deposit Is Held by the Government</h2>
                  <p className="text-slate-700 leading-relaxed">This is the key difference: a landlord who collects a deposit must <strong>remit it to the Tenant and Landlord Relations Office</strong> (part of Service New Brunswick) within <strong>15 days</strong> — they don&apos;t hold it themselves. It earns interest while held.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Getting It Back</h2>
                  <p className="text-slate-700 leading-relaxed">At the end of the tenancy, the deposit (with interest) is returned once the landlord and tenant agree, or the Residential Tenancies Tribunal decides any dispute. A landlord can only claim it for unpaid rent or damage beyond normal wear and tear — not routine cleaning or wear.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If There&apos;s a Dispute</h2>
                  <p className="text-slate-700 leading-relaxed">Because the money is held by the government, a landlord can&apos;t simply keep it. If you disagree with a claim, the <strong>Residential Tenancies Tribunal</strong> decides. Move-in and move-out photos are your strongest evidence.</p>
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
                      { label: "New Brunswick Rent Increase Rules", href: "/blog/new-brunswick-rent-increase-rules" },
                      { label: "Notice to End a Tenancy in New Brunswick", href: "/blog/new-brunswick-notice-to-end-tenancy" },
                      { label: "Security Deposit Rules Across Canada", href: "/blog/security-deposit-rules-canada" },
                      { label: "New Brunswick Tenant Rights", href: "/canada/new-brunswick" },
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
