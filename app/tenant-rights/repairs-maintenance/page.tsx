import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { Wrench, ChevronRight, Upload, AlertTriangle, CheckCircle, Clock, Bug, Droplets } from "lucide-react";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tenant Rights for Repairs and Maintenance in Ontario | LeasePlain",
  description:
    "Ontario tenants have strong repair rights under the RTA. Learn how to request repairs, what to do if your landlord ignores you, and how to get a rent abatement for maintenance issues.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/repairs-maintenance" },
  openGraph: {
    type: "website",
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
    step: "Step 1: Submit a written repair request",
    detail:
      "Email is ideal — it automatically timestamps your message and creates an undeniable record. State the problem precisely (e.g., 'the furnace has not produced heat since December 3rd'), note whether it is an emergency, and request repair within a specific timeframe. Keep a copy of everything you send.",
  },
  {
    step: "Step 2: Wait a reasonable time based on urgency",
    detail:
      "Emergencies (no heat in winter, sewage backup, gas leak) require a response within hours. Urgent issues (no hot water, broken exterior lock) should be addressed within 24–48 hours. Non-urgent repairs (dripping faucet, cracked tile) allow the landlord a few weeks. If the landlord does not respond within the appropriate window, you can escalate.",
  },
  {
    step: "Step 3: Follow up in writing if ignored",
    detail:
      "Send a second written message noting the date of your original request, that the problem remains unresolved, and that you are considering filing an LTB application if repairs are not made promptly. This letter can be introduced as evidence at a hearing.",
  },
  {
    step: "Step 4: Contact municipal property standards (optional but useful)",
    detail:
      "Your local municipality's bylaw enforcement office can inspect the unit and issue a formal compliance order. This is often faster than the LTB for physical defects. A property standards officer's inspection report is powerful evidence at an LTB hearing.",
  },
  {
    step: "Step 5: File a T6 application with the LTB",
    detail:
      "Form T6 (Tenant Application about Maintenance) is the primary remedy. You have up to one year from when you first learned of the issue to file. The LTB can order repairs, award a rent abatement, and compensate you for out-of-pocket costs. Filing fee is $53 online ($48 discounted).",
  },
];

const emergencyExamples = [
  { type: "Emergency (respond within hours)", color: "red", examples: ["No heat when outdoor temperature is below 0°C or when indoor temperature falls below 20°C during heating season (September 1 to June 15)", "Sewage backup or sewage odour inside the unit", "Gas leak or suspected gas leak", "Complete loss of electricity", "Structural failure (ceiling collapse, floor giving way)"] },
  { type: "Urgent (respond within 24–48 hours)", color: "amber", examples: ["No hot water", "Broken exterior door lock or window lock on a ground-floor unit", "Refrigerator failure (food spoilage risk)", "Flooding or significant water leak", "Loss of elevator service in a building with elderly or disabled tenants"] },
  { type: "Non-urgent (respond within a few weeks)", color: "slate", examples: ["Dripping faucets", "Minor cosmetic damage (peeling paint, cracked tile)", "Interior door lock malfunction", "Non-structural cracks in walls", "Appliance malfunction (where unit is otherwise habitable)"] },
];

const rentAbatementInfo = [
  "The LTB can award a rent abatement — a formal reduction in rent — to compensate for periods when the unit was not properly maintained",
  "Minor issues (e.g., dripping faucet, malfunctioning appliance): typically 5–15% of monthly rent",
  "Serious issues (no heat in winter, severe mold, significant pest infestation): typically 25–50% of monthly rent",
  "Uninhabitable conditions (sewage backup, major flooding, structural collapse): up to 100% of monthly rent for the affected period",
  "Abatements cover past periods, not just future periods — you can recover for months you already paid full rent while the unit was in disrepair",
  "The LTB can also order compensation for documented out-of-pocket costs: temporary accommodation, ruined belongings, space heaters purchased because of a broken furnace",
];

const warningsAboutWithholding = [
  "Withholding rent is NOT recommended without legal advice. If you stop paying rent, your landlord can serve an N4 (Notice to End Tenancy for Non-Payment of Rent) and apply to the LTB for eviction — even if there are legitimate maintenance issues.",
  "A better approach is to pay rent into trust and file the T6 application simultaneously — but even this approach has risks and should be discussed with a tenant duty counsel or legal clinic before you act.",
  "Never pay for repairs yourself and deduct the cost from rent without explicit LTB authorization. Doing so gives the landlord grounds to serve an N4.",
];

