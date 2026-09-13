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
  title: "The Manitoba Eviction Process: Notices & Your Rights | LeasePlain",
  description:
    "An eviction notice in Manitoba isn't an automatic removal. The notice types, how to dispute one through the Residential Tenancies Branch, and why only the proper process — not the landlord — can force you out.",
  alternates: { canonical: "https://leaseplain.com/blog/manitoba-eviction-process" },
  openGraph: {
    title: "The Manitoba Eviction Process: Notices & Your Rights | LeasePlain",
    description:
      "Manitoba eviction notice types, the RTB and Commission process, and how to dispute a notice.",
    url: "https://leaseplain.com/blog/manitoba-eviction-process",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["manitoba eviction process", "eviction notice manitoba", "how to fight eviction manitoba", "residential tenancies branch manitoba", "5 day notice manitoba"],
};

const faqItems = [
  {
    q: "Can my landlord evict me without the Branch in Manitoba?",
    a: "No. A landlord can serve a notice, but ending a tenancy over your objection goes through the Residential Tenancies Branch (and the Residential Tenancies Commission on appeal). Only an order obtained that way can lead to removal — locking you out is illegal.",
  },
  {
    q: "How long is an eviction notice for unpaid rent in Manitoba?",
    a: "About five days. You can usually stop the eviction by paying the full amount owed within the notice period. If you can't pay, contact the Residential Tenancies Branch right away to explain your situation.",
  },
  {
    q: "How do I fight an eviction in Manitoba?",
    a: "Contact the Residential Tenancies Branch as soon as you get the notice — don't move out or ignore it. Gather your lease, payment records, and any evidence. For unpaid rent, paying what's owed usually cancels the notice.",
  },
  {
    q: "How much notice for owner-occupation in Manitoba?",
    a: "At least three months' written notice, stating the reason. You can dispute it through the Residential Tenancies Branch if you believe it isn't genuine.",
  },
];

export default function ManitobaEvictionProcessPage() {
  return (
    <>
      <ArticleSchema
        headline={"The Manitoba Eviction Process: Notices, the Branch & Your Rights"}
        description={"An eviction notice in Manitoba isn't an automatic removal. The notice types, how to dispute one through the Residential Tenancies Branch, and why only the proper process — not the landlord — can force you out."}
        url="https://leaseplain.com/blog/manitoba-eviction-process"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["manitoba eviction process", "eviction notice manitoba", "how to fight eviction manitoba"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Manitoba Eviction Process", href: "https://leaseplain.com/blog/manitoba-eviction-process" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/manitoba-eviction-process",
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
                <span>Manitoba Eviction Process</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Manitoba
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
                The Manitoba Eviction Process: Notices &amp;amp; Your Rights
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Getting an eviction notice in Manitoba is stressful, but it&apos;s the start of a process — not the end of your tenancy. Knowing the notice types and your right to dispute can change the outcome.
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
                  <p className="text-slate-700 leading-relaxed">In Manitoba, a landlord can serve a notice, but they <strong>can&apos;t remove you themselves</strong>. Ending a tenancy over your objection runs through the <strong>Residential Tenancies Branch (RTB)</strong> and, on appeal, the <strong>Residential Tenancies Commission</strong> — and only an order obtained that way can lead to actual removal. Changing the locks or removing your belongings without an order is illegal.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Main Notice Types</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">What you&apos;re facing depends on the notice:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Unpaid rent:</strong> a short notice (about <strong>5 days</strong>) — you can usually stop it by paying what you owe.</li>
                    <li><strong>Breach of the tenancy agreement:</strong> at least one rental payment period of notice.</li>
                    <li><strong>Owner-occupation:</strong> at least three months&apos; notice.</li>
                    <li><strong>Serious cases</strong> (safety, major damage) can move faster.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Dispute</h2>
                  <p className="text-slate-700 leading-relaxed">If you disagree with a notice, contact the <strong>Residential Tenancies Branch</strong> as soon as possible — don&apos;t wait or just move out. For unpaid rent, paying what&apos;s owed usually cancels the notice. Otherwise, the Branch reviews the case and both sides present evidence.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Build Your Evidence</h2>
                  <p className="text-slate-700 leading-relaxed">Keep the notice, your rent payment records, texts and emails, photos, and any witnesses. If a landlord claims a breach you dispute, or an owner-occupation reason you doubt, your documentation is what wins.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Where to Get Help</h2>
                  <p className="text-slate-700 leading-relaxed">Manitoba tenants can get information and help from the <strong>Residential Tenancies Branch</strong> itself, and from tenant advocacy organizations in Winnipeg and across the province. If the stakes are high, get advice before your hearing.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Is your notice valid?</h3>
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
                      { label: "Notice to End a Tenancy in Manitoba", href: "/blog/manitoba-notice-to-end-tenancy" },
                      { label: "Manitoba Rent Increase Rules", href: "/blog/manitoba-rent-increase-rules" },
                      { label: "Manitoba Security Deposit Rules", href: "/blog/manitoba-security-deposit-rules" },
                      { label: "Manitoba Tenant Rights", href: "/canada/manitoba" },
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
