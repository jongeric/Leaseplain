import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help in Oshawa, Ontario | Tenant Rights & Lease Review | LeasePlain",
  description:
    "Oshawa renters: understand your rights under the Ontario RTA in the Durham Region. Basement apartments, Ontario Tech students, aging housing stock, and LTB access explained.",
  alternates: { canonical: "https://leaseplain.com/canada/ontario/oshawa" },
};

const cityRights = [
  "Ontario RTA applies fully in Oshawa and the Durham Region.",
  "Rent increases are capped at the annual Ontario guideline — Oshawa landlords cannot charge above-guideline increases without an LTB application.",
  "Ontario Tech University students are protected by the full Ontario RTA in all off-campus housing.",
  "Basement apartment tenants in Oshawa have full RTA protections — including maintenance, quiet enjoyment, and entry notice requirements.",
  "Landlords must use the Ontario Standard Lease form for most Oshawa rentals.",
  "The LTB serves the Durham Region — hearings are typically conducted online; tenants apply through Tribunals Ontario.",
];

const cityLeaseIssues = [
  "Older housing maintenance — Oshawa has significant aging rental stock; landlords are legally required to maintain all systems including heating, plumbing, and pest control.",
  "Automotive employment and lease breaks — shift changes, plant closures, or job relocations are common in Oshawa; understand your options if you need to end your lease early.",
  "Basement apartment safety — some Oshawa basements lack proper egress windows or smoke detectors; landlords must meet all fire and building code requirements regardless of lease terms.",
  "Informal rental agreements — some Oshawa landlords, particularly in family-home basements, operate informally without a written lease; a verbal lease is still protected by the RTA.",
  "Shared-entrance situations — in converted homes where multiple tenants share entrances, ensure your lease clearly defines your exclusive space and shared responsibilities.",
];

export default function OshawaPage() {
  return (
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Canada", href: "https://leaseplain.com/canada" },
        { name: "Ontario", href: "https://leaseplain.com/canada/ontario" },
        { name: "Oshawa", href: "https://leaseplain.com/canada/ontario/oshawa" },
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
              <span>Oshawa</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Oshawa, Ontario
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in Oshawa, Ontario | Tenant Rights &amp; Lease Review
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Oshawa is a growing Durham Region city drawing renters priced out of Toronto and
              Mississauga. Whether you're in a basement apartment, an older rental home, or a
              newer development, Ontario's RTA gives you full tenant protections.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Oshawa's Rental Market</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Oshawa has become an increasingly attractive option for renters unable to afford the
                  GTA's core markets. Its proximity to Toronto via GO Transit has driven demand from
                  commuters, while Ontario Tech University (UOIT) sustains a student rental sector near
                  the north campus. The city's auto and healthcare industries bring a mix of long-term
                  renters and workers on short-term assignments.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Oshawa's rental stock includes a significant proportion of older housing converted
                  into multi-unit rentals and basement apartments. Maintenance issues are common in
                  this stock, and some informal rental arrangements operate without proper written
                  leases. Knowing your rights — and that even a verbal tenancy is protected by the
                  Ontario RTA — is essential.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as an Oshawa Renter</h2>
                <ul className="flex flex-col gap-3">
                  {cityRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Durham Region LTB Access</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Oshawa and Durham Region tenants file LTB applications online through the Tribunals
                  Ontario portal at <strong>tribunalsontario.ca</strong>. Hearings for Durham Region
                  matters are typically conducted by videoconference. Tenant Duty Counsel is available
                  at no cost at LTB hearings — you do not need to hire a lawyer to participate. If
                  you have difficulty accessing the online system, the Durham Community Legal Clinic
                  can help you prepare and file your application in person.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in Oshawa</h2>
                <ul className="flex flex-col gap-3">
                  {cityLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Resources in Oshawa</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The following organizations can assist Oshawa and Durham Region tenants:
                </p>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Durham Community Legal Clinic</strong> — free legal services for low-income Durham Region residents facing housing issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Ontario Tech Student Association</strong> — housing support and referrals for Ontario Tech University students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Tribunals Ontario (LTB)</strong> — file tenant applications online at no cost; videoconference hearings available for Durham Region</span>
                  </li>
                </ul>
              </div>

              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: [
                      {
                        "@type": "Question",
                        name: "Are basement apartments in Oshawa covered by the Ontario RTA?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "Yes. The Ontario Residential Tenancies Act applies to all residential tenancies in Oshawa, including basement apartments — even those in private homes. Your landlord must provide 24 hours written notice before entering, maintain the unit in good repair, and follow proper LTB procedures for any eviction.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "What happens if I need to break my Oshawa lease early?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "Breaking a lease early in Ontario is not straightforward. Options include: negotiating a mutual agreement with your landlord to end the tenancy, assigning your lease to a qualified replacement tenant (your landlord cannot unreasonably refuse), or subletting for the remaining term. If your landlord agrees to end the tenancy, get it in writing. The LTB can assist if disputes arise.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "Can my landlord raise my rent in Oshawa?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "Rent increases in Oshawa are subject to the annual Ontario guideline for units first rented before November 15, 2018. Units first occupied after that date are exempt from the guideline. In either case, your landlord must give you 90 days written notice of a rent increase using the proper form.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "How do I file an LTB complaint from Oshawa?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "File your application online at tribunalsontario.ca. Select the appropriate tenant application form (T1 through T6 depending on the issue). Most tenant applications have no filing fee. Durham Region hearings are typically held by videoconference. Tenant Duty Counsel is available for free assistance at hearings.",
                        },
                      },
                    ],
                  }),
                }}
              />
            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Review your Oshawa lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI flags common Oshawa lease issues — maintenance obligations, basement apartment
                  rights, and clauses that conflict with the Ontario RTA.
                </p>
                <Link
                  href="/upload"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                >
                  <Upload className="w-4 h-4" aria-hidden="true" />
                  Upload Your Lease
                </Link>
                <p className="text-xs text-blue-200 mt-3 text-center">Not legal advice</p>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Pages</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Ontario Tenant Rights", href: "/canada/ontario" },
                    { label: "Canada Overview", href: "/canada" },
                    { label: "Toronto Lease Help", href: "/canada/ontario/toronto" },
                    { label: "Kingston Lease Help", href: "/canada/ontario/kingston" },
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
