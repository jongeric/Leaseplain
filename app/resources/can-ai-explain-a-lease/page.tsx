import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, ChevronRight, Upload } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Can AI Explain a Lease Agreement? What to Expect | LeasePlain",
  description:
    "Discover what AI does well when explaining lease agreements, where it struggles, and how to use AI lease explanations effectively.",
  alternates: { canonical: "https://leaseplain.com/resources/can-ai-explain-a-lease" },
};

export default function CanAIExplainALeasePage() {
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
              <span>Can AI Explain a Lease?</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Zap className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Resource
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Can AI Explain a Lease Agreement? What to Expect
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Modern AI is surprisingly good at translating lease language into plain English.
              Here's what it does well, what it struggles with, and how to use it effectively.
            </p>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Yes, AI Can Explain Most Lease Clauses
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Modern large language models — the AI technology behind tools like LeasePlain —
                  have been trained on vast amounts of legal text, including lease agreements,
                  tenancy legislation, and court decisions. This gives them a solid grasp of the
                  language and patterns used in residential leases.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  For the standard clauses found in most Canadian residential leases, AI can
                  translate dense legalese into plain language with a high degree of accuracy.
                  You don't need a law degree to understand what your lease says when AI is
                  doing the translation.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  The short answer: yes, AI can explain most leases — and for the majority of
                  renters signing standard residential leases, it provides everything they need
                  to understand what they're agreeing to.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What AI Does Well</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  AI lease analyzers excel at the core task of explanation:
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      heading: "Explaining standard clauses",
                      detail: "Security deposit terms, rent payment requirements, termination procedures, notice periods, maintenance responsibilities — AI handles all of these accurately and clearly.",
                    },
                    {
                      heading: "Identifying red flags",
                      detail: "AI is trained to recognize clauses that are unusual, potentially illegal (for Ontario's RTA), or worth questioning — and to explain why they matter.",
                    },
                    {
                      heading: "Summarizing key dates and amounts",
                      detail: "Rent due date, lease end date, notice periods, deposit amounts — AI pulls these out clearly so you can verify everything at a glance.",
                    },
                    {
                      heading: "Comparing against Ontario standards",
                      detail: "AI tools focused on Canadian residential leases understand the RTA requirements and can flag where a landlord's lease deviates from the norm.",
                    },
                  ].map((item) => (
                    <li key={item.heading} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2" />
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">{item.heading}</p>
                        <p className="text-sm text-slate-700 leading-relaxed">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What AI Struggles With</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  AI is not perfect. There are situations where its analysis may be less reliable:
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      heading: "Highly unusual or custom clauses",
                      detail: "If a landlord has written their own unique clause that doesn't follow standard patterns, AI may not fully understand its implications — especially if it's deliberately obscure.",
                    },
                    {
                      heading: "Province-specific edge cases",
                      detail: "While AI handles common Ontario scenarios well, unusual edge cases — particularly those that have evolved through recent LTB decisions — may not be in its training data.",
                    },
                    {
                      heading: "Anything requiring legal judgment",
                      detail: "Questions like 'can I break my lease in this specific situation?' or 'do I have a valid claim against my landlord?' require a lawyer's judgment. AI can explain the relevant terms, but cannot give you legal advice.",
                    },
                    {
                      heading: "Poor-quality scan PDFs",
                      detail: "If your lease is a low-quality scanned document, AI may struggle to read it accurately. Typed or digital PDFs work best.",
                    },
                  ].map((item) => (
                    <li key={item.heading} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2" />
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">{item.heading}</p>
                        <p className="text-sm text-slate-700 leading-relaxed">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Use AI Lease Explanations Effectively
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Getting the most out of AI lease analysis is straightforward:
                </p>
                <ol className="space-y-4">
                  {[
                    {
                      step: "Read the AI summary alongside the original lease",
                      detail: "Don't rely solely on the AI summary. Use it as a guide to understand the original text — then read the actual clause yourself.",
                    },
                    {
                      step: "Use it as a starting point, not an endpoint",
                      detail: "The AI explanation is your first step in understanding the lease. It surfaces what matters — you then decide what to ask about or negotiate.",
                    },
                    {
                      step: "Follow up on flagged clauses",
                      detail: "If the AI flags something, take it seriously. Ask your landlord for clarification, or consult a tenant helpline if the issue seems significant.",
                    },
                    {
                      step: "Consult a professional for anything complex",
                      detail: "If you're dealing with a dispute, an unusual lease, or significant money at stake, supplement AI with professional advice from a tenant rights organization or lawyer.",
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
            </div>

            {/* Sidebar */}

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "Can AI really explain a legal lease agreement?", a: "Yes. Modern AI models like Claude (which powers LeasePlain) are highly capable at reading legal text and translating it into plain English. They can identify key terms, flag unusual clauses, and explain what provisions mean in practice." },
                  { q: "What parts of a lease is AI best at explaining?", a: "AI excels at explaining standard clauses: rent terms, deposit rules, termination procedures, maintenance responsibilities, and common fee structures. It is less reliable for highly unusual clauses or situations requiring professional legal judgment." },
                  { q: "Is AI lease explanation legally binding?", a: "No. AI-generated explanations are for informational purposes only and are not legal advice. For binding interpretations, consult a lawyer. Use AI to understand your lease, not as a legal opinion." },
                  { q: "How does LeasePlain's AI explain a lease?", a: "You upload a PDF or paste the text. The AI reads the full document, identifies the key provisions, and generates a structured report: summary, financial terms, red flags, unclear clauses, questions to ask, and negotiation suggestions — all in plain English." },
                  { q: "What should I do after getting an AI explanation of my lease?", a: "Review each flagged item. If something is marked as a red flag or unclear clause, ask your landlord to explain or amend it before signing. For serious concerns, consult a tenant legal clinic or lawyer." }
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
                    { label: "What Is an AI Lease Analyzer?", href: "/resources/what-is-ai-lease-analyzer" },
                    { label: "AI Lease Review vs. Lawyer", href: "/resources/ai-lease-review-vs-lawyer" },
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
