import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, ChevronRight, Upload, AlertTriangle, CheckCircle, Clock, FileText } from "lucide-react";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Eviction Notices in Ontario: What Landlords Can and Cannot Do | LeasePlain",
  description:
    "Learn about N4, N5, N12, and other eviction notices in Ontario. A notice alone does NOT evict you — understand your rights, the LTB process, and illegal eviction tactics.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/eviction-notices" },
  openGraph: {
    type: "website",
    title: "Eviction Notices in Ontario: What Landlords Can and Cannot Do | LeasePlain",
    description: "Learn about N4, N5, N12, and other eviction notices in Ontario. A notice alone does NOT evict you — understand your rights, the LTB process, and illegal eviction tactics.",
    url: "https://leaseplain.com/tenant-rights/eviction-notices",
  },
  keywords: ["eviction notices Ontario", "N4 notice Ontario", "N12 notice Ontario", "LTB eviction process", "tenant eviction rights Canada"],
};

// ─── Notice detail data ────────────────────────────────────────────────────

const noticeDetails = [
  {
    form: "N4",
    name: "Notice to End a Tenancy Early for Non-payment of Rent",
    noticePeriod: "14 days",
    voidable: true,
    voidMethod: "Pay full arrears within 14 days OR before the LTB hearing date",
    ltbApplication: "L1 application — filed after the 14-day period expires",
    sections: ["RTA s. 59"],
    detail:
      "Issued when a tenant has not paid rent. Even a single dollar in arrears is sufficient — there is no minimum threshold. Once served, the tenant has 14 days to pay the entire amount owing. If the tenant pays in full within that period, the N4 is void and the eviction cannot proceed. Even after the landlord files an L1 with the LTB, a tenant can still void the process by paying in full before the hearing.",
    keyPoints: [
      "Minimum arrears to serve: any amount (even $1) — no minimum under the RTA.",
      "Voiding: pay ALL rent owing within 14 days of receiving the N4, and the notice is void.",
      "If not paid, landlord files L1 application with the LTB.",
      "At the LTB hearing, tenant can still void by paying all arrears plus any LTB filing fee.",
      "LTB may grant a conditional order: tenant stays if payments made on schedule.",
      "Second or third N4 in same tenancy: landlord may seek a 'no-relief' order if payment history is persistent.",
    ],
  },
  {
    form: "N5",
    name: "Notice to End your Tenancy for Interfering with Others, Damage or Overcrowding",
    noticePeriod: "20 days (first N5); 14 days (second N5 within 6 months)",
    voidable: true,
    voidMethod: "First N5 only: stop the behaviour / fix the damage within the first 7 days of the 20-day period",
    ltbApplication: "L2 application",
    sections: ["RTA s. 62, 64"],
    detail:
      "Covers wilful or negligent damage to the unit or property, interference with the reasonable enjoyment of other tenants or the landlord, and overcrowding. For a first N5, the tenant has the first 7 days to fix the problem or stop the behaviour — doing so voids the notice. A second N5 issued within 6 months for the same or similar conduct carries a 14-day notice period and cannot be voided.",
    keyPoints: [
      "First N5: 20-day notice period. Tenant has first 7 days to remedy — void if issue is resolved.",
      "Second N5 within 6 months: 14-day notice; NO voiding opportunity.",
      "Qualifying conduct: wilful damage, excessive wear, disturbance to other tenants, illegal overcrowding.",
      "Landlord must describe the specific conduct in the notice — vague notices can be challenged.",
      "Take photos and gather evidence if you dispute the allegation.",
    ],
  },
  {
    form: "N6",
    name: "Notice to End your Tenancy for an Illegal Act",
    noticePeriod: "Immediate (landlord can file L2 with LTB right away)",
    voidable: false,
    voidMethod: null,
    ltbApplication: "L2 application",
    sections: ["RTA s. 61"],
    detail:
      "Used when the tenant or an occupant commits an illegal act in or near the rental complex, or operates an illegal business. Examples include drug trafficking, weapons offences, and sexual offences. Unlike N5, there is no remedy period — the landlord can file an L2 application with the LTB immediately after serving the notice.",
    keyPoints: [
      "No remedy period — landlord files L2 immediately.",
      "The LTB still holds a hearing; the landlord must prove the illegal act occurred.",
      "An arrest or charge (not yet a conviction) may be sufficient evidence depending on the circumstances.",
      "You have the right to attend and contest the evidence at the LTB hearing.",
    ],
  },
  {
    form: "N7",
    name: "Notice to End your Tenancy for Causing Serious Problems in the Rental Unit or Residential Complex",
    noticePeriod: "10 days",
    voidable: false,
    voidMethod: null,
    ltbApplication: "L2 application",
    sections: ["RTA s. 66"],
    detail:
      "Reserved for the most serious situations: conduct that seriously impairs the safety of others, wilful damage so severe it cannot be remedied within 7 days, or persistent drug activity that endangers others. The 10-day notice period is the shortest for non-emergency situations.",
    keyPoints: [
      "Examples: serious physical assault of another tenant, weapons in the unit, meth lab, large-scale drug trafficking.",
      "10-day notice — no opportunity to void.",
      "LTB still holds a hearing and must be satisfied the threshold is met.",
      "Landlord must prove the conduct was serious enough to meet the s. 66 standard.",
    ],
  },
  {
    form: "N8",
    name: "Notice to End your Tenancy at the End of the Term (Persistent Late Payment)",
    noticePeriod: "60 days, ending on last day of rental period",
    voidable: false,
    voidMethod: null,
    ltbApplication: "L2 application",
    sections: ["RTA s. 58"],
    detail:
      "Unlike the N4, this notice is not about a current arrears balance — it targets a pattern of late payments over time. A landlord can serve an N8 even if the tenant is fully caught up, as long as they have a documented history of consistently paying late. The LTB must weigh the history of late payments and may consider whether the pattern has been corrected.",
    keyPoints: [
      "Can be served even when rent is current — it targets the pattern, not the arrears.",
      "60-day notice ending on the last day of a rental period.",
      "LTB weighs: how often, how late, whether landlord gave informal warnings first.",
      "Tenant can argue the pattern has changed (e.g., set up automatic payments).",
      "Less common than N4 but increasingly used for chronically late tenants.",
    ],
  },
  {
    form: "N12",
    name: "Notice to End your Tenancy Because the Landlord, a Purchaser or a Family Member Requires the Rental Unit",
    noticePeriod: "60 days, must expire on last day of rental period",
    voidable: false,
    voidMethod: null,
    ltbApplication: "L2 application (if tenant does not vacate)",
    sections: ["RTA ss. 48, 48.1, 49"],
    detail:
      "Used when the landlord (or their spouse, parent, child, or a purchaser) genuinely intends to move into the unit for residential use. The requirement of genuine intent is critical — bad faith N12 evictions are a serious violation of the RTA. Compensation equal to one month's rent is mandatory and must be paid before or on the termination date.",
    keyPoints: [
      "Who qualifies: landlord, landlord's spouse, parent, child — or a purchaser under certain conditions.",
      "Genuine intention to occupy is required — the landlord cannot use N12 as a pretext to remove a tenant.",
      "Compensation: one month's rent (RTA s. 48.1) — must be paid before or on the termination date.",
      "If landlord does not move in (or moves out quickly), tenant can file a T5 application for bad faith.",
      "Bad faith penalty: up to 12 months' rent awarded to the tenant.",
      "Tenant can dispute at LTB — the LTB will scrutinize whether the landlord truly intends to occupy.",
      "Notice must expire on the last day of a rental period, not mid-month.",
    ],
  },
  {
    form: "N13",
    name: "Notice to End your Tenancy Because the Landlord Wants to Demolish the Rental Unit, Repair It or Convert It to Another Use",
    noticePeriod: "120 days",
    voidable: false,
    voidMethod: null,
    ltbApplication: "L2 application (if tenant disputes or does not vacate)",
    sections: ["RTA ss. 50, 52, 53, 54"],
    detail:
      "Used for demolition, conversion of the unit to a non-residential use, or major renovations requiring a building permit and the unit to be vacant. This is the notice with the longest required period — 120 days — and carries significant protections for the tenant, including compensation and the right to return after renovations.",
    keyPoints: [
      "120-day notice period — the longest of all N-forms.",
      "Compensation: 3 months' rent (demolition or conversion) OR the right to return after renovation.",
      "Right of first refusal: if the unit will be re-rented after renovation, the tenant has the right to return at the same rent — BUT the tenant must notify the landlord IN WRITING before vacating to preserve this right.",
      "For renovations: landlord must have a building permit and the work must genuinely require vacancy.",
      "If the landlord does not proceed with the renovations, tenant can file a T5 for bad faith.",
      "Tenant may dispute at LTB — landlord must prove the permit and genuine need for vacancy.",
    ],
  },
];

