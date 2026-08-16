import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import GetListedForm from "@/components/GetListedForm";
import { ChevronRight, Scale, MapPin, Phone, Info } from "lucide-react";
import { DIRECTORY_CITIES, HELP_OPTIONS } from "@/lib/legalHelp";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Find a Tenant Lawyer or Paralegal in Ontario | LeasePlain",
  description:
    "How to get tenant legal help in Ontario — community legal clinics, tenant duty counsel, licensed paralegals, and lawyers. Find help by city, and see who can represent you at the Landlord and Tenant Board.",
  alternates: { canonical: "https://leaseplain.com/tenant-lawyer" },
  openGraph: {
    title: "Find a Tenant Lawyer or Paralegal in Ontario | LeasePlain",
    description:
      "Community legal clinics, duty counsel, licensed paralegals, and lawyers — how to get tenant legal help in Ontario, by city.",
    url: "https://leaseplain.com/tenant-lawyer",
    type: "website",
    images: [{ url: "https://leaseplain.com/og/tenant-lawyer.png", width: 1200, height: 630 }],
  },
};

export default function TenantLawyerHubPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tenant Legal Help by City — Ontario",
    url: "https://leaseplain.com/tenant-lawyer",
    itemListElement: DIRECTORY_CITIES.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Tenant Lawyers & Paralegals in ${c.name}`,
      url: `https://leaseplain.com/tenant-lawyer/${c.slug}`,
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
              <BreadcrumbNav
                className="mb-4"
                items={[
                  { label: "Home", href: "/" },
                  { label: "Find a Tenant Lawyer" },
                ]}
              />
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">Find a Tenant Lawyer or Paralegal in Ontario</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                Facing a rent increase, an eviction notice, or a landlord who won&apos;t make repairs?
                You have more options than you might think — and some of the best ones are free. Here&apos;s
                how tenant legal help works in Ontario, and how to find it in your city.
              </p>
            </div>
          </section>

          {/* Help ladder */}
          <section className="py-14 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Your options, from free to full representation</h2>
              <p className="text-slate-600 mb-8 max-w-2xl">
                In Ontario, you don&apos;t always need to hire a lawyer. Start at the top of this list —
                free and lower-cost help can resolve most tenant issues.
              </p>
              <div className="space-y-4">
                {HELP_OPTIONS.map((opt, i) => (
                  <div key={opt.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-700 font-bold flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                          <h3 className="text-lg font-bold text-slate-900">{opt.title}</h3>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{opt.cost}</span>
                        </div>
                        <p className="text-sm font-medium text-indigo-700 mb-2">{opt.who}</p>
                        <p className="text-slate-700 text-sm leading-relaxed">{opt.detail}</p>
                        {opt.contact && (
                          <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                            <Phone className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                            {opt.contact}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-start gap-3 rounded-xl bg-blue-50 border border-blue-100 p-4">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-blue-900">
                  LeasePlain is not a law firm and does not provide legal advice. This directory helps you
                  find qualified help. In an emergency, or if you&apos;ve received an eviction notice with a
                  deadline, act quickly — many free services are time-sensitive.
                </p>
              </div>
            </div>
          </section>

          {/* City grid */}
          <section className="py-8 px-4 bg-slate-50 border-y border-slate-100">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Find tenant legal help by city</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {DIRECTORY_CITIES.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/tenant-lawyer/${c.slug}`}
                    className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-indigo-600" aria-hidden="true" />
                      <span className="font-bold text-slate-900 group-hover:text-indigo-700">{c.name}</span>
                    </div>
                    <p className="text-xs text-slate-500">{c.region}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Get listed */}
          <section className="py-14 px-4">
            <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Are you a paralegal or tenant lawyer?</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  LeasePlain sends a steady stream of Ontario tenants researching their rights. Get listed in
                  our directory so renters in your area can find you when they need representation at the LTB.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" aria-hidden="true" /> Reach high-intent tenants actively looking for help.</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" aria-hidden="true" /> We verify LSO licensing before any listing goes live.</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" aria-hidden="true" /> Free during launch.</li>
                </ul>
              </div>
              <GetListedForm />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
