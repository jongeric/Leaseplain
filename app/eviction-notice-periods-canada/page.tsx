import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewedByline from "@/components/ReviewedByline";
import { Scale, ChevronRight, AlertTriangle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Eviction Notice Periods by Province in Canada (2026) | LeasePlain",
  description:
    "How much notice a landlord must give for non-payment of rent, how long you have to pay and stay, and where evictions are decided — every Canadian province in one citable table.",
  alternates: { canonical: "https://leaseplain.com/eviction-notice-periods-canada" },
  openGraph: {
    title: "Eviction Notice Periods by Province in Canada (2026) | LeasePlain",
    description:
      "Non-payment eviction notice, pay-and-stay windows, and the tribunal for every Canadian province in one table.",
    url: "https://leaseplain.com/eviction-notice-periods-canada",
    type: "article",
  },
  keywords: [
    "eviction notice period by province canada",
    "how many days eviction notice",
    "non-payment eviction notice canada",
    "eviction rules by province",
    "pay and stay eviction canada",
  ],
};

// Verified against provincial residential-tenancy authorities (Sept 2026).
// Focus: eviction for NON-PAYMENT of rent, the most common eviction — plus the
// body that decides disputed evictions. Only a tribunal/court order (not the
// landlord) can force a tenant out in every province.
const ROWS: Array<{
  prov: string;
  href?: string;
  notice: string;
  payStay: string;
  body: string;
}> = [
  { prov: "Ontario", href: "/blog/n4-non-payment-rent-ontario", notice: "N4 — 14 days", payStay: "Pay in full to void the notice (and often later, 'pay and stay')", body: "Landlord and Tenant Board (LTB)" },
  { prov: "British Columbia", href: "/blog/bc-eviction-notices-rtb", notice: "10-Day Notice", payStay: "Pay within 5 days to cancel it", body: "Residential Tenancy Branch (RTB)" },
  { prov: "Alberta", href: "/blog/alberta-eviction-process", notice: "14-day notice", payStay: "Pay the arrears before the termination date", body: "RTDRS or Provincial Court" },
  { prov: "Quebec", href: "/blog/quebec-repossession-eviction", notice: "No fixed notice — landlord applies once rent is 3+ weeks late", payStay: "Pay what's owed (with costs) to stop termination", body: "Tribunal administratif du logement (TAL)" },
  { prov: "Manitoba", href: "/blog/manitoba-eviction-process", notice: "About 5 days", payStay: "Pay the overdue rent to stop it", body: "Residential Tenancies Branch" },
  { prov: "Saskatchewan", notice: "Notice once rent is 15 days late", payStay: "Pay the arrears to remedy", body: "Office of Residential Tenancies (ORT)" },
  { prov: "Nova Scotia", notice: "Form D — 15 days", payStay: "Pay the overdue amount within 15 days to stay", body: "Residential Tenancies Program" },
  { prov: "New Brunswick", notice: "Notice to Vacate — at least 15 days", payStay: "Pay within 7 days to cancel", body: "Residential Tenancies Tribunal (Service NB)" },
  { prov: "Prince Edward Island", notice: "Form 4A — 10 days", payStay: "Pay within 10 days to void the notice", body: "Residential Tenancy Office (IRAC)" },
  { prov: "Newfoundland & Labrador", notice: "10-day notice (after rent is 5 days late)", payStay: "Pay the arrears to stop the eviction", body: "Residential Tenancies (Service NL)" },
];

const faqItems = [
  {
    q: "How much notice does a landlord need to evict for non-payment in Canada?",
    a: "It varies by province: Ontario's N4 gives 14 days, BC a 10-day notice, Alberta and Nova Scotia around 14–15 days, PEI 10 days, and Manitoba about 5 days. In every province you can usually stop the eviction by paying what you owe within the stated window.",
  },
  {
    q: "Can I stop an eviction by paying the rent I owe?",
    a: "In most provinces, yes. Paying the full overdue amount within the notice window generally cancels a non-payment eviction — Ontario even allows 'pay and stay' up to the eviction in many cases. Deadlines are short, so act fast and keep proof of payment.",
  },
  {
    q: "Can a landlord evict me themselves in Canada?",
    a: "No. In every province, only an order from the tenancy tribunal or court — enforced by a sheriff or bailiff — can remove you. A landlord who changes the locks or removes your belongings without an order is acting illegally.",
  },
  {
    q: "A notice period expired — do I have to leave?",
    a: "Not automatically. An expired notice lets the landlord apply to the tribunal; it doesn't itself evict you. You have the right to a hearing and to respond before any eviction order is made or enforced.",
  },
];

