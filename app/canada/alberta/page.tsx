import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Alberta Tenant Rights: Lease Help Under the Residential Tenancies Act | LeasePlain",
  description:
    "Understand your rights as an Alberta renter. Alberta has no rent control — learn how the Residential Tenancies Act, RTDRS process, and security deposit rules protect you.",
  alternates: { canonical: "https://leaseplain.com/canada/alberta" },
  openGraph: {
    title: "Alberta Tenant Rights: Lease Help Under the Residential Tenancies Act | LeasePlain",
    description: "Understand your rights as an Alberta renter. Alberta has no rent control — learn how the Residential Tenancies Act, RTDRS process, and security deposit rules protect you.",
    url: "https://leaseplain.com/canada/alberta",
    type: "website",
  },
};

const albertaProtections = [
  "Security deposits are capped at one month's rent — this is the maximum regardless of lease length.",
  "Landlords must provide a statement of account within 10 days of tenancy end. The final statement of account must be delivered within 30 days of possession being given up.",
  "For a fixed-term lease, landlords must give at least 3 months notice if they do not intend to renew.",
  "Month-to-month tenants must receive at least 3 months notice to vacate; week-to-week tenants require one week's notice.",
  "Alberta has no province-wide rent control — landlords can raise rent by any amount, but only once per year and with 3 months written notice.",
  "Tenants can apply to the Residential Tenancy Dispute Resolution Service (RTDRS) for most tenancy disputes.",
  "Landlords cannot enter a unit without proper notice — at least 24 hours for most purposes.",
  "Tenants can withhold rent into an interest-bearing account (rent escrow) under specific conditions when a landlord fails to maintain the unit.",
];

const albertaLeaseIssues = [
  "Security deposits above one month's rent — any amount above the statutory cap is not legally collectible.",
  "Rent increase clauses in the lease purporting to allow increases more than once a year or without 3 months notice.",
  "Early termination penalties above what is recoverable at common law — Alberta does not cap these by statute, but courts apply mitigation principles.",
  "Clauses requiring tenants to pay for routine maintenance or repairs that are a landlord's statutory obligation.",
  "Lease provisions waiving the RTDRS dispute process or requiring disputes to be resolved only in court — these cannot override a tenant's statutory right to RTDRS.",
];

const cities = [
  { name: "Calgary", href: "/canada/alberta/calgary", desc: "Oil-economy cycles, historically high vacancy, no rent control" },
  { name: "Edmonton", href: "/canada/alberta/edmonton", desc: "Government hub, university market, affordable relative to other metros" },
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
  "url": "https://leaseplain.com/canada/alberta",
};

export default function AlbertaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema).replace(/</g, "\u003c") }} />
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Canada", href: "https://leaseplain.com/canada" },
        { name: "Alberta", href: "https://leaseplain.com/canada/alberta" },
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
              <span>Alberta</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Alberta Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Alberta Tenant Rights: Lease Help Under the Residential Tenancies Act
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Alberta is one of the few Canadian provinces with no province-wide rent control. While
              this gives landlords more flexibility to raise rents, Alberta tenants still have
              meaningful protections around deposits, notice periods, and dispute resolution through
              the RTDRS.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Alberta RTA & the RTDRS</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Alberta's <em>Residential Tenancies Act</em> (RTA) establishes the rights and
                  obligations of landlords and tenants across the province. It covers security
                  deposits, entry rights, notice periods, assignment and subletting, and eviction
                  procedures. The <strong>Residential Tenancy Dispute Resolution Service (RTDRS)</strong>
                  handles most landlord-tenant disputes outside of court — it is faster and less
                  expensive than civil litigation.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Unlike Ontario's LTB or BC's RTB, Alberta's RTDRS operates more like an arbitration
                  service: hearings are conducted in-person or by telephone, and either party can
                  apply. RTDRS orders are legally binding and enforceable as court judgments.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="font-semibold text-amber-900 mb-3">No Rent Control in Alberta</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Alberta has no province-wide rent control. A landlord can raise your rent by any
                  amount — but they can only do so <strong>once per year</strong>, and they must give
                  you at least <strong>3 months written notice</strong> before the increase takes
                  effect. If your landlord tries to raise rent more frequently or with shorter notice,
                  the increase is not valid. You do not have to pay it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Tenant Protections in Alberta</h2>
                <ul className="flex flex-col gap-3">
                  {albertaProtections.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What to Watch for in Alberta Leases</h2>
                <ul className="flex flex-col gap-3">
                  {albertaLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">Alberta Cities</h2>
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
                <p className="mt-4 text-sm text-slate-500">More Alberta cities coming soon — Red Deer, Lethbridge, Fort McMurray, and others.</p>
              </div>

            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "Does Alberta have rent control?", a: "No. Alberta has no province-wide rent control. Landlords can increase rent by any amount, but must give tenants at least 3 months' written notice before any increase takes effect." },
                  { q: "What is the security deposit limit in Alberta?", a: "Alberta landlords can charge a maximum security deposit equal to one month's rent. They cannot charge a separate damage deposit, pet deposit beyond that cap, or additional security fees." },
                  { q: "How do I dispute a landlord-tenant issue in Alberta?", a: "You can apply to the Residential Tenancy Dispute Resolution Service (RTDRS) for a fast, affordable hearing, or file a claim in Provincial Court. The RTDRS is available throughout Alberta and often faster than court." },
                  { q: "What notice does an Alberta landlord need to end a tenancy?", a: "For a month-to-month tenancy, landlords must give 3 months' notice to terminate without cause. For fixed-term leases, either party must give notice of non-renewal within the timeframe specified in the lease or in the Act." },
                  { q: "Are Alberta lease clauses restricting pets enforceable?", a: "Yes. Unlike some provinces, Alberta allows landlords to prohibit pets in a lease. However, no-pet clauses do not override human rights protections for service animals and emotional support animals." }
                ]} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your Alberta lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your Alberta lease and our AI will flag illegal deposit amounts, improper
                  notice clauses, and other issues under the provincial RTA.
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
                    { label: "Calgary Lease Help", href: "/canada/alberta/calgary" },
                    { label: "Edmonton Lease Help", href: "/canada/alberta/edmonton" },
                    { label: "Alberta Tenant Rights Guide", href: "/tenant-rights/alberta" },
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
