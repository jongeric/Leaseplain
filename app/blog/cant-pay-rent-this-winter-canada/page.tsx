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
import KeyTakeaways from "@/components/KeyTakeaways";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Can't Pay Rent This Winter? Your Options Before Eviction | LeasePlain",
  description:
    "Falling behind on rent over winter? Rent banks, emergency assistance, repayment agreements, and the deadlines that let you stop an eviction by paying what you owe. Act early — here's how.",
  alternates: { canonical: "https://leaseplain.com/blog/cant-pay-rent-this-winter-canada" },
  openGraph: {
    title: "Can't Pay Rent This Winter? Your Options Before Eviction | LeasePlain",
    description:
      "Rent banks, emergency help, repayment deals, and the deadline to pay and stop an eviction. Your options when winter rent is tight — act early.",
    url: "https://leaseplain.com/blog/cant-pay-rent-this-winter-canada",
    type: "article",
    publishedTime: "2026-11-13T00:00:00Z",
    modifiedTime: "2026-11-13T00:00:00Z",
  },
  keywords: ["can't pay rent", "behind on rent canada", "rent bank", "rent arrears help", "stop eviction non payment"],
};

const faqItems = [
  {
    q: "What happens if I can't pay rent on time?",
    a: "Your landlord can serve a non-payment notice (in Ontario, an N4) that gives you a short window to pay the arrears. If you pay the full amount owing by the deadline, the notice is void and you stay. If you don't, the landlord can apply to the tribunal for an eviction hearing — but you can usually still pay and stop the eviction right up until the order takes effect.",
  },
  {
    q: "What is a rent bank and can it help me?",
    a: "A rent bank provides interest-free loans or grants to tenants who are behind on rent or need help with a deposit, usually for people at risk of eviction. Many Canadian cities and provinces fund them. If you qualify, a rent bank can clear your arrears and stop a non-payment eviction in its tracks. Apply as early as possible — funds and processing time are limited.",
  },
  {
    q: "Can I be evicted immediately for missing one month?",
    a: "No. Eviction for non-payment follows a process: a notice with a cure period, then a tribunal application and hearing, then an order, then enforcement by a sheriff or bailiff. It cannot happen overnight, and at several of those steps you can pay the arrears to stop it. Missing a single payment does not mean instant removal.",
  },
  {
    q: "Should I agree to a repayment plan with my landlord?",
    a: "Often yes — a written repayment agreement can keep you housed and avoid a hearing. Make sure the monthly amount is genuinely affordable, get it in writing, and understand what happens if you miss a payment (some agreements let the landlord proceed to eviction quickly on a default). If you're unsure, have a legal clinic review it first.",
  },
  {
    q: "Where can I get free help if I'm behind on rent?",
    a: "Start with a community legal clinic (free representation for lower-income tenants), your municipality's housing-help or rent-bank line, and provincial emergency-assistance programs. Tenant duty counsel at the tribunal can also help on your hearing day. The earlier you reach out, the more options stay open.",
  },
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline={"Can't Pay Rent This Winter? Your Options Before Eviction"}
        description={"Falling behind on rent over winter? Rent banks, emergency assistance, repayment agreements, and the deadlines that let you stop an eviction by paying what you owe."}
        url="https://leaseplain.com/blog/cant-pay-rent-this-winter-canada"
        datePublished="2026-11-13"
        dateModified="2026-11-13"
        keywords={["can't pay rent", "behind on rent canada", "rent bank", "rent arrears help"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Can't Pay Rent", href: "https://leaseplain.com/blog/cant-pay-rent-this-winter-canada" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/cant-pay-rent-this-winter-canada",
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
                <span>Can&apos;t Pay Rent</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Canada
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  November 13, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Can&apos;t Pay Rent This Winter? Your Options Before Eviction
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Winter is when heating bills spike and hours get cut — and rent gets hard. The good news:
                <strong> missing a payment does not mean instant eviction</strong>. There&apos;s a process, and
                at several points you can stop it. Here are your options, in the order to use them.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <KeyTakeaways items={[
                  "Missing rent is <strong>not instant eviction</strong> — there's a notice, hearing, order, and enforcement process.",
                  "<strong>Rent banks</strong> offer interest-free loans or grants that can clear arrears and stop the eviction.",
                  "You can usually <strong>pay the full arrears</strong> to void a non-payment case, often right up to when the order takes effect.",
                  "A written <strong>repayment agreement</strong> can keep you housed — check the default terms before signing.",
                  "<strong>Free help</strong> exists: community legal clinics and tenant duty counsel. Act early.",
                ]} />
                <ReviewedByline updated="November 2026" jurisdiction="Canadian residential tenancy law" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">First: You Have More Time Than You Think</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Non-payment eviction is a <em>process</em>, not a switch. Your landlord serves a notice with a
                    short cure period (in Ontario, an <Link href="/blog/n4-non-payment-rent-ontario" className="text-blue-600 hover:underline">N4</Link>),
                    then must apply to the tribunal, attend a hearing, get an order, and have it enforced by a
                    sheriff or bailiff. That&apos;s weeks, not days — and at several steps, paying what you owe
                    stops it.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Rent Banks &amp; Emergency Assistance</h2>
                  <p className="text-slate-700 leading-relaxed">
                    A <strong>rent bank</strong> offers interest-free loans or grants to tenants at risk of
                    eviction — often enough to clear your arrears and void the notice. Many cities and provinces
                    fund them, alongside emergency social-assistance benefits for a one-time shortfall. These
                    have limited funds and take time to process, so <strong>apply the moment you know you&apos;ll
                    be short</strong>. See our guide to <Link href="/blog/rent-bank-arrears-help-ontario" className="text-blue-600 hover:underline">rent banks and arrears help</Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Pay and Stop the Eviction</h2>
                  <p className="text-slate-700 leading-relaxed">
                    For non-payment specifically, most provinces let you <strong>void the process by paying the
                    full amount owing</strong> — including, in many cases, right up until the eviction order would
                    take effect. If you can pull the arrears together (through a rent bank, family, or a benefit),
                    paying stops the eviction. Confirm the exact deadline for your province, because it differs.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Negotiate a Repayment Agreement</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Many landlords prefer a payment plan to the cost and delay of a hearing. A written repayment
                    agreement can keep you housed — just make sure the monthly top-up is genuinely affordable and
                    you understand the default terms (some plans let the landlord move to eviction quickly if you
                    miss one payment). Have a legal clinic review it before signing if you can.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Get Free Help Early</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Community legal clinics represent lower-income tenants for free, and tenant duty counsel can
                    help on your hearing day. A <Link href="/tenant-lawyer" className="text-blue-600 hover:underline">tenant advocate or paralegal</Link> can
                    negotiate with your landlord and make sure any notice against you is even valid. Remember:
                    there&apos;s <Link href="/blog/can-you-be-evicted-in-winter-canada" className="text-blue-600 hover:underline">no automatic winter eviction ban</Link>,
                    so the time to act is now, not when the snow clears.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Got a non-payment notice?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload it and we&apos;ll explain the deadline, whether it&apos;s valid, and your options — in plain English.
                  </p>
                  <Link href="/upload" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Check My Notice Free
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Rent Bank & Arrears Help", href: "/blog/rent-bank-arrears-help-ontario" },
                      { label: "Got an N4 for Non-Payment?", href: "/blog/n4-non-payment-rent-ontario" },
                      { label: "Can You Be Evicted in Winter?", href: "/blog/can-you-be-evicted-in-winter-canada" },
                      { label: "How to Fight an Illegal Eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
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
