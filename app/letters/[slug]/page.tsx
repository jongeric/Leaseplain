import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";
import LetterGenerator from "@/components/LetterGenerator";
import { ChevronRight, Info } from "lucide-react";
import { LETTERS, getLetter } from "@/lib/letters";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return LETTERS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const l = getLetter(slug);
  if (!l) return { title: "Template Not Found | LeasePlain" };
  return {
    title: `${l.title} | LeasePlain`,
    description: l.metaDescription,
    alternates: { canonical: `https://leaseplain.com/letters/${l.slug}` },
    openGraph: {
      title: `${l.title} | LeasePlain`,
      description: l.metaDescription,
      url: `https://leaseplain.com/letters/${l.slug}`,
      type: "website",
      images: [{ url: "https://leaseplain.com/og/letters.png", width: 1200, height: 630 }],
    },
    keywords: l.keywords,
  };
}

export default async function LetterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const l = getLetter(slug);
  if (!l) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: l.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: l.h1,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `https://leaseplain.com/letters/${l.slug}`,
    description: l.metaDescription,
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    provider: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <div className="flex flex-col min-h-full">
        <Navbar />
        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-14 px-4">
            <div className="max-w-4xl mx-auto">
              <BreadcrumbNav
                className="mb-4"
                items={[
                  { label: "Home", href: "/" },
                  { label: "Letter Templates", href: "/letters" },
                  { label: l.h1 },
                ]}
              />
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{l.h1}</h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">{l.intro}</p>
            </div>
          </section>

          <section className="py-10 px-4">
            <div className="max-w-4xl mx-auto">
              {l.note && (
                <div className="mb-6 flex items-start gap-3 rounded-xl bg-blue-50 border border-blue-100 p-4">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-blue-900">{l.note}</p>
                </div>
              )}
              <LetterGenerator slug={l.slug} />
            </div>
          </section>

          <section className="pb-14 px-4">
            <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={l.faqs} />
              </div>
              <aside>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related</h3>
                  <ul className="flex flex-col gap-2">
                    {l.related.map((r) => (
                      <li key={r.href}>
                        <Link href={r.href} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                          <ChevronRight className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                          {r.label}
                        </Link>
                      </li>
                    ))}
                    <li className="pt-1">
                      <Link href="/letters" className="text-sm text-indigo-600 font-semibold hover:underline flex items-center gap-1">
                        <ChevronRight className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                        All letter generators
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-5 bg-indigo-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Not sure what your lease says?</h3>
                  <p className="text-indigo-100 text-sm mb-4 leading-relaxed">Upload it and we&apos;ll explain it in plain English before you send anything.</p>
                  <Link href="/upload" className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-indigo-50 transition-colors text-sm w-full justify-center">
                    Check My Lease
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
