"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingUp, AlertTriangle, CheckCircle, Info } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

const PROVINCE_LIMITS: Record<string, { year: number; limit: number | null; note: string }> = {
  ON: { year: 2026, limit: 2.1, note: "Ontario Rent Increase Guideline" },
  BC: { year: 2026, limit: 2.3, note: "BC Allowable Rent Increase" },
  AB: { year: 2025, limit: null, note: "Alberta has no rent increase cap — any amount is legal with 3 months' notice" },
  QC: { year: 2025, limit: null, note: "Quebec uses a complex TAL formula — contact the TAL for your specific allowable amount" },
  MB: { year: 2025, limit: null, note: "Manitoba: increases must be reasonable; guideline varies annually" },
  SK: { year: 2025, limit: null, note: "Saskatchewan has no provincial cap on rent increases" },
  NS: { year: 2025, limit: 5.0, note: "Nova Scotia has a 5% annual rent increase cap, extended through 2027" },
  NB: { year: 2025, limit: 3.0, note: "New Brunswick has a 3% annual rent increase cap (effective Feb 1, 2025), up to 9% with Tribunal approval for renovations" },
  PE: { year: 2026, limit: 2.0, note: "PEI's maximum allowable rent increase for 2026 is 2%, set by the Director of Residential Tenancy" },
  NL: { year: 2025, limit: null, note: "Newfoundland & Labrador has no rent increase cap" },
};

export default function RentIncreaseClient() {
  const [currentRent, setCurrentRent] = useState("");
  const [newRent, setNewRent] = useState("");
  const [province, setProvince] = useState("");
  const [result, setResult] = useState<null | { pct: number; overLimit: boolean | null; limitPct: number | null; note: string }>(null);

  const calculate = () => {
    const current = parseFloat(currentRent.replace(/[^0-9.]/g, ""));
    const next = parseFloat(newRent.replace(/[^0-9.]/g, ""));
    if (!current || !next || current <= 0) return;

    const pct = ((next - current) / current) * 100;
    const prov = PROVINCE_LIMITS[province];

    if (!prov) {
      setResult({ pct, overLimit: null, limitPct: null, note: "Select a province to see if this increase is within legal limits." });
      return;
    }

    if (prov.limit === null) {
      setResult({ pct, overLimit: false, limitPct: null, note: prov.note });
    } else if (prov.limit === 0) {
      setResult({ pct, overLimit: pct > 0, limitPct: 0, note: prov.note });
    } else {
      setResult({ pct, overLimit: pct > prov.limit, limitPct: prov.limit, note: prov.note });
    }
  };

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1 py-12 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-xl mb-4">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Rent Increase Calculator</h1>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Find out if your landlord's proposed rent increase is within legal limits for your province.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6">
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Province</label>
                <select
                  value={province}
                  onChange={(e) => { setProvince(e.target.value); setResult(null); }}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
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
                  <option value="NL">Newfoundland & Labrador</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Current Monthly Rent</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                    <input
                      type="number"
                      value={currentRent}
                      onChange={(e) => { setCurrentRent(e.target.value); setResult(null); }}
                      placeholder="1,800"
                      className="w-full border border-slate-200 rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Proposed New Rent</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                    <input
                      type="number"
                      value={newRent}
                      onChange={(e) => { setNewRent(e.target.value); setResult(null); }}
                      placeholder="1,900"
                      className="w-full border border-slate-200 rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={calculate}
                disabled={!currentRent || !newRent}
                className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Calculate
              </button>
            </div>

            {result && (
              <div className={`mt-6 rounded-xl border p-4 ${
                result.overLimit
                  ? "bg-red-50 border-red-200"
                  : result.overLimit === false && result.limitPct !== null
                  ? "bg-green-50 border-green-200"
                  : "bg-blue-50 border-blue-200"
              }`}>
                <div className="flex items-start gap-3">
                  {result.overLimit
                    ? <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    : result.overLimit === false && result.limitPct !== null
                    ? <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    : <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  }
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-1">
                      Rent increase: <span className="text-indigo-700">{result.pct.toFixed(2)}%</span>
                      {result.limitPct !== null && (
                        <> — Legal limit: <span>{result.limitPct}%</span></>
                      )}
                    </p>
                    {result.overLimit && (
                      <p className="text-sm text-red-800 mb-1 font-medium">
                        ⚠️ This increase exceeds the legal guideline for your province.
                      </p>
                    )}
                    {result.overLimit === false && result.limitPct !== null && (
                      <p className="text-sm text-green-800 mb-1 font-medium">
                        ✓ This increase is within the legal guideline for your province.
                      </p>
                    )}
                    <p className="text-xs text-slate-600">{result.note}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-8">
            <strong>Not legal advice.</strong> Guidelines change annually. Always verify with your provincial tenancy authority or a legal professional.
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8 text-center">
            <p className="text-slate-700 text-sm mb-3">Have a lease you want reviewed? LeasePlain analyzes the full text and flags concerning clauses.</p>
            <Link href="/upload" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors text-sm">
              Analyze My Lease Free
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <FAQAccordion items={[
            { q: "How much notice must a landlord give before raising rent?", a: "In Ontario, landlords must give at least 90 days' written notice before a rent increase. In BC it's 3 months. Alberta requires 3 months. Most provinces require between 60–90 days. The notice must state the exact amount and effective date." },
            { q: "Can my landlord raise rent during a fixed-term lease?", a: "Generally no. During a fixed-term lease, your rent is locked in at the agreed amount. Landlords can only raise rent at renewal, and even then they must follow the provincial guideline and give proper notice." },
            { q: "What should I do if my landlord raises rent above the legal limit?", a: "First, confirm the guideline for your province and year. Then write to your landlord in writing stating the increase exceeds the legal maximum. If they don't correct it, file a complaint with your provincial tenancy authority (e.g. Landlord and Tenant Board in Ontario, RTB in BC)." },
            { q: "Does the rent increase guideline apply to all rentals?", a: "Not always. In Ontario, units built after November 15, 2018 are exempt from rent increase guidelines. In BC, all residential tenancies are covered. Check your province's specific exemptions." },
            { q: "Can a landlord raise rent more than once per year?", a: "No. In most Canadian provinces, landlords can only increase rent once per 12-month period, and must wait at least 12 months since the last increase (or since the tenant moved in)." },
          ]} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
