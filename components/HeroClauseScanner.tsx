"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertTriangle, CheckCircle, ChevronRight, Sparkles } from "lucide-react";

/**
 * Compact live clause scanner for the homepage hero. Uses the same real
 * pattern-matching rules as /tools/clause-checker — this is a genuine (if
 * basic) red-flag check, not a mockup. One-click example clauses let a
 * visitor see it work without typing.
 */

type RiskLevel = "high" | "medium" | "low";

interface RedFlagCheck {
  pattern: RegExp | ((text: string) => boolean);
  risk: RiskLevel;
  flag: string;
  explanation: string;
}

const RED_FLAG_CHECKS: RedFlagCheck[] = [
  { pattern: /sole\s+discretion/i, risk: "high", flag: "Landlord has sole discretion", explanation: "Clauses giving a landlord 'sole discretion' with no objective standard are often unenforceable — courts require landlords to act reasonably." },
  { pattern: /waive[s]?\s+(your|any|all|the)\s+(right|rights|claim)/i, risk: "high", flag: "Waiver of legal rights", explanation: "Clauses waiving your statutory rights are void in most provinces. You cannot sign away rights granted by the Residential Tenancies Act." },
  { pattern: (t: string) => /landlord\s+may\s+enter/i.test(t) && !/notice/i.test(t), risk: "high", flag: "Entry without notice", explanation: "Landlords must give written notice (usually 24 hours) before entering. 'At any time' or 'without notice' violates provincial law." },
  { pattern: /increase\s+rent\s+at\s+any\s+time/i, risk: "high", flag: "Unlimited rent increase", explanation: "Landlords can only raise rent once per 12 months, with proper notice and within provincial limits." },
  { pattern: /tenant\s+(is\s+)?(responsible|liable)\s+for\s+all\s+repairs/i, risk: "high", flag: "Tenant pays for all repairs", explanation: "Landlords are legally required to keep the unit in a good state of repair. Shifting all repairs to the tenant is unenforceable." },
  { pattern: /no\s+refund/i, risk: "high", flag: "No refund clause", explanation: "If this refers to the deposit, it likely violates provincial law — deposits must be returned (minus valid deductions) by a set deadline." },
  { pattern: /automatic(ally)?\s+renew/i, risk: "high", flag: "Automatic renewal", explanation: "In most provinces a fixed-term lease converts to month-to-month by default — not a new fixed term. Watch for auto-rollover language." },
  { pattern: /evict\s+without\s+notice/i, risk: "high", flag: "Eviction without notice", explanation: "Illegal. Landlords must follow the proper notice and tribunal process to evict in every Canadian province." },
  { pattern: /above[\s-]guideline/i, risk: "high", flag: "Above-guideline increase", explanation: "Above-guideline increases require a formal tribunal application. A lease clause cannot pre-authorize one." },
  { pattern: /no\s+pets/i, risk: "medium", flag: "No pets clause", explanation: "Pet-prohibition clauses are unenforceable in some provinces (e.g. Ontario). Verify for your province." },
  { pattern: /no\s+subletting?/i, risk: "medium", flag: "No subletting clause", explanation: "In Ontario a landlord cannot unreasonably refuse a sublet — a blanket ban may be unenforceable." },
  { pattern: /landlord.{0,30}not\s+responsible/i, risk: "medium", flag: "Landlord disclaims responsibility", explanation: "Landlords cannot disclaim responsibility for a habitable unit or their own negligence." },
  { pattern: /first\s+and\s+last\s+and\s+security/i, risk: "medium", flag: "First, last AND security deposit", explanation: "In Ontario a landlord can only collect last month's rent — not a separate security deposit. Collecting both is illegal there." },
  { pattern: /non[\s-]refundable\s+(deposit|fee)/i, risk: "medium", flag: "Non-refundable deposit/fee", explanation: "Non-refundable deposits are illegal in most provinces (a pet deposit is the occasional exception — check yours)." },
  { pattern: /inspect\s+(at\s+)?any\s+time/i, risk: "medium", flag: "Unrestricted inspection", explanation: "Landlords must give proper written notice before inspections. 'Any time' conflicts with your privacy rights." },
  { pattern: /terminate\s+this\s+agreement\s+at\s+any\s+time/i, risk: "medium", flag: "Landlord may terminate anytime", explanation: "Landlords cannot end a tenancy without a valid reason and proper process. This is unenforceable." },
  { pattern: /quiet\s+hours/i, risk: "low", flag: "Quiet hours", explanation: "Generally enforceable — just make sure the hours are reasonable and clearly defined." },
  { pattern: /tenant\s+responsible\s+for\s+(lawn|snow|yard|garden)/i, risk: "low", flag: "Tenant does yard/snow", explanation: "Can be shifted to tenants by agreement. Make sure the scope is clear and reasonable for the rent." },
  { pattern: /parking\s+(fee|charge)/i, risk: "low", flag: "Separate parking fee", explanation: "Generally allowed when disclosed upfront. Verify the amount is clear and fixed." },
];

