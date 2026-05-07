import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, ChevronRight, Upload, AlertTriangle, CheckCircle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Alberta Tenant Rights: Guide to the Residential Tenancies Act | LeasePlain",
  description:
    "A complete guide to tenant rights in Alberta under the Residential Tenancies Act. Covers the RTDRS, security deposits, rent increases, and notice periods.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/alberta" },
};

const depositRules = [
  "Security deposit maximum: one month's rent at the time the deposit is collected",
  "Landlord must hold the deposit in trust — it cannot be co-mingled with operating funds",
  "Deposit must be returned within 10 days of the end of tenancy if no deductions are claimed",
  "If the landlord makes deductions, they must provide a written statement of account within 30 days",
  "Landlord must pay interest on the security deposit if it is held for 12 months or more (calculated at the prescribed rate)",
];

const rentIncreaseRules = [
  "There is no province-wide rent control in Alberta — landlords can raise rent by any amount",
  "For a periodic (monthly) tenancy, the landlord must give at least 3 full months written notice before the increase takes effect",
  "Rent can only be increased once in any 365-day period for the same tenant",
  "For a fixed-term tenancy, rent cannot be increased during the fixed term unless the lease explicitly permits it",
  "Notice must be in writing — verbal rent increase notices are not valid",
];

const noticePeriods = [
  { who: "Tenant (monthly)", period: "1 month", detail: "Effective at the end of a tenancy period" },
  { who: "Tenant (weekly)", period: "1 week", detail: "Effective at the end of a tenancy week" },
  { who: "Landlord (personal use)", period: "3 months", detail: "Landlord or close family member requires the unit" },
  { who: "Landlord (non-payment)", period: "14 days", detail: "If tenant pays within 14 days, notice is void" },
  { who: "Landlord (breach of lease)", period: "14 days", detail: "For material breach (other than non-payment)" },
  { who: "Fixed-term lease", period: "End date", detail: "Ends on the agreed-upon end date — no notice required unless parties agree to renew" },
];

const albertaRedFlags = [
  "Security deposit exceeding one month's rent — illegal in Alberta",
  "Clause not addressing where and how the deposit will be held in trust",
  "Lease purporting to increase rent during a fixed-term without explicit permission in the original lease",
  "Rent increase notice shorter than 3 full months — insufficient under the Residential Tenancies Act",
  "Lease waiving the tenant's right to a written statement of account for deposit deductions",
  "Clauses imposing 'administrative fees' or 'late fees' above what Alberta law permits",
];

export default function AlbertaTenantRightsPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/tenant-rights" className="hover:underline">Tenant Rights</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Alberta</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Shield className="w-3.5 h-3.5" aria-hidden="true" />
              Alberta Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Alberta Tenant Rights: Guide to the Residential Tenancies Act
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Alberta tenants are governed by the{" "}
              <em>Residential Tenancies Act</em> (RSA 2000, c. R-17.1). Alberta is notable among
              Canadian provinces for having <strong>no rent control</strong> — but it does have
              clear rules around deposits, notice, and dispute resolution.
            </p>
          </div>
        </section>

        {/* Content + sidebar */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Alberta Residential Tenancies Act Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The <em>Residential Tenancies Act</em> (RTA) governs most residential tenancies in
                  Alberta, including apartments, houses, townhouses, and condominiums rented from a
                  private landlord. It does not apply to hotels, motels, or social/supportive housing
                  under specific programs.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The <strong>Residential Tenancy Dispute Resolution Service (RTDRS)</strong> is
                  Alberta&apos;s specialized tribunal for landlord-tenant disputes. It can adjudicate
                  disputes involving claims up to $50,000. Unlike a court process, RTDRS hearings are
                  informal and accessible — parties can represent themselves. The RTDRS is faster than
                  the courts and specifically designed for tenancy matters.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Tenants in Alberta can also apply to the <strong>Court of King&apos;s Bench</strong> for
                  disputes exceeding the RTDRS threshold, or where the RTDRS does not have jurisdiction
                  (e.g., some injunctions).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Security Deposits in Alberta</h2>
                <ul className="flex flex-col gap-3">
                  {depositRules.map((rule) => (
                    <li key={rule} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {rule}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <strong>No pet deposit:</strong> Unlike BC, Alberta does not have a separate pet
                    deposit provision. Landlords can require a higher security deposit (up to one
                    month&apos;s rent) but cannot charge a deposit specifically labeled as a &ldquo;pet deposit&rdquo;
                    beyond the one-month cap.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Rent Increases in Alberta</h2>
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-4">
                  <p className="text-sm text-amber-800 font-semibold mb-1">No rent control in Alberta</p>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    Unlike Ontario or BC, Alberta has no guideline limiting how much a landlord can
                    increase rent. A landlord can increase rent by any amount — 5%, 20%, or more —
                    as long as they follow the proper notice rules.
                  </p>
                </div>
                <ul className="flex flex-col gap-3">
                  {rentIncreaseRules.map((rule) => (
                    <li key={rule} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Notice Periods in Alberta</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left p-3 border border-slate-100 font-semibold text-slate-700">Who</th>
                        <th className="text-left p-3 border border-slate-100 font-semibold text-slate-700">Notice</th>
                        <th className="text-left p-3 border border-slate-100 font-semibold text-slate-700">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {noticePeriods.map((row) => (
                        <tr key={`${row.who}-${row.period}`} className="border-b border-slate-100">
                          <td className="p-3 text-slate-700 font-medium border border-slate-100">{row.who}</td>
                          <td className="p-3 border border-slate-100">
                            <span className="font-semibold text-blue-700">{row.period}</span>
                          </td>
                          <td className="p-3 text-slate-600 border border-slate-100">{row.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags in Alberta Leases</h2>
                <div className="flex flex-col gap-3">
                  {albertaRedFlags.map((flag) => (
                    <div key={flag} className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <p className="text-sm text-slate-700 leading-relaxed">{flag}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Analyze your Alberta lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your Alberta rental agreement and our AI will identify clauses that raise
                  concerns under the Residential Tenancies Act.
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
                    { label: "Canadian Tenant Rights", href: "/tenant-rights/canada" },
                    { label: "Alberta City Guides", href: "/canada/alberta" },
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

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">Alberta Resources</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  <strong>RTDRS (Dispute Resolution):</strong>{" "}
                  <span className="text-blue-600">rtdrs.alberta.ca</span>
                  <br /><br />
                  File applications, access forms, and find information about the RTDRS hearing process.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
