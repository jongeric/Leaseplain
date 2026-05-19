import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Quebec Tenant Rights: Lease Help Under the Civil Code & Housing Tribunal | LeasePlain",
  description:
    "Understand your rights as a Quebec renter under the Civil Code, the Act Respecting Lessor and Lessee, and the Tribunal administratif du logement (TAL). Learn about the standard bail and rent increase rules.",
  alternates: { canonical: "https://leaseplain.com/canada/quebec" },
};

const quebecProtections = [
  "Landlords must use the standard lease form (bail) provided by the Tribunal administratif du logement (TAL) for most residential tenancies.",
  "Tenants have the right of first refusal — when a landlord wants to repossess a unit or substantially modify it, the tenant has priority to get it back.",
  "Rent increase notices must be sent in writing within a specific window (3 to 6 months before lease end for fixed-term leases).",
  "Tenants have the right to refuse a rent increase — if refused, the landlord must apply to the TAL to have the increase authorized.",
  "Quebec has strong anti-eviction protections — a landlord cannot refuse to renew a lease without a valid reason recognized by law.",
  "Tenants 70 years of age or older who have lived in a unit for at least 10 years benefit from additional protection against repossession.",
  "The TAL handles lease disputes, rent determinations, and eviction proceedings — filing fees are low.",
  "Leases in Quebec automatically renew on the same terms unless a change notice is given within the required window.",
];

const quebecLeaseIssues = [
  "Lease terms that deviate from the mandatory standard bail form without the tenant's informed agreement.",
  "Rent increase notices that do not comply with the prescribed format or are sent outside the required notice window — these may be invalid.",
  "Clauses purporting to waive the tenant's right of first refusal on repossession.",
  "Informal \"handshake\" lease arrangements that omit key terms required by the Civil Code.",
  "Clauses in English-only leases — Quebec law requires leases to be in French; an English version may be provided but the French governs.",
];

const cities = [
  { name: "Montreal", href: "/canada/quebec/montreal", desc: "Canada's largest rental market, bilingual leases, July 1 moving day" },
  { name: "Quebec City", href: "/canada/quebec/quebec-city", desc: "Provincial capital, lower vacancy than Montreal, French-language leases" },
  { name: "Laval", href: "/canada/quebec/laval", desc: "Montreal suburb, growing rental market, TAL jurisdiction" },
];

export default function QuebecPage() {
  return (
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Canada", href: "https://leaseplain.com/canada" },
        { name: "Quebec", href: "https://leaseplain.com/canada/quebec" },
      ]} />
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/locations" className="hover:underline">Locations</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/canada" className="hover:underline">Canada</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Quebec</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Quebec Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Quebec Tenant Rights: Lease Help Under the Civil Code &amp; Housing Tribunal
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Quebec's tenancy framework is unique in Canada. Governed by the Civil Code of Quebec
              and the Act Respecting Lessor and Lessee, Quebec renters deal with a mandatory standard
              lease form, strong renewal rights, and a specialized housing tribunal — the Tribunal
              administratif du logement.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Quebec's Unique Tenancy Framework</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Unlike other provinces that have standalone residential tenancy statutes, Quebec's
                  tenancy law is embedded in the <em>Civil Code of Quebec</em> and supplemented by
                  the <em>Act Respecting Lessor and Lessee</em>. The <strong>Tribunal administratif
                  du logement (TAL)</strong> — formerly the Régie du logement — is the specialized
                  administrative tribunal that hears all residential lease disputes.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  One of the most distinctive features of Quebec tenancy law is the mandatory standard
                  lease form (<em>bail</em>). This form, available from the TAL, must be used for most
                  private residential tenancies and sets out all mandatory and permitted terms. Custom
                  clauses can be added, but they cannot reduce tenant rights below the statutory minimum.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Tenant Protections in Quebec</h2>
                <ul className="flex flex-col gap-3">
                  {quebecProtections.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">July 1 Moving Day in Quebec</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Quebec's unique "moving day" tradition stems from a historical quirk: most leases
                  in the province run from July 1 to June 30, meaning thousands of tenants move on
                  the same day each year. This creates significant logistical challenges — moving
                  trucks are scarce and expensive, and landlords are flooded with overlapping move-ins.
                  If you are planning to sign a lease in Quebec, confirm the lease start and end dates
                  carefully, and book your movers as early as possible if your move coincides with July 1.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What to Watch for in Quebec Leases</h2>
                <ul className="flex flex-col gap-3">
                  {quebecLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">Quebec Cities</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {cities.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {c.name}
                        </h3>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors mt-0.5" aria-hidden="true" />
                      </div>
                      <p className="text-sm text-slate-600">{c.desc}</p>
                    </Link>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-500">More Quebec cities coming soon — Gatineau, Sherbrooke, and others.</p>
              </div>

            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "What is the Quebec standard lease (bail)?", a: "Quebec requires most residential leases to use the standard lease form (bail) issued by the Tribunal administratif du logement (TAL). Using a non-standard form does not invalidate the tenancy but tenants can request the standard form within 10 days of signing." },
                  { q: "Does Quebec allow security deposits?", a: "No. Quebec law prohibits landlords from collecting a security deposit, damage deposit, or any advance rent beyond one month. Asking for a deposit is illegal." },
                  { q: "How do rent increases work in Quebec?", a: "Landlords must send tenants a written notice of any proposed rent increase 3–6 months before lease renewal. Tenants can accept, negotiate, or refuse. If refused, the landlord can apply to the TAL to set a reasonable increase." },
                  { q: "What is the Tribunal administratif du logement (TAL)?", a: "The TAL is Quebec's housing tribunal that handles disputes about rent increases, lease renewals, repairs, and evictions. Applications can be filed online at tal.gouv.qc.ca and are free for tenants." },
                  { q: "What is July 1 moving day in Quebec?", a: "Historically, most Quebec leases expire on June 30 and renew July 1. This creates a mass moving day tradition. While less universal today, many Quebec leases still use this cycle." }
                ]} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your Quebec lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your Quebec lease and our AI will flag clauses that deviate from the standard
                  bail and may conflict with your rights under Quebec law.
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
                    { label: "Montreal Lease Help", href: "/canada/quebec/montreal" },
                    { label: "Quebec Tenant Rights Guide", href: "/tenant-rights/quebec" },
                    { label: "Canada Overview", href: "/canada" },
                    { label: "Ontario Tenant Rights", href: "/canada/ontario" },
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
