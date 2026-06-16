import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LogOut, CheckCircle, AlertTriangle, ChevronRight, Upload, FileText, Scale, Clock, MapPin } from "lucide-react";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Breaking a Lease in Ontario – Your Rights & Options | LeasePlain",
  description:
    "Can you break a lease early in Ontario? Learn your options: subletting, assignment, N9 notice, domestic violence provisions, and what the landlord can legally charge.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/breaking-a-lease" },
  openGraph: {
    type: "website",
    title: "Breaking a Lease in Ontario – Your Rights & Options | LeasePlain",
    description: "Can you break a lease early in Ontario? Learn your options: subletting, assignment, N9 notice, domestic violence provisions, and what the landlord can legally charge.",
    url: "https://leaseplain.com/tenant-rights/breaking-a-lease",
  },
  keywords: ["breaking a lease Ontario", "early lease termination", "subletting Ontario", "N9 notice", "how to break a lease Canada"],
};

const legalPaths = [
  {
    title: "Subletting",
    rtaRef: "RTA s. 97",
    form: "No form — written request to landlord",
    notice: "Request landlord consent in writing",
    badge: "Temporary Departure",
    badgeColor: "blue",
    description:
      "Subletting means you temporarily hand your unit to another person (the subtenant) for a defined period, then return and resume the tenancy. You remain the tenant of record and remain responsible for rent and any damage the subtenant causes.",
    keyPoints: [
      "Landlord must consent, but cannot arbitrarily or unreasonably refuse (RTA s. 97(4)).",
      "If the landlord refuses without a valid reason, you can apply to the LTB for an order permitting the sublet.",
      "You stay on the hook — if the subtenant doesn't pay, the landlord looks to you.",
      "Best for work secondments, travel, or medical absences where you plan to return.",
    ],
  },
  {
    title: "Assignment",
    rtaRef: "RTA s. 95",
    form: "No specific form — written agreement",
    notice: "Request landlord consent; 30-day termination right if refused (s. 95(5))",
    badge: "Permanent Transfer",
    badgeColor: "green",
    description:
      "Assignment transfers all of your rights and responsibilities under the lease to a new tenant permanently. Once accepted, you are generally released from all future obligations.",
    keyPoints: [
      "Landlord must consent, but cannot arbitrarily refuse (RTA s. 95(3)).",
      "If landlord refuses without a valid reason, you may terminate the tenancy with 30 days written notice (RTA s. 95(5)).",
      "Your application to the LTB must be made within 30 days of the landlord's refusal.",
      "The new tenant takes on your existing rental rate — landlord cannot reset rent on assignment.",
      "Best option when you are permanently leaving before the fixed term expires.",
    ],
  },
  {
    title: "Mutual Agreement (N11)",
    rtaRef: "RTA s. 77",
    form: "Form N11 — Agreement to End the Tenancy",
    notice: "As agreed — any date both parties consent to",
    badge: "Negotiated Exit",
    badgeColor: "purple",
    description:
      "Both you and your landlord agree in writing to end the tenancy on a specific date. Both parties sign the LTB's Form N11. No grounds are required — this is purely a negotiated exit.",
    keyPoints: [
      "Tenant does not need any legal justification — any reason will do if landlord agrees.",
      "Landlord cannot pressure or coerce the tenant to sign an N11 (that would be an illegal act under the RTA).",
      "Once signed, it is binding — do not sign unless you are certain of your exit date.",
      "Fastest and least costly route when the landlord is co-operative.",
      "Tip: offer to help find a replacement tenant to give the landlord an incentive to agree.",
    ],
  },
  {
    title: "Early Termination for Cause (N9)",
    rtaRef: "RTA ss. 47, 47.01",
    form: "Form N9 (tenant's notice to terminate) or Form N15 (domestic violence)",
    notice: "28 days (domestic violence); 60 days (month-to-month or mid-term for cause)",
    badge: "For Cause / Safety",
    badgeColor: "amber",
    description:
      "In specific circumstances, the RTA allows a tenant to terminate unilaterally before the lease expires. The most significant is the domestic violence provision — but landlord breach of material obligations also qualifies.",
    keyPoints: [
      "Domestic or sexual violence (RTA s. 47.01): 28 days notice using Form N15. Supporting documentation (police report, restraining order, or a statement from a qualifying professional) required. Privacy protections apply.",
      "Landlord harassment or failure to maintain the unit in a good state of repair may justify early termination after the tenant gives the landlord reasonable opportunity to remedy.",
      "Care homes (RTA s. 47): 10-day notice for any reason; tenant may also give notice if care services are discontinued.",
      "Notice periods: month-to-month tenancy — 60 days ending on the last day of a rental period; fixed-term lease served mid-term for cause — same 60-day rule applies.",
    ],
  },
  {
    title: "Let the Fixed Term Expire",
    rtaRef: "RTA s. 38",
    form: "Form N9 (if giving notice not to renew)",
    notice: "60 days before end of fixed term (or no notice to stay on month-to-month)",
    badge: "Simplest Option",
    badgeColor: "slate",
    description:
      "The cleanest exit. At the end of a fixed-term lease, you can simply leave — no legal grounds required. Under Ontario law, the tenancy automatically converts to month-to-month if you do nothing. If you want to leave on the last day of the fixed term, give 60 days written notice before that date.",
    keyPoints: [
      "No obligation to renew. A fixed-term lease ends on the expiry date if proper notice is given.",
      "Give Form N9 at least 60 days before the last day of the fixed term, ending on the last day of a rental period.",
      "If you forget to give notice, the tenancy becomes month-to-month — you can then end it with 60 days notice from the last day of any rental period.",
      "This is the only option with zero risk of financial liability to the landlord.",
    ],
  },
];

