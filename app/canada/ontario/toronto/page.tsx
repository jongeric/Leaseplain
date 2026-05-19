import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help in Toronto, Ontario | Tenant Rights & Lease Review | LeasePlain",
  description:
    "Toronto renters: understand your rights under the Ontario Residential Tenancies Act. Learn about condo leases, above-guideline rent increases, and LTB hearings in Toronto.",
  alternates: { canonical: "https://leaseplain.com/canada/ontario/toronto" },
};

const torontoRights = [
  "The Ontario RTA applies in full to all private residential rentals in Toronto, including condominiums.",
  "Rent increases are limited to the provincial guideline — your landlord cannot raise rent by more than the guideline without an LTB order.",
  "Above-guideline rent increases (AGI) require the landlord to apply to the LTB, citing extraordinary cost increases for capital work.",
  "Toronto tenants can file applications at the LTB at no cost — the Etobicoke or Toronto hearing centres handle local cases.",
  "New condominium units built after November 15, 2018 are exempt from rent control under Ontario's 2018 RTA amendments.",
  "Condo landlords are bound by the condo corporation's rules, but they cannot pass these to you as enforceable lease obligations beyond what the RTA permits.",
];

const torontoLeaseIssues = [
  "Condo-specific rules (amenity bookings, move-in/out restrictions) added as lease schedules — some may not be enforceable if they limit your RTA rights.",
  "Above-market \"key money\" or upfront fees demanded before move-in — illegal under the Ontario RTA.",
  "Illegal rent-to-income screening thresholds that discriminate contrary to the Ontario Human Rights Code.",
  "Clauses requiring tenant liability insurance at specific dollar amounts — while insurance itself may be required, the amount must be reasonable.",
  "Short-notice entry clauses — landlords must give 24 hours written notice to enter for most reasons.",
];

export default function TorontoPage() {
  return (
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Canada", href: "https://leaseplain.com/canada" },
        { name: "Ontario", href: "https://leaseplain.com/canada/ontario" },
        { name: "Toronto", href: "https://leaseplain.com/canada/ontario/toronto" },
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
              <span>Toronto</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Toronto, Ontario
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in Toronto, Ontario | Tenant Rights &amp; Lease Review
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Toronto is Canada's most competitive rental market. With sky-high rents, a surge of
              condo investor-landlords, and growing awareness of tenant rights, knowing the Ontario RTA
              is essential before signing any Toronto lease.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Toronto's Rental Market</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Toronto consistently ranks as one of the most expensive rental markets in North America.
                  The city's housing market is characterized by a large share of investor-owned condominiums
                  rented out by individual landlords, many of whom are new to the rental business and
                  unfamiliar with their obligations under the <em>Residential Tenancies Act</em>.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  This dynamic creates both risks and opportunities for tenants. On one hand, you may
                  encounter landlords who include illegal clauses. On the other hand, the LTB regularly
                  dismisses or limits enforcement of clauses that violate the RTA — and Toronto has a
                  strong tenant advocacy ecosystem to help you navigate disputes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as a Toronto Renter</h2>
                <ul className="flex flex-col gap-3">
                  {torontoRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Above-Guideline Rent Increases (AGI) in Toronto</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Toronto has seen a rise in landlords applying to the LTB for above-guideline rent
                  increases, often citing major capital expenditures like elevator replacements, roof
                  repairs, or HVAC upgrades. If your landlord files an AGI application, you have the
                  right to respond and participate in the LTB hearing. The LTB will only grant an AGI
                  if the landlord meets a strict evidentiary threshold. You can obtain free help from
                  the Tenant Duty Counsel program at LTB hearings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in Toronto</h2>
                <ul className="flex flex-col gap-3">
                  {torontoLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">LTB & Tenant Resources in Toronto</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The LTB holds hearings at locations across Toronto and also via videoconference. Tenants
                  can file applications online through the Tribunals Ontario portal. For free help:
                </p>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Tenant Duty Counsel</strong> — free legal assistance at LTB hearings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>FMTA (Federation of Metro Toronto Tenants' Associations)</strong> — tenant rights education and organizing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Community Legal Aid Clinics</strong> — free legal advice for low-income renters across Toronto neighbourhoods</span>
                  </li>
                </ul>
              </div>

            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "Is rent controlled in Toronto?", a: "Toronto follows Ontario's rent-control rules under the Residential Tenancies Act. Units first occupied before November 15, 2018 are subject to the annual rent-increase guideline. Units built after that date are exempt from rent control." },
                  { q: "What is the average rent in Toronto?", a: "Toronto is Canada's most expensive rental market. Average one-bedroom apartments have been around $2,300–$2,600/month in recent years, varying significantly by neighbourhood and building type. Always verify current market data before signing." },
                  { q: "How do I file a complaint about my Toronto landlord?", a: "File an application with the Ontario Landlord and Tenant Board (LTB) at ontario.ca/LTB. Tenants pay no filing fee and can apply for orders related to maintenance, rent, illegal entry, and more." },
                  { q: "Can a Toronto landlord charge a pet deposit?", a: "No. Under Ontario's Residential Tenancies Act, landlords cannot charge a pet deposit or any deposit other than the last month's rent. However, landlords can evict tenants if a lease no-pet clause is violated and the pet causes issues." },
                  { q: "What is the difference between a condo lease and an apartment lease in Toronto?", a: "The RTA applies to both, but condo leases may include condo corporation rules (which override parts of the lease). Condo rules about noise, amenity use, and move-in/move-out procedures are generally binding on tenants." }
                ]} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Review your Toronto lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI flags common Toronto lease issues — condo schedules, illegal fees, and clauses
                  that conflict with the Ontario RTA.
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
                    { label: "Ontario Tenant Rights Guide", href: "/tenant-rights/ontario" },
                    { label: "Ottawa Lease Help", href: "/canada/ontario/ottawa" },
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
