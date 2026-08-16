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
  title: "Quebec Lease Review: Check Your Bail for Risks Before You Sign | LeasePlain",
  description:
    "Get your Quebec lease (bail) reviewed in minutes. LeasePlain checks your lease against the Civil Code of Quebec, flags illegal clauses, hidden fees, and landlord red flags.",
  alternates: { canonical: "https://leaseplain.com/lease-review/quebec" },
  keywords: ["Quebec lease review", "review my bail Quebec", "is my lease legal Quebec", "TAL lease check", "Quebec tenancy agreement review"],
  openGraph: {
    title: "Quebec Lease Review: Check Your Bail for Risks Before You Sign | LeasePlain",
    description: "Get your Quebec lease (bail) reviewed in minutes. LeasePlain checks your lease against the Civil Code of Quebec, flags illegal clauses, hidden fees, and landlord red flags.",
    url: "https://leaseplain.com/lease-review/quebec",
    type: "website",
  },
};

const checks = [
  { icon: ShieldCheck, title: "Civil Code Compliance", desc: "Every clause is checked against the Civil Code of Quebec and the rules enforced by the Tribunal administratif du logement (TAL)." },
  { icon: Gauge, title: "Lease Risk Score", desc: "Your lease gets a 0–100 risk score so you immediately know how it stacks up." },
  { icon: FileSearch, title: "Illegal Clause Detection", desc: "Clauses that try to waive your Civil Code rights — even if you signed them — are flagged as unenforceable." },
];

const whatWeCheck = [
  "Security deposit demands — flagged as illegal, since Quebec's Civil Code (art. 1904) prohibits landlords from collecting any security, damage, or key deposit.",
  "Standard lease form (bail) compliance — checked against the mandatory TAL form, since custom leases cannot reduce tenant rights below the statutory minimum.",
  "Rent increase notice timing — verified against the required window (3 to 6 months before renewal for 12-month-plus leases; 1 to 2 months for shorter leases) and your right to refuse.",
  "Right of first refusal language — clauses that try to waive your priority right to return to a unit after repossession or renovation are flagged.",
  "Lease assignment and subletting clauses — checked against the rule that a landlord generally cannot unreasonably refuse an assignment or sublease.",
  "Language requirements — leases must be available in French by default; an English-only lease with no French version available is flagged.",
];

const faqItems = [
  { q: "How does a Quebec lease review work?", a: "Upload your bail (lease) as a PDF or paste the text. LeasePlain reads every clause, compares it against the Civil Code of Quebec and the rules applied by the Tribunal administratif du logement (TAL), and returns a plain-English report with a risk score, flagged clauses, and suggested questions for your landlord." },
  { q: "Can my landlord ask for a security deposit in Quebec?", a: "No. Under article 1904 of the Civil Code of Quebec, landlords are prohibited from collecting a security deposit, damage deposit, or key deposit of any kind. If your lease includes a deposit clause, LeasePlain will flag it as likely unenforceable." },
  { q: "Can I sublet or assign my Quebec lease?", a: "Generally yes. Quebec tenants have a right to assign their lease or sublet, and a landlord cannot unreasonably refuse — though the landlord can refuse for serious reasons and may have a right of first refusal in certain assignment situations. LeasePlain checks your lease's assignment and subletting clauses against these rules." },
  { q: "What if my landlord and I disagree about a rent increase?", a: "Quebec does not impose a hard rent cap, but it does give tenants the right to refuse a proposed rent increase. If you refuse, the landlord must apply to the Tribunal administratif du logement (TAL) to have the increase authorized, where it is assessed using an annual calculation guide based on the building's actual costs." },
  { q: "How much does a Quebec lease review cost?", a: "A basic lease summary and risk indicators are free. The full risk assessment, illegal clause detection, and negotiation suggestions are all free too — LeasePlain is completely free, with no paywall." },
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/lease-review/quebec",
  "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".speakable-summary"] },
};

export default function QuebecLeaseReviewPage() {
  return (
    <>
      <ArticleSchema
        headline="Quebec Lease Review: Check Your Bail for Risks Before You Sign"
        description="Get your Quebec lease (bail) reviewed in minutes. LeasePlain checks your lease against the Civil Code of Quebec, flags illegal clauses, hidden fees, and landlord red flags."
        url="https://leaseplain.com/lease-review/quebec"
        datePublished="2026-06-16"
        dateModified="2026-06-16"
        keywords={["Quebec lease review", "review my bail Quebec", "is my lease legal Quebec", "TAL lease check"]}
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
          { name: "Quebec", href: "https://leaseplain.com/lease-review/quebec" },
        ]} />
        <Navbar />

        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
                <Link href="/lease-review" className="hover:underline">Lease Review</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>Quebec</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                Quebec Lease Review
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Get Your Quebec Lease Reviewed Before You Sign
              </h1>
              <p className="speakable-summary text-lg text-slate-600 max-w-2xl leading-relaxed mb-8">
                Upload your bail and LeasePlain checks it against the Civil Code of Quebec —
                flagging illegal deposit demands, non-standard clauses, and landlord red flags
                specific to Quebec's tenancy framework and the TAL.
              </p>
              <Link
                href="/upload"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm shadow-sm"
              >
                <Upload className="w-4 h-4" aria-hidden="true" />
                Check My Quebec Lease
              </Link>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">What Makes a Quebec Lease Review Different</h2>
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Check Against Quebec Law</h2>
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
                    Full Civil Code compliance checks, risk indicators, and negotiation suggestions — all free.
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
                      { label: "Quebec Tenant Guide", href: "/canada/quebec" },
                      { label: "Tenant Rights in Quebec", href: "/tenant-rights/quebec" },
                      { label: "Montreal Lease Help", href: "/canada/quebec/montreal" },
                      { label: "Subletting Clause", href: "/lease-clause/subletting" },
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
