import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import ReviewedByline from "@/components/ReviewedByline";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "What Repairs Are Tenants Responsible For in Canada? | LeasePlain",
  description:
    "Canadian tenants are legally required to repair damage they cause — but not normal wear and tear. Here is exactly what you are responsible for in Ontario, BC, Alberta, and Quebec, and what your landlord must fix.",
  alternates: { canonical: "https://leaseplain.com/blog/tenant-repair-responsibilities-canada" },
  openGraph: {
    title: "What Repairs Are Tenants Responsible For in Canada? | LeasePlain",
    description:
      "Canadian tenants are legally required to repair damage they cause — but not normal wear and tear. Here is exactly what you are responsible for in Ontario, BC, Alberta, and Quebec.",
    url: "https://leaseplain.com/blog/tenant-repair-responsibilities-canada",
    type: "article",
    publishedTime: "2026-07-07T00:00:00Z",
    modifiedTime: "2026-07-07T00:00:00Z",
  },
  keywords: [
    "what repairs are tenants responsible for Canada",
    "tenant repair responsibilities Ontario",
    "tenant damage vs wear and tear Canada",
    "what does tenant have to fix in rental",
    "tenant maintenance obligations Canada",
  ],
};

const faqItems = [
  {
    q: "What repairs are tenants responsible for in Ontario?",
    a: "Under Ontario's Residential Tenancies Act, s.33 and s.34, tenants must keep their unit ordinarily clean, repair or pay for any damage caused by themselves, their guests, or other occupants. This includes broken windows caused by the tenant, holes in walls, damaged appliances, and stains or burns beyond normal use. Tenants are not responsible for routine deterioration or for repairs caused by ordinary use — those are the landlord's responsibility under RTA s.20.",
  },
  {
    q: "Does a tenant have to fix a broken window in Canada?",
    a: "It depends on how the window broke. If the tenant, a guest, or another occupant broke the window — for example, from a ball, a thrown object, or an accident — the tenant is generally responsible for the cost of repair. If the window broke due to age, faulty installation, weather, or other causes outside the tenant's control, it is the landlord's responsibility to repair under their statutory maintenance obligation.",
  },
  {
    q: "Is a tenant responsible for clogged drains in Canada?",
    a: "Tenants are responsible for clogs caused by their own actions — for example, hair and soap buildup in a bathroom drain or food debris in a kitchen sink. The landlord is responsible for plumbing infrastructure failures, like a blocked main drain or a collapse in the pipe system, that are not caused by tenant misuse.",
  },
  {
    q: "Can a landlord charge a tenant for repairs in Ontario?",
    a: "Yes. Under Ontario's RTA, if a tenant or their guest damages the rental unit, the landlord can apply to the Landlord and Tenant Board (LTB) using a Form L2 to claim the cost of repairs. The landlord must prove the damage was caused by the tenant and provide evidence of the actual repair cost. A landlord cannot deduct repair costs from a last month's rent deposit in Ontario — any deduction requires an LTB order.",
  },
  {
    q: "What happens if a tenant does not clean the rental unit?",
    a: "Tenants in every Canadian province are required to maintain ordinary cleanliness. If a unit is left in a state of extreme uncleanliness that goes beyond normal living, the landlord can apply to a tribunal for compensation for the cleaning cost. In Ontario, this can be pursued via an LTB application. Note that a landlord cannot charge for cleaning if the unit was left in the same standard of cleanliness as when the tenant moved in.",
  },
  {
    q: "Are tenants responsible for pest control if they caused the infestation?",
    a: "Yes. If a pest infestation — rats, cockroaches, bedbugs — was caused or substantially contributed to by the tenant's actions (such as leaving food accessible, hoarding, or failing to notify the landlord about a pest problem), the tenant may be held liable for the cost of extermination. If the infestation was pre-existing or caused by building conditions, it is the landlord's obligation to address.",
  },
];

