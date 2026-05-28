import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Security Deposit Rules by Province: What Can Your Landlord Charge? | LeasePlain",
  description:
    "Deposit rules vary dramatically across Canada — from no deposits at all in Quebec to one month's rent in Alberta. Here's a province-by-province breakdown with return deadlines.",
  alternates: { canonical: "https://leaseplain.com/blog/security-deposit-rules-canada" },
  openGraph: {
    title: "Security Deposit Rules by Province: What Can Your Landlord Charge? | LeasePlain",
    description:
      "Quebec bans deposits entirely. Ontario only allows last month's rent. Alberta allows one month. Here's exactly what landlords can charge in every Canadian province.",
    url: "https://leaseplain.com/blog/security-deposit-rules-canada",
    type: "article",
    publishedTime: "2026-03-01T00:00:00Z",
    modifiedTime: "2026-03-01T00:00:00Z",
  },
  keywords: [
    "security deposit Canada",
    "security deposit rules by province",
    "how much security deposit can landlord charge",
    "deposit return Ontario",
    "Quebec no security deposit",
  ],
};

const provinceRules = [
  { province: "Ontario", max: "Last month's rent only (no damage deposit)", petDeposit: "Not permitted", returnDeadline: "Applied to final month's rent — no separate return step", interest: "Yes — based on rent increase guideline rate" },
  { province: "British Columbia", max: "0.5× one month's rent", petDeposit: "Additional 0.5× one month's rent", returnDeadline: "15 days after tenancy end or last day of fixed term", interest: "Yes — annual rate set by RTB" },
  { province: "Alberta", max: "1× one month's rent (includes pet deposit)", petDeposit: "Part of overall 1× cap", returnDeadline: "10 days after tenancy end", interest: "Yes — rate varies annually by regulation" },
  { province: "Quebec", max: "No security deposit permitted", petDeposit: "Not permitted", returnDeadline: "N/A", interest: "N/A" },
  { province: "Manitoba", max: "0.5× one month's rent", petDeposit: "Part of overall 0.5× cap", returnDeadline: "14 days after tenancy end", interest: "Yes — prescribed rate" },
  { province: "Saskatchewan", max: "1× one month's rent", petDeposit: "Included in 1× cap", returnDeadline: "7 days after tenancy end", interest: "No" },
  { province: "Nova Scotia", max: "0.5× one month's rent", petDeposit: "Not permitted (no separate pet deposit allowed)", returnDeadline: "10 days after tenancy end", interest: "Yes — rate via provincial Security Deposit Interest Calculator" },
  { province: "New Brunswick", max: "1× one month's rent", petDeposit: "Included in 1× cap", returnDeadline: "7 days after tenancy end", interest: "No" },
  { province: "PEI", max: "1× one month's rent", petDeposit: "Included in overall cap", returnDeadline: "10 days after tenancy end", interest: "Yes — at prescribed rate" },
  { province: "Newfoundland & Labrador", max: "75% of one month's rent", petDeposit: "No specific provision", returnDeadline: "15 days after tenancy end", interest: "No" },
];

