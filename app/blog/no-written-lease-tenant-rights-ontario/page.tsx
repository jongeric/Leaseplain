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
  title: "No Written Lease in Ontario? You Still Have Full Rights | LeasePlain",
  description:
    "A handshake or verbal rental deal in Ontario is a real tenancy with full protection under the Residential Tenancies Act. Your rights without a written lease, the Standard Lease rule, and the one-month-rent remedy.",
  alternates: { canonical: "https://leaseplain.com/blog/no-written-lease-tenant-rights-ontario" },
  openGraph: {
    title: "No Written Lease in Ontario? You Still Have Full Rights | LeasePlain",
    description:
      "Verbal tenancies are fully covered by the RTA. Your rights without a written lease in Ontario.",
    url: "https://leaseplain.com/blog/no-written-lease-tenant-rights-ontario",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["no written lease ontario", "verbal lease ontario tenant rights", "no lease agreement rights ontario", "ontario standard lease not provided", "month to month no lease ontario"],
};

const faqItems = [
  {
    q: "Do I have rights without a written lease in Ontario?",
    a: "Yes — full rights. A verbal or unwritten tenancy is completely covered by the Residential Tenancies Act, including security of tenure, rent-increase limits, notice rules, repairs, and protection from illegal eviction.",
  },
  {
    q: "My landlord never gave me a Standard Lease — what can I do?",
    a: "Ask for it in writing. If the landlord doesn't provide the Ontario Standard Lease within 21 days, you can withhold one month's rent. If they still don't provide it within 30 days after that, you may not have to repay that withheld month.",
  },
  {
    q: "Can my landlord raise rent if I have no lease in Ontario?",
    a: "Only under the normal rules: by the guideline (unless the unit is exempt), once every 12 months, with 90 days' written notice on Form N1. A verbal agreement to a larger increase isn't enforceable.",
  },
  {
    q: "How do I end a tenancy with no written lease?",
    a: "A verbal tenancy is treated as month-to-month, so you give 60 days' written notice on Form N9. The landlord can only end it for a valid reason through the LTB.",
  },
];

export default function NoWrittenLeaseTenantRightsOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline={"No Written Lease in Ontario? Your Rights With a Verbal Tenancy"}
        description={"A handshake or verbal rental deal in Ontario is a real tenancy with full protection under the Residential Tenancies Act. Your rights without a written lease, the Standard Lease rule, and the one-month-rent remedy."}
        url="https://leaseplain.com/blog/no-written-lease-tenant-rights-ontario"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["no written lease ontario", "verbal lease ontario tenant rights", "no lease agreement rights ontario"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "No Written Lease in Ontario", href: "https://leaseplain.com/blog/no-written-lease-tenant-rights-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/no-written-lease-tenant-rights-ontario",
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
                <span>No Written Lease in Ontario</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Ontario
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
                No Written Lease in Ontario? You Still Have Full Rights
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                No paper, no problem — at least not for your rights. In Ontario a verbal or handshake tenancy is fully valid and protected by the Residential Tenancies Act. In fact, the law gives you a powerful tool when a landlord won&apos;t give you a proper written lease.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">A Verbal Tenancy Is a Real Tenancy</h2>
                  <p className="text-slate-700 leading-relaxed">If you pay rent and the landlord accepts it, you have a tenancy — written lease or not. Every core RTA protection applies: <strong>security of tenure, rent-increase limits, proper notice, the right to repairs, and protection from illegal eviction</strong>. A landlord can&apos;t treat you as having fewer rights because nothing was signed.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Ontario Standard Lease Rule</h2>
                  <p className="text-slate-700 leading-relaxed">For most tenancies, landlords must use the <strong>Ontario Standard Lease</strong> form. If you don&apos;t have one, you can <strong>ask for it in writing</strong>. If the landlord doesn&apos;t provide it within <strong>21 days</strong>, you may <strong>withhold one month&apos;s rent</strong> — and if they still don&apos;t provide it within 30 days after that, you may not have to repay that month at all.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Prove the Terms</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">The catch with a verbal deal is proving what was agreed. Protect yourself:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li>Keep records of <strong>rent payments</strong> — e-transfers are ideal.</li>
                    <li>Save <strong>texts and emails</strong> discussing rent, repairs, or move-in.</li>
                    <li>Note the <strong>rent amount, due date, and what&apos;s included</strong> (utilities, parking).</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Your Rent Is Still Protected</h2>
                  <p className="text-slate-700 leading-relaxed">Even without a signed lease, the landlord can only raise your rent by the guideline (unless the unit is exempt), once every 12 months, with <strong>90 days&apos; written notice on Form N1</strong>. A verbal &apos;agreement&apos; to a bigger increase isn&apos;t binding.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Ending a Verbal Tenancy</h2>
                  <p className="text-slate-700 leading-relaxed">A verbal periodic tenancy is treated as month-to-month. To leave, give <strong>60 days&apos; written notice on Form N9</strong>. The landlord can only end it for a valid reason through the LTB — never by simply telling you to go.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Check what a lease really says</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Have a written lease now? Paste it and get a plain-English breakdown, free.
                  </p>
                  <Link href="/tools/clause-checker" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Free Clause Checker
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Ontario Standard Lease Explained", href: "/blog/ontario-standard-lease-explained" },
                      { label: "Month-to-Month vs Fixed-Term", href: "/blog/month-to-month-vs-fixed-term-lease" },
                      { label: "How Much Notice to Move Out", href: "/blog/notice-to-move-out-ontario" },
                      { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
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
