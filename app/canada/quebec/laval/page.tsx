import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help in Laval, Quebec | Tenant Rights & Bail in Laval | LeasePlain",
  description:
    "Laval renters: understand your rights under Quebec's lease law. Learn about the TAL, rent rules, lease renewals, and how to understand your bail in Laval, Quebec.",
  alternates: { canonical: "https://leaseplain.com/canada/quebec/laval" },
  openGraph: {
    title: "Lease Help in Laval, Quebec | Tenant Rights & Bail in Laval | LeasePlain",
    description: "Laval renters: understand your rights under Quebec's lease law. Learn about the TAL, rent rules, lease renewals, and how to understand your bail in Laval, Quebec.",
    url: "https://leaseplain.com/canada/quebec/laval",
    type: "website",
  },
};

const lavalRights = [
  "Quebec's Civil Code and Act Respecting the Rental of Immovables apply to all Laval residential rentals.",
  "Laval tenants have the right to lease renewal unless the landlord has a valid legal reason (repossession, major work, subdivision).",
  "Rent increase proposals must be delivered in writing at least 3 months before lease renewal using the TAL's calculation method.",
  "Tenants who receive a renewal notice can refuse the proposed rent increase by responding in writing within 1 month.",
  "The standard Quebec bail (lease form) is mandatory for most residential rentals in Laval.",
  "Laval tenants can file complaints with the Tribunal administratif du logement (TAL) in Montreal or online.",
];

const lavalLeaseIssues = [
  "Condo conversions — some Laval landlords attempt to convert rental buildings to condominiums; Quebec law provides strong protections against eviction for condo conversion.",
  "Lease subletting to relatives — Quebec law allows assignment of a lease to family members in some circumstances (e.g., aging parents or adult children); Laval landlords sometimes incorrectly refuse this.",
  "Noise and neighbour issues — Laval's dense apartment areas generate frequent noise complaints; your lease cannot make you responsible for noise caused by other tenants or building systems.",
  "Inclusion of utilities — many Laval leases include heat and hot water; clarify what is included and ensure the lease correctly reflects the arrangement.",
  "Lease in incorrect language — while French is standard in Laval, English-speaking tenants have the right to sign a lease in English if they request it.",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can my Laval landlord refuse to renew my lease?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most cases, no. Quebec law gives Laval tenants the right to have their lease renewed at the end of each term. A landlord can only refuse renewal for limited reasons: repossessing the unit for personal or family use, carrying out major renovations that require the unit to be vacant, or subdividing the property. The landlord must follow strict notice requirements and timelines or lose the right to refuse renewal.",
      },
    },
    {
      "@type": "Question",
      name: "How does rent increase work in Laval, Quebec?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Laval, landlords must send tenants a written notice of any proposed rent increase between 3 and 6 months before the end of a yearly lease. The notice must follow the TAL's prescribed format and calculation method. You have 1 month to respond — you can accept, refuse, or propose different terms. If you refuse and the parties cannot agree, the TAL determines the fair rent.",
      },
    },
    {
      "@type": "Question",
      name: "What is the standard Quebec bail form?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard Quebec bail (lease form) is a mandatory government form produced by the Tribunal administratif du logement (TAL). Most residential tenancies in Quebec, including Laval, must use this form. It covers rent, lease term, services included, and other key terms. The form is available in French and English at tal.gouv.qc.ca. Any addendum that reduces your rights under Quebec law is invalid.",
      },
    },
    {
      "@type": "Question",
      name: "How do I file a dispute with the TAL from Laval?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Laval tenants file TAL applications online at tal.gouv.qc.ca or in person at the TAL's Montreal office, which serves the Laval region. Common applications include contesting a rent increase, reporting maintenance failures, and contesting an eviction notice. There is a small filing fee for most applications. The TAL offers service in both French and English.",
      },
    },
  ],
};

export default function LavalPage() {
  return (
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Canada", href: "https://leaseplain.com/canada" },
        { name: "Quebec", href: "https://leaseplain.com/canada/quebec" },
        { name: "Laval", href: "https://leaseplain.com/canada/quebec/laval" },
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
              <span>Laval</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Laval, Quebec
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in Laval, Quebec | Tenant Rights &amp; Bail
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Laval is Quebec's third-largest city and a major suburban rental market just north of
              Montreal. Like all Quebec renters, Laval tenants are protected by the Civil Code of
              Quebec — a system with stronger renewal rights and no permitted security deposits,
              unlike most of Canada.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Laval's Rental Market Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Laval has grown from a primarily owner-occupied suburb into a dense, diverse city
                  with a large and varied rental stock. Connected to Montreal's metro system, Laval
                  attracts families who find Montreal rents unaffordable, as well as recent immigrants
                  from Haiti, North Africa, and Southeast Asia. Collège Montmorency and the Université
                  de Montréal Laval campus add a student rental population to the mix.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Laval rents are generally lower than central Montreal, but have risen sharply in
                  recent years. The same Quebec tenant protections that apply in Montreal apply in
                  Laval: no security deposits, strong renewal rights, TAL dispute access, and the
                  mandatory standard bail form for nearly all residential tenancies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as a Laval Renter</h2>
                <ul className="flex flex-col gap-3">
                  {lavalRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Quebec Civil Code vs. Common-Law Provinces</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Laval — like all of Quebec — operates under the Civil Code of Quebec, not the
                  common-law residential tenancy acts used in Ontario, BC, Alberta, and other
                  provinces. Key differences: Quebec prohibits all security deposits (except for
                  keys or access devices), leases renew automatically by default, and the TAL uses
                  a fixed calculation methodology for rent increases rather than a political guideline.
                  If you have rented in another province, be aware that many rules you know do not
                  apply in Laval.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in Laval</h2>
                <ul className="flex flex-col gap-3">
                  {lavalLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Resources for Laval Tenants</h2>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Tribunal administratif du logement (TAL)</strong> — file applications at tal.gouv.qc.ca or at the Montreal TAL office</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>RCLALQ (Regroupement des comités logement et associations de locataires du Québec)</strong> — tenant rights network across Quebec</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Collège Montmorency Student Services</strong> — housing support and referrals for Montmorency students</span>
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
                <h3 className="font-bold text-lg mb-2">Review your Laval lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your bail and our AI will check for deviations from the standard Quebec
                  lease form and flag clauses that conflict with Quebec tenant law.
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
