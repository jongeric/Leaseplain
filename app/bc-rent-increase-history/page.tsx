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
  title: "BC Rent Increase History (2019–2026) | LeasePlain",
  description:
    "Every British Columbia maximum allowable rent increase from 2019 to 2026 in one table — including the 2021 rent freeze. A citable reference for tenants, journalists, and researchers.",
  alternates: { canonical: "https://leaseplain.com/bc-rent-increase-history" },
  openGraph: {
    title: "BC Rent Increase History (2019–2026) | LeasePlain",
    description:
      "Every BC maximum allowable rent increase from 2019 to 2026, with context on the freeze and the switch to a CPI-based cap.",
    url: "https://leaseplain.com/bc-rent-increase-history",
    type: "article",
  },
  keywords: [
    "bc rent increase history",
    "bc rent increase by year",
    "bc maximum allowable rent increase",
    "bc rent freeze 2021",
    "bc rent increase 2019 2020 2021 2022 2023 2024 2025 2026",
  ],
};

// BC's annual maximum allowable rent increase. Since 2018 the cap has been tied
// to inflation (CPI); the older CPI + 2% formula was abolished. 2021 was a
// legislated freeze. Figures match LeasePlain's published BC coverage.
const HISTORY: Array<{ year: string; pct: string; note: string }> = [
  { year: "2026", pct: "2.3%", note: "Set from CPI; announced annually by the province." },
  { year: "2025", pct: "3.0%", note: "CPI-based cap." },
  { year: "2024", pct: "3.5%", note: "Capped below the underlying inflation figure." },
  { year: "2023", pct: "2.0%", note: "Held below CPI to protect renters." },
  { year: "2022", pct: "1.5%", note: "Reflected lower pandemic-era CPI." },
  { year: "2021", pct: "0%", note: "Legislated rent freeze (COVID-19 relief)." },
  { year: "2020", pct: "2.6%", note: "Last year under the old CPI + 2% approach before reforms took full effect." },
  { year: "2019", pct: "2.5%", note: "CPI-based cap after the 2018 formula change." },
];

const faqItems = [
  {
    q: "What is the BC rent increase limit for 2026?",
    a: "The 2026 maximum allowable rent increase in British Columbia is 2.3%. It applies to existing tenancies, can only be applied once every 12 months, and requires at least three full months' written notice on the approved form.",
  },
  {
    q: "Why was the 2021 BC rent increase 0%?",
    a: "The BC government froze rents for 2021 as a COVID-19 relief measure, so most tenants could not have their rent increased that year.",
  },
  {
    q: "How is the BC rent increase cap set?",
    a: "Since 2018, BC ties the annual maximum to inflation (the Consumer Price Index). The older formula of CPI plus 2% was abolished, which generally lowered the cap. The province announces the exact figure each year.",
  },
  {
    q: "Does the BC cap apply when a new tenant moves in?",
    a: "No. BC has no vacancy control. The annual cap limits increases during an existing tenancy, but when a tenancy ends the landlord can set any starting rent for a new tenant.",
  },
];

export default function BcRentIncreaseHistoryPage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "BC Rent Increase History (2019–2026)",
    description:
      "The annual maximum allowable rent increase in British Columbia for each year from 2019 to 2026, including the 2021 rent freeze.",
    url: "https://leaseplain.com/bc-rent-increase-history",
    creator: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
    keywords: ["British Columbia", "rent increase", "rent control"],
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
              <BreadcrumbNav className="mb-4" items={[{ label: "Home", href: "/" }, { label: "BC Rent Increase History" }]} />
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">BC Rent Increase History</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Every British Columbia maximum allowable rent increase from 2019 to 2026 in one place —
                including the 2021 rent freeze and the switch to a CPI-based cap. Free to reference and cite.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-4xl mx-auto space-y-10">
              <ReviewedByline updated="September 2026" />
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-5 py-3 text-sm font-bold text-slate-700">Year</th>
                      <th className="px-5 py-3 text-sm font-bold text-slate-700">Max Increase</th>
                      <th className="px-5 py-3 text-sm font-bold text-slate-700">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {HISTORY.map((row) => (
                      <tr key={row.year} className="border-b border-slate-100 last:border-0">
                        <td className="px-5 py-3 font-semibold text-slate-900">{row.year}</td>
                        <td className="px-5 py-3">
                          <span className="inline-block font-bold text-indigo-700">{row.pct}</span>
                        </td>
                        <td className="px-5 py-3 text-sm text-slate-600">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="prose-none space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">How BC sets the cap</h2>
                <p className="text-slate-700 leading-relaxed">
                  Since 2018, British Columbia ties the annual maximum allowable rent increase to the
                  Consumer Price Index (CPI). The older formula — CPI plus 2% — was abolished, which
                  generally lowered increases. Two moments stand out in the data: the{" "}
                  <strong>2021 rent freeze</strong>, a COVID-19 relief measure, and the province&apos;s
                  practice of sometimes holding the cap below raw inflation to protect renters.
                </p>
                <h2 className="text-2xl font-bold text-slate-900">Using this data</h2>
                <p className="text-slate-700 leading-relaxed">
                  You&apos;re welcome to cite this page. For the current-year details — notice periods,
                  what&apos;s exempt, and how to respond to an increase — see our{" "}
                  <Link href="/blog/bc-rent-increase-2026" className="text-blue-600 hover:underline">
                    BC 2026 rent increase guide
                  </Link>{" "}
                  and the full{" "}
                  <Link href="/blog/bc-rent-increase-rules" className="text-blue-600 hover:underline">
                    BC rent increase rules
                  </Link>. Check a specific increase with the{" "}
                  <Link href="/tools/rent-increase-calculator" className="text-blue-600 hover:underline">
                    Rent Increase Calculator
                  </Link>.
                </p>
                <p className="text-sm text-slate-400">Last reviewed: September 2026. Figures should be confirmed against the BC government&apos;s annual announcement.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6">
                <h2 className="text-sm font-bold text-slate-900 mb-3">Related</h2>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "BC 2026 rent increase guide", href: "/blog/bc-rent-increase-2026" },
                    { label: "BC rent increase rules", href: "/blog/bc-rent-increase-rules" },
                    { label: "Ontario rent increase history", href: "/ontario-rent-increase-history" },
                    { label: "BC tenant rights", href: "/canada/british-columbia" },
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
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
