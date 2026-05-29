import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, ChevronRight, Upload, AlertTriangle, CheckCircle } from "lucide-react";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Quebec Tenant Rights: Civil Code, TAL, Rent Increases, and Deposits | LeasePlain",
  description:
    "A complete guide to tenant rights in Quebec — the Civil Code framework, TAL tribunal, mandatory bail form, rent increase process, the security deposit ban, and eviction rules.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/quebec" },
  openGraph: {
    type: "website",
    title: "Quebec Tenant Rights: Civil Code, TAL, Rent Increases, and Deposits | LeasePlain",
    description: "A complete guide to tenant rights in Quebec — the Civil Code framework, TAL tribunal, mandatory bail form, rent increase process, the security deposit ban, and eviction rules.",
    url: "https://leaseplain.com/tenant-rights/quebec",
  },
  keywords: ["Quebec tenant rights", "TAL tribunal logement", "Quebec bail lease", "Quebec rent increase", "renter rights Quebec Canada", "Civil Code Quebec lease", "security deposit Quebec prohibited"],
};

const leaseFormSections = [
  "Section A — Identification of the dwelling and parties",
  "Section B — Rent amount and payment terms",
  "Section C — Services and conditions included (heating, hot water, parking, etc.)",
  "Section D — Duration of the lease (fixed-term or indeterminate)",
  "Section E — Special clauses (agreed by both parties)",
  "Section F — Legal notices and tenant's right to receive information about previous rent",
];

const rentIncreaseTimelines = [
  { lease: "Fixed-term 12 months (e.g., 1 year)", noticeWindow: "3 to 6 months before end of lease" },
  { lease: "Fixed-term under 12 months", noticeWindow: "1 to 2 months before end of lease" },
  { lease: "Month-to-month (indeterminate term)", noticeWindow: "1 to 2 months before end of rental period" },
];

const depositRules = [
  "Security deposits are PROHIBITED — Civil Code art. 1904 forbids any amount collected as a guarantee against damage or non-payment of rent",
  "Key deposits are not permitted",
  "Post-dated cheques may be accepted but only for one rental period at a time",
  "The only permitted advance payment at lease signing is one month's rent",
  "First and last month's rent (as practiced in Ontario) is ILLEGAL in Quebec — only one month's advance is allowed",
  "Any amount unlawfully collected as a deposit must be returned; the landlord has no right to keep it as a damage fund",
];

const quebecRedFlags = [
  "Any clause requiring a security deposit, damage deposit, or key deposit — all illegal under Civil Code art. 1904",
  "Demanding first and last month's rent — illegal; only first month may be collected at signing",
  "Rent increase notice outside the legally required window (3–6 months for 12-month lease; 1–2 months for month-to-month)",
  "Lease not using the prescribed TAL government form — all Quebec residential leases must use it",
  "Clause attempting to waive the tenant's right to refuse a rent increase",
  "Clause purporting to prevent the tenant from renewing the lease at the end of the term",
  "Lease provided only in French without the tenant having the option to request an English version",
  "Harassment, threats, or interference with quiet enjoyment — violates Civil Code art. 1902 and is actionable at the TAL",
];

