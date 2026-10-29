import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewedByline from "@/components/ReviewedByline";
import { PiggyBank, ChevronRight } from "lucide-react";

export const dynamic = "force-static";

// HELD NOINDEX until a licensed US legal review is complete (per launch plan).
export const metadata: Metadata = {
  title: "Security Deposit Limits by State (US) | LeasePlain",
  description:
    "How much a landlord can charge for a security deposit, and how fast they must return it, in California, New York, Texas, Florida, and Illinois — with the governing statute for each.",
  alternates: { canonical: "https://leaseplain.com/united-states/security-deposit-limits-by-state" },
  openGraph: {
    title: "Security Deposit Limits by State (US) | LeasePlain",
    description:
      "Maximum deposit, return deadline, and the governing statute for key US states in one comparison table.",
    url: "https://leaseplain.com/united-states/security-deposit-limits-by-state",
    type: "article",
  },
  keywords: [
    "security deposit limit by state",
    "how much can a landlord charge for a deposit",
    "security deposit return deadline by state",
    "california security deposit limit",
    "new york security deposit law",
  ],
};

// Verified against state statutes (Oct 2026). Pending licensed US legal review.
const ROWS: Array<{
  state: string;
  href?: string;
  max: string;
  deadline: string;
  statute: string;
  note: string;
}> = [
  { state: "California", href: "/united-states/california", max: "1 month's rent (2 months for qualifying small landlords)", deadline: "21 days", statute: "Cal. Civ. Code § 1950.5 / AB 12", note: "AB 12 (July 1, 2024) lowered the cap to one month for most landlords. The small-landlord exception covers natural persons who own ≤2 properties / ≤4 units." },
  { state: "New York", href: "/united-states/new-york", max: "1 month's rent", deadline: "14 days", statute: "N.Y. Gen. Oblig. Law § 7-108", note: "Capped at one month since the 2019 HSTPA. Miss the 14-day itemized-statement deadline and the landlord generally forfeits the right to keep any of it." },
  { state: "Texas", href: "/united-states/texas", max: "No statutory cap", deadline: "30 days", statute: "Tex. Prop. Code § 92.101–92.109", note: "No limit on the amount, but a landlord who keeps a deposit in bad faith can owe up to three times the deposit plus $100 and attorney's fees." },
  { state: "Florida", href: "/united-states/florida", max: "No statutory cap", deadline: "15 days (no claim) / 30 days (with claim)", statute: "Fla. Stat. § 83.49", note: "No cap. If the landlord intends to keep any of it, they must send written notice within 30 days or forfeit the claim. A 2023 law also allows an optional monthly fee in lieu of a deposit." },
  { state: "Illinois", href: "/united-states/illinois", max: "No statewide cap (Chicago: 1 month)", deadline: "30–45 days", statute: "765 ILCS 710 / 765 ILCS 715; Chicago RLTO", note: "No state cap. Landlords with 5+ units must give an itemized statement within 30 days and refund within 45. Chicago's RLTO adds interest and stricter deadlines." },
  { state: "Washington", href: "/united-states/washington", max: "No statutory cap (Seattle: 1 month)", deadline: "30 days", statute: "RCW 59.18.260–.280", note: "No state dollar cap, but a written move-in condition checklist is required. Seattle caps deposits at one month's rent." },
  { state: "Georgia", href: "/united-states/georgia", max: "2 months' rent", deadline: "30 days", statute: "O.C.G.A. § 44-7; HB 404 (2024)", note: "The 2024 Safe at Home Act set Georgia's first deposit cap at two months' rent and requires an itemized refund within 30 days." },
  { state: "Pennsylvania", href: "/united-states/pennsylvania", max: "2 months (year 1) / 1 month (after)", deadline: "30 days", statute: "68 Pa. Stat. § 250.511a–b", note: "Tiered cap, with interest after five years. Missing the 30-day itemized refund exposes the landlord to double damages." },
];

