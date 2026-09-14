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
  title: "The Newfoundland Eviction Process: Notices & Your Rights | LeasePlain",
  description:
    "An eviction notice in Newfoundland and Labrador isn't an automatic removal. The notice types, the pay-and-stay window for unpaid rent, and how Residential Tenancies (Service NL) decides disputes.",
  alternates: { canonical: "https://leaseplain.com/blog/newfoundland-eviction-process" },
  openGraph: {
    title: "The Newfoundland Eviction Process: Notices & Your Rights | LeasePlain",
    description:
      "Newfoundland eviction notice types, pay windows, and the Residential Tenancies process.",
    url: "https://leaseplain.com/blog/newfoundland-eviction-process",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["newfoundland eviction process", "eviction notice newfoundland", "how to fight eviction newfoundland", "residential tenancies newfoundland", "eviction nl"],
};

const faqItems = [
  {
    q: "Can my landlord evict me without Residential Tenancies in Newfoundland?",
    a: "No. A landlord can serve a notice, but removing you over your objection goes through Residential Tenancies (Service NL). Locking you out is illegal.",
  },
  {
    q: "How long is an eviction notice for unpaid rent in Newfoundland?",
    a: "Once rent is about 5 days late, the landlord can serve a 10-day notice to vacate. Paying what you owe usually stops the eviction.",
  },
  {
    q: "How do I fight an eviction in Newfoundland?",
    a: "Respond before the deadline and make your case to Residential Tenancies, with your lease, payment records, and evidence. For unpaid rent, paying the arrears usually stops it.",
  },
  {
    q: "Who runs residential tenancies in Newfoundland?",
    a: "Residential Tenancies, administered through Service NL (Digital Government and Service NL).",
  },
];

export default function NewfoundlandEvictionProcessPage() {
  return (
    <>
      <ArticleSchema
        headline={"The Newfoundland & Labrador Eviction Process: Notices & Your Rights"}
        description={"An eviction notice in Newfoundland and Labrador isn't an automatic removal. The notice types, the pay-and-stay window for unpaid rent, and how Residential Tenancies (Service NL) decides disputes."}
        url="https://leaseplain.com/blog/newfoundland-eviction-process"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["newfoundland eviction process", "eviction notice newfoundland", "how to fight eviction newfoundland"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Newfoundland Eviction Process", href: "https://leaseplain.com/blog/newfoundland-eviction-process" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/newfoundland-eviction-process",
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
                <span>Newfoundland Eviction Process</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Newfoundland & Labrador
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
                The Newfoundland Eviction Process: Notices &amp;amp; Your Rights
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                An eviction notice in Newfoundland and Labrador is the start of a process, not the end of your tenancy. Knowing the notice types and your right to pay or dispute can change the outcome.
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
                  <p className="text-slate-700 leading-relaxed">In Newfoundland and Labrador, a landlord can serve a notice, but they <strong>can&apos;t remove you themselves</strong>. <strong>Residential Tenancies</strong> (Service NL) decides disputes and issues orders. Only that process — not the landlord — can end your tenancy over your objection.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Main Notice Types</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">What you&apos;re facing depends on the notice:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Unpaid rent:</strong> once rent is about <strong>5 days</strong> late, the landlord can serve a <strong>10-day</strong> notice to vacate; paying what you owe usually stops it.</li>
                    <li><strong>Other cause</strong> (breach, damage): set notice periods apply.</li>
                    <li><strong>No-fault end of a periodic tenancy:</strong> the landlord may give <strong>3 months&apos;</strong> notice.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Respond</h2>
                  <p className="text-slate-700 leading-relaxed">Don&apos;t just move out. For unpaid rent, paying within the window usually stops the eviction. Otherwise you can dispute it through <strong>Residential Tenancies</strong>, which reviews the evidence.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Build Your Evidence</h2>
                  <p className="text-slate-700 leading-relaxed">Keep the notice, your rent records, texts and emails, photos, and any witnesses. Documentation is what decides a disputed eviction.</p>
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
                      { label: "Notice to End a Tenancy in Newfoundland", href: "/blog/newfoundland-notice-to-end-tenancy" },
                      { label: "Newfoundland Rent Increase Rules", href: "/blog/newfoundland-rent-increase-rules" },
                      { label: "Newfoundland Security Deposit Rules", href: "/blog/newfoundland-security-deposit-rules" },
                      { label: "Newfoundland Tenant Rights", href: "/canada/newfoundland-and-labrador" },
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
