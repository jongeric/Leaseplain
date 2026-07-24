import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tenant Maintenance Duties in Ontario: What You Are Legally Required to Upkeep | LeasePlain",
  description:
    "Ontario's RTA s.33 and s.34 impose specific maintenance duties on tenants — ordinary cleanliness, no undue damage, and responsibility for guests. Here is exactly what Ontario law requires and what happens if you do not comply.",
  alternates: { canonical: "https://leaseplain.com/blog/tenant-maintenance-duties-ontario" },
  openGraph: {
    title: "Tenant Maintenance Duties in Ontario: What You Must Upkeep | LeasePlain",
    description:
      "Ontario's RTA s.33 and s.34 require tenants to keep the unit ordinarily clean and pay for damage they cause. Here is exactly what Ontario law requires.",
    url: "https://leaseplain.com/blog/tenant-maintenance-duties-ontario",
    type: "article",
    publishedTime: "2026-07-07T00:00:00Z",
    modifiedTime: "2026-07-07T00:00:00Z",
  },
  keywords: [
    "tenant maintenance duties Ontario",
    "Ontario RTA section 33 34 tenant obligations",
    "tenant cleanliness requirements Ontario",
    "tenant responsible for repairs Ontario",
    "Ontario RTA tenant damage liability",
  ],
};

const faqItems = [
  {
    q: "What does ordinarily clean mean under Ontario's RTA?",
    a: "Ontario's Residential Tenancies Act, s.33 requires tenants to maintain the unit 'in a state of ordinary cleanliness.' The LTB interprets this as the standard of cleanliness a reasonable person would maintain in an ordinary home — not spotless, but not neglected either. A unit with excessive garbage, severe grease buildup in a kitchen, heavy mould from inadequate ventilation, or a biohazardous condition would fail this standard. Normal dust accumulation, minor grease on a stovetop, or minor soap scum in a bathroom would not.",
  },
  {
    q: "What happens if a tenant in Ontario does not meet their cleanliness obligations?",
    a: "A landlord who believes a tenant is not maintaining ordinary cleanliness can file an application with the Landlord and Tenant Board. If the board finds the unit is not ordinarily clean, it can order the tenant to clean to an acceptable standard and may issue a compliance order. In more severe cases — particularly where a significant health or safety hazard exists — the board may also consider the broader context when evaluating any other applications brought by either party.",
  },
  {
    q: "Is a tenant responsible for a guest who damages the unit in Ontario?",
    a: "Yes. Under Ontario's RTA s.34, a tenant is responsible for the conduct of their guests and other occupants of the unit — including any damage caused. If a visitor breaks a window, damages a door, or causes any other undue damage to the property, the cost of that repair falls on the tenant. The tenant's responsibility extends to anyone they allow into the unit.",
  },
  {
    q: "Can an Ontario landlord enter to inspect for cleanliness?",
    a: "Yes, but only with proper notice. Under Ontario's RTA s.27, a landlord must give at least 24 hours' written notice before entering a rental unit, and the entry must be between 8 a.m. and 8 p.m. (unless the tenant consents to a different time). An exception exists for genuine emergencies. A landlord cannot conduct unannounced inspections for cleanliness — if they do, the tenant can file a T2 application for interference with their rights.",
  },
  {
    q: "What is an N5 notice and how does it relate to tenant maintenance?",
    a: "An N5 (Notice to Terminate a Tenancy Early — For Interfering with Others, Damage or Overcrowding) is the formal notice a landlord issues when a tenant has caused undue damage to the unit, property, or common areas, or has substantially interfered with the reasonable enjoyment of other tenants or the landlord. A first N5 is voidable — the tenant has 7 days from receiving it to correct the problem (repair the damage or clean the issue). If it is not corrected in that 7-day window, the landlord can apply to the LTB for an eviction order. A second N5 within 6 months is non-voidable — the tenant cannot fix it to stop the eviction process.",
  },
  {
    q: "Are tenants responsible for changing smoke detector batteries in Ontario?",
    a: "Ontario's Fire Protection and Prevention Act requires landlords to install and maintain working smoke alarms. The duty to test and maintain the alarm is technically split — the landlord has an ongoing obligation to ensure alarms are functional, but tenants should not tamper with or disable them. In practice, many leases include a clause making tenants responsible for battery replacement in battery-operated units — this is a permissible addition under RTA s.15 (additional terms in a standard lease) as long as it does not conflict with the RTA itself.",
  },
];

