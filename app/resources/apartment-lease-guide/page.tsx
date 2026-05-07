import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Apartment Lease Guide: What to Know Before Renting | LeasePlain",
  description:
    "Types of apartment rentals, standard lease clauses explained, and how to vet a landlord before signing. A complete guide for apartment renters in Canada and the US.",
  alternates: { canonical: "https://leaseplain.com/resources/apartment-lease-guide" },
};

export default function ApartmentLeaseGuidePage() {
  return (
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
              <span>Apartment Lease Guide</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Building2 className="w-3.5 h-3.5" />
              Tenant Guide
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight max-w-3xl">
              Apartment Lease Guide: What to Know Before Renting
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Apartment leases are the most common type of rental agreement. Understanding what you&apos;re
              signing — and what landlords can and can&apos;t include — puts you in a much stronger position
              before move-in day.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Types of Apartment Rentals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                {
                  type: "Purpose-built rental",
                  desc: "A building constructed specifically for long-term rentals. Usually managed by a professional property management company.",
                },
                {
                  type: "Basement apartment",
                  desc: "A secondary unit created within a house. The landlord often lives on the property. Rules vary — verify local bylaws.",
                },
                {
                  type: "Condo rental",
                  desc: "An individually owned unit rented by an investor-landlord. Subject to both tenant law and condo corporation rules.",
                },
                {
                  type: "Converted house unit",
                  desc: "A single-family home divided into multiple rental units. Quality and legality can vary — check for permits.",
                },
              ].map((item) => (
                <div key={item.type} className="bg-slate-50 rounded-xl border border-slate-100 p-5">
                  <p className="font-semibold text-slate-900 mb-1">{item.type}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">Standard Clauses Explained</h2>
            <div className="flex flex-col gap-4 mb-10">
              {[
                {
                  title: "Term and renewal",
                  desc: "Fixed-term leases (e.g., 1 year) convert to month-to-month after the initial term in most Canadian provinces. Know what happens at the end of your lease.",
                },
                {
                  title: "Rent and rent increases",
                  desc: "Your lease should specify the monthly rent amount and whether increases are subject to rent control. In Ontario, most tenants are protected by annual rent increase guidelines.",
                },
                {
                  title: "Security deposit / last month's rent",
                  desc: "In Ontario, landlords can only collect rent deposit (last month's rent) — not a separate damage deposit. In other provinces and US states, separate security deposits are common.",
                },
                {
                  title: "Maintenance responsibilities",
                  desc: "The lease should clarify who handles routine maintenance and repairs. Landlords are legally responsible for keeping units in good repair, regardless of what the lease says.",
                },
                {
                  title: "Subletting",
                  desc: "Most standard leases restrict subletting without landlord consent. In Ontario, landlords cannot unreasonably withhold consent.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 bg-white border border-slate-100 rounded-xl shadow-sm p-5">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Vet a Landlord</h2>
            <div className="flex flex-col gap-3 mb-10">
              {[
                "Search the landlord's name + property address for reviews or complaints",
                "Ask current or former tenants about their experience",
                "Check that the unit meets local fire and safety codes",
                "Ask how long maintenance requests typically take",
                "Verify the landlord actually owns (or is authorized to rent) the unit",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-3 bg-blue-50 rounded-xl border border-blue-100 p-4">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">{tip}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">Apartment Lease Red Flags</h2>
            <div className="flex flex-col gap-3">
              {[
                "Landlord refuses to provide a written lease",
                "Lease contains clauses waiving your statutory rights",
                "No mention of what utilities are included",
                "Excessive entry permissions (landlord can enter without notice)",
                "Lease requires you to pay for all repairs regardless of cause",
              ].map((flag) => (
                <div key={flag} className="flex items-start gap-3 bg-red-50 rounded-xl border border-red-100 p-4">
                  <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">{flag}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">Have a lease to review?</h2>
              <p className="text-blue-100 leading-relaxed max-w-xl">
                Upload your apartment lease and get a plain-English analysis of every clause in seconds.
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
      </main>
      <Footer />
    </div>
  );
}
