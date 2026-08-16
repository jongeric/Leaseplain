import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock } from "lucide-react";
import ReviewedByline from "@/components/ReviewedByline";
import TableOfContents from "@/components/TableOfContents";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Bad-Faith N12: What If Your Landlord Didn't Actually Move In? (T5 Compensation) | LeasePlain",
  description:
    "Evicted for a landlord's 'own use' but they re-rented the unit instead? Ontario lets you file a T5 for bad-faith eviction — recovering rent differences, moving costs, and more. Here's how the one-year rule and T5 work.",
  alternates: { canonical: "https://leaseplain.com/blog/bad-faith-n12-t5-compensation-ontario" },
  openGraph: {
    title: "Bad-Faith N12: What If Your Landlord Didn't Actually Move In? (T5 Compensation) | LeasePlain",
    description:
      "If your landlord evicted you for 'own use' and then re-rented, a T5 application can win compensation. How the one-year rule and bad-faith presumption work.",
    url: "https://leaseplain.com/blog/bad-faith-n12-t5-compensation-ontario",
    type: "article",
    publishedTime: "2026-08-03T00:00:00Z",
    modifiedTime: "2026-08-03T00:00:00Z",
  },
  keywords: [
    "bad faith N12 ontario",
    "T5 application ontario",
    "landlord own use eviction ontario",
    "landlord didn't move in ontario",
    "N12 compensation ontario",
  ],
};

const faqItems = [
  {
    q: "What is a bad-faith N12 eviction?",
    a: "An N12 ends a tenancy so the landlord, a purchaser, or a close family member can move in. It's 'bad faith' when that stated intention wasn't genuine — for example, the landlord re-rents the unit to a new tenant at a higher rent, sells it, or leaves it empty shortly after evicting you.",
  },
  {
    q: "What is a T5 application?",
    a: "A T5 is the Tenant Application you file with the Landlord and Tenant Board when you believe your landlord gave an N12 (or N13) in bad faith. If it succeeds, the LTB can order compensation and can also impose an administrative fine on the landlord.",
  },
  {
    q: "How long do I have to file a T5?",
    a: "Generally within one year of the date you moved out because of the notice. Don't wait — gather your evidence (rental ads, who's living there now, the timeline) and file within that window.",
  },
  {
    q: "What is the one-year occupancy rule?",
    a: "The person who claimed they needed the unit is expected to actually move in and occupy it for at least a year. If the landlord instead advertises, re-rents, or sells the unit within a short time, the LTB may presume the eviction was in bad faith — shifting the practical burden onto the landlord to explain.",
  },
  {
    q: "What compensation can I get for a bad-faith N12?",
    a: "The LTB can order remedies such as the difference between your old rent and a higher new rent (often for up to a year), moving and storage costs, other out-of-pocket expenses, and general compensation. Separately, an N12 requires the landlord to pay you one month's rent compensation at the time of the eviction.",
  },
];

