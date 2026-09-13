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
  title: "Repossession & Eviction in Quebec: Your Rights | LeasePlain",
  description:
    "In Quebec a landlord can repossess your unit for family use, or evict for major work — but only with long notice, compensation, and your right to contest at the TAL. How reprise de logement and eviction really work.",
  alternates: { canonical: "https://leaseplain.com/blog/quebec-repossession-eviction" },
  openGraph: {
    title: "Repossession & Eviction in Quebec: Your Rights | LeasePlain",
    description:
      "Reprise de logement and eviction in Quebec: notice, compensation, and your right to refuse at the TAL.",
    url: "https://leaseplain.com/blog/quebec-repossession-eviction",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["repossession quebec", "reprise de logement", "eviction quebec tenant rights", "landlord wants unit back quebec", "quebec eviction notice"],
};

const faqItems = [
  {
    q: "Can a landlord take back my apartment in Quebec?",
    a: "Only in limited cases. An individual landlord can repossess (reprise de logement) to house themselves or a close family member, with six months' notice for a lease over six months. You can refuse, and the landlord must then get the TAL's approval.",
  },
  {
    q: "How much notice and compensation for eviction in Quebec?",
    a: "For eviction to subdivide, demolish, enlarge, or change the use of a dwelling, the landlord must give notice (six months for a lease over six months) and pay compensation — generally three months' rent plus moving expenses, or more if the TAL orders it.",
  },
  {
    q: "Can I fight a repossession in Quebec?",
    a: "Yes. If you don't consent, the landlord must apply to the Tribunal administratif du logement (TAL), which decides whether the repossession is genuine and in good faith. If a landlord repossesses in bad faith, you may be awarded damages and penalties.",
  },
  {
    q: "Are older tenants protected in Quebec?",
    a: "Often, yes. Quebec gives added protection against eviction and repossession to certain tenants — for example, long-term senior tenants with modest income. If this may apply to you, get advice before agreeing to leave.",
  },
];

export default function QuebecRepossessionEvictionPage() {
  return (
    <>
      <ArticleSchema
        headline={"Repossession and Eviction in Quebec: Reprise de Logement Explained"}
        description={"In Quebec a landlord can repossess your unit for family use, or evict for major work — but only with long notice, compensation, and your right to contest at the TAL. How reprise de logement and eviction really work."}
        url="https://leaseplain.com/blog/quebec-repossession-eviction"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["repossession quebec", "reprise de logement", "eviction quebec tenant rights"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Repossession & Eviction in Quebec", href: "https://leaseplain.com/blog/quebec-repossession-eviction" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/quebec-repossession-eviction",
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
                <span>Repossession &amp; Eviction in Quebec</span>
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
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Repossession &amp;amp; Eviction in Quebec: Your Rights
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Quebec tenants have some of Canada&apos;s strongest security of tenure. A landlord can take back your unit or evict you only in narrow situations — with long notice, compensation, and your right to fight it before the tribunal.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Two Different Things: Repossession vs Eviction</h2>
                  <p className="text-slate-700 leading-relaxed">Quebec law separates <strong>repossession (reprise de logement)</strong> — taking the unit back to house the landlord or close family — from <strong>eviction</strong> — ending the lease to <strong>subdivide, demolish, enlarge, or change the use</strong> of the dwelling. Each has its own rules, but both protect the tenant heavily.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Who a Landlord Can Repossess For</h2>
                  <p className="text-slate-700 leading-relaxed">A landlord (who must be an individual, not a company) can repossess the unit only to house themselves or a <strong>close family member</strong> — a parent, child, or someone for whom they are the main support — or a former spouse they still support. They can&apos;t repossess simply to re-rent at a higher price.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Notice and Compensation</h2>
                  <p className="text-slate-700 leading-relaxed">For a lease with a fixed term of <strong>more than six months</strong>, the landlord must give <strong>six months&apos; notice</strong> before the end of the lease. For eviction (major work), the tenant is entitled to <strong>compensation</strong> — generally the equivalent of three months&apos; rent plus reasonable moving expenses, or more if the TAL orders it.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">You Can Refuse — and Make Them Prove It</h2>
                  <p className="text-slate-700 leading-relaxed">You don&apos;t have to simply accept a repossession notice. If you <strong>don&apos;t consent</strong>, the landlord must apply to the <strong>TAL</strong>, which decides whether the repossession is genuine and in good faith. Bad-faith repossession — taking the unit back and then re-renting it — can lead to <strong>damages and penalties</strong> in your favour.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Extra Protection for Older and Long-Term Tenants</h2>
                  <p className="text-slate-700 leading-relaxed">Quebec gives added protection to some tenants — for example, older tenants who have lived in the unit for a long time and have modest income can be <strong>protected from eviction and repossession</strong> in many cases. If you&apos;re a senior or long-term tenant, get advice before agreeing to leave.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Facing a notice?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Understand your Quebec tenant rights before you respond to anything.
                  </p>
                  <Link href="/canada/quebec" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Quebec Tenant Rights
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Ending Your Lease in Quebec", href: "/blog/quebec-ending-your-lease" },
                      { label: "Quebec Rent Increase Rules", href: "/blog/quebec-rent-increase-rules" },
                      { label: "Assignment & Sublet in Quebec", href: "/blog/quebec-lease-assignment-sublet" },
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
