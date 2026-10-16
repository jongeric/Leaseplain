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
  title: "How Much Does a Tenant Lawyer Cost in Canada? | LeasePlain",
  description:
    "What a tenant lawyer or paralegal actually costs — hourly rates, flat fees for a hearing, and the free options (legal clinics, tenant duty counsel, legal aid) most renters don't know about.",
  alternates: { canonical: "https://leaseplain.com/blog/tenant-lawyer-cost-canada" },
  openGraph: {
    title: "How Much Does a Tenant Lawyer Cost in Canada? | LeasePlain",
    description:
      "Hourly rates, flat fees, and the free tenant-help options most renters miss — plus when you actually need a lawyer.",
    url: "https://leaseplain.com/blog/tenant-lawyer-cost-canada",
    type: "article",
    publishedTime: "2026-10-16T00:00:00Z",
    modifiedTime: "2026-10-16T00:00:00Z",
  },
  keywords: ["how much does a tenant lawyer cost", "tenant lawyer cost canada", "landlord tenant lawyer cost", "eviction lawyer cost", "paralegal cost LTB"],
};

const faqItems = [
  {
    q: "How much does a tenant lawyer cost in Canada?",
    a: "It varies widely. A licensed paralegal (who can represent you at Ontario's Landlord and Tenant Board) typically charges $75–$250 per hour, or a flat fee of roughly $500–$2,500 to handle a hearing. A lawyer usually costs $200–$500+ per hour. But many tenants pay nothing — community legal clinics and tenant duty counsel offer free help to those who qualify.",
  },
  {
    q: "Are there free options instead of paying a lawyer?",
    a: "Yes, and most renters don't know about them. Legal Aid-funded community legal clinics help lower-income tenants at no cost. On hearing day, free Tenant Duty Counsel at the tribunal can give advice and sometimes represent you. Tenant-rights organizations and provincial advocacy lines also give free guidance.",
  },
  {
    q: "Do I need a lawyer for the Landlord and Tenant Board?",
    a: "No — you're allowed to represent yourself at the LTB (and equivalent tribunals in other provinces), and many tenants do. Representation helps most when the stakes are high (an eviction, a large money claim, or a bad-faith N12), the facts are disputed, or the landlord has their own representative.",
  },
  {
    q: "What's the difference between a paralegal and a lawyer for tenant matters?",
    a: "In Ontario, licensed paralegals can represent tenants at the LTB and usually cost less than lawyers — for most routine tenancy disputes a paralegal is enough. A lawyer is worth it for complex cases, appeals to Divisional Court, or matters that go beyond the tribunal's jurisdiction.",
  },
  {
    q: "Can I recover my legal costs if I win?",
    a: "Usually only in limited situations. Tribunals like the LTB award costs sparingly — typically only where a party acted unreasonably or in bad faith. Don't assume you'll be reimbursed; budget for your own costs, and use free clinics where you can.",
  },
];

export default function TenantLawyerCostPage() {
  return (
    <>
      <ArticleSchema
        headline={"How Much Does a Tenant Lawyer Cost in Canada?"}
        description={"What a tenant lawyer or paralegal actually costs — hourly rates, flat fees for a hearing, and the free options (legal clinics, tenant duty counsel, legal aid) most renters don't know about."}
        url="https://leaseplain.com/blog/tenant-lawyer-cost-canada"
        datePublished="2026-10-16"
        dateModified="2026-10-16"
        keywords={["how much does a tenant lawyer cost", "tenant lawyer cost canada", "paralegal cost LTB"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Tenant Lawyer Cost", href: "https://leaseplain.com/blog/tenant-lawyer-cost-canada" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/tenant-lawyer-cost-canada",
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
                <span>Tenant Lawyer Cost</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Canada
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  October 16, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                How Much Does a Tenant Lawyer Cost in Canada?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Facing an eviction or a dispute and wondering what help costs? Tenant representation runs
                from <strong>free</strong> (legal clinics and duty counsel) to a few hundred dollars for a
                paralegal to several thousand for a lawyer. Here&apos;s what each option really costs — and
                the free help most renters miss.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="October 2026" jurisdiction="Canadian legal-aid & tribunal practice" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Short Answer</h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Community legal clinic / duty counsel:</strong> free if you qualify.</li>
                    <li><strong>Licensed paralegal (Ontario LTB):</strong> ~$75–$250/hour, or a flat ~$500–$2,500 for a hearing.</li>
                    <li><strong>Lawyer:</strong> ~$200–$500+/hour.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mt-3">Figures are typical ranges across Canada — your actual cost depends on the province, the complexity, and whether the matter settles or goes to a full hearing.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Free Help Most Renters Don&apos;t Know About</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">Before you pay anyone, check these:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Community legal clinics</strong> — Legal Aid funds clinics that represent lower-income tenants for free in evictions, repairs, and rent disputes.</li>
                    <li><strong>Tenant Duty Counsel</strong> — free advice (and sometimes representation) available at the tribunal on your hearing day.</li>
                    <li><strong>Tenant-rights organizations &amp; provincial advocacy lines</strong> — free guidance on your options and the process.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Paralegal vs. Lawyer</h2>
                  <p className="text-slate-700 leading-relaxed">In Ontario, <strong>licensed paralegals can represent tenants at the Landlord and Tenant Board</strong> and usually cost less than a lawyer — for most routine tenancy disputes, a paralegal is enough. A lawyer makes sense for complex cases, an appeal to Divisional Court, or issues beyond the tribunal&apos;s jurisdiction. Other provinces vary in who can represent you, so confirm locally.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Do You Even Need One?</h2>
                  <p className="text-slate-700 leading-relaxed">You can represent yourself at the LTB and most provincial tribunals, and many tenants do. Representation pays off most when: it&apos;s an <Link href="/blog/how-to-fight-an-illegal-eviction-ontario" className="text-blue-600 hover:underline">eviction</Link>, there&apos;s a large money claim, the facts are genuinely disputed, it&apos;s a possible <Link href="/blog/bad-faith-n12-t5-compensation-ontario" className="text-blue-600 hover:underline">bad-faith N12</Link>, or the landlord already has a representative.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Find a tenant lawyer or paralegal</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Browse our directory of tenant-side lawyers, paralegals, and advocates across Canada.
                  </p>
                  <Link href="/tenant-lawyer" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Browse the Directory
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "How to Fight an Illegal Eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
                      { label: "Bad-Faith N12 & T5 Compensation", href: "/blog/bad-faith-n12-t5-compensation-ontario" },
                      { label: "LTB Fees & Wait Times", href: "/ltb-fees-timeline" },
                      { label: "Rent Bank & Arrears Help", href: "/blog/rent-bank-arrears-help-ontario" },
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
