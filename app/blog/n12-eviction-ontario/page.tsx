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
  title: "N12 Eviction Ontario 2026: Your Rights When a Landlord Wants Their Unit Back | LeasePlain",
  description:
    "Received an N12 notice in Ontario? Learn your rights — including one month's compensation, the right to dispute at the LTB, and how to spot bad-faith evictions.",
  alternates: { canonical: "https://leaseplain.com/blog/n12-eviction-ontario" },
  openGraph: {
    title: "N12 Eviction Ontario 2026: Your Rights When a Landlord Wants Their Unit Back | LeasePlain",
    description:
      "Received an N12 notice in Ontario? Learn your rights — including one month's compensation, the right to dispute at the LTB, and how to spot bad-faith evictions.",
    url: "https://leaseplain.com/blog/n12-eviction-ontario",
    type: "article",
    publishedTime: "2026-04-15T00:00:00Z",
    modifiedTime: "2026-06-01T00:00:00Z",
  },
  keywords: [
    "n12 eviction Ontario",
    "landlord personal use eviction",
    "N12 notice Ontario",
    "fight N12 eviction",
    "bad faith eviction Ontario",
  ],
};

const faqItems = [
  {
    q: "Do I have to leave when I receive an N12?",
    a: "No. An N12 notice is not an eviction order. You are legally entitled to remain in your unit until the Landlord and Tenant Board (LTB) issues an actual eviction order. The landlord must file an L2 application at the LTB after the termination date if you choose to stay, and a hearing will be held where both sides can present evidence.",
  },
  {
    q: "What is the one-month compensation for an N12?",
    a: "Under s.48.1 of the Residential Tenancies Act, a landlord who serves an N12 must pay the tenant compensation equal to one month's rent. This payment must be made on or before the termination date stated in the notice. If the landlord fails to pay compensation by that date, the notice may be considered invalid and the LTB can dismiss the L2 application.",
  },
  {
    q: "What happens if my landlord doesn't move in after an N12?",
    a: "If you vacate based on an N12 and the landlord does not actually move in — or re-rents the unit within 12 months of your termination date — you can file a T5 application (Tenant's Application for Compensation) with the LTB. You must file within one year of the termination date. The LTB can award up to 12 months' rent in compensation, plus any reasonable moving and storage expenses you incurred.",
  },
  {
    q: "Can I dispute an N12 if I think it's in bad faith?",
    a: "Yes. At the LTB hearing on the landlord's L2 application, you can challenge whether the landlord genuinely intends to have the named person occupy the unit. Evidence that raises bad faith includes the unit being re-listed for rent, the landlord having other available accommodation, or inconsistencies in the landlord's testimony. If the Board dismisses the L2, you stay. If you've already left and discover bad faith later, file a T5 within one year.",
  },
  {
    q: "How long does an N12 eviction take in Ontario?",
    a: "The process takes several months at minimum. The notice itself requires at least 60 days before the termination date. If you remain in the unit after that date, the landlord must then file an L2 application and wait for an LTB hearing, which can take additional weeks or months given current tribunal backlogs. You continue to pay rent and have full tenancy rights throughout this entire period.",
  },
];

