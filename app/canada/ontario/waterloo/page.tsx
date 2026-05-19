import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help in Waterloo, Ontario | Tenant Rights & Lease Review | LeasePlain",
  description:
    "Waterloo, Ontario renters: understand your rights under the Ontario RTA. Student housing, co-op sublets, joint leases, and no-sublet clauses explained for UWaterloo and WLU students.",
  alternates: { canonical: "https://leaseplain.com/canada/ontario/waterloo" },
};

const cityRights = [
  "Ontario RTA applies fully in Waterloo — student tenants have the same legal rights as all other renters.",
  "A 12-month lease is still a binding RTA lease — students have full RTA protections even if they signed a student-targeted lease from a private landlord.",
  "University of Waterloo and Wilfrid Laurier students can access free legal help through student legal services organizations.",
  "Co-op sublets are common in Waterloo — the RTA permits subletting with landlord consent; a landlord cannot unreasonably withhold consent.",
  "A landlord cannot refuse to allow a sublet simply because it is for a 4-month co-op term.",
  "Rent increases are limited to the annual Ontario guideline, even in student housing.",
];

const cityLeaseIssues = [
  "12-month leases for 8-month students — landlords often insist on 12-month leases; students who can only stay 8 months must either sublet for the remaining 4 months or negotiate with the landlord.",
  "\"No sublet\" clauses — despite being contrary to the RTA, some Waterloo student leases prohibit subletting; these clauses are unenforceable under Ontario law.",
  "Multiple tenants on one lease (\"joint and several liability\") — common in student houses; if your roommate leaves, you may be responsible for their share of rent under the lease terms.",
  "Move-out inspection disputes — student landlords frequently charge for cleaning and damage beyond what is legitimate; document your unit thoroughly at move-in with dated photos.",
  "Lease start pressure in August for September — Waterloo landlords often require signature well in advance; understand you are entering a binding legal agreement from the day you sign.",
];

export default function WaterlooPage() {
  return (
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Canada", href: "https://leaseplain.com/canada" },
        { name: "Ontario", href: "https://leaseplain.com/canada/ontario" },
        { name: "Waterloo", href: "https://leaseplain.com/canada/ontario/waterloo" },
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
              <span>Waterloo</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Waterloo, Ontario
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in Waterloo, Ontario | Tenant Rights &amp; Lease Review
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Waterloo's rental market is dominated by students at the University of Waterloo and
              Wilfrid Laurier — many of whom need to sublet during co-op work terms. Whether you're
              signing a 12-month lease or arranging a 4-month sublet, your Ontario RTA rights are
              fully in force.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Waterloo's Rental Market</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Waterloo's rental market is unlike any other in Ontario. The University of Waterloo's
                  co-op program — one of the world's largest — means thousands of students cycle in and
                  out of the city every four months. This creates intense demand for short-term sublets
                  alongside the standard 12-month rental market, and a landlord community well-practiced
                  at extracting maximum value from student tenants.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Many Waterloo landlords attempt to lock students into 12-month leases when they only
                  need 8 months, or include clauses that purport to prevent subletting during co-op terms.
                  Understanding that these clauses are unenforceable under the Ontario RTA is essential
                  for every student renter in Waterloo.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as a Waterloo Renter</h2>
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
                <h3 className="font-semibold text-blue-900 mb-3">Co-op Sublets in Waterloo — Your Legal Rights</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Under s. 97 of the Ontario RTA, a tenant may sublet their unit to another person with
                  the consent of the landlord. Critically, s. 97(4) specifies that a landlord cannot
                  arbitrarily or unreasonably withhold consent to a sublet. A "no sublet" clause in
                  your lease is void under the RTA and cannot be enforced. The practical process: give
                  your landlord written notice of the proposed sublet, provide reasonable information
                  about the subtenant, and if the landlord refuses without reasonable grounds, you can
                  file an application with the LTB. UWaterloo Student Legal Services can help you
                  navigate this process at no cost.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in Waterloo</h2>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Resources in Waterloo</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  These organizations can help Waterloo students and tenants with lease questions and
                  LTB applications:
                </p>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>UWaterloo Student Legal Services</strong> — free legal advice for University of Waterloo students on lease and RTA matters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>WLU Legal Services</strong> — free legal help for Wilfrid Laurier University students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Community Legal Services of Waterloo Region</strong> — free legal services for low-income residents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Landlord and Tenant Board (LTB)</strong> — online applications at Tribunals Ontario; no filing fee for most tenant applications</span>
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
                        name: "Can I sublet my Waterloo rental during a co-op term?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "Yes. Under s. 97 of the Ontario RTA, you have the right to sublet your unit with landlord consent. Your landlord cannot unreasonably withhold consent to a sublet, including a short-term co-op sublet. A 'no sublet' clause in your lease is unenforceable under the RTA. Give your landlord written notice and reasonable information about the proposed subtenant.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "Are student leases in Waterloo covered by the Ontario RTA?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "Yes. All residential leases in Waterloo — whether marketed to students or not — are covered by the Ontario Residential Tenancies Act. Being a student does not reduce your rights in any way. This includes leases for houses, apartments, and basement suites rented from private landlords.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "Can my Waterloo landlord keep my deposit for cleaning?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "A landlord can only deduct cleaning costs from your last month's rent deposit if the cleaning required goes beyond normal wear and tear, and they can demonstrate you left the unit in an unreasonably poor state. Taking dated photos at move-in is your best protection. If you believe a deduction is unjustified, you can file an application with the LTB.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "What are joint and several liability clauses in student leases?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "When multiple students sign a single lease, they are typically 'jointly and severally liable' — meaning each tenant is responsible for the full rent, not just their share. If a roommate moves out and stops paying, the remaining tenants may be responsible for covering the full amount. Understanding this risk before signing is important, especially in Waterloo's student housing market.",
                        },
                      },
                    ],
                  }),
                }}
              />
            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Review your Waterloo lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI flags common Waterloo student lease issues — no-sublet clauses, joint liability
                  terms, and conditions that conflict with the Ontario RTA.
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
                    { label: "Kitchener Lease Help", href: "/canada/ontario/kitchener" },
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
