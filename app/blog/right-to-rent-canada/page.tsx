import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import ReviewedByline from "@/components/ReviewedByline";
import TableOfContents from "@/components/TableOfContents";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Your Right to Rent in Canada: When Can a Landlord Refuse You? | LeasePlain",
  description:
    "Canadian landlords cannot refuse you housing based on race, citizenship, family status, disability, or receiving public assistance. Here is exactly what is illegal in tenant screening — and what to do if you are turned away.",
  alternates: { canonical: "https://leaseplain.com/blog/right-to-rent-canada" },
  openGraph: {
    title: "Your Right to Rent in Canada: When Can a Landlord Refuse You? | LeasePlain",
    description:
      "Canadian landlords cannot refuse you housing based on race, citizenship, family status, disability, or receiving public assistance. Here is what is illegal in tenant screening.",
    url: "https://leaseplain.com/blog/right-to-rent-canada",
    type: "article",
    publishedTime: "2026-07-14T00:00:00Z",
    modifiedTime: "2026-07-14T00:00:00Z",
  },
  keywords: [
    "right to rent Canada",
    "can a landlord refuse to rent to me",
    "housing discrimination Canada",
    "rental application rejected discrimination",
    "Ontario Human Rights Code housing",
  ],
};

const faqItems = [
  {
    q: "Can a landlord in Canada refuse to rent to me because I'm on social assistance?",
    a: "No. Receipt of public assistance is a protected ground under Ontario's Human Rights Code, and similar protections exist in every other province's human rights legislation. This covers Ontario Works, ODSP, OSAP, Employment Insurance, and Old Age Security. A landlord who refuses your application because your income comes from social assistance is engaging in illegal discrimination, and you can file a human rights complaint.",
  },
  {
    q: "Can a landlord refuse to rent to families with children in Canada?",
    a: "No. Family status is a protected ground in every Canadian province. \"Adult only\" buildings and refusals based on having children are illegal in ordinary rental housing. A narrow exception exists for buildings that legitimately qualify as seniors' housing under provincial rules.",
  },
  {
    q: "Can a landlord require a Canadian credit history to rent to me?",
    a: "Landlords can run credit checks with your consent, but Ontario human rights tribunals have found that rejecting applicants simply for having little or no credit history can amount to discrimination — because newcomers, young people, and women returning to the workforce disproportionately lack Canadian credit history. A landlord should assess other evidence you offer, such as employment letters, bank statements, or a guarantor.",
  },
  {
    q: "Is it legal for a landlord to have a minimum income requirement?",
    a: "In Ontario, applying a fixed rent-to-income ratio (like \"rent must be under 30% of your income\") has been found to be illegal by human rights tribunals. Under Ontario Regulation 290/98, a landlord may consider income information only together with credit references, rental history, and credit checks — not as a stand-alone cutoff.",
  },
  {
    q: "Do I have to give a landlord my Social Insurance Number?",
    a: "No. A landlord may ask for your SIN, but you are not required to provide it, and a landlord cannot refuse your application because you decline. A credit check can be run using your name, date of birth, and address. The Office of the Privacy Commissioner of Canada recommends never giving your SIN to private organizations unless legally required.",
  },
  {
    q: "What can I do if I believe a landlord discriminated against me?",
    a: "Document everything: the listing, your communications, and the stated reason for refusal. In Ontario, file an application with the Human Rights Tribunal of Ontario (HRTO) — generally within one year of the incident. Every other province has an equivalent human rights tribunal or commission. Remedies can include monetary compensation and orders requiring the landlord to change their practices.",
  },
];

const protectedGrounds = [
  "Race, colour, ancestry, ethnic origin, and place of origin",
  "Citizenship and immigration status",
  "Religion or creed",
  "Sex, sexual orientation, gender identity and gender expression",
  "Age (including being a young adult renting for the first time)",
  "Marital status and family status (including having children)",
  "Disability, including mental health disabilities and addictions",
  "Receipt of public assistance (Ontario Works, ODSP, OSAP, EI, OAS)",
];

