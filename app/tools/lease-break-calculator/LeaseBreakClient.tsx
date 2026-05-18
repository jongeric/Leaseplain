"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileX, CheckCircle, Info } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

interface ProvinceRule {
  name: string;
  mitigation: string;
  mitigationRequired: boolean;
  realisticExposure: string;
  realisticMonths: number | null; // null = up to remaining
  actionSteps: string[];
}

const PROVINCE_RULES: Record<string, ProvinceRule> = {
  ON: {
    name: "Ontario",
    mitigation: "Legally required. The landlord must actively try to re-rent the unit.",
    mitigationRequired: true,
    realisticExposure: "Up to 60 days rent while the landlord finds a new tenant",
    realisticMonths: 2,
    actionSteps: [
      "Complete Form N9 (Tenant's Notice to Terminate the Tenancy) — available from the LTB website.",
      "Serve Form N9 on your landlord at least 60 days before the end of a rental period.",
      "Continue paying rent until the termination date on the form.",
      "If the landlord re-rents before your termination date, confirm in writing that your obligation ends.",
      "Document all communication with your landlord in writing.",
    ],
  },
  BC: {
    name: "British Columbia",
    mitigation: "Legally required. Landlord must make reasonable efforts to re-rent.",
    mitigationRequired: true,
    realisticExposure: "1–2 months rent typically",
    realisticMonths: 2,
    actionSteps: [
      "Give your landlord at least 1 full rental month's written notice.",
      "Use the RTB's standard notice form (or a clear written letter referencing the TRAC guidelines).",
      "Continue paying rent until the notice period expires.",
      "Request confirmation that the landlord is actively advertising the unit.",
      "Keep copies of all written notices.",
    ],
  },
  AB: {
    name: "Alberta",
    mitigation: "Landlord must make reasonable efforts to re-rent.",
    mitigationRequired: true,
    realisticExposure: "Up to remaining months rent — reduced if landlord re-rents quickly",
    realisticMonths: null,
    actionSteps: [
      "Notify your landlord in writing as soon as possible.",
      "On a fixed-term lease, you are liable until a new tenant is found or the lease ends.",
      "Ask the landlord to actively list the unit — document their mitigation efforts.",
      "Negotiate a mutual agreement to end the tenancy if possible.",
      "If the landlord fails to mitigate, their claim for damages may be reduced.",
    ],
  },
  QC: {
    name: "Quebec",
    mitigation: "Partial — direct break penalty is possible but the TAL can limit it.",
    mitigationRequired: false,
    realisticExposure: "Negotiable — lease assignment is the preferred route",
    realisticMonths: null,
    actionSteps: [
      "Consider lease assignment (cession de bail) as the primary option — the landlord cannot unreasonably refuse.",
      "Contact the Tribunal administratif du logement (TAL) for guidance on your specific situation.",
      "Negotiate directly with your landlord for a mutual release.",
      "If a penalty is agreed, ensure it reflects actual losses — excessive penalties are often void.",
      "Document everything in writing.",
    ],
  },
  MB: {
    name: "Manitoba",
    mitigation: "Legally required.",
    mitigationRequired: true,
    realisticExposure: "Up to remaining months rent — reduced as landlord re-rents",
    realisticMonths: null,
    actionSteps: [
      "Give at least 1 month written notice to your landlord.",
      "Confirm the landlord is actively listing the unit for rent.",
      "Continue paying rent until a new tenant is found or the lease ends.",
      "Contact the Residential Tenancies Branch for guidance.",
    ],
  },
  SK: {
    name: "Saskatchewan",
    mitigation: "Landlord must mitigate — governed by lease terms.",
    mitigationRequired: true,
    realisticExposure: "Up to remaining months rent — depends on lease terms",
    realisticMonths: null,
    actionSteps: [
      "Review your lease for any early termination clause.",
      "Give written notice to your landlord as soon as possible.",
      "Confirm the landlord is advertising the unit.",
      "Contact the Office of Residential Tenancies for province-specific advice.",
    ],
  },
  NS: {
    name: "Nova Scotia",
    mitigation: "Legally required.",
    mitigationRequired: true,
    realisticExposure: "1–3 months rent typically",
    realisticMonths: 3,
    actionSteps: [
      "Give your landlord at least 1 month written notice.",
      "Request that the landlord advertise the unit immediately.",
      "Continue paying rent until the notice period expires or a new tenant is found.",
      "Contact Residential Tenancies in Nova Scotia for guidance.",
    ],
  },
  NB: {
    name: "New Brunswick",
    mitigation: "Legally required.",
    mitigationRequired: true,
    realisticExposure: "Up to remaining months rent — reduced by mitigation",
    realisticMonths: null,
    actionSteps: [
      "Notify your landlord in writing as soon as possible.",
      "You may owe damages — confirm the landlord is actively trying to re-rent.",
      "Contact the Residential Tenancies Tribunal of New Brunswick for guidance.",
      "Keep records of all written communication.",
    ],
  },
  PE: {
    name: "Prince Edward Island",
    mitigation: "Partial — IRAC approval is required to end a fixed-term lease.",
    mitigationRequired: false,
    realisticExposure: "Varies — subject to IRAC ruling",
    realisticMonths: null,
    actionSteps: [
      "Apply to the Island Regulatory and Appeals Commission (IRAC) to end the lease early.",
      "Do not simply vacate — you remain liable until IRAC approves the termination.",
      "Contact IRAC directly for the correct application form and process.",
      "Consider negotiating a mutual release with your landlord.",
    ],
  },
  NL: {
    name: "Newfoundland & Labrador",
    mitigation: "Landlord must mitigate — governed by lease terms.",
    mitigationRequired: true,
    realisticExposure: "Up to remaining months rent — depends on lease terms",
    realisticMonths: null,
    actionSteps: [
      "Review your lease for any early termination or break clause.",
      "Give written notice to your landlord as soon as possible.",
      "Confirm the landlord is making reasonable efforts to re-rent.",
      "Contact the Residential Tenancies office in NL for guidance.",
    ],
  },
};

