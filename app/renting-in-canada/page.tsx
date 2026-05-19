import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload, CheckCircle, AlertTriangle, BookOpen } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Renting in Canada: Complete Guide for New Renters | LeasePlain",
  description:
    "Everything you need to know about renting in Canada — how leases work, tenant rights by province, what to watch for, and how to protect yourself before signing.",
  alternates: { canonical: "https://leaseplain.com/renting-in-canada" },
  openGraph: {
    title: "Renting in Canada: Complete Guide for New Renters | LeasePlain",
    description: "Everything you need to know about renting in Canada — how leases work, tenant rights by province, what to watch for, and how to protect yourself before signing.",
    url: "https://leaseplain.com/renting-in-canada",
    type: "website",
  },
};

const leaseSections = [
  "Parties — identifies the landlord and tenant(s) by full legal name",
  "Rental unit address and description — the specific unit being rented",
  "Term — start date, end date, and whether it is fixed-term or month-to-month",
  "Rent — amount, due date, and acceptable payment methods",
  "Deposit — type, amount, and conditions for return",
  "Utilities and services — what is included in rent (heat, electricity, parking, internet)",
  "Rules and restrictions — pets, subletting, guests, smoking policies",
  "Maintenance and repairs — responsibilities of landlord vs. tenant",
];

const beforeYouSign = [
  "Confirm the landlord's identity — ask for government-issued ID and proof of ownership or management authority.",
  "Read the entire lease, not just the key terms page — illegal or unusual clauses are often buried in schedules.",
  "Verify the deposit amount against your province's legal maximum.",
  "Check whether utilities are included and confirm what you will actually pay each month.",
  "Note what the lease says about rent increases — in provinces with rent control, the legal limit applies regardless of what the lease says.",
  "Understand the notice period you must give to end the tenancy.",
  "Check the entry provision — your landlord should be required to give advance written notice before entering.",
  "Look for any \"vacate at end of term\" clause — in many provinces, these are illegal if used to reset rent.",
  "Confirm what happens at the end of the fixed term — does it convert to month-to-month or require renewal?",
  "Do not sign under pressure — if a landlord refuses to give you time to read the lease, consider that a red flag.",
];

const commonMistakes = [
  "Paying a security deposit above the provincial legal maximum without questioning it.",
  "Signing a lease that includes an illegal vacate clause, then leaving when the term ends because the landlord asks.",
  "Failing to do a move-in inspection and document existing damage — this can cost you your deposit when you leave.",
  "Not giving proper notice to end the tenancy, resulting in owing rent for an extra month.",
  "Assuming verbal promises made before signing are legally binding — get everything in the written lease.",
  "Ignoring a rent increase notice that exceeds the provincial maximum, instead of formally disputing it.",
];

const signingProcess = [
  { step: "1", title: "Find a unit", desc: "Search listings, attend viewings, ask about included utilities, building rules, and existing tenants." },
  { step: "2", title: "Application", desc: "Complete a rental application — landlords can ask for references, credit checks, and income verification. They cannot discriminate based on protected grounds." },
  { step: "3", title: "Review and sign", desc: "Read the full lease. Check every clause. Use LeasePlain to analyze it. Once you sign, you are bound by its terms." },
  { step: "4", title: "Move-in inspection", desc: "Do a condition inspection with your landlord on or before move-in day. Document every existing mark, stain, or damage in writing and photos." },
  { step: "5", title: "Occupancy", desc: "Keep copies of your lease, inspection report, and all communications with your landlord. Know your province's dispute tribunal." },
];

const provinceLinks = [
  { label: "Ontario", href: "/canada/ontario" },
  { label: "British Columbia", href: "/canada/british-columbia" },
  { label: "Alberta", href: "/canada/alberta" },
  { label: "Quebec", href: "/canada/quebec" },
  { label: "Manitoba", href: "/canada/manitoba" },
  { label: "Saskatchewan", href: "/canada/saskatchewan" },
  { label: "Nova Scotia", href: "/canada/nova-scotia" },
  { label: "New Brunswick", href: "/canada/new-brunswick" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I have to use a standard lease form in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the province. Ontario requires landlords to use the provincial Standard Lease form for most residential tenancies. Quebec requires use of the TAL's mandatory bail form. BC, Alberta, and other provinces do not mandate a specific form, but all leases must comply with the applicable provincial legislation.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when my fixed-term lease ends in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most provinces, a fixed-term lease converts to a month-to-month tenancy automatically at the end of the term unless the landlord or tenant gives proper notice or renews the lease. You do not have to leave at the end of a fixed term simply because the term has ended — in most provinces, your landlord cannot force you out for this reason alone.",
      },
    },
    {
      "@type": "Question",
      name: "Can a landlord refuse to rent to me for any reason in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Landlords across Canada cannot refuse to rent on grounds prohibited by provincial human rights legislation, including race, national or ethnic origin, colour, religion, age, sex, sexual orientation, gender identity, marital status, family status, disability, and receipt of public assistance (in some provinces). Screening based on legitimate criteria (creditworthiness, references, income) is permitted.",
      },
    },
    {
      "@type": "Question",
      name: "How much notice do I need to give before moving out in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notice requirements vary by province. In Ontario and BC, you generally need to give 60 days written notice before the end of a rental period. In Quebec, it is 1 to 3 months depending on the lease term. In Alberta, 1 calendar month for a monthly tenancy. Always check your province's rules and the specific terms of your lease.",
      },
    },
    {
      "@type": "Question",
      name: "Is my landlord responsible for repairs in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. In every Canadian province, landlords are legally required to maintain the rental unit in a good state of repair and to comply with health and safety standards. This obligation exists regardless of what the lease says. Tenants are generally responsible for damage they cause beyond normal wear and tear. If your landlord fails to make required repairs, you can file a complaint with your provincial tribunal.",
      },
    },
  ],
};

