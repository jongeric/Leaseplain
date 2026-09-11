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
  title: "Alberta Rent Increase Rules: No Cap, But Real Limits | LeasePlain",
  description:
    "Alberta has no rent control, so there's no percentage cap on increases — but landlords can only raise rent once a year and must give proper written notice. How the timing rules work and what still protects you.",
  alternates: { canonical: "https://leaseplain.com/blog/alberta-rent-increase-rules" },
  openGraph: {
    title: "Alberta Rent Increase Rules: No Cap, But Real Limits | LeasePlain",
    description:
      "Alberta has no rent cap, but strict once-a-year timing and notice rules still apply. Here's how.",
    url: "https://leaseplain.com/blog/alberta-rent-increase-rules",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["alberta rent increase rules", "how much can landlord raise rent alberta", "rent increase notice alberta", "is there rent control in alberta", "rent increase frequency alberta"],
};

const faqItems = [
  {
    q: "Is there rent control in Alberta?",
    a: "No. Alberta has no rent control, so there's no percentage limit on how much a landlord can raise the rent. However, rent can only be increased once every 12 months, not in the first year, and only with proper written notice.",
  },
  {
    q: "How much notice does my landlord need to raise rent in Alberta?",
    a: "For a month-to-month tenancy, at least three full tenancy months' written notice. For a weekly tenancy, at least 12 tenancy weeks' notice. Rent can't be raised at all during a fixed term.",
  },
  {
    q: "How often can my rent go up in Alberta?",
    a: "Only once in any 12-month period, and not during the first year of the tenancy. An increase within that window, or without proper notice, isn't valid.",
  },
  {
    q: "Can my landlord raise rent during my fixed-term lease in Alberta?",
    a: "No. Rent is fixed for the duration of a fixed-term lease. A landlord can only propose a new rent when the term ends and the lease renews or converts to periodic, with the required notice.",
  },
];

export default function AlbertaRentIncreaseRulesPage() {
  return (
    <>
      <ArticleSchema
        headline={"Alberta Rent Increase Rules: How Much and How Often"}
        description={"Alberta has no rent control, so there's no percentage cap on increases — but landlords can only raise rent once a year and must give proper written notice. How the timing rules work and what still protects you."}
        url="https://leaseplain.com/blog/alberta-rent-increase-rules"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["alberta rent increase rules", "how much can landlord raise rent alberta", "rent increase notice alberta"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Alberta Rent Increase Rules", href: "https://leaseplain.com/blog/alberta-rent-increase-rules" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/alberta-rent-increase-rules",
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
                <span>Alberta Rent Increase Rules</span>
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
                Alberta Rent Increase Rules: No Cap, But Real Limits
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Alberta is one of the few provinces with no rent control — there&apos;s no percentage limit on how much your rent can rise. But that doesn&apos;t mean anything goes: strict rules govern how often and with how much notice.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">No Cap on the Amount</h2>
                  <p className="text-slate-700 leading-relaxed">Alberta has <strong>no rent control</strong>, so there&apos;s no legal maximum percentage for a rent increase. A landlord can, in principle, raise rent by any amount when an increase is allowed. This makes the <strong>timing and notice rules</strong> — and your leverage to negotiate or move — the real protections.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Only Once Every 12 Months</h2>
                  <p className="text-slate-700 leading-relaxed">Rent can&apos;t be increased <strong>more than once in a 12-month period</strong>, and not during the first year of a tenancy. The clock runs from the start of the tenancy or the date of the last increase. A second increase inside that window isn&apos;t valid.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Notice You Must Get</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">Your landlord must give written notice well ahead of the increase:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Periodic (month-to-month) tenancy:</strong> at least three full tenancy months&apos; written notice.</li>
                    <li><strong>Weekly tenancy:</strong> at least 12 tenancy weeks&apos; written notice.</li>
                    <li><strong>Fixed-term lease:</strong> rent can&apos;t be increased during the term — only when it renews or converts, with proper notice.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Your Real Leverage</h2>
                  <p className="text-slate-700 leading-relaxed">Because there&apos;s no cap, the market is your main check. If an increase is unaffordable, you can try to negotiate, or give proper notice and move at the end of your term. In a fixed-term lease, your rent is locked for the whole term — a strong reason to consider a longer term in a rising market.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What Still Protects You</h2>
                  <p className="text-slate-700 leading-relaxed">Even without rent control, a landlord can&apos;t use a rent increase as a disguised eviction or to retaliate, can&apos;t skip the notice rules, and can&apos;t increase more than once a year. If the timing or notice is wrong, the increase isn&apos;t valid — put your objection in writing.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Check your increase timing</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Confirm whether an increase&apos;s timing and notice are valid with our free tool.
                  </p>
                  <Link href="/tools/rent-increase-calculator" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Rent Increase Calculator
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Alberta Security Deposit Rules", href: "/blog/alberta-security-deposit-rules" },
                      { label: "How Much Notice to End a Tenancy in Alberta", href: "/blog/alberta-notice-to-end-tenancy" },
                      { label: "Alberta Eviction Process", href: "/blog/alberta-eviction-process" },
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
