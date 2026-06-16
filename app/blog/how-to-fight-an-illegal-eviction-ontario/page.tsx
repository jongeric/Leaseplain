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
  title: "How to Fight an Illegal Eviction in Ontario | LeasePlain",
  description:
    "Learn what makes an eviction notice invalid in Ontario, what N4/N12/N13 notices mean, how to file a T2 application at the LTB, and what bad-faith eviction means for tenants.",
  alternates: { canonical: "https://leaseplain.com/blog/how-to-fight-an-illegal-eviction-ontario" },
  openGraph: {
    title: "How to Fight an Illegal Eviction in Ontario | LeasePlain",
    description:
      "Learn what makes an Ontario eviction notice invalid, how to file a T2 at the LTB, and what bad-faith eviction means for tenants.",
    url: "https://leaseplain.com/blog/how-to-fight-an-illegal-eviction-ontario",
    type: "article",
    publishedTime: "2026-02-15T00:00:00Z",
    modifiedTime: "2026-02-15T00:00:00Z",
  },
  keywords: [
    "illegal eviction ontario",
    "fight eviction ontario",
    "T2 application LTB",
    "bad faith eviction ontario",
    "eviction notice invalid ontario",
    "N12 notice ontario",
  ],
};

const faqItems = [
  {
    q: "Can a landlord evict me without going to the LTB in Ontario?",
    a: "No. A landlord cannot legally force you out of your home without an LTB eviction order, even after giving notice. Only a Sheriff can physically enforce an LTB order. If a landlord changes locks or removes your belongings without an order, that is an illegal eviction and grounds for a T2 application.",
  },
  {
    q: "What happens if an eviction notice has errors on it?",
    a: "Errors can make a notice invalid, but it depends on the nature and severity of the error. Material errors (wrong termination date, wrong form, wrong reason) typically void the notice. Minor clerical errors may not. If in doubt, use the LTB's dispute resolution process to raise the issue formally.",
  },
  {
    q: "How long does the LTB eviction process take in Ontario?",
    a: "LTB timelines vary considerably. For non-payment of rent (N4 pathway), hearings can be scheduled within 1–3 months. More complex matters like N12 bad-faith disputes can take 6–12 months or more given current LTB backlogs.",
  },
  {
    q: "Do I have to move out after receiving an N12?",
    a: "No, you do not have to move out simply because you received an N12. The landlord must still apply to the LTB for an eviction order, and you can attend the hearing to contest the notice. You should only vacate if the LTB issues an order against you.",
  },
  {
    q: "Where can I get free help fighting an eviction in Ontario?",
    a: "Community Legal Clinics across Ontario provide free legal advice to lower-income tenants facing eviction. Tenant Duty Counsel is available at LTB hearings. You can also call the LTB directly at 1-888-332-3234 for process information.",
  },
];

