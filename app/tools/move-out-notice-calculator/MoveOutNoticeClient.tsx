"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarCheck, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

// Tenant notice to end a MONTH-TO-MONTH (periodic) tenancy, by province.
// Most provinces require the notice to land before the start of the final
// rental period and end on the last day of a period.
const PROVINCES: Record<string, { name: string; months: number; endOfPeriod: boolean; note: string }> = {
  ON: { name: "Ontario", months: 2, endOfPeriod: true, note: "60 days' written notice on Form N9, ending on the last day of a rental period." },
  BC: { name: "British Columbia", months: 1, endOfPeriod: true, note: "One full month's written notice, received before the day rent is due." },
  AB: { name: "Alberta", months: 1, endOfPeriod: true, note: "One full tenancy month's notice, received before the first day of that month." },
  QC: { name: "Quebec", months: 0, endOfPeriod: false, note: "Quebec leases are usually fixed-term and auto-renew — non-renewal notice is 3–6 months before the lease ends, not a monthly notice. Use this only for a month-to-month tenancy (1–2 months)." },
  MB: { name: "Manitoba", months: 1, endOfPeriod: true, note: "One full month's written notice, ending on the last day of a rental period." },
  SK: { name: "Saskatchewan", months: 1, endOfPeriod: true, note: "One full month's written notice for a monthly tenancy." },
  NS: { name: "Nova Scotia", months: 1, endOfPeriod: true, note: "One month's written notice for a month-to-month tenancy (Form C)." },
  NB: { name: "New Brunswick", months: 1, endOfPeriod: true, note: "One month's written notice for a monthly tenancy." },
  PE: { name: "Prince Edward Island", months: 1, endOfPeriod: true, note: "One month's written notice for a month-to-month tenancy." },
  NL: { name: "Newfoundland & Labrador", months: 1, endOfPeriod: true, note: "One month's written notice for a month-to-month tenancy." },
};

function fmt(d: Date) { return d.toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" }); }

export default function MoveOutNoticeClient() {
  const [moveOut, setMoveOut] = useState("");
  const [province, setProvince] = useState("");
  const [result, setResult] = useState<null | { giveBy: string; note: string; months: number }>(null);

  const calculate = () => {
    const p = PROVINCES[province];
    if (!moveOut || !p) { setResult(null); return; }
    const target = new Date(moveOut + "T00:00:00");
    if (isNaN(target.getTime())) { setResult(null); return; }
    const months = p.months || 1;
    // Latest date to give notice = target minus the notice period.
    const giveBy = new Date(target);
    giveBy.setMonth(giveBy.getMonth() - months);
    setResult({ giveBy: fmt(giveBy), note: p.note, months });
  };

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1 py-12 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-xl mb-4">
              <CalendarCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Move-Out Notice Date Calculator</h1>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Planning to move out of a month-to-month rental? Enter your target move-out date and province
              to find the last day you can give proper written notice.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6">
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Target move-out date</label>
                <input type="date" value={moveOut}
                  onChange={(e) => { setMoveOut(e.target.value); setResult(null); }}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Province</label>
                <select value={province}
                  onChange={(e) => { setProvince(e.target.value); setResult(null); }}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300">
                  <option value="">Select province…</option>
                  {Object.entries(PROVINCES).map(([code, p]) => <option key={code} value={code}>{p.name}</option>)}
                </select>
              </div>
              <button onClick={calculate} disabled={!moveOut || !province}
                className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-xl hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Calculate
              </button>
            </div>

            {result && (
              <div className="mt-6 space-y-3">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-emerald-900">Give written notice by: {result.giveBy}</p>
                      <p className="text-sm text-emerald-700 mt-1">
                        That&apos;s {result.months} {result.months === 1 ? "month" : "months"} before your
                        target move-out date. {result.note}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-2 text-sm text-blue-800">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  Most provinces require the notice to end on the <strong>last day of a rental period</strong>,
                  and to be received before that period begins. If your date falls mid-month, you may need to
                  target the end of the month instead. Keep proof of when you gave notice.
                </div>
              </div>
            )}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-8">
            <strong>For month-to-month tenancies.</strong> A fixed-term lease usually can&apos;t be ended
            early by notice — you&apos;d assign or sublet instead. Quebec leases auto-renew with a 3–6 month
            non-renewal notice. This tool is an estimate, not legal advice.
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8 text-center">
            <p className="text-slate-700 text-sm mb-3">Ready to give notice? Generate a clear letter.</p>
            <Link href="/letters/notice-to-end-tenancy-letter" className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors text-sm">
              Notice to End Tenancy Letter
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <FAQAccordion items={[
            { q: "How much notice do I have to give to move out?", a: "For a month-to-month tenancy: 60 days in Ontario, and one full month in most other provinces (BC, Alberta, Manitoba, Saskatchewan, Nova Scotia, New Brunswick, PEI, and Newfoundland). The notice must usually end on the last day of a rental period." },
            { q: "When is the last day I can give notice?", a: "Count back the notice period from your target move-out date — this tool does that for you. In most provinces the notice must also be received before the final rental period starts, so aim a little earlier to be safe." },
            { q: "Can I end a fixed-term lease early with notice?", a: "Usually no. A fixed-term lease binds you to its end date. To leave early you generally assign or sublet, or use specific legal grounds (like fleeing violence). This calculator is for month-to-month tenancies." },
            { q: "Does notice have to be in writing?", a: "Yes. Give written notice (many provinces have a specific form, like Ontario's N9), date it, and keep a copy and proof of delivery. A verbal notice is easy for a landlord to dispute." },
          ]} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
