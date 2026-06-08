import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { Shield, ChevronRight, Upload, MapPin, CheckCircle, AlertTriangle } from "lucide-react";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tenant Rights in Canada: A Province-by-Province Guide | LeasePlain",
  description:
    "Tenancy law in Canada is provincially regulated. Explore tenant rights in Ontario, BC, Alberta, Quebec, Manitoba, and more — security deposits, rent control, eviction rules, dispute tribunals, and more.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/canada" },
  openGraph: {
    type: "website",
    title: "Tenant Rights in Canada: A Province-by-Province Guide | LeasePlain",
    description: "Tenancy law in Canada is provincially regulated. Explore tenant rights in Ontario, BC, Alberta, Quebec, Manitoba, and more — security deposits, rent control, eviction rules, dispute tribunals, and more.",
    url: "https://leaseplain.com/tenant-rights/canada",
  },
  keywords: [
    "tenant rights Canada",
    "Canadian tenant law",
    "province tenant rights",
    "rent control Canada",
    "eviction rules Canada",
    "security deposit Canada",
    "landlord tenant board Canada",
    "dispute landlord Canada",
  ],
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
    rentControl: "Annual allowable increase set by government (3.0% for 2025 & 2026); applies to all units",
    deposit: "Max 0.5 months rent (security deposit) + 0.5 months rent (pet deposit if allowed)",
    notice: "1 month from tenant; 1–4 months from landlord depending on reason",
    href: "/tenant-rights/british-columbia",
    color: "bg-green-50 border-green-200",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    name: "Alberta",
    legislation: "Residential Tenancies Act",
    body: "Residential Tenancy Dispute Resolution Service (RTDRS)",
    rentControl: "No province-wide rent control; any increase permitted with 3 months written notice; once per 12 months",
    deposit: "Maximum 1 month's rent; must be held in trust; interest required annually; returned within 10 days",
    notice: "1 month from tenant; 3 months from landlord for personal use",
    href: "/tenant-rights/alberta",
    color: "bg-amber-50 border-amber-200",
    badgeColor: "bg-amber-100 text-amber-800",
  },
  {
    name: "Quebec",
    legislation: "Civil Code of Quebec / Act Respecting Lessor and Lessee",
    body: "Tribunal administratif du logement (TAL)",
    rentControl: "TAL formula-based revision; tenant can refuse any increase and force TAL arbitration",
    deposit: "Security deposits are ILLEGAL in Quebec; no advance payment exceeding 1 month's rent",
    notice: "3–6 months before lease end (12+ month leases); 1–2 months for shorter leases",
    href: "/tenant-rights/quebec",
    color: "bg-indigo-50 border-indigo-200",
    badgeColor: "bg-indigo-100 text-indigo-800",
  },
  {
    name: "Manitoba",
    legislation: "The Residential Tenancies Act",
    body: "Residential Tenancies Branch",
    rentControl: "Annual guideline (3% in 2025); above-guideline applications permitted",
    deposit: "Maximum 0.5 months rent; interest required",
    notice: "1 month from tenant; varies by reason for landlord",
    href: "/canada/manitoba",
    color: "bg-red-50 border-red-200",
    badgeColor: "bg-red-100 text-red-800",
  },
  {
    name: "Saskatchewan",
    legislation: "The Residential Tenancies Act, 2006",
    body: "Office of Residential Tenancies (ORT)",
    rentControl: "No rent control; any amount with proper notice; once per 12 months",
    deposit: "Maximum 1 month's rent; plus 0.5 months for pets",
    notice: "1 month (monthly tenancy) from tenant; 3 months (annual) from landlord",
    href: "/canada/saskatchewan",
    color: "bg-orange-50 border-orange-200",
    badgeColor: "bg-orange-100 text-orange-800",
  },
];

