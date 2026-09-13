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
  title: "Assigning or Subletting Your Lease in Quebec | LeasePlain",
  description:
    "Quebec gives tenants a strong right to assign or sublet — and a landlord can only refuse for a serious reason. How cession de bail differs from subletting, the 15-day rule, and why assignment is often the cleanest exit.",
  alternates: { canonical: "https://leaseplain.com/blog/quebec-lease-assignment-sublet" },
  openGraph: {
    title: "Assigning or Subletting Your Lease in Quebec | LeasePlain",
    description:
      "Cession de bail vs subletting in Quebec: your rights, the 15-day landlord-response rule, and which to choose.",
    url: "https://leaseplain.com/blog/quebec-lease-assignment-sublet",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["cession de bail", "assign lease quebec", "sublet quebec", "lease assignment quebec rights", "subletting quebec rules"],
};

const faqItems = [
  {
    q: "Can I sublet or assign my lease in Quebec?",
    a: "Yes. Quebec tenants have a strong right to assign (cession de bail) or sublet. You notify the landlord with the proposed tenant's details, and they have 15 days to respond. They can only refuse for a serious reason.",
  },
  {
    q: "What happens if my Quebec landlord doesn't respond in 15 days?",
    a: "If the landlord doesn't respond to your assignment or sublet request within 15 days, they are deemed to have consented. If they refuse, they must give a serious reason, and the TAL can decide if it's valid.",
  },
  {
    q: "Does assigning my lease release me in Quebec?",
    a: "Yes. An assignment (cession de bail) transfers the lease entirely to the new tenant and releases you from future obligations — unlike a sublet, where you remain responsible to the landlord.",
  },
  {
    q: "Can my landlord charge a fee to assign or sublet in Quebec?",
    a: "No. The landlord can only recover reasonable expenses directly related to the assignment or sublet, such as a credit check. They can't charge a fee or demand higher rent from you for consenting.",
  },
];

export default function QuebecLeaseAssignmentSubletPage() {
  return (
    <>
      <ArticleSchema
        headline={"Assigning or Subletting Your Lease in Quebec (Cession de Bail)"}
        description={"Quebec gives tenants a strong right to assign or sublet — and a landlord can only refuse for a serious reason. How cession de bail differs from subletting, the 15-day rule, and why assignment is often the cleanest exit."}
        url="https://leaseplain.com/blog/quebec-lease-assignment-sublet"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["cession de bail", "assign lease quebec", "sublet quebec"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Assignment & Sublet in Quebec", href: "https://leaseplain.com/blog/quebec-lease-assignment-sublet" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/quebec-lease-assignment-sublet",
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
                <span>Assignment &amp; Sublet in Quebec</span>
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
                Assigning or Subletting Your Lease in Quebec
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Need to leave your Quebec apartment before the lease ends? You have a strong right to hand it off — and your landlord can&apos;t unreasonably say no. Here&apos;s how assignment and subletting work.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Assignment vs Subletting</h2>
                  <p className="text-slate-700 leading-relaxed mb-3"><strong>Assignment (cession de bail)</strong> transfers your entire lease to a new tenant, who takes over your rights and obligations — and, importantly, <strong>releases you</strong> from future obligations under the lease. <strong>Subletting</strong> puts someone in the unit temporarily while <strong>you remain the tenant</strong> and stay responsible to the landlord.</p>
                  <p className="text-slate-700 leading-relaxed">For a permanent move, <strong>assignment is usually the better choice</strong> because it gets you off the hook.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Landlord Can Only Refuse for a Serious Reason</h2>
                  <p className="text-slate-700 leading-relaxed">You must notify the landlord of your intention to assign or sublet, and the name and contact of the proposed new tenant. The landlord then has <strong>15 days to respond</strong>. They can only refuse for a <strong>serious reason</strong> (for example, a genuine concern about the candidate) — not just because they&apos;d prefer a new lease at higher rent.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Silence Means Consent</h2>
                  <p className="text-slate-700 leading-relaxed">If the landlord <strong>doesn&apos;t respond within 15 days</strong>, they&apos;re deemed to have <strong>consented</strong>. If they refuse, they must give their reason — and if you think it isn&apos;t serious, the <strong>TAL</strong> can decide.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What It Can Cost You</h2>
                  <p className="text-slate-700 leading-relaxed">The landlord can only charge you their <strong>reasonable expenses</strong> related to the assignment or sublet (such as a credit check) — they can&apos;t demand a fee or a higher rent from you for agreeing. In an assignment, the new tenant simply takes over your existing rent.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Leaving your lease?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    See all your options for ending a Quebec lease the right way.
                  </p>
                  <Link href="/blog/quebec-ending-your-lease" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Ending a Lease in Quebec
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
