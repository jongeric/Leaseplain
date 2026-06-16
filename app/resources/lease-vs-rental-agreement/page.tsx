import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, ChevronRight, Upload } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease vs Rental Agreement: What's the Difference? | LeasePlain",
  description:
    "Learn the key differences between a fixed-term lease and a month-to-month rental agreement in Ontario — and which is better for tenants.",
  alternates: { canonical: "https://leaseplain.com/resources/lease-vs-rental-agreement" },
  openGraph: {
    title: "Lease vs Rental Agreement: What's the Difference? | LeasePlain",
    description: "Learn the key differences between a fixed-term lease and a month-to-month rental agreement in Ontario — and which is better for tenants.",
    url: "https://leaseplain.com/resources/lease-vs-rental-agreement",
    type: "website",
  },
  keywords: ["lease vs rental agreement", "fixed-term lease", "month-to-month tenancy", "lease difference Ontario", "rental agreement types Canada"],
};

const faqItems = [
  { q: "What is the main difference between a lease and a rental agreement?", a: "A lease is a fixed-term contract (typically 12 months) that can only be ended by proper notice at renewal or for legal cause. A rental agreement is usually month-to-month, giving both parties more flexibility to terminate with the required notice." },
  { q: "Which is better for a tenant — a fixed-term lease or month-to-month?", a: "It depends on your situation. A fixed-term lease provides stability and locks in your rent for the term. Month-to-month offers flexibility if you may need to move. In most provinces, a fixed-term lease converts to month-to-month at the end — giving you both stability and eventual flexibility." },
  { q: "Can a landlord evict a tenant during a fixed-term lease?", a: "Only for legal cause (non-payment, damage, etc.) or if the landlord needs the unit for specific permitted reasons. A landlord generally cannot evict a tenant simply because they want them out during a fixed term." },
  { q: "Does a month-to-month rental agreement provide the same protections as a lease?", a: "Yes. Provincial tenancy law applies equally to both. Month-to-month tenants have the same rights regarding maintenance, deposits, rent increases, and eviction protection as those on a fixed-term lease." },
  { q: "What happens at the end of a fixed-term lease if I don't sign a new one?", a: "In most Canadian provinces, the tenancy automatically converts to a month-to-month arrangement under the same terms. You are NOT required to sign a new lease. The existing rent-control protections and rights continue." },
];

export default function LeaseVsRentalAgreementPage() {
  return (
    <>
      <ArticleSchema
        headline="Lease vs Rental Agreement: What's the Difference?"
        description="Learn the key differences between a fixed-term lease and a month-to-month rental agreement in Ontario — and which is better for tenants."
        url="https://leaseplain.com/resources/lease-vs-rental-agreement"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["lease vs rental agreement", "fixed-term lease", "month-to-month tenancy", "lease difference Ontario", "rental agreement types Canada"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Resources", href: "https://leaseplain.com/resources" },
        { name: "Lease Basics", href: "https://leaseplain.com/resources/lease-basics" },
        { name: "Lease vs Rental Agreement", href: "https://leaseplain.com/resources/lease-vs-rental-agreement" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/resources/lease-vs-rental-agreement",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".speakable-summary"]
            }
          }).replace(/</g, "\u003c")
        }}
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
        }).replace(/</g, "\u003c") }}
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
              <Link href="/resources/lease-basics" className="hover:underline">Lease Basics</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Lease vs Rental Agreement</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Resource
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease vs Rental Agreement: What's the Difference?
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              The terms are often used interchangeably — but there are meaningful differences
              between a fixed-term lease and a month-to-month rental agreement that every renter
              should understand.
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
                  Lease vs Rental Agreement: The Key Differences
                </h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  In everyday language, "lease" and "rental agreement" are often used to mean the
                  same thing. Technically, though, they refer to different structures:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left p-3 font-semibold text-slate-900 border border-slate-200">Feature</th>
                        <th className="text-left p-3 font-semibold text-slate-900 border border-slate-200">Fixed-Term Lease</th>
                        <th className="text-left p-3 font-semibold text-slate-900 border border-slate-200">Month-to-Month</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Duration", "Set period (usually 1 year)", "Renews monthly indefinitely"],
                        ["Rent stability", "Locked in for the term", "Can increase with proper notice"],
                        ["Flexibility", "Lower — harder to leave early", "Higher — 60 days notice to leave"],
                        ["Security", "High — landlord can't end it without cause", "Moderate — landlord can end with proper notice"],
                        ["Common use", "New tenancies", "After a fixed term expires"],
                      ].map(([feature, fixed, monthly]) => (
                        <tr key={feature} className="even:bg-slate-50">
                          <td className="p-3 font-medium text-slate-900 border border-slate-200">{feature}</td>
                          <td className="p-3 text-slate-700 border border-slate-200">{fixed}</td>
                          <td className="p-3 text-slate-700 border border-slate-200">{monthly}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Which Is Better for Tenants?
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Both have advantages depending on your situation:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5">
                    <h3 className="font-bold text-slate-900 mb-3">Choose a Fixed-Term Lease If...</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {[
                        "You plan to stay at least a year",
                        "You want rent locked in during high-inflation periods",
                        "You want protection from being asked to move without cause",
                        "You're moving to a new city and want stability",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5">
                    <h3 className="font-bold text-slate-900 mb-3">Choose Month-to-Month If...</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {[
                        "You're not sure how long you'll stay",
                        "You may need to move for work or family",
                        "You're in a transitional living situation",
                        "You want to leave with 60 days notice at any time",
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
                  In Ontario: What Happens After a Fixed-Term Lease?
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  This is where Ontario's rules differ from what many renters expect. When a
                  fixed-term lease ends in Ontario:
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      heading: "It automatically becomes month-to-month.",
                      detail: "You don't need to sign a new lease, and you are not required to move out. The tenancy simply continues on the same terms, renewing monthly.",
                    },
                    {
                      heading: "The landlord cannot force you to sign a new lease.",
                      detail: "Under the Residential Tenancies Act, a landlord cannot make signing a new lease a condition of continuing to rent. Demanding a new lease or threatening eviction if you don't sign is not permitted.",
                    },
                    {
                      heading: "Rent can only increase once every 12 months.",
                      detail: "Whether you're on a fixed-term lease or month-to-month, your landlord can only raise your rent once every 12 months, with at least 90 days written notice, and only up to the provincial rent increase guideline (unless the unit is exempt from rent control).",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">{item.heading}</p>
                        <p className="text-slate-700 text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <strong>Key takeaway:</strong> In Ontario, fixed-term leases provide stability
                    during the term, but you're never truly "locked out" of a month-to-month
                    arrangement when the term ends — unless you choose to sign a new fixed-term lease.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqItems} />
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
                    { label: "What Is a Lease Agreement?", href: "/resources/what-is-a-lease-agreement" },
                    { label: "Lease Agreement Explained", href: "/resources/lease-agreement-explained" },
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
