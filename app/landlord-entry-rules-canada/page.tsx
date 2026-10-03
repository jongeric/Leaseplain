import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewedByline from "@/components/ReviewedByline";
import { DoorOpen, ChevronRight } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Landlord Entry Rules by Province in Canada (2026) | LeasePlain",
  description:
    "How much notice a landlord must give before entering your rental, and the hours entry is allowed, in every Canadian province — Ontario, BC, Alberta, Quebec, and more — in one citable table. Nearly all require 24 hours' written notice.",
  alternates: { canonical: "https://leaseplain.com/landlord-entry-rules-canada" },
  openGraph: {
    title: "Landlord Entry Rules by Province in Canada (2026) | LeasePlain",
    description:
      "Notice required and permitted hours for a landlord to enter your rental, for every Canadian province in one table.",
    url: "https://leaseplain.com/landlord-entry-rules-canada",
    type: "article",
  },
  keywords: [
    "landlord entry rules canada",
    "can my landlord enter without notice",
    "24 hours notice landlord",
    "landlord entry hours by province",
    "right to privacy tenant canada",
  ],
};

// Verified against provincial residential-tenancy authorities (Oct 2026).
// Nearly every province requires 24 hours' written notice; the permitted
// hours window and statutory wording differ.
const ROWS: Array<{
  prov: string;
  href?: string;
  notice: string;
  hours: string;
  note: string;
}> = [
  { prov: "Ontario", href: "/blog/landlord-entry-notice-canada", notice: "24 hours, written", hours: "8 a.m. – 8 p.m.", note: "Notice (RTA s.27) must state the reason, date, and time. No notice needed for genuine emergencies or if you consent." },
  { prov: "British Columbia", notice: "24 hours, written", hours: "8 a.m. – 9 p.m.", note: "Residential Tenancy Act s.29. Entry is limited to once a week for most routine purposes unless you agree otherwise." },
  { prov: "Alberta", notice: "24 hours, written", hours: "Daytime (8 a.m. – 8 p.m.)", note: "RTA s.23. After-hours entry is not allowed without an emergency or your consent." },
  { prov: "Quebec", notice: "24 hours", hours: "7 a.m. – 7 p.m.", note: "Civil Code art.1931; art.1932 prohibits harassment through excessive entry. You can refuse entry outside these hours." },
  { prov: "Manitoba", notice: "24 hours, written", hours: "Reasonable hours", note: "Residential Tenancies Act s.33. A showing requires 24 hours' notice; the notice must give a time." },
  { prov: "Saskatchewan", notice: "24 hours, written", hours: "8 a.m. – 8 p.m.", note: "Residential Tenancies Act s.47. Entry must be at a reasonable time stated in the notice." },
  { prov: "Nova Scotia", notice: "24 hours, written", hours: "9 a.m. – 9 p.m.", note: "Residential Tenancies Act. Entry only for a valid reason; emergencies are the exception." },
  { prov: "New Brunswick", notice: "24 hours, written", hours: "8 a.m. – 8 p.m.", note: "Entry must be at a reasonable hour unless you agree otherwise." },
  { prov: "Prince Edward Island", notice: "24 hours, written", hours: "Reasonable hours", note: "Residential Tenancy Act. Notice required for repairs, work, or showings to prospective tenants/buyers." },
  { prov: "Newfoundland & Labrador", notice: "24 hours, written", hours: "9 a.m. – 5 p.m. & 7 p.m. – 9 p.m.", note: "Residential Tenancies Act, 2018. Once notice to end the tenancy is given, only 4 hours' notice is needed for showings." },
];

