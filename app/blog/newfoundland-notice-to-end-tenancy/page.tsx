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
  title: "How Much Notice to End a Tenancy in Newfoundland? | LeasePlain",
  description:
    "How much notice you must give to move out of a Newfoundland and Labrador rental, and how much your landlord must give you. Month-to-month notice, fixed terms, and what makes a notice valid.",
  alternates: { canonical: "https://leaseplain.com/blog/newfoundland-notice-to-end-tenancy" },
  openGraph: {
    title: "How Much Notice to End a Tenancy in Newfoundland? | LeasePlain",
    description:
      "Tenant and landlord notice periods to end a tenancy in Newfoundland & Labrador, explained.",
    url: "https://leaseplain.com/blog/newfoundland-notice-to-end-tenancy",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["notice to end tenancy newfoundland", "how much notice to move out newfoundland", "notice to quit nl", "ending tenancy newfoundland labrador", "one month notice nl"],
};

const faqItems = [
  {
    q: "How much notice do I give to move out in Newfoundland?",
    a: "For a month-to-month tenancy, at least one month's written notice; for week-to-week, at least one week. A fixed-term lease ends on its end date and otherwise continues month-to-month.",
  },
  {
    q: "How much notice does my landlord give in Newfoundland?",
    a: "For a no-fault end to a periodic tenancy, the landlord may give three months' notice. For unpaid rent, a 10-day notice to vacate after rent is about 5 days late.",
  },
  {
    q: "Do I have to move out when my fixed-term lease ends in Newfoundland?",
    a: "Not necessarily — if you stay without a new agreement, the tenancy usually continues month-to-month, with the same notice rules.",
  },
  {
    q: "Where are tenancy disputes decided in Newfoundland?",
    a: "Through Residential Tenancies (Service NL), which resolves disputes and issues decisions.",
  },
];

export default function NewfoundlandNoticeToEndTenancyPage() {
  return (
    <>
      <ArticleSchema
        headline={"How Much Notice to End a Tenancy in Newfoundland & Labrador?"}
        description={"How much notice you must give to move out of a Newfoundland and Labrador rental, and how much your landlord must give you. Month-to-month notice, fixed terms, and what makes a notice valid."}
        url="https://leaseplain.com/blog/newfoundland-notice-to-end-tenancy"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["notice to end tenancy newfoundland", "how much notice to move out newfoundland", "notice to quit nl"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Notice to End a Tenancy in Newfoundland", href: "https://leaseplain.com/blog/newfoundland-notice-to-end-tenancy" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/newfoundland-notice-to-end-tenancy",
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
                <span>Notice to End a Tenancy in Newfoundland</span>
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
                How Much Notice to End a Tenancy in Newfoundland?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Ending a tenancy in Newfoundland and Labrador means giving the right notice at the right time. Here&apos;s how much notice you owe, what your landlord owes you, and how to do it properly.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If You Want to Move Out (Month-to-Month)</h2>
                  <p className="text-slate-700 leading-relaxed">For a <strong>month-to-month tenancy</strong>, you must give at least <strong>one month&apos;s written notice</strong>. For a <strong>week-to-week</strong> tenancy, at least one week. Keep a copy of your notice.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Fixed-Term Leases</h2>
                  <p className="text-slate-700 leading-relaxed">A <strong>fixed-term lease</strong> ends on its end date. If you stay past it without a new agreement, it usually continues as a month-to-month tenancy under the same one-month notice rules.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">When the Landlord Ends a Tenancy</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">A landlord needs a valid reason and the right notice, for example:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Periodic tenancy (no fault):</strong> the landlord may give <strong>3 months&apos;</strong> notice.</li>
                    <li><strong>Unpaid rent:</strong> once rent is about <strong>5 days</strong> late, the landlord can start the process, leading to a <strong>10-day</strong> notice to vacate.</li>
                    <li>The notice must be in writing, dated, and state the reason.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What Makes a Notice Valid</h2>
                  <p className="text-slate-700 leading-relaxed">Any notice must be <strong>in writing</strong>, dated, name the rental, and give the correct end date. A defective notice can be challenged through <strong>Residential Tenancies</strong> (Service NL) — read it carefully before acting.</p>
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
                      { label: "The Newfoundland Eviction Process", href: "/blog/newfoundland-eviction-process" },
                      { label: "Newfoundland Security Deposit Rules", href: "/blog/newfoundland-security-deposit-rules" },
                      { label: "Newfoundland Rent Increase Rules", href: "/blog/newfoundland-rent-increase-rules" },
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
