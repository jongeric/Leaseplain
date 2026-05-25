import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, ChevronRight, Upload, MapPin } from "lucide-react";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tenant Rights in Canada: A Province-by-Province Guide | LeasePlain",
  description:
    "Tenancy law in Canada is provincially regulated. Explore tenant rights in Ontario, BC, Alberta, and Quebec — security deposits, rent control, eviction rules, and more.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/canada" },
  openGraph: {
    type: "website",
    title: "Tenant Rights in Canada: A Province-by-Province Guide | LeasePlain",
    description: "Tenancy law in Canada is provincially regulated. Explore tenant rights in Ontario, BC, Alberta, and Quebec — security deposits, rent control, eviction rules, and more.",
    url: "https://leaseplain.com/tenant-rights/canada",
  },
  keywords: ["tenant rights Canada", "Canadian tenant law", "province tenant rights", "rent control Canada", "eviction rules Canada"],
};

const provinces = [
  {
    name: "Ontario",
    legislation: "Residential Tenancies Act, 2006",
    body: "Landlord and Tenant Board (LTB)",
    rentControl: "Annual guideline increase (tied to Ontario CPI) for most units; units first occupied after Nov 15, 2018 are exempt",
    deposit: "Last month's rent only; maximum one month's rent; interest must be paid annually",
    notice: "60 days for tenant (end of term); various periods for landlord depending on reason",
    href: "/tenant-rights/ontario",
    color: "bg-blue-50 border-blue-200",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    name: "British Columbia",
    legislation: "Residential Tenancy Act",
    body: "Residential Tenancy Branch (RTB)",
    rentControl: "Limited to BC CPI annually; 3 months written notice required",
    deposit: "Max half month's rent (security deposit) + half month's rent (pet deposit)",
    notice: "1 month from tenant; 1–4 months from landlord depending on reason",
    href: "/tenant-rights/british-columbia",
    color: "bg-green-50 border-green-200",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    name: "Alberta",
    legislation: "Residential Tenancies Act",
    body: "Residential Tenancy Dispute Resolution Service (RTDRS)",
    rentControl: "No province-wide rent control; any increase permitted with 3 months written notice",
    deposit: "Maximum 1 month's rent; must be held in trust; returned within 10–30 days",
    notice: "1 month from tenant; 3 months from landlord for personal use",
    href: "/tenant-rights/alberta",
    color: "bg-amber-50 border-amber-200",
    badgeColor: "bg-amber-100 text-amber-800",
  },
  {
    name: "Quebec",
    legislation: "Civil Code of Quebec / Act Respecting Lessor and Lessee",
    body: "Tribunal administratif du logement (TAL)",
    rentControl: "TAL sets annual rent increase guidelines; tenant can refuse increase",
    deposit: "Security deposits are ILLEGAL in Quebec; no advance payment exceeding 1 month's rent for new leases",
    notice: "3 months (end of term) for fixed-term leases; 1 month for month-to-month",
    href: "/tenant-rights/quebec",
    color: "bg-indigo-50 border-indigo-200",
    badgeColor: "bg-indigo-100 text-indigo-800",
  },
];

const nationalThemes = [
  {
    theme: "Rent Control Varies Significantly",
    detail:
      "Ontario and BC have rent increase guidelines, but Alberta has no rent control at all. Quebec has a guideline system through the TAL. In all provinces, rent can only be increased once per 12 months for existing tenants.",
  },
  {
    theme: "Security Deposit Rules Differ",
    detail:
      "Quebec prohibits security deposits. Ontario limits deposits to last month's rent. BC allows half month's rent as a deposit (plus a pet deposit). Alberta permits up to one month's rent held in trust.",
  },
  {
    theme: "Notice Periods Range from 30 to 60+ Days",
    detail:
      "Most provinces require 30–60 days written notice from tenants. Landlord notice periods are longer and vary by reason for termination — personal use, renovation, non-payment — with landlord-initiated notices typically requiring 60–120 days.",
  },
  {
    theme: "Dispute Mechanisms are Province-Specific",
    detail:
      "Each province has its own tribunal or dispute resolution body. Ontario uses the LTB, BC uses the RTB, Alberta uses the RTDRS, and Quebec uses the TAL. Processes, timelines, and remedies differ across all four.",
  },
  {
    theme: "Human Rights Protections Apply Nationwide",
    detail:
      "All provinces prohibit discrimination in rental housing based on race, ethnicity, sex, disability, family status, religion, and other protected grounds. Federal and provincial human rights codes both apply.",
  },
];

