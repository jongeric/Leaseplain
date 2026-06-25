"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Info } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

type NoticeType =
  | "rent-increase"
  | "landlord-entry"
  | "tenant-ending"
  | "landlord-personal"
  | "eviction-nonpayment"
  | "eviction-cause";

interface NoticeInfo {
  period: string;
  legalBasis: string;
  form?: string;
  nonComplianceNote: string;
}

const NOTICE_DATA: Record<string, Record<NoticeType, NoticeInfo>> = {
  ON: {
    "rent-increase": {
      period: "90 days",
      legalBasis: "Residential Tenancies Act, s. 116 — written notice required before the effective date of the increase.",
      nonComplianceNote: "A rent increase notice with insufficient notice is void. Tenants do not have to pay the increase.",
    },
    "landlord-entry": {
      period: "24 hours",
      legalBasis: "Residential Tenancies Act, s. 27 — written notice must state the reason and time of entry (between 8 am–8 pm).",
      nonComplianceNote: "Entry without 24 hours notice may constitute illegal entry and can be challenged at the Landlord and Tenant Board.",
    },
    "tenant-ending": {
      period: "60 days before last day of rental period",
      legalBasis: "Residential Tenancies Act, s. 44 — tenant must give at least 60 days written notice ending on the last day of a rental period.",
      nonComplianceNote: "If insufficient notice is given, the tenant may be liable for rent beyond the move-out date.",
    },
    "landlord-personal": {
      period: "60 days",
      legalBasis: "Residential Tenancies Act, s. 48 — landlord or immediate family member moving in.",
      form: "Form N12 — compensation equal to 1 month's rent required",
      nonComplianceNote: "If the landlord does not actually move in, the tenant can file a T5 application for bad-faith eviction. Substantial penalties may apply.",
    },
    "eviction-nonpayment": {
      period: "14 days",
      legalBasis: "Residential Tenancies Act, s. 59 — tenant has 14 days to pay rent owing or vacate.",
      form: "Form N4 — Notice to End a Tenancy Early for Non-payment of Rent",
      nonComplianceNote: "If the tenant pays in full before the eviction order is issued, the notice is void. An LTB hearing is required before actual eviction.",
    },
    "eviction-cause": {
      period: "20 days",
      legalBasis: "Residential Tenancies Act, s. 62–68 — covers wilful damage, illegal acts, and persistent disturbances.",
      form: "Form N5 — Notice to End a Tenancy Early for Interfering with Others, Damage or Overcrowding",
      nonComplianceNote: "If the tenant corrects the behavior within 7 days, the N5 is void. A second N5 within 6 months is non-voidable.",
    },
  },
  BC: {
    "rent-increase": {
      period: "3 months",
      legalBasis: "Residential Tenancy Act, s. 42 — written notice required at least 3 full rental months before effective date.",
      nonComplianceNote: "An increase without proper notice is unenforceable. The tenant can dispute it through the Residential Tenancy Branch.",
    },
    "landlord-entry": {
      period: "24 hours",
      legalBasis: "Residential Tenancy Act, s. 29 — written notice stating reason and time of entry required (between 8 am–9 pm).",
      nonComplianceNote: "Unauthorized entry may be grounds for a dispute resolution order or compensation claim.",
    },
    "tenant-ending": {
      period: "1 rental month",
      legalBasis: "Residential Tenancy Act, s. 45 — tenant must give 1 rental month written notice.",
      nonComplianceNote: "Insufficient notice may result in the tenant owing rent for the remaining notice period.",
    },
    "landlord-personal": {
      period: "2 months",
      legalBasis: "Residential Tenancy Act, s. 49 — landlord or close family member personal use requires 2 months notice. Demolition/renovation/conversion requires 4 months notice.",
      nonComplianceNote: "If the landlord does not occupy the unit, the tenant can apply for double the monthly rent as compensation.",
    },
    "eviction-nonpayment": {
      period: "10 days",
      legalBasis: "Residential Tenancy Act, s. 46 — One Month Notice to End Tenancy for Unpaid Rent or Utilities.",
      form: "One Month Notice to End Tenancy (RTB form)",
      nonComplianceNote: "Tenant can dispute within 5 days. If rent is paid in full, the notice is cancelled.",
    },
    "eviction-cause": {
      period: "1 month",
      legalBasis: "Residential Tenancy Act, s. 47 — for cause including damage, illegal activity, or significant disturbance.",
      nonComplianceNote: "Tenant has 10 days to dispute through the Residential Tenancy Branch.",
    },
  },
  AB: {
    "rent-increase": {
      period: "3 months",
      legalBasis: "Residential Tenancies Act, s. 11 — 3 full months' written notice before the effective date. No provincial cap.",
      nonComplianceNote: "An increase without 3 months' notice is unenforceable for the period without proper notice.",
    },
    "landlord-entry": {
      period: "24 hours",
      legalBasis: "Residential Tenancies Act, s. 23 — written notice 24 hours in advance; entry between 8 am–8 pm.",
      nonComplianceNote: "Unauthorized entry may be grounds for a complaint to the Residential Tenancy Dispute Resolution Service.",
    },
    "tenant-ending": {
      period: "Same as rental period (1 month for monthly tenancy)",
      legalBasis: "Residential Tenancies Act, s. 12 — notice period must equal the rental period.",
      nonComplianceNote: "Insufficient notice may result in the tenant owing rent for the remainder of the notice period.",
    },
    "landlord-personal": {
      period: "3 months",
      legalBasis: "Residential Tenancies Act, s. 12 — landlord may end tenancy at end of fixed-term with proper notice.",
      nonComplianceNote: "Landlord must genuinely intend to use the premises; bad-faith eviction may result in damages.",
    },
    "eviction-nonpayment": {
      period: "14 days",
      legalBasis: "Residential Tenancies Act, s. 20 — 14-day notice to vacate for non-payment of rent.",
      nonComplianceNote: "Tenant may apply to RTDRS to dispute within the notice period.",
    },
    "eviction-cause": {
      period: "14 days",
      legalBasis: "Residential Tenancies Act, s. 21 — 14-day notice for substantial breach (damage, illegal acts, disturbance).",
      nonComplianceNote: "Tenant may dispute through RTDRS. Landlord must not physically remove the tenant without a court order.",
    },
  },
  QC: {
    "rent-increase": {
      period: "3–6 months before lease end",
      legalBasis: "Civil Code of Quebec, art. 1942 — written notice of rent modification required before lease renewal window.",
      nonComplianceNote: "Without proper notice, the lease renews at the same rent. The tenant may refuse the increase within 1 month of receiving notice.",
    },
    "landlord-entry": {
      period: "24 hours",
      legalBasis: "Civil Code of Quebec, art. 1933 — advance notice required; entry must be at a reasonable time.",
      nonComplianceNote: "Unauthorized entry may be challenged before the Tribunal administratif du logement (TAL).",
    },
    "tenant-ending": {
      period: "1–3 months depending on lease type",
      legalBasis: "Civil Code of Quebec, art. 1946 — 1 month for monthly leases; 3 months for yearly or fixed-term leases.",
      nonComplianceNote: "Insufficient notice may result in the tenant remaining liable for rent through the full notice period.",
    },
    "landlord-personal": {
      period: "6 months before lease end",
      legalBasis: "Civil Code of Quebec, art. 1960 — repossession for personal use requires notice at least 6 months before lease expiry.",
      nonComplianceNote: "If repossession is not genuine, the tenant may seek damages and reinstatement through the TAL.",
    },
    "eviction-nonpayment": {
      period: "Special TAL process",
      legalBasis: "Civil Code of Quebec, art. 1971 — landlord must apply to the TAL for a hearing; there is no simple notice-to-vacate.",
      nonComplianceNote: "A landlord cannot evict a tenant for non-payment without a TAL order. Self-help eviction is illegal.",
    },
    "eviction-cause": {
      period: "Special TAL process",
      legalBasis: "Civil Code of Quebec, art. 1971 — eviction for cause requires a TAL application and hearing.",
      nonComplianceNote: "Only the TAL can issue an eviction order. Landlords must not attempt to remove tenants without an order.",
    },
  },
  MB: {
    "rent-increase": {
      period: "3 months",
      legalBasis: "Residential Tenancies Act (Manitoba), s. 114 — written notice at least 3 full rental periods before effective date.",
      nonComplianceNote: "An increase without proper notice is void. Tenants can file a complaint with the Residential Tenancies Branch.",
    },
    "landlord-entry": {
      period: "24 hours",
      legalBasis: "Residential Tenancies Act (Manitoba), s. 66 — written notice at least 24 hours before entry.",
      nonComplianceNote: "Unauthorized entry may entitle the tenant to apply for a rent reduction or compensation.",
    },
    "tenant-ending": {
      period: "1 rental month",
      legalBasis: "Residential Tenancies Act (Manitoba), s. 88 — at least 1 full rental period written notice.",
      nonComplianceNote: "Insufficient notice may make the tenant liable for rent for the notice period.",
    },
    "landlord-personal": {
      period: "3 months",
      legalBasis: "Residential Tenancies Act (Manitoba), s. 95 — 3 months notice for personal or immediate family use.",
      nonComplianceNote: "If the landlord does not actually use the unit, the tenant may seek compensation through the RTB.",
    },
    "eviction-nonpayment": {
      period: "5 days (pay) or 30 days (vacate)",
      legalBasis: "Residential Tenancies Act (Manitoba), s. 95 — tenant has 5 days to pay; if not paid, 30 days to vacate.",
      nonComplianceNote: "Full payment within 5 days voids the notice. An order from the RTB is required for actual eviction.",
    },
    "eviction-cause": {
      period: "30 days",
      legalBasis: "Residential Tenancies Act (Manitoba), s. 95 — 30 days notice for significant breach of tenancy obligations.",
      nonComplianceNote: "Tenant may apply to the RTB to dispute within the notice period.",
    },
  },
  SK: {
    "rent-increase": {
      period: "As per rental agreement (no provincial cap)",
      legalBasis: "Residential Tenancies Act (Saskatchewan), s. 49 — notice must equal the rental period; no statutory cap on amount.",
      nonComplianceNote: "Increase without proper notice is unenforceable. Tenant can dispute at the Office of Residential Tenancies.",
    },
    "landlord-entry": {
      period: "Reasonable notice",
      legalBasis: "Residential Tenancies Act (Saskatchewan), s. 28 — landlord must give reasonable notice and enter at a reasonable time.",
      nonComplianceNote: "Unreasonable entry can be challenged at the Office of Residential Tenancies.",
    },
    "tenant-ending": {
      period: "1 rental month",
      legalBasis: "Residential Tenancies Act (Saskatchewan), s. 47 — written notice equal to the rental period.",
      nonComplianceNote: "Insufficient notice may result in liability for rent through the end of the notice period.",
    },
    "landlord-personal": {
      period: "1 month",
      legalBasis: "Residential Tenancies Act (Saskatchewan), s. 56 — 1 month notice for landlord or family use.",
      nonComplianceNote: "Landlord must genuinely intend to use the unit. Bad-faith evictions may result in compensation claims.",
    },
    "eviction-nonpayment": {
      period: "30 days",
      legalBasis: "Residential Tenancies Act (Saskatchewan), s. 54 — 30 days written notice for unpaid rent.",
      nonComplianceNote: "Tenant can dispute at the ORT. Paying full arrears may resolve the matter depending on circumstances.",
    },
    "eviction-cause": {
      period: "30 days",
      legalBasis: "Residential Tenancies Act (Saskatchewan), s. 54 — 30 days for material breach of tenancy obligations.",
      nonComplianceNote: "Landlord must apply for an ORT order before physically removing the tenant.",
    },
  },
  NS: {
    "rent-increase": {
      period: "4 months",
      legalBasis: "Residential Tenancies Act (Nova Scotia), s. 9A — written notice at least 4 months before effective date.",
      nonComplianceNote: "An increase without 4 months' notice is invalid. Tenant can file with the Director of Residential Tenancies.",
    },
    "landlord-entry": {
      period: "24 hours",
      legalBasis: "Residential Tenancies Act (Nova Scotia), s. 9 — written notice at least 24 hours before entry.",
      nonComplianceNote: "Unauthorized entry may be grounds for a complaint and compensation order.",
    },
    "tenant-ending": {
      period: "1 month",
      legalBasis: "Residential Tenancies Act (Nova Scotia), s. 10 — written notice at least 1 rental month before vacating.",
      nonComplianceNote: "Insufficient notice may result in liability for the full notice period's rent.",
    },
    "landlord-personal": {
      period: "3 months",
      legalBasis: "Residential Tenancies Act (Nova Scotia), s. 10 — 3 months notice for landlord or immediate family use.",
      nonComplianceNote: "If the landlord does not move in, the tenant may apply for compensation.",
    },
    "eviction-nonpayment": {
      period: "15 days",
      legalBasis: "Residential Tenancies Act (Nova Scotia), s. 10M — 15-day notice to quit for non-payment of rent.",
      nonComplianceNote: "Tenant may apply to the Director of Residential Tenancies to dispute. An order is required for actual eviction.",
    },
    "eviction-cause": {
      period: "15 days",
      legalBasis: "Residential Tenancies Act (Nova Scotia), s. 10M — 15-day notice for material breach or chronic late payment.",
      nonComplianceNote: "Tenant may dispute. Landlord cannot remove tenant without a formal eviction order.",
    },
  },
  NB: {
    "rent-increase": {
      period: "3 months written notice",
      legalBasis: "Residential Tenancies Act (New Brunswick), s. 14 — written notice required; rent increases are capped at 3% annually (effective Feb 1, 2025), up to 9% with Tribunal approval for renovations.",
      nonComplianceNote: "Notice without proper written form may be invalid. Tenant should document all communications.",
    },
    "landlord-entry": {
      period: "24 hours",
      legalBasis: "Residential Tenancies Act (New Brunswick), s. 5 — 24 hours written notice required for non-emergency entry.",
      nonComplianceNote: "Unauthorized entry may be raised as a complaint with the Residential Tenancies Tribunal.",
    },
    "tenant-ending": {
      period: "1 month",
      legalBasis: "Residential Tenancies Act (New Brunswick), s. 16 — 1 month written notice to end a month-to-month tenancy.",
      nonComplianceNote: "Insufficient notice may result in continued rent liability.",
    },
    "landlord-personal": {
      period: "3 months",
      legalBasis: "Residential Tenancies Act (New Brunswick), s. 16 — 3 months notice for personal or family use.",
      nonComplianceNote: "Landlord must genuinely use the unit or risk compensation claims from the tenant.",
    },
    "eviction-nonpayment": {
      period: "15 days",
      legalBasis: "Residential Tenancies Act (New Brunswick), s. 16 — 15 days written notice for non-payment of rent.",
      nonComplianceNote: "Tenant may apply to the Residential Tenancies Tribunal to dispute. Physical eviction requires a formal order.",
    },
    "eviction-cause": {
      period: "30 days",
      legalBasis: "Residential Tenancies Act (New Brunswick), s. 16 — 30 days for breach of tenancy obligations.",
      nonComplianceNote: "Landlord must obtain a Residential Tenancies Tribunal order; self-help eviction is prohibited.",
    },
  },
  PE: {
    "rent-increase": {
      period: "IRAC approval required",
      legalBasis: "Rental of Residential Property Act (PEI), s. 18 — rent increases must be approved by the Island Regulatory and Appeals Commission.",
      nonComplianceNote: "Any increase without IRAC approval is void. Tenants can file a complaint with IRAC.",
    },
    "landlord-entry": {
      period: "24 hours",
      legalBasis: "Rental of Residential Property Act (PEI), s. 14 — 24 hours written notice required for routine entry.",
      nonComplianceNote: "Unauthorized entry can be reported to IRAC and may result in a compliance order.",
    },
    "tenant-ending": {
      period: "1 month",
      legalBasis: "Rental of Residential Property Act (PEI), s. 16 — 1 month written notice to end a monthly tenancy.",
      nonComplianceNote: "Insufficient notice may result in rent liability through the full notice period.",
    },
    "landlord-personal": {
      period: "2 months",
      legalBasis: "Rental of Residential Property Act (PEI), s. 16 — 2 months notice for landlord personal use.",
      nonComplianceNote: "Landlord must file with IRAC and genuinely occupy the unit. Bad-faith evictions may be penalized.",
    },
    "eviction-nonpayment": {
      period: "20 days",
      legalBasis: "Rental of Residential Property Act (PEI), s. 16 — 20-day notice for non-payment of rent.",
      nonComplianceNote: "Tenant can pay arrears to void the notice. IRAC hearing required before eviction.",
    },
    "eviction-cause": {
      period: "20 days",
      legalBasis: "Rental of Residential Property Act (PEI), s. 16 — 20-day notice for material breach.",
      nonComplianceNote: "IRAC order required for actual eviction. Landlord cannot force tenant out without an order.",
    },
  },
  NL: {
    "rent-increase": {
      period: "No cap (amount unrestricted)",
      legalBasis: "Residential Tenancies Act (Newfoundland & Labrador), s. 37 — written notice required; no statutory cap.",
      nonComplianceNote: "Notice without proper written form may be invalid. Tenant can apply to the Director of Residential Tenancies.",
    },
    "landlord-entry": {
      period: "24 hours",
      legalBasis: "Residential Tenancies Act (Newfoundland & Labrador), s. 27 — 24 hours written notice before entry.",
      nonComplianceNote: "Unauthorized entry may be grounds for a complaint and compensation order.",
    },
    "tenant-ending": {
      period: "1 month",
      legalBasis: "Residential Tenancies Act (Newfoundland & Labrador), s. 33 — 1 month written notice to end a monthly tenancy.",
      nonComplianceNote: "Insufficient notice may result in liability for the remaining notice period's rent.",
    },
    "landlord-personal": {
      period: "3 months",
      legalBasis: "Residential Tenancies Act (Newfoundland & Labrador), s. 35 — 3 months notice for personal or family use.",
      nonComplianceNote: "If the landlord does not occupy, the tenant may apply for compensation.",
    },
    "eviction-nonpayment": {
      period: "15 days",
      legalBasis: "Residential Tenancies Act (Newfoundland & Labrador), s. 38 — 15-day notice to remedy non-payment.",
      nonComplianceNote: "Tenant may pay arrears to resolve. Formal order required before eviction.",
    },
    "eviction-cause": {
      period: "30 days",
      legalBasis: "Residential Tenancies Act (Newfoundland & Labrador), s. 38 — 30 days for substantial breach of obligations.",
      nonComplianceNote: "Landlord must apply for a Director's order; self-help eviction is illegal.",
    },
  },
};

