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
  title: "The Alberta Eviction Process: Notices, RTDRS & Your Rights | LeasePlain",
  description:
    "An eviction notice in Alberta isn't an automatic removal. The notice types, how to respond, the RTDRS and court process, and why only a bailiff — never the landlord — can actually remove you.",
  alternates: { canonical: "https://leaseplain.com/blog/alberta-eviction-process" },
  openGraph: {
    title: "The Alberta Eviction Process: Notices, RTDRS & Your Rights | LeasePlain",
    description:
      "Alberta eviction notice types, the RTDRS and court process, and how eviction actually works.",
    url: "https://leaseplain.com/blog/alberta-eviction-process",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["alberta eviction process", "eviction notice alberta", "rtdrs alberta", "14 day eviction notice alberta", "how to fight eviction alberta"],
};

const faqItems = [
  {
    q: "Can my landlord evict me without a court order in Alberta?",
    a: "No. A landlord can serve a notice, but can only remove you after obtaining an order from the RTDRS or the Court, carried out by a civil enforcement bailiff. Locking you out or removing your belongings without an order is illegal.",
  },
  {
    q: "What is the RTDRS in Alberta?",
    a: "The Residential Tenancy Dispute Resolution Service is a faster, lower-cost alternative to court for most residential tenancy disputes in Alberta, including many evictions and deposit claims. Both sides present evidence at a hearing and receive a binding order.",
  },
  {
    q: "Can I stop an eviction for unpaid rent in Alberta?",
    a: "Often, yes. A 14-day notice for unpaid rent can usually be cancelled by paying the overdue amount before the termination date. Keep proof of payment. If you can't pay, you can still attend the hearing to explain your circumstances.",
  },
  {
    q: "How long does eviction take in Alberta?",
    a: "It varies. Non-payment matters can move quickly once a notice period passes, while disputed cases go through an RTDRS or court hearing. Only after an order is granted can a bailiff schedule the actual removal.",
  },
];

export default function AlbertaEvictionProcessPage() {
  return (
    <>
      <ArticleSchema
        headline={"The Alberta Eviction Process: Notices, RTDRS & Your Rights"}
        description={"An eviction notice in Alberta isn't an automatic removal. The notice types, how to respond, the RTDRS and court process, and why only a bailiff — never the landlord — can actually remove you."}
        url="https://leaseplain.com/blog/alberta-eviction-process"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["alberta eviction process", "eviction notice alberta", "rtdrs alberta"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Alberta Eviction Process", href: "https://leaseplain.com/blog/alberta-eviction-process" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/alberta-eviction-process",
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
                <span>Alberta Eviction Process</span>
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
                  7 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                The Alberta Eviction Process: Notices, RTDRS &amp; Your Rights
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Getting an eviction notice in Alberta is frightening, but it&apos;s the start of a legal process — not the end of your tenancy. Knowing the notice types and your right to respond can change the outcome.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">A Notice Is Not an Eviction</h2>
                  <p className="text-slate-700 leading-relaxed">In Alberta, a landlord can serve a notice, but they <strong>cannot physically remove you themselves</strong>. Only after obtaining an order — through the <strong>Residential Tenancy Dispute Resolution Service (RTDRS)</strong> or the Court — can a <strong>civil enforcement (bailiff)</strong> carry out an eviction. Changing the locks or removing your belongings without an order is illegal.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Main Notice Types</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">What you&apos;re facing depends on the notice:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>14-day notice for unpaid rent:</strong> you can usually stop it by paying the overdue rent before the termination date.</li>
                    <li><strong>14-day notice for a substantial breach:</strong> for serious or repeated problems; you can dispute it.</li>
                    <li><strong>24-hour notice:</strong> only for the most serious situations, like major damage or a threat to safety.</li>
                    <li><strong>90-day notice:</strong> for landlord reasons such as moving in, major renovation, or a sale to an occupying buyer.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Respond</h2>
                  <p className="text-slate-700 leading-relaxed">If you disagree with a notice, don&apos;t just move out. For unpaid rent, paying what&apos;s owed can cancel the notice. Otherwise, you can make your case at the <strong>RTDRS</strong> (a faster, cheaper alternative to court) or in <strong>Provincial Court</strong>. There&apos;s a modest filing fee, and you can present evidence at a hearing.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Build Your Case</h2>
                  <p className="text-slate-700 leading-relaxed">Gather everything: the notice, your rent payment records, texts and emails, photos, and witness names. If the landlord claims a breach you dispute, or a &apos;landlord&apos;s use&apos; reason you think is pretextual, your documentation is what wins.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Where to Get Help</h2>
                  <p className="text-slate-700 leading-relaxed">Alberta tenants can get support from organizations like the Centre for Public Legal Education Alberta (CPLEA), which publishes plain-language guides, and local legal clinics. If the stakes are high, get advice before your hearing.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Is your eviction notice valid?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Check the notice type and days given against the rules with our free checker.
                  </p>
                  <Link href="/tools/eviction-notice-checker" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Eviction Notice Checker
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "How Much Notice to End a Tenancy in Alberta", href: "/blog/alberta-notice-to-end-tenancy" },
                      { label: "Alberta Rent Increase Rules", href: "/blog/alberta-rent-increase-rules" },
                      { label: "Fighting an Illegal Eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
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
