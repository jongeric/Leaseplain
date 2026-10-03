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
  title: "Quiet Enjoyment & Noise Complaints: Tenant Rights in Canada | LeasePlain",
  description:
    "Your right to 'quiet enjoyment' means more than silence. What it covers, what to do about noisy neighbours or a disruptive landlord, how to document it, and when a breach can reduce your rent or end your lease.",
  alternates: { canonical: "https://leaseplain.com/blog/quiet-enjoyment-noise-complaints-canada" },
  openGraph: {
    title: "Quiet Enjoyment & Noise Complaints: Tenant Rights in Canada | LeasePlain",
    description:
      "What 'quiet enjoyment' really means, how to handle noisy neighbours, and when a breach can reduce your rent.",
    url: "https://leaseplain.com/blog/quiet-enjoyment-noise-complaints-canada",
    type: "article",
    publishedTime: "2026-10-03T00:00:00Z",
    modifiedTime: "2026-10-03T00:00:00Z",
  },
  keywords: ["quiet enjoyment tenant", "noise complaint rental", "noisy neighbours tenant rights", "right to quiet enjoyment canada", "landlord disturbance"],
};

const faqItems = [
  {
    q: "What does 'quiet enjoyment' mean for a tenant?",
    a: "Quiet enjoyment is your legal right to use and enjoy your home without unreasonable interference — not literal silence. It covers reasonable peace and privacy, freedom from harassment, and the landlord staying out except with proper notice. It's an implied term of every residential tenancy in Canada.",
  },
  {
    q: "What can I do about noisy neighbours?",
    a: "Start by documenting the noise (dates, times, duration, recordings). Report it to your landlord in writing — the landlord is responsible for addressing disturbances by other tenants they control. If it continues, you can escalate to your province's tenancy board, and persistent serious noise can be grounds for the disruptive tenant's eviction.",
  },
  {
    q: "Can I get a rent reduction for a breach of quiet enjoyment?",
    a: "Potentially, yes. If your landlord fails to deal with a serious, ongoing disturbance — or causes one themselves (constant construction, illegal entries, harassment) — tenancy boards can order a rent abatement (a partial refund) for the period your enjoyment was reduced, and sometimes other remedies.",
  },
  {
    q: "Is my landlord responsible for other tenants' noise?",
    a: "A landlord must take reasonable steps to stop disturbances caused by tenants they're responsible for. They aren't automatically liable for every noise, but ignoring repeated, documented complaints about another tenant can itself be a breach of your right to quiet enjoyment.",
  },
];

export default function QuietEnjoymentPage() {
  return (
    <>
      <ArticleSchema
        headline={"Quiet Enjoyment & Noise Complaints: Tenant Rights in Canada"}
        description={"Your right to 'quiet enjoyment' means more than silence. What it covers, what to do about noisy neighbours or a disruptive landlord, how to document it, and when a breach can reduce your rent or end your lease."}
        url="https://leaseplain.com/blog/quiet-enjoyment-noise-complaints-canada"
        datePublished="2026-10-03"
        dateModified="2026-10-03"
        keywords={["quiet enjoyment tenant", "noise complaint rental", "noisy neighbours tenant rights"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Quiet Enjoyment & Noise", href: "https://leaseplain.com/blog/quiet-enjoyment-noise-complaints-canada" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/quiet-enjoyment-noise-complaints-canada",
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
                <span>Quiet Enjoyment & Noise</span>
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
                Quiet Enjoyment &amp; Noise Complaints: Your Rights
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                &quot;Quiet enjoyment&quot; is one of the most powerful — and misunderstood — tenant
                rights in Canada. It doesn&apos;t mean silence; it means the right to actually live in
                your home in peace. Here&apos;s what it covers and how to enforce it.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="October 2026" jurisdiction="Canadian residential-tenancy law" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What &quot;Quiet Enjoyment&quot; Actually Means</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">It&apos;s an implied term of every residential tenancy in Canada — you don&apos;t have to find it in your lease. It protects your right to <strong>use and enjoy your home without unreasonable interference</strong>, including:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li>Reasonable peace and quiet.</li>
                    <li>Privacy — the landlord stays out except with <Link href="/landlord-entry-rules-canada" className="text-blue-600 hover:underline">proper notice</Link>.</li>
                    <li>Freedom from <Link href="/blog/landlord-harassment-ontario" className="text-blue-600 hover:underline">harassment</Link> or intimidation.</li>
                    <li>Use of the unit and common areas you&apos;re entitled to.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Noisy Neighbours: Who&apos;s Responsible</h2>
                  <p className="text-slate-700 leading-relaxed">Your landlord must take <strong>reasonable steps</strong> to deal with disturbances caused by tenants they&apos;re responsible for. They&apos;re not liable for every sound in the building, but ignoring repeated, documented complaints can itself breach your quiet enjoyment. For noise from outside the landlord&apos;s control, municipal noise bylaws and police non-emergency lines are the route.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Document and Escalate</h2>
                  <ol className="list-decimal list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Keep a log:</strong> dates, times, duration, and the type of disturbance.</li>
                    <li><strong>Gather evidence:</strong> audio or video recordings where lawful, and any witnesses.</li>
                    <li><strong>Complain in writing</strong> to your landlord — email creates a timestamped record.</li>
                    <li><strong>Give a reasonable chance to fix it</strong>, then follow up in writing if nothing changes.</li>
                    <li><strong>Escalate to your tenancy board</strong> if the breach continues.</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Remedies: Rent Abatement and More</h2>
                  <p className="text-slate-700 leading-relaxed">If a serious disturbance continues — whether the landlord causes it (endless construction, illegal entries, harassment) or fails to address another tenant&apos;s conduct — tenancy boards can order a <strong>rent abatement</strong> (a partial refund for the period your enjoyment was reduced), orders to stop the conduct, and other remedies. In serious cases, the disruptive tenant can face eviction. A persistent breach can also support <Link href="/breaking-a-lease-canada" className="text-blue-600 hover:underline">ending your own tenancy</Link> early.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Landlord overstepping?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Generate a formal letter to your landlord documenting a breach of quiet enjoyment.
                  </p>
                  <Link href="/letters" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Letter Templates
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Landlord Entry Rules by Province", href: "/landlord-entry-rules-canada" },
                      { label: "Landlord Harassment: Your Rights", href: "/blog/landlord-harassment-ontario" },
                      { label: "Breaking a Lease by Province", href: "/breaking-a-lease-canada" },
                      { label: "Withholding Rent Over Repairs", href: "/blog/withholding-rent-repairs-ontario" },
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
