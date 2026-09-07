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
  title: "Is Tenant Insurance Mandatory in Ontario? | LeasePlain",
  description:
    "Ontario law doesn't require tenant insurance — but your landlord can require it in the lease, and often does. What it covers, whether the clause is enforceable, and why it's usually worth it anyway.",
  alternates: { canonical: "https://leaseplain.com/blog/tenant-insurance-ontario" },
  openGraph: {
    title: "Is Tenant Insurance Mandatory in Ontario? | LeasePlain",
    description:
      "The law doesn't require it, but your lease can. What tenant insurance covers in Ontario and whether the clause holds.",
    url: "https://leaseplain.com/blog/tenant-insurance-ontario",
    type: "article",
    publishedTime: "2026-09-07T00:00:00Z",
    modifiedTime: "2026-09-07T00:00:00Z",
  },
  keywords: [
    "is tenant insurance mandatory ontario",
    "does landlord require tenant insurance ontario",
    "renters insurance ontario",
    "tenant insurance clause enforceable ontario",
    "what does tenant insurance cover",
  ],
};

const faqItems = [
  {
    q: "Is tenant insurance mandatory in Ontario?",
    a: "There's no provincial law that forces tenants to carry insurance. However, a landlord is allowed to make it a condition of the lease, and many do. If your signed lease requires it, that requirement is generally enforceable and failing to keep coverage can be a breach of the lease.",
  },
  {
    q: "Can my landlord evict me for not having tenant insurance?",
    a: "If your lease requires insurance and you don't maintain it, the landlord could treat it as a breach and, in theory, pursue eviction through the LTB — though the Board weighs the seriousness of the breach. The simpler outcome is to just keep a policy, which is inexpensive.",
  },
  {
    q: "What does tenant insurance cover?",
    a: "Three main things: your personal belongings (against fire, theft, water damage, etc.), personal liability if someone is injured in your unit or you accidentally damage the building, and additional living expenses if a covered event makes your unit uninhabitable. It does not cover the building itself — that's the landlord's insurance.",
  },
  {
    q: "Does the landlord's insurance cover my belongings?",
    a: "No. The landlord's policy covers the building and their liability, not your possessions. If a fire or flood destroys your furniture, electronics, and clothing, only your own tenant insurance will reimburse you.",
  },
];

export default function TenantInsuranceOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline="Is Tenant Insurance Mandatory in Ontario?"
        description="Ontario law doesn't require tenant insurance — but your landlord can require it in the lease, and often does. What it covers, whether the clause is enforceable, and why it's usually worth it."
        url="https://leaseplain.com/blog/tenant-insurance-ontario"
        datePublished="2026-09-07"
        dateModified="2026-09-07"
        keywords={["is tenant insurance mandatory ontario", "renters insurance ontario", "tenant insurance clause enforceable ontario"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Is Tenant Insurance Mandatory in Ontario?", href: "https://leaseplain.com/blog/tenant-insurance-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/tenant-insurance-ontario",
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
                <span>Is Tenant Insurance Mandatory?</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Ontario
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  September 7, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Is Tenant Insurance Mandatory in Ontario?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Your lease says you must carry tenant insurance — is that even allowed? The short answer:
                the province doesn&apos;t require it, but your landlord can, and the clause is usually
                enforceable. Here&apos;s what it covers and why you probably want it regardless.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Law vs Your Lease</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    There is <strong>no Ontario law requiring tenants to carry insurance</strong>. But that
                    doesn&apos;t mean you can always skip it. A landlord is entitled to make tenant
                    insurance a <strong>condition of the lease</strong>, and it&apos;s an extremely common
                    clause. If you signed a lease that requires it, that&apos;s a term you agreed to — and
                    unlike lease-break penalties or &quot;no pets&quot; clauses, a reasonable insurance
                    requirement is generally <strong>enforceable</strong>.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    So the honest answer to &quot;is it mandatory?&quot; is: not by law, but very likely by
                    your contract.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What Tenant Insurance Actually Covers</h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Your belongings</strong> — furniture, electronics, clothing — against fire, theft, and many kinds of water damage.</li>
                    <li><strong>Personal liability</strong> — if a guest is injured in your unit, or you accidentally cause damage (say a kitchen fire that spreads), this can cover the claim.</li>
                    <li><strong>Additional living expenses</strong> — hotel and extra costs if a covered event makes your unit temporarily unlivable.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Landlord&apos;s Insurance Won&apos;t Save You</h2>
                  <p className="text-slate-700 leading-relaxed">
                    A frequent and costly misunderstanding: your landlord&apos;s policy covers the{" "}
                    <strong>building and their liability — not your stuff</strong>. If a pipe bursts or a
                    fire starts, the landlord repairs the structure, but your ruined possessions are your
                    problem unless you have your own policy. Worse, if <em>you</em> accidentally cause
                    damage to the building, the landlord&apos;s insurer could come after you. Liability
                    coverage is the part tenants most underestimate.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What If You Don&apos;t Keep It?</h2>
                  <p className="text-slate-700 leading-relaxed">
                    If your lease requires insurance and you let it lapse, that&apos;s a breach of the lease.
                    A landlord could raise it at the LTB, though the Board weighs how serious a breach is.
                    Given that renters&apos; policies often cost only a few dollars a week, the practical
                    move is simply to keep a policy rather than risk it — and to keep proof you can show
                    the landlord on request.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Before You Sign</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Read the insurance clause carefully. A reasonable requirement to carry a standard
                    tenant policy is fine; a clause demanding the landlord be added as an &quot;additional
                    insured&quot; for unusually high limits is worth questioning. Run your lease through our{" "}
                    <Link href="/tools/clause-checker" className="text-blue-600 hover:underline">clause checker</Link>{" "}
                    to see every obligation spelled out in plain English.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">What does your lease really require?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Paste your lease and get a plain-English breakdown of every clause — free.
                  </p>
                  <Link href="/tools/clause-checker" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Free Clause Checker
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Ontario Standard Lease Explained", href: "/blog/ontario-standard-lease-explained" },
                      { label: "Lease Red Flags to Watch For", href: "/blog/lease-red-flags-to-watch-for" },
                      { label: "First Apartment Checklist", href: "/blog/first-apartment-checklist-canada" },
                      { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
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
