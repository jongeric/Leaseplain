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
  title:
    "Month-to-Month vs Fixed-Term Lease in Canada: Key Differences and Tenant Rights | LeasePlain",
  description:
    "Understand the real difference between a fixed-term and month-to-month lease in Canada. In Ontario, your fixed-term lease automatically converts to month-to-month when it expires — your landlord cannot evict you just because the end date has passed.",
  alternates: {
    canonical: "https://leaseplain.com/blog/month-to-month-vs-fixed-term-lease",
  },
  openGraph: {
    title:
      "Month-to-Month vs Fixed-Term Lease in Canada: Key Differences and Tenant Rights | LeasePlain",
    description:
      "Understand the real difference between a fixed-term and month-to-month lease in Canada. In Ontario, your fixed-term lease automatically converts to month-to-month when it expires — your landlord cannot evict you just because the end date has passed.",
    url: "https://leaseplain.com/blog/month-to-month-vs-fixed-term-lease",
    type: "article",
    publishedTime: "2026-06-05T00:00:00Z",
    modifiedTime: "2026-06-05T00:00:00Z",
  },
  keywords: [
    "month to month lease Canada",
    "fixed term lease Canada",
    "lease expiry tenant rights",
    "month-to-month vs fixed term",
    "can landlord evict at end of lease",
  ],
};

const faqItems = [
  {
    q: "Can my landlord force me to leave when my fixed-term lease expires in Ontario?",
    a: "No. Under s.38 of the Residential Tenancies Act, a fixed-term lease automatically becomes a monthly tenancy when it expires. Your landlord cannot evict you solely because the lease end date has passed. To end your tenancy, they would need a valid ground for eviction (such as non-payment of rent, personal use, or demolition) and would need to go through the LTB process.",
  },
  {
    q: "Is a month-to-month tenancy less secure than a fixed-term lease?",
    a: "Not necessarily in Ontario. Since the RTA protects tenants regardless of lease type, you cannot be evicted without cause whether you're on a fixed-term or month-to-month tenancy. The main difference is that on a month-to-month, either party can end the tenancy with proper notice and the tenant has a bit more flexibility to leave.",
  },
  {
    q: "What happens to my rent when my fixed-term lease converts to month-to-month in Ontario?",
    a: "Your rent stays the same. The landlord cannot raise your rent just because the fixed term expired. Any rent increase still requires 90 days' written notice and must comply with the annual guideline for rent-controlled units.",
  },
  {
    q: "Can I leave a fixed-term lease early in Canada?",
    a: "Generally, breaking a fixed-term lease early exposes you to liability for the remaining rent, subject to the landlord's duty to mitigate (try to find a replacement tenant). In Ontario, you can also assign or sublet your unit with the landlord's consent (which cannot be unreasonably withheld). Some provinces allow early termination without penalty for specific reasons like domestic violence, landlord's failure to repair, or medical necessity.",
  },
  {
    q: "Should I ask for a fixed-term or month-to-month lease?",
    a: "It depends on your situation. If you want to stay for a year and want rent stability (especially in a hot market), a fixed-term gives you certainty. If you're unsure of your plans, a month-to-month gives you the flexibility to leave with 60 days' notice in Ontario. In either case, your core tenant rights remain the same.",
  },
];

export default function MonthToMonthVsFixedTermLeasePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://leaseplain.com/blog/month-to-month-vs-fixed-term-lease",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".speakable-summary"],
    },
  };

  return (
    <>
      <ArticleSchema
        headline="Month-to-Month vs Fixed-Term Lease in Canada: Key Differences and Tenant Rights"
        description="Understand the real difference between a fixed-term and month-to-month lease in Canada. In Ontario, your fixed-term lease automatically converts to month-to-month when it expires — your landlord cannot evict you just because the end date has passed."
        url="https://leaseplain.com/blog/month-to-month-vs-fixed-term-lease"
        datePublished="2026-06-05"
        dateModified="2026-06-05"
        keywords={[
          "month to month lease Canada",
          "fixed term lease Canada",
          "lease expiry tenant rights",
          "month-to-month vs fixed term",
          "can landlord evict at end of lease",
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://leaseplain.com" },
          { name: "Blog", href: "https://leaseplain.com/blog" },
          {
            name: "Month-to-Month vs Fixed-Term Lease",
            href: "https://leaseplain.com/blog/month-to-month-vs-fixed-term-lease",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema).replace(/</g, "<"),
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
                <span>Month-to-Month vs Fixed-Term Lease</span>
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
                  7 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Month-to-Month vs Fixed-Term Lease in Canada: Key Differences and Tenant Rights
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Whether you are signing your first lease or your fixed-term is about to expire, the
                difference between a fixed-term and a month-to-month tenancy matters — not just for
                flexibility, but for your legal rights. In Ontario and most Canadian provinces, your
                landlord cannot simply evict you when a fixed-term lease ends. Here is what you need
                to know.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="August 2026" />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    What Is a Fixed-Term Lease?
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    A fixed-term lease has a defined start date and a defined end date — the most
                    common example being a one-year lease running from July 1, 2026 to June 30, 2027.
                    Both you and your landlord commit to the tenancy for that period. The landlord
                    cannot raise your rent mid-term in Ontario, and you cannot leave without
                    consequence before the end date (unless you assign or sublet the unit, or the
                    landlord agrees to an early termination).
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The critical question for most tenants is: <em>what happens when the fixed term
                    ends?</em> The answer varies by province, but in Ontario it is clear — the tenancy
                    does not end automatically.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Under s.38 of Ontario&apos;s Residential Tenancies Act, when a fixed-term lease
                    expires and neither the landlord nor the tenant has taken steps to end the tenancy,
                    it automatically converts to a monthly periodic tenancy on the same terms. Your
                    rent stays the same. Your rights stay the same. You simply continue paying rent
                    month to month as if you had a month-to-month agreement from the beginning.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    In BC, the Residential Tenancy Act similarly provides that a tenancy continues
                    after a fixed-term ends, unless a valid vacate clause has been included (more on
                    this below). Alberta and Quebec take different approaches, covered in the province
                    comparison table further down.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    What Is a Month-to-Month Tenancy?
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    A month-to-month tenancy — also called a periodic tenancy — has no set end date.
                    It renews automatically at the end of each rental period (usually each month) until
                    either the tenant or the landlord gives proper notice to end it. Month-to-month
                    tenancies are common when a fixed-term lease converts at the end of its term, but
                    some tenants begin on a month-to-month basis from the start.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The notice required to end a month-to-month tenancy differs across Canada. Here is
                    a summary for tenants who want to end their own tenancy:
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-3">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 text-slate-600 text-xs font-semibold uppercase tracking-wide">
                        <tr>
                          <th className="text-left px-4 py-3">Province</th>
                          <th className="text-left px-4 py-3">Notice Required (Tenant Ending Tenancy)</th>
                          <th className="text-left px-4 py-3">Form / Method</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 font-medium text-slate-900">Ontario</td>
                          <td className="px-4 py-3 text-slate-700">60 days</td>
                          <td className="px-4 py-3 text-slate-600">Form N9</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 font-medium text-slate-900">British Columbia</td>
                          <td className="px-4 py-3 text-slate-700">1 month</td>
                          <td className="px-4 py-3 text-slate-600">Written notice, last day of rental period</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 font-medium text-slate-900">Alberta</td>
                          <td className="px-4 py-3 text-slate-700">60 days (monthly tenancy)</td>
                          <td className="px-4 py-3 text-slate-600">Written notice</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 font-medium text-slate-900">Quebec</td>
                          <td className="px-4 py-3 text-slate-700">3 months minimum (1+ year lease)</td>
                          <td className="px-4 py-3 text-slate-600">Written notice of non-renewal</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    In Ontario, the notice must expire on the last day of a rental period. So if your
                    rent is due on the first of the month and you want to leave by September 30, you
                    must serve the Form N9 no later than July 31 — giving a full 60 days expiring at
                    the end of September.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    The Key Myth: Lease Expiry Does NOT Mean You Have to Leave
                  </h2>
                  <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 mb-4">
                    <p className="text-amber-900 font-semibold mb-2">
                      This is one of the most misunderstood rules in Canadian rental law.
                    </p>
                    <p className="text-amber-800 leading-relaxed mb-2">
                      In Ontario, <strong>the expiry of a fixed-term lease is not a valid ground for
                      eviction</strong>. Under RTA s.38, when your lease expires, you automatically
                      become a month-to-month tenant on the same terms. Your landlord cannot serve an
                      eviction notice simply because your lease end date has arrived.
                    </p>
                    <p className="text-amber-800 leading-relaxed">
                      The same principle applies in all Canadian provinces: <strong>lease expiry alone
                      is never sufficient grounds to evict a tenant</strong>. A landlord who wants to
                      end a tenancy must have a valid statutory reason — non-payment of rent, personal
                      use, demolition, or another prescribed ground — and must go through the proper
                      process with the relevant tribunal.
                    </p>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    You may receive a letter from your landlord saying &quot;your lease is up on
                    June 30 — please vacate by then.&quot; In Ontario, this is not a valid eviction
                    notice. Receiving it does not mean you have to leave. Only a proper LTB process
                    can terminate your tenancy against your will — and the LTB will not issue an
                    eviction order simply because a fixed-term has ended.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    If you are in Ontario and your landlord is pressuring you to leave at the end of
                    your lease with no valid grounds, you can file a T2 application (Tenant&apos;s
                    Rights) with the LTB for interference with your reasonable enjoyment.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Province-by-Province Comparison
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    While the core principle is consistent across Canada, the specific rules at expiry
                    differ by province:
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 text-slate-600 text-xs font-semibold uppercase tracking-wide">
                        <tr>
                          <th className="text-left px-4 py-3">Province</th>
                          <th className="text-left px-4 py-3">Fixed-Term Auto-Converts?</th>
                          <th className="text-left px-4 py-3">Min Notice to Leave (Tenant)</th>
                          <th className="text-left px-4 py-3">Landlord Can End at Expiry?</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 font-medium text-slate-900">Ontario</td>
                          <td className="px-4 py-3 text-slate-700">Yes — automatically monthly (RTA s.38)</td>
                          <td className="px-4 py-3 text-slate-600">60 days (Form N9)</td>
                          <td className="px-4 py-3 text-slate-600">No</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 font-medium text-slate-900">British Columbia</td>
                          <td className="px-4 py-3 text-slate-700">
                            Yes, unless valid vacate clause (requires prior RTB approval, sublease, or
                            landlord/family occupancy)
                          </td>
                          <td className="px-4 py-3 text-slate-600">1 month</td>
                          <td className="px-4 py-3 text-slate-600">
                            Only with a valid vacate clause (RTB approval required)
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 font-medium text-slate-900">Alberta</td>
                          <td className="px-4 py-3 text-slate-700">
                            No automatic conversion (RTAA s.11); tenancy ends unless renewed
                          </td>
                          <td className="px-4 py-3 text-slate-600">60 days</td>
                          <td className="px-4 py-3 text-slate-600">
                            Yes, if no renewal agreement — but proper notice is still required
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 font-medium text-slate-900">Quebec</td>
                          <td className="px-4 py-3 text-slate-700">
                            Tenant has right to renew (Civil Code art.1941); landlord must give notice
                            of non-renewal
                          </td>
                          <td className="px-4 py-3 text-slate-600">3 months (1+ year lease)</td>
                          <td className="px-4 py-3 text-slate-600">
                            Only for specific permitted reasons; notice of non-renewal (3–6 months)
                            required
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-slate-700 leading-relaxed mt-4">
                    <strong>A note on Alberta:</strong> While Alberta&apos;s RTAA s.11 does not provide
                    automatic conversion, this does not mean a landlord can simply send a text saying
                    &quot;leave by June 30.&quot; Proper written notice is still required, and landlords
                    must comply with all RTAA procedural requirements. If a tenant continues to occupy
                    the unit after the fixed term expires and the landlord accepts rent, a month-to-month
                    tenancy may arise by conduct.
                  </p>
                  <p className="text-slate-700 leading-relaxed mt-3">
                    <strong>A note on BC vacate clauses:</strong> A clause in a BC fixed-term lease
                    requiring you to leave at the end of the term is only enforceable if the landlord
                    has received prior approval from the Residential Tenancy Branch, the tenancy is a
                    sublease, or the landlord or their close family member will occupy the unit. A bare
                    &quot;you must vacate at end of term&quot; clause without any of these conditions is
                    unenforceable, and you can remain.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Early Termination: What Are Your Options?
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Breaking a fixed-term lease before the end date is possible, but it comes with
                    consequences in most provinces. Here is what your options look like:
                  </p>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Assignment and Subletting (Ontario)
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Under RTA s.97, Ontario tenants have the right to assign or sublet their unit — but
                    both require the landlord&apos;s consent. Critically, <strong>the landlord cannot
                    unreasonably withhold consent</strong>. If they refuse without a valid reason, you
                    can apply to the LTB and may be released from your lease obligations.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-4">
                    <li>
                      <strong>Subletting:</strong> You temporarily hand over the unit to another person
                      (the subtenant) while you retain the right to return. You remain responsible to
                      the landlord for rent and any damage caused by the subtenant.
                    </li>
                    <li>
                      <strong>Assignment:</strong> You permanently transfer your lease — and all rights
                      and obligations — to a new tenant. Once the assignment is complete, you are no
                      longer the tenant. The assignee takes on your exact lease terms, including your
                      rent amount.
                    </li>
                  </ul>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Duty to Mitigate
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    If you simply walk away from a fixed-term lease without assigning or subletting,
                    you are potentially liable for the remaining rent. However, in every province the
                    landlord has a duty to mitigate — they must make reasonable efforts to find a new
                    tenant and cannot simply sit on an empty unit collecting rent from you. If they
                    fail to mitigate, your liability is reduced accordingly.
                  </p>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Special Circumstances
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Some provinces allow early termination without penalty for specific reasons:
                    domestic violence or abuse (Ontario, BC, Alberta), the landlord&apos;s failure to
                    maintain the unit, or medical necessity requiring a move to long-term care. If any
                    of these apply to your situation, consult a tenant duty counsel or legal aid clinic
                    for advice on the process.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Which Is Better for You?
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    There is no universal right answer — it depends on your plans, the rental market,
                    and the province you are in. Here is a direct comparison:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                      <h3 className="font-bold text-slate-900 mb-3">Fixed-Term Lease</h3>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                        Pros
                      </p>
                      <ul className="space-y-1.5 text-slate-700 text-sm mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5">+</span>
                          Rent stability — landlord cannot raise rent mid-term in Ontario
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5">+</span>
                          Certainty for both parties for the lease period
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5">+</span>
                          May be preferred by landlords in competitive markets
                        </li>
                      </ul>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                        Cons
                      </p>
                      <ul className="space-y-1.5 text-slate-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">−</span>
                          Early termination carries potential financial exposure
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">−</span>
                          Less flexibility if your plans change
                        </li>
                      </ul>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
                      <h3 className="font-bold text-slate-900 mb-3">Month-to-Month Tenancy</h3>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                        Pros
                      </p>
                      <ul className="space-y-1.5 text-slate-700 text-sm mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-0.5">+</span>
                          More flexibility — leave with 60 days notice in Ontario
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-0.5">+</span>
                          No penalty for ending the tenancy with proper notice
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-0.5">+</span>
                          Same core protections as a fixed-term tenancy in Ontario
                        </li>
                      </ul>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                        Cons
                      </p>
                      <ul className="space-y-1.5 text-slate-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">−</span>
                          In provinces without rent control on new units, rent could be raised on
                          renewal with proper notice
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">−</span>
                          Less certainty about how long you can stay
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed mt-4">
                    In Ontario specifically, where the RTA provides strong protections regardless of
                    tenancy type, the security difference between fixed-term and month-to-month is
                    less significant than many tenants assume. A month-to-month Ontario tenant cannot
                    be evicted without cause any more easily than a fixed-term tenant.
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
                  <h3 className="font-bold text-lg mb-2">Thinking of ending your lease early?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Use the lease break calculator to estimate your potential cost exposure and
                    understand your options before making a decision.
                  </p>
                  <Link
                    href="/tools/lease-break-calculator"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Estimate Early Termination Costs
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Breaking a Lease in Canada", href: "/tenant-rights/breaking-a-lease" },
                      { label: "Notice Period Calculator", href: "/tools/notice-period-calculator" },
                      { label: "Ontario Standard Lease Explained", href: "/blog/ontario-standard-lease-explained" },
                      { label: "Ontario Tenant Rights", href: "/tenant-rights/ontario" },
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
