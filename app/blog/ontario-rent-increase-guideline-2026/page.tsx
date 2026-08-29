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
  title: "Ontario Rent Increase Guideline 2026: What Tenants Need to Know | LeasePlain",
  description:
    "Ontario's 2026 rent increase guideline is 2.1%. Learn who is exempt, how to check if your increase is valid, what Form N1 means, and what to do if your landlord exceeds the guideline.",
  alternates: { canonical: "https://leaseplain.com/blog/ontario-rent-increase-guideline-2026" },
  openGraph: {
    title: "Ontario Rent Increase Guideline 2026: What Tenants Need to Know | LeasePlain",
    description:
      "Ontario's 2026 rent increase guideline is 2.1%. Learn who is exempt, how to check if your increase is valid, and what to do if your landlord goes over.",
    url: "https://leaseplain.com/blog/ontario-rent-increase-guideline-2026",
    type: "article",
    publishedTime: "2026-01-15T00:00:00Z",
    modifiedTime: "2026-01-15T00:00:00Z",
  },
  keywords: [
    "ontario rent increase 2026",
    "ontario rent guideline 2026",
    "rent increase guideline ontario",
    "N1 form ontario",
    "LTB rent increase",
  ],
};

const faqItems = [
  {
    q: "What is Ontario's rent increase guideline for 2026?",
    a: "The Ontario rent increase guideline for 2026 is 2.1%. Landlords of units subject to rent control cannot raise rent by more than this percentage in 2026 without LTB approval.",
  },
  {
    q: "What is Ontario's rent increase guideline for 2027?",
    a: "Ontario has announced a 2027 rent increase guideline of 1.9% — the lowest since the 2021 rent freeze. It applies to increases that take effect in 2027, subject to the usual 90-day notice and once-every-12-months rules.",
  },
  {
    q: "How much notice must a landlord give before raising rent in Ontario?",
    a: "A landlord must provide at least 90 days written notice before a rent increase takes effect. The notice should be given on LTB Form N1.",
  },
  {
    q: "Is my new apartment subject to rent control in Ontario?",
    a: "If your unit was first occupied for residential purposes after November 15, 2018, it is exempt from Ontario's rent control guideline. If it was first occupied before that date, the guideline applies.",
  },
  {
    q: "Can my landlord raise rent by more than 2.1% in 2026?",
    a: "For units subject to rent control, no — not without LTB approval for an above-guideline increase. The 2026 guideline is 2.1%. For exempt units (first occupied after November 15, 2018), there is no cap on the percentage, but proper notice must still be given.",
  },
  {
    q: "What if I already paid an illegal rent increase?",
    a: "You can file a T1 application with the LTB to recover money paid above the guideline. There are deadlines for doing so, so act promptly.",
  },
];

