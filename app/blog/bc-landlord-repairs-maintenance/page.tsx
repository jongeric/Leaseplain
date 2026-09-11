import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock } from "lucide-react";
import ReviewedByline from "@/components/ReviewedByline";
import TableOfContents from "@/components/TableOfContents";
import ReadingProgress from "@/components/ReadingProgress";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Landlord Repairs & Maintenance in BC: Your Rights | LeasePlain",
  description:
    "Your BC landlord must keep the unit repaired, safe, and meeting health and safety standards — including heat and pest control. What counts as their responsibility, how to demand repairs, and how to get a rent reduction if they don't act.",
  alternates: { canonical: "https://leaseplain.com/blog/bc-landlord-repairs-maintenance" },
  openGraph: {
    title: "Landlord Repairs & Maintenance in BC: Your Rights | LeasePlain",
    description:
      "Repairs, heat, pests, and emergency repairs in BC — your landlord's obligations and how to enforce them.",
    url: "https://leaseplain.com/blog/bc-landlord-repairs-maintenance",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["landlord repairs bc", "landlord maintenance obligations bc", "emergency repairs bc", "no heat rental bc", "rent reduction repairs bc"],
};

const faqItems = [
  {
    q: "Is my landlord responsible for repairs in BC?",
    a: "Yes. BC landlords must keep the unit and residential property in a state that complies with health, safety, and housing standards and is suitable for occupation. This can't be waived by a lease clause, and applies even to problems that existed before you moved in.",
  },
  {
    q: "Can I do the repair myself and deduct it from rent in BC?",
    a: "Only for qualifying emergency repairs, and only after making reasonable attempts to contact the landlord and following the proper process. Keep receipts. For non-emergencies, apply to the RTB rather than withholding or deducting rent on your own.",
  },
  {
    q: "What if my landlord won't fix something in BC?",
    a: "Request the repair in writing and keep records. If the landlord doesn't act, apply to the Residential Tenancy Branch for an order to complete the repairs and, where appropriate, a rent reduction for the time you went without.",
  },
  {
    q: "Can my landlord shut off my heat in BC?",
    a: "No. Heat and hot water are vital services the landlord must provide. Deliberately cutting them off — even during a dispute — is a serious violation you can take to the RTB.",
  },
];

export default function BcLandlordRepairsMaintenancePage() {
  return (
    <>
      <ArticleSchema
        headline={"Landlord Repairs and Maintenance in BC: Your Rights"}
        description={"Your BC landlord must keep the unit repaired, safe, and meeting health and safety standards — including heat and pest control. What counts as their responsibility, how to demand repairs, and how to get a rent reduction if they don't act."}
        url="https://leaseplain.com/blog/bc-landlord-repairs-maintenance"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["landlord repairs bc", "landlord maintenance obligations bc", "emergency repairs bc"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Landlord Repairs in BC", href: "https://leaseplain.com/blog/bc-landlord-repairs-maintenance" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/bc-landlord-repairs-maintenance",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".speakable-summary"] },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <div className="flex flex-col min-h-full">
        <Navbar />
        <ReadingProgress />

        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
                <Link href="/" className="hover:underline">Home</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <Link href="/blog" className="hover:underline">Blog</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>Landlord Repairs in BC</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  British Columbia
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  September 11, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Landlord Repairs &amp; Maintenance in BC: Your Rights
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                In BC your landlord is legally on the hook for keeping your home in good repair — heat, plumbing, pests, and safety included. Here&apos;s what they must fix, how to make them, and what to do when they drag their feet.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What the Landlord Must Maintain</h2>
                  <p className="text-slate-700 leading-relaxed">Under BC&apos;s Residential Tenancy Act, the landlord must keep the unit and property <strong>in a state of repair that complies with health, safety, and housing standards</strong> and makes it suitable for occupation. This applies even if you knew about a problem before moving in, and even if a lease clause tries to offload it onto you.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Heat, Water, and Pests Are Their Job</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">Vital services and infestations fall squarely on the landlord:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Heat and hot water</strong> must be provided and maintained — a landlord can&apos;t cut them off during a dispute.</li>
                    <li><strong>Pest infestations</strong> (bed bugs, cockroaches, rodents) are the landlord&apos;s responsibility to treat professionally.</li>
                    <li><strong>Structural, plumbing, and electrical</strong> repairs are the landlord&apos;s, not yours.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Emergency Repairs</h2>
                  <p className="text-slate-700 leading-relaxed">For urgent problems — major leaks, no heat, broken locks, blocked plumbing — BC has an <strong>emergency repair</strong> process. If you can&apos;t reach the landlord after reasonable attempts, you may be able to arrange the repair yourself and be reimbursed. Keep receipts and follow the required steps so your claim holds up.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Demand Repairs</h2>
                  <p className="text-slate-700 leading-relaxed">Put every request <strong>in writing</strong> and keep a copy, with dates and photos. A clear paper trail is what turns a dispute in your favour. If the landlord ignores you, you can apply to the RTB for an order that they complete the repairs.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Rent Reductions and Compensation</h2>
                  <p className="text-slate-700 leading-relaxed">When repairs aren&apos;t done or a service is lost, the RTB can order a <strong>rent reduction</strong> for the period you went without, plus other remedies. You generally shouldn&apos;t just stop paying rent on your own — apply to the RTB instead, so you&apos;re protected.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Landlord ignoring repairs?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Send a clear, dated repair request they can&apos;t say they never received.
                  </p>
                  <Link href="/letters/repair-request-letter" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Repair Request Letter
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "BC Security Deposit Rules", href: "/blog/bc-security-deposit-rules" },
                      { label: "Bed Bugs & Pests: Who's Responsible?", href: "/blog/bed-bugs-pests-landlord-ontario" },
                      { label: "BC Eviction Notices & the RTB", href: "/blog/bc-eviction-notices-rtb" },
                      { label: "BC Tenant Rights", href: "/canada/british-columbia" },
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
