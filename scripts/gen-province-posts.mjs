// Generates province blog post page.tsx files from content specs so the
// scaffolding (schema, hero, TOC, FAQ, aside) stays identical to the existing
// hand-written posts while the prose lives in data. Run: node scripts/gen-province-posts.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { POSTS } from "./province-posts-data.mjs";

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
// Convert plain text with **bold** and [text](href) into JSX-safe markup.
function rich(text) {
  // We keep it simple: emit as a template that the page renders via
  // dangerouslySetInnerHTML-free approach is overkill; instead pre-render to JSX string.
  let t = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  // Escape quotes/apostrophes in the prose BEFORE injecting any tags, so that
  // the attribute quotes we add for <Link> are not clobbered.
  t = t.replace(/'/g, "&apos;").replace(/"/g, "&quot;");
  // links [label](/href) — href never contains quotes in our specs
  t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, href) =>
    `<Link href="${href}" className="text-blue-600 hover:underline">${label}</Link>`);
  // bold **x**
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  return t;
}

function sectionJsx(s) {
  const parts = [`                <div>`,
    `                  <h2 className="text-2xl font-bold text-slate-900 mb-3">${rich(s.h2)}</h2>`];
  (s.paras || []).forEach((p, i) => {
    const mb = i < (s.paras.length - 1) || s.list ? " mb-3" : "";
    parts.push(`                  <p className="text-slate-700 leading-relaxed${mb}">${rich(p)}</p>`);
  });
  if (s.list) {
    parts.push(`                  <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">`);
    s.list.forEach((li) => parts.push(`                    <li>${rich(li)}</li>`));
    parts.push(`                  </ul>`);
  }
  parts.push(`                </div>`);
  return parts.join("\n");
}

function pageTsx(p) {
  const kw = p.keywords.map((k) => JSON.stringify(k)).join(", ");
  const schemaKw = p.keywords.slice(0, 3).map((k) => JSON.stringify(k)).join(", ");
  const faqTs = p.faqs.map((f) =>
    `  {\n    q: ${JSON.stringify(f.q)},\n    a: ${JSON.stringify(f.a)},\n  },`).join("\n");
  const sections = p.sections.map(sectionJsx).join("\n\n");
  const related = p.related.map((r) =>
    `                      { label: ${JSON.stringify(r.label)}, href: ${JSON.stringify(r.href)} },`).join("\n");
  const fn = p.slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("") + "Page";

  return `import type { Metadata } from "next";
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
  title: ${JSON.stringify(p.title + " | LeasePlain")},
  description:
    ${JSON.stringify(p.description)},
  alternates: { canonical: "https://leaseplain.com/blog/${p.slug}" },
  openGraph: {
    title: ${JSON.stringify(p.title + " | LeasePlain")},
    description:
      ${JSON.stringify(p.ogDescription || p.description)},
    url: "https://leaseplain.com/blog/${p.slug}",
    type: "article",
    publishedTime: "${p.date}T00:00:00Z",
    modifiedTime: "${p.date}T00:00:00Z",
  },
  keywords: [${kw}],
};

const faqItems = [
${faqTs}
];

export default function ${fn}() {
  return (
    <>
      <ArticleSchema
        headline={${JSON.stringify(p.headline)}}
        description={${JSON.stringify(p.description)}}
        url="https://leaseplain.com/blog/${p.slug}"
        datePublished="${p.date}"
        dateModified="${p.date}"
        keywords={[${schemaKw}]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
        { name: ${JSON.stringify(p.crumb)}, href: "https://leaseplain.com/blog/${p.slug}" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog/${p.slug}",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".speakable-summary"] },
          }).replace(/</g, "\\\\u003c"),
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
                <span>${rich(p.crumb)}</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  ${p.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  ${p.dateLabel}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  ${p.readMins} min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
                ${rich(p.h1)}
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                ${rich(p.lead)}
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <ReviewedByline updated="September 2026" />
                <TableOfContents />

${sections}

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">${rich(p.cta.title)}</h3>
                  <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                    ${rich(p.cta.blurb)}
                  </p>
                  <Link href="${p.cta.href}" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center">
                    ${rich(p.cta.label)}
                  </Link>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                  <ul className="flex flex-col gap-2">
                    {[
${related}
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
`;
}

for (const p of POSTS) {
  const dir = `app/blog/${p.slug}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/page.tsx`, pageTsx(p));
  console.log(`wrote ${dir}/page.tsx`);
}
