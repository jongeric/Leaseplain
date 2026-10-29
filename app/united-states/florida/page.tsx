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
  robots: { index: false, follow: true },
  title: "Florida Tenant Rights 2026: Deposits, Eviction & Notice | LeasePlain",
  description:
    "Florida tenant rights under Chapter 83: security-deposit return deadlines, the 3-day eviction notice, 12-hour landlord entry rule, and why Florida has no rent control. A plain-English guide.",
  alternates: { canonical: "https://leaseplain.com/united-states/florida" },
  openGraph: {
    title: "Florida Tenant Rights 2026: Deposits, Eviction & Notice | LeasePlain",
    description: "Florida tenant rights: deposits, eviction notice, landlord entry, and rent-control preemption.",
    url: "https://leaseplain.com/united-states/florida",
    type: "website",
  },
};

const protections = [
  "No statutory cap on security deposits. A landlord must hold the deposit in a separate account (or post a surety bond) and return it within 15 days if making no claim.",
  "If the landlord intends to keep any of the deposit, they must send written notice within 30 days of move-out or forfeit the claim; the tenant then has 15 days to object (Fla. Stat. § 83.49).",
  "No rent control — a 2023 state law bars local governments from enacting it. Increases are governed by the lease and notice rules.",
  "Ending a month-to-month tenancy takes 30 days' written notice (raised from 15 by a 2023 law); a year-to-year tenancy takes 60 days.",
  "Non-payment of rent requires a 3-day notice (excluding weekends and legal holidays) before the landlord can file an eviction (Fla. Stat. § 83.56).",
  "For repairs, the tenant gives 7 days' written notice; if the landlord doesn't comply, the tenant may withhold rent or terminate.",
  "A landlord must give at least 12 hours' notice to enter for repairs and may enter only between 7:30 a.m. and 8:00 p.m. (Fla. Stat. § 83.53).",
];

const cities = [
  { name: "Miami", href: "/united-states/florida/miami", desc: "Largest Florida rental market; Chapter 83 applies, no local rent control" },
  { name: "Tampa", desc: "Gulf-coast market under Florida state law" },
  { name: "Orlando", desc: "High-growth rental market; standard Florida rules apply" },
];

const faqItems = [
  { q: "Does Florida have rent control?", a: "No. Florida has no rent control, and a 2023 state law bars cities and counties from enacting it. A landlord can raise rent by any amount with proper notice — at least 30 days for a month-to-month tenancy and 60 days for a year-to-year tenancy — and the rent is fixed during a lease term." },
  { q: "What is the security deposit limit in Florida?", a: "Florida sets no cap on the deposit amount. The landlord must hold it in a separate account (or post a surety bond). If they make no claim, they must return it within 15 days; if they intend to keep any of it, they must send written notice within 30 days or forfeit the claim (Fla. Stat. § 83.49)." },
  { q: "How much notice does a Florida landlord give before eviction?", a: "For non-payment of rent, a 3-day notice to pay or vacate (excluding weekends and legal holidays). To end a month-to-month tenancy, 30 days' notice; a year-to-year tenancy, 60 days. Only a court can order an eviction — a landlord can't lock you out." },
  { q: "Can a Florida landlord enter without notice?", a: "No. Under Fla. Stat. § 83.53, a landlord must give at least 12 hours' notice to enter for repairs and may enter only between 7:30 a.m. and 8:00 p.m. Entry must be for a reasonable purpose, and a genuine emergency is the exception." },
  { q: "What are Florida tenants' rights regarding repairs?", a: "A Florida landlord must keep the unit compliant with building codes and fit for habitation. A tenant gives 7 days' written notice of a needed repair; if the landlord doesn't comply, the tenant may withhold rent or terminate the lease (Fla. Stat. § 83.56)." },
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/united-states/florida",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".speakable-summary"] },
  url: "https://leaseplain.com/united-states/florida",
};

export default function FloridaPage() {
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
          { name: "Florida", href: "https://leaseplain.com/united-states/florida" },
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
                <span>Florida</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-amber-200">
                <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                AI Analysis Coming Soon
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Florida Tenant Rights &amp; Lease Help
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Florida is a landlord-friendly state with no rent control and no cap on deposits — but
                Chapter 83 still gives tenants firm rules on deposit refunds, entry notice, and the
                eviction process. Here&apos;s what Florida law provides.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <ReviewedByline updated="October 2026" jurisdiction="Florida Statutes, Chapter 83" />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Florida Tenancy Law Overview</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Florida residential tenancies are governed by the <em>Florida Residential Landlord and
                    Tenant Act (Chapter 83, Part II)</em>. Florida has no rent control — and a 2023 state
                    law blocks cities from creating any — so rent increases are controlled by your lease
                    and notice terms, not a cap.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Where Florida law is specific is on <strong>deposit handling and refunds, entry notice,
                    and eviction procedure</strong>. Self-help evictions — lockouts and utility shutoffs —
                    are illegal; a landlord must use the court process.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Florida Tenant Protections</h2>
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-5">Florida Cities</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {cities.map((c) => (
                      c.href ? (
                        <Link key={c.name} href={c.href} className="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all group">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{c.name}</h3>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors mt-0.5" aria-hidden="true" />
                          </div>
                          <p className="text-sm text-slate-600">{c.desc}</p>
                        </Link>
                      ) : (
                        <div key={c.name} className="block bg-white border border-slate-200 rounded-2xl p-5">
                          <h3 className="font-bold text-slate-900 mb-2">{c.name}</h3>
                          <p className="text-sm text-slate-600">{c.desc}</p>
                        </div>
                      )
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-slate-500">City-specific guides for Tampa, Orlando, and Jacksonville coming soon.</p>
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
                    Florida AI analysis is coming soon. Have a Canadian lease? Upload it now for a free
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
                      { label: "Texas Tenant Rights", href: "/united-states/texas" },
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
                  <strong>General information, not legal advice.</strong> Confirm with Florida Statutes, Chapter 83, or a Florida attorney.
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
