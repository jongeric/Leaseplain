import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import {
  AlertTriangle,
  CheckCircle,
  TrendingDown,
  BarChart3,
  Scale,
  FileText,
  DollarSign,
  MessageSquare,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "LeasePlain Methodology | How We Score and Analyze Leases",
  description:
    "Learn how LeasePlain evaluates lease clauses, assigns risk scores (high/medium/low), and categorizes findings across 6 analysis dimensions. Transparent, educational, and honest about limitations.",
  alternates: { canonical: "https://leaseplain.com/methodology" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": "https://leaseplain.com/methodology#article",
  headline: "LeasePlain Analysis Methodology",
  description:
    "How LeasePlain evaluates residential lease agreements using AI: risk scoring, clause categorization, and interpretation framework.",
  url: "https://leaseplain.com/methodology",
  dateModified: "2025-05-01",
  publisher: { "@id": "https://leaseplain.com/#organization" },
  about: {
    "@type": "Thing",
    name: "AI Lease Analysis Methodology",
  },
};

const riskLevels = [
  {
    level: "High Risk",
    color: "bg-red-100 text-red-700 border-red-200",
    iconColor: "text-red-600",
    bgCard: "border-red-100",
    description:
      "Clauses that could expose tenants to significant financial liability, restrict fundamental tenant rights, or that may violate applicable tenancy legislation.",
    examples: [
      "Clauses waiving the landlord's maintenance obligations",
      "Automatic rent increases significantly above guideline amounts",
      "Personal liability clauses that exceed what law allows",
      "No-subletting clauses where subletting rights are legally protected",
    ],
  },
  {
    level: "Medium Risk",
    color: "bg-amber-100 text-amber-700 border-amber-200",
    iconColor: "text-amber-600",
    bgCard: "border-amber-100",
    description:
      "Clauses that are legally permissible but require careful attention, impose meaningful obligations, or are commonly negotiated.",
    examples: [
      "Late fees that are significant but within legal limits",
      "Strict notice requirements for repairs",
      "Pet restrictions and associated fees",
      "Limitations on guest stays",
    ],
  },
  {
    level: "Low Risk",
    color: "bg-green-100 text-green-700 border-green-200",
    iconColor: "text-green-600",
    bgCard: "border-green-100",
    description:
      "Standard, commonly used clauses that impose ordinary obligations and are unlikely to cause unexpected issues for tenants who understand them.",
    examples: [
      "Standard notice-to-vacate requirements",
      "Routine maintenance responsibility assignments",
      "Typical security deposit terms within legal limits",
      "Standard quiet hours provisions",
    ],
  },
];

const categories = [
  {
    icon: FileText,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    title: "1. Lease Summary",
    description:
      "Extraction and plain-English presentation of core lease terms: parties, property, term dates, rent amount, due dates, and renewal provisions.",
  },
  {
    icon: DollarSign,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "2. Financial Terms",
    description:
      "All monetary obligations: security deposit, last month's rent, rent increases, late fees, NSF charges, parking fees, utilities, and any other costs the tenant bears.",
  },
  {
    icon: AlertTriangle,
    color: "text-red-600",
    bg: "bg-red-50",
    title: "3. Red Flags",
    description:
      "Clauses that are unusual, potentially unenforceable, significantly one-sided, or that deviate materially from standard residential lease terms in the relevant jurisdiction.",
  },
  {
    icon: MessageSquare,
    color: "text-amber-600",
    bg: "bg-amber-50",
    title: "4. Unclear Clauses",
    description:
      "Ambiguous, vague, or contradictory language that could be interpreted multiple ways — a common source of tenant-landlord disputes.",
  },
  {
    icon: BookOpen,
    color: "text-green-600",
    bg: "bg-green-50",
    title: "5. Questions to Ask",
    description:
      "Specific, actionable questions the tenant should raise with the landlord before signing, derived from the actual content of the lease being analyzed.",
  },
  {
    icon: TrendingUp,
    color: "text-purple-600",
    bg: "bg-purple-50",
    title: "6. Negotiation Points",
    description:
      "Clauses commonly negotiated by tenants, with context on what changes are realistic to request and what concessions landlords typically offer.",
  },
];

const faqs = [
  {
    q: "How does LeasePlain assign risk scores?",
    a: "Risk scores (high, medium, low) are assigned based on a combination of factors: whether the clause may violate applicable law, the magnitude of potential financial impact on the tenant, how far the clause deviates from standard residential terms, and whether the clause restricts rights the tenant might otherwise have. The AI model is trained to apply these criteria consistently.",
  },
  {
    q: "Are risk scores guaranteed to be correct?",
    a: "No. Risk scoring is AI-generated and reflects general patterns in residential tenancy law. It cannot account for recent legislative changes, local court interpretations, or the full context of your specific situation. Use risk scores as a starting point for your own review and professional consultation, not as a definitive legal assessment.",
  },
  {
    q: "What if my lease has a clause the AI misreads?",
    a: "AI can misread poorly formatted text, miss page breaks, or fail to understand context that a human reader would catch. If an analysis seems wrong for a particular clause, trust your own reading of the lease and verify with a professional if needed. You can always re-upload a cleaner copy of your document.",
  },
  {
    q: "Does LeasePlain's analysis change if the same lease is uploaded twice?",
    a: "Slightly. Large language models have some inherent variability. Two analyses of the same document may use different phrasing or emphasize different aspects, but substantive findings should be consistent. If you get significantly different results, contact us — it may indicate a document formatting issue.",
  },
  {
    q: "How does LeasePlain handle jurisdiction differences?",
    a: "The AI model is trained with awareness of provincial and state tenancy legislation. When analyzing a lease, it considers the jurisdiction specified in the document. If no jurisdiction is clear from the document, it may apply general principles. For jurisdiction-specific accuracy, ensure your document clearly identifies the province or state.",
  },
];

export default function MethodologyPage() {
  return (
    <div className="flex flex-col min-h-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />

      <main>
        {/* Hero */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <BreadcrumbNav
              items={[
                { label: "Home", href: "/" },
                { label: "Methodology" },
              ]}
              className="text-indigo-300 mb-6 [&_a]:text-indigo-300 [&_a:hover]:text-white [&_span.text-slate-900]:text-white"
            />
            <h1 className="text-4xl font-bold mb-4">LeasePlain Methodology</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              How we evaluate lease clauses, assign risk scores, and structure our analysis — and
              where the limits of AI-powered review lie.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          {/* Overview */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How the Analysis Works</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              When you upload a lease, LeasePlain processes it through several stages: OCR
              extraction (for scanned documents), clause identification, plain-English
              interpretation, risk assessment, and structured output generation.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The AI model powering this analysis is a large language model (LLM) trained on legal
              documents, tenancy legislation, and residential lease templates from Canadian provinces
              and US states. It identifies clause types, extracts key terms, interprets their
              meaning in context, and flags items that deviate from standard practice or that carry
              tenant risk.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our analysis is structured around six categories designed to give you a complete,
              actionable picture of your lease — from the basic terms to the negotiable details.
            </p>
          </section>

          {/* Risk Scoring */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-5 h-5 text-slate-700" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">Risk Scoring Framework</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Individual clauses are assigned one of three risk levels. Here is what each means:
            </p>
            <div className="space-y-5">
              {riskLevels.map((risk) => (
                <div
                  key={risk.level}
                  className={`border rounded-xl p-5 ${risk.bgCard}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold border ${risk.color}`}
                    >
                      {risk.level === "High Risk" && (
                        <AlertTriangle className="w-3.5 h-3.5" />
                      )}
                      {risk.level === "Medium Risk" && (
                        <TrendingDown className="w-3.5 h-3.5" />
                      )}
                      {risk.level === "Low Risk" && (
                        <CheckCircle className="w-3.5 h-3.5" />
                      )}
                      {risk.level}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3 leading-relaxed">{risk.description}</p>
                  <div>
                    <p className="text-xs font-semibold text-slate-700 mb-1.5">Examples:</p>
                    <ul className="space-y-1">
                      {risk.examples.map((ex) => (
                        <li key={ex} className="text-xs text-slate-500 flex items-start gap-1.5">
                          <span className="mt-1.5 w-1 h-1 bg-slate-400 rounded-full flex-shrink-0" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Six Categories */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">Six Analysis Categories</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {categories.map((cat) => (
                <div key={cat.title} className="flex gap-4">
                  <div
                    className={`w-10 h-10 ${cat.bg} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}
                  >
                    <cat.icon className={`w-5 h-5 ${cat.color}`} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 text-sm">{cat.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{cat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interpretation Framework */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Interpretation Framework</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For each identified clause, the AI applies a consistent interpretation framework:
            </p>
            <ol className="space-y-4">
              {[
                {
                  step: "Identify clause type",
                  desc: "What category of provision is this? (financial, maintenance, termination, occupancy, etc.)",
                },
                {
                  step: "Extract key terms",
                  desc: "What specific obligations, amounts, dates, or conditions does the clause create?",
                },
                {
                  step: "Translate to plain English",
                  desc: "What does this clause actually require of the tenant, in everyday language?",
                },
                {
                  step: "Compare to standard practice",
                  desc: "Is this clause typical for the relevant jurisdiction, or does it deviate from standard lease terms?",
                },
                {
                  step: "Assess tenant impact",
                  desc: "What is the potential financial, legal, or practical impact on the tenant if this clause is enforced?",
                },
                {
                  step: "Assign risk level",
                  desc: "Based on the above, what risk level does this clause represent for the tenant?",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{item.step}</p>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Limitations */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Known Limitations</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We are committed to being transparent about what our methodology cannot do:
            </p>
            <div className="space-y-3">
              {[
                "The AI cannot account for recent legislative changes after its training cutoff date.",
                "OCR errors in scanned documents can cause misreading of key terms.",
                "The AI may miss context that spans multiple sections of a long lease.",
                "Risk scoring reflects general patterns and cannot replace jurisdiction-specific legal advice.",
                "The AI does not know your personal circumstances, rental history, or specific housing situation.",
                "Analysis quality depends significantly on the readability and formatting of the uploaded document.",
              ].map((limitation, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  {limitation}
                </div>
              ))}
            </div>
            <div className="mt-5 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-900">
              These limitations are why LeasePlain is a starting point, not an endpoint. Use our
              analysis to get oriented and identify what to investigate further — then verify
              important findings with a qualified professional.
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Methodology Questions
            </h2>
            <FAQAccordion items={faqs} />
          </section>
        </div>
      </main>

      <CTASection
        heading="See the methodology in action"
        subheading="Upload your lease and get a structured, risk-scored analysis in under a minute."
        variant="dark"
      />

      <Footer />
    </div>
  );
}
