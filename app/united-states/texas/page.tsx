import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, ChevronRight, Upload, CheckCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

// HELD NOINDEX until a licensed US legal review is complete (per launch plan).
export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Texas Tenant Rights & Lease Help | Coming Soon | LeasePlain",
  description:
    "Texas tenant rights under the Property Code: security deposits, the repair-and-remedy process, notice to vacate, and why Texas has no rent control. A plain-English guide.",
  alternates: { canonical: "https://leaseplain.com/united-states/texas" },
  openGraph: {
    title: "Texas Tenant Rights & Lease Help | Coming Soon | LeasePlain",
    description: "Texas tenant rights under the Property Code: deposits, repairs, notice to vacate, and rent-control preemption.",
    url: "https://leaseplain.com/united-states/texas",
    type: "website",
  },
};

const protections = [
  "No statutory cap on security deposits, but the landlord must refund the deposit within 30 days of surrender (Tex. Prop. Code § 92.103).",
  "A landlord who retains a deposit in bad faith can be liable for three times the wrongfully withheld amount plus $100 and reasonable attorney's fees.",
  "Texas has no rent control — state law (Tex. Loc. Gov't Code § 214.902) preempts cities from enacting it except in a declared housing emergency with state approval.",
  "The repair-and-remedy process (§ 92.056) lets tenants compel repairs of conditions affecting health or safety after proper written notice.",
  "A landlord generally must give a written notice to vacate (often 3 days) before filing an eviction suit for non-payment, unless the lease specifies otherwise.",
  "Landlords must provide security devices (locks, door viewers) and may not retaliate against tenants who exercise their rights (§ 92.331).",
  "Lockouts and utility shutoffs to force a tenant out are illegal; a landlord must use the court eviction process.",
];

const cities = [
  { name: "Houston", desc: "Largest Texas rental market; no local rent control (state preemption)" },
  { name: "Dallas", desc: "Dallas–Fort Worth metro; standard Property Code protections apply" },
  { name: "Austin", desc: "High-rent market; tenant-focused city programs, state law controls" },
];

const faqItems = [
  { q: "Does Texas have rent control?", a: "No. Texas law preempts cities from enacting rent control except during a declared housing emergency with state approval. There is no statewide cap on how much or how often a landlord can raise the rent — your lease terms and notice rules govern instead." },
  { q: "What is the security deposit limit in Texas?", a: "Texas sets no statutory cap on the amount of a security deposit. The landlord must refund it within 30 days of the tenant surrendering the unit, and a landlord who keeps it in bad faith can owe three times the wrongfully withheld amount plus $100 and attorney's fees (Tex. Prop. Code § 92.103–92.109)." },
  { q: "How much notice does a Texas landlord give before eviction?", a: "For non-payment or most lease violations, a landlord generally must deliver a written notice to vacate — commonly 3 days — before filing an eviction (forcible detainer) suit, unless the lease sets a different period. Only a court can order an eviction; self-help lockouts are illegal." },
  { q: "Can a Texas tenant withhold rent for repairs?", a: "Texas does not allow simple rent withholding. Instead, tenants use the statutory repair-and-remedy process (§ 92.056): give proper written notice, allow a reasonable time, and then pursue remedies such as repair-and-deduct or a court order if the landlord fails to fix a condition affecting health or safety." },
  { q: "Can a Texas landlord lock me out?", a: "Only in narrow circumstances and with strict rules. A landlord may not shut off utilities or remove a tenant's property to force them out, and any permitted lockout for non-payment must follow § 92.0081, including leaving a notice and providing a new key on request." },
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/united-states/texas",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".speakable-summary"] },
  url: "https://leaseplain.com/united-states/texas",
};

export default function TexasPage() {
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
          { name: "Texas", href: "https://leaseplain.com/united-states/texas" },
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
                <span>Texas</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-amber-200">
                <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                AI Analysis Coming Soon
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Texas Tenant Rights &amp; Lease Help
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Texas is a landlord-friendly state with no rent control and no cap on deposits — but the
                Property Code still gives tenants real protections around deposit refunds, repairs, and
                the eviction process. Here&apos;s what Texas law provides.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Texas Tenancy Law Overview</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Residential tenancies in Texas are governed primarily by <em>Chapter 92 of the Texas
                    Property Code</em>. Texas does not have statewide rent control, and state law bars
                    cities from enacting it except in a declared emergency — so rent increases are
                    controlled by your lease and notice terms, not a cap.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Where Texas law is specific is on <strong>deposit refunds, security devices, the
                    repair-and-remedy process, and eviction procedure</strong>. Self-help evictions —
                    lockouts and utility shutoffs — are tightly restricted, and bad-faith deposit
                    retention carries real penalties.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Texas Tenant Protections</h2>
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-5">Texas Cities</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {cities.map((c) => (
                      <div key={c.name} className="block bg-white border border-slate-200 rounded-2xl p-5">
                        <h3 className="font-bold text-slate-900 mb-2">{c.name}</h3>
                        <p className="text-sm text-slate-600">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-slate-500">City-specific lease guides for Houston, Dallas, Austin, and San Antonio coming soon.</p>
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
                    Texas AI analysis is coming soon. Have a Canadian lease? Upload it now for a free
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
                      { label: "California Tenant Rights", href: "/united-states/california" },
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
                  <strong>General information, not legal advice.</strong> Confirm with the Texas Property Code or a Texas attorney.
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
