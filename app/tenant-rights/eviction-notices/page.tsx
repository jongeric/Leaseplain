import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, ChevronRight, Upload, AlertTriangle, CheckCircle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Eviction Notices in Ontario: What Landlords Can and Cannot Do | LeasePlain",
  description:
    "Learn about N4, N5, N12, and other eviction notices in Ontario. A notice alone does NOT evict you — understand your rights, the LTB process, and illegal eviction tactics.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/eviction-notices" },
};

const noticeTypes = [
  {
    form: "N4",
    name: "Notice to End a Tenancy Early for Non-payment of Rent",
    detail: "Issued when a tenant has not paid rent. Tenant has 14 days to pay the full amount owing. If paid within 14 days, the notice is void.",
    voidable: true,
  },
  {
    form: "N5",
    name: "Notice to End your Tenancy for Interfering with Others, Damage or Overcrowding",
    detail: "Covers damage to the unit, disturbing other tenants, or overcrowding. Tenant has 7 days to correct the issue (first N5 only — a second N5 is not voidable).",
    voidable: true,
  },
  {
    form: "N6",
    name: "Notice to End your Tenancy for an Illegal Act",
    detail: "Used when the tenant or someone in the unit has committed an illegal act or is operating an illegal business in the unit. No remedy period — landlord can file immediately with the LTB.",
    voidable: false,
  },
  {
    form: "N7",
    name: "Notice to End your Tenancy for Causing Serious Problems",
    detail: "For serious impairment of safety or damage so significant it cannot be remedied within 7 days. No remedy period.",
    voidable: false,
  },
  {
    form: "N12",
    name: "Notice to End your Tenancy Because the Landlord, a Purchaser or a Family Member Requires the Rental Unit",
    detail: "Used when the landlord (or a family member, or a purchaser) needs to move into the unit. Requires 60 days notice. Landlord must pay 1 month's rent as compensation.",
    voidable: false,
  },
  {
    form: "N13",
    name: "Notice to End your Tenancy Because the Landlord Wants to Demolish the Rental Unit, Repair It or Convert It to Another Use",
    detail: "For demolition, conversion, or major renovation requiring a building permit and vacancy. Requires 120 days notice. Compensation (3 months' rent) and right of first refusal apply.",
    voidable: false,
  },
];

const evictionSteps = [
  { step: "Landlord serves written N-form notice", detail: "The appropriate N-form is delivered to the tenant. The notice specifies the grounds and gives the tenant time to remedy (where applicable)." },
  { step: "Remedy period (where applicable)", detail: "For N4 (14 days to pay), N5 (7 days to fix). If the tenant resolves the issue, the tenancy continues. A second identical breach may restart the process." },
  { step: "Landlord files L-series application with LTB", detail: "If the issue is not resolved, the landlord files an application (e.g., L1 for non-payment, L2 for cause). The notice alone does not end the tenancy." },
  { step: "LTB schedules a hearing", detail: "Both parties receive notice of the hearing date. Tenants can attend in person, by phone, or videoconference. Evidence, witnesses, and legal representation are permitted." },
  { step: "LTB issues an order (or dismisses the application)", detail: "If eviction is ordered, the order specifies when the tenant must leave. The tenant can request a review of the order or file for judicial review." },
  { step: "Sheriff enforcement", detail: "If the tenant does not vacate by the date in the order, the landlord must request enforcement by the Sheriff (Court Enforcement Office). The landlord CANNOT change locks or remove belongings themselves." },
];

const illegalTactics = [
  { tactic: "Changing the locks or removing tenant's belongings", detail: "Illegal at all times. Tenant can apply for an emergency LTB order and the landlord may face large fines." },
  { tactic: "Shutting off utilities to force a move-out", detail: "Section 21 RTA: cutting vital services is illegal, even if the tenant owes rent. Emergency LTB relief is available." },
  { tactic: "Harassment, threats, or intimidation", detail: "Section 23 RTA: landlords cannot interfere with a tenant's reasonable enjoyment. Harassment is grounds for an abatement of rent and other remedies." },
  { tactic: "Entering the unit to pressure or inconvenience the tenant", detail: "Landlord must give 24 hours written notice for all entries except emergencies. Using entry rights to harass is illegal." },
  { tactic: "Refusing essential maintenance as retaliation", detail: "Withholding repairs to force a tenant out is a serious violation of the RTA. Tenants can apply to the LTB for a work order and compensation." },
];

