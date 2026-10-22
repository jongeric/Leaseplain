import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewedByline from "@/components/ReviewedByline";
import { DoorOpen, ChevronRight } from "lucide-react";

export const dynamic = "force-static";

// HELD NOINDEX until a licensed US legal review is complete (per launch plan).
export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Landlord Entry Rules by State (US) | LeasePlain",
  description:
    "How much notice a landlord must give before entering your rental — California, New York, Texas, Florida, and Illinois. Some states set a strict hours rule; others rely on your lease.",
  alternates: { canonical: "https://leaseplain.com/united-states/landlord-entry-rules-by-state" },
  openGraph: {
    title: "Landlord Entry Rules by State (US) | LeasePlain",
    description: "Notice required before a landlord can enter, for key US states in one table.",
    url: "https://leaseplain.com/united-states/landlord-entry-rules-by-state",
    type: "article",
  },
  keywords: ["landlord entry notice by state", "can my landlord enter without notice", "24 hour notice to enter", "landlord right of entry", "tenant privacy rights"],
};

// Verified against state statutes (Oct 2026). Pending licensed US legal review.
const ROWS: Array<{ state: string; href?: string; notice: string; hours: string; law: string; note: string }> = [
  { state: "California", href: "/united-states/california", notice: "24 hours, written", hours: "Normal business hours", law: "Cal. Civ. Code § 1954", note: "24 hours' written notice for repairs, inspections, or showings; entry during normal business hours. No notice for a genuine emergency or if you consent." },
  { state: "Florida", href: "/united-states/florida", notice: "12 hours", hours: "7:30 a.m. – 8:00 p.m.", law: "Fla. Stat. § 83.53", note: "At least 12 hours' notice for repairs, and entry only between 7:30 a.m. and 8 p.m. Entry must be for a reasonable purpose." },
  { state: "New York", href: "/united-states/new-york", notice: "Reasonable notice (no fixed statute)", hours: "Reasonable hours", law: "Lease + case law; NYC rules", note: "No statewide hours rule. Courts expect reasonable advance notice (commonly treated as ~24 hours), and your lease or a local rule (e.g., NYC) may set specifics." },
  { state: "Texas", href: "/united-states/texas", notice: "Set by the lease", hours: "Per lease", law: "Tex. Prop. Code (no general entry statute)", note: "Texas has no general statutory notice period for entry — the lease governs. If your lease is silent, insist on reasonable advance notice in writing." },
  { state: "Illinois", href: "/united-states/illinois", notice: "Reasonable (Chicago: 2 days)", hours: "Reasonable hours", law: "State: none general; Chicago RLTO", note: "No statewide entry statute. Chicago's RLTO requires at least 2 days' notice and entry at reasonable times; elsewhere the lease governs." },
];

const faqItems = [
  {
    q: "Can my landlord enter without notice?",
    a: "Only in a genuine emergency (fire, flood, burst pipe) or if you consent at the time. For routine entry — repairs, inspections, showings — most states require advance notice. California requires 24 hours' written notice and Florida 12 hours; New York, Texas, and Illinois rely on a 'reasonable notice' standard or your lease (Chicago requires 2 days).",
  },
  {
    q: "How much notice does a landlord have to give to enter?",
    a: "It varies by state. California: 24 hours, written, during business hours. Florida: 12 hours, between 7:30 a.m. and 8 p.m. New York, Texas, and Illinois have no fixed statewide hours rule, so your lease (or a local ordinance like Chicago's 2-day rule) controls — with reasonable advance notice expected.",
  },
  {
    q: "What if my state has no entry-notice law?",
    a: "Then your lease controls, and courts still expect entry to be reasonable. Get the notice requirement written into your lease, ask for notice in writing, and keep a log of entries. Repeated entry without reasonable notice can breach your right to quiet enjoyment.",
  },
  {
    q: "What counts as an emergency entry?",
    a: "A genuine, urgent threat to the property or safety — fire, flooding, a gas leak, or a reasonable belief someone inside needs help. A routine repair that simply wasn't scheduled is not an emergency, and a landlord who repeatedly claims 'emergency' to skip notice may be harassing the tenant.",
  },
];

export default function LandlordEntryRulesByStatePage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Landlord Entry Rules by State (United States)",
    description: "Notice required and permitted hours for a landlord to enter a rental, for key US states.",
    url: "https://leaseplain.com/united-states/landlord-entry-rules-by-state",
    creator: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
    keywords: ["landlord entry", "United States", "by state", "right of entry", "tenant privacy"],
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
              <BreadcrumbNav className="mb-4" items={[{ label: "Home", href: "/" }, { label: "United States", href: "/united-states" }, { label: "Landlord Entry Rules by State" }]} />
              <div className="flex items-center gap-3 mb-4">
                <DoorOpen className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">Landlord Entry Rules by State</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Can your landlord just show up? Some states set a strict notice-and-hours rule; others
                leave it to your lease. Here&apos;s what California, New York, Texas, Florida, and Illinois
                require before a landlord can enter.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto space-y-10">
              <ReviewedByline updated="October 2026" jurisdiction="state entry statutes & local ordinances" />

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse bg-white text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-4 py-3 font-bold text-slate-700">State</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Notice required</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Permitted hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((r) => (
                      <tr key={r.state} className="border-b border-slate-100 last:border-0 align-top">
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          {r.href ? <Link href={r.href} className="text-blue-600 hover:underline">{r.state}</Link> : r.state}
                        </td>
                        <td className="px-4 py-3"><span className="font-bold text-indigo-700">{r.notice}</span></td>
                        <td className="px-4 py-3 text-slate-700">{r.hours}</td>
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
                      <span className="text-slate-400">({r.law})</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="prose-none space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">The big picture</h2>
                <p className="text-slate-700 leading-relaxed">
                  US entry rules split into two camps. <strong>California and Florida</strong> set a clear
                  statutory rule (24 hours / 12 hours and specific hours). <strong>New York, Texas, and
                  Illinois</strong> have no fixed statewide rule, so the lease controls — with courts
                  expecting reasonable notice, and cities like <strong>Chicago</strong> adding a 2-day
                  requirement. Everywhere, a genuine emergency is the exception.
                </p>
                <p className="text-sm text-slate-400">
                  Last reviewed: October 2026. Entry rules vary by state and city — confirm with the cited
                  law, your lease, or a local ordinance before relying on it.
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
                    { label: "Eviction notice periods by state", href: "/united-states/eviction-notice-periods-by-state" },
                    { label: "Security deposit limits by state", href: "/united-states/security-deposit-limits-by-state" },
                    { label: "New York tenant rights", href: "/united-states/new-york" },
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
                <strong>General information, not legal advice.</strong> Entry rules vary by state, city, and
                lease. Confirm with the cited law, your lease, or a local ordinance.
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
