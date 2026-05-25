import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import {
  Upload,
  ScanText,
  Brain,
  AlertTriangle,
  FileText,
  CheckCircle,
  Scale,
  Clock,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "How LeasePlain Works | AI Lease Analysis Explained",
  description:
    "Understand exactly how LeasePlain analyzes your lease: OCR text extraction, AI clause detection, plain-English interpretation, risk scoring, and what the tool can and cannot do.",
  alternates: { canonical: "https://leaseplain.com/how-it-works" },
  openGraph: {
    title: "How LeasePlain Works | AI Lease Analysis Explained",
    description: "Understand exactly how LeasePlain analyzes your lease: OCR text extraction, AI clause detection, plain-English interpretation, risk scoring, and what the tool can and cannot do.",
    url: "https://leaseplain.com/how-it-works",
    type: "website",
  },
};

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "You upload your lease",
    description:
      "LeasePlain accepts PDF, DOCX, and image files. Your document is transmitted securely over encrypted HTTPS and processed in an isolated environment. We never store your lease document after processing is complete.",
  },
  {
    icon: ScanText,
    number: "02",
    title: "OCR text extraction",
    description:
      "For scanned PDFs and image-based documents, our OCR (Optical Character Recognition) engine converts your document into machine-readable text. Native PDFs and Word documents are parsed directly without OCR. This step preserves paragraph structure, headings, and section numbering — all of which help the AI understand clause context.",
  },
  {
    icon: Brain,
    number: "03",
    title: "AI clause detection & interpretation",
    description:
      "The extracted text is sent to a large language model trained on legal documents. The AI identifies specific clause types (rent, security deposit, maintenance, termination, etc.), interprets what each clause actually requires of both parties, and rewrites each in plain English — without legalese.",
  },
  {
    icon: AlertTriangle,
    number: "04",
    title: "Risk scoring & red flag detection",
    description:
      "LeasePlain evaluates each clause against common tenant-protection standards and flags provisions that are unusually restrictive, potentially unenforceable, or contrary to provincial/state tenant protections. Clauses are rated High, Medium, or Low risk based on their potential financial or legal impact.",
  },
  {
    icon: FileText,
    number: "05",
    title: "Report generation",
    description:
      "Your analysis is assembled into a structured report with six sections: Executive Summary, Financial Terms, Red Flags, Unclear or Unusual Clauses, Questions to Ask Your Landlord, and Negotiation Suggestions. You can read it online, download a PDF, or share a link.",
  },
  {
    icon: CheckCircle,
    number: "06",
    title: "You make an informed decision",
    description:
      "Armed with a clear summary of what you're agreeing to, you can sign with confidence, ask better questions, negotiate terms, or seek legal advice on the clauses that concern you most.",
  },
];

const analysisCategories = [
  {
    title: "Executive Summary",
    description: "Lease type, term dates, monthly rent, key parties, and an overall risk overview.",
  },
  {
    title: "Financial Terms",
    description:
      "Rent amount, due dates, grace periods, late fees, security deposit, utilities, parking, pet fees, and any escalation clauses.",
  },
  {
    title: "Red Flags",
    description:
      "Clauses that may violate tenant rights, impose unusual restrictions, or create significant financial exposure.",
  },
  {
    title: "Unclear or Unusual Clauses",
    description:
      "Language that is vague, contradictory, or not standard — clauses you should clarify in writing before signing.",
  },
  {
    title: "Questions to Ask Your Landlord",
    description:
      "A personalized list of questions generated from your specific lease to help you understand ambiguities.",
  },
  {
    title: "Negotiation Suggestions",
    description:
      "Practical suggestions for clauses that are commonly negotiable, with language you can propose.",
  },
];

const faqs = [
  {
    q: "Does LeasePlain store my lease document?",
    a: "No. Your lease is processed in real time and discarded immediately after analysis. We do not store, index, or retain the text of your lease document. See our Privacy Policy for full details.",
  },
  {
    q: "How accurate is the AI analysis?",
    a: "LeasePlain performs well on standard residential leases and accurately identifies the majority of common clause types. However, AI can miss nuances, misread poorly scanned documents, or fail to catch jurisdiction-specific issues. We recommend treating the analysis as a starting point, not a complete legal review.",
  },
  {
    q: "What types of leases does LeasePlain support?",
    a: "LeasePlain is optimized for residential leases in Canada and the United States. It works best with standard apartment, condo, and house leases. It is not designed for commercial leases, commercial subletting agreements, or land leases.",
  },
  {
    q: "Can LeasePlain read handwritten leases?",
    a: "Partially. Our OCR performs poorly on handwritten documents. Typed or digitally generated leases will produce significantly more accurate results. If your lease is handwritten, we recommend transcribing it to a Word document first.",
  },
  {
    q: "What does LeasePlain not analyze?",
    a: "LeasePlain does not provide legal advice, predict how courts would interpret disputes, or account for verbal agreements not included in the written lease. It also cannot assess local bylaws that may affect your specific unit.",
  },
  {
    q: "When should I still consult a lawyer?",
    a: "Always consult a licensed lawyer or paralegal for commercial leases, when you're facing eviction or a tenancy dispute, if you're signing a lease worth more than $2,000/month, or if you have specific concerns about your rights. LeasePlain is a starting point — not a replacement for legal counsel.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Analyze Your Lease with LeasePlain",
  description:
    "Upload your residential lease to receive a plain-English analysis with risk scores, red flags, and negotiation suggestions.",
  totalTime: "PT1M",
  step: steps.map((step, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: step.title,
    text: step.description,
  })),
};

