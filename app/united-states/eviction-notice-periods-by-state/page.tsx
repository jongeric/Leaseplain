import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewedByline from "@/components/ReviewedByline";
import { Scale, ChevronRight } from "lucide-react";

export const dynamic = "force-static";

// HELD NOINDEX until a licensed US legal review is complete (per launch plan).
export const metadata: Metadata = {
  title: "Eviction Notice Periods by State (US) | LeasePlain",
  description:
    "How much notice a landlord must give before eviction — for non-payment and for ending a month-to-month tenancy — in California, New York, Texas, Florida, and Illinois, plus whether 'just cause' is required.",
  alternates: { canonical: "https://leaseplain.com/united-states/eviction-notice-periods-by-state" },
  openGraph: {
    title: "Eviction Notice Periods by State (US) | LeasePlain",
    description: "Non-payment notice, month-to-month termination notice, and just-cause rules for key US states.",
    url: "https://leaseplain.com/united-states/eviction-notice-periods-by-state",
    type: "article",
  },
  keywords: ["eviction notice period by state", "how much notice to evict", "pay or quit notice days", "month to month termination notice", "just cause eviction states"],
};

// Verified against state statutes (Oct 2026). Pending licensed US legal review.
const ROWS: Array<{ state: string; href?: string; nonpay: string; termination: string; justCause: string; note: string }> = [
  { state: "California", href: "/united-states/california", nonpay: "3 days (pay or quit)", termination: "30 days (<1 yr) / 60 days (≥1 yr)", justCause: "Yes (AB 1482, after 12 mo.)", note: "Covered tenants of 12+ months can only be removed for 'just cause'; no-fault reasons require relocation assistance. 3-day notice excludes weekends/holidays (CCP § 1161)." },
  { state: "New York", href: "/united-states/new-york", nonpay: "14 days", termination: "30 / 60 / 90 days by tenancy length", justCause: "Statewide: no (some local good-cause)", note: "HSTPA set termination notice at 30 days (<1 yr), 60 days (1–2 yr), and 90 days (2+ yr). Non-payment requires a 14-day demand (RPAPL § 711)." },
  { state: "Texas", href: "/united-states/texas", nonpay: "3 days to vacate", termination: "30 days (month-to-month)", justCause: "No", note: "A written notice to vacate (often 3 days unless the lease says otherwise) precedes a forcible-detainer suit. No just-cause requirement (Tex. Prop. Code § 24.005)." },
  { state: "Florida", href: "/united-states/florida", nonpay: "3 days (excl. weekends/holidays)", termination: "30 days (month-to-month)", justCause: "No", note: "A 2023 law raised month-to-month termination notice from 15 to 30 days. Non-payment is a 3-day notice (Fla. Stat. § 83.56)." },
  { state: "Illinois", href: "/united-states/illinois", nonpay: "5 days", termination: "30 days (month-to-month)", justCause: "Statewide: no (Chicago adds protections)", note: "5-day notice for non-payment, 10-day for a lease violation, then a court case under the Forcible Entry and Detainer Act. Chicago's RLTO adds cure rights." },
  { state: "Washington", href: "/united-states/washington", nonpay: "14 days (pay or vacate)", termination: "Just cause — no simple non-renewal", justCause: "Yes (RCW 59.18.650)", note: "Non-payment uses a 14-day pay-or-vacate notice, and just cause is required to end most tenancies — a landlord can't end a periodic tenancy just because a term lapsed." },
  { state: "Georgia", href: "/united-states/georgia", nonpay: "Demand for possession (no fixed days)", termination: "60 days (landlord) / 30 (tenant)", justCause: "No", note: "Eviction is a court 'dispossessory' action; Georgia sets no fixed statutory waiting period for non-payment before filing." },
  { state: "Pennsylvania", href: "/united-states/pennsylvania", nonpay: "10 days (often waived by lease)", termination: "15 days (≤1 yr) / 30 days (>1 yr)", justCause: "No", note: "A 10-day non-payment notice is standard, but many leases waive it and courts enforce the waiver. Only a court can order the eviction." },
];

