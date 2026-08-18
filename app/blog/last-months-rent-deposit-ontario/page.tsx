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
  title: "Last Month's Rent Deposit in Ontario: Rules, Interest, and Getting It Back | LeasePlain",
  description:
    "In Ontario your landlord can only collect a last month's rent (LMR) deposit — not a damage or cleaning deposit. Learn what it can be used for, the interest you are owed each year, and how to get it back.",
  alternates: { canonical: "https://leaseplain.com/blog/last-months-rent-deposit-ontario" },
  openGraph: {
    title: "Last Month's Rent Deposit in Ontario: Rules, Interest, and Getting It Back | LeasePlain",
    description:
      "Your Ontario landlord can only hold a last month's rent deposit — not a damage deposit. Here is what it covers, the interest you are owed, and how to get it back.",
    url: "https://leaseplain.com/blog/last-months-rent-deposit-ontario",
    type: "article",
    publishedTime: "2026-08-03T00:00:00Z",
    modifiedTime: "2026-08-03T00:00:00Z",
  },
  keywords: [
    "last month's rent deposit ontario",
    "LMR deposit ontario",
    "rent deposit interest ontario",
    "damage deposit ontario illegal",
    "getting deposit back ontario",
  ],
};

const faqItems = [
  {
    q: "Can my landlord charge a damage deposit in Ontario?",
    a: "No. Ontario's Residential Tenancies Act only permits a rent deposit (last month's rent). Damage deposits, cleaning deposits, key deposits above actual cost, and pet deposits are not allowed. A landlord who collects one is holding money illegally, and you can apply to the Landlord and Tenant Board to recover it.",
  },
  {
    q: "How much interest is owed on a last month's rent deposit?",
    a: "Your landlord must pay interest on your rent deposit every 12 months at the annual rent increase guideline rate. For 2026 the guideline — and therefore the deposit interest rate — is 2.1%. The interest can be paid to you directly or applied to top up the deposit when your rent increases.",
  },
  {
    q: "Can my landlord use my last month's rent deposit for damage or cleaning?",
    a: "No. The deposit can only be applied to the rent for the final rental period of your tenancy. It cannot be used for damage, cleaning, unpaid utilities, or arrears that come up during the tenancy. If your landlord believes you caused damage, they must apply to the LTB separately.",
  },
  {
    q: "Do I get my last month's rent deposit back when I move out?",
    a: "Usually you do not receive it back as cash, because it is applied to your actual last month of rent. If you paid more into the deposit than your final month's rent (for example, unpaid interest, or the deposit exceeds one month), the landlord owes you the difference, and you can file a T1 application to recover it.",
  },
  {
    q: "Can my landlord ask me to top up my deposit when rent goes up?",
    a: "Yes. Because the deposit can equal up to one month's rent, a landlord may ask you to increase it after a lawful rent increase. In practice the annual interest owed on the deposit is often applied toward that top-up, so no additional payment is needed.",
  },
];

