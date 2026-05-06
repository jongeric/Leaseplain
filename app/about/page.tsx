import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Zap, Users, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About LeasePlain – Plain-English Lease Analysis | LeasePlain",
  description:
    "LeasePlain was built to help tenants understand their leases before signing. Learn about our mission, what we do, and what we're not.",
  alternates: { canonical: "https://leaseplain.com/about" },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Tenant-first",
    description: "Everything we build is designed to help tenants make informed decisions — not to serve landlords, brokers, or any other party.",
  },
  {
    icon: Zap,
    title: "Honest about what AI can do",
    description: "We're clear that LeasePlain is not legal advice. AI is a powerful first step — and we're careful not to oversell what it can replace.",
  },
  {
    icon: Users,
    title: "Built for everyone",
    description: "Whether you're signing your first lease or your tenth, a newcomer to Canada or a longtime renter, lease language shouldn't be a barrier to understanding.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              About LeasePlain
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Leases are written by lawyers, for landlords. Most tenants sign them without fully
              understanding what they've agreed to. LeasePlain exists to change that.
            </p>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-10">

            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Why We Built This</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Residential leases in Canada can be 30–40 pages of dense legal language. For many
                tenants — especially first-time renters, newcomers, and people in a hurry — that
                language is nearly impossible to parse. The result is that people sign agreements
                they don't fully understand, with clauses that sometimes violate their rights.
              </p>
              <p className="text-slate-700 leading-relaxed">
                LeasePlain uses AI to do what it does best: read complex documents and explain them
                clearly. In under a minute, you get a plain-English summary of your entire lease —
                what it says, what it means, and what to ask your landlord before you sign.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What We Stand For</h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {values.map((value) => (
                  <div key={value.title} className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                      <value.icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2 text-sm">{value.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
              <h3 className="font-semibold text-amber-900 mb-2">What LeasePlain Is Not</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                LeasePlain is not a law firm and does not provide legal advice. Our analysis is for
                informational purposes only. It is not a substitute for consulting a licensed lawyer
                or paralegal, especially for complex situations, disputes, or high-stakes lease
                negotiations. We always encourage users to seek professional legal advice when their
                situation requires it.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Your Privacy</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                We take your privacy seriously. Lease documents uploaded to LeasePlain are processed
                in real time and immediately discarded. We do not store your lease, share it with
                third parties, or use it to train our models. For full details, see our{" "}
                <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-blue-600">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to understand your lease?</h2>
            <p className="text-blue-100 mb-8">Upload your lease and get a plain-English report in under a minute.</p>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Analyze My Lease
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
