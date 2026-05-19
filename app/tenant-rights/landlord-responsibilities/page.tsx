import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, CheckCircle, AlertTriangle, ChevronRight, Upload, Clock } from "lucide-react";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Landlord Responsibilities in Ontario – What They Must Do by Law | LeasePlain",
  description:
    "A complete guide to landlord responsibilities in Ontario. Maintenance, entry notice, heat, pests, harassment, and what to do if your landlord fails their duties.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/landlord-responsibilities" },
  openGraph: {
    title: "Landlord Responsibilities in Ontario – What They Must Do by Law | LeasePlain",
    description: "A complete guide to landlord responsibilities in Ontario. Maintenance, entry notice, heat, pests, harassment, and what to do if your landlord fails their duties.",
    url: "https://leaseplain.com/tenant-rights/landlord-responsibilities",
  },
  keywords: ["landlord responsibilities Ontario", "landlord obligations Canada", "landlord maintenance duty", "landlord entry notice Ontario", "landlord RTA requirements"],
};

const responsibilities = [
  {
    category: "Maintenance & Repairs",
    items: [
      "Maintain the unit and building in a good state of repair at all times.",
      "Comply with all health, safety, and property standards bylaws.",
      "Make repairs even if the problem existed before the tenancy began.",
      "Replace or repair appliances that were provided as part of the rental.",
    ],
  },
  {
    category: "Heat & Utilities",
    items: [
      "Provide and maintain a heating system that keeps the unit at least 20°C (68°F) from September 1 to June 15.",
      "If utilities are included in rent, maintain uninterrupted supply of electricity, water, and gas.",
      "Cannot shut off heat or utilities to force a tenant out — this is illegal.",
    ],
  },
  {
    category: "Pests & Hazardous Conditions",
    items: [
      "Maintain the premises free from pests including cockroaches, bedbugs, mice, and rats.",
      "Address mould and dampness that poses a health risk.",
      "Remediate any environmental hazard disclosed to the landlord.",
    ],
  },
  {
    category: "Entry & Privacy",
    items: [
      "Give 24 hours written notice before entering the unit (except in emergencies).",
      "Can only enter between 8am and 8pm on a day agreed with the tenant.",
      "Cannot conduct repeated entries that amount to harassment.",
      "Emergency entry is permitted without notice — but must be a genuine emergency.",
    ],
  },
  {
    category: "Conduct & Non-Harassment",
    items: [
      "Must not harass, obstruct, coerce, threaten, or interfere with a tenant.",
      "Cannot change locks without the tenant's consent.",
      "Cannot seize or hold a tenant's property for unpaid rent.",
      "Must not interfere with a tenant's reasonable enjoyment of the unit.",
    ],
  },
];

const whatToDoIfLandlordFails = [
  { step: "Document everything", detail: "Take photos, save text messages and emails, and keep a written record of issues with dates." },
  { step: "Notify in writing", detail: "Send a written notice (email is fine) describing the problem and requesting a fix within a reasonable timeframe." },
  { step: "Contact property standards", detail: "Your local municipality has a property standards department. File a complaint if the unit is unsafe." },
  { step: "File a T6 with the LTB", detail: "A T6 — Tenant Application about Maintenance allows you to seek remedies including a rent reduction, order for repairs, and compensation." },
  { step: "Get legal advice", detail: "Contact Legal Aid Ontario or your local community legal clinic, especially before a hearing." },
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
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
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
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Ontario landlords have significant legal obligations under the{" "}
              <em>Residential Tenancies Act</em>. Many of these obligations cannot be waived by
              a lease clause. Here's what your landlord is legally required to do — and what to
              do if they don't.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div className="space-y-8">
                {responsibilities.map((section) => (
                  <div key={section.category}>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block" aria-hidden="true" />
                      {section.category}
                    </h2>
                    <ul className="flex flex-col gap-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  Entry Notice Requirements
                </h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Your landlord must provide at least <strong>24 hours written notice</strong> before
                  entering. The notice must state the reason for entry and the time (between 8am and
                  8pm). Repeated unannounced visits or excessive entries can constitute harassment
                  and are grounds for a LTB application.
                </p>
              </div>

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

              <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                  Lease Clauses Cannot Remove These Rights
                </h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Even if your lease contains a clause that appears to waive your landlord's
                  maintenance obligations or permits them to enter without notice, those clauses
                  are void under the RTA. The Act's protections cannot be contracted away, regardless
                  of what you signed.
                </p>
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
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