interface MatchedFlag { risk: RiskLevel; flag: string; explanation: string; }

const RISK: Record<RiskLevel, { dot: string; chip: string; label: string }> = {
  high: { dot: "bg-red-500", chip: "bg-red-100 text-red-700", label: "High" },
  medium: { dot: "bg-amber-500", chip: "bg-amber-100 text-amber-700", label: "Medium" },
  low: { dot: "bg-sky-500", chip: "bg-sky-100 text-sky-700", label: "Info" },
};

const EXAMPLES: { label: string; text: string }[] = [
  { label: "Entry clause", text: "The landlord may enter the premises at any time to inspect the property or make repairs." },
  { label: "Deposit clause", text: "Tenant shall pay first and last and security deposit. All deposits are non-refundable." },
  { label: "Repairs clause", text: "The tenant is responsible for all repairs and maintenance, and the landlord is not responsible for any damage." },
];

function scanText(text: string): MatchedFlag[] {
  const matched: MatchedFlag[] = [];
  for (const c of RED_FLAG_CHECKS) {
    const hit = typeof c.pattern === "function" ? c.pattern(text) : c.pattern.test(text);
    if (hit) matched.push({ risk: c.risk, flag: c.flag, explanation: c.explanation });
  }
  return matched;
}

export default function HeroClauseScanner() {
  const [text, setText] = useState("");
  const [results, setResults] = useState<MatchedFlag[] | null>(null);

  const scan = (value?: string) => {
    const t = (value ?? text).trim();
    if (!t) return;
    setResults(scanText(t));
  };

  const useExample = (ex: string) => {
    setText(ex);
    setResults(scanText(ex));
  };

  const highCount = results?.filter((r) => r.risk === "high").length ?? 0;

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-black/5 p-5 sm:p-6 text-left">
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-accent-soft">
          <Sparkles className="w-4 h-4 text-accent" aria-hidden="true" />
        </span>
        <span className="text-sm font-semibold text-ink">Try it now — scan a clause</span>
      </div>

      <label htmlFor="hero-clause" className="sr-only">Paste a lease clause</label>
      <textarea
        id="hero-clause"
        value={text}
        onChange={(e) => { setText(e.target.value); setResults(null); }}
        placeholder="Paste a clause from your lease…"
        rows={3}
        className="w-full border border-line rounded-xl px-3.5 py-2.5 text-sm text-ink bg-surface focus:outline-none focus:ring-2 focus:ring-accent resize-y"
      />

      <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
        <span className="text-xs text-subtle mr-0.5">Or try:</span>
        {EXAMPLES.map((ex) => (
          <button
            key={ex.label}
            type="button"
            onClick={() => useExample(ex.text)}
            className="text-xs font-medium px-2.5 py-1 rounded-full border border-line text-muted hover:border-accent hover:text-accent hover:bg-accent-soft transition-colors"
          >
            {ex.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scan()}
        disabled={!text.trim()}
        className="w-full mt-3 bg-brand text-brand-fg font-semibold py-2.5 rounded-xl hover:bg-brand-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Scan for red flags
      </button>

      {results !== null && (
        <div className="mt-4" aria-live="polite">
          {results.length === 0 ? (
            <div className="flex items-start gap-2.5 bg-green-50 border border-green-200 rounded-xl p-3">
              <CheckCircle className="w-4.5 h-4.5 text-green-500 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs text-slate-700 leading-relaxed">
                No common red-flag patterns found. This is a basic keyword check — the full AI review reads your entire lease and catches unusual wording too.
              </p>
            </div>
          ) : (
            <>
              <p className="text-xs font-semibold text-muted mb-2">
                {results.length} {results.length === 1 ? "issue" : "issues"} found
                {highCount > 0 && <span className="text-red-600"> · {highCount} high-risk</span>}
              </p>
              <div className="flex flex-col gap-2 max-h-56 overflow-y-auto pr-0.5">
                {results.map((r, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-surface-2 border border-line rounded-lg px-3 py-2">
                    <span className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${RISK[r.risk].dot}`} aria-hidden="true" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold text-ink">{r.flag}</span>
                        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${RISK[r.risk].chip}`}>{RISK[r.risk].label}</span>
                      </div>
                      <p className="text-xs text-muted leading-snug mt-0.5">{r.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <Link
            href="/upload"
            className="mt-3 flex items-center justify-center gap-1.5 w-full border border-accent text-accent font-semibold text-sm py-2.5 rounded-xl hover:bg-accent-soft transition-colors"
          >
            Review my whole lease free <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      )}

      <p className="text-[11px] text-subtle mt-3 leading-relaxed">
        Basic pattern check for illustration — not legal advice.
      </p>
    </div>
  );
}