const noticePeriods = [
  { scenario: "Month-to-month — standard notice to leave", period: "60 days, ending last day of rental period", form: "N9" },
  { scenario: "Fixed-term — notice at end of term", period: "60 days before expiry date", form: "N9" },
  { scenario: "Fixed-term — assignment refused by landlord", period: "30 days after refusal (under RTA s. 95(5))", form: "N9" },
  { scenario: "Domestic/sexual violence", period: "28 days — can terminate mid-period", form: "N15" },
  { scenario: "Care home — any reason", period: "10 days", form: "N9" },
];

const landlordLimitations = [
  "Cannot lock you out or remove your belongings — must obtain an LTB eviction order enforced by the Sheriff.",
  "Must take reasonable steps to re-rent the unit — the duty to mitigate under RTA s. 16 is mandatory.",
  "Cannot charge you rent for any period after a new tenant could reasonably have been found.",
  "Large flat 'lease break fees' or fixed penalty clauses in leases are generally unenforceable under Ontario law.",
  "Cannot keep your last month's rent deposit for damages — it must be applied to your final month's rent.",
  "Cannot claim the entire remaining term's rent as damages if the unit is re-rented quickly.",
];

const provincialComparison = [
  {
    province: "British Columbia",
    flag: "BC",
    rules: [
      "Assignment and subletting governed by RTA s. 34 — landlord consent required, cannot be unreasonably withheld.",
      "Tenant can dispute refusal to the Residential Tenancy Branch (RTB).",
      "Landlord has a duty to mitigate losses.",
      "Domestic violence: 1-month notice with supporting documents.",
    ],
  },
  {
    province: "Alberta",
    flag: "AB",
    rules: [
      "Early termination generally requires landlord agreement or a material breach by the landlord (RTA s. 9).",
      "Subletting requires landlord consent — landlord can refuse for any reason.",
      "If you break a lease without cause, the landlord can claim actual losses (unpaid rent while unit is vacant, re-advertising costs).",
      "Security deposit forfeiture is contested — landlord must prove actual losses, not merely forfeit the deposit.",
    ],
  },
  {
    province: "Quebec",
    flag: "QC",
    rules: [
      "Civil Code art. 1974: tenant may terminate with 3 months notice for employment relocation, illness requiring long-term care, or domestic violence.",
      "Otherwise: only by landlord consent or by finding an acceptable sublet/assignment.",
      "Tenant may always sublet — landlord cannot refuse without a serious reason and must respond within 15 days.",
      "Rent is regulated — assignment tenant inherits the rent amount.",
    ],
  },
];

