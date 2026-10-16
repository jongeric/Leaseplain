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
  title: "Subletting Without the Landlord's Permission: Your Rights | LeasePlain",
  description:
    "Can you sublet without your landlord's permission? What happens if you do, your rights as a subtenant with no written agreement, and how consent actually works — a plain-English guide for Canadian renters.",
  alternates: { canonical: "https://leaseplain.com/blog/subletting-without-permission-canada" },
  openGraph: {
    title: "Subletting Without the Landlord's Permission: Your Rights | LeasePlain",
    description:
      "Can you sublet without permission, what happens if you do, and subtenant rights with no written agreement.",
    url: "https://leaseplain.com/blog/subletting-without-permission-canada",
    type: "article",
    publishedTime: "2026-10-16T00:00:00Z",
    modifiedTime: "2026-10-16T00:00:00Z",
  },
  keywords: ["subletting without landlord permission", "subletting tenant rights", "sublease tenant rights", "subtenant rights without a written agreement", "can i sublet without permission"],
};

const faqItems = [
  {
    q: "Can I sublet without my landlord's permission?",
    a: "Generally no — you need the landlord's consent to sublet. The important catch is that in most provinces the landlord cannot unreasonably refuse. In Ontario, for example, the landlord must have a legitimate reason to say no, and can only charge their actual out-of-pocket costs for approving a sublet — not a fee or a rent increase.",
  },
  {
    q: "What happens if I sublet without permission?",
    a: "You remain fully responsible to your landlord for the rent and any damage, and an unauthorized sublet can be grounds to end your tenancy. The subtenant's position is also shaky. The safer route is to request consent in writing — if the landlord refuses unreasonably or ignores you, you can apply to your tenancy board.",
  },
  {
    q: "Do I have rights as a subtenant without a written agreement?",
    a: "Yes. Even a verbal sublet creates a tenancy relationship, so a subtenant generally still has rights — but with no written agreement, the terms (rent, length, deposit) are very hard to prove. Get everything in writing: who pays what, the dates, and the condition of the unit at move-in.",
  },
  {
    q: "What's the difference between subletting and assigning a lease?",
    a: "In a sublet you leave temporarily and come back, remaining responsible to the landlord. In an assignment you transfer the lease entirely and step away for good. Assignment usually ends your liability; subletting does not. Quebec gives especially strong assignment rights.",
  },
  {
    q: "Can a landlord charge a fee to approve a sublet?",
    a: "In most provinces a landlord can only recover their reasonable, actual costs of approving a sublet (such as a credit check) — not a flat fee, a 'sublet charge,' or a rent increase. A clause demanding more than that is generally unenforceable.",
  },
];

export default function SublettingWithoutPermissionPage() {
  return (
    <>
      <ArticleSchema
        headline={"Subletting Without the Landlord's Permission: Your Rights in Canada"}
        description={"Can you sublet without your landlord's permission? What happens if you do, your rights as a subtenant with no written agreement, and how consent actually works."}
        url="https://leaseplain.com/blog/subletting-without-permission-canada"
        datePublished="2026-10-16"
        dateModified="2026-10-16"
        keywords={["subletting without landlord permission", "subtenant rights without a written agreement", "sublease tenant rights"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Subletting Without Permission", href: "https://leaseplain.com/blog/subletting-without-permission-canada" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/subletting-without-permission-canada",
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
                <span>Subletting Without Permission</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Canada
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  October 16, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Subletting Without the Landlord&apos;s Permission
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Can you sublet without asking your landlord? Usually not — but the landlord generally
                can&apos;t unreasonably say no either. Here&apos;s how consent really works, what happens
                if you sublet anyway, and what rights a subtenant has when there&apos;s no written
                agreement.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="October 2026" jurisdiction="Canadian residential-tenancy law" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Do You Need Permission?</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">In almost every province, <strong>yes — you need the landlord&apos;s consent to sublet</strong>. But the key protection for tenants is that the landlord <strong>can&apos;t unreasonably refuse</strong>. In Ontario (RTA s.97), a landlord needs a legitimate reason to say no, and can only recover their actual costs of approving the sublet — not a fee or a rent bump.</p>
                  <p className="text-slate-700 leading-relaxed">So the honest answer to &quot;can I sublet without permission?&quot; is: you&apos;re supposed to ask first — but if the landlord refuses without a good reason, you have recourse.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What Happens If You Sublet Anyway</h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li>You stay <strong>fully responsible</strong> to the landlord for rent and any damage the subtenant causes.</li>
                    <li>An unauthorized sublet can be <strong>grounds to end your tenancy</strong>.</li>
                    <li>The subtenant&apos;s standing is weaker and disputes get messy fast.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mt-3">The safe move: <strong>ask in writing</strong>. If the landlord refuses unreasonably or ignores the request, apply to your tenancy board rather than going ahead without consent.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Subtenant Rights Without a Written Agreement</h2>
                  <p className="text-slate-700 leading-relaxed">Even a verbal sublet creates a tenancy, so a subtenant generally still has rights — but <strong>without a written agreement, the terms are very hard to prove</strong>. If you&apos;re the subtenant, protect yourself: get the rent, the dates, the deposit, and the move-in condition in writing, and keep proof of every payment. A subtenant dealing with the head-tenant (not the landlord) still can&apos;t be locked out or have their belongings seized without due process.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Sublet vs. Assignment</h2>
                  <p className="text-slate-700 leading-relaxed">These are different, and it matters: in a <strong>sublet</strong> you leave temporarily and intend to return, staying liable to the landlord; in an <strong>assignment</strong> you transfer the lease for good and typically end your liability. If you&apos;re leaving permanently, assignment is usually the better route — see <Link href="/blog/subletting-assignment-ontario" className="text-blue-600 hover:underline">subletting &amp; assignment in Ontario</Link> and, in Quebec, the strong <Link href="/blog/quebec-lease-assignment-sublet" className="text-blue-600 hover:underline">lease-assignment rights</Link>.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Check your lease&apos;s sublet clause</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your lease and we&apos;ll flag sublet and assignment terms that may not be enforceable.
                  </p>
                  <Link href="/upload" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Check My Lease
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Subletting & Assignment in Ontario", href: "/blog/subletting-assignment-ontario" },
                      { label: "The Subletting Clause Explained", href: "/lease-clause/subletting" },
                      { label: "Lease Assignment & Sublet in Quebec", href: "/blog/quebec-lease-assignment-sublet" },
                      { label: "Breaking a Lease by Province", href: "/breaking-a-lease-canada" },
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
