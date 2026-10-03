import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewedByline from "@/components/ReviewedByline";
import { PawPrint, ChevronRight } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Can a Landlord Say No Pets? Pet Rules by Province in Canada (2026) | LeasePlain",
  description:
    "Whether a landlord can refuse pets or enforce a 'no-pet' clause in every Canadian province — Ontario is the one province where no-pet clauses are void. Pet deposits, service animals, and the rules in one citable table.",
  alternates: { canonical: "https://leaseplain.com/pet-rules-by-province-canada" },
  openGraph: {
    title: "Can a Landlord Say No Pets? Pet Rules by Province in Canada (2026) | LeasePlain",
    description:
      "Can a landlord refuse pets? No-pet clauses, pet deposits, and service-animal rules for every Canadian province in one table.",
    url: "https://leaseplain.com/pet-rules-by-province-canada",
    type: "article",
  },
  keywords: [
    "can a landlord say no pets canada",
    "no pet clause by province",
    "pet deposit canada",
    "are no-pet clauses legal",
    "renting with pets canada",
  ],
};

// Verified against provincial residential-tenancy authorities (Oct 2026).
// Ontario is the notable outlier: no-pet clauses are void once a lease is signed.
const ROWS: Array<{
  prov: string;
  href?: string;
  canRefuse: string;
  deposit: string;
  note: string;
}> = [
  { prov: "Ontario", href: "/blog/no-pet-clause-ontario", canRefuse: "No — 'no-pet' clauses are void", deposit: "No pet deposit allowed", note: "Under RTA s.14 a no-pet clause is void once the lease is signed. A landlord can still refuse an applicant, and can seek eviction if a pet causes damage, allergic reactions, or is a dangerous breed." },
  { prov: "British Columbia", canRefuse: "Yes — if stated in the lease", deposit: "Pet damage deposit up to ½ month's rent", note: "Landlords may ban pets or limit type/size/number if written into the tenancy agreement. The pet deposit is on top of the security deposit." },
  { prov: "Alberta", canRefuse: "Yes — if stated in the lease", deposit: "No separate pet deposit (one deposit cap)", note: "Landlords can enforce no-pet clauses and set rules on breed, size, and number. Any pet-related damage comes out of the single security deposit." },
  { prov: "Quebec", canRefuse: "Yes — no-pet clauses are generally enforceable", deposit: "No deposits allowed at all", note: "A signed no-pet clause is binding. (A 2026 TAL ruling questioned such clauses on Charter grounds, but the law is unchanged — treat a no-pet clause as enforceable for now.)" },
  { prov: "Manitoba", canRefuse: "Yes — if stated in the lease", deposit: "Pet deposit allowed (counts toward the ½-month cap)", note: "Landlords may prohibit or restrict pets; a pet damage deposit is permitted within the overall deposit limit." },
  { prov: "Saskatchewan", canRefuse: "Yes — if stated in the lease", deposit: "Within the one-month deposit cap", note: "No-pet clauses and pet restrictions are enforceable." },
  { prov: "Nova Scotia", canRefuse: "Yes — if stated in the lease", deposit: "No separate pet deposit", note: "Landlords may set a no-pet policy; damage is covered by the standard deposit." },
  { prov: "New Brunswick", canRefuse: "Yes — if stated in the lease", deposit: "Within the standard deposit", note: "No-pet clauses are enforceable." },
  { prov: "Prince Edward Island", canRefuse: "Yes — if stated in the lease", deposit: "Within the standard deposit", note: "Landlords may prohibit or restrict pets by lease term." },
  { prov: "Newfoundland & Labrador", canRefuse: "Yes — if stated in the lease", deposit: "Within the standard deposit", note: "No-pet clauses are enforceable." },
];

