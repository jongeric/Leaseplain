import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock, Wrench } from "lucide-react";
import ReviewedByline from "@/components/ReviewedByline";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "How to Get Your Landlord to Fix Something: Repair Rights Across Canada | LeasePlain",
  description:
    "Learn your repair rights as a tenant in Canada. Ontario T6 applications, BC RTB disputes, Alberta RTDRS, and Quebec TAL — plus what you cannot do if your landlord ignores repairs.",
  alternates: {
    canonical: "https://leaseplain.com/blog/landlord-repair-obligations-canada",
  },
  openGraph: {
    title:
      "How to Get Your Landlord to Fix Something: Repair Rights Across Canada | LeasePlain",
    description:
      "Learn your repair rights as a tenant in Canada. Ontario T6 applications, BC RTB disputes, Alberta RTDRS, and Quebec TAL — plus what you cannot do if your landlord ignores repairs.",
    url: "https://leaseplain.com/blog/landlord-repair-obligations-canada",
    type: "article",
    publishedTime: "2026-06-05T00:00:00Z",
    modifiedTime: "2026-06-05T00:00:00Z",
  },
  keywords: [
    "landlord repair obligations Canada",
    "how to get landlord to fix something",
    "T6 application Ontario",
    "rent abatement Ontario",
    "tenant repair rights Canada",
  ],
};

const faqItems = [
  {
    q: "Can I stop paying rent if my landlord won't fix something in Ontario?",
    a: "No. Withholding rent in Ontario is not a recognized remedy and can lead to eviction proceedings for non-payment (N4 notice). The correct approach is to file a T6 application with the LTB, which can result in a rent abatement, an order for repairs, or both. Continue paying rent while your application is being processed.",
  },
  {
    q: "What is a rent abatement?",
    a: "A rent abatement is a retroactive reduction in the rent you owed during a period when your unit was not properly maintained. If the LTB grants you a T6 application, it can order the landlord to repay you for months when the unit was substandard. Abatement amounts typically range from 5% to 25% for moderate issues, and can reach 100% for severe habitability problems.",
  },
  {
    q: "How do I document a repair problem before filing a T6?",
    a: "Take dated photographs and videos of the issue. Send a written repair request to your landlord (email is ideal — it creates a timestamped record). If the landlord doesn't respond within a reasonable time (typically 7–10 days for non-emergency issues), contact your local bylaw enforcement or property standards officer. Keep copies of all communications.",
  },
  {
    q: "Who is responsible for pest control in a rental?",
    a: "In most provinces, pest control (rodents, cockroaches, bedbugs) is the landlord's responsibility if the infestation is not caused by the tenant's actions. In Ontario, a landlord who fails to address a pest problem can be found liable through a T6 application at the LTB.",
  },
  {
    q: "What if my landlord retaliates after I request repairs?",
    a: "Landlord retaliation for exercising tenant rights is prohibited. In Ontario, if a landlord serves an eviction notice or harasses you after you've made a complaint about maintenance or filed a T6, you can raise this as a defense at the LTB or file a T2 application for interference with your rights. Document the timeline carefully — retaliation claims depend on the sequence of events.",
  },
];

