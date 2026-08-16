import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ReviewedByline from "@/components/ReviewedByline";
import FAQAccordion from "@/components/FAQAccordion";
import { ChevronRight, Check, Info } from "lucide-react";
import { LTB_FORMS, GROUP_LABEL, getForm } from "@/lib/ltbForms";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return LTB_FORMS.map((f) => ({ form: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ form: string }>;
}): Promise<Metadata> {
  const { form } = await params;
  const f = getForm(form);
  if (!f) return { title: "Form Not Found | LeasePlain" };
  const title = `LTB Form ${f.code}: ${f.name} (Ontario) | LeasePlain`;
  const description = `${f.purpose} A plain-English guide to the Ontario LTB ${f.code} form — what it means and what to do.`;
  return {
    title,
    description,
    alternates: { canonical: `https://leaseplain.com/ltb-forms/${f.slug}` },
    openGraph: {
      title,
      description,
      url: `https://leaseplain.com/ltb-forms/${f.slug}`,
      type: "article",
      images: [{ url: "https://leaseplain.com/og/ltb-forms.png", width: 1200, height: 630 }],
    },
    keywords: f.keywords,
  };
}

function formFaqs(code: string, name: string, isTenantFiled: boolean) {
  return [
    {
      q: `What is the Ontario LTB ${code} form?`,
      a: `The ${code} is the "${name}" form used at Ontario's Landlord and Tenant Board. ${isTenantFiled ? "It's a form a tenant files." : "It's typically a form a tenant receives from a landlord."}`,
    },
    {
      q: isTenantFiled ? `How do I file an ${code}?` : `What should I do if I receive an ${code}?`,
      a: isTenantFiled
        ? `Get the official ${code} form from Tribunals Ontario, complete it carefully with your evidence, and file it with the LTB before any deadline. Free legal help is available if you need it.`
        : `Don't panic and don't move out just because you received an ${code} — it isn't an eviction on its own. Read it carefully, note any deadline, keep it, and get advice. You have the right to respond at the LTB.`,
    },
    {
      q: `Is the ${code} form legal advice from LeasePlain?`,
      a: "No. This is general information to help you understand the form. For advice on your situation, use the official Tribunals Ontario resources or contact a community legal clinic, paralegal, or lawyer.",
    },
  ];
}

export default async function LTBFormPage({
  params,
}: {
  params: Promise<{ form: string }>;
}) {
  const { form } = await params;
  const f = getForm(form);
  if (!f) notFound();

  const isTenantFiled = f.group === "tenant-notice" || f.group === "tenant-application";
  const faqs = formFaqs(f.code, f.name, isTenantFiled);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((q) => ({ "@type": "Question", name: q.q, acceptedAnswer: { "@type": "Answer", text: q.a } })),
  };

  const related = LTB_FORMS.filter((o) => o.group === f.group && o.slug !== f.slug).slice(0, 5);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `https://leaseplain.com/ltb-forms/${f.slug}`,
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".speakable-summary"] },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <div className="flex flex-col min-h-full">
        <Navbar />
        <main>
          <section className="bg-surface-2 border-b border-line py-14 px-4">
            <div className="max-w-3xl mx-auto">
              <BreadcrumbNav
                className="mb-4"
                items={[
                  { label: "Home", href: "/" },
                  { label: "LTB Forms", href: "/ltb-forms" },
                  { label: f.code },
                ]}
              />
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center min-w-14 h-11 px-3 rounded-xl bg-brand text-brand-fg text-xl font-bold">{f.code}</span>
                <span className="text-xs font-semibold uppercase tracking-wide text-subtle">{GROUP_LABEL[f.group]}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">{f.name}</h1>
              <p className="text-lg text-muted leading-relaxed speakable-summary">{f.purpose}</p>
            </div>
          </section>

          <section className="py-12 px-4 bg-surface">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8"><ReviewedByline updated="August 2026" /></div>

              <div className="space-y-4 mb-8">
                {f.detail.map((p, i) => (
                  <p key={i} className="text-ink leading-relaxed">{p}</p>
                ))}
              </div>

              <div className="rounded-2xl border border-line bg-surface-2 p-6 mb-8">
                <h2 className="text-base font-bold text-ink mb-4">Key points</h2>
                <ul className="flex flex-col gap-2.5">
                  {f.keyPoints.map((k) => (
                    <li key={k} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-brand-soft flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-brand" aria-hidden="true" />
                      </span>
                      {k}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-brand-soft border border-line p-4 mb-10">
                <Info className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-ink">
                  Get the official {f.code} form and current rules from Tribunals Ontario. This page is
                  general information, not legal advice.{" "}
                  <Link href="/tenant-lawyer" className="text-brand font-semibold hover:underline">Find free or affordable help →</Link>
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-ink mb-4">Related guides</h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {f.relatedGuides.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="text-sm text-brand hover:underline flex items-center gap-1">
                        <ChevronRight className="w-3 h-3 flex-shrink-0" aria-hidden="true" />{r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-ink mb-4">Frequently asked questions</h2>
                <FAQAccordion items={faqs} />
              </div>

              {related.length > 0 && (
                <div>
                  <h2 className="text-sm font-bold text-ink mb-3">Related forms</h2>
                  <div className="flex flex-wrap gap-2">
                    {related.map((o) => (
                      <Link key={o.slug} href={`/ltb-forms/${o.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1.5 text-sm text-ink hover:border-brand hover:text-brand transition-colors">
                        <span className="font-bold">{o.code}</span>
                        <span className="text-muted text-xs">{o.name.length > 34 ? o.name.slice(0, 34) + "…" : o.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 text-center">
                <Link href="/ltb-forms" className="text-sm font-semibold text-brand hover:underline">← All LTB forms</Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
