import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, ChevronRight, Upload } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Renter Guides: Lease Help for Every Situation | LeasePlain",
  description:
    "Lease guides for every type of renter — first-time renters, students, condo tenants, and apartment dwellers. Plain-English help for Ontario renters.",
  alternates: { canonical: "https://leaseplain.com/resources/tenant-guides" },
};

const articles = [
  {
    title: "First-Time Renter Guide: How to Read and Sign a Lease",
    description:
      "Everything a first-time renter needs to know — from budgeting and understanding key terms to the move-in process and your rights in Ontario.",
    href: "/resources/first-time-renter-guide",
  },
  {
    title: "Student Lease Guide: Renting Near Campus in Ontario",
    description:
      "How leases work for students: roommates, joint tenancy, subletting over summer, and the red flags to watch for in student housing.",
    href: "/resources/student-lease-guide",
  },
  {
    title: "Condo Lease Guide: What's Different About Renting a Condo",
    description:
      "Renting a condo is different from renting in a purpose-built building. Learn about condo rules, investor landlords, and your rights if the unit is sold.",
    href: "/resources/condo-lease-guide",
  },
  {
    title: "Apartment Lease Guide: What to Know Before Renting",
    description:
      "Types of apartment rentals, standard lease clauses, and how to check a landlord's track record before committing.",
    href: "/resources/apartment-lease-guide",
  },
];

export default function TenantGuidesPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/resources" className="hover:underline">Resources</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Tenant Guides</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Users className="w-3.5 h-3.5" aria-hidden="true" />
              Tenant Guides
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight max-w-3xl">
              Renter Guides: Lease Help for Every Situation
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Whether you're renting for the first time, heading back to campus, or moving into a
              condo, these guides cover the lease issues that matter most for your situation.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group bg-white border border-slate-100 rounded-2xl shadow-sm p-6 flex items-start gap-4 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed">{article.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 flex-shrink-0 self-center transition-colors" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">Not sure about your lease?</h2>
              <p className="text-blue-100 leading-relaxed max-w-xl">
                Upload your lease and get a plain-English breakdown of every clause in seconds.
              </p>
            </div>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap flex-shrink-0"
            >
              <Upload className="w-4 h-4" aria-hidden="true" />
              Analyze My Lease
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
