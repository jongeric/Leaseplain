import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, CheckCircle, AlertTriangle, ChevronRight, Upload, BookOpen } from "lucide-react";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQAccordion from "@/components/FAQAccordion";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tenant Rights in Ontario – Complete Guide (RTA 2006) | LeasePlain",
  description:
    "A plain-English guide to tenant rights in Ontario under the Residential Tenancies Act. Covers rent, maintenance, eviction, entry, deposits, and more.",
  alternates: { canonical: "https://leaseplain.com/tenant-rights/ontario" },
  openGraph: {
    type: "website",
    title: "Tenant Rights in Ontario – Complete Guide (RTA 2006) | LeasePlain",
    description: "Plain-English guide to Ontario tenant rights under the RTA — rent, eviction, deposits, maintenance, and illegal landlord actions.",
    url: "https://leaseplain.com/tenant-rights/ontario",
  },
  keywords: ["tenant rights Ontario", "Ontario RTA", "residential tenancies act", "Ontario landlord tenant rights", "LTB Ontario"],
};

const coreRights = [
  { right: "Right to safe and habitable housing", detail: "Your landlord must keep the unit in a good state of repair and comply with health and safety standards at all times." },
  { right: "Right to quiet enjoyment", detail: "You have the right to use and enjoy your unit without interference from your landlord. Harassment is illegal." },
  { right: "Protection against illegal entry", detail: "Your landlord must give 24 hours written notice before entering, except in emergencies." },
  { right: "Rent increase protections", detail: "Rent can only be increased once per 12 months, with 90 days written notice, and within the annual guideline (unless exempt)." },
  { right: "Right to dispute eviction", detail: "Your landlord cannot lock you out or remove your belongings. Any eviction must go through the LTB process." },
  { right: "Right to sublet or assign", detail: "You can sublet or assign your lease. Landlords cannot unreasonably withhold consent." },
  { right: "Protection against discrimination", detail: "Landlords cannot refuse to rent or treat tenants differently based on race, gender, disability, family status, and other protected grounds under the Human Rights Code." },
];

const evictionProcess = [
  "Landlord serves written Notice (N-form) for a specific reason (non-payment, misconduct, etc.)",
  "Tenant has a window to remedy the issue (e.g., 14 days to pay overdue rent on N4)",
  "If not resolved, landlord files an L-series application with the LTB",
  "LTB schedules a hearing — both parties can attend and present evidence",
  "If eviction order issued, tenant can request a review or appeal",
  "Sheriff enforcement required — landlord cannot change locks themselves",
];

const illegalLandlordActions = [
  "Changing locks without a LTB order",
  "Removing tenant's belongings",
  "Shutting off utilities to force a tenant out",
  "Harassing or threatening tenants",
  "Entering without proper notice (except emergencies)",
  "Charging a damage deposit beyond the last month's rent",
  "Retaliating against tenants who file LTB applications",
];

const faqItems = [
  { q: "What is the Ontario Residential Tenancies Act?", a: "The Residential Tenancies Act, 2006 (RTA) is Ontario's main law governing landlords and tenants. It sets out rules for rent, deposits, maintenance, evictions, and disputes, and establishes the Landlord and Tenant Board (LTB) to resolve them." },
  { q: "How much can a landlord charge for a deposit in Ontario?", a: "Ontario landlords may only collect a rent deposit equal to one month's rent (applied to your last month). They cannot charge a separate damage or pet deposit, and the deposit must earn annual interest at the guideline rate." },
  { q: "How much notice does a landlord need to give to raise rent in Ontario?", a: "Landlords must give 90 days' written notice using the proper form, and rent can only be increased once every 12 months. Most units are also capped at the annual provincial guideline unless the unit is exempt (first occupied after November 15, 2018)." },
  { q: "Can my landlord evict me without going through the LTB?", a: "No. A landlord cannot change your locks, remove your belongings, or force you out. Every eviction in Ontario must go through the Landlord and Tenant Board, and only a court-appointed sheriff can physically enforce an eviction order." },
  { q: "How do I file an application with Ontario's Landlord and Tenant Board?", a: "Applications can be filed online at tribunalsontario.ca/ltb. Filing fees are $186 online or $201 by paper, and fee waivers are available for low-income applicants. Common tenant applications include T2 (rights interference), T6 (maintenance), and T1 (illegal charges)." },
];

