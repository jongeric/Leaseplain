import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock, Info } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Normal Wear and Tear vs. Damage in Canadian Rentals: What Tenants Need to Know | LeasePlain",
  description:
    "Landlords cannot charge tenants for normal wear and tear in Canada. Learn exactly which marks, scuffs, and deterioration count as wear and tear vs. damage in Ontario, BC, Alberta, and Quebec.",
  alternates: { canonical: "https://leaseplain.com/blog/normal-wear-and-tear-vs-damage-canada" },
  openGraph: {
    title: "Normal Wear and Tear vs. Damage in Canadian Rentals | LeasePlain",
    description:
      "Landlords cannot charge tenants for normal wear and tear. Learn exactly what counts as wear and tear vs. tenant damage in Ontario, BC, Alberta, and Quebec.",
    url: "https://leaseplain.com/blog/normal-wear-and-tear-vs-damage-canada",
    type: "article",
    publishedTime: "2026-07-07T00:00:00Z",
    modifiedTime: "2026-07-07T00:00:00Z",
  },
  keywords: [
    "normal wear and tear Canada rental",
    "wear and tear vs damage Ontario",
    "landlord charge for wear and tear Canada",
    "tenant damage vs wear and tear",
    "what is normal wear and tear in rental Canada",
  ],
};

const faqItems = [
  {
    q: "What is considered normal wear and tear in a Canadian rental?",
    a: "Normal wear and tear in a Canadian rental includes deterioration that results from ordinary, everyday use of the unit — not from negligence, accidents, or misuse. Examples include faded paint, small scuffs on walls from furniture, carpet fibres worn down from foot traffic, minor scratches on hardwood flooring, and the gradual dulling of fixtures and appliances over time. Canadian tribunals — including Ontario's LTB, BC's RTB, and Alberta's RTDRS — consistently hold that landlords cannot charge tenants for normal wear and tear.",
  },
  {
    q: "Can a landlord charge for repainting after a tenant moves out in Canada?",
    a: "Generally, no. Paint naturally fades and scuffs over time from ordinary use. If the paint is in reasonable condition relative to its age, a landlord cannot charge the departing tenant for repainting. However, if the tenant painted the walls an unauthorized colour, allowed grease or smoke to significantly stain the paint, or made holes requiring patching, the landlord may recover the cost of returning the walls to their original state.",
  },
  {
    q: "Is carpet replacement normal wear and tear in Ontario?",
    a: "It depends on the carpet's age and the nature of the deterioration. Carpet that has worn down from years of foot traffic is normal wear and tear — the landlord cannot charge the tenant for replacement. However, a carpet with burns, large stains from spills, or damage from pets goes beyond normal use and can be charged back to the tenant. Even then, the Ontario LTB typically applies depreciation — if the carpet was 10 years old and had a 15-year useful life, the tenant would only owe 5/15ths of the replacement cost.",
  },
  {
    q: "Can a landlord keep a security deposit for normal wear and tear in BC?",
    a: "No. In British Columbia, a landlord can only apply to keep a security deposit (up to half a month's rent) to cover damage beyond normal wear and tear, unpaid rent, or other specific breaches. If the landlord cannot prove actual damage, they must return the deposit within 15 days of the tenancy ending, or within 15 days of receiving the tenant's forwarding address. A landlord who wrongly withholds a deposit can be ordered to pay double the deposit amount as a penalty.",
  },
  {
    q: "What is a move-in inspection report and why does it matter?",
    a: "A move-in inspection report — also called a condition inspection report in BC and Alberta — is a written record of the rental unit's condition at the start of the tenancy. It is signed by both the landlord and tenant. If damage is documented at move-in, it cannot later be claimed against the tenant at move-out. In BC, a landlord who does not complete a move-in inspection loses the right to make any claim against the security deposit for damage. In Alberta, both parties must complete the inspection for the landlord to be eligible to claim from the deposit.",
  },
  {
    q: "Can a landlord charge for cleaning after a tenant moves out?",
    a: "A landlord can charge for cleaning only if the unit was left in a significantly worse state of cleanliness than it was provided in at the start of tenancy. If the unit was professionally cleaned at move-in and left dirty at move-out, the landlord can recover professional cleaning costs. If the unit was left in a comparable state of ordinary cleanliness, a cleaning charge is not warranted. Tenants should photograph the unit at both move-in and move-out to protect themselves from disputed cleaning charges.",
  },
];