const faqs = [
  {
    q: "What is the landlord's duty to mitigate?",
    a: "In most Canadian provinces, landlords are legally required to make reasonable efforts to find a new tenant when a tenant breaks their lease. They cannot simply let the unit sit empty and bill the departing tenant for all remaining rent. If they fail to mitigate, their damages claim is reduced accordingly.",
  },
  {
    q: "Can a lease have a break fee or penalty clause?",
    a: "Some leases include early termination fees. In most provinces, if the fee is a genuine pre-estimate of the landlord's loss, it may be enforceable — but it cannot exceed the landlord's actual damages, which are reduced by their duty to mitigate. Excessive penalty clauses are often void.",
  },
  {
    q: "What is the proper way to break a lease in Ontario?",
    a: "In Ontario, submit Form N9 (Tenant's Notice to Terminate the Tenancy) to your landlord at least 60 days before the end of a rental period. Continue paying rent until the termination date. The landlord must try to re-rent — if they do, your obligation ends when the new tenant takes over.",
  },
  {
    q: "Can I sublet instead of breaking the lease?",
    a: "Yes, subletting is often a better option than breaking the lease. In Ontario, landlords cannot unreasonably refuse a sublet request. In BC, landlords must consent but cannot unreasonably withhold it. Subletting keeps you on the lease but transfers day-to-day occupation.",
  },
  {
    q: "What happens if I just stop paying rent and leave?",
    a: "This is risky. The landlord can pursue you for unpaid rent and damages, and it will likely harm your rental history. It's better to follow the formal process, give proper notice, and document everything in writing.",
  },
];

