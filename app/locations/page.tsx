import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, ChevronRight, Upload, MapPin } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help by Location: Canada & United States | LeasePlain",
  description:
    "Find tenant rights guides, lease help, and local rental law information for provinces across Canada and states in the United States. Each jurisdiction has its own rules.",
  alternates: { canonical: "https://leaseplain.com/locations" },
};

const canadaProvinces = [
  {
    name: "Ontario",
    href: "/canada/ontario",
    law: "Residential Tenancies Act",
    highlight: "LTB adjudication, 60-day notice",
  },
  {
    name: "British Columbia",
    href: "/canada/british-columbia",
    law: "Residential Tenancy Act",
    highlight: "RTB hearings, 0.5x deposit cap",
  },
  {
    name: "Alberta",
    href: "/canada/alberta",
    law: "Residential Tenancies Act",
    highlight: "No rent control, RTDRS process",
  },
  {
    name: "Quebec",
    href: "/canada/quebec",
    law: "Civil Code of Quebec",
    highlight: "TAL tribunal, standard bail form",
  },
];

const usStates = [
  {
    name: "New York",
    href: "/united-states/new-york",
    law: "Housing Stability & Tenant Protection Act",
    highlight: "Rent stabilization, DHCR oversight",
    comingSoon: true,
  },
  {
    name: "California",
    href: "/united-states/california",
    law: "AB 1482 Tenant Protection Act",
    highlight: "Statewide rent cap, just cause eviction",
    comingSoon: true,
  },
  {
    name: "Florida",
    href: "/united-states/florida",
    law: "Florida Residential Landlord & Tenant Act",
    highlight: "No statewide rent control",
    comingSoon: true,
  },
];

export default function LocationsPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Locations</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Help by Location
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help by Location: Canada &amp; United States
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Tenancy law is local. Whether you rent in Toronto, Vancouver, Calgary, or Montreal, the
              rules governing your lease are set by your province or territory — not the federal
              government. In the United States, each state has its own landlord-tenant statutes. Use
              the guides below to understand the rules that apply where you live.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Why Jurisdiction Matters</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Two renters living on the same street in two different provinces can have completely
                  different rights. Ontario tenants benefit from strong LTB protections and above-guideline
                  rent increase hearings. Alberta tenants face no provincial rent control at all.
                  Quebec renters deal with a unique Civil Code framework that even governs the standard
                  lease form. Before signing or disputing a lease, you must know which law applies.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  LeasePlain's AI analysis is designed to flag clauses against the specific rules of
                  your province. Select your location below to find guides, key protections, and city-level
                  detail for your rental market.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-5">
                  <MapPin className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  <h2 className="text-2xl font-bold text-slate-900">Canada</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {canadaProvinces.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {p.name}
                        </h3>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors mt-0.5" aria-hidden="true" />
                      </div>
                      <p className="text-xs text-blue-600 font-medium mb-1">{p.law}</p>
                      <p className="text-sm text-slate-600">{p.highlight}</p>
                    </Link>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  More provinces coming soon — New Brunswick, Nova Scotia, Manitoba, Saskatchewan, and others.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Globe className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  <h2 className="text-2xl font-bold text-slate-900">United States</h2>
                  <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full border border-amber-200">
                    Coming Soon
                  </span>
                </div>
                <p className="text-slate-700 leading-relaxed mb-5">
                  LeasePlain is expanding to the United States. US tenancy law is governed at the state
                  level, with some cities like New York City and Los Angeles having additional local
                  regulations. Our AI lease analysis will be calibrated to each state's specific rules.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {usStates.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {s.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          {s.comingSoon && (
                            <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-1.5 py-0.5 rounded-full border border-amber-200">
                              Soon
                            </span>
                          )}
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors mt-0.5" aria-hidden="true" />
                        </div>
                      </div>
                      <p className="text-xs text-blue-600 font-medium mb-1">{s.law}</p>
                      <p className="text-sm text-slate-600">{s.highlight}</p>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "Does LeasePlain cover my city or province?", a: "LeasePlain covers all Canadian provinces and major Canadian cities, as well as key US states and cities. Our AI analyzer works anywhere — jurisdiction-specific content guides are available for the most-requested locations." },
                  { q: "What Canadian provinces does LeasePlain support?", a: "LeasePlain has specific guides for Ontario, British Columbia, Alberta, Quebec, Manitoba, Saskatchewan, Nova Scotia, New Brunswick, Newfoundland and Labrador, and Prince Edward Island — covering all major Canadian rental markets." },
                  { q: "Is tenancy law the same across Canada?", a: "No. Each province has its own Residential Tenancies Act with different rules for deposits, rent increases, notice periods, and dispute resolution. LeasePlain's location guides explain how the rules differ province by province." },
                  { q: "Can I use LeasePlain if I'm in a US city not listed?", a: "Yes. While LeasePlain has detailed guides for major US states and cities, the AI lease analyzer works for any residential lease — it is not restricted to locations with a dedicated guide page." },
                  { q: "Why does location matter for lease analysis?", a: "Provincial and state laws override lease clauses. A clause that is perfectly legal in one jurisdiction may be void in another. Knowing your location allows LeasePlain's AI to flag violations of your specific local rules." }
                ]} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Analyze My Lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and LeasePlain's AI will flag clauses against the laws of your
                  province. Know your rights before you sign.
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
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Browse by Province</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Ontario", href: "/canada/ontario" },
                    { label: "British Columbia", href: "/canada/british-columbia" },
                    { label: "Alberta", href: "/canada/alberta" },
                    { label: "Quebec", href: "/canada/quebec" },
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
  );
}