const faqItems = [
  {
    q: "Can my landlord enter without notice?",
    a: "Only in a genuine emergency (fire, flood, burst pipe, gas leak) or if you give consent at the time. For any routine purpose — repairs, inspections, showings — every Canadian province requires advance written notice, almost always 24 hours.",
  },
  {
    q: "How much notice does a landlord have to give to enter in Canada?",
    a: "In every province the standard is 24 hours' written notice, stating the reason and the time of entry. Entry is also limited to specific daytime hours that vary by province (for example 8 a.m.–8 p.m. in Ontario, 8 a.m.–9 p.m. in BC).",
  },
  {
    q: "Can I refuse to let my landlord in?",
    a: "You can refuse entry if proper notice was not given or the entry is outside permitted hours. If valid notice was given for a lawful reason, you generally cannot unreasonably refuse — the landlord can apply to the tenancy board for an order if you repeatedly block lawful entry.",
  },
  {
    q: "What counts as an emergency that lets a landlord enter without notice?",
    a: "A genuine, urgent threat to the unit or safety: fire, flooding, a burst pipe, a gas leak, or a reasonable belief someone inside needs urgent help. A routine repair that simply wasn't scheduled is not an emergency, and repeatedly claiming 'emergency' can amount to harassment.",
  },
];

export default function LandlordEntryRulesCanadaPage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Landlord Entry Rules by Province in Canada",
    description:
      "Notice required and permitted hours for a landlord to enter a rental unit in each Canadian province.",
    url: "https://leaseplain.com/landlord-entry-rules-canada",
    creator: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
    keywords: ["landlord entry", "notice of entry", "right to privacy", "Canada", "by province"],
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
              <BreadcrumbNav className="mb-4" items={[{ label: "Home", href: "/" }, { label: "Landlord Entry Rules by Province" }]} />
              <div className="flex items-center gap-3 mb-4">
                <DoorOpen className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">Landlord Entry Rules by Province in Canada</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Your landlord can&apos;t just show up. In every Canadian province they must give
                written notice — almost always 24 hours — and enter only during set hours. Here&apos;s
                the rule for every province in one table.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto space-y-10">
              <ReviewedByline updated="October 2026" />

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse bg-white text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-4 py-3 font-bold text-slate-700">Province</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Notice required</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Permitted hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((r) => (
                      <tr key={r.prov} className="border-b border-slate-100 last:border-0 align-top">
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          {r.href ? <Link href={r.href} className="text-blue-600 hover:underline">{r.prov}</Link> : r.prov}
                        </td>
                        <td className="px-4 py-3"><span className="font-bold text-indigo-700">{r.notice}</span></td>
                        <td className="px-4 py-3 text-slate-700">{r.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-900">Notes by province</h2>
                <ul className="space-y-2">
                  {ROWS.map((r) => (
                    <li key={r.prov} className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-slate-900">{r.prov}:</strong> {r.note}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="prose-none space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">The big picture</h2>
                <p className="text-slate-700 leading-relaxed">
                  The rule is remarkably consistent across Canada: <strong>24 hours&apos; written notice,
                  stating the reason and time, and entry only during daytime hours</strong>. The main
                  differences are the exact hours window and whether showings get a shorter notice once
                  you&apos;ve given notice to move out. The two universal exceptions are a genuine
                  emergency and your own consent at the time.
                </p>
                <p className="text-sm text-slate-400">
                  Last reviewed: October 2026. Rules change — confirm the current requirement with your
                  provincial residential-tenancy authority before relying on it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6">
                <h2 className="text-sm font-bold text-slate-900 mb-3">Related guides &amp; comparisons</h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {[
                    { label: "Landlord entry notice: the full guide", href: "/blog/landlord-entry-notice-canada" },
                    { label: "Can my landlord enter without notice? (Ontario)", href: "/answers/can-my-landlord-enter-without-notice-ontario" },
                    { label: "Can my landlord enter without notice? (BC)", href: "/answers/can-my-landlord-enter-without-notice-bc" },
                    { label: "Landlord harassment: your rights", href: "/blog/landlord-harassment-ontario" },
                    { label: "Rent increase rules by province", href: "/rent-increase-rules-canada" },
                    { label: "Eviction notice periods by province", href: "/eviction-notice-periods-canada" },
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
                <strong>General information, not legal advice.</strong> Entry rules vary by province and
                lease. Confirm with your provincial tenancy authority for your situation.
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
