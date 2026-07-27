import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, ChevronRight } from "lucide-react";

export const dynamic = "force-static";

const CONTACT_EMAIL = "jf@directroutedesign.com";

export const metadata: Metadata = {
  title: "Contact LeasePlain | LeasePlain",
  description:
    "Get in touch with LeasePlain. Questions or concerns about your analysis, your account, or the product — email us and we'll respond within one business day.",
  alternates: { canonical: "https://leaseplain.com/contact" },
  openGraph: {
    title: "Contact LeasePlain | LeasePlain",
    description: "Get in touch with LeasePlain. Questions or concerns about your analysis, your account, or the product — we're here to help.",
    url: "https://leaseplain.com/contact",
    type: "website",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://leaseplain.com/contact",
  "name": "Contact LeasePlain",
  "url": "https://leaseplain.com/contact",
  "description": "Get in touch with LeasePlain — questions or concerns about your analysis, account, or the product.",
  "contactOption": [
    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": CONTACT_EMAIL,
      "availableLanguage": "English",
    },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/contact",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema).replace(/</g, "\\u003c") }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema).replace(/</g, "\\u003c") }}
            />
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">Contact Us</h1>
            <p className="speakable-summary text-lg text-slate-600 max-w-xl leading-relaxed">
              Have a question or concern? We&apos;re a small team, we read every message, and we
              respond within one business day.
            </p>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-10">

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-8 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 mx-auto">
                <Mail className="w-6 h-6 text-blue-600" aria-hidden="true" />
              </div>
              <h2 className="font-semibold text-slate-900 mb-1 text-lg">Email us</h2>
              <p className="text-sm text-slate-500 mb-5 leading-relaxed max-w-md mx-auto">
                Questions, feedback, account or billing issues, privacy requests, or anything
                about a specific analysis — send it our way.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=LeasePlain%20enquiry`}
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
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
              <h2 className="font-semibold text-slate-900 mb-2">Privacy &amp; Legal</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                For privacy requests, data deletion, or legal inquiries, email{" "}
                <a href={`mailto:${CONTACT_EMAIL}?subject=Privacy%20request`} className="text-blue-600 hover:underline">
                  {CONTACT_EMAIL}
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