const faqItems = [
  {
    question: "Can a landlord charge a security deposit in Quebec?",
    answer: "No. Security deposits are expressly prohibited under article 1904 of the Civil Code of Quebec. A landlord cannot collect any amount as a deposit, damage deposit, or guarantee against rent non-payment. The only advance payment permitted at the time of signing a lease is one month's rent (first month). Key deposits, pet deposits, and damage deposits are all illegal. If a landlord demands a security deposit, you are not legally obligated to pay it, and any amount collected must be returned to you.",
  },
  {
    question: "How do I dispute a rent increase in Quebec?",
    answer: "When you receive a rent increase notice, you have one month from the date of receiving the notice to respond in writing. You can: (1) Accept the increase — sign and return the notice; (2) Propose a counter-offer at a different amount — the landlord then has one month to accept or apply to the TAL; (3) Simply refuse (if you do not intend to renew the lease). If the landlord receives a refusal or counter-offer and does not apply to the TAL within one month, they are deemed to have accepted your counter-offer or the lease renews at the existing rent. If the landlord does apply to the TAL, a hearing officer will determine a fair rent increase based on the building's operating costs.",
  },
  {
    question: "What language must my lease be in Quebec?",
    answer: "Under the Charter of the French Language, all residential leases must be provided in French by default. However, a tenant has the right to request a lease in English (or another language), and the landlord must accommodate this request if both parties agree. The mandatory TAL lease form is available in both French and English. The French version takes legal precedence if there is any conflict between the two versions.",
  },
  {
    question: "Can my landlord evict me to renovate in Quebec?",
    answer: "A landlord in Quebec can refuse to renew a lease (effectively evicting you) only for specific enumerated reasons: (1) the landlord or a close family member intends to occupy the dwelling personally; (2) major renovations or repairs that require the unit to be vacant (not merely cosmetic work); (3) subdivision or conversion to non-residential use. For a 12-month lease, the landlord must give at least 6 months' notice before the lease end. For leases under 12 months, at least 3 months' notice is required. If evicted for major renovation, you have the right to return to the unit at the same rent once renovations are complete (right of first refusal under Civil Code art. 1959). The landlord must also pay 3 months' rent in compensation plus moving costs.",
  },
  {
    question: "What is the TAL and how do I file a complaint?",
    answer: "The Tribunal administratif du logement (TAL), formerly the Régie du logement, is Quebec's specialized administrative tribunal for all residential rental disputes. It handles rent increase disputes, eviction applications, habitability complaints, harassment claims, and requests to recover illegally collected deposits. Tenants can file online at tal.gouv.qc.ca. Filing fees are $82 for most tenant applications; some applications (such as urgent safety matters) are free. Hearings are often conducted by telephone or in person at regional TAL offices across Quebec. Most matters are resolved within a few months. The TAL can award rent reductions, order repairs, award damages for harassment, and invalidate illegal lease clauses.",
  },
];

