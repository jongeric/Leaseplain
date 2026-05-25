import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Ontario Standard Lease Guide: What Every Tenant Needs to Know | LeasePlain",
  description:
    "Ontario's mandatory standard lease form (Form 2229E) explained section by section — what each part means and what landlords cannot add or change.",
  alternates: { canonical: "https://leaseplain.com/resources/ontario-standard-lease-guide" },
  openGraph: {
    title: "Ontario Standard Lease Guide: What Every Tenant Needs to Know | LeasePlain",
    description: "Ontario's mandatory standard lease form (Form 2229E) explained section by section — what each part means and what landlords cannot add or change.",
    url: "https://leaseplain.com/resources/ontario-standard-lease-guide",
    type: "website",
  },
};

const sections = [
  {
    number: "Section 1",
    title: "Parties — Landlord and Tenant Information",
    content:
      "Identifies the full legal names of the landlord and each tenant who is a party to the lease. Every adult who will live in the unit and be legally responsible for rent should be listed as a tenant. The landlord's full name and contact information (or the property manager's details) are required here.",
    tip: "Verify the landlord's identity before signing. Ask for government-issued ID and proof they own or manage the property.",
  },
  {
    number: "Section 2",
    title: "Rental Unit Address and Description",
    content:
      "Specifies the exact rental unit — including the unit number, floor, and address. If parking, lockers, or storage are included, they should be described here or referenced in the additional terms. If it isn't written down, it isn't guaranteed.",
    tip: "Make sure the parking space and locker numbers are written in — verbal promises about included amenities are difficult to enforce.",
  },
  {
    number: "Section 3",
    title: "Term — Start Date and Type of Tenancy",
    content:
      "Sets out whether the tenancy is a fixed-term (e.g. one year ending on a specific date) or month-to-month. In Ontario, a fixed-term lease does not end when the term expires — if neither party takes action, the tenancy automatically continues as a month-to-month tenancy on the same terms.",
    tip: "You do not have to move out when a fixed-term lease expires. Your tenancy continues automatically unless you or your landlord provides proper notice.",
  },
  {
    number: "Section 4",
    title: "Rent — Amount, Due Date, and Acceptable Payment",
    content:
      "States the lawful monthly rent, the due date (typically the 1st of each month), and what payment methods are acceptable. Under the Ontario RTA, a landlord must accept at least one payment method that does not require the tenant to have a bank account (e.g. money order).",
    tip: "Keep records of every rent payment — e-transfer confirmations, receipts, or bank statements. Rent receipts must be provided on request.",
  },
  {
    number: "Section 5",
    title: "Services and Utilities Included",
    content:
      "Lists what is included in the rent: heat, hydro (electricity), water, parking, internet, laundry, and air conditioning. If heat is included and the landlord fails to provide it, that's a maintenance violation under the RTA. Services not listed here are the tenant's responsibility.",
    tip: "If utilities are not included, ask the landlord for historical utility bills so you can estimate your monthly costs before committing.",
  },
  {
    number: "Section 6",
    title: "Rent Deposit (Last Month's Rent)",
    content:
      "Ontario permits only one type of deposit: a last month's rent deposit, capped at one month's rent. A landlord cannot charge a damage deposit, pet deposit, or key deposit (beyond a refundable key deposit for the cost of the key). Interest must be paid on this deposit annually at the rent increase guideline rate.",
    tip: "Any deposit beyond the last month's rent is illegal in Ontario. If you're asked for a damage deposit, you can refuse — it's not enforceable.",
  },
  {
    number: "Section 7",
    title: "Smoking Policy",
    content:
      "Specifies whether smoking is permitted in the unit, on the balcony, or in common areas. A landlord can prohibit smoking in the unit without violating any tenant rights — this is an enforceable restriction. The Smoke-Free Ontario Act sets additional rules for multi-unit residential buildings.",
    tip: "If smoking is important to you, confirm the exact smoking rules — including whether vaping is included in any restrictions — before signing.",
  },
  {
    number: "Section 8",
    title: "Tenant's Agreement to Comply with Additional Rules",
    content:
      "Acknowledges that the tenant has received and reviewed any additional rules or condo corporation rules. This section makes additional rules binding but does not allow them to override the RTA. Condo rules, in particular, may restrict things the RTA would otherwise permit.",
    tip: "Ask for a copy of all rules before signing. Condo rules you haven't seen cannot be enforced against you.",
  },
  {
    number: "Schedule A — Additional Terms",
    title: "What Landlords Can (and Cannot) Add",
    content:
      "Schedule A is where landlords add extra terms beyond the standard form. The critical rule: any term in Schedule A that contradicts or takes away a right guaranteed by the Residential Tenancies Act is void. Illegal clauses don't make the entire lease void — they simply have no effect. Common illegal additions include clauses that prohibit pets (void under s. 14 RTA), require the tenant to pay for all repairs, or waive the right to 24-hour notice for entry.",
    tip: "Read Schedule A carefully and flag any clause that sounds unusual. If it seems like it removes a right you'd normally have, it's likely void under the RTA.",
    isImportant: true,
  },
];