export default function LastMonthsRentDepositOntarioPage() {
  return (
    <>
      <ArticleSchema
        headline="Last Month's Rent Deposit in Ontario: Rules, Interest, and Getting It Back"
        description="In Ontario your landlord can only collect a last month's rent (LMR) deposit — not a damage or cleaning deposit. Learn what it can be used for, the interest you are owed each year, and how to get it back."
        url="https://leaseplain.com/blog/last-months-rent-deposit-ontario"
        datePublished="2026-08-03"
        dateModified="2026-08-03"
        keywords={[
          "last month's rent deposit ontario",
          "LMR deposit ontario",
          "rent deposit interest ontario",
          "damage deposit ontario illegal",
          "getting deposit back ontario",
        ]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Last Month's Rent Deposit in Ontario", href: "https://leaseplain.com/blog/last-months-rent-deposit-ontario" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/last-months-rent-deposit-ontario",
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
                <span>Last Month&apos;s Rent Deposit in Ontario</span>
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
                Last Month&apos;s Rent Deposit in Ontario: Rules, Interest, and Getting It Back
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                In Ontario, the only deposit your landlord can legally collect is a last month&apos;s
                rent (LMR) deposit — never a damage or cleaning deposit. Here is exactly what it can
                be used for, the interest you are owed every year, and how to recover money you are
                owed when you leave.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="August 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What Deposit Can a Landlord Actually Charge?</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Ontario&apos;s <em>Residential Tenancies Act</em> (RTA) is unusually protective on
                    this point. The only deposit a landlord may collect is a <strong>rent deposit</strong>,
                    commonly called last month&apos;s rent (LMR). It cannot be more than one month&apos;s
                    rent (or one rental period&apos;s rent, if you pay weekly), and it must be collected
                    at or before the start of the tenancy.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    That means the following are <strong>not</strong> allowed in Ontario:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li>Damage deposits or &quot;security&quot; deposits</li>
                    <li>Cleaning deposits</li>
                    <li>Pet deposits</li>
                    <li>Key or fob deposits above the landlord&apos;s actual replacement cost (a refundable key deposit at true cost is permitted)</li>
                    <li>Any deposit larger than one month&apos;s rent</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mt-3">
                    If a landlord asks for &quot;first, last, and a damage deposit,&quot; the damage
                    deposit portion is illegal. You are entitled to get it back, and you can apply to
                    the Landlord and Tenant Board (LTB) to recover it.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What the Deposit Can — and Can&apos;t — Be Used For</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The rent deposit can only ever be applied to the rent for the <strong>last rental
                    period</strong> of your tenancy. It is not a fund your landlord can dip into during
                    the tenancy. Specifically, your landlord cannot use it to cover:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>Damage to the unit (real or alleged)</li>
                    <li>Cleaning after you move out</li>
                    <li>Unpaid utility bills</li>
                    <li>Rent arrears that come up partway through the tenancy</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    If your landlord believes you owe money for damage, the correct process is to apply
                    to the LTB and prove it — not to quietly keep your deposit. For where the line
                    between chargeable damage and ordinary use falls, see our guide on{" "}
                    <Link href="/blog/normal-wear-and-tear-vs-damage-canada" className="text-blue-600 hover:underline">
                      normal wear and tear vs. damage
                    </Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Interest You Are Owed Every Year</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    This is the part most tenants never claim. Your landlord must pay you{" "}
                    <strong>interest on your rent deposit every 12 months</strong>, at the same rate as
                    that year&apos;s rent increase guideline. For <strong>2026, that rate is 2.1%</strong>.
                    So on a $2,000 deposit, roughly $42 in interest is owed for the year.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    The landlord can either pay the interest to you directly, or — because the deposit is
                    allowed to equal one month&apos;s rent — apply it toward topping up your deposit after
                    a lawful rent increase. What they cannot do is simply keep it. If years have gone by
                    with no interest paid, you can claim it, including for past years.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Get Your Money Back When You Leave</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Because the deposit is applied to your final month, most tenants don&apos;t receive a
                    cheque at move-out — the deposit simply covers that last month&apos;s rent. You are
                    owed money back in these situations:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li><strong>Unpaid interest:</strong> any deposit interest the landlord never paid.</li>
                    <li><strong>An over-collected deposit:</strong> if the deposit exceeds one month&apos;s current rent.</li>
                    <li><strong>An illegal deposit:</strong> any damage, cleaning, or pet deposit you were charged.</li>
                  </ol>
                  <p className="text-slate-700 leading-relaxed">
                    To recover it, ask your landlord in writing first. If they refuse, file a{" "}
                    <strong>T1 application</strong> (Tenant Application for a Rebate) with the LTB. There
                    are time limits — generally one year from when the money was collected or should have
                    been returned — so don&apos;t wait. The LTB information line is 1-888-332-3234.
                  </p>
                  <p className="text-slate-700 leading-relaxed mt-3">
                    For a cross-country comparison of deposit rules, see our{" "}
                    <Link href="/blog/security-deposit-rules-canada" className="text-blue-600 hover:underline">
                      security deposit rules by province
                    </Link>{" "}
                    guide.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Is your lease hiding an illegal deposit?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your lease and we&apos;ll flag clauses that don&apos;t hold up under
                    Ontario&apos;s Residential Tenancies Act — in plain English.
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
                      { label: "Security Deposit Rules by Province", href: "/blog/security-deposit-rules-canada" },
                      { label: "Normal Wear and Tear vs. Damage", href: "/blog/normal-wear-and-tear-vs-damage-canada" },
                      { label: "Moving Out in Ontario: Deposit Checklist", href: "/blog/moving-out-ontario-checklist" },
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
