import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "New Brunswick Tenant Rights: Lease Help & Renter Protections | LeasePlain",
  description:
    "Understand your rights as a New Brunswick renter under the Residential Tenancies Act. Learn about the Residential Tenancies Tribunal, no rent control, deposit rules, and lease protections in Moncton, Fredericton, and Saint John.",
  alternates: { canonical: "https://leaseplain.com/canada/new-brunswick" },
};

const tenantProtections = [
  "Security deposits are capped at one month's rent — landlords must provide a written receipt upon collection.",
  "Rent can only be increased once every 12 months, and the landlord must give 3 months written notice before the increase takes effect.",
  "Tenants have the right to give notice to terminate within 15 days of receiving a rent increase notice they do not accept.",
  "Landlords must give 24 hours written notice before entering a rental unit, except in genuine emergencies.",
  "Tenants cannot be evicted without a formal order from the Residential Tenancies Tribunal — self-help eviction is illegal.",
  "Security deposits must be returned within 7 days if there is no dispute, or within 30 days with an itemized written statement.",
  "The Residential Tenancies Tribunal offers fully bilingual services in English and French — Canada's only officially bilingual province.",
  "Landlords must maintain the rental unit in a habitable condition and comply with health and safety standards.",
];

const watchInLeases = [
  "Deposits exceeding one month's rent — this is above New Brunswick's legal maximum and is unlawful.",
  "Clauses allowing the landlord to enter without 24 hours written notice for routine repairs or inspections.",
  "Rent increase clauses that do not comply with the 3-month written notice requirement or that allow more than one increase per 12 months.",
  "Provisions attempting to waive the tenant's right to apply to the Residential Tenancies Tribunal.",
  "Leases that do not acknowledge the tenant's right to terminate within 15 days of receiving an unacceptable rent increase notice.",
];

const cities = [
  { name: "Moncton", href: "/canada/new-brunswick/moncton", desc: "New Brunswick's fastest-growing city — strong bilingual rental market, RTT office located here" },
  { name: "Fredericton", href: "/canada/new-brunswick/fredericton", desc: "Provincial capital — government and university rental market, RTT main office in Fredericton" },
  { name: "Saint John", href: "/canada/new-brunswick/saint-john", desc: "New Brunswick's oldest city — affordable rental market with heritage housing stock" },
];

export default function NewBrunswickPage() {
  return (
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Canada", href: "https://leaseplain.com/canada" },
        { name: "New Brunswick", href: "https://leaseplain.com/canada/new-brunswick" },
      ]} />
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/locations" className="hover:underline">Locations</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/canada" className="hover:underline">Canada</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>New Brunswick</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              New Brunswick Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              New Brunswick Tenant Rights: Lease Help &amp; Renter Protections
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              New Brunswick's <em>Residential Tenancies Act</em> governs landlord-tenant relationships
              across Canada's only officially bilingual province. With no rent control but strong notice
              requirements and a fully bilingual Residential Tenancies Tribunal, NB renters in Moncton,
              Fredericton, and Saint John need to understand exactly what protections the law provides.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">New Brunswick Residential Tenancies Act</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The <em>Residential Tenancies Act</em> (New Brunswick) governs the rights and obligations
                  of landlords and tenants for most residential rental units in the province. Administered
                  by <strong>Service New Brunswick</strong>, the Act establishes the{" "}
                  <strong>Residential Tenancies Tribunal (RTT)</strong> as the body responsible for
                  resolving disputes. The RTT operates offices in Fredericton and Moncton and provides
                  fully bilingual services in both English and French.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  The RTT handles a broad range of landlord-tenant issues including security deposit
                  disputes, eviction proceedings, repair orders, and illegal lockout complaints. Hearings
                  can be conducted in person or online. As Canada's only officially bilingual province,
                  New Brunswick gives tenants the right to conduct all RTT proceedings in the official
                  language of their choice — a meaningful protection for the province's Francophone
                  community.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Tenant Protections</h2>
                <ul className="flex flex-col gap-3">
                  {tenantProtections.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                <h3 className="font-semibold text-amber-900 mb-3">No Rent Control in New Brunswick</h3>
                <p className="text-sm text-amber-800 leading-relaxed mb-3">
                  New Brunswick has <strong>no rent control</strong> — a landlord can increase rent by
                  any amount at the end of a lease term or on a periodic tenancy. While the 3-month
                  notice requirement gives tenants time to plan, there is no cap on the amount of the
                  increase. This has significant implications for renters in a competitive market.
                </p>
                <p className="text-sm text-amber-800 leading-relaxed">
                  New Brunswick does provide one key protection: if you receive a rent increase notice
                  and choose not to accept the new amount, you have <strong>15 days</strong> to give
                  written notice to terminate the tenancy. This exit right means you are never forced
                  to accept an unaffordable increase — but you must act within the 15-day window or
                  the increase becomes binding.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What to Watch for in New Brunswick Leases</h2>
                <ul className="flex flex-col gap-3">
                  {watchInLeases.map((w) => (
                    <li key={w} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">New Brunswick Cities</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {cities.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {c.name}
                        </h3>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors mt-0.5" aria-hidden="true" />
                      </div>
                      <p className="text-sm text-slate-600">{c.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "Is there rent control in New Brunswick?", a: "No. New Brunswick has no rent control. Landlords can raise rent by any amount, but must give tenants written notice — at least 3 months for most residential tenancies." },
                  { q: "What is the maximum security deposit in New Brunswick?", a: "New Brunswick caps security deposits at one month's rent. Landlords must provide a written receipt and return the deposit within 7 days of the tenancy ending, minus any valid deductions." },
                  { q: "How do I resolve a landlord-tenant dispute in New Brunswick?", a: "File a complaint with the Rentalsman's Office (Service New Brunswick — Rental Residential Tenancies). The Rentalsman is a provincial officer who mediates and adjudicates disputes at little or no cost." },
                  { q: "Can a New Brunswick landlord evict a tenant without cause?", a: "Yes, with proper notice. A landlord can terminate a month-to-month tenancy by giving at least 3 months' written notice without needing a specific reason. Eviction for cause (e.g., non-payment) requires shorter notice." },
                  { q: "Is New Brunswick's tenancy law available in French?", a: "Yes. New Brunswick is Canada's only officially bilingual province. The Residential Tenancies Act and government services are fully available in both English and French." }
                ]} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your New Brunswick lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI reviews your lease against the New Brunswick Residential Tenancies Act and
                  flags clauses that may exceed deposit limits, waive your RTT rights, or create
                  unenforceable obligations.
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
                    { label: "New Brunswick Tenant Rights", href: "/tenant-rights/new-brunswick" },
                    { label: "Canada Overview", href: "/canada" },
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
  );
}
