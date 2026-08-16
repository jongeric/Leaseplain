import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock, Info } from "lucide-react";
import ReviewedByline from "@/components/ReviewedByline";
import TableOfContents from "@/components/TableOfContents";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "What Is \"Right to Rent\"? UK Checks vs Canadian Rules | LeasePlain",
  description:
    "\"Right to rent\" means opposite things in the UK and Canada. In England, landlords must check immigration status by law. In Canada, demanding immigration documents is illegal discrimination. Here is the full comparison.",
  alternates: { canonical: "https://leaseplain.com/blog/right-to-rent-uk-vs-canada" },
  openGraph: {
    title: "What Is \"Right to Rent\"? UK Checks vs Canadian Rules | LeasePlain",
    description:
      "In England, landlords must check immigration status by law. In Canada, demanding immigration documents is illegal discrimination. The full comparison.",
    url: "https://leaseplain.com/blog/right-to-rent-uk-vs-canada",
    type: "article",
    publishedTime: "2026-07-14T00:00:00Z",
    modifiedTime: "2026-07-14T00:00:00Z",
  },
  keywords: [
    "what is right to rent",
    "right to rent check Canada",
    "does Canada have right to rent checks",
    "right to rent UK explained",
    "landlord immigration check Canada",
  ],
};

const faqItems = [
  {
    q: "Does Canada have right to rent checks like the UK?",
    a: "No. Canada has no equivalent of the UK's Right to Rent scheme. Canadian landlords have no legal duty — and no legal right — to verify a tenant's immigration status. In fact, the opposite rule applies: citizenship is a protected ground under provincial human rights codes, so demanding immigration documents as a condition of renting is illegal discrimination in Canada.",
  },
  {
    q: "What is the UK Right to Rent scheme?",
    a: "Introduced by the UK's Immigration Act 2014, the Right to Rent scheme requires private landlords in England to check that all adult occupiers have lawful immigration status before renting to them. Landlords who rent to someone without the right to rent face civil penalties — up to £5,000 per lodger or £10,000 per occupier for a first breach, and up to £10,000/£20,000 for repeat breaches — and, since the Immigration Act 2016, potential criminal prosecution with up to five years' imprisonment for knowingly renting to a disqualified person.",
  },
  {
    q: "Can a Canadian landlord ask about my immigration status?",
    a: "A landlord can ask questions relevant to the tenancy — like how long you plan to stay — but cannot require proof of citizenship, permanent residency, or a visa as a condition of renting. Citizenship is a protected ground under the Ontario Human Rights Code and its equivalents in every other province. If a landlord refuses you for declining to show immigration papers, that is grounds for a human rights complaint.",
  },
  {
    q: "Does the UK Right to Rent scheme apply in Scotland, Wales, or Northern Ireland?",
    a: "No. The Right to Rent checking duty applies in England only. It has not been extended to Scotland, Wales, or Northern Ireland, although the underlying legislation contemplated wider rollout.",
  },
  {
    q: "Is housing a legal right in Canada?",
    a: "Canada's National Housing Strategy Act (2019) recognizes the right to adequate housing as a fundamental human right affirmed in international law, and commits the federal government to progressively realize it. This is a policy commitment rather than an individually enforceable right to be given a home — but at the provincial level, human rights codes do give every person an enforceable right to equal treatment in housing, without discrimination.",
  },
];

const comparison = [
  {
    dimension: "What the term means",
    uk: "A legal duty on landlords to verify every adult occupier's immigration status before renting",
    canada: "Informal shorthand for the right to equal treatment in rental housing under human rights law",
  },
  {
    dimension: "Immigration checks by landlords",
    uk: "Mandatory in England (Immigration Act 2014)",
    canada: "Not required — and demanding immigration documents is illegal discrimination",
  },
  {
    dimension: "Penalty for the landlord",
    uk: "Civil fines up to £10,000–£20,000 per occupier; up to 5 years' prison for knowing breaches",
    canada: "Human rights liability for landlords who DO demand status documents or discriminate",
  },
  {
    dimension: "Who bears the burden",
    uk: "The tenant must prove status; the landlord must verify and keep records",
    canada: "The landlord must justify screening criteria; tenants cannot be required to prove citizenship",
  },
  {
    dimension: "Geographic scope",
    uk: "England only (not Scotland, Wales, or Northern Ireland)",
    canada: "Human rights protections apply in every province and territory",
  },
  {
    dimension: "Underlying policy",
    uk: "\"Hostile environment\" immigration enforcement via private landlords",
    canada: "Anti-discrimination: housing access independent of citizenship or origin",
  },
];

export default function RightToRentUkVsCanadaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <ArticleSchema
        headline="What Is 'Right to Rent'? UK Immigration Checks vs Canadian Tenant Rights"
        description="'Right to rent' means opposite things in the UK and Canada. In England, landlords must check immigration status by law. In Canada, demanding immigration documents is illegal discrimination. Here is the full comparison."
        url="https://leaseplain.com/blog/right-to-rent-uk-vs-canada"
        datePublished="2026-07-14"
        dateModified="2026-07-14"
        keywords={[
          "what is right to rent",
          "right to rent check Canada",
          "does Canada have right to rent checks",
          "right to rent UK explained",
          "landlord immigration check Canada",
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://leaseplain.com" },
          { name: "Blog", href: "https://leaseplain.com/blog" },
          { name: "Right to Rent: UK vs Canada", href: "https://leaseplain.com/blog/right-to-rent-uk-vs-canada" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "<") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/right-to-rent-uk-vs-canada",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", ".speakable-summary"],
            },
          }).replace(/</g, "<"),
        }}
      />
      <div className="flex flex-col min-h-full">
        <Navbar />

        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
                <Link href="/" className="hover:underline">Home</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <Link href="/blog" className="hover:underline">Blog</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>Right to Rent: UK vs Canada</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-200">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Canada
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  July 14, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                What Is &ldquo;Right to Rent&rdquo;? UK Immigration Checks vs Canadian Tenant Rights
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                &ldquo;Right to rent&rdquo; means nearly opposite things on either side of the
                Atlantic. In England, it is a legal scheme requiring landlords to verify every
                tenant&apos;s immigration status, with heavy fines for renting to someone without
                lawful status. In Canada, no such scheme exists — and a landlord who demands
                immigration documents is committing illegal discrimination. If you searched
                &ldquo;right to rent&rdquo; from Canada, here is what actually applies to you.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <ReviewedByline updated="August 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    The UK&apos;s Right to Rent Scheme, Briefly
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The UK&apos;s <em>Immigration Act 2014</em> created the Right to Rent scheme,
                    which took effect across England in 2016. It requires private landlords (and
                    letting agents, and even homeowners taking in lodgers) to check that every
                    adult who will occupy the property has lawful immigration status before the
                    tenancy starts — by inspecting passports, visas, or the Home Office&apos;s
                    online share-code system.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The penalties are what give the scheme teeth. A first breach can bring civil
                    fines of up to <strong>£5,000 per lodger or £10,000 per occupier</strong>;
                    repeat breaches rise to <strong>£10,000 and £20,000</strong> respectively.
                    Since the <em>Immigration Act 2016</em>, a landlord who knowingly rents to
                    someone without the right to rent can face criminal prosecution and up to{" "}
                    <strong>five years&apos; imprisonment</strong>. Landlords who perform the
                    prescribed checks earn a &ldquo;statutory excuse&rdquo; against liability.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    The scheme applies in <strong>England only</strong> — not Scotland, Wales, or
                    Northern Ireland — and has been criticized by UK courts and housing groups for
                    encouraging landlords to discriminate against anyone who looks or sounds
                    &ldquo;foreign&rdquo; rather than risk a fine.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Canada Has No Right to Rent Checks — It Has the Opposite
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Canada has never adopted anything like the UK scheme. No federal or provincial
                    law requires a landlord to verify immigration status, and no penalty exists for
                    renting to someone without status. A Canadian landlord is simply not part of
                    immigration enforcement.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    More than that: the legal pressure runs the other way.{" "}
                    <strong>Citizenship</strong> and <strong>place of origin</strong> are protected
                    grounds under the Ontario <em>Human Rights Code</em> and its equivalents in
                    every province and territory. A landlord who demands a passport, permanent
                    resident card, or visa as a condition of renting — or refuses applicants who
                    decline to show one — is exposed to a human rights complaint, with remedies
                    that can include monetary compensation.
                  </p>
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-blue-900 text-sm mb-1">
                          The one-sentence answer
                        </p>
                        <p className="text-blue-800 text-sm leading-relaxed">
                          In England, a landlord who fails to check your immigration status can be
                          fined. In Canada, a landlord who insists on checking it can be taken to a
                          human rights tribunal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Side by Side: Right to Rent in the UK vs Canada
                  </h2>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 text-slate-600 text-xs font-semibold uppercase tracking-wide">
                        <tr>
                          <th className="text-left px-4 py-3 w-1/4">Dimension</th>
                          <th className="text-left px-4 py-3">United Kingdom (England)</th>
                          <th className="text-left px-4 py-3">Canada</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {comparison.map((row) => (
                          <tr key={row.dimension} className="hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 font-semibold text-slate-800">{row.dimension}</td>
                            <td className="px-4 py-3 text-slate-600">{row.uk}</td>
                            <td className="px-4 py-3 text-slate-600">{row.canada}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Is Housing a &ldquo;Right&rdquo; in Canada at All?
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    In a different sense, yes. Canada&apos;s <em>National Housing Strategy Act</em>{" "}
                    (2019) formally recognizes that &ldquo;the right to adequate housing is a
                    fundamental human right affirmed in international law&rdquo; and commits the
                    federal government to its progressive realization. That is a policy commitment —
                    it does not let an individual sue for an apartment.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    The enforceable right Canadian renters hold is narrower and more practical:
                    the right to <strong>equal treatment in housing without discrimination</strong>,
                    enforceable at provincial human rights tribunals, plus the protections of each
                    province&apos;s tenancy legislation once a lease exists. For what those
                    protections cover — deposits, rent increases, repairs, evictions — see our{" "}
                    <Link href="/tenant-rights/canada" className="text-blue-600 hover:underline">
                      Canadian tenant rights guide
                    </Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} includeSchema={false} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Renting in Canada?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your lease and LeasePlain will explain it clause by clause — and flag
                    anything that conflicts with your provincial rights.
                  </p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Review My Lease
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Your Right to Rent in Canada", href: "/blog/right-to-rent-canada" },
                      { label: "Renting Without Canadian Credit History", href: "/blog/renting-without-credit-history-canada" },
                      { label: "Tenant Rights in Canada", href: "/tenant-rights/canada" },
                      { label: "First Apartment Checklist", href: "/blog/first-apartment-checklist-canada" },
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
