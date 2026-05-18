"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, Info } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

interface ProvinceData {
  firstMonth: boolean;
  lastMonthDeposit: boolean;
  lastMonthNote?: string;
  securityDepositCap: number | null; // multiplier of monthly rent, null = prohibited
  securityDepositNote: string;
  petDepositCap: number | null; // multiplier of monthly rent, null = not allowed / none
  petDepositNote: string;
  notAllowed: string;
}

const PROVINCE_DATA: Record<string, ProvinceData> = {
  ON: {
    firstMonth: true,
    lastMonthDeposit: true,
    lastMonthNote: "Must earn annual interest at the government-set rate",
    securityDepositCap: null,
    securityDepositNote: "Not permitted — Ontario bans security deposits entirely",
    petDepositCap: null,
    petDepositNote: "Not permitted in Ontario",
    notAllowed:
      "Ontario landlords cannot charge a security deposit, pet deposit, key deposit (unless refundable), or any other upfront fee beyond first and last month's rent.",
  },
  BC: {
    firstMonth: true,
    lastMonthDeposit: false,
    securityDepositCap: 0.5,
    securityDepositNote: "Capped at 0.5× monthly rent; must be returned within 15 days of move-out",
    petDepositCap: 0.5,
    petDepositNote: "Separate pet damage deposit capped at 0.5× monthly rent",
    notAllowed:
      "BC landlords cannot charge last month's rent as a deposit, nor can they charge more than 0.5× rent for the security deposit or pet deposit. Application fees are prohibited.",
  },
  AB: {
    firstMonth: true,
    lastMonthDeposit: false,
    securityDepositCap: 1.0,
    securityDepositNote: "Capped at 1× monthly rent; includes any pet damage component",
    petDepositCap: null,
    petDepositNote: "Included within the security deposit cap — no separate pet deposit",
    notAllowed:
      "Alberta landlords cannot charge a separate pet deposit beyond the security deposit cap of 1× monthly rent. Application fees and last month's rent deposits are not permitted.",
  },
  QC: {
    firstMonth: true,
    lastMonthDeposit: false,
    securityDepositCap: null,
    securityDepositNote: "Prohibited by law — Quebec bans all security and damage deposits",
    petDepositCap: null,
    petDepositNote: "Prohibited by law in Quebec",
    notAllowed:
      "Quebec landlords are legally prohibited from collecting any security deposit, damage deposit, or pet deposit. Only the first month's rent may be collected upfront. Any deposit collected must be returned.",
  },
  MB: {
    firstMonth: true,
    lastMonthDeposit: false,
    securityDepositCap: 0.5,
    securityDepositNote: "Capped at 0.5× monthly rent",
    petDepositCap: null,
    petDepositNote: "No separate pet deposit permitted in Manitoba",
    notAllowed:
      "Manitoba landlords cannot charge last month's rent as a deposit, a pet deposit, or more than 0.5× monthly rent as a security deposit.",
  },
  SK: {
    firstMonth: true,
    lastMonthDeposit: false,
    securityDepositCap: 1.0,
    securityDepositNote: "Capped at 1× monthly rent",
    petDepositCap: null,
    petDepositNote: "No separate pet deposit permitted in Saskatchewan",
    notAllowed:
      "Saskatchewan landlords cannot charge a last month's rent deposit or a separate pet deposit. The security deposit is capped at 1× monthly rent.",
  },
  NS: {
    firstMonth: true,
    lastMonthDeposit: false,
    securityDepositCap: 0.5,
    securityDepositNote: "Capped at 0.5× monthly rent",
    petDepositCap: null,
    petDepositNote: "No separate pet deposit permitted in Nova Scotia",
    notAllowed:
      "Nova Scotia landlords cannot charge a last month's rent deposit, a pet deposit, or more than 0.5× monthly rent as a security deposit.",
  },
  NB: {
    firstMonth: true,
    lastMonthDeposit: false,
    securityDepositCap: 1.0,
    securityDepositNote: "Capped at 1× monthly rent",
    petDepositCap: null,
    petDepositNote: "No separate pet deposit permitted in New Brunswick",
    notAllowed:
      "New Brunswick landlords cannot charge a last month's rent deposit or a separate pet deposit. The security deposit cap is 1× monthly rent.",
  },
  PE: {
    firstMonth: true,
    lastMonthDeposit: false,
    securityDepositCap: 2.0,
    securityDepositNote: "PEI allows up to 2× monthly rent as a security deposit",
    petDepositCap: null,
    petDepositNote: "No separate pet deposit permitted in PEI",
    notAllowed:
      "PEI landlords cannot charge a last month's rent deposit or a separate pet deposit. The security deposit is capped at 2× monthly rent.",
  },
  NL: {
    firstMonth: true,
    lastMonthDeposit: false,
    securityDepositCap: 0.75,
    securityDepositNote: "Capped at 75% of monthly rent",
    petDepositCap: null,
    petDepositNote: "No separate pet deposit permitted in Newfoundland & Labrador",
    notAllowed:
      "NL landlords cannot charge a last month's rent deposit or a separate pet deposit. The security deposit is capped at 75% of monthly rent.",
  },
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

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 2 }).format(amount);
}

