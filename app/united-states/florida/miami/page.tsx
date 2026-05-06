import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Miami Lease Review: AI Lease Analyzer for Miami Renters | LeasePlain",
  description:
    "Understand your Miami, FL lease in plain English. AI-powered analysis covering Florida landlord-tenant law, Miami tenant rights, security deposits, and lease red flags.",
  alternates: { canonical: "https://leaseplain.com/united-states/florida/miami" },
};

export default function MiamiPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/united-states" className="hover:underline">United States</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/united-states/florida" className="hover:underline">Florida</Link>
              <ChevronRight className="w-3 h-3" />
              <span>Miami</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" />
              Miami, Florida
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight max-w-3xl">
              Miami Lease Review: AI Lease Analyzer for Miami Renters
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Miami&apos;s competitive rental market means leases can include aggressive clauses. Our AI
              analyzes your Miami lease and flags anything unusual — in plain English, in seconds.
            </p>
            <div className="mt-8">
              <Link
                href="/upload"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Upload className="w-4 h-4" />
                Analyze My Miami Lease
              </Link>
            </div>
          </div>
        </section>

        {/* Key info */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              What Miami Renters Should Watch For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "High Security Deposits",
                  body: "Miami landlords sometimes request deposits exceeding one month&apos;s rent. Florida law doesn&apos;t cap the amount, so review your lease carefully.",
                },
                {
                  title: "Hurricane Preparedness Clauses",
                  body: "Some Miami leases include clauses about hurricane shutters, outdoor furniture, and responsibility for storm damage. Confirm who bears those costs.",
                },
                {
                  title: "Condo Association Rules",
                  body: "Many Miami rentals are condo units. Your lease may require compliance with condo rules — ask for a copy before signing.",
                },
                {
                  title: "Short-Term Rental Restrictions",
                  body: "Miami has strict rules on short-term rentals. If you plan to sublet on platforms like Airbnb, check both your lease and local ordinances.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">Renting in Miami?</h2>
              <p className="text-blue-100 leading-relaxed max-w-xl">
                Upload your lease and get a plain-English breakdown before you sign.
              </p>
            </div>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap flex-shrink-0"
            >
              <Upload className="w-4 h-4" />
              Analyze My Lease
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
