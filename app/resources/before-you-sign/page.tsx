import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckSquare, ChevronRight, Upload } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Before You Sign a Lease: Complete Checklist for Renters | LeasePlain",
  description:
    "Know what to look for before committing to a rental. Guides covering what to check, red flags to watch for, questions to ask, and hidden fees.",
  alternates: { canonical: "https://leaseplain.com/resources/before-you-sign" },
  openGraph: {
    title: "Before You Sign a Lease: Complete Checklist for Renters | LeasePlain",
    description: "Know what to look for before committing to a rental. Guides covering what to check, red flags to watch for, questions to ask, and hidden fees.",
    url: "https://leaseplain.com/resources/before-you-sign",
    type: "website",
  },
  keywords: ["before signing a lease", "lease checklist renters", "lease red flags", "questions to ask landlord", "hidden lease fees"],
};

const articles = [
  {
    title: "What to Check Before Signing a Lease",
    description:
      "A practical checklist of everything to verify — about the unit, the landlord, and the lease terms — before putting pen to paper.",
    href: "/resources/check-before-signing-lease",
  },
  {
    title: "Lease Red Flags: 15 Warning Signs",
    description:
      "The most common problematic clauses in residential leases, what they mean for you, and whether they're enforceable in Ontario.",
    href: "/resources/lease-red-flags",
  },
  {
    title: "20 Questions to Ask Before Signing a Lease",
    description:
      "The questions every renter should ask their landlord before signing — about the unit, lease terms, fees, and maintenance.",
    href: "/resources/questions-before-signing",
  },
  {
    title: "How to Spot Hidden Fees in Your Lease",
    description:
      "Common fees that landlords add to leases, which ones are illegal in Ontario, and how to negotiate their removal.",
    href: "/resources/hidden-lease-fees",
  },
];

export default function BeforeYouSignPage() {
  return (
    <>
      <ArticleSchema
        headline="Before You Sign a Lease: Complete Checklist for Renters"
        description="Know what to look for before committing to a rental. Guides covering what to check, red flags to watch for, questions to ask, and hidden fees."
        url="https://leaseplain.com/resources/before-you-sign"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["before signing a lease", "lease checklist renters", "lease red flags", "questions to ask landlord", "hidden lease fees"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Resources", href: "https://leaseplain.com/resources" },
        { name: "Before You Sign", href: "https://leaseplain.com/resources/before-you-sign" },
      ]} />
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
              <span>Before You Sign</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <CheckSquare className="w-3.5 h-3.5" aria-hidden="true" />
              Before You Sign
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight max-w-3xl">
              Before You Sign a Lease: Complete Checklist for Renters
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Signing a lease is a serious commitment. These guides help you know what to look for,
              what red flags to spot, and what questions to ask before you commit.
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
                    <CheckSquare className="w-5 h-5 text-blue-600" aria-hidden="true" />
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
              <h2 className="text-3xl font-bold text-white mb-3">Not sure about your lease?</h2>
              <p className="text-blue-100 leading-relaxed max-w-xl">
                Upload your lease and get a plain-English breakdown highlighting red flags and
                unusual clauses in seconds.
              </p>
            </div>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap flex-shrink-0"
            >
              <Upload className="w-4 h-4" aria-hidden="true" />
              Analyze My Lease
            </Link>
          </div>
        </section>
      

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "What should I do before signing a lease in Canada?", a: "Read the entire lease carefully, ask about anything unclear, check provincial rules on deposits and notices, visit the unit in person, ask about utilities and parking, and use LeasePlain's AI to flag any concerning clauses before you commit." },
                  { q: "What questions should I ask a landlord before signing?", a: "Ask: What is the total monthly cost including utilities and parking? How long is the lease and what happens at the end? What is the procedure for rent increases? Is the unit legal? Who handles maintenance? Are pets allowed?" },
                  { q: "Can I negotiate a lease before signing?", a: "Yes. Many terms — including rent, parking fees, appliance inclusion, early termination rights, and pet permissions — are negotiable, especially in a tenant's market. Never assume a lease is non-negotiable just because it's a standard form." },
                  { q: "Should I take photos before moving in?", a: "Always. Take dated photos or video of every room, appliance, wall, floor, and fixture before moving in. Store these safely. If there are pre-existing damages, note them on the move-in inspection form and get the landlord's written acknowledgment." },
                  { q: "What is a move-in inspection and is it required?", a: "A move-in inspection (or condition report) documents the unit's state when you arrive. Alberta requires a joint inspection. BC strongly recommends it. A written inspection report signed by both parties protects you from unfair damage deductions at move-out." }
                ]} />
              </div>
      </main>
      <Footer />
    </div>
    </>
  );
}
