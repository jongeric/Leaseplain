import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, ChevronRight, Upload, AlertTriangle, CheckCircle } from "lucide-react";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "BC Tenant Rights: Guide to the Residential Tenancy Act | LeasePlain",
  description:
    "A complete guide to tenant rights in British Columbia under the Residential Tenancy Act. Covers security deposits, rent increases, notice periods, and dispute resolution.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/british-columbia" },
  openGraph: {
    type: "website",
    title: "BC Tenant Rights: Guide to the Residential Tenancy Act | LeasePlain",
    description: "A complete guide to tenant rights in British Columbia under the Residential Tenancy Act. Covers security deposits, rent increases, notice periods, and dispute resolution.",
    url: "https://leaseplain.com/tenant-rights/british-columbia",
  },
  keywords: ["BC tenant rights", "Residential Tenancy Act BC", "British Columbia renter rights", "BC rent increase rules", "RTB British Columbia"],
};

const depositRules = [
  "Security deposit: maximum one-half of one month's rent",
  "Pet damage deposit: maximum one-half of one month's rent (separate from security deposit)",
  "Deposits must be returned within 15 days of end of tenancy (if no dispute) or within 15 days of a mutual written agreement or arbitration order",
  "Interest must be paid on deposits at a rate prescribed by regulation",
  "Landlord must provide a condition inspection report at start of tenancy or forfeits the right to make a claim against the deposit",
];

const rentIncreaseRules = [
  "Rent can only be increased once in any 12-month period",
  "Landlord must give at least 3 full months written notice before any rent increase takes effect",
  "The maximum annual increase is tied to the BC Consumer Price Index (CPI), set by the government each year",
  "For 2024, the BC rent increase cap was 3.5%; for 2025, it was set at 3.0%",
  "Additional rent increase applications can be made to the RTB for extraordinary circumstances (significant cost increases)",
];

const noticeToEndTenancy = [
  { who: "Tenant", period: "1 month", reason: "Any reason, effective on the last day of a rental period" },
  { who: "Landlord", period: "1 month", reason: "Landlord or close family member will occupy the unit" },
  { who: "Landlord", period: "2 months", reason: "Sale of the property (buyer intends to occupy)" },
  { who: "Landlord", period: "4 months", reason: "Major renovation or demolition (with permit)" },
  { who: "Landlord", period: "10 days", reason: "Non-payment of rent (can be disputed by tenant)" },
];

const bcRedFlags = [
  "Lease requiring more than half a month's rent as a security deposit — illegal in BC",
  "Rent increase notice shorter than 3 full months — insufficient under the RTA",
  "Lease waiving the landlord's obligation to complete a move-in condition inspection",
  "Clause attempting to charge rent increases above the annual CPI cap without RTB approval",
  "No mention of dispute resolution rights through the Residential Tenancy Branch",
];

export default function BritishColumbiaTenantRightsPage() {
  return (
    <>
      <ArticleSchema
        headline="BC Tenant Rights: Guide to the Residential Tenancy Act"
        description="A complete guide to tenant rights in British Columbia under the Residential Tenancy Act. Covers security deposits, rent increases, notice periods, and dispute resolution."
        url="https://leaseplain.com/tenant-rights/british-columbia"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["BC tenant rights", "Residential Tenancy Act BC", "British Columbia renter rights", "BC rent increase rules", "RTB British Columbia"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tenant Rights", href: "https://leaseplain.com/tenant-rights" },
        { name: "British Columbia", href: "https://leaseplain.com/tenant-rights/british-columbia" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://leaseplain.com/tenant-rights/british-columbia",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".speakable-summary"],
        },
      }) }} />
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
              <span>British Columbia</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Shield className="w-3.5 h-3.5" aria-hidden="true" />
              BC Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              BC Tenant Rights: Guide to the Residential Tenancy Act
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              British Columbia tenants are protected by the{" "}
              <em>Residential Tenancy Act</em> (RTA) and the Residential Tenancy Branch (RTB),
              which resolves disputes between landlords and tenants. Here&apos;s what BC law
              provides — and what to watch for in your lease.
            </p>
          </div>
        </section>

        {/* Content + sidebar */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">BC Residential Tenancy Act Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The <em>Residential Tenancy Act</em> (RSBC 2002, c. 78) governs the relationship
                  between landlords and tenants in BC. It applies to most residential tenancies —
                  including apartments, houses, basement suites, and secondary suites — but not to
                  co-operative housing, some transitional housing, or accommodation with shared
                  facilities (such as a room in a shared house where the landlord also lives).
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The <strong>Residential Tenancy Branch (RTB)</strong> is the government body
                  responsible for resolving disputes under the RTA. Unlike Ontario&apos;s LTB (which
                  holds in-person hearings), BC&apos;s RTB primarily resolves disputes through telephone
                  arbitration. Applications can be made online at <em>gov.bc.ca/tenants</em>.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  BC tenants have strong protections around security deposits, rent increases,
                  condition inspections, and the right to assign or sublet their tenancy. Many
                  provisions are similar to Ontario&apos;s RTA, but the deposit rules and rent increase
                  caps differ significantly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Security Deposits in BC</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  BC has some of the most specific security deposit rules in Canada:
                </p>
                <ul className="flex flex-col gap-3">
                  {depositRules.map((rule) => (
                    <li key={rule} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {rule}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <p className="text-sm text-amber-800 leading-relaxed">
                    <strong>Important:</strong> In BC, a landlord who fails to complete a move-in
                    condition inspection cannot later claim against the security deposit for damages.
                    Always insist on a written condition inspection at both move-in and move-out.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Rent Increases in BC</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  BC&apos;s rent increase rules are more protective than many other provinces:
                </p>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Notice to End Tenancy in BC</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  BC law specifies different notice periods depending on who is ending the tenancy
                  and why:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left p-3 border border-slate-100 font-semibold text-slate-700">Who</th>
                        <th className="text-left p-3 border border-slate-100 font-semibold text-slate-700">Notice</th>
                        <th className="text-left p-3 border border-slate-100 font-semibold text-slate-700">Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      {noticeToEndTenancy.map((row) => (
                        <tr key={`${row.who}-${row.reason}`} className="border-b border-slate-100">
                          <td className="p-3 text-slate-700 font-medium border border-slate-100">{row.who}</td>
                          <td className="p-3 text-slate-700 border border-slate-100">
                            <span className="font-semibold text-blue-700">{row.period}</span>
                          </td>
                          <td className="p-3 text-slate-600 border border-slate-100">{row.reason}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Note: For fixed-term leases, specific rules apply at the end of the term. Always
                  check the RTB website for the most current notice requirements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags in BC Leases</h2>
                <div className="flex flex-col gap-3">
                  {bcRedFlags.map((flag) => (
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
                <h3 className="font-bold text-lg mb-2">Analyze your BC lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your BC rental agreement and our AI will flag clauses that may not comply
                  with the Residential Tenancy Act.
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
                    { label: "BC City Guides", href: "/canada/british-columbia" },
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
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">BC Resources</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  <strong>Residential Tenancy Branch:</strong>{" "}
                  <span className="text-blue-600">gov.bc.ca/tenants</span>
                  <br /><br />
                  File disputes online, access the RTB policy guidelines, and download standard lease forms.
                </p>
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
