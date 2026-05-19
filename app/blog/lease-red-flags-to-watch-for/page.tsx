import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "7 Lease Red Flags Every Canadian Renter Should Know | LeasePlain",
  description:
    "Some lease clauses look official but are actually unenforceable — or even illegal under Canadian provincial law. Here are 7 red flags to spot before you sign.",
  alternates: { canonical: "https://leaseplain.com/blog/lease-red-flags-to-watch-for" },
  openGraph: {
    title: "7 Lease Red Flags Every Canadian Renter Should Know | LeasePlain",
    description:
      "Clauses waiving LTB rights, unlimited rent increases, and illegal fees all appear in real Canadian leases. Know what to look for before you sign.",
    url: "https://leaseplain.com/blog/lease-red-flags-to-watch-for",
  },
  keywords: [
    "lease red flags Canada",
    "illegal lease clauses Ontario",
    "what to look for in a lease",
    "unenforceable lease clause",
    "lease before signing checklist",
  ],
};

const redFlags = [
  {
    number: 1,
    title: "Waiving Your Right to the LTB or RTB",
    risk: "High",
    example: '"The tenant waives the right to make any application to the Landlord and Tenant Board."',
    explanation:
      "This clause is completely void in Ontario. You cannot contractually waive your statutory rights under the Residential Tenancies Act. The same applies in BC (RTB) and every other province — your right to use the provincial dispute resolution body cannot be signed away.",
    provinces: "All provinces",
  },
  {
    number: 2,
    title: "Rent Can Be Increased at Any Time or at Landlord's Discretion",
    risk: "High",
    example: '"The landlord may increase the monthly rent at any time upon 30 days notice."',
    explanation:
      "In Ontario, rent can only increase once per 12 months with 90 days written notice, and must comply with the annual guideline for covered units. In BC, the cap and 3-month notice apply. Any clause allowing more frequent or uncapped increases for covered units is unenforceable.",
    provinces: "Ontario, BC, Manitoba, Nova Scotia, Quebec",
  },
  {
    number: 3,
    title: "Illegal or Excessive Deposit",
    risk: "High",
    example: '"A security damage deposit of $3,000 (two months rent) is required."',
    explanation:
      "Ontario only allows last month's rent. BC caps deposits at half a month's rent. Alberta caps at one month. Quebec bans all deposits. If a lease asks for more than the provincial limit, the excess is illegal and must be returned — you can file with your tribunal to recover it.",
    provinces: "All provinces",
  },
  {
    number: 4,
    title: "Landlord Can Enter Without Notice for Inspections",
    risk: "High",
    example: '"The landlord may enter the unit at any time to conduct periodic inspections."',
    explanation:
      "In every Canadian province, a landlord must give at least 24 hours written notice before entering for non-emergency reasons, and entry must be at a reasonable time. A clause allowing unrestricted entry violates the law and is unenforceable.",
    provinces: "All provinces",
  },
  {
    number: 5,
    title: "Tenant Is Responsible for All Repairs",
    risk: "High",
    example: '"The tenant is responsible for all repairs to the unit during the tenancy."',
    explanation:
      "Landlords have a non-waivable legal obligation to maintain the unit in a good state of repair. A clause shifting this responsibility to the tenant contradicts the Residential Tenancies Act (or equivalent) in every province and is void. Tenants are only responsible for damage they cause.",
    provinces: "All provinces",
  },
  {
    number: 6,
    title: "Automatic Lease Renewal Without Notice",
    risk: "Medium",
    example: '"If the tenant does not give 90 days notice of non-renewal, the lease automatically renews for a further one-year term."',
    explanation:
      "While lease renewals are legal, the required notice periods in this type of clause often contradict provincial law. In Ontario, a fixed-term lease converts to month-to-month if neither party acts — a landlord cannot unilaterally renew it for another fixed term without your signature.",
    provinces: "Ontario, BC",
  },
  {
    number: 7,
    title: "Fees for Late Rent (Above Legal Limit or Banned Entirely)",
    risk: "Medium",
    example: '"A late payment fee of $150 will be charged for any rent not received by the 5th of the month."',
    explanation:
      "Ontario bans late fees entirely — any clause charging them is void. Alberta allows reasonable late fees if specified in the lease. BC prohibits fees that are not permitted by the Residential Tenancy Act. Check your province's rules before accepting any late-fee clause.",
    provinces: "Ontario (banned), BC (banned), Alberta (capped)",
  },
];

