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
  title: "Cash for Keys in Ontario: Should You Take the Deal? | LeasePlain",
  description:
    "Your landlord is offering you money to move out. 'Cash for keys' is legal in Ontario and can be worth it — but only on your terms. How much to ask for, what to get in writing, and when to say no.",
  alternates: { canonical: "https://leaseplain.com/blog/cash-for-keys-ontario" },
  openGraph: {
    title: "Cash for Keys in Ontario: Should You Take the Deal? | LeasePlain",
    description:
      "How 'cash for keys' works in Ontario, how much to ask for, and what to get in writing before you agree.",
    url: "https://leaseplain.com/blog/cash-for-keys-ontario",
    type: "article",
    publishedTime: "2026-09-07T00:00:00Z",
    modifiedTime: "2026-09-07T00:00:00Z",
  },
  keywords: [
    "cash for keys ontario",
    "landlord offering money to move out ontario",
    "how much cash for keys ontario",
    "n11 cash for keys",
    "should i take cash for keys",
  ],
};

const faqItems = [
  {
    q: "Is cash for keys legal in Ontario?",
    a: "Yes. A landlord can offer you money to voluntarily end your tenancy, and you can accept or decline. It becomes illegal only if it's coercive — threats, harassment, or pressure. A genuine, voluntary offer that you're free to refuse is perfectly legal, and it's usually documented on a Form N11.",
  },
  {
    q: "How much should I ask for in a cash-for-keys deal?",
    a: "There's no fixed amount — it's a negotiation. Consider what you'd lose: moving costs, a higher market rent elsewhere (the gap between your current rent and today's rates, multiplied over time), first and last month's rent on a new place, and the value of your security of tenure. Tenants often negotiate several months' rent or more, especially in tight markets.",
  },
  {
    q: "Do I have to accept a cash-for-keys offer?",
    a: "No. You have security of tenure and cannot be forced out without a valid LTB order. If you don't want to move, you can decline. A landlord who then harasses or pressures you may be breaking the law — that can support a T2 application.",
  },
  {
    q: "What should I get in writing before I agree?",
    a: "Get the full amount, exactly when and how it's paid (ideally a chunk up front and the rest on move-out), and the move-out date, all in writing — typically a signed Form N11 plus a short side agreement. Never hand over keys before you've received the money you agreed to.",
  },
];

export default function CashForKeysOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline="Cash for Keys in Ontario: Should You Take the Deal?"
        description="'Cash for keys' is legal in Ontario and can be worth it — but only on your terms. How much to ask for, what to get in writing, and when to say no."
        url="https://leaseplain.com/blog/cash-for-keys-ontario"
        datePublished="2026-09-07"
        dateModified="2026-09-07"
        keywords={["cash for keys ontario", "landlord offering money to move out ontario", "n11 cash for keys"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Cash for Keys in Ontario", href: "https://leaseplain.com/blog/cash-for-keys-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/cash-for-keys-ontario",
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
                <span>Cash for Keys in Ontario</span>
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
                  7 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Cash for Keys in Ontario: Should You Take the Deal?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Your landlord offers you a lump sum to move out early. In a market where your rent is far
                below what a new unit costs, that offer is worth thinking about carefully — because your
                below-market tenancy has real value, and you hold most of the cards.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What &quot;Cash for Keys&quot; Actually Is</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    &quot;Cash for keys&quot; is simply a landlord paying you to <strong>voluntarily</strong>{" "}
                    end your tenancy and move out. It&apos;s legal in Ontario and usually documented on a{" "}
                    <Link href="/ltb-forms/n11" className="text-blue-600 hover:underline">Form N11 (Agreement to End the Tenancy)</Link>,
                    often with a short side agreement setting out the payment. Landlords use it because it&apos;s
                    faster and cheaper than an LTB eviction — which is exactly why you have leverage.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    The key word is <strong>voluntary</strong>. You never have to accept.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Why Your Tenancy Is Worth Money</h2>
                  <p className="text-slate-700 leading-relaxed">
                    If you&apos;ve been in your unit a while, your rent is probably well below today&apos;s market.
                    Leaving means paying that gap — potentially hundreds of dollars a month — for years.
                    That lost value is the heart of the negotiation. A landlord who wants the unit back
                    (to renovate, sell, or re-rent at market) is trying to buy that value from you. Price
                    it accordingly.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How Much Should You Ask For?</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    There&apos;s no legal formula — it&apos;s a negotiation. Add up what moving actually costs you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>The rent gap:</strong> the difference between your current rent and market rent, multiplied over the months or years you&apos;d feel it.</li>
                    <li><strong>Moving costs</strong> — movers, deposits, time off work.</li>
                    <li><strong>First and last month&apos;s rent</strong> on a new place.</li>
                    <li><strong>The hassle</strong> of finding housing in a tight market.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mt-3">
                    Tenants commonly negotiate several months&apos; rent or more. Start higher than your
                    floor, and don&apos;t feel rushed — time pressure is the landlord&apos;s problem, not yours.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Watch for a Bad-Faith N12 in Disguise</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Sometimes a landlord frames an N12 (&quot;I need the unit for myself or a buyer&quot;) as a
                    take-it-or-leave-it deal. Remember: an N12 requires genuine intent, one month&apos;s
                    compensation, and — if you leave and they don&apos;t actually move in — may entitle you to
                    a <Link href="/blog/bad-faith-n12-t5-compensation-ontario" className="text-blue-600 hover:underline">bad-faith compensation claim (T5)</Link>.
                    Don&apos;t accept a lowball cash offer just because an N12 was waved at you.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Get It in Writing — and Get Paid First</h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li>Put the <strong>full amount, payment timing, and move-out date</strong> in writing.</li>
                    <li>Structure payment so you get a portion <strong>up front</strong> and the rest on move-out — never hand over keys before you&apos;re paid.</li>
                    <li>Use a signed <strong>N11</strong> plus a short side letter; keep copies of everything.</li>
                    <li>If the numbers are large, have a <Link href="/tenant-lawyer" className="text-blue-600 hover:underline">paralegal or tenant clinic</Link> review it first.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">When to Just Say No</h2>
                  <p className="text-slate-700 leading-relaxed">
                    If you love your home, your rent is a bargain, and you can&apos;t replace it for the money
                    offered — decline. You have <strong>security of tenure</strong> and can&apos;t be forced out
                    without a valid LTB order. If the landlord responds with pressure or harassment, that&apos;s
                    a separate violation you can act on. See{" "}
                    <Link href="/blog/landlord-harassment-ontario" className="text-blue-600 hover:underline">landlord harassment and how to stop it</Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Weighing a move? Know the numbers</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Estimate your move-in costs elsewhere before you agree to any deal.
                  </p>
                  <Link href="/tools/move-in-cost-calculator" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Move-In Cost Calculator
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "N12: Landlord's Own Use Eviction", href: "/blog/n12-eviction-ontario" },
                      { label: "Bad-Faith N12 Compensation (T5)", href: "/blog/bad-faith-n12-t5-compensation-ontario" },
                      { label: "The N11 Form Explained", href: "/ltb-forms/n11" },
                      { label: "Landlord Harassment in Ontario", href: "/blog/landlord-harassment-ontario" },
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