const illegalClauses = [
  "No pets allowed — Ontario's RTA s. 14 makes blanket pet prohibition clauses void",
  "Tenant responsible for all repairs — landlord maintenance obligations cannot be waived",
  "Landlord may enter without notice — 24-hour written notice is required except in emergencies",
  "Lease ends automatically at fixed term — tenancy continues unless proper notice is given",
  "Late fees will be charged — late fee provisions are unenforceable in Ontario",
  "Tenant waives right to rent deposit interest — interest must be paid by law",
  "Damage deposit required — only a last month's rent deposit is permitted",
];

const faqs = [
  {
    q: "Is Ontario's standard lease form mandatory?",
    a: "Yes. Since April 30, 2018, landlords must use the standard lease form (Form 2229E) for most private residential tenancies in Ontario. If a landlord fails to provide the standard lease, the tenant can request it in writing. If the landlord doesn't provide it within 21 days, the tenant may withhold one month's rent.",
  },
  {
    q: "What happens if a landlord adds an illegal clause to Schedule A?",
    a: "An illegal clause in Schedule A is void and unenforceable — it has no legal effect. The rest of the lease remains valid. For example, if your lease contains a no-pets clause (illegal under s. 14 of the RTA), that clause is void and your landlord cannot enforce it, even though you signed the lease.",
  },
  {
    q: "Can a landlord use a custom lease instead of the standard form?",
    a: "For most private residential tenancies in Ontario, no — the standard form is mandatory. Some exceptions apply: care homes, student housing operated by educational institutions, and certain co-operative housing arrangements. If you're unsure whether your tenancy requires the standard form, contact the Landlord and Tenant Board.",
  },
  {
    q: "Does my Ontario lease automatically renew?",
    a: "Not exactly — it continues, but on a month-to-month basis. When a fixed-term lease expires in Ontario, if neither party gives proper notice, the tenancy continues as a month-to-month tenancy on the same terms (including the same rent). You do not need to sign a new lease to keep living there.",
  },
  {
    q: "Can a landlord refuse to rent to me because I have a pet?",
    a: "A landlord can ask about pets during the application process and may factor that into their decision before signing a lease. However, once you have a lease, a clause prohibiting pets is void under s. 14 of the RTA. The exception is condominiums where the condo corporation's declaration prohibits pets — in that case, the prohibition may be enforceable.",
  },
];

