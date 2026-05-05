import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import { MOCK_ANALYSIS } from "@/lib/mockAnalysis";
import { LeaseAnalysis } from "@/lib/types";
import {
  FileText,
  DollarSign,
  AlertTriangle,
  HelpCircle,
  Lightbulb,
  ShieldCheck,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";

async function getAnalysis(id: string): Promise<LeaseAnalysis> {
  // In production this fetches from D1 via an API route.
  // For MVP, all IDs return the mock analysis.
  return { ...MOCK_ANALYSIS, id };
}

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

export default async function AnalysisPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const analysis = await getAnalysis(id);

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main className="flex-1 py-10 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>

          {/* Header */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  Lease Analysis Report
                </h1>
                {analysis.filename && (
                  <p className="text-sm text-slate-400 mt-0.5">
                    {analysis.filename}
                  </p>
                )}
                <p className="text-xs text-slate-400 mt-1">
                  Analyzed{" "}
                  {new Date(analysis.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>

          <DisclaimerBanner />

          <div className="mt-4 flex flex-col gap-4">
            {/* 1. Plain English Summary */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-indigo-600" />
                </div>
                <h2 className="font-bold text-slate-900">
                  Plain-English Summary
                </h2>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                {analysis.summary}
              </p>
            </section>

            {/* 2. Key Financial Terms */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-green-600" />
                </div>
                <h2 className="font-bold text-slate-900">Key Financial Terms</h2>
              </div>
              <div className="flex flex-col gap-2">
                {analysis.financialTerms.map((term) => (
                  <div
                    key={term.label}
                    className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 py-2.5 border-b border-slate-50 last:border-0"
                  >
                    <span className="text-sm font-medium text-slate-600 sm:w-48 flex-shrink-0">
                      {term.label}
                    </span>
                    <div className="flex-1">
                      <span className="text-sm font-semibold text-slate-900">
                        {term.value}
                      </span>
                      {term.note && (
                        <p className="text-xs text-slate-400 mt-0.5">
                          {term.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Red Flags */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                </div>
                <h2 className="font-bold text-slate-900">
                  Red Flags
                  {analysis.redFlags.length === 0 && (
                    <span className="ml-2 text-sm font-normal text-green-600">
                      None found
                    </span>
                  )}
                </h2>
              </div>
              {analysis.redFlags.length === 0 ? (
                <div className="flex items-center gap-2 text-green-700 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  No significant red flags were detected in this lease.
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {analysis.redFlags.map((flag) => (
                    <div
                      key={flag.title}
                      className={`rounded-xl border p-4 ${severityColors[flag.severity]}`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-sm">
                          {flag.title}
                        </span>
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded-full ${severityBadge[flag.severity]}`}
                        >
                          {flag.severity.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed opacity-90">
                        {flag.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* 4. Unclear or Missing Clauses */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                  <HelpCircle className="w-4 h-4 text-amber-500" />
                </div>
                <h2 className="font-bold text-slate-900">
                  Unclear or Missing Clauses
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                {analysis.unclearClauses.map((clause) => (
                  <div
                    key={clause.title}
                    className="bg-amber-50 border border-amber-100 rounded-xl p-4"
                  >
                    <p className="font-semibold text-amber-900 text-sm mb-1">
                      {clause.title}
                    </p>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      {clause.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Questions to Ask */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-blue-500" />
                </div>
                <h2 className="font-bold text-slate-900">
                  Questions to Ask Before Signing
                </h2>
              </div>
              <ul className="flex flex-col gap-2">
                {analysis.questionsToAsk.map((q, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {q}
                  </li>
                ))}
              </ul>
            </section>

            {/* 6. Negotiation Suggestions */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-purple-500" />
                </div>
                <h2 className="font-bold text-slate-900">
                  Tenant-Friendly Negotiation Suggestions
                </h2>
              </div>
              <ul className="flex flex-col gap-2.5">
                {analysis.negotiationSuggestions.map((s, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/upload"
              className="flex-1 text-center bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition-colors text-sm"
            >
              Analyze Another Lease
            </Link>
            <Link
              href="/dashboard"
              className="flex-1 text-center bg-white border border-slate-200 text-slate-700 font-semibold py-3 rounded-xl hover:bg-slate-50 transition-colors text-sm"
            >
              Back to Dashboard
            </Link>
          </div>

          <p className="text-center text-xs text-slate-400 mt-6">
            <strong>Disclaimer:</strong> This analysis is for informational
            purposes only and is not legal advice. Always consult a licensed
            attorney before signing any lease agreement.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
