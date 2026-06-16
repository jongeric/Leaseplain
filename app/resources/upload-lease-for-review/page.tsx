import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, ChevronRight, Upload } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Upload Your Lease for AI Review: How It Works | LeasePlain",
  description:
    "Step-by-step guide to uploading your lease on LeasePlain. Learn what formats are supported, how your data is kept secure, and what the AI report shows.",
  alternates: { canonical: "https://leaseplain.com/resources/upload-lease-for-review" },
  openGraph: {
    title: "Upload Your Lease for AI Review: How It Works | LeasePlain",
    description: "Step-by-step guide to uploading your lease on LeasePlain. Learn what formats are supported, how your data is kept secure, and what the AI report shows.",
    url: "https://leaseplain.com/resources/upload-lease-for-review",
    type: "website",
  },
  keywords: ["upload lease for review", "AI lease review how it works", "lease PDF upload", "lease analysis tool", "LeasePlain how to use"],
};

const faqItems = [
  { q: "What file formats can I upload to LeasePlain?", a: "LeasePlain accepts PDF files up to 10MB. You can also paste lease text directly into the text field if you don't have a PDF. Most lease PDFs from landlords or property management companies work without any conversion." },
  { q: "How long does LeasePlain take to analyze a lease?", a: "Most analyses complete in 30–60 seconds. Complex or very long leases may take up to a minute. The AI reads the full document and generates a structured report with key terms, red flags, and negotiation suggestions." },
  { q: "Is my lease data secure when I upload it?", a: "LeasePlain processes your lease to generate the analysis and stores results so you can access them later in your account. We do not sell or share your lease data. See our privacy policy for full details." },
  { q: "Can I share my lease analysis with someone else?", a: "Yes. Once your analysis is complete, you can share the report link with a family member, friend, or legal advisor. The link provides read-only access to your analysis results." },
  { q: "What if LeasePlain misses something in my lease?", a: "AI analysis is thorough but not infallible. Always review the full analysis, cross-reference with your province's tenancy law, and for any serious concerns, consult a tenant legal clinic or lawyer before signing." },
];

export default function UploadLeaseForReviewPage() {
  return (
    <>
      <ArticleSchema
        headline="Upload Your Lease for AI Review: How It Works"
        description="Step-by-step guide to uploading your lease on LeasePlain. Learn what formats are supported, how your data is kept secure, and what the AI report shows."
        url="https://leaseplain.com/resources/upload-lease-for-review"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["upload lease for review", "AI lease review how it works", "lease PDF upload", "lease analysis tool", "LeasePlain how to use"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Resources", href: "https://leaseplain.com/resources" },
        { name: "AI Lease Review", href: "https://leaseplain.com/resources/ai-lease-review" },
        { name: "Upload Lease for Review", href: "https://leaseplain.com/resources/upload-lease-for-review" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/resources/upload-lease-for-review",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".speakable-summary"]
            }
          }).replace(/</g, "\u003c")
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }).replace(/</g, "\u003c") }}
      />
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
              <span>Upload Lease for Review</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Zap className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Resource
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Upload Your Lease for AI Review: How It Works
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Getting a plain-English analysis of your lease takes less than a minute. Here's
              exactly what to do and what to expect.
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
                  How to Upload Your Lease on LeasePlain
                </h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Uploading and analyzing your lease is a four-step process that takes less than
                  two minutes:
                </p>
                <ol className="space-y-5">
                  {[
                    {
                      step: "Go to the upload page",
                      detail: (
                        <>
                          Head to{" "}
                          <Link href="/upload" className="text-blue-600 hover:underline">
                            leaseplain.com/upload
                          </Link>
                          . No account is required to get started.
                        </>
                      ),
                    },
                    {
                      step: "Upload your PDF or paste your lease text",
                      detail:
                        "Click 'Upload PDF' to upload your lease file directly, or switch to the text input mode to paste your lease text. Both options are analyzed identically.",
                    },
                    {
                      step: "AI analyzes your lease in seconds",
                      detail:
                        "LeasePlain's AI reads each clause of your lease, identifies key terms, and flags anything unusual, potentially problematic, or worth discussing with your landlord.",
                    },
                    {
                      step: "Review your plain-English report",
                      detail:
                        "Your report is displayed immediately. It includes a summary of key terms, a clause-by-clause breakdown, and highlighted red flags — all in plain English.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">{item.step}</p>
                        <p className="text-slate-700 leading-relaxed">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-8">
                  <Link
                    href="/upload"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    <Upload className="w-4 h-4" aria-hidden="true" />
                    Upload My Lease Now
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Formats Are Supported?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  LeasePlain currently supports:
                </p>
                <ul className="space-y-3">
                  {[
                    {
                      format: "PDF (recommended)",
                      detail: "The most common format for residential leases in Ontario. Digital PDFs (not scanned images) give the best results. Most leases emailed or signed electronically are in this format.",
                    },
                    {
                      format: "Pasted text",
                      detail: "Copy and paste your lease text directly into the text input. Useful if your lease is in a format that's hard to upload, or if you want to analyze specific sections.",
                    },
                    {
                      format: "Word documents — coming soon",
                      detail: "Support for .doc and .docx files is in development.",
                    },
                  ].map((item) => (
                    <li key={item.format} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2" />
                      <div>
                        <span className="font-semibold text-slate-900">{item.format}: </span>
                        <span className="text-slate-700">{item.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Is My Lease Kept Secure?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Your lease contains personal and financial information. LeasePlain takes
                  security seriously:
                </p>
                <ul className="space-y-3">
                  {[
                    "All data is transmitted over encrypted HTTPS connections.",
                    "Lease content is processed only to generate your analysis and is not retained beyond the analysis session.",
                    "LeasePlain does not sell or share your lease content with third parties.",
                    "For full details, see our Privacy Policy.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2" />
                      <p className="text-slate-700">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Will the Report Show?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Your LeasePlain report includes:
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      section: "Lease summary",
                      detail: "Key facts at a glance: rent amount, lease term, notice period, deposit amount, and what's included.",
                    },
                    {
                      section: "Red flags",
                      detail: "Any clauses that are potentially illegal, unusually restrictive, or worth negotiating are highlighted with clear explanations.",
                    },
                    {
                      section: "Clause-by-clause breakdown",
                      detail: "Every major section of your lease explained in plain English — what it means, what it requires of you, and whether it's standard.",
                    },
                    {
                      section: "Ontario-specific notes",
                      detail: "Where your lease deviates from Ontario's standard lease requirements or RTA defaults, this is flagged specifically.",
                    },
                  ].map((item) => (
                    <li key={item.section} className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                      <p className="font-semibold text-slate-900 mb-1">{item.section}</p>
                      <p className="text-sm text-slate-700 leading-relaxed">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Ready to Analyze?</h3>
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
    </>
  );
}
