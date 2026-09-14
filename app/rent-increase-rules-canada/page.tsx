import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewedByline from "@/components/ReviewedByline";
import { TrendingUp, ChevronRight } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Rent Increase Rules by Province in Canada (2026) | LeasePlain",
  description:
    "Which provinces have rent control, the 2026 maximum rent increase, and the notice a landlord must give — Ontario 2.1%, BC 2.3%, Manitoba 1.8%, PEI 2%, Nova Scotia 5%, and the provinces with no cap — in one citable table.",
  alternates: { canonical: "https://leaseplain.com/rent-increase-rules-canada" },
  openGraph: {
    title: "Rent Increase Rules by Province in Canada (2026) | LeasePlain",
    description:
      "Rent control status, 2026 maximum increase, and notice required for every Canadian province in one table.",
    url: "https://leaseplain.com/rent-increase-rules-canada",
    type: "article",
  },
  keywords: [
    "rent increase rules by province canada",
    "how much can landlord raise rent 2026",
    "rent control by province canada",
    "rent increase cap 2026",
    "rent increase notice by province",
  ],
};

// Verified against provincial authorities (Sept 2026). Figures are the 2026
// maximum allowable increase for existing tenancies where a cap exists.
const ROWS: Array<{
  prov: string;
  href?: string;
  control: string;
  max2026: string;
  notice: string;
  note: string;
}> = [
  { prov: "Ontario", href: "/blog/ontario-rent-increase-guideline-2026", control: "Yes (guideline)", max2026: "2.1%", notice: "90 days", note: "Units first occupied after Nov 15, 2018 are exempt from the guideline. The 2027 guideline is 1.9%." },
  { prov: "British Columbia", href: "/blog/bc-rent-increase-rules", control: "Yes", max2026: "2.3%", notice: "3 months", note: "No vacancy control — a new tenancy can start at any rent." },
  { prov: "Alberta", href: "/blog/alberta-rent-increase-rules", control: "No cap", max2026: "No limit", notice: "3 months (periodic)", note: "No rent control, but only once per 12 months and not in the first year." },
  { prov: "Quebec", href: "/blog/quebec-rent-increase-rules", control: "Mediated", max2026: "No fixed cap (TAL ~3.1%)", notice: "3–6 months", note: "No hard cap, but you can refuse an increase and stay while the TAL fixes a fair rent." },
  { prov: "Manitoba", href: "/blog/manitoba-rent-increase-rules", control: "Yes (guideline)", max2026: "1.8%", notice: "3 months", note: "Some newer buildings and higher-rent units are exempt." },
  { prov: "Saskatchewan", control: "No cap", max2026: "No limit", notice: "12 months", note: "No rent control, but periodic tenancies need 12 months' notice (6 months if the landlord is in a prescribed association) — once per 12 months." },
  { prov: "Nova Scotia", control: "Yes (temporary cap)", max2026: "5%", notice: "4 months", note: "The 5% cap is extended through December 31, 2027." },
  { prov: "New Brunswick", control: "No formal cap", max2026: "No set limit", notice: "Varies", note: "No fixed cap; large increases can be reviewed by the tribunal." },
  { prov: "Prince Edward Island", control: "Yes (IRAC)", max2026: "2%", notice: "3 months", note: "Set annually by IRAC; capped at 3% by law." },
  { prov: "Newfoundland & Labrador", control: "No cap", max2026: "No limit", notice: "8 wks–6 mo", note: "No rent control; once per 12 months with 8 weeks' notice (month-to-month) or 6 months (yearly)." },
];

