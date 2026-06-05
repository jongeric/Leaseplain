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
  title: "Ontario Standard Lease Explained: What Every Section of Form 2229E Means | LeasePlain",
  description:
    "The Ontario Standard Lease (Form 2229E) is mandatory for most residential rentals. Learn what all 17 sections mean, what landlords can and cannot add, and what to do if your landlord refuses to use it.",
  alternates: { canonical: "https://leaseplain.com/blog/ontario-standard-lease-explained" },
  openGraph: {
    title: "Ontario Standard Lease Explained: What Every Section of Form 2229E Means | LeasePlain",
    description:
      "Form 2229E became mandatory in Ontario on April 30, 2018. Here is what all 17 sections actually mean — and what to do if your landlord won't use the standard lease.",
    url: "https://leaseplain.com/blog/ontario-standard-lease-explained",
    type: "article",
    publishedTime: "2026-06-05T00:00:00Z",
    modifiedTime: "2026-06-05T00:00:00Z",
  },
  keywords: [
    "ontario standard lease",
    "form 2229E",
    "ontario lease agreement",
    "standard lease ontario",
    "mandatory lease ontario",
  ],
};

const faqItems = [
  {
    q: "Does the Ontario standard lease apply to all rentals?",
    a: "It applies to most private residential tenancies in Ontario — single-family homes, apartments, condos, basement units, and secondary suites. It does not apply to co-operative housing, social housing, student residences run by post-secondary institutions, care homes, or vacation rentals of less than 14 days.",
  },
  {
    q: "What if my landlord uses their own custom lease instead of Form 2229E?",
    a: "You can request the standard lease in writing. Your landlord has 21 days to provide it. If they don't, you can withhold one month's rent as a one-time remedy under s.12.1 of the RTA. If they provide the standard lease after you've withheld rent, you must pay the withheld rent within 30 days.",
  },
  {
    q: "Can a landlord add extra clauses to the standard lease?",
    a: "Yes — Section 15 allows for additional terms. However, any additional term that conflicts with the Residential Tenancies Act is automatically void and unenforceable, even if you sign it. Common void clauses include bans on guests, tenant responsibility for all repairs, or extra deposits beyond last month's rent.",
  },
  {
    q: "Does the standard lease guarantee my rent is controlled?",
    a: "No. The standard lease is a format requirement, not a rent control mechanism. Whether your rent is subject to Ontario's annual guideline depends on when the unit was first occupied for residential purposes. Units first occupied after November 15, 2018 are exempt from rent control regardless of what form the lease uses.",
  },
  {
    q: "Can I sign the standard lease digitally?",
    a: "Yes. The Ontario government accepts electronic signatures under the Electronic Commerce Act. A scanned PDF or DocuSign-type signature is valid. Make sure you keep a copy — the landlord must provide you one within 21 days of both parties signing.",
  },
];

export default function OntarioStandardLeaseExplainedPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Ontario Standard Lease Explained: What Every Section of Form 2229E Means",
    url: "https://leaseplain.com/blog/ontario-standard-lease-explained",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".speakable-summary"],
    },
  };

  return (
    <>
      <ArticleSchema
        headline="Ontario Standard Lease Explained: What Every Section of Form 2229E Means"
        description="The Ontario Standard Lease (Form 2229E) is mandatory for most residential rentals. Learn what all 17 sections mean, what landlords can and cannot add, and what to do if your landlord refuses to use it."
        url="https://leaseplain.com/blog/ontario-standard-lease-explained"
        datePublished="2026-06-05"
        dateModified="2026-06-05"
        keywords={[
          "ontario standard lease",
          "form 2229E",
          "ontario lease agreement",
          "standard lease ontario",
          "mandatory lease ontario",
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://leaseplain.com" },
          { name: "Blog", href: "https://leaseplain.com/blog" },
          { name: "Ontario Standard Lease Explained", href: "https://leaseplain.com/blog/ontario-standard-lease-explained" },
        ]}
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
                <Link href="/" className="hover:underline">Home</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <Link href="/blog" className="hover:underline">Blog</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>Ontario Standard Lease Explained</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Ontario
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  June 5, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  9 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Ontario Standard Lease Explained: What Every Section of Form 2229E Actually Means
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Since April 30, 2018, Ontario landlords of most private residential rentals have
                been required to use Form 2229E — the Ontario Standard Lease. Here is what all 17
                sections actually mean, which clauses landlords cannot legally add, and exactly
                what you can do if your landlord refuses to provide the standard lease.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Why Ontario Created a Standard Lease</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Before 2018, every landlord in Ontario could draft their own lease from scratch.
                    This created a landscape where custom leases routinely included illegal clauses —
                    clauses requiring extra deposits, stripping tenants of repair rights, or banning
                    children — that many renters signed without knowing were void under the{" "}
                    <em>Residential Tenancies Act</em> (RTA).
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Ontario responded with O.Reg 9/18, which came into force on <strong>April 30, 2018</strong>.
                    The regulation created a single, province-wide standard lease — Form 2229E — that
                    all landlords of covered residential units must use for any new tenancy agreement.
                    The form is plain-language by design: it explains each provision in terms tenants can
                    actually read, and it leaves no room for landlords to quietly bury illegal clauses in
                    the main body of the agreement.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    The standard lease is available in both English and French. A tenant can request the
                    French version, and the landlord must provide it.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Who Must Use It — and Who Is Exempt</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Form 2229E is mandatory for private residential rentals in Ontario: houses, apartments,
                    condominiums, basement apartments, secondary suites, and similar units. If a private
                    landlord is renting a residential unit on a new tenancy starting after April 30, 2018,
                    the standard lease is required.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The following types of housing are <strong>exempt</strong> and do not require Form 2229E:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 text-slate-700 leading-relaxed">
                    <li>Co-operative housing (co-ops)</li>
                    <li>Care homes and long-term care facilities</li>
                    <li>Student residences operated by post-secondary institutions</li>
                    <li>Social and community housing</li>
                    <li>Transient occupancy such as hotels, motels, and short-term vacation rentals of fewer than 14 days</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">What the 17 Sections Cover</h2>
                  <p className="text-slate-700 leading-relaxed mb-5">
                    Form 2229E has exactly 17 numbered sections. The table below explains what each one
                    covers in plain terms.
                  </p>
                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-12">§</th>
                          <th className="px-4 py-3 font-semibold text-slate-700">Section Title</th>
                          <th className="px-4 py-3 font-semibold text-slate-700">What It Means</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          { num: 1, title: "Parties", meaning: "Names and contact information of the landlord(s) and tenant(s) — everyone legally bound by the agreement." },
                          { num: 2, title: "Rental Unit", meaning: "The full address and unit number being rented, including any parking or storage lockers that are part of the deal." },
                          { num: 3, title: "Contact Information", meaning: "Where the landlord can be reached for maintenance requests and legal notices — a mailing address, not just a phone number." },
                          { num: 4, title: "Term", meaning: "Whether the tenancy is fixed-term (e.g., one year) or month-to-month, and the start date. A fixed-term lease automatically converts to month-to-month at the end unless both parties agree otherwise." },
                          { num: 5, title: "Rent", meaning: "The lawful rent amount — the total of base rent plus the value of any included services or utilities. This is the legally enforceable rent amount and the baseline for any future increase calculations." },
                          { num: 6, title: "Rent Deposit", meaning: "Whether a last month's rent deposit is required, how much it is, and how interest on that deposit is calculated (as required by the RTA)." },
                          { num: 7, title: "Services and Utilities", meaning: "Exactly what is included in the rent: heat, electricity, water, internet, parking, air conditioning, and so on. If it is not listed here, the tenant pays for it separately." },
                          { num: 8, title: "Smoking", meaning: "Whether smoking is permitted in the unit and in common areas. A landlord may prohibit smoking entirely — including cannabis — in the unit." },
                          { num: 9, title: "Tenant Insurance", meaning: "Whether the landlord requires the tenant to carry tenant's insurance (also called renter's insurance). This is one of the few additional requirements that is enforceable as an added term." },
                          { num: 10, title: "Changes to the Lease", meaning: "Outlines the rules for how the lease can be changed — both parties must agree in writing to any amendment." },
                          { num: 11, title: "Assignment and Subletting", meaning: "The tenant's right to assign the lease or sublet the unit. A landlord cannot unreasonably refuse consent to a sublet or assignment." },
                          { num: 12, title: "Entry by the Landlord", meaning: "The circumstances under which a landlord may enter the unit — generally with 24 hours written notice at a reasonable time, except in emergencies." },
                          { num: 13, title: "Maintenance and Repairs", meaning: "The landlord's obligation to keep the unit in a good state of repair and comply with health and safety standards. This obligation exists regardless of what the lease says." },
                          { num: 14, title: "Landlord and Tenant Obligations", meaning: "A summary of each party's legal duties under the RTA, including the tenant's obligation to keep the unit reasonably clean and not to damage it." },
                          { num: 15, title: "Additional Terms", meaning: "Where a landlord may add extra conditions — but only those that do not contradict the RTA. Any clause that conflicts with the RTA is void, even if signed." },
                          { num: 16, title: "Changes to the Rental Unit", meaning: "Rules around alterations, decorating, and modifications the tenant wants to make to the unit. Significant changes typically require the landlord's written consent." },
                          { num: 17, title: "Signatures", meaning: "Both parties sign here to make the lease legally binding. The landlord must give the tenant a signed copy within 21 days of both parties signing." },
                        ].map((row) => (
                          <tr key={row.num} className="hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 font-semibold text-blue-700">{row.num}</td>
                            <td className="px-4 py-3 font-medium text-slate-800 whitespace-nowrap">{row.title}</td>
                            <td className="px-4 py-3 text-slate-600 leading-relaxed">{row.meaning}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Section 15: What Landlords Can and Cannot Add</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Section 15 is where most landlord-tenant disputes about the standard lease actually
                    arise. Landlords are permitted to add additional terms here — conditions specific to
                    the property, the building, or the arrangement. A no-smoking policy, a tenant
                    insurance requirement, or rules about garbage disposal are legitimate examples.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    However, the RTA is explicit: any additional term that is <strong>inconsistent with
                    the Residential Tenancies Act</strong> is void — it has no legal effect, even if the
                    tenant signed the lease (RTA s.12.1(11)). This is a hard rule with no exceptions.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Common illegal additional terms that landlords attempt to add, and which are void:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li><strong>&quot;Tenant is responsible for all repairs to the unit.&quot;</strong> — Void. Landlords have a non-waivable statutory duty to maintain the unit.</li>
                    <li><strong>&quot;No overnight guests.&quot;</strong> — Void. Tenants have the right to enjoy their home and have guests.</li>
                    <li><strong>&quot;No children allowed.&quot;</strong> — Void and also a violation of the Ontario Human Rights Code.</li>
                    <li><strong>&quot;A pet deposit of $X is required.&quot;</strong> — Void. Ontario only permits a last month&apos;s rent deposit. No additional deposits — for pets, damage, or anything else — are permitted.</li>
                    <li><strong>&quot;Rent may be increased more than once per year.&quot;</strong> — Void. The RTA limits increases to once per 12 months.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    If your landlord has included any clause like these in Section 15, you do not need to
                    comply with it — and you do not need a court order to ignore it. The clause is void
                    from the moment it was written. You can confirm this by contacting the Landlord and
                    Tenant Board (LTB) or a tenant duty counsel service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What to Do If Your Landlord Won&apos;t Use the Standard Lease</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    If your landlord provides a custom lease, an old-style lease, or no written lease at
                    all — when they are required to use Form 2229E — you have a clear statutory remedy
                    under RTA s.12.1.
                  </p>
                  <ol className="list-decimal list-inside space-y-4 text-slate-700 leading-relaxed mb-3">
                    <li>
                      <strong>Make a written request.</strong> Ask your landlord in writing to provide
                      the Ontario Standard Lease (Form 2229E). Keep a copy of your request and the date
                      you sent it. Email works well because it creates a timestamped record.
                    </li>
                    <li>
                      <strong>Wait 21 days.</strong> Your landlord has 21 days from the date of your
                      written request to provide the standard lease. Continue paying rent normally
                      during this period.
                    </li>
                    <li>
                      <strong>Withhold one month&apos;s rent if they fail.</strong> If the landlord does
                      not provide the standard lease within 21 days of your written request, you gain a
                      one-time right to withhold one month&apos;s rent under RTA s.12.1(6). This is a
                      single-use remedy — not an ongoing right to withhold rent every month.
                    </li>
                    <li>
                      <strong>Pay the withheld rent within 30 days if they then comply.</strong> If your
                      landlord provides the standard lease after you have already withheld rent, you must
                      pay the withheld month&apos;s rent within 30 days of receiving the standard lease.
                      Failure to do so could give the landlord grounds to serve an N4 notice for
                      non-payment.
                    </li>
                  </ol>
                  <p className="text-slate-700 leading-relaxed">
                    Note that a landlord who continues to refuse to provide the standard lease after the
                    21-day window cannot be fined simply for the refusal — the tenant&apos;s remedy is the
                    one-time withholding right, not an LTB fine. If you are unsure how to proceed, contact
                    a tenant duty counsel clinic or the LTB information line at 1-888-332-3234.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Analyze your Ontario lease with AI</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your lease and get a plain-language breakdown of every clause — including
                    any illegal or void terms your landlord may have added.
                  </p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Upload &amp; Analyze Your Lease
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Resources</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Ontario Tenant Rights", href: "/tenant-rights/ontario" },
                      { label: "Lease Red Flags to Watch For", href: "/blog/lease-red-flags-to-watch-for" },
                      { label: "Check Before Signing", href: "/canada/ontario" },
                      { label: "Clause Checker Tool", href: "/upload" },
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
