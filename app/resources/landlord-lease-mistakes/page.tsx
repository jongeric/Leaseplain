import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, ChevronRight, Upload, AlertTriangle, CheckCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Common Landlord Lease Mistakes (and How to Avoid Them) | LeasePlain",
  description:
    "The most frequent lease drafting errors that create legal exposure for Canadian landlords — and what to do instead. Avoid these mistakes before your next tenancy.",
  alternates: { canonical: "https://leaseplain.com/resources/landlord-lease-mistakes" },
  openGraph: {
    title: "Common Landlord Lease Mistakes (and How to Avoid Them) | LeasePlain",
    description: "The most frequent lease drafting errors that create legal exposure for Canadian landlords — and what to do instead. Avoid these mistakes before your next tenancy.",
    url: "https://leaseplain.com/resources/landlord-lease-mistakes",
  },
  keywords: ["landlord lease mistakes", "lease drafting errors Canada", "illegal lease clauses landlord", "landlord mistakes Ontario", "lease compliance landlord"],
};

const mistakes = [
  {
    mistake: "Using a generic or outdated template",
    fix: "Each province has specific landlord-tenant legislation. A generic or outdated lease may include unenforceable clauses — or miss required disclosures. In Ontario, use the current provincially mandated Standard Lease Form.",
  },
  {
    mistake: "Including clauses that waive tenant rights",
    fix: "Any clause that attempts to waive tenant rights protected by law (e.g., the right to assign, the right to maintenance) is automatically void. Including them doesn't give you extra protection — it just makes your lease look unreliable.",
  },
  {
    mistake: "Collecting a security deposit in Ontario",
    fix: "Ontario landlords can only collect a rent deposit (equal to the last period's rent). Collecting a separate 'damage deposit' is illegal. Returning it doesn't protect you — you must understand the difference from the start.",
  },
  {
    mistake: "Unclear utility arrangements",
    fix: "Vague language like 'tenant responsible for utilities' can create disputes. Specify exactly which utilities are the tenant's responsibility and which are included in rent.",
  },
  {
    mistake: "No written lease at all",
    fix: "An oral tenancy is still a legal tenancy, but without a written lease, disputes about terms are nearly impossible to resolve in your favor. Always get everything in writing.",
  },
  {
    mistake: "Failing to document the unit's condition",
    fix: "Without a move-in inspection report (signed by both parties), it's difficult to prove pre-existing damage. Do a written inspection with photos before handing over keys.",
  },
  {
    mistake: "Wrong notice periods for entry",
    fix: "Ontario landlords must give at least 24 hours' written notice before entering a rental unit (with limited exceptions for emergencies). Shorter notice periods in the lease are unenforceable.",
  },
  {
    mistake: "Trying to ban all pets",
    fix: "In Ontario, lease clauses that prohibit pets are void under the Residential Tenancies Act. You can include reasonable pet terms, but a blanket ban won't hold up.",
  },
];

export default function LandlordLeaseMistakesPage() {
  return (
    <>
      <ArticleSchema
        headline="Common Landlord Lease Mistakes (and How to Avoid Them)"
        description="The most frequent lease drafting errors that create legal exposure for Canadian landlords — and what to do instead. Avoid these mistakes before your next tenancy."
        url="https://leaseplain.com/resources/landlord-lease-mistakes"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["landlord lease mistakes", "lease drafting errors Canada", "illegal lease clauses landlord", "landlord mistakes Ontario", "lease compliance landlord"]}
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
              <span>Landlord Lease Mistakes</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Briefcase className="w-3.5 h-3.5" />
              Landlord Guide
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight max-w-3xl">
              Common Landlord Lease Mistakes (and How to Avoid Them)
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Most landlord-tenant disputes trace back to a poorly written lease. These are the most
              frequent mistakes Canadian landlords make — and what to do instead.
            </p>
          </div>
        </section>

        {/* Mistakes */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            {mistakes.map((item, i) => (
              <div key={item.mistake} className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-7 h-7 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-0.5">Mistake #{i + 1}</p>
                    <h2 className="font-bold text-slate-900">{item.mistake}</h2>
                  </div>
                </div>
                <div className="flex items-start gap-3 mt-3 bg-green-50 rounded-xl border border-green-100 p-4">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 leading-relaxed">{item.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">Review your lease before sending it</h2>
              <p className="text-blue-100 leading-relaxed max-w-xl">
                Upload any residential lease and get a plain-English analysis of every clause in seconds.
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
                  { q: "What are common mistakes landlords make in Canadian leases?", a: "Common mistakes include: illegal clauses (waiving notice, charging excessive deposits), not using the mandatory standard form (Ontario/Quebec), not conducting a written move-in inspection, missing rent-increase notice deadlines, and attempting self-help evictions." },
                  { q: "Is a no-pets clause enforceable in Ontario?", a: "No. Ontario's Residential Tenancies Act makes no-pet clauses void. Ontario landlords cannot enforce pet prohibitions in a lease, though they can pursue eviction if a pet causes damage or disturbs other tenants." },
                  { q: "What happens if a landlord charges an illegal deposit?", a: "The tenant can apply to the tenancy tribunal for a return of the illegal deposit plus potentially double the amount as a penalty. The landlord may also face fines. It is much easier to comply with deposit rules than to defend against an illegal-deposit complaint." },
                  { q: "Can a landlord change the locks without notice?", a: "No. Changing locks without tenant consent or a court order is an illegal lockout in every Canadian province. Landlords who do this can face significant penalties, injunctions, and orders for damages." },
                  { q: "What notice period mistakes do Canadian landlords make?", a: "Common errors: serving notice too late (not giving the full required notice period), using an incorrect form, failing to include all required information, and not serving notice in the prescribed way. An improperly served notice may be void." }
                ]} />
              </div>
      </main>
      <Footer />
    </div>
    </>
  );
}
