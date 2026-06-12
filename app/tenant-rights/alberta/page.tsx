import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, ChevronRight, Upload, AlertTriangle, CheckCircle } from "lucide-react";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Alberta Tenant Rights: Residential Tenancies Act, RTDRS, Deposits, and Rent | LeasePlain",
  description:
    "Complete guide to Alberta tenant rights — the Residential Tenancies Act (RSA 2000), 2023 amendments, RTDRS dispute resolution, security deposit rules, eviction notices, and no-rent-control explained.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/alberta" },
  openGraph: {
    type: "website",
    title: "Alberta Tenant Rights: Residential Tenancies Act, RTDRS, Deposits, and Rent | LeasePlain",
    description: "Complete guide to Alberta tenant rights — the Residential Tenancies Act (RSA 2000), 2023 amendments, RTDRS dispute resolution, security deposit rules, eviction notices, and no-rent-control explained.",
    url: "https://leaseplain.com/tenant-rights/alberta",
  },
  keywords: ["Alberta tenant rights", "Residential Tenancies Act Alberta", "RTDRS Alberta", "Alberta rent increase rules", "Alberta security deposit", "Alberta eviction notice", "rent control Alberta"],
};

const depositRules = [
  "Maximum: one month's rent at the time the deposit is collected (RTA s.34) — this cap cannot be exceeded even if a landlord labels additional amounts as 'pet fees' or 'admin fees'",
  "Pet deposits are permitted but the combined total of security deposit plus any pet deposit cannot exceed one month's rent",
  "Landlord must hold the deposit in trust — it cannot be co-mingled with operating funds",
  "Interest must be paid annually at the prescribed rate (set by regulation each year — typically 0.1–1% in recent years); interest accrues from the date the deposit is received",
  "If no deductions: landlord must return the full deposit with interest within 10 days of tenancy end",
  "If deductions are claimed: landlord must provide an itemized written statement of account within 30 days of the tenant giving up possession",
  "If the landlord misses the 30-day deadline for the itemized statement: the tenant may claim the full deposit back through RTDRS or court",
];

const noticePeriods = [
  { who: "Tenant (monthly)", period: "1 full month", detail: "Effective at the end of a monthly tenancy period; notice must be given before the first day of the month" },
  { who: "Tenant (weekly)", period: "1 week", detail: "Effective at the end of a weekly tenancy period" },
  { who: "Landlord — personal use (periodic)", period: "3 full months", detail: "Landlord or close family member requires the unit for personal use" },
  { who: "Landlord — non-payment (14-day)", period: "14 days", detail: "If tenant pays all arrears within 14 days of receiving the notice, the notice is void" },
  { who: "Landlord — substantial breach", period: "14 days", detail: "Significant damage, disturbance, or repeated late payment; tenant can remedy within 14 days in some cases" },
  { who: "Fixed-term lease", period: "End date (no notice)", detail: "Ends on the agreed-upon end date — no notice required unless parties agree to renew or convert to periodic" },
];

const albertaRedFlags = [
  "Security deposit exceeding one month's rent (RTA s.34) — illegal; excess must be returned",
  "Pet deposit that when added to security deposit brings the total above one month's rent",
  "Clause not addressing where and how the deposit will be held in trust",
  "Lease purporting to increase rent during a fixed-term without explicit permission written into the original lease",
  "Rent increase notice shorter than 3 full months — insufficient under the Residential Tenancies Act",
  "More than one rent increase in any 365-day period — prohibited since the May 2023 amendment",
  "Lease waiving the tenant's right to a written statement of account for deposit deductions",
  "Clauses imposing 'administrative fees' or 'late fees' above what Alberta law permits (late charges must be reasonable and stated in the lease)",
  "Verbal rent increase notice — not valid; all notices must be in writing",
  "Landlord attempting to use self-help eviction (changing locks, removing belongings) instead of proper RTDRS or court process",
];

