import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import {

export const dynamic = "force-static";
  ShieldCheck,
  Zap,
  Users,
  Globe,
  BookOpen,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Scale,
  FileText,
  DollarSign,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About LeasePlain – AI Lease Analysis for Every Renter | LeasePlain",
  description:
    "LeasePlain was built on a simple belief: every renter deserves to understand what they're signing. Learn our mission, who we help, what we analyze, and our AI limitations.",
  alternates: { canonical: "https://leaseplain.com/about" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://leaseplain.com/about#webpage",
      url: "https://leaseplain.com/about",
      name: "About LeasePlain",
      isPartOf: { "@id": "https://leaseplain.com/#website" },
      about: { "@id": "https://leaseplain.com/#organization" },
      description:
        "Learn about LeasePlain's mission to make lease language understandable for every renter.",
    },
    {
      "@type": "Organization",
      "@id": "https://leaseplain.com/#organization",
      name: "LeasePlain",
      url: "https://leaseplain.com",
      foundingDate: "2024",
      description:
        "LeasePlain is an educational platform that uses AI to translate residential lease agreements into plain English, helping tenants understand what they're signing before they commit.",
      knowsAbout: [
        "Residential Lease Agreements",
        "Tenant Rights",
        "Real Estate Law",
        "AI Document Analysis",
        "Canadian Tenancy Law",
        "US Residential Tenancy",
      ],
      areaServed: ["Canada", "United States"],
    },
  ],
};

const whoWeHelp = [
  {
    icon: Users,
    title: "First-time renters",
    description:
      "Never signed a lease before? We break down every section so you know exactly what you're agreeing to.",
  },
  {
    icon: Globe,
    title: "Newcomers & immigrants",
    description:
      "Navigating a new country's rental system is hard enough. We translate both the language and the legal concepts.",
  },
  {
    icon: BookOpen,
    title: "Students",
    description:
      "Student leases often have extra clauses — guarantor requirements, joint liability, occupancy limits. We flag them all.",
  },
  {
    icon: Users,
    title: "Seniors",
    description:
      "Lease agreements have grown longer and more complex. We cut through the jargon to surface what actually matters.",
  },
  {
    icon: TrendingUp,
    title: "Relocating professionals",
    description:
      "Moving quickly for work? Get a clear picture of your obligations before you sign, even on a tight timeline.",
  },
  {
    icon: Scale,
    title: "Anyone facing an unfamiliar lease",
    description:
      "Different provinces, different states, different landlords — leases vary widely. We help you understand yours specifically.",
  },
];

