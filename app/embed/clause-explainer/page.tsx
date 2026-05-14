"use client";

import { useState } from "react";
import { FileText, Loader2, AlertCircle } from "lucide-react";

export default function ClauseExplainerEmbed() {
  const [clause, setClause] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const explain = async () => {
    if (!clause.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("text", clause);
      const res = await fetch("/api/analyze", { method: "POST", body: formData });
      const data = await res.json();

      if (!res.ok || data.error) {
        setError(data.error ?? "Could not explain this clause. Please try again.");
        return;
      }

      const summary: string = data.analysis?.summary ?? data.teaser ?? "";
      setResult(summary || "No explanation available for this clause.");
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
      className="flex flex-col min-h-screen bg-white p-4"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
        <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center">
          <FileText className="w-4 h-4 text-indigo-600" />
        </div>
        <span className="font-semibold text-slate-800 text-sm">Lease Clause Explainer</span>
      </div>

      {/* Input */}
      <div className="flex flex-col gap-3 flex-1">
        <label className="text-xs font-medium text-slate-600 uppercase tracking-wide">
          Paste a lease clause below
        </label>
        <textarea
          value={clause}
          onChange={(e) => { setClause(e.target.value); setResult(null); setError(null); }}
          placeholder='e.g. "Tenant shall be responsible for all repairs under $150 and shall notify Landlord in writing of any defects within 24 hours of discovery…"'
          rows={5}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
        />

        <button
          onClick={explain}
          disabled={!clause.trim() || loading}
          className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Explaining…
            </>
          ) : (
            "Explain in Plain English"
          )}
        </button>

        {/* Result */}
        {result && (
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-3 text-sm text-slate-700 leading-relaxed">
            <p className="font-medium text-indigo-800 text-xs uppercase tracking-wide mb-2">Plain-English Explanation</p>
            {result}
          </div>
        )}

        {error && (
          <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            {error}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-slate-100 text-center">
        <a
          href="https://leaseplain.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-400 hover:text-indigo-600 transition-colors"
        >
          Powered by <span className="font-semibold text-indigo-600">LeasePlain</span>
        </a>
      </div>
    </div>
  );
}
