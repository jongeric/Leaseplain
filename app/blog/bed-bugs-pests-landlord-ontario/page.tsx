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
  title: "Bed Bugs and Pests in a Rental: Who Pays in Ontario? | LeasePlain",
  description:
    "In Ontario, dealing with bed bugs, cockroaches, mice, and other pests is almost always the landlord's responsibility — even if you don't know how they got in. Your rights, how to report, and what to do if the landlord ignores it.",
  alternates: { canonical: "https://leaseplain.com/blog/bed-bugs-pests-landlord-ontario" },
  openGraph: {
    title: "Bed Bugs and Pests in a Rental: Who Pays in Ontario? | LeasePlain",
    description:
      "Pest control is almost always the landlord's job in Ontario. Your rights and how to force action.",
    url: "https://leaseplain.com/blog/bed-bugs-pests-landlord-ontario",
    type: "article",
    publishedTime: "2026-09-07T00:00:00Z",
    modifiedTime: "2026-09-07T00:00:00Z",
  },
  keywords: [
    "bed bugs rental ontario who pays",
    "landlord responsibility pests ontario",
    "cockroaches rental ontario",
    "mice apartment landlord ontario",
    "pest control tenant rights ontario",
  ],
};

const faqItems = [
  {
    q: "Is the landlord responsible for bed bugs in Ontario?",
    a: "Almost always, yes. Landlords must keep the rental in a good state of repair and fit for habitation, and comply with health and maintenance standards. That includes treating pest infestations like bed bugs, cockroaches, and mice — even when it's unclear who brought them in. The landlord pays for professional extermination.",
  },
  {
    q: "Can my landlord charge me for pest control?",
    a: "Generally no. The landlord can't pass extermination costs to you unless they can prove at the LTB that you deliberately or negligently caused the infestation — a high bar that's rarely met. Blanket lease clauses making tenants pay for all pest control are not enforceable.",
  },
  {
    q: "What do I do if my landlord ignores a pest problem?",
    a: "Report it in writing and keep a copy. If the landlord doesn't act, you can call your municipality's property standards / bylaw office to order treatment, and you can file a T6 (Tenant Rights) application with the Landlord and Tenant Board for a rent abatement and an order requiring treatment.",
  },
  {
    q: "Can I break my lease because of bed bugs?",
    a: "An infestation alone isn't an automatic right to leave, but if the unit becomes uninhabitable and the landlord won't act, that can support a T6 application, a rent abatement, and in serious cases an argument that the tenancy should end. Get advice from a tenant clinic or paralegal first.",
  },
];

export default function BedBugsPestsOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline="Bed Bugs and Pests in a Rental: Who's Responsible in Ontario?"
        description="In Ontario, dealing with bed bugs, cockroaches, mice, and other pests is almost always the landlord's responsibility. Your rights, how to report, and what to do if the landlord ignores it."
        url="https://leaseplain.com/blog/bed-bugs-pests-landlord-ontario"
        datePublished="2026-09-07"
        dateModified="2026-09-07"
        keywords={["bed bugs rental ontario", "landlord responsibility pests ontario", "pest control tenant rights ontario"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Bed Bugs & Pests in Ontario", href: "https://leaseplain.com/blog/bed-bugs-pests-landlord-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/bed-bugs-pests-landlord-ontario",
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
                <span>Bed Bugs &amp; Pests in Ontario</span>
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
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Bed Bugs and Pests in a Rental: Who&apos;s Responsible in Ontario?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Bed bugs, cockroaches, mice — few things make a home feel less livable. The good news
                for renters in Ontario: dealing with pests is almost always the landlord&apos;s legal
                responsibility, and they usually can&apos;t bill you for it. Here&apos;s how to get it fixed.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Landlord Has to Deal With It</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Under the Residential Tenancies Act, your landlord must keep the unit in a{" "}
                    <strong>good state of repair and fit for habitation</strong>, and comply with health,
                    safety, and maintenance standards. Ontario adjudicators have consistently treated
                    pest infestations — bed bugs, cockroaches, rodents — as the landlord&apos;s
                    responsibility to fix, using professional extermination.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Crucially, this holds <strong>even when nobody can prove how the pests got in</strong>.
                    You don&apos;t have to establish it wasn&apos;t your fault.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Can They Make You Pay?</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Almost never. A landlord can only charge you for treatment if they can prove at the
                    LTB that you <strong>deliberately or negligently</strong> caused the infestation —
                    which is rarely established. A lease clause that says &quot;tenant is responsible for
                    all pest control&quot; doesn&apos;t override the Act and generally won&apos;t be enforced.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Report It in Writing — Immediately</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Tell your landlord <strong>in writing</strong> (text or email is fine) as soon as you
                    notice a problem, and keep the copy. Note the date you first saw pests, take photos,
                    and cooperate with reasonable preparation the exterminator asks for (like laundering
                    bedding) — refusing to prepare can shift some blame to you.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    A written record is what turns &quot;he said, she said&quot; into a winnable case if
                    the landlord drags their feet.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If the Landlord Ignores You</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">You have two escalation routes, and you can use both:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Municipal property standards / bylaw enforcement.</strong> Your city can inspect and order the landlord to treat the infestation, often faster than the LTB.</li>
                    <li><strong>File a T6 at the Landlord and Tenant Board.</strong> This is the maintenance application. You can ask for an order requiring treatment plus a <strong>rent abatement</strong> (a partial refund) for the time you lived with the problem.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What About Damaged Belongings?</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Bed bugs can ruin mattresses and furniture. The Board can award compensation in some
                    cases, but recovering the full value of belongings is harder than getting the unit
                    treated. This is one reason{" "}
                    <Link href="/blog/tenant-insurance-ontario" className="text-blue-600 hover:underline">tenant insurance</Link>{" "}
                    matters — some policies help with pest-related losses.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Landlord not making repairs?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Generate a clear written maintenance request you can send today.
                  </p>
                  <Link href="/letters/repair-request-letter" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Repair Request Letter
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Can I Withhold Rent Over Repairs?", href: "/blog/withholding-rent-repairs-ontario" },
                      { label: "Is Tenant Insurance Mandatory?", href: "/blog/tenant-insurance-ontario" },
                      { label: "Heat & Air Conditioning Rules", href: "/blog/landlord-heat-air-conditioning-ontario" },
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
