import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ReviewedByline from "@/components/ReviewedByline";
import { ChevronRight } from "lucide-react";
import { ANSWERS, getAnswer } from "@/lib/answers";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return ANSWERS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getAnswer(slug);
  if (!a) return { title: "Question Not Found | LeasePlain" };
  return {
    title: `${a.question} | LeasePlain`,
    description: a.shortAnswer,
    alternates: { canonical: `https://leaseplain.com/answers/${a.slug}` },
    openGraph: {
      title: `${a.question} | LeasePlain`,
      description: a.shortAnswer,
      url: `https://leaseplain.com/answers/${a.slug}`,
      type: "article",
      images: [{ url: "https://leaseplain.com/og/answers.png", width: 1200, height: 630 }],
    },
    keywords: a.keywords,
  };
}

export default async function AnswerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getAnswer(slug);
  if (!a) notFound();

  // QAPage schema — the format Google and AI answers use for direct Q&A.
  const qaSchema = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: a.question,
      text: a.question,
      answerCount: 1,
      acceptedAnswer: {
        "@type": "Answer",
        text: a.shortAnswer,
        url: `https://leaseplain.com/answers/${a.slug}`,
      },
    },
  };

  const others = ANSWERS.filter((o) => o.category === a.category && o.slug !== a.slug).slice(0, 4);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(qaSchema).replace(/</g, "\\u003c") }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `https://leaseplain.com/answers/${a.slug}`,
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".speakable-summary"] },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <div className="flex flex-col min-h-full">
        <Navbar />
        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-14 px-4">
            <div className="max-w-3xl mx-auto">
              <BreadcrumbNav
                className="mb-4"
                items={[
                  { label: "Home", href: "/" },
                  { label: "Answers", href: "/answers" },
                  { label: a.category },
                ]}
              />
              <span className="inline-block text-xs font-semibold uppercase tracking-wide text-indigo-600 mb-3">{a.category}</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">{a.question}</h1>
            </div>
          </section>

          <section className="py-12 px-4">
            <div className="max-w-3xl mx-auto">
              {/* Featured short answer */}
              <div className="rounded-2xl border-l-4 border-indigo-500 bg-indigo-50/50 p-6 mb-8">
                <p className="text-lg text-slate-800 leading-relaxed speakable-summary font-medium">{a.shortAnswer}</p>
              </div>

              <div className="mb-8">
                <ReviewedByline updated="August 2026" />
              </div>

              <div className="space-y-4 mb-10">
                {a.blocks.map((b, i) =>
                  b.type === "list" ? (
                    <ul key={i} className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                      {b.items?.map((it, j) => <li key={j}>{it}</li>)}
                    </ul>
                  ) : (
                    <p key={i} className="text-slate-700 leading-relaxed">{b.text}</p>
                  )
                )}
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6">
                <h2 className="text-sm font-bold text-slate-900 mb-3">Read more</h2>
                <ul className="flex flex-col gap-2">
                  {a.related.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                        <ChevronRight className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {others.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-sm font-bold text-slate-900 mb-3">More {a.category.toLowerCase()} questions</h2>
                  <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                    {others.map((o) => (
                      <Link key={o.slug} href={`/answers/${o.slug}`} className="flex items-center justify-between gap-4 px-5 py-3.5 hover:bg-slate-50">
                        <span className="text-slate-800 text-sm font-medium">{o.question}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 text-center">
                <Link href="/answers" className="text-sm font-semibold text-indigo-600 hover:underline">
                  ← All tenant questions
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
