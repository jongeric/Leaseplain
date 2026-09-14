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
  title: "New Brunswick Rent Increase Rules: Notice & How to Dispute | LeasePlain",
  description:
    "New Brunswick has no fixed rent cap, but rent can rise only once a year with proper notice — and unreasonable increases can be challenged at the Residential Tenancies Tribunal. How the rules work.",
  alternates: { canonical: "https://leaseplain.com/blog/new-brunswick-rent-increase-rules" },
  openGraph: {
    title: "New Brunswick Rent Increase Rules: Notice & How to Dispute | LeasePlain",
    description:
      "New Brunswick's rent-increase notice rules and how to dispute an unreasonable increase.",
    url: "https://leaseplain.com/blog/new-brunswick-rent-increase-rules",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["new brunswick rent increase", "how much can landlord raise rent new brunswick", "rent increase notice new brunswick", "dispute rent increase nb", "nb rent control"],
};

const faqItems = [
  {
    q: "Is there rent control in New Brunswick?",
    a: "There's no fixed percentage cap, but rent can only rise once every 12 months with proper notice, and you can challenge an unreasonable increase at the Residential Tenancies Tribunal.",
  },
  {
    q: "How often can rent go up in New Brunswick?",
    a: "Only once in any 12-month period, and not during a fixed term. A second increase within that window, or one without proper notice, isn't valid.",
  },
  {
    q: "Can I dispute a rent increase in New Brunswick?",
    a: "Yes. If an increase is unreasonable, you can bring it to the Residential Tenancies Tribunal, which can review it and adjust or phase it in. Act within the time limits and keep paying your lawful rent.",
  },
  {
    q: "Can my landlord raise rent during my lease in New Brunswick?",
    a: "No. Rent is fixed for the term of a fixed-term lease. A new rent can only take effect on renewal or in a periodic tenancy, with proper notice.",
  },
];

export default function NewBrunswickRentIncreaseRulesPage() {
  return (
    <>
      <ArticleSchema
        headline={"New Brunswick Rent Increase Rules: Notice and How to Challenge One"}
        description={"New Brunswick has no fixed rent cap, but rent can rise only once a year with proper notice — and unreasonable increases can be challenged at the Residential Tenancies Tribunal. How the rules work."}
        url="https://leaseplain.com/blog/new-brunswick-rent-increase-rules"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["new brunswick rent increase", "how much can landlord raise rent new brunswick", "rent increase notice new brunswick"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "New Brunswick Rent Increase Rules", href: "https://leaseplain.com/blog/new-brunswick-rent-increase-rules" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/new-brunswick-rent-increase-rules",
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
                <span>New Brunswick Rent Increase Rules</span>
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
                New Brunswick Rent Increase Rules: Notice &amp; How to Dispute
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                New Brunswick doesn&apos;t set a hard percentage cap on rent — but it does give tenants notice rights and, importantly, a way to challenge an increase that&apos;s out of line. Here&apos;s how it works.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">No Fixed Cap — But Real Rules</h2>
                  <p className="text-slate-700 leading-relaxed">New Brunswick has <strong>no set percentage cap</strong> on rent increases. Instead, protection comes from the <strong>once-a-year rule, the required notice, and the right to challenge</strong> an unreasonable increase at the Residential Tenancies Tribunal.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Once a Year, With Notice</h2>
                  <p className="text-slate-700 leading-relaxed">Rent can only be increased <strong>once every 12 months</strong>, and the landlord must give proper <strong>written notice well in advance</strong> — generally at least a few months for a month-to-month tenancy. Rent can&apos;t be raised during a fixed term.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">You Can Challenge an Unreasonable Increase</h2>
                  <p className="text-slate-700 leading-relaxed">This is New Brunswick&apos;s key protection: if you think an increase is <strong>unreasonable</strong>, you can dispute it with the <strong>Residential Tenancies Tribunal</strong>, which can review it against comparable units and market conditions and adjust or phase it in.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Respond</h2>
                  <p className="text-slate-700 leading-relaxed">Don&apos;t ignore an increase you think is unfair. Put your objection in writing, keep paying your existing lawful rent, and contact the Tribunal promptly — there are time limits to dispute.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Think your increase is unfair?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Check a proposed increase and your options with our free calculator.
                  </p>
                  <Link href="/tools/rent-increase-calculator" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Rent Increase Calculator
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "New Brunswick Security Deposit Rules", href: "/blog/new-brunswick-security-deposit-rules" },
                      { label: "Notice to End a Tenancy in New Brunswick", href: "/blog/new-brunswick-notice-to-end-tenancy" },
                      { label: "The New Brunswick Eviction Process", href: "/blog/new-brunswick-eviction-process" },
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
