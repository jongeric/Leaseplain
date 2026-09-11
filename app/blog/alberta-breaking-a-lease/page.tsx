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
  title: "Breaking a Lease in Alberta: How to End a Fixed Term Early | LeasePlain",
  description:
    "You generally can't just give notice to leave a fixed-term lease early in Alberta — but you have options: assignment, subletting, mutual agreement, and the landlord's duty to limit your losses. Plus the situations that end a tenancy early.",
  alternates: { canonical: "https://leaseplain.com/blog/alberta-breaking-a-lease" },
  openGraph: {
    title: "Breaking a Lease in Alberta: How to End a Fixed Term Early | LeasePlain",
    description:
      "Assignment, subletting, mutual agreement, and duty to mitigate — the legal ways to break a lease early in Alberta.",
    url: "https://leaseplain.com/blog/alberta-breaking-a-lease",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["breaking a lease alberta", "end fixed term lease early alberta", "get out of a lease alberta", "sublet assign lease alberta", "duty to mitigate alberta"],
};

const faqItems = [
  {
    q: "Can I break a fixed-term lease early in Alberta?",
    a: "Not just by giving notice. You can ask to assign or sublet (the landlord can't unreasonably refuse), reach a mutual written agreement to end, or end early in specific situations like fleeing domestic violence. If you leave otherwise, the landlord must still try to re-rent.",
  },
  {
    q: "Does my Alberta landlord have to try to re-rent if I leave early?",
    a: "Yes. The landlord has a duty to take reasonable steps to minimize their loss by re-renting. You're only responsible for rent until a new tenant moves in or the term ends, plus reasonable costs — not automatically the entire remaining term.",
  },
  {
    q: "Can I end my lease early for domestic violence in Alberta?",
    a: "Yes. Alberta allows a tenant to end a tenancy early to flee domestic violence, using a certificate that confirms the circumstances. Ask a legal clinic or CPLEA about the current process and required form.",
  },
  {
    q: "Will my landlord charge a penalty for breaking my lease in Alberta?",
    a: "There's no lawful flat 'penalty' beyond your actual rent obligation, reduced by the landlord's duty to re-rent, plus genuine costs. If a lease imposes an automatic multi-month penalty, that may not be enforceable — get advice.",
  },
];

export default function AlbertaBreakingALeasePage() {
  return (
    <>
      <ArticleSchema
        headline={"Breaking a Lease in Alberta: How to End a Fixed-Term Tenancy Early"}
        description={"You generally can't just give notice to leave a fixed-term lease early in Alberta — but you have options: assignment, subletting, mutual agreement, and the landlord's duty to limit your losses. Plus the situations that end a tenancy early."}
        url="https://leaseplain.com/blog/alberta-breaking-a-lease"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["breaking a lease alberta", "end fixed term lease early alberta", "get out of a lease alberta"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Breaking a Lease in Alberta", href: "https://leaseplain.com/blog/alberta-breaking-a-lease" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/alberta-breaking-a-lease",
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
                <span>Breaking a Lease in Alberta</span>
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
                Breaking a Lease in Alberta: How to End a Fixed Term Early
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                A new job, a breakup, a rent you can&apos;t manage — sometimes you have to leave before your term is up. In Alberta you can&apos;t simply walk away from a fixed term, but the law limits what you owe and offers several legal exits.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">First: A Fixed Term Is a Commitment</h2>
                  <p className="text-slate-700 leading-relaxed">A fixed-term lease binds you until its end date. Giving notice ends a periodic (month-to-month) tenancy, not a fixed term. So the question is which legal exit fits — and how to limit what you owe if you must leave.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Assign or Sublet</h2>
                  <p className="text-slate-700 leading-relaxed">You can ask to <strong>assign</strong> (transfer the lease to a new tenant) or <strong>sublet</strong> (someone lives there while you stay the tenant). Your landlord&apos;s consent is usually required, but they can&apos;t withhold it unreasonably. This is often the cleanest way to limit your costs — line up a qualified replacement and put the landlord&apos;s approval in writing.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Mutual Agreement to End</h2>
                  <p className="text-slate-700 leading-relaxed">If your landlord agrees, you can both sign a <strong>written agreement to end the tenancy</strong> early. It&apos;s voluntary — no one can force it — but a landlord who can quickly re-rent (especially in a strong market) may be happy to. Always get the agreed end date in writing.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Landlord&apos;s Duty to Minimize Loss</h2>
                  <p className="text-slate-700 leading-relaxed">If you leave without one of the above, the landlord <strong>can&apos;t just leave the unit empty and charge you the whole remaining term</strong>. They must take reasonable steps to re-rent. You&apos;re liable only for lost rent until a new tenant moves in (or the term ends), plus reasonable costs. Give written notice and keep records of their efforts.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Situations That Can End a Tenancy Early</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">Some circumstances allow an early end regardless of the term:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Fleeing domestic violence:</strong> Alberta lets tenants end a tenancy early with a certificate confirming the situation.</li>
                    <li><strong>A substantial breach by the landlord</strong> that isn&apos;t fixed: may allow you to end the tenancy.</li>
                    <li><strong>Already periodic?</strong> You&apos;re not breaking anything — just give proper notice.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">What could leaving early cost?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Estimate your exposure before deciding with our free lease-break tool.
                  </p>
                  <Link href="/tools/lease-break-calculator" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Lease Break Estimator
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "How Much Notice to End a Tenancy in Alberta", href: "/blog/alberta-notice-to-end-tenancy" },
                      { label: "Alberta Security Deposit Rules", href: "/blog/alberta-security-deposit-rules" },
                      { label: "Alberta Rent Increase Rules", href: "/blog/alberta-rent-increase-rules" },
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
