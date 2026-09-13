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
  title: "Ending a Lease in Quebec: Renewal, Notice & Early Exit | LeasePlain",
  description:
    "Quebec leases renew automatically — so to leave, you must give notice in a specific window. The 3-to-6-month non-renewal rule, why you usually can't just break a fixed lease, and the limited grounds for early exit.",
  alternates: { canonical: "https://leaseplain.com/blog/quebec-ending-your-lease" },
  openGraph: {
    title: "Ending a Lease in Quebec: Renewal, Notice & Early Exit | LeasePlain",
    description:
      "How Quebec's automatic lease renewal works, the notice to not renew, and when you can end a lease early.",
    url: "https://leaseplain.com/blog/quebec-ending-your-lease",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["ending lease quebec", "quebec lease renewal notice", "break lease quebec", "quebec lease automatic renewal", "how to end lease quebec"],
};

const faqItems = [
  {
    q: "Do Quebec leases renew automatically?",
    a: "Yes. A residential lease in Quebec renews on its own at the end of its term on the same conditions, unless you give proper notice not to renew or the landlord properly changes a condition like rent. The onus is on the tenant to give notice to leave.",
  },
  {
    q: "How much notice do I give to end my lease in Quebec?",
    a: "For a lease of 12 months or more, between three and six months before it ends. For a fixed term under 12 months, one to two months. For a month-to-month lease, one to two months before the date you want to leave.",
  },
  {
    q: "Can I break a fixed-term lease early in Quebec?",
    a: "Usually not just by giving notice. You can assign or sublet the lease, and the Civil Code allows early termination in specific situations — being allocated subsidized housing, moving to a seniors'/care residence, or leaving due to violence or a threat to safety.",
  },
  {
    q: "What's the difference between assigning and subletting in Quebec?",
    a: "Assigning (cession de bail) transfers the lease entirely and releases you from future obligations. Subletting puts someone in temporarily while you remain responsible. For a permanent exit, assignment is usually better — and the landlord can only refuse for a serious reason.",
  },
];

export default function QuebecEndingYourLeasePage() {
  return (
    <>
      <ArticleSchema
        headline={"Ending a Lease in Quebec: Automatic Renewal, Notice & Early Exit"}
        description={"Quebec leases renew automatically — so to leave, you must give notice in a specific window. The 3-to-6-month non-renewal rule, why you usually can't just break a fixed lease, and the limited grounds for early exit."}
        url="https://leaseplain.com/blog/quebec-ending-your-lease"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["ending lease quebec", "quebec lease renewal notice", "break lease quebec"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Ending a Lease in Quebec", href: "https://leaseplain.com/blog/quebec-ending-your-lease" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/quebec-ending-your-lease",
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
                <span>Ending a Lease in Quebec</span>
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
                Ending a Lease in Quebec: Renewal, Notice &amp;amp; Early Exit
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Quebec leases don&apos;t just end on the last day — they renew themselves. If you want to leave, the burden is on you to give notice at the right time. Miss the window and you&apos;re locked in for another term.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Leases Renew Automatically</h2>
                  <p className="text-slate-700 leading-relaxed">In Quebec, a residential lease <strong>renews on its own</strong> at the end of the term, on the same conditions (subject to any rent change the landlord properly notices). The landlord doesn&apos;t have to offer renewal, and you don&apos;t have to sign anything — it just continues. To stop that, <strong>you</strong> must give notice.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Notice to Not Renew</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">To end a lease at its term, give written notice within the correct window:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Lease of 12 months or more:</strong> between <strong>three and six months</strong> before the end date.</li>
                    <li><strong>Fixed-term lease of less than 12 months:</strong> one to two months before the end.</li>
                    <li><strong>Month-to-month (indeterminate):</strong> one to two months before the date you want to leave.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">You Usually Can&apos;t Break a Fixed Lease Early</h2>
                  <p className="text-slate-700 leading-relaxed">A Quebec lease binds you for its term. You generally <strong>can&apos;t end a fixed-term lease early</strong> just by giving notice. If you must leave before the term ends, your main options are to <strong>assign</strong> the lease or <strong>sublet</strong> — see our <Link href="/blog/quebec-lease-assignment-sublet" className="text-blue-600 hover:underline">Quebec assignment and sublet guide</Link>.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Limited Early-Exit Grounds</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">The Civil Code allows a tenant to end a lease early in specific situations, including:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li>Being <strong>allocated low-rental (subsidized) housing</strong>.</li>
                    <li>Moving to a <strong>residence for seniors</strong> or a facility because you can no longer live independently.</li>
                    <li>Leaving because your <strong>safety or a child&apos;s is threatened</strong> by violence or a sexual assault.</li>
                    <li>In these cases, specific notice and confirmation rules apply.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Assignment Often Beats Subletting</h2>
                  <p className="text-slate-700 leading-relaxed">If you need out for good, <strong>assigning</strong> the lease (cession de bail) transfers it entirely and releases you from future obligations — usually the cleanest exit. Subletting keeps you on the hook. Either way, the landlord can only refuse for a serious reason.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Need to leave early?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Learn how assigning or subletting your Quebec lease works.
                  </p>
                  <Link href="/blog/quebec-lease-assignment-sublet" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Assignment &amp; Sublet in Quebec
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Assignment & Sublet in Quebec", href: "/blog/quebec-lease-assignment-sublet" },
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
