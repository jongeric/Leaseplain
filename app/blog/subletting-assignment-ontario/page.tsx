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
  title: "Subletting and Assigning Your Lease in Ontario: A Tenant's Guide | LeasePlain",
  description:
    "Can you sublet your apartment in Ontario? Learn the difference between a sublet and an assignment, when a landlord can and can't refuse consent, and why they cannot charge you a fee to say yes.",
  alternates: { canonical: "https://leaseplain.com/blog/subletting-assignment-ontario" },
  openGraph: {
    title: "Subletting and Assigning Your Lease in Ontario: A Tenant's Guide | LeasePlain",
    description:
      "Sublet vs. assignment in Ontario, when a landlord can refuse consent, and why they can't charge a fee to approve it.",
    url: "https://leaseplain.com/blog/subletting-assignment-ontario",
    type: "article",
    publishedTime: "2026-08-03T00:00:00Z",
    modifiedTime: "2026-08-03T00:00:00Z",
  },
  keywords: [
    "subletting ontario",
    "assign lease ontario",
    "can i sublet my apartment ontario",
    "landlord refuse sublet ontario",
    "RTA sublet assignment",
  ],
};

const faqItems = [
  {
    q: "Can I sublet my apartment in Ontario?",
    a: "Yes, but you need your landlord's consent. Under the Residential Tenancies Act a landlord cannot arbitrarily or unreasonably withhold consent to a sublet. If they refuse unreasonably or don't respond, you can apply to the Landlord and Tenant Board.",
  },
  {
    q: "What is the difference between a sublet and an assignment?",
    a: "In a sublet, you let someone live in the unit for a period and then you return before the end of your tenancy — you stay legally responsible. In an assignment, you transfer your entire tenancy to a new tenant and move out permanently, ending your own responsibility (once the landlord consents).",
  },
  {
    q: "Can my landlord charge me a fee to approve a sublet or assignment?",
    a: "No. A landlord can only recover their actual, reasonable out-of-pocket expenses connected to giving consent (for example, a credit check). They cannot charge a premium, a flat 'sublet fee,' or extra rent as the price of saying yes.",
  },
  {
    q: "What happens if my landlord unreasonably refuses?",
    a: "If the landlord refuses consent unreasonably, or does not respond within seven days of your request, you have options: you can apply to the LTB for an order allowing the sublet or assignment, or give notice to end your own tenancy on 30 days' notice.",
  },
  {
    q: "Can I charge my subtenant more than my own rent?",
    a: "No. Charging a subtenant more than the lawful rent you pay is prohibited in Ontario. A subtenant who was overcharged can apply to the LTB to recover the difference.",
  },
];

export default function SublettingAssignmentOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline="Subletting and Assigning Your Lease in Ontario: A Tenant's Guide"
        description="Can you sublet your apartment in Ontario? Learn the difference between a sublet and an assignment, when a landlord can and can't refuse consent, and why they cannot charge you a fee to say yes."
        url="https://leaseplain.com/blog/subletting-assignment-ontario"
        datePublished="2026-08-03"
        dateModified="2026-08-03"
        keywords={[
          "subletting ontario",
          "assign lease ontario",
          "can i sublet my apartment ontario",
          "landlord refuse sublet ontario",
          "RTA sublet assignment",
        ]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Subletting and Assigning Your Lease in Ontario", href: "https://leaseplain.com/blog/subletting-assignment-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/subletting-assignment-ontario",
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
                <span>Subletting and Assigning Your Lease in Ontario</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Ontario
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  August 3, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  7 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Subletting and Assigning Your Lease in Ontario: A Tenant&apos;s Guide
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Need to leave before your lease ends, or fill your unit while you&apos;re away? Ontario
                gives tenants a real right to sublet or assign — and limits what a landlord can do to
                block it. Here&apos;s how the two options differ and how to do each properly.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="August 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Sublet vs. Assignment: The Key Difference</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    These two words get used interchangeably, but they are legally very different — and
                    picking the right one matters.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>
                      <strong>Sublet:</strong> someone lives in your unit for a defined period, and{" "}
                      <em>you come back</em> before your tenancy ends. You remain the tenant and stay
                      responsible to the landlord for rent and damage. Good for a summer away or a
                      temporary work placement.
                    </li>
                    <li>
                      <strong>Assignment:</strong> you transfer your <em>entire</em> tenancy to a new
                      person and move out for good. Once the landlord consents, the new tenant steps into
                      your shoes and your responsibility ends. Good for leaving permanently before a
                      fixed term is up.
                    </li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    If you simply want out of a fixed-term lease early, assignment is often the cleanest
                    route — see our guide on{" "}
                    <Link href="/blog/month-to-month-vs-fixed-term-lease" className="text-blue-600 hover:underline">
                      fixed-term vs month-to-month tenancies
                    </Link>{" "}
                    for how early exits work.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">You Need Consent — But It Can&apos;t Be Withheld Unreasonably</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    For either option, you must get the landlord&apos;s consent. The crucial protection is
                    that the landlord <strong>cannot arbitrarily or unreasonably withhold</strong> it. A
                    landlord who simply doesn&apos;t feel like it, or who wants to end your below-market
                    rent, is not refusing reasonably.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Make your request in writing and keep a copy. For an assignment, you can ask in two
                    ways: to assign generally, or to assign to a specific person you&apos;ve found. That
                    distinction affects your timelines and rights if the landlord says no.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">No Fees — Only Actual Costs</h2>
                  <p className="text-slate-700 leading-relaxed">
                    A landlord cannot charge you for the privilege of consenting. The only thing they can
                    recover is their <strong>actual, reasonable out-of-pocket expenses</strong> tied to
                    the request — for example, the cost of a credit check on your proposed subtenant.
                    A flat &quot;sublet fee,&quot; a rent bump, or any premium as the price of a yes is not
                    permitted.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If the Landlord Refuses or Goes Silent</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    You are not stuck if the landlord unreasonably refuses, or fails to respond within
                    <strong> seven days</strong> of your request. Your options include:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>
                      <strong>Apply to the LTB</strong> for an order authorizing the sublet or assignment,
                      or determining that consent was unreasonably withheld.
                    </li>
                    <li>
                      <strong>Give notice to end your tenancy</strong> on 30 days&apos; notice (a right
                      that opens up when you&apos;ve asked to assign and been refused or ignored).
                    </li>
                  </ol>
                  <p className="text-slate-700 leading-relaxed">
                    Which path is best depends on your goal — staying vs. leaving — so read the LTB&apos;s
                    guidance or get tenant-advice support before you file.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Don&apos;t Overcharge Your Subtenant</h2>
                  <p className="text-slate-700 leading-relaxed">
                    A tempting trap in a hot rental market: charging your subtenant more than you pay.
                    In Ontario that&apos;s illegal. You cannot charge a subtenant more than the lawful rent
                    for the unit, and an overcharged subtenant can apply to the LTB to get the excess
                    back — plus you remain on the hook to your landlord the whole time. Keep it at cost.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Check your lease before you sublet</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your lease and we&apos;ll explain the sublet and assignment terms — and flag
                    any clause that tries to take away rights the RTA gives you.
                  </p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Check My Lease
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Month-to-Month vs Fixed-Term Lease", href: "/blog/month-to-month-vs-fixed-term-lease" },
                      { label: "How Much Notice to Give When Moving Out", href: "/blog/notice-to-move-out-ontario" },
                      { label: "Ontario Standard Lease Explained", href: "/blog/ontario-standard-lease-explained" },
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
