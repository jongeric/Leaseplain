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
  title: "Can You Be Evicted in Winter in Canada? | LeasePlain",
  description:
    "Is there a winter eviction ban in Canada? For most provinces, no — evictions can proceed year-round. Here's what actually protects you in the cold months, and how to buy time.",
  alternates: { canonical: "https://leaseplain.com/blog/can-you-be-evicted-in-winter-canada" },
  openGraph: {
    title: "Can You Be Evicted in Winter in Canada? | LeasePlain",
    description:
      "There's no general winter eviction ban in most of Canada — but proper process still applies. What protects you in the cold months, and how to buy time.",
    url: "https://leaseplain.com/blog/can-you-be-evicted-in-winter-canada",
    type: "article",
    publishedTime: "2026-11-26T00:00:00Z",
    modifiedTime: "2026-11-26T00:00:00Z",
  },
  keywords: ["can you be evicted in winter canada", "winter eviction ban canada", "eviction in winter", "can a landlord evict you in the winter", "cold weather eviction rules"],
};

const faqItems = [
  {
    q: "Is there a winter eviction ban in Canada?",
    a: "No — most Canadian provinces do not have a seasonal or winter eviction ban. A landlord can start and complete the eviction process in winter the same as any other time of year, as long as they follow the proper notice and tribunal process. Temporary pandemic-era moratoriums have ended. Always confirm the current rules with your provincial tribunal.",
  },
  {
    q: "Can I be forced out in the middle of winter?",
    a: "Only through the proper legal process. A landlord cannot change the locks or physically remove you — an eviction requires a tribunal order, and enforcement is carried out by a sheriff or bailiff, not the landlord. The cold weather itself does not create an automatic stay, but you can ask the tribunal for more time.",
  },
  {
    q: "Can I ask for more time because it's winter?",
    a: "Yes. At the hearing you can raise your circumstances — including the difficulty of finding housing in winter, health issues, or children in the home — and ask the adjudicator to delay enforcement. Tribunals have discretion to grant extra time (for example, Ontario's LTB can delay or deny eviction under section 83), though they are not required to.",
  },
  {
    q: "What if I can't pay rent over the winter?",
    a: "Act early. Many provinces have rent banks and emergency assistance that can cover arrears, and paying what you owe before the hearing can stop a non-payment eviction. Contact a community legal clinic or tenant advocacy line as soon as you fall behind — the earlier you act, the more options you have.",
  },
  {
    q: "Does the process differ by province?",
    a: "Yes. Each province has its own tribunal (Ontario's LTB, BC's RTB, Quebec's TAL, and so on) with its own notices, timelines, and discretion rules. The core principle is the same everywhere — no self-help eviction, a tribunal order is required — but the details vary, so check the rules where you rent.",
  },
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline={"Can You Be Evicted in Winter in Canada?"}
        description={"Is there a winter eviction ban in Canada? For most provinces, no — evictions can proceed year-round. What actually protects you in the cold months, and how to buy time."}
        url="https://leaseplain.com/blog/can-you-be-evicted-in-winter-canada"
        datePublished="2026-11-26"
        dateModified="2026-11-26"
        keywords={["can you be evicted in winter canada", "winter eviction ban canada", "cold weather eviction rules"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Winter Eviction", href: "https://leaseplain.com/blog/can-you-be-evicted-in-winter-canada" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/can-you-be-evicted-in-winter-canada",
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
                <span>Winter Eviction</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Canada
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  November 26, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Can You Be Evicted in Winter in Canada?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                It&apos;s one of the most common renter myths: that landlords can&apos;t evict you once the snow
                flies. The reality is that <strong>most Canadian provinces have no winter eviction ban</strong> —
                an eviction can move through the process year-round. But proper legal steps still apply, and
                there are real ways to buy yourself time.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="November 2026" jurisdiction="Canadian residential tenancy law" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Short Answer</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    There is <strong>no general winter eviction moratorium</strong> in most of Canada. Unlike
                    some countries and a few U.S. cities, Canadian provinces do not pause evictions because
                    it&apos;s cold. A landlord can serve notice, apply to the tribunal, and obtain an eviction
                    order in December just as they could in June.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    What does <em>not</em> change in winter — or ever — is that a landlord cannot evict you
                    themselves. Changing the locks, removing your belongings, or shutting off heat to force you
                    out is illegal in every province. A lawful eviction needs a tribunal order, enforced by a
                    sheriff or bailiff.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Why the &ldquo;Winter Ban&rdquo; Myth Persists</h2>
                  <p className="text-slate-700 leading-relaxed">
                    The myth comes from a few real things: temporary pandemic-era eviction pauses (now ended),
                    enforcement backlogs that can slow things down in practice, and tribunals&apos; discretion to
                    delay an eviction when hardship is severe. None of these is an automatic seasonal ban —
                    they&apos;re case-by-case, not calendar-based.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What Actually Protects You</h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Proper process:</strong> the notice must be valid, and the landlord must get a tribunal order. A defective notice can be challenged — see <Link href="/blog/how-to-fight-an-illegal-eviction-ontario" className="text-blue-600 hover:underline">how to fight an illegal eviction</Link>.</li>
                    <li><strong>Your hearing:</strong> show up. You can raise your circumstances and ask for more time. In Ontario, the LTB can delay or refuse eviction under section 83.</li>
                    <li><strong>Paying arrears:</strong> for a non-payment case, paying what you owe before the order takes effect can stop the eviction. See <Link href="/blog/n4-non-payment-rent-ontario" className="text-blue-600 hover:underline">how an N4 works</Link>.</li>
                    <li><strong>Free help:</strong> community legal clinics and duty counsel can represent you — often at no cost.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Buy Time in the Cold Months</h2>
                  <p className="text-slate-700 leading-relaxed">
                    If you&apos;re facing eviction over winter, ask the tribunal to delay enforcement and explain
                    why: difficulty finding housing in the season, young children or elderly family in the home,
                    a disability, or a medical issue. Adjudicators have discretion to grant extra time even when
                    they order the eviction. Line up a <Link href="/tenant-lawyer" className="text-blue-600 hover:underline">tenant advocate or paralegal</Link> and
                    a <Link href="/blog/rent-bank-arrears-help-ontario" className="text-blue-600 hover:underline">rent bank</Link> before the hearing, not after.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">It Varies by Province</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Every province runs its own tribunal and rules — Ontario&apos;s LTB, BC&apos;s RTB,
                    Quebec&apos;s TAL, and the rest. The principle (no self-help eviction, order required) is the
                    same everywhere, but notice periods and discretion differ. Check the rules where you
                    rent on your <Link href="/canada" className="text-blue-600 hover:underline">province&apos;s tenant-rights page</Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Facing an eviction notice?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload the notice or your lease and get a plain-English read on what&apos;s valid and what to do next.
                  </p>
                  <Link href="/upload" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Check My Notice Free
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "How to Fight an Illegal Eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
                      { label: "Got an N4 for Non-Payment?", href: "/blog/n4-non-payment-rent-ontario" },
                      { label: "Rent Bank & Arrears Help", href: "/blog/rent-bank-arrears-help-ontario" },
                      { label: "Can't Pay Rent This Winter?", href: "/blog/cant-pay-rent-this-winter-canada" },
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
