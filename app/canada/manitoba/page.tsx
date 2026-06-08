import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Manitoba Tenant Rights: Lease Help Under the Residential Tenancies Act | LeasePlain",
  description:
    "Understand your rights as a Manitoba renter under The Residential Tenancies Act. Learn about RTB hearings, annual rent increase guidelines, security deposit rules, and lease protections in Winnipeg and across Manitoba.",
  alternates: { canonical: "https://leaseplain.com/canada/manitoba" },
  openGraph: {
    title: "Manitoba Tenant Rights: Lease Help Under the Residential Tenancies Act | LeasePlain",
    description: "Understand your rights as a Manitoba renter under The Residential Tenancies Act. Learn about RTB hearings, annual rent increase guidelines, security deposit rules, and lease protections in Winnipeg and across Manitoba.",
    url: "https://leaseplain.com/canada/manitoba",
    type: "website",
  },
};

const tenantProtections = [
  "Rent increases are limited to an annual guideline set by the provincial government, calculated using the Consumer Price Index (CPI).",
  "Landlords must give at least three months' written notice before a rent increase takes effect, and may only raise rent once per 12-month period.",
  "Security deposits are capped at half a month's rent and must be held in trust; landlords cannot charge additional pet deposits.",
  "Tenants have the right to file complaints with the Residential Tenancies Branch (RTB) at low cost, with hearings conducted by Residential Tenancies Officers.",
  "A landlord must provide at least one month's written notice to end a month-to-month tenancy, and the reason must be lawful under The Residential Tenancies Act.",
  "Landlords are required to keep rental units in a good state of repair and comply with all health, safety, and housing standards.",
  "Tenants cannot be evicted in retaliation for exercising their legal rights, including filing complaints with the RTB.",
  "Any clause in a lease that waives a tenant's rights under The Residential Tenancies Act is void and unenforceable, even if both parties signed it.",
];

const watchInLeases = [
  "Clauses requiring additional deposits beyond the permitted half-month security deposit — separate pet deposits are prohibited under Manitoba law.",
  "Rent increase provisions that do not comply with the annual CPI-based guideline or the required three-month notice period.",
  "Lease terms stating the tenant is responsible for repairs that are the landlord's statutory obligation under the Act.",
  "No-pets clauses that purport to impose penalties exceeding what the Act permits — understand your specific lease terms carefully.",
  "Automatic renewal clauses that convert a fixed-term tenancy to a new fixed term without the tenant's active consent — Manitoba law provides specific rules on how tenancies continue after a fixed term.",
];

const cities = [
  { name: "Winnipeg", desc: "Manitoba's capital and largest city — the RTB's main office serves Winnipeg renters directly" },
];

const faqItems = [
                  { q: "Does Manitoba have rent control?", a: "Yes. Manitoba applies an annual rent increase guideline set each year by the Residential Tenancies Branch. Landlords generally cannot raise rent above the guideline without branch approval." },
                  { q: "What is the security deposit limit in Manitoba?", a: "Manitoba limits security deposits to half a month's rent. In Manitoba, landlords hold security deposits in trust. The deposit must be returned within 14 days of move-out if there is no dispute." },
                  { q: "How do I file a tenancy dispute in Manitoba?", a: "Contact the Residential Tenancies Branch (RTB) in person, by phone, or online. The RTB handles rent increases, deposits, maintenance complaints, evictions, and other landlord-tenant disputes throughout Manitoba." },
                  { q: "What notice is required to end a month-to-month tenancy in Manitoba?", a: "In Manitoba, tenants must give one full rental period notice (e.g., one month for monthly rentals). Landlords must give at least one rental period's notice unless evicting for cause, which may require a shorter or longer period." },
                  { q: "Can I get my Manitoba security deposit back?", a: "Yes, provided you have no outstanding rent or damages above normal wear and tear. The Residential Tenancies Branch holds deposits and releases them after the tenancy ends, usually within 14–28 days of a claim." }
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
  "url": "https://leaseplain.com/canada/manitoba",
};

export default function ManitobaPage() {
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
        { name: "Manitoba", href: "https://leaseplain.com/canada/manitoba" },
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
              <span>Manitoba</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Manitoba Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Manitoba Tenant Rights: Lease Help Under the Residential Tenancies Act
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Manitoba's <em>Residential Tenancies Act</em> gives renters across the province meaningful
              protections — from annual rent increase guidelines tied to CPI to low-cost dispute resolution
              through the Residential Tenancies Branch. Whether you rent in Winnipeg or a smaller
              Manitoba community, knowing the law is your first line of defence before signing any lease.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Residential Tenancies Act &amp; the RTB</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <em>The Residential Tenancies Act</em> is the primary law governing residential rental
                  housing in Manitoba. It sets out the rights and obligations of both landlords and tenants
                  and applies to almost all private residential rental units in the province, including
                  apartments, houses, and secondary suites. The Act is administered by the{" "}
                  <strong>Residential Tenancies Branch (RTB)</strong>, a provincial body with offices in
                  Winnipeg and regional representatives serving renters across Manitoba.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  The RTB provides information services, mediates disputes, and conducts formal hearings
                  through Residential Tenancies Officers. Either a landlord or a tenant can file an
                  application with the RTB. The filing fees are modest, and hearing officers have broad
                  authority to order remedies including rent abatements, repairs, and in appropriate cases,
                  the termination of a tenancy. The RTB also publishes the annual rent increase guideline
                  each year and provides landlords and tenants with standard lease forms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Tenant Protections Under the Act</h2>
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
                <h3 className="font-semibold text-blue-900 mb-3">Manitoba Rent Increase Guidelines</h3>
                <p className="text-sm text-blue-800 leading-relaxed mb-3">
                  Manitoba uses an annual rent increase guideline to limit how much a landlord can raise
                  rent in a given year. The guideline is calculated based on the provincial Consumer Price
                  Index (CPI) and is announced by the provincial government each fall for the following
                  calendar year.
                </p>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Landlords who wish to increase rent must give at least <strong>three months' written notice</strong>{" "}
                  before the increase takes effect, and may only increase rent once in any 12-month period.
                  A landlord who wants to raise rent above the guideline must apply to the RTB and demonstrate
                  extraordinary circumstances such as significant capital improvements or unusually high operating
                  cost increases. Tenants who receive an above-guideline increase notice have the right to
                  challenge the application before an RTB hearing officer.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What to Watch for in Manitoba Leases</h2>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-5">Manitoba Cities</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {cities.map((c) => (
                    <div
                      key={c.name}
                      className="block bg-white border border-slate-200 rounded-2xl p-5"
                    >
                      <h3 className="font-bold text-slate-900 mb-2">
                        {c.name}
                      </h3>
                      <p className="text-sm text-slate-600">{c.desc}</p>
                    </div>
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
                <h3 className="font-bold text-lg mb-2">Check your Manitoba lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI reviews your lease against The Residential Tenancies Act and flags clauses that
                  may limit your rights or impose obligations not permitted under Manitoba law.
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
                    { label: "Canadian Tenant Rights Guide", href: "/tenant-rights/canada" },
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
