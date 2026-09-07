"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Percent, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

// Ontario's rent increase guideline by year. The interest a landlord owes on a
// last month's rent (LMR) deposit is set at the guideline in effect for the
// 12-month period. 2021 was a legislated freeze (0%).
const GUIDELINE: Record<number, number> = {
  2018: 1.8, 2019: 1.8, 2020: 2.2, 2021: 0, 2022: 1.2,
  2023: 2.5, 2024: 2.5, 2025: 2.5, 2026: 2.1, 2027: 1.9,
};
const LATEST_YEAR = 2027;

export default function DepositInterestCalculatorClient() {
  const [deposit, setDeposit] = useState("");
  const [startYear, setStartYear] = useState("");
  const [result, setResult] = useState<null | {
    rows: Array<{ year: number; rate: number; interest: number; balance: number }>;
    totalInterest: number;
    finalBalance: number;
  }>(null);

  const calculate = () => {
    const base = parseFloat(deposit.replace(/[^0-9.]/g, "")) || 0;
    const start = parseInt(startYear, 10);
    if (!base || !start || start > LATEST_YEAR) {
      setResult(null);
      return;
    }
    const rows: Array<{ year: number; rate: number; interest: number; balance: number }> = [];
    let balance = base;
    // Interest accrues on each anniversary, from the start year up to the latest
    // guideline year we know. The deposit paid in `start` first earns interest on
    // the `start+1` anniversary.
    for (let year = start + 1; year <= LATEST_YEAR; year++) {
      const rate = GUIDELINE[year] ?? GUIDELINE[LATEST_YEAR];
      const interest = balance * (rate / 100);
      balance += interest;
      rows.push({ year, rate, interest, balance });
    }
    const totalInterest = balance - base;
    setResult({ rows, totalInterest, finalBalance: balance });
  };

  const years = [];
  for (let y = LATEST_YEAR; y >= 2015; y--) years.push(y);

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1 py-12 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-xl mb-4">
              <Percent className="w-6 h-6 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Last Month&apos;s Rent Deposit Interest Calculator</h1>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              In Ontario, your landlord owes you interest on your last month&apos;s rent (LMR) deposit
              every year, at the rent increase guideline rate. See how much has built up.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">LMR Deposit Paid</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                    <input type="number" value={deposit}
                      onChange={(e) => { setDeposit(e.target.value); setResult(null); }}
                      placeholder="2,000"
                      className="w-full border border-slate-200 rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Year You Paid It</label>
                  <select value={startYear}
                    onChange={(e) => { setStartYear(e.target.value); setResult(null); }}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
                    <option value="">Select year…</option>
                    {years.map((y) => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>

              <button onClick={calculate} disabled={!deposit || !startYear}
                className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Calculate Interest Owed
              </button>
            </div>

            {result && (
              <div className="mt-6 space-y-3">
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-indigo-900 text-lg">
                        Interest owed to you: ${result.totalInterest.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                      <p className="text-sm text-indigo-700">
                        Your deposit is now effectively worth ${result.finalBalance.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                    </div>
                  </div>
                </div>

                {result.rows.length > 0 && (
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left border-collapse bg-white text-sm">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <th className="px-4 py-2 font-semibold text-slate-700">Year</th>
                          <th className="px-4 py-2 font-semibold text-slate-700">Rate</th>
                          <th className="px-4 py-2 font-semibold text-slate-700">Interest</th>
                          <th className="px-4 py-2 font-semibold text-slate-700">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.rows.map((r) => (
                          <tr key={r.year} className="border-b border-slate-100 last:border-0">
                            <td className="px-4 py-2 font-medium text-slate-900">{r.year}</td>
                            <td className="px-4 py-2 text-slate-600">{r.rate}%</td>
                            <td className="px-4 py-2 text-slate-600">${r.interest.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td className="px-4 py-2 text-slate-900">${r.balance.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-2 text-sm text-blue-800">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  Landlords commonly apply this interest by topping up your LMR deposit to one month&apos;s
                  current rent, or paying you the difference. If you&apos;ve never received it, you can ask
                  for it — and claim it at the LTB if refused.
                </div>
              </div>
            )}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-8">
            <strong>Estimate, not legal advice.</strong> This calculator uses Ontario&apos;s published rent
            increase guidelines and compounds annually as a simplification. Your exact entitlement depends
            on when your deposit was paid and how your landlord has handled it over the years.
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8 text-center">
            <p className="text-slate-700 text-sm mb-3">Never received your deposit interest? Send a clear, dated request.</p>
            <Link href="/letters/deposit-interest-letter" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors text-sm">
              Deposit Interest Request Letter
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <FAQAccordion items={[
            { q: "Does my landlord have to pay interest on my deposit in Ontario?", a: "Yes. In Ontario the last month's rent (LMR) deposit must earn interest each year at the rent increase guideline rate. The landlord owes you this interest annually, whether they pay it out or apply it to top up the deposit." },
            { q: "How is the interest rate set?", a: "The interest rate equals Ontario's rent increase guideline for the same 12-month period. For example, the guideline was 2.5% in 2023–2025, 2.1% in 2026, and 1.9% in 2027. In 2021 it was 0% because of the legislated rent freeze." },
            { q: "What if I've never been paid the interest?", a: "You can ask your landlord in writing to pay the accumulated interest (or apply it to your deposit). If they refuse, you can file a T1 application with the Landlord and Tenant Board to recover money the landlord owes you, including unpaid deposit interest." },
            { q: "Can the landlord use the interest to increase my deposit?", a: "Yes. A landlord can require your LMR deposit to always equal one month's current rent. In practice they often apply the annual interest toward that top-up instead of paying it to you — which is allowed, and means you're not separately owed a cheque." },
          ]} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
