import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wrench, ChevronRight, Upload, AlertTriangle, CheckCircle } from "lucide-react";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tenant Rights for Repairs and Maintenance in Ontario | LeasePlain",
  description:
    "Ontario tenants have strong repair rights under the RTA. Learn how to request repairs, what to do if your landlord ignores you, and how to get a rent abatement for maintenance issues.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/repairs-maintenance" },
  openGraph: {
    title: "Tenant Rights for Repairs and Maintenance in Ontario | LeasePlain",
    description: "Ontario tenants have strong repair rights under the RTA. Learn how to request repairs, what to do if your landlord ignores you, and how to get a rent abatement for maintenance issues.",
    url: "https://leaseplain.com/tenant-rights/repairs-maintenance",
  },
  keywords: ["tenant repair rights Ontario", "landlord repair obligations", "rent abatement Ontario", "T6 application LTB", "maintenance rights renter Canada"],
};

const landlordDuties = [
  "Maintain the unit in a good state of repair — this includes the structure, roof, walls, floors, windows, and doors",
  "Ensure the unit is fit for habitation at all times during the tenancy",
  "Comply with all applicable health, safety, housing, and maintenance standards (municipal property standards bylaws, building codes)",
  "Maintain common areas such as hallways, elevators, laundry rooms, and parking in a good state of repair",
  "Maintain all appliances and systems that were provided as part of the tenancy (furnaces, water heaters, fridge, stove, etc.)",
  "Perform repairs promptly and without requiring the tenant to waive any rights",
];

const requestSteps = [
  {
    step: "Document the problem immediately",
    detail:
      "Take timestamped photos or video. Note the date you first noticed the issue, and any impact it has on your use and enjoyment of the unit (e.g., 'no heat since December 3rd at -10°C').",
  },
  {
    step: "Send a written repair request to your landlord",
    detail:
      "Email is ideal — it creates a documented record. State the problem clearly, note the urgency, and request repair within a specific timeframe: 24 hours for emergencies (no heat, flooding, electrical hazard), 7 to 14 days for non-urgent repairs.",
  },
  {
    step: "Follow up in writing if there is no response",
    detail:
      "If you receive no response or repair within the requested timeframe, send a follow-up noting that you may be forced to seek other remedies including an LTB application.",
  },
  {
    step: "Contact municipal property standards",
    detail:
      "Your local municipality has a property standards bylaw officer who can inspect the unit and issue an order for repairs. This is often faster than the LTB for physical defects and health/safety issues.",
  },
  {
    step: "File a T6 application with the LTB",
    detail:
      "Form T6 (Tenant Application about Maintenance) allows you to ask the LTB for a work order, a rent abatement, and other remedies. You have up to 1 year from when you learned of the issue to file.",
  },
];

const rentAbatementInfo = [
  "The LTB can award a rent abatement (reduction) to compensate tenants for periods when the unit was not properly maintained",
  "Common abatements range from 10% to 25% of monthly rent, depending on severity and duration",
  "Serious issues like no heat in winter, significant water damage, or infestation may attract larger abatements",
  "Abatements can be awarded for past periods, not just going forward",
  "The LTB can also order compensation for out-of-pocket costs (e.g., temporary accommodation, damaged belongings, purchasing a space heater while the furnace is broken)",
];

const warningsAboutWithholding = [
  "Withholding rent is NOT recommended without legal advice. If you stop paying rent, your landlord can serve an N4 and apply to the LTB for eviction, even if there are legitimate maintenance issues",
  "A better approach is to pay rent into trust and file the T6 application simultaneously — but even this approach has risks and should be discussed with a tenant duty counsel or legal clinic",
  "Never pay for repairs yourself and deduct from rent without explicit LTB authorization",
];

