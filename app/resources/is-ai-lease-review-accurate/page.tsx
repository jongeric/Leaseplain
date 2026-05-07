import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { CheckCircle, XCircle, AlertTriangle, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Is AI Lease Review Accurate? What AI Can and Can't Catch | LeasePlain",
  description:
    "How accurate is AI lease review? What can AI reliably identify in a lease, where does it fall short, and when does a human lawyer add irreplaceable value? An honest assessment.",
  keywords: [
    "is ai lease review accurate",
    "ai lease analysis accuracy",
    "ai vs lawyer lease review",
    "how accurate is leaseplain",
    "ai lease review limitations",
  ],
  alternates: { canonical: "https://leaseplain.com/resources/is-ai-lease-review-accurate" },
};

const aiStrengths = [
  {
    category: "Clause identification",
    accuracy: "High",
    detail:
      "AI is very good at identifying and locating specific clause types in lease documents — rent clauses, security deposit terms, maintenance responsibilities, notice requirements, etc.",
  },
  {
    category: "Plain-English translation",
    accuracy: "High",
    detail:
      "Converting dense legal language into plain English is a core strength of modern language models. AI can reliably explain what a clause says in plain terms.",
  },
  {
    category: "Standard deviation detection",
    accuracy: "Medium-High",
    detail:
      "Identifying clauses that deviate significantly from standard residential lease terms is something AI handles well when trained on representative lease data.",
  },
  {
    category: "Financial term extraction",
    accuracy: "High",
    detail:
      "Extracting specific numbers — rent amounts, deposit amounts, fee structures, notice periods — and presenting them clearly is a reliable AI capability.",
  },
  {
    category: "Question generation",
    accuracy: "High",
    detail:
      "Generating relevant questions to ask a landlord based on the specific content of a lease is something AI does well.",
  },
];

const aiWeaknesses = [
  {
    category: "Enforceability assessment",
    limitation: "High",
    detail:
      "AI cannot reliably determine whether a specific clause is enforceable in your specific jurisdiction, given current case law and recent legislative changes.",
  },
  {
    category: "Context across sections",
    limitation: "Medium",
    detail:
      "Long leases (40+ pages) with clauses that reference each other across sections can confuse AI models — it may miss interactions between clauses that a careful human reader would catch.",
  },
  {
    category: "Scanned document quality",
    limitation: "Variable",
    detail:
      "Poorly scanned or handwritten documents can introduce OCR errors that cascade into analysis errors. The garbage-in-garbage-out principle applies.",
  },
  {
    category: "Recent legislative changes",
    limitation: "High",
    detail:
      "AI models have a training cutoff date. Recent changes to provincial or state tenancy law after that date won't be reflected in the analysis.",
  },
  {
    category: "Your personal circumstances",
    limitation: "Absolute",
    detail:
      "AI knows nothing about your personal situation, financial position, rental history, or specific needs. Analysis is of the document only.",
  },
];

const faqs = [
  {
    q: "How accurate is LeasePlain's lease analysis?",
    a: "LeasePlain is highly reliable for the tasks AI does well: clause identification, plain-English explanation, financial term extraction, and flagging deviations from standard terms. It is less reliable for enforceability assessments, jurisdiction-specific nuances, and interactions between clauses in very complex leases. We are transparent about these limitations throughout the product.",
  },
  {
    q: "Can AI miss important clauses in a lease?",
    a: "Yes, particularly in very long leases, poorly formatted documents, or leases with unusual structure. AI is also less reliable for clauses that depend heavily on context across multiple sections of a document. This is one reason LeasePlain recommends using its analysis as a starting point rather than a complete substitute for careful reading.",
  },
  {
    q: "Has AI lease review been tested against lawyer review?",
    a: "Formal head-to-head studies are limited. The general consensus among legal technology experts is that AI tools are effective for what lawyers call 'first-pass' review — identifying issues quickly — but that qualified lawyers add the most value in assessing enforceability, advising on strategy, and evaluating context that AI misses.",
  },
  {
    q: "Is AI lease review better than no review at all?",
    a: "Yes — significantly. Most tenants who sign leases do so with essentially no analysis. An AI-generated plain-English summary, even with its limitations, is far better than signing without understanding what you're agreeing to. The key is understanding what AI can and can't do, and supplementing it with professional advice when the stakes are high.",
  },
  {
    q: "What types of leases is AI least reliable for?",
    a: "Commercial leases (highly complex and jurisdiction-specific), leases with extensive cross-references between sections, leases with unusual or non-standard structures, and leases involving high-value negotiations where enforceability matters significantly. For all of these, professional legal review is strongly recommended.",
  },
];