export default function QuebecTenantRightsPage() {
  return (
    <>
      <ArticleSchema
        headline="Quebec Tenant Rights: Civil Code, TAL, Rent Increases, and Deposits"
        description="A complete guide to tenant rights in Quebec — the Civil Code framework, TAL tribunal, mandatory bail form, rent increase process, the security deposit ban, and eviction rules."
        url="https://leaseplain.com/tenant-rights/quebec"
        datePublished="2025-01-15"
        dateModified="2026-05-29"
        keywords={["Quebec tenant rights", "TAL tribunal logement", "Quebec bail lease", "Quebec rent increase", "renter rights Quebec Canada"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tenant Rights", href: "https://leaseplain.com/tenant-rights" },
        { name: "Quebec", href: "https://leaseplain.com/tenant-rights/quebec" },
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
        "@id": "https://leaseplain.com/tenant-rights/quebec",
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
              <span>Quebec</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Shield className="w-3.5 h-3.5" aria-hidden="true" />
              Quebec Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Quebec Tenant Rights: Civil Code, TAL, Rent Increases, and Deposits
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Quebec has the most distinctive tenancy framework in Canada — governed by the{" "}
              <em>Civil Code of Quebec</em> (arts. 1851–2000), not a separate Residential Tenancies
              Act. Security deposits are banned. Mandatory lease forms are required. Tenants have a
              formal right to refuse rent increases. Disputes go to the{" "}
              <em>Tribunal administratif du logement</em> (TAL).
            </p>
          </div>
        </section>

        {/* Content + sidebar */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              {/* Civil Code framework */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Civil Code of Quebec Framework</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Quebec is unique among Canadian provinces: instead of a dedicated{" "}
                  <em>Residential Tenancies Act</em>, lease law is embedded directly in the{" "}
                  <strong>Civil Code of Quebec</strong> — specifically articles 1851 to 2000
                  (the provisions on &ldquo;Lease&rdquo;). These provisions apply to all residential
                  leases uniformly, regardless of lease type, building age, or landlord type.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The Civil Code approach means that Quebec tenancy rights are not a standalone
                  statute that can be amended piecemeal — changes require amending the Civil Code
                  itself, making tenant protections more durable. Key rights embedded in the Civil
                  Code include the right to maintain occupancy (lease renewal), protection against
                  harassment, the landlord&apos;s obligation to deliver and maintain the premises in
                  good condition, and the prohibition on security deposits.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The <strong>Tribunal administratif du logement (TAL)</strong> — formerly the
                  Régie du logement — is the specialized quasi-judicial body that adjudicates rental
                  disputes in Quebec. The TAL handles: rent increase disputes, eviction applications,
                  claims for damages, habitability orders, harassment claims, and recovery of
                  illegally collected amounts. It also publishes annual rent increase guidelines
                  to help parties negotiate and assess reasonable increases.
                </p>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <strong>Key difference from other provinces:</strong> In Ontario or BC, tenant
                    rights come from a Residential Tenancies Act. In Quebec, they come from the
                    Civil Code (arts. 1851–2000) — the same foundational statute that governs all
                    private law in Quebec. This means the rules are deeply integrated into the
                    province&apos;s legal system and afforded the same status as property law, contract
                    law, and family law.
                  </p>
                </div>
              </div>

              {/* Mandatory lease form */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Mandatory Lease Form (Bail)</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Since 1996, all residential leases in Quebec must use the{" "}
                  <strong>government-prescribed mandatory lease form</strong> issued by the TAL —
                  known as the <em>bail</em>. Using any other format is not permitted. The form
                  is available from the TAL website (tal.gouv.qc.ca) in both French and English.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>Language of the lease:</strong> Under the Charter of the French Language,
                  the lease must be provided in French by default. However, a tenant has the right
                  to request a lease in English or another language; the landlord must accommodate
                  this if the tenant explicitly requests it before signing. If both French and English
                  versions exist, the French version takes precedence in case of conflict.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The prescribed bail form includes specific required sections:
                </p>
                <ul className="flex flex-col gap-2 mb-4">
                  {leaseFormSections.map((section) => (
                    <li key={section} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {section}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  When a new tenant signs a lease, the landlord must disclose the{" "}
                  <strong>rent paid by the previous tenant</strong> during the 12 months before the
                  current tenancy begins (Section F of the form). This &ldquo;right to know the previous
                  rent&rdquo; prevents excessive rent increases at tenant turnover, since the new tenant
                  can dispute any increase above the previous rent at the TAL.
                </p>
              </div>

              {/* Security deposits */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Security Deposits in Quebec — Prohibited</h2>
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-4">
                  <p className="text-sm text-amber-800 font-semibold mb-1">
                    Security deposits are ILLEGAL in Quebec (Civil Code art. 1904)
                  </p>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    Article 1904 of the Civil Code expressly prohibits a landlord from requiring
                    any amount of money as a security, guarantee, or deposit of any kind. This
                    includes damage deposits, key deposits, and pet deposits. If a landlord demands
                    one, you are not legally required to pay it, and any amount collected must be
                    returned to you.
                  </p>
                </div>
                <ul className="flex flex-col gap-3">
                  {depositRules.map((rule) => (
                    <li key={rule} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rent increase process */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Rent Increase Process — Step by Step</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Quebec has one of the most structured rent increase processes in North America.
                  There is no hard annual percentage cap — instead, increases are governed by a
                  notice-and-refusal mechanism, with the TAL as final arbiter. The TAL publishes
                  annual increase calculation guidelines based on building operating costs to help
                  parties assess what is reasonable.
                </p>

                <h3 className="font-semibold text-slate-800 mb-3">Step 1: Landlord gives notice</h3>
                <div className="overflow-x-auto mb-5">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left p-3 border border-slate-100 font-semibold text-slate-700">Lease type</th>
                        <th className="text-left p-3 border border-slate-100 font-semibold text-slate-700">Required notice window</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rentIncreaseTimelines.map((row) => (
                        <tr key={row.lease} className="border-b border-slate-100">
                          <td className="p-3 text-slate-700 border border-slate-100">{row.lease}</td>
                          <td className="p-3 font-semibold text-blue-700 border border-slate-100">{row.noticeWindow}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  The notice must state the proposed new rent amount (not just the percentage increase).
                  A notice that only states a percentage without the dollar amount may be defective.
                </p>

                <h3 className="font-semibold text-slate-800 mb-3">Step 2: Tenant responds within 1 month</h3>
                <div className="flex flex-col gap-3 mb-5">
                  {[
                    { label: "Accept the increase", detail: "Sign the notice and return it to the landlord. Lease renews at the new rent." },
                    { label: "Propose a counter-offer", detail: "Submit a written counter-proposal with a different rent amount. The landlord then has 1 month to accept or apply to the TAL. If the landlord does neither within 1 month, they are deemed to have accepted your counter-offer and the lease renews at that amount." },
                    { label: "Refuse (without counter-offer)", detail: "Treated as giving notice that you are not renewing the lease. You must vacate at the end of the lease term. Be careful: simple refusal without a counter-offer means you are giving up the unit." },
                    { label: "No response at all", detail: "Silence is treated as acceptance. If you do not respond within 1 month, the lease renews at the rent proposed by the landlord." },
                  ].map((option) => (
                    <div key={option.label} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{option.label}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{option.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="font-semibold text-slate-800 mb-3">Step 3: TAL hearing (if applicable)</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  If the tenant refuses and the landlord applies to the TAL, a hearing officer
                  will determine a fair rent increase based on the building&apos;s actual operating
                  costs — taxes, insurance, maintenance, energy, and financing costs. The TAL
                  calculation method is set out in the Regulation Respecting the Criteria for the
                  Fixing of Rent.
                </p>

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <strong>Lease renewal right:</strong> In Quebec, at the end of a fixed-term
                    lease, the tenant has the <em>right to renew</em> on the same terms (subject to
                    any agreed rent adjustment). A landlord can only refuse renewal for specific
                    enumerated reasons — personal use, major renovation, subdivision or conversion
                    to non-residential. This is fundamentally different from most other provinces
                    where a landlord can simply not renew a lease when the term ends.
                  </p>
                </div>
              </div>

              {/* Tribunal administratif du logement */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The TAL — Tribunal administratif du logement</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The TAL is Quebec&apos;s specialized housing tribunal, operating under the Act
                  Respecting Administrative Justice. It replaced the Régie du logement in 2020.
                  The TAL handles all residential tenancy disputes in Quebec and is the primary
                  recourse for both landlords and tenants.
                </p>

                <h3 className="font-semibold text-slate-800 mb-2 text-sm">What the TAL handles</h3>
                <ul className="flex flex-col gap-2 mb-5">
                  {[
                    "Rent increase disputes (where tenant has refused and landlord applies)",
                    "Eviction applications by landlords (for non-payment, personal use, major renovation)",
                    "Tenant complaints about habitability and necessary repairs",
                    "Claims for damages arising from landlord failure to maintain premises (Civil Code art. 1854)",
                    "Harassment complaints under Civil Code art. 1902",
                    "Recovery of amounts unlawfully collected (e.g., illegal security deposits)",
                    "Applications to terminate a lease early (by tenant, in certain circumstances)",
                    "Disputes about service of notices and lease renewal",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold text-slate-800 mb-2 text-sm">Filing fees and process</h3>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left p-3 border border-slate-100 font-semibold text-slate-700">Application type</th>
                        <th className="text-left p-3 border border-slate-100 font-semibold text-slate-700">Filing fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Standard tenant application (damages, deposit recovery, etc.)", "$82"],
                        ["Urgent applications (serious habitability issues)", "Free"],
                        ["Rent increase hearing (landlord applies)", "$82 (paid by landlord)"],
                        ["Eviction application", "$82 (paid by landlord)"],
                      ].map(([type, fee]) => (
                        <tr key={type} className="border-b border-slate-100">
                          <td className="p-3 text-slate-700 border border-slate-100">{type}</td>
                          <td className="p-3 font-semibold text-blue-700 border border-slate-100">{fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Applications can be filed online at <strong>tal.gouv.qc.ca</strong> or in person
                  at regional TAL offices. Hearings are often conducted by telephone or in person
                  at offices in Montreal, Quebec City, Laval, Longueuil, Gatineau, Sherbrooke,
                  Saguenay, and other regional centres.
                </p>
              </div>

              {/* Non-renewal / eviction */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Non-Renewal and Eviction in Quebec</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Quebec tenants have a strong <strong>right to maintain occupancy</strong>. A
                  landlord cannot simply choose not to renew a lease — they must have one of the
                  specific enumerated grounds permitted by the Civil Code.
                </p>

                <h3 className="font-semibold text-slate-800 mb-3 text-sm">Permitted grounds for non-renewal</h3>
                <div className="flex flex-col gap-4 mb-5">
                  {[
                    {
                      ground: "Personal use (owner or close family)",
                      detail: "The landlord or a close family member (spouse, ascendant, descendant) intends to personally occupy the dwelling. The landlord must give notice 6 months before the end of a 12-month lease (3 months for leases under 12 months). Compensation: 3 months' rent plus moving costs. If the landlord does not actually move in within the required period, the tenant may have a remedy at the TAL.",
                    },
                    {
                      ground: "Major renovation requiring vacant possession",
                      detail: "The work must be substantial enough that the dwelling cannot be inhabited during renovations — not merely cosmetic repairs. The landlord must provide a detailed description of the work. Notice: 6 months (12-month lease) or 3 months (shorter lease). Compensation: 3 months' rent plus moving costs. The tenant retains the right of first refusal to return at the same rent after renovations are complete (Civil Code art. 1959).",
                    },
                    {
                      ground: "Subdivision or conversion to non-residential use",
                      detail: "For example, converting an apartment building to condominiums (condominiumization) or to commercial use. Same notice and compensation rules apply. Right of first refusal may apply depending on the specific conversion.",
                    },
                  ].map((item) => (
                    <div key={item.ground} className="bg-white border border-slate-100 rounded-xl p-4">
                      <p className="text-sm font-semibold text-slate-800 mb-1">{item.ground}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>

                <h3 className="font-semibold text-slate-800 mb-3 text-sm">Required notice periods for non-renewal</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left p-3 border border-slate-100 font-semibold text-slate-700">Lease type</th>
                        <th className="text-left p-3 border border-slate-100 font-semibold text-slate-700">Required notice</th>
                        <th className="text-left p-3 border border-slate-100 font-semibold text-slate-700">Compensation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["12-month lease", "6 months before end of lease", "3 months' rent + moving costs"],
                        ["Under 12 months", "3 months before end of lease", "3 months' rent + moving costs"],
                        ["Month-to-month", "3 months' notice", "3 months' rent + moving costs"],
                      ].map(([type, notice, comp]) => (
                        <tr key={type} className="border-b border-slate-100">
                          <td className="p-3 text-slate-700 border border-slate-100">{type}</td>
                          <td className="p-3 font-semibold text-blue-700 border border-slate-100">{notice}</td>
                          <td className="p-3 text-slate-600 border border-slate-100">{comp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Special protections */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Special Protections for Quebec Tenants</h2>
                <div className="flex flex-col gap-5">

                  <div className="bg-white border border-slate-100 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-800 mb-2">Anti-Harassment (Civil Code art. 1902)</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      A landlord cannot harass a tenant, intimidate them, interfere with their quiet
                      enjoyment, or take actions designed to force a tenant to leave the dwelling.
                      Examples of prohibited conduct: repeated uninvited visits, cutting off utilities,
                      threatening messages, failing to make repairs intentionally to make the unit
                      uninhabitable. The TAL can award punitive and compensatory damages for
                      harassment. Harassment is a serious matter — criminal charges may also apply
                      in extreme cases.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-100 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-800 mb-2">Heating Obligations</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      The landlord must provide adequate heat. Under the Quebec Building Code and
                      Civil Code art. 1854, the dwelling must be maintained at a minimum of{" "}
                      <strong>21°C</strong> during the heating season. If the heating system fails
                      or the landlord refuses to provide heat, a tenant can file an urgent
                      application at the TAL — these are processed quickly. In serious cases,
                      the city may intervene and charge the landlord for emergency heating.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-100 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-800 mb-2">Repairs and Habitability (Civil Code art. 1854)</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      The landlord must maintain the dwelling in good habitable condition and make
                      all necessary repairs, except those caused by the tenant&apos;s own fault. If the
                      landlord refuses to repair a significant defect, a tenant can: (1) file at the
                      TAL for an order to repair and/or a rent reduction; (2) in urgent situations
                      (e.g., water leak, infestation), make the repair themselves and deduct the
                      cost from rent, after proper notice to the landlord. The TAL can grant a
                      retroactive rent reduction for the period during which the defect existed.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-100 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-800 mb-2">Right of First Refusal After Renovation (Civil Code art. 1959)</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      If a tenant is evicted because the landlord needs to perform major renovations,
                      the tenant has the right to return to the same dwelling after the renovations
                      are completed — at the same rent that was in effect when they left (adjusted
                      for the TAL guidelines during the intervening period). The landlord must
                      notify the tenant when the work is complete and offer the unit back. If the
                      landlord fails to do so, the tenant may have a claim at the TAL.
                    </p>
                  </div>

                </div>
              </div>

              {/* Red flags */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags in Quebec Leases</h2>
                <div className="flex flex-col gap-3">
                  {quebecRedFlags.map((flag) => (
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
                <h3 className="font-bold text-lg mb-2">Analyze your Quebec lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your bail and our AI will flag any clauses that conflict with Quebec
                  housing law, including illegal deposit clauses and rent increase issues.
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
                    { label: "Governing law", value: "Civil Code of Quebec, arts. 1851–2000" },
                    { label: "Tribunal", value: "TAL (tal.gouv.qc.ca)" },
                    { label: "Security deposit", value: "Prohibited (art. 1904)" },
                    { label: "Advance rent permitted", value: "1 month only" },
                    { label: "Rent increase notice (12-mo lease)", value: "3–6 months before end" },
                    { label: "Tenant response window", value: "1 month after notice" },
                    { label: "Non-renewal notice (12-mo)", value: "6 months before end" },
                    { label: "Non-renewal compensation", value: "3 months' rent + moving" },
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
                    { label: "Quebec City Guides", href: "/canada/quebec" },
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
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">Quebec Resources</h3>
                <div className="flex flex-col gap-3 text-xs text-slate-500 leading-relaxed">
                  <div>
                    <strong className="text-slate-700">Tribunal administratif du logement:</strong>
                    <br />
                    <span className="text-blue-600">tal.gouv.qc.ca</span>
                    <br />
                    File applications, download the mandatory lease form, access rent increase
                    guidelines.
                  </div>
                  <div>
                    <strong className="text-slate-700">TAL filing fee (standard):</strong>
                    <br />
                    $82 for most tenant applications
                  </div>
                  <div>
                    <strong className="text-slate-700">Minimum heating requirement:</strong>
                    <br />
                    21°C during heating season
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
