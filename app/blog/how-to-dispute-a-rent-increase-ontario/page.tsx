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
  title: "How to Dispute a Rent Increase in Ontario | LeasePlain",
  description:
    "Think your Ontario rent increase is too high or invalid? When an increase is illegal, how to respond to an N1 or an above-guideline (AGI) application, and how to recover money you were wrongly charged.",
  alternates: { canonical: "https://leaseplain.com/blog/how-to-dispute-a-rent-increase-ontario" },
  openGraph: {
    title: "How to Dispute a Rent Increase in Ontario | LeasePlain",
    description:
      "When an Ontario rent increase is invalid, how to respond, and how to recover an illegal charge.",
    url: "https://leaseplain.com/blog/how-to-dispute-a-rent-increase-ontario",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["how to dispute rent increase ontario", "illegal rent increase ontario", "fight rent increase ontario", "n1 rent increase ontario", "above guideline increase dispute ontario"],
};

const faqItems = [
  {
    q: "When is a rent increase illegal in Ontario?",
    a: "An increase is invalid if it lacks proper written notice (Form N1) at least 90 days ahead, happens more than once in 12 months, or exceeds the annual guideline for a rent-controlled unit without LTB approval. Any of these makes the increase ineffective.",
  },
  {
    q: "How do I dispute a rent increase in Ontario?",
    a: "Check the notice, timing, and amount first. Put your objection in writing, keep paying your lawful rent, and gather your lease and payment records. For an above-guideline increase, participate in the LTB hearing; if you already overpaid an invalid increase, file a T1 to recover it.",
  },
  {
    q: "Do I have to pay an above-guideline increase in Ontario?",
    a: "Not unless the Landlord and Tenant Board approves it. A landlord must apply to the LTB for an above-guideline increase, and you can dispute it. Don't pay the portion above the guideline until there's an order.",
  },
  {
    q: "Can I get back rent I overpaid on an illegal increase?",
    a: "Yes. You can file a T1 application at the LTB to recover money collected through an illegal rent increase, subject to time limits — so it's best to act promptly rather than letting it continue.",
  },
];

export default function HowToDisputeARentIncreaseOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline={"How to Dispute an Illegal or Above-Guideline Rent Increase in Ontario"}
        description={"Think your Ontario rent increase is too high or invalid? When an increase is illegal, how to respond to an N1 or an above-guideline (AGI) application, and how to recover money you were wrongly charged."}
        url="https://leaseplain.com/blog/how-to-dispute-a-rent-increase-ontario"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["how to dispute rent increase ontario", "illegal rent increase ontario", "fight rent increase ontario"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Dispute a Rent Increase in Ontario", href: "https://leaseplain.com/blog/how-to-dispute-a-rent-increase-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/how-to-dispute-a-rent-increase-ontario",
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
                <span>Dispute a Rent Increase in Ontario</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Ontario
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
                How to Dispute a Rent Increase in Ontario
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                A rent increase notice isn&apos;t the final word. In Ontario, plenty of increases are invalid — wrong notice, wrong timing, or above what&apos;s allowed — and you have clear ways to push back without risking your tenancy.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">First, Check If It&apos;s Even Valid</h2>
                  <p className="text-slate-700 leading-relaxed">Many increases fail on the basics. An increase is <strong>not valid</strong> unless it uses proper <strong>written notice (Form N1)</strong> given at least <strong>90 days</strong> ahead, comes no more than <strong>once every 12 months</strong>, and (for rent-controlled units) stays at or below the <strong>annual guideline</strong>. If any of those is off, the increase doesn&apos;t take effect.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Is Your Unit Exempt?</h2>
                  <p className="text-slate-700 leading-relaxed">Units first occupied after <strong>November 15, 2018</strong> are exempt from the guideline, so there&apos;s no percentage cap — but the 90-day notice and once-a-year rules still apply. Confirm your unit&apos;s status before assuming an increase is illegal. Our <Link href="/tools/agi-checker" className="text-blue-600 hover:underline">AGI checker</Link> walks through this in seconds.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Above-Guideline Increases (AGIs)</h2>
                  <p className="text-slate-700 leading-relaxed">If the increase is above the guideline, the landlord <strong>must apply to the LTB</strong> for an above-guideline increase order (usually for major capital work or big cost increases). You&apos;ll get notice and the right to participate in the hearing. <strong>Don&apos;t pay the excess</strong> unless and until the LTB approves it.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Respond</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">A calm, documented response wins:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Put your objection in writing</strong> and keep a copy — our <Link href="/letters/rent-increase-dispute-letter" className="text-blue-600 hover:underline">dispute letter</Link> gives you a template.</li>
                    <li><strong>Keep paying your lawful rent</strong> (the old amount, or the valid guideline amount) so you&apos;re never in arrears.</li>
                    <li><strong>Gather evidence:</strong> the notice, your lease, and payment history.</li>
                    <li>For an AGI, <strong>attend the hearing</strong> and use Tenant Duty Counsel.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Recovering an Illegal Increase</h2>
                  <p className="text-slate-700 leading-relaxed">If you already paid an increase that turns out to be invalid, you can apply to the LTB (a <strong>T1</strong>) to recover the overpayment. There are time limits, so act rather than waiting. An illegal increase doesn&apos;t become legal just because you paid it for a while.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Is your increase legal?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Check any proposed increase in seconds with our free AGI checker.
                  </p>
                  <Link href="/tools/agi-checker" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    AGI Checker
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Above-Guideline Rent Increases", href: "/blog/above-guideline-rent-increase-ontario" },
                      { label: "2026 Rent Increase Guideline", href: "/blog/ontario-rent-increase-guideline-2026" },
                      { label: "The Post-2018 Exemption", href: "/blog/post-2018-rent-control-exemption-ontario" },
                      { label: "Rent Increase Dispute Letter", href: "/letters/rent-increase-dispute-letter" },
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
