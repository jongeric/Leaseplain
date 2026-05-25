import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import CTASection from "@/components/CTASection";
import { CheckCircle, XCircle, ChevronRight, Upload, AlertTriangle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Free Lease Review Online: Your Options in 2026 | LeasePlain",
  description:
    "Compare your options for getting a lease reviewed for free online — AI tools, legal clinics, tenant helplines, and what each can and can't do.",
  keywords: [
    "free lease review online",
    "lease review free Canada",
    "tenant legal clinic",
    "AI lease review",
    "provincial tenant helpline",
  ],
  alternates: { canonical: "https://leaseplain.com/resources/free-lease-review-online" },
  openGraph: {
    title: "Free Lease Review Online: Your Options in 2026 | LeasePlain",
    description:
      "Compare your options for getting a lease reviewed for free online — AI tools, legal clinics, tenant helplines, and what each can and can't do.",
    url: "https://leaseplain.com/resources/free-lease-review-online",
    type: "website",
  },
};

const options = [
  {
    name: "AI Lease Review Tools (e.g. LeasePlain)",
    pros: [
      "Available 24/7 — instant results, no appointment needed",
      "Purpose-built for Canadian lease analysis with provincial law awareness",
      "Structured output: red flags, financial summary, negotiation points",
      "Free to use",
      "Privacy-focused — document processed and discarded",
    ],
    cons: [
      "Not legal advice — cannot represent you at tribunal",
      "Less effective for highly unusual or commercial-style leases",
      "Cannot draft response letters or negotiate on your behalf",
    ],
    bestFor: "First-time renters who want to understand their lease before signing a standard residential tenancy.",
    highlight: true,
  },
  {
    name: "Free Legal Clinics (e.g. CLEO, Community Legal Clinics)",
    pros: [
      "Staffed by qualified lawyers and paralegals",
      "Can provide actual legal advice",
      "Often available to anyone, not just low-income renters",
      "Know provincial tenancy law in depth",
    ],
    cons: [
      "Wait times — typically days to weeks for an appointment",
      "Many clinics have income or eligibility criteria",
      "Not available outside business hours",
      "May not do full lease review; focused on specific legal questions",
    ],
    bestFor: "Tenants with specific legal questions, ongoing disputes, or who need advice they can act on formally.",
    highlight: false,
  },
  {
    name: "Provincial Tenant Helplines",
    pros: [
      "Free phone support from knowledgeable staff",
      "Province-specific guidance (e.g. Ontario's Landlord and Tenant Board info line)",
      "Can explain your rights and next steps",
      "No eligibility requirements in most provinces",
    ],
    cons: [
      "Phone-only, often with long hold times",
      "Not legal advice — staff cannot tell you if your lease clause is enforceable",
      "Limited ability to review a lease document directly",
      "Not available 24/7",
    ],
    bestFor: "Renters with procedural questions — how to file an application, what forms to use, what the process looks like.",
    highlight: false,
  },
  {
    name: "ChatGPT / General AI Assistants",
    pros: [
      "Available instantly and free",
      "Can explain plain English meaning of clauses",
      "Good for follow-up questions on specific language",
    ],
    cons: [
      "No knowledge of current provincial tenancy law",
      "No structured output — requires you to know what to ask",
      "High hallucination risk for specific legal rules",
      "Cannot identify Ontario-specific violations (e.g. illegal key deposits)",
      "Conversation data may be used for training",
    ],
    bestFor:
      "Getting a plain-English explanation of a single clause you don't understand, not a full lease review.",
    highlight: false,
  },
  {
    name: "Tenant Advocacy Groups",
    pros: [
      "Deep knowledge of local housing issues",
      "Can help with LTB/RTB applications and hearings",
      "Community support and organizing resources",
      "Often free for tenants",
    ],
    cons: [
      "Not available in all cities or regions",
      "Primarily focused on disputes and advocacy, not lease review",
      "May have limited capacity and waitlists",
    ],
    bestFor:
      "Tenants in active disputes, facing eviction, or living in buildings with systemic issues.",
    highlight: false,
  },
];

const recommendationMatrix = [
  { situation: "Reviewing a standard Ontario lease before signing", recommendation: "LeasePlain", why: "Instant, structured, Ontario RTA-aware" },
  { situation: "Landlord is trying to evict you", recommendation: "Tenant advocacy group + legal clinic", why: "You need actual legal advice and possibly representation" },
  { situation: "Understanding what a single confusing clause means", recommendation: "ChatGPT or LeasePlain", why: "Both work for clause-level explanation" },
  { situation: "Filing an LTB application", recommendation: "Ontario LTB info line or legal clinic", why: "Procedural guidance and form help" },
  { situation: "Landlord demanding illegal upfront fees", recommendation: "Legal clinic or tenant helpline", why: "Confirm illegality and get advice on next steps" },
  { situation: "First-time renter, no specific issue", recommendation: "LeasePlain first, legal clinic if red flags found", why: "Start with free AI review, escalate if needed" },
];