const tenantResponsibilities = [
  {
    category: "Always Tenant's Responsibility",
    items: [
      "Damage caused by the tenant, their guests, or other occupants",
      "Broken windows from tenant actions (thrown objects, accidents)",
      "Holes in walls from hanging items improperly or from alteration",
      "Burns on carpets, countertops, or flooring from cigarettes or heat",
      "Pet damage — scratches, stains, chewed baseboards",
      "Drain clogs caused by grease, hair, or other tenant-introduced material",
      "Broken fixtures or appliances due to misuse",
      "Pest infestations caused by tenant's conduct or negligence",
    ],
    color: "bg-red-50 border-red-100",
    headerColor: "text-red-700 bg-red-100",
  },
  {
    category: "Always Landlord's Responsibility",
    items: [
      "Structural repairs (walls, roof, foundation, flooring)",
      "HVAC and heating systems (not caused by tenant misuse)",
      "Plumbing infrastructure and water supply systems",
      "Electrical systems and wiring",
      "Exterior doors, windows, and locks",
      "Normal wear and tear on paint, carpets, and fixtures over time",
      "Pest infestations not caused by tenant conduct",
      "Common area maintenance",
    ],
    color: "bg-green-50 border-green-100",
    headerColor: "text-green-700 bg-green-100",
  },
];

