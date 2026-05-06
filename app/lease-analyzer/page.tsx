import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText, AlertTriangle, DollarSign, Lightbulb,
  ShieldCheck, Zap, ChevronRight, Upload, Eye, CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Lease Analyzer – Understand Any Lease in Minutes | LeasePlain",
  description:
    "Upload your residential lease and get a plain-English breakdown instantly. Our AI identifies red flags, explains every clause, and highlights your rights as a tenant.",
  keywords: [
    "ai lease analyzer", "lease analysis tool", "analyze lease agreement online",
    "lease review tool", "tenant lease checker", "lease clause analyzer",
  ],
  alternates: { canonical: "https://leaseplain.com/lease-analyzer" },
};

const analysisSection = [
  {
    icon: FileText,
    title: "Plain-English Summary",
    description:
      "Every lease is translated into clear, jargon-free language. You'll understand exactly what you're agreeing to before you sign.",
  },
  {
    icon: DollarSign,
    title: "Key Financial Terms",
    description:
      "Rent, security deposit, late fees, utilities, and any hidden costs are extracted and explained so there are no financial surprises.",
  },
  {
    icon: AlertTriangle,
    title: "Red Flag Detection",
    description:
      "Our AI flags unusual clauses, one-sided penalties, illegal provisions, and anything that puts you at a disadvantage.",
  },
  {
    icon: ShieldCheck,
    title: "Your Rights & Obligations",
    description:
      "Understand exactly what you can and cannot do — guests, pets, alterations, noise, and more — based on your specific lease.",
  },
  {
    icon: Lightbulb,
    title: "Questions to Ask Your Landlord",
    description:
      "We generate a list of specific, targeted questions based on your lease so you can negotiate from an informed position.",
  },
  {
    icon: Eye,
    title: "Unusual Clause Spotlight",
    description:
      "Any clause that deviates from standard practice is highlighted and explained so you know what you're giving up or gaining.",
  },
];

const steps = [
  {
    number: "01",
    title: "Upload Your Lease",
    description: "Upload a PDF or paste your lease text. We accept standard residential lease agreements in any format.",
  },
  {
    number: "02",
    title: "AI Reads Every Clause",
    description: "Our AI reads your entire lease, identifies every clause type, and maps it against tenant protection standards.",
  },
  {
    number: "03",
    title: "Get Your Plain-English Report",
    description: "Within seconds, receive a full breakdown covering all six analysis sections — clear, honest, and actionable.",
  },
];

const useCases = [
  "First-time renters who have never signed a lease",
  "Tenants renewing and want to check for changes",
  "Newcomers unfamiliar with Canadian rental law",
  "Anyone who wants to understand before they sign",
  "Tenants flagging issues before going to the LTB",
];

export default function LeaseAnalyzerPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Zap className="w-3.5 h-3.5" aria-hidden="true" />
              AI-Powered Lease Analysis
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              The AI Lease Analyzer Built for Tenants
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed">
              Upload your residential lease and get a complete, plain-English breakdown in seconds.
              Understand every clause, spot red flags, and know your rights — before you sign.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/upload"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
              >
                <Upload className="w-4 h-4" aria-hidden="true" />
                Upload Your Lease Free
              </Link>
              <Link
                href="/example-report"
                className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 font-semibold px-6 py-3.5 rounded-xl hover:bg-white transition-colors"
              >
                See an Example Report
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              Free to start · No account required · Not legal advice
            </p>
          </div>
        </section>

        {/* What we analyze */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">What the Analysis Covers</h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Every analysis report covers six key sections, giving you a complete picture of your lease.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {analysisSection.map((item) => (
                <div key={item.title} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 px-4 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">How It Works</h2>
              <p className="text-slate-500">Three steps from upload to understanding.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-blue-600 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Who Uses LeasePlain?</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                LeasePlain is built for anyone who has been handed a lease and felt overwhelmed.
                Most residential leases are 15–40 pages of dense legal language. Our analyzer is
                your first line of understanding — not a replacement for a lawyer, but an essential
                first step.
              </p>
              <ul className="flex flex-col gap-3">
                {useCases.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-3">Ready to understand your lease?</h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                Upload your lease now and get a plain-English analysis in under 60 seconds.
                No account required to get started.
              </p>
              <Link
                href="/upload"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-5 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                <Upload className="w-4 h-4" aria-hidden="true" />
                Upload Your Lease
              </Link>
              <p className="text-xs text-blue-200 mt-4">
                Not legal advice. Always consult a licensed attorney before signing.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
