import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, Globe } from "lucide-react";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "US Tenant Rights by State — Coming to LeasePlain | LeasePlain",
  description:
    "Tenant rights in the United States vary by state. LeasePlain is expanding to cover US markets. Learn about tenant protections in New York, California, Florida, and more.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/united-states" },
  openGraph: {
    title: "US Tenant Rights by State — Coming to LeasePlain | LeasePlain",
    description: "Tenant rights in the United States vary by state. LeasePlain is expanding to cover US markets. Learn about tenant protections in New York, California, Florida, and more.",
    url: "https://leaseplain.com/tenant-rights/united-states",
  },
  keywords: ["US tenant rights by state", "American renter rights", "tenant protection United States", "California tenant rights", "New York tenant rights"],
};

const usStates = [
  {
    state: "New York",
    key: "Housing Stability and Tenant Protection Act (HSTPA, 2019)",
    highlights: [
      "Rent stabilization covers over 1 million apartments in New York City",
      "Limits on security deposits: max 1 month's rent statewide",
      "Stronger just-cause eviction protections for stabilized units",
      "Landlords must give advance notice (30–90 days) before non-renewal",
    ],
    comingSoon: true,
  },
  {
    state: "California",
    key: "AB 1482 (Tenant Protection Act, 2019)",
    highlights: [
      "Statewide rent cap: increases limited to 5% + local CPI (max 10%) annually",
      "Just-cause eviction required for covered units after 12 months of tenancy",
      "Security deposit capped at 2 months' rent (unfurnished); 3 months' (furnished)",
      "Many cities (San Francisco, Los Angeles) have additional, stronger local protections",
    ],
    comingSoon: true,
  },
  {
    state: "Florida",
    key: "Florida Residential Landlord and Tenant Act",
    highlights: [
      "No statewide rent control — landlords can raise rent by any amount with proper notice",
      "Security deposit: no statutory cap, but must be held in separate account or bonded",
      "Landlord must return deposit within 15 days (no claim) or 30 days (with claim)",
      "7-day notice for non-payment; 15-day notice for other lease violations",
    ],
    comingSoon: true,
  },
  {
    state: "Texas",
    key: "Texas Property Code",
    highlights: [
      "No statewide rent control; Houston, Dallas, and Austin have no rent caps",
      "Security deposit: no statutory cap; must be returned within 30 days of move-out",
      "3-day notice for non-payment of rent before eviction proceedings",
      "Landlord must repair conditions that affect health or safety within reasonable time",
    ],
    comingSoon: true,
  },
];

export default function UnitedStatesTenantRightsPage() {
  return (
    <>
      <ArticleSchema
        headline="US Tenant Rights by State — Coming to LeasePlain"
        description="Tenant rights in the United States vary by state. LeasePlain is expanding to cover US markets. Learn about tenant protections in New York, California, Florida, and more."
        url="https://leaseplain.com/tenant-rights/united-states"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["US tenant rights by state", "American renter rights", "tenant protection United States", "California tenant rights", "New York tenant rights"]}
      />
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
              <span>United States</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-amber-100">
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              Coming to LeasePlain
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              US Tenant Rights by State — Coming to LeasePlain
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Tenant rights in the United States are governed at the state level, with additional
              protections in many cities and counties. LeasePlain is expanding to help US renters
              understand their leases. Here&apos;s what you need to know about the US system.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-14 px-4 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How US Tenancy Law Works</h2>
            <div className="grid md:grid-cols-2 gap-6 text-slate-700 text-sm leading-relaxed mb-8">
              <div>
                <p className="mb-3">
                  Unlike Canada, where provinces each have comprehensive residential tenancy
                  legislation, the United States has no single federal residential tenancy framework.
                  Tenant rights are governed primarily by <strong>state law</strong>, with significant
                  additional protections in many <strong>cities and counties</strong> — particularly
                  around rent stabilization and just-cause eviction.
                </p>
                <p>
                  The result is extreme variation. A tenant in San Francisco has some of the
                  strongest protections in the world. A tenant in a rural Texas county may have very
                  few. The same state can have wildly different rules depending on the city.
                </p>
              </div>
              <div>
                <p className="mb-3">
                  <strong>Federal law</strong> does play one major role: the{" "}
                  <em>Fair Housing Act</em> prohibits housing discrimination based on race, color,
                  national origin, religion, sex, familial status, and disability. All landlords in
                  the US must comply, regardless of state.
                </p>
                <p>
                  The <em>Americans with Disabilities Act</em> and the{" "}
                  <em>Fair Credit Reporting Act</em> also impose some federal requirements on
                  landlords — particularly around tenant screening and credit checks.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">LeasePlain is currently focused on Canada</h3>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Our AI lease analyzer and tenant rights guides are currently optimized for Canadian
                    law — primarily Ontario. We are actively building out coverage for US states,
                    starting with New York and California. Sign up to be notified when US analysis launches.
                  </p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center gap-2 mt-3 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <Upload className="w-3.5 h-3.5" aria-hidden="true" />
                    Analyze a Canadian Lease Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* State sections */}
        <section className="py-14 px-4 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Tenant Rights by State: Overview</h2>
            <p className="text-slate-600 text-sm mb-8 leading-relaxed">
              Full state-by-state guides are coming soon. Here is a snapshot of key protections in
              major US states.
            </p>
            <div className="flex flex-col gap-6">
              {usStates.map((state) => (
                <div key={state.state} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{state.state}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Key legislation: {state.key}</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700">
                      Guide coming soon
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {state.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                        <ChevronRight className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom links */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-bold text-slate-900 mb-4">In the Meantime</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/tenant-rights/canada"
                className="group bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-200 hover:bg-blue-50 transition-all"
              >
                <p className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors text-sm mb-1 flex items-center gap-1">
                  Canadian Tenant Rights Guide <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                </p>
                <p className="text-xs text-slate-500">Province-by-province: Ontario, BC, Alberta, Quebec</p>
              </Link>
              <Link
                href="/lease-clauses"
                className="group bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-200 hover:bg-blue-50 transition-all"
              >
                <p className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors text-sm mb-1 flex items-center gap-1">
                  Lease Clause Library <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                </p>
                <p className="text-xs text-slate-500">Understand every clause in your lease</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
