import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, HelpCircle, ChevronRight } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contact LeasePlain | LeasePlain",
  description:
    "Get in touch with LeasePlain. Questions about your analysis, your account, or the product — we're here to help.",
  alternates: { canonical: "https://leaseplain.com/contact" },
};

const contactOptions = [
  {
    icon: Mail,
    title: "General Inquiries",
    description: "Questions about LeasePlain, the product, or how it works.",
    contact: "hello@leaseplain.com",
  },
  {
    icon: HelpCircle,
    title: "Support",
    description: "Issues with your account, billing, or a specific analysis.",
    contact: "support@leaseplain.com",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">Contact Us</h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              We're a small team. We read every message and respond within one business day.
            </p>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-10">

            <div className="grid sm:grid-cols-2 gap-5">
              {contactOptions.map((opt) => (
                <div key={opt.title} className="bg-slate-50 border border-slate-100 rounded-xl p-6">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <opt.icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  </div>
                  <h2 className="font-semibold text-slate-900 mb-1">{opt.title}</h2>
                  <p className="text-sm text-slate-500 mb-3 leading-relaxed">{opt.description}</p>
                  <a href={`mailto:${opt.contact}`} className="text-sm font-medium text-blue-600 hover:underline">
                    {opt.contact}
                  </a>
                </div>
              ))}
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
              <h2 className="font-semibold text-slate-900 mb-4">Before You Reach Out</h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                You might find your answer faster in one of these places:
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  { label: "Frequently Asked Questions", href: "/faq" },
                  { label: "How LeasePlain Works", href: "/how-it-works" },
                  { label: "Pricing & Plans", href: "/pricing" },
                  { label: "Legal Disclaimer", href: "/disclaimer" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                      <ChevronRight className="w-3 h-3" aria-hidden="true" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
              <h2 className="font-semibold text-slate-900 mb-2">Legal & Compliance</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                For privacy requests, data deletion, or legal inquiries, please email{" "}
                <a href="mailto:legal@leaseplain.com" className="text-blue-600 hover:underline">
                  legal@leaseplain.com
                </a>
                . We respond to verified privacy requests within 30 days.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
