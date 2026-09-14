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
  title: "The Saskatchewan Eviction Process: Notices & Your Rights | LeasePlain",
  description:
    "An eviction notice in Saskatchewan isn't an automatic removal. The notice types, how to remedy unpaid rent, and how the Office of Residential Tenancies process really works.",
  alternates: { canonical: "https://leaseplain.com/blog/saskatchewan-eviction-process" },
  openGraph: {
    title: "The Saskatchewan Eviction Process: Notices & Your Rights | LeasePlain",
    description:
      "Saskatchewan eviction notice types, the ORT process, and how to dispute a notice.",
    url: "https://leaseplain.com/blog/saskatchewan-eviction-process",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["saskatchewan eviction process", "eviction notice saskatchewan", "how to fight eviction saskatchewan", "office of residential tenancies", "eviction sk"],
};

const faqItems = [
  {
    q: "Can my landlord evict me without the ORT in Saskatchewan?",
    a: "No. A landlord can serve a notice, but removing you over your objection requires an order from the Office of Residential Tenancies, enforced by a sheriff. Lockouts are illegal.",
  },
  {
    q: "How long before a landlord can evict for unpaid rent in Saskatchewan?",
    a: "A landlord can serve notice once rent is 15 days late. You can usually remedy the situation by paying what you owe, and then apply to or attend the ORT if there's a dispute.",
  },
  {
    q: "How do I fight an eviction in Saskatchewan?",
    a: "Respond before the deadline and make your case at the Office of Residential Tenancies, with your lease, payment records, and evidence. For unpaid rent, paying the arrears usually remedies it.",
  },
  {
    q: "Where can I get free tenant help in Saskatchewan?",
    a: "The ORT provides information, and Pro Bono Law Saskatchewan, CLASSIC, and Legal Aid Saskatchewan can help eligible tenants.",
  },
];

export default function SaskatchewanEvictionProcessPage() {
  return (
    <>
      <ArticleSchema
        headline={"The Saskatchewan Eviction Process: Notices, the ORT & Your Rights"}
        description={"An eviction notice in Saskatchewan isn't an automatic removal. The notice types, how to remedy unpaid rent, and how the Office of Residential Tenancies process really works."}
        url="https://leaseplain.com/blog/saskatchewan-eviction-process"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["saskatchewan eviction process", "eviction notice saskatchewan", "how to fight eviction saskatchewan"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Saskatchewan Eviction Process", href: "https://leaseplain.com/blog/saskatchewan-eviction-process" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/saskatchewan-eviction-process",
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
                <span>Saskatchewan Eviction Process</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Saskatchewan
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
                The Saskatchewan Eviction Process: Notices &amp;amp; Your Rights
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Getting an eviction notice in Saskatchewan is the start of a process, not the end of your tenancy. Knowing the notice types and your right to remedy or dispute can change the outcome.
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
                  <p className="text-slate-700 leading-relaxed">In Saskatchewan, a landlord can serve a notice, but they <strong>can&apos;t remove you themselves</strong>. Ending a tenancy over your objection runs through the <strong>Office of Residential Tenancies (ORT)</strong>, and only an order — enforced by a sheriff — can lead to actual removal. Locking you out or removing your belongings is illegal.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Main Notice Types</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">What you&apos;re facing depends on the notice:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Unpaid rent:</strong> once rent is <strong>15 days late</strong>, the landlord can serve notice; you can usually remedy it by paying what you owe.</li>
                    <li><strong>Serious breach or safety issues:</strong> shorter, sometimes immediate, notice.</li>
                    <li><strong>Owner occupancy:</strong> at least two months&apos; notice.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Respond</h2>
                  <p className="text-slate-700 leading-relaxed">If you disagree with a notice, don&apos;t just move out. For unpaid rent, paying what&apos;s owed can remedy it. Otherwise, make your case at the <strong>ORT</strong>, which holds hearings and issues binding orders.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Build Your Evidence</h2>
                  <p className="text-slate-700 leading-relaxed">Gather the notice, your rent records, texts and emails, photos, and any witnesses. If the landlord claims a breach you dispute, or an owner-occupancy reason you doubt, documentation is what wins.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Where to Get Help</h2>
                  <p className="text-slate-700 leading-relaxed">Saskatchewan tenants can get help from the ORT, Pro Bono Law Saskatchewan, CLASSIC (Community Legal Assistance Services for Saskatoon Inner City), and Legal Aid Saskatchewan. Get advice early if the stakes are high.</p>
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
                      { label: "Notice to End a Tenancy in Saskatchewan", href: "/blog/saskatchewan-notice-to-end-tenancy" },
                      { label: "Saskatchewan Rent Increase Rules", href: "/blog/saskatchewan-rent-increase-rules" },
                      { label: "Saskatchewan Security Deposit Rules", href: "/blog/saskatchewan-security-deposit-rules" },
                      { label: "Saskatchewan Tenant Rights", href: "/canada/saskatchewan" },
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
