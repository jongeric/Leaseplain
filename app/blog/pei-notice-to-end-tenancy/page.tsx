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
  title: "How Much Notice to End a Tenancy in PEI? | LeasePlain",
  description:
    "How much notice you must give to move out of a PEI rental, and how much your landlord must give you. Month-to-month notice, fixed terms, and what makes a notice valid through IRAC.",
  alternates: { canonical: "https://leaseplain.com/blog/pei-notice-to-end-tenancy" },
  openGraph: {
    title: "How Much Notice to End a Tenancy in PEI? | LeasePlain",
    description:
      "Tenant and landlord notice periods to end a tenancy in Prince Edward Island, explained.",
    url: "https://leaseplain.com/blog/pei-notice-to-end-tenancy",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["notice to end tenancy pei", "how much notice to move out pei", "notice to quit pei", "ending tenancy prince edward island", "one month notice pei"],
};

const faqItems = [
  {
    q: "How much notice do I give to move out in PEI?",
    a: "For a month-to-month tenancy, at least one month's written notice before the end of a rental period, on the Residential Tenancy Office form.",
  },
  {
    q: "How much notice for unpaid rent in PEI?",
    a: "A Form 4A notice gives 10 days; you can void it by paying the overdue rent within 10 days.",
  },
  {
    q: "Do I have to move out when my fixed-term lease ends in PEI?",
    a: "Not necessarily — if you stay without a new agreement, the tenancy usually continues. The landlord still needs a valid reason and proper notice to end it.",
  },
  {
    q: "Where are tenancy disputes decided in PEI?",
    a: "By the Residential Tenancy Office, part of the Island Regulatory and Appeals Commission (IRAC).",
  },
];

export default function PeiNoticeToEndTenancyPage() {
  return (
    <>
      <ArticleSchema
        headline={"How Much Notice to End a Tenancy in PEI?"}
        description={"How much notice you must give to move out of a PEI rental, and how much your landlord must give you. Month-to-month notice, fixed terms, and what makes a notice valid through IRAC."}
        url="https://leaseplain.com/blog/pei-notice-to-end-tenancy"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["notice to end tenancy pei", "how much notice to move out pei", "notice to quit pei"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Notice to End a Tenancy in PEI", href: "https://leaseplain.com/blog/pei-notice-to-end-tenancy" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/pei-notice-to-end-tenancy",
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
                <span>Notice to End a Tenancy in PEI</span>
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
                How Much Notice to End a Tenancy in PEI?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Ending a tenancy in PEI means giving the right notice at the right time, using IRAC&apos;s forms. Here&apos;s how much notice you owe, what your landlord owes you, and how to do it properly.
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
                  <p className="text-slate-700 leading-relaxed">For a <strong>month-to-month tenancy</strong>, you must give at least <strong>one month&apos;s written notice</strong> before the end of a rental period. Use the Residential Tenancy Office form and keep a copy.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Fixed-Term and Year-to-Year</h2>
                  <p className="text-slate-700 leading-relaxed">A <strong>fixed-term lease</strong> ends on its end date. <strong>Year-to-year</strong> tenancies require longer notice (typically a few months before the anniversary). If you stay past a fixed term without a new agreement, the tenancy usually continues.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">When the Landlord Ends a Tenancy</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">A landlord needs a valid reason and the right notice, for example:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Unpaid rent:</strong> Form 4A — a <strong>10-day</strong> notice; you can void it by paying within 10 days.</li>
                    <li><strong>Other grounds</strong> (owner use, renovation, sale): longer notice on the proper form.</li>
                    <li>Notices are filed through IRAC&apos;s Residential Tenancy Office.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What Makes a Notice Valid</h2>
                  <p className="text-slate-700 leading-relaxed">Any notice must be <strong>in writing</strong> on the correct form, dated, and give the proper end date. A defective notice can be disputed at <strong>IRAC</strong> — read it carefully before you act.</p>
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
                      { label: "The PEI Eviction Process", href: "/blog/pei-eviction-process" },
                      { label: "PEI Security Deposit Rules", href: "/blog/pei-security-deposit-rules" },
                      { label: "PEI Rent Increase Rules", href: "/blog/pei-rent-increase-rules" },
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
