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
  title: "Renting an Illegal Basement Apartment in Ontario: Your Rights | LeasePlain",
  description:
    "Even if your basement apartment isn't legally registered, you're still a tenant with full rights under the Residential Tenancies Act. What 'illegal' really means, why you can't be evicted for it, and the real risks.",
  alternates: { canonical: "https://leaseplain.com/blog/illegal-basement-apartment-ontario" },
  openGraph: {
    title: "Renting an Illegal Basement Apartment in Ontario: Your Rights | LeasePlain",
    description:
      "An unregistered basement unit doesn't strip you of tenant rights in Ontario. Here's what actually matters.",
    url: "https://leaseplain.com/blog/illegal-basement-apartment-ontario",
    type: "article",
    publishedTime: "2026-09-07T00:00:00Z",
    modifiedTime: "2026-09-07T00:00:00Z",
  },
  keywords: [
    "illegal basement apartment ontario tenant rights",
    "unregistered basement unit ontario",
    "is my basement apartment legal ontario",
    "second unit rules ontario",
    "basement apartment eviction ontario",
  ],
};

const faqItems = [
  {
    q: "Do I have tenant rights in an illegal basement apartment?",
    a: "Yes. The Residential Tenancies Act protects you as a tenant regardless of whether the unit is legally registered or meets zoning and building codes. You have the same rights to security of tenure, rent rules, and protection from illegal eviction as any other tenant.",
  },
  {
    q: "Can my landlord evict me because the unit is illegal?",
    a: "Not for that reason alone. A landlord can't use the fact that they rented you a non-compliant unit as grounds to evict you through the LTB. If the city orders the unit closed, there are specific processes and you may be entitled to compensation — but the landlord can't simply throw you out.",
  },
  {
    q: "What are the real risks of an illegal unit?",
    a: "The main risks are safety (units that skip fire, egress, and electrical standards can be dangerous) and disruption if the municipality orders the landlord to bring it up to code or close it. Your legal tenant protections stay intact either way.",
  },
  {
    q: "Should I report an illegal apartment?",
    a: "That's a personal decision. Reporting can force safety fixes but may also lead the city to order the unit closed, disrupting your housing. If safety is the concern, talk to a tenant clinic first so you understand your options and any compensation you might be owed.",
  },
];

export default function IllegalBasementApartmentOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline="Renting an Illegal Basement Apartment in Ontario: What Are Your Rights?"
        description="Even if your basement apartment isn't legally registered, you're still a tenant with full rights under the Residential Tenancies Act. What 'illegal' really means and the real risks."
        url="https://leaseplain.com/blog/illegal-basement-apartment-ontario"
        datePublished="2026-09-07"
        dateModified="2026-09-07"
        keywords={["illegal basement apartment ontario tenant rights", "unregistered basement unit ontario", "second unit rules ontario"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Illegal Basement Apartments in Ontario", href: "https://leaseplain.com/blog/illegal-basement-apartment-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/illegal-basement-apartment-ontario",
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
                <span>Illegal Basement Apartments in Ontario</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Ontario
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  September 7, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Renting an Illegal Basement Apartment in Ontario: What Are Your Rights?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                A huge share of Ontario&apos;s affordable rentals are basement units — and many were never
                registered with the city. If you&apos;re worried that a &quot;non-legal&quot; apartment
                means you have no rights, breathe: the law protects you as a tenant either way.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">&quot;Illegal&quot; Doesn&apos;t Mean &quot;No Rights&quot;</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    This is the single most important thing to understand: the{" "}
                    <strong>Residential Tenancies Act protects you regardless of whether the unit is
                    legal</strong>. Whether the apartment was registered as a second unit, meets zoning,
                    or passed a building inspection has <strong>no bearing</strong> on your status as a
                    tenant. You have security of tenure, the same rent protections, and the same shield
                    against illegal eviction as anyone in a purpose-built apartment.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Landlords sometimes imply the opposite to pressure tenants. Don&apos;t fall for it.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What &quot;Legal&quot; Actually Requires</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    A legal second unit (basement apartment) in Ontario generally must meet:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Zoning / registration</strong> permitting a second unit at that address;</li>
                    <li><strong>Building Code</strong> requirements — ceiling height, room sizes, and a proper exit;</li>
                    <li><strong>Fire Code</strong> requirements — smoke and carbon-monoxide alarms, fire separation, and safe egress.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mt-3">
                    Since 2011, most Ontario municipalities are required to permit second units in houses,
                    but each unit still has to actually meet these standards to be &quot;legal.&quot;
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">You Can&apos;t Be Evicted Just for the Unit Being Illegal</h2>
                  <p className="text-slate-700 leading-relaxed">
                    A landlord can&apos;t use their own failure to register or bring the unit up to code as
                    an LTB ground to evict you. If the <strong>municipality</strong> orders the unit closed
                    for safety, there are specific legal processes — and you may be entitled to
                    compensation for having to move. Either way, a landlord who tries to force you out
                    without an LTB order is acting illegally. See{" "}
                    <Link href="/blog/how-to-fight-an-illegal-eviction-ontario" className="text-blue-600 hover:underline">how to fight an illegal eviction</Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Real Risks to Weigh</h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Safety.</strong> Units that skip fire separation, alarms, or a proper exit can be genuinely dangerous. Confirm you have working smoke and CO alarms and a way out.</li>
                    <li><strong>Disruption.</strong> If the city gets involved, the landlord may be ordered to renovate or close the unit, which can affect your housing.</li>
                    <li><strong>Repairs.</strong> Your landlord still owes you a unit in a good state of repair — the &quot;illegal&quot; status is not an excuse to skip maintenance.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Facing an eviction threat?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Check whether an eviction notice is even valid with our free checker.
                  </p>
                  <Link href="/tools/eviction-notice-checker" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Eviction Notice Checker
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "How to Fight an Illegal Eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
                      { label: "Landlord Repair Obligations", href: "/blog/landlord-repair-obligations-canada" },
                      { label: "Heat & Air Conditioning Rules", href: "/blog/landlord-heat-air-conditioning-ontario" },
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
