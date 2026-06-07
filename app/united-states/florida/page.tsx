import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, FileText } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Florida Lease Review: AI Lease Analyzer for FL Renters | LeasePlain",
  description:
    "Understand your Florida residential lease in plain English. AI-powered analysis covering FL landlord-tenant law, security deposits, early termination, and tenant rights.",
  alternates: { canonical: "https://leaseplain.com/united-states/florida" },
  openGraph: {
    title: "Florida Lease Review: AI Lease Analyzer for FL Renters | LeasePlain",
    description: "Understand your Florida residential lease in plain English. AI-powered analysis covering FL landlord-tenant law, security deposits, early termination, and tenant rights.",
    url: "https://leaseplain.com/united-states/florida",
    type: "website",
  },
};

const cities = [
  { name: "Miami", href: "/united-states/florida/miami" },
];

const faqItems = [
                  { q: "Does Florida have rent control?", a: "No. Florida preempts local rent control — cities and counties cannot enact rent control ordinances. Landlords can raise rent by any amount with proper notice (at least 15 days for month-to-month, 60 days for year-to-year tenancies)." },
                  { q: "What is the security deposit limit in Florida?", a: "Florida has no cap on security deposits for residential leases. Landlords must hold deposits in a separate bank account (or post a surety bond) and return them within 15–60 days of tenancy end, depending on whether deductions are claimed." },
                  { q: "What are Florida tenants' rights regarding repairs?", a: "Florida landlords must maintain units in a condition that complies with building codes and is fit for human habitation. Tenants must give written notice of needed repairs; if not fixed within 7 days, tenants have legal remedies including rent withholding or termination." },
                  { q: "How much notice does a Florida landlord need to give to end a tenancy?", a: "For month-to-month tenancies, either party can terminate with 15 days' notice before the rent due date. For year-to-year leases, 60 days' notice is required. For non-payment, landlords must give 3 days to pay or vacate." },
                  { q: "Can a Florida landlord charge an application fee?", a: "Yes, but Florida law requires that if a landlord rejects an applicant, any fees beyond actual screening costs must be refunded. Landlords must disclose what the application fee covers." }
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/united-states/florida",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
  "url": "https://leaseplain.com/united-states/florida",
};

export default function FloridaPage() {
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
        { name: "United States", href: "https://leaseplain.com/united-states" },
        { name: "Florida", href: "https://leaseplain.com/united-states/florida" },
      ]} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/united-states" className="hover:underline">United States</Link>
              <ChevronRight className="w-3 h-3" />
              <span>Florida</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" />
              Florida, USA
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight max-w-3xl">
              Florida Lease Review: AI Lease Analyzer for FL Renters
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Florida&apos;s landlord-tenant law has specific rules around security deposits, notice periods,
              and early termination. Our AI reads your FL lease and explains it in plain English so you
              know exactly what you&apos;re signing.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/upload"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Upload className="w-4 h-4" />
                Analyze My Florida Lease
              </Link>
              <Link
                href="/tenant-rights/united-states"
                className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                US Tenant Rights
              </Link>
            </div>
          </div>
        </section>

        {/* Cities */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Florida Cities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cities.map((city) => (
                <Link
                  key={city.href}
                  href={city.href}
                  className="group flex items-center justify-between bg-white border border-slate-100 rounded-2xl shadow-sm p-5 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {city.name}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FL Lease Info */}
        <section className="py-14 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Key Florida Landlord-Tenant Rules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Security Deposits",
                  body: "Florida law limits security deposits and requires landlords to return them within 15 days (or 30 days if claiming deductions). Check your lease for these timelines.",
                },
                {
                  title: "Notice to Terminate",
                  body: "Month-to-month tenancies require 15 days&apos; notice to terminate in Florida. Fixed-term leases end on the agreed date unless renewed.",
                },
                {
                  title: "Landlord Entry",
                  body: "Florida landlords must give at least 12 hours&apos; notice before entering the rental unit, except in emergencies.",
                },
                {
                  title: "Early Termination",
                  body: "Breaking a fixed-term lease in Florida can result in liability for remaining rent. Some leases include an early termination fee clause — check yours carefully.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">Renting in Florida?</h2>
              <p className="text-blue-100 leading-relaxed max-w-xl">
                Upload your Florida lease and get a plain-English explanation of every clause in under 30 seconds.
              </p>
            </div>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap flex-shrink-0"
            >
              <Upload className="w-4 h-4" />
              Analyze My Lease
            </Link>
          </div>
        </section>
      

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>
      </main>
      <Footer />
    </div>
    </>
  );
}
