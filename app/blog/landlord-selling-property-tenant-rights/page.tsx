import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock } from "lucide-react";
import ReviewedByline from "@/components/ReviewedByline";
import TableOfContents from "@/components/TableOfContents";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Landlord Selling? Canadian Tenant Rights Explained | LeasePlain",
  description:
    "Your landlord just told you they're selling. Do you have to leave? In most cases, no. Your lease survives the sale. Here's exactly what your rights are in Ontario, BC, and Alberta.",
  alternates: {
    canonical: "https://leaseplain.com/blog/landlord-selling-property-tenant-rights",
  },
  openGraph: {
    title: "Landlord Selling? Canadian Tenant Rights Explained | LeasePlain",
    description:
      "Your landlord just told you they're selling. Do you have to leave? In most cases, no. Your lease survives the sale. Here's exactly what your rights are in Ontario, BC, and Alberta.",
    url: "https://leaseplain.com/blog/landlord-selling-property-tenant-rights",
    type: "article",
    publishedTime: "2026-05-01T00:00:00Z",
    modifiedTime: "2026-06-01T00:00:00Z",
  },
  keywords: [
    "landlord selling property tenant rights",
    "does lease survive sale Ontario",
    "N12 purchaser Ontario",
    "can landlord sell and evict tenant Canada",
  ],
};

const faqItems = [
  {
    q: "Do I have to move out if my landlord sells the house in Ontario?",
    a: "No. Under the Ontario Residential Tenancies Act, a property sale does not terminate your tenancy. The new owner steps into the landlord's shoes and the lease continues on the same terms. You only have to leave if the new owner (who must be an individual, not a corporation) serves a valid N12 notice and obtains an LTB order — and even then only after the LTB process concludes.",
  },
  {
    q: "Does a new owner have to honour my lease?",
    a: "Yes. In every Canadian province, a lease 'runs with the land.' When a property sells, the new owner inherits the existing lease, including your rent amount, term, renewal rights, and all other conditions. The new owner cannot impose new terms, demand you sign a new lease, or raise rent outside the normal rent-increase rules.",
  },
  {
    q: "What is a purchaser N12 in Ontario?",
    a: "A purchaser N12 is an eviction notice under s.49 of the Ontario RTA that allows a purchaser (the person buying the property) to seek vacant possession so they or a close family member can move in. It requires 60 days notice expiring on the last day of a rental period, one month's compensation paid on or before the termination date, and must be on the official LTB Form N12. Even after receiving an N12, you have the right to dispute the eviction at the LTB.",
  },
  {
    q: "Can a corporation use an N12 to evict a tenant?",
    a: "No. In Ontario, only an individual purchaser can serve a purchaser N12 — a corporation cannot use s.49 of the RTA because a corporation cannot personally occupy a unit. If you receive an N12 from a numbered company or corporation, you can raise this at the LTB as a defence.",
  },
  {
    q: "What happens to my deposit when my landlord sells?",
    a: "Your deposit transfers automatically to the new owner as part of the sale. The old landlord is obligated to hand it over on closing. If the new owner claims they have no record of your deposit, document the original payment and ask the previous landlord in writing to confirm the transfer. In BC, the RTB holds deposits in trust in some circumstances — contact the RTB if there is confusion.",
  },
];