export default function TenantRepairResponsibilitiesCanadaPage() {
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
        headline="What Repairs Are Tenants Responsible For in Canada?"
        description="Canadian tenants are legally required to repair damage they cause — but not normal wear and tear. Here is exactly what you are responsible for in Ontario, BC, Alberta, and Quebec, and what your landlord must fix."
        url="https://leaseplain.com/blog/tenant-repair-responsibilities-canada"
        datePublished="2026-07-07"
        dateModified="2026-07-07"
        keywords={[
          "what repairs are tenants responsible for Canada",
          "tenant repair responsibilities Ontario",
          "tenant damage vs wear and tear Canada",
          "what does tenant have to fix in rental",
          "tenant maintenance obligations Canada",
        ]}
        imageUrl="https://leaseplain.com/diagrams/tenant-repair-responsibilities.png"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://leaseplain.com" },
          { name: "Blog", href: "https://leaseplain.com/blog" },
          { name: "What Repairs Are Tenants Responsible For", href: "https://leaseplain.com/blog/tenant-repair-responsibilities-canada" },
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
            "@id": "https://leaseplain.com/blog/tenant-repair-responsibilities-canada",
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
                <span>Tenant Repair Responsibilities</span>
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
                  7 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                What Repairs Are Tenants Responsible For in Canada?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Canadian landlords must maintain the rental unit — but tenants are legally
                responsible for damage they cause. Understanding where that line sits can
                prevent a costly dispute at move-out. Here is a province-by-province breakdown of
                tenant repair obligations, what counts as your problem to fix, and what your
                landlord must handle.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <ReviewedByline updated="August 2026" />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    The Legal Framework: Landlord Maintains, Tenant Does Not Damage
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Across every Canadian province, residential tenancy legislation divides repair
                    responsibility along the same fundamental line: <strong>landlords must maintain
                    the property</strong>; <strong>tenants must not damage it</strong>.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    In <strong>Ontario</strong>, the{" "}
                    <em>Residential Tenancies Act, 2006</em> (RTA) sets this out in two sections.
                    Section 20 requires the landlord to &ldquo;maintain a rental unit in a good
                    state of repair and fit for habitation.&rdquo; Section 33 then imposes a
                    parallel obligation on tenants: they must &ldquo;maintain the unit in a state
                    of ordinary cleanliness.&rdquo; Section 34 goes further — if a tenant or their
                    guest causes undue damage, the tenant is responsible for the cost of repair.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    In <strong>British Columbia</strong>, section 32 of the{" "}
                    <em>Residential Tenancy Act</em> mirrors this: the landlord must maintain the
                    unit in a state of repair, while tenants must keep the unit reasonably clean
                    and not cause damage beyond normal use. Section 7(1)(c) of BC&apos;s Act
                    confirms that the tenant must not significantly interfere with or disturb the
                    reasonable enjoyment of others — including not causing damage to the property.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    In <strong>Alberta</strong>, section 21 of the{" "}
                    <em>Residential Tenancies Act</em> requires tenants to keep the premises
                    reasonably clean and not cause or permit damage beyond normal use. The tenant
                    is also required to notify the landlord promptly when damage or needed repairs
                    become apparent — failing to report a problem that then worsens can shift
                    liability to the tenant.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    In <strong>Quebec</strong>, article 1971 of the{" "}
                    <em>Civil Code of Québec</em> holds the tenant responsible for any deterioration
                    they cause to the dwelling, and article 1973 requires tenants to carry out minor
                    maintenance repairs as defined by regulation — these are small upkeep tasks
                    (replacing smoke detector batteries, lubricating hinges) that fall on the tenant
                    regardless of who caused the wear.
                  </p>
                </div>

                <figure>
                  <img
                    src="/diagrams/tenant-repair-responsibilities.png"
                    alt="Decision flowchart for Canadian rentals: if damage was caused by the tenant, a guest, or misuse, the tenant pays for the repair; if it is normal wear and tear, aging, or a building system failure, the landlord must repair it"
                    width={1200}
                    height={630}
                    loading="lazy"
                    className="w-full h-auto rounded-xl border border-slate-200"
                  />
                  <figcaption className="text-sm text-slate-500 mt-2">
                    The one-question test that decides most repair disputes in Canadian rentals.
                  </figcaption>
                </figure>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Quick Reference: Who Fixes What?
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {tenantResponsibilities.map((section) => (
                      <div key={section.category} className={`rounded-xl border p-4 ${section.color}`}>
                        <p className={`text-xs font-bold uppercase tracking-wide px-2 py-1 rounded mb-3 inline-block ${section.headerColor}`}>
                          {section.category}
                        </p>
                        <ul className="space-y-1.5">
                          {section.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                              <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-slate-400" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    The Damage vs. Wear and Tear Distinction
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The single most important concept in tenant repair law is the distinction between
                    <strong> normal wear and tear</strong> and <strong>tenant-caused damage</strong>.
                    Normal wear and tear is deterioration that happens from ordinary, reasonable
                    everyday use — and it is the landlord&apos;s problem, not the tenant&apos;s.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Wear and tear includes things like: paint fading over time, small scuffs on
                    walls from furniture placement, carpet fibres wearing down from foot traffic,
                    minor scratches on hardwood from everyday use, and the gradual yellowing of
                    grout in bathrooms. These are consequences of living in a space — a court or
                    tribunal will not hold a tenant liable for them.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Damage, by contrast, is something beyond what reasonable use would produce: a
                    large hole punched in drywall, a cigarette burn on a countertop, deep gouges
                    in hardwood flooring from dragging heavy furniture, shattered tiles from impact,
                    or a bathroom fan destroyed from someone hanging from it. These cross the line
                    from ordinary use into damage — and the cost to restore the unit falls on the
                    tenant.
                  </p>
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                    <p className="font-semibold text-blue-900 text-sm mb-2">The Depreciation Question</p>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      Even when a tenant has caused damage, they are generally only liable for the
                      current depreciated value of the item — not the full replacement cost of a
                      brand-new version. If a 12-year-old carpet is burned and a new carpet costs
                      $2,000 but the old one had a useful life of 15 years, the tenant may only
                      owe roughly $400 (the remaining 3 years of value). Ontario LTB arbitrators
                      and BC RTB arbitrators both apply this principle.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Specific Scenarios: Who Pays?
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        scenario: "Broken window",
                        answer: "Tenant's responsibility if caused by their action or their guest's action. Landlord's responsibility if caused by age, seal failure, thermal stress, or weather.",
                      },
                      {
                        scenario: "Clogged drain",
                        answer: "Tenant's responsibility for clogs caused by hair, grease, or objects they put down the drain. Landlord's responsibility for plumbing system failures, root intrusion, or collapse.",
                      },
                      {
                        scenario: "Mould",
                        answer: "Landlord's responsibility if caused by structural water penetration, roof leaks, or inadequate ventilation in the building. Tenant's responsibility if caused by consistently leaving windows closed in a humid unit without running the bathroom exhaust fan, or by drying clothes indoors without ventilation.",
                      },
                      {
                        scenario: "Pet damage",
                        answer: "Tenant's responsibility. Scratches on floors, doors, or walls caused by a pet are damage beyond normal wear and tear regardless of whether the landlord agreed to the pet.",
                      },
                      {
                        scenario: "Appliance breakdown",
                        answer: "Landlord's responsibility if the appliance is included in the rental and breaks down from age or malfunction. Tenant's responsibility if the appliance breaks from misuse — running an oven without proper ventilation, overloading a dishwasher, or forcing an ice maker.",
                      },
                      {
                        scenario: "Pest infestation",
                        answer: "Landlord's responsibility in most cases — building-wide infestations almost always arise from building conditions. Tenant's responsibility if the infestation is confined to their unit and clearly caused by their conduct (e.g., leaving garbage indoors, hoarding food waste).",
                      },
                    ].map(({ scenario, answer }) => (
                      <div key={scenario} className="border border-slate-100 rounded-xl p-4">
                        <p className="font-semibold text-slate-900 text-sm mb-1">{scenario}</p>
                        <p className="text-slate-700 text-sm leading-relaxed">{answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Reporting Obligations: When Tenants Must Tell the Landlord
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Even when a repair is the landlord&apos;s responsibility, tenants have an
                    obligation to <em>report</em> problems promptly. In Alberta, this is explicit
                    in the statute. In Ontario and BC, it is implied — a tenant who notices a roof
                    leak and says nothing for months while the damage spreads may find that a
                    portion of the resulting damage is attributed to them for failing to mitigate.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-amber-900 text-sm mb-1">Always report in writing</p>
                        <p className="text-amber-800 text-sm leading-relaxed">
                          When you discover a problem — whether it&apos;s your fault or the
                          landlord&apos;s — send a written notice immediately. Email is best. If
                          a landlord later claims you caused damage by not reporting a leak or
                          pest problem, having a timestamped record showing you did report it
                          protects you entirely.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    What Landlords Can and Cannot Do to Recover Repair Costs
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    When a tenant causes damage, landlords have legal avenues to recover the cost —
                    but they cannot simply help themselves. In <strong>Ontario</strong>, a landlord
                    cannot deduct repair costs from a last month&apos;s rent (LMR) deposit without
                    an LTB order. If a landlord does this, the tenant can file a T1 application to
                    recover the improperly applied amount.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The landlord&apos;s correct path in Ontario is to file an{" "}
                    <strong>L2 application</strong> at the LTB for compensation for damage. They
                    must prove on a balance of probabilities that: (1) the damage exists and was not
                    present at the start of tenancy, (2) it was caused by the tenant or their guest,
                    and (3) the claimed repair cost is reasonable.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    In <strong>British Columbia</strong> and <strong>Alberta</strong>, the landlord
                    can apply to the RTB or RTDRS respectively to recover proven repair costs caused
                    by the tenant. In BC specifically, a landlord can also apply to retain a security
                    deposit — up to half a month&apos;s rent — and must do so through the RTB; they
                    cannot simply keep it without notifying the tenant and providing an opportunity
                    to dispute.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    In <strong>Quebec</strong>, there is no security deposit — landlords must pursue
                    damage claims through the Tribunal administratif du logement (TAL) directly.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} includeSchema={false} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Does your lease spell out repair duties?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your lease and LeasePlain will flag any repair clauses that shift costs
                    onto you unfairly — and explain what is actually enforceable.
                  </p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Upload My Lease
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "How to Get Your Landlord to Fix Something", href: "/blog/landlord-repair-obligations-canada" },
                      { label: "Normal Wear and Tear vs. Damage in Canada", href: "/blog/normal-wear-and-tear-vs-damage-canada" },
                      { label: "Tenant Maintenance Duties in Ontario", href: "/blog/tenant-maintenance-duties-ontario" },
                      { label: "Moving Out in Ontario: Deposit Checklist", href: "/blog/moving-out-ontario-checklist" },
                      { label: "Month-to-Month vs Fixed-Term Lease", href: "/blog/month-to-month-vs-fixed-term-lease" },
                      { label: "Lease Red Flags to Watch For", href: "/blog/lease-red-flags-to-watch-for" },
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