export default function LeaseRedFlagsPage() {
  return (
    <>
      <ArticleSchema
        headline="7 Lease Red Flags Every Canadian Renter Should Know Before Signing"
        description="Some lease clauses look official but are actually unenforceable — or even illegal under Canadian provincial law. Here are 7 red flags to spot before you sign."
        url="https://leaseplain.com/blog/lease-red-flags-to-watch-for"
        datePublished="2026-03-15"
        dateModified="2026-03-15"
        keywords={[
          "lease red flags Canada",
          "illegal lease clauses Ontario",
          "unenforceable lease clause",
        ]}
      />
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
                <span>7 Lease Red Flags</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-amber-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Lease Tips
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  March 15, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  8 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                7 Lease Red Flags Every Canadian Renter Should Know Before Signing
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Some lease clauses look official but are actually unenforceable — or even illegal —
                under Canadian provincial tenancy law. Knowing these red flags before you sign could
                save you from a landlord who tries to enforce a clause that was never valid.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">

                <div>
                  <p className="text-slate-700 leading-relaxed">
                    In Canada, a lease clause that conflicts with provincial tenancy legislation is
                    automatically void — even if both parties signed it. But you still need to know
                    it&apos;s there. A landlord who doesn&apos;t know (or doesn&apos;t care) that a
                    clause is illegal may try to enforce it anyway, especially against tenants who
                    aren&apos;t aware of their rights.
                  </p>
                </div>

                <div className="space-y-6">
                  {redFlags.map((flag) => (
                    <div
                      key={flag.number}
                      className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-red-50 text-red-600 text-sm font-bold flex items-center justify-center flex-shrink-0">
                            {flag.number}
                          </span>
                          <h2 className="font-bold text-slate-900 text-lg leading-snug">{flag.title}</h2>
                        </div>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border flex-shrink-0 ml-3 ${
                          flag.risk === "High"
                            ? "bg-red-50 text-red-700 border-red-100"
                            : "bg-amber-50 text-amber-700 border-amber-100"
                        }`}>
                          <AlertTriangle className="w-3 h-3 inline mr-1" aria-hidden="true" />
                          {flag.risk} Risk
                        </span>
                      </div>
                      <div className="bg-slate-50 rounded-xl px-4 py-3 mb-3 border-l-4 border-slate-300">
                        <p className="text-sm text-slate-600 italic">{flag.example}</p>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed mb-2">{flag.explanation}</p>
                      <p className="text-xs text-slate-500 font-medium">Applies in: {flag.provinces}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <h3 className="font-semibold text-blue-900 mb-2">Scan Your Lease Automatically</h3>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Use LeasePlain&apos;s{" "}
                    <Link href="/tools/clause-checker" className="underline hover:text-blue-600">
                      Clause Red Flag Scanner
                    </Link>{" "}
                    to paste any clause and instantly check it against 19 common red flag patterns,
                    or{" "}
                    <Link href="/upload" className="underline hover:text-blue-600">
                      upload your full lease
                    </Link>{" "}
                    for a complete AI analysis against your province&apos;s tenancy law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={[
                    {
                      q: "What makes a lease clause illegal in Canada?",
                      a: "A clause is illegal if it conflicts with your province's residential tenancy legislation. The Residential Tenancies Act (or equivalent) in each province sets minimum rights that cannot be waived. Any clause that takes away those rights — even if signed — is void.",
                    },
                    {
                      q: "Can I still be forced to follow an illegal clause?",
                      a: "A landlord cannot legally enforce a void clause, but they may try to. If a landlord threatens action based on an illegal clause, you can refer the matter to your provincial tenancy tribunal (LTB in Ontario, RTB in BC, etc.) which can issue an order.",
                    },
                    {
                      q: "Should I still sign a lease with red flag clauses?",
                      a: "If the red flag clauses are void under provincial law, you are not bound by them even if you sign. However, it is a warning sign about the landlord's approach. Try to negotiate removal of the clauses, or at minimum document that you signed under protest.",
                    },
                    {
                      q: "Are late fees legal in Ontario?",
                      a: "No. Ontario's Residential Tenancies Act prohibits landlords from charging late payment fees. Any lease clause imposing them is void and unenforceable.",
                    },
                    {
                      q: "How can I check if my lease has red flags?",
                      a: "Use LeasePlain's Clause Red Flag Scanner to paste individual clauses, or upload your entire lease to the AI analyzer for a full review flagging potential violations of your provincial tenant rights.",
                    },
                  ]} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Scan a clause now</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Paste any lease clause into our free scanner to check it for 19 common red flag
                    patterns — instantly, no sign-up.
                  </p>
                  <Link
                    href="/tools/clause-checker"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Clause Red Flag Scanner
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Lease Red Flags Guide", href: "/resources/lease-red-flags" },
                      { label: "What to Check Before Signing", href: "/resources/check-before-signing-lease" },
                      { label: "Analyze My Lease (AI)", href: "/upload" },
                      { label: "Tenant Rights by Province", href: "/tools/tenant-rights-lookup" },
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
