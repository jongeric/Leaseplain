import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { FileText, ChevronRight, Info, Scale } from "lucide-react";
import { LTB_FORMS, GROUP_ORDER, GROUP_LABEL } from "@/lib/ltbForms";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Ontario LTB Forms Explained: Every N & T Form in Plain English | LeasePlain",
  description:
    "A plain-English guide to every Ontario Landlord and Tenant Board form — N1, N4, N5, N12, N13, T1, T2, T5, T6, N9, and more. What each form means, and what to do if you receive one.",
  alternates: { canonical: "https://leaseplain.com/ltb-forms" },
  openGraph: {
    title: "Ontario LTB Forms Explained: Every N & T Form in Plain English | LeasePlain",
    description:
      "What every Ontario LTB form means — the notices you receive and the applications you can file — in plain English.",
    url: "https://leaseplain.com/ltb-forms",
    type: "website",
    images: [{ url: "https://leaseplain.com/og/ltb-forms.png", width: 1200, height: 630 }],
  },
  keywords: ["ltb forms", "ontario ltb forms", "N12 form", "T2 application", "landlord and tenant board forms"],
};

export default function LTBFormsHubPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ontario LTB Forms — LeasePlain",
    url: "https://leaseplain.com/ltb-forms",
    itemListElement: LTB_FORMS.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${f.code} — ${f.name}`,
      url: `https://leaseplain.com/ltb-forms/${f.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c") }} />
      <div className="flex flex-col min-h-full">
        <Navbar />
        <main>
          <section className="bg-surface-2 border-b border-line py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <BreadcrumbNav className="mb-4" items={[{ label: "Home", href: "/" }, { label: "LTB Forms" }]} />
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-7 h-7 text-brand" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-ink">Ontario LTB Forms, Explained</h1>
              </div>
              <p className="text-lg text-muted max-w-2xl leading-relaxed speakable-summary">
                Got a letter from your landlord with a code like N4, N12, or N13 — or need to file
                something yourself? Here&apos;s every Ontario Landlord and Tenant Board form in plain
                English: what it means, and what to do next.
              </p>
            </div>
          </section>

          <section className="py-12 px-4 bg-surface">
            <div className="max-w-4xl mx-auto space-y-10">
              <div className="flex items-start gap-3 rounded-xl bg-brand-soft border border-line p-4">
                <Info className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-ink">
                  These are plain-English explanations, not legal advice. Get the official forms and the
                  latest details from Tribunals Ontario, and consider free legal help — see our{" "}
                  <Link href="/tenant-lawyer" className="text-brand font-semibold hover:underline">tenant legal help directory</Link>.
                </p>
              </div>

              {GROUP_ORDER.map((group) => {
                const forms = LTB_FORMS.filter((f) => f.group === group);
                if (forms.length === 0) return null;
                return (
                  <div key={group}>
                    <h2 className="text-sm font-bold uppercase tracking-wide text-brand mb-3">{GROUP_LABEL[group]}</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {forms.map((f) => (
                        <Link
                          key={f.slug}
                          href={`/ltb-forms/${f.slug}`}
                          className="group rounded-2xl border border-line bg-card p-5 hover:border-brand hover:shadow-md transition-all"
                        >
                          <div className="flex items-center gap-3 mb-1.5">
                            <span className="inline-flex items-center justify-center min-w-11 h-7 px-2 rounded-lg bg-brand text-brand-fg text-sm font-bold">{f.code}</span>
                            <span className="font-semibold text-ink text-sm group-hover:text-brand leading-snug">{f.name}</span>
                          </div>
                          <p className="text-sm text-muted leading-relaxed">{f.purpose}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}

              <div className="rounded-2xl bg-surface-2 border border-line p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Scale className="w-6 h-6 text-brand flex-shrink-0" aria-hidden="true" />
                  <p className="text-sm text-muted">
                    <span className="font-semibold text-ink">Facing a hearing?</span> A licensed paralegal
                    or lawyer can represent you at the LTB — often affordably.
                  </p>
                </div>
                <Link href="/tenant-lawyer" className="inline-flex items-center gap-2 bg-brand text-brand-fg font-semibold px-5 py-2.5 rounded-xl hover:bg-brand-hover transition-colors text-sm whitespace-nowrap">
                  Find help <ChevronRight className="w-4 h-4" aria-hidden="true" />
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