export default function OntarioTenantRightsPage() {
  return (
    <>
      <ArticleSchema
        headline="Tenant Rights in Ontario – Complete Guide (RTA 2006)"
        description="A plain-English guide to tenant rights in Ontario under the Residential Tenancies Act. Covers rent, maintenance, eviction, entry, deposits, and more."
        url="https://leaseplain.com/tenant-rights/ontario"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["tenant rights Ontario", "Ontario RTA", "residential tenancies act Ontario", "LTB Ontario", "eviction rights Ontario"]}
      />
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
        }).replace(/</g, "<") }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".speakable-summary"],
        },
        "url": "https://leaseplain.com/tenant-rights/ontario",
      }).replace(/</g, "\u003c") }} />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tenant Rights", href: "https://leaseplain.com/tenant-rights" },
        { name: "Ontario", href: "https://leaseplain.com/tenant-rights/ontario" },
      ]} />
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/tenant-rights" className="hover:underline">Tenant Rights</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Ontario</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              Ontario Tenant Rights
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Tenant Rights in Ontario: A Complete Plain-English Guide
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Ontario tenants are protected by the <em>Residential Tenancies Act, 2006</em> (RTA),
              one of the strongest tenant protection frameworks in Canada. Here's what you're
              entitled to — and what your landlord cannot legally do.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Core Rights as an Ontario Tenant</h2>
                <div className="flex flex-col gap-5">
                  {coreRights.map((item) => (
                    <div key={item.right} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-blue-600" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm mb-1">{item.right}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Eviction Process in Ontario</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  In Ontario, a landlord cannot evict you without following a specific legal process
                  through the Landlord and Tenant Board. Self-help evictions (changing locks, removing
                  belongings) are illegal and can result in significant penalties for the landlord.
                </p>
                <ol className="flex flex-col gap-3">
                  {evictionProcess.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Form N12: Owner's Own Use Evictions</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  If a landlord wants to move into your unit (or have a close family member move in), they must serve you a Form N12 with at least 60 days notice and pay one month's rent as compensation (under RTA s.48.1, this applies regardless of notice period length). If the landlord does not genuinely occupy the unit within a reasonable time, you may have grounds for a bad-faith eviction claim at the LTB.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Your Landlord Cannot Legally Do</h2>
                <ul className="flex flex-col gap-3">
                  {illegalLandlordActions.map((action) => (
                    <li key={action} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Key Resources for Ontario Tenants</h2>
                <ul className="flex flex-col gap-3 text-sm text-slate-700">
                  <li><strong>Landlord and Tenant Board (LTB)</strong> — <span className="text-slate-500">tribunalsontario.ca/ltb</span> — file applications, check forms, find adjudication hearings. Filing fees are $186 online or $201 by paper; fee waivers are available for low-income applicants.</li>
                  <li><strong>Community Legal Education Ontario (CLEO)</strong> — <span className="text-slate-500">cleo.on.ca</span> — free legal guides for tenants</li>
                  <li><strong>Legal Aid Ontario</strong> — <span className="text-slate-500">legalaid.on.ca</span> — legal representation for low-income tenants</li>
                  <li><strong>Ontario Human Rights Commission</strong> — <span className="text-slate-500">ohrc.on.ca</span> — for discrimination in housing</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
              </div>
            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Does your lease respect your rights?</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and our AI will flag any clauses that violate your rights
                  under the Ontario RTA.
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
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">More Tenant Rights Guides</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Rent Increase Rules", href: "/tenant-rights/rent-increase-rules" },
                    { label: "Breaking a Lease", href: "/tenant-rights/breaking-a-lease" },
                    { label: "Landlord Responsibilities", href: "/tenant-rights/landlord-responsibilities" },
                    { label: "Tenant Rights in Toronto", href: "/tenant-rights/toronto" },
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

              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">
                  <BookOpen className="w-4 h-4 inline mr-1 text-blue-600" aria-hidden="true" />
                  Related Lease Clauses
                </h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Security Deposit", href: "/lease-clause/security-deposit" },
                    { label: "Maintenance Responsibilities", href: "/lease-clause/maintenance" },
                    { label: "Subletting", href: "/lease-clause/subletting" },
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
