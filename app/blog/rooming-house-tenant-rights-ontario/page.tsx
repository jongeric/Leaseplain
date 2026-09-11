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
  title: "Rooming House & Shared Housing Tenant Rights in Ontario | LeasePlain",
  description:
    "Renting a room in a rooming or boarding house in Ontario? You usually have full Residential Tenancies Act rights — with one key exception for sharing a kitchen or bathroom with the owner. Your rights explained.",
  alternates: { canonical: "https://leaseplain.com/blog/rooming-house-tenant-rights-ontario" },
  openGraph: {
    title: "Rooming House & Shared Housing Tenant Rights in Ontario | LeasePlain",
    description:
      "When rooming-house and shared-housing renters are covered by the RTA in Ontario — and the owner-sharing exception.",
    url: "https://leaseplain.com/blog/rooming-house-tenant-rights-ontario",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["rooming house tenant rights ontario", "renting a room ontario rights", "boarding house rights ontario", "shared kitchen bathroom landlord ontario", "single room occupancy ontario"],
};

const faqItems = [
  {
    q: "Do I have tenant rights renting a room in Ontario?",
    a: "Usually yes. If you rent a room in a rooming or boarding house, you're generally a full tenant under the Residential Tenancies Act — unless you share a kitchen or bathroom with the owner (or their close family) who lives in the building.",
  },
  {
    q: "What is the shared-kitchen-or-bathroom exception?",
    a: "The RTA doesn't apply if you share a kitchen or bathroom with the owner or the owner's close family member living in the same building. Sharing with other tenants or roomers (not the owner) doesn't remove your coverage.",
  },
  {
    q: "Can a rooming-house landlord evict me without the LTB?",
    a: "If you're covered by the RTA, no — only the Landlord and Tenant Board can order an eviction, enforced by the Sheriff. A landlord who locks you out or removes your belongings is acting illegally.",
  },
  {
    q: "Does the landlord have to give me a receipt for room rent?",
    a: "Yes, if you're covered by the RTA. On request, the landlord must provide a free rent receipt, including for up to 12 months after you move out.",
  },
];

export default function RoomingHouseTenantRightsOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline={"Rooming House and Shared Housing Tenant Rights in Ontario"}
        description={"Renting a room in a rooming or boarding house in Ontario? You usually have full Residential Tenancies Act rights — with one key exception for sharing a kitchen or bathroom with the owner. Your rights explained."}
        url="https://leaseplain.com/blog/rooming-house-tenant-rights-ontario"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["rooming house tenant rights ontario", "renting a room ontario rights", "boarding house rights ontario"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Rooming House Rights in Ontario", href: "https://leaseplain.com/blog/rooming-house-tenant-rights-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/rooming-house-tenant-rights-ontario",
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
                <span>Rooming House Rights in Ontario</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Ontario
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  September 11, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Rooming House &amp; Shared Housing Tenant Rights in Ontario
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Renting a single room is one of the most affordable ways to live in Ontario&apos;s cities — and one of the most misunderstood. Most roomers have the same rights as any tenant, but one specific living arrangement changes everything.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Most Roomers Are Full Tenants</h2>
                  <p className="text-slate-700 leading-relaxed">If you rent a room in a rooming or boarding house, you&apos;re usually a <strong>tenant under the Residential Tenancies Act</strong>, with the same core rights as anyone: proper notice, rent-increase limits, the right to repairs, receipts on request, and protection from illegal eviction. The landlord can&apos;t just change your lock or put your things on the curb.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The One Big Exception</h2>
                  <p className="text-slate-700 leading-relaxed">The RTA does <strong>not</strong> apply if you share a <strong>kitchen or bathroom with the owner</strong> (or the owner&apos;s close family member) who lives in the building. In that situation you&apos;re not covered by the Act, and different, weaker rules apply. This exception is specifically about sharing with the <strong>owner</strong> — not with other roomers or tenants.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Sharing With Other Tenants Is Fine</h2>
                  <p className="text-slate-700 leading-relaxed">If you share a kitchen or bathroom with <strong>other renters</strong> (but not the owner), you&apos;re still a full tenant under the Act. A house full of roomers who each rent their own room, sharing common areas, are generally all covered.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Your Everyday Rights as a Roomer</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">When you&apos;re covered, you&apos;re entitled to:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Rent receipts</strong> on request, for free.</li>
                    <li><strong>Proper notice</strong> before the landlord enters your room (24 hours, in writing, for most reasons).</li>
                    <li><strong>Rent-increase protection</strong> — the guideline, once a year, with 90 days&apos; notice.</li>
                    <li><strong>A real eviction process</strong> — only the LTB and Sheriff can remove you.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Watch for Illegal Rooming Houses</h2>
                  <p className="text-slate-700 leading-relaxed">Some rooming houses aren&apos;t licensed or up to fire code. As with an <Link href="/blog/illegal-basement-apartment-ontario" className="text-blue-600 hover:underline">illegal basement apartment</Link>, that doesn&apos;t strip your tenant rights — but do check you have working smoke and carbon-monoxide alarms and a safe exit.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Know your rights by province</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Get an instant reference card for deposits, notice, and rent rules.
                  </p>
                  <Link href="/tools/tenant-rights-lookup" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Tenant Rights Lookup
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Illegal Basement Apartments in Ontario", href: "/blog/illegal-basement-apartment-ontario" },
                      { label: "Roommates & Co-Tenants in Ontario", href: "/blog/roommates-co-tenants-ontario" },
                      { label: "Landlord Entry & Notice Rules", href: "/blog/landlord-entry-notice-canada" },
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
