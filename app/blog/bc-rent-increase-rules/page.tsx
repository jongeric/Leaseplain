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
  title: "BC Rent Increase Rules: Limits, Notice & Disputes | LeasePlain",
  description:
    "In BC your landlord can raise rent only once a year, up to the annual limit set by the province, with three full months' written notice. How the cap works, what's exempt, and how to challenge an illegal increase.",
  alternates: { canonical: "https://leaseplain.com/blog/bc-rent-increase-rules" },
  openGraph: {
    title: "BC Rent Increase Rules: Limits, Notice & Disputes | LeasePlain",
    description:
      "How much and how often rent can rise in British Columbia, the notice required, and how to dispute an illegal increase.",
    url: "https://leaseplain.com/blog/bc-rent-increase-rules",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["bc rent increase rules", "how much can landlord raise rent bc", "rent increase notice bc", "bc rent increase limit", "illegal rent increase bc"],
};

const faqItems = [
  {
    q: "How much can my landlord raise my rent in BC?",
    a: "No more than the maximum allowable rent increase the province sets each year, and only once every 12 months. The increase requires three full months' written notice on the approved form.",
  },
  {
    q: "How often can rent be increased in BC?",
    a: "Only once every 12 months, and not until you've been a tenant for at least a year. A second increase within the same 12-month window isn't valid, even with notice.",
  },
  {
    q: "How much notice is required for a rent increase in BC?",
    a: "At least three full months' written notice, using the government's approved rent increase form. A verbal increase or short notice isn't enforceable.",
  },
  {
    q: "Can a landlord raise rent above the annual limit in BC?",
    a: "Only in limited situations approved by the Residential Tenancy Branch, such as certain unavoidable cost increases. Otherwise the annual cap applies, and you shouldn't pay more unless the RTB has ordered it.",
  },
];

export default function BcRentIncreaseRulesPage() {
  return (
    <>
      <ArticleSchema
        headline={"BC Rent Increase Rules: How Much, How Often, and the Notice Required"}
        description={"In BC your landlord can raise rent only once a year, up to the annual limit set by the province, with three full months' written notice. How the cap works, what's exempt, and how to challenge an illegal increase."}
        url="https://leaseplain.com/blog/bc-rent-increase-rules"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["bc rent increase rules", "how much can landlord raise rent bc", "rent increase notice bc"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "BC Rent Increase Rules", href: "https://leaseplain.com/blog/bc-rent-increase-rules" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/bc-rent-increase-rules",
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
                <span>BC Rent Increase Rules</span>
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
                BC Rent Increase Rules: Limits, Notice &amp; Disputes
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                British Columbia caps how much your rent can go up each year and demands long notice. If your landlord asks for more, or more often, the increase usually isn&apos;t legal — and you don&apos;t have to pay it.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Annual Limit</h2>
                  <p className="text-slate-700 leading-relaxed">Each year BC sets a <strong>maximum allowable rent increase</strong> that applies to existing tenancies. A landlord can&apos;t raise your rent above that percentage without your agreement, and the limit is tied to inflation. For the current year&apos;s exact figure, see our <Link href="/blog/bc-rent-increase-2026" className="text-blue-600 hover:underline">BC 2026 rent increase guide</Link>.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Once a Year, With Three Months&apos; Notice</h2>
                  <p className="text-slate-700 leading-relaxed">Two timing rules always apply: rent can only be increased <strong>once every 12 months</strong>, and the landlord must give at least <strong>three full months&apos; written notice</strong> on the approved form. An increase can&apos;t take effect until you&apos;ve been a tenant for at least a year.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">There&apos;s No Vacancy Control</h2>
                  <p className="text-slate-700 leading-relaxed">The annual cap applies while you stay in the unit. When a tenancy ends and a <strong>new tenant</strong> moves in, the landlord can set any starting rent they want — BC doesn&apos;t have vacancy control. That&apos;s why staying put often protects a below-market rent.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Additional (Above-Limit) Increases</h2>
                  <p className="text-slate-700 leading-relaxed">A landlord can apply to the RTB for an increase above the annual limit only in narrow circumstances (for example, significant financial loss from an unavoidable cost increase). These are the exception, and you have the right to respond. Don&apos;t agree to pay more than the cap unless the RTB has approved it.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If the Increase Is Illegal</h2>
                  <p className="text-slate-700 leading-relaxed">If your landlord tries to raise rent by more than the limit, more than once a year, or without proper notice, the increase isn&apos;t valid. Put your objection in writing, keep paying your lawful rent, and apply to the RTB if needed. You can recover overpayments you were wrongly charged.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Is your rent increase legal?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Check any proposed increase against the rules with our free calculator.
                  </p>
                  <Link href="/tools/rent-increase-calculator" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Rent Increase Calculator
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "BC 2026 Rent Increase Guide", href: "/blog/bc-rent-increase-2026" },
                      { label: "BC Rent Increase History (2019–2026)", href: "/bc-rent-increase-history" },
                      { label: "How Much Notice to End a Tenancy in BC", href: "/blog/bc-notice-to-end-tenancy" },
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
