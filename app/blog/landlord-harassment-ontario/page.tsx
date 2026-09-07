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
  title: "Landlord Harassment in Ontario: What Counts and How to Stop It | LeasePlain",
  description:
    "Repeated unannounced visits, shut-off services, threats, or pressure to leave can all be landlord harassment. What the law counts as harassment in Ontario, how to document it, and how to file a T2 for compensation.",
  alternates: { canonical: "https://leaseplain.com/blog/landlord-harassment-ontario" },
  openGraph: {
    title: "Landlord Harassment in Ontario: What Counts and How to Stop It | LeasePlain",
    description:
      "What counts as landlord harassment in Ontario, how to document it, and how to file a T2 application.",
    url: "https://leaseplain.com/blog/landlord-harassment-ontario",
    type: "article",
    publishedTime: "2026-09-07T00:00:00Z",
    modifiedTime: "2026-09-07T00:00:00Z",
  },
  keywords: [
    "landlord harassment ontario",
    "what counts as landlord harassment ontario",
    "t2 application ontario",
    "landlord shut off utilities ontario",
    "landlord pressuring me to leave ontario",
  ],
};

const faqItems = [
  {
    q: "What counts as landlord harassment in Ontario?",
    a: "Harassment includes any course of conduct that a reasonable person knows is unwelcome — repeated unannounced entries, threats, shutting off vital services like heat or water, aggressive or frequent contact, entering without proper 24-hour written notice, or pressuring you to move out. Substantial interference with your reasonable enjoyment of the unit is a violation of the Residential Tenancies Act.",
  },
  {
    q: "How do I prove landlord harassment?",
    a: "Keep a dated log of every incident, save texts, emails, and voicemails, photograph anything relevant (like a shut-off panel), and get names of witnesses. A clear paper trail is what wins a T2 application at the Landlord and Tenant Board.",
  },
  {
    q: "What can I get if I file a T2?",
    a: "A T2 (Application About Tenant Rights) can result in a rent abatement (partial refund), a fine paid to the LTB, an order requiring the landlord to stop the conduct, and compensation for out-of-pocket costs. In serious cases the Board can order other remedies too.",
  },
  {
    q: "Can my landlord be fined for harassing me?",
    a: "Yes. Harassment and interfering with a tenant's reasonable enjoyment or vital services are offences. The LTB can order administrative fines, and provincial offences prosecution can carry significant penalties for landlords.",
  },
];

export default function LandlordHarassmentOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline="Landlord Harassment in Ontario: What Counts and How to Stop It"
        description="Repeated unannounced visits, shut-off services, threats, or pressure to leave can all be landlord harassment. What the law counts as harassment in Ontario, how to document it, and how to file a T2."
        url="https://leaseplain.com/blog/landlord-harassment-ontario"
        datePublished="2026-09-07"
        dateModified="2026-09-07"
        keywords={["landlord harassment ontario", "t2 application ontario", "landlord shut off utilities ontario"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Landlord Harassment in Ontario", href: "https://leaseplain.com/blog/landlord-harassment-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/landlord-harassment-ontario",
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
                <span>Landlord Harassment in Ontario</span>
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
                Landlord Harassment in Ontario: What Counts and How to Stop It
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Some landlords, wanting a unit back or a higher-paying tenant, resort to pressure:
                surprise visits, shut-off utilities, veiled threats. In Ontario that&apos;s not just
                unpleasant — it&apos;s illegal, and you can be compensated for it. Here&apos;s how to
                recognize it and fight back.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What the Law Counts as Harassment</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The Residential Tenancies Act prohibits a landlord from{" "}
                    <strong>harassing, obstructing, coercing, threatening or interfering</strong> with a
                    tenant, and from substantially interfering with your reasonable enjoyment of the unit.
                    Common examples that cross the line:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li>Entering without proper <strong>24-hour written notice</strong>, or repeatedly showing up unannounced;</li>
                    <li>Shutting off or deliberately interfering with <strong>vital services</strong> — heat, water, electricity, gas;</li>
                    <li>Threats, intimidation, or aggressive and excessive contact;</li>
                    <li>Pressuring or bullying you to move out, or offering &quot;cash for keys&quot; in a coercive way;</li>
                    <li>Removing your belongings or changing the locks without a valid LTB order.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Illegal Entry Is a Common Form</h2>
                  <p className="text-slate-700 leading-relaxed">
                    A landlord generally must give <strong>24 hours&apos; written notice</strong> stating the
                    reason and a time between 8 a.m. and 8 p.m. to enter — with narrow exceptions for
                    emergencies or with your consent. Ignoring that rule repeatedly is a form of
                    harassment. Learn the details in our{" "}
                    <Link href="/blog/landlord-entry-notice-canada" className="text-blue-600 hover:underline">landlord entry notice guide</Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Document Everything</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Your case is only as strong as your records. Starting now:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li>Keep a <strong>dated log</strong> of every incident — what happened, when, and who was there.</li>
                    <li>Save every <strong>text, email, and voicemail</strong>; take screenshots.</li>
                    <li>Photograph anything physical — a shut-off breaker, a note left on your door, damage.</li>
                    <li>Note any <strong>witnesses</strong> (neighbours, a partner) and what they saw.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">File a T2 for Compensation</h2>
                  <p className="text-slate-700 leading-relaxed">
                    The main remedy is a <strong>T2 — Application About Tenant Rights</strong> at the
                    Landlord and Tenant Board. A successful T2 can win you a <strong>rent abatement</strong>{" "}
                    (a partial refund for the period affected), an order requiring the landlord to stop,
                    compensation for your costs, and a <strong>fine</strong> paid to the Board. See the{" "}
                    <Link href="/ltb-forms/t2" className="text-blue-600 hover:underline">T2 form explainer</Link>{" "}
                    for how it works.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If Vital Services Are Cut Off</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Deliberately withholding heat, water, or power is treated very seriously. Contact your
                    municipality&apos;s bylaw office right away (they can order services restored fast), and
                    file a T2 — the Board can order emergency remedies. Never let a landlord tell you a
                    shut-off is a normal way to handle a dispute; it isn&apos;t.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Talk to a tenant lawyer</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Find a paralegal or legal clinic that defends renters&apos; rights in Ontario.
                  </p>
                  <Link href="/tenant-lawyer" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Find a Tenant Lawyer
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Landlord Entry & Notice Rules", href: "/blog/landlord-entry-notice-canada" },
                      { label: "How to Fight an Illegal Eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
                      { label: "Bad-Faith N12 Evictions", href: "/blog/bad-faith-n12-t5-compensation-ontario" },
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
