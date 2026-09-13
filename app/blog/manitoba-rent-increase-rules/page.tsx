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
  title: "Manitoba Rent Increase Rules: The Guideline & Your Rights | LeasePlain",
  description:
    "Manitoba sets an annual rent increase guideline — 1.8% for 2026 — and rent can rise only once a year with three months' notice. How the guideline works, what's exempt, and how to object.",
  alternates: { canonical: "https://leaseplain.com/blog/manitoba-rent-increase-rules" },
  openGraph: {
    title: "Manitoba Rent Increase Rules: The Guideline & Your Rights | LeasePlain",
    description:
      "Manitoba's 2026 rent guideline is 1.8%. How the cap, notice, exemptions, and objections work.",
    url: "https://leaseplain.com/blog/manitoba-rent-increase-rules",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["manitoba rent increase guideline 2026", "how much can landlord raise rent manitoba", "rent increase notice manitoba", "manitoba rent control", "rent increase manitoba"],
};

const faqItems = [
  {
    q: "What is the Manitoba rent increase guideline for 2026?",
    a: "1.8%, effective January 1, 2026. For most units, a landlord can't raise rent by more than this without the Residential Tenancies Branch's approval for a larger increase.",
  },
  {
    q: "How much notice for a rent increase in Manitoba?",
    a: "At least three months' written notice, and rent can only be increased once every 12 months. For a January 1 increase, notice must be given on or before September 30.",
  },
  {
    q: "Is all rent controlled in Manitoba?",
    a: "No. Manitoba exempts some units from the guideline, including certain newer buildings for a period after first occupancy and units above set rent thresholds. You can confirm your unit's status with the Residential Tenancies Branch.",
  },
  {
    q: "Can my landlord raise rent above the guideline in Manitoba?",
    a: "Only if the Residential Tenancies Branch approves a larger increase based on documented costs. You'll be notified and can object. Don't pay above the guideline unless it's been approved.",
  },
];

export default function ManitobaRentIncreaseRulesPage() {
  return (
    <>
      <ArticleSchema
        headline={"Manitoba Rent Increase Rules: The Annual Guideline and Your Rights"}
        description={"Manitoba sets an annual rent increase guideline — 1.8% for 2026 — and rent can rise only once a year with three months' notice. How the guideline works, what's exempt, and how to object."}
        url="https://leaseplain.com/blog/manitoba-rent-increase-rules"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["manitoba rent increase guideline 2026", "how much can landlord raise rent manitoba", "rent increase notice manitoba"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Manitoba Rent Increase Rules", href: "https://leaseplain.com/blog/manitoba-rent-increase-rules" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/manitoba-rent-increase-rules",
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
                <span>Manitoba Rent Increase Rules</span>
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
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Manitoba Rent Increase Rules: The Guideline &amp;amp; Your Rights
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Manitoba is a rent-controlled province: most landlords can only raise rent by the annual guideline, once a year, with long notice. Here&apos;s the 2026 figure and how the rules protect you.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Annual Guideline</h2>
                  <p className="text-slate-700 leading-relaxed">Manitoba sets a <strong>rent increase guideline</strong> each year. For <strong>2026 it&apos;s 1.8%</strong>. For most units, a landlord can&apos;t raise rent above the guideline without approval from the Residential Tenancies Branch for a larger increase based on documented costs.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Once a Year, With Three Months&apos; Notice</h2>
                  <p className="text-slate-700 leading-relaxed">Rent can only be increased <strong>once every 12 months</strong>, and the landlord must give <strong>at least three months&apos; written notice</strong>. For a January 1 increase, for example, you must receive notice on or before September 30.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What&apos;s Exempt</h2>
                  <p className="text-slate-700 leading-relaxed">Not every unit is covered. Manitoba exempts some rentals from the guideline — including certain <strong>newer buildings</strong> (exempt for a period after they&apos;re first occupied) and units renting above set thresholds. If your landlord says your unit is exempt, you can confirm it with the Residential Tenancies Branch.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Above-Guideline Increases</h2>
                  <p className="text-slate-700 leading-relaxed">A landlord who wants more than the guideline must <strong>apply to the Branch</strong> and justify it with costs like major repairs. You have the right to be notified and to object. Don&apos;t agree to pay more than the guideline unless the Branch has approved it.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If You Think an Increase Is Wrong</h2>
                  <p className="text-slate-700 leading-relaxed">If an increase exceeds the guideline without approval, skips the three-month notice, or comes more than once a year, you can <strong>object through the Residential Tenancies Branch</strong>. Keep paying your lawful rent and put your objection in writing.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Is your increase within the limit?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Check a proposed increase against the rules with our free calculator.
                  </p>
                  <Link href="/tools/rent-increase-calculator" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Rent Increase Calculator
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Manitoba Security Deposit Rules", href: "/blog/manitoba-security-deposit-rules" },
                      { label: "Notice to End a Tenancy in Manitoba", href: "/blog/manitoba-notice-to-end-tenancy" },
                      { label: "The Manitoba Eviction Process", href: "/blog/manitoba-eviction-process" },
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
