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
  title: "How to Spot and Avoid Rental Scams in Canada (2026) | LeasePlain",
  description:
    "Fake listings, 'send a deposit to hold it,' and landlords who won't show the unit — rental scams are everywhere. The red flags, how to verify a listing is real, and what to do if you've been scammed.",
  alternates: { canonical: "https://leaseplain.com/blog/how-to-avoid-rental-scams-canada" },
  openGraph: {
    title: "How to Spot and Avoid Rental Scams in Canada (2026) | LeasePlain",
    description:
      "The red flags of a rental scam, how to verify a listing, and what to do if you've already sent money.",
    url: "https://leaseplain.com/blog/how-to-avoid-rental-scams-canada",
    type: "article",
    publishedTime: "2026-10-03T00:00:00Z",
    modifiedTime: "2026-10-03T00:00:00Z",
  },
  keywords: ["rental scams canada", "fake rental listing", "apartment scam", "rental deposit scam", "how to avoid rental scams"],
};

const faqItems = [
  {
    q: "What are the biggest red flags of a rental scam?",
    a: "A deal that's far below market, a 'landlord' who refuses to show the unit in person or by live video, pressure to send a deposit before you've seen it or signed anything, requests for e-transfer/wire/gift cards/crypto, a copied listing you can find elsewhere, and a story about being 'out of the country.' Any one of these should stop you cold.",
  },
  {
    q: "How do I verify a rental listing is real?",
    a: "Reverse-image-search the photos to see if they're stolen from another listing. Look up the address to confirm it exists and isn't for sale under someone else's name. Insist on an in-person or live video tour. Confirm the person's identity and that they have the right to rent the unit before any money changes hands.",
  },
  {
    q: "Is it safe to pay a deposit before signing a lease?",
    a: "No. Never send money before you've seen the unit and signed a written lease. Legitimate landlords collect a deposit at lease signing, using a traceable method — not an e-transfer to 'hold' a place you haven't toured. In Ontario, the only lawful upfront money is a last month's rent deposit and a key deposit.",
  },
  {
    q: "What should I do if I've been scammed?",
    a: "Act fast: contact your bank or e-transfer provider to try to reverse or flag the payment, report it to the Canadian Anti-Fraud Centre (1-888-495-8501) and your local police, and report the listing to the platform it appeared on. Keep every message, receipt, and screenshot as evidence.",
  },
];

export default function RentalScamsPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to verify a rental listing is real",
    description: "Steps to confirm a rental listing and landlord are legitimate before sending any money.",
    step: [
      { "@type": "HowToStep", name: "Reverse-image-search the photos", text: "Upload the listing photos to a reverse image search to check if they were stolen from another real listing." },
      { "@type": "HowToStep", name: "Verify the address", text: "Look up the address to confirm it exists and isn't simultaneously listed for sale or rent by someone else." },
      { "@type": "HowToStep", name: "Insist on a real tour", text: "Require an in-person or live video walkthrough. Refusal to show the unit is the single biggest red flag." },
      { "@type": "HowToStep", name: "Confirm identity and authority", text: "Verify the person's identity and that they actually own or are authorized to rent the unit before discussing money." },
      { "@type": "HowToStep", name: "Never pay before seeing and signing", text: "Only pay a deposit at lease signing, using a traceable method — never an e-transfer, wire, gift card, or crypto to 'hold' a unit." },
    ],
  };

  return (
    <>
      <ArticleSchema
        headline={"How to Spot and Avoid Rental Scams in Canada"}
        description={"Fake listings, 'send a deposit to hold it,' and landlords who won't show the unit — rental scams are everywhere. The red flags, how to verify a listing is real, and what to do if you've been scammed."}
        url="https://leaseplain.com/blog/how-to-avoid-rental-scams-canada"
        datePublished="2026-10-03"
        dateModified="2026-10-03"
        keywords={["rental scams canada", "fake rental listing", "apartment scam"]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: "How to Avoid Rental Scams", href: "https://leaseplain.com/blog/how-to-avoid-rental-scams-canada" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, "\\u003c") }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/how-to-avoid-rental-scams-canada",
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
                <span>How to Avoid Rental Scams</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  Canada
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  October 3, 2026
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  6 min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                How to Spot and Avoid Rental Scams in Canada
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                In a tight rental market, scammers thrive: a gorgeous unit, a price that&apos;s too good,
                and a landlord who just needs a deposit to &quot;hold it.&quot; Here are the red flags,
                how to verify a listing before you pay a cent, and what to do if you&apos;ve already sent
                money.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="October 2026" jurisdiction="Canadian Anti-Fraud Centre guidance" />
                <TableOfContents />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">The Red Flags</h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Price well below market.</strong> If it&apos;s hundreds under comparable units, be suspicious.</li>
                    <li><strong>&quot;I&apos;m out of the country.&quot;</strong> A classic cover for why they can&apos;t show the unit or meet you.</li>
                    <li><strong>Pressure to pay fast</strong> to &quot;beat other applicants&quot; before you&apos;ve seen it.</li>
                    <li><strong>Untraceable payment:</strong> e-transfer, wire, gift cards, or crypto.</li>
                    <li><strong>No in-person or live video tour.</strong> This is the biggest tell of all.</li>
                    <li><strong>Copied listing:</strong> the same photos or text appear on other sites under a different name or price.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Verify a Listing Is Real</h2>
                  <ol className="list-decimal list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Reverse-image-search the photos</strong> to catch stolen images.</li>
                    <li><strong>Look up the address</strong> — confirm it exists and isn&apos;t listed for sale by someone else.</li>
                    <li><strong>Insist on a tour</strong> in person or by live video (a pre-recorded clip doesn&apos;t count).</li>
                    <li><strong>Confirm who you&apos;re dealing with</strong> and that they have the right to rent the unit.</li>
                    <li><strong>Only pay at signing</strong>, using a traceable method, after you&apos;ve seen a written lease.</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Never Pay Before You Sign</h2>
                  <p className="text-slate-700 leading-relaxed">No legitimate landlord needs a deposit to &quot;hold&quot; a place you haven&apos;t toured. Real deposits are collected at lease signing. In Ontario, the only lawful upfront money is a <Link href="/blog/last-months-rent-deposit-ontario" className="text-blue-600 hover:underline">last month&apos;s rent deposit</Link> plus a key deposit — anything labelled an &quot;application fee&quot; or &quot;holding deposit&quot; before signing is a warning sign. Know <Link href="/blog/rental-application-what-landlords-can-ask-canada" className="text-blue-600 hover:underline">what a landlord can legally ask for</Link> before you hand over money or documents.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">If You&apos;ve Already Been Scammed</h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                    <li><strong>Contact your bank or e-transfer provider immediately</strong> to try to flag or reverse the payment.</li>
                    <li><strong>Report to the Canadian Anti-Fraud Centre</strong> (1-888-495-8501) and your local police.</li>
                    <li><strong>Report the listing</strong> to the platform where you found it.</li>
                    <li><strong>Keep all evidence</strong> — messages, receipts, screenshots, and the listing URL.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Got a lease to review?</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    Before you sign, check the lease for red flags and illegal clauses — free and private.
                  </p>
                  <Link href="/upload" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    Check My Lease
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "What a Landlord Can Ask on an Application", href: "/blog/rental-application-what-landlords-can-ask-canada" },
                      { label: "Lease Red Flags to Watch For", href: "/blog/lease-red-flags-to-watch-for" },
                      { label: "First Apartment Checklist", href: "/blog/first-apartment-checklist-canada" },
                      { label: "Renting Without a Credit History", href: "/blog/renting-without-credit-history-canada" },
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
