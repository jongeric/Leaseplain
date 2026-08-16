import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { HelpCircle, ChevronRight } from "lucide-react";
import { ANSWERS } from "@/lib/answers";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Ontario Tenant Questions, Answered | LeasePlain",
  description:
    "Quick, plain-English answers to the most common Ontario tenant questions — rent increases, evictions, deposits, repairs, privacy, and moving out. Straight answers, with links to the details.",
  alternates: { canonical: "https://leaseplain.com/answers" },
  openGraph: {
    title: "Ontario Tenant Questions, Answered | LeasePlain",
    description:
      "Straight answers to common Ontario tenant questions — rent, evictions, deposits, repairs, privacy, and moving.",
    url: "https://leaseplain.com/answers",
    type: "website",
    images: [{ url: "https://leaseplain.com/og/answers.png", width: 1200, height: 630 }],
  },
};

const CATEGORY_ORDER = ["Rent", "Eviction", "Deposits", "Repairs", "Privacy", "Moving"] as const;

export default function AnswersHubPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ontario Tenant Questions — LeasePlain",
    url: "https://leaseplain.com/answers",
    itemListElement: ANSWERS.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: a.question,
      url: `https://leaseplain.com/answers/${a.slug}`,
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
              <BreadcrumbNav className="mb-4" items={[{ label: "Home", href: "/" }, { label: "Answers" }]} />
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">Ontario Tenant Questions, Answered</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Straight, plain-English answers to the questions Ontario renters ask most — no jargon,
                no fluff. Tap any question for the short answer, then follow through to the full guide.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-4xl mx-auto space-y-10">
              {CATEGORY_ORDER.map((cat) => {
                const items = ANSWERS.filter((a) => a.category === cat);
                if (items.length === 0) return null;
                return (
                  <div key={cat}>
                    <h2 className="text-sm font-bold uppercase tracking-wide text-indigo-600 mb-3">{cat}</h2>
                    <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                      {items.map((a) => (
                        <Link
                          key={a.slug}
                          href={`/answers/${a.slug}`}
                          className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-slate-50 transition-colors"
                        >
                          <span className="text-slate-800 font-medium">{a.question}</span>
                          <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