const wearAndTearExamples = [
  {
    item: "Paint & Walls",
    wearAndTear: "Faded paint, small scuffs from furniture, minor marks at doorknobs, gradual yellowing",
    damage: "Large holes from anchors, unauthorized paint colour, grease stains, smoke staining throughout",
  },
  {
    item: "Carpet & Flooring",
    wearAndTear: "Worn-down fibres from traffic, light matting, minor indentations from furniture legs",
    damage: "Burns, pet stains, large spill stains, gouges from dragging furniture, torn sections",
  },
  {
    item: "Hardwood",
    wearAndTear: "Minor surface scratches from everyday use, slight dulling of finish over years",
    damage: "Deep gouges, water damage from unaddressed spills, scratches from pet nails across large areas",
  },
  {
    item: "Appliances",
    wearAndTear: "Normal depreciation, worn knobs, minor interior staining from cooking",
    damage: "Broken burners from impact, burned interiors from unattended cooking, cracked glass from misuse",
  },
  {
    item: "Fixtures & Hardware",
    wearAndTear: "Faded finish on faucets, slow draining from age, loose hinges from repeated use",
    damage: "Cracked toilet seats, broken cabinet hinges, missing handles, bent towel bars",
  },
  {
    item: "Windows & Doors",
    wearAndTear: "Stiff locks from age, faded window frames, draft from seal deterioration",
    damage: "Broken glass from impact, damaged locks from forced entry by tenant, missing door stops",
  },
  {
    item: "Bathroom",
    wearAndTear: "Soap scum buildup, mild grout discolouration from water over years",
    damage: "Mould from tenant's failure to ventilate, cracked tiles from dropped objects, broken fixtures",
  },
];

export default function NormalWearAndTearVsDamageCanadaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <ArticleSchema
        headline="Normal Wear and Tear vs. Damage in Canadian Rentals: What Tenants Need to Know"
        description="Landlords cannot charge tenants for normal wear and tear in Canada. Learn exactly which marks, scuffs, and deterioration count as wear and tear vs. damage in Ontario, BC, Alberta, and Quebec."
        url="https://leaseplain.com/blog/normal-wear-and-tear-vs-damage-canada"
        datePublished="2026-07-07"
        dateModified="2026-07-07"
        keywords={[
          "normal wear and tear Canada rental",
          "wear and tear vs damage Ontario",
          "landlord charge for wear and tear Canada",
          "tenant damage vs wear and tear",
          "what is normal wear and tear in rental Canada",
        ]}
        imageUrl="https://leaseplain.com/blog/normal-wear-and-tear-vs-damage-canada/opengraph-image"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://leaseplain.com" },
          { name: "Blog", href: "https://leaseplain.com/blog" },
          { name: "Normal Wear and Tear vs. Damage", href: "https://leaseplain.com/blog/normal-wear-and-tear-vs-damage-canada" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "<") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/normal-wear-and-tear-vs-damage-canada",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", ".speakable-summary"],
            },
          }).replace(/</g, "<"),
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
                <span>Normal Wear and Tear vs. Damage</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-200">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Canada
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  July 7, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  8 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Normal Wear and Tear vs. Damage in Canadian Rentals: What Tenants Need to Know
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Canadian landlords cannot charge tenants for normal wear and tear — ever. But the
                line between wear and tear and chargeable damage is often blurry, and deposit
                disputes hinge on it. This guide explains exactly what each concept means, how
                Canadian tribunals draw the line, and what every tenant should document before
                moving out.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    What Is Normal Wear and Tear?
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Normal wear and tear is the gradual, inevitable deterioration of a rental unit
                    that results from ordinary, day-to-day living — not from negligence, carelessness,
                    misuse, or accidents. It is the cost of having a property occupied, and Canadian
                    law assigns that cost to the landlord, not the tenant.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    While &ldquo;wear and tear&rdquo; is not defined in word-for-word in Ontario&apos;s
                    RTA or BC&apos;s Residential Tenancy Act, it is a concept with a well-established
                    meaning in landlord-tenant law and is applied consistently by the Ontario Landlord
                    and Tenant Board (LTB), BC&apos;s Residential Tenancy Branch (RTB), and Alberta&apos;s
                    Residential Tenancy Dispute Resolution Service (RTDRS). The core question each
                    tribunal asks is: <em>would a reasonable person living in the unit for that
                    period of time have produced this level of deterioration?</em> If yes — it is
                    wear and tear.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Key factors that determine whether deterioration is wear and tear include the
                    <strong> age of the item</strong>, the <strong>length of the tenancy</strong>,
                    the <strong>nature of the use</strong>, and whether the deterioration was
                    <strong> accelerated by something beyond ordinary use</strong>. A small scuff
                    on the baseboard after five years is wear and tear; a deep gouge made by
                    repeatedly dragging a refrigerator across the floor is not.
                  </p>
                </div>

                <figure>
                  <img
                    src="/blog/normal-wear-and-tear-vs-damage-canada/opengraph-image"
                    alt="Side-by-side comparison for Canadian rentals: normal wear and tear (faded paint, worn carpet, minor scuffs — landlord's cost) versus tenant damage (holes in walls, burns, pet damage, large stains — tenant's cost)"
                    width={1200}
                    height={630}
                    loading="lazy"
                    className="w-full h-auto rounded-xl border border-slate-200"
                  />
                  <figcaption className="text-sm text-slate-500 mt-2">
                    The dividing line at a glance — and even for genuine damage, tenants owe
                    depreciated value, not new-item replacement cost.
                  </figcaption>
                </figure>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    What Counts as Damage?
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Damage is deterioration that results from something beyond reasonable, ordinary
                    use — accidents, negligence, carelessness, misuse, or deliberate action. A
                    burn in a carpet, a cracked bathroom tile from a dropped object, a hole in
                    drywall from a thrown item, or large stains from an uncleaned spill: these are
                    all damage.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The tenant is also responsible for damage caused by their guests or other
                    occupants. If a friend visits and breaks a window, or if a child in the
                    household draws on the walls, that falls on the tenant — not the landlord.
                    Ontario RTA s.34 is explicit on this point.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-amber-900 text-sm mb-1">Damage must be proven</p>
                        <p className="text-amber-800 text-sm leading-relaxed">
                          In any Canadian province, a landlord who claims the tenant caused damage
                          must prove it. That means evidence of: (1) the unit&apos;s condition at
                          move-in, (2) the unit&apos;s condition at move-out, (3) the difference is
                          attributable to the tenant, and (4) the repair cost is reasonable. Without
                          a move-in inspection report, proving that the damage was not pre-existing
                          is difficult — which is why tenants should always insist on one.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Room-by-Room Guide: Wear and Tear vs. Damage
                  </h2>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 text-slate-600 text-xs font-semibold uppercase tracking-wide">
                        <tr>
                          <th className="text-left px-4 py-3 w-1/4">Item</th>
                          <th className="text-left px-4 py-3 text-emerald-700">Wear &amp; Tear (Landlord)</th>
                          <th className="text-left px-4 py-3 text-red-700">Damage (Tenant)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {wearAndTearExamples.map((row) => (
                          <tr key={row.item} className="hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 font-semibold text-slate-800">{row.item}</td>
                            <td className="px-4 py-3 text-slate-600">{row.wearAndTear}</td>
                            <td className="px-4 py-3 text-slate-600">{row.damage}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    How Depreciation Works: You Don&apos;t Owe the Full Replacement Cost
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Even when a tenant has genuinely caused damage, Canadian tribunals apply
                    depreciation when calculating how much the tenant owes. The principle is
                    straightforward: you are only liable for the remaining useful life of the
                    damaged item — not the cost of replacing it with something brand new.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    For example: a carpet has a typical useful lifespan of 10–15 years. If a
                    7-year-old carpet is damaged by a tenant and would cost $1,500 to replace, the
                    tenant would only owe a fraction of that — roughly $375 to $750, depending on
                    how the remaining useful life is calculated (if the carpet had 3–8 years
                    of life left).
                  </p>
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                    <p className="font-semibold text-blue-900 text-sm mb-2">Typical Useful Life Estimates Used by Canadian Tribunals</p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-blue-800">
                      {[
                        ["Carpet", "10–15 years"],
                        ["Interior paint", "5–7 years"],
                        ["Hardwood flooring", "25+ years"],
                        ["Appliances", "10–15 years"],
                        ["Bathroom fixtures", "15–25 years"],
                        ["Blinds / window coverings", "5–10 years"],
                      ].map(([item, life]) => (
                        <li key={item} className="flex justify-between gap-4">
                          <span>{item}</span>
                          <span className="font-semibold">{life}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    The Move-In Inspection: Your Most Important Tool
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The best protection against a wrongful damage charge is a thorough move-in
                    inspection report. Before or on your first day in the unit, walk through every
                    room and document the existing condition of every surface, fixture, appliance,
                    and fitting.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    In <strong>British Columbia</strong> and <strong>Alberta</strong>, the move-in
                    condition inspection is a legal requirement for landlords. In BC, a landlord
                    who fails to complete a condition inspection at both move-in <em>and</em>{" "}
                    move-out loses the right to make any claim against the security deposit,
                    regardless of what damage occurred. This is one of the most tenant-protective
                    provisions in Canadian rental law.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    In <strong>Ontario</strong>, there is no statutory move-in inspection requirement,
                    but it is strongly recommended. Without one, proving pre-existing conditions
                    becomes a credibility contest — and photographed, timestamped evidence from day
                    one of a tenancy is far more persuasive than a landlord&apos;s verbal claim that
                    the damage did not exist before.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Photograph every wall in each room, including behind doors",
                      "Photograph all appliances (open the oven, dishwasher, and refrigerator)",
                      "Document every carpet and flooring area",
                      "Photograph fixtures: bathroom, kitchen sink, faucets, toilet",
                      "Test every window, door, and lock — note any that stick or do not latch",
                      "Note any scuffs, marks, holes, or stains already present",
                      "Email the photos to yourself the same day to create a timestamp",
                      "Ask your landlord to sign the inspection report — or at minimum send it to them in writing",
                    ].map((step, i) => (
                      <div key={step} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Province-by-Province: Security Deposits and Damage Claims
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        province: "Ontario",
                        detail: "No security deposit — landlords can only collect last month's rent (LMR). The LMR cannot be used for damage claims without an LTB order. A landlord must file a Form L2 at the LTB to claim compensation for tenant-caused damage. Tenants can dispute damage claims at the LTB via a T1 if the LMR is wrongly applied.",
                      },
                      {
                        province: "British Columbia",
                        detail: "Security deposit capped at half a month's rent. Landlord must complete a condition inspection at move-in and move-out, or they lose the right to claim against the deposit entirely. Disputes go to the RTB. A landlord who wrongly withholds a deposit can be ordered to pay double.",
                      },
                      {
                        province: "Alberta",
                        detail: "Security deposit capped at one month's rent (RTA s.43). Both parties must complete the move-in inspection for the landlord to claim against the deposit. If no inspection occurs, the landlord forfeits their right to deductions. Disputes go to the RTDRS or Provincial Court.",
                      },
                      {
                        province: "Quebec",
                        detail: "No security deposits of any kind — Civil Code art. 1904 prohibits them outright. Landlords can only sue through the TAL to recover proven damage costs after the tenancy ends.",
                      },
                    ].map(({ province, detail }) => (
                      <div key={province} className="border border-slate-100 rounded-xl p-4">
                        <p className="font-semibold text-slate-900 text-sm mb-1">{province}</p>
                        <p className="text-slate-700 text-sm leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} includeSchema={false} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Is your landlord charging you fairly?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your lease and LeasePlain will flag any repair and damage clauses that
                    go beyond what provincial law allows.
                  </p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Review My Lease
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Tenant Repair Responsibilities in Canada", href: "/blog/tenant-repair-responsibilities-canada" },
                      { label: "Tenant Maintenance Duties in Ontario", href: "/blog/tenant-maintenance-duties-ontario" },
                      { label: "Moving Out in Ontario: Deposit Checklist", href: "/blog/moving-out-ontario-checklist" },
                      { label: "How to Get Your Landlord to Fix Something", href: "/blog/landlord-repair-obligations-canada" },
                      { label: "Security Deposit Rules by Province", href: "/blog/security-deposit-rules-canada" },
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
