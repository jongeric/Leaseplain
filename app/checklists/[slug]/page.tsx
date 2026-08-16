import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ReviewedByline from "@/components/ReviewedByline";
import PrintChecklistButton from "@/components/PrintChecklistButton";
import { ChevronRight, CheckSquare } from "lucide-react";
import { CHECKLISTS, getChecklist } from "@/lib/checklists";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return CHECKLISTS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getChecklist(slug);
  if (!c) return { title: "Checklist Not Found | LeasePlain" };
  return {
    title: `${c.title} | LeasePlain`,
    description: c.metaDescription,
    alternates: { canonical: `https://leaseplain.com/checklists/${c.slug}` },
    openGraph: {
      title: `${c.title} | LeasePlain`,
      description: c.metaDescription,
      url: `https://leaseplain.com/checklists/${c.slug}`,
      type: "website",
      images: [{ url: "https://leaseplain.com/og/checklists.png", width: 1200, height: 630 }],
    },
    keywords: c.keywords,
  };
}

export default async function ChecklistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getChecklist(slug);
  if (!c) notFound();

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: c.h1,
    description: c.metaDescription,
    url: `https://leaseplain.com/checklists/${c.slug}`,
    step: c.sections.flatMap((s) =>
      s.items.map((it) => ({ "@type": "HowToStep", name: it, itemListElement: { "@type": "HowToDirection", text: it } }))
    ),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, "\\u003c") }} />
      <div className="flex flex-col min-h-full">
        <Navbar />
        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-14 px-4">
            <div className="max-w-3xl mx-auto">
              <BreadcrumbNav
                className="mb-4"
                items={[
                  { label: "Home", href: "/" },
                  { label: "Checklists", href: "/checklists" },
                  { label: c.h1 },
                ]}
              />
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{c.h1}</h1>
              <p className="text-lg text-slate-600 leading-relaxed speakable-summary mb-5">{c.intro}</p>
              <PrintChecklistButton slug={c.slug} />
            </div>
          </section>

          <section className="py-12 px-4">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8">
                <ReviewedByline updated="August 2026" />
              </div>

              <div className="space-y-8">
                {c.sections.map((s) => (
                  <div key={s.heading}>
                    <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">{s.heading}</h2>
                    <ul className="space-y-2.5">
                      {s.items.map((it, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                          <CheckSquare className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-indigo-50 border border-indigo-100 p-6">
                <p className="text-sm text-indigo-900 font-medium">Take this checklist with you — print it or save it as a PDF.</p>
                <PrintChecklistButton slug={c.slug} />
              </div>

              <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-100 p-6">
                <h2 className="text-sm font-bold text-slate-900 mb-3">Related</h2>
                <ul className="flex flex-col gap-2">
                  {c.related.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                        <ChevronRight className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                        {r.label}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-1">
                    <Link href="/checklists" className="text-sm text-indigo-600 font-semibold hover:underline flex items-center gap-1">
                      <ChevronRight className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                      All checklists
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
