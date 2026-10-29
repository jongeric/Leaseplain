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
  title: "Georgia Tenant Rights 2026: Deposits, Eviction & the Safe at Home Act | LeasePlain",
  description:
    "Georgia tenant rights: the 2024 Safe at Home Act's two-month deposit cap and habitability duty, the dispossessory eviction process, and why Georgia has no rent control.",
  alternates: { canonical: "https://leaseplain.com/united-states/georgia" },
  openGraph: {
    title: "Georgia Tenant Rights 2026: Deposits, Eviction & the Safe at Home Act | LeasePlain",
    description: "Georgia tenant rights: Safe at Home Act deposit cap, dispossessory process, and rent-control preemption.",
    url: "https://leaseplain.com/united-states/georgia",
    type: "website",
  },
};

const protections = [
  "The 2024 Safe at Home Act (HB 404) caps security deposits at two months' rent, effective July 1, 2024 — Georgia's first statutory deposit limit.",
  "Deposits must be returned within 30 days of move-out, with an itemized written statement of any deductions.",
  "HB 404 also added a statutory duty of habitability — landlords must keep units fit for human habitation.",
  "No rent control: state law preempts any Georgia city or county from capping rent.",
  "Eviction is a court process (a 'dispossessory' action). A landlord must demand possession before filing, and only a court order can remove a tenant.",
  "No statutory notice period is fixed for routine landlord entry — the lease governs.",
  "For a month-to-month tenancy, a landlord must give 60 days' notice to terminate; a tenant must give 30 days.",
];

const cities = [
  { name: "Atlanta", desc: "Largest Georgia rental market; state law and the Safe at Home Act apply" },
  { name: "Savannah", desc: "Growing coastal market under Georgia state law" },
  { name: "Augusta", desc: "Standard Georgia landlord-tenant rules apply" },
];

const faqItems = [
  { q: "What is the security deposit limit in Georgia?", a: "As of July 1, 2024, the Safe at Home Act (HB 404) caps Georgia security deposits at two months' rent — the state's first deposit limit. The deposit must be returned within 30 days of move-out with an itemized statement of any deductions." },
  { q: "Does Georgia have rent control?", a: "No. Georgia has no rent control, and state law preempts cities and counties from enacting it. During a lease the rent is fixed; at renewal or on a month-to-month tenancy a landlord can raise it with proper notice." },
  { q: "How does eviction work in Georgia?", a: "Eviction is a court process called a 'dispossessory' action. The landlord must first demand possession; if the tenant doesn't comply, the landlord files in court, and only a court order (executed by an officer) can remove the tenant. Self-help lockouts are not allowed." },
  { q: "How much notice to end a month-to-month tenancy in Georgia?", a: "A landlord must give 60 days' notice to end a month-to-month tenancy, while a tenant must give 30 days. For a fixed-term lease, the tenancy ends on its end date unless renewed." },
  { q: "Can a Georgia landlord enter without notice?", a: "Georgia has no statute setting a landlord entry-notice period, so the lease controls. If your lease is silent, ask for reasonable advance notice in writing and keep a record of entries." },
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/united-states/georgia",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".speakable-summary"] },
  url: "https://leaseplain.com/united-states/georgia",
};

export default function GeorgiaPage() {
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
          { name: "Georgia", href: "https://leaseplain.com/united-states/georgia" },
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
                <span>Georgia</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-amber-200">
                <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                AI Analysis Coming Soon
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Georgia Tenant Rights &amp; Lease Help
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Georgia has historically been landlord-friendly, but the 2024 Safe at Home Act added the
                state&apos;s first deposit cap and a habitability duty. Here&apos;s what Georgia law now
                provides — deposits, the eviction process, and rent rules.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <ReviewedByline updated="October 2026" jurisdiction="Georgia Code & the Safe at Home Act" />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Georgia Tenancy Law Overview</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Georgia residential tenancies are governed by Title 44, Chapter 7 of the Georgia Code,
                    now updated by the <em>Safe at Home Act (HB 404, 2024)</em> — which, for the first
                    time, caps security deposits and imposes a statutory duty to keep rentals habitable.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Georgia still has no rent control and a landlord-friendly eviction framework, but the
                    new deposit and habitability rules give tenants more protection than before.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Georgia Tenant Protections</h2>
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-5">Georgia Cities</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {cities.map((c) => (
                      <div key={c.name} className="block bg-white border border-slate-200 rounded-2xl p-5">
                        <h3 className="font-bold text-slate-900 mb-2">{c.name}</h3>
                        <p className="text-sm text-slate-600">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-slate-500">City-specific guides for Atlanta and Savannah coming soon.</p>
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
                    Georgia AI analysis is coming soon. Have a Canadian lease? Upload it now for a free
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
                      { label: "Florida Tenant Rights", href: "/united-states/florida" },
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
                  <strong>General information, not legal advice.</strong> Confirm with the Georgia Code (Title 44), the Safe at Home Act, or a Georgia attorney.
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
