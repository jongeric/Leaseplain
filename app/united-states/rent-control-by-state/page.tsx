import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewedByline from "@/components/ReviewedByline";
import { TrendingUp, ChevronRight } from "lucide-react";

export const dynamic = "force-static";

// HELD NOINDEX until a licensed US legal review is complete (per launch plan).
export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Rent Control by State (US) | LeasePlain",
  description:
    "Which US states allow rent control, which ban it, and the annual cap where one exists — California, New York, Texas, Florida, and Illinois — with the governing law for each.",
  alternates: { canonical: "https://leaseplain.com/united-states/rent-control-by-state" },
  openGraph: {
    title: "Rent Control by State (US) | LeasePlain",
    description: "Rent-control status, annual cap, and governing law for key US states in one table.",
    url: "https://leaseplain.com/united-states/rent-control-by-state",
    type: "article",
  },
  keywords: ["rent control by state", "which states have rent control", "rent increase cap by state", "california rent cap", "states that ban rent control"],
};

// Verified against state law (Oct 2026). Pending licensed US legal review.
const ROWS: Array<{ state: string; href?: string; control: string; cap: string; law: string; note: string }> = [
  { state: "California", href: "/united-states/california", control: "Yes (statewide + local)", cap: "5% + local CPI, max 10%", law: "AB 1482 (Civ. Code § 1947.12)", note: "AB 1482 caps most increases statewide; cities like LA, SF, and Oakland have stricter local rent control. Buildings under 15 years old and most single-family homes are exempt." },
  { state: "New York", href: "/united-states/new-york", control: "Yes (NYC + ETPA areas)", cap: "Set yearly by the Rent Guidelines Board", law: "Rent Stabilization Law; HSTPA 2019", note: "Rent stabilization covers ~1 million NYC units plus ETPA municipalities; the Rent Guidelines Board sets the annual increase. Market-rate units outside the system have no cap." },
  { state: "Texas", href: "/united-states/texas", control: "No — preempted", cap: "No limit", law: "Tex. Loc. Gov't Code § 214.902", note: "State law bars cities from enacting rent control except in a declared housing emergency with state approval. Increases are governed by the lease and notice terms." },
  { state: "Florida", href: "/united-states/florida", control: "No — preempted", cap: "No limit", law: "Fla. Stat. § 125.0103 (2023 preemption)", note: "Florida has no rent control, and a 2023 state law blocks local governments from adopting it. Only the lease and notice rules limit increases." },
  { state: "Illinois", href: "/united-states/illinois", control: "No — preempted", cap: "No limit", law: "Rent Control Preemption Act, 50 ILCS 825", note: "No statewide rent control, and cities are barred from enacting it. (Repeal has been proposed repeatedly but has not passed.)" },
  { state: "Washington", href: "/united-states/washington", control: "Yes (statewide, 2025)", cap: "7% + CPI, max 10% (~9.7% for 2026)", law: "HB 1217 (2025)", note: "Washington's new statewide cap limits most increases to the lesser of 7% + CPI or 10%, bars any increase in the first 12 months, and caps manufactured-home lots at 5%. 90-day notice required." },
  { state: "Georgia", href: "/united-states/georgia", control: "No — preempted", cap: "No limit", law: "O.C.G.A. § 44-7-19", note: "No rent control, and state law bars cities and counties from enacting it." },
  { state: "Pennsylvania", href: "/united-states/pennsylvania", control: "No", cap: "No limit", law: "No statewide statute", note: "No statewide rent control, and no Pennsylvania city has it in practice. The lease and notice rules govern increases." },
];

const faqItems = [
  {
    q: "Which US states have rent control?",
    a: "Among the largest rental markets, California (statewide via AB 1482, plus stronger local ordinances), New York (rent stabilization in NYC and ETPA municipalities), and — as of 2025 — Washington (a statewide cap under HB 1217) have rent control. Texas, Florida, Georgia, and Illinois not only lack it — state law bars their cities from enacting it. Pennsylvania has neither a cap nor local rent control in practice.",
  },
  {
    q: "How much can a landlord raise rent in California?",
    a: "Under AB 1482, most covered units are capped at 5% plus the local CPI, with a hard maximum of 10% per year. Stricter local rent control (Los Angeles, San Francisco, Oakland, and others) can set a lower cap. Units under 15 years old and most single-family homes are exempt.",
  },
  {
    q: "Is there a cap on rent increases in Texas, Florida, or Illinois?",
    a: "No. These states have no rent-control cap, and each preempts its cities from enacting one. Your only protections are the amount and notice set in your lease, the ban on mid-term increases during a fixed term, and the required notice for a new term.",
  },
  {
    q: "What does 'preempted' mean for rent control?",
    a: "Preemption means the state has passed a law forbidding local governments from creating rent control. So even if a city council wanted to cap rents, it legally cannot — as in Texas, Florida, and Illinois.",
  },
];

export default function RentControlByStatePage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Rent Control by State (United States)",
    description: "Rent-control status, annual cap, and governing law for key US states.",
    url: "https://leaseplain.com/united-states/rent-control-by-state",
    creator: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
    keywords: ["rent control", "United States", "by state", "rent cap"],
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
              <BreadcrumbNav className="mb-4" items={[{ label: "Home", href: "/" }, { label: "United States", href: "/united-states" }, { label: "Rent Control by State" }]} />
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">Rent Control by State</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Does your state cap rent increases? A few do — most don&apos;t, and several actually ban
                their own cities from trying. Here are California, New York, Texas, Florida, and Illinois
                in one table, with the law for each.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto space-y-10">
              <ReviewedByline updated="October 2026" jurisdiction="state rent-regulation law" />

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse bg-white text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-4 py-3 font-bold text-slate-700">State</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Rent control</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Annual cap</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((r) => (
                      <tr key={r.state} className="border-b border-slate-100 last:border-0 align-top">
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          {r.href ? <Link href={r.href} className="text-blue-600 hover:underline">{r.state}</Link> : r.state}
                        </td>
                        <td className="px-4 py-3 text-slate-700">{r.control}</td>
                        <td className="px-4 py-3"><span className="font-bold text-indigo-700">{r.cap}</span></td>
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
                  Rent control in the US is rare and shrinking. <strong>California and New York</strong> are
                  the big exceptions; <strong>Texas, Florida, and Illinois</strong> have no cap and
                  explicitly <strong>preempt</strong> their cities from creating one. Where there&apos;s no
                  cap, your protection is the lease itself, the ban on raising rent mid-term, and the
                  notice required before a new term.
                </p>
                <p className="text-sm text-slate-400">
                  Last reviewed: October 2026. Rent laws change — confirm the current figure with the cited
                  law or your state housing agency before relying on it.
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
                    { label: "Security deposit limits by state", href: "/united-states/security-deposit-limits-by-state" },
                    { label: "Eviction notice periods by state", href: "/united-states/eviction-notice-periods-by-state" },
                    { label: "Landlord entry rules by state", href: "/united-states/landlord-entry-rules-by-state" },
                    { label: "California tenant rights", href: "/united-states/california" },
                    { label: "New York tenant rights", href: "/united-states/new-york" },
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
                <strong>General information, not legal advice.</strong> Rent rules vary by state, city, unit
                type, and lease. Confirm with the cited law or your state housing agency.
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
