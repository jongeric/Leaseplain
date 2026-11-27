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
  title: "No Heat in Your Apartment? Tenant Rights by U.S. State | LeasePlain",
  description:
    "Landlords in every U.S. state must provide heat under the implied warranty of habitability. 'Heat season' dates, minimum temperatures, and your remedies — repair-and-deduct, withholding, and reporting.",
  alternates: { canonical: "https://leaseplain.com/blog/no-heat-tenant-rights-by-us-state" },
  openGraph: {
    title: "No Heat in Your Apartment? Tenant Rights by U.S. State | LeasePlain",
    description:
      "Heat is a legal requirement in every state. 'Heat season' rules, minimum indoor temperatures, and your remedies when the landlord won't fix it.",
    url: "https://leaseplain.com/blog/no-heat-tenant-rights-by-us-state",
    type: "article",
    publishedTime: "2026-11-20T00:00:00Z",
    modifiedTime: "2026-11-20T00:00:00Z",
  },
  keywords: ["no heat in apartment tenant rights", "landlord won't fix heat", "heat season law", "minimum heat temperature apartment", "tenant rights no heat by state"],
};

const faqItems = [
  {
    q: "Is a landlord legally required to provide heat?",
    a: "Yes. In every U.S. state, rental housing must be fit to live in under the 'implied warranty of habitability,' and adequate heat during cold months is a core part of that. A landlord cannot rent you a unit with no working heat and refuse to fix it, no matter what the lease says.",
  },
  {
    q: "What temperature does my apartment legally have to be?",
    a: "There's no single national number — it's set by state and especially city codes. Many cities use a 'heat season' (often October 1 to May 31) with minimums like at least 68°F during the day and around 62°F at night. New York City, Chicago, and others publish specific figures. Check your city's housing or property-maintenance code for the exact requirement where you live.",
  },
  {
    q: "What can I do if my landlord won't fix the heat?",
    a: "First, notify the landlord in writing and keep a copy. If they don't act, your options vary by state and may include: calling your city's code-enforcement or housing inspector, 'repair and deduct' (paying for repair and subtracting it from rent, where allowed), rent withholding or escrow (only where permitted and usually with strict steps), or breaking the lease for a serious habitability breach. Follow your state's exact procedure — doing it wrong can expose you to eviction.",
  },
  {
    q: "Can I just stop paying rent until the heat is fixed?",
    a: "Not safely, unless your state allows rent withholding and you follow its rules precisely (often paying rent into an escrow account rather than simply keeping it). Withholding incorrectly can be treated as non-payment and lead to eviction. Document everything and confirm your state's procedure before withholding a cent.",
  },
  {
    q: "Can I be evicted for reporting no heat?",
    a: "Retaliatory eviction — punishing a tenant for reporting a code violation or asserting habitability rights — is illegal in most states. If your landlord tries to evict or raise your rent shortly after you complain about heat, that timing may support a retaliation defense. Keep records of your complaint and their response.",
  },
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline={"No Heat in Your Apartment? Tenant Rights by U.S. State"}
        description={"Landlords in every U.S. state must provide heat under the implied warranty of habitability. Heat-season dates, minimum temperatures, and your remedies when the landlord won't fix it."}
        url="https://leaseplain.com/blog/no-heat-tenant-rights-by-us-state"
        datePublished="2026-11-20"
        dateModified="2026-11-20"
        keywords={["no heat in apartment tenant rights", "landlord won't fix heat", "minimum heat temperature apartment"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "No Heat — U.S.", href: "https://leaseplain.com/blog/no-heat-tenant-rights-by-us-state" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/no-heat-tenant-rights-by-us-state",
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
                <span>No Heat — U.S.</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  United States
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  November 20, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                No Heat in Your Apartment? Tenant Rights by U.S. State
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                A cold apartment isn&apos;t just uncomfortable — in every U.S. state, it can be illegal. Heat is
                part of the <strong>implied warranty of habitability</strong>, and many cities set a
                &ldquo;heat season&rdquo; with minimum indoor temperatures. Here&apos;s what landlords owe you and
                how to force a fix without risking your tenancy.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <KeyTakeaways items={[
                  "Heat is required in <strong>every U.S. state</strong> under the implied warranty of habitability.",
                  "Many cities set a <strong>&ldquo;heat season&rdquo;</strong> (often Oct 1–May 31) with minimums like 68&deg;F day / 62&deg;F night (e.g. NYC).",
                  "Escalate in order: written notice &rarr; <strong>city code enforcement</strong> &rarr; repair-and-deduct or escrow &rarr; breaking the lease.",
                  "Don't simply <strong>withhold rent</strong> — many states require paying into escrow; doing it wrong risks eviction.",
                  "<strong>Retaliation</strong> — eviction or a rent hike for complaining — is illegal in most states.",
                ]} />
                <ReviewedByline updated="November 2026" jurisdiction="U.S. habitability & housing codes" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Heat Is the Law in Every State</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Every U.S. state recognizes an <strong>implied warranty of habitability</strong> — a
                    landlord must keep rental housing fit to live in, and working heat in cold weather is a
                    core part of that. This applies even if your lease is silent on heat, and a lease clause
                    that tries to waive it is generally unenforceable. The <em>details</em> — exact temperatures,
                    dates, and remedies — come from your state and, most often, your city code.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">&ldquo;Heat Season&rdquo; and Minimum Temperatures</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Many cities define a heat season (commonly <strong>October 1 to May 31</strong>) with specific
                    minimums. A few examples of how it&apos;s framed:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>New York City:</strong> during heat season, at least 68°F during the day and at least 62°F at night in each unit.</li>
                    <li><strong>Chicago:</strong> a heating season (roughly September 15–June 1) with minimums around 68°F during the day and 66°F at night.</li>
                    <li><strong>Many other cities</strong> publish their own figures in the property-maintenance or housing code.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mt-3">
                    Exact numbers and dates vary — always check your city&apos;s housing code for the figure that
                    applies to you. See your state&apos;s overview on our <Link href="/united-states" className="text-blue-600 hover:underline">U.S. tenant-rights hub</Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Your Remedies — In the Right Order</h2>
                  <ol className="list-decimal list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Notify in writing.</strong> Email or a dated letter creates a paper trail. Keep a copy.</li>
                    <li><strong>Call code enforcement.</strong> Your city&apos;s housing inspector can cite the landlord and order repairs — often the fastest lever.</li>
                    <li><strong>Repair and deduct</strong> — where your state allows it, pay for a fix and subtract it from rent, within statutory limits.</li>
                    <li><strong>Rent withholding / escrow</strong> — only where permitted, and usually by paying rent into escrow, not pocketing it.</li>
                    <li><strong>Break the lease</strong> for a serious, uncured habitability breach (&ldquo;constructive eviction&rdquo;).</li>
                  </ol>
                  <p className="text-slate-700 leading-relaxed mt-3">
                    Procedures differ sharply by state — doing the wrong step (like simply not paying) can get you
                    evicted. Confirm your state&apos;s exact process first.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Don&apos;t Withhold Rent Blindly</h2>
                  <p className="text-slate-700 leading-relaxed">
                    The biggest mistake tenants make is withholding rent without following their state&apos;s rules.
                    In many states you must pay the rent into an escrow account rather than keep it, and skipping
                    that step turns a habitability complaint into a straightforward non-payment case. Document the
                    cold (photos of a thermometer with a date), your written notice, and the landlord&apos;s
                    response before taking any money-related step.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Retaliation Is Illegal</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Most states prohibit retaliatory eviction or rent hikes against a tenant who reports a code
                    violation. If an eviction notice or rent increase lands right after you complain about heat,
                    the timing can support a retaliation defense. Keep your records. For how entry and notice
                    rules work alongside this, see our <Link href="/united-states/landlord-entry-rules-by-state" className="text-blue-600 hover:underline">landlord entry rules by state</Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Tenant rights by U.S. state</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Deposits, rent control, eviction notice, and entry rules — compared state by state.
                  </p>
                  <Link href="/united-states" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Explore U.S. Guides
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Guides</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "U.S. Tenant Rights Hub", href: "/united-states" },
                      { label: "New York Tenant Rights", href: "/united-states/new-york" },
                      { label: "Illinois Tenant Rights", href: "/united-states/illinois" },
                      { label: "Landlord Entry Rules by State", href: "/united-states/landlord-entry-rules-by-state" },
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
