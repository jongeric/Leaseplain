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
  title: "Toronto Lease Review: Check Your Lease for Risks Before You Sign | LeasePlain",
  description:
    "Get your Toronto lease reviewed in minutes. LeasePlain checks your lease against Ontario's Residential Tenancies Act and flags condo fee bundling, illegal deposits, and other Toronto-specific lease risks.",
  alternates: { canonical: "https://leaseplain.com/lease-review/toronto" },
  keywords: ["Toronto lease review", "review my lease Toronto", "is my lease legal Toronto", "Toronto condo lease check", "Toronto tenancy agreement review"],
  openGraph: {
    title: "Toronto Lease Review: Check Your Lease for Risks Before You Sign | LeasePlain",
    description: "Get your Toronto lease reviewed in minutes. LeasePlain checks your lease against Ontario's Residential Tenancies Act and flags condo fee bundling, illegal deposits, and other Toronto-specific lease risks.",
    url: "https://leaseplain.com/lease-review/toronto",
    type: "website",
  },
};

const checks = [
  { icon: ShieldCheck, title: "RTA Compliance", desc: "Every clause is checked against Ontario's Residential Tenancies Act, 2006 — the law that governs all Toronto rentals, including condos." },
  { icon: Gauge, title: "Lease Risk Score", desc: "Your lease gets a 0–100 risk score so you immediately know how it stacks up in Toronto's high-pressure rental market." },
  { icon: FileSearch, title: "Condo & Fee Detection", desc: "Bundled parking, locker, key fob, and amenity fees are flagged separately so you know exactly what you're paying for." },
];

const whatWeCheck = [
  "Security deposit and last month's rent — capped at one month's rent under the RTA, with no separate damage deposit allowed.",
  "Parking, locker, and key fob fees — flagged when bundled into rent in a way that obscures the real monthly cost or appears non-refundable.",
  "Condo amenity fees passed through as lease charges — checked against what the RTA actually allows a landlord to charge a tenant.",
  "Above-guideline rent increase (AGI) language — flagged if the lease implies a unit-specific increase without a proper LTB order.",
  "Landlord entry notice — the RTA requires 24 hours written notice; clauses allowing condo staff or landlords broader access are void.",
  "N12/N13 renoviction and personal-use language, including the right of first refusal and compensation requirements.",
];

const faqItems = [
  { q: "How does a Toronto lease review work?", a: "Upload your lease as a PDF or paste the text. LeasePlain reads every clause, compares it against Ontario's Residential Tenancies Act, 2006, and returns a plain-English report with a risk score, flagged clauses, and suggested questions for your landlord or property manager." },
  { q: "Can a lease review catch hidden condo fees in my Toronto lease?", a: "Yes. LeasePlain looks for parking, locker, key fob, and amenity charges bundled into your lease and flags whether they're itemized clearly and consistent with what's enforceable under the RTA." },
  { q: "Is rent control different for Toronto condos?", a: "It can be. Condo units first occupied on or after November 15, 2018 are exempt from Ontario's rent-increase guideline. LeasePlain checks your lease's occupancy date language to flag whether your unit is rent-controlled or not." },
  { q: "Why are LTB hearing backlogs relevant to my lease review?", a: "Toronto's Landlord and Tenant Board has faced significant hearing delays in recent years. Knowing your lease is RTA-compliant before you sign reduces the chance you'll ever need to rely on a slow-moving LTB process to fix a problem." },
  { q: "How much does a Toronto lease review cost?", a: "A basic lease summary and risk indicators are free. The full risk assessment, illegal clause detection, and negotiation suggestions are all free too — LeasePlain is completely free, with no paywall." },
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/lease-review/toronto",
  "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".speakable-summary"] },
};

export default function TorontoLeaseReviewPage() {
  return (
    <>
      <ArticleSchema
        headline="Toronto Lease Review: Check Your Lease for Risks Before You Sign"
        description="Get your Toronto lease reviewed in minutes. LeasePlain checks your lease against Ontario's Residential Tenancies Act and flags condo fee bundling, illegal deposits, and other Toronto-specific lease risks."
        url="https://leaseplain.com/lease-review/toronto"
        datePublished="2026-06-16"
        dateModified="2026-06-16"
        keywords={["Toronto lease review", "review my lease Toronto", "is my lease legal Toronto", "Toronto condo lease check"]}
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
          { name: "Toronto", href: "https://leaseplain.com/lease-review/toronto" },
        ]} />
        <Navbar />

        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
                <Link href="/lease-review" className="hover:underline">Lease Review</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>Toronto</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                Toronto Lease Review
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Get Your Toronto Lease Reviewed Before You Sign
              </h1>
              <p className="speakable-summary text-lg text-slate-600 max-w-2xl leading-relaxed mb-8">
                Upload your lease and LeasePlain checks it against Ontario's Residential Tenancies Act, 2006 —
                flagging illegal clauses, bundled condo and parking fees, and landlord red flags specific to
                Toronto's condo-heavy rental market.
              </p>
              <Link
                href="/upload"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm shadow-sm"
              >
                <Upload className="w-4 h-4" aria-hidden="true" />
                Check My Toronto Lease
              </Link>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">What Makes a Toronto Lease Review Different</h2>
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Toronto Leases Need Extra Scrutiny</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Toronto's rental market is dominated by individually-owned condominium units, many rented
                    out by first-time landlords unfamiliar with the Residential Tenancies Act. That, combined
                    with some of the highest average rents in Canada, above-guideline rent increase (AGI)
                    applications, and significant Landlord and Tenant Board (LTB) hearing backlogs, means a
                    problem clause you sign today can be difficult and slow to fix later.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Condo leases also tend to bundle in extra charges — parking, lockers, key fobs, and amenity
                    access — that are easy to gloss over at signing but add up significantly over a tenancy.
                  </p>
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
                      { label: "Ontario Lease Review", href: "/lease-review/ontario" },
                      { label: "Tenant Rights in Toronto", href: "/tenant-rights/toronto" },
                      { label: "Toronto, Ontario Lease Help", href: "/canada/ontario/toronto" },
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
