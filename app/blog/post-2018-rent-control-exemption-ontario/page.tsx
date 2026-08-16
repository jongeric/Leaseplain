import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock } from "lucide-react";
import ReviewedByline from "@/components/ReviewedByline";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Why Isn't My Rent Capped? The Post-November 2018 Rent Control Exemption in Ontario | LeasePlain",
  description:
    "If your Ontario unit was first occupied after November 15, 2018, it's exempt from the annual rent increase guideline — your landlord can raise rent by any amount. Here's how the exemption works and what protections you still have.",
  alternates: { canonical: "https://leaseplain.com/blog/post-2018-rent-control-exemption-ontario" },
  openGraph: {
    title: "Why Isn't My Rent Capped? The Post-November 2018 Rent Control Exemption in Ontario | LeasePlain",
    description:
      "Units first occupied after Nov 15, 2018 are exempt from Ontario's rent increase guideline. How the exemption works and what still protects you.",
    url: "https://leaseplain.com/blog/post-2018-rent-control-exemption-ontario",
    type: "article",
    publishedTime: "2026-08-03T00:00:00Z",
    modifiedTime: "2026-08-03T00:00:00Z",
  },
  keywords: [
    "post 2018 rent control ontario",
    "november 15 2018 rent control",
    "rent control exemption ontario",
    "is my unit rent controlled ontario",
    "unlimited rent increase ontario",
  ],
};

const faqItems = [
  {
    q: "How do I know if my Ontario unit is rent controlled?",
    a: "The key date is November 15, 2018. If the unit was first occupied for residential purposes before that date, the annual rent increase guideline applies. If it was first occupied after November 15, 2018 — for example a new build, a new addition, or a conversion from non-residential use — it's exempt from the guideline.",
  },
  {
    q: "If my unit is exempt, can my landlord raise rent by any amount?",
    a: "Yes. For an exempt unit there's no percentage cap on the increase. The landlord can raise rent by any amount as long as they still follow the other rules: proper written notice on Form N1, at least 90 days in advance, and no more than once every 12 months.",
  },
  {
    q: "Does the exemption mean I have fewer rights overall?",
    a: "No. The exemption is only from the rent increase guideline. Every other protection in the Residential Tenancies Act still applies — proper eviction procedures, the last month's rent deposit rules, the right to repairs, protection from illegal entry, and so on.",
  },
  {
    q: "Can my landlord raise the rent as much as they want between tenants?",
    a: "Yes, and this applies to almost all units, not just post-2018 ones. Ontario uses 'vacancy decontrol': the guideline limits increases during a tenancy, but when a unit becomes vacant, the landlord can set any starting rent for the next tenant.",
  },
  {
    q: "How can I confirm when my unit was first occupied?",
    a: "Ask your landlord directly, check building records or the occupancy permit date for newer buildings, or contact the LTB. For a unit created by converting non-residential space, the relevant date is when it was first used as a residential rental.",
  },
];

