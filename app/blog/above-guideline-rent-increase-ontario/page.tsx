import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Above-Guideline Rent Increases in Ontario: What They Are and How to Fight One | LeasePlain",
  description:
    "Ontario landlords can apply for rent increases above the annual guideline — but only for specific reasons. Here's how AGIs work, what grounds are allowed, and how tenants can dispute them.",
  alternates: { canonical: "https://leaseplain.com/blog/above-guideline-rent-increase-ontario" },
  openGraph: {
    title: "Above-Guideline Rent Increases in Ontario: What They Are and How to Fight One | LeasePlain",
    description:
      "Ontario landlords can apply for rent increases above the annual guideline — but only for specific reasons. Here's how AGIs work, what grounds are allowed, and how tenants can dispute them.",
    url: "https://leaseplain.com/blog/above-guideline-rent-increase-ontario",
    type: "article",
    publishedTime: "2026-05-10T00:00:00Z",
    modifiedTime: "2026-06-01T00:00:00Z",
  },
  keywords: [
    "above guideline rent increase Ontario",
    "AGI rent increase",
    "how to fight rent increase Ontario",
    "LTB rent increase application",
    "extraordinary capital expenditure Ontario",
  ],
};

const guidelineHistory = [
  { year: "2020", guideline: "2.2%", notes: "Pre-COVID" },
  { year: "2021", guideline: "0%", notes: "COVID freeze" },
  { year: "2022", guideline: "1.2%", notes: "Post-COVID recovery rate" },
  { year: "2023", guideline: "2.5%", notes: "Restored" },
  { year: "2024", guideline: "2.5%", notes: "Same" },
  { year: "2025", guideline: "2.5%", notes: "Same" },
  { year: "2026", guideline: "2.1%", notes: "Current year" },
];

const faqItems = [
  {
    q: "Can my Ontario landlord raise rent above the guideline?",
    a: "Yes, but only with approval from the Landlord and Tenant Board. A landlord must file a Form L5 application and prove that the increase is justified under one of the three permitted grounds: extraordinary capital expenditures, extraordinary increases in municipal taxes, or extraordinary increases in utilities. The LTB must grant permission — the increase cannot happen automatically.",
  },
  {
    q: "What is an extraordinary capital expenditure for an AGI?",
    a: "An extraordinary capital expenditure is a major, non-routine improvement to the building — such as replacing the roof, windows, plumbing system, elevator, or HVAC system. It must be work that goes significantly beyond normal maintenance and that provides a lasting benefit to the building. Routine repairs, cosmetic upgrades, and work the landlord was already obligated to do do not qualify.",
  },
  {
    q: "How long does an AGI application take at the LTB?",
    a: "AGI hearings at the LTB can take anywhere from several months to well over a year from the date of filing, depending on the LTB's current backlog and the complexity of the case. If approved, however, the increase can be made retroactive to the filing date, meaning tenants may owe arrears going back to when the landlord first applied.",
  },
  {
    q: "Do I have to pay an above-guideline increase while it's being disputed?",
    a: "No — you are not required to pay the above-guideline portion while the LTB application is being decided. You continue paying your current rent (plus any standard guideline increases that apply). If the LTB ultimately approves an AGI, it may be retroactive, meaning you could owe the difference back to the filing date. Setting that amount aside in savings during the dispute is wise.",
  },
  {
    q: "What is Form L5 in Ontario?",
    a: "Form L5 is the LTB application form a landlord must file to apply for an above-guideline rent increase. It sets out the grounds for the request and must be accompanied by supporting documentation such as invoices, contracts, and cost records. Once filed, the LTB notifies all affected tenants, who then have 30 days to respond or file a T3 motion.",
  },
];

