import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, ShieldCheck, Gauge, FileSearch } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Ontario Lease Review: Check Your Lease for Risks Before You Sign | LeasePlain",
  description:
    "Get your Ontario lease reviewed in minutes. LeasePlain checks your lease against the Residential Tenancies Act, flags illegal clauses, hidden fees, and landlord red flags.",
  alternates: { canonical: "https://leaseplain.com/lease-review/ontario" },
  keywords: ["Ontario lease review", "review my lease Ontario", "is my lease legal Ontario", "RTA lease check", "Ontario tenancy agreement review"],
  openGraph: {
    title: "Ontario Lease Review: Check Your Lease for Risks Before You Sign | LeasePlain",
    description: "Get your Ontario lease reviewed in minutes. LeasePlain checks your lease against the Residential Tenancies Act, flags illegal clauses, hidden fees, and landlord red flags.",
    url: "https://leaseplain.com/lease-review/ontario",
    type: "website",
  },
};

const checks = [
  { icon: ShieldCheck, title: "RTA Compliance", desc: "Every clause is checked against the Residential Tenancies Act, 2006 — Ontario's binding tenancy law." },
  { icon: Gauge, title: "Lease Risk Score", desc: "Your lease gets a 0–100 risk score so you immediately know how it stacks up." },
  { icon: FileSearch, title: "Illegal Clause Detection", desc: "Clauses that try to waive your RTA rights — even if you signed them — are flagged as unenforceable." },
];

const whatWeCheck = [
  "Security deposit and last month's rent — capped at one month's rent, no separate damage deposit allowed.",
  "Rent increase clauses — compared against the current year's provincial guideline.",
  "Early termination penalties — flagged if they exceed what's typical or enforceable.",
  "Landlord entry notice — the RTA requires 24 hours written notice; any clause waiving this is void.",
  "Maintenance and repair language — vague clauses that could shift legal landlord duties onto you.",
  "N12/N13 renoviction and personal-use language, including compensation requirements.",
];

const faqItems = [
  { q: "How does an Ontario lease review work?", a: "Upload your lease as a PDF or paste the text. LeasePlain reads every clause, compares it against the Residential Tenancies Act, 2006, and returns a plain-English report with a risk score, flagged clauses, and suggested questions for your landlord." },
  { q: "Can a lease review tell me if my Ontario lease is legal?", a: "LeasePlain flags clauses that appear to conflict with the RTA or fall outside what's typical for Ontario leases. It is an informational tool, not legal advice — for a binding legal opinion, consult a tenant duty counsel or paralegal." },
  { q: "Is my lease document kept private?", a: "Yes. Your lease is processed in real time and never stored on our servers." },
  { q: "How much does an Ontario lease review cost?", a: "A basic lease summary and risk indicators are free. The full risk assessment, illegal clause detection, and negotiation suggestions are all free too — LeasePlain is completely free, with no paywall." },
  { q: "What's the difference between this and asking ChatGPT to review my lease?", a: "LeasePlain is built specifically around Ontario tenancy law and produces a structured risk score and clause-by-clause flags, rather than a general-purpose explanation." },
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/lease-review/ontario",
  "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".speakable-summary"] },
};

export default function OntarioLeaseReviewPage() {
  return (
    <>
      <ArticleSchema
        headline="Ontario Lease Review: Check Your Lease for Risks Before You Sign"
        description="Get your Ontario lease reviewed in minutes. LeasePlain checks your lease against the Residential Tenancies Act, flags illegal clauses, hidden fees, and landlord red flags."
        url="https://leaseplain.com/lease-review/ontario"
        datePublished="2026-06-16"
        dateModified="2026-06-16"
        keywords={["Ontario lease review", "review my lease Ontario", "is my lease legal Ontario", "RTA lease check"]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema).replace(/</g, "<") }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }).replace(/</g, "<"),
        }}
      />
      <div className="flex flex-col min-h-full">
        <BreadcrumbSchema items={[
          { name: "Home", href: "https://leaseplain.com" },
          { name: "Lease Review", href: "https://leaseplain.com/lease-review" },
          { name: "Ontario", href: "https://leaseplain.com/lease-review/ontario" },
        ]} />
        <Navbar />

        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
                <Link href="/lease-review" className="hover:underline">Lease Review</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>Ontario</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                Ontario Lease Review
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Get Your Ontario Lease Reviewed Before You Sign
              </h1>
              <p className="speakable-summary text-lg text-slate-600 max-w-2xl leading-relaxed mb-8">
                Upload your lease and LeasePlain checks it against the Residential Tenancies Act, 2006 —
                flagging illegal clauses, hidden fees, and landlord red flags specific to Ontario.
              </p>
              <Link
                href="/upload"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm shadow-sm"
              >
                <Upload className="w-4 h-4" aria-hidden="true" />
                Check My Ontario Lease
              </Link>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">What Makes an Ontario Lease Review Different</h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {checks.map((c) => (
                      <div key={c.title} className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                        <c.icon className="w-5 h-5 text-blue-600 mb-3" aria-hidden="true" />
                        <p className="font-semibold text-slate-900 text-sm mb-1.5">{c.title}</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Check Against Ontario Law</h2>
                  <ul className="flex flex-col gap-3">
                    {whatWeCheck.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">See your lease risk score</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Full RTA compliance checks, risk indicators, and negotiation suggestions — all free.
                  </p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    <Upload className="w-4 h-4" aria-hidden="true" />
                    Analyze My Lease
                  </Link>
                  <p className="text-xs text-blue-200 mt-3 text-center">Not legal advice</p>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Pages</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Toronto Lease Review", href: "/lease-review/toronto" },
                      { label: "Ontario Tenant Rights", href: "/canada/ontario" },
                      { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
                      { label: "Security Deposit Clause", href: "/lease-clause/security-deposit" },
                    ].map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                          <ChevronRight className="w-3 h-3" aria-hidden="true" />
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
