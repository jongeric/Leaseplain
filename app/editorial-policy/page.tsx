import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CTASection from "@/components/CTASection";
import { CheckCircle, RefreshCw, Users, Scale, BookOpen, AlertTriangle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Editorial Policy | LeasePlain Content Standards",
  description:
    "LeasePlain's editorial policy covers our content review standards, accuracy process, update procedures, AI and human oversight framework, and our commitment to educational — not legal — content.",
  alternates: { canonical: "https://leaseplain.com/editorial-policy" },
  openGraph: {
    title: "Editorial Policy | LeasePlain Content Standards",
    description: "LeasePlain's editorial policy covers our content review standards, accuracy process, update procedures, AI and human oversight framework, and our commitment to educational — not legal — content.",
    url: "https://leaseplain.com/editorial-policy",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://leaseplain.com/editorial-policy#article",
  headline: "LeasePlain Editorial Policy",
  description:
    "LeasePlain's standards for content accuracy, review, and updates across our educational lease resources.",
  url: "https://leaseplain.com/editorial-policy",
  dateModified: "2025-05-01",
  publisher: {
    "@id": "https://leaseplain.com/#organization",
  },
  about: {
    "@type": "Thing",
    name: "Editorial Standards for AI-powered legal education content",
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="flex flex-col min-h-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\u003c") }}
      />
      <Navbar />

      <main>
        {/* Hero */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <BreadcrumbNav
              items={[
                { label: "Home", href: "/" },
                { label: "Editorial Policy" },
              ]}
              className="text-indigo-300 mb-6 [&_a]:text-indigo-300 [&_a:hover]:text-white [&_span.text-slate-900]:text-white"
            />
            <h1 className="text-4xl font-bold mb-4">Editorial Policy</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              How we create, review, and maintain the educational content on LeasePlain — and the
              standards we hold ourselves to.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          {/* Intent */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Our Editorial Intent</h2>
                <p className="text-slate-600 leading-relaxed">
                  LeasePlain is an educational platform. Every piece of content we publish — from
                  glossary definitions to lease clause explanations to tenant rights guides — is
                  designed to help renters understand their agreements, not to substitute for legal
                  advice.
                </p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We write for clarity, accuracy, and practical usefulness. A tenant reading our
              content should come away better equipped to ask the right questions, identify
              potential issues, and make informed decisions — while understanding clearly that the
              final call on any legal matter belongs to a qualified professional.
            </p>
          </section>

          {/* Content Standards */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mt-1.5">Content Standards</h2>
            </div>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Accuracy first</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  All factual claims — about legislation, typical lease terms, tenant rights, or
                  legal concepts — are verified against primary sources before publication. Primary
                  sources include provincial and state tenancy legislation, official government
                  guidance documents, and established legal references.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Jurisdiction specificity</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Tenancy law varies significantly between provinces, states, and territories. Our
                  content identifies the specific jurisdiction it applies to. We do not make blanket
                  national claims when the law varies locally. Where rules differ, we say so
                  explicitly.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Plain language</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We write at a reading level accessible to someone with no legal background. Legal
                  terms are always defined on first use. We avoid jargon where plain English works
                  equally well. When jargon is unavoidable, we explain it.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Balance and fairness</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  While LeasePlain is tenant-focused, our educational content aims to be factually
                  balanced. We explain what clauses require of both landlords and tenants, and we
                  distinguish between what is legal and what is merely common practice.
                </p>
              </div>
            </div>
          </section>

          {/* AI + Human Oversight */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mt-1.5">AI and Human Oversight</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Some LeasePlain content is AI-assisted in its drafting. All AI-generated or
              AI-assisted content follows the same review process as human-written content:
            </p>
            <ol className="space-y-3 list-none">
              {[
                "Initial draft reviewed for factual accuracy against primary legal sources",
                "Jurisdiction-specific claims verified against current legislation",
                "Plain-language review to ensure accessibility",
                "Disclaimer and disclaimer-appropriateness check",
                "Final review for completeness and balance",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
              <strong>Important:</strong> Neither AI-generated nor human-written content on
              LeasePlain constitutes legal advice. All content is for educational and informational
              purposes only.
            </div>
          </section>

          {/* Update Policy */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mt-1.5">Update and Correction Policy</h2>
            </div>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                Tenancy law changes. Regulations are amended, court decisions shift interpretation,
                and government guidance is updated. We are committed to keeping our content current.
              </p>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">Scheduled reviews</h3>
                <p>
                  All provincial and state-specific content is reviewed at minimum annually, or
                  whenever we become aware of relevant legislative changes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">Corrections</h3>
                <p>
                  If we identify an error in published content, we correct it promptly. For
                  material errors, we note the correction within the content. We do not silently
                  remove or alter factual claims that were previously made.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">Reporting errors</h3>
                <p>
                  Found something that looks wrong? Please contact us via our{" "}
                  <a href="/contact" className="text-indigo-600 hover:underline">
                    contact page
                  </a>
                  . We take all accuracy reports seriously and review them promptly.
                </p>
              </div>
            </div>
          </section>

          {/* Not Legal Advice */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="w-5 h-5 text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mt-1.5">
                Educational Intent — Not Legal Advice
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              This is our most important editorial principle: everything on LeasePlain is
              educational content, not legal advice.
            </p>
            <div className="space-y-3 text-sm text-slate-600">
              <p>
                Legal advice is specific to your situation, given by someone who knows the full
                facts of your case, your jurisdiction, your lease, and your circumstances.
                LeasePlain content is general educational information about how leases and tenancy
                law typically work.
              </p>
              <p>
                We actively work to ensure our content cannot be misread as legal advice. This
                includes explicit disclaimers, careful language choices (we describe what is
                &ldquo;common&rdquo; or &ldquo;typical,&rdquo; not what you &ldquo;should&rdquo; do in your situation), and
                consistent recommendations to consult professionals for personal legal questions.
              </p>
            </div>
          </section>

          {/* Conflicts of Interest */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-slate-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mt-1.5">Independence</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              LeasePlain&apos;s editorial content is produced independently of any commercial
              relationships. Our content recommendations are based solely on what is accurate and
              useful for tenants — not on advertising relationships, affiliate arrangements, or any
              third-party influence. If this ever changes, we will disclose it clearly.
            </p>
          </section>
        </div>
      </main>

      <CTASection
        heading="See our standards in action"
        subheading="Upload your lease and get an analysis built on the principles above: accurate, plain-English, and always educational."
        variant="indigo"
      />

      <Footer />
    </div>
  );
}
