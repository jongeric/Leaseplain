import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Tag, Calendar, Clock, CheckCircle } from "lucide-react";
import ReviewedByline from "@/components/ReviewedByline";
import TableOfContents from "@/components/TableOfContents";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Moving Out in Ontario: Tenant Checklist for Getting Your Deposit Back | LeasePlain",
  description:
    "Moving out in Ontario requires 60 days proper notice, unit documentation, and knowing the LMR deposit rules. Follow this checklist to protect yourself and get your money back.",
  alternates: { canonical: "https://leaseplain.com/blog/moving-out-ontario-checklist" },
  openGraph: {
    title: "Moving Out in Ontario: Tenant Checklist for Getting Your Deposit Back | LeasePlain",
    description:
      "Serve notice correctly, document the unit, and know your rights around last month's rent. A step-by-step Ontario move-out checklist.",
    url: "https://leaseplain.com/blog/moving-out-ontario-checklist",
    type: "article",
    publishedTime: "2026-04-01T00:00:00Z",
    modifiedTime: "2026-04-01T00:00:00Z",
  },
  keywords: [
    "moving out Ontario tenant checklist",
    "Ontario tenant notice to vacate",
    "last month rent deposit Ontario",
    "getting deposit back Ontario",
    "N9 form Ontario",
  ],
};

const checklistItems = [
  {
    step: 1,
    category: "60+ Days Before Move-Out",
    items: [
      "Determine your correct notice date — your notice must end on the last day of a rental period (usually the last day of the month).",
      "Complete LTB Form N9 (Tenant's Notice to Terminate Tenancy) — do not just send a text or informal letter.",
      "Deliver N9 to your landlord in writing — in person, by registered mail, or by courier. Keep proof of delivery.",
      "Confirm that your notice period is at least 60 days before the last day of your tenancy.",
    ],
  },
  {
    step: 2,
    category: "2–4 Weeks Before Move-Out",
    items: [
      "Schedule a move-out inspection with your landlord (they are required to offer one in Ontario).",
      "Photograph every room, appliance, and surface — including walls, floors, fixtures, and windows. Date-stamp the photos.",
      "Repair any damage you caused beyond normal wear and tear before the inspection.",
      "Clean the unit thoroughly. Focus on oven, fridge, bathroom, and any high-use areas.",
      "Cancel utilities, internet, and mail forwarding effective on your move-out date.",
    ],
  },
  {
    step: 3,
    category: "Move-Out Day",
    items: [
      "Return all keys, fobs, garage openers, and parking passes to the landlord.",
      "Conduct the move-out inspection together with the landlord if possible. Get a written sign-off.",
      "Take a final walkthrough with video — this is your strongest defence if a deposit dispute arises later.",
      "Get your landlord's contact address in writing for any future correspondence about your deposit.",
    ],
  },
  {
    step: 4,
    category: "After Move-Out",
    items: [
      "Your last month's rent (LMR) deposit is automatically applied to your final month — you do not pay rent for that month.",
      "The landlord must return LMR interest within a reasonable time (the LMR deposit earns interest at the rent increase guideline rate each year).",
      "If the landlord claims deductions from your deposit for anything other than rent arrears, dispute it — Ontario has no damage deposit, so this is illegal.",
      "If the landlord refuses to apply your LMR or claims illegal deductions, file a T1 application with the LTB.",
    ],
  },
];

const faqItems = [
  {
    q: "How much notice do I need to give to move out in Ontario?",
    a: "At least 60 days written notice using LTB Form N9, expiring on the last day of a rental period (usually the last day of the month).",
  },
  {
    q: "Can my landlord keep my last month's rent deposit for cleaning or damage?",
    a: "No. In Ontario, the last month's rent deposit can only be applied to rent — not cleaning, damage, or any other expense. If a landlord deducts for these reasons, you can file a T1 application with the LTB.",
  },
  {
    q: "Do I have to pay rent for my last month if I paid a deposit?",
    a: "No. Your last month's rent deposit is applied to your final month. You should not pay rent for that month — your deposit covers it.",
  },
  {
    q: "What is Form N9 in Ontario?",
    a: "Form N9 is the official LTB form a tenant must use to give notice of ending their tenancy. Informal notice (text, email, verbal) is not sufficient in Ontario.",
  },
  {
    q: "What if my landlord won't accept my notice or give me a move-out inspection?",
    a: "Document everything in writing. In Ontario, landlords are required to offer a move-out inspection. If they refuse, conduct your own inspection with dated photos and video. If disputes arise, the LTB can resolve them.",
  },
];

