import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help in Burnaby, BC | Tenant Rights & Lease Review | LeasePlain",
  description:
    "Burnaby renters: understand your rights under BC's Residential Tenancy Act. Learn about SFU and BCIT housing, condo leases, and the RTB in Burnaby.",
  alternates: { canonical: "https://leaseplain.com/canada/british-columbia/burnaby" },
};

const burnabyRights = [
  "BC's Residential Tenancy Act applies fully in Burnaby, including all strata (condo) rentals.",
  "Security deposits are capped at 0.5x monthly rent; pet deposits at an additional 0.5x monthly rent.",
  "Annual rent increases are limited to the BC rent increase limit — Burnaby landlords cannot exceed the provincial cap.",
  "Strata condo rules apply to tenants, but they cannot override your rights under the Residential Tenancy Act.",
  "Your landlord is responsible for ensuring you receive a copy of the strata bylaws before or at lease signing.",
  "The RTB handles Burnaby disputes — SFU and BCIT students can access campus legal services for help.",
];

const burnabyLeaseIssues = [
  "Strata bylaw conflicts — Burnaby's many strata buildings have bylaws about moves, noise, pets, and common area use that are incorporated into leases; some bylaws may conflict with your RTA rights.",
  "Move-in/move-out scheduling clauses — many Burnaby condo leases require elevator reservations and booking windows; confirm these are reasonable and non-punitive.",
  "Short-term rental clauses — some Burnaby landlords prohibit short-term subletting on Airbnb or VRBO; check your lease for these provisions.",
  "Pet deposit maximums — some Burnaby landlords attempt to charge both a full security deposit AND a full pet deposit on top; total deposits are limited by BC law.",
  "International student leases — BCIT and SFU international students may face pressure to sign unusual lease terms; all students have equal RTA protections.",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do strata bylaws override the BC Residential Tenancy Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Strata bylaws cannot override your rights under BC's Residential Tenancy Act. While strata rules about move times, noise, and common areas do apply to tenants, any bylaw that would reduce your statutory rights as a tenant is unenforceable to that extent. Your landlord must give you a copy of the strata bylaws before or when you sign your lease.",
      },
    },
    {
      "@type": "Question",
      name: "What is the maximum deposit in BC for a pet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In BC, the pet deposit is capped at 0.5x (half) of one month's rent, in addition to the security deposit of 0.5x monthly rent. The total maximum deposits a landlord can collect are therefore 1x monthly rent (0.5x security + 0.5x pet). Any higher amount violates the Residential Tenancy Act.",
      },
    },
    {
      "@type": "Question",
      name: "Can a Burnaby strata ban pets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Strata corporations in Burnaby can have bylaws restricting pets, and if your lease incorporates those strata bylaws, a pet restriction may apply to you. However, the landlord must disclose any pet restrictions before lease signing. If no pet restriction was disclosed and you moved in with a pet, your position is stronger. Consult TRAC or the RTB for advice on your specific situation.",
      },
    },
    {
      "@type": "Question",
      name: "How does rent control work in Burnaby condos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BC's rent increase limit applies to all residential rentals in Burnaby, including condominiums, regardless of when the building was constructed. This differs from Ontario, where units first occupied after November 15, 2018 are exempt from rent control. In Burnaby, your landlord can only raise rent once per 12 months, with 3 months written notice, and cannot exceed the provincial CPI-based cap.",
      },
    },
  ],
};

export default function BurnabyPage() {
  return (
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Canada", href: "https://leaseplain.com/canada" },
        { name: "British Columbia", href: "https://leaseplain.com/canada/british-columbia" },
        { name: "Burnaby", href: "https://leaseplain.com/canada/british-columbia/burnaby" },
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
              <span>Burnaby</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Burnaby, British Columbia
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in Burnaby, BC | Tenant Rights &amp; Lease Review
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Burnaby is one of Metro Vancouver's densest rental markets, home to Simon Fraser University,
              BCIT, and a massive stock of investor-owned strata condos. Understanding how BC's Residential
              Tenancy Act interacts with strata rules is essential for every Burnaby renter.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Burnaby's Rental Market Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Burnaby's Metrotown area is one of the highest-density rental corridors in western Canada,
                  with dozens of high-rise towers containing thousands of apartments and investor-owned condos.
                  The SFU Burnaby mountain campus and BCIT's main campus generate sustained demand from
                  students and faculty, while the city's central location and SkyTrain access attract
                  commuters from across the region.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Rents in Burnaby have approached Vancouver levels in many areas. The prevalence of strata
                  (condo) buildings means tenants here face an additional layer of rules beyond the standard
                  landlord-tenant relationship — strata bylaws can govern everything from move times to pet
                  policies. Knowing how BC law protects you within this system is critical.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as a Burnaby Renter</h2>
                <ul className="flex flex-col gap-3">
                  {burnabyRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Strata Bylaws and the RTA — What Takes Priority?</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  In Burnaby's condo-heavy market, tenants regularly encounter lease addendums incorporating
                  strata corporation bylaws. These bylaws are legally enforceable — but only to the extent
                  they don't reduce your rights under BC's Residential Tenancy Act. If a bylaw conflicts
                  with the RTA (for example, by imposing an illegally high deposit or limiting notice periods),
                  the RTA prevails. Your landlord must provide you with a copy of the strata bylaws before
                  or at the time of lease signing. If they fail to do so, you may have remedies through the RTB.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in Burnaby</h2>
                <ul className="flex flex-col gap-3">
                  {burnabyLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Resources for Burnaby Tenants</h2>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Residential Tenancy Branch (RTB)</strong> — online filing and telephone hearings at gov.bc.ca/rtb</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Tenant Resource and Advisory Centre (TRAC)</strong> — free tenant rights resources at tenants.bc.ca</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>SFU Student Legal Services</strong> — free legal advice for SFU Burnaby students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>BCIT Student Association</strong> — student advocacy and referrals for BCIT renters</span>
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
                <h3 className="font-bold text-lg mb-2">Review your Burnaby lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI checks your Burnaby lease against the BC Residential Tenancy Act, flagging
                  strata conflicts, illegal deposits, and prohibited clauses.
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
