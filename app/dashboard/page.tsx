import Link from "next/link";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import { getServerSession } from "@/lib/auth";
import { listAnalysesByUser } from "@/lib/db";
import { MOCK_ANALYSIS } from "@/lib/mockAnalysis";
import { LeaseAnalysis } from "@/lib/types";
import {
  FileText, Plus, Clock, AlertTriangle, CheckCircle,
} from "lucide-react";

export default async function DashboardPage() {
  const session = await getServerSession(await headers());

  if (!session) redirect("/login?redirect=/dashboard");

  // Load real analyses from D1, fall back to mock data in dev
  let analyses: LeaseAnalysis[] = await listAnalysesByUser(session.user.id);
  const isMock = analyses.length === 0;
  if (isMock) {
    analyses = [MOCK_ANALYSIS];
  }

  const redFlagTotal = analyses.reduce((sum, a) => sum + a.redFlags.length, 0);
  const cleanCount = analyses.filter((a) => a.redFlags.length === 0).length;

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main className="flex-1 py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Welcome back{session.user.name ? `, ${session.user.name.split(" ")[0]}` : ""}
              </h1>
              <p className="text-slate-500 text-sm mt-1">Your lease analysis history</p>
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

          {/* Everything is free */}
          <div className="mt-4 mb-6 flex items-center gap-2 bg-white border border-slate-100 rounded-xl px-4 py-3 shadow-sm text-sm text-slate-600">
            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" aria-hidden="true" />
            <span><span className="font-medium text-slate-900">All features free</span> · unlimited analyses, full reports</span>
          </div>

          {/* Mock data notice */}
          {isMock && (
            <div className="mb-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-700">
              <strong>Demo data:</strong> These are sample analyses. Your real history will appear here after your first upload.
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "Leases Analyzed", value: analyses.length, icon: FileText },
              { label: "Red Flags Found", value: redFlagTotal, icon: AlertTriangle },
              { label: "Clean Leases", value: cleanCount, icon: CheckCircle },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-center">
                <stat.icon className="w-5 h-5 text-indigo-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Analysis list */}
          <div className="flex flex-col gap-4">
            {analyses.map((analysis) => (
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
                        {analysis.filename ?? "Pasted lease text"}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(analysis.createdAt).toLocaleDateString("en-US", {
                          month: "short", day: "numeric", year: "numeric",
                        })}
                      </p>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed line-clamp-2">
                        {analysis.summary}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {analysis.redFlags.length > 0 ? (
                      <span className="inline-flex items-center gap-1 bg-red-50 text-red-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-red-100">
                        <AlertTriangle className="w-3 h-3" />
                        {analysis.redFlags.length} red flag{analysis.redFlags.length !== 1 ? "s" : ""}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-green-50 text-green-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-100">
                        <CheckCircle className="w-3 h-3" /> Clean
                      </span>
                    )}
                    <Link href={`/analysis/${analysis.id}`} className="text-indigo-600 text-sm font-medium hover:underline">
                      View &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
