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
  title: "Roommates and Co-Tenants in Ontario: Who's Liable for What? | LeasePlain",
  description:
    "If your roommate stops paying rent or moves out, are you on the hook? It depends on whether you're co-tenants on one lease or a tenant with a roommate. How liability, deposits, and leaving work in Ontario.",
  alternates: { canonical: "https://leaseplain.com/blog/roommates-co-tenants-ontario" },
  openGraph: {
    title: "Roommates and Co-Tenants in Ontario: Who's Liable for What? | LeasePlain",
    description:
      "Co-tenant vs roommate, joint liability for rent, and what happens when someone leaves — explained for Ontario.",
    url: "https://leaseplain.com/blog/roommates-co-tenants-ontario",
    type: "article",
    publishedTime: "2026-09-07T00:00:00Z",
    modifiedTime: "2026-09-07T00:00:00Z",
  },
  keywords: [
    "roommate stopped paying rent ontario",
    "co-tenant liability ontario",
    "joint and several liability rent ontario",
    "roommate moving out lease ontario",
    "roommate rights ontario",
  ],
};

const faqItems = [
  {
    q: "If my roommate doesn't pay their share, am I responsible?",
    a: "If you're both named on the same lease as co-tenants, yes. Co-tenants are jointly and severally liable — meaning the landlord can pursue any one of you for the full rent, not just your share. If your roommate is instead your subtenant or an unofficial occupant, you're the tenant and you owe the landlord the full rent regardless.",
  },
  {
    q: "Can one co-tenant move out and end just their part of the lease?",
    a: "Not unilaterally. A co-tenant can't end only their portion of a joint tenancy. To be released they generally need the landlord's agreement (and often the other tenants'). The safest exit is a new lease or an assignment, so the departing person is formally removed and replaced.",
  },
  {
    q: "Does the Residential Tenancies Act cover disputes between roommates?",
    a: "Often not. The Landlord and Tenant Board handles disputes between tenants and landlords, not fights between roommates over chores or a shared internet bill. Roommate-vs-roommate money disputes usually go to Small Claims Court instead.",
  },
  {
    q: "What happens to the deposit when a roommate leaves?",
    a: "The last month's rent deposit belongs to the tenancy, not to one person. If a roommate paid part of it and leaves, sorting out who gets reimbursed is between the roommates — the landlord holds it until the tenancy ends. Put your arrangement in writing to avoid a fight later.",
  },
];

export default function RoommatesCoTenantsOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline="Roommates and Co-Tenants in Ontario: Who's Liable for What?"
        description="If your roommate stops paying rent or moves out, are you on the hook? It depends on whether you're co-tenants on one lease or a tenant with a roommate. How liability, deposits, and leaving work in Ontario."
        url="https://leaseplain.com/blog/roommates-co-tenants-ontario"
        datePublished="2026-09-07"
        dateModified="2026-09-07"
        keywords={["co-tenant liability ontario", "roommate stopped paying rent ontario", "joint and several liability rent ontario"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Roommates & Co-Tenants in Ontario", href: "https://leaseplain.com/blog/roommates-co-tenants-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/roommates-co-tenants-ontario",
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
                <span>Roommates &amp; Co-Tenants in Ontario</span>
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
                  7 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Roommates and Co-Tenants in Ontario: Who&apos;s Liable for What?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Sharing rent is one of the most common ways people afford Ontario&apos;s market — until
                a roommate stops paying or moves out overnight. Whether you&apos;re left holding the bill
                comes down to one question: how are you actually named on the lease?
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Co-Tenant vs Roommate: The Distinction That Decides Everything</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Ontario law doesn&apos;t treat every &quot;roommate&quot; the same. There are three common setups:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Co-tenants:</strong> everyone signed the same lease with the landlord. You&apos;re all tenants together.</li>
                    <li><strong>Tenant + subtenant:</strong> one person holds the lease and rents a room to the other.</li>
                    <li><strong>Tenant + occupant:</strong> one person is on the lease; the other just lives there with no direct agreement with the landlord.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Co-Tenants Share Full Liability</h2>
                  <p className="text-slate-700 leading-relaxed">
                    If you&apos;re co-tenants on one lease, you&apos;re <strong>jointly and severally
                    liable</strong> for the rent. That means if your roommate skips their half, the
                    landlord can legally demand the <strong>entire</strong> rent from you — not just your
                    share. The landlord doesn&apos;t have to chase the person who didn&apos;t pay; they can
                    come after whoever is easiest to collect from. You&apos;d then have to recover your
                    roommate&apos;s share from them separately, usually in Small Claims Court.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If You&apos;re the Lease-Holder</h2>
                  <p className="text-slate-700 leading-relaxed">
                    If the lease is in your name only and you took in a roommate, the landlord deals with{" "}
                    <strong>you</strong>. You owe the full rent no matter what your roommate does, and
                    removing a roommate who won&apos;t leave can be complicated — an occupant who isn&apos;t
                    your tenant isn&apos;t evicted through the LTB in the usual way. Get advice before
                    changing locks or forcing anyone out.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">When Someone Wants to Leave</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    A single co-tenant <strong>can&apos;t</strong> end just their slice of a joint lease by
                    giving notice. To cleanly remove a departing roommate you generally need one of:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li>A <strong>new lease</strong> signed with the remaining (and any replacement) tenants;</li>
                    <li>An <strong>assignment</strong> of the departing person&apos;s interest to a new roommate, with the landlord&apos;s consent; or</li>
                    <li>Everyone agreeing to end the tenancy and start fresh.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mt-3">
                    See our{" "}
                    <Link href="/blog/subletting-assignment-ontario" className="text-blue-600 hover:underline">subletting and assignment guide</Link>{" "}
                    for how consent works.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Protect Yourself Up Front</h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li>Write a simple <strong>roommate agreement</strong> covering rent shares, deposit contributions, and notice to leave. The LTB won&apos;t enforce it, but Small Claims Court can consider it.</li>
                    <li>Keep records of who paid what — e-transfer history is gold in a dispute.</li>
                    <li>Know that <strong>roommate-vs-roommate</strong> disputes usually go to Small Claims Court, not the LTB.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Check your lease before you sign</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Paste your lease and our free clause checker flags who&apos;s on the hook and any red flags.
                  </p>
                  <Link href="/tools/clause-checker" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Free Clause Checker
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Subletting & Assigning Your Lease", href: "/blog/subletting-assignment-ontario" },
                      { label: "How to Break a Lease in Ontario", href: "/blog/how-to-break-a-lease-ontario" },
                      { label: "Last Month's Rent Deposit Rules", href: "/blog/last-months-rent-deposit-ontario" },
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
