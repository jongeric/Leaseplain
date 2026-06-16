import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, ChevronRight, Upload } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Review by Province & City | LeasePlain",
  description:
    "Get your lease reviewed against the tenancy laws that apply where you live. Province and city-specific lease review for Ontario, Toronto, British Columbia, Vancouver, Alberta, and Quebec.",
  alternates: { canonical: "https://leaseplain.com/lease-review" },
  keywords: ["lease review Canada", "review my lease", "Ontario lease review", "Toronto lease review", "Vancouver lease review", "Alberta lease review", "Quebec lease review"],
  openGraph: {
    title: "Lease Review by Province & City | LeasePlain",
    description: "Get your lease reviewed against the tenancy laws that apply where you live.",
    url: "https://leaseplain.com/lease-review",
    type: "website",
  },
};

const locations = [
  { name: "Ontario", href: "/lease-review/ontario", desc: "Checked against the Residential Tenancies Act, 2006." },
  { name: "Toronto", href: "/lease-review/toronto", desc: "Ontario RTA plus Toronto-specific rental market context." },
  { name: "British Columbia", href: "/lease-review/vancouver", desc: "Checked against the BC Residential Tenancy Act." },
  { name: "Alberta", href: "/lease-review/alberta", desc: "Checked against the Alberta Residential Tenancies Act." },
  { name: "Quebec", href: "/lease-review/quebec", desc: "Checked against the Civil Code of Québec and TAL rules." },
];

export default function LeaseReviewHubPage() {
  return (
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Lease Review", href: "https://leaseplain.com/lease-review" },
      ]} />
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Review by Province &amp; City
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Tenancy law is different everywhere in Canada. Pick where your rental is located to see what
              LeasePlain checks for in that province before you sign.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-5">
            {locations.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex items-start gap-4"
              >
                <MapPin className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <h2 className="font-semibold text-slate-900 mb-1">{l.name} Lease Review</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{l.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-700 transition-colors shadow-sm text-sm"
            >
              <Upload className="w-4 h-4" aria-hidden="true" />
              Analyze My Lease
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
