import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, ChevronRight, Upload, AlertTriangle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Utilities Clause in a Lease: Who Pays for What? | LeasePlain",
  description:
    "Understand what a utilities clause covers in an Ontario rental lease — hydro, gas, water, heat, and internet — and your rights when utilities are included in rent.",
  alternates: { canonical: "https://leaseplain.com/lease-clause/utilities" },
};

const vitalServices = [
  "Heat (at a minimum temperature set by local bylaws — typically 21°C from September to June)",
  "Electricity and hydro (if included in the rent)",
  "Hot and cold running water",
  "Fuel (natural gas, propane, or oil if the unit relies on it for heat or hot water)",
];

const redFlags = [
  {
    flag: "Vague “utilities included” language with no itemized list",
    detail:
      "If the lease says utilities are included but doesn't specify which ones, disputes arise. Get an explicit list: hydro, gas, water, heat, internet.",
  },
  {
    flag: "Tenant responsible for all utilities without any cap or formula",
    detail:
      "Some leases shift 100% of utility costs to the tenant while the landlord controls the building's insulation, windows, and systems. Watch for clauses that make you liable for costs you can't control.",
  },
  {
    flag: "Clause allowing landlord to add utility charges mid-tenancy",
    detail:
      "Once a lease is signed, the landlord generally cannot unilaterally remove benefits (like included utilities) without proper notice and a rent reduction. A clause purporting to do so may be unenforceable.",
  },
  {
    flag: "No mention of who pays for common-area utilities",
    detail:
      "In multi-unit buildings, hallway lighting, laundry rooms, and lobby heat may be billed separately. Confirm what you're responsible for before signing.",
  },
];

export default function UtilitiesClausePage() {
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
              <span>Utilities</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Zap className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Clause Explained
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Utilities Clause in a Lease: Who Pays for What?
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              A utilities clause in your lease determines whether you or your landlord pays for
              hydro, gas, water, heat, and internet. In Ontario, the answer has real legal
              implications — especially when utilities are included in your rent.
            </p>
          </div>
        </section>

        {/* Content + sidebar */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Does a Utilities Clause Cover?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  A utilities clause in a residential lease defines which services are paid by the
                  landlord (included in rent) and which the tenant must set up and pay directly.
                  Common utilities addressed in leases include:
                </p>
                <ul className="flex flex-col gap-2 mb-5">
                  {[
                    { label: "Electricity / Hydro", note: "Lighting, appliances, and in some units, baseboard heating." },
                    { label: "Natural Gas", note: "Heating and hot water in many Ontario homes and apartments." },
                    { label: "Water and Sewer", note: "Usually covered by the landlord in large buildings; sometimes charged to house tenants." },
                    { label: "Heat", note: "A vital service — the landlord must provide it if included in rent." },
                    { label: "Internet and Cable", note: "Increasingly included in newer builds; rarely a legal obligation for landlords." },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>{item.label}:</strong> {item.note}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  Who pays for what varies enormously between leases. In some all-inclusive
                  apartments, rent covers everything. In others — particularly detached homes and
                  semi-detached units — tenants pay all utilities directly. Neither arrangement is
                  inherently better, but both must be clearly stated in your lease.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Tenant Rights on Utilities in Ontario</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Under Ontario&apos;s <em>Residential Tenancies Act, 2006</em> (RTA), landlords have
                  specific obligations when utilities are included in your rent. These are known as
                  &ldquo;vital services&rdquo; and they cannot be interrupted — even if the tenant is in
                  arrears on rent.
                </p>
                <p className="text-slate-600 text-sm font-semibold mb-3">
                  Vital services a landlord must maintain if included in rent:
                </p>
                <ul className="flex flex-col gap-3 mb-5">
                  {vitalServices.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                  <p className="text-sm text-amber-800 leading-relaxed">
                    <strong>Critical protection:</strong> Under section 21 of the RTA, a landlord
                    cannot withhold or interfere with the supply of a vital service, care service, or
                    food, even if the tenant owes rent. Doing so is illegal and can result in an
                    emergency LTB order and significant penalties. If your landlord has shut off
                    utilities, call the LTB immediately for emergency relief.
                  </p>
                </div>
                <p className="text-slate-700 leading-relaxed mt-4">
                  If a tenant is responsible for utilities and fails to pay the provider directly,
                  any service interruption is the tenant&apos;s own responsibility — not the landlord&apos;s.
                  The lease should clearly state who holds the account with each utility provider.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags to Watch in Your Utilities Clause</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Utility clauses can be a major source of unexpected costs and disputes. Here are the
                  patterns LeasePlain&apos;s AI flags as concerning:
                </p>
                <div className="flex flex-col gap-4">
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
                <h3 className="font-bold text-lg mb-2">Check your utilities clause</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and our AI will identify exactly what utilities are covered,
                  flag any ambiguous language, and check for compliance with Ontario law.
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
                    { label: "Security Deposit", href: "/lease-clause/security-deposit" },
                    { label: "Late Fees", href: "/lease-clause/late-fees" },
                    { label: "Maintenance Responsibilities", href: "/lease-clause/maintenance" },
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
                  For vital service shutoffs, file an urgent application with the{" "}
                  <strong>Landlord and Tenant Board (LTB)</strong> using Form T2 — Application About
                  Tenant Rights. Visit <strong>tribunalsontario.ca/ltb</strong> for emergency procedures.
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
