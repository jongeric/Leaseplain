import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Got an N4 in Ontario? Eviction for Non-Payment of Rent, Explained | LeasePlain",
  description:
    "An N4 notice is not an eviction. Learn how the 14-day period works, how to void the notice by paying, your right to 'pay and stay' up to the last minute, and what happens at the LTB.",
  alternates: { canonical: "https://leaseplain.com/blog/n4-non-payment-rent-ontario" },
  openGraph: {
    title: "Got an N4 in Ontario? Eviction for Non-Payment of Rent, Explained | LeasePlain",
    description:
      "An N4 is not an eviction. How the 14-day period works, how to void it, and your 'pay and stay' rights in Ontario.",
    url: "https://leaseplain.com/blog/n4-non-payment-rent-ontario",
    type: "article",
    publishedTime: "2026-08-03T00:00:00Z",
    modifiedTime: "2026-08-03T00:00:00Z",
  },
  keywords: [
    "N4 ontario",
    "eviction non payment rent ontario",
    "void N4 notice",
    "pay and stay ontario",
    "behind on rent ontario",
  ],
};

const faqItems = [
  {
    q: "Does an N4 mean I'm being evicted?",
    a: "No. An N4 is only a notice that your landlord intends to seek eviction for unpaid rent. You are not evicted unless the Landlord and Tenant Board issues an order after a hearing, and you can only be physically removed by the Court Enforcement Office (Sheriff) — never by the landlord directly.",
  },
  {
    q: "How long do I have to pay after getting an N4?",
    a: "For a monthly or yearly tenancy, the N4 must give you 14 days to pay the full amount owed. For a daily or weekly tenancy, it's 7 days. If you pay everything owed by the deadline, the N4 is void and the tenancy continues as if it was never given.",
  },
  {
    q: "Can I still stay if I pay after the deadline passes?",
    a: "Often, yes. Even after the N4 deadline and even after an eviction order, you can generally stop the eviction by paying all the rent owed plus the landlord's filing costs before the Sheriff enforces the order. This is sometimes called 'pay and stay.'",
  },
  {
    q: "Is the N4 valid if the amount is wrong?",
    a: "An N4 that overstates the rent owed, miscalculates the amount, or has the wrong dates can be found defective at the hearing. Bring your own payment records. A defective notice can lead the LTB to dismiss the landlord's application.",
  },
  {
    q: "Can I ask for more time to pay at the hearing?",
    a: "Yes. At the LTB hearing you can propose a payment plan, and adjudicators can order a repayment arrangement instead of eviction, especially if you can show you're able to catch up. Bringing a realistic proposal and proof of income helps.",
  },
];

export default function N4NonPaymentRentOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline="Got an N4 in Ontario? Eviction for Non-Payment of Rent, Explained"
        description="An N4 notice is not an eviction. Learn how the 14-day period works, how to void the notice by paying, your right to 'pay and stay' up to the last minute, and what happens at the LTB."
        url="https://leaseplain.com/blog/n4-non-payment-rent-ontario"
        datePublished="2026-08-03"
        dateModified="2026-08-03"
        keywords={[
          "N4 ontario",
          "eviction non payment rent ontario",
          "void N4 notice",
          "pay and stay ontario",
          "behind on rent ontario",
        ]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "N4: Non-Payment of Rent in Ontario", href: "https://leaseplain.com/blog/n4-non-payment-rent-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/n4-non-payment-rent-ontario",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".speakable-summary"] },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <div className="flex flex-col min-h-full">
        <Navbar />

        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
                <Link href="/" className="hover:underline">Home</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <Link href="/blog" className="hover:underline">Blog</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>N4: Non-Payment of Rent in Ontario</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Ontario
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  August 3, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  7 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Got an N4 in Ontario? Eviction for Non-Payment of Rent, Explained
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Finding an N4 taped to your door is frightening — but it is not an eviction, and it
                does not mean you have to leave. Here is exactly what an N4 is, the deadlines that
                matter, and the several chances Ontario law gives you to keep your home.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">First: An N4 Is a Notice, Not an Eviction</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The <strong>N4 — Notice to End a Tenancy Early for Non-payment of Rent</strong> is the
                    first step a landlord takes when rent is late. It is not a court order, and it does not
                    remove you from your home. In Ontario, only the <strong>Landlord and Tenant Board
                    (LTB)</strong> can order an eviction, and only the <strong>Court Enforcement Office
                    (the Sheriff)</strong> can physically carry one out. A landlord who changes the locks or
                    removes your belongings on their own is acting illegally.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    So the most important thing to know is: <strong>do not move out just because you got an
                    N4.</strong> You have rights and time.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The 14-Day Window — and How to Void the Notice</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    An N4 for a monthly or yearly tenancy must give you at least <strong>14 days</strong> to
                    pay (7 days for a weekly or daily tenancy). Here is the key: if you pay the{" "}
                    <strong>full amount owed by the deadline, the N4 is automatically void</strong> — it&apos;s
                    as if it was never served, and your tenancy simply continues.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Check the numbers carefully. The N4 must state the correct rent owed and the correct
                    dates. If it overstates what you owe or miscalculates, it may be defective — keep your
                    own payment records so you can point that out later.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What Happens If the Deadline Passes</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    If you don&apos;t pay within the window, the landlord still can&apos;t evict you directly.
                    Their next step is to file an <strong>L1 application</strong> with the LTB and wait for a
                    hearing. Given the{" "}
                    <Link href="/blog/ltb-wait-times-2026" className="text-blue-600 hover:underline">
                      current LTB backlog
                    </Link>, that can take months — time in which you can catch up.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    You will receive a Notice of Hearing. <strong>Attend it.</strong> Missing the hearing is
                    one of the most common ways tenants lose cases that were winnable.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Your &quot;Pay and Stay&quot; Right</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Ontario gives tenants a powerful backstop. Even after the N4 deadline, and even after
                    the LTB issues an eviction order, you can generally <strong>stop the eviction by paying
                    everything you owe — the rent arrears plus the landlord&apos;s filing costs — before the
                    Sheriff enforces the order</strong>. Pay in full in time, and the eviction is voided and
                    you keep your home.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Always get a receipt or keep proof (e-transfer records, bank statements) for every
                    payment you make toward the arrears.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">At the Hearing: Ask for a Payment Plan</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    If you can&apos;t clear the full balance at once, you still have options at the hearing:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li><strong>Propose a repayment plan.</strong> Bring a realistic monthly figure and proof of income; adjudicators can order a plan instead of eviction.</li>
                    <li><strong>Raise any defences,</strong> such as an incorrect N4, rent you actually paid, or serious unaddressed maintenance issues (which you can pursue with a T6).</li>
                    <li><strong>Get help.</strong> Free duty counsel and community legal clinics can assist you on the day and beforehand.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    If you&apos;re facing an eviction you believe is invalid, our guide on{" "}
                    <Link href="/blog/how-to-fight-an-illegal-eviction-ontario" className="text-blue-600 hover:underline">
                      fighting an illegal eviction in Ontario
                    </Link>{" "}
                    walks through your defences.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Know your rights before the hearing</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your lease and we&apos;ll explain your rights and flag anything that
                    shouldn&apos;t be there — in plain English.
                  </p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Check My Lease
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "How to Fight an Illegal Eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
                      { label: "How Long Does the LTB Take in 2026?", href: "/blog/ltb-wait-times-2026" },
                      { label: "Can I Withhold Rent Over Repairs?", href: "/blog/withholding-rent-repairs-ontario" },
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
