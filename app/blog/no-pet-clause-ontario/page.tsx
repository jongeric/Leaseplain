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
  title: "Can Your Landlord Say \"No Pets\" in Ontario? What the Law Actually Says | LeasePlain",
  description:
    "In Ontario, \"no pet\" clauses in a lease are void under the Residential Tenancies Act. Learn when a landlord can still refuse or evict over a pet, and what your rights are as a tenant with an animal.",
  alternates: { canonical: "https://leaseplain.com/blog/no-pet-clause-ontario" },
  openGraph: {
    title: "Can Your Landlord Say \"No Pets\" in Ontario? What the Law Actually Says | LeasePlain",
    description:
      "\"No pet\" lease clauses are void in Ontario. Here is when a landlord can still refuse or evict over a pet — and when they cannot.",
    url: "https://leaseplain.com/blog/no-pet-clause-ontario",
    type: "article",
    publishedTime: "2026-08-03T00:00:00Z",
    modifiedTime: "2026-08-03T00:00:00Z",
  },
  keywords: [
    "no pet clause ontario",
    "can landlord say no pets ontario",
    "pets rental ontario law",
    "RTA section 14 pets",
    "evicted for having a pet ontario",
  ],
};

const faqItems = [
  {
    q: "Are \"no pet\" clauses legal in Ontario?",
    a: "No. Under section 14 of Ontario's Residential Tenancies Act, any provision in a tenancy agreement that prohibits pets is void — it has no legal effect, even if you signed it. There is a narrow exception for condominiums where the condo corporation's own declaration bans a type of animal.",
  },
  {
    q: "Can a landlord refuse to rent to me because I have a pet?",
    a: "Yes — before you sign. A landlord can choose not to rent to a pet owner during the application stage. But once you are a tenant, they cannot enforce a no-pet clause or evict you simply for having a pet.",
  },
  {
    q: "Can I be evicted for having a pet in Ontario?",
    a: "Not just for having one. A landlord can only pursue eviction if the pet causes a real problem — substantial interference with others (excessive noise, aggression), damage beyond normal wear, a serious allergic reaction in the landlord or another tenant in a small building, or if the animal is inherently dangerous. The burden is on the landlord to prove it at the LTB.",
  },
  {
    q: "Does the exception for allergies always apply?",
    a: "No. The allergy exception is narrow. It generally applies where the landlord or another tenant has a serious allergic reaction and the building is small enough that avoidance isn't possible. In a large apartment building, an allergy claim rarely justifies removing a pet.",
  },
  {
    q: "Can my landlord charge a pet deposit or extra 'pet rent' in Ontario?",
    a: "No. Ontario only permits a last month's rent deposit. Pet deposits and separate 'pet rent' or non-refundable pet fees are not allowed under the Residential Tenancies Act.",
  },
];

