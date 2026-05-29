import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { ShieldCheck, CheckCircle, AlertTriangle, ChevronRight, Upload, Clock, Thermometer, FileText } from "lucide-react";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Landlord Responsibilities in Ontario – What They Must Do by Law | LeasePlain",
  description:
    "A complete guide to landlord responsibilities in Ontario. Maintenance, entry notice, heat, pests, harassment, and what to do if your landlord fails their duties.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/landlord-responsibilities" },
  openGraph: {
    type: "website",
    title: "Landlord Responsibilities in Ontario – What They Must Do by Law | LeasePlain",
    description: "A complete guide to landlord responsibilities in Ontario. Maintenance, entry notice, heat, pests, harassment, and what to do if your landlord fails their duties.",
    url: "https://leaseplain.com/tenant-rights/landlord-responsibilities",
  },
  keywords: ["landlord responsibilities Ontario", "landlord obligations Canada", "landlord maintenance duty", "landlord entry notice Ontario", "landlord RTA requirements"],
};

const whatToDoIfLandlordFails = [
  { step: "Document everything", detail: "Take photos, save text messages and emails, and keep a written record of issues with dates." },
  { step: "Notify in writing", detail: "Send a written notice (email is fine) describing the problem and requesting a fix within a reasonable timeframe." },
  { step: "Contact property standards", detail: "Your local municipality has a property standards department. File a complaint if the unit is unsafe." },
  { step: "File a T6 with the LTB", detail: "A T6 — Tenant Application about Maintenance — allows you to seek remedies including a rent reduction, order for repairs, and compensation." },
  { step: "Get legal advice", detail: "Contact Legal Aid Ontario or your local community legal clinic, especially before a hearing." },
];

const otherProvincesLandlord = [
  {
    province: "British Columbia",
    body: "Residential Tenancy Branch (RTB)",
    detail: "RTB can order repairs, compensation, and rent reductions. Landlords must comply with BC's Residential Tenancy Act maintenance standards. Hearings are conducted by arbitrators.",
  },
  {
    province: "Alberta",
    body: "RTDRS (Residential Tenancy Dispute Resolution Service)",
    detail: "RTDRS handles most landlord-tenant disputes quickly and cheaply. For larger claims, the Court of King's Bench has jurisdiction. Alberta landlords have similar heat and maintenance obligations.",
  },
  {
    province: "Quebec",
    body: "Tribunal administratif du logement (TAL)",
    detail: "Quebec landlords must keep dwellings in a good state of repair throughout the lease (Civil Code, art. 1854). The TAL can order repairs, rent reduction, and resiliation of lease.",
  },
];

const faqItems = [
  {
    q: "Can my landlord enter my apartment without notice in Ontario?",
    a: "No — except in genuine emergencies. Under RTA s. 27, a landlord must give at least 24 hours written notice before entering for repairs, inspections, or showings. The notice must state the reason and a specific time between 8 a.m. and 8 p.m. In a true emergency (e.g., a burst pipe flooding the building), the landlord can enter without notice, but must still enter at a reasonable time. Repeated unannounced entries, or entries used as a pretext for harassment, can be the basis of a T2 application.",
  },
  {
    q: "What can I do if my landlord shuts off my utilities?",
    a: "A landlord shutting off heat, hydro, gas, or water — even if you owe rent — is illegal under RTA s. 21. You can file a T2 application (Application About Tenant Rights) for an emergency order. The LTB can order the service restored immediately and award compensation. In urgent cases, you can also seek an injunction in Superior Court. Shutting off utilities is a serious offence and can result in significant fines.",
  },
  {
    q: "Is my landlord required to provide air conditioning?",
    a: "Only if air conditioning was part of the original tenancy agreement. If your lease includes AC or the unit came with an AC unit as part of the rental, the landlord must maintain it. In Toronto specifically, if the tenancy includes AC, the landlord must ensure the unit does not exceed 26°C in summer (Toronto Municipal Code Chapter 497). There is no provincial law requiring landlords to provide AC if it was never part of the tenancy.",
  },
  {
    q: "What happens if my landlord doesn't give me a proper lease?",
    a: "Under RTA s. 12, most private residential tenancies in Ontario that start on or after April 30, 2018 must use the Ontario Standard Lease. If your landlord fails to provide the Standard Lease after your written request, you may withhold one month's rent after 21 days have passed without receiving it. Once the landlord provides the lease, you must pay the withheld rent within 30 days. If you believe your lease contains illegal clauses, those clauses are void under the RTA even if you signed them.",
  },
  {
    q: "Can a landlord increase rent whenever they want?",
    a: "No. In Ontario, most landlords can only raise rent once every 12 months, and only up to the annual rent increase guideline set by the provincial government (typically 2–2.5% in recent years). The landlord must give 90 days written notice using Form N1 before any increase takes effect. Above-guideline increases require an LTB application and a hearing. Units first occupied for residential purposes after November 15, 2018 are exempt from rent control, but landlords still must give 90 days notice.",
  },
];