const tribunalTable = [
  { province: "Ontario", tribunal: "Landlord and Tenant Board (LTB)", fee: "$48–$53", website: "tribunalsontario.ca/ltb" },
  { province: "British Columbia", tribunal: "Residential Tenancy Branch (RTB)", fee: "$100", website: "gov.bc.ca/tenants" },
  { province: "Alberta", tribunal: "RTDRS", fee: "$75", website: "rtdrs.alberta.ca" },
  { province: "Quebec", tribunal: "Tribunal administratif du logement (TAL)", fee: "Varies", website: "tal.gouv.qc.ca" },
  { province: "Manitoba", tribunal: "Residential Tenancies Branch", fee: "Free for tenants", website: "manitoba.ca/rtb" },
  { province: "Saskatchewan", tribunal: "Office of Residential Tenancies (ORT)", fee: "$50", website: "saskatchewan.ca/ort" },
  { province: "New Brunswick", tribunal: "Residential Tenancy Tribunal (RTT)", fee: "Free", website: "snb.ca/rtt" },
  { province: "Nova Scotia", tribunal: "Residential Tenancies Program", fee: "Free", website: "novascotia.ca/tenancies" },
  { province: "PEI", tribunal: "Director of Residential Tenancy (IRAC)", fee: "Free", website: "irac.pe.ca" },
];

const depositTable = [
  { province: "Ontario", securityDeposit: "Not permitted", lastMonthRent: "Yes (max 1 month)", petDeposit: "Not permitted", keyDeposit: "Yes (actual replacement cost)", interest: "Yes, annually" },
  { province: "British Columbia", securityDeposit: "0.5 months rent", lastMonthRent: "Not separate", petDeposit: "0.5 months rent (if pets allowed)", keyDeposit: "No", interest: "Yes (set by RTB)" },
  { province: "Alberta", securityDeposit: "1 month rent (max)", lastMonthRent: "No", petDeposit: "No separate limit", keyDeposit: "No", interest: "Yes, annually" },
  { province: "Quebec", securityDeposit: "ILLEGAL", lastMonthRent: "ILLEGAL", petDeposit: "ILLEGAL", keyDeposit: "No", interest: "N/A" },
  { province: "Manitoba", securityDeposit: "0.5 months rent", lastMonthRent: "No", petDeposit: "No", keyDeposit: "No", interest: "Yes" },
  { province: "Saskatchewan", securityDeposit: "1 month rent", lastMonthRent: "No", petDeposit: "0.5 months rent", keyDeposit: "No", interest: "No" },
  { province: "New Brunswick", securityDeposit: "1 month rent", lastMonthRent: "No", petDeposit: "No", keyDeposit: "No", interest: "No" },
  { province: "Nova Scotia", securityDeposit: "0.5 months rent", lastMonthRent: "No", petDeposit: "No", keyDeposit: "No", interest: "Yes" },
  { province: "PEI", securityDeposit: "1 month rent", lastMonthRent: "No", petDeposit: "No", keyDeposit: "No", interest: "No (held in trust)" },
];