const faqItems = [
  {
    q: "Which states cap how much a landlord can charge for a deposit?",
    a: "Among the largest rental markets, California caps deposits at one month's rent (two for small landlords) and New York caps them at one month. Texas, Florida, and Illinois have no statewide cap — though cities like Chicago set their own limit (one month).",
  },
  {
    q: "How fast must a landlord return a security deposit?",
    a: "Deadlines vary by state: 14 days in New York, 21 days in California, 30 days in Texas, 15 days (or 30 with a claim) in Florida, and 30–45 days in Illinois. Many states penalize landlords who miss the deadline — Texas allows up to triple damages for bad faith.",
  },
  {
    q: "Can a landlord keep my deposit for normal wear and tear?",
    a: "No. Across these states a landlord can only deduct for unpaid rent and damage beyond normal wear and tear, and usually must provide an itemized statement. Faded paint, worn carpet, and minor marks are normal wear and tear, not damage.",
  },
  {
    q: "What happens if a landlord misses the deadline?",
    a: "Penalties depend on the state. In New York, missing the 14-day itemized-statement deadline generally means the landlord forfeits the right to keep any of the deposit. Texas allows up to three times the deposit plus $100 and attorney's fees for bad-faith retention. Illinois allows double damages.",
  },
];

export default function SecurityDepositLimitsByStatePage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Security Deposit Limits by State (United States)",
    description:
      "Maximum security deposit, return deadline, and governing statute for key US states.",
    url: "https://leaseplain.com/united-states/security-deposit-limits-by-state",
    creator: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
    keywords: ["security deposit", "United States", "by state", "deposit limit"],
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
              <BreadcrumbNav className="mb-4" items={[{ label: "Home", href: "/" }, { label: "United States", href: "/united-states" }, { label: "Security Deposit Limits by State" }]} />
              <div className="flex items-center gap-3 mb-4">
                <PiggyBank className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">Security Deposit Limits by State</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                How much can a US landlord charge for a security deposit — and how fast must they give
                it back? It varies sharply by state. Here are California, New York, Texas, Florida, and
                Illinois in one table, with the governing statute for each.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto space-y-10">
              <ReviewedByline updated="October 2026" jurisdiction="state security-deposit statutes" />

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse bg-white text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-4 py-3 font-bold text-slate-700">State</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Maximum deposit</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Return deadline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((r) => (
                      <tr key={r.state} className="border-b border-slate-100 last:border-0 align-top">
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          {r.href ? <Link href={r.href} className="text-blue-600 hover:underline">{r.state}</Link> : r.state}
                        </td>
                        <td className="px-4 py-3 text-slate-700">{r.max}</td>
                        <td className="px-4 py-3 text-slate-700">{r.deadline}</td>
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
                      <strong className="text-slate-900">{r.state}:</strong> {r.note}{" "}
                      <span className="text-slate-400">({r.statute})</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="prose-none space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">The big picture</h2>
                <p className="text-slate-700 leading-relaxed">
                  There&apos;s no national rule — deposit limits are set state by state (and sometimes
                  city by city). <strong>California and New York cap deposits at one month&apos;s rent</strong>;{" "}
                  <strong>Texas, Florida, and Illinois have no statewide cap</strong>, though local
                  ordinances like Chicago&apos;s may. What&apos;s consistent everywhere: landlords can only
                  deduct for unpaid rent and real damage, must usually itemize, and face penalties for
                  missing the return deadline.
                </p>
                <p className="text-sm text-slate-400">
                  Last reviewed: October 2026. State laws change — confirm the current figure with the
                  cited statute or your state&apos;s housing agency before relying on it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6">
                <h2 className="text-sm font-bold text-slate-900 mb-3">State tenant-rights guides</h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {[
                    { label: "California tenant rights", href: "/united-states/california" },
                    { label: "New York tenant rights", href: "/united-states/new-york" },
                    { label: "Texas tenant rights", href: "/united-states/texas" },
                    { label: "Florida tenant rights", href: "/united-states/florida" },
                    { label: "Illinois tenant rights", href: "/united-states/illinois" },
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
                <strong>General information, not legal advice.</strong> Security-deposit rules vary by
                state, city, and lease. Confirm with the cited statute or your state housing agency.
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
