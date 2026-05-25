import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, ChevronRight, Upload, CheckCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Landlord Lease Checklist: What Every Residential Lease Must Include | LeasePlain",
  description:
    "A complete checklist for landlords creating or reviewing a residential lease — clauses, disclosures, and legal requirements you can't afford to miss in Canada.",
  alternates: { canonical: "https://leaseplain.com/resources/landlord-lease-checklist" },
  openGraph: {
    title: "Landlord Lease Checklist: What Every Residential Lease Must Include | LeasePlain",
    description: "A complete checklist for landlords creating or reviewing a residential lease — clauses, disclosures, and legal requirements you can't afford to miss in Canada.",
    url: "https://leaseplain.com/resources/landlord-lease-checklist",
    type: "website",
  },
  keywords: ["landlord lease checklist", "residential lease requirements Canada", "lease drafting checklist", "what to include in a lease", "landlord legal requirements"],
};

const sections = [
  {
    heading: "Parties and Property",
    items: [
      "Full legal names of all landlords and tenants",
      "Complete address of the rental unit (including unit number)",
      "Parking space and storage locker identifiers, if applicable",
      "Who is permitted to occupy the unit",
    ],
  },
  {
    heading: "Term and Rent",
    items: [
      "Lease start and end date (or month-to-month designation)",
      "Monthly rent amount, in writing",
      "Rent due date and accepted payment methods",
      "Whether utilities are included and which ones",
      "Last month's rent deposit amount and date collected",
    ],
  },
  {
    heading: "Rules and Restrictions",
    items: [
      "Pet policy (allowed, restricted, or prohibited)",
      "Smoking policy",
      "Guest and occupancy limits",
      "Subletting and assignment provisions",
      "Rules for noise, common areas, and amenity use",
    ],
  },
  {
    heading: "Maintenance and Repairs",
    items: [
      "How tenants report maintenance issues",
      "Landlord's obligation to maintain the unit in good repair",
      "Tenant responsibilities for minor maintenance (e.g., changing light bulbs)",
      "Process for emergency repairs",
    ],
  },
  {
    heading: "Entry and Privacy",
    items: [
      "Required notice period before landlord entry (min. 24 hours in Ontario)",
      "Circumstances allowing entry without notice (emergencies)",
    ],
  },
  {
    heading: "Legal Compliance",
    items: [
      "Use of the provincial standard lease form where required (e.g., Ontario)",
      "No clauses that waive tenant rights under the Residential Tenancies Act",
      "Disclosure of known issues (e.g., mold, pest history)",
      "Fire safety information and smoke detector disclosure",
    ],
  },
];

export default function LandlordLeaseChecklistPage() {
  return (
    <>
      <ArticleSchema
        headline="Landlord Lease Checklist: What Every Residential Lease Must Include"
        description="A complete checklist for landlords creating or reviewing a residential lease — clauses, disclosures, and legal requirements you can't afford to miss in Canada."
        url="https://leaseplain.com/resources/landlord-lease-checklist"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["landlord lease checklist", "residential lease requirements Canada", "lease drafting checklist", "what to include in a lease", "landlord legal requirements"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Resources", href: "https://leaseplain.com/resources" },
        { name: "Landlord Guides", href: "https://leaseplain.com/resources/landlord-guides" },
        { name: "Landlord Lease Checklist", href: "https://leaseplain.com/resources/landlord-lease-checklist" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/resources/landlord-lease-checklist",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".speakable-summary"]
            }
          }).replace(/</g, "\u003c")
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
              <Link href="/resources/landlord-guides" className="hover:underline">Landlord Guides</Link>
              <ChevronRight className="w-3 h-3" />
              <span>Landlord Lease Checklist</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Briefcase className="w-3.5 h-3.5" />
              Landlord Guide
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight max-w-3xl">
              Landlord Lease Checklist: What Every Residential Lease Must Include
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              A well-drafted lease protects both you and your tenant. Use this checklist to confirm your
              residential lease covers everything it needs to — before handing it over.
            </p>
          </div>
        </section>

        {/* Checklist */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-bold text-slate-900 mb-4">{section.heading}</h2>
                <div className="flex flex-col gap-2">
                  {section.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-slate-50 rounded-xl border border-slate-100 p-4">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
              <h3 className="font-bold text-amber-900 mb-2">Ontario Landlords: Use the Standard Lease</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                Since April 30, 2018, Ontario landlords must use the provincially approved Standard Lease
                Form for most residential tenancies. Using a different form — or omitting required disclosures
                — can give tenants the right to withhold rent until a compliant lease is provided.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">Review your lease now</h2>
              <p className="text-blue-100 leading-relaxed max-w-xl">
                Upload any residential lease and get a plain-English analysis of every clause — tenant or landlord.
              </p>
            </div>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap flex-shrink-0"
            >
              <Upload className="w-4 h-4" />
              Analyze a Lease
            </Link>
          </div>
        </section>
      

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "What should a landlord include in a lease?", a: "A complete lease should include: both parties' names and contact info, property address and unit description, lease term (start and end dates), rent amount and due date, deposit amount and terms, entry notice procedures, maintenance responsibility, and any special rules." },
                  { q: "Should landlords use standard lease forms?", a: "Ontario and Quebec require standard lease forms by law. In other provinces, standard forms are recommended but not mandatory. Using a standard form reduces errors and ensures all legally required disclosures are included." },
                  { q: "How should a landlord document the condition of a unit?", a: "Conduct a written move-in inspection with the tenant before they take possession. Both parties sign the inspection report. Take dated photos or video. Store these records throughout the tenancy and use them to assess move-out condition." },
                  { q: "Can a landlord require tenants to have renters insurance?", a: "Most provinces do not require landlords to mandate renters insurance by law, but landlords can make it a lease condition. BC and Ontario allow lease clauses requiring tenants to carry liability insurance. It is generally good practice for both parties." },
                  { q: "What deposit rules should landlords follow?", a: "Collect only the permitted type and amount (e.g., last month's rent in Ontario; max half month in BC; max one month in Alberta). Provide a receipt. Pay interest where required. Return within the provincial deadline with an itemized statement of any deductions." }
                ]} />
              </div>
      </main>
      <Footer />
    </div>
    </>
  );
}