const analysisCategories = [
  {
    icon: FileText,
    title: "Lease Summary",
    description:
      "A plain-English overview of the entire agreement: who the parties are, the property address, lease term, rent amount, and key dates.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: DollarSign,
    title: "Financial Terms",
    description:
      "Security deposit amount and return conditions, rent increase provisions, late fees, NSF charges, and any additional costs you're responsible for.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: AlertTriangle,
    title: "Red Flags",
    description:
      "Clauses that may be unusual, potentially unenforceable, or that significantly favour the landlord beyond standard terms.",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: MessageSquare,
    title: "Unclear Clauses",
    description:
      "Vague or ambiguous language that could be interpreted multiple ways — exactly the kind of thing that causes disputes later.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: BookOpen,
    title: "Questions to Ask",
    description:
      "Specific questions you should raise with your landlord before signing, based on the unique content of your lease.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: TrendingUp,
    title: "Negotiation Points",
    description:
      "Clauses where tenants commonly negotiate, and what reasonable alternatives look like — so you can advocate for yourself.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const aiCanDo = [
  "Identify and explain lease clauses in plain English",
  "Flag potentially problematic or unusual terms",
  "Compare clauses to typical residential lease standards",
  "Generate specific questions to ask your landlord",
  "Summarize financial obligations clearly",
  "Highlight areas of ambiguity or risk",
];

const aiCannotDo = [
  "Provide legal advice or represent you legally",
  "Guarantee clause enforceability in your jurisdiction",
  "Replace the judgment of a licensed lawyer or paralegal",
  "Account for your specific personal circumstances",
  "Predict how a court would interpret a disputed clause",
  "Catch every error — AI can miss context or nuance",
];

const faqs = [
  {
    q: "Is LeasePlain free to use?",
    a: "Yes, LeasePlain offers free lease analysis. Upload your lease and receive a full plain-English breakdown at no cost.",
  },
  {
    q: "Does LeasePlain store my lease document?",
    a: "No. Your lease is processed in real time and immediately discarded after analysis. We do not store your document, share it with third parties, or use it to train AI models.",
  },
  {
    q: "Which provinces and states does LeasePlain cover?",
    a: "LeasePlain currently covers all Canadian provinces and territories, with United States coverage expanding. Our AI understands jurisdiction-specific rules for provinces like Ontario, BC, Alberta, Quebec, and more.",
  },
  {
    q: "Can LeasePlain replace a lawyer?",
    a: "No — and we're clear about that. LeasePlain is an educational tool for understanding your lease. For disputes, complex negotiations, or high-value commercial leases, always consult a licensed lawyer or paralegal.",
  },
  {
    q: "What file formats does LeasePlain accept?",
    a: "LeasePlain accepts PDF files (both native and scanned), Microsoft Word documents (.docx), and image files. Scanned documents are processed with OCR technology.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />

      <main>
        {/* Hero */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <BreadcrumbNav
              items={[
                { label: "Home", href: "/" },
                { label: "About" },
              ]}
              className="text-indigo-300 mb-6 [&_a]:text-indigo-300 [&_a:hover]:text-white [&_span.text-slate-900]:text-white [&_.text-slate-300]:text-indigo-300"
            />
            <h1 className="text-4xl font-bold mb-4">About LeasePlain</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              We believe every renter deserves to understand what they&apos;re signing. Leases are
              written by lawyers, for landlords. We translate them for everyone else.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
          {/* Mission */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-700 leading-relaxed mb-4 text-lg font-medium">
              &ldquo;We believe every renter deserves to understand what they&apos;re signing.&rdquo;
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Residential leases in Canada and the United States can run 30–50 pages of dense legal
              language. For most tenants — especially those renting for the first time, newcomers
              navigating an unfamiliar system, or anyone under time pressure — that language is nearly
              impossible to parse. The result: people sign agreements they don&apos;t fully understand,
              sometimes with clauses that violate their legal rights.
            </p>
            <p className="text-slate-600 leading-relaxed">
              LeasePlain exists to close that gap. We use AI to do what it does best: read complex
              documents and explain them clearly. In under a minute, you get a plain-English summary
              of your entire lease — what it says, what it means, what looks unusual, and what to ask
              your landlord before you commit.
            </p>
          </section>

          {/* Who We Help */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Who We Help</h2>
            <p className="text-slate-600 mb-6">
              LeasePlain is built for anyone facing a lease they don&apos;t fully understand.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whoWeHelp.map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-50 border border-slate-100 rounded-xl p-5"
                >
                  <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center mb-3">
                    <item.icon className="w-4.5 h-4.5 text-indigo-600" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What We Analyze */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">What We Analyze</h2>
            <p className="text-slate-600 mb-6">
              Every LeasePlain analysis covers six core categories:
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {analysisCategories.map((cat) => (
                <div key={cat.title} className="flex gap-4">
                  <div
                    className={`w-10 h-10 ${cat.bg} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}
                  >
                    <cat.icon className={`w-5 h-5 ${cat.color}`} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 text-sm">{cat.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{cat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Countries Served */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Where We Operate</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-indigo-600" />
                  Canada — Full Coverage
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  LeasePlain covers all Canadian provinces and territories, with specific awareness of
                  provincial tenancy legislation including the Residential Tenancies Act (Ontario),
                  Residential Tenancy Act (BC, Alberta), and Civil Code (Quebec).
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Ontario",
                    "British Columbia",
                    "Alberta",
                    "Quebec",
                    "Manitoba",
                    "Saskatchewan",
                    "Nova Scotia",
                    "New Brunswick",
                    "PEI",
                    "Newfoundland",
                    "Yukon",
                    "NWT",
                    "Nunavut",
                  ].map((p) => (
                    <span
                      key={p}
                      className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-600" />
                  United States — Expanding
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  US coverage is actively expanding. LeasePlain currently analyzes leases from all
                  US states, with ongoing improvements to state-specific landlord-tenant law
                  awareness.
                </p>
                <Link
                  href="/united-states"
                  className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
                >
                  View US state coverage →
                </Link>
              </div>
            </div>
          </section>

          {/* AI Limitations */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              What AI Can — and Cannot — Do
            </h2>
            <p className="text-slate-600 mb-6">
              We&apos;re transparent about the boundaries of AI-powered lease analysis. Here&apos;s what that
              means in practice:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="flex items-center gap-2 font-semibold text-slate-900 mb-3">
                  <CheckCircle className="w-4 h-4 text-green-600" /> AI can do this well
                </h3>
                <ul className="space-y-2">
                  {aiCanDo.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="flex items-center gap-2 font-semibold text-slate-900 mb-3">
                  <XCircle className="w-4 h-4 text-red-600" /> AI has limits here
                </h3>
                <ul className="space-y-2">
                  {aiCannotDo.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <XCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
              <strong>When you should consult a lawyer:</strong> For disputes with your landlord,
              commercial leases, lease negotiations involving significant money, or any situation
              where your housing is at risk — please consult a licensed lawyer or paralegal in your
              jurisdiction.
            </div>
          </section>

          {/* Trust Signals */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What LeasePlain Is Not</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm">Not a law firm</h3>
                  <p className="text-sm text-slate-600">
                    LeasePlain is an educational technology platform, not a law firm. We do not
                    provide legal advice, and no attorney-client relationship is formed by using our
                    service.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Scale className="w-4 h-4 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm">
                    Not a substitute for legal counsel
                  </h3>
                  <p className="text-sm text-slate-600">
                    Our analysis is informational only. For legal disputes, eviction proceedings,
                    lease negotiations, or any matter with significant legal or financial
                    consequences, please consult a qualified legal professional.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm">
                    Not infallible
                  </h3>
                  <p className="text-sm text-slate-600">
                    AI can miss nuance, misread poorly formatted documents, or fail to account for
                    recent changes in law. Always apply your own judgment and verify important
                    information.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Future Plans */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Where We&apos;re Headed</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              LeasePlain is continuously improving. Planned expansions include:
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                Deeper US state-by-state landlord-tenant law awareness
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                Commercial lease analysis
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                Side-by-side lease comparison (original vs. negotiated version)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                Multilingual analysis for non-English speaking tenants
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                Tenant rights database integrated directly into clause explanations
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <FAQAccordion items={faqs} />
          </section>
        </div>
      </main>

      <CTASection
        heading="Ready to understand your lease?"
        subheading="Upload your lease and get a plain-English breakdown in under a minute. Free, private, no signup required."
        variant="dark"
      />

      <Footer />
    </div>
  );
}