export default function SecurityDepositRulesCanadaPage() {
  return (
    <>
      <ArticleSchema
        headline="Security Deposit Rules by Province: What Can Your Landlord Actually Charge?"
        description="Deposit rules vary dramatically across Canada — from no deposits at all in Quebec to one month's rent in Alberta. Here's a province-by-province breakdown of what landlords can and cannot charge."
        url="https://leaseplain.com/blog/security-deposit-rules-canada"
        datePublished="2026-03-01"
        dateModified="2026-03-01"
        keywords={[
          "security deposit Canada",
          "security deposit rules by province",
          "how much security deposit can landlord charge",
        ]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Security Deposit Rules by Province", href: "https://leaseplain.com/blog/security-deposit-rules-canada" },
      ]} />
      <div className="flex flex-col min-h-full">
        <Navbar />

        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
                <Link href="/" className="hover:underline">Home</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <Link href="/blog" className="hover:underline">Blog</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>Security Deposit Rules by Province</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-200">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Canada
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  March 1, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Security Deposit Rules by Province: What Can Your Landlord Actually Charge?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Security deposit rules across Canada vary more than most renters realize. Quebec
                prohibits them entirely. Ontario only allows last month&apos;s rent. Alberta permits
                up to one month. Here is exactly what landlords can legally charge in every province
                — and what happens if they charge more.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Why Deposit Rules Differ So Much</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    In Canada, residential tenancy law is a provincial matter. There is no federal law
                    governing security deposits, which means each province has set its own rules about
                    how much landlords can collect, what conditions allow them to keep it, and how
                    quickly they must return it when the tenancy ends.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    The most dramatic example is Quebec, where collecting any form of deposit is
                    outright illegal under the Civil Code of Quebec. Ontario goes a different route:
                    landlords can only collect a &quot;last month&apos;s rent&quot; deposit — not a
                    damage deposit — and that money must be applied to your final month of rent. Neither
                    province allows landlords to hold money specifically to cover potential damage.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Deposit Rules at a Glance</h2>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 text-slate-600 text-xs font-semibold uppercase tracking-wide">
                        <tr>
                          <th className="text-left px-4 py-3">Province</th>
                          <th className="text-left px-4 py-3">Max Deposit</th>
                          <th className="text-left px-4 py-3">Return Deadline</th>
                          <th className="text-left px-4 py-3">Interest</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {provinceRules.map((r) => (
                          <tr key={r.province} className="hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 font-medium text-slate-900">{r.province}</td>
                            <td className="px-4 py-3 text-slate-700">{r.max}</td>
                            <td className="px-4 py-3 text-slate-600">{r.returnDeadline}</td>
                            <td className="px-4 py-3 text-slate-600">{r.interest}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What Landlords Cannot Charge For</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Even in provinces that allow security deposits, there are strict limits on what
                    landlords can deduct when returning the money. Generally, landlords can only
                    deduct for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>Damage beyond normal wear and tear</li>
                    <li>Unpaid rent (in provinces where deposits can cover this)</li>
                    <li>Cleaning costs if the unit was left significantly dirtier than when rented</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    Normal wear and tear — small nail holes, minor carpet wear, faded paint — cannot be
                    deducted from a deposit. A landlord who claims excessive deductions must typically
                    provide receipts and documentation. Without that, you can challenge the deduction
                    through your province&apos;s tenancy tribunal.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If Your Landlord Overcharges or Doesn&apos;t Return It</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    If a landlord collects a deposit above the provincial limit, or refuses to return
                    it after the deadline, you have options:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li><strong>Ontario:</strong> File a T1 application with the LTB for the return of an illegal charge.</li>
                    <li><strong>BC:</strong> Apply to the Residential Tenancy Branch for dispute resolution. The RTB can order a landlord to return the deposit.</li>
                    <li><strong>Alberta:</strong> Apply to the Residential Tenancy Dispute Resolution Service (RTDRS).</li>
                    <li><strong>Quebec:</strong> Report the collection of any deposit to the Tribunal administratif du logement (TAL) — it is illegal for a landlord to accept one.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    Use our{" "}
                    <Link href="/tools/deposit-calculator" className="text-blue-600 hover:underline">
                      Security Deposit Return Calculator
                    </Link>{" "}
                    to find out exactly how much you should get back and what your province&apos;s
                    deadline is.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={[
                    {
                      q: "Can a landlord charge a damage deposit in Ontario?",
                      a: "No. Ontario landlords can only collect a last month's rent deposit. A separate damage deposit is illegal under the Residential Tenancies Act. If charged, it must be returned.",
                    },
                    {
                      q: "Can a Quebec landlord charge any deposit at all?",
                      a: "No. Quebec law prohibits landlords from collecting security deposits, damage deposits, pet deposits, or any other form of advance payment beyond the first month's rent.",
                    },
                    {
                      q: "What happens if a landlord doesn't return my deposit on time?",
                      a: "You can apply to your provincial tenancy tribunal. In Ontario, file a T1 with the LTB. In BC, apply to the RTB. In Alberta, use the RTDRS. Penalties for late return vary by province.",
                    },
                    {
                      q: "Does my security deposit earn interest?",
                      a: "In Ontario, BC, Manitoba, PEI, Alberta, and Nova Scotia, deposits must be held and returned with interest. In Saskatchewan, New Brunswick, and Newfoundland, no interest is required.",
                    },
                    {
                      q: "Can a landlord use my deposit to cover unpaid rent in BC?",
                      a: "No. In BC, a security deposit cannot be applied to unpaid rent — it can only be used for damage claims. Unpaid rent must be pursued separately through the RTB.",
                    },
                  ]} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Calculate your deposit return</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Find out exactly how much deposit you&apos;re owed back and your landlord&apos;s
                    legal deadline by province.
                  </p>
                  <Link
                    href="/tools/deposit-calculator"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Deposit Return Calculator
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Move-In Cost Calculator", href: "/tools/move-in-cost-calculator" },
                      { label: "Tenant Rights Lookup", href: "/tools/tenant-rights-lookup" },
                      { label: "Lease Red Flags", href: "/resources/lease-red-flags" },
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
    </>
  );
}
