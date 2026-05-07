import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, ChevronRight, Upload, AlertTriangle, CheckCircle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Quebec Tenant Rights: Guide to Housing Law and the TAL | LeasePlain",
  description:
    "A complete guide to tenant rights in Quebec — the standard bail, the Tribunal administratif du logement (TAL), rent increases, and the prohibition on security deposits.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/quebec" },
};

const leaseFormSections = [
  "Section A — Identification of the dwelling and parties",
  "Section B — Rent amount and payment terms",
  "Section C — Services and conditions included (heating, hot water, parking, etc.)",
  "Section D — Duration of the lease (fixed-term or indeterminate)",
  "Section E — Special clauses (agreed by both parties)",
  "Section F — Legal notices and tenant's right to receive information about previous rent",
];

const rentIncreaseRules = [
  "For a fixed-term lease (e.g., 1 year), the landlord must notify the tenant of a rent increase 3 to 6 months before the end of the lease",
  "For a month-to-month lease, notice must be given 1 to 2 months before the end of the rental period",
  "The tenant has 1 month after receiving the notice to refuse the increase in writing",
  "If the tenant refuses, the landlord can apply to the TAL to fix the rent; if no application is made, the lease renews at the existing rent",
  "The TAL publishes annual rent increase calculation guidelines to help landlords and tenants assess reasonable increases",
];

const depositRules = [
  "Security deposits are PROHIBITED in Quebec — a landlord cannot require any amount as a deposit or guarantee against damage or non-payment of rent",
  "A landlord cannot require the first and last month's rent upfront — only one month's rent in advance is permitted at the time of signing",
  "Post-dated cheques can be accepted but only for one rental period at a time",
  "Key deposits are not permitted",
  "Any amount collected as a security deposit must be returned to the tenant; the landlord cannot use it as a damage fund",
];

const quebecRedFlags = [
  "Any clause requiring a security deposit, damage deposit, or key deposit — all illegal in Quebec",
  "Rent increase notice outside the legally required notice window (3–6 months for fixed-term, 1–2 months for month-to-month)",
  "Lease not using the prescribed government lease form (bail type) — all Quebec residential leases must use it",
  "Clause attempting to waive the tenant's right to refuse a rent increase",
  "Requiring more than one month's rent in advance at signing",
  "Clause purporting to waive the tenant's right to renew the lease at the end of the term",
];

export default function QuebecTenantRightsPage() {
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
              <Link href="/tenant-rights" className="hover:underline">Tenant Rights</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Quebec</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Shield className="w-3.5 h-3.5" aria-hidden="true" />
              Quebec Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Quebec Tenant Rights: Guide to Housing Law and the TAL
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Quebec has the most distinctive tenancy framework in Canada — governed by the{" "}
              <em>Civil Code of Quebec</em> and the{" "}
              <em>Act Respecting Lessor and Lessee</em>, with disputes handled by the{" "}
              <em>Tribunal administratif du logement</em> (TAL). Security deposits are banned.
              Standard lease forms are mandatory.
            </p>
          </div>
        </section>

        {/* Content + sidebar */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Quebec&apos;s Unique Rental Framework</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Quebec&apos;s tenancy law stands apart from other provinces in several fundamental ways.
                  Rather than a standalone Residential Tenancies Act, the rules are found in the{" "}
                  <em>Civil Code of Quebec</em> (articles 1851–2000) and more specific provisions in the{" "}
                  <em>Act Respecting Lessor and Lessee</em>. The system is in French at its core,
                  though tenants have the right to receive lease documents and communications in English.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The <strong>Tribunal administratif du logement (TAL)</strong> — formerly known as
                  the Régie du logement — is the specialized body that adjudicates rental disputes in
                  Quebec. The TAL handles applications about unpaid rent, lease renewals, rent
                  increase disputes, evictions, repairs, and more. It also publishes annual guidelines
                  that landlords can use to calculate permissible rent increases.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Quebec tenants benefit from some of the strongest housing stability rights in North
                  America — particularly the right to renew a lease at the end of the term, the
                  prohibition on security deposits, and the formal rent increase refusal mechanism.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Standard Quebec Lease (Bail)</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  One of Quebec&apos;s most distinctive rules: <strong>all residential leases must use
                  the government-prescribed mandatory lease form</strong> (known as the{" "}
                  <em>bail</em>). The form is available from the TAL and must be used for all
                  residential tenancies regardless of whether the landlord or tenant prefers a
                  different format.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The prescribed form includes specific required sections:
                </p>
                <ul className="flex flex-col gap-2 mb-4">
                  {leaseFormSections.map((section) => (
                    <li key={section} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {section}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  When a new tenant signs a lease, the landlord must disclose the{" "}
                  <strong>rent paid by the previous tenant</strong> during the 12 months before the
                  current tenancy begins. This &ldquo;right to know the previous rent&rdquo; helps prevent
                  excessive rent increases at tenant turnover.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Rent Increases in Quebec</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Quebec has one of the most structured rent increase systems in Canada. The TAL
                  publishes annual guidelines, and tenants have a formal right to refuse increases:
                </p>
                <ul className="flex flex-col gap-3">
                  {rentIncreaseRules.map((rule) => (
                    <li key={rule} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {rule}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <strong>Lease renewal right:</strong> In Quebec, at the end of a fixed-term
                    lease, the tenant has the right to renew the lease on the same terms (subject to
                    an agreed rent adjustment). A landlord can only refuse renewal for specific
                    reasons (eviction for personal use, substantial work, etc.) — and must follow
                    strict procedures to do so.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Security Deposits in Quebec</h2>
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-4">
                  <p className="text-sm text-amber-800 font-semibold mb-1">
                    Security deposits are ILLEGAL in Quebec
                  </p>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    This is one of the most important distinctions from other provinces. Quebec law
                    strictly prohibits landlords from collecting any amount as a security deposit,
                    damage deposit, or similar guarantee. If a landlord demands one, you are not
                    legally required to pay it.
                  </p>
                </div>
                <ul className="flex flex-col gap-3">
                  {depositRules.map((rule) => (
                    <li key={rule} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags in Quebec Leases</h2>
                <div className="flex flex-col gap-3">
                  {quebecRedFlags.map((flag) => (
                    <div key={flag} className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <p className="text-sm text-slate-700 leading-relaxed">{flag}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Analyze your Quebec lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your bail and our AI will flag any clauses that conflict with Quebec
                  housing law, including illegal deposit clauses and rent increase issues.
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
                    { label: "Canadian Tenant Rights", href: "/tenant-rights/canada" },
                    { label: "Quebec City Guides", href: "/canada/quebec" },
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
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">Quebec Resources</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  <strong>Tribunal administratif du logement (TAL):</strong>{" "}
                  <span className="text-blue-600">tal.gouv.qc.ca</span>
                  <br /><br />
                  Access the mandatory lease form, file applications, and find the annual rent
                  increase guidelines.
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