const faqItems = [
  {
    q: "Which Canadian provinces have rent control?",
    a: "Ontario, British Columbia, Manitoba, Prince Edward Island, and (through a temporary cap) Nova Scotia limit annual increases. Quebec has no fixed cap but lets tenants refuse an increase and have the TAL set a fair rent. Alberta, Saskatchewan, New Brunswick, and Newfoundland have no rent cap.",
  },
  {
    q: "How much can a landlord raise rent in 2026?",
    a: "Where there's a cap: Ontario 2.1%, BC 2.3%, Manitoba 1.8%, PEI 2%, and Nova Scotia 5%. Alberta, Saskatchewan, New Brunswick, and Newfoundland have no percentage limit, though timing and notice rules still apply.",
  },
  {
    q: "How much notice must a landlord give to raise rent?",
    a: "Typically three months (BC, Manitoba, PEI, Alberta for periodic tenancies), 90 days in Ontario, and four months in Nova Scotia. In every province rent can generally be increased only once every 12 months.",
  },
  {
    q: "Can a landlord raise rent by any amount in some provinces?",
    a: "Yes. Alberta, Saskatchewan, New Brunswick, and Newfoundland have no rent-control cap, so there's no percentage limit — but the increase can still happen only once a year and requires proper written notice.",
  },
];

export default function RentIncreaseRulesCanadaPage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Rent Increase Rules by Province in Canada (2026)",
    description:
      "Rent control status, 2026 maximum allowable rent increase, and required notice for each Canadian province.",
    url: "https://leaseplain.com/rent-increase-rules-canada",
    creator: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
    keywords: ["rent increase", "rent control", "Canada", "by province", "2026"],
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
              <BreadcrumbNav className="mb-4" items={[{ label: "Home", href: "/" }, { label: "Rent Increase Rules by Province" }]} />
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">Rent Increase Rules by Province in Canada</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                How much can your rent go up in 2026, and how much notice do you get? Five provinces cap the
                increase, one lets you refuse it, and four have no limit at all. Here&apos;s every province
                in one table.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto space-y-10">
              <ReviewedByline updated="September 2026" />

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse bg-white text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-4 py-3 font-bold text-slate-700">Province</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Rent control</th>
                      <th className="px-4 py-3 font-bold text-slate-700">2026 max increase</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Notice</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((r) => (
                      <tr key={r.prov} className="border-b border-slate-100 last:border-0 align-top">
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          {r.href ? <Link href={r.href} className="text-blue-600 hover:underline">{r.prov}</Link> : r.prov}
                        </td>
                        <td className="px-4 py-3 text-slate-700">{r.control}</td>
                        <td className="px-4 py-3"><span className="font-bold text-indigo-700">{r.max2026}</span></td>
                        <td className="px-4 py-3 text-slate-700">{r.notice}</td>
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
                  Rent control in Canada is a patchwork. <strong>Ontario, BC, Manitoba, and PEI</strong> set
                  an annual guideline; <strong>Nova Scotia</strong> holds a temporary 5% cap through 2027;{" "}
                  <strong>Quebec</strong> has no cap but lets you refuse an increase and stay. In{" "}
                  <strong>Alberta, Saskatchewan, New Brunswick, and Newfoundland</strong>, there&apos;s no
                  percentage limit — your protection is the once-a-year rule, the notice period, and the
                  option to move.
                </p>
                <p className="text-sm text-slate-400">
                  Last reviewed: September 2026. Guidelines are announced yearly and rules change — confirm
                  the current figure with your provincial authority before relying on it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6">
                <h2 className="text-sm font-bold text-slate-900 mb-3">Rent increase guides &amp; tools</h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {[
                    { label: "Ontario 2026 rent increase guideline", href: "/blog/ontario-rent-increase-guideline-2026" },
                    { label: "BC rent increase rules", href: "/blog/bc-rent-increase-rules" },
                    { label: "Alberta rent increase rules", href: "/blog/alberta-rent-increase-rules" },
                    { label: "Quebec rent increase rules", href: "/blog/quebec-rent-increase-rules" },
                    { label: "Manitoba rent increase rules", href: "/blog/manitoba-rent-increase-rules" },
                    { label: "Rent Increase Calculator", href: "/tools/rent-increase-calculator" },
                    { label: "Ontario rent increase history", href: "/ontario-rent-increase-history" },
                    { label: "Security deposit limits by province", href: "/security-deposit-limits-canada" },
                    { label: "Eviction notice periods by province", href: "/eviction-notice-periods-canada" },
                    { label: "Average rent by city in Canada", href: "/average-rent-by-city-canada" },
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
                <strong>General information, not legal advice.</strong> Rent rules vary by province, unit
                type, and lease. Confirm with your provincial tenancy authority for your situation.
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
