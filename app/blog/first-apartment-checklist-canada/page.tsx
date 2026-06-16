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
  title:
    "First Apartment Checklist: 25 Things to Do Before and After Signing Your Lease in Canada | LeasePlain",
  description:
    "Moving into your first apartment? This complete Canadian checklist covers everything: what to check before signing, what to document at move-in, what to keep on file, and your key rights as a new tenant.",
  alternates: {
    canonical: "https://leaseplain.com/blog/first-apartment-checklist-canada",
  },
  openGraph: {
    title:
      "First Apartment Checklist: 25 Things to Do Before and After Signing Your Lease in Canada | LeasePlain",
    description:
      "Moving into your first apartment? This complete Canadian checklist covers everything: what to check before signing, what to document at move-in, what to keep on file, and your key rights as a new tenant.",
    url: "https://leaseplain.com/blog/first-apartment-checklist-canada",
    type: "article",
    publishedTime: "2026-05-20T00:00:00Z",
    modifiedTime: "2026-06-01T00:00:00Z",
  },
  keywords: [
    "first apartment checklist Canada",
    "moving into first apartment checklist",
    "things to do before signing lease",
    "tenant checklist Canada",
    "first time renter checklist",
  ],
};

const faqItems = [
  {
    q: "Do I need a written lease for my first apartment in Canada?",
    a: "Technically, verbal leases are legal in most provinces — but they are extremely difficult to enforce and leave you with far less protection. Always insist on a written lease. In Ontario, landlords are required by law to use the Standard Lease form for most residential tenancies.",
  },
  {
    q: "What should I photograph at move-in?",
    a: "Photograph every room from multiple angles: all four walls, the floor, the ceiling (including light fixtures), all appliances (inside and outside), windows, closets, bathroom fixtures, and any existing damage no matter how minor. Make sure photos are timestamped and backed up to cloud storage you control.",
  },
  {
    q: "How much deposit can my landlord charge in Ontario?",
    a: "In Ontario, the only permitted deposit is a last month's rent deposit — equal to one month's rent. A separate damage deposit is illegal under the Residential Tenancies Act. Your landlord cannot charge a pet deposit, key deposit beyond the actual cost of replacement, or any other advance payment.",
  },
  {
    q: "What is the Standard Lease in Ontario and do I have to sign it?",
    a: "Ontario's Standard Lease (Form 2229E) is the mandatory lease form for most residential tenancies since April 30, 2018. Landlords must provide it. If your landlord refuses, you can request it in writing — they then have 21 days to provide it, or you may be entitled to withhold one month's rent until they comply.",
  },
  {
    q: "What do I do if my landlord refuses to give me a move-in inspection?",
    a: "In BC, the Condition Inspection Report (RTB-27) is legally required and a landlord who skips it loses the right to make deposit deductions. In other provinces, the landlord's refusal doesn't prevent you from documenting the condition yourself. Do a thorough solo walkthrough, take timestamped photos, and email your landlord a written move-in condition report within 24 hours — this creates a paper trail you can use at the LTB or tribunal if needed.",
  },
];