export default function LeaseBreakClient() {
  const [province, setProvince] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [monthsRemaining, setMonthsRemaining] = useState("");
  const [result, setResult] = useState<{
    maxExposure: number;
    realisticExposure: string;
    rule: ProvinceRule;
  } | null>(null);

  const calculate = () => {
    const rent = parseFloat(monthlyRent.replace(/[^0-9.]/g, ""));
    const months = parseInt(monthsRemaining.replace(/[^0-9]/g, ""), 10);
    const rule = PROVINCE_RULES[province];
    if (!rent || !months || !rule) return;

    const maxExposure = rent * months;
    setResult({ maxExposure, realisticExposure: rule.realisticExposure, rule });
  };

  const reset = () => {
    setResult(null);
  };

  const isValid = province && monthlyRent && monthsRemaining;

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1 py-12 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-50 rounded-xl mb-4">
              <FileX className="w-6 h-6 text-amber-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Lease Break Cost Estimator</h1>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Estimate your cost exposure for breaking a lease early in any Canadian province.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6">
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Province</label>
                <select
                  value={province}
                  onChange={(e) => { setProvince(e.target.value); reset(); }}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
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

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Monthly Rent</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                    <input
                      type="number"
                      value={monthlyRent}
                      onChange={(e) => { setMonthlyRent(e.target.value); reset(); }}
                      placeholder="1,800"
                      className="w-full border border-slate-200 rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Months Remaining</label>
                  <input
                    type="number"
                    value={monthsRemaining}
                    onChange={(e) => { setMonthsRemaining(e.target.value); reset(); }}
                    placeholder="8"
                    min="1"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                </div>
              </div>

              <button
                onClick={calculate}
                disabled={!isValid}
                className="w-full bg-amber-600 text-white font-semibold py-3 rounded-xl hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Estimate Cost
              </button>
            </div>

            {result && (
              <div className="mt-6 space-y-4">
                {/* Cost exposure cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-xs font-medium text-red-700 uppercase tracking-wide mb-1">
                      Maximum Theoretical Exposure
                    </p>
                    <p className="text-2xl font-bold text-red-800">
                      ${result.maxExposure.toLocaleString("en-CA", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </p>
                    <p className="text-xs text-red-600 mt-1">All remaining months — worst case</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-xs font-medium text-amber-700 uppercase tracking-wide mb-1">
                      Realistic Exposure
                    </p>
                    <p className="text-sm font-bold text-amber-800 mt-1 leading-snug">
                      {result.rule.realisticExposure}
                    </p>
                    <p className="text-xs text-amber-600 mt-1">With landlord mitigation</p>
                  </div>
                </div>

                {/* Mitigation info */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    {result.rule.mitigationRequired ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Info className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-1">
                        Landlord's duty to mitigate in {result.rule.name}
                      </p>
                      <p className="text-sm text-slate-600">{result.rule.mitigation}</p>
                    </div>
                  </div>
                </div>

                {/* Action steps */}
                <div className="bg-white border border-slate-200 rounded-xl p-4">
                  <p className="text-sm font-semibold text-slate-900 mb-3">
                    Action steps for {result.rule.name}
                  </p>
                  <ol className="space-y-2">
                    {result.rule.actionSteps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Disclaimer */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800">
                  <strong>Note:</strong> Actual costs depend heavily on how quickly the landlord finds a new tenant. If the unit is re-rented quickly, your exposure may be significantly less than the estimates above.
                </div>
              </div>
            )}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-8">
            <strong>Not legal advice.</strong> Rules vary by province and individual lease terms. Always verify with your provincial tenancy authority or a legal professional.
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8 text-center">
            <p className="text-slate-700 text-sm mb-3">Want to review the early termination clause in your lease? LeasePlain analyzes the full text and flags concerning clauses.</p>
            <Link href="/upload" className="inline-flex items-center gap-2 bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-amber-700 transition-colors text-sm">
              Analyze My Lease Free
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
