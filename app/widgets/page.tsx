import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Code2, Check } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Free Embeddable Tenant Tools & Widgets | LeasePlain",
  description:
    "Embed LeasePlain's free rent-increase and lease tools on your website. Copy-paste widgets for tenant-resource pages, property managers, student housing, and legal-aid sites — always up to date, no cost.",
  alternates: { canonical: "https://leaseplain.com/widgets" },
  openGraph: {
    title: "Free Embeddable Tenant Tools & Widgets | LeasePlain",
    description:
      "Copy-paste free rent-increase and lease widgets for your website. Always up to date, no cost.",
    url: "https://leaseplain.com/widgets",
    type: "website",
  },
};

const widgets = [
  {
    name: "Rent Increase Calculator",
    desc: "Lets your visitors check whether a proposed rent increase is within their province's legal limit. Covers all 10 Canadian provinces and stays current with each year's guideline.",
    src: "https://leaseplain.com/embed/rent-increase-calculator",
    height: 520,
  },
  {
    name: "Lease Clause Explainer",
    desc: "Visitors paste a confusing lease clause and get a plain-English explanation. Great for renter-education and legal-aid pages.",
    src: "https://leaseplain.com/embed/clause-explainer",
    height: 560,
  },
];

const snippet = (src: string, height: number, title: string) =>
  `<iframe src="${src}" width="100%" height="${height}" style="border:0;max-width:480px"\n  loading="lazy" title="${title} by LeasePlain"></iframe>`;

export default function WidgetsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://leaseplain.com" },
          { name: "Widgets", href: "https://leaseplain.com/widgets" },
        ]}
      />
      <div className="flex flex-col min-h-full">
        <Navbar />
        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
                <Link href="/" className="hover:underline">Home</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                <span>Widgets</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">Free Embeddable Tenant Tools</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Run a tenant-resource, property-management, student-housing, or legal-aid site?
                Embed LeasePlain&apos;s free tools on your pages in one line. They stay current with
                provincial law automatically, cost nothing, and give your visitors real answers.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {widgets.map((w) => (
                <div key={w.src} className="border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-slate-900 mb-2">{w.name}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{w.desc}</p>

                  <div className="grid md:grid-cols-2 gap-6 items-start">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Live preview</p>
                      <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
                        <iframe
                          src={w.src}
                          width="100%"
                          height={w.height}
                          style={{ border: 0 }}
                          loading="lazy"
                          title={`${w.name} by LeasePlain`}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Copy this embed code</p>
                      <pre className="bg-slate-900 text-slate-100 text-xs rounded-xl p-4 overflow-x-auto leading-relaxed">
{snippet(w.src, w.height, w.name)}
                      </pre>
                      <ul className="mt-4 space-y-1.5">
                        {["Always up to date — no maintenance on your end", "No cost, no signup, no tracking of your visitors", "Responsive and mobile-friendly"].map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 text-center">
                <p className="text-slate-700 text-sm">
                  Want a widget we don&apos;t offer yet, or a co-branded version for your organization?{" "}
                  <Link href="/partners" className="text-indigo-700 font-semibold hover:underline">Partner with us</Link>.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