export default function RentingInCanadaPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Renting in Canada</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              Complete Renter Guide
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Renting in Canada: Complete Guide for New Renters
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              Canada's easiest way to understand a lease before signing. Whether you're a
              first-time renter, a newcomer to Canada, or renewing a lease in a new province,
              this guide covers everything you need to know about how Canadian rental law works —
              in plain English.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-14">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How Renting Works in Canada</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Renting in Canada starts with finding a unit and submitting a rental application.
                  Landlords can ask for references, a credit check, proof of income, and identification.
                  They cannot discriminate based on race, religion, national origin, family status,
                  disability, or other protected grounds under provincial human rights legislation.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Once accepted, you will be asked to sign a lease — a legally binding contract
                  that governs your tenancy. In Ontario, landlords must use the provincial Standard
                  Lease form. In Quebec, the TAL's mandatory bail form is required. In other provinces,
                  no standard form is mandated, but all leases must comply with provincial tenancy law.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Canada has no national tenancy law — each province has its own rules for deposits,
                  rent increases, evictions, and dispute resolution. Your rights depend on where
                  you live. See our{" "}
                  <Link href="/canadian-lease-laws" className="text-blue-600 hover:underline">
                    Canadian Lease Laws guide
                  </Link>{" "}
                  for a province-by-province comparison.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What&apos;s in a Canadian Lease?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  A standard Canadian lease contains several key sections. Understanding each one
                  before you sign protects you from surprises after move-in.
                </p>
                <ol className="flex flex-col gap-3">
                  {leaseSections.map((s, i) => (
                    <li key={s} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Tenant Rights in Every Province</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  While the specifics vary, every Canadian province provides these core protections:
                  limits on deposits, right to a habitable unit, protection from illegal eviction,
                  and access to a dispute tribunal or board. The strength of these protections —
                  especially around rent control and deposit limits — varies significantly. See the
                  guides below for your province.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {provinceLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-sm font-medium text-slate-700 hover:text-blue-700 transition-all"
                    >
                      <MapPin className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" aria-hidden="true" />
                      {l.label} Tenant Rights
                      <ChevronRight className="w-3 h-3 text-slate-300 ml-auto" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Before You Sign: 10 Things to Check</h2>
                <ol className="flex flex-col gap-3">
                  {beforeYouSign.map((item, i) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Mistakes First-Time Renters Make in Canada</h2>
                <ul className="flex flex-col gap-3">
                  {commonMistakes.map((m) => (
                    <li key={m} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">The Canadian Lease Signing Process</h2>
                <div className="flex flex-col gap-4">
                  {signingProcess.map((step) => (
                    <div key={step.step} className="flex items-start gap-4 p-5 rounded-xl border border-slate-200">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">{step.title}</div>
                        <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions About Renting in Canada</h2>
                <div className="flex flex-col gap-6">
                  {faqSchema.mainEntity.map((faq) => (
                    <div key={faq.name} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                      <h3 className="font-semibold text-slate-900 mb-2 text-base">{faq.name}</h3>
                      <p className="text-slate-700 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <aside className="flex flex-col gap-5 lg:sticky lg:top-8 self-start">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Analyze your Canadian lease</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and get a plain-English breakdown of your rights, obligations,
                  and any red flags — in under a minute.
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
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Provincial Guides</h3>
                <ul className="flex flex-col gap-2">
                  {provinceLinks.map((l) => (
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
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">More Resources</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Canadian Lease Laws", href: "/canadian-lease-laws" },
                    { label: "Lease Glossary", href: "/glossary" },
                    { label: "Common Lease Clauses", href: "/lease-clauses" },
                    { label: "First-Time Renter Guide", href: "/first-time-renter-canada" },
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

        <section className="bg-slate-50 border-t border-slate-100 py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to understand your lease?</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Upload your lease and LeasePlain will explain every clause in plain English, flag
              anything unusual, and give you the questions to ask your landlord — before you sign.
            </p>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              <Upload className="w-4 h-4" aria-hidden="true" />
              Analyze My Lease Free
            </Link>
            <p className="text-xs text-slate-400 mt-3">Not legal advice</p>
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Footer />
    </div>
  );
}
