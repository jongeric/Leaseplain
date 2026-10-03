import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewedByline from "@/components/ReviewedByline";
import { DoorClosed, ChevronRight } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Breaking a Lease in Canada: Penalties & Rules by Province (2026) | LeasePlain",
  description:
    "How to break a fixed-term lease early in every Canadian province — the legal route (assign, sublet, mutual agreement), what you actually owe, and the landlord's duty to re-rent. Ontario, BC, Alberta, Quebec, and more in one table.",
  alternates: { canonical: "https://leaseplain.com/breaking-a-lease-canada" },
  openGraph: {
    title: "Breaking a Lease in Canada: Penalties & Rules by Province (2026) | LeasePlain",
    description:
      "The legal route to end a fixed-term lease early and what you owe, for every Canadian province in one table.",
    url: "https://leaseplain.com/breaking-a-lease-canada",
    type: "article",
  },
  keywords: [
    "breaking a lease canada",
    "how to break a lease early",
    "lease break penalty by province",
    "early termination lease canada",
    "can i break my lease",
  ],
};

// Verified against provincial residential-tenancy authorities (Oct 2026).
// No province charges an automatic flat penalty; liability is driven by the
// landlord's duty to mitigate (re-rent) the unit.
const ROWS: Array<{
  prov: string;
  href?: string;
  route: string;
  owe: string;
  note: string;
}> = [
  { prov: "Ontario", href: "/blog/how-to-break-a-lease-ontario", route: "Assign or sublet; or agree to end (N11)", owe: "Rent until re-rented; no flat penalty", note: "A landlord can't unreasonably refuse an assignment. 'Lease-break fees' beyond actual loss are not enforceable; the landlord must try to re-rent." },
  { prov: "British Columbia", href: "/blog/bc-breaking-a-lease", route: "Assign/sublet (consent not unreasonably withheld); mutual agreement", owe: "Landlord's actual re-rent loss; liquidated-damages clause only if a genuine estimate", note: "A flat 'one month penalty' is only enforceable if it's a genuine pre-estimate of costs, not a punishment." },
  { prov: "Alberta", href: "/blog/alberta-breaking-a-lease", route: "Assign/sublet; mutual agreement", owe: "Rent until re-rented + actual costs", note: "Fixed term is binding, but the landlord must make reasonable efforts to re-rent and reduce your loss." },
  { prov: "Quebec", href: "/blog/quebec-ending-your-lease", route: "Assign the lease (strongest option) or sublet", owe: "Usually nothing if you assign; landlord's reasonable expenses only", note: "On an assignment the landlord can only refuse for a serious reason and must reimburse your reasonable expenses. Special early-termination rights exist (senior care, safety, domestic violence)." },
  { prov: "Manitoba", route: "Assign/sublet (consent not unreasonably withheld); mutual agreement", owe: "Rent until re-rented", note: "Landlord must take reasonable steps to re-rent; you're liable only for the actual shortfall." },
  { prov: "Saskatchewan", route: "Assign/sublet; mutual agreement", owe: "Rent until re-rented", note: "Duty to mitigate applies. Early-termination allowed for domestic violence with a certificate." },
  { prov: "Nova Scotia", route: "Assign/sublet (consent not unreasonably withheld); mutual agreement", owe: "Rent until re-rented", note: "Early termination allowed in set situations (safety, domestic violence, care facility)." },
  { prov: "New Brunswick", route: "Mutual agreement; Residential Tenancies Tribunal", owe: "Varies — tribunal can set terms", note: "The Tribunal can end a lease early and decide what, if anything, is owed." },
  { prov: "Prince Edward Island", route: "Assign/sublet; mutual agreement", owe: "Rent until re-rented", note: "Landlord must mitigate; early termination for domestic violence is available." },
  { prov: "Newfoundland & Labrador", route: "Mutual agreement; assign/sublet", owe: "Rent until re-rented", note: "Liability is limited by the landlord's duty to re-rent the unit." },
];