export default function MoveInCostClient() {
  const [province, setProvince] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [hasPet, setHasPet] = useState(false);

  const rent = parseFloat(monthlyRent.replace(/[^0-9.]/g, ""));
  const data = PROVINCE_DATA[province] ?? null;
  const showResult = data && !isNaN(rent) && rent > 0;

  const firstMonthAmount = showResult ? rent : 0;
  const lastMonthAmount = showResult && data.lastMonthDeposit ? rent : 0;
  const securityAmount =
    showResult && data.securityDepositCap !== null ? rent * data.securityDepositCap : 0;
  const petAmount =
    showResult && hasPet && data.petDepositCap !== null ? rent * data.petDepositCap : 0;
  const total = firstMonthAmount + lastMonthAmount + securityAmount + petAmount;

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1 py-12 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-50 rounded-xl mb-4">
              <Home className="w-6 h-6 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Move-In Cost Calculator</h1>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Find out the maximum upfront costs your landlord can legally charge in your province.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6">
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Province</label>
                <select
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
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
                  <option value="NL">Newfoundland &amp; Labrador</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Monthly Rent</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                  <input
                    type="number"
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(e.target.value)}
                    placeholder="1,800"
                    className="w-full border border-slate-200 rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
                  />
                </div>
              </div>

              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={hasPet}
                  onChange={(e) => setHasPet(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-green-600 focus:ring-green-300"
                />
                <span className="text-sm font-medium text-slate-700">I have a pet</span>
              </label>
            </div>

            {showResult && (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5">
                <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-4">
                  {PROVINCE_LABELS[province]} — Maximum Legal Move-In Costs
                </p>

                <table className="w-full text-sm mb-4">
                  <tbody className="divide-y divide-green-100">
                    <tr>
                      <td className="py-2 text-slate-700 font-medium">First Month&apos;s Rent</td>
                      <td className="py-2 text-right text-slate-900 font-semibold">{formatCurrency(firstMonthAmount)}</td>
                      <td className="py-2 pl-4 text-xs text-slate-500">Required upfront</td>
                    </tr>

                    {data.lastMonthDeposit ? (
                      <tr>
                        <td className="py-2 text-slate-700 font-medium">Last Month&apos;s Rent Deposit</td>
                        <td className="py-2 text-right text-slate-900 font-semibold">{formatCurrency(lastMonthAmount)}</td>
                        <td className="py-2 pl-4 text-xs text-slate-500">{data.lastMonthNote}</td>
                      </tr>
                    ) : (
                      <tr>
                        <td className="py-2 text-slate-500">Last Month&apos;s Rent Deposit</td>
                        <td className="py-2 text-right text-slate-400">—</td>
                        <td className="py-2 pl-4 text-xs text-slate-400">Not permitted in {PROVINCE_LABELS[province]}</td>
                      </tr>
                    )}

                    {data.securityDepositCap !== null ? (
                      <tr>
                        <td className="py-2 text-slate-700 font-medium">Security Deposit</td>
                        <td className="py-2 text-right text-slate-900 font-semibold">{formatCurrency(securityAmount)}</td>
                        <td className="py-2 pl-4 text-xs text-slate-500">{data.securityDepositNote}</td>
                      </tr>
                    ) : (
                      <tr>
                        <td className="py-2 text-slate-500">Security Deposit</td>
                        <td className="py-2 text-right text-slate-400">—</td>
                        <td className="py-2 pl-4 text-xs text-slate-400">{data.securityDepositNote}</td>
                      </tr>
                    )}

                    {hasPet && data.petDepositCap !== null ? (
                      <tr>
                        <td className="py-2 text-slate-700 font-medium">Pet Deposit</td>
                        <td className="py-2 text-right text-slate-900 font-semibold">{formatCurrency(petAmount)}</td>
                        <td className="py-2 pl-4 text-xs text-slate-500">{data.petDepositNote}</td>
                      </tr>
                    ) : hasPet ? (
                      <tr>
                        <td className="py-2 text-slate-500">Pet Deposit</td>
                        <td className="py-2 text-right text-slate-400">—</td>
                        <td className="py-2 pl-4 text-xs text-slate-400">{data.petDepositNote}</td>
                      </tr>
                    ) : null}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-green-300">
                      <td className="pt-3 text-slate-900 font-bold">Maximum Total</td>
                      <td className="pt-3 text-right text-green-700 font-bold text-lg">{formatCurrency(total)}</td>
                      <td className="pt-3 pl-4 text-xs text-slate-500">Legal maximum upfront</td>
                    </tr>
                  </tfoot>
                </table>

                <div className="bg-white border border-green-100 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-700 mb-0.5 text-xs uppercase tracking-wide">What your landlord cannot charge</p>
                      <p className="text-sm text-slate-600">{data.notAllowed}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-8">
            <strong>Not legal advice.</strong> Deposit rules can change. Always verify with your provincial tenancy authority or a legal professional.
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
              q: "Can a landlord charge a security deposit AND last month's rent in Ontario?",
              a: "No. In Ontario, landlords can only collect a last month's rent (LMR) deposit. They cannot charge a separate security deposit for damages. The LMR must earn interest at the rate set annually by the government.",
            },
            {
              q: "Does Quebec really not allow security deposits?",
              a: "Correct. Quebec law prohibits landlords from collecting any security deposit or damage deposit. The only upfront money allowed is the first month's rent. Landlords who charge deposits are violating the law and the amount must be returned.",
            },
            {
              q: "Can I negotiate a lower deposit?",
              a: "Deposits are capped by law, not minimums. A landlord could agree to collect less, but cannot legally demand more than the provincial cap. Get any agreement in writing.",
            },
            {
              q: "What is a last month's rent deposit used for?",
              a: "In Ontario, the LMR is applied to your final month's rent — it is not a damage deposit. The landlord cannot use it to cover repairs or cleaning. It must be returned or applied to your last month if you give proper notice.",
            },
            {
              q: "Can a landlord charge separate fees for a key deposit, parking deposit, or application fee?",
              a: "Application fees are illegal in most Canadian provinces. Key deposits are allowed in some provinces but must be refundable. Parking deposits vary. Any charge not permitted by provincial law is illegal and should be refused in writing.",
            },
          ]} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
