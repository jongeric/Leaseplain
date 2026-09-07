import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewedByline from "@/components/ReviewedByline";
import { Scale, ChevronRight, Clock } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "LTB Application Fees and Wait Times (Ontario) | LeasePlain",
  description:
    "What it costs to file with Ontario's Landlord and Tenant Board and how long each application takes. Current filing fees for T1, T2, T6, L1, L2 and more, plus realistic 2026 timelines and fee-waiver info.",
  alternates: { canonical: "https://leaseplain.com/ltb-fees-timeline" },
  openGraph: {
    title: "LTB Application Fees and Wait Times (Ontario) | LeasePlain",
    description:
      "Current Ontario LTB filing fees and realistic wait times for tenant and landlord applications, plus fee-waiver info.",
    url: "https://leaseplain.com/ltb-fees-timeline",
    type: "article",
  },
  keywords: [
    "ltb application fee ontario",
    "how much does it cost to file with the ltb",
    "ltb wait times 2026",
    "t2 application fee ontario",
    "ltb fee waiver",
  ],
};

// Ontario LTB filing fees. Fees are set by regulation and can change; these
// reflect the standard tenant and landlord application fees. Always confirm the
// current amount on Tribunals Ontario before filing.
const FEES: Array<{ code: string; name: string; who: string; fee: string; slug?: string }> = [
  { code: "T1", name: "Recover money the landlord owes (e.g. illegal charges, deposit)", who: "Tenant", fee: "$53" },
  { code: "T2", name: "About tenant rights (harassment, illegal entry, interference)", who: "Tenant", fee: "$53", slug: "t2" },
  { code: "T5", name: "Landlord gave a notice in bad faith", who: "Tenant", fee: "$53", slug: "t5" },
  { code: "T6", name: "Maintenance and repairs", who: "Tenant", fee: "$53" },
  { code: "T3", name: "Rent reduction (e.g. reduced services)", who: "Tenant", fee: "$53" },
  { code: "L1", name: "Evict for non-payment and collect rent", who: "Landlord", fee: "$186" },
  { code: "L2", name: "Evict for other reasons / end tenancy", who: "Landlord", fee: "$186" },
];

const faqItems = [
  {
    q: "How much does it cost to file a tenant application with the LTB?",
    a: "Most tenant applications (T1, T2, T3, T5, T6) cost $53 to file. Landlord applications like L1 and L2 cost $186. Fees are set by regulation and can change, so confirm the current amount on Tribunals Ontario before you file.",
  },
  {
    q: "Can I get the LTB fee waived if I can't afford it?",
    a: "Yes. Ontario offers a fee waiver for people with low income. You submit a fee waiver request form with your application; if approved, you don't pay the filing fee. This helps ensure cost isn't a barrier to enforcing your rights.",
  },
  {
    q: "How long does an LTB application take in 2026?",
    a: "It varies widely by application type and region. Tenant maintenance and rights applications (T2/T6) have often taken many months to reach a hearing, while some landlord non-payment (L1) matters move faster. Expect several months from filing to a hearing for most tenant applications.",
  },
  {
    q: "Do I have to pay to respond to my landlord's application?",
    a: "No. There's no fee to respond to an application filed against you. You only pay when you are the one filing an application. Always attend or respond to a hearing you're named in, even if you didn't file it.",
  },
];

export default function LtbFeesTimelinePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://leaseplain.com" },
      { "@type": "ListItem", position: 2, name: "LTB Fees & Timeline", item: "https://leaseplain.com/ltb-fees-timeline" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <div className="flex flex-col min-h-full">
        <Navbar />
        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <BreadcrumbNav className="mb-4" items={[{ label: "Home", href: "/" }, { label: "LTB Fees & Timeline" }]} />
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">LTB Application Fees &amp; Wait Times</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Two of the most common questions before going to Ontario&apos;s Landlord and Tenant Board:
                what does it cost, and how long will it take? Here are the current filing fees, realistic
                timelines, and how to get the fee waived if money is tight.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-4xl mx-auto space-y-10">
              <ReviewedByline updated="September 2026" />

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Filing fees by application</h2>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left border-collapse bg-white">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="px-5 py-3 text-sm font-bold text-slate-700">Form</th>
                        <th className="px-5 py-3 text-sm font-bold text-slate-700">What it&apos;s for</th>
                        <th className="px-5 py-3 text-sm font-bold text-slate-700">Filed by</th>
                        <th className="px-5 py-3 text-sm font-bold text-slate-700">Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {FEES.map((row) => (
                        <tr key={row.code} className="border-b border-slate-100 last:border-0">
                          <td className="px-5 py-3 font-semibold text-slate-900">
                            {row.slug ? (
                              <Link href={`/ltb-forms/${row.slug}`} className="text-blue-600 hover:underline">{row.code}</Link>
                            ) : row.code}
                          </td>
                          <td className="px-5 py-3 text-sm text-slate-600">{row.name}</td>
                          <td className="px-5 py-3 text-sm text-slate-600">{row.who}</td>
                          <td className="px-5 py-3 font-bold text-indigo-700">{row.fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  Fees are set by regulation and can change. Confirm the current amount on Tribunals Ontario
                  before filing. Responding to an application filed against you is always free.
                </p>
              </div>

              <div className="prose-none space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">How long it takes</h2>
                <p className="text-slate-700 leading-relaxed">
                  Timelines depend heavily on the application type and your region. In recent years the LTB
                  has carried a significant backlog, and tenant applications about maintenance (T6) or
                  tenant rights (T2) have often taken many months to reach a hearing. Landlord
                  non-payment applications (L1) have sometimes moved more quickly. Plan for{" "}
                  <strong>several months</strong> from filing to hearing for most tenant matters, and keep
                  every document and communication organized in the meantime.
                </p>
                <div className="rounded-xl bg-blue-50 border border-blue-100 p-5 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-blue-800">
                    For a closer look at current delays, see our{" "}
                    <Link href="/blog/ltb-wait-times-2026" className="font-semibold hover:underline">LTB wait times guide for 2026</Link>.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-slate-900">Can&apos;t afford the fee?</h2>
                <p className="text-slate-700 leading-relaxed">
                  Ontario has a <strong>fee waiver</strong> for people with low income. You submit a fee
                  waiver request with your application, and if approved you pay nothing to file. Cost should
                  never stop you from enforcing your rights — ask the LTB or a tenant clinic about the
                  waiver if you need it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6">
                <h2 className="text-sm font-bold text-slate-900 mb-3">Related</h2>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Every LTB form explained", href: "/ltb-forms" },
                    { label: "LTB wait times in 2026", href: "/blog/ltb-wait-times-2026" },
                    { label: "T2 — Application About Tenant Rights", href: "/ltb-forms/t2" },
                    { label: "Find a tenant lawyer or clinic", href: "/tenant-lawyer" },
                  ].map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                        <ChevronRight className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <strong>Not legal advice.</strong> Fees and timelines change and vary by region. Confirm
                current details with Tribunals Ontario or a tenant legal clinic before you file.
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