const faqItems = [
  {
    q: "Can a landlord say no to pets in Canada?",
    a: "In most provinces, yes — a landlord can refuse pets or enforce a 'no-pet' clause if it's in the lease. Ontario is the key exception: under the Residential Tenancies Act, a no-pet clause is void once you've signed, so you generally can't be evicted just for having a pet (unless it causes damage, serious disturbance, or allergic reactions, or is a dangerous breed).",
  },
  {
    q: "Are no-pet clauses legal?",
    a: "It depends on the province. In Ontario, a no-pet clause in a signed lease is void and unenforceable. In BC, Alberta, Quebec, and the rest of Canada, a no-pet clause written into the lease is generally enforceable. A landlord anywhere can decline to rent to a pet owner before the lease is signed.",
  },
  {
    q: "Can a landlord charge a pet deposit?",
    a: "Only where provincial law allows it. BC permits a separate pet damage deposit of up to half a month's rent. Most other provinces fold any pet-related damage into the single security deposit, and Ontario and Quebec don't allow pet (or any) damage deposits at all.",
  },
  {
    q: "Can a landlord refuse a service animal?",
    a: "No. Certified service and guide animals are protected under human-rights legislation across Canada. They aren't 'pets' for the purpose of no-pet clauses, can't be charged a pet fee or deposit, and a landlord generally can't refuse them.",
  },
];

export default function PetRulesByProvinceCanadaPage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Pet Rules by Province in Canada",
    description:
      "Whether a landlord can refuse pets or enforce a no-pet clause, and pet-deposit rules, for each Canadian province.",
    url: "https://leaseplain.com/pet-rules-by-province-canada",
    creator: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
    keywords: ["pets", "no-pet clause", "pet deposit", "service animals", "Canada", "by province"],
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
              <BreadcrumbNav className="mb-4" items={[{ label: "Home", href: "/" }, { label: "Pet Rules by Province" }]} />
              <div className="flex items-center gap-3 mb-4">
                <PawPrint className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">Can a Landlord Say No Pets? Rules by Province</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Can your landlord ban your pet? In most of Canada, yes — if it&apos;s in the lease. But
                Ontario is the one province where a signed &quot;no-pet&quot; clause is void. Here&apos;s
                every province, plus pet deposits and service-animal rules.
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
                      <th className="px-4 py-3 font-bold text-slate-700">Can a landlord refuse pets?</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Pet deposit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((r) => (
                      <tr key={r.prov} className="border-b border-slate-100 last:border-0 align-top">
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          {r.href ? <Link href={r.href} className="text-blue-600 hover:underline">{r.prov}</Link> : r.prov}
                        </td>
                        <td className="px-4 py-3 text-slate-700">{r.canRefuse}</td>
                        <td className="px-4 py-3 text-slate-700">{r.deposit}</td>
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
                  <strong>Ontario stands alone:</strong> once you&apos;ve signed, a no-pet clause there is
                  void. Everywhere else in Canada, a no-pet clause written into the lease is generally
                  enforceable, and a landlord can decline a pet-owning applicant before signing. Two rules
                  are nationwide: <strong>certified service animals are always protected</strong> under
                  human-rights law, and a pet that causes real damage or disturbance can lead to eviction
                  anywhere — Ontario included.
                </p>
                <p className="text-sm text-slate-400">
                  Last reviewed: October 2026. Rules change — confirm with your provincial tenancy
                  authority before relying on it.
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
                    { label: "Can your landlord say 'no pets' in Ontario?", href: "/blog/no-pet-clause-ontario" },
                    { label: "Can my landlord say no pets? (Ontario answer)", href: "/answers/can-my-landlord-say-no-pets-in-ontario" },
                    { label: "Security deposit limits by province", href: "/security-deposit-limits-canada" },
                    { label: "BC security deposit & pet deposit rules", href: "/blog/bc-security-deposit-rules" },
                    { label: "Normal wear and tear vs. damage", href: "/blog/normal-wear-and-tear-vs-damage-canada" },
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
                <strong>General information, not legal advice.</strong> Pet rules vary by province and
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
