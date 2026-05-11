import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "PEI Tenant Rights: Lease Help & Rental Laws in Prince Edward Island | LeasePlain",
  description:
    "Understand your rights as a PEI renter. Learn about the Island Regulatory and Appeals Commission, rent caps, deposits, and lease protections in Prince Edward Island.",
  alternates: { canonical: "https://leaseplain.com/canada/prince-edward-island" },
};

const tenantProtections = [
  "Rent increases are capped annually by the Rental Office Director — typically tied to CPI — providing meaningful rent control.",
  "Landlords must give 3 months written notice before any rent increase takes effect.",
  "Only one rent increase per 12-month period is permitted — above-cap increases require an application to IRAC.",
  "Security deposits are held in trust by IRAC (not the landlord), protecting tenants from deposit misuse.",
  "Security deposits are capped at approximately 2 weeks rent (0.5x monthly) and returned within 10 days after tenancy ends.",
  "Landlords must give 24 hours written notice before entering a rental unit, except in genuine emergencies.",
  "The Island Regulatory and Appeals Commission (IRAC) adjudicates all evictions — self-help eviction is illegal.",
  "Retaliatory evictions — evictions in response to a tenant exercising their legal rights — are prohibited.",
];

const watchInLeases = [
  "Rent increase clauses that exceed the annual cap set by the Rental Office Director — these are unenforceable.",
  "Any provision stating the landlord holds the security deposit directly — in PEI, deposits must be held by IRAC.",
  "Shortened notice periods for rent increases — PEI requires 3 full months written notice.",
  "Clauses waiving the tenant's right to apply to IRAC for dispute resolution or appeal.",
  "Provisions allowing entry without 24 hours notice for non-emergency inspections or work.",
];

