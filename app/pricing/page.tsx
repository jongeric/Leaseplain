import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Check, Heart, ChevronRight } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Pricing | LeasePlain Is 100% Free",
  description:
    "LeasePlain is completely free. Analyze your lease, use every tool, generate letters, and read every guide — no account required, no paywall, no catch.",
  alternates: { canonical: "https://leaseplain.com/pricing" },
  openGraph: {
    title: "Pricing | LeasePlain Is 100% Free",
    description:
      "Everything on LeasePlain is free — lease analysis, tools, letters, and guides. No paywall, no catch.",
    url: "https://leaseplain.com/pricing",
    type: "website",
  },
};

const freeSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "LeasePlain Lease Analyzer",
  description: "AI-powered residential lease analysis for renters — completely free.",
  url: "https://leaseplain.com/pricing",
  brand: { "@type": "Organization", name: "LeasePlain" },
  offers: {
    "@type": "Offer",
    name: "Free",
    price: "0",
    priceCurrency: "CAD",
    availability: "https://schema.org/InStock",
    url: "https://leaseplain.com/upload",
  },
};

const included = [
  "Full AI lease analysis — every section, no locked content",
  "Unlimited analyses",
  "Red flags, financial terms, and unclear clauses",
  "Questions to ask your landlord & negotiation tips",
  "All calculators and tools",
  "Letter generators (repair requests, disputes, notices)",
  "Printable checklists and every guide",
];

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(freeSchema).replace(/</g, "\\u003c") }} />
      <div className="flex flex-col min-h-full">
        <Navbar />
        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-3xl mx-auto text-center">
              <BreadcrumbNav className="mb-4 justify-center" items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 border border-green-200 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
                <Heart className="w-4 h-4" aria-hidden="true" />
                Free for everyone
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight">
                LeasePlain is 100% free
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed speakable-summary">
                No plans, no paywall, no catch. Every renter deserves to understand their lease — so
                everything here is free to use. No account required to analyze a lease.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-2xl mx-auto">
              <div className="rounded-3xl border-2 border-indigo-100 bg-white shadow-sm p-8">
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-extrabold text-slate-900">$0</span>
                    <span className="text-slate-500 font-medium">/ forever</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-700" aria-hidden="true" />
                      </span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/upload"
                  className="flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-indigo-700 transition-colors w-full"
                >
                  Analyze My Lease Free
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-8 text-center rounded-2xl bg-slate-50 border border-slate-100 p-6">
                <h2 className="font-bold text-slate-900 mb-2">How is this free?</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We keep LeasePlain free by partnering with legal-aid clinics, universities, and
                  tenant-focused organizations. If you run one, we&apos;d love to work together —
                  see our{" "}
                  <Link href="/partners" className="text-indigo-700 font-semibold hover:underline">partners page</Link>.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
