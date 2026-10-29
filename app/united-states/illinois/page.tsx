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
  title: "Illinois Tenant Rights & Lease Help | Coming Soon | LeasePlain",
  description:
    "Illinois tenant rights: security-deposit return and interest rules, eviction notice periods, rent-control preemption, and Chicago's stronger RLTO protections. A plain-English guide.",
  alternates: { canonical: "https://leaseplain.com/united-states/illinois" },
  openGraph: {
    title: "Illinois Tenant Rights & Lease Help | Coming Soon | LeasePlain",
    description: "Illinois tenant rights: deposits, eviction notice, rent-control preemption, and the Chicago RLTO.",
    url: "https://leaseplain.com/united-states/illinois",
    type: "website",
  },
};

const protections = [
  "No statewide cap on security deposits; the Rent Control Preemption Act (50 ILCS 825) also bars Illinois cities from enacting rent control.",
  "Under the Security Deposit Return Act (765 ILCS 710), landlords of 5+ units must give an itemized statement of damages within 30 days and refund the balance within 45 days of move-out.",
  "The Security Deposit Interest Act (765 ILCS 715) requires interest on deposits for buildings with 25+ units.",
  "Eviction must go through the courts under the Forcible Entry and Detainer Act — typically a 5-day notice for non-payment and a 10-day notice for a lease violation.",
  "Self-help evictions (lockouts, utility shutoffs, removing belongings) are illegal; the Residential Tenants' Right to Repair Act lets tenants repair-and-deduct for certain minor repairs.",
  "Chicago's Residential Landlord and Tenant Ordinance (RLTO) adds much stronger protections — deposit interest, strict deadlines, and penalties up to twice the deposit for violations.",
  "Landlords generally cannot retaliate against tenants for complaining to a government agency or exercising their legal rights.",
];

const cities = [
  { name: "Chicago", desc: "Covered by the RLTO — among the strongest tenant protections in the US" },
  { name: "Aurora", desc: "Second-largest Illinois city; state law (not the RLTO) applies" },
  { name: "Naperville", desc: "Suburban rental market governed by Illinois state statutes" },
];

const faqItems = [
  { q: "Does Illinois have rent control?", a: "No. The Illinois Rent Control Preemption Act (50 ILCS 825) prohibits municipalities from enacting rent control, and there is no statewide cap. Rent increases are governed by your lease and notice terms. (There have been repeated legislative efforts to repeal the preemption, but it remains in force.)" },
  { q: "What is the security deposit limit in Illinois?", a: "Illinois sets no statewide cap on the deposit amount. For landlords with 5 or more units, the Security Deposit Return Act requires an itemized statement within 30 days and a refund within 45 days of move-out. Chicago's RLTO adds interest and stricter rules, and caps are set locally rather than statewide." },
  { q: "How much notice does an Illinois landlord give before eviction?", a: "Typically a 5-day written notice for non-payment of rent and a 10-day notice for a lease violation, after which the landlord must file a court case under the Forcible Entry and Detainer Act. Only a court can order an eviction — lockouts are illegal." },
  { q: "What extra protections does Chicago give tenants?", a: "Chicago's Residential Landlord and Tenant Ordinance (RLTO) is one of the strongest in the country: it requires interest on security deposits, imposes strict deadlines and disclosures, limits late fees, and lets tenants recover up to twice the deposit (plus attorney's fees) for certain landlord violations." },
  { q: "Can an Illinois tenant withhold rent or repair and deduct?", a: "In limited situations. The Residential Tenants' Right to Repair Act allows repair-and-deduct for certain minor repairs (up to a statutory limit) after proper written notice. Chicago's RLTO provides broader remedies. Outright rent withholding is risky — follow the statute or local ordinance precisely." },
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/united-states/illinois",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".speakable-summary"] },
  url: "https://leaseplain.com/united-states/illinois",
};

export default function IllinoisPage() {
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
          { name: "Illinois", href: "https://leaseplain.com/united-states/illinois" },
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
                <span>Illinois</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-amber-200">
                <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                AI Analysis Coming Soon
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Illinois Tenant Rights &amp; Lease Help
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Illinois has no statewide rent control, but its deposit-return rules and court-only
                eviction process give tenants real protection — and in Chicago, the RLTO is among the
                strongest tenant ordinances in the country. Here&apos;s what Illinois law provides.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <ReviewedByline updated="October 2026" jurisdiction="Illinois statutes & the Chicago RLTO" />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Illinois Tenancy Law Overview</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Illinois residential tenancies are governed by a set of state statutes — the Security
                    Deposit Return Act, the Security Deposit Interest Act, the Forcible Entry and Detainer
                    Act, and others — layered under <strong>strong local ordinances in Chicago</strong> and
                    some suburbs.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Where you rent matters enormously: a Chicago tenant is covered by the RLTO&apos;s
                    detailed protections, while a tenant elsewhere in Illinois relies on the (thinner)
                    state statutes. There is no rent control anywhere in the state.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Illinois Tenant Protections</h2>
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-5">Illinois Cities</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {cities.map((c) => (
                      <div key={c.name} className="block bg-white border border-slate-200 rounded-2xl p-5">
                        <h3 className="font-bold text-slate-900 mb-2">{c.name}</h3>
                        <p className="text-sm text-slate-600">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-slate-500">A dedicated Chicago RLTO guide is coming soon.</p>
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
                    Illinois AI analysis is coming soon. Have a Canadian lease? Upload it now for a free
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
                      { label: "United States Overview", href: "/united-states" },
                      { label: "New York Tenant Rights", href: "/united-states/new-york" },
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
                  <strong>General information, not legal advice.</strong> Confirm with the Illinois statutes, the Chicago RLTO, or an Illinois attorney.
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