const evictionSteps = [
  {
    step: "Landlord serves written N-form notice",
    detail: "The appropriate N-form is delivered to the tenant personally, by mail, or under the door. The notice specifies the grounds and the date by which the tenant must vacate (the 'termination date').",
  },
  {
    step: "Remedy period (where applicable)",
    detail: "For N4: 14 days to pay all arrears. For N5 (first): 7 days to stop the behaviour or fix the damage. If the tenant fully remedies, the notice is void and the tenancy continues.",
  },
  {
    step: "Landlord files L-series application with LTB",
    detail: "If the issue is not resolved, the landlord files an application — L1 for non-payment (N4), L2 for other grounds (N5, N6, N7, N8, N12, N13). The notice alone does NOT end the tenancy.",
  },
  {
    step: "LTB schedules a hearing",
    detail: "Both parties receive a Notice of Hearing from the LTB. Hearings are conducted in person, by phone, or by videoconference. You have the right to attend, present evidence, call witnesses, and be represented.",
  },
  {
    step: "Free legal help available",
    detail: "Duty counsel lawyers are often available at LTB hearing locations at no cost. Legal Aid Ontario (1-800-668-8258) can also assist qualifying tenants. Community Legal Clinics across Ontario provide free advice.",
  },
  {
    step: "LTB issues an order (or dismisses the application)",
    detail: "If eviction is ordered, the order specifies the date the tenant must vacate. The tenant can request a review by a senior LTB adjudicator within 30 days, or seek judicial review at Divisional Court.",
  },
  {
    step: "Sheriff enforcement only",
    detail: "If the tenant does not vacate by the date in the order, the landlord must request enforcement by the Court Enforcement Office (Sheriff). The landlord CANNOT change locks, remove belongings, or cut services themselves.",
  },
];