export default function Post2018ExemptionOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline="Why Isn't My Rent Capped? The Post-November 2018 Rent Control Exemption in Ontario"
        description="If your Ontario unit was first occupied after November 15, 2018, it's exempt from the annual rent increase guideline — your landlord can raise rent by any amount. Here's how the exemption works and what protections you still have."
        url="https://leaseplain.com/blog/post-2018-rent-control-exemption-ontario"
        datePublished="2026-08-03"
        dateModified="2026-08-03"
        keywords={[
          "post 2018 rent control ontario",
          "november 15 2018 rent control",
          "rent control exemption ontario",
          "is my unit rent controlled ontario",
          "unlimited rent increase ontario",
        ]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Post-2018 Rent Control Exemption in Ontario", href: "https://leaseplain.com/blog/post-2018-rent-control-exemption-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/post-2018-rent-control-exemption-ontario",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".speakable-summary"] },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <div className="flex flex-col min-h-full">
        <Navbar />

        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
                <Link href="/" className="hover:underline">Home</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <Link href="/blog" className="hover:underline">Blog</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>Post-2018 Rent Control Exemption in Ontario</span>
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
                Why Isn&apos;t My Rent Capped? The Post-November 2018 Rent Control Exemption
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                You checked the 2026 guideline, but your landlord says it doesn&apos;t apply to you —
                and they might be right. One date, November 15, 2018, decides whether your rent is
                capped at all. Here&apos;s how the exemption works, and the protections you keep either
                way.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="August 2026" />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The One Date That Decides Everything</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Ontario&apos;s annual rent increase guideline — <strong>2.1% for 2026</strong> — does not
                    apply to every rental. In 2018, the province exempted newer housing from the guideline to
                    encourage construction. The dividing line is <strong>November 15, 2018</strong>:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li><strong>First occupied before November 15, 2018:</strong> the guideline applies. Your landlord can&apos;t exceed 2.1% in 2026 without LTB approval.</li>
                    <li><strong>First occupied on or after November 15, 2018:</strong> the unit is exempt from the guideline. There&apos;s no percentage cap on the increase.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    &quot;First occupied&quot; means the first time the unit was ever used as a residential
                    rental — not when <em>you</em> moved in. It captures new buildings, brand-new additions,
                    and spaces converted from non-residential use after that date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What &quot;Exempt&quot; Actually Means</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    If your unit is exempt, your landlord can raise the rent by <strong>any amount</strong> —
                    there&apos;s no 2.1% ceiling. But &quot;exempt from the guideline&quot; is not
                    &quot;exempt from the rules.&quot; The landlord must still:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>Give proper written notice on <strong>Form N1</strong>;</li>
                    <li>Provide at least <strong>90 days&apos;</strong> notice before the increase; and</li>
                    <li>Wait at least <strong>12 months</strong> between increases (and between your move-in and the first increase).</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    So an exempt unit can see a large jump — but never a surprise one, and never more than
                    once a year. If you want to double-check the notice and timing on any increase, our{" "}
                    <Link href="/tools/rent-increase-calculator" className="text-blue-600 hover:underline">
                      Rent Increase Calculator
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/ontario-rent-increase-guideline-2026" className="text-blue-600 hover:underline">
                      2026 guideline guide
                    </Link>{" "}
                    walk through the requirements.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Vacancy Decontrol: The Rule Between Tenants</h2>
                  <p className="text-slate-700 leading-relaxed">
                    There&apos;s a second, broader reason a rent might seem uncapped: <strong>vacancy
                    decontrol</strong>. In Ontario, the guideline limits increases <em>during</em> a
                    tenancy, but once a unit becomes vacant, the landlord can set <strong>any starting
                    rent</strong> for the next tenant — even in a rent-controlled building. This applies to
                    almost all units, not just post-2018 ones, and it&apos;s a big reason advertised rents can
                    be far above what the current tenant pays.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Protections You Keep No Matter What</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Being in an exempt unit does not make you a second-class tenant. Every other part of the{" "}
                    <em>Residential Tenancies Act</em> still protects you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li>Proper eviction procedures — you can only be evicted through the LTB.</li>
                    <li>The last month&apos;s rent deposit rules (no damage deposits).</li>
                    <li>The right to repairs and maintenance.</li>
                    <li>Protection from illegal entry and from vital-service shut-offs.</li>
                    <li>The 90-day notice and once-a-year limits on increases.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Check your rent increase</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Enter your current rent and proposed increase to see instantly whether it complies
                    with the 2026 Ontario guideline.
                  </p>
                  <Link
                    href="/tools/rent-increase-calculator"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Rent Increase Calculator
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Ontario Rent Increase Guideline 2026", href: "/blog/ontario-rent-increase-guideline-2026" },
                      { label: "Above-Guideline Rent Increases", href: "/blog/above-guideline-rent-increase-ontario" },
                      { label: "Last Month's Rent Deposit in Ontario", href: "/blog/last-months-rent-deposit-ontario" },
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