export default function FirstApartmentChecklistCanadaPage() {
  return (
    <>
      <ArticleSchema
        headline="First Apartment Checklist: 25 Things to Do Before and After Signing Your Lease in Canada"
        description="Moving into your first apartment? This complete Canadian checklist covers everything: what to check before signing, what to document at move-in, what to keep on file, and your key rights as a new tenant."
        url="https://leaseplain.com/blog/first-apartment-checklist-canada"
        datePublished="2026-05-20"
        dateModified="2026-06-01"
        keywords={[
          "first apartment checklist Canada",
          "moving into first apartment checklist",
          "things to do before signing lease",
          "tenant checklist Canada",
          "first time renter checklist",
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://leaseplain.com" },
          { name: "Blog", href: "https://leaseplain.com/blog" },
          {
            name: "First Apartment Checklist Canada",
            href: "https://leaseplain.com/blog/first-apartment-checklist-canada",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".speakable-summary"],
          },
          "url": "https://leaseplain.com/blog/first-apartment-checklist-canada",
        }).replace(/</g, "<") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }).replace(/</g, "<") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "First Apartment Checklist for Canada",
          "description": "Key steps and items to check when renting your first apartment in Canada.",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Get the lease in writing" },
            { "@type": "ListItem", "position": 2, "name": "In Ontario: request the Standard Lease form" },
            { "@type": "ListItem", "position": 3, "name": "Read every clause carefully before signing" },
            { "@type": "ListItem", "position": 4, "name": "Check if your unit is rent-controlled" },
            { "@type": "ListItem", "position": 5, "name": "Research the building's RentSafeTO score (Toronto)" },
            { "@type": "ListItem", "position": 6, "name": "Ask what deposits are required and verify the legal cap for your province" },
            { "@type": "ListItem", "position": 7, "name": "Confirm who is responsible for which utilities" },
            { "@type": "ListItem", "position": 8, "name": "Check for red flags in the lease" },
            { "@type": "ListItem", "position": 9, "name": "Run a quick online check on the landlord" },
            { "@type": "ListItem", "position": 10, "name": "Get renters insurance quotes" },
            { "@type": "ListItem", "position": 11, "name": "Do a thorough walkthrough with your landlord before accepting the keys" },
            { "@type": "ListItem", "position": 12, "name": "Take timestamped photos of every room" },
            { "@type": "ListItem", "position": 13, "name": "Test everything that should work" },
            { "@type": "ListItem", "position": 14, "name": "Document existing damage in writing and email it to your landlord" },
            { "@type": "ListItem", "position": 15, "name": "In BC: complete a Condition Inspection Report (RTB-27)" },
            { "@type": "ListItem", "position": 16, "name": "Get a receipt for your deposit and first month's rent" },
            { "@type": "ListItem", "position": 17, "name": "Confirm your landlord's contact details and emergency repair contact" },
            { "@type": "ListItem", "position": 18, "name": "Read the lease one more time now that you're in the unit" },
            { "@type": "ListItem", "position": 19, "name": "Set up a dedicated folder for all landlord communications" },
            { "@type": "ListItem", "position": 20, "name": "Put your rent due date in your calendar with a 5-day reminder" },
            { "@type": "ListItem", "position": 21, "name": "Bookmark your province's tenant rights tribunal" },
            { "@type": "ListItem", "position": 22, "name": "Identify local tenant advocacy resources" },
            { "@type": "ListItem", "position": 23, "name": "Keep your original signed lease — always" },
            { "@type": "ListItem", "position": 24, "name": "Keep all rent receipts (or e-transfer records) for the full tenancy" },
            { "@type": "ListItem", "position": 25, "name": "Keep your move-in condition report and photos until at least 2 years after you move out" },
          ],
        }).replace(/</g, "<") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Rent Your First Apartment in Canada",
          "description": "A 25-step guide for first-time renters in Canada covering what to do before signing a lease, at move-in, during the first month, and which documents to keep for the entire tenancy.",
          "step": [
            { "@type": "HowToStep", "position": 1, "name": "Get the lease in writing", "text": "Never rent on a verbal agreement. Oral leases are almost impossible to enforce — always insist on a written lease. In Ontario, landlords must use the mandatory Standard Lease form for most residential tenancies." },
            { "@type": "HowToStep", "position": 2, "name": "Read and understand every clause before signing", "text": "Pay close attention to rent amount, deposit required, utilities included, pet rules, subletting, parking, and storage. Check for red flags such as clauses prohibiting subletting entirely, illegal late fees, or purported waivers of your right to a habitable unit." },
            { "@type": "HowToStep", "position": 3, "name": "Verify what deposit your landlord can legally charge", "text": "Deposit caps vary by province: Ontario permits only a last month's rent deposit; BC allows a maximum of 0.5 months' rent; Quebec permits no deposit at all. Anything above your province's cap is illegal — get a receipt for any deposit you pay." },
            { "@type": "HowToStep", "position": 4, "name": "Check if your unit is rent-controlled", "text": "In Ontario, units first occupied for residential purposes after November 15, 2018 are exempt from the annual rent increase guideline. Know this before you sign — it affects how much your rent could increase at renewal." },
            { "@type": "HowToStep", "position": 5, "name": "Do a thorough move-in walkthrough and document everything", "text": "Before or on the day you get the keys, walk through the unit with your landlord and note every imperfection. Take timestamped photos of every room, appliance, fixture, and any existing damage. Upload immediately to cloud storage you control. In BC, complete the legally required Condition Inspection Report (RTB-27) with your landlord." },
            { "@type": "HowToStep", "position": 6, "name": "Email a move-in condition report to your landlord within 24 hours", "text": "Send a written record of the unit's condition — including any existing damage — to your landlord by email the same day or the next day. This creates a timestamped paper trail that protects you against deposit deduction claims at move-out." },
            { "@type": "HowToStep", "position": 7, "name": "Set up rent payment reminders and a document folder", "text": "Put your rent due date in your calendar with a 5-day reminder. Create a dedicated folder — in email or cloud storage — for all landlord communications, lease documents, rent receipts, and repair requests. A complete paper trail is essential if a dispute ever goes to tribunal." },
            { "@type": "HowToStep", "position": 8, "name": "Bookmark your province's tenant rights tribunal and local advocacy resources", "text": "Know where to go before you need to go there: Ontario's LTB (ltb.gov.on.ca), BC's RTB (gov.bc.ca/rtb), Alberta's RTDRS (alberta.ca/rtdrs), or Quebec's TAL (tal.gouv.qc.ca). Identify local tenant advocacy organizations such as ACTO (Ontario) or TRAC (BC) that provide free or low-cost help." },
            { "@type": "HowToStep", "position": 9, "name": "Keep your lease, rent receipts, and move-in documentation for the full tenancy", "text": "Store your original signed lease (scanned and in cloud storage), all rent receipts or e-transfer records, and your move-in condition report and photos in a safe place. The limitation period for LTB applications is generally two years, so keep move-in documentation for at least two years after you move out." },
          ],
        }).replace(/</g, "<") }}
      />
      <div className="flex flex-col min-h-full">
        <Navbar />

        <main>
          {/* Hero */}
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>First Apartment Checklist Canada</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-200">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Canada
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  May 20, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  9 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                First Apartment Checklist: 25 Things to Do Before and After Signing Your Lease in
                Canada
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Renting your first apartment in Canada involves a lot more than just signing on the
                dotted line. This checklist walks you through 25 concrete action items — before you
                sign, at move-in, and during your first month — so you protect yourself from day
                one.
              </p>
            </div>
          </section>

          {/* Body */}
          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">

                {/* Section 1 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Before You Sign the Lease (Items 1–10)
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-5">
                    The period before you sign is your strongest window to ask questions, spot red
                    flags, and negotiate. Most tenants skip this — don&apos;t.
                  </p>
                  <ol className="space-y-5 list-none">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                        1
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Get the lease in writing</p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          Never rent on a verbal agreement. Oral leases exist but are almost
                          impossible to enforce — if a dispute arises, it becomes a he-said
                          she-said situation with no documentation to fall back on.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                        2
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          In Ontario: request the Standard Lease form
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          Mandatory since 2018. If your landlord doesn&apos;t provide it, request it
                          in writing. They then have 21 days to comply — or you may be entitled to
                          withhold one month&apos;s rent until they do.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                        3
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Read every clause carefully</p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          Pay special attention to: rent amount, deposit required, utilities
                          included, pet rules, subletting rules, parking, and storage. If you
                          don&apos;t understand a clause, ask — or upload it to LeasePlain for a plain-English
                          explanation.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                        4
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Check if your unit is rent-controlled
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          In Ontario, units first occupied for residential purposes after November
                          15, 2018 are exempt from rent increase guidelines. This means your
                          landlord could raise rent significantly at renewal. Know before you sign.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                        5
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Research the building&apos;s RentSafeTO score (Toronto)
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          Available at toronto.ca/rentsafe, this score gives a meaningful snapshot of
                          building maintenance standards. A low score is a red flag worth
                          investigating further.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                        6
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Ask what deposits are required and verify the legal cap
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          Caps vary sharply by province: in Ontario, only last month&apos;s rent is
                          permitted; in BC, the maximum is 0.5 months; in Quebec, no deposit is
                          allowed at all. Anything beyond your province&apos;s cap is illegal.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                        7
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Confirm who is responsible for which utilities
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          Get it in writing. If utilities are included, have the specific services
                          named in the lease — &quot;utilities included&quot; is vague and has led to many
                          disputes over whether internet, heat, or parking was covered.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                        8
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Check for red flags in the lease
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          Watch for clauses that prohibit subletting entirely, impose excessive late
                          fees (illegal in Ontario), or purport to waive your right to a habitable
                          unit. These clauses are either void or a warning sign about the landlord.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                        9
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Run a quick online check on the landlord
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          Search the LTB decisions database (public record) for the property address.
                          A pattern of N12 notices (landlord&apos;s own use evictions) at the same
                          address is a serious red flag.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                        10
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Get renters insurance quotes</p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          Typically $15–30/month for a first apartment. Not legally required, but
                          essential — your landlord&apos;s building insurance covers the building, not
                          your belongings or personal liability.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    At Move-In (Items 11–18)
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-5">
                    The first day sets the record for everything that follows. Protect your deposit
                    by creating ironclad documentation before you unpack a single box.
                  </p>
                  <ol className="space-y-5 list-none" start={11}>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center">
                        11
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Do a thorough walkthrough with your landlord before accepting the keys
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          Walk through every room together and note every imperfection — scratches,
                          stains, chips, scuffs. If your landlord refuses to do a walkthrough, do it
                          alone and document everything in writing the same day.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center">
                        12
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Take timestamped photos of every room
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          Photograph walls, floors, appliances, fixtures, closets, and any existing
                          damage. Upload immediately to cloud storage you control (not just your
                          phone). These photos are your single most powerful document if a deposit
                          dispute arises at move-out.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center">
                        13
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Test everything that should work
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          Test all appliances, smoke detectors, carbon monoxide detectors, door locks
                          (including deadbolts), windows (open, close, and lock), and every tap for
                          hot water. Note any failures immediately in writing.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center">
                        14
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Document existing damage in writing and email it to your landlord
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          Send a move-in condition report by email within 24 hours of getting the
                          keys. This creates a timestamped record. If your landlord later tries to
                          charge you for pre-existing damage, this email is your defense.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center">
                        15
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          In BC: complete a Condition Inspection Report (RTB-27)
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          This form is legally required in British Columbia. Both you and your
                          landlord must sign it at move-in. If the landlord skips this step, they
                          forfeit the right to make any deposit deductions at move-out.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center">
                        16
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Get a receipt for your deposit and first month&apos;s rent
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          In Ontario, landlords must provide receipts on request (Residential
                          Tenancies Act, s.109). Keep this receipt for the entire tenancy — it proves
                          you paid and confirms the deposit amount.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center">
                        17
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Confirm your landlord&apos;s contact details and emergency repair contact
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          You need a phone number and email for routine requests, and a separate
                          after-hours or emergency contact for urgent repairs (no heat in winter,
                          flooding, etc.). Get both in writing on day one.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center">
                        18
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Read the lease one more time now that you&apos;re in the unit
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          You will understand it differently when the physical space is in front of
                          you. Clauses about parking, storage, garbage, and noise will mean more now
                          than they did when you first read it.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Within Your First Month (Items 19–22)
                  </h2>
                  <ol className="space-y-5 list-none" start={19}>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-100 text-violet-700 font-bold text-sm flex items-center justify-center">
                        19
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Set up a dedicated folder for all landlord communications
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          Create an email folder — or a folder in Google Drive — specifically for
                          lease documents, rent receipts, repair requests, and any landlord
                          correspondence. A paper trail is essential if a dispute ever goes to
                          tribunal.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-100 text-violet-700 font-bold text-sm flex items-center justify-center">
                        20
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Put your rent due date in your calendar with a 5-day reminder
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          Late rent is one of the most common grounds for N4 notices in Ontario.
                          Even if your landlord is lenient, chronically late rent creates a legal
                          paper trail that works against you.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-100 text-violet-700 font-bold text-sm flex items-center justify-center">
                        21
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Bookmark your province&apos;s tenant rights tribunal
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          Know where to go before you need to go there:
                        </p>
                        <ul className="mt-2 space-y-1 text-slate-600 text-sm list-disc list-inside">
                          <li>
                            <strong>Ontario:</strong> Landlord and Tenant Board —{" "}
                            <span className="text-blue-600">ltb.gov.on.ca</span>
                          </li>
                          <li>
                            <strong>BC:</strong> Residential Tenancy Branch —{" "}
                            <span className="text-blue-600">gov.bc.ca/rtb</span>
                          </li>
                          <li>
                            <strong>Alberta:</strong> RTDRS —{" "}
                            <span className="text-blue-600">alberta.ca/rtdrs</span>
                          </li>
                          <li>
                            <strong>Quebec:</strong> Tribunal administratif du logement —{" "}
                            <span className="text-blue-600">tal.gouv.qc.ca</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-100 text-violet-700 font-bold text-sm flex items-center justify-center">
                        22
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Identify local tenant advocacy resources
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          These organizations provide free or low-cost help for tenants facing
                          disputes: ACTO (Advocacy Centre for Tenants Ontario), TRAC (Tenant
                          Resource and Advisory Centre, BC), and CPLEA (Centre for Public Legal
                          Education Alberta).
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Keep These Documents Forever (Items 23–25)
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-5">
                    These three items are non-negotiable. Store them somewhere you will be able to
                    find them long after you move out.
                  </p>
                  <ol className="space-y-5 list-none" start={23}>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm flex items-center justify-center">
                        23
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Keep your original signed lease — always
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          Scan it and store it in cloud storage in addition to keeping the physical
                          copy. You will need it if disputes arise about what was agreed to — even
                          years into the tenancy.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm flex items-center justify-center">
                        24
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Keep all rent receipts (or e-transfer records) for the full tenancy
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          Receipts prove you paid. E-transfer confirmations work, but a formal
                          receipt from your landlord is stronger. In Ontario, landlords must provide
                          receipts on request under s.109 of the RTA.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm flex items-center justify-center">
                        25
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Keep your move-in condition report and photos until at least 2 years after
                          you move out
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-0.5">
                          The limitation period for LTB applications is generally two years from the
                          date a claim arises. Your move-in documentation could be essential for
                          defending against a deposit deduction claim long after the tenancy ends.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Your Top 5 Rights as a New Tenant
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-5">
                    These rights apply regardless of what your lease says. They exist in law and
                    cannot be waived, even if a clause in your lease purports to take them away.
                  </p>
                  <ul className="space-y-4">
                    {[
                      {
                        right: "Right to a habitable unit",
                        detail:
                          "Your landlord must maintain the unit to health and safety standards. This obligation cannot be waived in a lease — a clause saying you accept the unit &quot;as-is&quot; in a substandard condition is void.",
                      },
                      {
                        right: "Right to quiet enjoyment",
                        detail:
                          "Your landlord must give 24 hours written notice before entering — and entry must be at a reasonable time. Unannounced visits are a violation of your rights.",
                      },
                      {
                        right: "Right to not pay illegal fees",
                        detail:
                          "No admin fees, no late fees (in Ontario), no deposits above provincial caps. If you were charged an illegal fee, you can apply to your tribunal for a refund.",
                      },
                      {
                        right: "Right to dispute",
                        detail:
                          "Your provincial tenancy tribunal is free or low-cost for tenants to access. You do not need a lawyer. The process is designed for self-represented applicants.",
                      },
                      {
                        right: "Right to not be evicted without a tribunal order",
                        detail:
                          "A notice to end your tenancy is not eviction. Your landlord must apply to the tribunal and obtain an order before you are legally required to leave. Notice alone has no force if you choose to stay and dispute it.",
                      },
                    ].map(({ right, detail }) => (
                      <li
                        key={right}
                        className="flex gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100"
                      >
                        <span
                          className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-500"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">{right}</p>
                          <p
                            className="text-slate-600 text-sm leading-relaxed mt-0.5"
                            dangerouslySetInnerHTML={{ __html: detail }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              {/* Sidebar */}
              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Understand your lease before you sign</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Upload your new lease to LeasePlain for a free plain-English analysis. Know
                    exactly what you&apos;re agreeing to before you commit.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                  >
                    Analyze My Lease Free
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      {
                        label: "First-Time Renter Guide",
                        href: "/resources/first-time-renter-guide",
                      },
                      {
                        label: "Move-In Cost Calculator",
                        href: "/tools/move-in-cost-calculator",
                      },
                      {
                        label: "Security Deposit Return Calculator",
                        href: "/tools/deposit-calculator",
                      },
                      { label: "Lease Red Flags", href: "/resources/lease-red-flags" },
                      {
                        label: "Questions to Ask Before Signing",
                        href: "/resources/questions-before-signing",
                      },
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

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">
                    Security Deposit Rules
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-3">
                    Wondering how much your landlord can legally charge? Check the province-by-province breakdown.
                  </p>
                  <Link
                    href="/blog/security-deposit-rules-canada"
                    className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3" aria-hidden="true" />
                    Security Deposit Rules by Province
                  </Link>
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
