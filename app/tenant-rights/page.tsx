import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, ChevronRight, MapPin, BookOpen } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tenant Rights in Canada – Know Your Rights as a Renter | LeasePlain",
  description:
    "Learn your rights as a residential tenant in Canada. Guides for Ontario, Toronto, rent increase rules, breaking a lease, and landlord responsibilities.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights" },
  openGraph: {
    title: "Tenant Rights in Canada – Know Your Rights as a Renter | LeasePlain",
    description: "Learn your rights as a residential tenant in Canada. Guides for Ontario, Toronto, rent increase rules, breaking a lease, and landlord responsibilities.",
    url: "https://leaseplain.com/tenant-rights",
    type: "website",
  },
};

const guides = [
  {
    title: "Tenant Rights in Ontario",
    description: "A complete guide to your rights under the Residential Tenancies Act, 2006 — from signing to eviction.",
    href: "/tenant-rights/ontario",
    badge: "Most comprehensive",
  },
  {
    title: "Tenant Rights in Canada",
    description: "How Canadian tenancy law works province by province — deposits, rent control, notice periods, and dispute bodies.",
    href: "/tenant-rights/canada",
    badge: null,
  },
  {
    title: "Tenant Rights in British Columbia",
    description: "BC tenant rights under the Residential Tenancy Act — RTB disputes, deposit rules, and rent increase limits.",
    href: "/tenant-rights/british-columbia",
    badge: null,
  },
  {
    title: "Tenant Rights in Alberta",
    description: "Alberta tenant rights under the Residential Tenancies Act — RTDRS process, deposit rules, and notice periods.",
    href: "/tenant-rights/alberta",
    badge: null,
  },
  {
    title: "Tenant Rights in Quebec",
    description: "Quebec tenant rights under the Civil Code — the TAL tribunal, standard bail form, and rent increase rules.",
    href: "/tenant-rights/quebec",
    badge: null,
  },
  {
    title: "Tenant Rights in Toronto",
    description: "Toronto-specific resources, organizations, and how to navigate the LTB in Ontario's largest city.",
    href: "/tenant-rights/toronto",
    badge: null,
  },
  {
    title: "Tenant Rights in the United States",
    description: "Overview of US tenant rights by state — New York, California, Florida, and general federal protections.",
    href: "/tenant-rights/united-states",
    badge: null,
  },
  {
    title: "Rent Increase Rules",
    description: "How rent increases work in Ontario, the annual guideline, above-guideline increases, and your right to dispute.",
    href: "/tenant-rights/rent-increase-rules",
    badge: null,
  },
  {
    title: "Breaking a Lease",
    description: "When you can legally leave a tenancy early, what forms to use, and what the landlord can and can't do.",
    href: "/tenant-rights/breaking-a-lease",
    badge: null,
  },
  {
    title: "Landlord Responsibilities",
    description: "What your landlord is legally required to do — maintenance, entry notice, heat, pests, and more.",
    href: "/tenant-rights/landlord-responsibilities",
    badge: null,
  },
  {
    title: "Eviction Notices",
    description: "Types of eviction notices in Canada, what they mean, how to respond, and when they can be challenged.",
    href: "/tenant-rights/eviction-notices",
    badge: null,
  },
  {
    title: "Repairs & Maintenance Rights",
    description: "Your landlord's duty to maintain a habitable unit — what qualifies, how to request repairs, and your remedies.",
    href: "/tenant-rights/repairs-maintenance",
    badge: null,
  },
];

export default function TenantRightsIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://leaseplain.com/tenant-rights",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".speakable-summary"],
        },
      }) }} />
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              Tenant Rights Guides
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Know Your Rights as a Tenant
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Canadian tenants have strong legal protections — but only if you know about them.
              Our guides cover Ontario tenant rights in plain English, from signing a lease to
              resolving disputes with your landlord.
            </p>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-4">
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group flex items-start justify-between gap-4 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <BookOpen className="w-5 h-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {guide.title}
                        </h2>
                        {guide.badge && (
                          <span className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-full font-medium">
                            {guide.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">{guide.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 flex-shrink-0 mt-1 transition-colors" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-blue-600" aria-hidden="true" />
                <h3 className="font-semibold text-slate-900">Focused on Ontario</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our guides focus primarily on Ontario law — specifically the{" "}
                <em>Residential Tenancies Act, 2006</em> and the Landlord and Tenant Board (LTB).
                If you are renting in another province, the general principles apply but specific
                rules may differ.
              </p>
            </div>
            <div className="bg-blue-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">Check your lease for rights violations</h3>
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                Upload your lease and our AI will flag any clauses that may violate your tenant
                rights under Ontario law.
              </p>
              <Link
                href="/upload"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Analyze My Lease
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