const NOTICE_TYPE_LABELS: Record<NoticeType, string> = {
  "rent-increase": "Rent Increase",
  "landlord-entry": "Landlord Entry (Non-Emergency)",
  "tenant-ending": "Tenant Ending Tenancy",
  "landlord-personal": "Landlord Ending Tenancy (Personal Use)",
  "eviction-nonpayment": "Eviction – Non-Payment of Rent",
  "eviction-cause": "Eviction – Cause (damage, disturbance, etc.)",
};

const PROVINCE_LABELS: Record<string, string> = {
  ON: "Ontario",
  BC: "British Columbia",
  AB: "Alberta",
  QC: "Quebec",
  MB: "Manitoba",
  SK: "Saskatchewan",
  NS: "Nova Scotia",
  NB: "New Brunswick",
  PE: "Prince Edward Island",
  NL: "Newfoundland & Labrador",
};

export default function NoticePeriodClient() {
  const [province, setProvince] = useState("");
  const [noticeType, setNoticeType] = useState<NoticeType | "">("");

  const result =
    province && noticeType ? NOTICE_DATA[province]?.[noticeType] ?? null : null;

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1 py-12 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Notice Period Calculator</h1>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Find out the legally required notice period for any tenancy situation in your province.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6">
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Province</label>
                <select
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option value="">Select province…</option>
                  <option value="ON">Ontario</option>
                  <option value="BC">British Columbia</option>
                  <option value="AB">Alberta</option>
                  <option value="QC">Quebec</option>
                  <option value="MB">Manitoba</option>
                  <option value="SK">Saskatchewan</option>
                  <option value="NS">Nova Scotia</option>
                  <option value="NB">New Brunswick</option>
                  <option value="PE">Prince Edward Island</option>
                  <option value="NL">Newfoundland &amp; Labrador</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Notice Type</label>
                <select
                  value={noticeType}
                  onChange={(e) => setNoticeType(e.target.value as NoticeType | "")}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option value="">Select notice type…</option>
                  {(Object.keys(NOTICE_TYPE_LABELS) as NoticeType[]).map((key) => (
                    <option key={key} value={key}>
                      {NOTICE_TYPE_LABELS[key]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {result && province && noticeType && (
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5">
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                      {PROVINCE_LABELS[province]} — {NOTICE_TYPE_LABELS[noticeType]}
                    </p>
                    <p className="text-2xl font-bold text-slate-900">{result.period}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 text-sm">
                  <div>
                    <p className="font-semibold text-slate-700 mb-0.5">Legal Basis</p>
                    <p className="text-slate-600">{result.legalBasis}</p>
                  </div>

                  {result.form && (
                    <div>
                      <p className="font-semibold text-slate-700 mb-0.5">Required Form / Document</p>
                      <p className="text-blue-700 font-medium">{result.form}</p>
                    </div>
                  )}

                  <div className="bg-white border border-blue-100 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-700 mb-0.5 text-xs uppercase tracking-wide">If proper notice is not given</p>
                        <p className="text-slate-600">{result.nonComplianceNote}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-8">
            <strong>Not legal advice.</strong> Notice rules can change. Always verify with your provincial tenancy authority or a legal professional.
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8 text-center">
            <p className="text-slate-700 text-sm mb-3">Have a lease you want reviewed? LeasePlain analyzes the full text and flags concerning clauses.</p>
            <Link href="/upload" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors text-sm">
              Analyze My Lease Free
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <FAQAccordion items={[
            {
              q: "What happens if my landlord doesn't give proper notice?",
              a: "It's likely invalid. In Ontario, a Notice of Entry without 24 hours notice can be challenged at the LTB. A rent increase notice with insufficient notice is void. Document the violation in writing.",
            },
            {
              q: "Does the notice period include weekends and holidays?",
              a: "Yes, notice periods are calendar days, not business days, unless your provincial law specifies otherwise.",
            },
            {
              q: "Can I waive the notice period?",
              a: "In most provinces, you can agree to a shorter notice period in writing at the time the notice is needed (not in the lease). Pre-signed lease waivers of notice rights are generally unenforceable.",
            },
            {
              q: "What's the difference between notice to end tenancy and an eviction notice?",
              a: "A notice to end tenancy gives the tenant a deadline to vacate. An eviction order comes from a tribunal after the landlord applies. The landlord cannot physically remove a tenant without a tribunal order — even after a notice period expires.",
            },
            {
              q: "Do notice periods differ for fixed-term vs month-to-month leases?",
              a: "Yes. Month-to-month tenancies have clear notice rules. Fixed-term leases typically end automatically unless renewed — the landlord doesn't need to give notice to end a fixed-term lease in most provinces, but must give notice if they want the tenant to vacate at end of term.",
            },
          ]} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
