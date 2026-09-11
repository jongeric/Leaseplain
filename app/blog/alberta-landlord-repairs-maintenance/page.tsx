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
  title: "Landlord Repairs & Maintenance in Alberta: Your Rights | LeasePlain",
  description:
    "Your Alberta landlord must meet minimum housing, health, and safety standards — including heat and essential services. What they must maintain, how minimum housing standards work, and how to get repairs done.",
  alternates: { canonical: "https://leaseplain.com/blog/alberta-landlord-repairs-maintenance" },
  openGraph: {
    title: "Landlord Repairs & Maintenance in Alberta: Your Rights | LeasePlain",
    description:
      "Repairs, heat, minimum housing standards, and enforcement in Alberta — your landlord's obligations.",
    url: "https://leaseplain.com/blog/alberta-landlord-repairs-maintenance",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["landlord repairs alberta", "minimum housing standards alberta", "no heat rental alberta", "landlord maintenance obligations alberta", "rental repairs alberta"],
};

const faqItems = [
  {
    q: "Is my landlord responsible for repairs in Alberta?",
    a: "Yes. Alberta landlords must keep rentals meeting the Minimum Housing and Health Standards and the Public Health Act, including structural, heating, plumbing, and electrical systems. These obligations can't be waived by a lease clause.",
  },
  {
    q: "What do I do if my landlord won't make repairs in Alberta?",
    a: "Request the repair in writing and keep records. If the landlord ignores you, contact Alberta Health Services (environmental public health) or your municipality about minimum-standards violations, and consider a claim through the RTDRS or Provincial Court.",
  },
  {
    q: "Can my landlord shut off my heat in Alberta?",
    a: "No. Where heat and essential services are part of the tenancy, the landlord must maintain them and can't cut them off to pressure you. Alberta's housing standards set minimum heating requirements, and a shut-off is a serious violation.",
  },
  {
    q: "Can I withhold rent for repairs in Alberta?",
    a: "It's risky to simply stop paying — that can put you in breach and lead to eviction. Instead, document the problem, report it to public health or the municipality, and pursue a claim through the RTDRS or court for the landlord's failure to maintain the unit.",
  },
];

export default function AlbertaLandlordRepairsMaintenancePage() {
  return (
    <>
      <ArticleSchema
        headline={"Landlord Repairs and Maintenance in Alberta: Your Rights"}
        description={"Your Alberta landlord must meet minimum housing, health, and safety standards — including heat and essential services. What they must maintain, how minimum housing standards work, and how to get repairs done."}
        url="https://leaseplain.com/blog/alberta-landlord-repairs-maintenance"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["landlord repairs alberta", "minimum housing standards alberta", "no heat rental alberta"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Landlord Repairs in Alberta", href: "https://leaseplain.com/blog/alberta-landlord-repairs-maintenance" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/alberta-landlord-repairs-maintenance",
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
                <span>Landlord Repairs in Alberta</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Alberta
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
                Landlord Repairs &amp; Maintenance in Alberta: Your Rights
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                In Alberta your landlord must keep your home meeting minimum housing and health standards — heat and essential services included. Here&apos;s what they&apos;re responsible for, and how to force action when they won&apos;t fix things.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Minimum Housing Standards</h2>
                  <p className="text-slate-700 leading-relaxed">Alberta rentals must meet the province&apos;s <strong>Minimum Housing and Health Standards</strong> and the <strong>Public Health Act</strong>. That covers structural safety, heating, plumbing, electrical, and freedom from health hazards. A lease clause can&apos;t sign these obligations away, and they apply even to problems you noticed before moving in.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Heat and Essential Services</h2>
                  <p className="text-slate-700 leading-relaxed">Landlords must provide and maintain <strong>heat and essential services</strong> where they&apos;re included in the tenancy. A landlord can&apos;t cut off heat, water, or power to pressure a tenant — doing so is a serious violation. Alberta&apos;s standards set minimum heating requirements for the cold months.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Report to the Landlord — In Writing</h2>
                  <p className="text-slate-700 leading-relaxed">Start with a clear <strong>written request</strong> to the landlord, with dates and photos, and keep a copy. Most disputes turn on who can prove what, and a paper trail is your strongest asset. Give a reasonable deadline to respond.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Escalate to Public Health / the Municipality</h2>
                  <p className="text-slate-700 leading-relaxed">If the landlord ignores you, you can contact <strong>Alberta Health Services (environmental public health)</strong> or your municipality about breaches of the minimum housing standards. An inspector can order the landlord to fix the problem — often faster than a tribunal, and a strong piece of evidence.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">RTDRS and Compensation</h2>
                  <p className="text-slate-700 leading-relaxed">You can also bring a claim through the <strong>RTDRS</strong> or Provincial Court for the landlord&apos;s failure to maintain the premises, seeking remedies such as compensation. Don&apos;t simply withhold rent on your own — pursue the proper channels so you stay protected.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Landlord ignoring repairs?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Send a clear, dated repair request they can&apos;t claim they never received.
                  </p>
                  <Link href="/letters/repair-request-letter" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Repair Request Letter
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Alberta Security Deposit Rules", href: "/blog/alberta-security-deposit-rules" },
                      { label: "Bed Bugs & Pests: Who's Responsible?", href: "/blog/bed-bugs-pests-landlord-ontario" },
                      { label: "Alberta Eviction Process", href: "/blog/alberta-eviction-process" },
                      { label: "Alberta Tenant Rights", href: "/canada/alberta" },
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