export default function RepairsMaintenancePage() {
  return (
    <>
      <ArticleSchema
        headline="Tenant Rights for Repairs and Maintenance in Ontario"
        description="Ontario tenants have strong repair rights under the RTA. Learn how to request repairs, what to do if your landlord ignores you, and how to get a rent abatement for maintenance issues."
        url="https://leaseplain.com/tenant-rights/repairs-maintenance"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["tenant repair rights Ontario", "landlord repair obligations", "rent abatement Ontario", "T6 application LTB", "maintenance rights renter Canada"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tenant Rights", href: "https://leaseplain.com/tenant-rights" },
        { name: "Repairs & Maintenance", href: "https://leaseplain.com/tenant-rights/repairs-maintenance" },
      ]} />
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
              <span>Repairs &amp; Maintenance</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Wrench className="w-3.5 h-3.5" aria-hidden="true" />
              Ontario Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Tenant Rights for Repairs and Maintenance in Ontario
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Ontario law gives tenants strong rights when landlords fail to maintain rental
              properties. Whether it&apos;s a broken furnace, a leaking roof, or persistent mould,
              you have remedies — including a rent reduction. Here&apos;s how to use them.
            </p>
          </div>
        </section>

        {/* Content + sidebar */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Landlord&apos;s Duty to Repair Under the RTA</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Section 20 of the <em>Residential Tenancies Act, 2006</em> imposes a broad and
                  non-waivable obligation on landlords to maintain rental units:
                </p>
                <blockquote className="border-l-4 border-blue-400 pl-4 py-1 mb-5 bg-blue-50 rounded-r-lg">
                  <p className="text-sm text-blue-900 italic leading-relaxed">
                    &ldquo;A landlord is responsible for providing and maintaining a residential complex,
                    including the rental units in it, in a good state of repair and fit for habitation
                    and for complying with health, safety, housing and maintenance standards.&rdquo;
                  </p>
                  <p className="text-xs text-blue-600 mt-1">— Residential Tenancies Act, 2006, s. 20(1)</p>
                </blockquote>
                <p className="text-slate-700 leading-relaxed mb-4">
                  This duty applies <strong>regardless of what the lease says</strong>. A lease
                  cannot waive the landlord&apos;s duty to maintain the property. A landlord cannot make
                  a tenant responsible for all repairs. These are non-negotiable statutory rights.
                </p>
                <p className="text-slate-600 text-sm font-semibold mb-3">
                  The landlord&apos;s repair obligations include:
                </p>
                <ul className="flex flex-col gap-3">
                  {landlordDuties.map((duty) => (
                    <li key={duty} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {duty}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Request Repairs</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Following the right steps protects you legally and creates the documentation
                  you need if you eventually file an LTB application:
                </p>
                <div className="flex flex-col gap-5">
                  {requestSteps.map((item, i) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
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

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">If Your Landlord Won&apos;t Repair</h2>
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 mb-5">
                  <p className="text-sm font-semibold text-amber-900 mb-1 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                    Do not withhold rent without legal advice
                  </p>
                  {warningsAboutWithholding.map((warning) => (
                    <p key={warning} className="text-sm text-amber-800 leading-relaxed mb-2">
                      {warning}
                    </p>
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The recommended options when your landlord fails to repair:
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    { option: "LTB Form T6", detail: "File a Tenant Application about Maintenance. The LTB can order the landlord to make repairs and award rent abatement." },
                    { option: "Municipal Property Standards", detail: "Contact your city or municipality's property standards department. A bylaw officer can inspect the unit and issue orders to the landlord, often quickly." },
                    { option: "Ontario Ministry of Housing", detail: "For widespread issues, the provincial government also has oversight mechanisms." },
                    { option: "Community Legal Clinic", detail: "Many legal clinics can advise you on the best remedy strategy and help with LTB filings — often at no cost." },
                  ].map((item) => (
                    <li key={item.option} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>{item.option}:</strong> {item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Rent Abatement for Maintenance Issues</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  One of the most powerful remedies available to Ontario tenants is a{" "}
                  <strong>rent abatement</strong> — a formal reduction in the rent you owe,
                  reflecting the reduced value of the unit during periods of disrepair.
                </p>
                <ul className="flex flex-col gap-3">
                  {rentAbatementInfo.map((info) => (
                    <li key={info} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {info}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 bg-slate-50 border border-slate-100 rounded-xl p-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>Example:</strong> If your furnace was broken for 2 months in winter and
                    the landlord failed to repair it despite written requests, the LTB might award a
                    25% rent abatement for those 2 months, plus any documented additional heating
                    costs you incurred (e.g., space heaters).
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your lease for repair clauses</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and our AI will flag any repair clauses that try to shift
                  the landlord&apos;s legal obligations onto you.
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
                    { label: "Repairs Clause", href: "/lease-clause/repairs" },
                    { label: "Maintenance Responsibilities", href: "/lease-clause/maintenance" },
                    { label: "Ontario Tenant Rights", href: "/tenant-rights/ontario" },
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
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">Useful Forms</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  <strong>Form T6</strong> — Tenant Application about Maintenance
                  <br /><br />
                  Available at <strong>tribunalsontario.ca/ltb</strong>. File online or in person.
                  <br /><br />
                  <strong>Form T2</strong> — Application About Tenant Rights (for illegal entry,
                  harassment, utility shutoffs, and interference with reasonable enjoyment).
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