export default function EvictionNoticesPage() {
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
              <span>Eviction Notices</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Shield className="w-3.5 h-3.5" aria-hidden="true" />
              Ontario Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Eviction Notices in Ontario: What Landlords Can and Cannot Do
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Receiving an eviction notice is frightening — but in Ontario, a notice alone cannot
              remove you from your home. The law requires a full LTB process, with a hearing where
              you have the right to respond. Here&apos;s what every Ontario tenant needs to know.
            </p>
          </div>
        </section>

        {/* Content + sidebar */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Types of Eviction Notices in Ontario</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Ontario uses a standardized system of N-form notices. Each form corresponds to a
                  specific reason for ending the tenancy. Here are the most common:
                </p>
                <div className="flex flex-col gap-4">
                  {noticeTypes.map((notice) => (
                    <div key={notice.form} className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                      <div className="flex items-start gap-3">
                        <span className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center flex-shrink-0">
                          {notice.form}
                        </span>
                        <div>
                          <p className="font-semibold text-slate-900 text-sm mb-1">{notice.name}</p>
                          <p className="text-sm text-slate-600 leading-relaxed mb-2">{notice.detail}</p>
                          {notice.voidable && (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 border border-green-100 px-2 py-0.5 rounded-full">
                              <CheckCircle className="w-3 h-3" aria-hidden="true" />
                              Can be voided by tenant action
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Eviction Process: Notice → Application → Hearing</h2>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-5">
                  <p className="text-sm text-blue-800 font-semibold">
                    A notice alone does NOT evict you. The landlord must apply to the LTB and obtain an order.
                  </p>
                </div>
                <ol className="flex flex-col gap-4">
                  {evictionSteps.map((item, i) => (
                    <li key={item.step} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm mb-1">{item.step}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights When You Receive an Eviction Notice</h2>
                <ul className="flex flex-col gap-3">
                  {[
                    { right: "Right to void the notice", detail: "For N4 notices, pay all rent owing within 14 days to void the notice. For N5 notices, fix the issue within 7 days." },
                    { right: "Right to attend the LTB hearing", detail: "You will receive a Notice of Hearing from the LTB. You have the right to attend, present evidence, call witnesses, and have a representative (including a duty counsel lawyer, often available for free)." },
                    { right: "Right to negotiate a payment plan", detail: "For N4 (non-payment), you can propose a repayment plan to the LTB. If the LTB accepts the plan, the eviction may be conditional on compliance." },
                    { right: "Right to dispute the notice", detail: "You can dispute the grounds of the notice at the hearing. If the landlord cannot prove their case, the application will be dismissed." },
                    { right: "Right to request a review", detail: "If an eviction order is made against you, you can request a review by a senior LTB adjudicator, and thereafter seek judicial review at Divisional Court." },
                  ].map((item) => (
                    <li key={item.right} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-blue-600" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm mb-0.5">{item.right}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags and Illegal Eviction Tactics</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  These are illegal in Ontario. If your landlord does any of these, file an
                  urgent T2 application with the LTB immediately:
                </p>
                <div className="flex flex-col gap-4">
                  {illegalTactics.map((item) => (
                    <div key={item.tactic} className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-semibold text-slate-800 mb-1">{item.tactic}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and our AI will flag clauses that could affect your eviction
                  rights — and identify any illegal terms.
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
                    { label: "Ontario Tenant Rights", href: "/tenant-rights/ontario" },
                    { label: "Breaking a Lease", href: "/tenant-rights/breaking-a-lease" },
                    { label: "Early Termination Clause", href: "/lease-clause/early-termination" },
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
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">Emergency Help</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  If your landlord has changed your locks or shut off utilities, call the LTB
                  immediately at <strong>1-888-332-3234</strong>. Emergency orders can be obtained
                  quickly for serious violations.
                  <br /><br />
                  For free legal advice: <strong>Legal Aid Ontario</strong> — 1-800-668-8258.
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
