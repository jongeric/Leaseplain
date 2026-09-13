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
  title: "Can a Landlord Ask for a Deposit in Quebec? (No) | LeasePlain",
  description:
    "In Quebec, security deposits are illegal. A landlord cannot demand a damage deposit, last month's rent, a pet deposit, or post-dated cheques — only the first month's rent in advance. Your rights under article 1904 of the Civil Code.",
  alternates: { canonical: "https://leaseplain.com/blog/quebec-security-deposit-rules" },
  openGraph: {
    title: "Can a Landlord Ask for a Deposit in Quebec? (No) | LeasePlain",
    description:
      "Quebec bans security deposits. What a landlord can and can't ask for, and how to get an illegal deposit back.",
    url: "https://leaseplain.com/blog/quebec-security-deposit-rules",
    type: "article",
    publishedTime: "2026-09-11T00:00:00Z",
    modifiedTime: "2026-09-11T00:00:00Z",
  },
  keywords: ["quebec security deposit", "deposit illegal quebec", "damage deposit quebec", "last month rent quebec", "can landlord ask deposit quebec"],
};

const faqItems = [
  {
    q: "Can a landlord ask for a security deposit in Quebec?",
    a: "No. Article 1904 of the Civil Code of Québec prohibits any deposit or advance beyond the first month's rent — no damage deposit, last month's rent, pet deposit, or key deposit. A landlord can only ask for the first month's rent.",
  },
  {
    q: "Can my Quebec landlord require post-dated cheques?",
    a: "No. A landlord can accept post-dated cheques if you choose to offer them, but cannot require them or any other specific payment method as a condition of the lease.",
  },
  {
    q: "I paid a deposit in Quebec — can I get it back?",
    a: "Yes. Demanding a deposit is illegal, so you can ask the landlord to return it and, if they refuse, apply to the Tribunal administratif du logement (TAL) for an order. The landlord may also face penalties.",
  },
  {
    q: "How are damages handled in Quebec without a deposit?",
    a: "The landlord must prove any damage beyond normal wear and tear and claim compensation through the TAL — they can't withhold a deposit because there isn't one. Photos at move-in and move-out are your best protection.",
  },
];

export default function QuebecSecurityDepositRulesPage() {
  return (
    <>
      <ArticleSchema
        headline={"Security Deposits in Quebec: Why Your Landlord Can't Ask for One"}
        description={"In Quebec, security deposits are illegal. A landlord cannot demand a damage deposit, last month's rent, a pet deposit, or post-dated cheques — only the first month's rent in advance. Your rights under article 1904 of the Civil Code."}
        url="https://leaseplain.com/blog/quebec-security-deposit-rules"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        keywords={["quebec security deposit", "deposit illegal quebec", "damage deposit quebec"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Quebec Security Deposits", href: "https://leaseplain.com/blog/quebec-security-deposit-rules" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/quebec-security-deposit-rules",
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
                <span>Quebec Security Deposits</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Quebec
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  September 11, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  5 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Can a Landlord Ask for a Deposit in Quebec?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Coming from another province? Here&apos;s a pleasant surprise: in Quebec, your landlord can&apos;t ask you for a security deposit at all. Not for damage, not for the last month, not for keys. Here&apos;s the rule and what it means for you.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Deposits Are Illegal in Quebec</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">Under <strong>article 1904 of the Civil Code of Québec</strong>, a landlord <strong>cannot require any deposit</strong> or advance payment beyond the <strong>first month&apos;s rent</strong>. That means no damage deposit, no last month&apos;s rent, no pet deposit, no key deposit, and no requirement to hand over post-dated cheques for the year.</p>
                  <p className="text-slate-700 leading-relaxed">The most a landlord can ask before you move in is the <strong>first month&apos;s rent</strong> — and only once the lease has started, not as a condition of applying.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What About Post-Dated Cheques?</h2>
                  <p className="text-slate-700 leading-relaxed">A landlord can <strong>accept</strong> post-dated cheques or pre-authorized payments if you offer them, but they <strong>cannot require</strong> them. Paying by the method you choose is your right.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If You Already Paid a Deposit</h2>
                  <p className="text-slate-700 leading-relaxed">If a landlord demanded and you paid a deposit, you can ask for it back — and if they refuse, apply to the <strong>Tribunal administratif du logement (TAL)</strong> for an order to return it. Landlords who demand illegal deposits can also face penalties.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Why This Matters</h2>
                  <p className="text-slate-700 leading-relaxed">Because there&apos;s no deposit, disputes about damage in Quebec are handled differently: the landlord must prove any damage you&apos;re responsible for and claim it through the TAL, rather than simply withholding money they&apos;re already holding. Document the unit&apos;s condition at move-in and move-out to protect yourself.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Check your Quebec lease</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Paste your lease and get a plain-English breakdown of every clause, free.
                  </p>
                  <Link href="/tools/clause-checker" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Free Clause Checker
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Quebec Rent Increase Rules", href: "/blog/quebec-rent-increase-rules" },
                      { label: "Ending Your Lease in Quebec", href: "/blog/quebec-ending-your-lease" },
                      { label: "Security Deposit Rules Across Canada", href: "/blog/security-deposit-rules-canada" },
                      { label: "Quebec Tenant Rights", href: "/canada/quebec" },
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
