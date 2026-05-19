import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wrench, AlertTriangle, CheckCircle, ChevronRight, Upload } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/lease-clause/maintenance",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
};

export const metadata: Metadata = {
  title: "Maintenance Responsibilities Clause Explained | LeasePlain",
  description:
    "Understand who is responsible for repairs and maintenance in your lease. Learn what your landlord must fix, what you're responsible for, and your rights when repairs are ignored.",
  alternates: { canonical: "https://leaseplain.com/lease-clause/maintenance" },
  keywords: ["maintenance clause lease", "landlord maintenance obligations Ontario", "tenant repair responsibilities Canada", "who fixes repairs rental unit", "RTA maintenance duties"],
  openGraph: {
    title: "Maintenance Responsibilities Clause Explained | LeasePlain",
    description: "Understand who is responsible for repairs and maintenance in your lease. Learn what your landlord must fix, what you're responsible for, and your rights when repairs are ignored.",
    url: "https://leaseplain.com/lease-clause/maintenance",
    type: "website",
  },
};

const landlordDuties = [
  "Maintain the unit in a good state of repair, fit for habitation, at all times.",
  "Comply with all health, safety, housing, and maintenance standards.",
  "Repair damage not caused by the tenant, even if it was present before the tenancy began.",
  "Ensure heating systems work and provide heat to at least 20°C (68°F) from September 1 to June 15.",
  "Keep common areas (hallways, laundry, parking) clean and safe.",
  "Ensure the unit is free of pests and mould.",
];

const tenantDuties = [
  "Keep the unit clean, to the standard it was in when first occupied.",
  "Repair any damage you, your guests, or your pets cause.",
  "Not interfere with the reasonable enjoyment of other tenants.",
  "Notify the landlord promptly when repairs are needed.",
  "Not perform work on the unit without the landlord's consent.",
];

const redFlags = [
  "Clause shifts landlord maintenance duties onto the tenant (e.g., “tenant responsible for all repairs”)",
  "Lease requires tenant to pay for repairs above a set dollar threshold — these may be unenforceable",
  "No clear process for submitting maintenance requests",
  "Clause makes tenant responsible for appliances the landlord owns",
  "Clause waives landlord liability for injury from deferred maintenance",
  "Lease says repairs will be addressed “at landlord’s discretion”",
];

const questions = [
  "How do I submit maintenance requests — in writing, via email, or through a portal?",
  "What is your typical response time for urgent repairs (e.g., no heat, water damage)?",
  "Are the appliances included in the unit covered under your maintenance obligations?",
  "If you cannot complete a repair within a reasonable time, what remedies are available to me?",
];

export default function MaintenancePage() {
  return (
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Lease Clauses", href: "https://leaseplain.com/lease-clauses" },
        { name: "Maintenance", href: "https://leaseplain.com/lease-clause/maintenance" },
      ]} />
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/lease-clauses" className="hover:underline">Lease Clauses</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Maintenance Responsibilities</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Wrench className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Clause Explained
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Maintenance Responsibilities Clause: Who Fixes What?
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              A maintenance clause defines who is responsible for keeping the unit in good repair.
              In Ontario, landlords carry a significant legal obligation — and many leases try to
              shift those responsibilities to tenants in ways that are not enforceable.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Landlord's Maintenance Obligations</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Under the <em>Residential Tenancies Act, 2006</em>, every landlord in Ontario has a
                  non-negotiable duty to maintain their rental property. This obligation cannot be
                  contracted away — even if your lease says otherwise.
                </p>
                <ul className="flex flex-col gap-3">
                  {landlordDuties.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Tenant's Maintenance Obligations</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Tenants also have maintenance responsibilities, but they are more limited:
                </p>
                <ul className="flex flex-col gap-3">
                  {tenantDuties.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">What If Your Landlord Won't Make Repairs?</h3>
                <p className="text-sm text-blue-800 leading-relaxed mb-3">
                  If your landlord is not maintaining the unit, you have options:
                </p>
                <ol className="list-decimal list-inside text-sm text-blue-800 space-y-1.5">
                  <li>Document the issue in writing (email, text) and give the landlord a reasonable deadline.</li>
                  <li>File a T6 — Tenant Application about Maintenance with the Landlord and Tenant Board.</li>
                  <li>Contact your local municipality's property standards department for inspections.</li>
                  <li>In severe cases (no heat, pest infestation, water damage), contact Legal Aid Ontario.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags in Maintenance Clauses</h2>
                <ul className="flex flex-col gap-3">
                  {redFlags.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Questions to Ask Your Landlord</h2>
                <ul className="flex flex-col gap-3">
                  {questions.map((q) => (
                    <li key={q} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "What counts as a landlord's maintenance obligation in Canada?", a: "Landlords must maintain rental units in good repair and comply with all housing, health, and safety standards. This includes structural integrity, heating systems, plumbing, pest control, and common areas." },
                  { q: "How long does a landlord have to respond to a maintenance request?", a: "There is no universal statutory deadline, but 'reasonable time' is the standard. Emergency situations (no heat, flooding) require immediate action. Routine repairs (broken fixture, minor leak) should typically be addressed within days to a few weeks." },
                  { q: "What documentation should I keep for maintenance issues?", a: "Keep copies of all written repair requests, take dated photos or videos of the problem, and document any verbal conversations in follow-up emails. This evidence is essential if you need to file a complaint with a tenancy tribunal." },
                  { q: "Can I be evicted for complaining about maintenance?", a: "Retaliatory eviction for filing a maintenance complaint is illegal in most Canadian provinces. If you suspect retaliation, document the timeline carefully and file a counter-complaint with the tenancy tribunal." },
                  { q: "What is an N13 notice in Ontario and when does it relate to maintenance?", a: "An N13 is an Ontario landlord's notice to terminate tenancy for major renovations or demolition. Landlords must have necessary permits and cannot use renovation as a pretext for eviction. Tenants have the right of first refusal to return at the same rent after renovations." }
                ]} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your maintenance clause</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and we'll identify any maintenance clauses that improperly
                  shift landlord obligations onto you.
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
                    { label: "Landlord Responsibilities", href: "/tenant-rights/landlord-responsibilities" },
                    { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
                    { label: "Subletting Clause", href: "/lease-clause/subletting" },
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
