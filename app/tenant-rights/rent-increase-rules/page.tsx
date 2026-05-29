import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { TrendingUp, CheckCircle, AlertTriangle, ChevronRight, Upload, Info } from "lucide-react";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Rent Increase Rules in Canada & the US – Province-by-Province Guide | LeasePlain",
  description:
    "Complete guide to rent increase rules across Canada and key US states. Ontario, BC, Alberta, Quebec, Manitoba, and more — guidelines, notice periods, dispute processes, and tenant rights.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/rent-increase-rules" },
  openGraph: {
    type: "website",
    title: "Rent Increase Rules in Canada & the US – Province-by-Province Guide | LeasePlain",
    description: "Complete guide to rent increase rules across Canada and key US states. Ontario, BC, Alberta, Quebec, Manitoba, and more — guidelines, notice periods, dispute processes, and tenant rights.",
    url: "https://leaseplain.com/tenant-rights/rent-increase-rules",
  },
  keywords: [
    "Ontario rent increase rules",
    "rent increase guideline Ontario 2026",
    "rent control Ontario",
    "BC rent increase 2025",
    "Alberta rent increase notice",
    "Quebec rent increase TAL",
    "Canada rent control provinces",
    "dispute rent increase",
    "above guideline increase Ontario",
  ],
};

const ontarioGuidelines = [
  { year: "2026", rate: "2.1%" },
  { year: "2025", rate: "2.5%" },
  { year: "2024", rate: "2.5%" },
  { year: "2023", rate: "2.5%" },
  { year: "2022", rate: "1.2%" },
  { year: "2021", rate: "0% (COVID-19 freeze)" },
  { year: "2020", rate: "0% (COVID-19 freeze)" },
];

const ontarioRules = [
  "Rent can only be increased once every 12 months for the same tenant.",
  "The landlord must give at least 90 days written notice using Form N1 (within-guideline) or Form N2 (above-guideline application).",
  "The increase must not exceed the annual Rent Increase Guideline unless a legal exemption applies.",
  "Units first occupied for residential purposes after November 15, 2018 have no rent control — the guideline does not apply.",
  "Non-profit housing and some care homes may also be exempt from the guideline.",
  "An above-guideline increase (AGI) requires a formal LTB application and is only granted for specific, approved reasons.",
  "If the landlord fails to use the correct form or give adequate notice, the increase is void and unenforceable.",
];

const ontarioDisputeSteps = [
  { step: "Verify the notice", detail: "Confirm the notice is on Form N1, was given at least 90 days before the effective date, and the stated increase amount is correct." },
  { step: "Check the guideline", detail: "Compare the proposed increase against the Ontario Rent Increase Guideline for that year. If it exceeds the guideline and your unit is not exempt, it may be illegal — do not pay the excess." },
  { step: "Check your exemption status", detail: "If your unit was first occupied for residential purposes after November 15, 2018, the guideline may not apply. Verify this with your lease or building records. You can also contact the LTB." },
  { step: "File a T1 application", detail: "If the increase is illegal (above-guideline on a rent-controlled unit), file a T1 — Tenant Application for a Rebate of Money the Landlord Owes — with the Landlord and Tenant Board. There is a 2-year look-back period for overpayments." },
  { step: "Attend the LTB hearing", detail: "Bring documentation: your lease, the notice, guideline rates, and payment records. If the LTB finds an overcharge, it can order a refund and roll back the rent." },
];

