"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertTriangle, CheckCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

type RiskLevel = "high" | "medium" | "low";

interface RedFlagCheck {
  pattern: RegExp | ((text: string) => boolean);
  risk: RiskLevel;
  flag: string;
  explanation: string;
}

const RED_FLAG_CHECKS: RedFlagCheck[] = [
  // HIGH risk
  {
    pattern: /sole\s+discretion/i,
    risk: "high",
    flag: "Landlord Has Sole Discretion",
    explanation:
      "Clauses giving a landlord 'sole discretion' over decisions (repairs, renewals, deductions) with no objective standard are often unenforceable. Courts require landlords to act reasonably.",
  },
  {
    pattern: /waive[s]?\s+(your|any|all|the)\s+(right|rights|claim)/i,
    risk: "high",
    flag: "Waiver of Legal Rights",
    explanation:
      "Lease clauses waiving your statutory rights are void in most provinces. You cannot sign away rights granted by the Residential Tenancies Act.",
  },
  {
    pattern: (text: string) =>
      /landlord\s+may\s+enter/i.test(text) && !/notice/i.test(text),
    risk: "high",
    flag: "Unrestricted Entry Clause",
    explanation:
      "Landlords must give written notice (usually 24 hours) before entering. A clause allowing entry 'at any time' or 'without notice' violates provincial law.",
  },
  {
    pattern: /increase\s+rent\s+at\s+any\s+time/i,
    risk: "high",
    flag: "Unlimited Rent Increase",
    explanation:
      "This violates provincial rent increase guidelines. Landlords can only raise rent once per 12 months with proper notice and within provincial limits.",
  },
  {
    pattern: /tenant\s+(is\s+)?(responsible|liable)\s+for\s+all\s+repairs/i,
    risk: "high",
    flag: "Tenant Responsible for All Repairs",
    explanation:
      "Landlords are legally required to maintain the unit in a good state of repair. A clause transferring all repair obligations to the tenant is unenforceable.",
  },
  {
    pattern: /no\s+refund/i,
    risk: "high",
    flag: "No Refund Clause",
    explanation:
      "If this refers to the deposit, it likely violates provincial law. Deposits must be returned (minus valid deductions) within a prescribed deadline.",
  },
  {
    pattern: /automatic(ally)?\s+renew/i,
    risk: "high",
    flag: "Automatic Renewal / Rollover",
    explanation:
      "Watch for clauses that automatically convert your lease to a longer fixed term. In most provinces, a fixed-term lease converts to month-to-month by default — not a new fixed term.",
  },
  {
    pattern: /evict\s+without\s+notice/i,
    risk: "high",
    flag: "Eviction Without Notice",
    explanation:
      "Illegal. Landlords must follow the proper notice and tribunal process to evict a tenant in every Canadian province.",
  },
  {
    pattern: /above[\s-]guideline/i,
    risk: "high",
    flag: "Above-Guideline Rent Increase Reference",
    explanation:
      "Above-guideline increases require a formal application to the tribunal (e.g. LTB in Ontario). A lease clause cannot pre-authorize an above-guideline increase.",
  },
  // MEDIUM risk
  {
    pattern: /no\s+pets/i,
    risk: "medium",
    flag: "No Pets Clause",
    explanation:
      "Pet prohibition clauses are unenforceable in some provinces (e.g. Ontario). If you already have a pet, this clause may not be legally binding — but verify for your province.",
  },
  {
    pattern: /no\s+subletting?/i,
    risk: "medium",
    flag: "'No Subletting' Clause",
    explanation:
      "In Ontario, landlords cannot unreasonably refuse a sublet request — a blanket prohibition may be unenforceable. In other provinces it depends on the lease terms.",
  },
  {
    pattern: /landlord.{0,30}not\s+responsible/i,
    risk: "medium",
    flag: "Landlord Disclaims Responsibility",
    explanation:
      "Landlords cannot disclaim responsibility for maintaining a habitable unit or for their own negligence. Check what this clause is limiting liability for.",
  },
  {
    pattern: /first\s+and\s+last\s+and\s+security/i,
    risk: "medium",
    flag: "First, Last AND Security Deposit",
    explanation:
      "In Ontario, landlords can only collect a last month's rent deposit — not a separate security deposit. Collecting both is illegal in Ontario.",
  },
  {
    pattern: /non[\s-]refundable\s+(deposit|fee)/i,
    risk: "medium",
    flag: "Non-Refundable Deposit or Fee",
    explanation:
      "Non-refundable deposits are illegal in most Canadian provinces. The only exception is a non-refundable pet deposit in some provinces (check yours).",
  },
  {
    pattern: /inspect\s+(at\s+)?any\s+time/i,
    risk: "medium",
    flag: "Unrestricted Inspection Right",
    explanation:
      "Landlords must give proper written notice before inspections. 'Any time' language conflicts with tenant privacy rights.",
  },
  {
    pattern: /terminate\s+this\s+agreement\s+at\s+any\s+time/i,
    risk: "medium",
    flag: "Landlord May Terminate at Any Time",
    explanation:
      "Landlords cannot end a tenancy without a valid reason and proper process. This type of clause is unenforceable.",
  },
  // LOW / INFO risk
  {
    pattern: /quiet\s+hours/i,
    risk: "low",
    flag: "Quiet Hours Clause",
    explanation:
      "Quiet hours rules are generally enforceable. Make sure the hours are reasonable and clearly defined.",
  },
  {
    pattern: /tenant\s+responsible\s+for\s+(lawn|snow|yard|garden)/i,
    risk: "low",
    flag: "Tenant Responsible for Yard/Snow",
    explanation:
      "These obligations can be shifted to tenants by agreement. Make sure the scope is clear and reasonable given the rent amount.",
  },
  {
    pattern: /parking\s+(fee|charge)/i,
    risk: "low",
    flag: "Separate Parking Fee",
    explanation:
      "Parking fees are generally allowed when disclosed upfront. Verify the amount is clear and fixed.",
  },
];

