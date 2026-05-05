import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText,
  ShieldCheck,
  Zap,
  AlertTriangle,
  HelpCircle,
  DollarSign,
  Lightbulb,
  ChevronRight,
  Star,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Plain-English Summary",
    description:
      "We translate dense legalese into clear, everyday language so you actually understand what you're agreeing to.",
  },
  {
    icon: DollarSign,
    title: "Key Financial Terms",
    description:
      "Rent, deposits, late fees, utilities, and hidden costs—surfaced clearly so there are no surprises.",
  },
  {
    icon: AlertTriangle,
    title: "Red Flag Detection",
    description:
      "Automatically spots clauses that are unusually restrictive, one-sided, or worth a second look.",
  },
  {
    icon: HelpCircle,
    title: "Unclear & Missing Terms",
    description:
      "Highlights vague language and important terms that should be in your lease but aren't.",
  },
  {
    icon: Lightbulb,
    title: "Questions to Ask",
    description:
      "Gives you a tailored list of questions to bring to your landlord before you sign anything.",
  },
  {
    icon: ShieldCheck,
    title: "Negotiation Suggestions",
    description:
      "Practical, tenant-friendly talking points to help you negotiate a fairer agreement.",
  },
];

const testimonials = [
  {
    quote:
      "I finally understood my lease before signing. It flagged a clause that could have cost me my entire security deposit.",
    name: "Maria T.",
    location: "Renter, Austin TX",
  },
  {
    quote:
      "Used LeasePlain on three apartments. Saved me hours of confusion and helped me negotiate lower fees.",
    name: "James K.",
    location: "Renter, Chicago IL",
  },
  {
    quote:
      "The red flags section caught a penalty clause my landlord quietly added. Total game changer.",
    name: "Priya N.",
    location: "Renter, New York NY",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-indigo-100">
          <Zap className="w-3.5 h-3.5" />
          AI-powered lease analysis — instant results
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 max-w-3xl leading-tight">
          Understand your lease{" "}
          <span className="text-indigo-600">before you sign</span>
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-xl">
          Paste or upload your residential lease and get a clear, plain-English
          breakdown in seconds. No law degree required.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/upload"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Analyze My Lease <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 font-semibold px-6 py-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
          >
            View Pricing
          </Link>
        </div>
        <p className="mt-4 text-xs text-slate-400">
          Not legal advice. For informational purposes only.
        </p>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            How it works
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">
            Three steps between you and a lease you actually understand.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Upload or paste",
                desc: "Drop in your PDF or paste your lease text directly into the app.",
              },
              {
                step: "2",
                title: "AI analyzes it",
                desc: "Our AI reads every clause and structures a plain-English report for you.",
              },
              {
                step: "3",
                title: "Review & act",
                desc: "See red flags, key costs, and negotiation tips—then sign with confidence.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 font-bold text-lg flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-900 text-lg">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            What you get
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">
            A structured report covering everything you need to feel confident
            about your lease.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            What renters say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-slate-400 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-indigo-600">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to read your lease like a pro?
          </h2>
          <p className="text-indigo-100 mb-8">
            Upload your lease now and get a full plain-English analysis in under
            a minute.
          </p>
          <Link
            href="/upload"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-8 py-3 rounded-xl hover:bg-indigo-50 transition-colors shadow-sm"
          >
            Get Started Free <ChevronRight className="w-4 h-4" />
          </Link>
          <p className="mt-4 text-indigo-200 text-xs">
            Not legal advice. For informational purposes only.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
