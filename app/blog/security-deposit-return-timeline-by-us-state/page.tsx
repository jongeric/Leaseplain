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
  title: "How Long Does a Landlord Have to Return Your Deposit? (By U.S. State) | LeasePlain",
  description:
    "Security deposit return deadlines range from 14 to 60 days by state — California 21 days, New York 14, Texas 30, Florida up to 30, Illinois 30–45. Deadlines, itemization rules, and penalties for late returns.",
  alternates: { canonical: "https://leaseplain.com/blog/security-deposit-return-timeline-by-us-state" },
  openGraph: {
    title: "How Long Does a Landlord Have to Return Your Deposit? (By U.S. State) | LeasePlain",
    description:
      "Deposit return deadlines by state — 14 to 60 days — plus itemization rules and the penalties landlords face for returning it late.",
    url: "https://leaseplain.com/blog/security-deposit-return-timeline-by-us-state",
    type: "article",
    publishedTime: "2026-11-13T00:00:00Z",
    modifiedTime: "2026-11-13T00:00:00Z",
  },
  keywords: ["how long does a landlord have to return deposit", "security deposit return time by state", "deposit return deadline", "security deposit law by state", "landlord didn't return deposit"],
};

const faqItems = [
  {
    q: "How long does a landlord have to return a security deposit?",
    a: "It depends on the state, typically 14 to 60 days after you move out. For example, New York requires return within 14 days, California within 21 days, Texas within 30 days, and Florida within 15 days if there are no deductions (or up to 30 days with a written notice of claim). Always check your specific state's deadline.",
  },
  {
    q: "Does the landlord have to itemize deductions?",
    a: "In most states, yes. If a landlord keeps any part of your deposit, they usually must give you a written, itemized statement of the deductions within the same deadline, often with receipts for repairs. A landlord who fails to itemize can lose the right to keep anything.",
  },
  {
    q: "What happens if a landlord returns the deposit late?",
    a: "Many states penalize late or wrongful withholding — sometimes letting you recover two or three times the amount wrongfully withheld, plus court costs or attorney's fees. The exact penalty varies by state. Send a written demand first; if that fails, small-claims court is the usual next step.",
  },
  {
    q: "When does the clock start — move-out or lease end?",
    a: "Usually when the tenancy ends and you've given up possession (returned the keys), not the calendar date on the lease. Some states also require you to provide a forwarding address in writing before the clock starts, so give your landlord one in writing when you leave.",
  },
  {
    q: "What can a landlord legally deduct from my deposit?",
    a: "Generally unpaid rent and the cost of repairing damage beyond normal wear and tear — not ordinary wear like faded paint or minor carpet wear. Cleaning to return the unit to its move-in condition may be deductible, but routine cleaning usually isn't. Take dated move-in and move-out photos to protect yourself.",
  },
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline={"How Long Does a Landlord Have to Return Your Deposit? (By U.S. State)"}
        description={"Security deposit return deadlines range from 14 to 60 days by state. Deadlines, itemization rules, and penalties landlords face for returning a deposit late."}
        url="https://leaseplain.com/blog/security-deposit-return-timeline-by-us-state"
        datePublished="2026-11-13"
        dateModified="2026-11-13"
        keywords={["how long does a landlord have to return deposit", "security deposit return time by state", "deposit return deadline"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Deposit Return — U.S.", href: "https://leaseplain.com/blog/security-deposit-return-timeline-by-us-state" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/security-deposit-return-timeline-by-us-state",
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
                <span>Deposit Return — U.S.</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  United States
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  November 13, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  5 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                How Long Does a Landlord Have to Return Your Deposit? (By U.S. State)
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                After you move out, the clock starts. Most states give a landlord
                <strong> 14 to 60 days</strong> to return your security deposit — with a written,
                itemized list for anything they keep. Here are the deadlines for major states and what to
                do when a landlord blows past them.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <KeyTakeaways items={[
                  "Return deadlines run <strong>14 to 60 days</strong> by state — NY 14, California 21, Texas/Washington/Georgia/PA 30, Florida up to 30, Illinois 30–45.",
                  "If a landlord keeps any deposit, most states require a <strong>written, itemized statement</strong> — skipping it can forfeit the deduction.",
                  "Give a <strong>written forwarding address</strong> at move-out; in some states the clock won't start without it.",
                  "Late or wrongful withholding can expose a landlord to <strong>2–3&times; penalties</strong> plus court costs.",
                  "Only <strong>damage beyond normal wear and tear</strong> and unpaid rent are deductible — take dated move-in/move-out photos.",
                ]} />
                <ReviewedByline updated="November 2026" jurisdiction="U.S. state security-deposit statutes" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Return Deadlines by State</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Typical deadlines for returning the deposit (or sending an itemized statement) after you
                    move out:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                      <thead className="bg-slate-50 text-slate-600">
                        <tr>
                          <th className="text-left px-4 py-2 font-semibold">State</th>
                          <th className="text-left px-4 py-2 font-semibold">Deadline to return</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700">
                        {[
                          ["New York", "14 days"],
                          ["California", "21 days"],
                          ["Washington", "30 days"],
                          ["Texas", "30 days (after forwarding address given)"],
                          ["Georgia", "~30 days (one month)"],
                          ["Pennsylvania", "30 days"],
                          ["Florida", "15 days (no deductions) / up to 30 days with notice of claim"],
                          ["Illinois", "30–45 days (itemize within 30 if deducting)"],
                        ].map(([s, d]) => (
                          <tr key={s} className="border-t border-slate-100">
                            <td className="px-4 py-2 font-medium">{s}</td>
                            <td className="px-4 py-2">{d}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-slate-700 leading-relaxed mt-3 text-sm">
                    Deadlines and conditions change — confirm your state&apos;s current rule and deposit caps on
                    our <Link href="/united-states/security-deposit-limits-by-state" className="text-blue-600 hover:underline">security deposit limits by state</Link> hub.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Itemization Rule</h2>
                  <p className="text-slate-700 leading-relaxed">
                    In most states, if a landlord keeps any part of your deposit they must send a
                    <strong> written, itemized statement</strong> of the deductions within the same deadline —
                    often with receipts. A landlord who skips the itemization can forfeit the right to keep
                    anything at all. That rule is your biggest lever: no itemized list, no valid deduction.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Give a Forwarding Address in Writing</h2>
                  <p className="text-slate-700 leading-relaxed">
                    In several states the clock doesn&apos;t start — or the landlord&apos;s duty is reduced — until
                    you provide a <strong>written forwarding address</strong>. When you hand back the keys, give
                    your new address in writing (email counts as a record) so the deadline is running and the
                    landlord can&apos;t claim they had nowhere to send it.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Penalties for a Late or Wrongful Return</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Many states punish bad-faith withholding by letting you recover
                    <strong> two to three times</strong> the amount wrongfully kept, plus court costs or
                    attorney&apos;s fees. Start with a written demand letter citing the deadline; if that
                    doesn&apos;t work, small-claims court is the usual route and doesn&apos;t require a lawyer.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Protect Yourself on the Way Out</h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li>Take <strong>dated move-in and move-out photos or video</strong> of every room.</li>
                    <li>Return the unit clean and give written notice of your move-out date.</li>
                    <li>Keep normal wear and tear in mind — faded paint and light carpet wear aren&apos;t deductible.</li>
                    <li>Put your forwarding address in writing and keep a copy.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mt-3">
                    Renting in a specific state? See the full picture for <Link href="/united-states/california" className="text-blue-600 hover:underline">California</Link>, <Link href="/united-states/new-york" className="text-blue-600 hover:underline">New York</Link>, or <Link href="/united-states/texas" className="text-blue-600 hover:underline">Texas</Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Deposit limits by U.S. state</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    See how much a landlord can charge and how fast they must return it — state by state.
                  </p>
                  <Link href="/united-states/security-deposit-limits-by-state" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    See the State Table
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Guides</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Security Deposit Limits by State", href: "/united-states/security-deposit-limits-by-state" },
                      { label: "U.S. Tenant Rights Hub", href: "/united-states" },
                      { label: "California Tenant Rights", href: "/united-states/california" },
                      { label: "Texas Tenant Rights", href: "/united-states/texas" },
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