interface MatchedFlag {
  risk: RiskLevel;
  flag: string;
  explanation: string;
}

const RISK_CONFIG: Record<RiskLevel, { border: string; bg: string; badge: string; label: string }> = {
  high: {
    border: "border-red-400",
    bg: "bg-red-50",
    badge: "bg-red-100 text-red-700",
    label: "High Risk",
  },
  medium: {
    border: "border-amber-400",
    bg: "bg-amber-50",
    badge: "bg-amber-100 text-amber-700",
    label: "Medium Risk",
  },
  low: {
    border: "border-blue-400",
    bg: "bg-blue-50",
    badge: "bg-blue-100 text-blue-700",
    label: "Info",
  },
};

export default function ClauseCheckerClient() {
  const [text, setText] = useState("");
  const [results, setResults] = useState<MatchedFlag[] | null>(null);

  const scan = () => {
    if (!text.trim()) return;
    const matched: MatchedFlag[] = [];
    for (const check of RED_FLAG_CHECKS) {
      let hit = false;
      if (typeof check.pattern === "function") {
        hit = check.pattern(text);
      } else {
        hit = check.pattern.test(text);
      }
      if (hit) {
        matched.push({ risk: check.risk, flag: check.flag, explanation: check.explanation });
      }
    }
    setResults(matched);
  };

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1 py-12 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-50 rounded-xl mb-4">
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Lease Clause Red Flag Scanner</h1>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Paste a clause from your lease to instantly check it for common legal red flags.
            </p>
          </div>

          {/* Input card */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6">
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Lease clause text
                </label>
                <textarea
                  value={text}
                  onChange={(e) => { setText(e.target.value); setResults(null); }}
                  placeholder="Paste a lease clause here…"
                  rows={6}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-300 resize-y"
                />
              </div>
              <button
                onClick={scan}
                disabled={!text.trim()}
                className="w-full bg-red-500 text-white font-semibold py-3 rounded-xl hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Scan Clause
              </button>
            </div>

            {/* Results */}
            {results !== null && (
              <div className="mt-6 flex flex-col gap-3">
                {results.length === 0 ? (
                  <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900 text-sm mb-1">
                        No obvious red flags detected
                      </p>
                      <p className="text-xs text-slate-600">
                        No common red flag patterns were found in this clause. Keep in mind this is a
                        basic keyword check — some problematic clauses use unusual wording that
                        pattern scanning won't catch. For a full AI review, upload your entire lease
                        below.
                      </p>
                    </div>
                  </div>
                ) : (
                  results.map((r, i) => {
                    const cfg = RISK_CONFIG[r.risk];
                    return (
                      <div
                        key={i}
                        className={`border-l-4 ${cfg.border} ${cfg.bg} rounded-r-xl px-4 py-3`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <AlertTriangle className="w-4 h-4 text-slate-500 flex-shrink-0" />
                          <span className="font-semibold text-slate-900 text-sm">{r.flag}</span>
                          <span className={`ml-auto text-xs font-medium px-2 py-0.5 rounded-full ${cfg.badge}`}>
                            {cfg.label}
                          </span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">{r.explanation}</p>
                      </div>
                    );
                  })
                )}
              </div>
            )}
          </div>

          {/* Disclaimer + CTA */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-6">
            This is a basic pattern-matching tool — not legal advice. For a full AI analysis of your
            entire lease,{" "}
            <Link href="/upload" className="font-semibold underline hover:text-amber-900">
              Upload Lease Free →
            </Link>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <FAQAccordion
            items={[
              {
                q: "Does this tool read my whole lease?",
                a: "No. This tool scans a single clause you paste. For a full lease analysis, use LeasePlain's AI analyzer which reads your entire lease document.",
              },
              {
                q: "Are these flags always a problem?",
                a: "Not necessarily. Context matters. A clause flagged as 'high risk' may still be legal in your province or may have acceptable surrounding context. Use this as a starting point for further review.",
              },
              {
                q: "What if nothing is flagged?",
                a: "A clean result means no common red flag patterns were detected — it does not mean the clause is problem-free. Some problematic clauses use unusual wording that keyword scanning won't catch.",
              },
              {
                q: "Can a landlord enforce an illegal lease clause?",
                a: "Generally no. Clauses that violate provincial tenancy legislation are void and unenforceable, even if you signed the lease. You retain your statutory rights regardless.",
              },
              {
                q: "What should I do if I find a red flag?",
                a: "First, research whether the clause actually violates your provincial law. If it does, you can: (a) ask the landlord to remove it before signing, (b) sign with a written note that you consider the clause void, or (c) consult a tenant advocate or legal aid clinic.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