const illegalTactics = [
  {
    tactic: "Changing the locks or removing tenant's belongings",
    detail: "Illegal at all times. Tenant can apply for an emergency LTB order (T2 application). Landlord faces fines and may be ordered to compensate the tenant.",
  },
  {
    tactic: "Shutting off utilities to force a move-out",
    detail: "RTA s. 21: cutting vital services (heat, electricity, water) is illegal even if the tenant owes rent. Emergency LTB relief is available — call 1-888-332-3234.",
  },
  {
    tactic: "Harassment, threats, or intimidation",
    detail: "RTA s. 23: landlords cannot interfere with a tenant's reasonable enjoyment of the unit. Harassment is grounds for a T2 application and rent abatement.",
  },
  {
    tactic: "Entering the unit to pressure or inconvenience the tenant",
    detail: "Landlord must give 24 hours written notice for entries except emergencies. Using entry rights to harass is illegal and can be the basis of a T2 application.",
  },
  {
    tactic: "Refusing essential maintenance as retaliation",
    detail: "Withholding repairs to force a tenant out is a serious RTA violation. Tenant can file a T6 (maintenance) application with the LTB for a work order and compensation.",
  },
];

const provincialQuickRef = [
  {
    province: "British Columbia",
    flag: "BC",
    forms: [
      { name: "RTB-30", description: "One Month Notice to End Tenancy (landlord's use of property)", period: "1 month + 12 months compensation for eligible tenants" },
      { name: "Two Month Notice", description: "Renovations requiring vacant possession", period: "2 months; right of first refusal applies" },
      { name: "Four Month Notice", description: "Demolition or conversion", period: "4 months; compensation required" },
    ],
    note: "BC's Residential Tenancy Branch (RTB) adjudicates disputes; hearings are often by telephone.",
  },
  {
    province: "Alberta",
    flag: "AB",
    forms: [
      { name: "14-Day Notice", description: "Non-payment of rent", period: "14 days; tenant can remedy by paying" },
      { name: "14-Day Notice", description: "Substantial breach (damage, conduct)", period: "14 days; no voiding right" },
      { name: "24-Hour Notice", description: "Emergency: endangerment to safety", period: "24 hours — requires serious grounds" },
    ],
    note: "Alberta's Residential Tenancy Dispute Resolution Service (RTDRS) or Provincial Court handles disputes.",
  },
  {
    province: "Quebec",
    flag: "QC",
    forms: [
      { name: "3-Month Notice", description: "Repossession by landlord for personal use", period: "3 months before end of lease; compensation may apply" },
      { name: "6-Month Notice", description: "Subdivision, enlargement, or change of use", period: "6 months before end of lease" },
      { name: "Demand for Eviction (Tribunal)", description: "Non-payment or breach", period: "Filed at the Tribunal administratif du logement (TAL)" },
    ],
    note: "Quebec tenants have strong protections: leases auto-renew; landlord must show serious grounds to evict.",
  },
];

