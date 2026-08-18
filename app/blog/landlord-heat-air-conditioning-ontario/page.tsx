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
  title: "Is Your Landlord Required to Provide Heat and Air Conditioning in Ontario? | LeasePlain",
  description:
    "Heat is a vital service your Ontario landlord must provide — and can never shut off. Air conditioning is different. Learn the minimum-temperature rules, your right to install a unit, and what to do if the heat goes out.",
  alternates: { canonical: "https://leaseplain.com/blog/landlord-heat-air-conditioning-ontario" },
  openGraph: {
    title: "Is Your Landlord Required to Provide Heat and Air Conditioning in Ontario? | LeasePlain",
    description:
      "Heat is a vital service in Ontario; AC is treated differently. Minimum-temperature rules, your rights, and what to do if the heat fails.",
    url: "https://leaseplain.com/blog/landlord-heat-air-conditioning-ontario",
    type: "article",
    publishedTime: "2026-08-03T00:00:00Z",
    modifiedTime: "2026-08-03T00:00:00Z",
  },
  keywords: [
    "landlord heat ontario",
    "minimum temperature rental ontario",
    "air conditioning ontario rental",
    "vital services ontario",
    "no heat apartment ontario",
  ],
};

const faqItems = [
  {
    q: "Is my landlord required to provide heat in Ontario?",
    a: "Yes. Heat is a vital service under the Residential Tenancies Act. Where the landlord supplies heat, they must maintain it, and municipal bylaws set a minimum temperature during the heating season (in Toronto, for example, at least 21°C from mid-September to the start of June). A landlord can never shut off heat or another vital service, even if you owe rent.",
  },
  {
    q: "Is my landlord required to provide air conditioning?",
    a: "Generally no. Air conditioning is not treated as a vital service across Ontario the way heat is, so most landlords aren't required to supply it. However, if your landlord does provide AC as part of your tenancy, they can't simply take it away, and a growing number of municipalities are moving toward maximum-temperature and adequate-cooling rules. Check your city's bylaws.",
  },
  {
    q: "Can I install my own window or portable air conditioner?",
    a: "Usually yes. Tenants generally have the right to install a window or portable AC unit for their own comfort, as long as it's done safely and doesn't breach a legitimate building or safety restriction. Your tenancy agreement may address who pays for the extra electricity if you're separately metered or reimburse the landlord.",
  },
  {
    q: "What's the minimum temperature a rental must be kept at?",
    a: "There's no single province-wide number — minimum heating temperatures are set by municipal property-standards bylaws. Many Ontario cities require around 21°C during the heating season. Contact your municipality's property standards or bylaw office for the exact figure and heating dates where you live.",
  },
  {
    q: "What do I do if my heat goes out in winter?",
    a: "Tell your landlord immediately and in writing. If they don't fix it promptly, contact your municipality's property standards/bylaw enforcement, which can order repairs for a vital-service failure. You can also file a T6 maintenance application with the LTB, which can order repairs and a rent abatement. Loss of heat in winter is an emergency and is often treated urgently.",
  },
];

