import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, ChevronRight, Upload } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Landlord Guides: Lease Resources for Property Owners | LeasePlain",
  description:
    "Practical lease guides for landlords — avoid common mistakes, create airtight leases, and understand your obligations under Canadian landlord-tenant law.",
  alternates: { canonical: "https://leaseplain.com/resources/landlord-guides" },
  openGraph: {
    title: "Landlord Guides: Lease Resources for Property Owners | LeasePlain",
    description: "Practical lease guides for landlords — avoid common mistakes, create airtight leases, and understand your obligations under Canadian landlord-tenant law.",
    url: "https://leaseplain.com/resources/landlord-guides",
    type: "website",
  },
  keywords: ["landlord lease guide", "landlord obligations Canada", "residential lease tips landlord", "property owner lease help"],
};

const articles = [
  {
    title: "Landlord Lease Checklist: What Every Lease Must Include",
    description:
      "A step-by-step checklist for landlords creating or reviewing a residential lease — covering the clauses, disclosures, and terms you can't afford to miss.",
    href: "/resources/landlord-lease-checklist",
  },
  {
    title: "Common Landlord Lease Mistakes (and How to Avoid Them)",
    description:
      "The most frequent lease drafting errors that create legal exposure for landlords — and what to do instead.",
    href: "/resources/landlord-lease-mistakes",
  },
];

export default function LandlordGuidesPage() {
  return (
    <>
      <ArticleSchema
        headline="Landlord Guides: Lease Resources for Property Owners"
        description="Practical lease guides for landlords — avoid common mistakes, create airtight leases, and understand your obligations under Canadian landlord-tenant law."
        url="https://leaseplain.com/resources/landlord-guides"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["landlord lease guide", "landlord obligations Canada", "residential lease tips landlord", "property owner lease help"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Resources", href: "https://leaseplain.com/resources" },
        { name: "Landlord Guides", href: "https://leaseplain.com/resources/landlord-guides" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/resources/landlord-guides",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".speakable-summary"]
            }
          })
        }}
      />
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/resources" className="hover:underline">Resources</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Landlord Guides</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
              Landlord Guides
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight max-w-3xl">
              Landlord Guides: Lease Resources for Property Owners
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Creating a compliant, enforceable lease protects you and your tenant. These guides walk
              through what Canadian landlords need to know about drafting, reviewing, and managing
              residential lease agreements.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group bg-white border border-slate-100 rounded-2xl shadow-sm p-6 flex items-start gap-4 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed">{article.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 flex-shrink-0 self-center transition-colors" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">Review your lease before sending it</h2>
              <p className="text-blue-100 leading-relaxed max-w-xl">
                Upload any lease — as a landlord or tenant — and get a plain-English analysis of every clause.
              </p>
            </div>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap flex-shrink-0"
            >
              <Upload className="w-4 h-4" aria-hidden="true" />
              Analyze a Lease
            </Link>
          </div>
        </section>
      

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "What are a Canadian landlord's key obligations?", a: "Landlords must maintain the unit in a good state of repair, comply with housing and safety standards, give proper written notice for entry and rent increases, follow legal processes for eviction, and return deposits within the timeframe required by provincial law." },
                  { q: "Can a landlord run credit and background checks on applicants?", a: "Yes, with the applicant's consent, landlords can conduct credit and reference checks. They cannot use protected characteristics (race, religion, disability, etc.) as reasons to reject applicants." },
                  { q: "What notice must a landlord give before entering a rental unit?", a: "Most provinces require at least 24 hours' written notice. Ontario requires exactly 24 hours. BC requires 24 hours. Alberta requires 24 hours. Emergency situations may allow immediate entry. Failing to give notice can expose landlords to complaints." },
                  { q: "How does a landlord legally raise rent in Canada?", a: "Give written notice using the prescribed form, provide the required advance notice (typically 3 months), and comply with rent-increase guidelines in provinces that have them. Only one rent increase per 12-month period is generally permitted." },
                  { q: "What is the legal eviction process in Canada?", a: "The process varies by province but generally involves: serving a written notice to terminate (specifying the reason), waiting the required period, then filing an application with the tenancy tribunal if the tenant does not comply. Self-help evictions (changing locks, removing belongings) are illegal everywhere in Canada." }
                ]} />
              </div>
      </main>
      <Footer />
    </div>
    </>
  );
}
