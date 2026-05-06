import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wrench, ChevronRight, Upload, AlertTriangle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Repairs Clause in a Lease: Landlord vs. Tenant Responsibilities | LeasePlain",
  description:
    "Who is responsible for repairs in a rental unit in Ontario? Learn what the RTA says about your landlord's duty to repair and what red flags to watch for in repair clauses.",
  alternates: { canonical: "https://leaseplain.com/lease-clause/repairs" },
};

const tenantRepairDuties = [
  "Keep the unit in an ordinary state of cleanliness",
  "Repair or pay for repair of damage caused by the tenant, their guests, or their occupants (beyond normal wear and tear)",
  "Not make alterations without the landlord's consent",
  "Dispose of garbage in a reasonable way according to municipal requirements",
];

const redFlags = [
  {
    flag: "Clause requiring tenant to pay for all repairs regardless of cause",
    detail:
      "Some leases attempt to make the tenant responsible for any and all repairs to the unit. This is unenforceable in Ontario — the landlord's obligation under s. 20 RTA cannot be contracted away.",
  },
  {
    flag: "Clause waiving the landlord's duty to repair",
    detail:
      "Any clause that says the tenant 'accepts the premises as-is' and waives the landlord's maintenance obligations is void under the RTA. The landlord's duty to maintain the unit in a good state of repair exists regardless of what the lease says.",
  },
  {
    flag: "Unreasonable notification requirements",
    detail:
      "Some leases require tenants to give written notice within an unrealistically short window (e.g., 24 hours) of any issue arising, failing which the tenant loses their right to request a repair. These clauses may be unenforceable as they effectively strip tenants of their RTA rights.",
  },
  {
    flag: "Clause making the tenant responsible for appliance maintenance",
    detail:
      "If appliances were provided by the landlord as part of the tenancy (fridge, stove, dishwasher), the landlord is responsible for keeping them in good working order. A clause requiring the tenant to service or replace the landlord's appliances is concerning.",
  },
];

const repairSteps = [
  { step: "Document the issue", detail: "Photograph or video the problem with a timestamp. Note when you first noticed it." },
  { step: "Send a written repair request", detail: "Email or written letter to your landlord detailing the issue and requesting repair within a reasonable timeframe (7-14 days for non-urgent issues; 24 hours for urgent ones like heating or plumbing)." },
  { step: "Follow up in writing", detail: "If no response or action within the requested timeframe, send a follow-up. Keep all correspondence." },
  { step: "File a T6 application with the LTB", detail: "Use Form T6 (Tenant Application about Maintenance) if your landlord continues to ignore the issue. The LTB can order repairs and award rent abatement." },
  { step: "Contact municipal bylaw enforcement", detail: "Your local municipality has property standards bylaws. A bylaw officer can inspect and order repairs — sometimes faster than the LTB process." },
];

export default function RepairsClausePage() {
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
              <Link href="/lease-clauses" className="hover:underline">Lease Clauses</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Repairs</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Wrench className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Clause Explained
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Repairs Clause in a Lease: Landlord vs. Tenant Responsibilities
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              A repairs clause in your lease sets out who is responsible for maintaining the unit.
              In Ontario, the law draws a clear line — and some common lease clauses attempt to
              shift more responsibilities onto tenants than the law allows.
            </p>
          </div>
        </section>

        {/* Content + sidebar */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Does the Repairs Clause Say?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  A standard Ontario residential lease distinguishes between the landlord&apos;s
                  maintenance obligations and the tenant&apos;s cleanliness obligations. Typical lease
                  language requires tenants to:
                </p>
                <ul className="flex flex-col gap-3 mb-5">
                  {tenantRepairDuties.map((duty) => (
                    <li key={duty} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {duty}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  Beyond these tenant obligations, everything else — structural repairs, mechanical
                  systems (heating, plumbing), appliances provided by the landlord, windows, roofs,
                  and common areas — is the landlord&apos;s responsibility. Many leases include additional
                  clauses that attempt to expand tenant responsibilities beyond these limits. Whether
                  those clauses are enforceable depends on the RTA.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights Under Ontario RTA for Repairs</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Section 20 of the <em>Residential Tenancies Act, 2006</em> is the cornerstone of
                  tenant repair rights in Ontario. It states:
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
                  Critically, this obligation applies <strong>regardless of what the lease says</strong>.
                  Even if the lease purports to make the tenant responsible for all repairs, the
                  landlord still has a legal duty under s. 20.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If your landlord fails to carry out necessary repairs, you can apply to the LTB
                  using <strong>Form T6</strong> (Tenant Application about Maintenance). The LTB can:
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Order the landlord to carry out specific repairs within a set timeframe",
                    "Order a reduction in rent (abatement) reflecting the diminished value of the unit due to disrepair",
                    "Award the tenant compensation for costs incurred as a result of the landlord's failure to repair",
                    "Authorize the tenant to arrange for repairs and deduct costs from rent (in limited circumstances)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Request Repairs: Step by Step</h2>
                <ol className="flex flex-col gap-4">
                  {repairSteps.map((item, i) => (
                    <li key={item.step} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 mb-0.5">{item.step}</p>
                        <p className="text-slate-600">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags in Repair Clauses</h2>
                <div className="flex flex-col gap-5">
                  {redFlags.map((item) => (
                    <div key={item.flag} className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-semibold text-slate-800 mb-1">{item.flag}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your repairs clause</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and our AI will identify clauses that attempt to shift repair
                  responsibilities onto you in ways that may violate Ontario law.
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
                    { label: "Maintenance Responsibilities", href: "/lease-clause/maintenance" },
                    { label: "Landlord Responsibilities", href: "/tenant-rights/landlord-responsibilities" },
                    { label: "Repairs & Maintenance Rights", href: "/tenant-rights/repairs-maintenance" },
                    { label: "All Lease Clauses", href: "/lease-clauses" },
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
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">Ontario Resources</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  For maintenance issues, file <strong>Form T6</strong> with the LTB. For urgent
                  health and safety issues, also contact your local municipality&apos;s property standards
                  office. Visit <strong>tribunalsontario.ca/ltb</strong> for LTB forms.
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
