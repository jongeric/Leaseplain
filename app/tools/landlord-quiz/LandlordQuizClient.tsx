"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HelpCircle, ChevronLeft, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

type Verdict = "yes" | "no" | "depends";

interface ProvinceResult {
  verdict: Verdict;
  detail: string;
}

interface Scenario {
  id: number;
  title: string;
  explanation: string;
  whatToDo: string;
  results: Record<string, ProvinceResult>;
}

const SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: "Enter my unit without notice",
    explanation:
      "Landlords must give at least 24 hours written notice before entering for inspections, repairs, or showings. Entering without notice violates your right to quiet enjoyment and is grounds for a complaint to the tenancy tribunal.",
    whatToDo:
      "Document the unauthorized entry (date, time, witnesses). Send a written complaint to the landlord. If it continues, file with your provincial tribunal.",
    results: {
      ON: { verdict: "no", detail: "24 hours written notice required; exception: genuine emergency." },
      BC: { verdict: "no", detail: "24 hours written notice required; exception: genuine emergency." },
      AB: { verdict: "no", detail: "24 hours written notice required; exception: genuine emergency." },
      QC: { verdict: "no", detail: "24 hours written notice required; exception: genuine emergency." },
      MB: { verdict: "no", detail: "24 hours written notice required; exception: genuine emergency." },
      SK: { verdict: "no", detail: "Reasonable notice required (usually 24 hours); exception: genuine emergency." },
      NS: { verdict: "no", detail: "24 hours written notice required; exception: genuine emergency." },
      NB: { verdict: "no", detail: "24 hours written notice required; exception: genuine emergency." },
      PE: { verdict: "no", detail: "24 hours written notice required; exception: genuine emergency." },
      NL: { verdict: "no", detail: "24 hours written notice required; exception: genuine emergency." },
    },
  },
  {
    id: 2,
    title: "Raise my rent more than once per year",
    explanation:
      "In provinces with rent control, landlords must wait at least 12 months since the last increase (or since move-in) before the next increase. Proper written notice is always required.",
    whatToDo:
      "Check when your last rent increase took effect (or when you moved in). If less than 12 months have passed, the increase is invalid. Write to your landlord and, if necessary, file with your provincial tribunal.",
    results: {
      ON: { verdict: "no", detail: "12-month minimum between increases required." },
      BC: { verdict: "no", detail: "12-month minimum between increases required." },
      AB: { verdict: "depends", detail: "No provincial cap, but most leases specify terms. 3 months notice required." },
      QC: { verdict: "no", detail: "TAL controls rent increase process — once per year." },
      MB: { verdict: "no", detail: "12-month minimum between increases required." },
      SK: { verdict: "depends", detail: "No provincial cap, but increases must follow lease terms." },
      NS: { verdict: "no", detail: "12-month minimum between increases required." },
      NB: { verdict: "depends", detail: "No provincial cap, but increases must follow lease terms and notice requirements." },
      PE: { verdict: "no", detail: "Increases require IRAC approval — effectively limited to once per year." },
      NL: { verdict: "depends", detail: "No rent control, but increases must follow lease terms and notice requirements." },
    },
  },
  {
    id: 3,
    title: "Keep my deposit for normal wear and tear",
    explanation:
      "Normal wear and tear — minor scuffs, small nail holes from pictures, carpet wear from regular use — cannot be deducted from your deposit. Only actual damage beyond normal use is deductible. The landlord must provide an itemized deduction list.",
    whatToDo:
      "If your landlord deducts for wear and tear, dispute the deductions in writing. If they refuse to return the full deposit, file with your provincial tenancy tribunal. Keep all move-in/move-out inspection reports and photos.",
    results: {
      ON: { verdict: "no", detail: "Normal wear and tear cannot be deducted from any deposit." },
      BC: { verdict: "no", detail: "Normal wear and tear cannot be deducted from any deposit." },
      AB: { verdict: "no", detail: "Normal wear and tear cannot be deducted from any deposit." },
      QC: { verdict: "no", detail: "Normal wear and tear cannot be deducted — no deposits allowed at all in QC." },
      MB: { verdict: "no", detail: "Normal wear and tear cannot be deducted from any deposit." },
      SK: { verdict: "no", detail: "Normal wear and tear cannot be deducted from any deposit." },
      NS: { verdict: "no", detail: "Normal wear and tear cannot be deducted from any deposit." },
      NB: { verdict: "no", detail: "Normal wear and tear cannot be deducted from any deposit." },
      PE: { verdict: "no", detail: "Normal wear and tear cannot be deducted from any deposit." },
      NL: { verdict: "no", detail: "Normal wear and tear cannot be deducted from any deposit." },
    },
  },
  {
    id: 4,
    title: "Evict me because I have a pet (I had the pet when I moved in)",
    explanation:
      "Ontario's Residential Tenancies Act explicitly voids no-pet clauses. In other provinces, a lease prohibition on pets may be enforceable, but the landlord still needs to go through the proper eviction process.",
    whatToDo:
      "In Ontario: the no-pet clause is void — you cannot be evicted for having a pet. In other provinces: check whether your lease has a no-pets clause and whether it is enforceable. If an eviction notice is issued, you have the right to dispute it at the tribunal.",
    results: {
      ON: { verdict: "no", detail: "Pet clauses are void in Ontario. Landlords cannot evict a tenant solely for having a pet." },
      BC: { verdict: "depends", detail: "No-pet clauses may be enforceable in BC. Check your lease." },
      AB: { verdict: "depends", detail: "No-pet clauses are generally enforceable in Alberta." },
      QC: { verdict: "depends", detail: "Pet restrictions in the lease may be enforceable." },
      MB: { verdict: "depends", detail: "Governed by lease terms." },
      SK: { verdict: "depends", detail: "Governed by lease terms." },
      NS: { verdict: "depends", detail: "Governed by lease terms." },
      NB: { verdict: "depends", detail: "Governed by lease terms." },
      PE: { verdict: "depends", detail: "Governed by lease terms." },
      NL: { verdict: "depends", detail: "Governed by lease terms." },
    },
  },
  {
    id: 5,
    title: "Charge me a security deposit in Quebec",
    explanation:
      "In Quebec, any security deposit or damage deposit is illegal. The landlord can only collect the first month's rent. Any amount charged as a deposit must be returned.",
    whatToDo:
      "If you paid a security deposit in Quebec, demand its return in writing. If the landlord refuses, file a complaint with the Tribunal administratif du logement (TAL).",
    results: {
      ON: { verdict: "depends", detail: "LMR deposit (= 1 month) allowed. No separate security deposit." },
      BC: { verdict: "depends", detail: "Security deposit capped at 0.5x monthly rent — allowed but regulated." },
      AB: { verdict: "depends", detail: "Security deposit capped at 1x monthly rent — allowed but regulated." },
      QC: { verdict: "no", detail: "Quebec law prohibits security deposits entirely." },
      MB: { verdict: "depends", detail: "Security deposit capped at 0.5x monthly rent — allowed but regulated." },
      SK: { verdict: "depends", detail: "Security deposit capped at 1x monthly rent — allowed but regulated." },
      NS: { verdict: "depends", detail: "Security deposit capped at 0.5x monthly rent — allowed but regulated." },
      NB: { verdict: "depends", detail: "Security deposit capped at 1x monthly rent — allowed but regulated." },
      PE: { verdict: "depends", detail: "Security deposit capped at 2x monthly rent — allowed but regulated." },
      NL: { verdict: "depends", detail: "Security deposit capped at 75% of monthly rent — allowed but regulated." },
    },
  },
  {
    id: 6,
    title: "Raise my rent during a fixed-term lease",
    explanation:
      "The rent in a fixed-term lease is locked until the lease ends. The landlord can only raise rent at renewal, and must still follow provincial notice requirements and increase limits.",
    whatToDo:
      "If your landlord tries to raise rent mid-lease, inform them in writing that the fixed-term rent cannot be changed. If they insist, file with your provincial tenancy tribunal.",
    results: {
      ON: { verdict: "no", detail: "Rent is locked for the duration of the fixed term." },
      BC: { verdict: "no", detail: "Rent is locked for the duration of the fixed term." },
      AB: { verdict: "no", detail: "Rent is locked for the duration of the fixed term." },
      QC: { verdict: "no", detail: "Rent is locked for the duration of the fixed term." },
      MB: { verdict: "no", detail: "Rent is locked for the duration of the fixed term." },
      SK: { verdict: "no", detail: "Rent is locked for the duration of the fixed term." },
      NS: { verdict: "no", detail: "Rent is locked for the duration of the fixed term." },
      NB: { verdict: "no", detail: "Rent is locked for the duration of the fixed term." },
      PE: { verdict: "no", detail: "Rent is locked for the duration of the fixed term." },
      NL: { verdict: "no", detail: "Rent is locked for the duration of the fixed term." },
    },
  },
  {
    id: 7,
    title: "Refuse to return my calls or fix urgent repairs",
    explanation:
      "Landlords must address urgent repairs (no heat, flooding, broken locks, pest infestation) promptly. Non-urgent repairs must be addressed within a reasonable time. If your landlord ignores repair requests, you can file with the tenancy tribunal.",
    whatToDo:
      "Document all repair requests in writing (email or text). If the landlord fails to respond to urgent repairs, you may be entitled to arrange repairs yourself and deduct costs (check your province's rules). File with the tenancy tribunal for persistent non-compliance.",
    results: {
      ON: { verdict: "no", detail: "Landlords have a legal duty to maintain the unit in a good state of repair at all times." },
      BC: { verdict: "no", detail: "Landlords must maintain the unit and comply with health and safety standards." },
      AB: { verdict: "no", detail: "Landlords must ensure the unit is safe and habitable." },
      QC: { verdict: "no", detail: "Landlord must ensure the dwelling is in good condition throughout the tenancy." },
      MB: { verdict: "no", detail: "Landlord must maintain the unit in a good state of repair." },
      SK: { verdict: "no", detail: "Landlord must maintain the unit in a habitable condition." },
      NS: { verdict: "no", detail: "Landlord must maintain the unit in a good state of repair." },
      NB: { verdict: "no", detail: "Landlord must maintain the unit." },
      PE: { verdict: "no", detail: "Landlord must maintain the unit." },
      NL: { verdict: "no", detail: "Landlord must maintain the unit in a good state of repair." },
    },
  },
  {
    id: 8,
    title: "Give me less than the required notice for eviction",
    explanation:
      "Every province requires specific written notice periods before a tenancy can be ended. An eviction notice with insufficient notice is invalid. You do not have to vacate based on an invalid notice.",
    whatToDo:
      "Check the required notice period for your province and the reason given. If the notice is too short, inform your landlord in writing that the notice is invalid. You are not required to leave until a valid notice has been given.",
    results: {
      ON: { verdict: "no", detail: "Minimum notice periods are set by the RTA and cannot be shortened." },
      BC: { verdict: "no", detail: "Minimum notice periods are set by the RTA and cannot be shortened." },
      AB: { verdict: "no", detail: "Minimum notice periods are set by the RTA and cannot be shortened." },
      QC: { verdict: "no", detail: "Minimum notice periods are set by law and cannot be shortened." },
      MB: { verdict: "no", detail: "Minimum notice periods are set by the RTA and cannot be shortened." },
      SK: { verdict: "no", detail: "Minimum notice periods are set by the RTA and cannot be shortened." },
      NS: { verdict: "no", detail: "Minimum notice periods are set by the RTA and cannot be shortened." },
      NB: { verdict: "no", detail: "Minimum notice periods are set by the RTA and cannot be shortened." },
      PE: { verdict: "no", detail: "Minimum notice periods are set by law and cannot be shortened." },
      NL: { verdict: "no", detail: "Minimum notice periods are set by the RTA and cannot be shortened." },
    },
  },
  {
    id: 9,
    title: "Charge me an application fee",
    explanation:
      "Rental application fees are prohibited in most Canadian provinces. Landlords cannot charge you money to apply for a rental unit.",
    whatToDo:
      "Refuse to pay any application fee. If you already paid one, request a refund in writing. You may also report the landlord to your provincial tenancy authority.",
    results: {
      ON: { verdict: "no", detail: "Application fees are illegal in Ontario." },
      BC: { verdict: "no", detail: "Application fees are illegal in BC." },
      AB: { verdict: "no", detail: "Application fees are generally not permitted in Alberta." },
      QC: { verdict: "no", detail: "Application fees are not permitted in Quebec." },
      MB: { verdict: "no", detail: "Application fees are generally not permitted in Manitoba." },
      SK: { verdict: "no", detail: "Application fees are generally not permitted in Saskatchewan." },
      NS: { verdict: "no", detail: "Application fees are generally not permitted in Nova Scotia." },
      NB: { verdict: "no", detail: "Application fees are generally not permitted in New Brunswick." },
      PE: { verdict: "no", detail: "Application fees are generally not permitted in PEI." },
      NL: { verdict: "no", detail: "Application fees are generally not permitted in Newfoundland & Labrador." },
    },
  },
  {
    id: 10,
    title: "Keep my last month's rent deposit as a damage deposit",
    explanation:
      "In Ontario, the last month's rent deposit is specifically for the last month — it cannot be kept for repairs. For damage claims, the landlord must sue separately.",
    whatToDo:
      "If your landlord applies the LMR deposit toward damages (in Ontario), dispute this in writing. The LMR deposit must be applied to your last month's rent. File with the LTB if the landlord refuses.",
    results: {
      ON: { verdict: "no", detail: "LMR deposits in Ontario can only be applied to the last month's rent, not damages." },
      BC: { verdict: "depends", detail: "Depends on the type of deposit collected. Security deposits are for damages; LMR deposits for last rent." },
      AB: { verdict: "depends", detail: "Depends on the deposit terms specified in the lease." },
      QC: { verdict: "no", detail: "No deposits of any kind allowed in Quebec." },
      MB: { verdict: "depends", detail: "Depends on deposit type and lease terms." },
      SK: { verdict: "depends", detail: "Depends on deposit type and lease terms." },
      NS: { verdict: "depends", detail: "Depends on deposit type and lease terms." },
      NB: { verdict: "depends", detail: "Depends on deposit type and lease terms." },
      PE: { verdict: "depends", detail: "Depends on deposit type and lease terms." },
      NL: { verdict: "depends", detail: "Depends on deposit type and lease terms." },
    },
  },
  {
    id: 11,
    title: "End my tenancy without a valid reason",
    explanation:
      "Landlords generally cannot simply decide to end a tenancy without a valid legal reason. The eviction process requires proper forms, notice, and often a tribunal order.",
    whatToDo:
      "If you receive an eviction notice, check whether the stated reason is a valid ground under your provincial law. If not, dispute the notice. In Ontario, you can file an T2 application. Always get advice from a tenant advocate or legal aid.",
    results: {
      ON: { verdict: "no", detail: "Ontario requires a valid statutory reason (N12 personal use, N13 demolition, etc.) and an LTB order." },
      BC: { verdict: "depends", detail: "BC allows no-fault evictions for personal use or renovations with extended notice." },
      AB: { verdict: "depends", detail: "Varies — landlords must have valid grounds but rules differ by situation." },
      QC: { verdict: "no", detail: "Quebec has strong anti-eviction protections — repossession requires specific grounds." },
      MB: { verdict: "depends", detail: "Varies by reason for ending tenancy." },
      SK: { verdict: "depends", detail: "Varies by reason for ending tenancy." },
      NS: { verdict: "depends", detail: "Varies by reason for ending tenancy." },
      NB: { verdict: "depends", detail: "Varies by reason for ending tenancy." },
      PE: { verdict: "depends", detail: "Varies by reason for ending tenancy." },
      NL: { verdict: "depends", detail: "Varies by reason for ending tenancy." },
    },
  },
  {
    id: 12,
    title: "Charge me more than the legal deposit cap",
    explanation:
      "Deposit caps are set by provincial law. Any amount collected above the cap must be returned. Demanding an illegal deposit is grounds for a complaint.",
    whatToDo:
      "Know your province's deposit cap. If you paid more than the legal cap, request a refund of the excess in writing. If the landlord refuses, file with your provincial tenancy tribunal.",
    results: {
      ON: { verdict: "no", detail: "LMR deposit = 1 month only. Any additional deposit is illegal." },
      BC: { verdict: "no", detail: "Security deposit capped at 0.5x monthly rent." },
      AB: { verdict: "no", detail: "Security deposit capped at 1x monthly rent." },
      QC: { verdict: "no", detail: "No deposits allowed at all." },
      MB: { verdict: "no", detail: "Security deposit capped at 0.5x monthly rent." },
      SK: { verdict: "no", detail: "Security deposit capped at 1x monthly rent." },
      NS: { verdict: "no", detail: "Security deposit capped at 0.5x monthly rent." },
      NB: { verdict: "no", detail: "Security deposit capped at 1x monthly rent." },
      PE: { verdict: "no", detail: "Security deposit capped at 2x monthly rent." },
      NL: { verdict: "no", detail: "Security deposit capped at 75% of monthly rent." },
    },
  },
];