export default function BadFaithN12T5OntarioPage() {
  return (
    <>
      <ArticleSchema
        headline="Bad-Faith N12: What If Your Landlord Didn't Actually Move In? (T5 Compensation)"
        description="Evicted for a landlord's 'own use' but they re-rented the unit instead? Ontario lets you file a T5 for bad-faith eviction — recovering rent differences, moving costs, and more. Here's how the one-year rule and T5 work."
        url="https://leaseplain.com/blog/bad-faith-n12-t5-compensation-ontario"
        datePublished="2026-08-03"
        dateModified="2026-08-03"
        keywords={[
          "bad faith N12 ontario",
          "T5 application ontario",
          "landlord own use eviction ontario",
          "landlord didn't move in ontario",
          "N12 compensation ontario",
        ]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Bad-Faith N12 and T5 Compensation", href: "https://leaseplain.com/blog/bad-faith-n12-t5-compensation-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/bad-faith-n12-t5-compensation-ontario",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".speakable-summary"] },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <div className="flex flex-col min-h-full">
        <Navbar />

        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
                <Link href="/" className="hover:underline">Home</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <Link href="/blog" className="hover:underline">Blog</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>Bad-Faith N12 and T5 Compensation</span>
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
                Bad-Faith N12: What If Your Landlord Didn&apos;t Actually Move In?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                &quot;Own use&quot; evictions are one of the most abused tools in Ontario&apos;s rental
                market: evict the tenant, then quietly re-rent at a much higher rate. If that happened to
                you, the law fights back — through the T5 application. Here&apos;s how to spot bad faith
                and claim compensation.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="August 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What a Legitimate N12 Requires</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    An <strong>N12</strong> ends a tenancy so that the landlord, a buyer of the property, or
                    a close family member (or their caregiver) can move in. A valid N12 comes with strict
                    conditions:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>At least <strong>60 days&apos; notice</strong>, ending on the last day of a rental period;</li>
                    <li><strong>One month&apos;s rent in compensation</strong> paid to you (or an offer of another acceptable unit);</li>
                    <li>A <strong>genuine intention</strong> for the named person to move in and live there for at least a year.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    For the full breakdown of a proper N12, see our{" "}
                    <Link href="/blog/n12-eviction-ontario" className="text-blue-600 hover:underline">
                      N12 eviction guide
                    </Link>. This article is about what happens when that &quot;genuine intention&quot; turns
                    out to be a lie.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Signs of a Bad-Faith Eviction</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    An N12 is in bad faith when the stated reason wasn&apos;t real. Common red flags after
                    you&apos;ve moved out:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>The unit is <strong>re-listed for rent</strong> — often at a much higher price — soon after you leave.</li>
                    <li>A <strong>new tenant</strong>, not the landlord or family member, moves in.</li>
                    <li>The unit is <strong>sold</strong> or sits <strong>empty</strong> shortly afterward.</li>
                    <li>The person who supposedly needed it never actually lived there.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    Keep an eye on the unit after you go: screenshots of rental listings with dates, the
                    address, and the asking price are exactly the evidence a T5 runs on.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The One-Year Rule and the Bad-Faith Presumption</h2>
                  <p className="text-slate-700 leading-relaxed">
                    The person who claimed the unit is expected to <strong>move in and occupy it for at least
                    a year</strong>. Ontario law builds in a safeguard: if the landlord advertises, re-rents,
                    or sells the unit within a short period after the eviction, the LTB may{" "}
                    <strong>presume the N12 was given in bad faith</strong>. In practice that shifts the
                    pressure onto the landlord to explain what happened — a meaningful advantage for you at a
                    hearing.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Filing a T5 — and What You Can Recover</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The <strong>T5 — Tenant Application</strong> is how you bring a bad-faith N12 (or N13) to
                    the LTB. File it <strong>within one year</strong> of moving out. If you succeed, the Board
                    can order:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li><strong>Rent differential:</strong> the gap between your old rent and the higher rent you now pay elsewhere, often for up to a year.</li>
                    <li><strong>Moving and storage costs.</strong></li>
                    <li><strong>Other out-of-pocket expenses</strong> caused by the move.</li>
                    <li><strong>General compensation</strong> for the disruption.</li>
                    <li><strong>An administrative fine</strong> against the landlord, payable to the Board, as a deterrent.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    These awards can be substantial — bad-faith evictions are taken seriously precisely
                    because they&apos;re so damaging. If you&apos;re still fighting the N12 before you&apos;ve
                    moved, our guide on{" "}
                    <Link href="/blog/how-to-fight-an-illegal-eviction-ontario" className="text-blue-600 hover:underline">
                      fighting an illegal eviction
                    </Link>{" "}
                    covers your options at that stage.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Got an N12? Know your rights first</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your lease and we&apos;ll explain your rights around own-use evictions and
                    compensation — in plain English.
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
                      { label: "N12 Eviction in Ontario", href: "/blog/n12-eviction-ontario" },
                      { label: "How to Fight an Illegal Eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
                      { label: "Renoviction Tenant Rights", href: "/blog/renoviction-canada-tenant-rights" },
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
