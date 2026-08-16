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
  title: "Vancouver Lease Review: Check Your Lease for Risks Before You Sign | LeasePlain",
  description:
    "Get your Vancouver lease reviewed in minutes. LeasePlain checks your lease against BC's Residential Tenancy Act, flags illegal deposits, hidden fees, and landlord red flags.",
  alternates: { canonical: "https://leaseplain.com/lease-review/vancouver" },
  keywords: ["Vancouver lease review", "review my lease Vancouver", "is my lease legal Vancouver", "RTA lease check BC", "Vancouver tenancy agreement review"],
  openGraph: {
    title: "Vancouver Lease Review: Check Your Lease for Risks Before You Sign | LeasePlain",
    description: "Get your Vancouver lease reviewed in minutes. LeasePlain checks your lease against BC's Residential Tenancy Act, flags illegal deposits, hidden fees, and landlord red flags.",
    url: "https://leaseplain.com/lease-review/vancouver",
    type: "website",
  },
};

const checks = [
  { icon: ShieldCheck, title: "RTA Compliance", desc: "Every clause is checked against BC's Residential Tenancy Act — the binding tenancy law that governs Vancouver rentals, including basement suites." },
  { icon: Gauge, title: "Lease Risk Score", desc: "Your lease gets a 0–100 risk score so you immediately know how it stacks up in one of the most expensive rental markets in the world." },
  { icon: FileSearch, title: "Illegal Clause Detection", desc: "Clauses that try to waive your RTA rights — like deposits above the legal cap — are flagged as unenforceable even if you signed them." },
];

const whatWeCheck = [
  "Security deposit and pet damage deposit — each capped at half (0.5x) of one month's rent under the BC Residential Tenancy Act, and they cannot be combined to exceed that limit.",
  "Rent increase clauses — compared against the province's allowable annual increase, which is 2.3% for 2026, down from 3% in 2025.",
  "Move-in cost stacking — flagged when a lease bundles deposits, fees, and first month's rent in a way that exceeds what's legally collectible upfront.",
  "Fixed-term \"vacate at end of term\" clauses — generally unenforceable since BC's 2021 RTA amendment, unless a specific statutory exception applies.",
  "Four Month Notice language for renovations or demolition — checked for the right of first refusal and proper RTB-approved form.",
  "Landlord entry notice — the RTA requires at least 24 hours written notice; any clause shortening this is void.",
];

const faqItems = [
  { q: "How does a Vancouver lease review work?", a: "Upload your lease as a PDF or paste the text. LeasePlain reads every clause, compares it against BC's Residential Tenancy Act, and returns a plain-English report with a risk score, flagged clauses, and suggested questions for your landlord." },
  { q: "What is the maximum security deposit a Vancouver landlord can charge?", a: "Under BC's Residential Tenancy Act, a security deposit cannot exceed half a month's rent. A separate pet damage deposit of up to half a month's rent is also allowed, but the two together cannot be used to get around the cap." },
  { q: "What is BC's rent increase cap for 2026?", a: "The allowable annual rent increase for 2026 is 2.3%, down from 3% in 2025. Landlords must give at least 3 months' written notice on the approved RTB form before any increase takes effect." },
  { q: "Can a Vancouver landlord evict me with a Four Month Notice for renovations?", a: "Yes. A landlord can issue a Four Month Notice to End Tenancy for major renovations or demolition that require a permit and vacant possession. Tenants generally have a right of first refusal to return to the unit at the same rent once the work is complete." },
  { q: "How much does a Vancouver lease review cost?", a: "A basic lease summary and risk indicators are free. The full risk assessment, illegal clause detection, and negotiation suggestions are all free too — LeasePlain is completely free, with no paywall." },
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/lease-review/vancouver",
  "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".speakable-summary"] },
};

export default function VancouverLeaseReviewPage() {
  return (
    <>
      <ArticleSchema
        headline="Vancouver Lease Review: Check Your Lease for Risks Before You Sign"
        description="Get your Vancouver lease reviewed in minutes. LeasePlain checks your lease against BC's Residential Tenancy Act, flags illegal deposits, hidden fees, and landlord red flags."
        url="https://leaseplain.com/lease-review/vancouver"
        datePublished="2026-06-16"
        dateModified="2026-06-16"
        keywords={["Vancouver lease review", "review my lease Vancouver", "is my lease legal Vancouver", "RTA lease check BC"]}
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
          { name: "Vancouver", href: "https://leaseplain.com/lease-review/vancouver" },
        ]} />
        <Navbar />

        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
                <Link href="/lease-review" className="hover:underline">Lease Review</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>Vancouver</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                Vancouver Lease Review
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Get Your Vancouver Lease Reviewed Before You Sign
              </h1>
              <p className="speakable-summary text-lg text-slate-600 max-w-2xl leading-relaxed mb-8">
                Upload your lease and LeasePlain checks it against BC's Residential Tenancy Act —
                flagging illegal deposits, hidden fees, and landlord red flags specific to Vancouver's
                high-cost rental market.
              </p>
              <Link
                href="/upload"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm shadow-sm"
              >
                <Upload className="w-4 h-4" aria-hidden="true" />
                Check My Vancouver Lease
              </Link>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">What Makes a Vancouver Lease Review Different</h2>
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Vancouver Leases Need Extra Scrutiny</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Vancouver is one of the most expensive rental markets in the world, with move-in costs
                    that can stack up quickly: first month's rent, a security deposit, and sometimes a pet
                    damage deposit, all due before you get the keys. A large share of Vancouver's rental
                    supply is secondary suites — basement and laneway units rented out by individual
                    homeowners — which can come with informal or non-standard lease terms.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    BC's Residential Tenancy Act caps deposits, limits annual rent increases, and requires
                    specific notice periods for ending a tenancy — including the Four Month Notice landlords
                    must use for major renovations. A lease review helps confirm your agreement actually
                    reflects those protections before you sign.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Check Against BC Law</h2>
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
                      { label: "BC Tenant Rights", href: "/canada/british-columbia" },
                      { label: "Tenant Rights in British Columbia", href: "/tenant-rights/british-columbia" },
                      { label: "Vancouver, BC Lease Help", href: "/canada/british-columbia/vancouver" },
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
