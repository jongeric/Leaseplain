import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import { FileText, Plus, Clock, AlertTriangle, CheckCircle } from "lucide-react";

const mockAnalyses = [
  {
    id: "1",
    filename: "123-main-st-lease.pdf",
    address: "123 Main St, Apt 4B",
    date: "May 3, 2026",
    status: "complete",
    redFlags: 3,
    summary: "12-month lease at $1,850/month. Three red flags found: auto-renewal clause, unclear subletting policy, and a broad entry-without-notice provision.",
  },
  {
    id: "2",
    filename: "oak-avenue-lease.pdf",
    address: "45 Oak Ave, Unit 2",
    date: "Apr 28, 2026",
    status: "complete",
    redFlags: 1,
    summary: "Month-to-month lease at $1,200/month. One red flag: unusually high late fee structure (10% after day 1).",
  },
  {
    id: "3",
    filename: "riverside-lease-draft.pdf",
    address: "789 Riverside Dr",
    date: "Apr 15, 2026",
    status: "complete",
    redFlags: 0,
    summary: "Standard 12-month lease at $2,100/month. No major red flags. Tenant-friendly terms overall.",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main className="flex-1 py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
              <p className="text-slate-500 text-sm mt-1">
                Your lease analysis history
              </p>
            </div>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-4 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors text-sm"
            >
              <Plus className="w-4 h-4" />
              Analyze New Lease
            </Link>
          </div>

          <DisclaimerBanner />

          {/* Mock auth notice */}
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-700 mb-8">
            <strong>Demo mode:</strong> You&apos;re viewing sample analyses. Sign in to save and access your real lease history.{" "}
            <Link href="/login" className="underline font-medium">Sign in</Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "Leases Analyzed", value: "3", icon: FileText },
              { label: "Red Flags Found", value: "4", icon: AlertTriangle },
              { label: "Clean Leases", value: "1", icon: CheckCircle },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-center"
              >
                <stat.icon className="w-5 h-5 text-indigo-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Analysis history */}
          <div className="flex flex-col gap-4">
            {mockAnalyses.map((analysis) => (
              <div
                key={analysis.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-slate-900 text-sm truncate">
                        {analysis.address}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {analysis.date} &middot; {analysis.filename}
                      </p>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                        {analysis.summary}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {analysis.redFlags > 0 ? (
                      <span className="inline-flex items-center gap-1 bg-red-50 text-red-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-red-100">
                        <AlertTriangle className="w-3 h-3" />
                        {analysis.redFlags} red flag{analysis.redFlags !== 1 ? "s" : ""}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-green-50 text-green-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-100">
                        <CheckCircle className="w-3 h-3" />
                        Clean
                      </span>
                    )}
                    <Link
                      href={`/analysis/${analysis.id}`}
                      className="text-indigo-600 text-sm font-medium hover:underline"
                    >
                      View &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state (hidden when there are results) */}
          {mockAnalyses.length === 0 && (
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-12 text-center">
              <FileText className="w-10 h-10 text-slate-300 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-700 mb-2">No analyses yet</h3>
              <p className="text-slate-400 text-sm mb-6">
                Upload your first lease to get started.
              </p>
              <Link
                href="/upload"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors text-sm"
              >
                <Plus className="w-4 h-4" />
                Analyze a Lease
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
