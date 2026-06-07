import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Ontario Tenant Rights: Lease Help Under the Residential Tenancies Act | LeasePlain",
  description:
    "Understand your rights as an Ontario renter under the Residential Tenancies Act (RTA). Learn about LTB hearings, rent increase guidelines, Form N12, and lease protections.",
  alternates: { canonical: "https://leaseplain.com/canada/ontario" },
  openGraph: {
    title: "Ontario Tenant Rights: Lease Help Under the Residential Tenancies Act | LeasePlain",
    description: "Understand your rights as an Ontario renter under the Residential Tenancies Act (RTA). Learn about LTB hearings, rent increase guidelines, Form N12, and lease protections.",
    url: "https://leaseplain.com/canada/ontario",
    type: "website",
  },
};

const tenantProtections = [
  "A fixed-term lease expires on its end date without any notice required — the tenancy automatically converts to month-to-month if neither party acts. If a tenant on a month-to-month tenancy wishes to end the tenancy, they must give 60 days written notice (Form N9).",
  "Rent increases are limited to the provincial guideline (announced each year by the Ministry of Municipal Affairs and Housing).",
  "Landlords must use the standard Ontario lease form for most residential tenancies.",
  "Tenants can file applications with the Landlord and Tenant Board (LTB) — filing fees are $48 online or $53 by paper; fee waivers are available for low-income applicants.",
  "A landlord cannot evict a tenant for personal use without filing a valid Form N12 and paying one month's compensation — this applies regardless of notice period length.",
  "Above-guideline rent increases (AGI) require a formal LTB application by the landlord with documented evidence.",
  "Tenants have the right to sublet their unit — a landlord cannot unreasonably withhold consent.",
  "Security deposits (\"last month's rent\") are capped at one month's rent and must earn interest.",
];

const watchInLeases = [
  "\"Rent-to-income\" ratios or financial screening requirements that may conflict with the Human Rights Code.",
  "Clauses waiving the right to sublet or requiring the landlord's \"sole discretion\" on assignments.",
  "Early termination penalties above what is permitted under the RTA.",
  "Unauthorized fees — condo amenity fees, key fob fees, parking fees bundled into rent without disclosure.",
  "Clauses stating the landlord is not responsible for maintenance — these do not override the RTA duty to repair.",
];

const cities = [
  { name: "Toronto", href: "/canada/ontario/toronto", desc: "Canada's largest rental market, condo-heavy, AGI hearings common" },
  { name: "Ottawa", href: "/canada/ontario/ottawa", desc: "Government & student renters, competitive downtown core" },
  { name: "Mississauga", href: "/canada/ontario/mississauga", desc: "GTA suburb, growing condo inventory, Ontario RTA applies" },
  { name: "Hamilton", href: "/canada/ontario/hamilton", desc: "Fast-growing city, GTA spillover, strong tenant community" },
  { name: "Brampton", href: "/canada/ontario/brampton", desc: "Fast-growing GTA city, diverse rental market, Ontario RTA applies" },
  { name: "London", href: "/canada/ontario/london", desc: "University city, large student rental market, Western University area" },
  { name: "Kitchener", href: "/canada/ontario/kitchener", desc: "Tech hub, growing rental demand, Waterloo Region proximity" },
  { name: "Waterloo", href: "/canada/ontario/waterloo", desc: "University town, student-dominated rental market, Waterloo Region" },
  { name: "Kingston", href: "/canada/ontario/kingston", desc: "Queen's University city, strong student rental demand" },
  { name: "Oshawa", href: "/canada/ontario/oshawa", desc: "Durham Region city, commuter belt, affordable GTA alternative" },
];

