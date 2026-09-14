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
  title: "Saskatchewan Rent Increase Rules: No Cap, But Real Limits | LeasePlain",
  description:
    "Saskatchewan has no rent control, so there's no percentage cap — but rent can rise only once a year and only with proper written notice. How the timing and notice rules protect you.",
  alternates: { canonical: "https://leaseplain.com/blog/saskatchewan-rent-increase-rules" },
  openGraph: {
    title: "Saskatchewan Rent Increase Rules: No Cap, But Real Limits | LeasePlain",
    description:
      "Saskatchewan has no rent cap, but strict once-a-year timing and notice rules still apply.",
    url: "https://leaseplain.com/blog/saskatchewan-rent-increase-rules",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["saskatchewan rent increase rules", "is there rent control in saskatchewan", "how much can landlord raise rent saskatchewan", "rent increase notice saskatchewan", "sk rent increase"],
};

const faqItems = [
  {
    q: "Is there rent control in Saskatchewan?",
    a: "No. There's no percentage cap on rent increases. However, rent can only be increased once every 12 months, not during a fixed term, and only with proper written notice.",
  },
  {
    q: "How often can my rent go up in Saskatchewan?",
    a: "Only once in any 12-month period, and not during a fixed term. An increase within that window, or without proper notice, isn't valid.",
  },
  {
    q: "How much notice for a rent increase in Saskatchewan?",
    a: "For a periodic (month-to-month) tenancy, 12 months' written notice — or 6 months if the landlord belongs to a prescribed landlord association. Rent can't be raised at all during a fixed term.",
  },
  {
    q: "Can my landlord raise rent during my lease in Saskatchewan?",
    a: "No. Rent is fixed for the duration of a fixed-term lease. A new rent can only take effect on renewal or in a periodic tenancy, with notice.",
  },
];

export default function SaskatchewanRentIncreaseRulesPage() {
  return (
    <>
      <ArticleSchema
        headline={"Saskatchewan Rent Increase Rules: How Much and How Often"}
        description={"Saskatchewan has no rent control, so there's no percentage cap — but rent can rise only once a year and only with proper written notice. How the timing and notice rules protect you."}
        url="https://leaseplain.com/blog/saskatchewan-rent-increase-rules"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["saskatchewan rent increase rules", "is there rent control in saskatchewan", "how much can landlord raise rent saskatchewan"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Saskatchewan Rent Increase Rules", href: "https://leaseplain.com/blog/saskatchewan-rent-increase-rules" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/saskatchewan-rent-increase-rules",
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
                <span>Saskatchewan Rent Increase Rules</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Saskatchewan
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
                Saskatchewan Rent Increase Rules: No Cap, But Real Limits
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Saskatchewan is one of the provinces with no rent control — there&apos;s no percentage limit on increases. But timing and notice rules still apply, and they&apos;re your main protection.
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
                  <p className="text-slate-700 leading-relaxed">Saskatchewan has <strong>no rent control</strong>, so there&apos;s no legal maximum percentage for a rent increase. The <strong>timing and notice rules</strong> — plus your ability to negotiate or move — are the real protections.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Only Once Every 12 Months</h2>
                  <p className="text-slate-700 leading-relaxed">Rent can&apos;t be increased <strong>more than once in a 12-month period</strong>, and not during a fixed term. The clock runs from the start of the tenancy or the last increase.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Notice You Must Get</h2>
                  <p className="text-slate-700 leading-relaxed">Saskatchewan requires <strong>long notice</strong> for an increase on a periodic (month-to-month) tenancy: <strong>12 months&apos; written notice</strong> — or <strong>6 months</strong> if the landlord belongs to a prescribed landlord association. Rent can&apos;t be increased during a fixed term; it can only change on renewal, with notice. That long lead time is one of the province&apos;s strongest rent protections.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Your Real Leverage</h2>
                  <p className="text-slate-700 leading-relaxed">Because there&apos;s no cap, the market and your lease are the main checks. A fixed-term lease locks your rent for the whole term — useful in a rising market. If an increase is unaffordable, you can give notice and move at the end of your term.</p>
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
                      { label: "Saskatchewan Security Deposit Rules", href: "/blog/saskatchewan-security-deposit-rules" },
                      { label: "Notice to End a Tenancy in Saskatchewan", href: "/blog/saskatchewan-notice-to-end-tenancy" },
                      { label: "The Saskatchewan Eviction Process", href: "/blog/saskatchewan-eviction-process" },
                      { label: "Saskatchewan Tenant Rights", href: "/canada/saskatchewan" },
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
