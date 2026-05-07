"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FileText, DollarSign, AlertTriangle, HelpCircle,
  Lightbulb, ShieldCheck, CheckCircle, Lock, Loader2,
} from "lucide-react";
import { LeaseAnalysis } from "@/lib/types";

const severityColors = {
  high: "bg-red-50 border-red-200 text-red-800",
  medium: "bg-amber-50 border-amber-200 text-amber-800",
  low: "bg-blue-50 border-blue-200 text-blue-800",
};
const severityBadge = {
  high: "bg-red-100 text-red-700",
  medium: "bg-amber-100 text-amber-700",
  low: "bg-blue-100 text-blue-700",
};

function PaywallOverlay({ count, noun }: { count: number; noun: string }) {
  return (
    <div className="relative min-h-[120px]">
      <div className="flex flex-col gap-3 pointer-events-none select-none" aria-hidden="true">
        {Array.from({ length: Math.min(count, 3) }).map((_, i) => (
          <div key={i} className="rounded-xl border border-red-200 bg-red-50 p-4 blur-sm opacity-50">
            <div className="h-4 bg-red-200 rounded w-1/2 mb-2" />
            <div className="h-3 bg-red-100 rounded w-full" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-[2px] rounded-xl">
        <div className="text-center px-6">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <Lock className="w-6 h-6 text-blue-600" />
          </div>
          <p className="font-semibold text-slate-900 mb-1">
            {count} {noun}{count !== 1 ? "s" : ""} found
          </p>
          <p className="text-sm text-slate-500 mb-4">Upgrade to Pro to unlock</p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Upgrade to Pro to unlock
          </Link>
        </div>
      </div>
    </div>
  );
}

function LockedSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="pointer-events-none select-none blur-sm opacity-40" aria-hidden="true">
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
        >
          <Lock className="w-4 h-4" />
          Upgrade to Pro to unlock
        </Link>
      </div>
    </div>
  );
}

export default function AnalysisContent({
  id,
  isTeaser,
}: {
  id: string;
  isTeaser: boolean;
}) {
  const [analysis, setAnalysis] = useState<LeaseAnalysis | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try sessionStorage first (set by upload page immediately after analysis)
    const cached = sessionStorage.getItem(`lp_analysis_${id}`);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        setAnalysis({ id, createdAt: new Date().toISOString(), ...parsed });
        setLoading(false);
        return;
      } catch { /* fall through to API */ }
    }

    // Fall back to fetching from D1 via API
    fetch(`/api/analysis/${id}`)
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (data) setAnalysis(data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-slate-400 gap-2">
        <Loader2 className="w-5 h-5 animate-spin" />
        <span className="text-sm">Loading analysis…</span>
      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 text-center text-slate-500 text-sm">
        Analysis not found. <Link href="/upload" className="text-blue-600 underline">Try uploading again.</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* 1. Plain-English Summary — always visible */}
      <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
            <FileText className="w-4 h-4 text-blue-600" />
          </div>
          <h2 className="font-bold text-slate-900">Plain-English Summary</h2>
        </div>
        <p className="text-slate-700 text-sm leading-relaxed">{analysis.summary}</p>
      </section>

      {/* 2. Key Financial Terms */}
      <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
            <DollarSign className="w-4 h-4 text-green-600" />
          </div>
          <h2 className="font-bold text-slate-900">Key Financial Terms</h2>
        </div>
        {isTeaser ? (
          <LockedSection>
            <div className="flex flex-col gap-2">
              {analysis.financialTerms.slice(0, 4).map((term) => (
                <div key={term.label} className="flex justify-between py-2.5 border-b border-slate-50 last:border-0">
                  <span className="text-sm font-medium text-slate-600">{term.label}</span>
                  <span className="text-sm font-semibold text-slate-900">{term.value}</span>
                </div>
              ))}
            </div>
          </LockedSection>
        ) : (
          <div className="flex flex-col gap-2">
            {analysis.financialTerms.map((term) => (
              <div key={term.label} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 py-2.5 border-b border-slate-50 last:border-0">
                <span className="text-sm font-medium text-slate-600 sm:w-48 flex-shrink-0">{term.label}</span>
                <div className="flex-1">
                  <span className="text-sm font-semibold text-slate-900">{term.value}</span>
                  {term.note && <p className="text-xs text-slate-400 mt-0.5">{term.note}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. Red Flags */}
      <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
            <AlertTriangle className="w-4 h-4 text-red-500" />
          </div>
          <h2 className="font-bold text-slate-900">Red Flags</h2>
        </div>
        {isTeaser ? (
          <PaywallOverlay count={analysis.redFlags.length} noun="red flag" />
        ) : analysis.redFlags.length === 0 ? (
          <div className="flex items-center gap-2 text-green-700 text-sm">
            <CheckCircle className="w-4 h-4" />
            No significant red flags were detected in this lease.
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {analysis.redFlags.map((flag) => (
              <div key={flag.title} className={`rounded-xl border p-4 ${severityColors[flag.severity]}`}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-sm">{flag.title}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${severityBadge[flag.severity]}`}>
                    {flag.severity.toUpperCase()}
                  </span>
                </div>
                <p className="text-sm leading-relaxed opacity-90">{flag.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Unclear Clauses */}
      <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
            <HelpCircle className="w-4 h-4 text-amber-500" />
          </div>
          <h2 className="font-bold text-slate-900">Unclear or Missing Clauses</h2>
        </div>
        {isTeaser ? (
          <PaywallOverlay count={analysis.unclearClauses.length} noun="unclear clause" />
        ) : (
          <div className="flex flex-col gap-3">
            {analysis.unclearClauses.map((clause) => (
              <div key={clause.title} className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                <p className="font-semibold text-amber-900 text-sm mb-1">{clause.title}</p>
                <p className="text-sm text-amber-800 leading-relaxed">{clause.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 5. Questions to Ask */}
      <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
            <Lightbulb className="w-4 h-4 text-blue-500" />
          </div>
          <h2 className="font-bold text-slate-900">Questions to Ask Before Signing</h2>
        </div>
        {isTeaser ? (
          <LockedSection>
            <ul className="flex flex-col gap-2">
              {analysis.questionsToAsk.slice(0, 3).map((q, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  {q}
                </li>
              ))}
            </ul>
          </LockedSection>
        ) : (
          <ul className="flex flex-col gap-2">
            {analysis.questionsToAsk.map((q, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                {q}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* 6. Negotiation Suggestions */}
      <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-purple-500" />
          </div>
          <h2 className="font-bold text-slate-900">Tenant-Friendly Negotiation Suggestions</h2>
        </div>
        {isTeaser ? (
          <LockedSection>
            <ul className="flex flex-col gap-2.5">
              {analysis.negotiationSuggestions.slice(0, 3).map((s, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </LockedSection>
        ) : (
          <ul className="flex flex-col gap-2.5">
            {analysis.negotiationSuggestions.map((s, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                {s}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