export default function OntarioStandardLeaseGuidePage() {
  return (
    <>
      <ArticleSchema
        headline="Ontario Standard Lease Guide: What Every Tenant Needs to Know"
        description="Ontario's mandatory standard lease form (Form 2229E) explained section by section — what each part means and what landlords cannot add or change."
        url="https://leaseplain.com/resources/ontario-standard-lease-guide"
        datePublished="2026-04-01"
        dateModified="2026-05-15"
        keywords={["Ontario standard lease", "Form 2229E", "Ontario RTA lease", "standard lease form Ontario", "Schedule A lease Ontario"]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/resources/ontario-standard-lease-guide",
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
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <BreadcrumbNav
                items={[
                  { label: "Home", href: "/" },
                  { label: "Resources", href: "/resources" },
                  { label: "Ontario Standard Lease Guide" },
                ]}
                className="text-indigo-300 mb-6 [&_a]:text-indigo-300 [&_a:hover]:text-white [&_span.text-slate-900]:text-white"
              />
              <h1 className="text-4xl font-bold mb-4">Ontario Standard Lease Guide</h1>
              <p className="text-xl text-slate-300 max-w-2xl speakable-summary">
                Ontario&apos;s mandatory residential lease form (Form 2229E) — explained section by
                section. What each part means and what landlords cannot legally add or change.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">

            {/* Key fact banner */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-indigo-900 leading-relaxed">
                <strong>Mandatory since April 30, 2018:</strong> Ontario landlords must use the standard
                lease form (Form 2229E) for most private residential tenancies. If you&apos;re renting a
                private apartment, house, or condo, your landlord is required to provide this form.
              </p>
            </div>

            {/* Intro */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">What Is the Ontario Standard Lease?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Ontario&apos;s standard lease form (officially called the &ldquo;Residential Tenancy Agreement (Standard
                Form of Lease)&rdquo; or Form 2229E) is the government-mandated lease form for most private
                residential tenancies in Ontario. It was introduced in 2018 to standardize residential
                leases and make tenant rights clearer.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The form covers the basics — who the landlord and tenant are, what unit is being rented,
                when the lease starts, how much rent is, and what services are included. It also has a
                Schedule A for additional terms. Critically, the Residential Tenancies Act limits what
                landlords can put in Schedule A — any clause that removes a tenant&apos;s legal rights is void.
              </p>
              <p className="text-slate-600 leading-relaxed">
                This guide walks through each section of the standard lease so you know what to look for,
                what to ask, and which clauses in Schedule A should raise a red flag.
              </p>
            </section>

            {/* Sections walkthrough */}
            {sections.map((sec, i) => (
              <section
                key={i}
                className={`rounded-2xl border shadow-sm p-8 ${
                  sec.isImportant
                    ? "bg-amber-50 border-amber-200"
                    : "bg-white border-slate-100"
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    sec.isImportant
                      ? "bg-amber-200 text-amber-900"
                      : "bg-slate-100 text-slate-600"
                  }`}>
                    {sec.number}
                  </span>
                  <h2 className={`text-xl font-bold ${sec.isImportant ? "text-amber-900" : "text-slate-900"}`}>
                    {sec.title}
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4 text-sm">{sec.content}</p>
                <div className={`rounded-xl p-4 text-sm flex items-start gap-2 ${
                  sec.isImportant
                    ? "bg-amber-100 text-amber-900"
                    : "bg-slate-50 text-slate-700"
                }`}>
                  <AlertTriangle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${sec.isImportant ? "text-amber-600" : "text-slate-400"}`} />
                  <p><span className="font-semibold">Practical tip: </span>{sec.tip}</p>
                </div>
              </section>
            ))}

            {/* Illegal clauses */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Common Illegal Schedule A Clauses</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                These clauses appear in Ontario leases but are void under the RTA — signing a lease
                that contains them does not make them enforceable.
              </p>
              <ul className="space-y-3">
                {illegalClauses.map((clause, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    {clause}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-500 mt-5 leading-relaxed">
                If you find one of these clauses in your Schedule A, it has no legal effect. You do not
                need to comply with it, and your landlord cannot enforce it against you at the LTB.
              </p>
            </section>

            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3 text-sm text-amber-900">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p>
                This guide is for educational purposes and does not constitute legal advice. For specific
                questions about your lease or a dispute with your landlord, consult a licensed lawyer,
                paralegal, or your local community legal clinic. See our{" "}
                <Link href="/legal-disclaimer" className="underline">Legal Disclaimer</Link>.
              </p>
            </div>

            {/* FAQ */}
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              <FAQAccordion items={faqs} />
            </section>

            {/* Related links */}
            <div className="text-sm text-slate-600">
              <p className="font-medium text-slate-900 mb-2">Related reading:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/canada/ontario" className="text-indigo-600 hover:underline">
                  Ontario tenant rights overview
                </Link>
                <span className="text-slate-300">·</span>
                <Link href="/tools/rent-increase-calculator" className="text-indigo-600 hover:underline">
                  Ontario rent increase calculator
                </Link>
                <span className="text-slate-300">·</span>
                <Link href="/lease-clause/security-deposit" className="text-indigo-600 hover:underline">
                  Security deposit rules in Ontario
                </Link>
                <span className="text-slate-300">·</span>
                <Link href="/lease-clause/pets" className="text-indigo-600 hover:underline">
                  Pet clauses in Ontario leases
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