export default function FightIllegalEvictionOntarioPage() {
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
        headline="How to Fight an Illegal Eviction in Ontario"
        description="Learn what makes an eviction notice invalid in Ontario, what N4/N12/N13 notices mean, how to file a T2 application at the LTB, and what bad-faith eviction means for tenants."
        url="https://leaseplain.com/blog/how-to-fight-an-illegal-eviction-ontario"
        datePublished="2026-02-15"
        dateModified="2026-06-05"
        keywords={[
          "illegal eviction ontario",
          "fight eviction ontario",
          "T2 application LTB",
          "bad faith eviction ontario",
          "eviction notice invalid ontario",
        ]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "How to Fight an Illegal Eviction", href: "https://leaseplain.com/blog/how-to-fight-an-illegal-eviction-ontario" },
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
            "@id": "https://leaseplain.com/blog/how-to-fight-an-illegal-eviction-ontario",
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
                <span>How to Fight an Illegal Eviction in Ontario</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Ontario
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  February 15, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  8 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                How to Fight an Illegal Eviction in Ontario
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Receiving an eviction notice is alarming — but not every notice is valid. Many
                notices contain errors that make them unenforceable, and tenants have strong
                legal protections at the Landlord and Tenant Board (LTB).
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What Makes an Eviction Notice Invalid in Ontario?</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    In Ontario, a landlord cannot simply hand you a letter saying you have to leave.
                    The Residential Tenancies Act (RTA) requires that eviction notices be served on the
                    correct LTB form, state a valid legal reason, give adequate notice, and include
                    specific information. A notice that is missing any of these elements may be void.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">Common reasons a notice can be invalid:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Wrong form:</strong> Each reason for eviction has a specific LTB form. Using the wrong form or a plain letter renders the notice invalid.</li>
                    <li><strong>Wrong notice period:</strong> Different notice types require different minimum notice periods. An N4 for non-payment requires 14 days; an N12 for personal use requires 60 days.</li>
                    <li><strong>Wrong reason:</strong> The stated reason must be a valid ground under the RTA. A landlord cannot evict you for complaining about repairs or demanding your rights.</li>
                    <li><strong>Incorrect information:</strong> The notice must correctly state the address, the tenant's name, the termination date, and the reason. Material errors can void the notice.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mt-3">
                    Use our{" "}
                    <Link href="/tools/eviction-notice-checker" className="text-blue-600 hover:underline">
                      Eviction Notice Checker
                    </Link>{" "}
                    to quickly identify problems with a notice you have received.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Common Eviction Forms Explained</h2>
                  <div className="space-y-4">
                    <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                      <h3 className="font-semibold text-slate-900 mb-1">N4 — Non-Payment of Rent</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        Issued when a tenant has not paid rent. Gives 14 days to pay the full outstanding
                        amount. If you pay within that window, the notice becomes void. Landlords must
                        apply to the LTB for an eviction order — they cannot remove you themselves.
                      </p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                      <h3 className="font-semibold text-slate-900 mb-1">N12 — Landlord or Family Member Wants Unit for Personal Use</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        Issued when the landlord, their spouse, parent, or child wants to move into the
                        unit. Requires at least 60 days notice and must terminate on the last day of a
                        rental period. The landlord must also pay one month&apos;s rent in compensation
                        (under RTA s.48.1, this is required regardless of how much notice is given)
                        and actually move in — or face bad-faith eviction penalties.
                      </p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                      <h3 className="font-semibold text-slate-900 mb-1">N13 — Demolition, Conversion, or Major Repairs</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        Used when the landlord plans to demolish the unit, convert it to a non-residential
                        use, or do extensive renovations requiring vacant possession. Typically requires
                        120 days notice. Tenants displaced under N13 generally have a right of first
                        refusal to reoccupy the unit at the same rent once work is complete.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How to File a T2 Application at the LTB</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The T2 application — formally, &quot;Application About Tenant Rights&quot; — is the tool
                    tenants use to address illegal eviction attempts, harassment, interference with
                    services, and other landlord misconduct. Filing a T2 does not automatically stop
                    an eviction, but it signals to the LTB that there is a tenant-side complaint to
                    be heard at the same time as any landlord eviction application.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">Steps to file a T2:</p>
                  <ol className="list-decimal list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>Download Form T2 from the LTB website (tribunalsontario.ca/ltb).</li>
                    <li>Complete the form with specific details of the landlord&apos;s conduct and the remedy you are seeking.</li>
                    <li>Pay the filing fee (currently $186 when filed online through the Tribunals Ontario Portal, or $201 by paper/in-person; fee waivers available for financial hardship).</li>
                    <li>File online through the Tribunals Ontario Portal or in person at an LTB service location.</li>
                    <li>Serve a copy of the application on your landlord according to the LTB&apos;s service rules.</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What Is a Bad-Faith Eviction?</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    A bad-faith eviction occurs when a landlord uses a technically valid-looking reason —
                    most commonly an N12 for personal use — but has no genuine intention to move in or
                    allow a family member to move in. The real goal is typically to clear the unit so
                    the landlord can re-rent it at a much higher price.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Ontario law takes bad-faith evictions seriously. If found guilty of a bad-faith
                    eviction, a landlord can face:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>An order to pay the former tenant up to 12 months of rent as a fine</li>
                    <li>An order to allow the tenant to reoccupy the unit at the original rent</li>
                    <li>An administrative penalty payable to the province</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    If you were evicted under an N12 and discover the landlord never moved in (or moved
                    in only briefly), you can file a T5 application within one year of the eviction.
                    For more detail on your overall rights as an Ontario tenant, see our{" "}
                    <Link href="/tenant-rights/ontario" className="text-blue-600 hover:underline">
                      Ontario tenant rights guide
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
                  <h3 className="font-bold text-lg mb-2">Check your eviction notice</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Enter the details of your notice to instantly see if it meets Ontario&apos;s
                    legal requirements.
                  </p>
                  <Link
                    href="/tools/eviction-notice-checker"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Eviction Notice Checker
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
                      { label: "Ontario Rent Increase 2026", href: "/blog/ontario-rent-increase-guideline-2026" },
                      { label: "Moving Out Ontario Checklist", href: "/blog/moving-out-ontario-checklist" },
                      { label: "Eviction Notices Guide", href: "/tenant-rights/eviction-notices" },
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