export default function RightToRentCanadaPage() {
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
        headline="Your Right to Rent in Canada: When Can a Landlord Refuse You?"
        description="Canadian landlords cannot refuse you housing based on race, citizenship, family status, disability, or receiving public assistance. Here is exactly what is illegal in tenant screening — and what to do if you are turned away."
        url="https://leaseplain.com/blog/right-to-rent-canada"
        datePublished="2026-07-14"
        dateModified="2026-07-14"
        keywords={[
          "right to rent Canada",
          "can a landlord refuse to rent to me",
          "housing discrimination Canada",
          "rental application rejected discrimination",
          "Ontario Human Rights Code housing",
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://leaseplain.com" },
          { name: "Blog", href: "https://leaseplain.com/blog" },
          { name: "Your Right to Rent in Canada", href: "https://leaseplain.com/blog/right-to-rent-canada" },
        ]}
      />
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
            "@id": "https://leaseplain.com/blog/right-to-rent-canada",
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
                <span>Your Right to Rent in Canada</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-200">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Canada
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  July 14, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  8 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Your Right to Rent in Canada: When Can a Landlord Refuse You?
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                In Canada, landlords can choose their tenants — but not on any basis they like.
                Every province&apos;s human rights legislation prohibits refusing housing based on
                race, citizenship, family status, disability, receipt of public assistance, and
                other protected grounds. This guide explains exactly where the legal line sits in
                tenant screening, and what to do if you believe you were refused illegally.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <ReviewedByline updated="August 2026" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    What &ldquo;Right to Rent&rdquo; Means in Canada
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Canada does not have a formal &ldquo;right to rent&rdquo; scheme like the United
                    Kingdom&apos;s — Canadian landlords are not immigration officers and are not
                    required (or entitled) to verify your immigration status before renting to you.
                    What Canada has instead is a web of <strong>human rights protections</strong>{" "}
                    that limit the reasons a landlord can lawfully refuse a rental application.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    A landlord may lawfully select tenants using legitimate business criteria: your
                    ability to pay rent (assessed properly — see below), your rental history, your
                    references, and a credit check done with your consent. What they may{" "}
                    <strong>not</strong> do is refuse you — or apply tougher requirements to you —
                    because of a characteristic protected by human rights law.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    In Ontario, these protections come from the <em>Human Rights Code</em>. Every
                    other province and territory has equivalent human rights legislation covering
                    rental housing, with substantially similar protected grounds.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    The Protected Grounds: What a Landlord Can Never Use Against You
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Under Ontario&apos;s Human Rights Code — and with close equivalents across
                    Canada — a landlord cannot refuse you housing, or treat you differently in the
                    application process, based on:
                  </p>
                  <ul className="space-y-2 mb-4">
                    {protectedGrounds.map((g) => (
                      <li key={g} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {g}
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    Discrimination does not need to be explicit to be illegal. A landlord who says
                    &ldquo;the unit is taken&rdquo; to callers with accents but shows it to others,
                    or who imposes extra requirements — larger deposits, co-signers, direct payment
                    arrangements — only on applicants receiving social assistance, is discriminating
                    even without ever stating a prohibited reason.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    What Landlords CAN Legally Screen For
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Ontario is unusual in having a regulation that spells out permissible screening
                    practices: <strong>Ontario Regulation 290/98</strong> under the Human Rights
                    Code. It permits landlords to request and consider:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-slate-700 leading-relaxed mb-4">
                    <li><strong>Credit references</strong> and <strong>rental history</strong> from past landlords</li>
                    <li><strong>Credit checks</strong>, with your authorization</li>
                    <li>
                      <strong>Income information</strong> — but only <em>together with</em> credit
                      references, rental history, and credit checks, never as a stand-alone filter
                    </li>
                    <li><strong>A guarantor</strong>, where the landlord's requirements are otherwise not met</li>
                  </ol>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-amber-900 text-sm mb-1">
                          Rent-to-income ratios are illegal in Ontario
                        </p>
                        <p className="text-amber-800 text-sm leading-relaxed">
                          The common industry practice of requiring that rent be no more than 30%
                          of your income has been found to be illegal by Ontario human rights
                          tribunals. Income can inform the overall assessment, but a fixed
                          percentage cutoff cannot be the reason you are refused.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Common Illegal Screening Practices to Watch For
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        practice: "\"Adult only\" or \"no children\" listings",
                        why: "Family status is protected. Outside of legitimate seniors' housing, refusing families with children is illegal across Canada.",
                      },
                      {
                        practice: "\"No students\" or \"professionals only\" listings",
                        why: "These can constitute discrimination based on age and receipt of public assistance (OSAP counts), depending on how they are applied.",
                      },
                      {
                        practice: "Requiring proof of citizenship or permanent residency",
                        why: "Citizenship is a protected ground. A landlord cannot demand immigration documents as a condition of renting.",
                      },
                      {
                        practice: "Demanding your SIN as a condition of applying",
                        why: "You are never required to provide your SIN, and refusing your application because you declined is not permitted. Credit checks work with name, date of birth, and address.",
                      },
                      {
                        practice: "Extra-large deposits from certain applicants",
                        why: "Charging more deposit than provincial law allows is illegal for everyone — and selectively imposing tougher terms on protected groups is discrimination on top of it.",
                      },
                      {
                        practice: "Rejecting applicants for having no Canadian credit history",
                        why: "Tribunals have found this has a discriminatory impact on newcomers and other protected groups. Lack of history is not the same as bad history.",
                      },
                    ].map(({ practice, why }) => (
                      <div key={practice} className="border border-slate-100 rounded-xl p-4">
                        <p className="font-semibold text-slate-900 text-sm mb-1">{practice}</p>
                        <p className="text-slate-700 text-sm leading-relaxed">{why}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    What to Do If You Were Refused Illegally
                  </h2>
                  <ol className="list-decimal list-inside space-y-3 text-slate-700 leading-relaxed">
                    <li>
                      <strong>Preserve the evidence.</strong> Screenshot the listing, save all
                      messages and emails, and write down what was said in any calls or viewings
                      while it is fresh — including dates and names.
                    </li>
                    <li>
                      <strong>Ask for the reason in writing.</strong> A landlord&apos;s stated
                      reason (or refusal to give one) is evidence. Polite written questions often
                      produce revealing answers.
                    </li>
                    <li>
                      <strong>File a human rights complaint.</strong> In Ontario, apply to the
                      Human Rights Tribunal of Ontario — generally within one year. Other provinces
                      have equivalent tribunals and commissions. Legal support is often available
                      free through provincial human rights legal support services.
                    </li>
                    <li>
                      <strong>Keep applying elsewhere.</strong> Filing a complaint does not require
                      you to wait — document, file, and continue your housing search in parallel.
                    </li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} includeSchema={false} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Got the lease? Check it before signing</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Illegal terms don&apos;t stop at the application stage. Upload your lease and
                    LeasePlain will flag deposit overcharges, illegal clauses, and terms that
                    conflict with your provincial rights.
                  </p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Review My Lease
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Renting Without Canadian Credit History", href: "/blog/renting-without-credit-history-canada" },
                      { label: "Right to Rent: UK vs Canada Explained", href: "/blog/right-to-rent-uk-vs-canada" },
                      { label: "Security Deposit Rules by Province", href: "/blog/security-deposit-rules-canada" },
                      { label: "7 Lease Red Flags to Watch For", href: "/blog/lease-red-flags-to-watch-for" },
                      { label: "First Apartment Checklist", href: "/blog/first-apartment-checklist-canada" },
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
