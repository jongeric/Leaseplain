import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Los Angeles Lease Review: AI Lease Analyzer for LA Renters | LeasePlain",
  description:
    "Understand your Los Angeles lease in plain English. AI-powered analysis covering California landlord-tenant law, LA rent control, tenant rights, and lease red flags.",
  alternates: { canonical: "https://leaseplain.com/united-states/california/los-angeles" },
};

export default function LosAngelesPage() {
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
              <Link href="/united-states/california" className="hover:underline">California</Link>
              <ChevronRight className="w-3 h-3" />
              <span>Los Angeles</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" />
              Los Angeles, California
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight max-w-3xl">
              Los Angeles Lease Review: AI Lease Analyzer for LA Renters
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Los Angeles has some of the strongest tenant protections in the US, including rent control
              under the LA Rent Stabilization Ordinance. Our AI analyzes your LA lease and explains what
              it means for you — in plain English.
            </p>
            <div className="mt-8">
              <Link
                href="/upload"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Upload className="w-4 h-4" />
                Analyze My LA Lease
              </Link>
            </div>
          </div>
        </section>

        {/* Key info */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Los Angeles Rental Law: Key Points
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "LA Rent Stabilization Ordinance (RSO)",
                  body: "If your unit was built before October 1978, it&apos;s likely covered by LA&apos;s RSO. This caps annual rent increases and limits eviction grounds. Check whether your lease acknowledges RSO coverage.",
                },
                {
                  title: "Security Deposits",
                  body: "California caps security deposits at 1 month&apos;s rent for unfurnished units (2 months for furnished). LA landlords must return deposits within 21 days of move-out.",
                },
                {
                  title: "Just-Cause Eviction",
                  body: "Under AB 1482 and the LA RSO, most LA tenants have just-cause eviction protections. A landlord generally cannot evict you without a valid reason after 12 months of tenancy.",
                },
                {
                  title: "Habitability Standards",
                  body: "California law requires rentals to be habitable. Landlords must maintain heating, plumbing, structural safety, and pest control. Lease clauses attempting to shift these duties to tenants may be unenforceable.",
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
              <h2 className="text-3xl font-bold text-white mb-3">Renting in Los Angeles?</h2>
              <p className="text-blue-100 leading-relaxed max-w-xl">
                Upload your lease and get a plain-English breakdown before you sign. Know your rights.
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
