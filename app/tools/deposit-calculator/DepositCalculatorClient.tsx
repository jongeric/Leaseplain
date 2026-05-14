"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DollarSign, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

export default function DepositCalculatorClient() {
  const [deposit, setDeposit] = useState("");
  const [landlordClaims, setLandlordClaims] = useState("");
  const [moveInDate, setMoveInDate] = useState("");
  const [moveOutDate, setMoveOutDate] = useState("");
  const [province, setProvince] = useState("");
  const [result, setResult] = useState<null | {
    shouldReturn: number;
    months: number;
    returnDeadlineDays: number;
    warning: string | null;
  }>(null);

  const RETURN_DEADLINES: Record<string, number> = {
    ON: 21, BC: 15, AB: 10, QC: 3, MB: 14, SK: 7, NS: 10, NB: 7, PE: 10, NL: 14,
  };

  const calculate = () => {
    const dep = parseFloat(deposit.replace(/[^0-9.]/g, "")) || 0;
    const claims = parseFloat(landlordClaims.replace(/[^0-9.]/g, "")) || 0;
    const shouldReturn = Math.max(0, dep - claims);

    let months = 0;
    if (moveInDate && moveOutDate) {
      const inDate = new Date(moveInDate);
      const outDate = new Date(moveOutDate);
      months = Math.max(0,
        (outDate.getFullYear() - inDate.getFullYear()) * 12 +
        (outDate.getMonth() - inDate.getMonth())
      );
    }

    const returnDeadlineDays = RETURN_DEADLINES[province] ?? 21;
    let warning: string | null = null;

    if (claims > dep) {
      warning = "The landlord's claimed deductions exceed your deposit. They would need to sue you for the remainder — you are not automatically required to pay it.";
    } else if (claims > dep * 0.5 && months > 12) {
      warning = "Large deductions after a long tenancy may include normal wear and tear, which landlords cannot legally charge for. Request an itemized list.";
    }

    setResult({ shouldReturn, months, returnDeadlineDays, warning });
  };

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1 py-12 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-50 rounded-xl mb-4">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Security Deposit Return Calculator</h1>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Calculate how much of your deposit you should get back, and what your landlord's deadline is to return it.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6">
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Province</label>
                <select
                  value={province}
                  onChange={(e) => { setProvince(e.target.value); setResult(null); }}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
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
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Deposit Paid</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                    <input type="number" value={deposit}
                      onChange={(e) => { setDeposit(e.target.value); setResult(null); }}
                      placeholder="2,400"
                      className="w-full border border-slate-200 rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-300" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Landlord&apos;s Claimed Deductions</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                    <input type="number" value={landlordClaims}
                      onChange={(e) => { setLandlordClaims(e.target.value); setResult(null); }}
                      placeholder="0"
                      className="w-full border border-slate-200 rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-300" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Move-In Date</label>
                  <input type="date" value={moveInDate}
                    onChange={(e) => { setMoveInDate(e.target.value); setResult(null); }}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Move-Out Date</label>
                  <input type="date" value={moveOutDate}
                    onChange={(e) => { setMoveOutDate(e.target.value); setResult(null); }}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-300" />
                </div>
              </div>

              <button onClick={calculate} disabled={!deposit}
                className="w-full bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Calculate
              </button>
            </div>

            {result && (
              <div className="mt-6 space-y-3">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-green-900 text-lg">
                        You should receive: ${result.shouldReturn.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                      {result.months > 0 && (
                        <p className="text-sm text-green-700">After {result.months} months of tenancy</p>
                      )}
                    </div>
                  </div>
                </div>

                {province && (
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
                    <strong>Return deadline ({province}):</strong> Your landlord must return the deposit within{" "}
                    <strong>{result.returnDeadlineDays} days</strong> of your move-out date, along with an itemized statement of any deductions.
                  </div>
                )}

                {result.warning && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-2 text-sm text-amber-800">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    {result.warning}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-8">
            <strong>Not legal advice.</strong> Deposit rules vary by province and individual lease terms. Consult a tenant rights organization or lawyer for your specific situation.
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8 text-center">
            <p className="text-slate-700 text-sm mb-3">Concerned about deposit clauses in your lease? LeasePlain flags unclear or unfair deposit terms automatically.</p>
            <Link href="/upload" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors text-sm">
              Analyze My Lease Free
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <FAQAccordion items={[
            { q: "What can a landlord legally deduct from my security deposit?", a: "Landlords can deduct for unpaid rent, damage beyond normal wear and tear, and cleaning if the unit was left significantly dirtier than when you moved in. They cannot deduct for normal wear and tear — things like minor scuffs, small nail holes, or carpet worn from regular use." },
            { q: "What is normal wear and tear?", a: "Normal wear and tear refers to the expected deterioration of a rental unit from ordinary use over time. Examples include faded paint, minor carpet wear, small scuffs on walls, and worn door handles. Landlords cannot deduct for these — only for damage caused by negligence or misuse." },
            { q: "What if my landlord doesn't return my deposit on time?", a: "Most provinces require landlords to return the deposit within 10–21 days (varies by province). If they miss the deadline, you can file a complaint with your provincial tenancy authority. Some provinces require the landlord to pay you back double the deposit as a penalty." },
            { q: "Can I use my security deposit as last month's rent?", a: "No — you cannot unilaterally apply the security deposit to your last month's rent unless your landlord agrees. Doing so may give the landlord grounds to seek additional compensation. In Ontario, last month's rent and security deposit are treated as separate amounts." },
            { q: "How do I dispute unfair deposit deductions?", a: "First, request an itemized statement of deductions in writing. Then compare each item against what you can legally be charged for. If you disagree, file a T1 application (Ontario), RTB dispute (BC), or equivalent with your provincial tenancy authority. Take photos at move-out to document the condition." },
          ]} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
