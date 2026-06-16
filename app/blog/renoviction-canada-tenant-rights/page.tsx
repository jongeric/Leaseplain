import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Renoviction in Canada: How to Fight Back When Your Landlord Claims Renovations | LeasePlain",
  description:
    "Renovictions are rising across Canada. Learn your rights under N13 (Ontario) and Four Month Notices (BC), how to preserve your right of first refusal, and when a renovation is a bad-faith eviction.",
  alternates: {
    canonical: "https://leaseplain.com/blog/renoviction-canada-tenant-rights",
  },
  openGraph: {
    title:
      "Renoviction in Canada: How to Fight Back When Your Landlord Claims Renovations | LeasePlain",
    description:
      "Renovictions are rising across Canada. Learn your rights under N13 (Ontario) and Four Month Notices (BC), how to preserve your right of first refusal, and when a renovation is a bad-faith eviction.",
    url: "https://leaseplain.com/blog/renoviction-canada-tenant-rights",
    type: "article",
    publishedTime: "2026-04-20T00:00:00Z",
    modifiedTime: "2026-06-01T00:00:00Z",
  },
  keywords: [
    "renoviction Canada",
    "N13 notice Ontario",
    "four month notice BC",
    "right of first refusal renovation",
    "fight renoviction",
  ],
};

const faqItems = [
  {
    q: "What is an N13 notice in Ontario?",
    a: "An N13 is a formal notice to end a tenancy because the landlord wants to demolish the unit, carry out extensive renovations or repairs that require vacant possession, or convert the unit to non-residential use. It requires 120 days notice and entitles the tenant to 3 months compensation. The landlord must have a building permit and genuinely require vacant possession for the notice to be valid.",
  },
  {
    q: "Do I have to move out for my landlord's renovations?",
    a: "Not automatically. In Ontario, you do not have to vacate until the Landlord and Tenant Board issues an eviction order. If you receive an N13, you can contest it at the LTB. In BC, you can similarly dispute a Four Month Notice at the Residential Tenancy Branch. Minor or cosmetic renovations that do not require vacant possession cannot justify an eviction notice.",
  },
  {
    q: "What is the right of first refusal after a renovation eviction?",
    a: "In Ontario, under RTA s.53, if you receive a valid N13 notice you have the right to return to your unit at the same rent once renovations are complete — but only if you notify your landlord IN WRITING before you vacate. If you leave without giving written notice, you permanently lose this right. In BC, you must apply in writing within 30 days of receiving the renovation notice to preserve this right.",
  },
  {
    q: "How much notice does a BC landlord need to give for renovations?",
    a: "A BC landlord must give 4 months notice using the RTB-30 form. The notice is only valid if the renovation requires a building permit and genuinely requires vacant possession. The landlord must pay 1 month's rent in compensation. If the landlord re-rents the unit within 12 months of the tenancy ending, the displaced tenant can apply for additional compensation.",
  },
  {
    q: "What compensation am I entitled to for a renovation eviction in Ontario?",
    a: "Ontario tenants who receive a valid N13 are entitled to 3 months' rent as compensation — significantly more than the 1 month required for an N12 (own use) eviction. This compensation is owed regardless of how long you have lived in the unit. You are also entitled to your right of first refusal if you give written notice before vacating.",
  },
];

export default function RenovictionCanadaTenantRightsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <ArticleSchema
        headline="Renoviction in Canada: How to Fight Back When Your Landlord Wants You Out for Renovations"
        description="Renovictions are rising across Canada. Learn your rights under N13 (Ontario) and Four Month Notices (BC), how to preserve your right of first refusal, and when a renovation is a bad-faith eviction."
        url="https://leaseplain.com/blog/renoviction-canada-tenant-rights"
        datePublished="2026-04-20"
        dateModified="2026-06-01"
        keywords={[
          "renoviction Canada",
          "N13 notice Ontario",
          "four month notice BC",
          "right of first refusal renovation",
          "fight renoviction",
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://leaseplain.com" },
          { name: "Blog", href: "https://leaseplain.com/blog" },
          {
            name: "Renoviction in Canada: Tenant Rights Guide",
            href: "https://leaseplain.com/blog/renoviction-canada-tenant-rights",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".speakable-summary"],
          },
          "url": "https://leaseplain.com/blog/renoviction-canada-tenant-rights",
        }).replace(/</g, "<") }}
      />
      <div className="flex flex-col min-h-full">
        <Navbar />

        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>Renoviction in Canada: Tenant Rights Guide</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-200">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Canada
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  April 20, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  8 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Renoviction in Canada: How to Fight Back When Your Landlord Wants You Out for
                Renovations
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Renovictions — evictions disguised as renovation notices — are rising in Toronto,
                Vancouver, and across Canada. Landlords can legally evict tenants for major
                renovations in limited circumstances, but the rules are strict and tenants have
                real protections. Here is what you need to know before you pack a single box.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What is Renoviction?</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    &quot;Renoviction&quot; is the informal term for a practice where a landlord
                    serves a tenant with an eviction notice claiming they need the unit vacant for
                    major renovations — but the real goal is to remove a long-term tenant paying
                    below-market rent, renovate cosmetically, and re-list the unit at a
                    significantly higher price.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    It is a growing problem in hot rental markets like Toronto and Vancouver, where
                    the gap between in-place rents and new-listing rents can be hundreds of dollars
                    per month. For a landlord, replacing a tenant paying $1,600 with a new tenant
                    at $2,400 can be worth far more than any renovation cost.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Renovation evictions are legal in limited circumstances under provincial tenancy
                    law — but they are heavily regulated. Understanding exactly what the law
                    requires is your first line of defence.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Ontario: The N13 Notice (RTA s.50)
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    In Ontario, a landlord who wants to evict a tenant for renovations must serve
                    an <strong>N13 Notice</strong>. Its full name is the{" "}
                    <em>
                      Notice to End your Tenancy Because the Landlord Wants to Demolish the Rental
                      Unit, Repair it or Convert it to Another Use
                    </em>
                    . It is governed by section 50 of the{" "}
                    <em>Residential Tenancies Act, 2006</em>.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    An N13 is only valid in three scenarios:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>
                      <strong>Demolition</strong> — the landlord intends to tear the building down
                    </li>
                    <li>
                      <strong>Extensive renovation or repair</strong> — the work requires a
                      building permit and vacant possession is genuinely necessary (i.e., the
                      tenant cannot safely remain during the work)
                    </li>
                    <li>
                      <strong>Conversion to non-residential use</strong> — such as turning a
                      residential unit into an office
                    </li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Key requirements that distinguish a valid N13 from an invalid one:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>
                      <strong>120 days notice</strong> — not 60 days like an N12 (own-use) notice
                    </li>
                    <li>
                      <strong>3 months&apos; rent compensation</strong> — not 1 month like an N12
                    </li>
                    <li>
                      <strong>A building permit is required</strong> — if no permit exists or has
                      been applied for, the N13 can be challenged at the Landlord and Tenant Board
                      (LTB)
                    </li>
                    <li>
                      <strong>Vacant possession must genuinely be necessary</strong> — minor
                      repairs or cosmetic updates that can be done with tenants present do not
                      qualify
                    </li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Not sure if the notice period or compensation your landlord offered matches
                    what the law requires? Use our{" "}
                    <Link href="/tools/eviction-notice-checker" className="text-blue-600 hover:underline">
                      Eviction Notice Validity Checker
                    </Link>{" "}
                    or{" "}
                    <Link href="/tools/notice-period-calculator" className="text-blue-600 hover:underline">
                      Notice Period Calculator
                    </Link>{" "}
                    to confirm whether the notice you received meets your province&apos;s
                    requirements.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    If the landlord cannot produce a building permit or cannot demonstrate that
                    the renovation genuinely requires an empty unit, the LTB will dismiss the
                    application and you can remain in your home.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Ontario: Right of First Refusal — Do Not Skip This Step
                  </h2>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
                    <p className="text-amber-900 font-semibold text-sm">
                      Critical: You must act before you vacate, or you lose this right permanently.
                    </p>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Under <strong>RTA section 53</strong>, Ontario tenants who receive a valid N13
                    have the right to return to the unit once renovations are complete — at the
                    same rent they were paying before. This is called the{" "}
                    <strong>right of first refusal</strong>, and it is one of the most valuable
                    protections available to renovicted tenants.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    But there is a critical catch: <strong>you must notify your landlord in
                    writing, before you vacate</strong>, that you intend to exercise this right.
                    If you move out without giving that written notice, the right of first refusal
                    is permanently lost.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Once you give proper written notice, your landlord is legally required to
                    notify you as soon as the unit is ready for occupancy. You then have the right
                    to move back in at your previous rent — no market-rate reset.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    If your landlord fails to notify you that the unit is ready, re-rents it to
                    someone else, or otherwise fails to honour your right of first refusal, you can
                    file a <strong>T5 application</strong> (Bad Faith) with the LTB within 2 years
                    of the failure. Remedies can include a rent abatement, punitive damages, and an
                    order permitting you to return to the unit.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    British Columbia: Four Month Notice for Renovation
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    In BC, renovation evictions are governed by{" "}
                    <strong>
                      section 49(3) of the Residential Tenancy Act
                    </strong>
                    . A landlord can serve a tenant with a{" "}
                    <strong>Four Month Notice to End Tenancy</strong> (using the{" "}
                    <strong>RTB-30 form</strong>) if the unit needs major renovations that require
                    a building permit and vacant possession.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The key requirements in BC are similar to Ontario:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>
                      <strong>4 months notice</strong> using the RTB-30 form
                    </li>
                    <li>
                      <strong>1 month&apos;s rent compensation</strong>
                    </li>
                    <li>
                      A <strong>building permit</strong> must be required — cosmetic work does
                      not qualify
                    </li>
                    <li>
                      <strong>Vacant possession must be genuinely necessary</strong>
                    </li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    BC has additional protections for displaced tenants. If your former landlord
                    re-rents the unit within{" "}
                    <strong>12 months</strong> of your tenancy ending, you may apply to the
                    Residential Tenancy Branch for compensation — up to 12 months&apos; rent.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    For the <strong>right of first refusal</strong> in BC, you must apply in
                    writing within{" "}
                    <strong>30 days of receiving the renovation notice</strong>. Unlike Ontario,
                    this deadline runs from the date you receive the notice — not from when you
                    vacate — so act quickly.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    How to Tell if a Renoviction is in Bad Faith
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Not every renovation notice is legitimate. Here are the warning signs that a
                    renovation eviction may be pretextual:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>
                      <strong>No building permit</strong> — the landlord has not applied for or
                      obtained one
                    </li>
                    <li>
                      <strong>Cosmetic scope</strong> — painting, new appliances, flooring, or
                      kitchen updates that clearly do not require an empty unit
                    </li>
                    <li>
                      <strong>Quick re-listing</strong> — the unit is advertised at a significantly
                      higher rent shortly after you vacate
                    </li>
                    <li>
                      <strong>Pattern of N13s</strong> — the landlord has served multiple N13 or
                      renovation notices across their portfolio with few units ever returning to
                      original tenants
                    </li>
                    <li>
                      <strong>Buyout pressure</strong> — the landlord offers a &quot;voluntary&quot;
                      cash-for-keys arrangement without explaining your right of first refusal or
                      your ability to contest at the LTB or RTB
                    </li>
                    <li>
                      <strong>No timeline or contractor</strong> — vague renovation plans with no
                      permits, contracts, or realistic schedule
                    </li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    If you suspect bad faith, gather evidence now: screenshot any rental listings
                    for your unit after you receive the notice, keep records of all communications,
                    and request a copy of any building permit the landlord claims to have.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    What To Do If You Receive an N13 or Four Month Notice
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Follow these steps carefully. The order matters.
                  </p>
                  <ol className="list-decimal list-inside space-y-3 text-slate-700 leading-relaxed mb-3">
                    <li>
                      <strong>Do not leave voluntarily.</strong> In Ontario, you do not have to
                      vacate until the LTB issues an eviction order. In BC, you do not have to
                      vacate until the RTB confirms the notice. Leaving early may waive your rights.
                    </li>
                    <li>
                      <strong>Give written notice of your right of first refusal.</strong> In
                      Ontario, send a letter to your landlord before you vacate stating that you
                      intend to exercise your right to return under RTA s.53. In BC, apply in
                      writing within 30 days of receiving the notice.
                    </li>
                    <li>
                      <strong>Request proof of the building permit.</strong> Ask in writing. If
                      the landlord cannot produce one, you have grounds to challenge the notice.
                    </li>
                    <li>
                      <strong>File a dispute if you believe it is in bad faith.</strong> In
                      Ontario, file a T5 application or contest the L2 hearing at the LTB. In BC,
                      dispute the notice at the Residential Tenancy Branch.
                    </li>
                    <li>
                      <strong>Document everything.</strong> Keep every letter, email, and text.
                      Photograph the unit. Record the date you received the notice. If the unit
                      gets listed at a higher rent, screenshot it.
                    </li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Other Provinces at a Glance
                  </h2>
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 text-slate-600 text-xs font-semibold uppercase tracking-wide">
                        <tr>
                          <th className="text-left px-4 py-3">Province</th>
                          <th className="text-left px-4 py-3">Notice Period</th>
                          <th className="text-left px-4 py-3">Compensation</th>
                          <th className="text-left px-4 py-3">Right of First Refusal</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 font-medium text-slate-900">Ontario</td>
                          <td className="px-4 py-3 text-slate-700">120 days</td>
                          <td className="px-4 py-3 text-slate-700">3 months&apos; rent</td>
                          <td className="px-4 py-3 text-slate-700">Yes — written notice before vacating</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 font-medium text-slate-900">British Columbia</td>
                          <td className="px-4 py-3 text-slate-700">4 months</td>
                          <td className="px-4 py-3 text-slate-700">1 month&apos;s rent</td>
                          <td className="px-4 py-3 text-slate-700">Yes — within 30 days of notice</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 font-medium text-slate-900">Quebec</td>
                          <td className="px-4 py-3 text-slate-700">6 months</td>
                          <td className="px-4 py-3 text-slate-700">3 months&apos; rent</td>
                          <td className="px-4 py-3 text-slate-700">Yes — Civil Code art. 1959</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 font-medium text-slate-900">Alberta</td>
                          <td className="px-4 py-3 text-slate-700">Standard termination rules</td>
                          <td className="px-4 py-3 text-slate-700">No specific renovation compensation</td>
                          <td className="px-4 py-3 text-slate-700">No specific provision</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    <strong>Quebec</strong> provides among the strongest protections in Canada.
                    Under article 1959 of the Civil Code, a landlord who needs the unit for major
                    works must give 6 months&apos; notice and 3 months&apos; compensation. The
                    tenant has an explicit right of first refusal to return. Any attempt to evict
                    for purely cosmetic renovations can be challenged at the Tribunal administratif
                    du logement (TAL).
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Alberta</strong> has no specific renoviction statute. Standard
                    termination notice rules apply, and tenants who believe a renovation eviction
                    is in bad faith can challenge it at the Residential Tenancy Dispute Resolution
                    Service (RTDRS). The absence of formal protections makes it especially
                    important for Alberta tenants to document any signs of bad faith and seek
                    legal advice promptly.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <FAQAccordion items={faqItems} includeSchema={false} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Got an N13 notice?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your notice to LeasePlain and we&apos;ll flag any issues — missing
                    permit requirements, incorrect notice periods, and more.
                  </p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Analyse My Notice
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      {
                        label: "Eviction Notice Validity Checker",
                        href: "/tools/eviction-notice-checker",
                      },
                      {
                        label: "Notice Period Calculator",
                        href: "/tools/notice-period-calculator",
                      },
                      {
                        label: "Eviction Notices Explained",
                        href: "/tenant-rights/eviction-notices",
                      },
                      {
                        label: "Breaking a Lease in Canada",
                        href: "/tenant-rights/breaking-a-lease",
                      },
                      {
                        label: "How to Fight an Illegal Eviction (Ontario)",
                        href: "/blog/how-to-fight-an-illegal-eviction-ontario",
                      },
                    ].map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                        >
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