const faqItems = [
  {
    q: "How much notice does a landlord have to give before eviction?",
    a: "It depends on the state and the reason. For non-payment of rent the notice is short — 3 days in California, Texas, and Florida; 5 days in Illinois; 14 days in New York. Ending a month-to-month tenancy requires more notice, often 30–90 days depending on how long you've lived there.",
  },
  {
    q: "What is a 'just cause' eviction?",
    a: "A just-cause rule means a landlord needs a specific, legally allowed reason to end a tenancy (not simply 'no reason'). California requires just cause for tenants of 12+ months under AB 1482. New York, Texas, Florida, and Illinois have no statewide just-cause requirement, though some cities (like parts of New York and Chicago) add protections.",
  },
  {
    q: "Is an eviction notice the same as an eviction?",
    a: "No. A notice is only the first step. If you don't move or fix the problem, the landlord must file a court case and win before you can be removed — and only a sheriff or marshal can carry out an eviction. A landlord can never lock you out or remove your belongings on their own.",
  },
  {
    q: "Can I stop an eviction by paying the rent?",
    a: "Often, yes, during the notice window. A 'pay or quit' notice gives you a set number of days to pay and stay. The right to cure can be limited (some states cap how often you can use it), so pay or respond promptly and keep proof.",
  },
];

export default function EvictionNoticePeriodsByStatePage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Eviction Notice Periods by State (United States)",
    description: "Non-payment notice, month-to-month termination notice, and just-cause status for key US states.",
    url: "https://leaseplain.com/united-states/eviction-notice-periods-by-state",
    creator: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
    keywords: ["eviction notice", "United States", "by state", "pay or quit"],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <div className="flex flex-col min-h-full">
        <Navbar />
        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <BreadcrumbNav className="mb-4" items={[{ label: "Home", href: "/" }, { label: "United States", href: "/united-states" }, { label: "Eviction Notice Periods by State" }]} />
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">Eviction Notice Periods by State</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                How much warning does a landlord have to give before eviction? It depends on the state and
                the reason — from 3 days for non-payment to 90 days to end a long tenancy. Here are
                California, New York, Texas, Florida, and Illinois in one table.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto space-y-10">
              <ReviewedByline updated="October 2026" jurisdiction="state eviction statutes" />

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse bg-white text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-4 py-3 font-bold text-slate-700">State</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Non-payment notice</th>
                      <th className="px-4 py-3 font-bold text-slate-700">End month-to-month</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Just cause?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((r) => (
                      <tr key={r.state} className="border-b border-slate-100 last:border-0 align-top">
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          {r.href ? <Link href={r.href} className="text-blue-600 hover:underline">{r.state}</Link> : r.state}
                        </td>
                        <td className="px-4 py-3"><span className="font-bold text-indigo-700">{r.nonpay}</span></td>
                        <td className="px-4 py-3 text-slate-700">{r.termination}</td>
                        <td className="px-4 py-3 text-slate-700">{r.justCause}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-900">Notes by state</h2>
                <ul className="space-y-2">
                  {ROWS.map((r) => (
                    <li key={r.state} className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-slate-900">{r.state}:</strong> {r.note}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="prose-none space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">The big picture</h2>
                <p className="text-slate-700 leading-relaxed">
                  Two numbers matter: the <strong>non-payment notice</strong> (short — days) and the{" "}
                  <strong>termination notice</strong> to end a month-to-month tenancy (longer — often 30+
                  days, scaling with how long you&apos;ve lived there). The bigger divide is{" "}
                  <strong>just cause</strong>: California requires a legally valid reason to remove a
                  long-term tenant; most states don&apos;t. Everywhere, a notice is not an eviction — only a
                  court can order one.
                </p>
                <p className="text-sm text-slate-400">
                  Last reviewed: October 2026. Eviction rules change — confirm with the cited statute or your
                  state court/housing agency before relying on it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6">
                <h2 className="text-sm font-bold text-slate-900 mb-3">Related state comparisons</h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {[
                    { label: "Rent control by state", href: "/united-states/rent-control-by-state" },
                    { label: "Security deposit limits by state", href: "/united-states/security-deposit-limits-by-state" },
                    { label: "Landlord entry rules by state", href: "/united-states/landlord-entry-rules-by-state" },
                    { label: "California tenant rights", href: "/united-states/california" },
                    { label: "Texas tenant rights", href: "/united-states/texas" },
                    { label: "United States overview", href: "/united-states" },
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
                <strong>General information, not legal advice.</strong> Eviction rules vary by state, city,
                and lease. Confirm with the cited statute or your state court/housing agency.
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