const faqItems = [
  {
    question: "Is there rent control in Alberta?",
    answer: "No. Alberta has no provincial rent control — landlords may raise rent by any amount, including 10%, 30%, or more, provided they follow the required notice rules. Unlike Ontario or BC, which have annual rent increase guidelines, Alberta imposes no cap on the dollar amount or percentage of a rent increase. The only protections Alberta provides are: (1) a minimum notice period of 3 full months (for annual or periodic tenancies); (2) a maximum frequency of once per 365-day period per tenant. These rules apply since May 2023 amendments to the Residential Tenancies Act.",
  },
  {
    question: "How much notice does my landlord need to give to raise rent in Alberta?",
    answer: "For an annual or monthly (periodic) tenancy, the landlord must give at least 3 full calendar months' written notice before the rent increase takes effect. 'Full months' means the notice must be given at least 3 complete rental periods in advance — for example, if your rent is due on the first of the month, a notice given on March 5 would not be effective until July 1 (the full months of April, May, and June must elapse). For a fixed-term lease, rent cannot be increased during the fixed term unless the original lease explicitly includes a clause permitting it. Verbal notices are not valid — the notice must be in writing.",
  },
  {
    question: "What is the RTDRS and how do I file a claim?",
    answer: "The Residential Tenancy Dispute Resolution Service (RTDRS) is Alberta's specialized tribunal for landlord-tenant disputes, established under the Residential Tenancies Act. It handles claims up to $100,000 (raised from $50,000 effective August 1, 2023). Filing fees are tiered by claim amount — $75 for claims up to $7,500 and $100 for claims above that. The RTDRS operates in Calgary, Edmonton, Red Deer, Lethbridge, and Grande Prairie; tenants in other areas can apply by written submission. Disputes are typically resolved within 30–60 days. The RTDRS can order: return of a security deposit, rent reductions, damages for breach of the lease, and termination of tenancy. Hearings are informal and parties can represent themselves without a lawyer.",
  },
  {
    question: "How much can a landlord charge as a security deposit in Alberta?",
    answer: "Under section 34 of the Residential Tenancies Act, the maximum security deposit a landlord can charge is one month's rent as of the time the deposit is collected. This cap is absolute — a landlord cannot charge more by labeling additional amounts as 'pet deposits,' 'admin fees,' or anything else. If a landlord collects a security deposit and a separate pet deposit, the two amounts combined cannot exceed one month's rent. If a landlord collects more than the permitted maximum, the excess must be returned to the tenant.",
  },
  {
    question: "How long does my landlord have to return my deposit in Alberta?",
    answer: "In Alberta, if the landlord makes no deductions, the security deposit (plus accrued interest) must be returned within 10 days of the tenancy ending. If the landlord intends to make deductions, they have 30 days from the date the tenant gives up possession to provide an itemized written statement of account detailing each deduction. If the landlord fails to provide this statement within 30 days, they lose the right to make deductions and the tenant can claim the full deposit back. The tenant can file at the RTDRS or provincial court (small claims) if the landlord does not comply.",
  },
];

