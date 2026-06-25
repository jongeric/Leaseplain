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
  title: "Alberta Lease Review: Check Your Lease for Risks Before You Sign | LeasePlain",
  description:
    "Get your Alberta lease reviewed in minutes. LeasePlain checks your lease against the Residential Tenancies Act, flags illegal clauses, hidden fees, and landlord red flags.",
  alternates: { canonical: "https://leaseplain.com/lease-review/alberta" },
  keywords: ["Alberta lease review", "review my lease Alberta", "is my lease legal Alberta", "RTA lease check Alberta", "Alberta tenancy agreement review"],
  openGraph: {
    title: "Alberta Lease Review: Check Your Lease for Risks Before You Sign | LeasePlain",
    description: "Get your Alberta lease reviewed in minutes. LeasePlain checks your lease against the Residential Tenancies Act, flags illegal clauses, hidden fees, and landlord red flags.",
    url: "https://leaseplain.com/lease-review/alberta",
    type: "website",
  },
};

const checks = [
  { icon: ShieldCheck, title: "RTA Compliance", desc: "Every clause is checked against the Residential Tenancies Act (RSA 2000, c. R-17.1) — Alberta's binding tenancy law." },
  { icon: Gauge, title: "Lease Risk Score", desc: "Your lease gets a 0–100 risk score so you immediately know how it stacks up." },
  { icon: FileSearch, title: "Illegal Clause Detection", desc: "Clauses that try to waive your RTA rights — even if you signed them — are flagged as unenforceable." },
];

const whatWeCheck = [
  "Security deposit clauses — capped at one month's rent (RTA s.43), must be held in trust, and must earn interest at the prescribed rate.",
  "Rent increase clauses — Alberta has no rent control, but increases are limited to once per 365-day period and require at least 3 full months' written notice.",
  "Mid-term rent increase language — a fixed-term lease cannot allow a rent increase during the term unless the original lease explicitly permits it.",
  "Notice provisions — landlord entry, termination for non-payment (14 days), and personal-use termination (3 full months) must match RTA minimums.",
  "Pet deposit and 'admin fee' clauses — flagged if, combined with the security deposit, they push the total above one month's rent.",
  "Self-help eviction language — any clause suggesting a landlord can change locks or remove belongings without going through RTDRS or court is void.",
];

const faqItems = [
  { q: "How does an Alberta lease review work?", a: "Upload your lease as a PDF or paste the text. LeasePlain reads every clause, compares it against the Residential Tenancies Act (RSA 2000, c. R-17.1), and returns a plain-English report with a risk score, flagged clauses, and suggested questions for your landlord." },
  { q: "Does Alberta have rent control?", a: "No. Alberta has no provincial rent control — a landlord can raise rent by any amount. The only protections are a minimum 3-full-months written notice period and a limit of one increase per 365-day period per tenant. LeasePlain checks that any rent increase clause in your lease respects these notice and frequency rules." },
  { q: "Can a lease review tell me if my Alberta lease is legal?", a: "LeasePlain flags clauses that appear to conflict with the Residential Tenancies Act or fall outside what's typical for Alberta leases — such as a security deposit over one month's rent. It is an informational tool, not legal advice — for a binding legal opinion, consult a tenant advocacy service or lawyer." },
  { q: "What if my landlord and I end up in a dispute?", a: "Alberta disputes are handled by the Residential Tenancy Dispute Resolution Service (RTDRS), which hears claims up to $100,000. Filing fees are $75 for claims up to $7,500 and $100 for claims above that. LeasePlain's review highlights clauses likely to cause disputes so you can address them before signing." },
  { q: "How much does an Alberta lease review cost?", a: "A basic lease summary and risk indicators are free. Full risk assessment, illegal clause detection, and negotiation suggestions are available on paid plans — see /pricing for details." },
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/lease-review/alberta",
  "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".speakable-summary"] },
};

export default function AlbertaLeaseReviewPage() {
  return (
    <>
      <ArticleSchema
        headline="Alberta Lease Review: Check Your Lease for Risks Before You Sign"
        description="Get your Alberta lease reviewed in minutes. LeasePlain checks your lease against the Residential Tenancies Act, flags illegal clauses, hidden fees, and landlord red flags."
        url="https://leaseplain.com/lease-review/alberta"
        datePublished="2026-06-16"
        dateModified="2026-06-16"
        keywords={["Alberta lease review", "review my lease Alberta", "is my lease legal Alberta", "RTA lease check Alberta"]}
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
          { name: "Alberta", href: "https://leaseplain.com/lease-review/alberta" },
        ]} />
        <Navbar />

        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
                <Link href="/lease-review" className="hover:underline">Lease Review</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>Alberta</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                Alberta Lease Review
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Get Your Alberta Lease Reviewed Before You Sign
              </h1>
              <p className="speakable-summary text-lg text-slate-600 max-w-2xl leading-relaxed mb-8">
                Upload your lease and LeasePlain checks it against the Residential Tenancies Act —
                flagging illegal clauses, hidden fees, and landlord red flags specific to Alberta,
                including the province&apos;s lack of rent control and its 365-day increase limit.
              </p>
              <Link
                href="/upload"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm shadow-sm"
              >
                <Upload className="w-4 h-4" aria-hidden="true" />
                Check My Alberta Lease
              </Link>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">What Makes an Alberta Lease Review Different</h2>
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Check Against Alberta Law</h2>
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
                    Free summary and basic risk indicators. Upgrade for full RTA compliance checks and negotiation suggestions.
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
                      { label: "Alberta Tenant Guide", href: "/canada/alberta" },
                      { label: "Tenant Rights in Alberta", href: "/tenant-rights/alberta" },
                      { label: "Calgary Lease Help", href: "/canada/alberta/calgary" },
                      { label: "Rent Increase Clause", href: "/lease-clause/rent-increase" },
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
