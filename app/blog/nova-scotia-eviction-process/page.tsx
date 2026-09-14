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
  title: "The Nova Scotia Eviction Process: Notices & Your Rights | LeasePlain",
  description:
    "An eviction notice in Nova Scotia isn't an automatic removal. The notice types, the 15-day pay-and-stay window for unpaid rent, and how to dispute through the Residential Tenancies Program.",
  alternates: { canonical: "https://leaseplain.com/blog/nova-scotia-eviction-process" },
  openGraph: {
    title: "The Nova Scotia Eviction Process: Notices & Your Rights | LeasePlain",
    description:
      "Nova Scotia eviction notice types, the Form D 15-day window, and the Residential Tenancies Program process.",
    url: "https://leaseplain.com/blog/nova-scotia-eviction-process",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["nova scotia eviction process", "form d nova scotia", "how to fight eviction nova scotia", "residential tenancies program nova scotia", "eviction notice ns"],
};

const faqItems = [
  {
    q: "Can my landlord evict me without the Residential Tenancies Program in Nova Scotia?",
    a: "No. A landlord can serve a notice to quit, but ending a tenancy over your objection goes through the Residential Tenancies Program, with appeals to Small Claims Court. Locking you out is illegal.",
  },
  {
    q: "How long is an eviction notice for unpaid rent in Nova Scotia?",
    a: "Fifteen days (Form D). You can usually stop the eviction by paying the full overdue amount within that window.",
  },
  {
    q: "How do I fight an eviction in Nova Scotia?",
    a: "Apply to the Residential Tenancies Program before the deadline, gather your lease and payment records, and present your evidence. For unpaid rent, paying what's owed usually cancels the notice.",
  },
  {
    q: "Where can I get free tenant help in Nova Scotia?",
    a: "The Residential Tenancies Program provides information, and Dalhousie Legal Aid Service and Nova Scotia Legal Aid can help eligible tenants.",
  },
];

export default function NovaScotiaEvictionProcessPage() {
  return (
    <>
      <ArticleSchema
        headline={"The Nova Scotia Eviction Process: Notices, the Program & Your Rights"}
        description={"An eviction notice in Nova Scotia isn't an automatic removal. The notice types, the 15-day pay-and-stay window for unpaid rent, and how to dispute through the Residential Tenancies Program."}
        url="https://leaseplain.com/blog/nova-scotia-eviction-process"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["nova scotia eviction process", "form d nova scotia", "how to fight eviction nova scotia"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Nova Scotia Eviction Process", href: "https://leaseplain.com/blog/nova-scotia-eviction-process" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/nova-scotia-eviction-process",
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
                <span>Nova Scotia Eviction Process</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Nova Scotia
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
                The Nova Scotia Eviction Process: Notices &amp;amp; Your Rights
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                A notice to quit in Nova Scotia is the start of a process, not the end of your tenancy. Knowing the notice types and your right to dispute — or simply pay and stay — can change the outcome.
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
                  <p className="text-slate-700 leading-relaxed">In Nova Scotia, a landlord can serve a notice to quit, but they <strong>can&apos;t remove you themselves</strong>. Disputes and orders go through the <strong>Residential Tenancies Program</strong> (Director of Residential Tenancies), with appeals to Small Claims Court. Only that process — not the landlord — can end your tenancy over your objection.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Main Notice Types</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">What you&apos;re facing depends on the notice:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Unpaid rent — Form D:</strong> a <strong>15-day notice</strong>; you can usually stop it by paying the overdue amount within the window.</li>
                    <li><strong>Other cause</strong> (damage, breach): specific notice periods apply.</li>
                    <li><strong>Renovation, owner use, or sale:</strong> longer notice periods, using the correct forms.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Dispute</h2>
                  <p className="text-slate-700 leading-relaxed">If you disagree with a notice, apply to the <strong>Residential Tenancies Program</strong> before the deadline — don&apos;t just move out. For unpaid rent, paying what you owe usually cancels the notice. The Director reviews the case and both sides present evidence.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Build Your Evidence</h2>
                  <p className="text-slate-700 leading-relaxed">Keep the notice, your rent payment records, texts and emails, photos, and any witnesses. Documentation is what decides a disputed eviction.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Where to Get Help</h2>
                  <p className="text-slate-700 leading-relaxed">Nova Scotia tenants can get help from the Residential Tenancies Program, Dalhousie Legal Aid Service, and Nova Scotia Legal Aid. Get advice early if the stakes are high.</p>
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
                      { label: "Notice to End a Tenancy in Nova Scotia", href: "/blog/nova-scotia-notice-to-end-tenancy" },
                      { label: "Nova Scotia Rent Increase Rules", href: "/blog/nova-scotia-rent-increase-rules" },
                      { label: "Nova Scotia Security Deposit Rules", href: "/blog/nova-scotia-security-deposit-rules" },
                      { label: "Nova Scotia Tenant Rights", href: "/canada/nova-scotia" },
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