export default function NoPetClauseOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline="Can Your Landlord Say &quot;No Pets&quot; in Ontario? What the Law Actually Says"
        description="In Ontario, 'no pet' clauses in a lease are void under the Residential Tenancies Act. Learn when a landlord can still refuse or evict over a pet, and what your rights are as a tenant with an animal."
        url="https://leaseplain.com/blog/no-pet-clause-ontario"
        datePublished="2026-08-03"
        dateModified="2026-08-03"
        keywords={[
          "no pet clause ontario",
          "can landlord say no pets ontario",
          "pets rental ontario law",
          "RTA section 14 pets",
          "evicted for having a pet ontario",
        ]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Can Your Landlord Say No Pets in Ontario?", href: "https://leaseplain.com/blog/no-pet-clause-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/no-pet-clause-ontario",
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
                <span>Can Your Landlord Say No Pets in Ontario?</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Ontario
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  August 3, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Can Your Landlord Say &quot;No Pets&quot; in Ontario? What the Law Actually Says
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                It surprises most renters: in Ontario, a &quot;no pets&quot; clause in your lease is
                void — legally meaningless — even if you signed it. But that isn&apos;t a blank cheque
                to keep any animal in any situation. Here is exactly where the line sits.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="August 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Core Rule: No-Pet Clauses Are Void</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Section 14 of Ontario&apos;s <em>Residential Tenancies Act</em> states that a
                    provision in a tenancy agreement prohibiting the presence of animals is{" "}
                    <strong>void</strong>. &quot;Void&quot; is stronger than &quot;unenforceable&quot; —
                    it means the clause never had any legal effect at all. Your landlord can print
                    &quot;absolutely no pets&quot; in bold on page one, you can initial it, and it still
                    binds no one.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    This is one of the clearest examples of a lease term that looks official but is
                    legally empty. If you want to know what other clauses fall into that category, our
                    guide to{" "}
                    <Link href="/blog/lease-red-flags-to-watch-for" className="text-blue-600 hover:underline">
                      lease red flags every renter should know
                    </Link>{" "}
                    walks through several.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Catch: Refusal Before You Sign Is Legal</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The void rule protects existing tenants. It does <strong>not</strong> force a
                    landlord to rent to you in the first place. During the application stage, a landlord
                    can decline a pet owner — that is a lawful screening decision (provided it isn&apos;t
                    a pretext for illegal discrimination on a protected ground like disability, which
                    covers service and support animals).
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    So the practical reality is: a landlord can try to avoid pet owners at the door, but
                    once you are a tenant, they cannot use the lease to force you or your pet out.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">When a Landlord Can Actually Act on a Pet</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Being unable to enforce a no-pet clause is not the same as pets being consequence-free.
                    A landlord can pursue eviction — with proper notice and an LTB order — where the
                    animal causes a genuine problem:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li><strong>Substantial interference:</strong> persistent excessive noise, aggression, or fouling common areas that seriously disrupts other tenants or the landlord.</li>
                    <li><strong>Damage:</strong> harm to the unit beyond normal wear and tear.</li>
                    <li><strong>Serious allergic reaction:</strong> where the landlord or another tenant has a severe allergy and the building is small enough that avoidance isn&apos;t realistic.</li>
                    <li><strong>Inherently dangerous animals:</strong> species that are dangerous by nature, or an animal prohibited by law.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    In each case, the <strong>landlord</strong> carries the burden of proving the problem
                    at the Landlord and Tenant Board. &quot;You have a dog and the lease said no dogs&quot;
                    is not, on its own, a valid ground.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Condominium Exception</h2>
                  <p className="text-slate-700 leading-relaxed">
                    There is one meaningful exception. If you rent a unit in a condominium and the condo
                    corporation&apos;s own declaration bans a type of animal, that restriction can apply
                    to you — because it flows from the condo rules, not the landlord&apos;s lease. If you
                    are renting a condo, ask to see the declaration and rules before you move a pet in.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">No Pet Deposits or &quot;Pet Rent&quot; Either</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Because Ontario only allows a last month&apos;s rent deposit, a landlord cannot charge
                    a pet deposit, a non-refundable pet fee, or extra monthly &quot;pet rent.&quot; If your
                    lease tacks on any of these, they are not enforceable — see our guide to the{" "}
                    <Link href="/blog/last-months-rent-deposit-ontario" className="text-blue-600 hover:underline">
                      last month&apos;s rent deposit rules
                    </Link>{" "}
                    for the full picture on what a landlord may collect.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Does your lease have a void clause?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your lease and we&apos;ll flag terms that Ontario law makes
                    unenforceable — from no-pet clauses to illegal deposits.
                  </p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Check My Lease
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "7 Lease Red Flags to Watch For", href: "/blog/lease-red-flags-to-watch-for" },
                      { label: "Last Month's Rent Deposit in Ontario", href: "/blog/last-months-rent-deposit-ontario" },
                      { label: "Ontario Standard Lease Explained", href: "/blog/ontario-standard-lease-explained" },
                      { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
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