const otherProvincesRepairs = [
  {
    province: "British Columbia",
    law: "Residential Tenancy Act (BC), s. 32",
    body: "Residential Tenancy Branch (RTB)",
    detail: "Landlords must maintain premises in a state of repair suitable for occupation. Tenants can apply to the RTB for Dispute Resolution within 2 years of the event. RTB can order repairs and compensation.",
  },
  {
    province: "Alberta",
    law: "Residential Tenancies Act (AB), s. 16",
    body: "Residential Tenancy Dispute Resolution Service (RTDRS) or Court of King's Bench",
    detail: "Landlords must keep the premises in reasonably good repair and comply with health and safety standards. Tenants can apply to RTDRS; remedies include rent reduction and compensation.",
  },
  {
    province: "Quebec",
    law: "Civil Code of Quebec, art. 1854",
    body: "Tribunal administratif du logement (TAL)",
    detail: "The landlord must deliver the dwelling in a good state of repair in all respects and maintain it throughout the lease. Tenants apply to the TAL. Remedies include work orders, rent reduction, and resiliation of the lease.",
  },
];

const faqItems = [
  {
    q: "How long does my landlord have to make repairs in Ontario?",
    a: "It depends on urgency. Emergencies — like no heat when the temperature is below 0°C or a sewage backup — require a response within hours. Urgent repairs (no hot water, broken exterior lock) should be resolved within 24 to 48 hours. Non-urgent repairs (dripping faucet, minor cosmetic damage) allow the landlord a few weeks. There is no single fixed statutory deadline, but unreasonable delay can be used as evidence at a T6 hearing.",
  },
  {
    q: "Can I withhold rent if my landlord won't fix something?",
    a: "No — withholding rent in Ontario is risky and not recommended without legal advice. If you stop paying rent, your landlord can serve an N4 Notice to End Tenancy for Non-Payment of Rent and apply for eviction at the LTB, even if the underlying maintenance issue is real. The correct approach is to file a T6 application at the LTB, which can result in a rent abatement that effectively reduces what you owe retroactively.",
  },
  {
    q: "What is a T6 application and how do I file one?",
    a: "Form T6 (Tenant Application about Maintenance) is the LTB form you use when your landlord fails to maintain the unit. You can file online at tribunalsontario.ca/ltb for $48 (or $53 by mail/in person). The LTB can order the landlord to make repairs, award a rent abatement of up to 100% of rent for the period of the breach, and order compensation for out-of-pocket costs. You have one year from when you first became aware of the issue to file.",
  },
  {
    q: "Who is responsible for pest control in a rental?",
    a: "In Ontario, the landlord is generally responsible for pest control because it falls under the duty to maintain the property in a good state of repair and comply with health and safety standards (RTA s. 20). The landlord is responsible for structural causes of infestation (e.g., gaps in walls, inadequate sealing). Tenants can be held responsible if their conduct caused or materially contributed to the infestation (e.g., hoarding food attracting rodents). For bed bugs in particular, if the problem is building-wide, the landlord must treat the entire building — not just the individual unit.",
  },
  {
    q: "What counts as 'normal wear and tear' vs. damage I'm responsible for?",
    a: "Normal wear and tear is deterioration that occurs through ordinary use over time — faded paint, worn carpet, minor scuffs on walls. Tenants are not responsible for this. Tenant-caused damage is deliberate or negligent damage beyond normal use — a hole punched in a wall, a broken window, a stained carpet from a pet accident that was not cleaned. Landlords cannot deduct normal wear and tear from a last month's rent deposit or use it as grounds for N5 (Notice for Damage). If there's a dispute, the LTB (through an L2 application) decides what is wear and tear vs. damage.",
  },
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
        "@id": "https://leaseplain.com/tenant-rights/repairs-maintenance",
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
              <span>Repairs &amp; Maintenance</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Wrench className="w-3.5 h-3.5" aria-hidden="true" />
              Ontario Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Tenant Rights for Repairs and Maintenance in Ontario
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
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

              {/* Section 1: Non-waivable duty */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Landlord&apos;s Non-Waivable Duty to Repair (RTA s. 20)</h2>
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
                  clause cannot waive the landlord&apos;s maintenance obligation, and a landlord cannot
                  make a tenant contractually responsible for all repairs. These are non-negotiable
                  statutory rights — the RTA explicitly states that any agreement to waive or vary
                  these protections is void.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Critically, the duty applies even if the problem existed <em>before</em> the
                  tenancy began. If you moved into a unit with a broken furnace or a mould problem
                  and the landlord knew about it, you can still file a T6 application.
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

              {/* Section 2: Repair request process */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Tenant Repair Request Process</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Following the right steps protects you legally and creates the documentation
                  you need if you eventually file an LTB application. Each step builds your record:
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

              {/* Section 3: Emergency repairs */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Emergency, Urgent, and Non-Urgent Repairs</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  The appropriate response time depends on the nature of the problem. Ontario courts
                  and the LTB assess &ldquo;reasonable time&rdquo; based on the severity of the issue and its
                  impact on habitability:
                </p>
                <div className="flex flex-col gap-4">
                  {emergencyExamples.map((category) => (
                    <div key={category.type} className={`rounded-xl p-5 border ${
                      category.color === "red" ? "bg-red-50 border-red-100" :
                      category.color === "amber" ? "bg-amber-50 border-amber-100" :
                      "bg-slate-50 border-slate-100"
                    }`}>
                      <p className={`font-semibold text-sm mb-3 flex items-center gap-2 ${
                        category.color === "red" ? "text-red-900" :
                        category.color === "amber" ? "text-amber-900" :
                        "text-slate-800"
                      }`}>
                        <Clock className="w-4 h-4" aria-hidden="true" />
                        {category.type}
                      </p>
                      <ul className="flex flex-col gap-2">
                        {category.examples.map((ex) => (
                          <li key={ex} className={`text-sm leading-relaxed flex items-start gap-2 ${
                            category.color === "red" ? "text-red-800" :
                            category.color === "amber" ? "text-amber-800" :
                            "text-slate-700"
                          }`}>
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" aria-hidden="true" />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: T6 application specifics */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">T6 Application: What You Can Claim</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Form T6 — <em>Tenant Application about Maintenance</em> — is filed at the
                  Landlord and Tenant Board. It covers any failure by the landlord to maintain
                  the unit or residential complex in a good state of repair.
                </p>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 mb-5">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Filing Details</p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Filing Fee</p>
                      <p className="font-semibold text-slate-900 text-sm">$48 online / $53 in person</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Time Limit</p>
                      <p className="font-semibold text-slate-900 text-sm">1 year from discovery</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Where to File</p>
                      <p className="font-semibold text-slate-900 text-sm">tribunalsontario.ca/ltb</p>
                    </div>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The LTB can award the following remedies on a T6 application:
                </p>
                <ul className="flex flex-col gap-3 mb-5">
                  {[
                    { label: "Work order", detail: "The LTB orders the landlord to make specific repairs within a defined timeline." },
                    { label: "Rent abatement", detail: "A retroactive reduction in rent for the period the unit was in disrepair. Can be up to 100% for uninhabitable conditions." },
                    { label: "Compensation", detail: "Reimbursement for documented out-of-pocket costs caused by the maintenance failure (e.g., temporary accommodation, ruined belongings, space heaters)." },
                    { label: "Administrative fine", detail: "The LTB can impose a fine payable to the Crown (not the tenant) if the landlord's conduct was particularly egregious." },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>{item.label}:</strong> {item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 5: Rent abatement amounts */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Rent Abatement: Typical Amounts</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  One of the most powerful remedies available to Ontario tenants is a{" "}
                  <strong>rent abatement</strong> — a formal reduction in the rent you owe,
                  reflecting the reduced value of the unit during periods of disrepair.
                </p>
                <ul className="flex flex-col gap-3 mb-5">
                  {rentAbatementInfo.map((info) => (
                    <li key={info} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {info}
                    </li>
                  ))}
                </ul>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>Example:</strong> If your furnace was broken for 2 months in winter and
                    the landlord failed to repair it despite written requests, the LTB might award a
                    25–40% rent abatement for those 2 months, plus any documented additional heating
                    costs you incurred (e.g., space heaters). At $2,000/month rent, that could be
                    $1,000–$1,600 back in your pocket.
                  </p>
                </div>
              </div>

              {/* Section 6: No "repair and deduct" in Ontario */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">No &ldquo;Repair and Deduct&rdquo; in Ontario</h2>
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 mb-5">
                  <p className="text-sm font-semibold text-amber-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                    Do not withhold rent or self-repair without authorization
                  </p>
                  {warningsAboutWithholding.map((warning) => (
                    <p key={warning} className="text-sm text-amber-800 leading-relaxed mb-2">
                      {warning}
                    </p>
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Unlike some US states, Ontario does not have a &ldquo;repair and deduct&rdquo; remedy that
                  lets tenants make repairs and subtract the cost from rent. In Ontario, the proper
                  path is the LTB. Filing a T6 application puts the decision in a neutral adjudicator&apos;s
                  hands and protects you from eviction for non-payment while the issue is resolved.
                </p>
              </div>

              {/* Section 7: Mold and health hazards */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  <span className="flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-blue-600" aria-hidden="true" />
                    Mould and Health Hazards
                  </span>
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Mould in a rental unit is a health hazard and a maintenance failure. Landlords are
                  required to remediate mould — not just paint over it. If your landlord fails to
                  address mould, you have two complementary paths:
                </p>
                <ul className="flex flex-col gap-3 mb-5">
                  {[
                    { label: "File with municipal property standards", detail: "Your city's bylaw enforcement office can order the landlord to remediate mould and correct the moisture source. This is often the fastest path for serious health hazards." },
                    { label: "File a T6 at the LTB", detail: "The LTB can order remediation and award rent abatement for the period you lived in a mould-affected unit." },
                    { label: "Contact your local public health unit", detail: "If mould is causing health symptoms, your local health unit can inspect and may refer the matter to bylaw enforcement, strengthening your case." },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>{item.label}:</strong> {item.detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <strong>Document the mould:</strong> Take clear photographs, note when you first
                    observed it and any related health symptoms, and keep all correspondence with the
                    landlord. LTB adjudicators take mould seriously — significant abatements have been
                    awarded for persistent mould that the landlord failed to address.
                  </p>
                </div>
              </div>

              {/* Section 8: Pest infestations */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  <span className="flex items-center gap-2">
                    <Bug className="w-5 h-5 text-blue-600" aria-hidden="true" />
                    Pest Infestations
                  </span>
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Responsibility for pest control depends on the cause:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                    <p className="font-semibold text-blue-900 text-sm mb-2">Landlord&apos;s responsibility</p>
                    <ul className="flex flex-col gap-2">
                      {[
                        "Infestations caused by structural deficiencies (gaps in walls, inadequate sealing)",
                        "Cockroach, mouse, or rat infestations in a multi-unit building",
                        "Bed bug infestations — landlord must treat entire building if the infestation is systemic, not just the affected unit",
                      ].map((item) => (
                        <li key={item} className="text-xs text-blue-800 leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                    <p className="font-semibold text-amber-900 text-sm mb-2">Tenant&apos;s responsibility</p>
                    <ul className="flex flex-col gap-2">
                      {[
                        "Infestations caused by the tenant's conduct (hoarding, leaving food uncovered, poor sanitation)",
                        "Bringing bed-bug-infested furniture into the unit",
                        "Failure to cooperate with landlord-arranged pest treatment (tenant must allow access)",
                      ].map((item) => (
                        <li key={item} className="text-xs text-amber-800 leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed text-sm">
                  When responsibility is disputed, the LTB will look at the evidence of the cause.
                  A building-wide infestation strongly suggests structural causes that are the
                  landlord&apos;s responsibility, even if the initial source was a tenant.
                </p>
              </div>

              {/* Section 9: Other provinces */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Repair Rights in Other Provinces</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  While this page focuses on Ontario, tenants in other provinces have similar —
                  though not identical — repair protections:
                </p>
                <div className="flex flex-col gap-4">
                  {otherProvincesRepairs.map((prov) => (
                    <div key={prov.province} className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <h3 className="font-semibold text-slate-900 text-sm">{prov.province}</h3>
                        <span className="text-xs text-slate-400 font-mono">{prov.law}</span>
                      </div>
                      <p className="text-xs text-blue-700 font-semibold mb-1.5">Filed with: {prov.body}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{prov.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 10: FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
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
                    { label: "Landlord Responsibilities", href: "/tenant-rights/landlord-responsibilities" },
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
                  Available at <strong>tribunalsontario.ca/ltb</strong>. File online ($48) or in person ($53).
                  <br /><br />
                  <strong>Form T2</strong> — Application About Tenant Rights (for illegal entry,
                  harassment, utility shutoffs, and interference with reasonable enjoyment).
                  <br /><br />
                  <strong>Form T1</strong> — Application for a Rebate of Money the Landlord Owes
                  (for illegal rent charges and LMR interest).
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">Get Legal Help</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  <strong>Tenant Duty Counsel</strong> — free legal help at LTB hearings<br />
                  1-800-668-8258 (Legal Aid Ontario)<br /><br />
                  <strong>Community Legal Education Ontario (CLEO)</strong><br />
                  cleo.on.ca — plain-language guides<br /><br />
                  <strong>Steps to Justice</strong><br />
                  stepstojustice.ca — step-by-step legal guides
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
