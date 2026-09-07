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
  title: "How to Break a Lease in Ontario (Legally) | LeasePlain",
  description:
    "You generally can't end a fixed-term lease early just by giving notice in Ontario. Here are the legal ways to break a lease — assignment, subletting, an N11 agreement, and the landlord's duty to mitigate.",
  alternates: { canonical: "https://leaseplain.com/blog/how-to-break-a-lease-ontario" },
  openGraph: {
    title: "How to Break a Lease in Ontario (Legally) | LeasePlain",
    description:
      "The legal ways to get out of a fixed-term lease early in Ontario — assignment, sublet, N11, and the duty to mitigate.",
    url: "https://leaseplain.com/blog/how-to-break-a-lease-ontario",
    type: "article",
    publishedTime: "2026-09-07T00:00:00Z",
    modifiedTime: "2026-09-07T00:00:00Z",
  },
  keywords: [
    "how to break a lease ontario",
    "breaking a lease early ontario",
    "get out of a lease ontario",
    "end fixed term lease early ontario",
    "duty to mitigate ontario",
  ],
};

const faqItems = [
  {
    q: "Can I break a fixed-term lease early in Ontario?",
    a: "Not simply by giving notice. A fixed-term lease binds you until the end of the term. Your legal options are to assign the tenancy, sublet the unit, or reach a mutual agreement to end early (Form N11). If you leave anyway, your landlord must make reasonable efforts to re-rent, and you're only liable until it's re-rented or the term ends.",
  },
  {
    q: "What is the landlord's duty to mitigate?",
    a: "If you break your lease and move out, the landlord can't just leave the unit empty and charge you for the whole remaining term. They have a legal duty to make reasonable efforts to re-rent it. Once a new tenant moves in, your responsibility for rent ends.",
  },
  {
    q: "Will breaking a lease hurt my credit?",
    a: "Breaking a lease itself isn't reported to credit bureaus. But if your landlord obtains an LTB order for money you owe and you don't pay, that debt could eventually affect your credit if it goes to collections. Communicating and using assignment or subletting avoids this.",
  },
  {
    q: "Can my landlord charge a penalty for breaking my lease?",
    a: "No. Ontario doesn't allow lease-break penalties or fees beyond your actual rent obligation (reduced by the duty to mitigate). A clause requiring two or three months' rent as a penalty is not enforceable under the Residential Tenancies Act.",
  },
];

export default function HowToBreakALeaseOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline="How to Break a Lease in Ontario (Legally)"
        description="You generally can't end a fixed-term lease early just by giving notice in Ontario. Here are the legal ways to break a lease — assignment, subletting, an N11 agreement, and the landlord's duty to mitigate."
        url="https://leaseplain.com/blog/how-to-break-a-lease-ontario"
        datePublished="2026-09-07"
        dateModified="2026-09-07"
        keywords={["how to break a lease ontario", "breaking a lease early ontario", "duty to mitigate ontario", "N11 ontario"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "How to Break a Lease in Ontario", href: "https://leaseplain.com/blog/how-to-break-a-lease-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/how-to-break-a-lease-ontario",
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
                <span>How to Break a Lease in Ontario</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Ontario
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  September 7, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  7 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                How to Break a Lease in Ontario (Legally)
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                A job across the country, a breakup, a place you can no longer afford — life happens
                mid-lease. In Ontario you can&apos;t just give notice and walk away from a fixed term,
                but you have real, legal options that limit what you owe. Here&apos;s how to do it right.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">First: You Can&apos;t Just Give Notice</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    A fixed-term lease (say a one-year lease) binds you for the full term. Giving 60
                    days&apos; notice on an <strong>N9</strong> does <strong>not</strong> let you leave
                    early — that form only ends a month-to-month tenancy or sets a move-out date for the
                    end of your term. So the real question isn&apos;t whether you can serve notice; it&apos;s
                    which of the legal exits below fits your situation.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    The good news: Ontario law limits what you can be charged, and outright lease-break
                    &quot;penalties&quot; are not enforceable.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Option 1: Assign the Tenancy (Cleanest Exit)</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    An <strong>assignment</strong> transfers your entire tenancy to a new tenant and ends
                    your responsibility once the landlord consents. It&apos;s usually the cleanest way out
                    of a fixed term. Your landlord can&apos;t unreasonably refuse, can only charge their
                    actual out-of-pocket costs (like a credit check), and if they refuse unreasonably or
                    don&apos;t respond within seven days, you can give notice to end on 30 days.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    See the full mechanics in our{" "}
                    <Link href="/blog/subletting-assignment-ontario" className="text-blue-600 hover:underline">subletting and assignment guide</Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Option 2: Sublet Until the Term Ends</h2>
                  <p className="text-slate-700 leading-relaxed">
                    A <strong>sublet</strong> puts someone else in the unit for a period while you remain
                    the tenant and plan to return before the term ends. It suits a temporary move, but you
                    stay liable to the landlord, so choose a subtenant carefully. You can&apos;t charge them
                    more than your lawful rent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Option 3: Agree to End Early (Form N11)</h2>
                  <p className="text-slate-700 leading-relaxed">
                    If your landlord is willing, you can both sign a <strong>Form N11 — Agreement to End
                    the Tenancy</strong>. This is voluntary: a landlord can&apos;t force you to sign one, and
                    you shouldn&apos;t sign under pressure. If your landlord already has a waiting list or a
                    higher-paying tenant lined up, they may happily agree. Get the agreed move-out date in
                    writing. See our{" "}
                    <Link href="/ltb-forms/n11" className="text-blue-600 hover:underline">N11 explainer</Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Option 4: Leave and Rely on the Duty to Mitigate</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    If none of the above works and you simply have to go, know this: your landlord{" "}
                    <strong>cannot leave the unit empty and bill you for the whole remaining term</strong>.
                    They have a legal <strong>duty to mitigate</strong> — to make reasonable efforts to
                    re-rent. You&apos;re only on the hook for rent until a new tenant moves in (or the term
                    ends), plus any genuine advertising costs.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Give written notice of your intent, keep records, and if the landlord later claims
                    unpaid rent at the LTB, you can argue they didn&apos;t try to re-rent. This is the
                    riskiest route — get advice first from a{" "}
                    <Link href="/tenant-lawyer" className="text-blue-600 hover:underline">tenant legal clinic or paralegal</Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Special Situations</h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Experiencing violence or abuse?</strong> You can end your tenancy on 28 days&apos; notice using Form N15, even mid-term.</li>
                    <li><strong>Serious unaddressed maintenance?</strong> That&apos;s not an automatic exit, but it may support a T6 application and negotiation.</li>
                    <li><strong>Month-to-month already?</strong> You&apos;re not &quot;breaking&quot; anything — just give 60 days&apos; notice on an N9.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Estimate what leaving early could cost</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Use our free estimator to see your likely exposure if you break your lease in Ontario.
                  </p>
                  <Link href="/tools/lease-break-calculator" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Lease Break Estimator
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Subletting & Assigning Your Lease", href: "/blog/subletting-assignment-ontario" },
                      { label: "How Much Notice to Move Out", href: "/blog/notice-to-move-out-ontario" },
                      { label: "Month-to-Month vs Fixed-Term", href: "/blog/month-to-month-vs-fixed-term-lease" },
                      { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
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