export default function OntarioRentIncrease2026Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <ArticleSchema
        headline="Ontario Rent Increase Guideline 2026: What Tenants Need to Know"
        description="Ontario's 2026 rent increase guideline is 2.1%. Learn who is exempt, how to check if your increase is valid, what Form N1 means, and what to do if your landlord exceeds the guideline."
        url="https://leaseplain.com/blog/ontario-rent-increase-guideline-2026"
        datePublished="2026-01-15"
        dateModified="2026-06-05"
        keywords={[
          "ontario rent increase 2026",
          "ontario rent guideline 2026",
          "rent increase guideline ontario",
          "N1 form ontario",
          "LTB rent increase",
        ]}
        imageUrl="https://leaseplain.com/diagrams/ontario-rent-increase-2026.png"
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Ontario Rent Increase Guideline 2026", href: "https://leaseplain.com/blog/ontario-rent-increase-guideline-2026" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "<") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/ontario-rent-increase-guideline-2026",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", ".speakable-summary"],
            },
          }).replace(/</g, "<"),
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
                <span>Ontario Rent Increase Guideline 2026</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Ontario
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  January 15, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  7 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Ontario Rent Increase Guideline 2026: What Tenants Need to Know
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Ontario&apos;s rent increase guideline for 2026 is set at 2.1%. If your landlord
                has given you an increase notice, here is how to check whether it is valid — and
                what your options are if it is not.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="August 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What Is the 2026 Rent Increase Guideline?</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Each year, the Ontario government sets a maximum percentage by which landlords can
                    increase rent for most existing tenants. For 2026, that guideline is <strong>2.1%</strong>.
                    This means a landlord renting a unit covered by rent control cannot raise rent by
                    more than 2.1% in 2026 without obtaining approval from the Landlord and Tenant
                    Board (LTB).
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    The guideline is set annually by the Ministry of Municipal Affairs and Housing,
                    based on Ontario&apos;s Consumer Price Index (CPI). Even within the guideline, a
                    landlord can only raise rent once every 12 months, and must provide at least
                    90 days written notice beforehand.
                  </p>
                  <div className="mt-4 flex items-start gap-3 rounded-xl bg-blue-50 border border-blue-100 p-4">
                    <Tag className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-sm text-blue-900">
                      <strong>Looking ahead to 2027:</strong> Ontario has announced a{" "}
                      <strong>1.9%</strong> guideline for 2027 — the lowest since the 2021 freeze. It
                      applies to increases that take effect in 2027. See the full{" "}
                      <Link href="/ontario-rent-increase-history" className="font-semibold underline">guideline history</Link>.
                    </p>
                  </div>
                  <figure className="mt-5">
                    <img
                      src="/diagrams/ontario-rent-increase-2026.png"
                      alt="Bar chart of Ontario's annual rent increase guideline from 2020 to 2026: 2.2% in 2020, 0% rent freeze in 2021, 1.2% in 2022, 2.5% in 2023 through 2025, and 2.1% in 2026"
                      width={1200}
                      height={630}
                      loading="lazy"
                      className="w-full h-auto rounded-xl border border-slate-200"
                    />
                    <figcaption className="text-sm text-slate-500 mt-2">
                      Ontario&apos;s rent increase guideline, 2020–2026. The 2021 freeze was a
                      COVID-era measure; the guideline is capped at 2.5% by law.
                    </figcaption>
                  </figure>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Which Units Are Exempt?</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Not all rental units in Ontario are covered by rent control. Units that were first
                    occupied for residential purposes <strong>after November 15, 2018</strong> are exempt
                    from the guideline under changes made by the previous provincial government. If your
                    building is newer or was converted to residential use after that date, your landlord
                    may be able to raise rent by any amount — though all other notice requirements still
                    apply.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    To determine whether your unit is subject to rent control, you can check Ontario&apos;s
                    rental registry or contact the LTB directly. The key date is the first time the unit
                    was ever occupied as a residential rental, not when you moved in.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Check if Your Increase Is Valid</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Before accepting a rent increase, verify four things:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li><strong>Notice period:</strong> You must receive at least 90 days written notice before the increase takes effect.</li>
                    <li><strong>Frequency:</strong> Your rent can only be increased once every 12 months.</li>
                    <li><strong>Form N1:</strong> The notice should be provided on the official LTB Form N1, which clearly states the new rent amount and the effective date.</li>
                    <li><strong>Percentage:</strong> The increase must not exceed 2.1% for units subject to the guideline (unless the landlord has received an above-guideline increase order from the LTB).</li>
                  </ol>
                  <p className="text-slate-700 leading-relaxed">
                    Use our{" "}
                    <Link href="/tools/rent-increase-calculator" className="text-blue-600 hover:underline">
                      Rent Increase Calculator
                    </Link>{" "}
                    to instantly check whether a proposed increase complies with the 2026 guideline for your
                    current rent amount.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What Is Form N1?</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Form N1 is the official LTB notice a landlord must use to inform a tenant of a rent
                    increase. It states the current rent, the proposed new rent, the percentage increase,
                    and the date it takes effect. A rent increase communicated only through a text message,
                    letter, or verbal conversation — without proper N1 form and sufficient notice — is not
                    valid.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    If your landlord has not used Form N1, or if the notice was given fewer than 90 days
                    before the increase date, you are not obligated to pay the higher amount until proper
                    notice is served.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What to Do if Your Landlord Exceeds the Guideline</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    If your unit is subject to rent control and your landlord proposes an increase above
                    2.1%, you have the right to challenge it. You do not need to pay the above-guideline
                    portion while the dispute is ongoing. Here are your options:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>
                      <strong>Write to your landlord</strong> explaining that the increase exceeds the
                      2026 guideline of 2.1% and that you will pay only the guideline amount.
                    </li>
                    <li>
                      <strong>File a T1 application</strong> with the LTB if you have already paid above
                      the guideline — this application can recover the overpaid amount.
                    </li>
                    <li>
                      <strong>Contact the LTB</strong> information line at 1-888-332-3234 to get advice
                      specific to your situation.
                    </li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    A landlord who wants to increase rent above the guideline — for example, due to
                    extraordinary capital expenditures or significant operating cost increases — must
                    apply to the LTB for an above-guideline increase (AGI) and receive approval before
                    charging the higher amount.
                  </p>
                  <p className="text-slate-700 leading-relaxed mt-3">
                    For more detail on Ontario tenant rights, see our full guide on{" "}
                    <Link href="/canada/ontario" className="text-blue-600 hover:underline">
                      renting in Ontario
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
                  <h3 className="font-bold text-lg mb-2">Check your rent increase</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Enter your current rent and proposed increase to instantly see if it complies
                    with the 2026 Ontario guideline.
                  </p>
                  <Link
                    href="/tools/rent-increase-calculator"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Rent Increase Calculator
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Renting in Ontario", href: "/canada/ontario" },
                      { label: "BC Rent Increase Limit 2026", href: "/blog/bc-rent-increase-2026" },
                      { label: "How to Fight an Illegal Eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
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
