import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, ChevronRight, Upload, Clock, FileText } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Agreement Explained: Every Section Decoded | LeasePlain",
  description:
    "A plain-English explanation of every standard section in a residential lease agreement — what each clause means, and what to watch for.",
  alternates: { canonical: "https://leaseplain.com/resources/lease-agreement-explained" },
  openGraph: {
    title: "Lease Agreement Explained: Every Section Decoded | LeasePlain",
    description: "A plain-English explanation of every standard section in a residential lease agreement — what each clause means, and what to watch for.",
    url: "https://leaseplain.com/resources/lease-agreement-explained",
  },
  keywords: ["lease agreement explained", "lease sections decoded", "residential lease clauses", "lease terms plain English", "understanding a lease"],
};

const sections = [
  {
    section: "Parties to the Agreement",
    legalTerm: "Lessor / Lessee",
    plainEnglish: "This section identifies who the landlord is (the lessor) and who the tenant is (the lessee). Both parties must be correctly named. In Ontario, the standard lease also requires the landlord's address for service of notice.",
    watch: "Verify your full legal name and the landlord's full name. A corporation renting property should have the corporation's legal name, not just the property manager's name.",
  },
  {
    section: "Premises / Rental Unit",
    legalTerm: "Demised Premises",
    plainEnglish: "Describes the exact rental unit — the address, unit number, and sometimes a list of what is included (parking space, storage locker, appliances). This is your legal description of what you are renting.",
    watch: "Make sure every amenity included in your rental is listed here. If you negotiated parking or a storage locker, it should be explicitly included.",
  },
  {
    section: "Term of Tenancy",
    legalTerm: "Lease Term / Tenancy Period",
    plainEnglish: "Specifies whether the lease is fixed-term (e.g., one year) or month-to-month. For fixed-term leases, states the start and end dates. Most Ontario leases automatically become month-to-month after the initial term, unless either party gives notice.",
    watch: "Note the exact end date and understand that in Ontario, failing to give proper notice before the end of a fixed term means the tenancy continues — it doesn't end automatically.",
  },
  {
    section: "Rent",
    legalTerm: "Consideration / Rental Amount",
    plainEnglish: "States the monthly rent amount, the day it's due (usually the 1st), the payment method accepted, and whether any utilities or services are included. May also specify the NSF fee for returned payments.",
    watch: "Confirm the total monthly amount matches what you agreed verbally. Check that included utilities are listed explicitly, not implied.",
  },
  {
    section: "Security Deposit / Last Month's Rent",
    legalTerm: "Rental Deposit",
    plainEnglish: "In Ontario, this is legally limited to the last month's rent — not a damage deposit. The deposit must earn interest annually at the provincial guideline rate and be applied to your final month of tenancy.",
    watch: "Any deposit above one month's rent is illegal in Ontario. A 'damage deposit' separate from last month's rent is also illegal.",
  },
  {
    section: "Rules and Restrictions",
    legalTerm: "Covenants / Restrictions",
    plainEnglish: "The rules governing how you can use the unit: pets, guests, smoking, noise, alterations, parking, garbage disposal, and more. This section defines your day-to-day obligations as a tenant.",
    watch: "Read every rule carefully. Vague rules ('no excessive noise') give landlords wide discretion. Pet restrictions may be enforceable even if your landlord said verbally that pets were fine.",
  },
  {
    section: "Maintenance and Repairs",
    legalTerm: "Repair Obligations / Property Standards",
    plainEnglish: "Outlines who is responsible for maintaining the unit. In Ontario, the landlord is legally required to maintain the unit in good repair — this cannot be contracted away. You are responsible for damage you cause.",
    watch: "Watch for clauses that try to transfer landlord maintenance duties to you — such as making tenants responsible for appliance repair or plumbing maintenance.",
  },
  {
    section: "Entry by Landlord",
    legalTerm: "Right of Entry / Access",
    plainEnglish: "Sets out when and how the landlord may enter the unit. In Ontario, the law requires at least 24 hours written notice, entry between 8am and 8pm, and entry for specific permitted purposes only.",
    watch: "Any clause permitting entry without notice (except in emergencies) conflicts with Ontario law. Such clauses are void.",
  },
  {
    section: "Termination",
    legalTerm: "Notice to Terminate / Surrender",
    plainEnglish: "Specifies how either party can end the tenancy — including notice periods and the method of giving notice. For month-to-month tenancies in Ontario, tenants must give 60 days notice.",
    watch: "Watch for penalty clauses that impose large fees for leaving early. The landlord's remedy for early departure is to seek compensation through the LTB — not to automatically pocket a large flat fee.",
  },
  {
    section: "Additional Terms",
    legalTerm: "Schedule / Rider / Addendum",
    plainEnglish: "Extra clauses added by the landlord beyond the standard lease. This is the most variable section and where problematic clauses most commonly appear.",
    watch: "Read every additional term carefully. Clauses that conflict with the Ontario RTA are void — but you need to know they're there. Ask your landlord to explain any clause you don't understand before signing.",
  },
];