const faqItems = [
  { q: "What is the Ontario Residential Tenancies Act?", a: "The Residential Tenancies Act (RTA) is Ontario's main landlord-tenant law. It governs rent increases, deposits, evictions, maintenance obligations, and dispute resolution through the Landlord and Tenant Board (LTB)." },
  { q: "How much can a landlord charge for a security deposit in Ontario?", a: "Ontario landlords may only collect a rent deposit equal to the last month's rent. They cannot charge a separate damage deposit. The deposit must earn interest at the annual rent-increase guideline rate." },
  { q: "What is Ontario's rent increase guideline?", a: "Each year the Ontario government sets a rent-increase guideline — the maximum a landlord can raise rent for most sitting tenants without LTB approval. Units first occupied after November 15, 2018 are exempt from rent control." },
  { q: "How do I file a complaint with the Ontario Landlord and Tenant Board?", a: "Applications are filed at ontario.ca/LTB or in person at an LTB office. Filing fees are $48 online or $53 by paper; fee waivers are available for low-income applicants. Common applications include T2 (rights interference), T6 (maintenance), and T3 (vital services)." },
  { q: "What notice must an Ontario landlord give to end a tenancy?", a: "The required notice depends on the reason: 60 days for landlord's own use, 60 days for purchaser's own use, or the prescribed notice for non-payment of rent (N4) plus the right to void the notice by paying within 14 days." },
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
  "url": "https://leaseplain.com/canada/ontario",
};

export default function OntarioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }).replace(/</g, "\u003c") }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema).replace(/</g, "\u003c") }} />
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Canada", href: "https://leaseplain.com/canada" },
        { name: "Ontario", href: "https://leaseplain.com/canada/ontario" },
      ]} />
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/locations" className="hover:underline">Locations</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/canada" className="hover:underline">Canada</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Ontario</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Ontario Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Ontario Tenant Rights: Lease Help Under the Residential Tenancies Act
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Ontario's <em>Residential Tenancies Act</em> (RTA) provides some of the strongest tenant
              protections in North America. From rent increase caps to accessible LTB hearings (filing fees are $48 online or $53 by paper; fee waivers available for low-income applicants), Ontario
              renters have significant rights — but only if they know them.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Residential Tenancies Act & the LTB</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The <em>Residential Tenancies Act, 2006</em> governs almost all private residential
                  rental units in Ontario. It sets out the rights and obligations of both landlords and
                  tenants and establishes the <strong>Landlord and Tenant Board (LTB)</strong> as the
                  tribunal for resolving disputes. The LTB hears applications about rent, maintenance,
                  evictions, and a wide range of tenancy issues.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Tenants pay a filing fee of $48 online or $53 by paper when applying to the LTB; fee waivers are available for low-income applicants. Landlords also pay a filing fee. Applications can be
                  filed online through the Tribunals Ontario portal, and hearings are typically conducted
                  via videoconference. The LTB has authority to order rent abatements, repairs, and in
                  some cases dismiss eviction applications.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Tenant Protections Under the RTA</h2>
                <ul className="flex flex-col gap-3">
                  {tenantProtections.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Form N12: Owner's Own Use</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  If a landlord wants to move into your unit (or have a close family member move in),
                  they must serve you a Form N12 with at least 60 days notice and pay you one month's
                  rent as compensation (under RTA s.48.1, this applies regardless of the length of notice given). If the landlord does not genuinely occupy the unit within a
                  reasonable time, you may have grounds for a bad-faith eviction claim at the LTB,
                  which can result in significant financial remedies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What to Watch for in Ontario Leases</h2>
                <ul className="flex flex-col gap-3">
                  {watchInLeases.map((w) => (
                    <li key={w} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">Ontario Cities</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {cities.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {c.name}
                        </h3>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors mt-0.5" aria-hidden="true" />
                      </div>
                      <p className="text-sm text-slate-600">{c.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your Ontario lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI reviews your lease against the Ontario RTA and flags clauses that may limit
                  your rights or impose unenforceable obligations.
                </p>
                <Link
                  href="/upload"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                >
                  <Upload className="w-4 h-4" aria-hidden="true" />
                  Analyze My Lease
                </Link>
                <p className="text-xs text-blue-200 mt-3 text-center">Not legal advice</p>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Pages</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Ontario Tenant Rights Guide", href: "/tenant-rights/ontario" },
                    { label: "Toronto Lease Help", href: "/canada/ontario/toronto" },
                    { label: "Ottawa Lease Help", href: "/canada/ontario/ottawa" },
                    { label: "Canada Overview", href: "/canada" },
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