export default function AlbertaTenantRightsPage() {
  return (
    <>
      <ArticleSchema
        headline="Alberta Tenant Rights: Residential Tenancies Act, RTDRS, Deposits, and Rent"
        description="Complete guide to Alberta tenant rights — the Residential Tenancies Act (RSA 2000), 2023 amendments, RTDRS dispute resolution, security deposit rules, eviction notices, and no-rent-control explained."
        url="https://leaseplain.com/tenant-rights/alberta"
        datePublished="2025-01-15"
        dateModified="2026-05-29"
        keywords={["Alberta tenant rights", "Residential Tenancies Act Alberta", "RTDRS Alberta", "Alberta rent increase rules", "Alberta security deposit"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tenant Rights", href: "https://leaseplain.com/tenant-rights" },
        { name: "Alberta", href: "https://leaseplain.com/tenant-rights/alberta" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer },
        })),
      }).replace(/</g, "<") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://leaseplain.com/tenant-rights/alberta",
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
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/tenant-rights" className="hover:underline">Tenant Rights</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Alberta</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Shield className="w-3.5 h-3.5" aria-hidden="true" />
              Alberta Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Alberta Tenant Rights: Residential Tenancies Act, RTDRS, Deposits, and Rent
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Alberta tenants are governed by the{" "}
              <em>Residential Tenancies Act</em> (RSA 2000, c. R-17.1), amended in 2023 to limit
              rent increases to once per year. Alberta is notable among Canadian provinces for
              having <strong>no rent control</strong> — but it has clear rules on deposits, notices,
              eviction, and dispute resolution through the RTDRS.
            </p>
          </div>
        </section>

        {/* Content + sidebar */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              {/* RTA overview */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Residential Tenancies Act (Alberta) Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The <em>Residential Tenancies Act</em> (RTA), RSA 2000, c. R-17.1, governs most
                  residential tenancies in Alberta — apartments, houses, townhouses, basement suites,
                  and condominiums rented from a private landlord. It does not apply to hotels, motels,
                  or social and supportive housing under specific programs.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The <strong>2023 amendments</strong> (effective May 2023) made a significant change:
                  landlords are now limited to raising rent <strong>once in any 365-day period</strong>
                  for the same tenant. Prior to this amendment, there was no restriction on the frequency
                  of rent increases — a landlord could theoretically raise rent every month with proper
                  notice. The one-per-year restriction now provides meaningful protection even in a
                  province without rent control.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The RTA also codifies the obligation to give proper written notice for all tenancy
                  changes — rent increases, terminations, and lease renewals — and sets out the
                  remedies available to both parties when these rules are violated.
                </p>

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <strong>Applicability:</strong> The RTA applies to tenancies entered into or
                    renewed after the Act came into force. Some provisions apply to all tenancies
                    regardless of when they were created. Mobile home site tenancies are governed
                    by the separate <em>Mobile Home Sites Tenancies Act</em>.
                  </p>
                </div>
              </div>

              {/* Tenancy types */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Types of Tenancy in Alberta</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Alberta distinguishes three main tenancy types, each with different rules — especially
                  for notice periods, rent increases, and how the tenancy ends.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      type: "Fixed-Term Tenancy",
                      description: "A lease with a defined start and end date (e.g., September 1 to August 31). The tenancy ends automatically on the end date — no notice is required from either party. If the tenant stays past the end date without signing a new lease, the tenancy typically converts to a monthly periodic tenancy. A landlord cannot increase rent during a fixed term unless the original lease explicitly includes a clause permitting mid-term increases.",
                    },
                    {
                      type: "Periodic Tenancy (Month-to-Month)",
                      description: "A tenancy with no fixed end date that continues from period to period (usually monthly). Either party can end it with proper notice: tenant gives 1 full month's notice; landlord gives 3 full months' notice for personal use (or 14 days for non-payment/breach). Rent can be increased once per 365 days with 3 full months' written notice.",
                    },
                    {
                      type: "Annual (Yearly) Tenancy",
                      description: "A periodic tenancy that runs year to year. The landlord must give at least 3 full months' notice before a rent increase. Notice to terminate must also be 3 full months for personal use, or as specified in the Act for other grounds. Annual tenancies are less common than monthly periodics or fixed-terms but are explicitly recognized in the Act.",
                    },
                  ].map((item) => (
                    <div key={item.type} className="bg-white border border-slate-100 rounded-xl p-5">
                      <h3 className="font-semibold text-slate-800 mb-2">{item.type}</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security deposits */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Security Deposit Rules in Alberta</h2>
                <ul className="flex flex-col gap-3">
                  {depositRules.map((rule) => (
                    <li key={rule} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {rule}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <strong>Interest on deposits:</strong> Unlike some provinces that set a fixed
                    interest rate, Alberta&apos;s prescribed rate is set by regulation and changes
                    annually. It has been very low in recent years (often under 1%). Landlords must
                    still calculate and pay it — failure to do so is a breach of the Act. Tenants
                    can request the interest payment or claim it through the RTDRS.
                  </p>
                </div>
              </div>

              {/* Rent increases */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Rent Increases in Alberta</h2>
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-5">
                  <p className="text-sm text-amber-800 font-semibold mb-1">No rent control — but notice rules are strict</p>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    Unlike Ontario (guideline of 2.5% for 2024) or BC (3.5% for 2024), Alberta imposes
                    no cap on how much rent can increase. A landlord can raise rent by 10%, 30%, or
                    any amount — as long as they follow the required notice procedure. The 2023
                    amendment to the RTA added one important restriction: only one increase per
                    365-day period per tenant.
                  </p>
                </div>

                <h3 className="font-semibold text-slate-800 mb-3 text-sm">Rules for a valid rent increase</h3>
                <ul className="flex flex-col gap-3 mb-5">
                  {[
                    "Notice must be in writing — verbal notices are not valid",
                    "For annual or monthly (periodic) tenancies: at least 3 full calendar months before the increase takes effect",
                    "For weekly tenancies: at least 12 weeks before the increase takes effect",
                    "Only one rent increase per 365-day period per tenant (since May 2023 amendment)",
                    "Fixed-term leases: rent cannot increase mid-term unless the lease explicitly allows it",
                    "If the landlord gives insufficient notice: the increase is not effective until proper notice has been given and the required time has elapsed — the original rent continues to apply in the interim",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <strong>Tenant option when notice is given:</strong> Alberta does not have
                    Quebec&apos;s formal refusal mechanism — there is no right to formally contest a
                    rent increase amount at a tribunal. If you receive a rent increase you cannot
                    afford, your options are to negotiate directly with the landlord, give proper
                    notice to vacate (1 full month), or, in rare cases, apply to the RTDRS if the
                    notice itself was defective (e.g., insufficient notice period).
                  </p>
                </div>
              </div>

              {/* RTDRS */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">RTDRS — Residential Tenancy Dispute Resolution Service</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The Residential Tenancy Dispute Resolution Service (RTDRS) is Alberta&apos;s
                  specialized tribunal for landlord-tenant disputes, established under the
                  Residential Tenancies Act. It is faster and less formal than going to court,
                  and parties can represent themselves without a lawyer.
                </p>

                <h3 className="font-semibold text-slate-800 mb-3 text-sm">Key facts about the RTDRS</h3>
                <div className="overflow-x-auto mb-5">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left p-3 border border-slate-100 font-semibold text-slate-700">Feature</th>
                        <th className="text-left p-3 border border-slate-100 font-semibold text-slate-700">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Maximum claim amount", "$100,000 (raised from $50,000 effective August 1, 2023)"],
                        ["Filing fee (claims up to $7,500)", "$75"],
                        ["Filing fee (claims over $7,500)", "$100"],
                        ["Typical resolution time", "30–60 days"],
                        ["Locations", "Calgary, Edmonton, Red Deer, Lethbridge, Grande Prairie"],
                        ["Other areas", "Written application process available"],
                        ["Representation", "Parties may self-represent; lawyers are permitted but not required"],
                        ["Format", "Informal hearing; both parties present evidence and documents"],
                      ].map(([feature, details]) => (
                        <tr key={feature} className="border-b border-slate-100">
                          <td className="p-3 text-slate-700 font-medium border border-slate-100">{feature}</td>
                          <td className="p-3 text-slate-600 border border-slate-100">{details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="font-semibold text-slate-800 mb-3 text-sm">What the RTDRS can order</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    "Return of a security deposit (with or without deductions)",
                    "Payment of damages for breach of the Act or lease",
                    "Rent reduction for failure to maintain habitable conditions",
                    "Termination of tenancy (for landlord or tenant applications)",
                    "Possession order (return of the unit to the tenant)",
                    "Compensation for costs and expenses caused by the other party's breach",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Eviction rules */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Eviction Rules in Alberta</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Alberta landlords must use proper notice and, if the tenant does not comply or vacate,
                  must apply to the RTDRS or court to enforce the eviction. <strong>Self-help eviction
                  is illegal</strong> — a landlord cannot change locks, remove belongings, or cut off
                  utilities to force a tenant out.
                </p>
                <div className="flex flex-col gap-4 mb-5">
                  {[
                    {
                      ground: "Non-payment of rent — 14-day notice",
                      detail: "The landlord must serve a Termination for Non-payment of Rent Notice. The tenant has 14 days to pay all arrears. If the tenant pays within 14 days, the notice is void and the tenancy continues. If the tenant does not pay, the landlord can apply to the RTDRS for a possession order.",
                    },
                    {
                      ground: "Substantial breach (damage or serious disturbance) — 14-day notice",
                      detail: "For significant damage to the property, repeated disturbances, or other substantial breaches of the lease. The landlord must specify the breach in writing. For some breaches, the tenant may be able to remedy the breach within the 14-day period; for others (e.g., deliberate destruction), the notice may be unconditional.",
                    },
                    {
                      ground: "Repeated late payment or significant breach — 14-day notice",
                      detail: "If a tenant has been in breach (including repeated late rent payments) on more than one occasion, the landlord may give a 14-day notice even if rent is currently paid up. The history of breaches is relevant.",
                    },
                    {
                      ground: "Landlord personal use (periodic tenancy) — 3 full months' notice",
                      detail: "The landlord or a close family member intends to personally occupy the dwelling. The landlord must give 3 full months' written notice. If the landlord does not actually move in or misrepresents the reason, the tenant may have a claim for damages.",
                    },
                    {
                      ground: "Fixed-term lease expiry — no notice required",
                      detail: "A fixed-term lease ends automatically on the end date stated in the lease. Neither party is required to give notice unless they wish to continue the tenancy or if the tenant intends to stay (in which case a new agreement should be signed or it converts to periodic).",
                    },
                  ].map((item) => (
                    <div key={item.ground} className="bg-white border border-slate-100 rounded-xl p-5">
                      <h3 className="font-semibold text-slate-800 mb-2 text-sm">{item.ground}</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notice periods table */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Notice Periods Summary</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left p-3 border border-slate-100 font-semibold text-slate-700">Situation</th>
                        <th className="text-left p-3 border border-slate-100 font-semibold text-slate-700">Notice Required</th>
                        <th className="text-left p-3 border border-slate-100 font-semibold text-slate-700">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {noticePeriods.map((row) => (
                        <tr key={`${row.who}-${row.period}`} className="border-b border-slate-100">
                          <td className="p-3 text-slate-700 font-medium border border-slate-100">{row.who}</td>
                          <td className="p-3 border border-slate-100">
                            <span className="font-semibold text-blue-700">{row.period}</span>
                          </td>
                          <td className="p-3 text-slate-600 border border-slate-100">{row.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Red flags */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags in Alberta Leases</h2>
                <div className="flex flex-col gap-3">
                  {albertaRedFlags.map((flag) => (
                    <div key={flag} className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <p className="text-sm text-slate-700 leading-relaxed">{flag}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="flex flex-col gap-5">
                  {faqItems.map((faq) => (
                    <div key={faq.question} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                      <h3 className="font-bold text-slate-900 mb-3">{faq.question}</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Analyze your Alberta lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your Alberta rental agreement and our AI will identify clauses that raise
                  concerns under the Residential Tenancies Act.
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
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Quick Reference</h3>
                <div className="flex flex-col gap-3 text-xs text-slate-700">
                  {[
                    { label: "Governing law", value: "Residential Tenancies Act, RSA 2000, c R-17.1" },
                    { label: "2023 key change", value: "Max 1 rent increase per 365 days" },
                    { label: "Rent control", value: "None — any amount permitted" },
                    { label: "Security deposit cap", value: "1 month's rent (RTA s.34)" },
                    { label: "Deposit return (no deductions)", value: "10 days" },
                    { label: "Deposit statement (deductions)", value: "30 days" },
                    { label: "Rent increase notice", value: "3 full months (periodic)" },
                    { label: "Non-payment notice", value: "14 days (voidable if paid)" },
                    { label: "RTDRS max claim", value: "$100,000" },
                    { label: "RTDRS filing fee", value: "$75–$100 (by claim amount)" },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col">
                      <span className="font-semibold text-slate-800">{item.label}</span>
                      <span className="text-slate-600">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Pages</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Canadian Tenant Rights", href: "/tenant-rights/canada" },
                    { label: "Alberta City Guides", href: "/canada/alberta" },
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
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">Alberta Resources</h3>
                <div className="flex flex-col gap-3 text-xs text-slate-500 leading-relaxed">
                  <div>
                    <strong className="text-slate-700">RTDRS (Dispute Resolution):</strong>
                    <br />
                    <span className="text-blue-600">rtdrs.alberta.ca</span>
                    <br />
                    File applications, access forms, and find information about hearings.
                  </div>
                  <div>
                    <strong className="text-slate-700">Service Alberta (RTA text):</strong>
                    <br />
                    Full text of the Residential Tenancies Act available at{" "}
                    <span className="text-blue-600">qp.alberta.ca</span>
                  </div>
                  <div>
                    <strong className="text-slate-700">Landlord-tenant forms:</strong>
                    <br />
                    Standard notices and inspection reports at{" "}
                    <span className="text-blue-600">alberta.ca/landlords-tenants</span>
                  </div>
                </div>
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
