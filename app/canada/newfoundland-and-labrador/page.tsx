import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Newfoundland and Labrador Tenant Rights: Lease Help for NL Renters | LeasePlain",
  description:
    "Understand your rights as a Newfoundland and Labrador renter under the Residential Tenancies Act. Learn about Service NL, the 75% deposit cap, 8-week notice rules, and lease protections in St. John's and across NL.",
  alternates: { canonical: "https://leaseplain.com/canada/newfoundland-and-labrador" },
  openGraph: {
    title: "Newfoundland and Labrador Tenant Rights: Lease Help for NL Renters | LeasePlain",
    description: "Understand your rights as a Newfoundland and Labrador renter under the Residential Tenancies Act. Learn about Service NL, the 75% deposit cap, 8-week notice rules, and lease protections in St. John's and across NL.",
    url: "https://leaseplain.com/canada/newfoundland-and-labrador",
    type: "website",
  },
};

const tenantProtections = [
  "Security deposits are capped at 75% of one month's rent — a unique limit not found in most other Canadian provinces.",
  "No separate pet deposit is permitted in Newfoundland and Labrador — a landlord cannot charge an additional deposit beyond the 75% cap.",
  "Landlords must give 8 weeks (approximately 2 months) written notice for a landlord-initiated end to a periodic tenancy.",
  "Tenants must give 4 weeks written notice to end a periodic tenancy — a shorter notice period than what landlords must provide.",
  "Rent can only be increased once per 12-month period. For monthly and periodic tenancies, the landlord must give 8 weeks written notice before the increase takes effect. For yearly tenancies, the landlord must give 6 months written notice.",
  "Landlords must give 24 hours written notice before entering a rental unit, except in genuine emergencies.",
  "The Residential Tenancies Section of Service NL provides accessible hearings to resolve disputes without requiring legal representation.",
  "Landlords cannot apply the security deposit toward rent arrears without the tenant's written agreement — the deposit exists solely to cover damage beyond normal wear and tear.",
];

const watchInLeases = [
  "Deposits exceeding 75% of one month's rent — this exceeds the legal cap under the NL Residential Tenancies Act and is unlawful.",
  "Any clause purporting to charge a separate pet deposit — Newfoundland and Labrador does not permit additional pet deposits.",
  "Clauses shortening the required 8-week notice period for landlord-initiated rent increases or tenancy terminations.",
  "Provisions waiving the tenant's right to apply to the Residential Tenancies Section of Service NL for dispute resolution.",
  "Entry clauses purporting to allow the landlord to enter without 24 hours written notice for non-emergency situations.",
];

const cities = [
  { name: "St. John's", desc: "NL's largest city and capital — growing rental demand, historic housing stock, Service NL main office" },
];

const faqItems = [
                  { q: "Is there rent control in Newfoundland and Labrador?", a: "No. Newfoundland and Labrador does not have rent control. Landlords may raise rent by any amount but must give tenants at least 8 weeks' written notice before the increase takes effect." },
                  { q: "What is the security deposit limit in Newfoundland?", a: "Newfoundland and Labrador caps security deposits at three-quarters (0.75×) of one month's rent — a unique limit compared to most other provinces. The deposit must be returned within 10 days of tenancy end." },
                  { q: "How do I file a landlord-tenant complaint in Newfoundland?", a: "Contact the Residential Tenancies Section of Service NL. Tenants and landlords can file applications for hearings on rent disputes, deposits, evictions, and maintenance issues." },
                  { q: "What happens if a NL landlord doesn't return my deposit?", a: "File a complaint with the Residential Tenancies Division within 60 days of the tenancy ending. An officer can order the landlord to return your deposit plus interest, and may award additional compensation for non-compliance." },
                  { q: "What notice does a Newfoundland landlord need to terminate a tenancy?", a: "For non-payment of rent, landlords must give at least 30 days' notice. For other lease violations, notice periods vary. Month-to-month tenancies generally require 8 weeks' (2 months') notice to terminate without cause." }
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
  "url": "https://leaseplain.com/canada/newfoundland-and-labrador",
};

export default function NewfoundlandAndLabradorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }).replace(/</g, "\u003c") }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema).replace(/</g, "\u003c") }} />
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Canada", href: "https://leaseplain.com/canada" },
        { name: "Newfoundland & Labrador", href: "https://leaseplain.com/canada/newfoundland-and-labrador" },
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
              <span>Newfoundland and Labrador</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Newfoundland and Labrador Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Newfoundland and Labrador Tenant Rights: Lease Help for NL Renters
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Newfoundland and Labrador's <em>Residential Tenancies Act</em> sets out distinct rules
              for renters across the province — including a unique 75% deposit cap, no pet deposits,
              and 8-week notice requirements for landlord-initiated terminations and rent increases.
              Whether you rent in St. John's or a smaller NL community, knowing these rules is
              essential before signing a lease.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">NL Residential Tenancies Act</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The <em>Residential Tenancies Act</em> (Newfoundland and Labrador) governs residential
                  rental housing across the province. The Act is administered by the{" "}
                  <strong>Residential Tenancies Section of Service NL</strong>, which appoints
                  Residential Tenancies Officers to hear and resolve disputes between landlords and
                  tenants. Hearings are held in St. John's and at regional offices across the province.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  The Residential Tenancies Section handles applications related to deposit disputes,
                  repair orders, illegal lockout complaints, rent increase disputes, and eviction
                  proceedings. The process is designed to be accessible without legal representation.
                  Officers can issue binding orders, and those orders can be enforced through the courts.
                  Newfoundland and Labrador's Act contains several rules that are distinct from other
                  Atlantic provinces — including the 75% deposit cap and the prohibition on pet deposits
                  — making it especially important for renters to understand the specific local rules.
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

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Deposits in Newfoundland and Labrador</h3>
                <p className="text-sm text-blue-800 leading-relaxed mb-3">
                  Newfoundland and Labrador uses a unique security deposit cap of{" "}
                  <strong>75% of one month's rent</strong>. This is different from every other Canadian
                  province, which generally caps deposits at either 50% or 100% of one month's rent.
                  For example, if your rent is $1,200/month, the maximum deposit your landlord can
                  charge is $900. Any amount above this is unlawful and can be recovered through the
                  Residential Tenancies Section.
                </p>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Importantly, <strong>no separate pet deposit is permitted</strong> in NL. Unlike
                  Saskatchewan, landlords in Newfoundland and Labrador cannot charge an additional
                  deposit for tenants who have pets. The 75% cap applies to the total deposit,
                  regardless of whether the tenant has pets. Interest accrues on deposits held for
                  12 or more months at the prescribed rate, and deposits must be returned within
                  10 days of the tenancy ending if there is no dispute.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What to Watch for in NL Leases</h2>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-5">NL Cities</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {cities.map((c) => (
                    <div
                      key={c.name}
                      className="block bg-white border border-slate-200 rounded-2xl p-5"
                    >
                      <h3 className="font-bold text-slate-900 mb-2">
                        {c.name}
                      </h3>
                      <p className="text-sm text-slate-600">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your NL lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI reviews your lease against the NL Residential Tenancies Act and flags clauses
                  that may exceed deposit limits, waive Service NL rights, or shorten required notice
                  periods under Newfoundland and Labrador law.
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
                    { label: "Canadian Tenant Rights Guide", href: "/tenant-rights/canada" },
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
    </>
  );
}
