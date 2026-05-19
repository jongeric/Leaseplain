import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help in Kingston, Ontario | Tenant Rights & Lease Review | LeasePlain",
  description:
    "Kingston, Ontario renters: understand your rights under the Ontario RTA. Student housing near Queen's University and St. Lawrence College, joint leases, and cleaning disputes explained.",
  alternates: { canonical: "https://leaseplain.com/canada/ontario/kingston" },
};

const cityRights = [
  "Ontario RTA applies fully in Kingston, including all student rentals near Queen's University and St. Lawrence College.",
  "Rent increases are capped at the annual Ontario guideline even for student housing.",
  "Queen's Law students and Queen's student legal services can assist Kingston tenants with RTA questions at no cost.",
  "A no-pets clause in a Kingston lease is void under s. 14 of the RTA — with exceptions for some condo buildings.",
  "Landlords in Kingston must give 24 hours written notice before entering a rental unit.",
  "Student tenants at Queen's can contact the Off-Campus Living Office for help reviewing a lease before signing.",
];

const cityLeaseIssues = [
  "Student house contracts — many Kingston landlords use non-standard lease forms for student houses; ensure any lease is reviewed against the Ontario Standard Lease requirements.",
  "\"Last month's rent\" confusion — many Kingston student landlords require last month's rent up front; this is legal, but additional \"damage deposits\" beyond last month's rent are not permitted under the RTA.",
  "House parties and \"disturbance\" clauses — some Kingston student leases include unusual clauses about guests and disturbances; understand which are enforceable and which are not.",
  "End-of-lease deep cleaning clauses — Kingston student landlords commonly charge significant cleaning fees; landlords can only charge for cleaning costs above the normal wear and tear standard.",
  "Joint tenancy in student houses — when multiple students share a lease, departure of one student does not automatically end the lease for remaining tenants; understanding your joint liability is essential.",
];

export default function KingstonPage() {
  return (
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Canada", href: "https://leaseplain.com/canada" },
        { name: "Ontario", href: "https://leaseplain.com/canada/ontario" },
        { name: "Kingston", href: "https://leaseplain.com/canada/ontario/kingston" },
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
              <span>Kingston</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Kingston, Ontario
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in Kingston, Ontario | Tenant Rights &amp; Lease Review
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Kingston is a historic city shaped by Queen's University, St. Lawrence College, and
              CFB Kingston. Its competitive student rental market comes with specific lease pitfalls —
              from non-standard contracts to end-of-lease cleaning disputes. Know your rights before
              you sign.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Kingston's Rental Market</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Kingston's rental market is heavily influenced by Queen's University, which draws
                  students to the Sydenham district and surrounding streets where Victorian-era homes
                  have been converted into student rentals for generations. Demand near campus is
                  intense and seasonal, with landlords often securing tenants many months in advance.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Beyond students, Kingston has a significant military population from CFB Kingston
                  and a healthcare sector anchored by Kingston Health Sciences Centre. These renters
                  face their own lease challenges — particularly around lease breaks and relocation.
                  Across all of these groups, the Ontario RTA provides consistent and enforceable
                  protections.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as a Kingston Renter</h2>
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
                <h3 className="font-semibold text-blue-900 mb-3">Queen's University Off-Campus Living Resources</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Queen's University operates an Off-Campus Living Office that provides lease review
                  assistance, housing listings, and referrals to legal resources for students renting
                  in Kingston. Queen's Student Legal Services (run by Queen's Law students under
                  supervision) offers free legal consultations on RTA matters. Both services are
                  available to current Queen's students and can help you understand your lease before
                  you sign or assist you if a dispute arises. St. Lawrence College students can access
                  similar support through the Student Association.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in Kingston</h2>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Resources in Kingston</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  These organizations support Kingston tenants with lease reviews and LTB applications:
                </p>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Queen's Off-Campus Living Office</strong> — lease review, housing listings, and referrals for Queen's students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Queen's Student Legal Services</strong> — free legal advice on RTA matters from Queen's Law students under supervision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Kingston Community Legal Clinic</strong> — free legal services for low-income Kingston renters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Landlord and Tenant Board (LTB)</strong> — online applications at Tribunals Ontario; Kingston-area hearings typically by videoconference</span>
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
                        name: "Are student leases near Queen's University covered by the Ontario RTA?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "Yes. All residential leases in Kingston — including those near Queen's University and St. Lawrence College — are fully covered by the Ontario Residential Tenancies Act. Student status does not affect your rights. Non-standard lease forms used by some Kingston landlords are still governed by the RTA.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "Can my Kingston landlord charge a cleaning deposit?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "No. Under the Ontario RTA, the only deposit a landlord can collect is a last month's rent deposit. A separate cleaning deposit or damage deposit is illegal. At move-out, landlords can deduct cleaning costs from your last month's rent deposit only if cleaning goes beyond normal wear and tear — and they must be able to prove it.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "What are my rights if my roommate leaves our joint Kingston lease?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "In a joint tenancy, all tenants named on the lease are jointly and severally liable for the full rent. If one roommate leaves, the remaining tenants are responsible for covering their share. The departing roommate may assign their interest to a replacement tenant with landlord consent. The landlord cannot evict the remaining tenants simply because one tenant departed.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "How do I apply to the LTB from Kingston, Ontario?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "File your application online at tribunalsontario.ca. Kingston is served by the East region of the LTB. Hearings are typically held by videoconference. Most tenant applications have no filing fee. Free legal assistance from Tenant Duty Counsel is available at hearings. Queen's Student Legal Services can also help you prepare your application.",
                        },
                      },
                    ],
                  }),
                }}
              />
            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Review your Kingston lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI flags common Kingston lease issues — non-standard student contracts, cleaning
                  clauses, joint liability terms, and conditions that conflict with the Ontario RTA.
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
                    { label: "Oshawa Lease Help", href: "/canada/ontario/oshawa" },
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
