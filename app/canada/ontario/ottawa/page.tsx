import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help in Ottawa, Ontario | Tenant Rights for Renters | LeasePlain",
  description:
    "Ottawa renters: understand your rights under the Ontario Residential Tenancies Act. Learn about common lease issues for government workers and students near uOttawa and Carleton.",
  alternates: { canonical: "https://leaseplain.com/canada/ontario/ottawa" },
  openGraph: {
    title: "Lease Help in Ottawa, Ontario | Tenant Rights for Renters | LeasePlain",
    description: "Ottawa renters: understand your rights under the Ontario Residential Tenancies Act. Learn about common lease issues for government workers and students near uOttawa and Carleton.",
    url: "https://leaseplain.com/canada/ontario/ottawa",
    type: "website",
  },
};

const ottawaRights = [
  "The Ontario Residential Tenancies Act (RTA) applies in full to all private residential rentals in Ottawa.",
  "Rent increases are capped at the Ontario provincial guideline — no exceptions without an LTB above-guideline application.",
  "Landlords must use the Ontario standard lease form for most residential tenancies.",
  "Ottawa tenants can file applications with the LTB — filing fees are $186 online or $201 by paper; fee waivers are available for low-income applicants.",
  "Tenants cannot be evicted mid-lease without a valid LTB order — even if they fail to pay rent, the LTB process must be followed.",
  "Student housing in private rentals is covered by the RTA; university-owned residence is typically not.",
];

const ottawaLeaseIssues = [
  "Short fixed-term leases timed to the academic year — these convert to month-to-month if you stay past the end date, giving you full RTA protections.",
  "Landlords near universities attempting to include \"must vacate at end of term\" clauses — these are unenforceable under the RTA.",
  "Clauses requiring post-dated cheques for the full lease term — illegal under the RTA.",
  "Above-market security deposits described as \"damage deposits\" separate from last month's rent — Ontario permits only last month's rent as a deposit.",
  "Informal side agreements not included in the written lease — always insist that all terms are in the signed lease.",
];

const faqItems = [
                  { q: "What rent-control rules apply in Ottawa?", a: "Ottawa follows Ontario's provincial rent-control rules: units first occupied before November 15, 2018 are subject to the annual guideline increase. Newer units are exempt. The LTB enforces these rules." },
                  { q: "Is Ottawa cheaper to rent than Toronto?", a: "Yes, Ottawa's rental market is significantly more affordable than Toronto's, though it has tightened in recent years. Government employment helps support a stable rental demand, keeping vacancy rates relatively low." },
                  { q: "How do Ottawa bilingualism rights affect my lease?", a: "You have the right to request government services in French, but private leases are governed by contract law. A lease written only in English is still valid; however, if your landlord is a government body or federally regulated, French services must be available." },
                  { q: "What are Ottawa-specific tenant resources?", a: "In addition to the Ontario LTB, Ottawa has the Ottawa Community Housing and several legal aid clinics. Community Legal Services of Ottawa offers free advice to low-income tenants." },
                  { q: "Can an Ottawa landlord charge for parking separately?", a: "Parking can be listed as a separate charge or included in rent. If parking is included in rent at the time of tenancy commencement, it becomes part of the rent and is subject to the same rent-increase rules as base rent." }
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/canada/ontario/ottawa",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
  "url": "https://leaseplain.com/canada/ontario/ottawa",
};

export default function OttawaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }).replace(/</g, "\u003c") }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema).replace(/</g, "\u003c") }} />
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Canada", href: "https://leaseplain.com/canada" },
        { name: "Ontario", href: "https://leaseplain.com/canada/ontario" },
        { name: "Ottawa", href: "https://leaseplain.com/canada/ontario/ottawa" },
      ]} />
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/canada" className="hover:underline">Canada</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/canada/ontario" className="hover:underline">Ontario</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Ottawa</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Ottawa, Ontario
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in Ottawa, Ontario | Tenant Rights for Renters
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Ottawa's rental market is shaped by a large federal public service workforce and a
              significant student population near the University of Ottawa and Carleton University.
              The Ontario RTA protects all of these renters equally — but knowing those protections
              is key to avoiding one-sided leases.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Ottawa's Rental Market Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Ottawa is a stable, government-driven city where a significant portion of renters are
                  federal public servants, military members, and diplomats on fixed postings. This creates
                  steady demand for mid-range and upper-end rental units, particularly in the Centretown,
                  Glebe, and Westboro neighbourhoods.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Student renters near uOttawa's Sandy Hill campus and Carleton's Dow's Lake area face
                  a different set of challenges — landlords who use academic-year lease terms to cycle
                  through tenants and avoid long-term obligations. Under the Ontario RTA, however,
                  fixed-term leases simply roll over to month-to-month once the term ends, giving
                  students continued tenancy rights if they choose to stay.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as an Ottawa Renter</h2>
                <ul className="flex flex-col gap-3">
                  {ottawaRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Fixed-Term Leases and Student Tenants</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Many Ottawa landlords near universities offer one-year leases from May to April,
                  aligned with the academic calendar. Once the fixed term ends, the lease automatically
                  becomes a month-to-month tenancy under the Ontario RTA — the landlord cannot require
                  you to vacate simply because the original term has ended. No notice is required by either party at the point of natural expiry. To end the resulting month-to-month tenancy, a tenant must give 60 days notice (Form N9), or the landlord must follow the proper LTB process for a valid reason.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in Ottawa</h2>
                <ul className="flex flex-col gap-3">
                  {ottawaLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">LTB & Tenant Resources in Ottawa</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Ottawa-area LTB applications are filed through the Tribunals Ontario portal. Hearings
                  may be held at the Ottawa courthouse or via videoconference. Free resources include:
                </p>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Tenant Duty Counsel</strong> — free legal representation at LTB hearings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Ottawa Community Legal Services</strong> — free advice for low-income tenants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>uOttawa and Carleton Student Legal Services</strong> — student-specific tenancy advice</span>
                  </li>
                </ul>
              </div>

            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Review your Ottawa lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and our AI will flag clauses that conflict with the Ontario RTA —
                  especially common issues in student and government-employee rentals.
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
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Pages</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Ontario Tenant Rights", href: "/canada/ontario" },
                    { label: "Toronto Lease Help", href: "/canada/ontario/toronto" },
                    { label: "Ontario Tenant Rights Guide", href: "/tenant-rights/ontario" },
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