export default function PrinceEdwardIslandPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is there rent control in PEI?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Prince Edward Island reintroduced rent control through the Rental of Residential Property Act. Annual rent increases are capped by the Rental Office Director, typically based on the Consumer Price Index (CPI). Landlords who wish to increase rent above the cap must apply to the Island Regulatory and Appeals Commission (IRAC) for approval. Landlords must give 3 months written notice before any increase.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who holds the security deposit in PEI?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In Prince Edward Island, security deposits are held in trust by the Island Regulatory and Appeals Commission (IRAC) — not by the landlord. This is similar to the Nova Scotia model and is one of the most protective deposit systems in Canada. The deposit is returned within 10 days after the tenancy ends, once any inspection and claims process is complete.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does IRAC work for tenant disputes in PEI?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "IRAC (Island Regulatory and Appeals Commission) is PEI's adjudicative body for residential tenancy disputes. Its Residential Tenancies Section handles all disputes between landlords and tenants, including deposit disputes, rent increase applications, eviction proceedings, and repair orders. Hearings are held in Charlottetown. IRAC adjudicators must approve evictions — landlords cannot self-evict.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the rent increase cap in Prince Edward Island?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The annual rent increase cap in PEI is set each year by the Rental Office Director and is typically tied to the Consumer Price Index (CPI). Landlords cannot increase rent above this cap without applying to IRAC for approval. The landlord must give 3 months written notice of any increase, and only one increase per 12-month period is permitted.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the maximum security deposit in PEI?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The maximum security deposit in Prince Edward Island is approximately 2 weeks rent (roughly 0.5x one month's rent). The deposit is paid to IRAC and held in trust — not by the landlord. It is returned within 10 days after the tenancy ends, once the inspection and claims process is complete.",
                  },
                },
              ],
            }),
          }}
        />

        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/canada" className="hover:underline">Canada</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Prince Edward Island</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              PEI Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              PEI Tenant Rights: Lease Help & Rental Laws in Prince Edward Island
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Prince Edward Island's <em>Rental of Residential Property Act</em> provides some of the
              strongest tenant protections in Atlantic Canada — including rent control, government-held
              security deposits through IRAC, and a formal adjudication process for all evictions.
              Here's what every PEI renter needs to know before signing a lease.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Law: The Rental of Residential Property Act & IRAC</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The <em>Rental of Residential Property Act</em> governs residential tenancies in Prince
                  Edward Island. The <strong>Island Regulatory and Appeals Commission (IRAC)</strong> —
                  specifically its Residential Tenancies Section — serves as the province's adjudicative
                  body for all landlord-tenant disputes. IRAC is based in Charlottetown and handles
                  hearings for the entire province.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  IRAC adjudicators have broad authority: they approve or deny evictions, resolve deposit
                  disputes, adjudicate rent increase applications above the annual cap, and issue repair
                  orders. PEI's system is notably protective because it combines rent control with
                  government-held deposits and mandatory adjudication of evictions — all rare features
                  even among Canadian provinces with strong tenant protections.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">IRAC and Government-Held Deposits: A Protective System</h3>
                <p className="text-sm text-blue-800 leading-relaxed mb-2">
                  PEI uses a deposit model similar to Nova Scotia: tenants pay security deposits directly
                  to <strong>IRAC</strong>, which holds the funds in trust for the duration of the
                  tenancy. This means your deposit is never in the landlord's hands — it is held by an
                  independent government body and can only be released following the proper process at
                  the end of the tenancy.
                </p>
                <p className="text-sm text-blue-800 leading-relaxed">
                  If your landlord asks you to pay the security deposit to them directly, this is a
                  red flag. The deposit must go to IRAC. Contact IRAC's Residential Tenancies Section
                  in Charlottetown if you have questions about the deposit process.
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

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Rent Increase Rules</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  PEI reintroduced rent control after a period of deregulation. Annual rent increases
                  are now <strong>capped by the Rental Office Director</strong>, typically based on the
                  Consumer Price Index (CPI) for PEI. The cap is announced each year and applies to all
                  residential rental units in the province.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Landlords who wish to increase rent above the annual cap must apply to IRAC and
                  demonstrate justification — for example, significant capital improvements. IRAC
                  adjudicators review these applications and can approve or deny above-cap increases.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Regardless of the amount, landlords must give <strong>3 months written notice</strong>
                  before any rent increase takes effect. Only one increase per 12-month period is
                  permitted. An increase without proper notice or above the cap is unenforceable.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Security Deposit Rules</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Security deposits in PEI are capped at <strong>approximately 2 weeks rent (roughly
                  0.5x one month's rent)</strong>. The deposit must be paid directly to IRAC, where it
                  is held in trust — not by the landlord. This arrangement protects tenants from
                  landlords who might otherwise misappropriate deposit funds.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  After the tenancy ends, IRAC returns the deposit within <strong>10 days</strong>
                  once the inspection and claims process is complete. If the landlord claims deductions
                  for damage, the matter is adjudicated by IRAC based on evidence from both parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Eviction Rules</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Evictions in PEI must go through IRAC — <strong>all evictions require approval
                  from an IRAC adjudicator</strong>. This is one of the strongest procedural protections
                  for tenants in Canada. A landlord cannot simply give notice and demand that a tenant
                  leave; they must file an application with IRAC and obtain a formal order.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  For owner's own use, <strong>3 months notice</strong> is required. For non-payment
                  of rent or serious cause, <strong>20 days notice</strong> is required. Retaliatory
                  evictions — evictions taken because a tenant exercised a legal right — are explicitly
                  prohibited under PEI law.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Self-help eviction (changing locks, removing belongings, disconnecting utilities) is
                  illegal and can result in significant penalties for the landlord. Tenants who
                  experience an illegal lockout should contact IRAC immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Landlord Maintenance Obligations</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  PEI landlords must maintain rental units in a habitable condition and comply with all
                  applicable health, safety, and building standards. The obligation to repair and
                  maintain the unit is a statutory duty and cannot be contracted away — any lease clause
                  making the tenant responsible for structural maintenance or essential systems is
                  unenforceable.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  If a landlord fails to make required repairs, tenants can apply to IRAC for a repair
                  order. IRAC can also order a rent reduction for the period during which the unit
                  did not meet the required habitability standard.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What to Watch for in PEI Leases</h2>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-4">PEI Cities</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <strong>Charlottetown</strong> is Prince Edward Island's largest rental market and
                  the location of the IRAC offices. A city-specific lease guide for Charlottetown is
                  coming soon. All rentals on the Island fall under the Rental of Residential Property
                  Act — the rent cap, IRAC-held deposits, and mandatory eviction adjudication apply
                  province-wide.
                </p>
              </div>

            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Upload Your Lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI reviews your PEI lease against the Rental of Residential Property Act and
                  flags clauses that may exceed the rent cap, mishandle deposits, or waive your
                  IRAC rights.
                </p>
                <Link
                  href="/upload"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                >
                  <Upload className="w-4 h-4" aria-hidden="true" />
                  Upload Your Lease
                </Link>
                <p className="text-xs text-blue-200 mt-3 text-center">Not legal advice</p>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Pages</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Canada Tenant Rights Overview", href: "/canada" },
                    { label: "Tenant Rights in Canada", href: "/tenant-rights/canada" },
                    { label: "Renting in Canada Guide", href: "/renting-in-canada" },
                    { label: "Common Lease Clauses Explained", href: "/lease-clauses" },
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
