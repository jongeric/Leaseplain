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
import KeyTakeaways from "@/components/KeyTakeaways";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Snow Removal: Is It the Landlord's or Tenant's Job? | LeasePlain",
  description:
    "Who shovels — you or your landlord? For apartments, the landlord clears common areas. For a rented house, the lease can shift it to you. What's enforceable, and what municipal bylaws require.",
  alternates: { canonical: "https://leaseplain.com/blog/snow-removal-responsibility-canada" },
  openGraph: {
    title: "Snow Removal: Is It the Landlord's or Tenant's Job? | LeasePlain",
    description:
      "Who shovels — you or your landlord? Apartments vs. rented houses, what a lease can and can't shift to you, and the municipal bylaws that override your lease.",
    url: "https://leaseplain.com/blog/snow-removal-responsibility-canada",
    type: "article",
    publishedTime: "2026-11-20T00:00:00Z",
    modifiedTime: "2026-11-20T00:00:00Z",
  },
  keywords: ["snow removal landlord or tenant", "who is responsible for snow removal rental", "tenant snow shoveling responsibility canada", "landlord snow removal obligations"],
};

const faqItems = [
  {
    q: "Is the landlord or the tenant responsible for snow removal?",
    a: "It depends on the type of rental. In an apartment or multi-unit building, the landlord is responsible for clearing common areas — walkways, entrances, parking lots, and shared stairs — as part of keeping the property safe and in good repair. In a rented single-family house, the lease can make the tenant responsible for shovelling the driveway and walk, and that's generally enforceable if it's clearly written.",
  },
  {
    q: "Can my landlord make me shovel in an apartment building?",
    a: "Generally not for common areas. Snow and ice on shared paths, entrances, and parking areas is a maintenance and safety obligation that falls on the landlord in a multi-unit building. A lease clause trying to offload clearing of common areas onto individual tenants is usually unenforceable.",
  },
  {
    q: "What if snow removal isn't mentioned in my lease?",
    a: "If the lease is silent and you rent a house, responsibility is unclear and often falls back on the landlord's general duty to maintain the property — but it's a common source of disputes. Get it in writing before winter: confirm who clears the driveway, walk, and roof, and by when.",
  },
  {
    q: "Who's liable if someone slips on unshovelled snow?",
    a: "Liability can land on whoever had responsibility for that area, but property owners often carry occupier's-liability exposure regardless of the lease. Municipal bylaws in many cities also require the sidewalk in front of a property to be cleared within a set time after snowfall, and fines go to the responsible party. This is one reason to pin down snow duties — and tenant insurance — in advance.",
  },
  {
    q: "Does a municipal bylaw override my lease?",
    a: "A bylaw sets a separate legal obligation (for example, clearing a public sidewalk within 12–24 hours of snowfall) that applies regardless of what your lease says. Your lease decides responsibility between you and your landlord; the bylaw decides what the city can fine. Check your municipality's snow-clearing bylaw so you know the deadline.",
  },
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline={"Snow Removal: Is It the Landlord's or Tenant's Job?"}
        description={"Who shovels — you or your landlord? For apartments, the landlord clears common areas. For a rented house, the lease can shift it to you. What's enforceable, and what municipal bylaws require."}
        url="https://leaseplain.com/blog/snow-removal-responsibility-canada"
        datePublished="2026-11-20"
        dateModified="2026-11-20"
        keywords={["snow removal landlord or tenant", "who is responsible for snow removal rental", "landlord snow removal obligations"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Snow Removal", href: "https://leaseplain.com/blog/snow-removal-responsibility-canada" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/snow-removal-responsibility-canada",
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
                <span>Snow Removal</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Canada
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  November 20, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  5 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Snow Removal: Is It the Landlord&apos;s or Tenant&apos;s Job?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                The first big snowfall always reopens the same argument. The short version:
                in an <strong>apartment or multi-unit building, the landlord clears common areas</strong>; in a
                <strong> rented house, the lease can put shovelling on you</strong>. Here&apos;s how to tell which
                applies — and why your city&apos;s bylaw matters either way.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <KeyTakeaways items={[
                  "In an <strong>apartment or multi-unit building</strong>, the landlord clears common walkways, entrances, and parking areas.",
                  "In a <strong>rented house</strong>, the lease can make the tenant shovel — enforceable if it's clearly written.",
                  "A clause offloading <strong>common-area</strong> clearing onto individual tenants is usually unenforceable.",
                  "Your <strong>municipal bylaw</strong> separately requires clearing the public sidewalk (often within 12–24 hours), with fines.",
                  "Confirm snow duties — and tenant-insurance liability coverage — <strong>in writing before winter</strong>.",
                ]} />
                <ReviewedByline updated="November 2026" jurisdiction="Canadian residential tenancy & municipal bylaws" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Apartments: The Landlord&apos;s Job</h2>
                  <p className="text-slate-700 leading-relaxed">
                    In a multi-unit building, keeping shared spaces safe is part of the landlord&apos;s duty to
                    maintain the property in a good state of repair. That covers snow and ice on common
                    walkways, building entrances, shared stairs, and parking areas. A lease clause that tries to
                    push clearing of <em>common</em> areas onto individual tenants is generally unenforceable —
                    it&apos;s the same principle that governs other <Link href="/lease-clause/maintenance" className="text-blue-600 hover:underline">maintenance obligations</Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Rented Houses: Often the Tenant&apos;s Job</h2>
                  <p className="text-slate-700 leading-relaxed">
                    When you rent a whole house, the lease can reasonably make you responsible for the
                    driveway, front walk, and steps — the same way it might assign lawn care in summer. This is
                    generally enforceable <strong>if it&apos;s clearly written</strong> and the scope is reasonable
                    given the rent. Vague wording like &ldquo;tenant responsible for upkeep&rdquo; invites
                    disputes, so look for specifics about what you clear and how quickly.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Read the Clause Before You Sign</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Before winter, confirm in writing: who clears the driveway, the walk, the roof/ice dams, and
                    by when after a snowfall. If the lease is silent and you rent a house, responsibility is
                    murky and often falls back on the landlord&apos;s general maintenance duty — but &ldquo;murky&rdquo;
                    means &ldquo;argument.&rdquo; Pin it down.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Not sure whether a snow or &ldquo;upkeep&rdquo; clause is fair? Run it through our
                    free <Link href="/tools/clause-checker" className="text-blue-600 hover:underline">clause red-flag scanner</Link> or
                    upload the whole lease for a review.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Your City&apos;s Bylaw Overrides the Lease</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Separate from your lease, most municipalities require the <strong>public sidewalk</strong> in
                    front of a property to be cleared within a set window after snowfall (often 12–24 hours), with
                    fines for non-compliance. Your lease decides who&apos;s responsible between you and your
                    landlord; the bylaw decides who the city can fine. Check your municipality&apos;s snow-clearing
                    bylaw so you know the deadline and who&apos;s on the hook.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Slips, Liability &amp; Insurance</h2>
                  <p className="text-slate-700 leading-relaxed">
                    If someone is hurt on unshovelled snow, liability can follow whoever was responsible for
                    that area — but owners often carry occupier&apos;s-liability exposure regardless. If snow
                    removal is on you, make sure your <Link href="/blog/tenant-insurance-ontario" className="text-blue-600 hover:underline">tenant insurance</Link> includes
                    liability coverage, and keep the areas you&apos;re responsible for clear.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Is that upkeep clause fair?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your lease and we&apos;ll flag vague maintenance and snow-removal terms in plain English.
                  </p>
                  <Link href="/upload" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Check My Lease Free
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Maintenance & Repairs Clause", href: "/lease-clause/maintenance" },
                      { label: "Is My Landlord Required to Provide Heat?", href: "/blog/landlord-must-provide-heat-canada" },
                      { label: "Is Tenant Insurance Mandatory?", href: "/blog/tenant-insurance-ontario" },
                      { label: "Clause Red Flag Scanner", href: "/tools/clause-checker" },
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
