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
  title: "Behind on Rent in Ontario? Rent Banks & Arrears Help | LeasePlain",
  description:
    "Falling behind on rent in Ontario doesn't have to mean eviction. Rent banks, the Canada-Ontario Housing Benefit, LTB payment plans, and how to act before an N4 becomes an eviction order.",
  alternates: { canonical: "https://leaseplain.com/blog/rent-bank-arrears-help-ontario" },
  openGraph: {
    title: "Behind on Rent in Ontario? Rent Banks & Arrears Help | LeasePlain",
    description:
      "Rent banks, housing benefits, and LTB payment plans for tenants behind on rent in Ontario.",
    url: "https://leaseplain.com/blog/rent-bank-arrears-help-ontario",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["rent bank ontario", "help paying rent arrears ontario", "behind on rent ontario", "emergency rent assistance ontario", "can't pay rent ontario help"],
};

const faqItems = [
  {
    q: "What is a rent bank in Ontario?",
    a: "A rent bank is a municipally funded program that provides grants or interest-free loans to cover rent arrears for tenants at risk of eviction. Eligibility and amounts vary by area — contact your municipality or 211 Ontario to find yours.",
  },
  {
    q: "Can I get help paying rent arrears in Ontario?",
    a: "Yes. Options include local rent banks, the Canada-Ontario Housing Benefit, Ontario Works/ODSP emergency assistance, community funds through 211, and utility-arrears programs. Acting early, before an N4 becomes an eviction order, gives you the most options.",
  },
  {
    q: "Will I be evicted if I miss one month's rent in Ontario?",
    a: "Not automatically. A missed payment can lead to an N4, but you can void it by paying what's owed within the notice period, and you can often pay and stay even later. Rent banks and payment plans exist to help you catch up.",
  },
  {
    q: "Can I set up a payment plan with the LTB?",
    a: "Yes. At a hearing you can ask the Landlord and Tenant Board for a repayment plan to clear arrears over time and keep your tenancy. Bring a realistic budget, and use Tenant Duty Counsel for free help.",
  },
];

export default function RentBankArrearsHelpOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline={"Behind on Rent in Ontario? Rent Banks and Arrears Help"}
        description={"Falling behind on rent in Ontario doesn't have to mean eviction. Rent banks, the Canada-Ontario Housing Benefit, LTB payment plans, and how to act before an N4 becomes an eviction order."}
        url="https://leaseplain.com/blog/rent-bank-arrears-help-ontario"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["rent bank ontario", "help paying rent arrears ontario", "behind on rent ontario"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Rent Banks & Arrears Help", href: "https://leaseplain.com/blog/rent-bank-arrears-help-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/rent-bank-arrears-help-ontario",
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
                <span>Rent Banks &amp; Arrears Help</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Ontario
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
                Behind on Rent in Ontario? Rent Banks &amp;amp; Arrears Help
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                If you&apos;ve fallen behind on rent, the worst thing you can do is nothing. Ontario has real programs — rent banks, benefits, and payment plans — that can stop a missed month from turning into an eviction. Here&apos;s where to turn, fast.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">First: An N4 Is Not an Eviction</h2>
                  <p className="text-slate-700 leading-relaxed">If your landlord serves an <strong>N4</strong> for unpaid rent, you can <strong>void it by paying the full amount owing</strong> within the notice period — and even later, you can often &apos;pay and stay&apos; right up to the eviction. So the goal is to find the money or a plan. See <Link href="/blog/n4-non-payment-rent-ontario" className="text-blue-600 hover:underline">got an N4?</Link> for exactly how the timeline works.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Rent Banks</h2>
                  <p className="text-slate-700 leading-relaxed">Many Ontario municipalities fund <strong>rent banks</strong> — programs that provide grants or interest-free loans to cover rent arrears for tenants at risk of eviction. Eligibility varies by area, but they&apos;re designed precisely for a short-term shortfall. Contact your municipality or 211 Ontario to find the rent bank serving your area.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Canada-Ontario Housing Benefit</h2>
                  <p className="text-slate-700 leading-relaxed">The <strong>Canada-Ontario Housing Benefit (COHB)</strong> is a portable monthly benefit that helps eligible households with rent. It&apos;s not instant, but if your income is low relative to your rent, it can make your housing sustainable going forward. Ask your local service manager how to be considered.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Other Emergency Help</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">Depending on your situation, you may also qualify for:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Ontario Works / ODSP</strong> emergency or discretionary housing assistance.</li>
                    <li><strong>Community and charitable funds</strong> for one-time rent help (ask 211).</li>
                    <li><strong>Utility arrears programs</strong> like LEAP, which free up cash for rent.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Ask the LTB for a Payment Plan</h2>
                  <p className="text-slate-700 leading-relaxed">If your case reaches the Landlord and Tenant Board, you can ask for a <strong>repayment plan</strong> to clear the arrears over time and keep your home. Bring a realistic budget. Tenant Duty Counsel at the hearing can help you request one — don&apos;t skip the hearing.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Facing an N4 or hearing?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    See how the non-payment timeline works and how to void the notice.
                  </p>
                  <Link href="/blog/n4-non-payment-rent-ontario" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    N4 Non-Payment Guide
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Got an N4? Non-Payment Explained", href: "/blog/n4-non-payment-rent-ontario" },
                      { label: "LTB Fees & Wait Times", href: "/ltb-fees-timeline" },
                      { label: "How to Fight an Illegal Eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
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
