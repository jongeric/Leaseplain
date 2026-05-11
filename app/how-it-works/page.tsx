import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Upload, Cpu, FileText, CheckCircle, AlertTriangle,
  DollarSign, Lightbulb, ShieldCheck, Eye, ChevronRight,
} from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "How LeasePlain Works – AI Lease Analysis in 3 Steps",
  description:
    "Learn how LeasePlain analyzes your residential lease. Upload a PDF, our AI reads every clause, and you get a plain-English report in seconds.",
  alternates: { canonical: "https://leaseplain.com/how-it-works" },
};

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Your Lease",
    description:
      "Upload your lease as a PDF, or paste the text directly. LeasePlain accepts standard residential lease agreements from any province. Your document is processed securely and never stored.",
    details: [
      "Supports PDF and plain-text formats",
      "Works with leases from Ontario, BC, Alberta, and more",
      "No account required for your first analysis",
      "Your lease is never saved or shared",
    ],
  },
  {
    icon: Cpu,
    number: "02",
    title: "AI Reads Every Clause",
    description:
      "Our AI reads your entire lease — every page, every clause, every line of fine print. It identifies clause types, cross-references tenant protection standards, and flags anything unusual or one-sided.",
    details: [
      "Reads the full document, not just key sections",
      "Identifies over 40 distinct lease clause types",
      "Cross-references Ontario RTA and provincial standards",
      "Detects potentially illegal or unenforceable clauses",
    ],
  },
  {
    icon: FileText,
    number: "03",
    title: "Get Your Plain-English Report",
    description:
      "Within seconds you receive a structured, plain-English report. It covers your key financial terms, rights and obligations, red flags, unusual clauses, and a list of questions to ask your landlord.",
    details: [
      "Plain-English summary of the entire lease",
      "Red flags highlighted with clear explanations",
      "Your rights and obligations listed clearly",
      "Specific questions to ask before signing",
    ],
  },
];

const reportSections = [
  { icon: FileText, label: "Plain-English Summary", desc: "Overall summary of what you're agreeing to" },
  { icon: DollarSign, label: "Financial Terms", desc: "Rent, deposit, fees, utilities, increases" },
  { icon: AlertTriangle, label: "Red Flags", desc: "Unusual, one-sided, or potentially illegal clauses" },
  { icon: ShieldCheck, label: "Rights & Obligations", desc: "What you can and cannot do as a tenant" },
  { icon: Lightbulb, label: "Questions to Ask", desc: "Targeted questions based on your specific lease" },
  { icon: Eye, label: "Unusual Clauses", desc: "Anything that deviates from standard practice" },
];

const faqs = [
  {
    q: "How long does the analysis take?",
    a: "Most analyses complete in 30–60 seconds, depending on the length of your lease. Longer leases (20+ pages) may take slightly longer.",
  },
  {
    q: "What file formats are supported?",
    a: "We support PDF uploads and plain-text paste. For best results, use a digital PDF (not a scanned image). OCR support for scanned documents is on our roadmap.",
  },
  {
    q: "Is my lease document kept private?",
    a: "Yes. Your document is processed in real-time and immediately discarded after your report is generated. We do not store, sell, or share your lease.",
  },
  {
    q: "Does this work for all Canadian provinces?",
    a: "LeasePlain analyzes any residential lease. Our red-flag detection is strongest for Ontario leases (RTA 2006), with support for BC, Alberta, and other provinces improving continuously.",
  },
  {
    q: "Can I use this instead of a lawyer?",
    a: "No. LeasePlain is an informational tool, not legal advice. It helps you understand your lease faster and identify areas to discuss with a legal professional — it does not replace one.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              How LeasePlain Works
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Upload your lease, let AI do the reading, and get a plain-English report in under a
              minute. Here's exactly what happens at each step.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto flex flex-col gap-16">
            {steps.map((step, i) => (
              <div key={step.number} className="grid sm:grid-cols-5 gap-8 items-start">
                <div className="sm:col-span-2 flex sm:flex-col items-center sm:items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Step {step.number}</p>
                    <h2 className="text-2xl font-bold text-slate-900">{step.title}</h2>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <p className="text-slate-600 leading-relaxed mb-5">{step.description}</p>
                  <ul className="flex flex-col gap-2.5">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                {i < steps.length - 1 && (
                  <div className="sm:col-span-5 border-t border-slate-100" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Report sections */}
        <section className="py-16 px-4 bg-slate-50 border-t border-slate-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">What's in Your Report</h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Every analysis produces a structured report covering these six sections.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {reportSections.map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-slate-100 p-5 flex items-start gap-4 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-4 h-4 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-0.5">{s.label}</p>
                    <p className="text-xs text-slate-500">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Common Questions</h2>
            <div className="flex flex-col divide-y divide-slate-100">
              {faqs.map((faq) => (
                <div key={faq.q} className="py-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Try it on your lease right now</h2>
            <p className="text-blue-100 mb-8">
              Free to start. No account required. Your lease stays private.
            </p>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
            >
              <Upload className="w-4 h-4" aria-hidden="true" />
              Upload My Lease
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <p className="text-xs text-blue-200 mt-5">
              Not legal advice. Always consult a licensed attorney before signing.
            </p>
          </div>
        </section>
      

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "How does LeasePlain analyze a lease?", a: "You upload a PDF or paste the lease text. LeasePlain sends the document to Claude, Anthropic's AI, which reads the entire lease and returns a structured report covering financial terms, red flags, unclear clauses, questions to ask your landlord, and negotiation suggestions." },
                  { q: "Is LeasePlain's analysis based on my specific province?", a: "Yes. The AI is prompted to flag clauses relative to Canadian and US residential tenancy law standards. You can specify your province when uploading so the analysis is tailored to your local rules." },
                  { q: "How long does it take to analyze a lease?", a: "Most analyses take 30–60 seconds. LeasePlain processes the full lease document — not just a summary — to ensure thorough coverage. Longer leases may take up to a minute." },
                  { q: "What format should my lease be in?", a: "LeasePlain accepts PDF files up to 10MB and plain text pasted directly. Most landlord-provided lease PDFs work immediately. If your lease is a scanned image, convert it to text first using a PDF OCR tool." },
                  { q: "What do I do after I get my LeasePlain analysis?", a: "Review each flagged item carefully. For red flags, ask your landlord to explain or amend the clause. Use the negotiation suggestions as talking points. For serious concerns, share the analysis with a tenant legal clinic before signing." }
                ]} />
              </div>
      </main>

      <Footer />
    </div>
  );
}
