"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

// Ontario rent increase guideline by year (the maximum most landlords can raise
// rent without an above-guideline increase order from the LTB).
const GUIDELINE: Record<number, number> = {
  2023: 2.5, 2024: 2.5, 2025: 2.5, 2026: 2.1, 2027: 1.9,
};
const YEARS = [2027, 2026, 2025, 2024, 2023];

type Verdict = "within" | "above" | "exempt";

export default function AgiCheckerClient() {
  const [currentRent, setCurrentRent] = useState("");
  const [newRent, setNewRent] = useState("");
  const [year, setYear] = useState("2027");
  const [postNov2018, setPostNov2018] = useState<"" | "yes" | "no">("");
  const [result, setResult] = useState<null | {
    verdict: Verdict;
    increasePct: number;
    guideline: number;
    dollarIncrease: number;
  }>(null);

  const check = () => {
    const cur = parseFloat(currentRent.replace(/[^0-9.]/g, "")) || 0;
    const next = parseFloat(newRent.replace(/[^0-9.]/g, "")) || 0;
    const y = parseInt(year, 10);
    if (!cur || !next || next <= cur || !postNov2018) {
      setResult(null);
      return;
    }
    const increasePct = ((next - cur) / cur) * 100;
    const guideline = GUIDELINE[y] ?? GUIDELINE[2027];
    const dollarIncrease = next - cur;

    let verdict: Verdict;
    if (postNov2018 === "yes") {
      verdict = "exempt";
    } else if (increasePct > guideline + 0.05) {
      verdict = "above";
    } else {
      verdict = "within";
    }
    setResult({ verdict, increasePct, guideline, dollarIncrease });
  };

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1 py-12 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-50 rounded-xl mb-4">
              <Scale className="w-6 h-6 text-amber-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Above-Guideline Rent Increase (AGI) Checker</h1>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Your landlord proposed a rent increase in Ontario. Find out whether it&apos;s within the
              legal guideline, or an above-guideline increase that needs LTB approval.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Current Monthly Rent</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                    <input type="number" value={currentRent}
                      onChange={(e) => { setCurrentRent(e.target.value); setResult(null); }}
                      placeholder="2,000"
                      className="w-full border border-slate-200 rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Proposed New Rent</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                    <input type="number" value={newRent}
                      onChange={(e) => { setNewRent(e.target.value); setResult(null); }}
                      placeholder="2,120"
                      className="w-full border border-slate-200 rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Year Increase Takes Effect</label>
                  <select value={year}
                    onChange={(e) => { setYear(e.target.value); setResult(null); }}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300">
                    {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Unit first occupied after Nov 15, 2018?</label>
                  <select value={postNov2018}
                    onChange={(e) => { setPostNov2018(e.target.value as "" | "yes" | "no"); setResult(null); }}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300">
                    <option value="">Select…</option>
                    <option value="no">No / Not sure</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
              </div>

              <button onClick={check} disabled={!currentRent || !newRent || !postNov2018}
                className="w-full bg-amber-600 text-white font-semibold py-3 rounded-xl hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Check This Increase
              </button>
            </div>

            {result && (
              <div className="mt-6 space-y-3">
                {result.verdict === "within" && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-green-900">Within the guideline — likely legal</p>
                        <p className="text-sm text-green-700 mt-1">
                          This is a {result.increasePct.toFixed(2)}% increase (${result.dollarIncrease.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/month),
                          at or below the {result.guideline}% guideline for {year}. The landlord still needs
                          to give proper written notice (Form N1) at least 90 days ahead, and can only raise
                          rent once every 12 months.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {result.verdict === "above" && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-red-900">Above the guideline — needs LTB approval</p>
                        <p className="text-sm text-red-700 mt-1">
                          This is a {result.increasePct.toFixed(2)}% increase (${result.dollarIncrease.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/month),
                          above the {result.guideline}% guideline for {year}. A landlord can&apos;t simply
                          impose this — they must apply to the Landlord and Tenant Board for an
                          above-guideline increase (AGI) order, and you have the right to dispute it. Do not
                          agree to pay the excess unless and until the LTB approves it.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {result.verdict === "exempt" && (
                  <div className="bg-slate-100 border border-slate-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-slate-900">Guideline doesn&apos;t apply (post-2018 exemption)</p>
                        <p className="text-sm text-slate-600 mt-1">
                          Units first occupied for residential purposes after November 15, 2018 are exempt
                          from the rent increase guideline, so this {result.increasePct.toFixed(2)}% increase
                          may be legal even though it exceeds {result.guideline}%. The 90-day written notice
                          and once-every-12-months rules still apply. Confirm your unit&apos;s status before
                          accepting a large increase.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-8">
            <strong>Not legal advice.</strong> This checker uses Ontario&apos;s published guidelines and general
            rules. Exemptions and AGI applications have detail this tool can&apos;t capture — confirm with a
            tenant clinic or the LTB for your situation.
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8 text-center">
            <p className="text-slate-700 text-sm mb-3">Think your increase is too high? Send a clear dispute letter.</p>
            <Link href="/letters/rent-increase-dispute-letter" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors text-sm">
              Rent Increase Dispute Letter
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <FAQAccordion items={[
            { q: "What is an above-guideline increase (AGI)?", a: "An AGI is a rent increase larger than Ontario's annual guideline. A landlord can only charge it if the Landlord and Tenant Board approves an application — usually for major capital repairs, big security-service costs, or large municipal tax increases. Tenants get notice and a chance to dispute it." },
            { q: "Can my landlord raise my rent above the guideline without approval?", a: "Only if your unit is exempt (first occupied after November 15, 2018) or you're in a new tenancy. Otherwise, any increase above the guideline requires an LTB order. You should not pay the excess until the Board approves it." },
            { q: "How much notice does my landlord need to give?", a: "At least 90 days' written notice on Form N1 before the increase takes effect, and rent can only be increased once every 12 months. This applies even to guideline-level increases and to exempt units." },
            { q: "What can I do if I think the increase is illegal?", a: "Don't sign anything agreeing to it. Put your objection in writing, keep records, and if the landlord tries to collect an illegal increase you can raise it at the LTB (for example, a T1 to recover an illegal charge). A tenant clinic can help you respond to an AGI application." },
          ]} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
