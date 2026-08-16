import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { FileText, ChevronRight, Mail } from "lucide-react";
import { LETTERS } from "@/lib/letters";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Free Tenant Letter Templates & Generators (Ontario) | LeasePlain",
  description:
    "Free fill-in-the-blank letter generators for Ontario tenants — repair requests, rent increase disputes, deposit interest requests, and notice to end tenancy. Copy, print, or save as PDF.",
  alternates: { canonical: "https://leaseplain.com/letters" },
  openGraph: {
    title: "Free Tenant Letter Templates & Generators (Ontario) | LeasePlain",
    description:
      "Repair requests, rent-increase disputes, deposit-interest requests, and move-out notices — fill in the blanks and generate a ready letter.",
    url: "https://leaseplain.com/letters",
    type: "website",
    images: [{ url: "https://leaseplain.com/og/letters.png", width: 1200, height: 630 }],
  },
};

export default function LettersHubPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tenant Letter Generators — LeasePlain",
    url: "https://leaseplain.com/letters",
    itemListElement: LETTERS.map((l, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: l.h1,
      url: `https://leaseplain.com/letters/${l.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c") }}
      />
      <div className="flex flex-col min-h-full">
        <Navbar />
        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <BreadcrumbNav className="mb-4" items={[{ label: "Home", href: "/" }, { label: "Letter Templates" }]} />
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">Free Tenant Letter Generators</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                A dated, written letter is often what turns a dispute in your favour — it creates the
                paper trail you need. Fill in the blanks and generate a clear, ready-to-send letter in
                seconds. Copy it, print it, or save it as a PDF. Free, no sign-up.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-5">
              {LETTERS.map((l) => (
                <Link
                  key={l.slug}
                  href={`/letters/${l.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-indigo-600" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 leading-snug">{l.h1}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{l.metaDescription}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600">
                    Open generator <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
