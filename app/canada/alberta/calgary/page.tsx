import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help in Calgary, Alberta | Tenant Rights | LeasePlain",
  description:
    "Calgary renters: understand your rights under Alberta's Residential Tenancies Act. Learn about Calgary's oil-driven rental cycles, no rent control, and RTDRS dispute process.",
  alternates: { canonical: "https://leaseplain.com/canada/alberta/calgary" },
  openGraph: {
    title: "Lease Help in Calgary, Alberta | Tenant Rights | LeasePlain",
    description: "Calgary renters: understand your rights under Alberta's Residential Tenancies Act. Learn about Calgary's oil-driven rental cycles, no rent control, and RTDRS dispute process.",
    url: "https://leaseplain.com/canada/alberta/calgary",
    type: "website",
  },
};

const calgaryRights = [
  "Alberta's Residential Tenancies Act (RTA) applies fully to all private residential rentals in Calgary.",
  "Security deposits cannot exceed one month's rent — a landlord cannot charge more even in a tight market.",
  "Rent can only be increased once per year with at least 3 months written notice — no exceptions.",
  "Calgary tenants can apply to the RTDRS for disputes — the service is faster and cheaper than court.",
  "Landlords must return deposits within 10 days of tenancy end and provide an itemized statement for any deductions.",
  "A landlord can only enter your unit with proper notice except in genuine emergencies.",
];

const calgaryLeaseIssues = [
  "Deposits above one month's rent framed as \"first and last month's rent\" — Alberta law permits only one month as a security deposit.",
  "Lease clauses permitting rent increases more than once per year or without 3 months notice — not permitted under the Alberta RTA.",
  "Early termination clauses with large flat fees — while Alberta lacks a statutory cap, courts require landlords to mitigate losses.",
  "Oil-industry worker leases with non-standard terms tied to employment — these are still fully subject to the RTA.",
  "Pet deposits structured as non-refundable fees — Alberta RTA security deposits must be refundable subject to damages.",
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/canada/alberta/calgary",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
  "url": "https://leaseplain.com/canada/alberta/calgary",
};

export default function CalgaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema).replace(/</g, "\u003c") }} />
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Canada", href: "https://leaseplain.com/canada" },
        { name: "Alberta", href: "https://leaseplain.com/canada/alberta" },
        { name: "Calgary", href: "https://leaseplain.com/canada/alberta/calgary" },
      ]} />
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/canada" className="hover:underline">Canada</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/canada/alberta" className="hover:underline">Alberta</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Calgary</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Calgary, Alberta
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in Calgary, Alberta | Tenant Rights
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Calgary's rental market is tightly linked to the energy sector — when oil prices fall,
              vacancy rates rise; when they climb, rents follow. In either environment, knowing the
              Alberta RTA protects you from illegal deposits, improper rent hikes, and unfair lease terms.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Calgary's Rental Market Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Calgary's rental market has historically experienced wide swings driven by oil and
                  gas industry cycles. During boom periods, vacancy rates drop sharply and rents surge.
                  During downturns, vacancies spike and landlords compete for tenants with incentives
                  and below-market rates. The late 2010s saw prolonged softness; the early 2020s
                  brought a significant tightening as interprovincial migration increased.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Unlike Ontario and BC, Alberta has no rent control. A Calgary landlord can raise your
                  rent to any amount when you renew — but they can only do it once per year, with 3
                  months written notice. This makes lease negotiations and understanding your rights
                  at renewal time especially important.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as a Calgary Renter</h2>
                <ul className="flex flex-col gap-3">
                  {calgaryRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">The RTDRS in Calgary</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  The Residential Tenancy Dispute Resolution Service (RTDRS) offers in-person and
                  telephone hearings in Calgary. Filing fees are modest and the process is designed
                  to be accessible without a lawyer. RTDRS orders are enforceable as court judgments.
                  Common Calgary disputes involve security deposit deductions, abandoned property,
                  early lease termination claims, and landlord entry violations. The RTDRS website
                  provides application forms and hearing guides.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in Calgary</h2>
                <ul className="flex flex-col gap-3">
                  {calgaryLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Tenant Resources in Calgary</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Calgary tenants have access to several free resources:
                </p>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Centre for Public Legal Education Alberta (CPLEA)</strong> — plain-language tenant rights guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Calgary Legal Guidance</strong> — free legal advice for low-income Calgarians</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>RTDRS Calgary Office</strong> — dispute resolution applications and information</span>
                  </li>
                </ul>
              </div>

            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "Is there rent control in Calgary?", a: "No. Alberta has no rent control, so Calgary landlords can raise rent by any amount. They must give at least 3 months' written notice before a rent increase takes effect." },
                  { q: "What is the security deposit limit in Calgary?", a: "Alberta caps security deposits at one month's rent. This applies in Calgary and throughout the province. Landlords must return the deposit within 10 days of tenancy end with an itemized statement of any deductions." },
                  { q: "Can a Calgary landlord evict me without cause?", a: "No immediate without-cause eviction is allowed. For a periodic (month-to-month) tenancy, landlords can terminate by giving 3 months' written notice. For cause (e.g., non-payment), shorter notice periods apply." },
                  { q: "Where do Calgary tenants file a dispute?", a: "File with the Residential Tenancy Dispute Resolution Service (RTDRS) in Calgary — it is faster than Provincial Court and free for most applications. The RTDRS can order the return of deposits, end illegal rent increases, and more." },
                  { q: "Is a verbal lease valid in Calgary?", a: "Yes, Alberta law recognizes verbal tenancy agreements, but they are very difficult to enforce if a dispute arises. A written lease clearly documenting rent, deposits, and responsibilities is strongly recommended." }
                ]} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Review your Calgary lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and our AI will flag issues under the Alberta RTA — including
                  illegal deposits and improper rent increase clauses.
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
                    { label: "Alberta Tenant Rights", href: "/canada/alberta" },
                    { label: "Edmonton Lease Help", href: "/canada/alberta/edmonton" },
                    { label: "Alberta Tenant Rights Guide", href: "/tenant-rights/alberta" },
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
