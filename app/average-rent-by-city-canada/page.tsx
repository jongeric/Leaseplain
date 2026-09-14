import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewedByline from "@/components/ReviewedByline";
import { Building2, ChevronRight, AlertTriangle } from "lucide-react";

export const dynamic = "force-static";

// Snapshot date — update the figures and this label together when refreshing.
const SNAPSHOT = "August 2026";
const NATIONAL_1BR = 1770;
const NATIONAL_2BR = 2159;

export const metadata: Metadata = {
  title: `Average Rent by City in Canada (${SNAPSHOT}) | LeasePlain`,
  description:
    "Approximate average one-bedroom rent in Canada's major cities — Vancouver, Toronto, Halifax, Ottawa, Montreal, Calgary, Edmonton, and Winnipeg — as of August 2026, with how each compares to the national average.",
  alternates: { canonical: "https://leaseplain.com/average-rent-by-city-canada" },
  openGraph: {
    title: `Average Rent by City in Canada (${SNAPSHOT}) | LeasePlain`,
    description:
      "Approximate average one-bedroom rent across major Canadian cities, and how each compares to the national average.",
    url: "https://leaseplain.com/average-rent-by-city-canada",
    type: "article",
  },
  keywords: [
    "average rent by city canada",
    "average rent toronto vancouver montreal",
    "average one bedroom rent canada",
    "cost of rent canada by city",
    "average rent canada 2026",
  ],
};

// Approximate average ASKING rent for a one-bedroom, rounded to the nearest $10.
// Sources: Rentals.ca National Rent Report + Statistics Canada (Aug 2026).
// Figures are a point-in-time snapshot and change monthly.
const CITIES: Array<{ city: string; prov: string; href?: string; oneBed: number }> = [
  { city: "Vancouver", prov: "BC", href: "/canada/british-columbia/vancouver", oneBed: 2650 },
  { city: "Toronto", prov: "ON", href: "/canada/ontario/toronto", oneBed: 2480 },
  { city: "Halifax", prov: "NS", oneBed: 2350 },
  { city: "Ottawa", prov: "ON", href: "/canada/ontario/ottawa", oneBed: 2010 },
  { city: "Montreal", prov: "QC", href: "/canada/quebec/montreal", oneBed: 1880 },
  { city: "Calgary", prov: "AB", href: "/canada/alberta/calgary", oneBed: 1640 },
  { city: "Edmonton", prov: "AB", href: "/canada/alberta/edmonton", oneBed: 1580 },
  { city: "Winnipeg", prov: "MB", oneBed: 1200 },
];

function delta(v: number) {
  const pct = Math.round(((v - NATIONAL_1BR) / NATIONAL_1BR) * 100);
  return pct === 0 ? "≈ national avg" : pct > 0 ? `+${pct}% vs national` : `${pct}% vs national`;
}

const faqItems = [
  {
    q: "What is the average rent in Canada right now?",
    a: `As of ${SNAPSHOT}, the average asking rent for a one-bedroom in Canada was about $${NATIONAL_1BR.toLocaleString()} and a two-bedroom about $${NATIONAL_2BR.toLocaleString()}, based on the Rentals.ca National Rent Report. National rents have been easing year-over-year.`,
  },
  {
    q: "What is the most expensive city to rent in Canada?",
    a: "Vancouver and Toronto are consistently the most expensive major markets for renters, with one-bedroom asking rents well above the national average. Halifax has also risen sharply in recent years.",
  },
  {
    q: "What is the cheapest major city to rent in Canada?",
    a: "Among large cities, Winnipeg and Edmonton are typically the most affordable, with one-bedroom rents meaningfully below the national average.",
  },
  {
    q: "Are these rent figures exact?",
    a: "No — they're approximate asking rents rounded to the nearest $10 and captured at a point in time. Rents change every month and vary a lot by neighbourhood, building age, and unit. Always check current listings and the source reports for live figures.",
  },
];

