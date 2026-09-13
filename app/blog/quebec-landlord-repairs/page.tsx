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
  title: "Landlord Repairs & Maintenance in Quebec: Your Rights | LeasePlain",
  description:
    "Your Quebec landlord must deliver and maintain a dwelling in good, habitable condition. What they must repair, your right to make urgent repairs, and how to force action through the TAL.",
  alternates: { canonical: "https://leaseplain.com/blog/quebec-landlord-repairs" },
  openGraph: {
    title: "Landlord Repairs & Maintenance in Quebec: Your Rights | LeasePlain",
    description:
      "Repairs, habitability, urgent repairs, and the TAL — your Quebec landlord's maintenance obligations.",
    url: "https://leaseplain.com/blog/quebec-landlord-repairs",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["landlord repairs quebec", "quebec habitability", "urgent repairs quebec", "landlord won't repair quebec", "tal repairs"],
};

const faqItems = [
  {
    q: "Is my landlord responsible for repairs in Quebec?",
    a: "Yes. Under the Civil Code, the landlord must deliver the dwelling in good habitable condition and maintain it that way for the whole lease, including structure, heating, and plumbing. This can't be waived by a lease clause.",
  },
  {
    q: "Can I make urgent repairs myself in Quebec?",
    a: "Yes, for urgent and necessary repairs needed to keep the unit habitable, if you can't reach the landlord after reasonable attempts. Keep receipts and notify the landlord as soon as possible so you can be reimbursed for reasonable costs.",
  },
  {
    q: "What if my Quebec landlord won't make repairs?",
    a: "Request the repair in writing and keep records. If the landlord doesn't act, apply to the Tribunal administratif du logement (TAL) for an order to complete the repairs, a rent reduction for the affected period, and damages where appropriate.",
  },
  {
    q: "Can I withhold rent for repairs in Quebec?",
    a: "It's risky to simply stop paying. Instead, document the problem and apply to the TAL, which can order repairs and reduce your rent for the period the unit wasn't up to standard, keeping you protected.",
  },
];

export default function QuebecLandlordRepairsPage() {
  return (
    <>
      <ArticleSchema
        headline={"Landlord Repairs and Maintenance in Quebec: Your Rights"}
        description={"Your Quebec landlord must deliver and maintain a dwelling in good, habitable condition. What they must repair, your right to make urgent repairs, and how to force action through the TAL."}
        url="https://leaseplain.com/blog/quebec-landlord-repairs"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["landlord repairs quebec", "quebec habitability", "urgent repairs quebec"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Landlord Repairs in Quebec", href: "https://leaseplain.com/blog/quebec-landlord-repairs" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/quebec-landlord-repairs",
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
                <span>Landlord Repairs in Quebec</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Quebec
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
                Landlord Repairs &amp;amp; Maintenance in Quebec: Your Rights
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                In Quebec your landlord is legally bound to hand over a home in good condition and keep it that way. Here&apos;s what they must fix, what you can do yourself in an emergency, and how to make them act.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Landlord&apos;s Core Obligation</h2>
                  <p className="text-slate-700 leading-relaxed">The Civil Code requires the landlord to <strong>deliver the dwelling in good habitable condition</strong> and to <strong>maintain it that way</strong> throughout the lease. This covers the structure, plumbing, heating, and anything needed for the unit to be fit to live in. A lease clause can&apos;t sign these duties away.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Urgent and Necessary Repairs</h2>
                  <p className="text-slate-700 leading-relaxed">If an <strong>urgent and necessary</strong> repair is needed to keep the unit habitable — a burst pipe, no heat in winter — and you can&apos;t reach the landlord after reasonable attempts, you may <strong>carry out the repair yourself</strong> and be reimbursed for reasonable costs. Keep receipts and notify the landlord as soon as you can.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Report It in Writing</h2>
                  <p className="text-slate-700 leading-relaxed">Always ask for repairs <strong>in writing</strong> and keep a copy, with dates and photos. A clear record is what wins at the tribunal if the landlord drags their feet.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Going to the TAL</h2>
                  <p className="text-slate-700 leading-relaxed">If the landlord won&apos;t act, you can apply to the <strong>Tribunal administratif du logement (TAL)</strong> for an order forcing the repairs, a <strong>rent reduction</strong> for the period the unit fell short, and damages where appropriate. Don&apos;t just stop paying rent — use the tribunal so you stay protected.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Landlord ignoring repairs?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Send a clear, dated repair request they can&apos;t say they never received.
                  </p>
                  <Link href="/letters/repair-request-letter" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Repair Request Letter
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Can a Landlord Ask for a Deposit in Quebec?", href: "/blog/quebec-security-deposit-rules" },
                      { label: "Quebec Rent Increase Rules", href: "/blog/quebec-rent-increase-rules" },
                      { label: "Repossession & Eviction in Quebec", href: "/blog/quebec-repossession-eviction" },
                      { label: "Quebec Tenant Rights", href: "/canada/quebec" },
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
