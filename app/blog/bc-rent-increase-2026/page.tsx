import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "BC Rent Increase Limit 2026: Rules for BC Tenants | LeasePlain",
  description:
    "BC's 2026 rent increase cap is 2.3%, based on BC CPI only. Learn the notice requirements, how the Residential Tenancy Branch enforces limits, and what to do if your landlord charges more.",
  alternates: { canonical: "https://leaseplain.com/blog/bc-rent-increase-2026" },
  openGraph: {
    title: "BC Rent Increase Limit 2026: Rules for BC Tenants | LeasePlain",
    description:
      "BC's 2026 rent increase cap is 2.3%, based on BC CPI only. Learn the notice requirements and what to do if your landlord charges more.",
    url: "https://leaseplain.com/blog/bc-rent-increase-2026",
    type: "article",
    publishedTime: "2026-02-01T00:00:00Z",
    modifiedTime: "2026-06-05T00:00:00Z",
  },
  keywords: [
    "bc rent increase 2026",
    "british columbia rent cap 2026",
    "bc rent increase limit",
    "RTB rent increase",
    "bc tenant rights rent",
  ],
};

const faqItems = [
  {
    q: "How is BC's rent increase limit calculated for 2026?",
    a: "Since 2019, BC caps rent increases at BC CPI only — the former CPI + 2% formula was abolished in 2018. For 2026, the allowable increase is 2.3%. The provincial government announces the exact figure annually based on inflation data.",
  },
  {
    q: "Do new buildings in BC have a rent increase exemption?",
    a: "No. Unlike Ontario, BC does not exempt newer buildings from the annual rent increase cap. All residential tenancies covered by BC's Residential Tenancy Act are subject to the cap.",
  },
  {
    q: "What form must a BC landlord use to give notice of a rent increase?",
    a: "Landlords in BC must use the official RTB-7 form (Notice of Rent Increase). A general letter or verbal notice is not sufficient.",
  },
  {
    q: "How long does a BC rent increase dispute take?",
    a: "RTB dispute resolution timelines vary, but most hearings are scheduled within 6–8 weeks of filing. The arbitration itself is typically resolved in one session.",
  },
  {
    q: "Can my BC landlord raise rent above the limit for capital improvements?",
    a: "Yes, but only with prior RTB approval through an Additional Rent Increase (ARI) application. The landlord cannot charge the higher amount until the RTB has issued an order permitting it.",
  },
];

export default function BCRentIncrease2026Page() {
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
        headline="BC Rent Increase Limit 2026: Rules for BC Tenants"
        description="BC's 2026 rent increase cap is 2.3%, based on BC CPI only. Learn the notice requirements, how the Residential Tenancy Branch enforces limits, and what to do if your landlord charges more."
        url="https://leaseplain.com/blog/bc-rent-increase-2026"
        datePublished="2026-02-01"
        dateModified="2026-06-05"
        keywords={[
          "bc rent increase 2026",
          "british columbia rent cap 2026",
          "bc rent increase limit",
          "RTB rent increase",
          "bc tenant rights rent",
        ]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "BC Rent Increase 2026", href: "https://leaseplain.com/blog/bc-rent-increase-2026" },
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
            "@id": "https://leaseplain.com/blog/bc-rent-increase-2026",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", ".speakable-summary"],
            },
          }).replace(/</g, "<"),
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
                <span>BC Rent Increase Limit 2026</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  British Columbia
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  February 1, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                BC Rent Increase Limit 2026: Rules for BC Tenants
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                British Columbia caps rent increases at BC CPI each year — no additional buffer.
                The 2026 allowable increase is <strong>2.3%</strong>. Here is what that means,
                what notice your landlord must give, and what to do if the increase exceeds the
                allowed amount.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How BC Calculates the Rent Increase Cap</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Unlike Ontario&apos;s fixed guideline, British Columbia ties its annual rent increase
                    limit directly to the BC Consumer Price Index (CPI). Since 2019, the allowable
                    increase equals <strong>BC CPI only</strong> — a &quot;CPI + 2%&quot; buffer formula
                    was abolished in 2018 and no longer applies. The provincial government announces
                    the exact figure each year, typically in the fall for increases taking effect the
                    following year. For 2026, the cap is <strong>2.3%</strong>.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    The BC CPI-only formula ensures rents rise strictly in line with inflation, without
                    any additional buffer for landlords. All residential tenancies covered by the
                    Residential Tenancy Act (RTA) are subject to this cap — unlike Ontario, there is
                    no post-2018 exemption for newer buildings.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The 3-Month Notice Requirement</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    In BC, a landlord must give tenants a minimum of <strong>three full months</strong>{" "}
                    written notice before a rent increase takes effect. This notice must be provided
                    using the approved RTB-7 form (Notice of Rent Increase). A general letter or verbal
                    notice is not sufficient.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The notice period starts from the date the tenant receives the written notice. If
                    your rent is due on the first of the month and you receive a notice on February 28,
                    the earliest the increase can take effect is June 1 — because March, April, and May
                    are the three full months of notice.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    A rent increase can only happen once every 12 months. If your landlord has already
                    raised rent within the past year, they cannot give you another increase notice until
                    a full year has passed since the last increase.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How the RTB Enforces Rent Limits</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The Residential Tenancy Branch (RTB) is BC&apos;s rental housing tribunal. It does not
                    proactively audit every rent increase — enforcement is complaint-driven. If a tenant
                    believes their landlord has charged above the allowable limit, they can file a
                    dispute resolution application with the RTB.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The RTB will schedule an arbitration hearing where both parties can present their
                    case. If the arbitrator finds the increase was above the cap, they can order the
                    landlord to refund the overpaid amount and reduce rent to the lawful level.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Landlords who want to increase rent beyond the annual limit — due to significant
                    capital expenditures or extraordinary operating cost increases — must apply to the
                    RTB for permission. This is an additional rent increase (ARI) application, and it is
                    not automatically granted.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What to Do if Your Increase Is Over the Limit</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    If you receive a rent increase notice that appears to exceed the allowable
                    percentage, take these steps:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>
                      <strong>Calculate the allowed amount.</strong> Use the{" "}
                      <Link href="/tools/rent-increase-calculator" className="text-blue-600 hover:underline">
                        Rent Increase Calculator
                      </Link>{" "}
                      to confirm whether the proposed increase exceeds the limit for your current rent.
                    </li>
                    <li>
                      <strong>Write to your landlord.</strong> Send a dated letter or email stating that
                      the increase exceeds the allowable limit and that you will pay only the lawful
                      amount.
                    </li>
                    <li>
                      <strong>File with the RTB.</strong> If the landlord insists on the higher amount,
                      file a dispute resolution application. The RTB can be reached at 1-800-665-8779 or
                      through their online portal.
                    </li>
                    <li>
                      <strong>Keep paying your current rent</strong> while the dispute is ongoing —
                      withholding rent entirely can create additional legal problems.
                    </li>
                  </ol>
                  <p className="text-slate-700 leading-relaxed">
                    For more on your rights as a BC renter, see our full guide on{" "}
                    <Link href="/canada/british-columbia" className="text-blue-600 hover:underline">
                      renting in British Columbia
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
                    See whether the proposed increase is within BC&apos;s allowable limit for your
                    current rent amount.
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
                      { label: "Renting in British Columbia", href: "/canada/british-columbia" },
                      { label: "Ontario Rent Increase 2026", href: "/blog/ontario-rent-increase-guideline-2026" },
                      { label: "Security Deposit Rules by Province", href: "/blog/security-deposit-rules-canada" },
                      { label: "Tenant Rights in BC", href: "/tenant-rights/british-columbia" },
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