export default function AverageRentByCityCanadaPage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Average One-Bedroom Rent by City in Canada",
    description: `Approximate average one-bedroom asking rent for major Canadian cities as of ${SNAPSHOT}.`,
    url: "https://leaseplain.com/average-rent-by-city-canada",
    temporalCoverage: "2026-08",
    creator: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
    keywords: ["average rent", "Canada", "by city", "one bedroom"],
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
              <BreadcrumbNav className="mb-4" items={[{ label: "Home", href: "/" }, { label: "Average Rent by City" }]} />
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">Average Rent by City in Canada</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                What does a one-bedroom actually cost across Canada&apos;s major cities? Here&apos;s an
                approximate snapshot for {SNAPSHOT}, from most to least expensive, and how each city compares
                to the national average of about ${NATIONAL_1BR.toLocaleString()}.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-4xl mx-auto space-y-10">
              <ReviewedByline updated={SNAPSHOT} />

              <div className="rounded-xl bg-amber-50 border border-amber-200 p-5 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-amber-800">
                  <strong>Snapshot, not a live feed.</strong> These are approximate average <em>asking</em>{" "}
                  rents rounded to the nearest $10, captured in {SNAPSHOT} from the Rentals.ca National Rent
                  Report and Statistics Canada. Rents change monthly and vary widely by neighbourhood and
                  unit — check current listings for today&apos;s prices.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse bg-white text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-4 py-3 font-bold text-slate-700">City</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Province</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Avg 1-bedroom</th>
                      <th className="px-4 py-3 font-bold text-slate-700">vs national</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CITIES.map((c) => (
                      <tr key={c.city} className="border-b border-slate-100 last:border-0">
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          {c.href ? <Link href={c.href} className="text-blue-600 hover:underline">{c.city}</Link> : c.city}
                        </td>
                        <td className="px-4 py-3 text-slate-600">{c.prov}</td>
                        <td className="px-4 py-3"><span className="font-bold text-indigo-700">${c.oneBed.toLocaleString()}</span></td>
                        <td className="px-4 py-3 text-slate-600">{delta(c.oneBed)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="prose-none space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">The national picture</h2>
                <p className="text-slate-700 leading-relaxed">
                  As of {SNAPSHOT}, the average asking rent for a one-bedroom in Canada was about{" "}
                  <strong>${NATIONAL_1BR.toLocaleString()}</strong>, and a two-bedroom about{" "}
                  <strong>${NATIONAL_2BR.toLocaleString()}</strong>. After years of steep increases, national
                  rents have been easing year-over-year — but the gap between the priciest cities
                  (Vancouver, Toronto, Halifax) and the most affordable (Winnipeg, Edmonton) is as wide as
                  it&apos;s been in a decade.
                </p>
                <h2 className="text-2xl font-bold text-slate-900">Remember: your rent has legal protection</h2>
                <p className="text-slate-700 leading-relaxed">
                  Market averages are about <em>new</em> listings. Once you&apos;re in a unit, most provinces
                  limit how much your rent can rise each year — see{" "}
                  <Link href="/rent-increase-rules-canada" className="text-blue-600 hover:underline">rent increase rules by province</Link>.
                  Staying put often protects a below-market rent.
                </p>
                <p className="text-sm text-slate-400">
                  Snapshot: {SNAPSHOT}. Sources: Rentals.ca National Rent Report, Statistics Canada. Figures
                  are approximate and change monthly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6">
                <h2 className="text-sm font-bold text-slate-900 mb-3">Related</h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {[
                    { label: "Rent increase rules by province", href: "/rent-increase-rules-canada" },
                    { label: "Security deposit limits by province", href: "/security-deposit-limits-canada" },
                    { label: "Move-in cost calculator", href: "/tools/move-in-cost-calculator" },
                    { label: "Toronto tenant rights", href: "/canada/ontario/toronto" },
                    { label: "Vancouver tenant rights", href: "/canada/british-columbia/vancouver" },
                    { label: "All Canadian tenant rights", href: "/canada" },
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