const provincialTable = [
  {
    province: "Ontario",
    rentControl: "Yes (pre-Nov 15, 2018 units)",
    currentCap: "2.1% (2026)",
    noticePeriod: "90 days minimum",
    form: "Form N1 / N2",
    disputeBody: "Landlord and Tenant Board (LTB)",
  },
  {
    province: "British Columbia",
    rentControl: "Yes (all units)",
    currentCap: "3.0% (2025 & 2026)",
    noticePeriod: "3 full rental months",
    form: "RTB-7 or letter",
    disputeBody: "Residential Tenancy Branch (RTB)",
  },
  {
    province: "Alberta",
    rentControl: "No",
    currentCap: "No cap",
    noticePeriod: "3 months (annual); full period (periodic)",
    form: "Written notice",
    disputeBody: "RTDRS (procedure only)",
  },
  {
    province: "Quebec",
    rentControl: "Formula-based (TAL)",
    currentCap: "Varies by building expenses",
    noticePeriod: "3–6 months (before lease end)",
    form: "Written renewal notice",
    disputeBody: "Tribunal administratif du logement (TAL)",
  },
  {
    province: "Manitoba",
    rentControl: "Yes",
    currentCap: "3% (2025)",
    noticePeriod: "3 months minimum",
    form: "Written notice",
    disputeBody: "Residential Tenancies Branch",
  },
  {
    province: "Saskatchewan",
    rentControl: "No",
    currentCap: "No cap",
    noticePeriod: "1 month (monthly); 3 months (annual)",
    form: "Written notice",
    disputeBody: "Office of Residential Tenancies (ORT)",
  },
  {
    province: "New Brunswick",
    rentControl: "Yes (since Feb 2025)",
    currentCap: "3% per year",
    noticePeriod: "3 months",
    form: "Written notice",
    disputeBody: "Residential Tenancy Tribunal (RTT)",
  },
  {
    province: "Nova Scotia",
    rentControl: "Yes (cap until 2027)",
    currentCap: "5% per year",
    noticePeriod: "4 months",
    form: "Written notice",
    disputeBody: "Residential Tenancies Program",
  },
  {
    province: "PEI",
    rentControl: "Yes",
    currentCap: "3% (2024 & 2025)",
    noticePeriod: "3 months",
    form: "Written notice",
    disputeBody: "Director of Residential Tenancy (IRAC)",
  },
];

const faqItems = [
  {
    q: "What is the Ontario rent increase guideline for 2026?",
    a: "The Ontario rent increase guideline for 2026 is 2.1%. This is the maximum a landlord can raise rent for most existing tenants without applying to the Landlord and Tenant Board (LTB) for an above-guideline increase. The guideline is published each fall by the Ministry of Municipal Affairs and Housing and takes effect January 1 of the following year. It is based on the Ontario Consumer Price Index.",
  },
  {
    q: "Is my apartment exempt from rent control in Ontario?",
    a: "Your unit may be exempt if it was first occupied for residential purposes after November 15, 2018. This is known as the 'new unit exemption.' If exempt, your landlord can raise rent by any amount with proper notice. To verify your status, check your lease for the date the unit was first occupied, or contact the Ontario LTB. Units in non-profit housing or care homes may also be treated differently.",
  },
  {
    q: "Can my landlord raise rent above the guideline?",
    a: "In Ontario, a landlord can apply to the LTB for an above-guideline increase (AGI) if they have experienced extraordinary increases in property taxes, municipal utility costs, or have made significant capital expenditures (major repairs or improvements). The landlord must serve you with a copy of the AGI application, and you have the right to contest it at a hearing. Even if an AGI is granted, the increase is phased in over three years.",
  },
  {
    q: "How do I dispute a rent increase in BC?",
    a: "In British Columbia, if your landlord gives you a rent increase that exceeds the annual allowable increase set by the provincial government (3% for 2025 and 2026), you can dispute it with the Residential Tenancy Branch (RTB). File a dispute resolution application online at gov.bc.ca/tenants. The landlord must give you at least 3 full rental months notice in writing before the increase takes effect, and it can only happen once every 12 months. Keep all written notices as evidence.",
  },
  {
    q: "Which Canadian provinces have no rent control?",
    a: "Alberta and Saskatchewan have no rent control — landlords can raise rent by any amount as long as they give proper written notice and only increase once every 12 months. Newfoundland and Labrador also has no rent control. British Columbia, Ontario (for pre-November 2018 units), Manitoba, Quebec, New Brunswick, Nova Scotia, and PEI all have some form of rent increase limit. Note that even in provinces without rent control, procedural rules (notice periods, frequency) still apply.",
  },
];

