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
  title: "Can My Landlord Evict Me to Move In a Family Member? (By Province) | LeasePlain",
  description:
    "Landlords can end a tenancy for their own use or a close family member's — but the notice, compensation, and 'good faith' rules differ by province. Ontario N12, BC's 3-month notice, Quebec repossession, and more, plus your rights if it's bad faith.",
  alternates: { canonical: "https://leaseplain.com/blog/n12-own-use-eviction-family-member-canada" },
  openGraph: {
    title: "Can My Landlord Evict Me to Move In a Family Member? (By Province) | LeasePlain",
    description:
      "Own-use eviction rules by province — notice, compensation, and what to do if your landlord is acting in bad faith.",
    url: "https://leaseplain.com/blog/n12-own-use-eviction-family-member-canada",
    type: "article",
    publishedTime: "2026-10-03T00:00:00Z",
    modifiedTime: "2026-10-03T00:00:00Z",
  },
  keywords: ["landlord own use eviction", "n12 eviction family member", "evict tenant to move in", "landlord use eviction canada", "own use eviction by province"],
};

const ROWS: Array<{ prov: string; notice: string; comp: string }> = [
  { prov: "Ontario (N12)", notice: "60 days (to end of a rental period)", comp: "1 month's rent" },
  { prov: "British Columbia", notice: "3 months", comp: "1 month's rent" },
  { prov: "Alberta", notice: "90 days (periodic tenancy)", comp: "Not required by statute" },
  { prov: "Quebec (repossession)", notice: "6 months before a 12-month lease ends", comp: "Moving/relocation expenses" },
  { prov: "Manitoba", notice: "Proper written notice (varies)", comp: "May apply in some cases" },
];

const faqItems = [
  {
    q: "Can a landlord evict me so a family member can move in?",
    a: "Yes, in every province a landlord can end a tenancy for their own use or for a close family member (and often a purchaser's family) — but only in good faith, with the required written notice and, in several provinces, compensation. The family members who qualify and the notice period vary by province.",
  },
  {
    q: "How much notice and compensation is required in Ontario?",
    a: "In Ontario, an own-use eviction uses Form N12 with at least 60 days' notice ending on the last day of a rental period, plus one month's rent in compensation (or another acceptable unit). The landlord — or the person moving in — must genuinely intend to live there for at least 12 months, and an affidavit is required.",
  },
  {
    q: "What if my landlord doesn't actually move in?",
    a: "That's bad faith. If the landlord or family member never moves in — or re-rents the unit at a higher price shortly after — you can file with your tenancy board for substantial compensation. In Ontario this is a T5 application; in BC the tenant can be owed up to 12 months' rent. Keep evidence like new listings.",
  },
  {
    q: "Can I dispute an own-use eviction?",
    a: "Yes. You can dispute at your provincial tenancy board, usually within a set window (for example, 21 days in BC). Common grounds include improper notice, missing compensation, the wrong form, or genuine doubt about the landlord's good-faith intention to move in.",
  },
];

export default function OwnUseEvictionPage() {
  return (
    <>
      <ArticleSchema
        headline={"Can My Landlord Evict Me to Move In a Family Member? (By Province)"}
        description={"Landlords can end a tenancy for their own use or a close family member's — but the notice, compensation, and good-faith rules differ by province. Ontario N12, BC's 3-month notice, Quebec repossession, and more."}
        url="https://leaseplain.com/blog/n12-own-use-eviction-family-member-canada"
        datePublished="2026-10-03"
        dateModified="2026-10-03"
        keywords={["landlord own use eviction", "n12 eviction family member", "evict tenant to move in"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Own-Use Eviction by Province", href: "https://leaseplain.com/blog/n12-own-use-eviction-family-member-canada" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/n12-own-use-eviction-family-member-canada",
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
                <span>Own-Use Eviction by Province</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Canada
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  October 3, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Can My Landlord Evict Me to Move In a Family Member?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                &quot;My landlord says their son is moving in.&quot; It&apos;s a legitimate reason to end a
                tenancy across Canada — but only in good faith, with proper notice and (in most provinces)
                compensation. Here&apos;s the rule by province, and your rights if it&apos;s a bluff.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="October 2026" jurisdiction="provincial residential-tenancy law" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Own-Use Eviction: Notice &amp; Compensation</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">Every province lets a landlord end a tenancy so they — or a close family member, and often a purchaser — can move in. The notice and compensation differ:</p>
                  <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                    <table className="w-full text-left border-collapse bg-white text-sm">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <th className="px-4 py-3 font-bold text-slate-700">Province</th>
                          <th className="px-4 py-3 font-bold text-slate-700">Notice</th>
                          <th className="px-4 py-3 font-bold text-slate-700">Compensation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ROWS.map((r) => (
                          <tr key={r.prov} className="border-b border-slate-100 last:border-0 align-top">
                            <td className="px-4 py-3 font-semibold text-slate-900">{r.prov}</td>
                            <td className="px-4 py-3 text-slate-700">{r.notice}</td>
                            <td className="px-4 py-3 text-slate-700">{r.comp}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-slate-400 mt-3">Reviewed October 2026. Rules change — confirm with your provincial tenancy authority.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The &quot;Good Faith&quot; Requirement</h2>
                  <p className="text-slate-700 leading-relaxed">This is the heart of an own-use eviction. The landlord (or the person moving in) must <strong>genuinely intend to live in the unit</strong> — in Ontario and BC, for at least 12 months. The notice must name the person and their relationship. A landlord can&apos;t use &quot;my family is moving in&quot; as a pretext to remove a tenant and re-rent at a higher price.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Bad-Faith Evictions: Your Remedy</h2>
                  <p className="text-slate-700 leading-relaxed">If the landlord or family member never moves in, or the unit is re-listed shortly after at a higher rent, that&apos;s bad faith and it&apos;s expensive for the landlord. In Ontario you can file a <Link href="/blog/bad-faith-n12-t5-compensation-ontario" className="text-blue-600 hover:underline">T5 application</Link> for up to 12 months&apos; rent plus costs; in BC the tenant can be owed <strong>up to 12 months&apos; rent</strong>. Save evidence: new rental ads, listing screenshots, and the names on the notice.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Respond to the Notice</h2>
                  <ol className="list-decimal list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Check the form and notice period</strong> — the wrong form or short notice makes it invalid.</li>
                    <li><strong>Confirm compensation</strong> was offered where required (e.g., one month in Ontario and BC).</li>
                    <li><strong>Decide whether to dispute</strong> at your tenancy board within the deadline (21 days in BC).</li>
                    <li><strong>Keep monitoring the unit</strong> after you leave, in case it&apos;s re-rented in bad faith.</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Got an eviction notice?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Check whether your notice is valid with our free eviction-notice checker.
                  </p>
                  <Link href="/tools/eviction-notice-checker" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Check My Notice
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "N12 Eviction in Ontario: Your Rights", href: "/blog/n12-eviction-ontario" },
                      { label: "Bad-Faith N12 & T5 Compensation", href: "/blog/bad-faith-n12-t5-compensation-ontario" },
                      { label: "Quebec Repossession & Eviction", href: "/blog/quebec-repossession-eviction" },
                      { label: "Eviction Notice Periods by Province", href: "/eviction-notice-periods-canada" },
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
