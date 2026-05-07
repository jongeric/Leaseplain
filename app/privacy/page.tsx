import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy | LeasePlain",
  description: "LeasePlain's privacy policy — how we handle your data, your lease documents, and your personal information.",
  alternates: { canonical: "https://leaseplain.com/privacy" },
};

const lastUpdated = "May 6, 2026";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-slate-900 mb-3">Privacy Policy</h1>
            <p className="text-sm text-slate-400">Last updated: {lastUpdated}</p>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-10 text-sm text-slate-700 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Who We Are</h2>
              <p>
                LeasePlain (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the website leaseplain.com and the lease
                analysis service available through it. We are committed to protecting your personal
                information and being transparent about how we use it.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
              <p className="mb-3"><strong>Account information:</strong> When you create an account, we collect your email address and a password (stored as a secure hash). We do not collect your name unless you provide it.</p>
              <p className="mb-3"><strong>Lease documents:</strong> When you upload a lease for analysis, the document is transmitted to our servers for processing. It is analyzed immediately and then permanently deleted. We do not store lease documents beyond the duration of the analysis.</p>
              <p className="mb-3"><strong>Analysis reports:</strong> If you have an account, we store the generated analysis report (not your original lease document) in your account history. You can delete these at any time from your dashboard.</p>
              <p><strong>Usage data:</strong> We collect basic usage information (pages visited, features used, error logs) for product improvement. This data is not linked to your lease content.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>To provide the lease analysis service</li>
                <li>To maintain your account and report history</li>
                <li>To process billing and subscription management (via Stripe)</li>
                <li>To improve our product through aggregated, anonymized usage data</li>
                <li>To respond to support requests</li>
              </ul>
              <p className="mt-3">We do not sell your personal information. We do not use your lease documents to train AI models.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Lease Document Privacy</h2>
              <p className="mb-3">
                Your lease document is handled with care. When you upload a lease:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>The document is transmitted using encrypted HTTPS.</li>
                <li>It is processed in memory to generate your analysis report.</li>
                <li>The original document is permanently deleted immediately after the analysis completes.</li>
                <li>We do not store, index, or share your lease document with any third parties.</li>
                <li>Your lease is never used to train machine learning models.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Third-Party Services</h2>
              <p className="mb-3">We use the following third-party services:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Anthropic (Claude API):</strong> Our AI analysis is powered by Anthropic's API. Lease content processed through the API is subject to Anthropic's data handling policies. We use the API in a manner that does not permit Anthropic to retain or train on your data.</li>
                <li><strong>Stripe:</strong> Payment processing. We do not store credit card information. Stripe is PCI-DSS compliant.</li>
                <li><strong>Google Tag Manager / Analytics:</strong> Aggregated, anonymized traffic and usage analytics.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Your Rights</h2>
              <p className="mb-3">Depending on your jurisdiction, you may have rights including:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>The right to access your personal information</li>
                <li>The right to delete your account and associated data</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to data portability</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:legal@leaseplain.com" className="text-blue-600 hover:underline">legal@leaseplain.com</a>. We respond within 30 days.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Data Retention</h2>
              <p>
                Account data is retained for as long as your account is active. If you delete your
                account, all associated data — including analysis reports — is permanently deleted
                within 30 days. Lease documents are never retained beyond the analysis session.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Security</h2>
              <p>
                We use industry-standard security measures including encryption in transit (TLS),
                encrypted storage for sensitive data, and access controls. No system is perfectly
                secure — but we take reasonable steps to protect your information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. We will notify registered users of
                material changes by email. The &ldquo;last updated&rdquo; date at the top of this page reflects
                the most recent revision.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">10. Contact</h2>
              <p>
                For privacy-related questions or requests, contact us at{" "}
                <a href="mailto:legal@leaseplain.com" className="text-blue-600 hover:underline">
                  legal@leaseplain.com
                </a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
