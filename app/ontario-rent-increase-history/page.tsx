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
  title: "Ontario Rent Increase Guideline History (2020–2027) | LeasePlain",
  description:
    "Every Ontario rent increase guideline from 2020 to 2027 in one table — including the 2021 rent freeze and the 2.5% legal cap. A citable reference for tenants, journalists, and researchers.",
  alternates: { canonical: "https://leaseplain.com/ontario-rent-increase-history" },
  openGraph: {
    title: "Ontario Rent Increase Guideline History (2020–2027) | LeasePlain",
    description:
      "Every Ontario rent increase guideline from 2020 to 2027, with context on the freeze and the 2.5% cap.",
    url: "https://leaseplain.com/ontario-rent-increase-history",
    type: "article",
    images: [{ url: "https://leaseplain.com/diagrams/ontario-rent-increase-2026.png", width: 1200, height: 630 }],
  },
  keywords: [
    "ontario rent increase guideline history",
    "ontario rent increase by year",
    "ontario rent guideline 2020 2021 2022 2023 2024 2025 2026 2027",
    "ontario rent freeze 2021",
  ],
};

// Ontario's annual rent increase guideline. The guideline is capped at 2.5% by
// law; 2021 was a legislated freeze. Figures match LeasePlain's published
// coverage of the guideline.
const GUIDELINE_HISTORY: Array<{ year: string; pct: string; note: string }> = [
  { year: "2027", pct: "1.9%", note: "Set from CPI; the lowest since the 2021 freeze." },
  { year: "2026", pct: "2.1%", note: "Set from CPI; below the 2.5% cap." },
  { year: "2025", pct: "2.5%", note: "Held at the legal maximum." },
  { year: "2024", pct: "2.5%", note: "Held at the legal maximum." },
  { year: "2023", pct: "2.5%", note: "Capped at 2.5% despite higher inflation." },
  { year: "2022", pct: "1.2%", note: "Reflected lower pandemic-era CPI." },
  { year: "2021", pct: "0%", note: "Legislated rent freeze (COVID-19 relief)." },
  { year: "2020", pct: "2.2%", note: "Set from CPI before the freeze." },
];

const faqItems = [
  {
    q: "What is the Ontario rent increase guideline for 2027?",
    a: "The 2027 guideline is 1.9% — the lowest since the 2021 rent freeze. It applies to rent increases that take effect in 2027 for most units covered by rent control.",
  },
  {
    q: "What is the Ontario rent increase guideline for 2026?",
    a: "The 2026 guideline is 2.1%. It applies to most units covered by rent control and is the maximum a landlord can increase rent without approval from the Landlord and Tenant Board.",
  },
  {
    q: "Why was the 2021 guideline 0%?",
    a: "The Ontario government legislated a rent freeze for 2021 as a COVID-19 relief measure, so most rent-controlled tenants could not have their rent increased that year.",
  },
  {
    q: "Is there a maximum rent increase guideline in Ontario?",
    a: "Yes. By law, the guideline is capped at 2.5%, even when inflation is higher — as happened in 2023 through 2025, when the guideline was held at 2.5%.",
  },
  {
    q: "Does the guideline apply to every rental unit?",
    a: "No. Units first occupied for residential purposes after November 15, 2018 are exempt from the guideline. The 90-day notice and once-every-12-months rules still apply to them.",
  },
];

export default function OntarioRentIncreaseHistoryPage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Ontario Rent Increase Guideline History (2020–2027)",
    description:
      "The annual Ontario rent increase guideline for each year from 2020 to 2027, including the 2021 rent freeze.",
    url: "https://leaseplain.com/ontario-rent-increase-history",
    creator: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
    keywords: ["Ontario", "rent increase guideline", "rent control"],
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
              <BreadcrumbNav className="mb-4" items={[{ label: "Home", href: "/" }, { label: "Ontario Rent Increase History" }]} />
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">Ontario Rent Increase Guideline History</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Every Ontario rent increase guideline from 2020 to 2027 in one place — including the
                2021 rent freeze and the years the guideline was held at its 2.5% legal cap. Free to
                reference and cite.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-4xl mx-auto space-y-10">
              <ReviewedByline updated="August 2026" />
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-5 py-3 text-sm font-bold text-slate-700">Year</th>
                      <th className="px-5 py-3 text-sm font-bold text-slate-700">Guideline</th>
                      <th className="px-5 py-3 text-sm font-bold text-slate-700">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {GUIDELINE_HISTORY.map((row) => (
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

              <figure>
                <img
                  src="/diagrams/ontario-rent-increase-2026.png"
                  alt="Bar chart of Ontario's annual rent increase guideline from 2020 to 2026: 2.2% in 2020, a 0% freeze in 2021, 1.2% in 2022, 2.5% from 2023 to 2025, and 2.1% in 2026."
                  width={1200}
                  height={630}
                  loading="lazy"
                  className="w-full h-auto rounded-xl border border-slate-200"
                />
                <figcaption className="text-sm text-slate-500 mt-2">
                  Ontario&apos;s rent increase guideline, 2020–2026 (the 2027 guideline is 1.9% — see the
                  table above). The guideline is capped at 2.5% by law.
                </figcaption>
              </figure>

              <div className="prose-none space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">How the guideline is set</h2>
                <p className="text-slate-700 leading-relaxed">
                  Each year the Ontario government sets the rent increase guideline based on the Ontario
                  Consumer Price Index (CPI). It represents the maximum most landlords can raise rent
                  without seeking an above-guideline increase from the Landlord and Tenant Board. Two
                  structural features stand out in the data: the <strong>2021 rent freeze</strong>, a
                  COVID-19 relief measure, and the <strong>2.5% legal cap</strong> that held the guideline
                  down in 2023–2025 even as inflation ran higher.
                </p>
                <h2 className="text-2xl font-bold text-slate-900">Using this data</h2>
                <p className="text-slate-700 leading-relaxed">
                  You&apos;re welcome to cite this page. For the current-year details — who&apos;s exempt,
                  how notice works, and what to do if your landlord exceeds the guideline — see our{" "}
                  <Link href="/blog/ontario-rent-increase-guideline-2026" className="text-blue-600 hover:underline">
                    2026 rent increase guide
                  </Link>, and check any specific increase with the{" "}
                  <Link href="/tools/rent-increase-calculator" className="text-blue-600 hover:underline">
                    Rent Increase Calculator
                  </Link>.
                </p>
                <p className="text-sm text-slate-400">Last reviewed: August 2026.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6">
                <h2 className="text-sm font-bold text-slate-900 mb-3">Related</h2>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "2026 rent increase guideline explained", href: "/blog/ontario-rent-increase-guideline-2026" },
                    { label: "Why isn't my rent capped? (post-2018)", href: "/blog/post-2018-rent-control-exemption-ontario" },
                    { label: "Above-guideline increases", href: "/blog/above-guideline-rent-increase-ontario" },
                    { label: "BC rent increase history", href: "/bc-rent-increase-history" },
                    { label: "Rent Increase Calculator", href: "/tools/rent-increase-calculator" },
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