const faqs = [
  {
    q: "Can I get my lease reviewed for free in Ontario?",
    a: "Yes. LeasePlain provides free AI-powered lease review. Community Legal Clinics across Ontario also offer free advice. The Ontario Landlord and Tenant Board information line (1-888-332-3234) provides procedural guidance at no cost. For in-person help, CLEO (Community Legal Education Ontario) offers resources and referrals.",
  },
  {
    q: "Is AI lease review as good as having a lawyer review your lease?",
    a: "They serve different purposes. AI review is excellent for understanding what your lease says, flagging unusual clauses, and identifying potential issues quickly. A lawyer can give you actual legal advice, tell you exactly what is and isn't enforceable in your province, and represent you if there's a dispute. For a standard residential lease, AI review is a strong first step — consult a lawyer if serious red flags are found.",
  },
  {
    q: "What is Community Legal Education Ontario (CLEO)?",
    a: "CLEO is an Ontario non-profit that produces free legal information and tools for tenants and other vulnerable groups. Their 'Steps to Justice' website (stepstojustice.ca) has plain-language guides to Ontario tenant rights, LTB applications, and eviction procedures. They don't provide individual legal advice but connect you to resources that do.",
  },
  {
    q: "What can provincial tenant helplines actually help with?",
    a: "Tenant helplines can explain your rights, help you understand what forms to file, and tell you how the tribunal process works. They typically cannot review your lease document, give you legal advice, or tell you definitively whether a specific clause is enforceable. They're most useful when you have a procedural question — what form do I need, what is the deadline, how does the hearing work.",
  },
  {
    q: "Does LeasePlain work for BC and Quebec leases, not just Ontario?",
    a: "Yes. LeasePlain is trained on Canadian provincial tenancy law across Ontario, British Columbia, Alberta, and Quebec. The analysis identifies province-specific issues — BC's security deposit rules, Quebec's mandatory lease form (bail), Alberta's notice period requirements — and flags clauses that conflict with each province's residential tenancy legislation.",
  },
];

