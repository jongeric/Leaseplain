import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, CheckCircle, ChevronRight, Upload, Clock } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "What to Check Before Signing a Lease – Full Checklist | LeasePlain",
  description:
    "A practical checklist of everything to verify before signing a residential lease — the unit, the landlord, the terms, and your rights.",
  alternates: { canonical: "https://leaseplain.com/resources/check-before-signing-lease" },
  openGraph: {
    title: "What to Check Before Signing a Lease – Full Checklist | LeasePlain",
    description: "A practical checklist of everything to verify before signing a residential lease — the unit, the landlord, the terms, and your rights.",
    url: "https://leaseplain.com/resources/check-before-signing-lease",
  },
  keywords: ["lease checklist", "before signing a lease", "what to check in a lease", "tenant checklist", "lease review tips"],
};

const checklist = [
  {
    category: "The Rental Unit",
    icon: "🏠",
    items: [
      "Visit the unit in person — never sign a lease for a unit you haven't seen.",
      "Test all appliances, faucets, toilets, and light switches.",
      "Check for signs of moisture, mould, or water damage on ceilings and under sinks.",
      "Look for signs of pests: droppings, damage, or odours.",
      "Check window and door locks for security.",
      "Confirm heating and cooling systems work.",
      "Test internet and cell signal if those matter to you.",
      "Check natural light and ventilation in all rooms.",
    ],
  },
  {
    category: "The Landlord",
    icon: "👤",
    items: [
      "Search the landlord's name and property address online for complaints or reviews.",
      "Ask about average utility costs for the unit — get this in writing.",
      "Ask how maintenance requests are submitted and how quickly they're addressed.",
      "Ask how long the landlord has owned the building and their typical vacancy rate.",
      "Verify the landlord is the actual owner (or authorized agent) of the property.",
      "Check if the landlord has any pending LTB orders against them (ontario.ca).",
    ],
  },
  {
    category: "The Lease Terms",
    icon: "📄",
    items: [
      "Read the entire lease — not just the sections the landlord highlights.",
      "Confirm rent amount, due date, and payment method match what was agreed.",
      "Verify the security deposit is last month's rent only (max one month's rent in Ontario).",
      "Check that all agreed-upon amenities are listed: parking, locker, appliances.",
      "Understand early termination conditions and any associated penalties.",
      "Read all additional terms / schedules at the end of the lease.",
      "Confirm lease start and end dates are correct.",
      "Note whether utilities are included and which ones.",
    ],
  },
  {
    category: "Your Rights",
    icon: "⚖️",
    items: [
      "Understand that in Ontario, you cannot waive your rights under the RTA — problematic clauses are void.",
      "Confirm there is no illegal damage deposit or pet deposit (prohibited in Ontario).",
      "Know your 24-hour entry notice right — landlords must give written notice.",
      "Understand your right to sublet or assign if your circumstances change.",
      "Know the annual rent increase guideline and how much notice the landlord must give.",
      "Be aware that in Ontario, you cannot be evicted without an LTB order.",
    ],
  },
  {
    category: "Before You Sign",
    icon: "✍️",
    items: [
      "Never sign under pressure — take the time you need to read everything.",
      "Ask about anything you don't understand. Get answers in writing.",
      "Take dated photos of the unit before moving in for your records.",
      "Request a signed move-in inspection report from your landlord.",
      "Keep a copy of the signed lease in a safe place.",
      "Use a lease analyzer (like LeasePlain) to get a plain-English breakdown.",
      "If anything feels wrong, consult a community legal clinic before signing.",
    ],
  },
];

export default function CheckBeforeSigningPage() {
  return (
    <>
      <ArticleSchema
        headline="What to Check Before Signing a Lease"
        description="A practical checklist of everything to verify before signing a residential lease — the unit, the landlord, the terms, and your rights."
        url="https://leaseplain.com/resources/check-before-signing-lease"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["lease checklist", "before signing a lease", "what to check in a lease", "tenant checklist", "lease review tips"]}
      />
      <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/resources" className="hover:underline">Resources</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>What to Check Before Signing</span>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100">
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                Checklist
              </div>
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <Clock className="w-3 h-3" aria-hidden="true" />
                6 min read
              </span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              What to Check Before Signing a Lease
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Signing a lease is a legally binding commitment. Take the time to check these items
              before you sign — it can save you months of stress and thousands of dollars.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              {checklist.map((section) => (
                <div key={section.category}>
                  <h2 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                    <span aria-hidden="true">{section.icon}</span>
                    {section.category}
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-2">The Most Important Rule</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Never let anyone pressure you into signing immediately. A legitimate landlord
                  will give you time to read the lease, ask questions, and make an informed decision.
                  If a landlord insists you must sign right now or lose the unit, treat that as a
                  serious red flag about how they will treat you as a tenant.
                </p>
              </div>
            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "What is the most important thing to check before signing a lease?", a: "The total monthly cost — not just rent but utilities, parking, amenities, and any required insurance. Many tenants focus only on the headline rent and are surprised by significant additional costs." },
                  { q: "How do I check if a lease clause is legal in my province?", a: "Look up your province's Residential Tenancies Act online (usually on the provincial government website), or use LeasePlain to compare your lease against common provincial standards. Your provincial tenancy tribunal also publishes guides." },
                  { q: "Should I get the lease in writing?", a: "Always. While verbal leases are technically valid in most provinces, they are nearly impossible to enforce in a dispute. A written lease protects both tenant and landlord by documenting agreed terms." },
                  { q: "What are common surprise clauses in Canadian leases?", a: "Watch for: automatic lease renewal clauses, landlord entry rights that exceed the legal minimum, broad damage liability that ignores normal wear and tear, flat penalty fees for early termination, and restrictions on guests or occupants." },
                  { q: "Can I ask a landlord to remove or change a lease clause?", a: "Yes. Any clause in a lease can be proposed for removal or modification before signing. If the landlord refuses, you must decide whether to accept the term (checking if it's even enforceable) or walk away." }
                ]} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Analyze your lease before signing</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease to LeasePlain and get a plain-English breakdown covering
                  red flags, financial terms, and your rights — in under a minute.
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
                    { label: "Security Deposit Clause", href: "/lease-clause/security-deposit" },
                    { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
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