const tenantDuties = [
  {
    heading: "Ordinary Cleanliness (RTA s.33)",
    description:
      "Maintain the unit in a state of ordinary cleanliness — the standard a reasonable person would apply in their own home. This means regular kitchen cleaning, bathroom maintenance, and not allowing garbage, mould, or pests to develop from neglect.",
    examples: [
      "Regularly clean the kitchen including stovetop, oven, and refrigerator",
      "Maintain bathroom cleanliness to prevent mould from soap and moisture",
      "Dispose of garbage in designated receptacles and not allow it to accumulate",
      "Ventilate properly — especially after showering and cooking",
    ],
  },
  {
    heading: "No Undue Damage (RTA s.34)",
    description:
      "The tenant must not cause undue damage to the rental unit, the building, or the landlord's property. 'Undue damage' means damage that exceeds normal wear and tear — it includes damage caused by guests and other occupants.",
    examples: [
      "Do not punch holes in walls or damage drywall",
      "Avoid dragging heavy furniture across hardwood or tile",
      "Use door stops to prevent doorknob holes in walls",
      "Immediately report any accidental damage to your landlord in writing",
    ],
  },
  {
    heading: "Report Needed Repairs Promptly",
    description:
      "While not expressly stated in the same terms as landlord obligations, tenants who fail to report a developing problem — a slow leak that becomes a major water damage event, or a pest sighting that leads to a building-wide infestation — can find that a tribunal holds them partly responsible for the escalation.",
    examples: [
      "Report water leaks or moisture intrusion immediately by email",
      "Notify your landlord in writing if you see signs of pests",
      "Report failing appliances (heating, water heater) as soon as you notice",
      "Do not delay reporting out of concern about inconvenience",
    ],
  },
  {
    heading: "Responsibility for Guests and Occupants",
    description:
      "Ontario's RTA s.34 extends the tenant's obligations to cover the conduct of guests, family members, and anyone else the tenant allows into the unit or building. If your guest causes damage or creates a disturbance, it is legally your problem.",
    examples: [
      "Inform guests of building rules before they visit",
      "Do not allow guests to behave in ways that disturb other tenants",
      "Ensure children do not damage common areas or other units",
      "Document any accidental damage caused by guests and report it",
    ],
  },
];

export default function TenantMaintenanceDutiesOntarioPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to meet your tenant maintenance obligations in Ontario",
    "description": "Steps Ontario tenants can take to comply with their RTA maintenance duties and avoid N5 notices or LTB claims.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Keep the unit ordinarily clean",
        "text": "Maintain the kitchen, bathroom, and living areas to the standard a reasonable person would apply in their own home. Dispose of garbage regularly, clean appliances, and ventilate to prevent mould.",
      },
      {
        "@type": "HowToStep",
        "name": "Conduct and complete a move-in inspection",
        "text": "Photograph every room and surface on move-in day. Email the photos to yourself and send a copy to your landlord. This protects you from later being blamed for pre-existing damage.",
      },
      {
        "@type": "HowToStep",
        "name": "Report damage and needed repairs in writing immediately",
        "text": "Email your landlord as soon as you notice any damage or needed repair — even if you caused it. A timestamped written report protects you from claims that you delayed reporting a problem that worsened.",
      },
      {
        "@type": "HowToStep",
        "name": "Manage guests responsibly",
        "text": "Remember that you are legally responsible for any damage or disturbance caused by your guests. Inform visitors of building rules and ensure they behave appropriately.",
      },
      {
        "@type": "HowToStep",
        "name": "Respond quickly to any N5 notice",
        "text": "If your landlord issues an N5 for damage or cleanliness, you have exactly 7 days from receiving the notice to repair the damage or address the issue. Use all 7 days productively and document what you did to fix the problem.",
      },
    ],
  };

  return (
    <>
      <ArticleSchema
        headline="Tenant Maintenance Duties in Ontario: What You Are Legally Required to Upkeep"
        description="Ontario's RTA s.33 and s.34 impose specific maintenance duties on tenants — ordinary cleanliness, no undue damage, and responsibility for guests. Here is exactly what Ontario law requires."
        url="https://leaseplain.com/blog/tenant-maintenance-duties-ontario"
        datePublished="2026-07-07"
        dateModified="2026-07-07"
        keywords={[
          "tenant maintenance duties Ontario",
          "Ontario RTA section 33 34 tenant obligations",
          "tenant cleanliness requirements Ontario",
          "tenant responsible for repairs Ontario",
          "Ontario RTA tenant damage liability",
        ]}
        imageUrl="https://leaseplain.com/diagrams/tenant-maintenance-duties-ontario.png"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://leaseplain.com" },
          { name: "Blog", href: "https://leaseplain.com/blog" },
          { name: "Tenant Maintenance Duties Ontario", href: "https://leaseplain.com/blog/tenant-maintenance-duties-ontario" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "<") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, "<") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/tenant-maintenance-duties-ontario",
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
                <span>Tenant Maintenance Duties Ontario</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Ontario
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
                Tenant Maintenance Duties in Ontario: What You Are Legally Required to Upkeep
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Ontario&apos;s Residential Tenancies Act imposes clear obligations on tenants —
                not just landlords. Under RTA s.33, tenants must maintain ordinary cleanliness.
                Under RTA s.34, tenants are responsible for damage caused by themselves or their
                guests. Failing either obligation can result in an N5 notice and LTB proceedings.
                Here is what the law actually requires.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    The Statutory Foundation: RTA s.33 and s.34
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Most Ontario tenants are familiar with their landlord&apos;s obligation to
                    maintain the unit under RTA s.20. Fewer know that the Act also sets specific
                    obligations running in the other direction — obligations placed squarely on the
                    tenant.
                  </p>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4 space-y-4">
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">RTA s.33 — Cleanliness</p>
                      <p className="text-slate-700 text-sm leading-relaxed italic">
                        &ldquo;The tenant is responsible for ordinary cleanliness of the rental unit, except to the extent that the tenancy agreement requires the landlord to clean it.&rdquo;
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">RTA s.34 — Damage</p>
                      <p className="text-slate-700 text-sm leading-relaxed italic">
                        &ldquo;The tenant is responsible for the repair of undue damage to the rental unit or residential complex caused by the wilful or negligent conduct of the tenant, another occupant of the rental unit or a person permitted in the residential complex by the tenant.&rdquo;
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    These two sections are the legal basis for nearly every landlord claim against
                    a tenant for cleaning costs, repair costs, and property damage in Ontario. They
                    are also the basis for an N5 notice — the formal warning a landlord issues when
                    they believe a tenant has violated either obligation.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Your Four Core Maintenance Duties in Ontario
                  </h2>
                  <div className="space-y-6">
                    {tenantDuties.map((duty) => (
                      <div key={duty.heading} className="border border-slate-100 rounded-xl p-5">
                        <h3 className="font-bold text-slate-900 mb-2">{duty.heading}</h3>
                        <p className="text-slate-700 text-sm leading-relaxed mb-3">{duty.description}</p>
                        <ul className="space-y-1.5">
                          {duty.examples.map((ex) => (
                            <li key={ex} className="flex items-start gap-2 text-sm text-slate-600">
                              <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                              {ex}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    The N5 Notice: What Happens When You Breach These Duties
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    When an Ontario landlord believes a tenant has violated their obligations under
                    RTA s.33 or s.34 (or has otherwise substantially interfered with the reasonable
                    enjoyment of the property), the landlord may issue an{" "}
                    <strong>N5 notice (Notice to Terminate a Tenancy Early — Interfering with
                    Others, Damage or Overcrowding)</strong>.
                  </p>

                  <figure className="mb-5">
                    <img
                      src="/diagrams/tenant-maintenance-duties-ontario.png"
                      alt="Timeline of Ontario's N5 notice process: day 0 the N5 is served, days 1 to 7 are the voiding window where the tenant can repair damage or clean to void the notice, from day 8 the landlord may file an L2 application with the LTB, and a second N5 within 6 months cannot be voided"
                      width={1200}
                      height={630}
                      loading="lazy"
                      className="w-full h-auto rounded-xl border border-slate-200"
                    />
                    <figcaption className="text-sm text-slate-500 mt-2">
                      The N5 timeline: the first notice gives you a 7-day window to fix the
                      problem; a second within 6 months does not.
                    </figcaption>
                  </figure>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                      <p className="font-bold text-blue-900 text-sm mb-2">First N5 — Voidable</p>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        The tenant has <strong>7 days</strong> from receiving the N5 to repair the
                        damage, pay the cost of repair, or address the cleanliness issue. If the
                        tenant complies within 7 days, the N5 is void and cannot be used to apply
                        for eviction.
                      </p>
                    </div>
                    <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                      <p className="font-bold text-red-900 text-sm mb-2">Second N5 Within 6 Months — Non-Voidable</p>
                      <p className="text-red-800 text-sm leading-relaxed">
                        If a second N5 is served within 6 months of the first, the tenant cannot
                        void it by correcting the issue. The landlord can immediately apply to
                        the LTB for an eviction order without giving the tenant another chance
                        to fix the problem.
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-amber-900 text-sm mb-1">If you receive an N5, act immediately</p>
                        <p className="text-amber-800 text-sm leading-relaxed">
                          The 7-day window to void a first N5 is firm. If the N5 identifies
                          damage, arrange repairs within those 7 days and document that you did
                          so — keep receipts and take dated photos of the repaired area. If you
                          believe the N5 is unwarranted (e.g., the landlord is claiming damage
                          that existed before your tenancy), gather your evidence and prepare for
                          an LTB hearing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    How an Ontario Landlord Can Recover Repair Costs
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    If a landlord believes a tenant caused undue damage, they have two main paths
                    to recover repair costs in Ontario:
                  </p>
                  <ol className="list-decimal list-inside space-y-3 text-slate-700 leading-relaxed mb-3">
                    <li>
                      <strong>N5 notice followed by L2 application at the LTB.</strong> The
                      landlord issues an N5, waits for the voiding period to pass (or serves a
                      second N5 if warranted), and then files a Form L2 at the LTB. The L2 can
                      request both compensation for the damage and an eviction order. The LTB will
                      schedule a hearing and both parties can present evidence.
                    </li>
                    <li>
                      <strong>Direct L2 application for compensation only.</strong> A landlord can
                      also file an L2 solely for monetary compensation without seeking eviction.
                      This is more common when the tenant has already moved out and the landlord
                      wants to be compensated for damage discovered at move-out.
                    </li>
                  </ol>
                  <p className="text-slate-700 leading-relaxed">
                    Critically, a landlord cannot simply apply the last month&apos;s rent deposit
                    toward repair costs. The LMR deposit in Ontario can only be applied to the
                    last month of rent — period. Using it for repairs without an LTB order entitles
                    the tenant to file a <strong>T1 application</strong> to recover the amount
                    wrongly applied.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    How to Protect Yourself: A Practical Checklist for Ontario Tenants
                  </h2>
                  <div className="space-y-2">
                    {[
                      { title: "Conduct a thorough move-in inspection", desc: "Photograph every room, surface, appliance, and fixture on move-in day. Email the photos to yourself and your landlord to create a timestamped record." },
                      { title: "Report pre-existing damage in writing", desc: "If you notice damage at move-in that was not captured in the inspection, email your landlord the same day to create a record that it was pre-existing." },
                      { title: "Keep the unit ordinarily clean", desc: "Maintain the kitchen, bathroom, and living areas to a reasonable standard. Address moisture issues promptly to prevent mould." },
                      { title: "Report needed repairs in writing immediately", desc: "If you notice a problem — a leak, a crack, a failing appliance — send an email to your landlord the day you discover it." },
                      { title: "Document any accidental damage you cause", desc: "If you or a guest accidentally damages something, photograph it and notify your landlord in writing before they discover it. Proactive disclosure protects against a second N5." },
                      { title: "Respond to an N5 notice within 7 days", desc: "If you receive an N5, take it seriously. Address the issue within 7 days and document your remediation with photos and receipts." },
                      { title: "Conduct a move-out inspection", desc: "Before vacating, photograph every room in the same way you did at move-in. Compare the photos side by side. If there are differences, decide whether they are your responsibility." },
                    ].map(({ title, desc }) => (
                      <div key={title} className="flex items-start gap-3 border border-slate-100 rounded-xl p-4">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">{title}</p>
                          <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                        </div>
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
                  <h3 className="font-bold text-lg mb-2">What does your lease say about repairs?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your Ontario lease and LeasePlain will flag any repair clauses that
                    go beyond what the RTA actually requires — and flag clauses that could
                    expose you to unexpected liability.
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
                      { label: "Normal Wear and Tear vs. Damage in Canada", href: "/blog/normal-wear-and-tear-vs-damage-canada" },
                      { label: "How to Get Your Landlord to Fix Something", href: "/blog/landlord-repair-obligations-canada" },
                      { label: "Moving Out in Ontario: Deposit Checklist", href: "/blog/moving-out-ontario-checklist" },
                      { label: "Ontario Tenant Rights Guide", href: "/tenant-rights/ontario" },
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

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Ontario Tools</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Is My Landlord Allowed to Do This?", href: "/tools/landlord-quiz" },
                      { label: "Eviction Notice Checker", href: "/tools/eviction-notice-checker" },
                      { label: "Lease Clause Red Flag Scanner", href: "/tools/clause-checker" },
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
