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
  title: "PEI Rent Increase Rules: The IRAC Allowable Increase | LeasePlain",
  description:
    "PEI sets an annual allowable rent increase through IRAC — 2% for 2026, capped at 3% by law — with increases allowed once a year and three months' notice. How the cap works and how to respond.",
  alternates: { canonical: "https://leaseplain.com/blog/pei-rent-increase-rules" },
  openGraph: {
    title: "PEI Rent Increase Rules: The IRAC Allowable Increase | LeasePlain",
    description:
      "PEI's 2026 allowable rent increase (2%), the once-a-year rule, and the 3-month notice.",
    url: "https://leaseplain.com/blog/pei-rent-increase-rules",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["pei rent increase 2026", "irac allowable rent increase", "how much can landlord raise rent pei", "rent increase notice pei", "pei rent control"],
};

const faqItems = [
  {
    q: "How much can my landlord raise rent in PEI in 2026?",
    a: "No more than 2% for 2026 — the allowable increase set by IRAC — unless IRAC approves a higher amount. By law the annual allowable increase can't exceed 3%.",
  },
  {
    q: "How much notice for a rent increase in PEI?",
    a: "At least three months' written notice, and only once every 12 months.",
  },
  {
    q: "Can a landlord charge more than the allowable increase in PEI?",
    a: "Only if IRAC approves it. Otherwise the allowable amount applies, and you shouldn't pay more until there's an order.",
  },
  {
    q: "Who sets rent rules in PEI?",
    a: "The Residential Tenancy Office, part of the Island Regulatory and Appeals Commission (IRAC), which sets the annual allowable increase and decides disputes.",
  },
];

export default function PeiRentIncreaseRulesPage() {
  return (
    <>
      <ArticleSchema
        headline={"PEI Rent Increase Rules: The IRAC Allowable Increase and Your Rights"}
        description={"PEI sets an annual allowable rent increase through IRAC — 2% for 2026, capped at 3% by law — with increases allowed once a year and three months' notice. How the cap works and how to respond."}
        url="https://leaseplain.com/blog/pei-rent-increase-rules"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["pei rent increase 2026", "irac allowable rent increase", "how much can landlord raise rent pei"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "PEI Rent Increase Rules", href: "https://leaseplain.com/blog/pei-rent-increase-rules" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/pei-rent-increase-rules",
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
                <span>PEI Rent Increase Rules</span>
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
                PEI Rent Increase Rules: The IRAC Allowable Increase
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Prince Edward Island is rent-controlled: an independent regulator sets the maximum increase each year. Here&apos;s the 2026 figure, the notice you&apos;re owed, and what to do if a landlord asks for more.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Annual Allowable Increase</h2>
                  <p className="text-slate-700 leading-relaxed">PEI&apos;s Residential Tenancy Office (part of <strong>IRAC</strong>) sets a <strong>maximum allowable rent increase</strong> each year. For <strong>2026 it&apos;s 2%</strong>, and by law the annual allowable increase can&apos;t exceed <strong>3%</strong>. A landlord can&apos;t charge more without IRAC&apos;s approval.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Once a Year, With Three Months&apos; Notice</h2>
                  <p className="text-slate-700 leading-relaxed">Rent can be increased <strong>only once every 12 months</strong>, and the landlord must give at least <strong>three months&apos; written notice</strong> on the proper form.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Above the Allowable Amount</h2>
                  <p className="text-slate-700 leading-relaxed">A landlord who wants more than the allowable increase must <strong>apply to IRAC</strong> and justify it. You&apos;re notified and can object — don&apos;t pay above the allowable amount unless IRAC approves it.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If the Increase Is Wrong</h2>
                  <p className="text-slate-700 leading-relaxed">If a landlord exceeds the allowable increase without approval, skips the notice, or increases more than once a year, it isn&apos;t valid. Object in writing, keep paying your lawful rent, and apply to IRAC.</p>
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
                      { label: "PEI Security Deposit Rules", href: "/blog/pei-security-deposit-rules" },
                      { label: "Notice to End a Tenancy in PEI", href: "/blog/pei-notice-to-end-tenancy" },
                      { label: "The PEI Eviction Process", href: "/blog/pei-eviction-process" },
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
