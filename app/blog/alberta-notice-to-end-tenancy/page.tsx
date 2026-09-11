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
  title: "How Much Notice to End a Tenancy in Alberta? | LeasePlain",
  description:
    "How much notice you must give to move out of an Alberta rental, and how much your landlord must give you. Periodic tenancy notice, landlord reasons, fixed-term rules, and what makes a notice valid.",
  alternates: { canonical: "https://leaseplain.com/blog/alberta-notice-to-end-tenancy" },
  openGraph: {
    title: "How Much Notice to End a Tenancy in Alberta? | LeasePlain",
    description:
      "Tenant and landlord notice periods to end a tenancy in Alberta, explained simply.",
    url: "https://leaseplain.com/blog/alberta-notice-to-end-tenancy",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["how much notice to move out alberta", "notice to end tenancy alberta", "one month notice alberta", "landlord notice alberta", "ending periodic tenancy alberta"],
};

const faqItems = [
  {
    q: "How much notice do I give to move out in Alberta?",
    a: "For a month-to-month tenancy, at least one full tenancy month's written notice, received before the first day of that month. For a weekly tenancy, one tenancy week's notice. A fixed-term lease ends on its last day without notice unless the agreement says otherwise.",
  },
  {
    q: "How much notice does my landlord have to give in Alberta?",
    a: "For landlord reasons like moving in, major renovation, or sale to an occupying buyer, usually 90 days' written notice. For unpaid rent or a substantial breach, a 14-day notice; for serious cases, as little as 24 hours.",
  },
  {
    q: "Do I have to give notice when my fixed-term lease ends in Alberta?",
    a: "Generally no. In Alberta a fixed-term lease ends automatically on its last day, and neither party needs to give notice unless your lease specifically requires it. Check your agreement.",
  },
  {
    q: "Can I be evicted with only 24 hours' notice in Alberta?",
    a: "Only in serious situations — such as significant damage, or where a person's safety is at risk. Most cause-based and non-payment terminations use a 14-day notice, and you can only be physically removed by an order and a civil enforcement bailiff.",
  },
];

export default function AlbertaNoticeToEndTenancyPage() {
  return (
    <>
      <ArticleSchema
        headline={"How Much Notice to End a Tenancy in Alberta?"}
        description={"How much notice you must give to move out of an Alberta rental, and how much your landlord must give you. Periodic tenancy notice, landlord reasons, fixed-term rules, and what makes a notice valid."}
        url="https://leaseplain.com/blog/alberta-notice-to-end-tenancy"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["how much notice to move out alberta", "notice to end tenancy alberta", "one month notice alberta"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Notice to End a Tenancy in Alberta", href: "https://leaseplain.com/blog/alberta-notice-to-end-tenancy" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/alberta-notice-to-end-tenancy",
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
                <span>Notice to End a Tenancy in Alberta</span>
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
                How Much Notice to End a Tenancy in Alberta?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Ending a tenancy in Alberta depends on the type of tenancy and who&apos;s ending it. Give the wrong amount of notice, or time it wrong, and the notice may not count. Here&apos;s how to do it right.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If You Want to Move Out (Periodic Tenancy)</h2>
                  <p className="text-slate-700 leading-relaxed">For a <strong>month-to-month tenancy</strong>, you must give at least <strong>one full tenancy month&apos;s written notice</strong>, and it has to be received before the first day of that month. So to leave at the end of a month, the landlord must have your notice before the month begins. For a <strong>weekly</strong> tenancy, the notice is one tenancy week.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Fixed-Term Leases End on Their Own</h2>
                  <p className="text-slate-700 leading-relaxed">A <strong>fixed-term lease</strong> simply ends on the last day of the term — in Alberta neither party has to give notice for it to end, unless your agreement says otherwise. If you want to leave before the end date, that&apos;s breaking the lease; see <Link href="/blog/alberta-breaking-a-lease" className="text-blue-600 hover:underline">breaking a lease in Alberta</Link>.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">When the Landlord Ends a Periodic Tenancy</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">A landlord can end a periodic tenancy for specific reasons with set notice, such as:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Landlord or family moving in, major renovations, sale to a buyer who&apos;ll occupy, or conversion:</strong> typically 90 days&apos; written notice.</li>
                    <li><strong>Certain condominium conversions:</strong> longer notice applies.</li>
                    <li>The notice must be in writing, signed, dated, state the reason, and give the correct effective date.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Ending for Non-Payment or Breach</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">Problems have their own faster process:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Unpaid rent:</strong> a 14-day notice — which you can stop by paying the overdue rent before it takes effect.</li>
                    <li><strong>Substantial breach:</strong> a 14-day notice to end the tenancy.</li>
                    <li><strong>Serious cases</strong> (major damage, endangering others): as little as 24 hours&apos; notice.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What Makes a Notice Valid</h2>
                  <p className="text-slate-700 leading-relaxed">Any notice to end a tenancy must be <strong>in writing</strong>, signed and dated, name the rental, give the correct termination date, and (for landlord notices) state the reason. A notice with the wrong date or missing details can be challenged through the RTDRS or court — so read it carefully before you act.</p>
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
                    See what breaking a fixed-term lease in Alberta involves before you decide.
                  </p>
                  <Link href="/blog/alberta-breaking-a-lease" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Breaking a Lease in Alberta
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Breaking a Lease in Alberta", href: "/blog/alberta-breaking-a-lease" },
                      { label: "Alberta Eviction Process", href: "/blog/alberta-eviction-process" },
                      { label: "Alberta Security Deposit Rules", href: "/blog/alberta-security-deposit-rules" },
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
