import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help in Quebec City | Tenant Rights & Bail in Quebec City | LeasePlain",
  description:
    "Quebec City renters: understand your rights under Quebec's lease law (bail). Learn about the TAL, rent increases, lease renewal rights, and how to understand your Quebec bail in plain English.",
  alternates: { canonical: "https://leaseplain.com/canada/quebec/quebec-city" },
};

const quebecCityRights = [
  "All residential rentals in Quebec City are governed by the Civil Code of Quebec and the Act Respecting the Rental of Immovables — not the Ontario RTA.",
  "Your lease (bail) must use Quebec's standard mandatory lease form and can be in French or English.",
  "You have the right to maintain your tenancy at renewal — a landlord in Quebec City cannot refuse renewal except for specific reasons (personal use, major work, subdivision).",
  "Rent increases must be disclosed in the mandatory renewal notice using the TAL's prescribed calculation method; tenants can refuse a proposed increase.",
  "The Tribunal administratif du logement (TAL) handles all disputes in Quebec City — applications are filed online or in person.",
  "Université Laval students have the same rights under Quebec law as all other tenants.",
];

const quebecCityLeaseIssues = [
  "French-language leases — most Quebec City leases are in French; all tenants have the right to a lease in French even if they prefer English, but English-language leases are also valid.",
  "Mandatory renewal process — Quebec City landlords must follow the exact process for renewal notices; an improperly served notice may give you the right to stay on existing terms.",
  "July 1 moving day — Quebec's traditional July 1 moving day creates extreme pressure on Quebec City renters; plan well in advance if your lease ends June 30.",
  "Heat and hot water inclusion — many Quebec City leases include heat (chauffage) and hot water in rent; ensure you understand exactly what is included before signing.",
  "Subletting rules — Quebec law allows subletting with landlord notice; the landlord can refuse only with a valid reason; the TAL resolves disputes.",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I rent in English in Quebec City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While most Quebec City leases are written in French, English-language leases are legally valid in Quebec. The standard mandatory bail form is available in both French and English from the TAL. All tenants have the right to request an English-language lease if they prefer, regardless of the landlord's language preference.",
      },
    },
    {
      "@type": "Question",
      name: "What is the July 1 moving day in Quebec?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "July 1 is Quebec's traditional moving day — the date when the vast majority of annual leases expire. In Quebec City, this creates a brief period of intense demand for moving trucks, rental units, and temporary housing. If your lease ends June 30, you should begin looking for a new unit no later than March or April and confirm your move logistics months in advance.",
      },
    },
    {
      "@type": "Question",
      name: "How does lease renewal work in Quebec City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Quebec City, leases renew automatically at the end of the term unless the landlord or tenant takes action. For a fixed-term lease (e.g., one year), the landlord must send a renewal notice 3 to 6 months before the end of the lease if they want to change terms (including rent). You have 1 month to accept, refuse, or propose different terms. If you do nothing, the lease renews on the same terms.",
      },
    },
    {
      "@type": "Question",
      name: "How do I file a complaint with the TAL from Quebec City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quebec City tenants can file complaints with the Tribunal administratif du logement (TAL) online at tal.gouv.qc.ca, by mail, or in person at the TAL's Quebec City office. The TAL handles disputes about rent increases, evictions, habitability, and other tenancy matters. Service is available in French and English.",
      },
    },
  ],
};

export default function QuebecCityPage() {
  return (
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Canada", href: "https://leaseplain.com/canada" },
        { name: "Quebec", href: "https://leaseplain.com/canada/quebec" },
        { name: "Quebec City", href: "https://leaseplain.com/canada/quebec/quebec-city" },
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
              <Link href="/canada/quebec" className="hover:underline">Quebec</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Quebec City</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Quebec City, Quebec
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in Quebec City | Tenant Rights &amp; Bail
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Quebec City operates under Quebec's Civil Code — a fundamentally different legal system
              from the rest of Canada. If you are renting in Quebec City, your lease (bail), your
              rights, and your dispute process are all governed by Quebec law, not the common-law
              tenancy acts used in other provinces.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Quebec City's Rental Market Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Quebec City is more stable than Montreal as a rental market — lower rents, lower
                  vacancy pressure, and a more settled tenant population anchored by provincial
                  government workers and Université Laval students. The Sainte-Foy area near Laval
                  and the historic Old Quebec neighbourhoods are the main student and tourist rental
                  zones, respectively.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  While rents have risen in recent years, Quebec City remains one of Canada's more
                  affordable major cities for renters. Quebec's tenant protections are among the
                  strongest in Canada: no security deposits are permitted, tenants have strong
                  renewal rights, and the TAL provides an accessible dispute process for all renters.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as a Quebec City Renter</h2>
                <ul className="flex flex-col gap-3">
                  {quebecCityRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">The TAL — Quebec City's Tenant Tribunal</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  The Tribunal administratif du logement (TAL) is the administrative tribunal that
                  handles all residential tenancy disputes in Quebec, including Quebec City. Tenants
                  can file applications online at tal.gouv.qc.ca or in person at the Quebec City
                  office. Common applications include refusing a rent increase, contesting an eviction,
                  and claims for poor maintenance. The TAL offers bilingual service and generally
                  schedules hearings within a few months of filing.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in Quebec City</h2>
                <ul className="flex flex-col gap-3">
                  {quebecCityLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Resources for Quebec City Tenants</h2>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Tribunal administratif du logement (TAL)</strong> — file applications at tal.gouv.qc.ca or in person in Quebec City</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Université Laval Centre d'aide aux étudiants</strong> — support and referrals for Laval students with housing issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>RCLALQ (Regroupement des comités logement)</strong> — tenant advocacy network across Quebec</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <div className="flex flex-col gap-6">
                  {faqSchema.mainEntity.map((faq) => (
                    <div key={faq.name}>
                      <h3 className="font-semibold text-slate-900 mb-2 text-base">{faq.name}</h3>
                      <p className="text-slate-700 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Review your Quebec City lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI checks your bail for deviations from Quebec's standard lease form and
                  flags clauses that conflict with Quebec tenant law.
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
                    { label: "Quebec Tenant Rights", href: "/canada/quebec" },
                    { label: "Montreal Lease Help", href: "/canada/quebec/montreal" },
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Footer />
    </div>
  );
}