export default function EvictionNoticePeriodsCanadaPage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Eviction Notice Periods by Province in Canada",
    description:
      "Non-payment eviction notice periods, pay-and-stay windows, and the deciding tribunal for each Canadian province.",
    url: "https://leaseplain.com/eviction-notice-periods-canada",
    creator: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
    keywords: ["eviction", "notice period", "Canada", "by province"],
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
              <BreadcrumbNav className="mb-4" items={[{ label: "Home", href: "/" }, { label: "Eviction Notice Periods by Province" }]} />
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">Eviction Notice Periods by Province in Canada</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                How much notice must a landlord give before evicting for unpaid rent, and can you stop it by
                paying? The rules differ by province — but one thing is the same everywhere: a notice is not
                an eviction, and only a tribunal can force you out.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto space-y-10">
              <ReviewedByline updated="September 2026" />

              <div className="rounded-xl bg-blue-50 border border-blue-100 p-5 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-blue-900">
                  This table covers the most common eviction — <strong>non-payment of rent</strong>. Other
                  grounds (landlord&apos;s own use, renovations, cause) have their own, usually longer, notice
                  periods. See the province guides linked below for those.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse bg-white text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-4 py-3 font-bold text-slate-700">Province</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Non-payment notice</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Pay &amp; stay</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Decided by</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((r) => (
                      <tr key={r.prov} className="border-b border-slate-100 last:border-0 align-top">
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          {r.href ? <Link href={r.href} className="text-blue-600 hover:underline">{r.prov}</Link> : r.prov}
                        </td>
                        <td className="px-4 py-3 text-slate-700">{r.notice}</td>
                        <td className="px-4 py-3 text-slate-700">{r.payStay}</td>
                        <td className="px-4 py-3 text-slate-700">{r.body}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="prose-none space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">A notice is never an eviction</h2>
                <p className="text-slate-700 leading-relaxed">
                  Across Canada, a landlord can serve a notice, but they <strong>can&apos;t remove you
                  themselves</strong>. Only an order from the provincial tenancy tribunal or a court —
                  carried out by a sheriff or bailiff — can end your tenancy. That means you almost always
                  have a chance to <strong>pay the arrears and stay</strong>, or to dispute the notice at a
                  hearing.
                </p>
                <h2 className="text-2xl font-bold text-slate-900">Other eviction grounds</h2>
                <p className="text-slate-700 leading-relaxed">
                  For a landlord&apos;s own use, renovations, or sale, notice periods are longer — for example,
                  Ontario&apos;s N12 requires 60 days plus one month&apos;s compensation, BC&apos;s
                  landlord-use notice is three months, Alberta&apos;s is 90 days, and Quebec repossession
                  needs six months. See the province eviction guides for the details that apply to you.
                </p>
                <p className="text-sm text-slate-400">
                  Last reviewed: September 2026. Notice periods and forms change — confirm the current rule
                  with your provincial tenancy authority before relying on it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6">
                <h2 className="text-sm font-bold text-slate-900 mb-3">Eviction guides &amp; tools</h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {[
                    { label: "Ontario: got an N4 (non-payment)?", href: "/blog/n4-non-payment-rent-ontario" },
                    { label: "How to fight an illegal eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
                    { label: "BC eviction notices & the RTB", href: "/blog/bc-eviction-notices-rtb" },
                    { label: "The Alberta eviction process", href: "/blog/alberta-eviction-process" },
                    { label: "The Manitoba eviction process", href: "/blog/manitoba-eviction-process" },
                    { label: "Quebec repossession & eviction", href: "/blog/quebec-repossession-eviction" },
                    { label: "Eviction Notice Validity Checker", href: "/tools/eviction-notice-checker" },
                    { label: "Rent increase rules by province", href: "/rent-increase-rules-canada" },
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
                <strong>General information, not legal advice.</strong> Eviction rules vary by province and
                the reason for eviction. If you&apos;ve received a notice with a deadline, act quickly and get
                advice from your provincial tenancy authority or a tenant clinic.
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