export default function RentIncreaseRulesPage() {
  return (
    <>
      <ArticleSchema
        headline="Rent Increase Rules in Canada and the US – Province-by-Province Guide"
        description="Complete guide to rent increase rules across Canada and key US states. Ontario, BC, Alberta, Quebec, Manitoba, and more — guidelines, notice periods, dispute processes, and tenant rights."
        url="https://leaseplain.com/tenant-rights/rent-increase-rules"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={[
          "Ontario rent increase rules",
          "rent increase guideline Ontario 2026",
          "rent control Ontario",
          "BC rent increase",
          "Canada rent control provinces",
          "dispute rent increase",
          "above guideline increase Ontario",
        ]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tenant Rights", href: "https://leaseplain.com/tenant-rights" },
        { name: "Rent Increase Rules", href: "https://leaseplain.com/tenant-rights/rent-increase-rules" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://leaseplain.com/tenant-rights/rent-increase-rules",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".speakable-summary"],
        },
      }).replace(/</g, "<") }} />

    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/tenant-rights" className="hover:underline">Tenant Rights</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Rent Increase Rules</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
              Tenant Rights Guide
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Rent Increase Rules: Canada & Key US Jurisdictions
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Your landlord cannot raise your rent whenever they want or by any amount they choose.
              Across Canada and many US states, strict rules govern how often, how much, and how
              a rent increase must be communicated — with significant variation by jurisdiction.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-16">

              {/* ── Ontario ── */}
              <div id="ontario">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Ontario</h2>
                <p className="text-sm text-slate-500 mb-5">Residential Tenancies Act, 2006 · Landlord and Tenant Board (LTB)</p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3">Core Rules</h3>
                <ul className="flex flex-col gap-3 mb-8">
                  {ontarioRules.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-semibold text-slate-800 mb-3">Annual Rent Increase Guidelines</h3>
                <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                  Each fall, the Ontario Ministry of Municipal Affairs and Housing publishes the guideline
                  for the following calendar year. The guideline is tied to the Ontario Consumer Price Index
                  and represents the maximum allowable increase for rent-controlled units.
                </p>
                <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm mb-2">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <th className="text-left px-5 py-3 font-semibold text-slate-700">Year</th>
                        <th className="text-left px-5 py-3 font-semibold text-slate-700">Guideline Rate</th>
                        <th className="text-left px-5 py-3 font-semibold text-slate-700">Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ontarioGuidelines.map((g, i) => (
                        <tr key={g.year} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                          <td className="px-5 py-3 font-medium text-slate-900">{g.year}</td>
                          <td className="px-5 py-3 text-slate-700">{g.rate}</td>
                          <td className="px-5 py-3 text-slate-400 text-xs">
                            {g.year === "2021" || g.year === "2020" ? "Government freeze" : g.year === "2022" ? "COVID recovery period" : ""}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mb-8">
                  Source: Ontario Ministry of Municipal Affairs and Housing. Always verify at ontario.ca for the most current figure.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3">New Unit Exemption</h3>
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 mb-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-amber-900 mb-1">No rent control on post-2018 units</p>
                      <p className="text-sm text-amber-800 leading-relaxed">
                        Units first occupied for residential purposes <strong>after November 15, 2018</strong> are
                        not subject to the rent increase guideline. Your landlord may raise rent by any amount
                        with proper notice. This applies regardless of when you signed your lease — it is based
                        on when the unit was <em>first</em> occupied as a residence.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-3">Above-Guideline Increases (AGIs)</h3>
                <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                  A landlord who wants to raise rent beyond the guideline must apply to the LTB. The LTB
                  only grants AGIs for specific reasons:
                </p>
                <ul className="flex flex-col gap-2.5 text-sm text-slate-700 mb-4">
                  {[
                    "Extraordinary increases in property taxes or municipal utility costs",
                    "Significant capital expenditures — major repairs or improvements to the building",
                    "Increases in operating costs for security services",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <strong>Tenant rights at an AGI hearing:</strong> If your landlord files an AGI application,
                    you will receive a copy and have the right to contest it at a formal LTB hearing. You can
                    dispute the necessity of the expenditures, their reasonableness, or the accuracy of the
                    claimed costs. Even if an AGI is granted, increases are typically phased in over three years.
                    Consider contacting a tenant duty counsel before the hearing.
                  </p>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-4">How to Dispute an Illegal Rent Increase</h3>
                <div className="flex flex-col gap-4">
                  {ontarioDisputeSteps.map((item, i) => (
                    <div key={item.step} className="flex items-start gap-4 bg-slate-50 rounded-xl p-5 border border-slate-100">
                      <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm mb-1">{item.step}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── British Columbia ── */}
              <div id="british-columbia">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">British Columbia</h2>
                <p className="text-sm text-slate-500 mb-5">Residential Tenancy Act · Residential Tenancy Branch (RTB)</p>
                <ul className="flex flex-col gap-3 mb-5">
                  {[
                    "BC rent control applies to ALL residential units — there is no new-unit exemption like Ontario.",
                    "The annual allowable increase is set each fall by the provincial government and takes effect January 1.",
                    "2025 allowable increase: 3.0%. 2026 allowable increase: 3.0% (announced by BC government).",
                    "The increase was previously tied to BC CPI, but the formula was restructured — now it is simply the government-announced figure.",
                    "Rent can only be increased once every 12 months for the same tenant in the same unit.",
                    "Landlords must give at least 3 full rental months written notice before the increase takes effect. The effective date must be the last day of a rental period.",
                    "Proper notice can be given using RTB-7 form or a written letter that includes the amount of the increase and the date it takes effect.",
                    "If the notice does not meet legal requirements, the increase is not enforceable.",
                  ].map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <strong>Dispute process:</strong> File an Application for Dispute Resolution at the Residential
                    Tenancy Branch (gov.bc.ca/tenants). Hearings are typically conducted by teleconference.
                    If the increase exceeds the allowable amount, the RTB can void the increase and order a refund.
                  </p>
                </div>
              </div>

              {/* ── Alberta ── */}
              <div id="alberta">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Alberta</h2>
                <p className="text-sm text-slate-500 mb-5">Residential Tenancies Act · Residential Tenancy Dispute Resolution Service (RTDRS)</p>
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 mb-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <p className="text-sm text-amber-800">
                      <strong>Alberta has no rent control.</strong> There is no cap on how much a landlord
                      can raise rent. However, procedural rules still apply — proper notice is required and
                      rent can only be increased once per year.
                    </p>
                  </div>
                </div>
                <ul className="flex flex-col gap-3 mb-5">
                  {[
                    "Rent can only be increased once every 12 months for the same tenant (in force since 2023 amendments to the Residential Tenancies Statutes Amendment Act).",
                    "For annual (fixed-term) tenancies: at least 3 full months written notice required.",
                    "For periodic (month-to-month) tenancies: one full rental period written notice required.",
                    "Notice must state the new rent amount and the date it takes effect.",
                    "Tenants cannot challenge the amount of an increase at the RTDRS — only procedural violations (improper notice, more than one increase in 12 months) can be disputed.",
                  ].map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Quebec ── */}
              <div id="quebec">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Quebec</h2>
                <p className="text-sm text-slate-500 mb-5">Civil Code of Quebec · Tribunal administratif du logement (TAL)</p>
                <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                  Quebec's system differs fundamentally from other provinces. Rather than a single guideline
                  percentage, the Tribunal administratif du logement (TAL) publishes annual revision factors
                  for different cost components: building expenses, property taxes, insurance, and management
                  fees. Rent increases are calculated based on the landlord's actual costs.
                </p>
                <ul className="flex flex-col gap-3 mb-5">
                  {[
                    "For leases of 12 months or more, the landlord must send written notice of lease renewal (with any proposed rent change) between 3 and 6 months before the lease expires.",
                    "For leases shorter than 12 months, notice must be given between 1 and 2 months before expiry.",
                    "The tenant has 1 month from receipt of the renewal notice to: (a) accept the proposed rent, (b) refuse the proposed rent and propose a different amount, or (c) refuse to renew the lease.",
                    "If the tenant refuses the proposed increase, the landlord can apply to the TAL to fix the rent. If the landlord does not apply within 1 month, the lease renews at the tenant's proposed rent.",
                    "Typical TAL-guided increases vary by building type — recent years have seen suggested increases of 4–8% depending on property expenses, taxes, and operating costs.",
                    "Security deposits of any kind are illegal in Quebec.",
                    "Any tenant can challenge a proposed increase at the TAL without paying a filing fee.",
                  ].map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Manitoba ── */}
              <div id="manitoba">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Manitoba</h2>
                <p className="text-sm text-slate-500 mb-5">The Residential Tenancies Act · Residential Tenancies Branch</p>
                <ul className="flex flex-col gap-3 mb-5">
                  {[
                    "Manitoba has provincial rent control through the Rent Stabilization Program.",
                    "The annual guideline for 2025 is 3%.",
                    "Landlords must give at least 3 months written notice before a rent increase takes effect.",
                    "Rent can only be raised once every 12 months.",
                    "Landlords may apply to the Residential Tenancies Branch for an above-guideline increase in exceptional circumstances.",
                    "Tenants can dispute improper increases with the Residential Tenancies Branch — there is no filing fee for tenants.",
                  ].map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Saskatchewan ── */}
              <div id="saskatchewan">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Saskatchewan</h2>
                <p className="text-sm text-slate-500 mb-5">The Residential Tenancies Act, 2006 · Office of Residential Tenancies (ORT)</p>
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-5">
                  <p className="text-sm text-amber-800">
                    <strong>No rent control in Saskatchewan.</strong> Landlords may increase rent by any
                    amount, but proper notice and frequency rules apply.
                  </p>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    "Rent can only be raised once every 12 months for an existing tenant.",
                    "For month-to-month tenancies: at least 1 full rental month written notice required.",
                    "For annual fixed-term tenancies: at least 3 months written notice required.",
                    "Tenants can file with the ORT if procedural notice rules are violated, but cannot challenge the amount of the increase.",
                  ].map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Atlantic Provinces ── */}
              <div id="atlantic">
                <h2 className="text-2xl font-bold text-slate-900 mb-5">Atlantic Provinces</h2>

                <div className="space-y-6">
                  <div className="border border-slate-100 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-900 mb-1">New Brunswick</h3>
                    <p className="text-xs text-slate-500 mb-3">Residential Tenancies Act · Residential Tenancy Tribunal (RTT)</p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      A 3% annual cap on rent increases has been in place since February 2025. Landlords must
                      give at least 3 months written notice. Tenants can file a dispute with the Residential
                      Tenancy Tribunal (RTT) at no cost — the RTT is free for tenants.
                    </p>
                  </div>

                  <div className="border border-slate-100 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-900 mb-1">Nova Scotia</h3>
                    <p className="text-xs text-slate-500 mb-3">Residential Tenancies Act · Residential Tenancies Program</p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Nova Scotia's Interim Residential Rental Increase Cap Act set a 5% annual cap, which has
                      been extended through 2027. Landlords must give at least 4 months written notice.
                      Disputes are handled by the Residential Tenancies Program — free for tenants.
                    </p>
                  </div>

                  <div className="border border-slate-100 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-900 mb-1">Prince Edward Island</h3>
                    <p className="text-xs text-slate-500 mb-3">Rental of Residential Property Act · Director of Residential Tenancy (IRAC)</p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      The Director of Residential Tenancy (part of the Island Regulatory and Appeals Commission)
                      sets annual increase caps. The cap was 3% for both 2024 and 2025. Landlords must give
                      3 months written notice. Disputes are filed with IRAC at no cost.
                    </p>
                  </div>
                </div>
              </div>

              {/* ── US Jurisdictions ── */}
              <div id="us">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Key US Jurisdictions</h2>
                <p className="text-sm text-slate-500 mb-5">Selected states and cities with rent control or significant tenant protections</p>

                <div className="space-y-6">
                  <div className="border border-slate-100 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-900 mb-1">New York City</h3>
                    <p className="text-sm text-slate-700 leading-relaxed mb-3">
                      NYC's Rent Stabilization system covers approximately 1 million apartments, primarily in
                      buildings built before 1974 with 6+ units. The Rent Guidelines Board sets annual
                      increases: for leases beginning in 2025, the increases are <strong>2.75% for 1-year
                      leases</strong> and <strong>5.25% for 2-year leases</strong>. Landlords must renew
                      stabilized leases at the legal regulated rent. Rent-controlled units (a separate,
                      older category) have even stronger protections.
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      The Good Cause Eviction law (enacted 2024) extends additional protections statewide,
                      limiting rent increases for larger landlords in certain markets to CPI + 5% or 10%,
                      whichever is lower, and requiring just cause for non-renewal.
                    </p>
                  </div>

                  <div className="border border-slate-100 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-900 mb-1">California – AB 1482 (Statewide)</h3>
                    <p className="text-sm text-slate-700 leading-relaxed mb-3">
                      California's Tenant Protection Act (AB 1482) caps annual rent increases at the
                      <strong> lower of 5% + local CPI, or 10% total</strong>. It applies to most residential
                      rental units in buildings that are 15 or more years old.
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong>Exempt from AB 1482:</strong> Single-family homes where the tenant received
                      written notice of the exemption; condominiums where the tenant received written notice;
                      and buildings constructed after February 1, 1995 (in areas with local rent ordinances —
                      the date varies by jurisdiction). Local ordinances in cities like Los Angeles, San
                      Francisco, Oakland, and San Jose provide <em>additional</em> protections on top of
                      state law.
                    </p>
                  </div>

                  <div className="border border-slate-100 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-900 mb-1">Los Angeles – RSO</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      The LA Rent Stabilization Ordinance (RSO) covers most residential units in buildings
                      constructed on or before October 1, 1978. The allowable annual increase has recently
                      been set at 4%. The Housing and Community Investment Department (HCIDLA) administers the
                      RSO. Landlords must register RSO units and cannot raise rent above the allowable amount
                      without HCIDLA approval. San Francisco, Oakland, and San Jose each have their own
                      separate local rent control ordinances with distinct rules.
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Full comparison table ── */}
              <div id="comparison">
                <h2 className="text-2xl font-bold text-slate-900 mb-5">Canadian Province Comparison Table</h2>
                <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <th className="text-left px-4 py-3 font-semibold text-slate-700">Province</th>
                        <th className="text-left px-4 py-3 font-semibold text-slate-700">Rent Control</th>
                        <th className="text-left px-4 py-3 font-semibold text-slate-700">Current Cap</th>
                        <th className="text-left px-4 py-3 font-semibold text-slate-700">Notice Period</th>
                        <th className="text-left px-4 py-3 font-semibold text-slate-700">Dispute Body</th>
                      </tr>
                    </thead>
                    <tbody>
                      {provincialTable.map((row, i) => (
                        <tr key={row.province} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                          <td className="px-4 py-3 font-medium text-slate-900">{row.province}</td>
                          <td className="px-4 py-3 text-slate-700">{row.rentControl}</td>
                          <td className="px-4 py-3 text-slate-700">{row.currentCap}</td>
                          <td className="px-4 py-3 text-slate-600">{row.noticePeriod}</td>
                          <td className="px-4 py-3 text-slate-600">{row.disputeBody}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Caps and notice periods change annually. Always verify with the provincial tribunal or government website.
                </p>
              </div>

              {/* ── FAQ ── */}
              <div id="faq">
                <h2 className="text-2xl font-bold text-slate-900 mb-5">Frequently Asked Questions</h2>
                <div className="border border-slate-100 rounded-xl px-6">
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your lease&apos;s rent increase clause</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and our AI will flag any rent increase provisions that may
                  exceed your legal protections.
                </p>
                <Link
                  href="/upload"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                >
                  <Upload className="w-4 h-4" aria-hidden="true" />
                  Analyze My Lease
                </Link>
                <p className="text-xs text-blue-200 mt-3 text-center">Not legal advice</p>
              </div>

              {/* Jump links */}
              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Jump to Province</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Ontario", href: "#ontario" },
                    { label: "British Columbia", href: "#british-columbia" },
                    { label: "Alberta", href: "#alberta" },
                    { label: "Quebec", href: "#quebec" },
                    { label: "Manitoba", href: "#manitoba" },
                    { label: "Saskatchewan", href: "#saskatchewan" },
                    { label: "Atlantic Provinces", href: "#atlantic" },
                    { label: "US Jurisdictions", href: "#us" },
                    { label: "Comparison Table", href: "#comparison" },
                    { label: "FAQ", href: "#faq" },
                  ].map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                        <ChevronRight className="w-3 h-3" aria-hidden="true" />
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Pages</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Rent Increase Clause", href: "/lease-clause/rent-increase" },
                    { label: "Tenant Rights in Canada", href: "/tenant-rights/canada" },
                    { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
                    { label: "Breaking a Lease", href: "/tenant-rights/breaking-a-lease" },
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
