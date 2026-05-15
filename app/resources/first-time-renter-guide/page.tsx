import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, ChevronRight, Upload } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "First-Time Renter Guide: How to Read and Sign a Lease | LeasePlain",
  description:
    "Everything a first-time renter needs to know — budgeting, understanding lease terms, the signing process, move-in checklist, and your rights in Ontario.",
  alternates: { canonical: "https://leaseplain.com/resources/first-time-renter-guide" },
  openGraph: {
    title: "First-Time Renter Guide: How to Read and Sign a Lease | LeasePlain",
    description: "Everything a first-time renter needs to know — budgeting, understanding lease terms, the signing process, move-in checklist, and your rights in Ontario.",
    url: "https://leaseplain.com/resources/first-time-renter-guide",
  },
  keywords: ["first-time renter guide", "renting for the first time", "how to sign a lease", "tenant rights Ontario", "lease guide beginners"],
};

export default function FirstTimeRenterGuidePage() {
  return (
    <>
      <ArticleSchema
        headline="First-Time Renter Guide: How to Read and Sign a Lease"
        description="Everything a first-time renter needs to know — budgeting, understanding lease terms, the signing process, move-in checklist, and your rights in Ontario."
        url="https://leaseplain.com/resources/first-time-renter-guide"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["first-time renter guide", "renting for the first time", "how to sign a lease", "tenant rights Ontario", "lease guide beginners"]}
      />
      <div className="flex flex-col min-h-full">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/resources" className="hover:underline">Resources</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/resources/tenant-guides" className="hover:underline">Tenant Guides</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>First-Time Renter</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Users className="w-3.5 h-3.5" aria-hidden="true" />
              Tenant Guide
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              First-Time Renter Guide: How to Read and Sign a Lease
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Renting for the first time in Ontario? Here's what you need to know — from
              budgeting and finding a place, to understanding your lease and knowing your rights.
            </p>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Before You Start Looking</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Before you start viewing units, set yourself up for success with a few
                  practical steps:
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      heading: "Calculate your budget",
                      detail: "A common rule of thumb is that rent should be no more than 30% of your gross monthly income. If you earn $4,000/month, aim to spend no more than $1,200 on rent. Remember to account for utilities, internet, tenant insurance, and other monthly costs.",
                    },
                    {
                      heading: "Check your credit",
                      detail: "Most landlords will check your credit as part of their screening. Get a free copy of your credit report from Equifax or TransUnion before applying so there are no surprises.",
                    },
                    {
                      heading: "Prepare references",
                      detail: "Landlords typically ask for personal or professional references. Have two or three people ready who can speak to your reliability and character.",
                    },
                    {
                      heading: "Get tenant insurance quotes",
                      detail: "Many landlords require tenant insurance. It's usually affordable ($15–30/month) and covers your belongings and personal liability.",
                    },
                  ].map((item) => (
                    <li key={item.heading} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2" />
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">{item.heading}</p>
                        <p className="text-sm text-slate-700 leading-relaxed">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Understanding Your Lease</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Your lease will use some terms that may be new to you. Here are the most
                  important ones:
                </p>
                <ul className="space-y-3">
                  {[
                    { term: "Gross rent", detail: "The total amount you pay each month, including utilities if they're covered by the landlord." },
                    { term: "Net rent", detail: "The base rent, before utilities or other charges. Make sure you know which applies to your unit." },
                    { term: "Term", detail: "How long the lease lasts. Most new leases are one-year fixed terms, after which they become month-to-month." },
                    { term: "Notice period", detail: "How much warning you must give before moving out. In Ontario, tenants typically need to give 60 days notice before the end of a rental period." },
                    { term: "Last month's rent deposit", detail: "The only legal deposit in Ontario. Equal to one month's rent, applied to your last month. It is not a damage deposit." },
                  ].map((item) => (
                    <li key={item.term} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2" />
                      <div>
                        <span className="font-semibold text-slate-900">{item.term}: </span>
                        <span className="text-slate-700 text-sm leading-relaxed">{item.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Signing Process</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Signing a lease is a serious legal commitment. Follow these principles:
                </p>
                <ol className="space-y-4">
                  {[
                    {
                      step: "Never sign without reading the full lease",
                      detail: "This sounds obvious, but many first-time renters skim or skip sections. Read every page. Use an AI lease analyzer or this guide if you're unsure about anything.",
                    },
                    {
                      step: "Ask questions before signing",
                      detail: "If any clause is unclear or you disagree with something, ask your landlord to explain or remove it. Once you sign, the terms are binding.",
                    },
                    {
                      step: "Get everything in writing",
                      detail: "If your landlord promises something verbally (e.g., 'we'll fix that before you move in'), ask for it to be added to the lease or confirmed in an email.",
                    },
                    {
                      step: "Keep a signed copy",
                      detail: "You are entitled to a copy of the signed lease. Keep it somewhere safe — you'll need it if there's ever a dispute.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">{item.step}</p>
                        <p className="text-sm text-slate-700 leading-relaxed">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">After You Move In</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The first few days of your tenancy set the foundation for everything that follows:
                </p>
                <ul className="space-y-3">
                  {[
                    "Do a thorough move-in inspection. Walk through every room, checking for existing damage (scuffs, stains, broken fixtures).",
                    "Document the unit with photos and video — date-stamped if possible — on the day you move in.",
                    "Complete and return the move-in inspection report. Ontario landlords are required to provide one and give you a copy.",
                    "Test all appliances and fixtures, including the stove, dishwasher, hot water, HVAC, smoke detectors, and door locks.",
                    "Report any pre-existing issues to your landlord in writing immediately so they're documented.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2" />
                      <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Your Key Rights as a First-Time Renter in Ontario
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      right: "Right to a written lease",
                      detail: "You are entitled to receive Ontario's Standard Lease form. If your landlord doesn't provide it, you can request it in writing — they have 21 days to comply, or you may be able to withhold one month's rent.",
                    },
                    {
                      right: "Right to quiet enjoyment",
                      detail: "You have the right to reasonable peace, comfort, and privacy in your home. Your landlord must give 24 hours written notice before entering except in genuine emergencies.",
                    },
                    {
                      right: "Right to repairs and maintenance",
                      detail: "Under s.20 of the RTA, your landlord is required to maintain the unit in a good state of repair and comply with health, safety, and housing standards — regardless of what your lease says.",
                    },
                  ].map((item) => (
                    <div key={item.right} className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                      <p className="font-semibold text-slate-900 mb-1">{item.right}</p>
                      <p className="text-sm text-slate-700 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "What do I need to rent my first apartment in Canada?", a: "Typically: government-issued ID, proof of income or employment (pay stubs, employment letter), references (personal or professional), and your first and last month's rent. Some landlords also request a credit check." },
                  { q: "What rights do I have as a first-time tenant in Canada?", a: "You have the same rights as any tenant: the right to a habitable unit, protection from illegal rent increases, proper notice before landlord entry, the right to dispute maintenance issues, and protection from illegal eviction." },
                  { q: "How do I know if a lease is fair for a first-time renter?", a: "Compare the rent to similar units nearby, check that deposit rules comply with provincial law, look for unusual fees or penalties, and use LeasePlain to flag any clauses that seem one-sided. When in doubt, ask questions before signing." },
                  { q: "What is the difference between a month-to-month and a fixed-term lease?", a: "A fixed-term lease runs for a set period (usually 12 months) and converts to month-to-month at the end unless notice is given. A month-to-month tenancy continues indefinitely until either party gives the required notice to terminate." },
                  { q: "Can a landlord reject my rental application?", a: "Yes, but not for discriminatory reasons. Landlords cannot reject applicants based on race, gender, religion, disability, family status, sexual orientation, or source of income (in provinces that prohibit it). Rejection based on credit, income, or references is generally permitted." }
                ]} />
              </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">AI Lease Review</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and get a plain-English breakdown in seconds.
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
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "What to Check Before Signing", href: "/resources/check-before-signing-lease" },
                    { label: "What Is a Lease Agreement?", href: "/resources/what-is-a-lease-agreement" },
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
