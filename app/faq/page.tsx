import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HelpCircle, ChevronRight, Upload } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "FAQ – Frequently Asked Questions | LeasePlain",
  description:
    "Answers to the most common questions about LeasePlain, lease analysis, tenant rights, and what our AI can and can't do.",
  alternates: { canonical: "https://leaseplain.com/faq" },
};

const faqs = [
  {
    category: "About LeasePlain",
    questions: [
      {
        q: "What is LeasePlain?",
        a: "LeasePlain is an AI-powered lease analysis tool. You upload your residential lease (PDF or text) and receive a plain-English breakdown covering key financial terms, your rights and obligations, red flags, and questions to ask your landlord — in under a minute.",
      },
      {
        q: "Is LeasePlain a law firm or legal service?",
        a: "No. LeasePlain is an informational tool, not a law firm and not legal advice. Our analysis is designed to help you understand your lease — not to provide legal counsel. Always consult a licensed lawyer or paralegal for legal advice.",
      },
      {
        q: "Who is LeasePlain built for?",
        a: "LeasePlain is built for residential tenants — particularly people signing their first lease, newcomers unfamiliar with Canadian rental law, anyone renewing a lease who wants to check for changes, and tenants who want to understand what they're agreeing to before signing.",
      },
      {
        q: "Does LeasePlain work for leases outside Ontario?",
        a: "LeasePlain can analyze any residential lease written in English. Our red-flag detection is strongest for Ontario (where we reference the Residential Tenancies Act), but we analyze leases from other provinces too. Jurisdiction-specific accuracy varies.",
      },
    ],
  },
  {
    category: "Using the Analyzer",
    questions: [
      {
        q: "What file formats are supported?",
        a: "We support PDF uploads and plain-text paste. Digital PDFs produce the best results. Scanned or image-based PDFs may have reduced accuracy. We recommend using a digital PDF directly from your landlord or property manager.",
      },
      {
        q: "How long does an analysis take?",
        a: "Most analyses complete in 30–60 seconds. Longer leases (20+ pages) may take up to 90 seconds. You'll see the report as soon as it's ready.",
      },
      {
        q: "Is my lease kept private?",
        a: "Yes. Your lease is processed in real time and discarded immediately after your report is generated. We do not store, sell, or share your lease document.",
      },
      {
        q: "How accurate is the analysis?",
        a: "Our AI correctly identifies and explains the vast majority of clauses in standard residential leases. However, AI can make mistakes — especially with unusual clause structures or non-standard language. Always read the original lease and treat our analysis as a starting point, not a final word.",
      },
      {
        q: "Do I need an account to use LeasePlain?",
        a: "You can run your first analysis without creating an account. Creating a free account lets you save your report history. A Pro subscription unlocks unlimited analyses and priority processing.",
      },
    ],
  },
  {
    category: "Tenant Rights & Legal Questions",
    questions: [
      {
        q: "What is a security deposit in Ontario?",
        a: "In Ontario, the only lawful deposit is a last month's rent deposit — equal to exactly one month's rent. Damage deposits and cleaning deposits are illegal. The deposit earns interest annually at the provincial guideline rate.",
      },
      {
        q: "Can my landlord increase rent at any time?",
        a: "No. In Ontario, rent can only be increased once per 12 months, with at least 90 days written notice using Form N1, and within the annual Rent Increase Guideline. Units first occupied after November 15, 2018 may be exempt from the guideline.",
      },
      {
        q: "Can I break my lease early in Ontario?",
        a: "You have several options: waiting until the end of the term (with 60 days notice), subletting, assigning the lease, reaching a mutual agreement with your landlord (N11), or — in safety situations — using the N15 process. Landlords must mitigate losses and cannot charge unlimited penalties.",
      },
      {
        q: "What should I do if my landlord won't make repairs?",
        a: "Document the issue in writing, give the landlord a reasonable deadline, and if repairs are still not made, file a T6 application with the Landlord and Tenant Board. You may also contact your municipality's property standards department for an inspection.",
      },
      {
        q: "Can a landlord evict me without going to the LTB?",
        a: "No. In Ontario, any eviction requires a formal LTB process. A landlord cannot lock you out, remove your belongings, or shut off utilities to force you to leave. These are illegal and the landlord can face significant penalties.",
      },
    ],
  },
  {
    category: "Billing & Account",
    questions: [
      {
        q: "What does the free plan include?",
        a: "The free plan includes one lease analysis per month. You get a full report including plain-English summary, financial terms, and red flags.",
      },
      {
        q: "What does Pro include?",
        a: "Pro ($9/month) includes unlimited lease analyses, full reports with all six sections, analysis history, priority processing, and email support.",
      },
      {
        q: "Can I cancel my subscription?",
        a: "Yes, you can cancel anytime from your billing settings. Your access continues until the end of your current billing period.",
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((group) =>
    group.questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
              Frequently Asked Questions
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Questions about LeasePlain, how it works, tenant rights, and billing — answered clearly.
            </p>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto space-y-14">
            {faqs.map((group) => (
              <div key={group.category}>
                <h2 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100">
                  {group.category}
                </h2>
                <div className="flex flex-col divide-y divide-slate-100">
                  {group.questions.map((item) => (
                    <div key={item.q} className="py-5">
                      <h3 className="font-semibold text-slate-900 mb-2 flex items-start gap-2">
                        <HelpCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {item.q}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed ml-6">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 px-4 bg-blue-600">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Still have a question?</h2>
            <p className="text-blue-100 mb-8">
              Reach out to us directly — we're happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Contact Us
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/upload"
                className="inline-flex items-center justify-center gap-2 border border-blue-400 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Upload className="w-4 h-4" aria-hidden="true" />
                Analyze My Lease
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
