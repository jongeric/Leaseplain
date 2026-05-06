import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import { MOCK_ANALYSIS } from "@/lib/mockAnalysis";
import { LeaseAnalysis } from "@/lib/types";
import { getAnalysisById } from "@/lib/db";
import {
  FileText,
  DollarSign,
  AlertTriangle,
  HelpCircle,
  Lightbulb,
  ShieldCheck,
  ArrowLeft,
  CheckCircle,
  Lock,
} from "lucide-react";

async function getAnalysis(id: string): Promise<LeaseAnalysis> {
  const fromDB = await getAnalysisById(id);
  if (fromDB) return fromDB;
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

function PaywallOverlay({ count, noun }: { count: number; noun: string }) {
  return (
    <div className="relative">
      {/* Blurred preview rows */}
      <div className="flex flex-col gap-3 pointer-events-none select-none" aria-hidden="true">
        {Array.from({ length: Math.min(count, 3) }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-red-200 bg-red-50 p-4 blur-sm opacity-50"
          >
            <div className="h-4 bg-red-200 rounded w-1/2 mb-2" />
            <div className="h-3 bg-red-100 rounded w-full" />
          </div>
        ))}
      </div>

      {/* Lock overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-[2px] rounded-xl">
        <div className="text-center px-6">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <Lock className="w-6 h-6 text-blue-600" />
          </div>
          <p className="font-semibold text-slate-900 mb-1">
            {count} {noun}{count !== 1 ? "s" : ""} found
          </p>
          <p className="text-sm text-slate-500 mb-4">
            Sign up free to unlock the full analysis
          </p>
          <Link
            href="/login?redirect=/upload"
            className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Sign up free — it&apos;s free
          </Link>
        </div>
      </div>
    </div>
  );
}

export default async function AnalysisPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ teaser?: string }>;
}) {
  const { id } = await params;
  const { teaser: teaserParam } = await searchParams;
  const analysis = await getAnalysis(id);

  // Teaser mode: guest analyses (from URL param in dev; from DB flag in prod)
  const isTeaser = teaserParam === "1" || analysis.teaser === true;

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
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-blue-600" />
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

            {isTeaser && (
              <div className="mt-4 flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-sm text-blue-800">
                <Lock className="w-4 h-4 flex-shrink-0" />
                <span>
                  You&apos;re viewing a <strong>free preview</strong>.{" "}
                  <Link href="/login?redirect=/upload" className="underline font-semibold">
                    Sign up free
                  </Link>{" "}
                  to unlock red flags, unclear clauses, and negotiation tips.
                </span>
              </div>
            )}
          </div>

          <DisclaimerBanner />

          <div className="mt-4 flex flex-col gap-4">
            {/* 1. Plain English Summary — always visible */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="font-bold text-slate-900">Plain-English Summary</h2>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">{analysis.summary}</p>
            </section>

            {/* 2. Key Financial Terms — always visible */}
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
                      <span className="text-sm font-semibold text-slate-900">{term.value}</span>
                      {term.note && (
                        <p className="text-xs text-slate-400 mt-0.5">{term.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Red Flags — gated for guests */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                </div>
                <h2 className="font-bold text-slate-900">
                  Red Flags
                  {!isTeaser && analysis.redFlags.length === 0 && (
                    <span className="ml-2 text-sm font-normal text-green-600">None found</span>
                  )}
                </h2>
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
                    <div
                      key={flag.title}
                      className={`rounded-xl border p-4 ${severityColors[flag.severity]}`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-sm">{flag.title}</span>
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded-full ${severityBadge[flag.severity]}`}
                        >
                          {flag.severity.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed opacity-90">{flag.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* 4. Unclear Clauses — gated for guests */}
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
                    <div
                      key={clause.title}
                      className="bg-amber-50 border border-amber-100 rounded-xl p-4"
                    >
                      <p className="font-semibold text-amber-900 text-sm mb-1">{clause.title}</p>
                      <p className="text-sm text-amber-800 leading-relaxed">{clause.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* 5. Questions to Ask — gated for guests */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-blue-500" />
                </div>
                <h2 className="font-bold text-slate-900">Questions to Ask Before Signing</h2>
              </div>

              {isTeaser ? (
                <div className="relative">
                  <ul className="flex flex-col gap-2 pointer-events-none select-none blur-sm opacity-40" aria-hidden="true">
                    {analysis.questionsToAsk.slice(0, 3).map((q, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {q}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Link
                      href="/login?redirect=/upload"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                    >
                      <Lock className="w-4 h-4" />
                      Sign up free to unlock
                    </Link>
                  </div>
                </div>
              ) : (
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
              )}
            </section>

            {/* 6. Negotiation Suggestions — gated for guests */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-purple-500" />
                </div>
                <h2 className="font-bold text-slate-900">Tenant-Friendly Negotiation Suggestions</h2>
              </div>

              {isTeaser ? (
                <div className="relative">
                  <ul className="flex flex-col gap-2.5 pointer-events-none select-none blur-sm opacity-40" aria-hidden="true">
                    {analysis.negotiationSuggestions.slice(0, 3).map((s, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Link
                      href="/login?redirect=/upload"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                    >
                      <Lock className="w-4 h-4" />
                      Sign up free to unlock
                    </Link>
                  </div>
                </div>
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

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            {isTeaser ? (
              <Link
                href="/login?redirect=/upload"
                className="flex-1 text-center bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm"
              >
                Sign Up Free for Full Analysis
              </Link>
            ) : (
              <Link
                href="/upload"
                className="flex-1 text-center bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm"
              >
                Analyze Another Lease
              </Link>
            )}
            <Link
              href="/dashboard"
              className="flex-1 text-center bg-white border border-slate-200 text-slate-700 font-semibold py-3 rounded-xl hover:bg-slate-50 transition-colors text-sm"
            >
              Back to Dashboard
            </Link>
          </div>

          <p className="text-center text-xs text-slate-400 mt-6">
            <strong>Disclaimer:</strong> This analysis is for informational purposes only and is
            not legal advice. Always consult a licensed attorney before signing any lease agreement.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
