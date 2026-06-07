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
  title: "Can a Landlord Enter Without Notice in Canada? Your Right to Privacy | LeasePlain",
  description:
    "Every province requires 24 hours written notice before a landlord can enter your rental unit. Learn your rights in Ontario, BC, Alberta, Quebec, and more — and what to do if your landlord enters illegally.",
  alternates: { canonical: "https://leaseplain.com/blog/landlord-entry-notice-canada" },
  openGraph: {
    title: "Can a Landlord Enter Without Notice in Canada? Your Right to Privacy | LeasePlain",
    description:
      "Every province requires 24 hours written notice before a landlord can enter your rental unit. Learn your rights in Ontario, BC, Alberta, Quebec, and more — and what to do if your landlord enters illegally.",
    url: "https://leaseplain.com/blog/landlord-entry-notice-canada",
    type: "article",
    publishedTime: "2026-06-05T00:00:00Z",
    modifiedTime: "2026-06-05T00:00:00Z",
  },
  keywords: [
    "landlord entry without notice Canada",
    "24 hours notice landlord Ontario",
    "tenant right to privacy Canada",
    "landlord entry rules BC",
    "illegal landlord entry Canada",
    "quiet enjoyment tenant rights",
    "Ontario RTA section 27",
  ],
};

const faqItems = [
  {
    q: "Can my landlord enter while I'm not home?",
    a: "Yes, with valid notice — landlords do not need the tenant to be present. However, they must still comply with the notice requirement and enter only during permitted hours. Keep a log of all entries, especially if you suspect unauthorized access.",
  },
  {
    q: "Can I refuse my landlord entry in Ontario?",
    a: "You can refuse entry if proper notice was not given. However, if the landlord has provided valid written notice under RTA s.27, you cannot unreasonably refuse. If the landlord has given notice for repairs and you refuse multiple times, they can apply to the LTB for a right-to-enter order under s.26 of the RTA.",
  },
  {
    q: "What is an emergency that lets a landlord enter without notice?",
    a: "Genuine emergencies include fire, flooding, a burst pipe, gas leaks, or a reasonable belief that someone inside needs urgent help. A routine repair that was not scheduled cannot be called an emergency. If a landlord frequently claims \"emergency\" to avoid giving proper notice, that pattern can constitute harassment under Ontario RTA s.22.",
  },
  {
    q: "Does 24 hours notice mean a full 24 hours, or just the day before?",
    a: "It means a full 24 hours. If a landlord slides a notice under your door at 3 PM on Monday, the earliest they can legally enter is 3 PM on Tuesday — and only during permitted hours. They cannot enter at 8 AM Tuesday, even though that is technically the next day.",
  },
  {
    q: "Can I change the locks to prevent my landlord from entering?",
    a: "In most provinces, tenants cannot change locks without landlord consent, or must provide the landlord with a copy of the new key. In Ontario, RTA s.24 specifically prohibits a tenant from withholding a key from the landlord. If you have genuine safety concerns about unauthorized entry, apply to the LTB rather than changing locks unilaterally.",
  },
];

export default function LandlordEntryNoticeCanadaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Can a Landlord Enter Without Notice in Canada? Your Right to Privacy",
    url: "https://leaseplain.com/blog/landlord-entry-notice-canada",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".speakable-summary"],
    },
  };

  return (
    <>
      <ArticleSchema
        headline="Can a Landlord Enter Without Notice in Canada? Your Right to Privacy"
        description="Every province requires 24 hours written notice before a landlord can enter your rental unit. Learn your rights in Ontario, BC, Alberta, Quebec, and more — and what to do if your landlord enters illegally."
        url="https://leaseplain.com/blog/landlord-entry-notice-canada"
        datePublished="2026-06-05"
        dateModified="2026-06-05"
        keywords={[
          "landlord entry without notice Canada",
          "24 hours notice landlord Ontario",
          "tenant right to privacy Canada",
          "landlord entry rules BC",
          "illegal landlord entry Canada",
          "quiet enjoyment tenant rights",
          "Ontario RTA section 27",
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://leaseplain.com" },
          { name: "Blog", href: "https://leaseplain.com/blog" },
          {
            name: "Can a Landlord Enter Without Notice in Canada?",
            href: "https://leaseplain.com/blog/landlord-entry-notice-canada",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "<") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema).replace(/</g, "<") }}
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
                <span>Landlord Entry Notice Canada</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-200">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Canada
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  June 5, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  7 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Can a Landlord Enter Without Notice in Canada? Your Right to Privacy
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                In every Canadian province, a landlord must give you at least 24 hours written notice
                before entering your rental unit — and entry is only permitted during specific hours.
                Surprise visits are illegal except in genuine emergencies. Here is what the law says
                in Ontario, BC, Alberta, Quebec, and beyond, and exactly what you can do if your
                landlord ignores these rules.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The General Rule Across Canada</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Your rental unit is your home, and Canadian tenancy law treats it that way. Even
                    though your landlord owns the property, they give up the right to walk in
                    unannounced the moment a tenancy agreement begins. This is part of the legal concept
                    of <strong>quiet enjoyment</strong> — your right to use your unit peacefully and
                    without interference.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Every province and territory has codified this into statute. The core rule is
                    consistent: <strong>24 hours written notice</strong> before entry, with entry
                    permitted only during daytime hours. The notice must state the reason for the visit
                    and the date and time of entry. Vague notices like &ldquo;inspection sometime next week&rdquo;
                    do not meet the legal standard.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    A tenant can agree to a shorter notice period — for example, letting a landlord
                    in the same day for a quick repair. But that agreement must be voluntary. A landlord
                    cannot pressure or bully a tenant into accepting less notice, and any such pressure
                    can itself become a harassment complaint.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Province-by-Province Rules</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    While the 24-hour rule is universal, the specific hours of permitted entry, the
                    form notice must take, and the remedies available to tenants differ by province.
                    The table below summarizes the key rules.
                  </p>
                  <div className="rounded-xl border border-slate-200 overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 text-slate-600 text-xs font-semibold uppercase tracking-wide">
                        <tr>
                          <th className="text-left px-4 py-3">Province</th>
                          <th className="text-left px-4 py-3">Notice Required</th>
                          <th className="text-left px-4 py-3">Hours Permitted</th>
                          <th className="text-left px-4 py-3">Emergency Exception</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          {
                            province: "Ontario",
                            notice: "24 hours written (RTA s.27). Must state reason, date, and time.",
                            hours: "8 AM – 8 PM",
                            emergency: "Yes — immediate entry permitted; landlord must document.",
                          },
                          {
                            province: "British Columbia",
                            notice: "24 hours written (Residential Tenancy Act s.29).",
                            hours: "8 AM – 9 PM",
                            emergency: "Yes — immediate entry permitted; tenant can apply to RTB if notice is routinely bypassed.",
                          },
                          {
                            province: "Alberta",
                            notice: "24 hours written (RTAA s.23).",
                            hours: "Daytime only; after-hours prohibited without emergency.",
                            emergency: "Yes — immediate entry permitted for genuine emergencies.",
                          },
                          {
                            province: "Quebec",
                            notice: "24 hours (Civil Code art.1931). Art.1932 prohibits harassment through excessive entry.",
                            hours: "Reasonable hours (no fixed statutory window).",
                            emergency: "Yes — immediate entry permitted for emergency repairs.",
                          },
                          {
                            province: "Manitoba",
                            notice: "24 hours written (Residential Tenancies Act s.33).",
                            hours: "Reasonable hours.",
                            emergency: "Yes — immediate entry permitted.",
                          },
                          {
                            province: "Saskatchewan",
                            notice: "24 hours written generally (STHA s.47).",
                            hours: "Reasonable hours.",
                            emergency: "Yes — immediate entry permitted.",
                          },
                        ].map((row) => (
                          <tr key={row.province} className="hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 font-medium text-slate-900">{row.province}</td>
                            <td className="px-4 py-3 text-slate-700">{row.notice}</td>
                            <td className="px-4 py-3 text-slate-700">{row.hours}</td>
                            <td className="px-4 py-3 text-slate-700">{row.emergency}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Ontario in Detail: RTA Sections 26 and 27</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Ontario&apos;s Residential Tenancies Act provides some of the most detailed entry rules
                    in the country. Under <strong>s.27</strong>, a landlord may enter a rental unit only
                    after giving 24 hours written notice. The notice must specify:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-4">
                    <li>The <strong>reason</strong> for entering (e.g., to make repairs, show the unit to prospective tenants, conduct an inspection).</li>
                    <li>The <strong>date</strong> of the intended entry.</li>
                    <li>The <strong>time</strong> of entry, which must fall between 8 AM and 8 PM.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    A valid notice can be delivered as a paper slip under the door, by email if the
                    parties have previously agreed to electronic communication, or posted on the door.
                    Verbal notice — a phone call or text — does <strong>not</strong> meet the written
                    notice requirement.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Under <strong>s.26</strong>, if a tenant unreasonably refuses access for repairs
                    after valid notice has been given, the landlord can apply to the Landlord and Tenant
                    Board for a right-to-enter order. This cuts both ways: the law protects tenants from
                    unannounced entry, but it also prevents tenants from blocking necessary maintenance
                    indefinitely.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Repeated unannounced entry — or a pattern of entries designed to harass — falls
                    under <strong>s.22</strong> of the RTA, which prohibits a landlord from
                    substantially interfering with a tenant&apos;s reasonable enjoyment of the unit. This
                    can ground a <strong>T2 application</strong> (Tenant Application about Landlord
                    Rights) at the LTB.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Emergencies: When 24 Hours Does Not Apply</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Every province recognizes that genuine emergencies require immediate action. A
                    landlord — or emergency services working with the landlord — may enter without
                    notice when there is a real, urgent threat such as:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-4">
                    <li>A fire or risk of fire.</li>
                    <li>Flooding or a burst pipe causing immediate water damage.</li>
                    <li>A gas leak or carbon monoxide alert.</li>
                    <li>A reasonable belief that someone inside the unit needs urgent medical help or is in danger.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    What does <strong>not</strong> qualify as an emergency: a routine repair that is
                    important but not urgent, a landlord who &ldquo;forgot&rdquo; to give notice, or a
                    scheduled inspection that was overlooked. If a landlord regularly invokes
                    &ldquo;emergency&rdquo; as a reason to skip the notice requirement, that pattern is
                    a red flag for harassment — not a series of coincidences.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Even in a genuine emergency, best practice is for the landlord to document the
                    incident: note the date, time, reason, and what was done. This protects both
                    parties if the nature of the entry is ever disputed.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What to Do If Your Landlord Enters Illegally</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    If your landlord enters without proper notice — and it is not a genuine emergency —
                    you have formal remedies available. The right body to contact depends on your
                    province.
                  </p>
                  <div className="space-y-4">
                    <div className="rounded-xl border border-slate-200 p-4">
                      <h3 className="font-semibold text-slate-900 mb-2">Ontario — T2 Application at the LTB</h3>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        File a <strong>T2 application</strong> (Tenant Application about Landlord
                        Rights) with the Landlord and Tenant Board. A T2 covers interference with
                        reasonable enjoyment under RTA s.22. Keep a written log of every unauthorized
                        entry: date, time, what the landlord said, what they did, and any witnesses.
                        Photos of your unit before and after can also be evidence. The LTB can order
                        rent abatement and prohibit future illegal entry.
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 p-4">
                      <h3 className="font-semibold text-slate-900 mb-2">British Columbia — RTB Application</h3>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        Under BC&apos;s Residential Tenancy Act s.29, if your landlord fails to give
                        proper notice, you can apply to the <strong>Residential Tenancy Branch</strong>{" "}
                        (RTB). The RTB can issue a monetary order and a compliance order requiring the
                        landlord to follow the notice rules going forward.
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 p-4">
                      <h3 className="font-semibold text-slate-900 mb-2">Alberta — RTDRS Claim</h3>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        In Alberta, tenants can file a claim with the{" "}
                        <strong>Residential Tenancy Dispute Resolution Service</strong> (RTDRS) for
                        landlord violations of the Residential Tenancies Act, including unauthorized
                        entry. RTDRS hearings are faster than court and decisions are binding.
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed mt-4">
                    Regardless of province, the most important thing you can do right now is{" "}
                    <strong>start a written record</strong>. A single unauthorized entry may be
                    difficult to prove; a documented pattern of five or ten incidents is compelling
                    evidence in any tribunal.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>

              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Check Your Lease for Illegal Entry Clauses</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Some leases include clauses that try to reduce or waive your notice rights. Upload
                    your lease and LeasePlain will flag any clause that conflicts with provincial law.
                  </p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Analyze My Lease
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Tenant Rights Lookup", href: "/tools/tenant-rights-lookup" },
                      { label: "Is My Landlord Allowed to Do This?", href: "/tools/landlord-quiz" },
                      { label: "Tenant Rights Ontario", href: "/tenant-rights/ontario" },
                      { label: "Quiet Enjoyment — Glossary", href: "/glossary/quiet-enjoyment" },
                      { label: "BC Tenant Rights", href: "/tenant-rights/british-columbia" },
                    ].map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                        >
                          <ChevronRight className="w-3 h-3" aria-hidden="true" />
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                  <h3 className="font-semibold text-amber-900 mb-2 text-sm">Legal Information Notice</h3>
                  <p className="text-amber-800 text-xs leading-relaxed">
                    This guide is for informational purposes only and does not constitute legal advice.
                    Tenancy laws vary by province and are subject to change. If your landlord is
                    repeatedly entering without notice, consider contacting a tenant duty counsel or
                    licensed paralegal in your province.
                  </p>
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
