import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock } from "lucide-react";
import ReviewedByline from "@/components/ReviewedByline";
import TableOfContents from "@/components/TableOfContents";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "How Much Notice Do You Have to Give to Move Out in Ontario? | LeasePlain",
  description:
    "Moving out of an Ontario rental? Learn how much notice you must give (Form N9), why it's 60 days, the fixed-term trap that catches tenants, and how to time your termination date correctly.",
  alternates: { canonical: "https://leaseplain.com/blog/notice-to-move-out-ontario" },
  openGraph: {
    title: "How Much Notice Do You Have to Give to Move Out in Ontario? | LeasePlain",
    description:
      "The 60-day rule, Form N9, and the fixed-term trap — how to give proper notice to end your Ontario tenancy.",
    url: "https://leaseplain.com/blog/notice-to-move-out-ontario",
    type: "article",
    publishedTime: "2026-08-03T00:00:00Z",
    modifiedTime: "2026-08-03T00:00:00Z",
  },
  keywords: [
    "notice to move out ontario",
    "form N9 ontario",
    "60 days notice ontario",
    "how much notice to give landlord ontario",
    "ending tenancy ontario",
  ],
};

const faqItems = [
  {
    q: "How much notice do I have to give my landlord in Ontario?",
    a: "For a monthly tenancy you must give at least 60 days' written notice, and the termination date must be the last day of a rental period (usually the end of a month). For a weekly tenancy it's 28 days. You give notice using Form N9.",
  },
  {
    q: "What form do I use to end my tenancy in Ontario?",
    a: "Form N9 — Tenant's Notice to End the Tenancy. It's a free Landlord and Tenant Board form. Fill in your termination date, sign it, and deliver it to your landlord, keeping a copy for yourself.",
  },
  {
    q: "Can I move out before my fixed-term lease ends?",
    a: "Not by simply giving notice. A fixed-term lease binds you until the end of the term. To leave early you generally need to assign or sublet the unit, reach an agreement with your landlord to end early (Form N11), or the landlord must re-rent — and they have a legal duty to try to minimize their losses.",
  },
  {
    q: "Does my termination date have to fall on a specific day?",
    a: "Yes. For a monthly tenancy, the termination date on your N9 must be the last day of a rental period. If rent is due on the 1st, your termination date should be the last day of a month, and it must be at least 60 days after you give the notice.",
  },
  {
    q: "What happens at the end of a fixed-term lease if I do nothing?",
    a: "You do not have to move out. If you give no notice, an Ontario fixed-term tenancy automatically continues as a month-to-month tenancy on the same terms. You then only need to give 60 days' notice whenever you decide to leave.",
  },
];

export default function NoticeToMoveOutOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline="How Much Notice Do You Have to Give to Move Out in Ontario?"
        description="Moving out of an Ontario rental? Learn how much notice you must give (Form N9), why it's 60 days, the fixed-term trap that catches tenants, and how to time your termination date correctly."
        url="https://leaseplain.com/blog/notice-to-move-out-ontario"
        datePublished="2026-08-03"
        dateModified="2026-08-03"
        keywords={[
          "notice to move out ontario",
          "form N9 ontario",
          "60 days notice ontario",
          "how much notice to give landlord ontario",
          "ending tenancy ontario",
        ]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "How Much Notice to Move Out in Ontario", href: "https://leaseplain.com/blog/notice-to-move-out-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/notice-to-move-out-ontario",
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
                <span>How Much Notice to Move Out in Ontario</span>
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
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                How Much Notice Do You Have to Give to Move Out in Ontario?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                The short answer is 60 days — but <em>when</em> those 60 days end matters just as much
                as the number, and fixed-term leases carry a trap that catches renters every year.
                Here&apos;s how to give notice that actually holds up.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="August 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The 60-Day Rule</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    For a month-to-month tenancy in Ontario, you must give your landlord at least{" "}
                    <strong>60 days&apos; written notice</strong> to end the tenancy. If you pay rent
                    weekly, the notice period drops to 28 days. You provide this notice on{" "}
                    <strong>Form N9 — Tenant&apos;s Notice to End the Tenancy</strong>, a free form from
                    the Landlord and Tenant Board.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    A verbal &quot;I&apos;m leaving next month&quot; is not proper notice. Put it in
                    writing, sign it, deliver it, and keep a dated copy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Timing: Your Date Must Land on the Right Day</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    This is where tenants slip up. It isn&apos;t enough to count 60 days forward — your
                    <strong> termination date must be the last day of a rental period</strong>. If your
                    rent is due on the 1st of the month, your rental period runs to the end of the month,
                    so your termination date has to be the last day of a month, and at least 60 days out.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Example: to move out at the end of October, you generally need to serve your N9 by
                    the start of September. Give notice on, say, September 15 for an October 31 date, and
                    it&apos;s short — the landlord could treat it as effective November 30 instead. When in
                    doubt, give yourself a buffer.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Fixed-Term Trap</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Here&apos;s the one that surprises people. If you&apos;re in a fixed-term lease (say a
                    one-year lease), you generally <strong>cannot end it early just by giving 60 days&apos;
                    notice</strong>. The 60-day N9 lets you end a tenancy that is monthly, or set a move-out
                    date for the end of your term — it does not let you walk away mid-term.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    To leave before a fixed term ends, your realistic options are:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li><strong>Assign or sublet</strong> the unit (see our{" "}
                      <Link href="/blog/subletting-assignment-ontario" className="text-blue-600 hover:underline">sublet and assignment guide</Link>).</li>
                    <li><strong>Agree to end early</strong> with your landlord using Form N11.</li>
                    <li>Rely on the landlord&apos;s <strong>duty to mitigate</strong> — if you leave, they must make reasonable efforts to re-rent, and you&apos;re only liable until they do (or the term ends).</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    To end the tenancy <em>at</em> the end of a fixed term, serve your N9 at least 60 days
                    before the last day of the term, dated for that last day.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If You Do Nothing at the End of a Fixed Term</h2>
                  <p className="text-slate-700 leading-relaxed">
                    You are never forced out simply because your lease term ends. If you give no notice, an
                    Ontario fixed-term tenancy <strong>automatically becomes month-to-month</strong> on the
                    same terms. From there you can leave any time on 60 days&apos; notice. For more on how
                    that conversion works, see{" "}
                    <Link href="/blog/month-to-month-vs-fixed-term-lease" className="text-blue-600 hover:underline">
                      month-to-month vs fixed-term leases
                    </Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Before You Hand In Your Keys</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Serving notice is step one. Protect your deposit and avoid damage disputes by
                    documenting the unit and following a proper move-out process — our{" "}
                    <Link href="/blog/moving-out-ontario-checklist" className="text-blue-600 hover:underline">
                      Ontario moving-out checklist
                    </Link>{" "}
                    walks through every step.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Not sure what kind of lease you have?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your lease and we&apos;ll tell you whether it&apos;s fixed-term or monthly, and
                    what notice you need to give — in plain English.
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
                      { label: "Moving Out in Ontario: Deposit Checklist", href: "/blog/moving-out-ontario-checklist" },
                      { label: "Month-to-Month vs Fixed-Term Lease", href: "/blog/month-to-month-vs-fixed-term-lease" },
                      { label: "Subletting and Assigning Your Lease", href: "/blog/subletting-assignment-ontario" },
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