const universalRights = [
  {
    right: "Right to a Written Lease",
    detail: "Most provinces require landlords to provide a written tenancy agreement. Ontario requires the use of the standard lease form for most residential tenancies. A written lease protects both parties and documents the agreed-upon terms.",
  },
  {
    right: "Right to Habitability",
    detail: "Every Canadian tenant has the right to a unit that is fit for habitation. Landlords are legally required to maintain the property in a good state of repair, comply with health and safety standards, and address significant maintenance issues in a timely manner.",
  },
  {
    right: "Right to Quiet Enjoyment",
    detail: "Landlords must give advance written notice before entering your unit — typically 24 hours in most provinces. Entry without notice (outside emergencies) is illegal and a violation of your right to quiet enjoyment of the premises.",
  },
  {
    right: "Protection from Discrimination",
    detail: "Human rights legislation in every province prohibits discrimination in rental housing based on race, national or ethnic origin, colour, religion, age, sex, sexual orientation, gender identity, marital status, family status, disability, and source of income (in most jurisdictions). Both provincial Human Rights Codes and the Canadian Human Rights Act apply.",
  },
  {
    right: "Right to Interest on Deposits",
    detail: "In provinces where deposits are permitted, landlords are typically required to pay interest on the deposit annually. Ontario requires annual interest on last month's rent equal to the rent increase guideline. BC and Alberta also require interest. Quebec prohibits deposits entirely.",
  },
  {
    right: "Right to Dispute at a Tribunal",
    detail: "Every province has a tribunal or dispute resolution body where tenants can file complaints against landlords for illegal rent increases, failure to return deposits, unlawful entry, failure to make repairs, and more. Filing fees for tenants are low or free in most provinces.",
  },
  {
    right: "Protection Against Retaliatory Eviction",
    detail: "Landlords cannot evict tenants in retaliation for exercising their legal rights — such as filing a complaint, requesting repairs, or joining a tenant association. Retaliatory evictions are illegal in all Canadian provinces.",
  },
];

const faqItems = [
  {
    q: "What tenant rights do all Canadians have regardless of province?",
    a: "All Canadian tenants share a core set of rights regardless of where they live: the right to a habitable unit that meets health and safety standards; the right to quiet enjoyment with advance notice before landlord entry (typically 24 hours); protection from discrimination under provincial Human Rights Codes; the right to dispute landlord actions at a provincial tribunal; and protection from retaliatory eviction when exercising legal rights. The specific rules and procedures vary by province, but these fundamental protections apply coast to coast.",
  },
  {
    q: "Which province has the strongest tenant protections in Canada?",
    a: "Quebec and British Columbia are generally considered to have the strongest tenant protections in Canada. Quebec prohibits security deposits entirely, gives tenants the right to refuse any rent increase and force the Tribunal administratif du logement to set a fair rent, and provides a right of first refusal if you are evicted for the landlord's personal use. BC applies rent control to all units (no new-unit exemptions), requires 3 months notice for rent increases, and has a well-resourced Residential Tenancy Branch. Ontario has strong procedural protections but the post-2018 new-unit exemption weakens rent control for a large share of the rental stock.",
  },
  {
    q: "How do I file a complaint against my landlord in Canada?",
    a: "Each province has its own tribunal. In Ontario, file an application at the Landlord and Tenant Board (tribunalsontario.ca/ltb). In BC, apply for dispute resolution at the Residential Tenancy Branch (gov.bc.ca/tenants). In Alberta, file at the RTDRS (rtdrs.alberta.ca). In Quebec, file at the TAL (tal.gouv.qc.ca). Most applications can be filed online. Filing fees range from free (New Brunswick, Nova Scotia, PEI, Manitoba) to $48–$100 (Ontario, BC, Alberta). Gather all relevant documents — your lease, written notices, photographs, and any correspondence — before filing.",
  },
  {
    q: "Can a landlord evict me without going to a tribunal in Canada?",
    a: "No. In Canada, landlords cannot physically remove a tenant or change the locks without a formal eviction order from the provincial tribunal. Even if a landlord serves you with a notice of termination, that notice is not itself an eviction order — if you do not vacate, the landlord must apply to the tribunal for an eviction order, and you have the right to attend a hearing and contest the eviction. Self-help evictions (changing locks, removing belongings, shutting off utilities) are illegal in all Canadian provinces and can result in significant penalties for the landlord.",
  },
  {
    q: "Are deposits legal in Quebec?",
    a: "No. Security deposits of any kind are completely illegal in Quebec. Landlords cannot collect a security deposit, a damage deposit, a pet deposit, or require advance payment of more than one month's rent for a new lease. If a landlord in Quebec attempts to collect a deposit, you can refuse and file a complaint with the Tribunal administratif du logement. This is one of the key features that makes Quebec's tenant protections among the strongest in Canada.",
  },
];

