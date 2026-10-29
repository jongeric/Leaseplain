import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, ChevronRight, Upload, CheckCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewedByline from "@/components/ReviewedByline";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

// HELD NOINDEX until a licensed US legal review is complete (per launch plan).
export const metadata: Metadata = {
  title: "Pennsylvania Tenant Rights 2026: Deposits, Eviction & Notice | LeasePlain",
  description:
    "Pennsylvania tenant rights: the tiered security-deposit cap (two months year one, one month after), the 30-day deposit-return rule with double damages, eviction notice, and rent rules.",
  alternates: { canonical: "https://leaseplain.com/united-states/pennsylvania" },
  openGraph: {
    title: "Pennsylvania Tenant Rights 2026: Deposits, Eviction & Notice | LeasePlain",
    description: "Pennsylvania tenant rights: deposit cap and return, eviction notice, and rent rules.",
    url: "https://leaseplain.com/united-states/pennsylvania",
    type: "website",
  },
};

const protections = [
  "Security deposits are capped at two months' rent in the first year and drop to one month's rent from the second year onward.",
  "The landlord must return the deposit within 30 days of move-out with a written, itemized list of deductions — miss the deadline and the tenant can sue for double the amount wrongfully withheld.",
  "After five years of tenancy, interest on the deposit generally must be paid to the tenant (for deposits held in escrow).",
  "No statewide rent control, and in practice no Pennsylvania city has rent control — the lease and notice rules govern increases.",
  "Non-payment of rent generally requires a 10-day written notice before filing for eviction, though many standard leases waive this notice and courts enforce the waiver.",
  "Eviction is a court process; a landlord cannot lock a tenant out or seize belongings without a court order.",
  "Pennsylvania has no statute fixing a landlord's entry-notice period — courts apply a reasonable-notice standard, so the lease matters.",
];

const cities = [
  { name: "Philadelphia", desc: "Adds local protections — licensing, a Good Cause ordinance, and a Tenant Union program" },
  { name: "Pittsburgh", desc: "State law applies with some local tenant programs" },
  { name: "Allentown", desc: "Lehigh Valley market under Pennsylvania state law" },
];

const faqItems = [
  { q: "What is the security deposit limit in Pennsylvania?", a: "Pennsylvania caps deposits at two months' rent during the first year of a lease, dropping to one month's rent from the second year onward. The landlord must return the deposit within 30 days of move-out with an itemized list of deductions." },
  { q: "What happens if my landlord doesn't return my deposit in Pennsylvania?", a: "If the landlord misses the 30-day deadline (or fails to provide a proper itemized statement), the tenant can sue for up to double the amount wrongfully withheld. Keep proof of your move-out date and forwarding address." },
  { q: "Does Pennsylvania have rent control?", a: "No. Pennsylvania has no statewide rent control, and no Pennsylvania city currently has it. The rent is fixed during a lease term; at renewal or on a month-to-month tenancy a landlord can raise it with proper notice." },
  { q: "How much notice before eviction in Pennsylvania?", a: "For non-payment of rent, the landlord generally must give a 10-day written notice to quit before filing in court — but many standard leases waive this notice, and courts enforce the waiver. Check your lease. Only a court can order an eviction." },
  { q: "Can a Pennsylvania landlord enter without notice?", a: "Pennsylvania has no statute fixing an entry-notice period, so the lease governs and courts expect reasonable notice. If your lease is silent, ask for reasonable advance notice in writing." },
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/united-states/pennsylvania",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".speakable-summary"] },
  url: "https://leaseplain.com/united-states/pennsylvania",
};

export default function PennsylvaniaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
      }).replace(/</g, "<") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema).replace(/</g, "<") }} />
      <div className="flex flex-col min-h-full">
        <BreadcrumbSchema items={[
          { name: "Home", href: "https://leaseplain.com" },
          { name: "United States", href: "https://leaseplain.com/united-states" },
          { name: "Pennsylvania", href: "https://leaseplain.com/united-states/pennsylvania" },
        ]} />
        <Navbar />
        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
                <Link href="/" className="hover:underline">Home</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <Link href="/united-states" className="hover:underline">United States</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>Pennsylvania</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-amber-200">
                <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                AI Analysis Coming Soon
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Pennsylvania Tenant Rights &amp; Lease Help
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Pennsylvania has one of the clearest deposit rules in the country — two months in year
                one, one month after — backed by double damages for a late refund. Here&apos;s what
                Pennsylvania law provides on deposits, eviction, and rent.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <ReviewedByline updated="October 2026" jurisdiction="Pennsylvania Landlord and Tenant Act of 1951" />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Pennsylvania Tenancy Law Overview</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Pennsylvania residential tenancies are governed chiefly by the <em>Landlord and Tenant
                    Act of 1951</em>. The state sets firm rules on security deposits — a tiered cap, a
                    30-day return, and double damages for violations — while leaving rent increases and
                    routine entry largely to the lease.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Cities like Philadelphia layer on extra protections (licensing, a Good Cause eviction
                    ordinance). Always check your local rules alongside state law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Pennsylvania Tenant Protections</h2>
                  <ul className="flex flex-col gap-3">
                    {protections.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-5">Pennsylvania Cities</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {cities.map((c) => (
                      <div key={c.name} className="block bg-white border border-slate-200 rounded-2xl p-5">
                        <h3 className="font-bold text-slate-900 mb-2">{c.name}</h3>
                        <p className="text-sm text-slate-600">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-slate-500">A dedicated Philadelphia guide is coming soon.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Analyze My Lease</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Pennsylvania AI analysis is coming soon. Have a Canadian lease? Upload it now for a free
                    provincial-law analysis.
                  </p>
                  <Link href="/upload" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    <Upload className="w-4 h-4" aria-hidden="true" />
                    Analyze My Lease
                  </Link>
                  <p className="text-xs text-blue-200 mt-3 text-center">Not legal advice</p>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Pages</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Security Deposit Limits by State", href: "/united-states/security-deposit-limits-by-state" },
                      { label: "Eviction Notice Periods by State", href: "/united-states/eviction-notice-periods-by-state" },
                      { label: "United States Overview", href: "/united-states" },
                      { label: "New York Tenant Rights", href: "/united-states/new-york" },
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
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800">
                  <strong>General information, not legal advice.</strong> Confirm with the PA Landlord and Tenant Act of 1951 or a Pennsylvania attorney.
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
