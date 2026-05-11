import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, ChevronRight, Upload } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "What Is an AI Lease Analyzer? How It Works | LeasePlain",
  description:
    "Learn what an AI lease analyzer is, how it works, what it can and cannot do, and how LeasePlain uses AI to explain your lease in plain English.",
  alternates: { canonical: "https://leaseplain.com/resources/what-is-ai-lease-analyzer" },
};

export default function WhatIsAILeaseAnalyzerPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/resources" className="hover:underline">Resources</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/resources/ai-lease-review" className="hover:underline">AI Lease Review</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>What Is an AI Lease Analyzer?</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Zap className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Resource
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              What Is an AI Lease Analyzer? How It Works and What It Can Do
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              AI lease analyzers are changing how renters understand their contracts. Here's
              exactly what the technology does, how LeasePlain's AI works, and what its
              limitations are.
            </p>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Is an AI Lease Analyzer?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  An AI lease analyzer is software that reads a lease agreement and translates its
                  legal language into plain English. Instead of wading through dense legal text,
                  you get a clear summary of what each clause means — and a list of anything
                  unusual or potentially problematic.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Unlike a template checklist, an AI analyzer reads <em>your specific lease</em>.
                  It identifies the actual clauses in your document, not just generic categories.
                  This makes it significantly more useful than a generic guide for understanding
                  what you're agreeing to.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  AI lease analysis is not legal advice and cannot replace a lawyer in complex
                  situations — but it gives most renters a clear picture of what they're signing
                  before they need to involve a lawyer.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How LeasePlain's AI Works</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  LeasePlain uses large language models trained on legal texts to analyze
                  residential lease agreements. The process is straightforward:
                </p>
                <ol className="space-y-4">
                  {[
                    {
                      step: "Upload your lease",
                      detail: "Upload your lease as a PDF or paste the text directly. LeasePlain accepts the most common formats used for Ontario residential leases.",
                    },
                    {
                      step: "AI reads and analyzes each clause",
                      detail: "The AI processes each section of your lease, comparing it against standard lease structures and known problematic patterns.",
                    },
                    {
                      step: "Plain-English summary generated",
                      detail: "You receive a clause-by-clause breakdown in plain English — what each section means, what it requires of you, and whether it raises any concerns.",
                    },
                    {
                      step: "Red flags highlighted",
                      detail: "Any clauses that are potentially illegal, unusual, or worth negotiating are flagged clearly, with an explanation of why they matter.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">{item.step}</p>
                        <p className="text-sm text-slate-700 leading-relaxed">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What AI Lease Review Can and Cannot Do
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                    <h3 className="font-bold text-green-900 mb-3">AI Can</h3>
                    <ul className="space-y-2">
                      {[
                        "Summarize your lease in plain English",
                        "Flag potentially illegal or unusual clauses",
                        "Explain what each term means for you",
                        "Identify key dates, amounts, and obligations",
                        "Compare clauses against Ontario RTA standards",
                        "Save you hours of confusing reading",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                    <h3 className="font-bold text-red-900 mb-3">AI Cannot</h3>
                    <ul className="space-y-2">
                      {[
                        "Provide legal advice",
                        "Represent you in court or at the LTB",
                        "Guarantee outcomes in disputes",
                        "Negotiate on your behalf",
                        "Make decisions about your specific situation",
                        "Replace a lawyer for complex matters",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Is AI Lease Review Accurate?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  For standard residential lease clauses — rent terms, security deposits,
                  termination, maintenance, entry notice, and common additions — AI analysis is
                  highly accurate. The technology has been trained on thousands of lease agreements
                  and is well-suited to recognizing patterns in legal language.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  For unusual, highly custom, or commercial-style clauses, the analysis may be
                  less precise. If your lease contains anything out of the ordinary — unusual
                  financial arrangements, complex subletting structures, or commercial-use
                  provisions — you should supplement the AI analysis with advice from a tenant
                  rights organization or a lawyer.
                </p>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <strong>Recommended approach:</strong> Use AI analysis to understand your
                    lease and spot potential issues. If the AI flags something significant or
                    you're unsure, consult a lawyer or tenant helpline for guidance on that
                    specific clause.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "What is an AI lease analyzer?", a: "An AI lease analyzer is a tool that uses artificial intelligence to read a lease agreement and automatically identify important terms, unusual clauses, potential red flags, and items worth negotiating — all explained in plain English." },
                  { q: "How does LeasePlain's AI analyzer work?", a: "You upload a PDF or paste text. LeasePlain sends the document to Claude (Anthropic's AI model), which reads the full lease and generates a structured report covering financial terms, red flags, unclear clauses, questions to ask, and negotiation suggestions." },
                  { q: "What are the limitations of an AI lease analyzer?", a: "AI analyzers are excellent for flagging common problems and explaining legal language, but they are not lawyers. They cannot predict how a tribunal would rule on a specific clause, advise on strategy, or represent you in a dispute. Use AI review as a starting point, not a final answer." },
                  { q: "Is LeasePlain's AI trained on Canadian law?", a: "LeasePlain uses Claude, a general-purpose frontier AI model, guided by prompts specifically focused on Canadian and US residential tenancy law. The analysis reflects common provincial standards, though you should verify findings against your specific province's rules." },
                  { q: "How is LeasePlain different from ChatGPT for lease review?", a: "LeasePlain is purpose-built for lease review — it provides a structured report with specific sections (financial terms, red flags, negotiation tips), stores your analysis for future reference, and includes Canadian jurisdiction-specific context. A generic ChatGPT conversation lacks this structure and persistence." }
                ]} />
              </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">AI Lease Review</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and get a plain-English breakdown in seconds.
                </p>
                <Link
                  href="/upload"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                >
                  <Upload className="w-4 h-4" aria-hidden="true" />
                  Analyze My Lease
                </Link>
                <p className="text-xs text-blue-200 mt-3 text-center">Not legal advice</p>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "AI Lease Review vs. Lawyer", href: "/resources/ai-lease-review-vs-lawyer" },
                    { label: "Can AI Explain a Lease?", href: "/resources/can-ai-explain-a-lease" },
                    { label: "Try the Lease Analyzer", href: "/lease-analyzer" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                        <ChevronRight className="w-3 h-3" aria-hidden="true" />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