const PROVINCE_NAMES: Record<string, string> = {
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

const VERDICT_CONFIG: Record<Verdict, { icon: React.ReactNode; bg: string; border: string; badge: string; label: string; textColor: string }> = {
  no: {
    icon: <XCircle className="w-8 h-8 text-red-500" />,
    bg: "bg-red-50",
    border: "border-red-200",
    badge: "bg-red-100 text-red-700",
    label: "NO",
    textColor: "text-red-700",
  },
  yes: {
    icon: <CheckCircle className="w-8 h-8 text-green-500" />,
    bg: "bg-green-50",
    border: "border-green-200",
    badge: "bg-green-100 text-green-700",
    label: "YES",
    textColor: "text-green-700",
  },
  depends: {
    icon: <AlertCircle className="w-8 h-8 text-amber-500" />,
    bg: "bg-amber-50",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    label: "DEPENDS",
    textColor: "text-amber-700",
  },
};

export default function LandlordQuizClient() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [province, setProvince] = useState("");

  const result =
    selectedScenario && province ? selectedScenario.results[province] : null;

  const reset = () => {
    setSelectedScenario(null);
    setProvince("");
  };

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1 py-12 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-xl mb-4">
              <HelpCircle className="w-6 h-6 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Is My Landlord Allowed To Do This?
            </h1>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Select a scenario, choose your province, and get a clear Yes / No / Depends answer.
            </p>
          </div>

          {!selectedScenario ? (
            /* Step 1: Scenario grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SCENARIOS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedScenario(s)}
                  className="text-left bg-white border border-slate-100 rounded-2xl shadow-sm p-5 hover:border-indigo-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold flex-shrink-0 mt-0.5 group-hover:bg-indigo-100">
                      {s.id}
                    </span>
                    <span className="text-sm font-medium text-slate-800 group-hover:text-indigo-700 leading-snug">
                      {s.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            /* Steps 2 & 3: Province + result */
            <div>
              <button
                onClick={reset}
                className="flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-800 mb-6 font-medium"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to scenarios
              </button>

              {/* Scenario title */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-4">
                <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide mb-1">Scenario</p>
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Can my landlord: <span className="text-indigo-700">{selectedScenario.title.toLowerCase()}?</span>
                </h2>

                {/* Province selector */}
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Select your province
                </label>
                <select
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  <option value="">Choose province…</option>
                  {Object.entries(PROVINCE_NAMES).map(([code, name]) => (
                    <option key={code} value={code}>{name}</option>
                  ))}
                </select>
              </div>

              {/* Result */}
              {result && (() => {
                const cfg = VERDICT_CONFIG[result.verdict];
                return (
                  <div className={`rounded-2xl border ${cfg.border} ${cfg.bg} p-6 mb-4`}>
                    <div className="flex items-center gap-3 mb-3">
                      {cfg.icon}
                      <span className={`text-3xl font-extrabold ${cfg.textColor}`}>
                        {cfg.label}
                      </span>
                      <span className="text-sm text-slate-600 ml-1">
                        — in {PROVINCE_NAMES[province]}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 mb-4 leading-relaxed font-medium">
                      {result.detail}
                    </p>
                    <div className="border-t border-slate-200 pt-4">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                        About this rule
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed mb-4">
                        {selectedScenario.explanation}
                      </p>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                        What to do
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {selectedScenario.whatToDo}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Disclaimer + CTA */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mt-6 mb-6">
            <strong>Not legal advice.</strong> Laws vary by province and change over time. Always verify with your provincial tenancy authority or a legal professional.
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8 text-center">
            <p className="text-slate-700 text-sm mb-3">
              Have a lease you want reviewed? LeasePlain analyzes the full text and flags concerning clauses.
            </p>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors text-sm"
            >
              Analyze My Lease Free
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <FAQAccordion
            items={[
              {
                q: "Are these answers the same in every province?",
                a: "No. Landlord-tenant law varies significantly between provinces. Always check the specific rules for your province, especially for questions marked 'Depends'.",
              },
              {
                q: "What if my landlord insists they're allowed to do something?",
                a: "Politely point them to the relevant section of your provincial tenancy legislation. If they continue, file a complaint with your provincial tenancy tribunal — most are free for tenants.",
              },
              {
                q: "Do these rules apply to all types of rentals?",
                a: "Most rules apply to standard residential tenancies. Some exemptions exist for: shared accommodation with the landlord, temporary vacation rentals, and some social housing. Check your province's legislation for specific exemptions.",
              },
              {
                q: "My landlord did something illegal — what happens to them?",
                a: "Landlords who violate tenancy law can face orders from the tribunal to pay compensation, return deposits, or allow the tenant to remain. In some cases, fines are also possible. The tribunal is the main enforcement mechanism.",
              },
              {
                q: "Can I refuse to sign a lease with illegal clauses?",
                a: "Yes. And you can also sign and simply note that you consider the illegal clause void. In most provinces, illegal clauses in a lease are automatically void — you retain your statutory rights regardless of what you signed.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