const faqs = [
  {
    question: "Do I have to move out when I receive an eviction notice in Ontario?",
    answer:
      "No. An eviction notice (N4, N5, N12, etc.) is only the first step. The notice does not give the landlord the legal right to remove you. The landlord must apply to the Landlord and Tenant Board, attend a hearing, and obtain a formal eviction order. Only after a signed LTB order — and if you still haven't vacated — can the landlord request enforcement by the Sheriff. You have the right to remain in your home until that entire process is complete.",
  },
  {
    question: "What happens at an LTB eviction hearing?",
    answer:
      "An LTB hearing is a semi-formal proceeding where both sides present their case to an adjudicator. You can bring documents, photos, witnesses, and a legal representative (including free duty counsel). The landlord must prove their grounds. You can challenge the validity of the notice, dispute the facts, propose a payment plan (for N4 hearings), or raise any defences — including that the landlord has not maintained the unit. The adjudicator issues a written order after the hearing.",
  },
  {
    question: "Can I dispute an N12 personal use eviction?",
    answer:
      "Yes. At the LTB hearing, you can challenge whether the landlord genuinely intends to move in. The LTB scrutinizes N12 applications carefully — if the evidence suggests the landlord is using it as a pretext to remove you (e.g., to re-rent at a higher rate), the application will be dismissed. If you vacate based on an N12 and the landlord does not occupy the unit, you can file a T5 application for bad faith eviction — the penalty can be up to 12 months' rent.",
  },
  {
    question: "What is the difference between an N4 and an L1?",
    answer:
      "The N4 is the notice served on the tenant — it is the first step, not a legal order. An L1 is the application the landlord files with the LTB after the N4 has expired unremedied. The L1 triggers the formal hearing process. Until an L1 is filed and the LTB issues an order, the N4 alone has no legal force to remove you from your home.",
  },
  {
    question: "How long does eviction take in Ontario?",
    answer:
      "The timeline varies. For non-payment (N4/L1), LTB hearing wait times have historically ranged from a few weeks to several months depending on the region and complexity. For N12 (personal use) or N13 (demolition), the process including the 60 or 120-day notice period and subsequent LTB wait time can take 6 months or more. If the eviction order is issued but you require more time, you can ask the LTB for a delay ('relief from eviction') based on hardship.",
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
  "@id": "https://leaseplain.com/tenant-rights/eviction-notices",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".speakable-summary"],
  },
};

