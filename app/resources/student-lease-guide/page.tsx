import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, ChevronRight, Upload } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Student Lease Guide: Renting Near Campus in Ontario | LeasePlain",
  description:
    "How leases work for students in Ontario — roommates, joint tenancy, subletting over summer, student housing, and lease red flags to watch for.",
  alternates: { canonical: "https://leaseplain.com/resources/student-lease-guide" },
};

export default function StudentLeaseGuidePage() {
  return (
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
              <span>Student Lease Guide</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Users className="w-3.5 h-3.5" aria-hidden="true" />
              Tenant Guide
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Student Lease Guide: Renting Near Campus in Ontario
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Student rental situations come with their own set of lease questions — from
              roommates and joint tenancy to subletting over summer break.
            </p>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Lease Scenarios for Students
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Students renting near campus often encounter one of these arrangements:
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      scenario: "Roommates on one lease (co-tenants)",
                      detail: "All roommates sign the same lease. Each is jointly and severally liable — meaning the landlord can hold any one of you responsible for the full rent if another doesn't pay.",
                    },
                    {
                      scenario: "Individual leases within a house",
                      detail: "Each student has their own lease for their room. You're only responsible for your portion of the rent, but you may have less control over shared spaces.",
                    },
                    {
                      scenario: "Subletting over summer",
                      detail: "If you're going home for the summer but want to keep your unit, subletting may be an option. Ontario's RTA permits subletting with the landlord's consent.",
                    },
                    {
                      scenario: "University-managed student housing",
                      detail: "Some universities operate student housing that may or may not be covered by the RTA. On-campus residence agreements often have different rules than private-market leases.",
                    },
                  ].map((item) => (
                    <li key={item.scenario} className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                      <p className="font-semibold text-slate-900 mb-1">{item.scenario}</p>
                      <p className="text-sm text-slate-700 leading-relaxed">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Joint Tenancy vs. Individual Leases
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The structure of your lease with roommates has significant financial implications:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5">
                    <h3 className="font-bold text-slate-900 mb-3">Joint Tenancy (all on one lease)</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {[
                        "All tenants equally responsible for the full rent",
                        "If one roommate doesn't pay, others must cover it",
                        "Harder to add or remove roommates",
                        "All tenants have equal rights under the lease",
                        "Landlord can't end one tenant's tenancy without affecting all",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5">
                    <h3 className="font-bold text-slate-900 mb-3">Individual Leases (own agreement)</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {[
                        "Each tenant only responsible for their share",
                        "If a roommate doesn't pay, it doesn't affect you",
                        "Easier to leave without affecting others",
                        "May have less say over who moves into shared spaces",
                        "Each tenant has their own relationship with the landlord",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Subletting Over Summer Break
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Many students want to sublet their unit for the spring/summer term while they
                  return home. Here's how it works in Ontario:
                </p>
                <ol className="space-y-4">
                  {[
                    {
                      step: "Check your lease",
                      detail: "Some leases include subletting restrictions. However, under the RTA, a landlord cannot unreasonably refuse a sublet request — even if the lease says subletting is prohibited.",
                    },
                    {
                      step: "Submit a written request to your landlord",
                      detail: "Ask for consent to sublet in writing. Include the proposed subtenant's information if possible. The landlord has up to 7 days to request an interview with the subtenant.",
                    },
                    {
                      step: "Get landlord approval",
                      detail: "The landlord must have a reasonable basis for refusing. 'I just don't want students subletting' is not a valid reason. If they refuse unreasonably, you can apply to the LTB.",
                    },
                    {
                      step: "Sign a subletting agreement",
                      detail: "You remain responsible to your landlord as the primary tenant. Your subtenant is responsible to you. Put your agreement in writing.",
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
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Student-Specific Red Flags
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Some landlords target students with lease clauses that are unusually restrictive
                  or outright illegal. Watch for:
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      flag: "Guarantor requirements with unlimited liability",
                      detail: "Some leases require a parent or guarantor to be fully liable for any amount owed — including damage claims or future rent. This is a significant financial risk for the guarantor.",
                    },
                    {
                      flag: "Leases that end in April or August",
                      detail: "A lease designed to end at the start of summer (or a new school year) is structured to maximize turnover. Watch for pressure to sign a new fixed-term lease rather than defaulting to month-to-month.",
                    },
                    {
                      flag: "Clauses that violate the RTA",
                      detail: "No-pets clauses, damage deposits, prohibitions on subletting, or clauses waiving rights are void under the RTA — but they still appear in some student housing leases.",
                    },
                    {
                      flag: "Utilities disconnected without notice",
                      detail: "A landlord cannot disconnect utilities as a form of pressure or eviction. If this happens, contact the LTB immediately.",
                    },
                  ].map((item) => (
                    <li key={item.flag} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2" />
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">{item.flag}</p>
                        <p className="text-sm text-slate-700 leading-relaxed">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "Do students have the same tenant rights as other renters in Canada?", a: "Yes. Students renting off-campus from private landlords have full protections under provincial tenancy law. University-managed on-campus housing (dorms, residences) is typically exempt from residential tenancy legislation." },
                  { q: "What should students look for in a lease?", a: "Watch for short fixed terms with high penalties for breaking early, broad damage clauses, fees for landlord-supplied furniture, mandatory insurance clauses, and automatic rent increases. LeasePlain can flag these quickly." },
                  { q: "Can a student break a lease if they fail courses or transfer schools?", a: "Academic reasons are not a statutory ground for early termination in most Canadian provinces. Students who need to leave early should negotiate with the landlord, find an assignment or subletter, or accept losing some rent — depending on how quickly the unit re-rents." },
                  { q: "What is a co-signer and when do students need one?", a: "A co-signer (guarantor) is someone (often a parent) who guarantees to pay rent if the tenant cannot. Landlords often require co-signers for students without stable income or Canadian credit history. Co-signers are legally liable for the debt." },
                  { q: "Should students get renters insurance?", a: "Yes. Renters insurance is inexpensive ($15–$30/month) and covers theft, fire, and liability. Many student apartments lack adequate coverage, and landlord insurance does not protect tenant belongings." }
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
                    { label: "First-Time Renter Guide", href: "/resources/first-time-renter-guide" },
                    { label: "Subletting Clause", href: "/lease-clause/subletting" },
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
  );
}
