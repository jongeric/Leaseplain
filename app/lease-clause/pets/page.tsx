import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, ChevronRight, Upload, AlertTriangle, CheckCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";

export const dynamic = "force-static";

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/lease-clause/pets",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
};

export const metadata: Metadata = {
  title: "Pet Clause in a Lease: Can a Landlord Refuse Pets in Ontario? | LeasePlain",
  description:
    "Ontario law makes 'no pets' clauses void. Learn what landlords can and cannot require around pets in a lease, and what red flags to watch for in pet clauses.",
  alternates: { canonical: "https://leaseplain.com/lease-clause/pets" },
  keywords: ["pet clause lease Ontario", "no pets clause void RTA", "landlord refuse pets Canada", "pet deposit illegal Ontario", "tenant pet rights Ontario"],
  openGraph: {
    title: "Pet Clause in a Lease: Can a Landlord Refuse Pets in Ontario? | LeasePlain",
    description: "Ontario law makes 'no pets' clauses void. Learn what landlords can and cannot require around pets in a lease, and what red flags to watch for in pet clauses.",
    url: "https://leaseplain.com/lease-clause/pets",
    type: "website",
  },
};

const allowedRequirements = [
  { item: "Professional cleaning at move-out (carpets, upholstery) attributable to the pet" },
  { item: "Proof of renter's or tenant liability insurance, including pet coverage" },
  { item: "Agreement to repair any damage caused by the pet beyond normal wear and tear" },
  { item: "Written acknowledgement that if the pet causes ongoing disturbance to other tenants, that is grounds for a notice" },
];

const redFlags = [
  {
    flag: "Pet deposit or additional security deposit for pets",
    detail:
      "This is illegal in Ontario. Landlords can only collect one deposit — the last month's rent deposit. Any additional pet deposit is not permitted under the RTA, and you can recover it by filing a Form T1 with the LTB.",
  },
  {
    flag: "Clause threatening immediate eviction for owning a pet",
    detail:
      "A landlord cannot evict a tenant solely because they have a pet. The 'no pets' clause is void under s. 14 RTA. The only valid eviction grounds related to pets are damage to the property or ongoing disturbance to others.",
  },
  {
    flag: "Breed or size restrictions",
    detail:
      "While landlords may attempt to include breed or weight restrictions in a lease, these provisions are generally unenforceable in Ontario because s. 14 voids pet prohibition clauses broadly. However, condo corporations can have different rules that may override this for condo rental units.",
  },
  {
    flag: "Requirement to disclose all pets before move-in with landlord approval",
    detail:
      "A lease cannot require advance landlord approval for pets such that the denial of a pet is effectively a pet prohibition. If approval is unreasonably withheld, the clause may be unenforceable.",
  },
];

const faqs = [
  { q: "Can a landlord legally ban pets in Canada?", a: "Most provinces allow landlords to include no-pet clauses. However, Ontario is an exception — no-pet clauses in Ontario leases are void under the Residential Tenancies Act. In BC, Alberta, and most other provinces, no-pet clauses are generally enforceable." },
  { q: "Can a landlord refuse a service animal or emotional support animal?", a: "No. Across Canada, refusing a service animal is a human rights violation. Landlords must accommodate tenants with disabilities who rely on service animals, even if the lease contains a no-pet clause." },
  { q: "Can a landlord charge a pet deposit in Canada?", a: "This varies by province. BC allows a pet damage deposit of up to half a month's rent. Alberta includes pet damage in the general security deposit (capped at one month). Ontario bans any deposit beyond last month's rent, including pet deposits." },
  { q: "What happens if I get a pet without telling my landlord in Ontario?", a: "In Ontario, a no-pet clause is void, so getting a pet is technically your right. However, if the pet causes damage or disturbs neighbours, the landlord can seek eviction based on the damage or disturbance — not just for having the pet." },
  { q: "Do lease clauses about pet sizes or breeds hold up legally?", a: "Size and breed restrictions are less certain legally than outright bans. In Ontario, they may still be void along with the general no-pet clause. In other provinces, specific breed or size restrictions may be enforceable if clearly written in the lease." }
];