export default function HowLeasePlainWorksPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <main>
        {/* Hero */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-indigo-300 mb-4">
              <BreadcrumbNav
                items={[
                  { label: "Home", href: "/" },
                  { label: "How LeasePlain Works" },
                ]}
                className="text-indigo-300 [&_a]:text-indigo-300 [&_a:hover]:text-white [&_span]:text-white [&_.text-slate-300]:text-slate-300"
              />
            </nav>
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              How LeasePlain Works
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
              From document upload to plain-English report — a transparent look at how our AI reads,
              interprets, and risk-scores your lease.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">
              The Analysis Process
            </h2>
            <div className="space-y-6">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-indigo-600" aria-hidden="true" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-1">
                        Step {step.number}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What We Analyze */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">
              The 6 Sections of Every LeasePlain Report
            </h2>
            <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
              Every lease analysis is organized into the same six sections so you always know where
              to find what matters most.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {analysisCategories.map((cat, i) => (
                <div
                  key={cat.title}
                  className="bg-white rounded-xl border border-slate-100 p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <h3 className="font-semibold text-slate-900 text-sm">{cat.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Limitations */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              AI Limitations: What LeasePlain Cannot Do
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6 text-sm text-amber-900">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                Important: LeasePlain is not legal advice
              </p>
              <p className="leading-relaxed">
                LeasePlain is an educational tool. Its analysis cannot substitute for advice from a
                licensed lawyer or paralegal who knows your full situation, local law, and the
                specific context of your tenancy.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  cannot: "Provide legal advice",
                  detail:
                    "LeasePlain describes what clauses say and what they typically mean. It cannot tell you whether a clause is enforceable in your jurisdiction or advise you on how to handle a dispute.",
                },
                {
                  cannot: "Guarantee completeness",
                  detail:
                    "AI can miss clauses, misread scanned text, or fail to flag issues that require jurisdiction-specific knowledge. Always read your full lease document.",
                },
                {
                  cannot: "Account for verbal agreements",
                  detail:
                    "LeasePlain only analyzes the written document you upload. Side deals, verbal promises, and emails with your landlord are not analyzed.",
                },
                {
                  cannot: "Replace a lawyer for complex situations",
                  detail:
                    "If you're signing a high-value lease, dealing with a dispute, or have concerns about tenant rights violations, consult a licensed professional.",
                },
                {
                  cannot: "Predict legal outcomes",
                  detail:
                    "LeasePlain cannot tell you what a court would decide if a clause were disputed. It can flag unusual provisions, not predict litigation outcomes.",
                },
              ].map((item) => (
                <div
                  key={item.cannot}
                  className="flex gap-4 bg-slate-50 rounded-xl border border-slate-100 p-5"
                >
                  <Scale className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-1">
                      Cannot: {item.cannot}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When to Get a Lawyer */}
        <section className="py-12 px-4 bg-indigo-50">
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-4 items-start">
              <Clock className="w-8 h-8 text-indigo-600 mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  When You Should Still Consult a Lawyer
                </h2>
                <ul className="space-y-2 text-sm text-slate-700">
                  {[
                    "You're facing eviction or a tenancy dispute",
                    "Your monthly rent exceeds $2,000 or you're signing a long-term lease",
                    "You're signing a commercial lease or subletting agreement",
                    "Your lease contains clauses that your LeasePlain report flagged as High Risk",
                    "You're a newcomer and unfamiliar with local tenant protection laws",
                    "Your landlord refuses to answer your questions or clarify ambiguous language",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-600 mt-4">
                  Many provinces and states offer free or low-cost legal clinics for tenants.{" "}
                  <Link href="/resources/ai-lease-review-vs-lawyer" className="text-indigo-600 hover:underline">
                    Compare AI review vs. hiring a lawyer →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <FAQAccordion items={faqs} includeSchema={true} />
            </div>
          </div>
        </section>
      </main>

      <CTASection
        heading="Ready to understand your lease?"
        subheading="Upload your lease now and get a clear, plain-English report in under a minute."
      />

      <Footer />
    </div>
  );
}
