import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help in Surrey, BC | Tenant Rights & Lease Review | LeasePlain",
  description:
    "Surrey renters: understand your rights under BC's Residential Tenancy Act. Learn about renovictions, illegal fees, and RTB dispute resolution in Surrey.",
  alternates: { canonical: "https://leaseplain.com/canada/british-columbia/surrey" },
};

const surreyRights = [
  "BC's Residential Tenancy Act applies in full to all private residential rentals in Surrey, including basement suites, townhouses, and condominiums.",
  "The Residential Tenancy Branch (RTB) is the dispute resolution body for all BC tenancies — Surrey tenants can file applications at a low filing fee.",
  "Security deposits are capped at half a month's rent; pet deposits are also capped at half a month's rent, and the two do not combine above one month's total.",
  "Annual rent increases are tied to the provincial CPI guideline — Surrey landlords cannot raise rent above this cap without an RTB order.",
  "Landlords must provide four months' written notice (using Form RTB-32) before ending a tenancy for major renovations requiring vacant possession.",
  "Landlords cannot enter a unit without at least 24 hours' written notice except in a genuine emergency.",
];

const surreyLeaseIssues = [
  "\"Renoviction\" pressures — landlords evicting for renovations and then re-renting at higher rates; BC law requires Form RTB-32 with four months' notice and a tenant's right to return.",
  "Illegal upfront fees disguised as \"administration charges\" or \"application processing fees\" — these are not permitted under the BC RTA and cannot be collected.",
  "Basement suite safety code compliance issues used as leverage to pressure tenants; tenants retain full RTA rights regardless of suite registration status.",
  "Income screening exceeding what the BC Human Rights Code permits — a landlord cannot apply an arbitrary income-to-rent ratio as a blanket screening policy.",
  "Unauthorized entry without 24 hours' written notice — a common issue in owner-occupied homes with a basement suite where the landlord lives on-site.",
];

export default function SurreyPage() {
  return (
    <div className="flex flex-col min-h-full">
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
              <span>Surrey</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Surrey, British Columbia
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in Surrey, BC | Tenant Rights &amp; Lease Review
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Surrey is Metro Vancouver's largest city by area and its fastest-growing municipality.
              With one of Canada's most diverse newcomer renter communities and rapidly rising rents
              across Guildford, Newton, and City Centre, knowing your rights under BC's Residential
              Tenancy Act is essential before signing any Surrey lease.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Surrey's Rental Market</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Surrey is Metro Vancouver's most populous suburb and has a more varied rental housing
                  mix than Vancouver or Burnaby — ranging from single-family homes with basement suites
                  to townhouse complexes and purpose-built rental towers in the City Centre and Guildford
                  areas. Surrey's rapid population growth, fuelled significantly by newcomers from South
                  Asian communities, the Philippines, and other regions, has created intense rental demand
                  and consistent upward pressure on rents across all neighbourhood types.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  A large portion of Surrey's rental stock consists of secondary suites in owner-occupied
                  homes — a dynamic that does not reduce any tenant rights under the BC RTA, but can blur
                  the practical relationship between landlord and tenant. Surrey's newcomer renter
                  community, including recent immigrants and international students, represents a group
                  that may be unfamiliar with BC tenancy protections that are significantly stronger than
                  those in many other countries.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as a Surrey Renter</h2>
                <ul className="flex flex-col gap-3">
                  {surreyRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Renovictions in Surrey</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Surrey has seen growing use of "renoviction" — the practice of evicting tenants under
                  the guise of major renovations and then re-renting at a significantly higher rate. Under
                  the BC RTA, a landlord must serve a Form RTB-32 (Four Month Notice to End Tenancy for
                  Demolition, Conversion, or Renovation) with genuine intent to undertake substantial work
                  requiring vacant possession. As a tenant, you have the right to return to the unit at
                  your old rent once the work is complete. If the landlord re-rents within 12 months at a
                  higher rate without genuine renovation having occurred, you may apply to the RTB for
                  compensation of up to 12 months' rent. Document the condition of your unit in writing
                  and photographs before vacating.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in Surrey</h2>
                <ul className="flex flex-col gap-3">
                  {surreyLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Tenant Resources in Surrey</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Surrey tenants have access to a range of supports for lease disputes and tenant rights
                  education. The RTB handles disputes by telephone hearing and written submissions, making
                  it accessible without needing to travel to a hearing centre.
                </p>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Tenant Resource and Advisory Centre (TRAC)</strong> — free tenant rights information and legal assistance across BC, with multilingual resources at tenants.bc.ca</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>BC Residential Tenancy Branch (RTB)</strong> — file dispute applications online at gov.bc.ca/rtb; low filing fee for tenants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Surrey Community Legal Assistance Society</strong> — free and low-cost legal advice for Surrey residents including tenancy matters</span>
                  </li>
                </ul>
              </div>

            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "Do BC rent-control rules apply in Surrey?", a: "Yes. Surrey follows BC's provincial Residential Tenancy Act. Rent increases are capped annually at the BC CPI rate. Landlords must give 3 months' written notice and can only raise rent once in a 12-month period." },
                  { q: "What is the security deposit limit in Surrey?", a: "BC-wide, security deposits are capped at half a month's rent. Surrey landlords cannot collect more than this. A pet damage deposit of up to half a month's rent is permitted separately." },
                  { q: "Is Surrey more affordable to rent than Vancouver?", a: "Generally yes. Surrey's rental market has been more affordable than central Vancouver, though prices have risen with the region's growth. Purpose-built rental buildings are increasing in areas like Surrey Central and Guildford." },
                  { q: "Where can Surrey tenants get help with a dispute?", a: "File a dispute with the BC Residential Tenancy Branch (RTB) online at gov.bc.ca/landlordtenant. The Tenant Resource and Advisory Centre (TRAC) also provides free phone advice to BC tenants including those in Surrey." },
                  { q: "Can a Surrey landlord refuse to accept pets?", a: "Yes. BC landlords can include no-pet clauses in their leases and generally can enforce them. However, they cannot refuse to accommodate a service animal needed by a tenant with a disability under the BC Human Rights Code." }
                ]} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Review your Surrey lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI flags common Surrey lease issues — illegal upfront fees, renoviction
                  clauses, and terms that conflict with the BC Residential Tenancy Act.
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
                    { label: "Burnaby Lease Help", href: "/canada/british-columbia/burnaby" },
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
