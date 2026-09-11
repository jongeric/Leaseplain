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
  title: "Breaking a Lease in BC: How to End a Fixed Term Early | LeasePlain",
  description:
    "You generally can't just give notice to leave a fixed-term lease early in BC — but you have real options: assignment, subletting, mutual agreement, and the landlord's duty to limit your losses. Plus the special exits the law allows.",
  alternates: { canonical: "https://leaseplain.com/blog/bc-breaking-a-lease" },
  openGraph: {
    title: "Breaking a Lease in BC: How to End a Fixed Term Early | LeasePlain",
    description:
      "Assignment, subletting, mutual agreement, and duty to mitigate — the legal ways to break a lease early in BC.",
    url: "https://leaseplain.com/blog/bc-breaking-a-lease",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["breaking a lease bc", "end fixed term lease early bc", "get out of a lease bc", "assign sublet lease bc", "duty to mitigate bc"],
};

const faqItems = [
  {
    q: "Can I break a fixed-term lease early in BC?",
    a: "Not just by giving notice. You can assign or sublet the tenancy (the landlord can't unreasonably refuse), reach a mutual agreement to end, or end early in special situations like fleeing violence or needing long-term care. If you leave otherwise, the landlord must still try to re-rent.",
  },
  {
    q: "Does my BC landlord have to try to re-rent if I leave early?",
    a: "Yes. The landlord has a duty to minimize their loss by making reasonable efforts to re-rent the unit. You're only liable for rent until a new tenant moves in or the term ends, plus reasonable costs — not automatically the whole remaining term.",
  },
  {
    q: "Can my landlord charge a penalty for breaking my lease in BC?",
    a: "No. There's no lawful 'lease-break penalty' beyond your actual rent obligation reduced by the landlord's duty to re-rent, plus genuine costs like advertising. A flat penalty clause isn't enforceable.",
  },
  {
    q: "Can I end my lease early because of domestic violence in BC?",
    a: "Yes. BC lets tenants end a tenancy early to escape family or household violence, or to move into long-term care, with the required notice and confirmation. Ask a tenant advocate or the RTB about the current form and process.",
  },
];

export default function BcBreakingALeasePage() {
  return (
    <>
      <ArticleSchema
        headline={"Breaking a Lease in BC: How to End a Fixed-Term Tenancy Early"}
        description={"You generally can't just give notice to leave a fixed-term lease early in BC — but you have real options: assignment, subletting, mutual agreement, and the landlord's duty to limit your losses. Plus the special exits the law allows."}
        url="https://leaseplain.com/blog/bc-breaking-a-lease"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["breaking a lease bc", "end fixed term lease early bc", "get out of a lease bc"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Breaking a Lease in BC", href: "https://leaseplain.com/blog/bc-breaking-a-lease" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/bc-breaking-a-lease",
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
                <span>Breaking a Lease in BC</span>
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
                Breaking a Lease in BC: How to End a Fixed Term Early
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                A job across the province, a breakup, a rent you can no longer afford — sometimes you have to leave mid-lease. In BC you can&apos;t simply walk away from a fixed term, but the law limits what you owe and gives you several legal exits.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">First: A Fixed Term Binds You</h2>
                  <p className="text-slate-700 leading-relaxed">A fixed-term lease commits you until the end date. Giving one month&apos;s notice ends a <strong>month-to-month</strong> tenancy, not a fixed term. So the real question is which legal exit fits your situation — and how to limit what you owe if you must go.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Assign or Sublet (With Consent)</h2>
                  <p className="text-slate-700 leading-relaxed">You can <strong>assign</strong> the tenancy (transfer it entirely to someone new) or <strong>sublet</strong> (someone lives there while you remain the tenant). The landlord&apos;s <strong>consent can&apos;t be unreasonably withheld</strong>, and for tenancies of six months or more they generally can&apos;t refuse a reasonable assignment or sublet. They can only charge their actual reasonable costs — no fee for saying yes.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Mutual Agreement to End</h2>
                  <p className="text-slate-700 leading-relaxed">If your landlord is willing, you can both sign a <strong>mutual agreement to end the tenancy</strong>. This is voluntary — you can&apos;t be forced into it — but a landlord with a waiting list or a higher-paying tenant may happily agree. Get the end date in writing.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Landlord&apos;s Duty to Minimize Loss</h2>
                  <p className="text-slate-700 leading-relaxed">If you leave anyway, the landlord <strong>can&apos;t leave the unit empty and bill you for the whole remaining term</strong>. They must take reasonable steps to re-rent. You&apos;re only responsible for lost rent until a new tenant moves in (or the term ends), plus reasonable costs. Give written notice, keep records, and document their re-rental efforts.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Special Situations</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">Some circumstances let you end a tenancy early regardless of the term:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Fleeing family or household violence, or needing long-term care:</strong> BC allows early termination with notice and supporting confirmation.</li>
                    <li><strong>The landlord breaches a material term</strong> and doesn&apos;t fix it after written notice: you may be able to end the tenancy.</li>
                    <li><strong>Month-to-month already?</strong> You&apos;re not breaking anything — just give one month&apos;s proper notice.</li>
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
                    Estimate your exposure before you decide with our free lease-break tool.
                  </p>
                  <Link href="/tools/lease-break-calculator" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Lease Break Estimator
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "How Much Notice to End a Tenancy in BC", href: "/blog/bc-notice-to-end-tenancy" },
                      { label: "BC Security Deposit Rules", href: "/blog/bc-security-deposit-rules" },
                      { label: "BC Rent Increase Rules", href: "/blog/bc-rent-increase-rules" },
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