const faqs = [
  {
    question: "Can a landlord sue me for breaking a lease early?",
    answer:
      "Yes, but only for actual, proven losses — not for the full remaining term of rent. In Ontario, the landlord must actively try to re-rent the unit (RTA s. 16, the duty to mitigate). If the unit is re-rented the month after you leave, the landlord's recoverable loss is typically one month's rent plus reasonable re-advertising costs. A landlord who fails to mitigate cannot recover rent for months the unit sat empty unnecessarily.",
  },
  {
    question: "What is the landlord's duty to mitigate in Ontario?",
    answer:
      "Under RTA s. 16, a landlord cannot sit idle and charge you rent for the entire remaining term. They must take active steps to advertise, show the unit, and re-rent it at a comparable market rate. If they do not, any LTB or court award against you will be reduced to reflect what they could have recovered had they tried. Keep a record of your communications and any advertisements you see for comparable units.",
  },
  {
    question: "How does domestic violence affect lease termination rights?",
    answer:
      "Under RTA s. 47.01, a tenant who has experienced domestic or sexual violence can terminate with only 28 days notice at any time — even mid-rental period — by serving Form N15. Supporting documentation is required: a police report, a restraining order, or a statement from a physician, nurse practitioner, registered social worker, or qualified shelter worker. The landlord is legally prohibited from sharing this information with others, including other tenants.",
  },
  {
    question: "Does breaking a lease hurt my rental history?",
    answer:
      "There is no centralized 'rental history database' in Ontario — landlords rely on credit reports, references, and their own judgment. Breaking a lease without notice or leaving rent unpaid can result in a collection account on your credit report if the landlord obtains a judgment against you. The safest path is always to give formal written notice, document everything, and try to find a replacement tenant so the landlord's losses are minimal.",
  },
  {
    question: "What happens to my security deposit if I break the lease?",
    answer:
      "Ontario does not permit damage deposits — only a last month's rent (LMR) deposit. The LMR must be applied to your final month's rent; the landlord cannot keep it as a lease-break penalty. If the landlord claims you owe additional amounts, those must be pursued through the LTB with evidence of actual loss. Any lease clause purporting to forfeit the LMR as a penalty is unenforceable.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/tenant-rights/breaking-a-lease",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".speakable-summary"],
  },
};

const badgeClasses: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  green: "bg-green-50 text-green-700 border-green-100",
  purple: "bg-purple-50 text-purple-700 border-purple-100",
  amber: "bg-amber-50 text-amber-700 border-amber-100",
  slate: "bg-slate-100 text-slate-700 border-slate-200",
};

