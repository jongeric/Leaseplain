import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle, BookOpen, Scale } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Canadian Lease Laws Explained: Province-by-Province Guide | LeasePlain",
  description:
    "A complete guide to Canadian residential lease laws by province. Understand how Ontario, BC, Alberta, Quebec, and other provinces regulate rent increases, deposits, evictions, and tenant rights.",
  alternates: { canonical: "https://leaseplain.com/canadian-lease-laws" },
  openGraph: {
    title: "Canadian Lease Laws Explained: Province-by-Province Guide | LeasePlain",
    description: "A complete guide to Canadian residential lease laws by province. Understand how Ontario, BC, Alberta, Quebec, and other provinces regulate rent increases, deposits, evictions, and tenant rights.",
    url: "https://leaseplain.com/canadian-lease-laws",
    type: "website",
  },
};

const provinceData = [
  { province: "Ontario", law: "Residential Tenancies Act", body: "LTB", rentControl: "Yes (guideline)", deposit: "1 month (last month's rent)", href: "/canada/ontario" },
  { province: "British Columbia", law: "Residential Tenancy Act", body: "RTB", rentControl: "Yes (CPI cap)", deposit: "0.5x monthly", href: "/canada/british-columbia" },
  { province: "Alberta", law: "Residential Tenancies Act", body: "RTDRS", rentControl: "No", deposit: "1x monthly", href: "/canada/alberta" },
  { province: "Quebec", law: "Civil Code + Act re: Rental", body: "TAL", rentControl: "Yes (formula)", deposit: "None permitted", href: "/canada/quebec" },
  { province: "Manitoba", law: "Residential Tenancies Act", body: "RTB", rentControl: "Limited", deposit: "0.5x monthly", href: "/canada/manitoba" },
  { province: "Saskatchewan", law: "Residential Tenancies Act", body: "ORT", rentControl: "No", deposit: "1x monthly", href: "/canada/saskatchewan" },
  { province: "Nova Scotia", law: "Residential Tenancies Act", body: "RTO", rentControl: "Yes (5% cap)", deposit: "0.5x monthly (gov't held)", href: "/canada/nova-scotia" },
  { province: "New Brunswick", law: "Residential Tenancies Act", body: "RTT", rentControl: "Yes (3% cap since Feb 2025)", deposit: "1x monthly", href: "/canada/new-brunswick" },
  { province: "Newfoundland & Labrador", law: "Residential Tenancies Act", body: "Service NL (Residential Tenancies Section)", rentControl: "No", deposit: "0.75x monthly", href: "/canada/newfoundland-and-labrador" },
  { province: "PEI", law: "Residential Tenancy Act", body: "IRAC", rentControl: "Yes (Director's annual cap)", deposit: "1x monthly (landlord-held in trust)", href: "/canada/prince-edward-island" },
];

const keyRules = [
  "No province allows a lease clause to remove rights guaranteed by provincial legislation — illegal clauses are void, not the entire lease.",
  "Verbal leases are legally valid in most provinces, though written leases are strongly recommended for clarity and evidence.",
  "A landlord's right to enter your unit is restricted in every province — unannounced entry is generally prohibited except in emergencies.",
  "Security deposits must be returned (with interest in most provinces) within a prescribed period after you vacate, subject to legitimate deductions.",
  "Rent can only be increased once per 12 months in most provinces that have rent control, and advance written notice is always required.",
  "Most provinces require landlords to maintain the property in a good state of repair regardless of what the lease says.",
  "Eviction for non-payment of rent requires a formal process — a landlord cannot change locks, remove belongings, or shut off utilities without a tribunal order.",
  "Fixed-term leases in most provinces convert to month-to-month automatically at the end of the term unless proper notice is given.",
];

const illegalClauses = [
  "Clauses requiring tenants to pay for routine maintenance or repairs that are the landlord's statutory responsibility.",
  "Deposit amounts above the provincial legal maximum (e.g., more than 0.5x monthly rent in BC, or any security deposit in Quebec).",
  "Clauses allowing the landlord to enter the unit without the notice period required by provincial law.",
  "\"No pets\" clauses that attempt to override the tenant's provincial rights (varies by province — Ontario allows no-pet clauses by default).",
  "Clauses purporting to waive the tenant's right to a tribunal hearing or require binding private arbitration for disputes.",
  "Provisions allowing the landlord to increase rent more frequently or by more than the provincial maximum.",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Canada have a national tenancy law?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Residential tenancy law in Canada is entirely a matter of provincial jurisdiction under the Constitution Act, 1867. Each of the ten provinces has its own residential tenancy legislation, tribunal or board, and rules about deposits, rent increases, and eviction. There is no federal Residential Tenancies Act. This means your rights as a renter depend entirely on which province you live in.",
      },
    },
    {
      "@type": "Question",
      name: "What lease clauses are illegal in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common illegal lease clauses across Canadian provinces include: deposits above the legal maximum; waiver of your right to a tribunal hearing; landlord entry without required notice; rent increases more frequently or by more than the provincial limit; and clauses making tenants responsible for landlord maintenance obligations. An illegal clause is void, but the rest of the lease remains enforceable.",
      },
    },
    {
      "@type": "Question",
      name: "Can a landlord override provincial tenancy law in a lease?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Provincial residential tenancy legislation sets minimum standards that cannot be contracted out of. A lease clause that gives a tenant fewer rights than provincial law requires is unenforceable. This applies across all provinces — the lease cannot override the statute. If your landlord includes an illegal clause, that clause is void, but your lease as a whole remains valid.",
      },
    },
    {
      "@type": "Question",
      name: "Which provinces have rent control?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of 2026: Ontario has rent control with an annual guideline (exempting units first occupied after November 15, 2018); BC has a CPI-based cap for all units; Quebec uses a TAL formula; Nova Scotia has a fixed 5% cap; PEI has an annual cap set by the Director of Residential Tenancy; Manitoba has limited controls; and New Brunswick introduced a 3% annual cap effective February 1, 2025. Alberta, Saskatchewan, and Newfoundland & Labrador do not have rent control.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find out the tenancy rules in my province?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each province has a residential tenancy office, tribunal, or board that publishes free plain-language guides. You can also visit LeasePlain's province-specific pages for a plain-English summary of the rules in your province. For Ontario, see the LTB (Tribunals Ontario); for BC, the RTB; for Quebec, the TAL; for Alberta, the RTDRS; and for other provinces, search your provincial government's website.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://leaseplain.com" },
    { "@type": "ListItem", position: 2, name: "Canadian Lease Laws", item: "https://leaseplain.com/canadian-lease-laws" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Canadian Lease Laws Explained: Province-by-Province Guide",
  description: "A complete guide to Canadian residential lease laws by province.",
  url: "https://leaseplain.com/canadian-lease-laws",
  publisher: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
};

