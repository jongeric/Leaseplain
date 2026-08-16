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
  title: "Can I Withhold Rent if My Landlord Won't Make Repairs in Ontario? | LeasePlain",
  description:
    "It's one of the most common — and most dangerous — misconceptions in Ontario renting. Withholding rent over repairs can get you evicted. Here's what to do instead: the T6 application, rent abatement, and building your case.",
  alternates: { canonical: "https://leaseplain.com/blog/withholding-rent-repairs-ontario" },
  openGraph: {
    title: "Can I Withhold Rent if My Landlord Won't Make Repairs in Ontario? | LeasePlain",
    description:
      "Withholding rent over repairs can get you evicted in Ontario. Here's the safe, effective route: the T6 application and rent abatement.",
    url: "https://leaseplain.com/blog/withholding-rent-repairs-ontario",
    type: "article",
    publishedTime: "2026-08-03T00:00:00Z",
    modifiedTime: "2026-08-03T00:00:00Z",
  },
  keywords: [
    "withhold rent ontario",
    "can i stop paying rent repairs ontario",
    "T6 application ontario",
    "rent abatement ontario",
    "landlord won't repair ontario",
  ],
};

const faqItems = [
  {
    q: "Can I legally withhold rent in Ontario if my landlord won't make repairs?",
    a: "No. Ontario has no general 'repair and deduct' or rent-withholding right. If you stop paying, your landlord can serve an N4 and start eviction for non-payment — even if the repair complaint is legitimate. The correct route is to keep paying and pursue the landlord through the LTB.",
  },
  {
    q: "What is a T6 application?",
    a: "A T6 is the Tenant Application About Maintenance you file with the Landlord and Tenant Board when your landlord fails to repair or maintain the unit. The LTB can order the repairs done, order a rent abatement (a partial refund) for the period you went without, and in some cases order other remedies.",
  },
  {
    q: "What is a rent abatement?",
    a: "A rent abatement is a reduction or partial refund of rent to compensate you for the reduced value of a unit that wasn't properly maintained. If you lived for months with, say, a broken heating system or persistent leak, the LTB can order the landlord to pay back a portion of the rent you paid during that time.",
  },
  {
    q: "Can I pay for an urgent repair myself and deduct it from rent?",
    a: "Be very careful. Ontario doesn't give tenants a clear right to unilaterally deduct repair costs from rent, and doing so can expose you to an N4. In limited urgent situations you may be able to seek reimbursement through the LTB afterward, but deducting first and arguing later is risky. Get advice before doing it.",
  },
  {
    q: "What should I do first if my landlord ignores repairs?",
    a: "Put the request in writing and keep a copy, document the problem with dated photos and notes, and give the landlord a reasonable chance to act. If they don't, contact municipal property standards for health-and-safety issues and file a T6 with the LTB. Keep paying your rent throughout.",
  },
];

export default function WithholdingRentRepairsOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline="Can I Withhold Rent if My Landlord Won't Make Repairs in Ontario?"
        description="It's one of the most common — and most dangerous — misconceptions in Ontario renting. Withholding rent over repairs can get you evicted. Here's what to do instead: the T6 application, rent abatement, and building your case."
        url="https://leaseplain.com/blog/withholding-rent-repairs-ontario"
        datePublished="2026-08-03"
        dateModified="2026-08-03"
        keywords={[
          "withhold rent ontario",
          "can i stop paying rent repairs ontario",
          "T6 application ontario",
          "rent abatement ontario",
          "landlord won't repair ontario",
        ]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Can I Withhold Rent Over Repairs in Ontario?", href: "https://leaseplain.com/blog/withholding-rent-repairs-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/withholding-rent-repairs-ontario",
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
                <span>Can I Withhold Rent Over Repairs in Ontario?</span>
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
                Can I Withhold Rent if My Landlord Won&apos;t Make Repairs in Ontario?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                It feels like the obvious leverage: stop paying until they fix it. In Ontario, that
                instinct can get you evicted. The good news is there&apos;s a route that actually works —
                and it can even get you money back. Here&apos;s the right way to force a repair.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="August 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Short Answer: No — Don&apos;t Withhold</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Ontario does <strong>not</strong> have a general rent-withholding or &quot;repair and
                    deduct&quot; right. Even if your complaint is completely valid, the moment you stop
                    paying, your landlord can serve an <strong>N4</strong> and begin eviction for
                    non-payment of rent. You&apos;d be trading a repair dispute you could win for an eviction
                    fight you might lose.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Your obligation to pay rent and the landlord&apos;s obligation to maintain the unit are
                    treated as separate duties. You enforce the repair duty through the Landlord and Tenant
                    Board — not by holding rent hostage. (If you&apos;ve already received an N4, see our{" "}
                    <Link href="/blog/n4-non-payment-rent-ontario" className="text-blue-600 hover:underline">
                      guide to the N4
                    </Link>.)
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Route That Works: The T6 Application</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The real tool is the <strong>T6 — Tenant Application About Maintenance</strong>. You file
                    it with the LTB when your landlord fails to meet their repair and maintenance
                    obligations. If you succeed, the Board can:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li><strong>Order the repairs</strong> to be completed, sometimes by a deadline;</li>
                    <li><strong>Order a rent abatement</strong> — a partial refund of the rent you paid while the unit wasn&apos;t properly maintained;</li>
                    <li><strong>Order other remedies,</strong> such as reimbursing you for related out-of-pocket costs, or in serious cases, allowing you to arrange repairs.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    That rent abatement is the key point: done properly, you can effectively recover money
                    for a badly maintained unit — the outcome people <em>hope</em> to get by withholding,
                    but through a route that doesn&apos;t put your tenancy at risk.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Build Your Case Before You File</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    A T6 lives or dies on evidence. Before and during the dispute:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li><strong>Request repairs in writing</strong> — email or letter — and keep every copy. A paper trail showing the landlord knew and didn&apos;t act is powerful.</li>
                    <li><strong>Document everything:</strong> dated photos and video, a log of when the problem started and how it affects you, and any related expenses.</li>
                    <li><strong>Contact municipal property standards</strong> for health-and-safety issues (no heat, pests, mould, unsafe conditions) — their inspection report supports your case.</li>
                    <li><strong>Keep paying your rent</strong> the entire time, so the landlord can&apos;t flip the script with an N4.</li>
                  </ol>
                  <p className="text-slate-700 leading-relaxed">
                    Our guide on{" "}
                    <Link href="/blog/landlord-repair-obligations-canada" className="text-blue-600 hover:underline">
                      how to get your landlord to fix something
                    </Link>{" "}
                    covers the escalation steps in more detail.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What About Paying for an Urgent Repair Yourself?</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Tempting in an emergency, but risky. Ontario doesn&apos;t give tenants a clear right to
                    unilaterally deduct repair costs from rent, so paying and then docking your rent can
                    still draw an N4. In narrow, genuinely urgent situations you may be able to seek
                    reimbursement through the LTB afterward — but get advice from a legal clinic first rather
                    than deducting on your own. The safer play is almost always: keep paying, document, and
                    file the T6.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Know what your landlord owes you</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your lease and we&apos;ll explain your repair and maintenance rights — and flag
                    any clause that tries to offload the landlord&apos;s duties onto you.
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
                      { label: "How to Get Your Landlord to Make Repairs", href: "/blog/landlord-repair-obligations-canada" },
                      { label: "Got an N4? Non-Payment of Rent", href: "/blog/n4-non-payment-rent-ontario" },
                      { label: "Heat and Air Conditioning in Ontario", href: "/blog/landlord-heat-air-conditioning-ontario" },
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