export default function AboveGuidelineRentIncreaseOntarioPage() {
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
        headline="Above-Guideline Rent Increases in Ontario: What They Are and How to Fight One"
        description="Ontario landlords can apply for rent increases above the annual guideline — but only for specific reasons. Here's how AGIs work, what grounds are allowed, and how tenants can dispute them."
        url="https://leaseplain.com/blog/above-guideline-rent-increase-ontario"
        datePublished="2026-05-10"
        dateModified="2026-06-01"
        keywords={[
          "above guideline rent increase Ontario",
          "AGI rent increase",
          "how to fight rent increase Ontario",
          "LTB rent increase application",
          "extraordinary capital expenditure Ontario",
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://leaseplain.com" },
          { name: "Blog", href: "https://leaseplain.com/blog" },
          {
            name: "Above-Guideline Rent Increases in Ontario",
            href: "https://leaseplain.com/blog/above-guideline-rent-increase-ontario",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "<") }}
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
          "url": "https://leaseplain.com/blog/above-guideline-rent-increase-ontario",
        }).replace(/</g, "<") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Dispute an Above-Guideline Rent Increase in Ontario",
          "description": "A step-by-step guide for Ontario tenants on how to challenge a landlord's above-guideline rent increase (AGI) application at the Landlord and Tenant Board.",
          "step": [
            { "@type": "HowToStep", "position": 1, "name": "Receive and read the LTB notice of the AGI application", "text": "When a landlord files a Form L5 (Application for Above Guideline Increase), the LTB notifies all affected tenants. Read the notice carefully to understand which units are covered, what grounds are claimed, and your deadline to respond." },
            { "@type": "HowToStep", "position": 2, "name": "File a T3 motion within 30 days", "text": "Use the T3 (Tenant's Motion to Strike Out or Amend Grounds) to formally challenge the application. State why the claimed expenditures do not qualify — for example, that the work was routine maintenance rather than an extraordinary capital expenditure, or that costs were inflated." },
            { "@type": "HowToStep", "position": 3, "name": "Attend the LTB hearing", "text": "Your presence at the hearing matters. An uncontested AGI hearing often proceeds quickly in the landlord's favour. Attending signals to the adjudicator that the claims will be scrutinized, and gives you the opportunity to present your evidence directly." },
            { "@type": "HowToStep", "position": 4, "name": "Challenge the invoices and contractor relationships", "text": "Ask whether the contractors are real, arm's-length companies and whether the amounts are consistent with market rates. Inflated invoices from related parties, or from contractors with undisclosed relationships to the landlord, are grounds for dismissal of those cost items." },
            { "@type": "HowToStep", "position": 5, "name": "Argue that claimed work was routine maintenance", "text": "The LTB will not approve an AGI for work the landlord was already obligated to do under the RTA. Cosmetic upgrades, routine repairs, and work that does not provide a lasting benefit to the building cannot support an above-guideline increase." },
            { "@type": "HowToStep", "position": 6, "name": "Challenge whether the work was completed properly", "text": "If the work was done sloppily or remains unfinished, it does not meet the legal standard. Bring photos, written complaints to the landlord, and maintenance records as evidence of ongoing problems." },
            { "@type": "HowToStep", "position": 7, "name": "Coordinate with other tenants in the building", "text": "An AGI application typically affects the whole building. Joining forces with neighbours lets you share the cost of legal advice, coordinate evidence, and strengthen the collective response. Tenant associations and duty counsel at the LTB can assist." },
          ],
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
                <span>Above-Guideline Rent Increases Ontario</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-200">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Ontario
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  May 10, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  8 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Above-Guideline Rent Increases in Ontario: What They Are and How to Fight One
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Ontario&apos;s annual rent guideline caps how much your landlord can raise the rent
                each year. But landlords can apply to the Landlord and Tenant Board for permission
                to go higher. Here is what an above-guideline increase (AGI) is, when it is legally
                permitted, and what you can do to challenge one.
              </p>
            </div>
          </section>

          {/* Body */}
          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">

                {/* Section 1 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    The Normal Rule: Ontario&apos;s Annual Rent Guideline
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Under section 120 of the <em>Residential Tenancies Act, 2006</em> (RTA), a landlord
                    can only increase a tenant&apos;s rent once every 12 months, and the increase is
                    capped at the annual rent increase guideline. The landlord must also give at least
                    90 days&apos; written notice before any increase takes effect.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The guideline is set each year by the Ontario government based on the Ontario
                    Consumer Price Index. For 2026 the guideline is <strong>2.1%</strong>; it was
                    2.5% in both 2024 and 2025.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    One critical limitation: rent control under the RTA only applies to units first
                    occupied for residential purposes <strong>before November 15, 2018</strong>. If
                    your unit was first rented on or after that date, the guideline does not apply to
                    you — your landlord can raise the rent by any amount with proper notice, no LTB
                    approval required.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    What Is an Above-Guideline Increase (AGI)?
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Section 126 of the RTA allows a landlord to apply to the LTB for permission to
                    raise rent above the guideline amount. This is called an above-guideline increase,
                    or AGI. Unlike a standard guideline increase, the landlord cannot simply serve
                    notice — they must file a formal application, the LTB must hold a hearing, and an
                    adjudicator must approve the increase before it can take effect.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    There are only <strong>three permitted grounds</strong> for an AGI:
                  </p>
                  <ul className="space-y-3 mb-3">
                    <li className="flex gap-3">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">a</span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Extraordinary capital expenditures</p>
                        <p className="text-slate-600 text-sm leading-relaxed">Major capital work such as replacing a roof, windows, elevators, plumbing systems, or HVAC equipment. The work must be genuinely extraordinary — well above routine maintenance — and must provide a lasting benefit to the building.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">b</span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Extraordinary increases in municipal taxes</p>
                        <p className="text-slate-600 text-sm leading-relaxed">Property tax increases that are significantly above the rate of inflation, to the point where the guideline increase does not adequately cover the added cost burden on the landlord.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">c</span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Extraordinary increases in utilities</p>
                        <p className="text-slate-600 text-sm leading-relaxed">Major cost increases in gas, hydro, or water that are borne by the landlord and that go substantially beyond what the guideline accounts for.</p>
                      </div>
                    </li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    The landlord must prove that at least one of these grounds applies. The LTB does
                    not rubber-stamp AGI applications — evidence is required and tenants have the right
                    to participate.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How the AGI Process Works</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    From filing to decision, the AGI process at the LTB follows several defined steps:
                  </p>
                  <ol className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Landlord files Form L5",
                        body: "The landlord submits an Application for Above Guideline Increase (Form L5) to the LTB, along with supporting documentation — invoices, contracts, cost records, and utility bills.",
                      },
                      {
                        step: "2",
                        title: "LTB notifies affected tenants",
                        body: "The LTB sends a notice of the application to every tenant in every unit covered by the application. All affected tenants have a right to participate in the hearing.",
                      },
                      {
                        step: "3",
                        title: "Tenants have 30 days to respond",
                        body: "Within 30 days of receiving notice, tenants can file a T3 (Tenant's Motion to Strike Out or Amend Grounds) challenging the application, or submit a written response to the LTB.",
                      },
                      {
                        step: "4",
                        title: "LTB schedules a hearing",
                        body: "A hearing is held before an LTB adjudicator. These hearings often involve multiple tenants and can span multiple days. Both the landlord and tenants present their evidence.",
                      },
                      {
                        step: "5",
                        title: "Adjudicator reviews the evidence",
                        body: "The LTB reviews invoices, contracts, financial records, and testimony. The adjudicator apportions costs across units and calculates the per-tenant impact.",
                      },
                      {
                        step: "6",
                        title: "Decision issued — possibly retroactive",
                        body: "If the AGI is approved, the increase can be backdated to the filing date. Tenants may owe arrears going back months or even years. The increase is also capped and phased in over time.",
                      },
                    ].map((item) => (
                      <li key={item.step} className="flex gap-4">
                        <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                          {item.step}
                        </span>
                        <div>
                          <p className="font-semibold text-slate-900 text-sm mb-0.5">{item.title}</p>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    What Landlords Cannot Claim for an AGI
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Not every cost a landlord incurs qualifies. The LTB has consistently held that the
                    following cannot support an AGI application:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li><strong>Routine maintenance and repairs</strong> — these are part of the landlord&apos;s basic obligation to keep the unit in a good state of repair</li>
                    <li><strong>Cosmetic upgrades</strong> — painting, landscaping, lobby renovations that don&apos;t improve the building&apos;s systems</li>
                    <li><strong>Work done improperly</strong> or that did not actually benefit the tenants</li>
                    <li><strong>Costs already included in a previous AGI</strong> or already factored into the rent level</li>
                    <li><strong>Capital work that was deferred</strong> because of the landlord&apos;s own neglect</li>
                    <li><strong>Inflated invoices</strong> from related parties rather than arm&apos;s-length contractors</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    The LTB apportions eligible costs across all units in the affected building and
                    calculates what portion each tenant bears based on their unit size and rent. The
                    per-unit impact determines the maximum increase percentage the LTB will approve.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    How Tenants Can Fight an AGI
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Receiving notice of an AGI application does not mean the increase is inevitable.
                    Tenants who participate actively have a real chance of reducing or eliminating
                    the increase. Here is a practical strategy:
                  </p>
                  <ol className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "File a T3 within 30 days",
                        body: "Use the T3 form to challenge the grounds of the application. State clearly why you believe the claimed work does not qualify as extraordinary — or that it was never completed.",
                      },
                      {
                        step: "2",
                        title: "Attend the LTB hearing",
                        body: "Your presence and testimony matter. An uncontested hearing often moves quickly in the landlord's favour. Attending signals to the adjudicator that the claims will be scrutinized.",
                      },
                      {
                        step: "3",
                        title: "Challenge the invoices",
                        body: "Ask: are the contractors real, arm's-length companies? Are the amounts consistent with market rates for that type of work? Inflated or fraudulent invoices are grounds for dismissal.",
                      },
                      {
                        step: "4",
                        title: "Challenge whether the work was extraordinary",
                        body: "Argue that the work claimed was actually routine maintenance — something the landlord was already obligated to do under the RTA, not a capital improvement justifying extra rent.",
                      },
                      {
                        step: "5",
                        title: "Challenge whether the work was completed properly",
                        body: "If the work was done sloppily or remains unfinished, it does not meet the legal standard. Evidence of ongoing problems (photos, written complaints, maintenance records) is highly relevant.",
                      },
                      {
                        step: "6",
                        title: "Request documentary disclosure",
                        body: "Through the LTB process you can request that the landlord produce full documentation — receipts, building permits, contracts, and financial records. Missing or inconsistent documents weaken the landlord's case.",
                      },
                      {
                        step: "7",
                        title: "Coordinate with other tenants",
                        body: "An AGI typically affects the whole building. Joining forces with other tenants lets you share the cost of legal advice or tenant duty counsel representation, and strengthens the collective response.",
                      },
                    ].map((item) => (
                      <li key={item.step} className="flex gap-4">
                        <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                          {item.step}
                        </span>
                        <div>
                          <p className="font-semibold text-slate-900 text-sm mb-0.5">{item.title}</p>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    If the AGI Is Approved — Key Protections
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Even if the LTB approves an AGI, important tenant protections remain in place:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>
                      <strong>Partial approval is possible.</strong> The LTB can approve a lower increase
                      than the landlord requested, based on the evidence. You may reduce the amount even if
                      you cannot eliminate it entirely.
                    </li>
                    <li>
                      <strong>Phase-in over three years.</strong> The approved above-guideline amount must
                      be phased in over a maximum of three years. The LTB splits it into annual instalments
                      so no single year&apos;s increase is devastating.
                    </li>
                    <li>
                      <strong>Right of appeal.</strong> A tenant (or landlord) can appeal an LTB decision
                      on an AGI to Divisional Court on a question of law. Consult a legal clinic or tenant
                      rights organization before pursuing an appeal.
                    </li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    If retroactive arrears are ordered, the LTB may set a repayment schedule so that
                    tenants are not required to pay a large lump sum immediately.
                  </p>
                </div>

                {/* Data Table */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Ontario Rent Guideline History
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    The table below shows the annual rent increase guideline for the past several years.
                    An AGI allows a landlord to apply for an increase on top of these amounts.
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 text-slate-600 text-xs font-semibold uppercase tracking-wide">
                        <tr>
                          <th className="text-left px-4 py-3">Year</th>
                          <th className="text-left px-4 py-3">Guideline</th>
                          <th className="text-left px-4 py-3">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {guidelineHistory.map((row) => (
                          <tr key={row.year} className="hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 font-medium text-slate-900">{row.year}</td>
                            <td className="px-4 py-3 text-slate-700">{row.guideline}</td>
                            <td className="px-4 py-3 text-slate-600">{row.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* FAQ */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} includeSchema={false} />
                </div>

              </div>

              {/* Sidebar */}
              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Got a rent increase notice?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Use LeasePlain to analyze your rent increase notice and check whether it complies
                    with Ontario&apos;s rules.
                  </p>
                  <Link
                    href="/tools/rent-increase-calculator"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Rent Increase Calculator
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Ontario Rent Increase Guideline 2026", href: "/blog/ontario-rent-increase-guideline-2026" },
                      { label: "Rent Increase Rules", href: "/tenant-rights/rent-increase-rules" },
                      { label: "Ontario Tenant Rights", href: "/tenant-rights/ontario" },
                      { label: "Rent Increase Calculator", href: "/tools/rent-increase-calculator" },
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
