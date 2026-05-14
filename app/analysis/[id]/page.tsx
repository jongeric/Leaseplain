import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import AnalysisContent from "./AnalysisContent";
import ShareButton from "./ShareButton";
import { getAnalysisById } from "@/lib/db";
import { FileText, ArrowLeft, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Lease Analysis Report | LeasePlain",
  description: "View your plain-English lease analysis — red flags, financial terms, unclear clauses, and questions to ask your landlord.",
  robots: { index: false, follow: false },
};

export default async function AnalysisPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ teaser?: string }>;
}) {
  const { id } = await params;
  const { teaser: teaserParam } = await searchParams;

  // Try to get metadata from D1 (filename, createdAt, teaser flag)
  const fromDB = await getAnalysisById(id);
  const isTeaser = teaserParam === "1" || fromDB?.teaser === true || (!fromDB && teaserParam !== "0");

  const filename = fromDB?.filename;
  const createdAt = fromDB?.createdAt ?? new Date().toISOString();

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main className="flex-1 py-10 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
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
                <h1 className="text-xl font-bold text-slate-900">Lease Analysis Report</h1>
                {filename && <p className="text-sm text-slate-400 mt-0.5">{filename}</p>}
                <p className="text-xs text-slate-400 mt-1">
                  Analyzed{" "}
                  {new Date(createdAt).toLocaleDateString("en-US", {
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
                  <Link href="/pricing" className="underline font-semibold">Upgrade to Pro</Link>{" "}
                  to unlock financial terms, red flags, unclear clauses, and negotiation tips.
                </span>
              </div>
            )}
          </div>

          <DisclaimerBanner />

          <div className="mt-4">
            <AnalysisContent id={id} isTeaser={isTeaser} />
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            {isTeaser ? (
              <Link href="/pricing" className="flex-1 text-center bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm">
                Upgrade to Pro for Full Analysis
              </Link>
            ) : (
              <Link href="/upload" className="flex-1 text-center bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm">
                Analyze Another Lease
              </Link>
            )}
            <ShareButton id={id} />
            <Link href="/dashboard" className="flex-1 text-center bg-white border border-slate-200 text-slate-700 font-semibold py-3 rounded-xl hover:bg-slate-50 transition-colors text-sm">
              Back to Dashboard
            </Link>
          </div>

          <p className="text-center text-xs text-slate-400 mt-6">
            <strong>Disclaimer:</strong> This analysis is for informational purposes only and is not legal advice. Always consult a licensed attorney before signing any lease agreement.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
