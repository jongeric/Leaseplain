import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerForm from "@/components/PartnerForm";
import { ChevronRight, Handshake, Code2, BookOpen, Users } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Partner With LeasePlain | Free Tenant Tools for Your Organization",
  description:
    "Legal-aid clinics, universities, property managers, and tenant advocates: embed LeasePlain's free, always-current rent and lease tools on your site, or partner with us. Get in touch.",
  alternates: { canonical: "https://leaseplain.com/partners" },
  openGraph: {
    title: "Partner With LeasePlain | Free Tenant Tools for Your Organization",
    description:
      "Embed our free, always-current rent and lease tools on your site, or partner with us on tenant-education content.",
    url: "https://leaseplain.com/partners",
    type: "website",
  },
};

const audiences = [
  { icon: BookOpen, title: "Legal-aid & tenant advocates", desc: "Give the renters you serve instant, accurate answers on rent increases and deposits." },
  { icon: Users, title: "Universities & student housing", desc: "Help first-time and international-student renters understand Canadian tenancy law." },
  { icon: Code2, title: "Property managers & PropTech", desc: "Add a plain-English lease and rent-check tool to your resident portal." },
  { icon: Handshake, title: "Content & media partners", desc: "Cite our jurisdiction-specific data, or collaborate on tenant-education guides." },
];

export default function PartnersPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://leaseplain.com" },
          { name: "Partners", href: "https://leaseplain.com/partners" },
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
                <span>Partners</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Handshake className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">Partner With LeasePlain</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                We build free, plain-English tenant tools that stay current with provincial law.
                If you serve renters, you can put them to work on your own site — no cost, no
                catch. Tell us what you need and we&apos;ll help you set it up.
              </p>
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-5">Who we work with</h2>
                <div className="space-y-4">
                  {audiences.map((a) => (
                    <div key={a.title} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                        <a.icon className="w-5 h-5 text-indigo-600" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{a.title}</p>
                        <p className="text-slate-600 text-sm leading-relaxed">{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-xl bg-slate-50 border border-slate-100 p-5">
                  <p className="text-sm text-slate-600">
                    Ready to grab a widget right now? See live previews and copy-paste embed codes on the{" "}
                    <Link href="/widgets" className="text-indigo-700 font-semibold hover:underline">widgets page</Link>.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-5">Get in touch</h2>
                <PartnerForm />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