export default function IsAILeaseReviewAccuratePage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        {/* Hero */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <BreadcrumbNav
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: "Is AI Lease Review Accurate?" },
              ]}
              className="text-indigo-300 mb-6 [&_a]:text-indigo-300 [&_a:hover]:text-white [&_span.text-slate-900]:text-white"
            />
            <h1 className="text-4xl font-bold mb-4">Is AI Lease Review Accurate?</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              An honest assessment of what AI can and can&apos;t catch in a residential lease — and
              when you should still consult a human professional.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          {/* Direct answer */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">The Honest Answer</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              AI lease review is <strong>highly accurate for what it&apos;s designed to do</strong> —
              identifying clauses, translating legal language, flagging deviations from standard
              terms, and surfacing potential issues for closer examination.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              It is <strong>less reliable</strong> — and should not be relied upon — for
              enforceability assessments, jurisdiction-specific legal strategy, predicting how a
              court would rule on a disputed clause, or accounting for your personal
              circumstances.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The right mental model: AI lease review is like a very thorough, very fast
              first-pass reader that flags everything worth looking at. It is not a lawyer.
              For most standard residential leases, an AI analysis plus your own careful reading
              of flagged sections is sufficient. For high-stakes situations, AI is the starting
              point — professional advice is the endpoint.
            </p>
          </section>

          {/* What AI does well */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              What AI Does Well
            </h2>
            <div className="space-y-4">
              {aiStrengths.map((item) => (
                <div key={item.category} className="border border-slate-100 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-900 text-sm">{item.category}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">
                      {item.accuracy} accuracy
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Where AI falls short */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-600" />
              Where AI Falls Short
            </h2>
            <div className="space-y-4">
              {aiWeaknesses.map((item) => (
                <div key={item.category} className="border border-slate-100 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-900 text-sm">{item.category}</h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        item.limitation === "Absolute"
                          ? "bg-red-100 text-red-700"
                          : item.limitation === "High"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {item.limitation} limitation
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* When to use AI vs lawyer */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              AI vs. Lawyer: When Each Makes Sense
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">
                      Situation
                    </th>
                    <th className="text-left p-3 border border-slate-200 font-semibold text-indigo-700">
                      AI Review Sufficient?
                    </th>
                    <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">
                      Lawyer Recommended?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      situation: "Standard residential lease, no unusual clauses",
                      ai: "Yes — great starting point",
                      lawyer: "Optional",
                    },
                    {
                      situation: "First-time renter wanting to understand a lease",
                      ai: "Yes — exactly what AI is for",
                      lawyer: "Optional",
                    },
                    {
                      situation: "Lease with multiple high-risk flags from AI analysis",
                      ai: "As initial review only",
                      lawyer: "Strongly recommended",
                    },
                    {
                      situation: "Commercial lease",
                      ai: "Limited — commercial law is complex",
                      lawyer: "Yes",
                    },
                    {
                      situation: "Landlord-tenant dispute or eviction",
                      ai: "Background understanding only",
                      lawyer: "Yes",
                    },
                    {
                      situation: "Lease negotiation for high-value property",
                      ai: "Identify issues to raise",
                      lawyer: "Recommended",
                    },
                    {
                      situation: "Lease in an unfamiliar jurisdiction",
                      ai: "Helpful but verify jurisdiction specifics",
                      lawyer: "Recommended",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="p-3 border border-slate-200 text-slate-700">{row.situation}</td>
                      <td className="p-3 border border-slate-200 text-slate-600">{row.ai}</td>
                      <td className="p-3 border border-slate-200 text-slate-600">{row.lawyer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Important caveat */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3 text-sm text-amber-900">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">AI is not legal advice</p>
              <p>
                Regardless of accuracy, AI lease review — including LeasePlain — does not constitute
                legal advice and does not create an attorney-client relationship. For legal disputes,
                enforcement questions, or situations where the stakes are high, consult a licensed
                lawyer or paralegal in your jurisdiction. See our{" "}
                <Link href="/legal-disclaimer" className="underline">
                  Legal Disclaimer
                </Link>
                .
              </p>
            </div>
          </div>

          {/* FAQ */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <FAQAccordion items={faqs} />
          </section>

          {/* Related reading */}
          <div className="text-sm text-slate-600">
            <p className="font-medium text-slate-900 mb-2">Related reading:</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/resources/leaseplain-vs-chatgpt"
                className="text-indigo-600 hover:underline"
              >
                LeasePlain vs ChatGPT
              </Link>
              <span className="text-slate-300">·</span>
              <Link
                href="/resources/should-you-pay-lawyer-review-lease"
                className="text-indigo-600 hover:underline"
              >
                Should you pay a lawyer?
              </Link>
              <span className="text-slate-300">·</span>
              <Link href="/methodology" className="text-indigo-600 hover:underline">
                LeasePlain Methodology
              </Link>
            </div>
          </div>
        </div>
      </main>

      <CTASection
        heading="Get an accurate first-pass analysis in 60 seconds"
        subheading="Upload your lease and see what LeasePlain flags — then decide if you need to go deeper."
        variant="dark"
      />

      <Footer />
    </div>
  );
}