export default function CanadianLeaseLawsPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Canadian Lease Laws</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Scale className="w-3.5 h-3.5" aria-hidden="true" />
              Canada-Wide Guide
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Canadian Lease Laws Explained: Province-by-Province Guide
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              Canada has no national tenancy law. Each province has its own legislation, tribunal,
              and rules — and your rights as a renter depend entirely on where you live. This guide
              breaks down Canadian lease law by province in plain English.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto space-y-16">

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">How Canadian Lease Law Works</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under Canada's Constitution Act, 1867, property and civil rights — including residential
                tenancy law — fall under provincial jurisdiction. This means the federal government has
                no role in regulating your lease, your landlord's obligations, or your right to dispute
                an eviction. Each of Canada's ten provinces has enacted its own residential tenancy
                statute, established its own dispute tribunal or board, and set its own rules for
                deposits, rent increases, maintenance obligations, and eviction processes.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The three territories (Yukon, Northwest Territories, and Nunavut) also have their own
                tenancy legislation, though the protections vary. Indigenous housing on-reserve may be
                governed by band policies rather than provincial law.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The practical implication: if you move from Ontario to Alberta, your rights change
                significantly. Ontario has rent control; Alberta does not. BC caps deposits at 0.5x
                monthly rent; Quebec prohibits all security deposits. Understanding which province
                you are in — and what that province's law says — is the foundation of tenant literacy
                in Canada.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Province-by-Province Comparison</h2>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-700 font-semibold">
                    <tr>
                      <th className="px-4 py-3 border-b border-slate-200">Province</th>
                      <th className="px-4 py-3 border-b border-slate-200">Governing Law</th>
                      <th className="px-4 py-3 border-b border-slate-200">Dispute Body</th>
                      <th className="px-4 py-3 border-b border-slate-200">Rent Control?</th>
                      <th className="px-4 py-3 border-b border-slate-200">Max Deposit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {provinceData.map((row) => (
                      <tr key={row.province} className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-blue-700">
                          <Link href={row.href} className="hover:underline">{row.province}</Link>
                        </td>
                        <td className="px-4 py-3 text-slate-600">{row.law}</td>
                        <td className="px-4 py-3 text-slate-600">{row.body}</td>
                        <td className="px-4 py-3 text-slate-600">
                          <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${row.rentControl.startsWith("Yes") ? "bg-green-50 text-green-700" : row.rentControl === "No" ? "bg-red-50 text-red-700" : "bg-yellow-50 text-yellow-700"}`}>
                            {row.rentControl}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-slate-600">{row.deposit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Rules Every Canadian Renter Should Know</h2>
              <ul className="flex flex-col gap-3">
                {keyRules.map((rule) => (
                  <li key={rule} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Province-Specific Guides</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {provinceData.map((p) => (
                  <Link
                    key={p.province}
                    href={p.href}
                    className="group flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                  >
                    <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-blue-700 text-sm">{p.province}</div>
                      <div className="text-xs text-slate-500">{p.body} &middot; {p.rentControl.startsWith("Yes") ? "Rent controlled" : p.rentControl === "No" ? "No rent control" : "Limited control"}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-400 ml-auto flex-shrink-0" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Most Common Illegal Lease Clauses in Canada</h2>
              <ul className="flex flex-col gap-3">
                {illegalClauses.map((clause) => (
                  <li key={clause} className="flex items-start gap-3 text-sm leading-relaxed">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-slate-700">{clause}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3">Understanding Your Lease Before Signing</h2>
                  <p className="text-slate-700 leading-relaxed mb-5">
                    The best time to understand your rights is before you sign a lease. LeasePlain's AI
                    reads your lease in plain English, flags clauses that may be illegal or unusual in
                    your province, and gives you a report you can act on — in under a minute.
                  </p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
                  >
                    <Upload className="w-4 h-4" aria-hidden="true" />
                    Analyze My Lease Free
                  </Link>
                  <p className="text-xs text-slate-500 mt-3">Not legal advice</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              <div className="flex flex-col gap-6">
                {faqSchema.mainEntity.map((faq) => (
                  <div key={faq.name} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                    <h3 className="font-semibold text-slate-900 mb-2 text-base">{faq.name}</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\u003c") }} />

      <Footer />
    </div>
  );
}
