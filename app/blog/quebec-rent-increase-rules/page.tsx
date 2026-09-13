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
  title: "Quebec Rent Increase Rules: How to Refuse and Stay | LeasePlain",
  description:
    "Quebec has no fixed rent cap, but tenants have a powerful right: you can refuse a rent increase and stay in your home. How notice works, the one-month window to refuse, and how the TAL fixes the rent.",
  alternates: { canonical: "https://leaseplain.com/blog/quebec-rent-increase-rules" },
  openGraph: {
    title: "Quebec Rent Increase Rules: How to Refuse and Stay | LeasePlain",
    description:
      "In Quebec you can refuse a rent increase and stay. How the notice, the refusal window, and the TAL process work.",
    url: "https://leaseplain.com/blog/quebec-rent-increase-rules",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["quebec rent increase rules", "refuse rent increase quebec", "tal rent increase", "how much can landlord raise rent quebec", "rent increase notice quebec"],
};

const faqItems = [
  {
    q: "How much can a landlord raise rent in Quebec?",
    a: "There's no fixed percentage cap. The TAL publishes an annual estimate (around 3.1% for the 2026–2027 cycle), but the real limit is what's justified by the landlord's building costs. Crucially, you can refuse an increase and stay while the TAL decides what's fair.",
  },
  {
    q: "Can I refuse a rent increase in Quebec?",
    a: "Yes. Within one month of receiving the notice, you can refuse in writing. You don't have to move — your tenancy continues, and the landlord must apply to the TAL to fix the rent, which is often set lower than requested.",
  },
  {
    q: "How much notice does my landlord give for a rent increase in Quebec?",
    a: "For a lease of 12 months or more, three to six months before the lease ends, in writing, stating the new rent. You then have one month to accept or refuse.",
  },
  {
    q: "What if my building is new?",
    a: "Units in buildings five years old or newer may have an 'F' clause that removes the right to contest a rent increase during that period. Check your lease — if it has one, the refusal right doesn't apply yet.",
  },
];

export default function QuebecRentIncreaseRulesPage() {
  return (
    <>
      <ArticleSchema
        headline={"Quebec Rent Increase Rules: Your Right to Refuse and Stay"}
        description={"Quebec has no fixed rent cap, but tenants have a powerful right: you can refuse a rent increase and stay in your home. How notice works, the one-month window to refuse, and how the TAL fixes the rent."}
        url="https://leaseplain.com/blog/quebec-rent-increase-rules"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["quebec rent increase rules", "refuse rent increase quebec", "tal rent increase"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Quebec Rent Increase Rules", href: "https://leaseplain.com/blog/quebec-rent-increase-rules" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/quebec-rent-increase-rules",
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
                <span>Quebec Rent Increase Rules</span>
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
                Quebec Rent Increase Rules: How to Refuse and Stay
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Quebec doesn&apos;t cap rent increases with a single percentage — but it gives tenants something arguably stronger: the right to say no to an increase and keep your home while a tribunal decides what&apos;s fair.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">No Fixed Cap — But a Real Check</h2>
                  <p className="text-slate-700 leading-relaxed">There&apos;s no province-wide percentage cap in Quebec. Instead, the <strong>Tribunal administratif du logement (TAL)</strong> publishes an annual method and estimate for reasonable increases, based on inflation, taxes, insurance, and building expenses. For leases renewing in the 2026–2027 cycle, the TAL&apos;s suggested basic increase is around 3.1%, but the real limit is what&apos;s justified for your building.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Notice You Get</h2>
                  <p className="text-slate-700 leading-relaxed">For a lease of 12 months or more, the landlord must send written notice of an increase (and any other change) <strong>three to six months before the lease ends</strong>. The notice must state the new rent. For shorter leases, the notice period is shorter.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Your Right to Refuse</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">This is the heart of Quebec&apos;s system. Once you receive the notice, you have <strong>one month to refuse it in writing</strong>. If you refuse:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li>You <strong>do not have to move out</strong> — your tenancy continues.</li>
                    <li>The landlord must apply to the <strong>TAL</strong> to have the rent fixed if they still want the increase.</li>
                    <li>While the TAL decides, you keep paying your <strong>existing rent</strong>.</li>
                    <li>The TAL sets the increase based on the landlord&apos;s documented costs — often less than they asked for.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If You Do Nothing</h2>
                  <p className="text-slate-700 leading-relaxed">Silence is treated as acceptance: if you neither refuse nor move, the lease renews at the new rent. So if an increase seems too high, <strong>respond in writing within the month</strong> — don&apos;t let the deadline pass.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Exception: New Buildings</h2>
                  <p className="text-slate-700 leading-relaxed">Units in buildings that are <strong>five years old or newer</strong> (and certain newly-created units) can carry an <strong>&quot;F&quot; clause</strong> on the lease that removes your right to contest an increase for that period. Check whether your lease has one before you rely on the refusal right.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Know your Quebec rights</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    See the full picture of Quebec tenant protections under the Civil Code.
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
                      { label: "Repossession & Eviction in Quebec", href: "/blog/quebec-repossession-eviction" },
                      { label: "Can a Landlord Ask for a Deposit in Quebec?", href: "/blog/quebec-security-deposit-rules" },
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
