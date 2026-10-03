import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock } from "lucide-react";
import ReviewedByline from "@/components/ReviewedByline";
import TableOfContents from "@/components/TableOfContents";
import ReadingProgress from "@/components/ReadingProgress";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Is My Landlord Required to Provide Heat? Minimum Temperatures in Canada | LeasePlain",
  description:
    "Heat is a vital service your landlord must maintain. The minimum indoor temperatures and heating-season dates for major Canadian cities — Toronto 21°C, Ottawa 20°C, Vancouver 22°C — and what to do if it's too cold.",
  alternates: { canonical: "https://leaseplain.com/blog/landlord-must-provide-heat-canada" },
  openGraph: {
    title: "Is My Landlord Required to Provide Heat? Minimum Temperatures in Canada | LeasePlain",
    description:
      "Minimum indoor temperatures and heating-season dates by city, and what to do if your landlord won't provide heat.",
    url: "https://leaseplain.com/blog/landlord-must-provide-heat-canada",
    type: "article",
    publishedTime: "2026-10-03T00:00:00Z",
    modifiedTime: "2026-10-03T00:00:00Z",
  },
  keywords: ["landlord required to provide heat", "minimum temperature rental", "no heat in apartment", "heat bylaw toronto", "vital services tenant canada"],
};

// Minimum-temperature bylaws verified against municipal sources (Oct 2026).
// Heat is set by municipal bylaw, so the exact figure varies by city.
const CITIES: Array<{ city: string; min: string; season: string }> = [
  { city: "Toronto", min: "21°C", season: "Oct 1 – May 15" },
  { city: "Ottawa", min: "20°C day / 16.7°C overnight", season: "year-round standard" },
  { city: "Vancouver", min: "22°C", season: "year-round standard" },
  { city: "Ontario (provincial floor)", min: "20°C", season: "Sep 1 – Jun 15 (heat is a vital service)" },
];

const faqItems = [
  {
    q: "Is my landlord legally required to provide heat?",
    a: "In almost all cases, yes. Heat is treated as a 'vital service' across Canada — a landlord generally cannot shut it off or fail to maintain it, even if you owe rent. Most cities set a minimum indoor temperature by bylaw that the landlord must keep the unit at during the heating season.",
  },
  {
    q: "What's the minimum temperature a rental must be?",
    a: "It depends on your municipality. Toronto requires at least 21°C from October 1 to May 15; Ottawa requires 20°C during the day (16.7°C overnight); Vancouver requires 22°C. Ontario's provincial regulation sets a 20°C floor and treats heat as a vital service from September 1 to June 15. Check your city's property-standards bylaw for the exact figure.",
  },
  {
    q: "What do I do if my apartment is too cold?",
    a: "Tell your landlord in writing right away and keep a dated log with thermometer readings. If they don't fix it, contact your municipality's property-standards or bylaw-enforcement office — cities can order the landlord to restore heat and issue fines. You can also apply to your provincial tenancy board for an order and possible rent abatement.",
  },
  {
    q: "Can a landlord turn off the heat if I owe rent?",
    a: "No. Shutting off a vital service like heat to pressure a tenant — even one behind on rent — is illegal across Canada and can be treated as an illegal eviction or harassment. The landlord's remedy for unpaid rent is the formal tenancy process, not cutting off heat.",
  },
];

export default function LandlordHeatPage() {
  return (
    <>
      <ArticleSchema
        headline={"Is My Landlord Required to Provide Heat? Minimum Temperatures in Canada"}
        description={"Heat is a vital service your landlord must maintain. The minimum indoor temperatures and heating-season dates for major Canadian cities, and what to do if it's too cold."}
        url="https://leaseplain.com/blog/landlord-must-provide-heat-canada"
        datePublished="2026-10-03"
        dateModified="2026-10-03"
        keywords={["landlord required to provide heat", "minimum temperature rental", "no heat in apartment"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Landlord Required to Provide Heat", href: "https://leaseplain.com/blog/landlord-must-provide-heat-canada" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/landlord-must-provide-heat-canada",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".speakable-summary"] },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <div className="flex flex-col min-h-full">
        <Navbar />
        <ReadingProgress />
        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
                <Link href="/" className="hover:underline">Home</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <Link href="/blog" className="hover:underline">Blog</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>Landlord Required to Provide Heat</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Canada
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  October 3, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  5 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Is My Landlord Required to Provide Heat?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                As the temperature drops, so do the complaints. The short answer: heat is a
                &quot;vital service&quot; your landlord must maintain, and most cities set a legal minimum
                temperature. Here are the numbers for major Canadian cities and what to do if it&apos;s
                too cold.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="October 2026" jurisdiction="municipal property-standards bylaws" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Heat Is a Vital Service</h2>
                  <p className="text-slate-700 leading-relaxed">Across Canada, heat is treated as a <strong>vital service</strong>. A landlord generally can&apos;t shut it off or let it fail — not even if you owe rent. Where the landlord supplies heat, they must keep the unit at or above the local minimum during the heating season. Cutting off heat to pressure a tenant is an illegal act that can amount to <Link href="/blog/landlord-harassment-ontario" className="text-blue-600 hover:underline">harassment or an illegal eviction</Link>.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Minimum Temperatures by City</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">Heat minimums are set by <strong>municipal bylaw</strong>, so the exact figure depends on your city:</p>
                  <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                    <table className="w-full text-left border-collapse bg-white text-sm">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <th className="px-4 py-3 font-bold text-slate-700">City / Jurisdiction</th>
                          <th className="px-4 py-3 font-bold text-slate-700">Minimum temperature</th>
                          <th className="px-4 py-3 font-bold text-slate-700">Heating period</th>
                        </tr>
                      </thead>
                      <tbody>
                        {CITIES.map((c) => (
                          <tr key={c.city} className="border-b border-slate-100 last:border-0 align-top">
                            <td className="px-4 py-3 font-semibold text-slate-900">{c.city}</td>
                            <td className="px-4 py-3"><span className="font-bold text-indigo-700">{c.min}</span></td>
                            <td className="px-4 py-3 text-slate-700">{c.season}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-slate-400 mt-3">Figures from municipal property-standards bylaws, reviewed October 2026. Other cities set their own minimums — check your local bylaw.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What to Do If It&apos;s Too Cold</h2>
                  <ol className="list-decimal list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Measure and log it:</strong> record the indoor temperature with dates and times.</li>
                    <li><strong>Tell your landlord in writing</strong> and ask for a prompt fix.</li>
                    <li><strong>Call municipal bylaw / property standards</strong> if it isn&apos;t resolved — the city can order heat restored and fine the landlord.</li>
                    <li><strong>Apply to your tenancy board</strong> for an order and possible <Link href="/blog/withholding-rent-repairs-ontario" className="text-blue-600 hover:underline">rent abatement</Link> for the cold period.</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">No heat? Put it in writing.</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Generate a formal repair/vital-services letter to your landlord with a clear deadline.
                  </p>
                  <Link href="/letters" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Letter Templates
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Heat & AC Rules in Ontario", href: "/blog/landlord-heat-air-conditioning-ontario" },
                      { label: "Landlord Repair Obligations in Canada", href: "/blog/landlord-repair-obligations-canada" },
                      { label: "Withholding Rent Over Repairs", href: "/blog/withholding-rent-repairs-ontario" },
                      { label: "Landlord Harassment: Your Rights", href: "/blog/landlord-harassment-ontario" },
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