export default function EvictionNoticesPage() {
  return (
    <>
      <ArticleSchema
        headline="Eviction Notices in Ontario: What Landlords Can and Cannot Do"
        description="Learn about N4, N5, N12, and other eviction notices in Ontario. A notice alone does NOT evict you — understand your rights, the LTB process, and illegal eviction tactics."
        url="https://leaseplain.com/tenant-rights/eviction-notices"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["eviction notices Ontario", "N4 notice Ontario", "N12 notice Ontario", "LTB eviction process", "tenant eviction rights Canada"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tenant Rights", href: "https://leaseplain.com/tenant-rights" },
        { name: "Eviction Notices", href: "https://leaseplain.com/tenant-rights/eviction-notices" },
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
          "name": "How to Respond to an Eviction Notice in Ontario",
          "description": "A step-by-step guide for Ontario tenants on how to respond to an eviction notice, understand their rights, and navigate the Landlord and Tenant Board process.",
          "step": [
            { "@type": "HowToStep", "position": 1, "name": "Read the notice and identify the form", "text": "Determine which N-form you received (e.g., N4 for non-payment, N5 for damage or disturbance, N12 for landlord's own use). Each form has different grounds, notice periods, and voiding rights. Do not move out based on the notice alone — it is not an eviction order." },
            { "@type": "HowToStep", "position": 2, "name": "Verify the notice is valid", "text": "Check that the correct form was used, that it was delivered properly (in person, by mail, or under the door), and that the termination date is legally valid (must end on the last day of a rental period for most notices). A defective notice can be challenged at the LTB." },
            { "@type": "HowToStep", "position": 3, "name": "Act within the remedy period if applicable", "text": "For an N4 (non-payment): pay all rent owing within 14 days to void the notice. For a first N5 (damage or disturbance): resolve the issue within the first 7 days of the 20-day period. Voiding the notice stops the eviction process entirely." },
            { "@type": "HowToStep", "position": 4, "name": "Wait for the LTB application and hearing notice", "text": "If you do not void the notice, the landlord must file an L1 or L2 application with the LTB. You will then receive a Notice of Hearing. You are not required to vacate until the LTB issues a signed eviction order — receiving a notice does not obligate you to leave." },
            { "@type": "HowToStep", "position": 5, "name": "Prepare your response and attend the hearing", "text": "Gather documents, photos, receipts, and any other evidence to support your position. You can dispute the grounds, challenge the validity of the notice, propose a payment plan (for N4 hearings), or raise a landlord's failure to maintain the unit. Attend the hearing — duty counsel lawyers are often available for free at LTB locations." },
            { "@type": "HowToStep", "position": 6, "name": "Request relief from eviction if needed", "text": "Even if the LTB finds grounds for eviction, ask the adjudicator to delay or refuse the eviction order based on hardship or other circumstances under RTA s. 83. If an order is made against you, you may request a review by a senior LTB adjudicator within 30 days." },
            { "@type": "HowToStep", "position": 7, "name": "Know that only the Sheriff can enforce an eviction", "text": "If an eviction order is issued and you do not vacate, the landlord must request enforcement by the Court Enforcement Office (Sheriff). The landlord cannot change your locks, remove your belongings, or cut services — doing so is illegal and grounds for an urgent T2 application." },
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
                <Link href="/tenant-rights" className="hover:underline">Tenant Rights</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>Eviction Notices</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
                <Shield className="w-3.5 h-3.5" aria-hidden="true" />
                Ontario Tenant Rights
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Eviction Notices in Ontario: What Landlords Can and Cannot Do
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Receiving an eviction notice is frightening — but in Ontario, a notice alone cannot
                remove you from your home. The law requires a full Landlord and Tenant Board process,
                with a hearing where you have the right to respond, present evidence, and raise
                defences. Here&apos;s everything Ontario tenants need to know about each notice form,
                the eviction timeline, and your rights at every step.
              </p>
            </div>
          </section>

          {/* Content + sidebar */}
          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-14">

                {/* Critical banner */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <p className="text-sm text-blue-800 font-semibold leading-relaxed">
                    Important: A notice does NOT automatically evict you. Only the Landlord and
                    Tenant Board (LTB) can issue an eviction order. You do not have to move on the
                    notice date. The Sheriff enforces evictions only after a signed LTB order.
                  </p>
                </div>

                {/* Notice types — detailed */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Ontario Eviction Notice Forms: Complete Guide
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Ontario uses standardized N-form notices. Each form corresponds to a specific
                    reason for ending the tenancy. Here is a detailed breakdown of each form, the
                    notice period, voiding rights, and what to expect.
                  </p>
                  <div className="flex flex-col gap-5">
                    {noticeDetails.map((notice) => (
                      <div key={notice.form} className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                        <div className="flex items-start gap-3 mb-3">
                          <span className="w-11 h-11 rounded-lg bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center flex-shrink-0">
                            {notice.form}
                          </span>
                          <div className="flex-1">
                            <p className="font-semibold text-slate-900 text-sm mb-0.5">{notice.name}</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                              <span className="text-xs text-slate-500 flex items-center gap-1">
                                <Clock className="w-3 h-3" aria-hidden="true" />
                                {notice.noticePeriod}
                              </span>
                              <span className="text-xs text-slate-400">{notice.sections.join(", ")}</span>
                            </div>
                          </div>
                          {notice.voidable ? (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 border border-green-100 px-2 py-0.5 rounded-full flex-shrink-0">
                              <CheckCircle className="w-3 h-3" aria-hidden="true" />
                              Voidable
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full flex-shrink-0">
                              Not voidable
                            </span>
                          )}
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed mb-4">{notice.detail}</p>

                        {notice.voidable && notice.voidMethod && (
                          <div className="bg-green-50 border border-green-100 rounded-lg p-3 mb-4">
                            <p className="text-xs text-green-800 font-semibold">
                              How to void: {notice.voidMethod}
                            </p>
                          </div>
                        )}

                        <ul className="flex flex-col gap-2">
                          {notice.keyPoints.map((pt, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                              <CheckCircle className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                              {pt}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-4 pt-3 border-t border-slate-50 flex items-center gap-2">
                          <FileText className="w-3 h-3 text-slate-400" aria-hidden="true" />
                          <span className="text-xs text-slate-400">LTB Application: {notice.ltbApplication}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Eviction process steps */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    The Eviction Process: Notice → Application → Hearing → Order
                  </h2>
                  <ol className="flex flex-col gap-4">
                    {evictionSteps.map((item, i) => (
                      <li key={item.step} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-slate-900 text-sm mb-1">{item.step}</p>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Tenant rights */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Your Rights When You Receive an Eviction Notice
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {[
                      {
                        right: "Right to void the notice (where applicable)",
                        detail:
                          "For N4 notices: pay all rent owing within 14 days and the notice is void. For a first N5: resolve the issue within the first 7 days of the 20-day period. Voiding is permanent — the eviction cannot proceed on that notice.",
                      },
                      {
                        right: "Right to attend the LTB hearing",
                        detail:
                          "You will receive a Notice of Hearing from the LTB. You have the right to attend, present documents and photos, call witnesses, and be represented by a paralegal, lawyer, or duty counsel (often free at the hearing location).",
                      },
                      {
                        right: "Right to negotiate a payment plan (N4 hearings)",
                        detail:
                          "For non-payment hearings, you can propose a repayment plan at the LTB. If accepted, the eviction order is conditional on the plan being followed. Falling behind again can result in the landlord enforcing the conditional order without a new hearing.",
                      },
                      {
                        right: "Right to dispute the grounds of the notice",
                        detail:
                          "You can challenge the validity of the notice at the hearing — including whether it was served correctly, whether the grounds are accurate, or whether the landlord's conduct disentitles them to relief. If the landlord cannot prove their case, the LTB will dismiss the application.",
                      },
                      {
                        right: "Right to request relief from eviction",
                        detail:
                          "Even if the LTB finds grounds for eviction, you can ask the Board to delay or refuse the eviction order based on the circumstances — for example, hardship, family circumstances, or if it is not reasonable in all the circumstances (RTA s. 83).",
                      },
                      {
                        right: "Right to request a review",
                        detail:
                          "If an eviction order is made against you, you can request a review by a senior LTB adjudicator within 30 days, and thereafter seek judicial review at Divisional Court. An automatic stay (pause on the eviction) may be granted while the review is pending.",
                      },
                    ].map((item) => (
                      <li key={item.right} className="flex items-start gap-4">
                        <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-blue-600" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 text-sm mb-0.5">{item.right}</p>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Illegal tactics */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Red Flags and Illegal Eviction Tactics
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-5 text-sm">
                    The following landlord actions are illegal in Ontario regardless of whether an
                    eviction process is underway. If your landlord does any of these, file an urgent
                    T2 application with the LTB immediately and call Legal Aid Ontario.
                  </p>
                  <div className="flex flex-col gap-4">
                    {illegalTactics.map((item) => (
                      <div key={item.tactic} className="flex items-start gap-3 bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                        <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-semibold text-slate-800 mb-1">{item.tactic}</p>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other provinces */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Other Provinces: Quick Reference
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    Eviction rules vary significantly across Canada. Here is a quick-reference summary
                    of key notice forms in British Columbia, Alberta, and Quebec.
                  </p>
                  <div className="flex flex-col gap-5">
                    {provincialQuickRef.map((prov) => (
                      <div key={prov.province} className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {prov.flag}
                          </span>
                          <h3 className="font-semibold text-slate-900">{prov.province}</h3>
                        </div>
                        <div className="overflow-x-auto mb-3">
                          <table className="w-full text-xs border-collapse">
                            <thead>
                              <tr className="bg-slate-50 border-b border-slate-100">
                                <th className="text-left py-2 px-3 font-semibold text-slate-600">Form / Notice</th>
                                <th className="text-left py-2 px-3 font-semibold text-slate-600">Purpose</th>
                                <th className="text-left py-2 px-3 font-semibold text-slate-600">Period / Notes</th>
                              </tr>
                            </thead>
                            <tbody>
                              {prov.forms.map((form, i) => (
                                <tr key={i} className={`border-b border-slate-50 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}`}>
                                  <td className="py-2 px-3 font-medium text-slate-700">{form.name}</td>
                                  <td className="py-2 px-3 text-slate-600">{form.description}</td>
                                  <td className="py-2 px-3 text-slate-500">{form.period}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <p className="text-xs text-slate-500 italic">{prov.note}</p>
                      </div>
                    ))}
                  </div>
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
                  <h3 className="font-bold text-lg mb-2">Check your lease</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your lease and our AI will flag clauses that could affect your eviction
                    rights — and identify any illegal terms.
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
                      { ref: "s. 59", desc: "N4 — non-payment of rent" },
                      { ref: "s. 62/64", desc: "N5 — damage, disturbance, overcrowding" },
                      { ref: "s. 61", desc: "N6 — illegal act" },
                      { ref: "s. 66", desc: "N7 — serious safety impairment" },
                      { ref: "s. 58", desc: "N8 — persistent late payment" },
                      { ref: "s. 48/48.1", desc: "N12 — landlord/family use; 1-month compensation" },
                      { ref: "s. 50/52-54", desc: "N13 — demolition/renovation; 3-month compensation" },
                      { ref: "s. 83", desc: "Relief from eviction — hardship discretion" },
                      { ref: "s. 21", desc: "Illegal service shutoffs" },
                      { ref: "s. 23", desc: "Harassment prohibition" },
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
                      { label: "Ontario Tenant Rights", href: "/tenant-rights/ontario" },
                      { label: "Breaking a Lease", href: "/tenant-rights/breaking-a-lease" },
                      { label: "Early Termination Clause", href: "/lease-clause/early-termination" },
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
                  <h3 className="font-semibold text-slate-800 mb-2 text-sm">Emergency Help</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    If your landlord has changed your locks or shut off utilities, call the LTB
                    immediately at <strong>1-888-332-3234</strong>. Emergency orders can be obtained
                    quickly for serious violations.
                    <br /><br />
                    For free legal advice: <strong>Legal Aid Ontario</strong> — 1-800-668-8258.
                    <br /><br />
                    Find your local Community Legal Clinic at <strong>legalaid.on.ca</strong>.
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
