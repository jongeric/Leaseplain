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
  title: "Ontario Rent Increase Guideline 2027: 1.9% Explained | LeasePlain",
  description:
    "Ontario's 2027 rent increase guideline is 1.9% — the lowest since the 2021 freeze. What it means, who's exempt, the 90-day notice rule, and how to check your increase is legal.",
  alternates: { canonical: "https://leaseplain.com/blog/ontario-rent-increase-2027-guideline" },
  openGraph: {
    title: "Ontario Rent Increase Guideline 2027: 1.9% Explained | LeasePlain",
    description:
      "The 2027 Ontario rent increase guideline is 1.9%. Who it applies to, who's exempt, and how to check your increase.",
    url: "https://leaseplain.com/blog/ontario-rent-increase-2027-guideline",
    type: "article",
    publishedTime: "2026-10-03T00:00:00Z",
    modifiedTime: "2026-10-03T00:00:00Z",
  },
  keywords: ["ontario rent increase 2027", "2027 rent increase guideline", "ontario rent increase 1.9", "how much can rent go up 2027 ontario", "rent increase guideline ontario"],
};

const faqItems = [
  {
    q: "What is the Ontario rent increase guideline for 2027?",
    a: "The 2027 guideline is 1.9%. It's the maximum most landlords can raise rent on a rent-controlled unit without approval from the Landlord and Tenant Board, and it applies to increases that take effect at any point in 2027.",
  },
  {
    q: "Why is the 2027 guideline lower than 2026?",
    a: "The guideline is tied to the Ontario Consumer Price Index. Cooling inflation brought the 2027 figure down to 1.9%, from 2.1% in 2026. By law the guideline is also capped at 2.5%, even when inflation runs higher.",
  },
  {
    q: "Does the 1.9% guideline apply to my unit?",
    a: "Only to rent-controlled units. Units first occupied for residential use on or after November 15, 2018 are exempt from the guideline, so there's no percentage cap on their increase — though the once-every-12-months rule and 90-day written notice still apply.",
  },
  {
    q: "How much notice does my landlord need to give for a 2027 increase?",
    a: "At least 90 days' written notice on the correct form (Form N1), and rent can only be increased once every 12 months. An increase that skips proper notice or comes too soon isn't valid.",
  },
  {
    q: "Can my landlord raise rent more than 1.9% in 2027?",
    a: "Only if the unit is exempt (first occupied after Nov 15, 2018), you agree to an increase tied to a new service, or the landlord gets an above-guideline increase (AGI) order from the LTB for specific reasons like major capital work. Otherwise 1.9% is the ceiling.",
  },
];

export default function Ontario2027GuidelinePage() {
  return (
    <>
      <ArticleSchema
        headline={"Ontario Rent Increase Guideline 2027: 1.9% Explained"}
        description={"Ontario's 2027 rent increase guideline is 1.9% — the lowest since the 2021 freeze. What it means, who's exempt, the 90-day notice rule, and how to check your increase is legal."}
        url="https://leaseplain.com/blog/ontario-rent-increase-2027-guideline"
        datePublished="2026-10-03"
        dateModified="2026-10-03"
        keywords={["ontario rent increase 2027", "2027 rent increase guideline", "ontario rent increase 1.9"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Ontario Rent Increase 2027", href: "https://leaseplain.com/blog/ontario-rent-increase-2027-guideline" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/ontario-rent-increase-2027-guideline",
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
                <span>Ontario Rent Increase 2027</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Ontario
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  October 3, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  5 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Ontario Rent Increase Guideline 2027: 1.9%
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Ontario&apos;s 2027 rent increase guideline is <strong>1.9%</strong> — the lowest since the
                2021 rent freeze. Here&apos;s what it means for your rent, who&apos;s exempt, and how to
                make sure any increase you get is actually legal.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="October 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What the 1.9% Guideline Means</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">The guideline is the <strong>maximum a landlord can raise rent</strong> on a rent-controlled unit in 2027 without applying to the Landlord and Tenant Board. On $2,000/month rent, 1.9% is an increase of <strong>$38</strong>, to $2,038.</p>
                  <p className="text-slate-700 leading-relaxed">It&apos;s set from the Ontario Consumer Price Index and is <strong>capped at 2.5% by law</strong>. The drop from 2.1% in 2026 to 1.9% in 2027 reflects cooling inflation.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Recent Guideline History</h2>
                  <ul className="list-disc list-inside space-y-1.5 text-slate-700 leading-relaxed">
                    <li><strong>2027: 1.9%</strong> (lowest since the freeze)</li>
                    <li>2026: 2.1%</li>
                    <li>2023–2025: 2.5% (held at the legal cap)</li>
                    <li>2021: 0% (legislated freeze)</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mt-3">See the <Link href="/ontario-rent-increase-history" className="text-blue-600 hover:underline">full Ontario guideline history</Link> going back to 2020.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Who&apos;s Exempt: The Post-2018 Rule</h2>
                  <p className="text-slate-700 leading-relaxed">Units <strong>first occupied for residential use on or after November 15, 2018</strong> are exempt from the guideline — there&apos;s no percentage cap on their increase. The once-every-12-months rule and 90-day notice still apply. Not sure if this is you? Read our guide to the <Link href="/blog/post-2018-rent-control-exemption-ontario" className="text-blue-600 hover:underline">post-2018 rent control exemption</Link>.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Notice &amp; Timing Rules</h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>90 days&apos; written notice</strong> on Form N1.</li>
                    <li><strong>Once every 12 months</strong> — no stacking increases.</li>
                    <li>At least 12 months since you moved in or since the last increase.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mt-3">An increase that skips proper notice or comes too soon isn&apos;t valid. Learn <Link href="/blog/how-to-dispute-a-rent-increase-ontario" className="text-blue-600 hover:underline">how to dispute a rent increase</Link>.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Check Your Increase</h2>
                  <p className="text-slate-700 leading-relaxed">Run the numbers with our free <Link href="/tools/rent-increase-calculator" className="text-blue-600 hover:underline">rent increase calculator</Link>, confirm your landlord&apos;s math with the <Link href="/tools/agi-checker" className="text-blue-600 hover:underline">guideline checker</Link>, and compare the rules across the country on our <Link href="/rent-increase-rules-canada" className="text-blue-600 hover:underline">rent increase by province</Link> hub.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Is your increase legal?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Check your rent increase against the 2027 guideline in seconds — free.
                  </p>
                  <Link href="/tools/agi-checker" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Check My Increase
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "2026 Rent Increase Guideline (2.1%)", href: "/blog/ontario-rent-increase-guideline-2026" },
                      { label: "Ontario Rent Increase History", href: "/ontario-rent-increase-history" },
                      { label: "How to Dispute a Rent Increase", href: "/blog/how-to-dispute-a-rent-increase-ontario" },
                      { label: "Rent Increase Rules by Province", href: "/rent-increase-rules-canada" },
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
