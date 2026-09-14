import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewedByline from "@/components/ReviewedByline";
import { PiggyBank, ChevronRight } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Security Deposit Limits by Province in Canada (2026) | LeasePlain",
  description:
    "How much deposit a landlord can charge in every Canadian province, the return deadline, and whether interest is owed — Ontario, BC, Alberta, Quebec, Manitoba, Saskatchewan, Nova Scotia, New Brunswick, PEI, and Newfoundland — in one citable table.",
  alternates: { canonical: "https://leaseplain.com/security-deposit-limits-canada" },
  openGraph: {
    title: "Security Deposit Limits by Province in Canada (2026) | LeasePlain",
    description:
      "Maximum deposit, return deadline, and interest rules for every Canadian province in one comparison table.",
    url: "https://leaseplain.com/security-deposit-limits-canada",
    type: "article",
  },
  keywords: [
    "security deposit limits canada",
    "how much deposit can a landlord charge",
    "damage deposit by province",
    "security deposit return deadline canada",
    "deposit rules by province",
  ],
};

// Verified against provincial residential-tenancy authorities (Sept 2026).
// Deposit rules differ sharply by province — some ban deposits entirely.
const ROWS: Array<{
  prov: string;
  href?: string;
  max: string;
  deadline: string;
  interest: string;
  note: string;
}> = [
  { prov: "Ontario", href: "/blog/last-months-rent-deposit-ontario", max: "No security/damage deposit — only last month's rent (max 1 month)", deadline: "Applied to last month", interest: "Yes — at the rent guideline", note: "A damage deposit is illegal; only a last month's rent (LMR) deposit is allowed." },
  { prov: "British Columbia", href: "/blog/bc-security-deposit-rules", max: "½ month (+ ½ month pet deposit)", deadline: "15 days after end + forwarding address", interest: "Yes (prescribed rate)", note: "Miss the 15-day deadline and the landlord may owe double." },
  { prov: "Alberta", href: "/blog/alberta-security-deposit-rules", max: "1 month", deadline: "10 days (balance/statement); 30 days final", interest: "Yes — interest-bearing trust", note: "No separate pet deposit stacked on top." },
  { prov: "Quebec", href: "/blog/quebec-security-deposit-rules", max: "No deposit allowed — only first month's rent", deadline: "N/A", interest: "N/A", note: "Deposits are banned under article 1904 of the Civil Code." },
  { prov: "Manitoba", href: "/blog/manitoba-security-deposit-rules", max: "½ month", deadline: "14 days", interest: "Yes (set rate)", note: "Calculated on the full rent, not a promotional rate." },
  { prov: "Saskatchewan", max: "1 month", deadline: "7 business days", interest: "Yes", note: "Often collected in instalments over the first months." },
  { prov: "Nova Scotia", max: "½ month", deadline: "10 days", interest: "Yes", note: "Disputes go to the Residential Tenancies Program." },
  { prov: "New Brunswick", max: "1 month (most leases); 1 week for weekly", deadline: "~7 days for landlord to claim after you request it", interest: "Yes", note: "Deposit is held by the Tenant and Landlord Relations Office (Service NB); on a refund request the landlord has about 7 days to file a claim or it's returned." },
  { prov: "Prince Edward Island", max: "1 month", deadline: "15 days", interest: "Yes", note: "Held pending any claim through the tribunal." },
  { prov: "Newfoundland & Labrador", max: "¾ of first month (monthly); 2 weeks (weekly)", deadline: "10 days", interest: "Yes", note: "Return unless the landlord has a claim." },
];