export default function LandlordSellingPropertyTenantRightsPage() {
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
        headline="What Happens to Your Lease When Your Landlord Sells? Tenant Rights in Canada"
        description="Your landlord just told you they're selling. Do you have to leave? In most cases, no. Your lease survives the sale. Here's exactly what your rights are in Ontario, BC, and Alberta."
        url="https://leaseplain.com/blog/landlord-selling-property-tenant-rights"
        datePublished="2026-05-01"
        dateModified="2026-06-01"
        keywords={[
          "landlord selling property tenant rights",
          "does lease survive sale Ontario",
          "N12 purchaser Ontario",
          "can landlord sell and evict tenant Canada",
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://leaseplain.com" },
          { name: "Blog", href: "https://leaseplain.com/blog" },
          {
            name: "Landlord Selling Property — Tenant Rights",
            href: "https://leaseplain.com/blog/landlord-selling-property-tenant-rights",
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
          "url": "https://leaseplain.com/blog/landlord-selling-property-tenant-rights",
        }).replace(/</g, "<") }}
      />
      <div className="flex flex-col min-h-full">
        <Navbar />

        <main>
          {/* Hero */}
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
                <Link href="/" className="hover:underline">Home</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <Link href="/blog" className="hover:underline">Blog</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>Landlord Selling Property — Tenant Rights</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-200">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Canada
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  May 1, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  7 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                What Happens to Your Lease When Your Landlord Sells? Tenant Rights in Canada
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Your landlord just told you they are selling the property. You might be worried you
                have to leave — but in most cases you do not. Your lease survives the sale. Here is
                exactly what your rights are in Ontario, BC, and Alberta, and what to watch out for.
              </p>
            </div>
          </section>

          {/* Body */}
          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="August 2026" />
                <TableOfContents />

                {/* Section 1 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    The Core Rule: Your Lease Survives a Property Sale
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    In virtually every Canadian province, a lease &quot;runs with the land.&quot; This
                    is a fundamental principle of property law: when a landlord sells, the new owner
                    does not get to start fresh. They inherit the existing tenancy — your rent amount,
                    lease terms, and rights remain exactly the same on closing day.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The new owner becomes your landlord the moment title transfers. Nothing changes for
                    you. You do not sign a new lease. The rent does not increase. Any outstanding
                    repairs the old landlord owed you are now the new owner&apos;s obligation.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-3">
                    <p className="text-amber-800 text-sm font-semibold mb-1">Common myth to bust</p>
                    <p className="text-amber-700 text-sm leading-relaxed">
                      &quot;My landlord sold the building so I have to leave.&quot; This is incorrect
                      in Ontario, BC, Alberta, and most Canadian provinces. A sale by itself is never
                      grounds for eviction.
                    </p>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    The only exception — and it is a real one — is when a purchaser or new owner
                    follows a specific statutory process to end your tenancy for personal use. Even
                    then, you have the right to dispute it. Read on for the details by province.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Ontario: Your Rights When the Property Sells
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Ontario&apos;s Residential Tenancies Act (RTA) s.18 states that a new owner steps
                    directly into the landlord&apos;s shoes. Your lease continues unchanged and the new
                    owner takes on all existing landlord obligations the moment the sale closes.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>The new owner must continue to make repairs and maintain the unit.</li>
                    <li>They must provide rent receipts on request.</li>
                    <li>They must use the standard Ontario lease for any new tenants they bring in.</li>
                    <li>Any outstanding LTB orders against the old landlord bind the new owner.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    The new owner cannot demand you sign a new lease, cannot change your rent outside
                    the annual rent-increase guideline, and cannot add new terms or conditions. If they
                    try, those terms are void and you can file with the LTB.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    The Purchaser N12 Exception (Ontario)
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The one scenario where an Ontario sale can lead to eviction is when the
                    <strong> purchaser</strong> — the individual buying the property — genuinely intends
                    to move in themselves or have a close family member do so. Under RTA s.49, a
                    purchaser can serve a Form N12 (Notice to End your Tenancy Because the Landlord, a
                    Purchaser or a Family Member Requires the Rental Unit).
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Key requirements for a valid purchaser N12:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>
                      <strong>60 days notice</strong> — the termination date must be at least 60 days
                      after the notice is given, and must fall on the last day of a rental period.
                    </li>
                    <li>
                      <strong>One month&apos;s compensation</strong> — the purchaser must pay you one
                      month&apos;s rent on or before the termination date.
                    </li>
                    <li>
                      <strong>Official LTB Form N12 must be used</strong> — an informal letter is not
                      sufficient.
                    </li>
                    <li>
                      <strong>Genuine intent required</strong> — the purchaser or a close family member
                      must genuinely intend to occupy the unit.
                    </li>
                    <li>
                      <strong>Individuals only</strong> — a corporation cannot use s.49. If the buyer
                      is a numbered company or other corporation, this notice is invalid on its face.
                    </li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Even after receiving a valid N12, you are not required to leave on the stated
                    termination date. You can wait for the LTB to schedule a hearing. At the hearing
                    you can challenge whether the purchaser genuinely intends to occupy, whether the
                    compensation was actually paid, and whether all procedural requirements were met.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-blue-800 text-sm leading-relaxed">
                      <strong>Important:</strong> A purchaser N12 is often made a condition of the
                      Agreement of Purchase and Sale. This means the deal may not close unless you
                      agree to leave. You are under no legal obligation to cooperate with a sale
                      condition — that is between the buyer and seller. You still have the full right
                      to dispute at the LTB.
                    </p>
                  </div>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    British Columbia: Sale and Tenancy
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Under BC&apos;s Residential Tenancy Act, your lease survives the sale in the same
                    way as Ontario. The new landlord inherits the tenancy and all its terms on closing.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    However, BC RTA s.49(5) allows a new landlord (or the purchaser, where applicable)
                    to issue a Two Month Notice to End Tenancy if they or a close family member intend
                    to occupy the unit. Key rules:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>The notice must be on the official RTB form and give at least two months notice.</li>
                    <li>Compensation of one month&apos;s rent must be provided.</li>
                    <li>The new landlord must be an individual — a corporation cannot use this notice.</li>
                    <li>You can dispute the notice through RTB dispute resolution within 15 days.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    BC also has an additional protection: if a landlord ends your tenancy for personal
                    use and then re-rents the unit within 12 months, you can apply to the RTB for
                    compensation — typically 12 months rent. This is a meaningful deterrent against
                    bad-faith evictions.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    If the new owner is a corporation, the personal-use notice pathway is unavailable
                    entirely and your lease simply continues.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Alberta</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Alberta&apos;s Residential Tenancies Act follows the same core principle: a lease
                    survives the sale of the property and the new owner inherits all landlord
                    obligations including repairs, maintenance, and compliance with the RTA.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Unlike Ontario and BC, Alberta does not have a specific &quot;purchaser personal
                    use&quot; notice form. Instead, standard termination rules apply. For a
                    month-to-month tenancy, a landlord must give proper notice (generally three months
                    for annual tenancies, one rental period for monthly). If the new landlord wants to
                    move in or renovate, they must follow the same termination processes any landlord
                    would use.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Alberta tenants can dispute improper notices through the Residential Tenancy
                    Dispute Resolution Service (RTDRS) or Alberta courts.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    What to Do When You Learn the Property is Being Sold
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Here is a practical checklist to follow when your landlord announces a sale:
                  </p>
                  <ol className="list-decimal list-inside space-y-3 text-slate-700 leading-relaxed">
                    <li>
                      <strong>Do nothing — your lease continues.</strong> Unless and until you receive
                      formal written notice from a buyer, nothing changes for you.
                    </li>
                    <li>
                      <strong>Review any notice you receive carefully.</strong> If you receive an N12
                      (Ontario) or Two Month Notice (BC), check the date, the form used, and whether
                      compensation was or will be paid. Defective notices can be challenged.
                    </li>
                    <li>
                      <strong>Do not agree to vacate voluntarily without advice.</strong> If the buyer
                      or agent pressures you to sign a &quot;move-out agreement,&quot; get independent
                      legal advice first. Once you agree to leave, you typically waive your right to
                      dispute.
                    </li>
                    <li>
                      <strong>Attend your LTB or RTB hearing if one is scheduled.</strong> You can
                      present evidence that the claimed personal use is not genuine — for example,
                      evidence that the buyer already owns multiple properties and rents them all out.
                    </li>
                    <li>
                      <strong>Keep paying rent to the new owner once notified of the sale.</strong>{" "}
                      Ask for new banking or payment instructions in writing to protect yourself.
                    </li>
                  </ol>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Your Deposit on Sale
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Your existing deposit — whether last month&apos;s rent in Ontario or a security
                    deposit in BC or Alberta — transfers to the new owner automatically as part of the
                    sale. The old landlord is legally required to hand it over at closing.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    If the new owner claims they never received your deposit:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>Gather your original documentation — bank records, receipts, or lease clauses confirming the deposit amount.</li>
                    <li>Contact the previous landlord in writing requesting confirmation that the deposit was transferred.</li>
                    <li>
                      In BC, the RTB holds deposits in trust in certain circumstances. If there is
                      confusion, file a Deposit Dispute with the RTB to have the funds properly
                      allocated.
                    </li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    A sale does not allow a landlord to pocket your deposit. The new owner is
                    responsible for returning it at the end of your tenancy under the same rules that
                    applied to the original landlord.
                  </p>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Condo Buildings Sold for Redevelopment
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    A more complex situation arises when an entire building is sold and the new owner
                    plans demolition or major redevelopment. Standard personal-use notices do not apply
                    here — specific demolition notices are required.
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-3">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 text-slate-600 text-xs font-semibold uppercase tracking-wide">
                        <tr>
                          <th className="text-left px-4 py-3">Province</th>
                          <th className="text-left px-4 py-3">Notice Required</th>
                          <th className="text-left px-4 py-3">Notice Period</th>
                          <th className="text-left px-4 py-3">Compensation</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 font-medium text-slate-900">Ontario</td>
                          <td className="px-4 py-3 text-slate-700">Form N13 (demolition/conversion)</td>
                          <td className="px-4 py-3 text-slate-600">120 days</td>
                          <td className="px-4 py-3 text-slate-600">3 months rent</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 font-medium text-slate-900">British Columbia</td>
                          <td className="px-4 py-3 text-slate-700">Four Month Notice (RTB form)</td>
                          <td className="px-4 py-3 text-slate-600">4 months</td>
                          <td className="px-4 py-3 text-slate-600">1 month rent</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    In Ontario, tenants also have a right of first refusal — the right to move back
                    into the renovated or rebuilt unit at a rent no higher than when they left. This
                    right must be exercised in writing and preserved throughout the process. If your
                    landlord fails to offer you the unit first, you can file with the LTB for
                    significant compensation.
                  </p>
                </div>

                {/* FAQ */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <FAQAccordion items={faqItems} includeSchema={false} />
                </div>
              </div>

              {/* Sidebar */}
              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Received an N12 or eviction notice?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Analyze your notice with LeasePlain to check for defects, missing compensation,
                    and wrong dates before you decide whether to dispute.
                  </p>
                  <Link
                    href="/tools/eviction-notice-checker"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Eviction Notice Checker
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Eviction Notices Overview", href: "/tenant-rights/eviction-notices" },
                      { label: "N12 Eviction Ontario", href: "/blog/n12-eviction-ontario" },
                      { label: "Renoviction in Canada", href: "/blog/renoviction-canada-tenant-rights" },
                      { label: "Eviction Notice Checker", href: "/tools/eviction-notice-checker" },
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
