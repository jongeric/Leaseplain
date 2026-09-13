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
  title: "BC Eviction Notices & the RTB Process, Explained | LeasePlain",
  description:
    "Getting an eviction notice in BC doesn't mean you have to leave. The types of notice, how to dispute one at the Residential Tenancy Branch, the deadlines that matter, and how the process really ends.",
  alternates: { canonical: "https://leaseplain.com/blog/bc-eviction-notices-rtb" },
  openGraph: {
    title: "BC Eviction Notices & the RTB Process, Explained | LeasePlain",
    description:
      "BC eviction notice types, RTB dispute deadlines, and how the eviction process actually works.",
    url: "https://leaseplain.com/blog/bc-eviction-notices-rtb",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["eviction notice bc", "how to fight eviction bc", "rtb dispute resolution", "10 day notice bc", "one month notice to end tenancy bc"],
};

const faqItems = [
  {
    q: "Can my landlord evict me without going to the RTB in BC?",
    a: "No. A landlord can serve a notice, but they can only physically remove you with an order of possession from the Residential Tenancy Branch, enforced by a court bailiff. Changing the locks or removing your belongings without an order is illegal.",
  },
  {
    q: "How long do I have to dispute an eviction notice in BC?",
    a: "It depends on the notice. For a 10-day notice for unpaid rent, you have 5 days to pay (which cancels it) or dispute. For a one-month notice for cause, you generally have 10 days to apply for dispute resolution. Missing the deadline can mean the notice takes effect.",
  },
  {
    q: "What is a 10-day notice in BC?",
    a: "It's a notice to end tenancy for unpaid rent or utilities. You can cancel it completely by paying the full outstanding amount within 5 days of receiving it. If you don't pay or dispute, the landlord can seek an order of possession.",
  },
  {
    q: "Where can I get free help fighting an eviction in BC?",
    a: "The Tenant Resource & Advisory Centre (TRAC) offers information and dispute templates, and legal aid and community advocacy groups can assist with RTB hearings. Fee waivers are also available for the RTB application fee.",
  },
];

export default function BcEvictionNoticesRtbPage() {
  return (
    <>
      <ArticleSchema
        headline={"Can My Landlord Evict Me in BC? Notices & the RTB Process"}
        description={"Getting an eviction notice in BC doesn't mean you have to leave. The types of notice, how to dispute one at the Residential Tenancy Branch, the deadlines that matter, and how the process really ends."}
        url="https://leaseplain.com/blog/bc-eviction-notices-rtb"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["eviction notice bc", "how to fight eviction bc", "rtb dispute resolution"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "BC Eviction Notices & the RTB", href: "https://leaseplain.com/blog/bc-eviction-notices-rtb" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/bc-eviction-notices-rtb",
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
                <span>BC Eviction Notices &amp; the RTB</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  British Columbia
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  September 11, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  7 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Can My Landlord Evict Me in BC? Notices &amp; the RTB Process
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                An eviction notice in BC is the start of a process, not the end of your tenancy. You have the right to dispute most notices at the Residential Tenancy Branch — but the deadlines are short and unforgiving.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">A Notice Is Not an Eviction</h2>
                  <p className="text-slate-700 leading-relaxed">In BC, only an <strong>order of possession</strong> from the Residential Tenancy Branch (RTB), enforced by a court bailiff, can actually remove you. A notice from your landlord is a claim that they want to end the tenancy — you can accept it or dispute it. Never assume you must leave just because you received a form.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Main Types of Notice</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">The type of notice tells you your rights and your deadline to respond:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>10-Day Notice (unpaid rent or utilities):</strong> you can cancel it entirely by paying the full amount owing within <strong>5 days</strong>.</li>
                    <li><strong>One-Month Notice (for cause):</strong> for serious problems like repeated late rent, significant damage, or unreasonable disturbance — you have <strong>10 days</strong> to dispute.</li>
                    <li><strong>Three-Month Notice (landlord&apos;s or purchaser&apos;s use):</strong> for the landlord, a close family member, or a buyer to move in — form RTB-32L, with one month&apos;s compensation. Since June 18, 2025 this is three months (previously four).</li>
                    <li><strong>Four-Month Notice (renovation or demolition):</strong> requires valid permits and one month&apos;s compensation, with a right of first refusal for major renovations.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Disputing a Notice at the RTB</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">To fight a notice you apply for <strong>dispute resolution</strong> through the RTB, usually online, before your deadline. The RTB holds a hearing (often by phone) where both sides present evidence. If you miss the dispute deadline, you may be treated as having accepted the notice — so act fast.</p>
                  <p className="text-slate-700 leading-relaxed">There&apos;s a filing fee, and <strong>fee waivers</strong> are available if you can&apos;t afford it.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Build Your Evidence</h2>
                  <p className="text-slate-700 leading-relaxed">Whatever the reason, your case is only as strong as your records: keep the notice itself, rent payment history, texts and emails, photos, and names of any witnesses. If the notice is for the landlord&apos;s own use, evidence of bad faith (like the unit being re-rented instead) can win you compensation.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Free Help Is Available</h2>
                  <p className="text-slate-700 leading-relaxed">BC has strong tenant supports: TRAC (the Tenant Resource &amp; Advisory Centre) provides information and templates, and legal aid or advocacy organizations can help with hearings. Don&apos;t go it alone if the stakes are high.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Is your eviction notice even valid?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Check the notice type and days given with our free validity checker.
                  </p>
                  <Link href="/tools/eviction-notice-checker" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Eviction Notice Checker
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "How Much Notice to End a Tenancy in BC", href: "/blog/bc-notice-to-end-tenancy" },
                      { label: "BC Rent Increase Rules", href: "/blog/bc-rent-increase-rules" },
                      { label: "Fighting an Illegal Eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
                      { label: "BC Tenant Rights", href: "/canada/british-columbia" },
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