const faqItems = [
  {
    q: "Which provinces don't allow security deposits?",
    a: "Ontario and Quebec don't allow a damage or security deposit. In Ontario a landlord can only collect a last month's rent (LMR) deposit; in Quebec no deposit is allowed at all beyond the first month's rent (article 1904 of the Civil Code).",
  },
  {
    q: "What's the most a landlord can charge for a deposit in Canada?",
    a: "It depends on the province. Caps range from half a month's rent (BC, Manitoba, Nova Scotia) to one month's rent (Alberta, Saskatchewan, PEI, and most New Brunswick leases). Ontario and Quebec don't permit a security deposit at all.",
  },
  {
    q: "How fast must a landlord return a deposit?",
    a: "Return deadlines vary: 7 business days in Saskatchewan, 10 days in Alberta (balance/statement), Nova Scotia, and Newfoundland, 14 days in Manitoba, and 15 days in BC and PEI. Ontario's LMR deposit is applied to your last month rather than returned.",
  },
  {
    q: "Do security deposits earn interest?",
    a: "In most provinces, yes — the landlord must pay interest at a rate set by the province (often small). Ontario pays interest on the last month's rent deposit at the annual rent-increase guideline rate.",
  },
];

export default function SecurityDepositLimitsCanadaPage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Security Deposit Limits by Province in Canada",
    description:
      "Maximum security/damage deposit, return deadline, and interest rules for each Canadian province.",
    url: "https://leaseplain.com/security-deposit-limits-canada",
    creator: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
    keywords: ["security deposit", "damage deposit", "Canada", "by province"],
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
              <BreadcrumbNav className="mb-4" items={[{ label: "Home", href: "/" }, { label: "Security Deposit Limits by Province" }]} />
              <div className="flex items-center gap-3 mb-4">
                <PiggyBank className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">Security Deposit Limits by Province in Canada</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                How much deposit can a landlord actually charge — and how fast must they give it back? The
                rules differ sharply across Canada, and two provinces ban security deposits entirely.
                Here&apos;s every province in one table.
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
                      <th className="px-4 py-3 font-bold text-slate-700">Maximum deposit</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Return deadline</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Interest?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((r) => (
                      <tr key={r.prov} className="border-b border-slate-100 last:border-0 align-top">
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          {r.href ? <Link href={r.href} className="text-blue-600 hover:underline">{r.prov}</Link> : r.prov}
                        </td>
                        <td className="px-4 py-3 text-slate-700">{r.max}</td>
                        <td className="px-4 py-3 text-slate-700">{r.deadline}</td>
                        <td className="px-4 py-3 text-slate-700">{r.interest}</td>
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
                  Two provinces stand apart: <strong>Ontario and Quebec don&apos;t allow a security or damage
                  deposit at all</strong>. Ontario permits only a last month&apos;s rent deposit; Quebec bans
                  deposits outright. Everywhere else, the cap is either <strong>half a month&apos;s rent</strong>{" "}
                  (BC, Manitoba, Nova Scotia) or <strong>one month&apos;s rent</strong> (Alberta, Saskatchewan,
                  PEI, most New Brunswick leases), with return deadlines from 7 days to 15 days.
                </p>
                <p className="text-sm text-slate-400">
                  Last reviewed: September 2026. Rules and rates change — confirm the current figure with your
                  provincial residential-tenancy authority before relying on it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6">
                <h2 className="text-sm font-bold text-slate-900 mb-3">Deposit guides by province</h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {[
                    { label: "Ontario: last month's rent deposit", href: "/blog/last-months-rent-deposit-ontario" },
                    { label: "BC security deposit rules", href: "/blog/bc-security-deposit-rules" },
                    { label: "Alberta security deposit rules", href: "/blog/alberta-security-deposit-rules" },
                    { label: "Quebec: can a landlord ask for a deposit?", href: "/blog/quebec-security-deposit-rules" },
                    { label: "Manitoba security deposit rules", href: "/blog/manitoba-security-deposit-rules" },
                    { label: "Deposit return calculator", href: "/tools/deposit-calculator" },
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
                <strong>General information, not legal advice.</strong> Deposit rules vary by province and
                individual lease terms. Confirm with your provincial tenancy authority for your situation.
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