export default function LandlordHeatACOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline="Is Your Landlord Required to Provide Heat and Air Conditioning in Ontario?"
        description="Heat is a vital service your Ontario landlord must provide — and can never shut off. Air conditioning is different. Learn the minimum-temperature rules, your right to install a unit, and what to do if the heat goes out."
        url="https://leaseplain.com/blog/landlord-heat-air-conditioning-ontario"
        datePublished="2026-08-03"
        dateModified="2026-08-03"
        keywords={[
          "landlord heat ontario",
          "minimum temperature rental ontario",
          "air conditioning ontario rental",
          "vital services ontario",
          "no heat apartment ontario",
        ]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Heat and Air Conditioning in Ontario Rentals", href: "https://leaseplain.com/blog/landlord-heat-air-conditioning-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/landlord-heat-air-conditioning-ontario",
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
                <span>Heat and Air Conditioning in Ontario Rentals</span>
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
                Is Your Landlord Required to Provide Heat and Air Conditioning in Ontario?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Heat and air conditioning are treated very differently under Ontario law. One is a
                vital service your landlord must provide and can never cut off; the other usually
                isn&apos;t required at all. Here&apos;s where the lines are — and what to do when the
                temperature in your unit becomes unlivable.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="August 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Heat Is a Vital Service — Full Stop</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Under Ontario&apos;s <em>Residential Tenancies Act</em>, heat is a{" "}
                    <strong>vital service</strong>, alongside hot and cold water, fuel, and electricity.
                    Where your landlord is the one supplying heat, they must keep it running and in good
                    repair. Critically, a landlord <strong>cannot shut off or deliberately interfere with a
                    vital service</strong> — not to force you out, and not even if you owe rent. Doing so is
                    illegal and can trigger penalties.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    During the heating season, <strong>municipal property-standards bylaws</strong> set a
                    minimum indoor temperature. There&apos;s no single provincial number, but many Ontario
                    cities require around <strong>21°C</strong>. In Toronto, for example, landlords must
                    maintain at least 21°C from roughly mid-September to the start of June. Check your own
                    municipality for the exact temperature and dates.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Air Conditioning Is a Different Story</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Air conditioning is generally <strong>not</strong> a vital service in Ontario, so most
                    landlords are not required to provide it. That said, two things are worth knowing:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>
                      <strong>If your landlord does provide AC</strong> as part of your tenancy, they
                      can&apos;t simply remove or discontinue it — that would be an unlawful reduction of a
                      service you&apos;re paying for.
                    </li>
                    <li>
                      <strong>The rules are shifting.</strong> With hotter summers, a growing number of
                      municipalities are exploring maximum-temperature and adequate-cooling standards. This
                      is an evolving area, so check whether your city has adopted any cooling bylaw.
                    </li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    Bottom line: don&apos;t assume AC is guaranteed, but don&apos;t assume you have no
                    options either.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Your Right to Install a Unit</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Tenants generally have the right to install their own <strong>window or portable air
                    conditioner</strong> for personal comfort, provided it&apos;s installed safely and
                    doesn&apos;t breach a genuine safety or building restriction. Read your tenancy agreement:
                    it may address who covers the extra electricity, especially if your unit is separately
                    metered. A blanket &quot;no air conditioners&quot; clause that isn&apos;t tied to a real
                    safety concern is the kind of term worth questioning.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What to Do If the Heat Fails</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Loss of heat in winter is an emergency. Move quickly:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li><strong>Notify your landlord immediately, in writing,</strong> and keep a copy.</li>
                    <li><strong>Call municipal property standards / bylaw enforcement</strong> if it isn&apos;t fixed fast — they can order a landlord to restore a vital service.</li>
                    <li><strong>File a T6 maintenance application</strong> with the LTB, which can order repairs and a rent abatement for the time you went without.</li>
                  </ol>
                  <p className="text-slate-700 leading-relaxed">
                    Whatever you do, keep paying your rent — withholding it can backfire. For why, and the
                    right way to press a repair issue, see our guide on{" "}
                    <Link href="/blog/withholding-rent-repairs-ontario" className="text-blue-600 hover:underline">
                      whether you can withhold rent over repairs
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/landlord-repair-obligations-canada" className="text-blue-600 hover:underline">
                      how to get your landlord to fix something
                    </Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">What does your lease say about utilities?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your lease and we&apos;ll explain who&apos;s responsible for heat, hydro, and
                    cooling — and flag any clause that shifts an illegal cost onto you.
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
                      { label: "Can I Withhold Rent Over Repairs?", href: "/blog/withholding-rent-repairs-ontario" },
                      { label: "Can a Landlord Enter Without Notice?", href: "/blog/landlord-entry-notice-canada" },
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
