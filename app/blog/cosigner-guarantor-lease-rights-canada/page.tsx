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
  title: "Co-signers & Guarantors on a Lease: Your Rights in Canada | LeasePlain",
  description:
    "What a guarantor (co-signer) is actually on the hook for, how long the obligation lasts, the difference between a guarantor and a co-tenant, and how to limit your risk before you sign.",
  alternates: { canonical: "https://leaseplain.com/blog/cosigner-guarantor-lease-rights-canada" },
  openGraph: {
    title: "Co-signers & Guarantors on a Lease: Your Rights in Canada | LeasePlain",
    description:
      "What a guarantor is liable for, how long it lasts, and how to limit your risk before co-signing a lease.",
    url: "https://leaseplain.com/blog/cosigner-guarantor-lease-rights-canada",
    type: "article",
    publishedTime: "2026-10-03T00:00:00Z",
    modifiedTime: "2026-10-03T00:00:00Z",
  },
  keywords: ["lease guarantor canada", "co-signer lease", "guarantor vs co-tenant", "guarantor rights", "co-signing an apartment"],
};

const faqItems = [
  {
    q: "What is a lease guarantor responsible for?",
    a: "A guarantor promises to cover the tenant's obligations if the tenant doesn't — unpaid rent, damage beyond wear and tear, and other costs the lease makes the tenant liable for. If the tenant defaults, the landlord can pursue the guarantor for the full amount, not a share.",
  },
  {
    q: "What's the difference between a guarantor and a co-tenant?",
    a: "A co-tenant lives in the unit and is a full party to the lease with the right to occupy it. A guarantor (co-signer) usually does not live there and has no right to occupy — they only take on financial liability as a backup if the tenant fails to pay or causes damage.",
  },
  {
    q: "How long is a guarantor on the hook?",
    a: "It depends on the wording. Many guarantees are written to continue beyond the first term — into renewals and month-to-month periods — unless the document says otherwise. Read the guarantee carefully: you want it limited to a specific term and amount, not open-ended.",
  },
  {
    q: "Can a guarantor be removed from a lease?",
    a: "Only with the landlord's agreement, or if the guarantee was written to end at a set point (for example, after the first fixed term). Once a lease renews, a guarantee that doesn't specify an end date often carries forward, so get any release in writing.",
  },
  {
    q: "Can a landlord require a guarantor?",
    a: "Yes, a landlord can ask for a guarantor as a condition of renting — but they can't require one only from certain groups in a way that breaches human-rights law (for example, demanding a guarantor only from newcomers or students while not asking others).",
  },
];

export default function CosignerGuarantorPage() {
  return (
    <>
      <ArticleSchema
        headline={"Co-signers & Guarantors on a Lease: Your Rights in Canada"}
        description={"What a guarantor (co-signer) is actually on the hook for, how long the obligation lasts, the difference between a guarantor and a co-tenant, and how to limit your risk before you sign."}
        url="https://leaseplain.com/blog/cosigner-guarantor-lease-rights-canada"
        datePublished="2026-10-03"
        dateModified="2026-10-03"
        keywords={["lease guarantor canada", "co-signer lease", "guarantor vs co-tenant"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Co-signers & Guarantors", href: "https://leaseplain.com/blog/cosigner-guarantor-lease-rights-canada" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/cosigner-guarantor-lease-rights-canada",
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
                <span>Co-signers & Guarantors</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Canada
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  October 3, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Co-signers &amp; Guarantors on a Lease: Your Rights
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Being asked to co-sign for your kid, a friend, or a roommate? A guarantee can follow you
                for years and cost you thousands. Here&apos;s exactly what you&apos;re agreeing to — and
                how to limit the risk before you sign.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="October 2026" jurisdiction="Canadian residential-tenancy & contract law" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Guarantor vs. Co-tenant</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">These two roles get confused constantly, and the difference matters a lot:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Co-tenant:</strong> lives in the unit, is a full party to the lease, and has the right to occupy it. Usually <Link href="/blog/roommates-co-tenants-ontario" className="text-blue-600 hover:underline">jointly and severally liable</Link> with the other tenants.</li>
                    <li><strong>Guarantor (co-signer):</strong> does <em>not</em> live there and has no right to occupy. They only step in financially if the tenant defaults.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What You&apos;re Actually on the Hook For</h2>
                  <p className="text-slate-700 leading-relaxed">A guarantor backs the tenant&apos;s obligations: <strong>unpaid rent, damage beyond normal wear and tear,</strong> and other amounts the lease makes the tenant responsible for. If the tenant stops paying, the landlord can come after the guarantor for the <strong>full amount</strong> — not a share. You have the tenant&apos;s liability without the tenant&apos;s right to live there.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How Long It Lasts (The Trap)</h2>
                  <p className="text-slate-700 leading-relaxed">This is where co-signers get burned. Many guarantees are written to <strong>continue past the first term</strong> — through renewals and into month-to-month — unless the document says otherwise. You could be guaranteeing rent years later, at a higher amount, for a tenancy you forgot you co-signed. Always check whether the guarantee has an <strong>end date</strong> and a <strong>dollar cap</strong>.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Limit Your Risk Before Signing</h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Cap the term:</strong> ask that the guarantee end when the first fixed term ends.</li>
                    <li><strong>Cap the amount:</strong> limit liability to a stated maximum (e.g., a few months&apos; rent).</li>
                    <li><strong>Limit the scope:</strong> rent only, excluding open-ended damage claims where possible.</li>
                    <li><strong>Get notice rights:</strong> require the landlord to tell you promptly if the tenant misses rent, so problems don&apos;t snowball.</li>
                    <li><strong>Get any release in writing:</strong> never rely on a verbal &quot;you&apos;re off the hook.&quot;</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Asked to co-sign?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload the lease and guarantee and get a plain-English breakdown of what you&apos;d be liable for.
                  </p>
                  <Link href="/upload" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Check the Lease
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Roommates & Co-Tenants: Who's Liable", href: "/blog/roommates-co-tenants-ontario" },
                      { label: "What a Landlord Can Ask on an Application", href: "/blog/rental-application-what-landlords-can-ask-canada" },
                      { label: "Renting Without a Credit History", href: "/blog/renting-without-credit-history-canada" },
                      { label: "Lease Red Flags to Watch For", href: "/blog/lease-red-flags-to-watch-for" },
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
