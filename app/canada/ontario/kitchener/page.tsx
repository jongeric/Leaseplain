import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help in Kitchener, Ontario | Tenant Rights & Lease Review | LeasePlain",
  description:
    "Kitchener renters: understand your rights under the Ontario RTA in the Waterloo Region tech corridor. Learn about rent control, AGI applications, and LTB hearings in Kitchener.",
  alternates: { canonical: "https://leaseplain.com/canada/ontario/kitchener" },
};

const kitchenerRights = [
  "The Ontario RTA applies in full to all private residential rentals in Kitchener.",
  "LTB Hamilton hearing centre serves Waterloo Region — tenants can file applications at no cost through the Tribunals Ontario portal.",
  "Above-guideline increase (AGI) applications are increasing with older building stock — tenants have the right to participate and respond at LTB hearings.",
  "Landlords must use the standard Ontario lease form for all most residential tenancies in Kitchener.",
  "Tenants have the right to sublet their unit under the RTA — a landlord cannot unreasonably withhold consent.",
  "Landlords must give 24 hours written notice before entering a unit for most permitted reasons.",
];

const kitchenerLeaseIssues = [
  "Tech corridor lease 'flexibility' clauses aimed at short tenancies — these cannot override the RTA's protections for tenants in fixed-term and month-to-month agreements.",
  "Undefined parking and storage fees added as extras without clear disclosure at the time of signing.",
  "Older building maintenance neglect followed by AGI applications — landlords cannot defer maintenance and then seek above-guideline increases for deferred capital work.",
  "Income-to-rent ratio screening practices that may conflict with the Ontario Human Rights Code.",
  "Early termination incentives offered to tenants that are not compliant with the RTA's rules on ending a tenancy.",
];

export default function KitchenerPage() {
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
              <Link href="/canada/ontario" className="hover:underline">Ontario</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Kitchener</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Kitchener, Ontario
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in Kitchener, Ontario | Tenant Rights &amp; Lease Review
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Kitchener is part of the Waterloo Region tech corridor — one of Canada's fastest-growing
              rental markets. Rising demand from tech workers and university students makes knowing
              your Ontario RTA rights essential before signing any Kitchener lease.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Kitchener's Rental Market</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Kitchener sits at the heart of the Waterloo Region tech corridor and has seen
                  significant rental market growth driven by a young professional base, University of
                  Waterloo and Wilfrid Laurier spillover demand, and strong new purpose-built rental
                  construction downtown. The combination of older building stock and rapidly constructed
                  new condos creates a two-tier market with distinct issues for tenants in each tier.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Ontario's <em>Residential Tenancies Act</em> applies in full throughout Kitchener.
                  New condo buildings first rented after November 15, 2018 are exempt from rent control,
                  while purpose-built rentals built before that date remain subject to the annual
                  guideline increase.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as a Kitchener Renter</h2>
                <ul className="flex flex-col gap-3">
                  {kitchenerRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Waterloo Region Tech Rental Market</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  New condo buildings in Kitchener first rented after November 15, 2018 are exempt from
                  Ontario's rent control guideline — landlords can raise rent to market rate between
                  tenancies. Purpose-built rental buildings constructed before that date remain subject
                  to the annual guideline increase. If you are unsure whether your unit is subject to
                  rent control, check your lease commencement date and whether the building was purpose-built
                  for rental or converted from condo stock.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in Kitchener</h2>
                <ul className="flex flex-col gap-3">
                  {kitchenerLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Resources for Kitchener Renters</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  These organizations assist Kitchener and Waterloo Region tenants with lease issues
                  and LTB applications:
                </p>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Community Justice Initiatives (Waterloo Region)</strong> — dispute resolution and tenant support services for Kitchener and area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Tenant Duty Counsel</strong> — free legal assistance at LTB hearings for unrepresented tenants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>LTB Hamilton hearing centre</strong> — serves Waterloo Region; file applications online through Tribunals Ontario</span>
                  </li>
                </ul>
              </div>

            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "What rental protections apply in Kitchener?", a: "Kitchener tenants are protected under Ontario's Residential Tenancies Act. This covers rent-increase limits, maintenance standards, deposit rules (last month's rent only), and access to the Landlord and Tenant Board for disputes." },
                  { q: "Is Kitchener a good rental market for tenants?", a: "Kitchener-Waterloo has grown significantly due to tech-sector expansion. Rents have risen but remain lower than Toronto. The area has a mix of older apartment buildings (subject to rent control) and newer units (exempt)." },
                  { q: "Can a Kitchener landlord terminate a lease early?", a: "Landlords can only terminate a tenancy for specific reasons listed in the RTA — such as non-payment, the landlord's own use, or major renovations. Simply wanting the unit back is not a valid reason." },
                  { q: "What is LIV Student in Kitchener?", a: "LIV Student and similar purpose-built student housing providers are private landlords covered by the RTA. Students in these buildings have the same rights as any Ontario tenant, including LTB access." },
                  { q: "How do I dispute a rent increase in Kitchener?", a: "If your landlord is trying to raise rent above the provincial guideline without LTB approval, file a T1 application with the LTB (tenant's rights). If you believe your building was built after November 15, 2018, verify first — it may be exempt from rent control." }
                ]} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Review your Kitchener lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI flags common Kitchener lease issues — rent control exemptions, undefined fees,
                  and clauses that conflict with the Ontario RTA.
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
                    { label: "Waterloo Lease Help", href: "/canada/ontario/waterloo" },
                    { label: "London Lease Help", href: "/canada/ontario/london" },
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