export default function CanadaTenantRightsPage() {
  return (
    <>
      <ArticleSchema
        headline="Tenant Rights in Canada: A Province-by-Province Guide"
        description="Tenancy law in Canada is provincially regulated. Explore tenant rights in Ontario, BC, Alberta, and Quebec — security deposits, rent control, eviction rules, and more."
        url="https://leaseplain.com/tenant-rights/canada"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["tenant rights Canada", "Canadian tenant law", "province tenant rights", "rent control Canada", "eviction rules Canada"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tenant Rights", href: "https://leaseplain.com/tenant-rights" },
        { name: "Canada", href: "https://leaseplain.com/tenant-rights/canada" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://leaseplain.com/tenant-rights/canada",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".speakable-summary"],
        },
      }).replace(/</g, "\u003c") }} />
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
              <span>Canada</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Canadian Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Tenant Rights in Canada: A Province-by-Province Guide
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Tenancy in Canada is regulated at the provincial level — not federally. Each province
              has its own legislation, its own dispute resolution body, and its own rules on rent
              increases, deposits, and eviction. Here&apos;s how the major provinces compare.
            </p>
          </div>
        </section>

        {/* Province cards */}
        <section className="py-14 px-4 border-b border-slate-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Tenant Rights by Province</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {provinces.map((prov) => (
                <Link
                  key={prov.name}
                  href={prov.href}
                  className={`group border rounded-2xl p-6 hover:shadow-md transition-all ${prov.color}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-700 transition-colors">
                        {prov.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">{prov.legislation}</p>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${prov.badgeColor}`}>
                      {prov.body.split("(")[1]?.replace(")", "") || prov.body.split(" ").slice(-1)[0]}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 text-xs text-slate-600 leading-relaxed mb-4">
                    <p><strong>Dispute body:</strong> {prov.body}</p>
                    <p><strong>Rent control:</strong> {prov.rentControl}</p>
                    <p><strong>Deposit rules:</strong> {prov.deposit}</p>
                    <p><strong>Notice periods:</strong> {prov.notice}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-blue-600">
                    Full {prov.name} guide <ChevronRight className="w-3 h-3" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* National themes */}
        <section className="py-14 px-4 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Themes Across Canadian Provinces</h2>
            <div className="flex flex-col gap-6">
              {nationalThemes.map((item) => (
                <div key={item.theme} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-1">{item.theme}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-14 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            <Link
              href="/tenant-rights"
              className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:bg-blue-50 transition-all group"
            >
              <p className="font-semibold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors flex items-center gap-1">
                Tenant Rights Hub <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </p>
              <p className="text-sm text-slate-500">Browse all tenant rights guides on LeasePlain</p>
            </Link>
            <Link
              href="/locations"
              className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:bg-blue-50 transition-all group"
            >
              <p className="font-semibold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors flex items-center gap-1">
                City-Specific Guides <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </p>
              <p className="text-sm text-slate-500">Toronto, Vancouver, Calgary, Montreal, and more</p>
            </Link>
            <Link
              href="/upload"
              className="flex-1 bg-blue-600 rounded-2xl p-6 hover:bg-blue-700 transition-all group text-white"
            >
              <p className="font-semibold mb-1 flex items-center gap-1">
                <Upload className="w-4 h-4" aria-hidden="true" />
                Analyze My Lease <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </p>
              <p className="text-sm text-blue-100">AI-powered lease analysis for Canadian renters</p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
