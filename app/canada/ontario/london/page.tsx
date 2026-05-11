import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help in London, Ontario | Tenant Rights & Lease Review | LeasePlain",
  description:
    "London, Ontario renters: understand your rights under the Ontario RTA. Learn about student housing near Western University and Fanshawe College, joint tenancies, and LTB hearings.",
  alternates: { canonical: "https://leaseplain.com/canada/ontario/london" },
};

const londonRights = [
  "The Ontario RTA applies to all residential rentals in London, including student housing near Western University and Fanshawe College.",
  "LTB London hearings are available — tenants can file applications at no cost through the Tribunals Ontario portal.",
  "Student tenants have full RTA protection regardless of student status — being a student does not affect your rights under the Act.",
  "Joint tenancies are common in student houses — each tenant who signs the lease has individual rights and obligations under the RTA.",
  "Only a last month's rent deposit is permitted — the maximum a landlord can collect upfront is one month's rent.",
  "Landlords must use the standard Ontario lease form for most residential tenancies in London.",
];

const londonLeaseIssues = [
  "Joint and several liability in student houses — all co-tenants are responsible for the full rent; if one leaves, remaining tenants may be responsible for the full amount.",
  "Illegal 'damage fees' deducted from last month's rent deposit before a move-out inspection — deductions from last month's rent are not permitted under the RTA.",
  "Short-term subletting pressures in off-campus housing — students have subletting rights under the RTA; landlords cannot unreasonably refuse.",
  "Lease start dates designed to lock tenants into September–August cycles that limit flexibility at the end of the academic year.",
  "Noise and guest clauses targeted at student behaviour that may conflict with RTA protections — tenants have the right to reasonable enjoyment of the unit.",
];

export default function LondonPage() {
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
              <span>London</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              London, Ontario
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in London, Ontario | Tenant Rights &amp; Lease Review
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              London is a major university city where student renters, young professionals, and
              families share a rental market shaped by Western University and Fanshawe College.
              Whether you rent off-campus or in the city proper, the Ontario RTA gives you strong protections.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">London's Rental Market</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  London's rental market operates on a dual economy: student rentals concentrated near
                  Western University and Fanshawe College, and family and professional rentals spread
                  across the broader city. Student demand drives intense August lease turnover, with
                  many landlords posting units in October or November for the following September.
                  This seasonal pressure can push tenants into signing leases far in advance without
                  fully understanding the terms.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  While London remains below GTA price levels, rents have risen significantly in recent
                  years. Ontario's <em>Residential Tenancies Act</em> applies in full regardless of
                  whether you rent a student house or a purpose-built apartment — and your rights
                  do not diminish because you are a student.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as a London Renter</h2>
                <ul className="flex flex-col gap-3">
                  {londonRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Student Tenants in London</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Full RTA rights apply to student tenants regardless of student status — landlords
                  cannot discriminate by age or treat students differently under the lease. All joint
                  tenants must sign the lease to have full individual protection under the RTA. If you
                  are in a student house, each co-tenant who has signed is equally protected and equally
                  responsible. Western University Community Legal Services and Fanshawe Community Legal
                  Services can provide free advice before you sign.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in London</h2>
                <ul className="flex flex-col gap-3">
                  {londonLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Resources for London Renters</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The following organizations assist London tenants with lease questions and LTB applications:
                </p>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Western University Community Legal Services</strong> — free legal advice for Western students and low-income London renters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Fanshawe Community Legal Services</strong> — legal support for Fanshawe students and area renters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>LTB London hearing centre</strong> — file applications online at Tribunals Ontario; in-person and videoconference hearings available for London region</span>
                  </li>
                </ul>
              </div>

            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Review your London lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI flags common London lease issues — joint tenancy traps, illegal deposit
                  deductions, and clauses that conflict with the Ontario RTA.
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
                    { label: "Kitchener Lease Help", href: "/canada/ontario/kitchener" },
                    { label: "Toronto Lease Help", href: "/canada/ontario/toronto" },
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
