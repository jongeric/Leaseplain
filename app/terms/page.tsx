import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/terms",
  "name": "Terms of Use | LeasePlain",
  "description": "LeasePlain terms of use — the rules governing your use of the LeasePlain service.",
  "url": "https://leaseplain.com/terms",
};

export const metadata: Metadata = {
  title: "Terms of Use | LeasePlain",
  description: "LeasePlain terms of use — the rules governing your use of the LeasePlain service.",
  alternates: { canonical: "https://leaseplain.com/terms" },
  openGraph: {
    title: "Terms of Use | LeasePlain",
    description: "LeasePlain terms of use — the rules governing your use of the LeasePlain service.",
    url: "https://leaseplain.com/terms",
    type: "website",
  },
};

const lastUpdated = "May 6, 2026";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\u003c") }} />
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-slate-900 mb-3">Terms of Use</h1>
            <p className="text-sm text-slate-400">Last updated: {lastUpdated}</p>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-10 text-sm text-slate-700 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using LeasePlain (leaseplain.com), you agree to be bound by these
                Terms of Use. If you do not agree, do not use the service. These terms apply to all
                visitors, registered users, and subscribers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Description of Service</h2>
              <p>
                LeasePlain provides an AI-powered lease analysis tool. Users may upload residential
                lease agreements to receive plain-English summaries, red flag identification, and
                related informational content. The service is provided for informational purposes only
                and does not constitute legal advice. See our{" "}
                <Link href="/disclaimer" className="text-blue-600 hover:underline">Legal Disclaimer</Link>{" "}
                for more detail.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. Eligibility</h2>
              <p>
                You must be at least 18 years old to use LeasePlain. By using the service, you
                represent that you are 18 or older and have the legal capacity to enter into these
                terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. User Accounts</h2>
              <p className="mb-3">
                Some features require a registered account. You are responsible for maintaining
                the confidentiality of your account credentials and for all activity under your account.
              </p>
              <p>
                You agree to provide accurate information when creating an account and to promptly
                update it if it changes. We reserve the right to suspend or terminate accounts that
                violate these terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Acceptable Use</h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Use the service for any unlawful purpose</li>
                <li>Upload lease documents belonging to third parties without authorization</li>
                <li>Attempt to reverse engineer, scrape, or copy the service</li>
                <li>Use automated tools to generate bulk analyses without written permission</li>
                <li>Misrepresent our analysis as legal advice</li>
                <li>Attempt to circumvent any payment or access restriction</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Subscriptions and Billing</h2>
              <p className="mb-3">
                Paid subscriptions are billed monthly. You may cancel at any time through your
                billing settings. Cancellation takes effect at the end of the current billing period —
                no refunds are issued for partial months.
              </p>
              <p>
                We reserve the right to change pricing with 30 days advance notice to subscribers.
                Continued use after a price change constitutes acceptance of the new pricing.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Intellectual Property</h2>
              <p>
                All content, design, and code on leaseplain.com is owned by LeasePlain and protected
                by copyright. You may not reproduce, distribute, or create derivative works without
                our express written permission. Analysis reports generated for your lease are for
                your personal, non-commercial use.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Disclaimer of Warranties</h2>
              <p>
                LeasePlain is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied.
                We do not warrant that the service will be uninterrupted, error-free, or that analysis
                results will be accurate, complete, or up-to-date. Use of the service is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, LeasePlain and its team are not liable for
                any indirect, incidental, special, or consequential damages arising from your use of
                the service — including damages resulting from decisions made based on our analysis.
                Our total liability to you for any claim arising from use of the service is limited
                to the amount you paid us in the 12 months preceding the claim, or $50, whichever
                is greater.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">10. Changes to Terms</h2>
              <p>
                We may update these terms at any time. We will notify registered users of material
                changes by email. Continued use of the service after changes take effect constitutes
                acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">11. Governing Law</h2>
              <p>
                These terms are governed by the laws of the Province of Ontario and the federal laws
                of Canada applicable therein. Any disputes shall be resolved in the courts of Ontario.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">12. Contact</h2>
              <p>
                For questions about these terms, contact us at{" "}
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