export default function LandlordResponsibilitiesPage() {
  return (
    <>
      <ArticleSchema
        headline="Landlord Responsibilities in Ontario – What They Must Do by Law"
        description="A complete guide to landlord responsibilities in Ontario. Maintenance, entry notice, heat, pests, harassment, and what to do if your landlord fails their duties."
        url="https://leaseplain.com/tenant-rights/landlord-responsibilities"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["landlord responsibilities Ontario", "landlord obligations Canada", "landlord maintenance duty", "landlord entry notice Ontario", "landlord RTA requirements"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tenant Rights", href: "https://leaseplain.com/tenant-rights" },
        { name: "Landlord Responsibilities", href: "https://leaseplain.com/tenant-rights/landlord-responsibilities" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://leaseplain.com/tenant-rights/landlord-responsibilities",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".speakable-summary"],
        },
      }).replace(/</g, "<") }} />
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/tenant-rights" className="hover:underline">Tenant Rights</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Landlord Responsibilities</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              Tenant Rights Guide
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Landlord Responsibilities in Ontario: What They Must Do by Law
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Ontario landlords have significant legal obligations under the{" "}
              <em>Residential Tenancies Act</em>. Many of these obligations cannot be waived by
              a lease clause. Here&apos;s what your landlord is legally required to do — and what to
              do if they don&apos;t.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              {/* Section 1: Maintenance and repair */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block" aria-hidden="true" />
                    Maintenance and Repair (RTA s. 20)
                  </span>
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Section 20 of the <em>Residential Tenancies Act, 2006</em> is the foundation of
                  landlord maintenance obligations:
                </p>
                <blockquote className="border-l-4 border-blue-400 pl-4 py-1 mb-4 bg-blue-50 rounded-r-lg">
                  <p className="text-sm text-blue-900 italic leading-relaxed">
                    &ldquo;A landlord is responsible for providing and maintaining a residential complex,
                    including the rental units in it, in a good state of repair and fit for habitation
                    and for complying with health, safety, housing and maintenance standards.&rdquo;
                  </p>
                  <p className="text-xs text-blue-600 mt-1">— RTA, s. 20(1)</p>
                </blockquote>
                <p className="text-slate-700 leading-relaxed mb-4">
                  This duty is <strong>non-waivable</strong>: no lease clause, signed agreement, or
                  tenant consent can eliminate it. The duty applies even if the defect predated the
                  tenancy — if the landlord knowingly rented a unit with a mould problem or broken
                  furnace, they remain responsible for remediation.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Maintain the unit and building in a good state of repair at all times.",
                    "Comply with all health, safety, and property standards bylaws.",
                    "Make repairs even if the problem existed before the tenancy began.",
                    "Replace or repair appliances that were provided as part of the rental.",
                    "Maintain common areas: hallways, elevators, laundry rooms, parking areas.",
                    "Remediate mould, water damage, and other environmental hazards.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 2: Heat provision */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block" aria-hidden="true" />
                    <Thermometer className="w-5 h-5 text-blue-600" aria-hidden="true" />
                    Heat Provision
                  </span>
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Ontario law requires landlords to maintain a minimum temperature in rental units
                  during heating season. The provincial standard is set in O. Reg. 516/06:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                    <p className="font-semibold text-blue-900 text-sm mb-2">Provincial Standard (O. Reg. 516/06)</p>
                    <ul className="flex flex-col gap-2 text-sm text-blue-800">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" aria-hidden="true" />
                        Minimum <strong>20°C</strong> from <strong>September 1 to June 15</strong>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" aria-hidden="true" />
                        Applies province-wide to all residential rentals
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" aria-hidden="true" />
                        Failure to maintain heat is a maintenance violation; file T6
                      </li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
                    <p className="font-semibold text-orange-900 text-sm mb-2">Toronto Standard (Municipal Code Ch. 497)</p>
                    <ul className="flex flex-col gap-2 text-sm text-orange-800">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-600 flex-shrink-0" aria-hidden="true" />
                        Minimum <strong>21°C</strong> from <strong>September 15 to June 1</strong>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-600 flex-shrink-0" aria-hidden="true" />
                        If AC is part of tenancy: maximum <strong>26°C</strong> in summer
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-600 flex-shrink-0" aria-hidden="true" />
                        Call 311 to report heat complaints in Toronto
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed text-sm">
                  If heat fails in your unit, report it in writing to the landlord immediately. If
                  not restored quickly, file a complaint with your city&apos;s bylaw enforcement (311 in
                  Toronto) <em>and</em> file a T6 application at the LTB. Both routes can be pursued
                  simultaneously.
                </p>
              </div>

              {/* Section 3: Entry notice rules */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block" aria-hidden="true" />
                    Entry Notice Rules (RTA s. 27)
                  </span>
                </h2>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-5">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    24 Hours Written Notice Required
                  </h3>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Your landlord must provide at least <strong>24 hours written notice</strong> before
                    entering for: repairs or maintenance, inspections, showing the unit to prospective
                    tenants or buyers, or any other permitted purpose. The notice must state the reason
                    for entry and a specific time between 8 a.m. and 8 p.m.
                  </p>
                </div>
                <div className="flex flex-col gap-3 mb-4">
                  {[
                    { rule: "Repairs and maintenance", detail: "24 hours written notice required; entry must be between 8 a.m. and 8 p.m." },
                    { rule: "Routine inspections", detail: "24 hours written notice; limited to twice per year unless there are specific grounds." },
                    { rule: "Showing to prospective tenants or buyers", detail: "24 hours written notice; once the unit is being actively sold, landlord can show up to once per day with proper notice." },
                    { rule: "Emergency entry", detail: "No notice required in genuine emergencies (flooding, fire, gas leak). Landlord must still enter at a reasonable time if the emergency permits." },
                    { rule: "Harassment through repeated entries", detail: "Repeated entries — even with notice — can constitute interference with reasonable enjoyment. Tenant can file a T2 application." },
                  ].map((item) => (
                    <div key={item.rule} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>{item.rule}:</strong> {item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Vital services */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block" aria-hidden="true" />
                    Vital Services Cannot Be Shut Off (RTA s. 21)
                  </span>
                </h2>
                <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-4">
                  <p className="text-sm font-semibold text-red-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                    Shutting off utilities is illegal — even if you owe rent
                  </p>
                  <p className="text-sm text-red-800 leading-relaxed">
                    Section 21 of the RTA prohibits landlords from discontinuing the supply of heat,
                    hydro, gas, or water to a rental unit — regardless of any rent arrears or lease
                    terms. This prohibition applies even if the landlord is responsible for paying
                    the utility bills and claims the tenant owes money.
                  </p>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If your landlord shuts off utilities:
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "File a T2 application (Application About Tenant Rights) for an emergency hearing. The LTB can order the service restored immediately.",
                    "In urgent situations, seek an emergency injunction in Superior Court — courts take utility shutoffs very seriously.",
                    "The LTB can award substantial compensation, including general damages for the disruption and stress caused.",
                    "Shutting off utilities is also a provincial offence that can result in fines.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 5: Rent receipts and LMR interest */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block" aria-hidden="true" />
                    Rent Receipts and Last Month&apos;s Rent Interest (RTA s. 109)
                  </span>
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Two lesser-known but important landlord obligations:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                    <p className="font-semibold text-slate-900 text-sm mb-2">Rent Receipts (s. 109)</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      A landlord must provide a receipt within a reasonable time if the tenant
                      pays in cash <em>or</em> requests one in writing. Failure to provide a
                      receipt is an offence. Receipts should show the amount paid, the period
                      covered, and the address.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                    <p className="font-semibold text-slate-900 text-sm mb-2">Last Month&apos;s Rent (LMR) Interest</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      The landlord must pay annual interest on the LMR deposit each year, at the
                      same rate as the Ontario rent increase guideline for that year. The interest
                      can be applied as a credit against the last month&apos;s rent, or paid out. File
                      a T1 application if the landlord fails to pay.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 6: Ontario Standard Lease */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block" aria-hidden="true" />
                    <FileText className="w-5 h-5 text-blue-600" aria-hidden="true" />
                    Ontario Standard Lease (RTA s. 12)
                  </span>
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Since April 30, 2018, most private residential landlords in Ontario must use the
                  provincial <em>Standard Form of Lease</em> (the &ldquo;Ontario Standard Lease&rdquo;). This
                  standardized form:
                </p>
                <ul className="flex flex-col gap-3 mb-5">
                  {[
                    "Ensures tenants know their basic rights upfront — the standard lease includes a reference to the RTA and the tenant's key protections.",
                    "Prevents landlords from slipping in illegal clauses buried in custom lease language.",
                    "Is mandatory for most private residential tenancies (exempt: care homes, social housing, some student housing).",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                  <p className="text-sm font-semibold text-amber-900 mb-1">If your landlord won&apos;t provide the Standard Lease</p>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    Send a written request. If the landlord fails to provide the Standard Lease within
                    21 days of your written request, you are entitled to withhold one month&apos;s rent.
                    Once the landlord provides the lease, you must pay the withheld rent within 30 days.
                    Even if you signed a custom lease, any clause that conflicts with the RTA is void.
                  </p>
                </div>
              </div>

              {/* Section 7: No self-help eviction */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block" aria-hidden="true" />
                    Proper Eviction Process Required
                  </span>
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  A landlord cannot evict a tenant through &ldquo;self-help&rdquo; methods. The only legal
                  eviction process in Ontario requires:
                </p>
                <div className="flex flex-col gap-3 mb-5">
                  {[
                    { step: "1. Valid notice", detail: "A proper Form N-notice (e.g., N4 for non-payment, N5 for damage, N13 for renovation) must be served with the correct notice periods." },
                    { step: "2. LTB application", detail: "The landlord must file an application with the LTB (e.g., L1 for arrears). The tenant has the right to contest." },
                    { step: "3. LTB hearing and order", detail: "The LTB issues an order under s. 83 after hearing both sides. The LTB can refuse to order eviction even if the landlord has grounds, if it's inequitable." },
                    { step: "4. Court Enforcement Office", detail: "Only the sheriff (Court Enforcement Office) can physically enforce an eviction order. A landlord cannot remove the tenant themselves." },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded-full flex-shrink-0 mt-0.5">{item.step.split(".")[0]}</span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm mb-0.5">{item.step.split(". ")[1]}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                  <p className="text-sm font-semibold text-red-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                    Illegal eviction tactics — all prohibited
                  </p>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Changing the locks while the tenant is away",
                      "Removing the tenant's belongings from the unit",
                      "Shutting off utilities to force the tenant out",
                      "Threatening, intimidating, or physically forcing the tenant to leave",
                      "Entering repeatedly to pressure the tenant into leaving",
                    ].map((item) => (
                      <li key={item} className="text-sm text-red-800 leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-red-700 mt-3">
                    If your landlord uses any of these tactics, call police (unlawful eviction is a
                    criminal matter) and file a T2 application at the LTB for emergency relief.
                  </p>
                </div>
              </div>

              {/* Section 8: What to do if landlord fails */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">What to Do If Your Landlord Fails Their Duties</h2>
                <div className="flex flex-col gap-4">
                  {whatToDoIfLandlordFails.map((item, i) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm mb-1">{item.step}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 9: Lease clauses void */}
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                  Lease Clauses Cannot Remove These Rights
                </h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Even if your lease contains a clause that appears to waive your landlord&apos;s
                  maintenance obligations or permits them to enter without notice, those clauses
                  are void under the RTA. The Act&apos;s protections cannot be contracted away,
                  regardless of what you signed. The RTA explicitly provides that any agreement
                  that purports to waive or vary the tenant&apos;s rights under the Act is void.
                </p>
              </div>

              {/* Section 10: Other provinces */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Landlord Obligations in Other Provinces</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Each province has its own residential tenancy legislation and enforcement body.
                  The obligations are broadly similar, though details differ:
                </p>
                <div className="flex flex-col gap-4">
                  {otherProvincesLandlord.map((prov) => (
                    <div key={prov.province} className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <h3 className="font-semibold text-slate-900 text-sm">{prov.province}</h3>
                        <span className="text-xs text-blue-700 font-semibold">{prov.body}</span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{prov.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>

            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Does your lease shift landlord duties onto you?</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI flags maintenance and entry clauses that improperly shift legal
                  landlord obligations to tenants.
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
                    { label: "Repairs & Maintenance Rights", href: "/tenant-rights/repairs-maintenance" },
                    { label: "Maintenance Clause", href: "/lease-clause/maintenance" },
                    { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
                    { label: "Breaking a Lease", href: "/tenant-rights/breaking-a-lease" },
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
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">Key LTB Forms</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  <strong>T6</strong> — Tenant Application about Maintenance<br /><br />
                  <strong>T2</strong> — Application About Tenant Rights (illegal entry, utility shutoffs, harassment)<br /><br />
                  <strong>T1</strong> — Application for a Rebate of Money the Landlord Owes (LMR interest, illegal charges)<br /><br />
                  All forms available at <strong>tribunalsontario.ca/ltb</strong>
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">Report to the City</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  <strong>Toronto:</strong> Call 311 to report heat failures, property standards
                  violations, and other bylaw issues.<br /><br />
                  <strong>Other Ontario municipalities:</strong> Contact your local municipality&apos;s
                  bylaw or property standards department.<br /><br />
                  A bylaw inspector&apos;s report strengthens your LTB case significantly.
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