export default function MovingOutOntarioChecklistPage() {
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
        headline="Moving Out in Ontario: Tenant Checklist for Getting Your Deposit Back"
        description="Moving out in Ontario involves more steps than most tenants realize. Follow this checklist to serve proper notice, document the unit, and protect your last month's rent deposit."
        url="https://leaseplain.com/blog/moving-out-ontario-checklist"
        datePublished="2026-04-01"
        dateModified="2026-06-05"
        keywords={[
          "moving out Ontario tenant checklist",
          "Ontario tenant notice to vacate",
          "last month rent deposit Ontario",
        ]}
        imageUrl="https://leaseplain.com/diagrams/moving-out-ontario.png"
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "Moving Out Ontario Checklist", href: "https://leaseplain.com/blog/moving-out-ontario-checklist" },
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
            "@id": "https://leaseplain.com/blog/moving-out-ontario-checklist",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", ".speakable-summary"],
            },
          }).replace(/</g, "<"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Ontario Move-Out Checklist",
          "description": "Step-by-step checklist for Ontario tenants moving out of a rental unit, covering notice, inspection, documentation, and deposit rules.",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Determine your correct notice date — notice must end on the last day of a rental period" },
            { "@type": "ListItem", "position": 2, "name": "Complete LTB Form N9 (Tenant's Notice to Terminate Tenancy)" },
            { "@type": "ListItem", "position": 3, "name": "Deliver N9 to your landlord in writing and keep proof of delivery" },
            { "@type": "ListItem", "position": 4, "name": "Confirm notice period is at least 60 days before the last day of tenancy" },
            { "@type": "ListItem", "position": 5, "name": "Schedule a move-out inspection with your landlord" },
            { "@type": "ListItem", "position": 6, "name": "Photograph every room, appliance, and surface with date-stamped photos" },
            { "@type": "ListItem", "position": 7, "name": "Repair any damage beyond normal wear and tear before the inspection" },
            { "@type": "ListItem", "position": 8, "name": "Clean the unit thoroughly, focusing on oven, fridge, bathroom, and high-use areas" },
            { "@type": "ListItem", "position": 9, "name": "Cancel utilities, internet, and mail forwarding effective on your move-out date" },
            { "@type": "ListItem", "position": 10, "name": "Return all keys, fobs, garage openers, and parking passes to the landlord" },
            { "@type": "ListItem", "position": 11, "name": "Conduct the move-out inspection together with the landlord and get a written sign-off" },
            { "@type": "ListItem", "position": 12, "name": "Take a final walkthrough with video as your strongest defence against deposit disputes" },
            { "@type": "ListItem", "position": 13, "name": "Get your landlord's contact address in writing for future correspondence" },
            { "@type": "ListItem", "position": 14, "name": "Apply your last month's rent deposit to your final month — do not pay rent for that month" },
            { "@type": "ListItem", "position": 15, "name": "Ensure the landlord returns LMR deposit interest earned at the guideline rate" },
            { "@type": "ListItem", "position": 16, "name": "If the landlord claims illegal deposit deductions, file a T1 application with the LTB" },
          ],
        }).replace(/</g, "<") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Move Out of a Rental in Ontario",
          "description": "A step-by-step checklist for Ontario tenants covering proper notice, move-out inspection, unit documentation, and protecting your last month's rent deposit.",
          "step": [
            { "@type": "HowToStep", "position": 1, "name": "Determine your correct notice date and serve Form N9", "text": "Calculate your 60-day notice period — it must expire on the last day of a rental period (usually the last day of the month). Complete LTB Form N9 (Tenant's Notice to Terminate the Tenancy) and deliver it to your landlord in writing (in person, by registered mail, or by courier). Keep proof of delivery. Informal notice by text or email is not sufficient in Ontario." },
            { "@type": "HowToStep", "position": 2, "name": "Schedule a move-out inspection and document the unit", "text": "Two to four weeks before your move-out date, schedule a move-out inspection with your landlord — they are required to offer one in Ontario. Photograph every room, appliance, and surface with date-stamped photos. Repair any damage you caused beyond normal wear and tear before the inspection, and clean the unit thoroughly." },
            { "@type": "HowToStep", "position": 3, "name": "Complete move-out day tasks", "text": "Return all keys, fobs, garage openers, and parking passes to the landlord. Conduct the move-out inspection together with the landlord if possible and get a written sign-off. Take a final video walkthrough of the unit — this is your strongest defence if a deposit dispute arises later. Get your landlord's contact address in writing for future correspondence." },
            { "@type": "HowToStep", "position": 4, "name": "Handle your last month's rent deposit", "text": "Your last month's rent (LMR) deposit is automatically applied to your final month — do not pay rent for that month. The landlord must also return accumulated interest on the deposit (earned at the guideline rate each year). If the landlord claims deductions for anything other than rent arrears, or refuses to apply your LMR, file a T1 application with the LTB — Ontario has no damage deposit and any such deduction is illegal." },
          ],
        }).replace(/</g, "<") }}
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
                <span>Moving Out in Ontario Checklist</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Ontario
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  April 1, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Moving Out in Ontario: Tenant Checklist for Getting Your Deposit Back
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Moving out in Ontario involves more than packing boxes. You need to serve proper
                written notice on the right form, conduct a move-out inspection, and understand
                exactly how your last month&apos;s rent deposit works — or risk leaving money behind.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="August 2026" />
                <TableOfContents />

                <figure className="mb-8">
                  <img
                    src="/diagrams/moving-out-ontario.png"
                    alt="Timeline for moving out in Ontario: 60 or more days before, serve Form N9 written notice expiring on the last day of a rental period; final weeks, photograph the unit and book the elevator; final month, the last month's rent deposit is applied so you do not pay rent twice; move-out day, return keys and provide a forwarding address"
                    width={1200}
                    height={630}
                    loading="lazy"
                    className="w-full h-auto rounded-xl border border-slate-200"
                  />
                  <figcaption className="text-sm text-slate-500 mt-2">
                    The Ontario move-out timeline from first notice to key handover.
                  </figcaption>
                </figure>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Understanding the Notice Requirement</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    In Ontario, tenants must give a minimum of <strong>60 days written notice</strong>{" "}
                    to end a tenancy, and that notice must expire on the last day of a rental period —
                    almost always the last day of the month. This means if you want to be out by
                    June 30, your notice must be received by your landlord <em>no later than May 1</em>.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The notice must be given on the official LTB <strong>Form N9</strong>{" "}
                    (Tenant&apos;s Notice to Terminate the Tenancy). An informal email, text, or
                    conversation does not count as proper notice in Ontario. You must deliver it in
                    writing — in person, by registered mail, or by courier — and keep proof.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Use the{" "}
                    <Link href="/tools/notice-period-calculator" className="text-blue-600 hover:underline">
                      Notice Period Calculator
                    </Link>{" "}
                    to confirm exactly how many days&apos; notice you need and what the last valid
                    notice date is for your move-out date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Last Month&apos;s Rent vs. Damage Deposit</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Ontario is unique in that landlords can only collect a <strong>last month&apos;s
                    rent (LMR) deposit</strong> — not a separate damage deposit. This is a critical
                    distinction:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li>The LMR deposit is applied to your final month of rent. You do not pay rent for that month.</li>
                    <li>A landlord cannot deduct for cleaning, damage, or any other reason from the LMR deposit — it must be applied to rent or returned.</li>
                    <li>The deposit earns interest at the Ontario rent increase guideline rate each year. Your landlord must either return the accumulated interest or deduct it from your last month&apos;s rent.</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    If a landlord tries to keep your LMR for any reason other than unpaid rent, they
                    are acting illegally. File a T1 application at the LTB.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-5">Your Move-Out Checklist</h2>
                  <div className="space-y-6">
                    {checklistItems.map((section) => (
                      <div key={section.step} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                            {section.step}
                          </span>
                          <h3 className="font-bold text-slate-900">{section.category}</h3>
                        </div>
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Breaking a Lease Early</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    If you need to leave before your lease ends, you have two main options in Ontario:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-slate-700 leading-relaxed mb-3">
                    <li><strong>Assign or sublet the unit</strong> — find a replacement tenant and request your landlord&apos;s consent (which cannot be unreasonably withheld).</li>
                    <li><strong>Give 60 days notice with Form N9</strong> — you may still owe rent until the landlord finds a new tenant, but Ontario law requires landlords to make reasonable efforts to re-rent (duty to mitigate).</li>
                  </ol>
                  <p className="text-slate-700 leading-relaxed">
                    Use the{" "}
                    <Link href="/tools/lease-break-calculator" className="text-blue-600 hover:underline">
                      Lease Break Cost Estimator
                    </Link>{" "}
                    to understand your maximum financial exposure if you break your lease early.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Breaking a lease early?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Estimate your financial exposure if you need to leave your Ontario lease before
                    it ends.
                  </p>
                  <Link
                    href="/tools/lease-break-calculator"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Lease Break Calculator
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "Notice Period Calculator", href: "/tools/notice-period-calculator" },
                      { label: "Deposit Return Calculator", href: "/tools/deposit-calculator" },
                      { label: "Renting in Ontario", href: "/canada/ontario" },
                      { label: "Tenant Rights — Ontario", href: "/tenant-rights/ontario" },
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
