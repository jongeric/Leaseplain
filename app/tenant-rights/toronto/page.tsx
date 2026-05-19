import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ShieldCheck, CheckCircle, ChevronRight, Upload, Phone } from "lucide-react";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tenant Rights in Toronto – Local Resources & Housing Help | LeasePlain",
  description:
    "Tenant rights guide for Toronto renters. Ontario RTA applies city-wide, plus local resources, legal clinics, and housing organizations specific to Toronto.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/toronto" },
  openGraph: {
    title: "Tenant Rights in Toronto – Local Resources & Housing Help | LeasePlain",
    description: "Tenant rights guide for Toronto renters. Ontario RTA applies city-wide, plus local resources, legal clinics, and housing organizations specific to Toronto.",
    url: "https://leaseplain.com/tenant-rights/toronto",
  },
  keywords: ["tenant rights Toronto", "Toronto housing help", "Toronto tenant legal clinic", "renting in Toronto", "Ontario RTA Toronto"],
};

const localResources = [
  {
    name: "Landlord and Tenant Board (LTB)",
    description: "The primary tribunal for resolving rental disputes in Ontario. Toronto cases are typically heard at 47 Sheppard Ave E or online via videoconference.",
    contact: "1-888-332-3234",
    website: "tribunalsontario.ca/ltb",
  },
  {
    name: "Tenant Duty Counsel",
    description: "Free legal representation at LTB hearings for low-income tenants, provided by Legal Aid Ontario. Available at most in-person hearing locations.",
    contact: "1-800-668-8258",
    website: "legalaid.on.ca",
  },
  {
    name: "Parkdale Community Legal Services",
    description: "Free legal services for low-income residents in Toronto's west end, with a strong focus on tenant rights.",
    contact: "(416) 531-2411",
    website: "parkdalelegal.org",
  },
  {
    name: "Toronto Community Housing",
    description: "Resources for tenants in social housing; TCH tenants have some different rights and procedures under the RTA.",
    contact: "416-981-5500",
    website: "torontohousing.ca",
  },
  {
    name: "Centre for Equality Rights in Accommodation (CERA)",
    description: "Focuses on discrimination in housing. If you believe a landlord refused you based on a protected ground, CERA can advise.",
    contact: "(416) 944-0087",
    website: "equalityrights.org/cera",
  },
];

const torontoContext = [
  "Toronto is one of the most competitive rental markets in Canada — vacancies are low and rents are high.",
  "Despite market pressures, the Ontario RTA applies equally to all Toronto residential rentals.",
  "Toronto's Rent Bank program can provide emergency rent assistance to qualifying tenants.",
  "The City of Toronto operates a by-law enforcement division that handles property standards complaints.",
  "Many Toronto landlords are large corporations — tenants have the same rights regardless of who the landlord is.",
];

const commonTorontoIssues = [
  { issue: "Above-guideline rent increases (AGIs)", note: "More common in Toronto's large apartment buildings. You have the right to contest at the LTB." },
  { issue: "N13 evictions (renovation, demolition)", note: "Renoviction is increasingly common in Toronto. The RTA provides right of first refusal to return after renovation." },
  { issue: "Illegal rent above legal maximum", note: "If you think your rent was raised illegally, file a T1 application with the LTB." },
  { issue: "Property standards violations", note: "Contact the City's 311 line to report infestations, heat failures, and unsafe conditions." },
];

export default function TorontoTenantRightsPage() {
  return (
    <>
      <ArticleSchema
        headline="Tenant Rights in Toronto – Local Resources & Housing Help"
        description="Tenant rights guide for Toronto renters. Ontario RTA applies city-wide, plus local resources, legal clinics, and housing organizations specific to Toronto."
        url="https://leaseplain.com/tenant-rights/toronto"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["tenant rights Toronto", "Toronto housing help", "Toronto tenant legal clinic", "renting in Toronto", "Ontario RTA Toronto"]}
      />
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/tenant-rights" className="hover:underline">Tenant Rights</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Toronto</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Toronto Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Tenant Rights in Toronto: Local Resources & What You Need to Know
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Toronto renters are protected by the same Ontario <em>Residential Tenancies Act</em>{" "}
              as all Ontario tenants — but the city also has local organizations, legal clinics,
              and issues unique to its rental market.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Renting in Toronto</h2>
                <ul className="flex flex-col gap-3">
                  {torontoContext.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">Common Issues for Toronto Tenants</h2>
                <div className="flex flex-col gap-4">
                  {commonTorontoIssues.map((item) => (
                    <div key={item.issue} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                      <p className="font-semibold text-slate-900 text-sm mb-1">{item.issue}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">Toronto Tenant Resources</h2>
                <div className="flex flex-col gap-5">
                  {localResources.map((resource) => (
                    <div key={resource.name} className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-semibold text-slate-900 text-sm">{resource.name}</h3>
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <Phone className="w-3 h-3" aria-hidden="true" />
                          {resource.contact}
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-1.5">{resource.description}</p>
                      <span className="text-xs text-blue-600">{resource.website}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                  Renoviction: A Toronto-Specific Concern
                </h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  "Renoviction" — where landlords evict tenants under the guise of major renovations
                  to re-rent at higher rates — is increasingly common in Toronto. Under the RTA, if
                  you receive an N13 (eviction for demolition, repairs, or conversion), you have the
                  right to return to the unit at the same rent after the work is done. You must give
                  written notice to your landlord that you want to exercise this right.
                </p>
              </div>
            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your Toronto lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI flags lease clauses that violate Ontario tenant protections — relevant
                  for any rental in Toronto.
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
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Guides</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
                    { label: "Rent Increase Rules", href: "/tenant-rights/rent-increase-rules" },
                    { label: "Breaking a Lease", href: "/tenant-rights/breaking-a-lease" },
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
