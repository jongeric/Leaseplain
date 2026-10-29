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
  title: "Washington Tenant Rights 2026: Rent Cap, Deposits & Eviction | LeasePlain",
  description:
    "Washington's new statewide rent cap (HB 1217), just-cause eviction, security-deposit rules, and landlord entry notice. A plain-English guide to Washington tenant rights.",
  alternates: { canonical: "https://leaseplain.com/united-states/washington" },
  openGraph: {
    title: "Washington Tenant Rights 2026: Rent Cap, Deposits & Eviction | LeasePlain",
    description: "Washington's HB 1217 rent cap, just-cause eviction, deposits, and entry notice.",
    url: "https://leaseplain.com/united-states/washington",
    type: "website",
  },
};

const protections = [
  "Statewide rent cap: under HB 1217 (effective May 7, 2025), most rent increases are limited to the lesser of 7% plus CPI or 10% per 12-month period — about 9.7% for 2026. No increase is allowed in the first 12 months of a tenancy.",
  "Rent-increase notice went from 60 to 90 days statewide; manufactured-home lots have a lower 5% cap.",
  "Just cause required: since 2021 (RCW 59.18.650), a landlord must have a legally allowed reason to end most tenancies — a lease simply expiring is not enough.",
  "Non-payment eviction uses a 14-day pay-or-vacate notice (increased from 3 days in 2019).",
  "No statewide dollar cap on security deposits, but the landlord must provide a move-in condition checklist, and (as of 2023) return the deposit within 30 days. Seattle caps deposits at one month's rent.",
  "Landlords must give at least 2 days' notice before entering (RCW 59.18.150), except in emergencies.",
  "Seattle and some other cities add stronger local protections (e.g., longer rent-increase notice).",
];

const cities = [
  { name: "Seattle", desc: "Strong local protections — 180-day rent-increase notice, 1-month deposit cap" },
  { name: "Tacoma", desc: "Tenant-protection ordinance layered on state law" },
  { name: "Spokane", desc: "State law applies; growing rental market" },
];

const faqItems = [
  { q: "How much can a landlord raise rent in Washington?", a: "Since HB 1217 took effect in May 2025, most increases are capped at the lesser of 7% plus CPI or 10% in any 12-month period — roughly 9.7% for 2026 — with no increase allowed in the first year of a tenancy. Manufactured-home lots are capped at 5%, and some cities (like Seattle) require longer notice." },
  { q: "What is the security deposit limit in Washington?", a: "There is no statewide dollar cap on the deposit amount, but the landlord must give a written move-in condition checklist and return the deposit within 30 days of move-out with an itemized statement. Seattle caps deposits at one month's rent." },
  { q: "Does Washington require just cause to evict?", a: "Yes. Since 2021 (RCW 59.18.650), a landlord must have a legally allowed reason to end most tenancies — they can't simply decline to renew because the lease term ended. Non-payment of rent uses a 14-day pay-or-vacate notice." },
  { q: "How much notice before a landlord enters in Washington?", a: "At least 2 days' notice for entry (and 1 day to show the unit to prospective tenants or buyers) under RCW 59.18.150, except in a genuine emergency. Entry must be at reasonable times." },
  { q: "How much notice to raise rent in Washington?", a: "At least 90 days' written notice for a rent increase statewide, raised from 60 days by HB 1217. Seattle requires 180 days. The increase must also stay within the statewide cap." },
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/united-states/washington",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".speakable-summary"] },
  url: "https://leaseplain.com/united-states/washington",
};

export default function WashingtonPage() {
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
          { name: "Washington", href: "https://leaseplain.com/united-states/washington" },
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
                <span>Washington</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-amber-200">
                <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                AI Analysis Coming Soon
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Washington Tenant Rights &amp; Lease Help
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Washington became a rent-cap state in 2025. Between HB 1217&apos;s statewide limit,
                just-cause eviction, and a 14-day pay-or-vacate rule, it&apos;s now one of the more
                tenant-protective states. Here&apos;s what Washington law provides.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <ReviewedByline updated="October 2026" jurisdiction="Washington RCW 59.18 & HB 1217" />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Washington Tenancy Law Overview</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Washington residential tenancies are governed by the <em>Residential Landlord-Tenant
                    Act (RCW 59.18)</em>. A run of recent reforms — just-cause eviction (2021), a longer
                    pay-or-vacate notice, and the <strong>HB 1217 statewide rent cap (2025)</strong> — have
                    moved Washington from a fairly landlord-friendly state toward strong tenant protection.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Local rules can go further: Seattle in particular adds longer notice periods and a
                    one-month deposit cap. Always check your city&apos;s ordinance on top of state law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Washington Tenant Protections</h2>
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-5">Washington Cities</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {cities.map((c) => (
                      <div key={c.name} className="block bg-white border border-slate-200 rounded-2xl p-5">
                        <h3 className="font-bold text-slate-900 mb-2">{c.name}</h3>
                        <p className="text-sm text-slate-600">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-slate-500">A dedicated Seattle guide is coming soon.</p>
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
                    Washington AI analysis is coming soon. Have a Canadian lease? Upload it now for a free
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
                      { label: "Rent Control by State", href: "/united-states/rent-control-by-state" },
                      { label: "Security Deposit Limits by State", href: "/united-states/security-deposit-limits-by-state" },
                      { label: "United States Overview", href: "/united-states" },
                      { label: "California Tenant Rights", href: "/united-states/california" },
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
                  <strong>General information, not legal advice.</strong> Confirm with RCW 59.18, HB 1217, or a Washington attorney.
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
