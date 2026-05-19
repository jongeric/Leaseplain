import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help in Victoria, BC | Tenant Rights & Lease Review | LeasePlain",
  description:
    "Victoria renters: understand your rights under BC's Residential Tenancy Act. Learn about UVic and Camosun housing, rental market conditions, and the RTB in Victoria.",
  alternates: { canonical: "https://leaseplain.com/canada/british-columbia/victoria" },
};

const victoriaRights = [
  "BC's Residential Tenancy Act applies fully in Victoria, including all suites and older converted homes.",
  "Annual rent increases are limited to the BC CPI-based cap — Victoria's tight market means some landlords try to increase above the limit.",
  "Security deposits are capped at 0.5x monthly rent; pet deposits add another 0.5x monthly rent maximum.",
  "UVic and Camosun College students have full RTA rights for off-campus housing.",
  "Renoviction protections apply — Victoria landlords must provide 4 months notice and right of first refusal for any renovation-related eviction.",
  "In Victoria's tight market, tenants who receive end-of-tenancy notices should verify the reason is legally valid before vacating.",
];

const victoriaLeaseIssues = [
  "Vacancy scarcity pressure — Victoria's near-zero vacancy rate creates extreme signing pressure; do not sign a lease without reading it fully even if the landlord says others are waiting.",
  "Character home conversions — Victoria's many heritage homes converted to suites may have aging plumbing, heating, and shared common areas; landlords must maintain all systems.",
  "Short-term rental competition — some Victoria landlords list units as short-term rentals rather than long-term tenancies; ensure your agreement creates a valid RTA tenancy.",
  "Tourism-based landlord evictions — some Victoria landlords attempt to evict tenants to convert units to tourist accommodation; the RTA strictly limits valid eviction grounds.",
  "Student lease timing — UVic leases often start in September; landlords sometimes pressure students to sign in January for September; understand your rights if your plans change.",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are student rentals in Victoria covered by BC's RTA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. UVic and Camosun College students renting off-campus housing in Victoria have the full protections of BC's Residential Tenancy Act. This includes rent increase limits, deposit caps, notice requirements, and access to the RTB dispute process. Student status does not reduce your rights as a tenant.",
      },
    },
    {
      "@type": "Question",
      name: "What are my rights if my Victoria landlord wants to renovate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Victoria landlords must provide at least 4 months written notice to end a tenancy for renovations, and they must give you the right of first refusal to re-occupy the unit at the same rent after renovations are complete. If a landlord proceeds with a renoviction without following this process, you may be entitled to 12 months' compensation and can apply to the RTB.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply to the RTB from Victoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Victoria tenants can file RTB applications online at gov.bc.ca/rtb or by calling 1-800-665-8779. Hearings are conducted by telephone or video. The RTB has a Victoria service location, but most applications are handled through the province-wide system. UVic's Off-Campus Housing office and TRAC can help you prepare your application.",
      },
    },
    {
      "@type": "Question",
      name: "Is there rent control in Victoria, BC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Victoria is subject to BC's province-wide rent increase limit, which is tied to the Consumer Price Index. All residential units are covered — there is no exemption for new buildings, unlike Ontario. Your landlord can only raise rent once per 12 months with at least 3 months written notice, and cannot exceed the provincial cap.",
      },
    },
  ],
};

export default function VictoriaPage() {
  return (
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Canada", href: "https://leaseplain.com/canada" },
        { name: "British Columbia", href: "https://leaseplain.com/canada/british-columbia" },
        { name: "Victoria", href: "https://leaseplain.com/canada/british-columbia/victoria" },
      ]} />
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/canada" className="hover:underline">Canada</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/canada/british-columbia" className="hover:underline">British Columbia</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Victoria</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Victoria, British Columbia
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in Victoria, BC | Tenant Rights &amp; Lease Review
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Victoria is BC's capital city with one of the tightest rental markets in the province.
              Home to the University of Victoria and Camosun College, Victoria renters need to
              understand BC's Residential Tenancy Act to protect themselves in a market where
              landlords hold significant leverage.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Victoria's Rental Market Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Victoria consistently records among the lowest rental vacancy rates in Canada.
                  The combination of a thriving tourism economy, provincial government employment,
                  a growing tech sector, and a large post-secondary student population creates
                  persistent pressure on Victoria's rental supply. Heritage homes converted to
                  suites, character duplexes, and purpose-built apartments make up a varied stock
                  of rental housing, much of it older.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  In this environment, landlords hold substantial leverage at the leasing stage.
                  Tenants often feel pressure to sign quickly, accept unusual terms, or skip
                  important review steps. Knowing your rights under BC's Residential Tenancy Act
                  — including what landlords cannot include in a lease — is your most important
                  tool before signing anything.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as a Victoria Renter</h2>
                <ul className="flex flex-col gap-3">
                  {victoriaRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Victoria's Tight Market and RTB Applications</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  RTB applications from the Victoria region have increased alongside rising rents and
                  renovation pressure. If you receive a notice to end tenancy, you are not required to
                  vacate until an RTB order is made — simply receiving a notice does not end your tenancy.
                  UVic's Off-Campus Housing office provides resources for students navigating lease issues.
                  TRAC (tenants.bc.ca) offers multilingual guidance for all Victoria renters.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in Victoria</h2>
                <ul className="flex flex-col gap-3">
                  {victoriaLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Resources for Victoria Tenants</h2>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Residential Tenancy Branch (RTB)</strong> — file online at gov.bc.ca/rtb or call 1-800-665-8779</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Tenant Resource and Advisory Centre (TRAC)</strong> — free tenant rights information at tenants.bc.ca</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>UVic Off-Campus Housing</strong> — resources and referrals for University of Victoria students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Camosun College Student Society</strong> — housing support and referrals for Camosun students</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <div className="flex flex-col gap-6">
                  {faqSchema.mainEntity.map((faq) => (
                    <div key={faq.name}>
                      <h3 className="font-semibold text-slate-900 mb-2 text-base">{faq.name}</h3>
                      <p className="text-slate-700 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Review your Victoria lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI checks your Victoria lease against the BC Residential Tenancy Act, flagging
                  illegal clauses, excessive deposits, and eviction notice issues.
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
                    { label: "British Columbia Tenant Rights", href: "/canada/british-columbia" },
                    { label: "Vancouver Lease Help", href: "/canada/british-columbia/vancouver" },
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Footer />
    </div>
  );
}