export default function N12EvictionOntarioPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <ArticleSchema
        headline="N12 Eviction in Ontario: Your Rights When a Landlord Wants Their Unit Back (2026 Guide)"
        description="Received an N12 notice in Ontario? Learn your rights — including one month's compensation, the right to dispute at the LTB, and how to spot bad-faith evictions."
        url="https://leaseplain.com/blog/n12-eviction-ontario"
        datePublished="2026-04-15"
        dateModified="2026-06-01"
        keywords={[
          "n12 eviction Ontario",
          "landlord personal use eviction",
          "N12 notice Ontario",
          "fight N12 eviction",
          "bad faith eviction Ontario",
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://leaseplain.com" },
          { name: "Blog", href: "https://leaseplain.com/blog" },
          { name: "N12 Eviction Ontario 2026 Guide", href: "https://leaseplain.com/blog/n12-eviction-ontario" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".speakable-summary"],
          },
          "url": "https://leaseplain.com/blog/n12-eviction-ontario",
        }).replace(/</g, "<") }}
      />
      <div className="flex flex-col min-h-full">
        <Navbar />

        <main>
          {/* Hero */}
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
                <Link href="/" className="hover:underline">Home</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <Link href="/blog" className="hover:underline">Blog</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>N12 Eviction Ontario</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-200">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Ontario
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  April 15, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  10 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                N12 Eviction in Ontario: Your Rights When a Landlord Wants Their Unit Back (2026 Guide)
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                An N12 notice can feel alarming — but receiving one does not mean you have to leave.
                Ontario law gives tenants significant protections, including a right to compensation,
                a right to dispute the eviction at the LTB, and a remedy if the eviction turns out to
                be in bad faith. Here is everything you need to know.
              </p>
            </div>
          </section>

          {/* Body */}
          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-10">
                <ReviewedByline updated="August 2026" />
                <TableOfContents />

                {/* What is an N12 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What Is an N12 Notice?</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The N12 is formally called the{" "}
                    <em>Notice to End your Tenancy Because the Landlord, a Purchaser or a Family Member
                    Requires the Rental Unit</em>. It is governed by two sections of Ontario&apos;s
                    Residential Tenancies Act (RTA):
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li><strong>Section 48</strong> — allows a landlord to end a tenancy when the landlord, their spouse, parent, or child genuinely intends to occupy the unit.</li>
                    <li><strong>Section 49</strong> — allows a purchaser of the property to require the unit for personal use, with the landlord serving the N12 on the purchaser&apos;s behalf.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    The RTA sets out an exact and narrow list of eligible family members. Only the
                    landlord themselves, their <strong>spouse, parent, or child</strong> qualify under
                    s.48. Grandchildren, siblings, cousins, friends, or other relatives do{" "}
                    <strong>not</strong> qualify. An N12 that names an ineligible person is invalid on
                    its face.
                  </p>
                </div>

                {/* Mandatory rights */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Your Mandatory Rights Under an N12</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Ontario law automatically grants every tenant who receives an N12 the following
                    rights, regardless of what the notice says:
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex gap-3 text-slate-700">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">1</span>
                      <span><strong>60 days minimum notice.</strong> The termination date must be at least 60 days after you receive the notice, and it must fall on the last day of a rental period (e.g., the last day of a month for monthly tenancies).</span>
                    </li>
                    <li className="flex gap-3 text-slate-700">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">2</span>
                      <span><strong>One month&apos;s compensation (RTA s.48.1).</strong> The landlord must pay you compensation equal to one month&apos;s rent on or before the termination date. This is mandatory — it is not optional and cannot be waived.</span>
                    </li>
                    <li className="flex gap-3 text-slate-700">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">3</span>
                      <span><strong>Right to remain until a Board order.</strong> An N12 notice alone has no legal force to remove you. You can only be required to leave after a full LTB hearing results in an eviction order.</span>
                    </li>
                    <li className="flex gap-3 text-slate-700">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">4</span>
                      <span><strong>Right to dispute.</strong> You can contest the N12 at the LTB. If you have already vacated and later discover the eviction was in bad faith, you can file a T5 application within one year of the termination date.</span>
                    </li>
                  </ul>
                </div>

                {/* Checklist */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Notice Requirements Checklist</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    For an N12 to be legally valid, each of the following must be true:
                  </p>
                  <div className="rounded-xl border border-slate-200 overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 text-slate-600 text-xs font-semibold uppercase tracking-wide">
                        <tr>
                          <th className="text-left px-4 py-3">Requirement</th>
                          <th className="text-left px-4 py-3">Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          { req: "Official LTB form", detail: "Must use Form N12 — no substitute document is valid." },
                          { req: "Correct termination date", detail: "Last day of a rental period, at least 60 days from when you received the notice." },
                          { req: "Named person identified", detail: "Must state the person who requires the unit and their relationship to the landlord." },
                          { req: "Eligible family member", detail: "Only landlord, spouse, parent, or child qualify under s.48. Purchaser qualifies under s.49." },
                          { req: "Compensation paid on time", detail: "One month's rent must be paid on or before the termination date — not after." },
                          { req: "Genuine intent", detail: "The named person must genuinely intend to occupy the unit — not a pretextual claim." },
                        ].map((row) => (
                          <tr key={row.req} className="hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 font-medium text-slate-900">{row.req}</td>
                            <td className="px-4 py-3 text-slate-700">{row.detail}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* How to dispute */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Dispute an N12</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    You are <strong>not required to leave</strong> just because you received an N12.
                    Here is what happens if you choose to stay:
                  </p>
                  <ol className="space-y-3 list-decimal list-inside text-slate-700 leading-relaxed mb-4">
                    <li>After the termination date passes without you leaving, the landlord must file an <strong>L2 application</strong> at the LTB.</li>
                    <li>The LTB schedules a hearing. Both you and the landlord will have an opportunity to present evidence and testimony.</li>
                    <li>The landlord bears the burden of proving genuine intent to occupy the unit.</li>
                    <li>If the Board is not satisfied, it will dismiss the L2 and you keep your tenancy.</li>
                  </ol>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    <strong>Evidence that supports genuine intent:</strong> the landlord&apos;s personal
                    testimony about their current living situation, proof they have given notice to their
                    own landlord or sold their home, evidence of arranging utilities transfer or moving
                    services.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Red flags that suggest bad faith:</strong> the unit being listed for rent
                    again shortly after the notice is served; the landlord having multiple available
                    properties; the named family member already having stable housing with no reason to
                    move; or inconsistencies between the notice and any other communications you have
                    received.
                  </p>
                </div>

                {/* Bad faith — T5 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Bad Faith Evictions: The T5 Application</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Even if you leave based on the N12, you are not without recourse. If the landlord
                    never moves in — or re-rents the unit within 12 months of your termination date —
                    you can file a <strong>T5 application</strong> (Tenant&apos;s Application for
                    Compensation for Landlord&apos;s Bad Faith) with the LTB.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>The T5 must be filed within <strong>one year</strong> of the termination date stated in the N12.</li>
                    <li>Remedies the LTB can order include up to <strong>12 months&apos; rent</strong> in compensation.</li>
                    <li>The Board can also order the landlord to reimburse your <strong>moving and storage expenses</strong>.</li>
                    <li>If the unit is re-rented at a higher rent than you were paying, that fact alone can be evidence of bad faith.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    Keep records after you leave: check whether the unit gets re-listed online, note
                    whether the landlord or named family member actually moved in, and preserve any
                    communications. These will be essential evidence in a T5 hearing.
                  </p>
                </div>

                {/* N12 for purchaser */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">N12 for a Purchaser (s.49)</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    When a property is sold, the purchaser may require the unit for personal use. In
                    that case, the current landlord serves you an N12 on behalf of the purchaser under
                    s.49 of the RTA. The same rules apply:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>Minimum 60 days&apos; notice, terminating on the last day of a rental period.</li>
                    <li>One month&apos;s compensation must be paid on or before the termination date.</li>
                    <li>You have the same right to remain, dispute at the LTB, and file a T5 for bad faith.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    One important detail: if the sale of the property falls through after the N12 has
                    been served, the notice <strong>becomes invalid</strong>. You cannot be required to
                    leave on the basis of a purchase that did not close. If you left and the sale never
                    completed, that is strong evidence for a T5 application.
                  </p>
                </div>

                {/* N12 vs N13 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">N12 vs N13 — Key Differences</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Tenants sometimes confuse the N12 with the N13, which covers demolition, conversion,
                    and major renovation. They are very different notices:
                  </p>
                  <div className="rounded-xl border border-slate-200 overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 text-slate-600 text-xs font-semibold uppercase tracking-wide">
                        <tr>
                          <th className="text-left px-4 py-3">Feature</th>
                          <th className="text-left px-4 py-3">N12 (Personal Use)</th>
                          <th className="text-left px-4 py-3">N13 (Demolition / Reno)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          { feature: "Reason", n12: "Landlord, family, or purchaser needs the unit", n13: "Demolition, conversion, or major renovation requiring vacant possession" },
                          { feature: "Notice period", n12: "60 days minimum", n13: "120 days minimum" },
                          { feature: "Compensation", n12: "1 month's rent", n13: "3 months' rent" },
                          { feature: "Right of first refusal", n12: "Not applicable", n13: "Tenant has right of first refusal to return at same rent (if renovation)" },
                          { feature: "Relevant RTA section", n12: "s.48 / s.49", n13: "s.50" },
                        ].map((row) => (
                          <tr key={row.feature} className="hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 font-medium text-slate-900">{row.feature}</td>
                            <td className="px-4 py-3 text-slate-700">{row.n12}</td>
                            <td className="px-4 py-3 text-slate-700">{row.n13}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-slate-700 leading-relaxed mt-4">
                    If your landlord has given you an N13 and it does not qualify as demolition or
                    renovation requiring the unit to be vacated, that notice may also be challengeable
                    at the LTB. Always verify which notice you have received and whether the stated
                    reason matches your circumstances.
                  </p>
                </div>

                {/* FAQ */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>

              </div>

              {/* Sidebar */}
              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Dispute an N12 with LeasePlain</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your N12 notice for an instant plain-language analysis — see whether it meets
                    every legal requirement and what your options are.
                  </p>
                  <Link
                    href="/tools/eviction-notice-checker"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Analyze My N12 Notice
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Ontario Tenant Rights", href: "/tenant-rights/ontario" },
                      { label: "Eviction Notices in Ontario", href: "/tenant-rights/eviction-notices" },
                      { label: "Eviction Notice Checker", href: "/tools/eviction-notice-checker" },
                      { label: "How to Fight an Illegal Eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
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

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                  <h3 className="font-semibold text-amber-900 mb-2 text-sm">Legal Information Notice</h3>
                  <p className="text-amber-800 text-xs leading-relaxed">
                    This guide is for informational purposes only and does not constitute legal advice.
                    If you have received an N12 and are unsure how to proceed, consider consulting a
                    tenant duty counsel or licensed paralegal familiar with Ontario&apos;s RTA.
                  </p>
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