export default function LeaseAgreementExplainedPage() {
  return (
    <>
      <ArticleSchema
        headline="Lease Agreement Explained: Every Section Decoded"
        description="A plain-English explanation of every standard section in a residential lease agreement — what each clause means, and what to watch for."
        url="https://leaseplain.com/resources/lease-agreement-explained"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["lease agreement explained", "lease sections decoded", "residential lease clauses", "lease terms plain English", "understanding a lease"]}
      />
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/resources" className="hover:underline">Resources</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Lease Agreement Explained</span>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100">
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                Guide
              </div>
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <Clock className="w-3 h-3" aria-hidden="true" />
                12 min read
              </span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Agreement Explained: Every Section Decoded
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              What does your lease actually say — and what does it mean? Here's every standard
              section of a residential lease, translated from legalese into plain English.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              {sections.map((s) => (
                <div key={s.section} className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FileText className="w-4 h-4 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{s.section}</p>
                      <p className="text-xs text-slate-400">Also called: {s.legalTerm}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">{s.plainEnglish}</p>
                  <div className="bg-amber-50 border border-amber-100 rounded-lg p-3">
                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">What to watch for</p>
                    <p className="text-xs text-amber-800 leading-relaxed">{s.watch}</p>
                  </div>
                </div>
              ))}
            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "What is a lease agreement?", a: "A lease agreement is a legally binding contract between a landlord and tenant that sets out the terms of renting a property. It specifies rent, duration, deposit, and the rights and responsibilities of both parties." },
                  { q: "What is the difference between a lease and a rental agreement?", a: "A lease is typically a fixed-term contract (e.g., one year), while a rental agreement is month-to-month. Both are legally binding, but a lease provides more certainty for both parties about the tenancy duration." },
                  { q: "Is a verbal lease agreement valid in Canada?", a: "Yes, verbal leases are technically valid in most Canadian provinces, but they are very difficult to enforce because there is no written record. A written lease is strongly recommended to protect both parties." },
                  { q: "What happens if I don't understand something in my lease?", a: "Ask your landlord to explain it in writing before you sign. You can also use LeasePlain's AI to get a plain-English explanation, or consult a tenant legal clinic. Never sign a document you don't understand." },
                  { q: "Can I change the terms of a standard lease?", a: "Yes. Even if you are given a standard provincial lease form, you can negotiate to add or modify clauses before signing. Any modifications should be written on the lease or in a separate addendum, signed by both parties." }
                ]} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Get your lease explained automatically</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and our AI will decode every section of your specific
                  agreement — not a generic template.
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
                    { label: "How to Read a Lease", href: "/resources/how-to-read-a-lease" },
                    { label: "Lease Red Flags", href: "/resources/lease-red-flags" },
                    { label: "What to Check Before Signing", href: "/resources/check-before-signing-lease" },
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
