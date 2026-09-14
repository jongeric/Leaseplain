"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarClock, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

// Rent-increase notice periods by province. ON is 90 days; most others are a
// number of months of written notice. Provinces without a fixed cap still
// require notice and the once-per-12-months rule.
const PROVINCES: Record<string, { name: string; noticeDays?: number; noticeMonths?: number; note: string }> = {
  ON: { name: "Ontario", noticeDays: 90, note: "90 days' written notice on Form N1; increase capped at the guideline unless the unit is post-Nov 2018 exempt." },
  BC: { name: "British Columbia", noticeMonths: 3, note: "3 full months' written notice on the approved RTB form; capped at the annual limit." },
  AB: { name: "Alberta", noticeMonths: 3, note: "3 tenancy months' notice for a monthly tenancy. No rent cap, but only once every 12 months." },
  QC: { name: "Quebec", noticeMonths: 3, note: "Notice 3–6 months before the lease ends; you can refuse and have the TAL set a fair rent." },
  MB: { name: "Manitoba", noticeMonths: 3, note: "3 months' written notice; capped at the annual guideline (some units exempt)." },
  SK: { name: "Saskatchewan", noticeMonths: 6, note: "Longer notice applies for periodic tenancies (commonly ~1 year for some cases); no rent cap. Confirm with the ORT." },
  NS: { name: "Nova Scotia", noticeMonths: 4, note: "4 months' written notice; increase capped at 5% through end of 2027." },
  NB: { name: "New Brunswick", noticeMonths: 3, note: "Written notice required; no fixed cap, but large increases can be reviewed." },
  PE: { name: "Prince Edward Island", noticeMonths: 3, note: "3 months' notice; increase capped at the IRAC allowable amount." },
  NL: { name: "Newfoundland & Labrador", noticeMonths: 3, note: "Written notice required; no rent cap. Confirm the exact period for your tenancy." },
};

function addMonths(d: Date, m: number) { const x = new Date(d); x.setMonth(x.getMonth() + m); return x; }
function addDays(d: Date, days: number) { const x = new Date(d); x.setDate(x.getDate() + days); return x; }
function fmt(d: Date) { return d.toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" }); }

export default function RentIncreaseDateClient() {
  const [lastDate, setLastDate] = useState("");
  const [province, setProvince] = useState("");
  const [result, setResult] = useState<null | { earliest: string; noticeBy: string; note: string }>(null);

  const calculate = () => {
    const p = PROVINCES[province];
    if (!lastDate || !p) { setResult(null); return; }
    const start = new Date(lastDate + "T00:00:00");
    if (isNaN(start.getTime())) { setResult(null); return; }
    const earliest = addMonths(start, 12);
    const noticeBy = p.noticeDays ? addDays(earliest, -p.noticeDays) : addMonths(earliest, -(p.noticeMonths ?? 3));
    setResult({ earliest: fmt(earliest), noticeBy: fmt(noticeBy), note: p.note });
  };

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1 py-12 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-xl mb-4">
              <CalendarClock className="w-6 h-6 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">When Can My Landlord Raise My Rent?</h1>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Enter when you moved in (or your last increase) and your province to see the earliest date your
              rent can legally go up — and by when your landlord must give you notice.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6">
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Move-in date, or date of your last rent increase</label>
                <input type="date" value={lastDate}
                  onChange={(e) => { setLastDate(e.target.value); setResult(null); }}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Province</label>
                <select value={province}
                  onChange={(e) => { setProvince(e.target.value); setResult(null); }}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
                  <option value="">Select province…</option>
                  {Object.entries(PROVINCES).map(([code, p]) => <option key={code} value={code}>{p.name}</option>)}
                </select>
              </div>
              <button onClick={calculate} disabled={!lastDate || !province}
                className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Calculate
              </button>
            </div>

            {result && (
              <div className="mt-6 space-y-3">
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-indigo-900">Earliest your rent can increase: {result.earliest}</p>
                      <p className="text-sm text-indigo-700 mt-1">
                        Rent can only go up once every 12 months, so the earliest legal increase is 12 months
                        after your move-in or last increase.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
                  <strong>Notice deadline:</strong> to make that date, your landlord must give you proper
                  written notice on or before <strong>{result.noticeBy}</strong>. {result.note}
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-2 text-sm text-amber-800">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  An increase that comes early, more than once in 12 months, or without proper notice generally
                  isn&apos;t valid. Keep paying your lawful rent and object in writing.
                </div>
              </div>
            )}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-8">
            <strong>Estimate, not legal advice.</strong> This tool applies the general once-a-year and
            notice rules. Exact notice periods and exemptions vary — confirm with your provincial tenancy
            authority for your situation.
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8 text-center">
            <p className="text-slate-700 text-sm mb-3">Got an increase notice? Check whether the amount is legal.</p>
            <Link href="/tools/rent-increase-calculator" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors text-sm">
              Rent Increase Calculator
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <FAQAccordion items={[
            { q: "How often can my landlord raise my rent?", a: "In every province, rent can generally be increased only once every 12 months, and not during the first 12 months of your tenancy. This tool calculates that earliest date from your move-in or last increase." },
            { q: "How much notice does my landlord have to give?", a: "It varies by province: 90 days in Ontario, three months in BC, Alberta, Manitoba, PEI, and (as a minimum) Quebec, and four months in Nova Scotia. The notice must be in writing on the correct form." },
            { q: "What if my landlord raises rent too early or without notice?", a: "An increase that ignores the once-a-year rule or the notice period generally isn't valid. Keep paying your existing lawful rent, object in writing, and raise it with your provincial tenancy authority if needed." },
            { q: "Does this apply to every unit?", a: "The once-a-year and notice rules apply broadly, but rent-increase caps have exemptions (for example, newer buildings in Ontario and Manitoba, and no cap at all in Alberta, Saskatchewan, New Brunswick, and Newfoundland). Check the rules for your province." },
          ]} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