export default function CanadaTenantRightsPage() {
  return (
    <>
      <ArticleSchema
        headline="Tenant Rights in Canada: A Province-by-Province Guide"
        description="Tenancy law in Canada is provincially regulated. Explore tenant rights in Ontario, BC, Alberta, Quebec, Manitoba, and more — security deposits, rent control, eviction rules, dispute tribunals, and more."
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
        }).replace(/</g, "<") }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://leaseplain.com/tenant-rights/canada",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".speakable-summary"],
        },
      }).replace(/</g, "<") }} />

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
              increases, deposits, and eviction. Here is how the provinces compare and what every
              Canadian tenant is entitled to regardless of where they live.
            </p>
          </div>
        </section>

        {/* Universal rights */}
        <section className="py-14 px-4 border-b border-slate-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Rights Every Canadian Tenant Has</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-3xl">
              While tenancy law is provincial, a core set of rights applies to every renter in Canada
              regardless of which province they live in.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {universalRights.map((item) => (
                <div key={item.right} className="flex items-start gap-4 bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-1">{item.right}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Province cards */}
        <section className="py-14 px-4 border-b border-slate-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Tenant Rights by Province</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-3xl">
              Click any province for its full guide. Key differences in rent control, deposits, and
              notice periods are summarized below.
            </p>
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

        {/* Tribunal table */}
        <section className="py-14 px-4 border-b border-slate-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Provincial Tribunal Comparison</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-3xl">
              Every province has a dedicated body for resolving landlord-tenant disputes. Filing fees
              for tenants are low or free in most jurisdictions — never let cost be a barrier to
              asserting your rights.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="text-left px-5 py-3 font-semibold text-slate-700">Province</th>
                    <th className="text-left px-5 py-3 font-semibold text-slate-700">Tribunal</th>
                    <th className="text-left px-5 py-3 font-semibold text-slate-700">Tenant Filing Fee</th>
                    <th className="text-left px-5 py-3 font-semibold text-slate-700">Website</th>
                  </tr>
                </thead>
                <tbody>
                  {tribunalTable.map((row, i) => (
                    <tr key={row.province} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-5 py-3 font-medium text-slate-900">{row.province}</td>
                      <td className="px-5 py-3 text-slate-700">{row.tribunal}</td>
                      <td className="px-5 py-3 text-slate-700">{row.fee}</td>
                      <td className="px-5 py-3 text-slate-500 text-xs">{row.website}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Fees and websites may change. Verify current information at each tribunal&apos;s official site.
            </p>
          </div>
        </section>

        {/* Deposit table */}
        <section className="py-14 px-4 border-b border-slate-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Security Deposit Rules by Province</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-3 max-w-3xl">
              Deposit rules vary dramatically across Canada — from Quebec (no deposits at all) to
              provinces that allow up to one month&apos;s rent plus a pet deposit.
            </p>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-6 flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-amber-800">
                <strong>Quebec:</strong> Security deposits, damage deposits, pet deposits, and advance
                rent of more than one month are all <strong>illegal</strong> in Quebec. If a landlord
                demands any of these, you can refuse and file a complaint with the TAL.
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-sm">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Province</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Security Deposit</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Last Month&apos;s Rent</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Pet Deposit</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Interest Required</th>
                  </tr>
                </thead>
                <tbody>
                  {depositTable.map((row, i) => (
                    <tr key={row.province} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-3 font-medium text-slate-900">{row.province}</td>
                      <td className={`px-4 py-3 ${row.securityDeposit === "ILLEGAL" ? "text-red-600 font-semibold" : "text-slate-700"}`}>
                        {row.securityDeposit}
                      </td>
                      <td className={`px-4 py-3 ${row.lastMonthRent === "ILLEGAL" ? "text-red-600 font-semibold" : "text-slate-700"}`}>
                        {row.lastMonthRent}
                      </td>
                      <td className={`px-4 py-3 ${row.petDeposit === "ILLEGAL" ? "text-red-600 font-semibold" : "text-slate-700"}`}>
                        {row.petDeposit}
                      </td>
                      <td className="px-4 py-3 text-slate-700">{row.interest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Deposit rules change with legislation. Always verify with the provincial tribunal before signing.
            </p>
          </div>
        </section>

        {/* Rent increase summary */}
        <section className="py-14 px-4 border-b border-slate-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Rent Increase Rules Across Canada</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-3xl">
              Whether and how much a landlord can raise your rent depends entirely on your province.
              Some have strict caps; others have no cap at all. All provinces require proper written
              notice and limit increases to once every 12 months.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 border border-green-100 rounded-xl p-5">
                <p className="font-semibold text-green-900 text-sm mb-2">Provinces with rent control</p>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>Ontario (pre-2018 units)</li>
                  <li>British Columbia (all units)</li>
                  <li>Quebec (formula-based)</li>
                  <li>Manitoba</li>
                  <li>New Brunswick</li>
                  <li>Nova Scotia</li>
                  <li>PEI</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                <p className="font-semibold text-amber-900 text-sm mb-2">No rent control</p>
                <ul className="text-sm text-amber-800 space-y-1">
                  <li>Alberta</li>
                  <li>Saskatchewan</li>
                  <li>Newfoundland &amp; Labrador</li>
                  <li>Ontario (post-Nov 2018 units)</li>
                </ul>
                <p className="text-xs text-amber-700 mt-3">Procedural rules still apply in all provinces.</p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <p className="font-semibold text-blue-900 text-sm mb-2">Universal rules</p>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>Once per 12 months max</li>
                  <li>Written notice required</li>
                  <li>Amount must be stated</li>
                  <li>Right to dispute notice defects</li>
                </ul>
              </div>
            </div>
            <Link
              href="/tenant-rights/rent-increase-rules"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm"
            >
              Full Rent Increase Rules Guide
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Key themes */}
        <section className="py-14 px-4 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Themes Across Canadian Provinces</h2>
            <div className="flex flex-col gap-6">
              {[
                {
                  theme: "Rent Control Varies Significantly",
                  detail: "Ontario and BC have rent increase guidelines, but Alberta has no rent control at all. Quebec has a TAL formula system. New Brunswick, Nova Scotia, and PEI introduced or extended caps in recent years. In all provinces, rent can only be increased once per 12 months for existing tenants.",
                },
                {
                  theme: "Security Deposit Rules Differ",
                  detail: "Quebec prohibits security deposits entirely. Ontario limits deposits to last month's rent plus an optional key deposit. BC allows 0.5 months security deposit plus 0.5 months pet deposit. Alberta permits up to one month's rent held in trust with interest.",
                },
                {
                  theme: "Notice Periods Range from 30 to 90+ Days",
                  detail: "Most provinces require 30–60 days written notice from tenants to end a tenancy. Landlord-initiated notice periods are longer and vary by reason — personal use, sale, renovation, or non-payment — typically 60–120 days.",
                },
                {
                  theme: "Dispute Mechanisms are Province-Specific",
                  detail: "Each province has its own tribunal. Ontario uses the LTB, BC the RTB, Alberta the RTDRS, Quebec the TAL. Processes, timelines, and remedies differ. Most applications can now be filed online.",
                },
                {
                  theme: "Human Rights Protections Apply Nationwide",
                  detail: "All provinces prohibit discrimination in rental housing based on race, ethnicity, sex, disability, family status, religion, source of income (most provinces), and other protected grounds. Both federal and provincial Human Rights Acts apply.",
                },
              ].map((item) => (
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

        {/* FAQ */}
        <section className="py-14 px-4 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="border border-slate-100 rounded-xl px-6">
              <FAQAccordion items={faqItems} />
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
