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
  title: "Holiday Guests: How Long Can Visitors Stay? | LeasePlain",
  description:
    "Can your landlord limit holiday guests? You have the right to reasonable visitors — but a guest can become an 'occupant' or unauthorized tenant. When a visit crosses the line, and what guest clauses can and can't do.",
  alternates: { canonical: "https://leaseplain.com/blog/holiday-guests-how-long-can-visitors-stay-canada" },
  openGraph: {
    title: "Holiday Guests: How Long Can Visitors Stay? | LeasePlain",
    description:
      "You have the right to reasonable guests — but a long stay can turn a visitor into an occupant. What guest clauses can and can't do over the holidays.",
    url: "https://leaseplain.com/blog/holiday-guests-how-long-can-visitors-stay-canada",
    type: "article",
    publishedTime: "2026-11-06T00:00:00Z",
    modifiedTime: "2026-11-06T00:00:00Z",
  },
  keywords: ["how long can a guest stay rental", "landlord guest policy", "guest vs tenant", "visitor rules apartment", "holiday guests lease"],
};

const faqItems = [
  {
    q: "Can my landlord tell me how long guests can stay?",
    a: "Your landlord generally cannot stop you from having reasonable guests — the right to reasonable enjoyment of your home includes visitors. What a landlord can care about is when a 'guest' effectively becomes a long-term occupant or a new tenant who isn't on the lease. Short holiday visits are almost always fine.",
  },
  {
    q: "When does a guest become a tenant or occupant?",
    a: "There's no universal day count, but a guest starts to look like an occupant when they move in indefinitely, receive mail there, contribute to rent, or stay for weeks or months rather than days. At that point a landlord may have legitimate concerns about who's living in the unit. A two-week holiday visit from family is not that.",
  },
  {
    q: "Is a 'no guests over X nights' clause enforceable?",
    a: "A blanket clause banning guests, or setting an unreasonably low limit, is often unenforceable because it conflicts with your right to reasonable enjoyment of your home. Reasonable rules (for example, around building security, parking passes, or registering long-term occupants) are more likely to hold. If a guest clause seems extreme, have it reviewed.",
  },
  {
    q: "Can my rent go up if guests stay over the holidays?",
    a: "No — a short visit doesn't change your rent, and a landlord can't impose a 'guest fee' for normal visitors. Rent can only change through the proper rent-increase process with the required notice. If someone genuinely moves in long-term, that's a different conversation about adding an occupant to the lease.",
  },
  {
    q: "What if my guest wants to stay longer term?",
    a: "If a visitor is going to live with you beyond a holiday stay, it's cleaner to talk to the landlord about adding them as an occupant or co-tenant, or about subletting rules if you're leaving. That protects everyone and avoids a dispute about an 'unauthorized occupant.' See our guides on roommates and subletting.",
  },
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline={"Holiday Guests: How Long Can Visitors Stay?"}
        description={"Can your landlord limit holiday guests? You have the right to reasonable visitors — but a guest can become an 'occupant.' When a visit crosses the line, and what guest clauses can and can't do."}
        url="https://leaseplain.com/blog/holiday-guests-how-long-can-visitors-stay-canada"
        datePublished="2026-11-06"
        dateModified="2026-11-06"
        keywords={["how long can a guest stay rental", "landlord guest policy", "guest vs tenant"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Holiday Guests", href: "https://leaseplain.com/blog/holiday-guests-how-long-can-visitors-stay-canada" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/holiday-guests-how-long-can-visitors-stay-canada",
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
                <span>Holiday Guests</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Canada
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  November 6, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  5 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Holiday Guests: How Long Can Visitors Stay?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Family&apos;s coming for the holidays and your lease has a line about guests. The good news:
                <strong> you have the right to reasonable visitors</strong>, and a landlord can&apos;t ban them or
                charge a fee. The line to watch is when a &ldquo;guest&rdquo; quietly becomes a long-term
                occupant. Here&apos;s where it sits.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="November 2026" jurisdiction="Canadian residential tenancy law" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">You Have the Right to Reasonable Guests</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Your tenancy includes the <strong>reasonable enjoyment</strong> of your home, and that covers
                    having people over — including guests who stay for a holiday stretch. A landlord generally
                    cannot dictate who visits, ban guests outright, or charge a &ldquo;guest fee&rdquo; for normal
                    visitors. A two-week visit from relatives over the holidays is squarely within your rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">When a Guest Becomes an &ldquo;Occupant&rdquo;</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    A landlord&apos;s legitimate concern isn&apos;t a visitor — it&apos;s someone quietly
                    <em> moving in</em>. There&apos;s no magic number of nights, but a guest starts to look like
                    an occupant or unauthorized tenant when they:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li>stay indefinitely rather than for a defined visit;</li>
                    <li>start receiving mail or ID at the address;</li>
                    <li>contribute to the rent; or</li>
                    <li>treat the unit as their primary residence.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mt-3">
                    Holiday visits don&apos;t meet that bar. A months-long stay with no end date might.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What a Guest Clause Can — and Can&apos;t — Do</h2>
                  <p className="text-slate-700 leading-relaxed">
                    A blanket &ldquo;no guests&rdquo; clause, or one capping visitors at an unreasonably low
                    number of nights, is often unenforceable because it collides with your right to reasonable
                    enjoyment. Reasonable, limited rules — registering a long-term occupant, building security
                    sign-ins, or visitor parking passes — are more likely to hold. If your lease&apos;s guest
                    language looks extreme, run it through our free <Link href="/tools/clause-checker" className="text-blue-600 hover:underline">clause scanner</Link> or
                    read our breakdown of the <Link href="/lease-clause/guests" className="text-blue-600 hover:underline">guest policy clause</Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Rent Can&apos;t Jump Because You Had Guests</h2>
                  <p className="text-slate-700 leading-relaxed">
                    A short visit never changes your rent, and there&apos;s no lawful &ldquo;holiday guest
                    surcharge.&rdquo; Rent only changes through the proper <Link href="/blog/how-to-dispute-a-rent-increase-ontario" className="text-blue-600 hover:underline">rent-increase process</Link> with
                    the required notice. If a landlord tries to tie a fee or increase to your visitors, that&apos;s
                    not enforceable.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If Someone Wants to Stay Long-Term</h2>
                  <p className="text-slate-700 leading-relaxed">
                    If a holiday guest is going to become a roommate, it&apos;s cleaner to talk to the landlord
                    about adding them as an occupant or co-tenant — or to understand the sublet rules if
                    you&apos;re the one leaving. That avoids an &ldquo;unauthorized occupant&rdquo; dispute later.
                    See our guides on <Link href="/blog/roommates-co-tenants-ontario" className="text-blue-600 hover:underline">roommates &amp; co-tenants</Link> and <Link href="/lease-clause/subletting" className="text-blue-600 hover:underline">subletting</Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Odd guest clause in your lease?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your lease and we&apos;ll flag unreasonable guest, occupancy, and visitor rules in plain English.
                  </p>
                  <Link href="/upload" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Check My Lease Free
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Guest Policy Clause Explained", href: "/lease-clause/guests" },
                      { label: "Roommates & Co-Tenants", href: "/blog/roommates-co-tenants-ontario" },
                      { label: "Subletting Clause Explained", href: "/lease-clause/subletting" },
                      { label: "Quiet Enjoyment & Noise Complaints", href: "/blog/quiet-enjoyment-noise-complaints-canada" },
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
