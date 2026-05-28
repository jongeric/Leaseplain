import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Condo Lease Guide: What's Different About Renting a Condo | LeasePlain",
  description:
    "Renting a condo is different from renting in a purpose-built building. Learn about condo rules, investor landlords, your rights if the unit is sold, and what to watch for in a condo lease.",
  alternates: { canonical: "https://leaseplain.com/resources/condo-lease-guide" },
  openGraph: {
    title: "Condo Lease Guide: What's Different About Renting a Condo | LeasePlain",
    description: "Renting a condo is different from renting in a purpose-built building. Learn about condo rules, investor landlords, your rights if the unit is sold, and what to watch for in a condo lease.",
    url: "https://leaseplain.com/resources/condo-lease-guide",
    type: "website",
  },
  keywords: ["condo lease guide", "renting a condo", "condo tenant rights", "investor landlord lease", "condo corporation rules"],
};

export default function CondoLeaseGuidePage() {
  return (
    <>
      <ArticleSchema
        headline="Condo Lease Guide: What's Different About Renting a Condo"
        description="Renting a condo is different from renting in a purpose-built building. Learn about condo rules, investor landlords, your rights if the unit is sold, and what to watch for in a condo lease."
        url="https://leaseplain.com/resources/condo-lease-guide"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["condo lease guide", "renting a condo", "condo tenant rights", "investor landlord lease", "condo corporation rules"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Resources", href: "https://leaseplain.com/resources" },
        { name: "Tenant Guides", href: "https://leaseplain.com/resources/tenant-guides" },
        { name: "Condo Lease Guide", href: "https://leaseplain.com/resources/condo-lease-guide" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/resources/condo-lease-guide",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".speakable-summary"]
            }
          }).replace(/</g, "\u003c")
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How is renting a condo different from renting an apartment?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Condo rentals involve both your lease with the landlord-owner and the condo corporation's rules. Condo rules about noise, amenity use, pets, and common areas are binding on tenants and can be stricter than provincial tenancy law.\"}}, {\"@type\": \"Question\", \"name\": \"Can a condo corporation evict a tenant?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. Only the landlord can evict a tenant through the provincial tenancy process. However, condo corporations can take action against landlords for tenant rule violations, which may prompt the landlord to pursue eviction.\"}}, {\"@type\": \"Question\", \"name\": \"What condo documents should I ask for before signing a condo lease?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Ask for the condo's declaration, by-laws, and rules (sometimes called the Status Certificate package). These documents outline restrictions on pets, rentals, noise, parking, and use of amenities that will apply to you as a tenant.\"}}, {\"@type\": \"Question\", \"name\": \"Are condo amenities available to tenants?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Usually yes, but access may be restricted or require advance booking. Check the condo rules for guest suite policies, gym hours, pool access, and move-in/out procedures. Some buildings charge separate amenity fees for tenants.\"}}, {\"@type\": \"Question\", \"name\": \"What happens if a condo is converted to a different use during my tenancy?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Landlords who want to convert or demolish a condo must follow provincial tenancy law, including providing proper notice and, in some provinces, compensation. Tenants cannot be forced out without following the legal process.\"}}]}"
        }}
      />
      <div className="flex flex-col min-h-full">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/resources" className="hover:underline">Resources</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/resources/tenant-guides" className="hover:underline">Tenant Guides</Link>
              <ChevronRight className="w-3 h-3" />
              <span>Condo Lease Guide</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Home className="w-3.5 h-3.5" />
              Tenant Guide
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight max-w-3xl">
              Condo Lease Guide: What&apos;s Different About Renting a Condo
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Condo rentals look like any other tenancy — but they come with a layer of complexity that
              can catch renters off guard. Here&apos;s what you need to know before signing a condo lease.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto prose-slate">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">How Condo Rentals Work</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              When you rent a condo, you&apos;re renting from an individual investor-landlord, not a
              property management company or building owner. That landlord also has to follow the rules
              of the condo corporation. This creates a dual-layer of obligations that affects your
              day-to-day experience as a tenant.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-6 mt-10">Key Differences from Apartment Rentals</h2>
            <div className="flex flex-col gap-4 mb-10">
              {[
                {
                  title: "Condo corporation rules apply to you",
                  desc: "The condo corporation has its own rules (sometimes called Rules and Regulations or a Declaration) about noise, guests, move-in procedures, amenity bookings, and more. As a tenant, you must follow these rules — and violating them can lead to complaints against your landlord, which may affect your tenancy.",
                },
                {
                  title: "Amenity access varies",
                  desc: "Some condo buildings extend amenity access (gym, pool, rooftop) to tenants. Others don't. Confirm what's included in your lease before signing.",
                },
                {
                  title: "Your landlord can sell the unit",
                  desc: "If your landlord decides to sell the condo while you're living there, your rights depend on local law. In Ontario, tenants generally have the right to stay until the lease ends. In some US states, you may receive notice to vacate if the new owner intends to occupy the unit.",
                },
                {
                  title: "Insurance responsibilities",
                  desc: "Condo leases often require tenants to carry renters' insurance. The condo building has its own insurance, but it typically only covers the building structure — not your belongings or liability.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 bg-slate-50 rounded-xl border border-slate-100 p-5">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">Red Flags in Condo Leases</h2>
            <div className="flex flex-col gap-4 mb-10">
              {[
                "Lease doesn't include a copy of condo corporation rules",
                "Lease tries to waive your rights under local landlord-tenant law",
                "No clarity on who handles repairs — condo corp vs. individual landlord",
                "Landlord cannot provide proof they're in good standing with the condo corporation",
                "Amenities mentioned verbally but not written into the lease",
              ].map((flag) => (
                <div key={flag} className="flex items-start gap-3 bg-red-50 rounded-xl border border-red-100 p-4">
                  <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">{flag}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Before You Sign a Condo Lease</h2>
            <ul className="flex flex-col gap-2 mb-10">
              {[
                "Request a copy of the condo corporation's rules and bylaws",
                "Confirm which amenities you have access to, in writing",
                "Ask whether the unit is in good standing (no outstanding fees or violations)",
                "Get renters' insurance before move-in day",
                "Clarify the repair escalation process: who do you call, and for what?",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">Signing a condo lease?</h2>
              <p className="text-blue-100 leading-relaxed max-w-xl">
                Upload your condo lease and get a plain-English analysis of every clause in seconds.
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
                <FAQAccordion items={[
                  { q: "How is renting a condo different from renting an apartment?", a: "Condo rentals involve both your lease with the landlord-owner and the condo corporation's rules. Condo rules about noise, amenity use, pets, and common areas are binding on tenants and can be stricter than provincial tenancy law." },
                  { q: "Can a condo corporation evict a tenant?", a: "No. Only the landlord can evict a tenant through the provincial tenancy process. However, condo corporations can take action against landlords for tenant rule violations, which may prompt the landlord to pursue eviction." },
                  { q: "What condo documents should I ask for before signing a condo lease?", a: "Ask for the condo's declaration, by-laws, and rules (sometimes called the Status Certificate package). These documents outline restrictions on pets, rentals, noise, parking, and use of amenities that will apply to you as a tenant." },
                  { q: "Are condo amenities available to tenants?", a: "Usually yes, but access may be restricted or require advance booking. Check the condo rules for guest suite policies, gym hours, pool access, and move-in/out procedures. Some buildings charge separate amenity fees for tenants." },
                  { q: "What happens if a condo is converted to a different use during my tenancy?", a: "Landlords who want to convert or demolish a condo must follow provincial tenancy law, including providing proper notice and, in some provinces, compensation. Tenants cannot be forced out without following the legal process." }
                ]} />
              </div>
      </main>
      <Footer />
    </div>
    </>
  );
}