export default function LandlordRepairObligationsCanadaPage() {
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

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "How to Get Your Landlord to Fix Something: Repair Rights Across Canada",
    url: "https://leaseplain.com/blog/landlord-repair-obligations-canada",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".speakable-summary"],
    },
  };

  return (
    <>
      <ArticleSchema
        headline="How to Get Your Landlord to Fix Something: Repair Rights Across Canada"
        description="Learn your repair rights as a tenant in Canada. Ontario T6 applications, BC RTB disputes, Alberta RTDRS, and Quebec TAL — plus what you cannot do if your landlord ignores repairs."
        url="https://leaseplain.com/blog/landlord-repair-obligations-canada"
        datePublished="2026-06-05"
        dateModified="2026-06-05"
        keywords={[
          "landlord repair obligations Canada",
          "how to get landlord to fix something",
          "T6 application Ontario",
          "rent abatement Ontario",
          "tenant repair rights Canada",
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://leaseplain.com" },
          { name: "Blog", href: "https://leaseplain.com/blog" },
          {
            name: "How to Get Your Landlord to Fix Something",
            href: "https://leaseplain.com/blog/landlord-repair-obligations-canada",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
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
                <span>How to Get Your Landlord to Fix Something</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-200">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Canada
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  June 5, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  8 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                How to Get Your Landlord to Fix Something: Repair Rights Across Canada
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Every province in Canada requires landlords to keep rental units in a good state of
                repair. But knowing your rights and knowing how to enforce them are two different
                things. This guide walks you through the steps — from a first written request to a
                formal tribunal application — and explains what you can and cannot do when your
                landlord goes silent.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <ReviewedByline updated="August 2026" />

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench className="w-5 h-5 text-blue-600" aria-hidden="true" />
                    <h2 className="text-2xl font-bold text-slate-900">
                      Your Landlord&apos;s Legal Duty to Repair
                    </h2>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Regardless of what province you rent in, your landlord has a legal obligation to
                    keep your home in a state of good repair. This is not a contractual nicety — it
                    is a statutory requirement that cannot be waived, even if your lease says
                    otherwise.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    In <strong>Ontario</strong>, section 20 of the{" "}
                    <em>Residential Tenancies Act, 2006</em> (RTA) requires a landlord to
                    &quot;maintain a rental unit in a good state of repair and fit for habitation
                    and for complying with health, safety, housing and maintenance standards.&quot;
                    Crucially, this obligation applies{" "}
                    <strong>regardless of what the tenant knew at the time of renting</strong> — you
                    cannot sign away your right to a habitable home. Section 21 adds that landlords
                    cannot cut off or interfere with vital services — heat, hydro, water, fuel, or
                    natural gas — whether as retaliation or otherwise.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Ontario also sets minimum heat standards. Under the Ontario Building Code, heat
                    must be maintained at a minimum of{" "}
                    <strong>20°C from September 1 to June 15</strong>. The City of Toronto sets a
                    higher municipal standard of{" "}
                    <strong>21°C from September 15 to June 1</strong>.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    In <strong>British Columbia</strong>, section 32 of the{" "}
                    <em>Residential Tenancy Act</em> requires a landlord to maintain a rental unit
                    and residential property &quot;in a state of repair that complies with the
                    standard of the tenancy agreement and health, safety, and housing standards
                    required by law.&quot; The standard is pegged to the condition of the unit at the
                    start of the tenancy — meaning it should not deteriorate during your time there.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    In <strong>Alberta</strong>, section 16 of the{" "}
                    <em>Residential Tenancies Act</em> requires landlords to &quot;maintain the
                    premises in a state of good repair and fit for habitation during the tenancy.&quot;
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    In <strong>Quebec</strong>, articles 1854 and 1907 of the{" "}
                    <em>Civil Code of Québec</em> require the lessor to deliver property in good
                    repair and maintain it throughout the tenancy, ensuring peaceful enjoyment. If
                    the dwelling becomes unfit for habitation, article 1907 allows the tenant to
                    apply to the Tribunal administratif du logement (TAL) for a rent reduction or
                    even termination of the lease.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Step-by-Step: How to Request Repairs
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Before you file any formal application, you need a paper trail. Tribunals in
                    every province expect tenants to have made a reasonable effort to notify their
                    landlord first. Follow these steps in order.
                  </p>
                  <ol className="list-decimal list-inside space-y-4 text-slate-700 leading-relaxed mb-6">
                    <li>
                      <strong>Document the problem.</strong> Take dated photographs and video of
                      every visible aspect of the issue. Note when you first noticed it, whether it
                      is getting worse, and any impact on your use of the unit (e.g., no hot water,
                      mould visible, pest sightings).
                    </li>
                    <li>
                      <strong>Send a written repair request to your landlord.</strong> Email is ideal
                      because it is timestamped and creates an automatic record. Be specific:
                      describe the problem, its location, and when it started. Keep it factual and
                      professional. Give a reasonable deadline for a response — typically 7 to 10
                      days for non-emergency issues.
                    </li>
                    <li>
                      <strong>Follow up in writing if there is no response.</strong> If you hear
                      nothing or receive a non-committal reply, send a second written notice. Keep
                      copies of everything.
                    </li>
                    <li>
                      <strong>Contact your local bylaw or property standards officer.</strong> Most
                      municipalities have a property standards or bylaw enforcement office that can
                      inspect the unit and issue a work order to the landlord. This step is
                      especially useful in Ontario, where a property standards order is strong
                      supporting evidence for a T6 application.
                    </li>
                    <li>
                      <strong>File a formal application with your provincial tribunal</strong> if the
                      landlord still does not act. See the section below for province-by-province
                      details.
                    </li>
                  </ol>

                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5">
                    <p className="font-semibold text-blue-900 text-sm mb-2">
                      Sample Written Repair Request
                    </p>
                    <p className="text-blue-800 text-sm leading-relaxed whitespace-pre-line">
                      {`Subject: Written Repair Request — [Unit Address]

Dear [Landlord Name],

I am writing to formally request repairs to my rental unit at [full address]. The issue is [describe problem clearly, e.g., "a persistent leak from the bathroom ceiling that began on [date] and has worsened over the past two weeks"]. I have attached photographs taken on [date] for your reference.

Under [Ontario RTA s.20 / BC RTA s.32 / Alberta RTAA s.16], you are required to maintain the unit in a good state of repair. Please confirm receipt of this request and advise when repairs will be completed, within 7 days of this message.

If I do not hear from you by [date], I will contact the local property standards office and, if necessary, file an application with [LTB / RTB / RTDRS / TAL].

Sincerely,
[Your Name]
[Date]`}
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Province-by-Province: How to Escalate
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        Ontario — T6 Application to the LTB
                      </h3>
                      <p className="text-slate-700 leading-relaxed mb-3">
                        If your Ontario landlord has not addressed a repair issue after a written
                        request, you have two parallel paths: a municipal property standards complaint
                        and a T6 application to the Landlord and Tenant Board.
                      </p>
                      <p className="text-slate-700 leading-relaxed mb-3">
                        The <strong>T6 (Tenant&apos;s Application about Maintenance)</strong> is the
                        primary remedy under the RTA. You file Form T6 with the LTB. At a hearing, the
                        LTB can order your landlord to carry out the repairs and can award a{" "}
                        <strong>rent abatement</strong> — a retroactive reduction in the rent you were
                        charged during the period the unit was substandard. Abatements typically range
                        from 5% to 25% for moderate ongoing issues, and can reach 100% of rent for
                        severe habitability failures such as a unit rendered completely unusable.
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        A <strong>property standards complaint</strong> to your municipality runs
                        separately and is free. A property standards officer can inspect the unit and
                        issue a work order. While a work order does not award you compensation, it
                        creates an official record that strongly supports your T6 application.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        British Columbia — RTB Dispute Resolution Application
                      </h3>
                      <p className="text-slate-700 leading-relaxed mb-3">
                        In BC, tenants who cannot resolve a repair dispute with their landlord can file
                        a dispute resolution application with the Residential Tenancy Branch (RTB).
                        Use the <strong>DR2 form</strong> (Application for Dispute Resolution). The
                        RTB can order repairs and/or order a rent reduction.
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        Average timelines for a hearing in BC are <strong>6 to 8 weeks</strong> from
                        the date of filing. As in Ontario, you should continue paying rent while your
                        application is pending.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        Alberta — RTDRS or Provincial Court
                      </h3>
                      <p className="text-slate-700 leading-relaxed mb-3">
                        Alberta tenants can apply to the{" "}
                        <strong>
                          Residential Tenancy Dispute Resolution Service (RTDRS)
                        </strong>{" "}
                        — a faster, less formal alternative to court with a claim cap of $100,000.
                        The RTDRS can order repairs and compensation. Alternatively, you can apply to
                        the Alberta Provincial Court (Small Claims if the amount is within its
                        jurisdiction).
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        Before filing, document your repair requests and any written responses from
                        your landlord. Alberta&apos;s RTDRS process is generally faster than full
                        court proceedings and is accessible without a lawyer.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        Quebec — TAL and Municipal Housing Inspection
                      </h3>
                      <p className="text-slate-700 leading-relaxed mb-3">
                        Quebec tenants can apply to the{" "}
                        <strong>Tribunal administratif du logement (TAL)</strong> for a rent
                        reduction (called &quot;diminution du loyer&quot;) under Civil Code articles
                        1854 and 1907. If the dwelling is seriously unfit for habitation, the TAL can
                        also authorize lease termination.
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        In parallel, Quebec tenants can request a municipal housing inspection. An
                        inspector can issue a formal notice requiring the landlord to carry out repairs
                        within a set timeline.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        Other Provinces
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        Saskatchewan, Manitoba, Nova Scotia, New Brunswick, Prince Edward Island, and
                        Newfoundland and Labrador all have landlord repair obligations in their
                        respective residential tenancy legislation. Enforcement mechanisms vary by
                        province but generally follow the same pattern: file a written complaint with
                        the provincial tenancy authority or tribunal. In Saskatchewan, disputes go
                        through the Office of Residential Tenancies; in Manitoba, through the
                        Residential Tenancies Branch; in Nova Scotia, New Brunswick, PEI, and NL,
                        through their respective residential tenancy offices.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    What You CANNOT Do: No Repair-and-Deduct in Ontario
                  </h2>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
                    <p className="text-amber-900 font-semibold text-sm">
                      Warning: Withholding rent or paying for repairs yourself and deducting from
                      rent is not a legal remedy in Ontario — and most other Canadian provinces.
                    </p>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Some jurisdictions in the United States allow tenants to &quot;repair and
                    deduct&quot; — pay for a repair themselves and subtract the cost from the next
                    month&apos;s rent. This right does <strong>not exist</strong> as a general
                    remedy in Ontario. If you withhold rent or deduct repair costs without a
                    tribunal order, your landlord can serve you with an{" "}
                    <strong>N4 notice for non-payment of rent</strong>. An N4 can lead to eviction
                    proceedings, even if the underlying maintenance complaint is legitimate.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The correct path in Ontario is to <strong>continue paying rent</strong> and
                    pursue your rights through the T6 application process. The LTB can then
                    retroactively award you a rent abatement — money back for the period the unit
                    was substandard — without you having to unilaterally withhold a single dollar.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    The same principle applies in most Canadian provinces. BC, Alberta, and Quebec
                    all require tenants to continue paying rent and seek relief through the
                    appropriate tribunal. Do not put your tenancy at risk by withholding rent on
                    your own initiative.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Emergency Repairs</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Emergency repairs are treated differently from ordinary maintenance issues. In
                    Ontario, if there is a genuine emergency affecting safety — a burst pipe, a
                    total loss of heat during winter, a gas leak — a tenant may arrange for an
                    emergency repair and seek reimbursement from the landlord. However, this is a
                    narrow right: it applies only to genuine emergencies, not general maintenance
                    backlog, and tenants should first make every reasonable effort to contact the
                    landlord.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Before arranging an emergency repair yourself:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>
                      Attempt to reach your landlord by phone, email, and text — document each
                      attempt with a timestamp.
                    </li>
                    <li>
                      If your lease lists an emergency contact number for repairs, use it first.
                    </li>
                    <li>
                      Get at least one written quote from a licensed contractor where possible,
                      and keep all receipts.
                    </li>
                    <li>
                      Notify your landlord in writing immediately after the emergency repair is
                      completed.
                    </li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    If the landlord refuses to reimburse you for a legitimate emergency repair, you
                    can include this as part of a T6 application in Ontario or a dispute resolution
                    application in your province.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Landlord vs. Tenant Responsibility
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Not every maintenance issue is the landlord&apos;s responsibility. Understanding
                    the line can save you from a dispute — or help you make a stronger case when
                    something genuinely is the landlord&apos;s problem.
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 text-slate-600 text-xs font-semibold uppercase tracking-wide">
                        <tr>
                          <th className="text-left px-4 py-3">Landlord&apos;s Responsibility</th>
                          <th className="text-left px-4 py-3">Tenant&apos;s Responsibility</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 text-slate-700">Structural elements (walls, roof, foundation)</td>
                          <td className="px-4 py-3 text-slate-700">Damage caused by tenant or guests</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 text-slate-700">HVAC systems (heating, ventilation, air conditioning)</td>
                          <td className="px-4 py-3 text-slate-700">Lightbulb replacement (interior)</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 text-slate-700">Plumbing and water supply</td>
                          <td className="px-4 py-3 text-slate-700">Minor upkeep (cleaning, unclogging drains caused by tenant)</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 text-slate-700">Electrical systems and wiring</td>
                          <td className="px-4 py-3 text-slate-700">Pest infestation caused by tenant&apos;s actions</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 text-slate-700">Exterior doors, windows, and locks</td>
                          <td className="px-4 py-3 text-slate-700">Deliberate alterations without landlord consent</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 text-slate-700">Pest/rodent infestations (if not caused by tenant)</td>
                          <td className="px-4 py-3 text-slate-700">General cleanliness of the unit</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 text-slate-700">Common areas and shared systems</td>
                          <td className="px-4 py-3 text-slate-700">Appliances provided by tenant</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    Pest and rodent infestations deserve special mention. In most provinces,
                    including Ontario, pest control is the landlord&apos;s responsibility as long
                    as the infestation was not caused or significantly worsened by the
                    tenant&apos;s own conduct (e.g., leaving food waste accessible). A landlord who
                    refuses to deal with a bedbug or cockroach infestation can face a T6 application
                    at the LTB with the same remedies available as for any other maintenance failure.
                    Not sure whether your landlord&apos;s response (or lack of one) is legal? Try our{" "}
                    <Link href="/tools/landlord-quiz" className="text-blue-600 hover:underline">
                      &quot;Is My Landlord Allowed to Do This?&quot; quiz
                    </Link>{" "}
                    for a clear answer based on your province&apos;s tenancy laws.
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
                  <h3 className="font-bold text-lg mb-2">What does your repair clause say?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your lease to LeasePlain and we&apos;ll explain your repair and
                    maintenance obligations in plain language — and flag anything unusual.
                  </p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Upload My Lease
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      {
                        label: "Is My Landlord Allowed to Do This?",
                        href: "/tools/landlord-quiz",
                      },
                      {
                        label: "Lease Clause Red Flag Scanner",
                        href: "/tools/clause-checker",
                      },
                      {
                        label: "Ontario Tenant Rights Guide",
                        href: "/tenant-rights/ontario",
                      },
                      {
                        label: "Lease Red Flags to Watch For",
                        href: "/blog/lease-red-flags-to-watch-for",
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