const faqItems = [
  {
    q: "Can I break my lease early in Canada?",
    a: "Yes, but a fixed-term lease doesn't simply end when you leave. In almost every province the practical routes are: assign the lease, sublet, or reach a mutual agreement to end it. If you just move out, you can be liable for rent until the unit is re-rented — but the landlord has a legal duty to try to re-rent and reduce your loss.",
  },
  {
    q: "What's the penalty for breaking a lease?",
    a: "No Canadian province imposes an automatic flat penalty. You're generally liable only for the landlord's actual loss — rent until the unit is re-rented plus reasonable re-rent costs (advertising). A fixed 'lease-break fee' is only enforceable if it's a genuine estimate of those costs, not a punishment.",
  },
  {
    q: "Does my landlord have to try to re-rent?",
    a: "Yes. The 'duty to mitigate' applies across Canada: your landlord must make reasonable efforts to find a new tenant. Once the unit is re-rented, your liability stops. If the landlord sits on an empty unit without trying, that can reduce or eliminate what you owe.",
  },
  {
    q: "Can I break my lease because of domestic violence?",
    a: "Many provinces — including Ontario (with an N15), BC, Saskatchewan, Nova Scotia, PEI, and others — allow a tenant to end a lease early for domestic or sexual violence, usually with shortened notice and supporting documentation. Check your province's specific form and requirements.",
  },
];

export default function BreakingALeaseCanadaPage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Breaking a Lease: Rules and Liability by Province in Canada",
    description:
      "The legal route to end a fixed-term lease early and what a tenant owes, for each Canadian province.",
    url: "https://leaseplain.com/breaking-a-lease-canada",
    creator: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
    keywords: ["breaking a lease", "early termination", "duty to mitigate", "Canada", "by province"],
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
              <BreadcrumbNav className="mb-4" items={[{ label: "Home", href: "/" }, { label: "Breaking a Lease by Province" }]} />
              <div className="flex items-center gap-3 mb-4">
                <DoorClosed className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">Breaking a Lease in Canada: Rules by Province</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Need to leave before your lease ends? No province charges an automatic penalty — what
                you owe depends on the legal route you take and your landlord&apos;s duty to re-rent.
                Here&apos;s how it works in every province.
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
                      <th className="px-4 py-3 font-bold text-slate-700">Main legal route</th>
                      <th className="px-4 py-3 font-bold text-slate-700">What you typically owe</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((r) => (
                      <tr key={r.prov} className="border-b border-slate-100 last:border-0 align-top">
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          {r.href ? <Link href={r.href} className="text-blue-600 hover:underline">{r.prov}</Link> : r.prov}
                        </td>
                        <td className="px-4 py-3 text-slate-700">{r.route}</td>
                        <td className="px-4 py-3 text-slate-700">{r.owe}</td>
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
                  The single most important rule across Canada is the <strong>duty to mitigate</strong>:
                  your landlord must make reasonable efforts to re-rent the unit, and once they do, your
                  liability ends. That&apos;s why the strongest move is almost always to{" "}
                  <strong>assign or sublet</strong> (in Quebec, assignment can end your liability
                  entirely) rather than simply walking away. A flat &quot;lease-break fee&quot; is only
                  enforceable if it&apos;s a genuine estimate of the landlord&apos;s costs.
                </p>
                <p className="text-sm text-slate-400">
                  Last reviewed: October 2026. Rules change and leases vary — confirm with your
                  provincial tenancy authority before relying on it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6">
                <h2 className="text-sm font-bold text-slate-900 mb-3">Break-a-lease guides &amp; tools</h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {[
                    { label: "How to break a lease in Ontario", href: "/blog/how-to-break-a-lease-ontario" },
                    { label: "Breaking a lease in BC", href: "/blog/bc-breaking-a-lease" },
                    { label: "Breaking a lease in Alberta", href: "/blog/alberta-breaking-a-lease" },
                    { label: "Ending your lease in Quebec", href: "/blog/quebec-ending-your-lease" },
                    { label: "Lease break cost calculator", href: "/tools/lease-break-calculator" },
                    { label: "Subletting & assignment (Ontario)", href: "/blog/subletting-assignment-ontario" },
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
                <strong>General information, not legal advice.</strong> Early-termination rules vary by
                province and lease. Confirm with your provincial tenancy authority for your situation.
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
