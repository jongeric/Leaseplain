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
  title: "Mould in a Rental in Ontario: Whose Problem Is It? | LeasePlain",
  description:
    "Mould in your Ontario rental is almost always the landlord's responsibility to fix — especially when it comes from a leak or poor ventilation. How to report it, escalate to the city, and claim a rent abatement.",
  alternates: { canonical: "https://leaseplain.com/blog/mould-in-a-rental-ontario" },
  openGraph: {
    title: "Mould in a Rental in Ontario: Whose Problem Is It? | LeasePlain",
    description:
      "Who's responsible for mould in an Ontario rental, how to report it, and how to force a fix.",
    url: "https://leaseplain.com/blog/mould-in-a-rental-ontario",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["mould in rental ontario", "black mold apartment ontario landlord", "mould tenant rights ontario", "landlord won't fix mould ontario", "is landlord responsible for mold ontario"],
};

const faqItems = [
  {
    q: "Is my landlord responsible for mould in Ontario?",
    a: "Almost always, yes. Landlords must keep the unit in a good state of repair and fit for habitation. Mould from a leak, failed seals, or poor ventilation is the landlord's responsibility to remediate at their cost, even if it's unclear exactly when it started.",
  },
  {
    q: "What do I do if my landlord won't remove mould?",
    a: "Report it in writing with photos and keep a copy. If the landlord doesn't act, call 311 for municipal property standards, consider a public-health complaint, and file a T6 application at the LTB for an order to remediate plus a rent abatement.",
  },
  {
    q: "Can I break my lease because of mould in Ontario?",
    a: "Mould alone isn't an automatic right to leave, but if the unit becomes uninhabitable and the landlord won't act, that can support a T6, a rent abatement, and in serious cases an argument to end the tenancy. Get advice from a tenant clinic first.",
  },
  {
    q: "Can I get money back for living with mould?",
    a: "Yes. Through a T6 application the LTB can order a rent abatement — a partial refund — for the period you lived with an unremediated hazard, on top of ordering the landlord to fix it.",
  },
];

export default function MouldInARentalOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline={"Mould in a Rental in Ontario: Your Landlord's Responsibility"}
        description={"Mould in your Ontario rental is almost always the landlord's responsibility to fix — especially when it comes from a leak or poor ventilation. How to report it, escalate to the city, and claim a rent abatement."}
        url="https://leaseplain.com/blog/mould-in-a-rental-ontario"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["mould in rental ontario", "black mold apartment ontario landlord", "mould tenant rights ontario"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Mould in a Rental in Ontario", href: "https://leaseplain.com/blog/mould-in-a-rental-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/mould-in-a-rental-ontario",
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
                <span>Mould in a Rental in Ontario</span>
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
                Mould in a Rental in Ontario: Whose Problem Is It?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                A patch of black mould on the bathroom ceiling or behind a leaky window is more than ugly — it&apos;s a health hazard, and in Ontario it&apos;s almost always your landlord&apos;s job to fix. Here&apos;s how to make that happen.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Landlord Has to Deal With It</h2>
                  <p className="text-slate-700 leading-relaxed">Under the Residential Tenancies Act, your landlord must keep the unit <strong>in a good state of repair and fit for habitation</strong> and comply with health and safety standards. Mould caused by a <strong>maintenance defect</strong> — a roof or plumbing leak, failed window seals, poor ventilation — is squarely the landlord&apos;s responsibility to remediate, at their cost.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">When Could It Be on You?</h2>
                  <p className="text-slate-700 leading-relaxed">The narrow exception is mould that results from a tenant&apos;s own <strong>negligence</strong> — for example, never using the bathroom fan, blocking vents, or failing to report an obvious leak for months. Even then, the landlord usually has to fix the underlying problem; the dispute is about who pays. Reporting promptly protects you.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Report It in Writing — Immediately</h2>
                  <p className="text-slate-700 leading-relaxed">Tell your landlord <strong>in writing</strong> (text or email) as soon as you see mould, with photos and the date. Keep the copy. A written record is what turns a he-said/she-said into a winnable case, and it starts the clock on the landlord&apos;s duty to act.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Escalate If They Ignore You</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">You have more than one lever, and can use them together:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Municipal property standards / 311:</strong> the city can inspect and order remediation, often faster than the LTB.</li>
                    <li><strong>Public health:</strong> significant mould can be a health-hazard complaint.</li>
                    <li><strong>File a T6 at the LTB:</strong> ask for an order to remediate plus a <strong>rent abatement</strong> for the time you lived with it.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Don&apos;t Just Stop Paying Rent</h2>
                  <p className="text-slate-700 leading-relaxed">Withholding rent on your own can put you at risk of an N4 and eviction. Instead, document everything, escalate through the city and the LTB, and let a T6 application recover an abatement. See <Link href="/blog/withholding-rent-repairs-ontario" className="text-blue-600 hover:underline">can I withhold rent over repairs?</Link> for why the formal route is safer.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Landlord ignoring the problem?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Send a clear, dated repair request that puts them on notice.
                  </p>
                  <Link href="/letters/repair-request-letter" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Repair Request Letter
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Can I Withhold Rent Over Repairs?", href: "/blog/withholding-rent-repairs-ontario" },
                      { label: "Bed Bugs & Pests: Who's Responsible?", href: "/blog/bed-bugs-pests-landlord-ontario" },
                      { label: "Landlord Repair Obligations", href: "/blog/landlord-repair-obligations-canada" },
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
