import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  BookOpen,
  CheckSquare,
  Zap,
  Users,
  Building2,
  ChevronRight,
  Upload,
  AlertTriangle,
} from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Resources for Renters and Landlords | LeasePlain",
  description:
    "Plain-English guides to understand leases, spot red flags, and know what to check before signing. Free lease resources for Canadian renters and landlords.",
  alternates: { canonical: "https://leaseplain.com/resources" },
  openGraph: {
    title: "Lease Resources for Renters and Landlords | LeasePlain",
    description: "Plain-English guides to understand leases, spot red flags, and know what to check before signing. Free lease resources for Canadian renters and landlords.",
    url: "https://leaseplain.com/resources",
    type: "website",
  },
};

const categories = [
  {
    title: "Lease Basics",
    href: "/resources/lease-basics",
    icon: BookOpen,
    description: "Master the fundamentals of lease agreements",
    links: [
      { label: "What Is a Lease?", href: "/resources/what-is-a-lease-agreement" },
      { label: "How to Read a Lease", href: "/resources/how-to-read-a-lease" },
      { label: "Lease Explained", href: "/resources/lease-agreement-explained" },
      { label: "Lease vs Rental", href: "/resources/lease-vs-rental-agreement" },
    ],
  },
  {
    title: "Before You Sign",
    href: "/resources/before-you-sign",
    icon: CheckSquare,
    description: "Know what to look for before committing",
    links: [
      { label: "What to Check", href: "/resources/check-before-signing-lease" },
      { label: "Lease Red Flags", href: "/resources/lease-red-flags" },
      { label: "Questions to Ask", href: "/resources/questions-before-signing" },
      { label: "Hidden Fees", href: "/resources/hidden-lease-fees" },
    ],
  },
  {
    title: "AI Lease Review",
    href: "/resources/ai-lease-review",
    icon: Zap,
    description: "How AI can help you understand your lease",
    links: [
      { label: "What Is AI Analyzer?", href: "/resources/what-is-ai-lease-analyzer" },
      { label: "AI vs Lawyer", href: "/resources/ai-lease-review-vs-lawyer" },
      { label: "Can AI Explain a Lease?", href: "/resources/can-ai-explain-a-lease" },
      { label: "Is AI Lease Review Accurate?", href: "/resources/is-ai-lease-review-accurate" },
      { label: "LeasePlain vs ChatGPT", href: "/resources/leaseplain-vs-chatgpt" },
      { label: "Upload Lease for Review", href: "/resources/upload-lease-for-review" },
    ],
  },
  {
    title: "Tenant Guides",
    href: "/resources/tenant-guides",
    icon: Users,
    description: "Guides for every type of renter",
    links: [
      { label: "First-Time Renter", href: "/resources/first-time-renter-guide" },
      { label: "Student Lease", href: "/resources/student-lease-guide" },
      { label: "Condo Lease", href: "/resources/condo-lease-guide" },
      { label: "Apartment Lease", href: "/resources/apartment-lease-guide" },
    ],
  },
  {
    title: "Landlord Guides",
    href: "/resources/landlord-guides",
    icon: Building2,
    description: "Resources for property owners",
    links: [
      { label: "Landlord Checklist", href: "/resources/landlord-lease-checklist" },
      { label: "Common Mistakes", href: "/resources/landlord-lease-mistakes" },
      { label: "Should You Pay a Lawyer?", href: "/resources/should-you-pay-lawyer-review-lease" },
    ],
  },
];

const featured = [
  {
    title: "How to Read a Lease Agreement",
    description:
      "A step-by-step walkthrough of every section in a residential lease — what each clause means and what to watch for.",
    href: "/resources/how-to-read-a-lease",
    icon: BookOpen,
  },
  {
    title: "Lease Red Flags: 15 Warning Signs",
    description:
      "The most common problematic clauses in residential leases, what they mean for you, and whether they're enforceable in Ontario.",
    href: "/resources/lease-red-flags",
    icon: AlertTriangle,
  },
  {
    title: "What to Check Before Signing",
    description:
      "A practical checklist of everything you should verify — about the unit, the landlord, and the lease terms — before signing.",
    href: "/resources/check-before-signing-lease",
    icon: CheckSquare,
  },
  {
    title: "AI Lease Review vs. a Lawyer",
    description:
      "When AI is the right tool and when you need a lawyer. A side-by-side comparison to help you decide.",
    href: "/resources/ai-lease-review-vs-lawyer",
    icon: Zap,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/resources",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".speakable-summary"]
            }
          }).replace(/</g, "\u003c")
        }}
      />
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              Free Lease Resources
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight max-w-3xl">
              Lease Resources for Renters and Landlords
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Plain-English guides to understand leases, spot red flags, and know what to check
              before signing.
            </p>
          </div>
        </section>

        {/* Browse by Category */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Browse by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={cat.href}
                    className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6 flex flex-col gap-4 hover:border-blue-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                      </div>
                      <div>
                        <Link
                          href={cat.href}
                          className="font-bold text-slate-900 hover:text-blue-600 transition-colors text-lg leading-tight"
                        >
                          {cat.title}
                        </Link>
                        <p className="text-sm text-slate-500 mt-1">{cat.description}</p>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-1.5 pl-14">
                      {cat.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <ChevronRight className="w-3 h-3" aria-hidden="true" />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={cat.href}
                      className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline"
                    >
                      View all in {cat.title}
                      <ChevronRight className="w-3 h-3" aria-hidden="true" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-14 px-4 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featured.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group bg-white border border-slate-100 rounded-2xl shadow-sm p-6 flex items-start gap-4 hover:border-blue-200 hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 flex-shrink-0 self-center transition-colors" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">Upload Your Lease for AI Review</h2>
              <p className="text-blue-100 leading-relaxed max-w-xl">
                Guides are a great start — but your lease is unique. Upload it and get a
                plain-English breakdown of every clause in seconds.
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
                  { q: "What resources does LeasePlain offer for tenants?", a: "LeasePlain provides AI-powered lease analysis, plain-English guides on tenant rights by province, lease clause explanations, province-specific legal information, and answers to common renting questions — all free." },
                  { q: "Is the information on LeasePlain specific to Canadian law?", a: "Yes, LeasePlain's content focuses heavily on Canadian provincial tenancy law (Ontario, BC, Alberta, Quebec, and more) as well as US state laws. Content is clearly labeled by jurisdiction." },
                  { q: "How is LeasePlain different from a Google search about tenant rights?", a: "LeasePlain analyzes your specific lease and flags problem clauses in context. Generic search results tell you the law but don't tell you whether your actual lease violates it. LeasePlain bridges that gap." },
                  { q: "Can I use LeasePlain to prepare for a lease negotiation?", a: "Yes. Upload or paste your proposed lease and LeasePlain will flag unusual terms and suggest specific negotiation points — giving you concrete talking points before you meet with a landlord." },
                  { q: "Does LeasePlain replace a lawyer?", a: "No. LeasePlain provides lease clarity and education, not legal advice. If you face eviction, a complex dispute, or need advice for a specific legal situation, consult a licensed lawyer or free tenant legal clinic." }
                ]} />
              </div>
      </main>
      <Footer />
    </div>
    </>
  );
}