export default function FreeLeaseReviewOnlinePage() {
  return (
    <>
      <ArticleSchema
        headline="Free Lease Review Online: Your Options in 2026"
        description="Compare your options for getting a lease reviewed for free online — AI tools, legal clinics, tenant helplines, and what each can and can't do."
        url="https://leaseplain.com/resources/free-lease-review-online"
        datePublished="2026-03-01"
        dateModified="2026-05-18"
        keywords={["free lease review online", "lease review free Canada", "tenant legal clinic", "AI lease review", "provincial tenant helpline"]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/resources/free-lease-review-online",
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
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <BreadcrumbNav
                items={[
                  { label: "Home", href: "/" },
                  { label: "Resources", href: "/resources" },
                  { label: "Free Lease Review Online" },
                ]}
                className="text-indigo-300 mb-6 [&_a]:text-indigo-300 [&_a:hover]:text-white [&_span.text-slate-900]:text-white"
              />
              <h1 className="text-4xl font-bold mb-4">Free Lease Review Online: Your Options in 2026</h1>
              <p className="text-xl text-slate-300 max-w-2xl speakable-summary">
                Five ways to get your lease reviewed without paying a lawyer — what each option
                can do, what it can&apos;t, and who each is best for.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">

                {/* Intro */}
                <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-4">The Landscape for Free Lease Review</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Canadian renters have more free lease review options than ever — but they vary
                    significantly in speed, depth, and what they can legally do for you. This guide
                    compares five real options so you can choose the right one for your situation.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    The short version: AI tools are the fastest and most accessible for understanding
                    your lease before signing. Legal clinics and advocacy groups are best once a
                    problem has already emerged. Tenant helplines are useful for procedural guidance.
                    General AI assistants like ChatGPT can help with individual clause explanations
                    but should not be relied on for provincial law accuracy.
                  </p>
                </section>

                {/* Option Cards */}
                {options.map((option, i) => (
                  <section
                    key={i}
                    className={`rounded-2xl border shadow-sm p-8 ${
                      option.highlight
                        ? "bg-indigo-50 border-indigo-200"
                        : "bg-white border-slate-100"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <h2 className={`text-xl font-bold ${option.highlight ? "text-indigo-900" : "text-slate-900"}`}>
                        Option {i + 1}: {option.name}
                      </h2>
                      {option.highlight && (
                        <span className="text-xs font-semibold bg-indigo-200 text-indigo-900 px-2.5 py-1 rounded-full whitespace-nowrap">
                          Recommended start
                        </span>
                      )}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">Pros</p>
                        <ul className="space-y-1.5">
                          {option.pros.map((p, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                              <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">Cons</p>
                        <ul className="space-y-1.5">
                          {option.cons.map((c, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                              <XCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className={`rounded-xl p-4 text-sm ${option.highlight ? "bg-indigo-100 text-indigo-800" : "bg-slate-50 text-slate-700"}`}>
                      <span className="font-semibold">Best for: </span>{option.bestFor}
                    </div>
                  </section>
                ))}

                {/* Recommendation Matrix */}
                <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-5">Recommendation Matrix</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-50">
                          <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Your Situation</th>
                          <th className="text-left p-3 border border-slate-200 font-semibold text-indigo-700">Best Option</th>
                          <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Why</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recommendationMatrix.map((row, i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="p-3 border border-slate-200 text-slate-700">{row.situation}</td>
                            <td className="p-3 border border-slate-200 font-medium text-indigo-700">{row.recommendation}</td>
                            <td className="p-3 border border-slate-200 text-slate-600">{row.why}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Disclaimer */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3 text-sm text-amber-900">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p>
                    None of the free options listed here constitute legal advice. For disputes,
                    eviction proceedings, or complex lease negotiations, always consult a licensed
                    lawyer or paralegal. See our{" "}
                    <Link href="/legal-disclaimer" className="underline">
                      Legal Disclaimer
                    </Link>
                    .
                  </p>
                </div>

                {/* FAQ */}
                <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqs} />
                </section>

                {/* Internal Links */}
                <div className="text-sm text-slate-600">
                  <p className="font-medium text-slate-900 mb-2">Related reading:</p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/resources/leaseplain-vs-chatgpt" className="text-indigo-600 hover:underline">
                      LeasePlain vs ChatGPT
                    </Link>
                    <span className="text-slate-300">·</span>
                    <Link href="/resources/ai-lease-review-vs-lawyer" className="text-indigo-600 hover:underline">
                      AI review vs a lawyer
                    </Link>
                    <span className="text-slate-300">·</span>
                    <Link href="/resources/can-chatgpt-review-a-lease" className="text-indigo-600 hover:underline">
                      Can ChatGPT review a lease?
                    </Link>
                    <span className="text-slate-300">·</span>
                    <Link href="/resources/should-you-pay-lawyer-review-lease" className="text-indigo-600 hover:underline">
                      Should you pay a lawyer to review your lease?
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="flex flex-col gap-5">
                <div className="bg-indigo-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Start with free AI review</h3>
                  <p className="text-indigo-100 text-sm mb-5 leading-relaxed">
                    Upload your lease and get a structured, plain-English analysis in seconds.
                    Jurisdiction-aware for all Canadian provinces.
                  </p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-indigo-50 transition-colors text-sm w-full justify-center"
                  >
                    <Upload className="w-4 h-4" aria-hidden="true" />
                    Analyze My Lease
                  </Link>
                  <p className="text-xs text-indigo-200 mt-3 text-center">Free · Not legal advice</p>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Free Legal Resources</h3>
                  <ul className="flex flex-col gap-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold flex-shrink-0">→</span>
                      <span><strong>Ontario:</strong> CLEO (stepstojustice.ca), LTB info line</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold flex-shrink-0">→</span>
                      <span><strong>BC:</strong> TRAC (tenants.bc.ca)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold flex-shrink-0">→</span>
                      <span><strong>Alberta:</strong> RTDRS info line</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold flex-shrink-0">→</span>
                      <span><strong>Quebec:</strong> Tribunal administratif du logement</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "AI Lease Review vs Lawyer", href: "/resources/ai-lease-review-vs-lawyer" },
                      { label: "Can ChatGPT Review a Lease?", href: "/resources/can-chatgpt-review-a-lease" },
                      { label: "Ontario Standard Lease Guide", href: "/resources/ontario-standard-lease-guide" },
                    ].map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="text-sm text-indigo-600 hover:underline flex items-center gap-1">
                          <ChevronRight className="w-3 h-3" aria-hidden="true" />
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </main>

        <CTASection
          heading="Get your lease reviewed in 60 seconds — free"
          subheading="Upload your lease and get a structured analysis. No account required."
          variant="dark"
        />

        <Footer />
      </div>
    </>
  );
}