export default function BreakingALeasePage() {
  return (
    <>
      <ArticleSchema
        headline="Breaking a Lease in Ontario – Your Rights & Options"
        description="Can you break a lease early in Ontario? Learn your options: subletting, assignment, N9 notice, domestic violence provisions, and what the landlord can legally charge."
        url="https://leaseplain.com/tenant-rights/breaking-a-lease"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["breaking a lease Ontario", "early lease termination", "subletting Ontario", "N9 notice", "how to break a lease Canada"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tenant Rights", href: "https://leaseplain.com/tenant-rights" },
        { name: "Breaking a Lease", href: "https://leaseplain.com/tenant-rights/breaking-a-lease" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema).replace(/</g, "<") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "<") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Break a Lease in Ontario",
          "description": "A step-by-step guide to the five legal paths available to Ontario tenants who need to end a fixed-term lease early under the Residential Tenancies Act.",
          "step": [
            { "@type": "HowToStep", "position": 1, "name": "Consider subletting", "text": "If you plan to return, request the landlord's written consent to sublet the unit to a temporary subtenant. The landlord cannot arbitrarily refuse under RTA s. 97. You remain responsible for rent and any damage the subtenant causes." },
            { "@type": "HowToStep", "position": 2, "name": "Pursue assignment", "text": "If you are permanently leaving, request the landlord's consent to assign the lease to a new tenant under RTA s. 95. If the landlord refuses without a valid reason, you may terminate with 30 days written notice." },
            { "@type": "HowToStep", "position": 3, "name": "Negotiate a mutual agreement (N11)", "text": "Approach the landlord and negotiate an agreed exit date. Both parties sign LTB Form N11 (Agreement to End the Tenancy). This is the fastest route when the landlord is cooperative — consider offering to find a replacement tenant as an incentive." },
            { "@type": "HowToStep", "position": 4, "name": "Terminate for cause or safety (N9 / N15)", "text": "If you have experienced domestic or sexual violence, serve Form N15 with supporting documentation for a 28-day termination under RTA s. 47.01. For other qualifying grounds (e.g., landlord breach of material obligations), serve Form N9 with at least 60 days notice." },
            { "@type": "HowToStep", "position": 5, "name": "Let the fixed term expire", "text": "Serve Form N9 at least 60 days before the last day of the fixed term, ending on the last day of a rental period. This is the only route with zero risk of financial liability — no grounds are required at the end of a fixed term." },
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
                <Link href="/tenant-rights" className="hover:underline">Tenant Rights</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>Breaking a Lease</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
                <LogOut className="w-3.5 h-3.5" aria-hidden="true" />
                Tenant Rights Guide
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Breaking a Lease in Ontario: Your Options and Rights
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Needing to leave before your lease ends is stressful — but Ontario tenants have more
                options than most landlords let on. There are five legitimate legal paths to end a
                tenancy early under the Residential Tenancies Act, and strict limits on what a
                landlord can recover from you if you leave.
              </p>
            </div>
          </section>

          {/* Main Content + Sidebar */}
          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-14">

                {/* Five Legal Paths */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Five Legal Paths to Break a Lease in Ontario
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Ontario&apos;s Residential Tenancies Act (RTA) provides tenants with several
                    legitimate routes out of a fixed-term lease. The right option depends on your
                    situation and timeline.
                  </p>
                  <div className="flex flex-col gap-5">
                    {legalPaths.map((path) => (
                      <div key={path.title} className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                        <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                          <div>
                            <h3 className="font-semibold text-slate-900 text-base">{path.title}</h3>
                            <span className="text-xs text-slate-400 font-medium">{path.rtaRef}</span>
                          </div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeClasses[path.badgeColor]}`}>
                              {path.badge}
                            </span>
                            {path.form && (
                              <div className="flex items-center gap-1 text-xs bg-slate-50 text-slate-600 px-2 py-1 rounded-full border border-slate-200 flex-shrink-0">
                                <FileText className="w-3 h-3" aria-hidden="true" />
                                {path.form}
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">{path.description}</p>
                        <ul className="flex flex-col gap-2">
                          {path.keyPoints.map((pt, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                              <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                              {pt}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 pt-3 border-t border-slate-50">
                          <span className="text-xs text-slate-500">
                            <Clock className="w-3 h-3 inline mr-1" aria-hidden="true" />
                            Notice: {path.notice}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notice Periods Table */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    N9 Notice Periods at a Glance
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <th className="text-left py-3 px-4 font-semibold text-slate-700 rounded-tl-lg">Scenario</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-700">Notice Period</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-700 rounded-tr-lg">Form</th>
                        </tr>
                      </thead>
                      <tbody>
                        {noticePeriods.map((row, i) => (
                          <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                            <td className="py-3 px-4 text-slate-700">{row.scenario}</td>
                            <td className="py-3 px-4 text-slate-600">{row.period}</td>
                            <td className="py-3 px-4">
                              <span className="inline-flex items-center gap-1 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-full">
                                <FileText className="w-3 h-3" aria-hidden="true" />
                                {row.form}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Duty to Mitigate */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    The Landlord&apos;s Duty to Mitigate (RTA s. 16)
                  </h2>
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-6 mb-4">
                    <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                      Key Principle
                    </h3>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      Under RTA s. 16, your landlord is legally required to take reasonable steps to
                      re-rent the unit after you leave. They cannot simply lock the door, leave the
                      unit empty for six months, and then bill you for all that lost rent. Their duty
                      to mitigate is a hard limit on what they can recover.
                    </p>
                  </div>
                  <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-3">What &quot;mitigation&quot; requires</h3>
                    <ul className="flex flex-col gap-2.5">
                      {[
                        "Advertising the unit promptly after you vacate (or give notice).",
                        "Showing the unit to prospective tenants at reasonable times.",
                        "Renting at a comparable market rate — not inflating rent to deter applicants.",
                        "Accepting a qualified replacement tenant you identify (reasonable grounds to refuse still apply).",
                      ].map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                      Practical tip: document everything. Screenshot or print any online listings for
                      comparable units in your building or neighbourhood. If the landlord later claims
                      the unit was vacant for months, this evidence shows comparable units were
                      available and that a reasonable landlord would have re-rented quickly.
                    </p>
                  </div>
                </div>

                {/* What landlords can/cannot claim */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    What the Landlord Can and Cannot Recover
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                      <h3 className="font-semibold text-red-800 mb-3 text-sm">Cannot claim</h3>
                      <ul className="flex flex-col gap-2">
                        {[
                          "Rent for the entire remaining lease term",
                          "A fixed 'lease break fee' written into the lease",
                          "Your last month's rent deposit as a penalty",
                          "Damages that are speculative or unproven",
                          "Rent for months after a new tenant moves in",
                        ].map((item, i) => (
                          <li key={i} className="text-xs text-red-700 leading-relaxed flex items-start gap-1.5">
                            <span className="mt-0.5 text-red-400">✗</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded-xl p-5">
                      <h3 className="font-semibold text-green-800 mb-3 text-sm">Can legitimately claim</h3>
                      <ul className="flex flex-col gap-2">
                        {[
                          "Rent for months the unit sits vacant (up to re-rental)",
                          "Reasonable re-advertising and listing costs",
                          "Actual repair costs if you caused damage",
                          "Difference if re-rented at a lower rate (unusual)",
                        ].map((item, i) => (
                          <li key={i} className="text-xs text-green-700 leading-relaxed flex items-start gap-1.5">
                            <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 text-sm">What your landlord cannot do</h3>
                    <ul className="flex flex-col gap-2.5">
                      {landlordLimitations.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                          <Scale className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Other Provinces */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Breaking a Lease in Other Provinces
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    Tenant rights vary significantly across Canada. Here is a quick overview of the
                    rules in BC, Alberta, and Quebec.
                  </p>
                  <div className="flex flex-col gap-4">
                    {provincialComparison.map((prov) => (
                      <div key={prov.province} className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {prov.flag}
                          </span>
                          <h3 className="font-semibold text-slate-900 flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                            {prov.province}
                          </h3>
                        </div>
                        <ul className="flex flex-col gap-2">
                          {prov.rules.map((rule, i) => (
                            <li key={i} className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                              <span className="text-slate-300 mt-0.5">•</span>
                              {rule}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Tip */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-3">Practical Tip: Negotiate First</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Before pursuing formal routes, talk to your landlord. Many landlords are willing
                    to sign an N11 (mutual agreement to terminate) when a tenant has a legitimate
                    reason to leave — especially if you offer to help find a replacement tenant.
                    A co-operative exit is almost always faster and less costly than a formal process.
                    Document all communications in writing (email is ideal) so you have a record.
                  </p>
                </div>

                {/* FAQ */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="flex flex-col gap-4">
                    {faqs.map((faq, i) => (
                      <div key={i} className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                        <h3 className="font-semibold text-slate-900 mb-2 text-sm">{faq.question}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Sidebar */}
              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Check your early termination clause</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your lease and our AI will explain your early termination options and flag
                    any unenforceable penalty clauses.
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

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm">Key RTA Sections</h3>
                  <p className="text-xs text-slate-500 mb-3">Ontario Residential Tenancies Act, 2006</p>
                  <ul className="flex flex-col gap-2 text-xs text-slate-600">
                    {[
                      { ref: "s. 95", desc: "Assignment — landlord consent, right to terminate if refused" },
                      { ref: "s. 97", desc: "Subletting — tenant rights, landlord cannot unreasonably refuse" },
                      { ref: "s. 16", desc: "Duty to mitigate — landlord must seek replacement tenant" },
                      { ref: "s. 47.01", desc: "Domestic violence — 28-day termination with N15" },
                      { ref: "s. 77", desc: "N11 — agreement to end tenancy" },
                      { ref: "s. 38", desc: "Fixed-term expiry — automatic month-to-month" },
                    ].map((item) => (
                      <li key={item.ref} className="flex gap-2">
                        <span className="font-semibold text-blue-700 flex-shrink-0">{item.ref}</span>
                        <span>{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Pages</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Early Termination Clause", href: "/lease-clause/early-termination" },
                      { label: "Subletting Clause", href: "/lease-clause/subletting" },
                      { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
                      { label: "Eviction Notices", href: "/tenant-rights/eviction-notices" },
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

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                  <h3 className="font-semibold text-slate-800 mb-2 text-sm">Need Legal Help?</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    For free legal advice contact <strong>Legal Aid Ontario</strong> at 1-800-668-8258,
                    or find your local Community Legal Clinic at{" "}
                    <strong>legalaid.on.ca</strong>.
                    <br /><br />
                    LTB information line: <strong>1-888-332-3234</strong>.
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
