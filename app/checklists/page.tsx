import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { ClipboardCheck, ChevronRight } from "lucide-react";
import { CHECKLISTS } from "@/lib/checklists";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Free Printable Tenant Checklists (Ontario) | LeasePlain",
  description:
    "Free printable checklists for Ontario renters — before you sign a lease, moving in, and moving out. Print them or save as a PDF to protect your deposit and your rights.",
  alternates: { canonical: "https://leaseplain.com/checklists" },
  openGraph: {
    title: "Free Printable Tenant Checklists (Ontario) | LeasePlain",
    description: "Before-you-sign, move-in, and move-out checklists — print or save as PDF.",
    url: "https://leaseplain.com/checklists",
    type: "website",
    images: [{ url: "https://leaseplain.com/og/checklists.png", width: 1200, height: 630 }],
  },
};

export default function ChecklistsHubPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Printable Tenant Checklists — LeasePlain",
    url: "https://leaseplain.com/checklists",
    itemListElement: CHECKLISTS.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.h1,
      url: `https://leaseplain.com/checklists/${c.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c") }} />
      <div className="flex flex-col min-h-full">
        <Navbar />
        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <BreadcrumbNav className="mb-4" items={[{ label: "Home", href: "/" }, { label: "Checklists" }]} />
              <div className="flex items-center gap-3 mb-4">
                <ClipboardCheck className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">Free Printable Tenant Checklists</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                The difference between getting your deposit back and losing it often comes down to what
                you documented — and when. Print these or save them as a PDF, and check the boxes as you go.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-5">
              {CHECKLISTS.map((c) => (
                <Link
                  key={c.slug}
                  href={`/checklists/${c.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                    <ClipboardCheck className="w-5 h-5 text-indigo-600" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 leading-snug">{c.h1}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{c.metaDescription}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600">
                    Open checklist <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
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
