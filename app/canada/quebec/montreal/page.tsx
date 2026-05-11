import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help in Montreal, Quebec | Tenant Rights & Lease Review | LeasePlain",
  description:
    "Montreal renters: understand your rights under Quebec's Civil Code and the standard bail form. Learn about bilingual leases, July 1 moving day, TAL disputes, and strong Montreal tenant protections.",
  alternates: { canonical: "https://leaseplain.com/canada/quebec/montreal" },
};

const montrealRights = [
  "Landlords must use the mandatory standard lease form (bail) produced by the TAL for most residential tenancies in Montreal.",
  "Leases renew automatically on the same terms unless a change notice is given within the prescribed window (3–6 months before end for fixed-term leases).",
  "Tenants can refuse a rent increase by notifying the landlord in writing — the landlord must then apply to the TAL.",
  "Tenants have the right of first refusal if a landlord wishes to repossess the unit for personal or family occupancy.",
  "Tenants 70 years of age or older who have occupied a Montreal unit for 10+ years have enhanced protection against repossession.",
  "Discrimination in rental housing is prohibited under the Quebec Charter of Human Rights and Freedoms.",
  "The TAL provides a bilingual dispute process — hearings can be requested in French or English.",
];

const montrealLeaseIssues = [
  "English-only lease documents — Quebec law requires the standard bail in French; ask for the official French form.",
  "Rent increase notices sent outside the prescribed window (3–6 months before lease end for yearly leases) — these may be legally invalid.",
  "Clauses requiring tenants to repaint or repair the unit at end of tenancy beyond normal wear and tear — not permitted under Quebec law.",
  "Separate fees for parking, storage, or appliances not disclosed at time of signing — all charges must be stated clearly in the bail.",
  "Informal side agreements to waive rights or pay above-market deposits — deposits (\"dépôts de garantie\") are generally prohibited in Quebec.",
];

export default function MontrealPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/canada" className="hover:underline">Canada</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/canada/quebec" className="hover:underline">Quebec</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Montreal</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Montreal, Quebec
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in Montreal, Quebec | Tenant Rights &amp; Lease Review
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Montreal is Canada's largest rental market by the proportion of renters in its population.
              Quebec's strong tenant protections, the standard bail form, July 1 moving day, and the
              TAL dispute tribunal are all essential knowledge for any Montreal renter.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Montreal's Rental Market Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Montreal has the highest rate of renters among Canada's major cities — roughly
                  two-thirds of Montreal households rent rather than own. This is driven by a
                  cultural tradition of renting, lower homeownership rates, and a large student
                  population at McGill, Concordia, Université de Montréal, and UQAM.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  The city's rental market has tightened significantly since 2018, with historically
                  low vacancy rates and rising rents. Montreal's tenant community is organized and
                  vocal — neighbourhood tenant committees (comités logement) provide grassroots
                  support, legal information, and advocacy for renters facing rent hikes and renovictions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as a Montreal Renter</h2>
                <ul className="flex flex-col gap-3">
                  {montrealRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">No Security Deposits in Quebec</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Unlike every other Canadian province, Quebec prohibits landlords from collecting
                  security deposits or any deposit that acts as security for the tenant's obligations
                  (except for keys and access devices). A Montreal landlord who demands first and last
                  month's rent, or a damage deposit, is violating Quebec law. If you paid such a
                  deposit, you can apply to the TAL to have it returned. This is one of Quebec's
                  most distinctive — and strongest — tenant protections.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in Montreal</h2>
                <ul className="flex flex-col gap-3">
                  {montrealLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The TAL Process in Montreal</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The Tribunal administratif du logement has offices in Montreal and offers bilingual
                  service. Tenants and landlords can file applications online or in person. Common
                  Montreal disputes include: contested rent increases, repossession notices, evictions
                  for non-payment, and claims for poor maintenance.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  For free tenant support, Montreal's neighbourhood <em>comités logement</em> — such
                  as the Comité logement du Plateau Mont-Royal, RCLALQ-affiliated groups, and the
                  Regroupement des comités logement et associations de locataires du Québec (RCLALQ) —
                  offer counselling, legal information, and organizing support.
                </p>
              </div>

            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "Is there a security deposit for Montreal rentals?", a: "No. Quebec law prohibits landlords from charging any security deposit or damage deposit. If a Montreal landlord asks for one, this is illegal and you can report it to the Tribunal administratif du logement (TAL)." },
                  { q: "How do rent increases work for Montreal apartments?", a: "Landlords must send a written notice of any proposed rent change 3–6 months before lease renewal. Tenants can accept, counter-propose, or refuse. If they refuse, the landlord can apply to the TAL to set a reasonable increase." },
                  { q: "What is Montreal's July 1 moving day?", a: "Historically, most Quebec leases expire June 30 and renew July 1, creating the famous July 1 moving day. While less universal today, many Montreal leases still use this cycle. Plan moves early to secure movers and trucks." },
                  { q: "What is the mandatory Quebec lease form (bail)?", a: "Quebec law requires residential leases to use the standard bail form issued by the TAL. Landlords who use a different form must still honor the rights granted by the Civil Code of Quebec and related legislation." },
                  { q: "What are tenant rights regarding repairs in Montreal?", a: "Montreal landlords must keep units in good habitable condition. If repairs are not made within a reasonable time after written notice, tenants can apply to the TAL for a rent reduction or an order requiring the work to be done." }
                ]} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Review your Montreal lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and our AI will check for deviations from the standard bail form
                  and flag clauses that conflict with Quebec tenant law.
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
                    { label: "Quebec Tenant Rights", href: "/canada/quebec" },
                    { label: "Quebec Tenant Rights Guide", href: "/tenant-rights/quebec" },
                    { label: "Canada Overview", href: "/canada" },
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
