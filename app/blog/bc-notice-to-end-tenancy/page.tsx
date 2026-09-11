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
  title: "How Much Notice to End a Tenancy in BC? | LeasePlain",
  description:
    "How much notice must you give to move out of a BC rental — and how much notice must your landlord give you? Tenant notice, landlord's use of property, the four-month notice, and what makes a notice invalid.",
  alternates: { canonical: "https://leaseplain.com/blog/bc-notice-to-end-tenancy" },
  openGraph: {
    title: "How Much Notice to End a Tenancy in BC? | LeasePlain",
    description:
      "Tenant and landlord notice periods to end a tenancy in British Columbia, explained.",
    url: "https://leaseplain.com/blog/bc-notice-to-end-tenancy",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["how much notice to move out bc", "notice to end tenancy bc", "one month notice bc", "landlord notice to end tenancy bc", "four month notice bc"],
};

const faqItems = [
  {
    q: "How much notice do I give to move out in BC?",
    a: "For a month-to-month tenancy, at least one full month's written notice, received before the day rent is due. To leave at the end of a month, give notice before the first day of the preceding month.",
  },
  {
    q: "How much notice does my landlord have to give me in BC?",
    a: "It depends on the reason: four months (plus one month's compensation) for the landlord's own use, renovations, or demolition; one month for cause; and a 10-day notice for unpaid rent that you can cancel by paying within 5 days.",
  },
  {
    q: "Can my landlord evict me to move in a family member?",
    a: "Yes, but only with a four-month written notice, one month's compensation, and a genuine intention to occupy. If they don't follow through, you may be entitled to significant additional compensation.",
  },
  {
    q: "Do I have to leave when a fixed-term lease ends in BC?",
    a: "Usually no. Most fixed-term leases continue as month-to-month after the end date unless you and the landlord agree otherwise or a limited vacate clause applies. You can't be forced out just because the term ended.",
  },
];

export default function BcNoticeToEndTenancyPage() {
  return (
    <>
      <ArticleSchema
        headline={"How Much Notice to End a Tenancy in BC?"}
        description={"How much notice must you give to move out of a BC rental — and how much notice must your landlord give you? Tenant notice, landlord's use of property, the four-month notice, and what makes a notice invalid."}
        url="https://leaseplain.com/blog/bc-notice-to-end-tenancy"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["how much notice to move out bc", "notice to end tenancy bc", "one month notice bc"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Notice to End a Tenancy in BC", href: "https://leaseplain.com/blog/bc-notice-to-end-tenancy" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/bc-notice-to-end-tenancy",
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
                <span>Notice to End a Tenancy in BC</span>
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
                How Much Notice to End a Tenancy in BC?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Ending a tenancy in BC follows strict notice rules — and they&apos;re different depending on whether you&apos;re the one leaving or your landlord wants the unit back. Get the timing wrong and the notice may be worthless.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If You Want to Move Out</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">For a <strong>month-to-month (periodic) tenancy</strong>, you must give at least <strong>one full month&apos;s written notice</strong>, and it has to be received before the day rent is due. So to leave at the end of a month, give notice before the first of the prior month.</p>
                  <p className="text-slate-700 leading-relaxed">In a <strong>fixed-term lease</strong>, you generally can&apos;t just give notice and leave early — you&apos;re committed until the end date. See <Link href="/blog/bc-breaking-a-lease" className="text-blue-600 hover:underline">breaking a lease in BC</Link> for your legal options.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Landlord&apos;s Notice for Their Own Use</h2>
                  <p className="text-slate-700 leading-relaxed">If a landlord wants the unit for themselves or a close family member (or a buyer who will move in), they must give <strong>four months&apos; written notice</strong> and pay you <strong>one month&apos;s rent in compensation</strong>. You also have the right to dispute the notice at the RTB within the time limit, and to move out earlier by giving 10 days&apos; notice.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Four-Month Notice for Renovations or Demolition</h2>
                  <p className="text-slate-700 leading-relaxed">To end a tenancy for major renovations, demolition, or converting the unit, the landlord must give <strong>four months&apos; notice</strong>, hold the necessary permits, and pay compensation. For significant renovations, you may have a <strong>right of first refusal</strong> to move back in at a rent set by the guideline — if you tell the landlord in writing that you want it.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Ending for Non-Payment or Cause</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">Different rules apply when there&apos;s a problem:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Unpaid rent:</strong> a 10-day notice to end tenancy — but you can cancel it by paying the full amount owing within 5 days.</li>
                    <li><strong>Cause</strong> (e.g. serious breach): a one-month notice you can dispute at the RTB.</li>
                    <li>You can only actually be removed by an <strong>order of possession</strong> and the court bailiff — never by the landlord directly.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What Makes a Notice Invalid</h2>
                  <p className="text-slate-700 leading-relaxed">A notice to end tenancy must be in the approved form, signed and dated, give the correct effective date, and state the reason (for landlord notices). A notice with the wrong date or missing information can be challenged. If in doubt, don&apos;t move out — dispute it at the RTB first.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Ending your lease early?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    See what breaking a fixed-term lease in BC could involve and cost.
                  </p>
                  <Link href="/blog/bc-breaking-a-lease" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Breaking a Lease in BC
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Breaking a Lease in BC", href: "/blog/bc-breaking-a-lease" },
                      { label: "BC Eviction Notices & the RTB", href: "/blog/bc-eviction-notices-rtb" },
                      { label: "BC Security Deposit Rules", href: "/blog/bc-security-deposit-rules" },
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
