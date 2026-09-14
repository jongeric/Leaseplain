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
  title: "Nova Scotia Rent Increase Rules: The 5% Cap Explained | LeasePlain",
  description:
    "Nova Scotia caps annual rent increases at 5% through the end of 2027, with increases allowed only once a year and four months' written notice. How the cap works and how to respond.",
  alternates: { canonical: "https://leaseplain.com/blog/nova-scotia-rent-increase-rules" },
  openGraph: {
    title: "Nova Scotia Rent Increase Rules: The 5% Cap Explained | LeasePlain",
    description:
      "Nova Scotia's 5% rent cap (extended to end of 2027), the once-a-year rule, and the 4-month notice.",
    url: "https://leaseplain.com/blog/nova-scotia-rent-increase-rules",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["nova scotia rent increase 2026", "nova scotia rent cap 5 percent", "how much can landlord raise rent nova scotia", "rent increase notice nova scotia", "ns rent control"],
};

const faqItems = [
  {
    q: "How much can my landlord raise rent in Nova Scotia?",
    a: "No more than 5% a year — a temporary cap extended through December 31, 2027 — and only once every 12 months, with four months' written notice.",
  },
  {
    q: "How much notice for a rent increase in Nova Scotia?",
    a: "At least four months' written notice before the increase takes effect, and only once in a 12-month period.",
  },
  {
    q: "Does the Nova Scotia rent cap apply to new tenants?",
    a: "No. The 5% cap applies during an existing tenancy. When a new tenant moves in, the landlord can set any starting rent — there's no vacancy control.",
  },
  {
    q: "What if my landlord raises rent above 5% in Nova Scotia?",
    a: "The increase isn't valid while the cap is in place. Object in writing, keep paying your lawful rent, and apply to the Residential Tenancies Program if the landlord insists.",
  },
];

export default function NovaScotiaRentIncreaseRulesPage() {
  return (
    <>
      <ArticleSchema
        headline={"Nova Scotia Rent Increase Rules: The 5% Cap and Your Rights"}
        description={"Nova Scotia caps annual rent increases at 5% through the end of 2027, with increases allowed only once a year and four months' written notice. How the cap works and how to respond."}
        url="https://leaseplain.com/blog/nova-scotia-rent-increase-rules"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["nova scotia rent increase 2026", "nova scotia rent cap 5 percent", "how much can landlord raise rent nova scotia"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Nova Scotia Rent Increase Rules", href: "https://leaseplain.com/blog/nova-scotia-rent-increase-rules" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/nova-scotia-rent-increase-rules",
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
                <span>Nova Scotia Rent Increase Rules</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Nova Scotia
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
                Nova Scotia Rent Increase Rules: The 5% Cap Explained
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Nova Scotia has a temporary rent cap that limits how much your rent can rise — one of the province&apos;s strongest tenant protections. Here&apos;s the current cap, the notice you&apos;re owed, and what to do if a landlord exceeds it.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The 5% Cap</h2>
                  <p className="text-slate-700 leading-relaxed">Nova Scotia limits annual rent increases to <strong>5%</strong>, and this cap has been <strong>extended through December 31, 2027</strong>. It applies to existing tenancies — a landlord can&apos;t raise your rent above 5% in a 12-month period while the cap is in place.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Once a Year, With Four Months&apos; Notice</h2>
                  <p className="text-slate-700 leading-relaxed">Rent can be increased <strong>only once every 12 months</strong>, and the landlord must give at least <strong>four months&apos; written notice</strong> before the increase takes effect. Short notice or a second increase within the year isn&apos;t valid.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">No Vacancy Control</h2>
                  <p className="text-slate-700 leading-relaxed">The cap applies while you stay. When a tenancy ends and a <strong>new tenant</strong> moves in, the landlord can set a new starting rent — Nova Scotia doesn&apos;t have vacancy control. Staying put protects a below-market rent.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If the Increase Is Too High</h2>
                  <p className="text-slate-700 leading-relaxed">If a landlord tries to raise rent above 5%, more than once a year, or without four months&apos; notice, the increase isn&apos;t valid. Put your objection in writing, keep paying your lawful rent, and apply to the <strong>Residential Tenancies Program</strong> if needed.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Is your increase within the cap?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Check a proposed increase against the rules with our free calculator.
                  </p>
                  <Link href="/tools/rent-increase-calculator" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Rent Increase Calculator
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Nova Scotia Security Deposit Rules", href: "/blog/nova-scotia-security-deposit-rules" },
                      { label: "Notice to End a Tenancy in Nova Scotia", href: "/blog/nova-scotia-notice-to-end-tenancy" },
                      { label: "The Nova Scotia Eviction Process", href: "/blog/nova-scotia-eviction-process" },
                      { label: "Nova Scotia Tenant Rights", href: "/canada/nova-scotia" },
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
