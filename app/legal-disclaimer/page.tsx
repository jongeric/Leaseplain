import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Scale, AlertTriangle, Globe, Users, Brain, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Legal Disclaimer | LeasePlain",
  description:
    "LeasePlain is not a law firm. Our analysis is for informational and educational purposes only — not legal advice. Read our full legal disclaimer here.",
  alternates: { canonical: "https://leaseplain.com/legal-disclaimer" },
  openGraph: {
    title: "Legal Disclaimer | LeasePlain",
    description: "LeasePlain is not a law firm. Our analysis is for informational and educational purposes only — not legal advice. Read our full legal disclaimer here.",
    url: "https://leaseplain.com/legal-disclaimer",
    type: "website",
  },
};

export default function LegalDisclaimerPage() {
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
                { label: "Legal Disclaimer" },
              ]}
              className="text-indigo-300 mb-6 [&_a]:text-indigo-300 [&_a:hover]:text-white [&_span.text-slate-900]:text-white"
            />
            <h1 className="text-4xl font-bold mb-4">Legal Disclaimer</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Important information about the nature of LeasePlain&apos;s service and the limits of what
              AI-powered lease analysis can provide.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
          {/* Key Banner */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-4">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-900 mb-1">
                LeasePlain does not provide legal advice.
              </p>
              <p className="text-sm text-amber-800 leading-relaxed">
                Everything on this website — including lease analyses, educational articles,
                glossary definitions, and clause explanations — is for informational and
                educational purposes only. It is not legal advice and does not create an
                attorney-client relationship.
              </p>
            </div>
          </div>

          {/* Not Legal Advice */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="w-5 h-5 text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Not Legal Advice — Informational Use Only
              </h2>
            </div>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                LeasePlain is an educational technology platform. The information provided through
                our lease analysis tool, educational articles, glossary, and all other content is
                intended for general informational purposes only.
              </p>
              <p>
                Nothing on LeasePlain.com constitutes legal advice. The content is not intended to
                be a substitute for professional legal advice, diagnosis, or representation.
                Always seek the advice of a licensed lawyer or paralegal in your jurisdiction with
                respect to any legal question or problem you may have.
              </p>
              <p>
                Reliance on any information provided by LeasePlain is solely at your own risk.
              </p>
            </div>
          </section>

          {/* No Attorney-Client Relationship */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                No Attorney-Client Relationship
              </h2>
            </div>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                Using LeasePlain does not create an attorney-client relationship between you and
                LeasePlain or any of its operators, employees, or affiliated parties.
              </p>
              <p>
                LeasePlain is not a law firm, does not employ lawyers or paralegals for the purpose
                of providing legal advice, and is not regulated as a legal services provider.
              </p>
              <p>
                Any communication through LeasePlain — including uploaded documents and generated
                analyses — is not protected by solicitor-client privilege or attorney-client privilege.
              </p>
            </div>
          </section>

          {/* AI Limitations */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mt-1">AI Limitations and Accuracy</h2>
            </div>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                LeasePlain uses artificial intelligence — specifically large language models — to
                analyze lease documents. AI has inherent limitations that users must understand:
              </p>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 flex-shrink-0" />
                  AI can make errors, miss context, or misinterpret ambiguous language in documents.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 flex-shrink-0" />
                  AI knowledge has a training cutoff date and may not reflect recent legislative
                  changes or court decisions.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 flex-shrink-0" />
                  OCR processing of scanned documents may introduce reading errors that affect
                  analysis accuracy.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 flex-shrink-0" />
                  AI analysis does not account for your personal circumstances, financial situation,
                  or specific housing needs.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 flex-shrink-0" />
                  Repeated analysis of the same document may yield slightly different outputs due to
                  inherent variability in AI systems.
                </li>
              </ul>
              <p>
                LeasePlain makes no warranty, express or implied, about the accuracy, completeness,
                or usefulness of any analysis provided.
              </p>
            </div>
          </section>

          {/* Jurisdiction Variations */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Jurisdiction Variations</h2>
            </div>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                Residential tenancy law varies significantly between Canadian provinces, US states,
                and other jurisdictions. What is legal or standard in one jurisdiction may be
                prohibited or unusual in another.
              </p>
              <p>
                LeasePlain attempts to account for jurisdiction-specific rules when a lease
                identifies its jurisdiction. However, our analysis may not capture every local
                variation, recent amendment, or jurisdiction-specific nuance. Always verify
                jurisdiction-specific claims with a qualified local professional.
              </p>
              <p>
                LeasePlain is currently optimized for Canadian and US residential leases. Use of
                LeasePlain for leases in other countries is at your own risk, and jurisdiction
                accuracy cannot be guaranteed.
              </p>
            </div>
          </section>

          {/* When to Consult a Lawyer */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mt-1">When to Consult a Lawyer</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              We strongly recommend consulting a licensed lawyer or paralegal in your jurisdiction
              in these situations:
            </p>
            <ul className="space-y-2">
              {[
                "You are facing eviction or a dispute with your landlord",
                "Your lease involves a significant financial commitment (commercial, long-term, or high-value residential)",
                "You are negotiating lease terms and want professional advice on your position",
                "You believe your rights under applicable tenancy law have been violated",
                "You have a complex situation: subletting, assignment, guarantor obligations, or shared tenancy",
                "You are unsure whether a clause is enforceable in your specific jurisdiction",
                "Your LeasePlain analysis flags multiple high-risk clauses",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                To the maximum extent permitted by applicable law, LeasePlain and its operators
                shall not be liable for any indirect, incidental, special, consequential, or
                punitive damages arising from your use of, or inability to use, the LeasePlain
                service or any information provided therein.
              </p>
              <p>
                This limitation applies regardless of whether such damages are based in contract,
                tort, strict liability, or any other theory, and even if LeasePlain has been
                advised of the possibility of such damages.
              </p>
            </div>
          </section>

          {/* Related Links */}
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/disclaimer" className="text-indigo-600 hover:underline">
              General Disclaimer
            </Link>
            <span className="text-slate-300">·</span>
            <Link href="/privacy" className="text-indigo-600 hover:underline">
              Privacy Policy
            </Link>
            <span className="text-slate-300">·</span>
            <Link href="/terms" className="text-indigo-600 hover:underline">
              Terms of Service
            </Link>
            <span className="text-slate-300">·</span>
            <Link href="/editorial-policy" className="text-indigo-600 hover:underline">
              Editorial Policy
            </Link>
            <span className="text-slate-300">·</span>
            <Link href="/methodology" className="text-indigo-600 hover:underline">
              Methodology
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
