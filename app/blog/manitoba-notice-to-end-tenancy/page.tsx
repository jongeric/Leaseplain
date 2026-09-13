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
  title: "How Much Notice to End a Tenancy in Manitoba? | LeasePlain",
  description:
    "How much notice you must give to move out of a Manitoba rental, and how much notice your landlord must give you. Monthly tenancy notice, owner-occupation, fixed terms, and what makes a notice valid.",
  alternates: { canonical: "https://leaseplain.com/blog/manitoba-notice-to-end-tenancy" },
  openGraph: {
    title: "How Much Notice to End a Tenancy in Manitoba? | LeasePlain",
    description:
      "Tenant and landlord notice periods to end a tenancy in Manitoba, explained.",
    url: "https://leaseplain.com/blog/manitoba-notice-to-end-tenancy",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["how much notice to move out manitoba", "notice to end tenancy manitoba", "one month notice manitoba", "landlord notice manitoba", "ending tenancy manitoba"],
};

const faqItems = [
  {
    q: "How much notice do I give to move out in Manitoba?",
    a: "For a month-to-month tenancy, at least one full month's written notice ending on the last day of a rental period. A fixed-term lease ends on its end date and otherwise continues month-to-month.",
  },
  {
    q: "How much notice does my landlord have to give in Manitoba?",
    a: "For owner-occupation, at least three months. For unpaid rent, a short notice of about five days (which you can usually stop by paying). Other reasons have their own set notice periods, and the notice must state the reason.",
  },
  {
    q: "Do I have to move out when my fixed-term lease ends in Manitoba?",
    a: "Not necessarily. If you stay past the end date without signing a new term, the tenancy usually continues month-to-month. You can't be evicted just because the fixed term ended — the landlord still needs a valid reason and proper notice.",
  },
  {
    q: "Can I be evicted for unpaid rent in Manitoba?",
    a: "A landlord can give a short notice (about five days) for unpaid rent, but you can usually stop the eviction by paying what you owe. Only the Residential Tenancies Branch process — not the landlord directly — can force you out.",
  },
];

export default function ManitobaNoticeToEndTenancyPage() {
  return (
    <>
      <ArticleSchema
        headline={"How Much Notice to End a Tenancy in Manitoba?"}
        description={"How much notice you must give to move out of a Manitoba rental, and how much notice your landlord must give you. Monthly tenancy notice, owner-occupation, fixed terms, and what makes a notice valid."}
        url="https://leaseplain.com/blog/manitoba-notice-to-end-tenancy"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["how much notice to move out manitoba", "notice to end tenancy manitoba", "one month notice manitoba"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Notice to End a Tenancy in Manitoba", href: "https://leaseplain.com/blog/manitoba-notice-to-end-tenancy" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/manitoba-notice-to-end-tenancy",
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
                <span>Notice to End a Tenancy in Manitoba</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Manitoba
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
                How Much Notice to End a Tenancy in Manitoba?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Ending a tenancy in Manitoba depends on the type of tenancy and who&apos;s ending it. Getting the timing right is what makes a notice count. Here&apos;s how it works.
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
                  <p className="text-slate-700 leading-relaxed">For a <strong>month-to-month tenancy</strong>, you must give at least <strong>one full month&apos;s written notice</strong>, ending on the last day of a rental period. So to leave at the end of a month, give notice before that month begins.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Fixed-Term Leases</h2>
                  <p className="text-slate-700 leading-relaxed">A <strong>fixed-term lease</strong> ends on its end date. If you stay past it (and don&apos;t sign a new term), it usually continues as a <strong>month-to-month</strong> tenancy with the same one-month notice rules. You can&apos;t be forced out simply because the fixed term ended.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">When the Landlord Ends a Tenancy</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">A landlord needs a valid reason and the right notice:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Landlord or family owner-occupation:</strong> at least <strong>three months&apos; notice</strong>.</li>
                    <li><strong>Major renovations or other permitted reasons:</strong> set notice periods apply.</li>
                    <li>The notice must be in writing, signed and dated, state the reason, and give the correct end date.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Problems Have Shorter Notice</h2>
                  <p className="text-slate-700 leading-relaxed">For <strong>unpaid rent</strong>, a landlord can give a short (about <strong>5-day</strong>) notice, which you can usually stop by paying what&apos;s owed. For a breach of the tenancy agreement, the notice is at least one rental payment period. Serious cases can move faster.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What Makes a Notice Valid</h2>
                  <p className="text-slate-700 leading-relaxed">Any notice must be <strong>in writing</strong>, properly dated, name the rental, give the correct termination date, and (for a landlord) state the reason. A notice with the wrong date or missing details can be disputed through the Residential Tenancies Branch — so read it carefully before acting.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Leaving your rental?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Generate a clear notice to end your tenancy the right way.
                  </p>
                  <Link href="/letters/notice-to-end-tenancy-letter" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Notice to End Tenancy Letter
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "The Manitoba Eviction Process", href: "/blog/manitoba-eviction-process" },
                      { label: "Manitoba Security Deposit Rules", href: "/blog/manitoba-security-deposit-rules" },
                      { label: "Manitoba Rent Increase Rules", href: "/blog/manitoba-rent-increase-rules" },
                      { label: "Manitoba Tenant Rights", href: "/canada/manitoba" },
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
