import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Help in Brampton, Ontario | Tenant Rights & Lease Review | LeasePlain",
  description:
    "Brampton renters: understand your rights under the Ontario Residential Tenancies Act. Learn about basement apartments, newcomer tenant rights, and LTB hearings in Brampton.",
  alternates: { canonical: "https://leaseplain.com/canada/ontario/brampton" },
  openGraph: {
    title: "Lease Help in Brampton, Ontario | Tenant Rights & Lease Review | LeasePlain",
    description: "Brampton renters: understand your rights under the Ontario Residential Tenancies Act. Learn about basement apartments, newcomer tenant rights, and LTB hearings in Brampton.",
    url: "https://leaseplain.com/canada/ontario/brampton",
    type: "website",
  },
};

const bramptonRights = [
  "The Ontario RTA applies in full to all private residential rentals in Brampton, including basement apartments and new condominiums.",
  "Landlords must use the standard Ontario lease form — a verbal or non-standard lease still triggers full RTA protections.",
  "Tenants can file applications with the Landlord and Tenant Board (LTB) — filing fees are $48 online or $53 by paper; fee waivers are available for low-income applicants.",
  "Newcomer tenants have full RTA protection and are additionally protected from discrimination under the Ontario Human Rights Code.",
  "A landlord seeking to end a tenancy for personal use must serve a Form N12 with at least 60 days notice and pay one month's compensation — this applies regardless of notice period length (RTA s.48.1).",
  "Only a last month's rent deposit is permitted — landlords cannot collect a security deposit or demand more than one month's rent upfront.",
];

const bramptonLeaseIssues = [
  "Illegal screening by income, immigration status, or national origin — the Ontario Human Rights Code prohibits discriminatory screening practices.",
  "Basement apartment safety concerns — units must meet Ontario Building Code and fire safety standards; landlords cannot disclaim maintenance obligations regardless of basement status.",
  "Parking fees bundled into rent without separate disclosure — undisclosed fees may be challenged at the LTB.",
  "Short notice entry clauses — landlords must give 24 hours written notice before entering for most permitted reasons.",
  "Unauthorized restrictions on roommates or subletting — the RTA permits subletting with the landlord's consent, which cannot be unreasonably withheld.",
];

const faqItems = [
                  { q: "What are the rent-control rules in Brampton?", a: "Brampton follows Ontario provincial rules. Units occupied before November 15, 2018 are subject to the annual rent-increase guideline. Newer units are exempt. Landlords must give 90 days' written notice of any rent increase." },
                  { q: "Is basement apartment renting common in Brampton?", a: "Yes, Brampton has a high concentration of basement apartments. Tenants in these units have the same RTA rights as those in full apartments, but should confirm the unit is a legal secondary suite to ensure proper fire and safety compliance." },
                  { q: "What resources do Brampton tenants have?", a: "Brampton Legal Aid, Peel Community Legal Services, and the Ontario LTB all serve Brampton tenants. For free lease review, LeasePlain's AI can flag issues in minutes." },
                  { q: "Can a Brampton landlord include a no-guest rule in a lease?", a: "Landlords can restrict guests, but extreme clauses limiting any overnight guests may be unenforceable under the RTA, which gives tenants the right to reasonable enjoyment of their unit. Review any guest policy carefully before signing." },
                  { q: "How much notice does a Brampton landlord need to enter my unit?", a: "Under the Ontario RTA, landlords must give at least 24 hours' written notice before entering a tenant's unit for inspections, repairs, or other permitted purposes. Emergency entry is allowed without notice." }
];

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/canada/ontario/brampton",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
  "url": "https://leaseplain.com/canada/ontario/brampton",
};

export default function BramptonPage() {
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
        { name: "Brampton", href: "https://leaseplain.com/canada/ontario/brampton" },
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
              <span>Brampton</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Brampton, Ontario
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Help in Brampton, Ontario | Tenant Rights &amp; Lease Review
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Brampton is Peel Region's largest and fastest-growing city, with a large newcomer
              population and a rental market spanning basement apartments to new condominiums.
              Understanding the Ontario RTA is essential before signing any Brampton lease.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Brampton's Rental Market</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Brampton is Peel Region's largest city and one of the fastest-growing municipalities in
                  Canada, driven in significant part by newcomer and internationally trained worker
                  populations. This creates strong demand for rental housing across all price points — from
                  basement suites in older detached homes to townhouses and a growing inventory of
                  purpose-built condominiums in the city's developing downtown corridor.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Ontario's <em>Residential Tenancies Act</em> applies in full throughout Brampton.
                  Newcomer renters are entitled to the same protections as any other tenant and are
                  additionally protected from discriminatory treatment under the Ontario Human Rights Code.
                  Awareness of these rights is the first step to a safer rental experience.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights as a Brampton Renter</h2>
                <ul className="flex flex-col gap-3">
                  {bramptonRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Basement Apartments in Brampton</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Basement apartments are a major part of Brampton's rental market, but they must meet
                  Ontario Building Code and fire safety standards — including adequate egress windows,
                  smoke and carbon monoxide detectors, and proper ceiling heights. A landlord cannot
                  disclaim maintenance obligations simply because the unit is in a basement. If your
                  basement unit does not meet these standards, you can contact the City of Brampton's
                  property standards office or file a maintenance application with the LTB.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Lease Issues in Brampton</h2>
                <ul className="flex flex-col gap-3">
                  {bramptonLeaseIssues.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Resources for Brampton Renters</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Brampton and Peel Region have several organizations that provide free or low-cost legal
                  help to tenants:
                </p>
                <ul className="flex flex-col gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Peel Community Legal Services</strong> — free legal advice for low-income residents of Peel Region, including tenancy matters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Tenant Duty Counsel (LTB)</strong> — free legal assistance at LTB hearings for unrepresented tenants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                    <span><strong>Ontario Human Rights Commission</strong> — if you have experienced discriminatory treatment in the rental process based on race, national origin, or immigration status</span>
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
                <h3 className="font-bold text-lg mb-2">Review your Brampton lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI flags common Brampton lease issues — illegal fees, basement apartment clauses,
                  and terms that conflict with the Ontario RTA.
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
                    { label: "Mississauga Lease Help", href: "/canada/ontario/mississauga" },
                    { label: "Toronto Lease Help", href: "/canada/ontario/toronto" },
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