export default function PetsClausePage() {
  return (
    <>
      <ArticleSchema
        headline="Pet Clause in a Lease: Can a Landlord Refuse Pets in Ontario?"
        description="Ontario law makes 'no pets' clauses void. Learn what landlords can and cannot require around pets in a lease, and what red flags to watch for in pet clauses."
        url="https://leaseplain.com/lease-clause/pets"
        datePublished="2025-01-01"
        dateModified="2026-06-16"
        keywords={["pet clause lease Ontario", "no pets clause void RTA", "landlord refuse pets Canada", "pet deposit illegal Ontario", "tenant pet rights Ontario"]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          "name": "Pet Clause",
          "description": "A pet clause is a lease provision that governs whether tenants may keep animals in their rental unit and under what conditions. In Ontario, clauses that prohibit pets outright are void under section 14 of the Residential Tenancies Act — though landlords may still pursue eviction if a pet causes damage or disturbs other tenants.",
          "url": "https://leaseplain.com/lease-clause/pets",
          "inDefinedTermSet": {
            "@type": "DefinedTermSet",
            "name": "LeasePlain Lease Clause Library",
            "url": "https://leaseplain.com/glossary",
          },
        }).replace(/</g, "<") }}
      />
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Lease Clauses", href: "https://leaseplain.com/lease-clauses" },
        { name: "Pets", href: "https://leaseplain.com/lease-clause/pets" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema).replace(/</g, "<") }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(faq => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a }
            }))
          }).replace(/</g, "<")
        }}
      />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/lease-clauses" className="hover:underline">Lease Clauses</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Pets</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Heart className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Clause Explained
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Pet Clause in a Lease: Can a Landlord Refuse Pets in Ontario?
            </h1>
            <p className="speakable-summary text-lg text-slate-600 max-w-2xl leading-relaxed">
              Many Ontario leases contain a &ldquo;no pets&rdquo; clause — but most tenants don&apos;t
              know that this clause is void by law. Understanding your rights around pets
              can save you from unnecessary conflict and illegal charges.
            </p>
          </div>
        </section>

        {/* Content + sidebar */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Are &ldquo;No Pets&rdquo; Clauses Enforceable in Ontario?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  No — in most cases, they are not. Section 14 of Ontario&apos;s{" "}
                  <em>Residential Tenancies Act, 2006</em> (RTA) explicitly states:
                </p>
                <blockquote className="border-l-4 border-blue-400 pl-4 py-1 mb-5 bg-blue-50 rounded-r-lg">
                  <p className="text-sm text-blue-900 italic leading-relaxed">
                    &ldquo;A provision in a tenancy agreement prohibiting the presence of animals in or about
                    the residential complex is void.&rdquo;
                  </p>
                  <p className="text-xs text-blue-600 mt-1">— Residential Tenancies Act, 2006, s. 14</p>
                </blockquote>
                <p className="text-slate-700 leading-relaxed mb-4">
                  This means that even if your lease explicitly says &ldquo;no pets allowed,&rdquo; that
                  clause has no legal force. A landlord cannot evict a tenant solely for having a
                  pet. The Landlord and Tenant Board (LTB) will not enforce such a clause.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  However, the protection is not unconditional. Landlords retain the right to pursue
                  eviction proceedings if:
                </p>
                <ul className="flex flex-col gap-2 mb-4">
                  {[
                    "The pet causes significant damage to the rental unit or property",
                    "The pet causes ongoing noise, odour, or other disturbances that substantially interfere with other tenants' reasonable enjoyment",
                    "The pet poses a safety concern to other residents",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Important exception:</strong> If your unit is in a condominium, the condo
                  corporation&apos;s rules (which are separate from your lease and the RTA) may impose
                  valid pet restrictions, including breed bans. Condo rules are enforceable against
                  tenants where the landlord is obligated to comply with them. Always check the condo
                  declaration separately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Pet Clauses CAN Legally Require</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  While landlords cannot prohibit pets outright, they can include reasonable
                  conditions in the lease related to pets. The following are generally enforceable:
                </p>
                <ul className="flex flex-col gap-3">
                  {allowedRequirements.map((r) => (
                    <li key={r.item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r.item}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4">
                  These conditions must be reasonable and cannot amount to a de facto ban on pets.
                  For example, requiring $5,000 in additional insurance specifically for owning a
                  hamster would likely be considered unreasonable and potentially void.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags in Pet Clauses</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  These are the pet-related clause patterns that LeasePlain flags as potentially
                  illegal or unenforceable under Ontario law:
                </p>
                <div className="flex flex-col gap-5">
                  {redFlags.map((item) => (
                    <div key={item.flag} className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-semibold text-slate-800 mb-1">{item.flag}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqs} />
              </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your pet clause</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and our AI will flag any pet-related clauses that are illegal
                  under Ontario&apos;s RTA — including illegal pet deposits and void no-pet bans.
                </p>
                <Link
                  href="/upload"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                >
                  <Upload className="w-4 h-4" aria-hidden="true" />
                  Analyze My Lease
                </Link>
                <p className="text-xs text-blue-200 mt-3 text-center">Not legal advice</p>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Pages</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Security Deposit", href: "/lease-clause/security-deposit" },
                    { label: "Early Termination", href: "/lease-clause/early-termination" },
                    { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
                    { label: "BC Tenant Rights", href: "/tenant-rights/british-columbia" },
                    { label: "All Lease Clauses", href: "/lease-clauses" },
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

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">Ontario RTA Reference</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Pet clause rights come from <strong>s. 14 of the Residential Tenancies Act,
                  2006</strong>. For illegal pet deposits, file <strong>Form T1</strong> with the
                  LTB. Visit <strong>tribunalsontario.ca/ltb</strong> for forms and guidance.
                </p>
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
