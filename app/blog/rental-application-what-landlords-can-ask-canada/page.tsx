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
  title: "What Can a Landlord Legally Ask For on a Rental Application in Canada? | LeasePlain",
  description:
    "Can a landlord ask for your SIN, a credit check, bank statements, or a deposit before you sign? What's legal, what you can refuse, and your privacy rights as a rental applicant in Canada.",
  alternates: { canonical: "https://leaseplain.com/blog/rental-application-what-landlords-can-ask-canada" },
  openGraph: {
    title: "What Can a Landlord Legally Ask For on a Rental Application in Canada? | LeasePlain",
    description:
      "SIN, credit checks, bank statements, deposits — what a landlord can and can't ask for on a rental application, and your privacy rights.",
    url: "https://leaseplain.com/blog/rental-application-what-landlords-can-ask-canada",
    type: "article",
    publishedTime: "2026-10-03T00:00:00Z",
    modifiedTime: "2026-10-03T00:00:00Z",
  },
  keywords: ["rental application canada", "can a landlord ask for sin", "credit check rental application", "what can a landlord ask for", "rental application rights canada"],
};

const faqItems = [
  {
    q: "Can a landlord ask for my SIN on a rental application?",
    a: "A landlord can ask, but you are not required to give it. Your Social Insurance Number isn't needed to run a credit check (name, date of birth, and current address are enough). Privacy guidance across Canada discourages collecting the SIN, so you can decline and offer the information a credit check actually requires.",
  },
  {
    q: "Can a landlord run a credit check without my permission?",
    a: "No. A landlord needs your consent to pull your credit report. You can consent, refuse, or offer alternatives — references, proof of income, or a larger reference list — especially if you have thin or no credit history.",
  },
  {
    q: "Can a landlord ask for bank statements or pay stubs?",
    a: "They can ask to verify you can afford the rent. You can provide proof of income (a letter of employment, recent pay stubs, or a notice of assessment) while redacting account numbers and transaction details. You don't have to hand over full, unredacted bank statements.",
  },
  {
    q: "Can a landlord charge a deposit or fee just to apply?",
    a: "Application fees and 'holding deposits' are restricted or prohibited in most provinces. In Ontario, a landlord can only collect a last month's rent deposit (and a key deposit equal to the actual cost) — not an application fee. Check your province's rules before paying anything to apply.",
  },
  {
    q: "What can a landlord NOT ask on a rental application?",
    a: "Human-rights law prohibits screening based on protected grounds — race, religion, ethnic origin, sex, sexual orientation, family or marital status, disability, age, and (in most provinces) receipt of public assistance. A landlord can't refuse you for having children or for being on social assistance, and can't require a guarantor only from certain groups.",
  },
];

export default function RentalApplicationRightsPage() {
  return (
    <>
      <ArticleSchema
        headline={"What Can a Landlord Legally Ask For on a Rental Application in Canada?"}
        description={"Can a landlord ask for your SIN, a credit check, bank statements, or a deposit before you sign? What's legal, what you can refuse, and your privacy rights as a rental applicant in Canada."}
        url="https://leaseplain.com/blog/rental-application-what-landlords-can-ask-canada"
        datePublished="2026-10-03"
        dateModified="2026-10-03"
        keywords={["rental application canada", "can a landlord ask for sin", "credit check rental application"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Rental Application Rights", href: "https://leaseplain.com/blog/rental-application-what-landlords-can-ask-canada" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/rental-application-what-landlords-can-ask-canada",
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
                <span>Rental Application Rights</span>
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
                  7 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                What Can a Landlord Legally Ask For on a Rental Application?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                A rental application can feel like it&apos;s demanding your whole life — SIN, credit check,
                bank statements, references, a deposit to &quot;hold&quot; the unit. Much of it you can
                refuse. Here&apos;s what a landlord can legally ask for in Canada, and what you can push
                back on.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="October 2026" jurisdiction="Canadian privacy & human-rights law" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Your SIN: Ask Allowed, Answer Optional</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">A landlord may <strong>ask</strong> for your Social Insurance Number, but you are <strong>not required</strong> to provide it. A credit check only needs your full name, date of birth, and current address — not your SIN. Privacy regulators across Canada discourage collecting the SIN because it&apos;s a magnet for identity theft.</p>
                  <p className="text-slate-700 leading-relaxed">If a landlord insists, offer the information a credit bureau actually uses, and point out that the check will run fine without your SIN.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Credit Checks Need Your Consent</h2>
                  <p className="text-slate-700 leading-relaxed">A landlord <strong>cannot pull your credit report without permission</strong>. You can consent — or offer alternatives: references from past landlords, proof of steady income, or a co-signer. If you have thin or no credit history (new to Canada, a student, or young), a strong reference package often does the job. See our guide on <Link href="/blog/renting-without-credit-history-canada" className="text-blue-600 hover:underline">renting without a credit history</Link>.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Income Proof — But You Can Redact</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">Verifying you can afford the rent is legitimate. But &quot;proof of income&quot; doesn&apos;t mean full bank statements. Reasonable, privacy-protecting options include:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li>A letter of employment stating your salary.</li>
                    <li>Recent pay stubs (you can redact account numbers).</li>
                    <li>A notice of assessment or T4 for self-employed applicants.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mt-3">You can black out account numbers and individual transactions on anything you share.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Application Fees &amp; &quot;Holding Deposits&quot;</h2>
                  <p className="text-slate-700 leading-relaxed">Charging money just to <em>apply</em> is restricted or banned in most provinces. In Ontario, the only money a landlord can collect is a <Link href="/blog/last-months-rent-deposit-ontario" className="text-blue-600 hover:underline">last month&apos;s rent deposit</Link> and a key deposit equal to the actual replacement cost — no application fees, no non-refundable &quot;holding&quot; fees. Confirm your province&apos;s rule before paying anything to be considered.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What a Landlord Can&apos;t Screen On</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">Human-rights law prohibits refusing an applicant based on protected grounds, including:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li>Race, ancestry, ethnic origin, colour, religion, or place of origin.</li>
                    <li>Sex, sexual orientation, gender identity, pregnancy.</li>
                    <li>Family or marital status — including having children.</li>
                    <li>Disability, age, or (in most provinces) receipt of public assistance.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mt-3">A landlord can assess income and references, but can&apos;t use an income rule as a backdoor to screen out families or people on assistance.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">About to sign?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your lease and get a plain-English breakdown of every clause before you commit.
                  </p>
                  <Link href="/upload" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Check My Lease
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Renting Without a Credit History in Canada", href: "/blog/renting-without-credit-history-canada" },
                      { label: "Co-signers & Guarantors: Your Rights", href: "/blog/cosigner-guarantor-lease-rights-canada" },
                      { label: "How to Avoid Rental Scams in Canada", href: "/blog/how-to-avoid-rental-scams-canada" },
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
