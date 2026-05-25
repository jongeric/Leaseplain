import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help in Mississauga, Ontario | Tenant Rights | LeasePlain",
  description:
    "Mississauga renters: understand your rights under the Ontario Residential Tenancies Act. Learn about Mississauga's condo-heavy rental market and common lease issues in the GTA.",
  alternates: { canonical: "https://leaseplain.com/canada/ontario/mississauga" },
  openGraph: {
    title: "Lease Help in Mississauga, Ontario | Tenant Rights | LeasePlain",
    description: "Mississauga renters: understand your rights under the Ontario Residential Tenancies Act. Learn about Mississauga's condo-heavy rental market and common lease issues in the GTA.",
    url: "https://leaseplain.com/canada/ontario/mississauga",
    type: "website",
  },
};

const mississaugaRights = [
  "The Ontario Residential Tenancies Act (RTA) applies fully to all private residential rentals in Mississauga.",
  "Rent increases are capped at the Ontario provincial guideline — no above-guideline increase is permitted without an LTB order.",
  "Landlords must use the Ontario standard lease form for most residential tenancies.",
  "Tenants can file LTB applications for free; landlords pay a filing fee.",
  "Condominium investor-landlords are bound by the RTA, even if the condo corporation has additional rules.",
  "Units built after November 15, 2018 are exempt from Ontario rent control but all other RTA protections apply.",
];

const mississaugaLeaseIssues = [
  "Condo rules attached as lease schedules — some may attempt to limit RTA rights, such as restricting entry of guests or imposing fines.",
  "Move-in and move-out fees charged by condo corporations — landlords cannot pass these to tenants as a condition of tenancy.",
  "Utility arrangements in newer condo buildings — ensure the lease clearly states who pays for hydro, water, and heating.",
  "Informal agreements to pay \"last month's plus a damage deposit\" — in Ontario only one month's rent (last month's) is a permitted deposit.",
  "No-pet clauses — in Ontario, a blanket no-pet clause in a lease is void; landlords can only seek eviction if a specific pet causes a problem.",
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/canada/ontario/mississauga",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
  "url": "https://leaseplain.com/canada/ontario/mississauga",
};

export default function MississaugaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema).replace(/</g, "\u003c") }} />
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Canada", href: "https://leaseplain.com/canada" },
        { name: "Ontario", href: "https://leaseplain.com/canada/ontario" },
        { name: "Mississauga", href: "https://leaseplain.com/canada/ontario/mississauga" },
      ]} />
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/canada" className="hover:underline">Canada</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/canada/ontario" className="hover:underline">Ontario</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Mississauga</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Mississauga, Ontario
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in Mississauga, Ontario | Tenant Rights
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Mississauga is a rapidly growing GTA suburb with one of Ontario's most active condo rental
              markets. The Ontario RTA protects every Mississauga renter, but condo-specific leases
              introduce unique issues that are important to understand before signing.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Mississauga's Rental Market Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Mississauga's rental market has expanded significantly over the past decade, driven
                  largely by purpose-built condo towers in the City Centre area around Square One, as
                  well as investor-owned units in developments along Hurontario Street and the Lakeshore.
                  New transit infrastructure, including the Hazel McCallion LRT line, has increased
                  rental demand in transit-accessible corridors.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Many Mississauga rentals are investor-owned condominiums. This means individual
                  landlords who may have no prior property management experience, and who may include
                  unenforceable clauses in standard template leases. All of these units are still
                  governed by the Ontario RTA regardless of the landlord's intentions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as a Mississauga Renter</h2>
                <ul className="flex flex-col gap-3">
                  {mississaugaRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Rent Control Exemption for New Buildings</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  If your Mississauga unit was first occupied for residential purposes after November 15,
                  2018, it is exempt from Ontario's rent control guideline. This means your landlord
                  can raise the rent by any amount, provided they give 90 days written notice. All
                  other RTA protections — including eviction rules, maintenance standards, and deposit
                  limits — still apply in full.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in Mississauga</h2>
                <ul className="flex flex-col gap-3">
                  {mississaugaLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Filing at the LTB from Mississauga</h2>
                <p className="text-slate-700 leading-relaxed">
                  Mississauga is part of the Peel Region LTB jurisdiction. Applications can be filed
                  online via the Tribunals Ontario portal and hearings are typically conducted by
                  videoconference. Free legal information and duty counsel assistance is available
                  through Legal Aid Ontario and Peel Community Legal Services for qualifying tenants.
                </p>
              </div>

            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "Does rent control apply to Mississauga rentals?", a: "Yes, Ontario's rent-control rules apply throughout Mississauga. Units first occupied before November 15, 2018 are subject to the provincial rent-increase guideline. Newer units (occupied after that date) have no rent-increase limit." },
                  { q: "What lease rights do Mississauga condo tenants have?", a: "Condo tenants in Mississauga are protected by both the Ontario Residential Tenancies Act and the condo corporation's declaration and rules. Condo rules that are more restrictive than the RTA (e.g., no-smoking rules, quiet hours) are generally enforceable." },
                  { q: "Are there tenant legal aid resources in Mississauga?", a: "Mississauga Legal Aid and Peel Community Legal Services offer free or low-cost assistance to tenants with LTB applications, eviction notices, and lease review." },
                  { q: "What is the difference between a basement apartment and a legal secondary suite in Mississauga?", a: "A legal secondary suite meets Mississauga's zoning and building code requirements. Tenants in illegal units still have most RTA rights, but the unit may not have required fire safety features. Check with the City of Mississauga if uncertain." },
                  { q: "Can a Mississauga landlord raise rent after lease expiry?", a: "After the first year, the landlord can raise rent by the provincial guideline amount with 90 days' written notice (N1 form). If the unit is exempt from rent control, any amount is permissible with 90 days' notice." }
                ]} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Review your Mississauga lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI checks for condo-specific clauses and Ontario RTA conflicts in Mississauga
                  leases — upload yours for a free analysis.
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
                    { label: "Ontario Tenant Rights", href: "/canada/ontario" },
                    { label: "Toronto Lease Help", href: "/canada/ontario/toronto" },
                    { label: "Hamilton Lease Help", href: "/canada/ontario/hamilton" },
                    { label: "Ontario Tenant Rights Guide", href: "/tenant-rights/ontario" },
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
