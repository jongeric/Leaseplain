import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText, ShieldCheck, Zap, AlertTriangle, DollarSign,
  Lightbulb, ChevronRight, Star, CheckCircle, Lock, MapPin,
  Clock, Eye, Users, TrendingUp, XCircle, HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Lease Analyzer | Understand Your Lease in Plain English",
  description:
    "Upload your lease and get a simple explanation. Identify hidden clauses, risks, and key terms instantly.",
  keywords: [
    "analyze lease agreement", "lease agreement explained", "AI lease review",
    "tenant rights Ontario", "lease clause explained", "how to read a lease",
    "residential lease analysis", "rental agreement review Canada",
  ],
  openGraph: {
    title: "Lease Analyzer | Understand Your Lease in Plain English",
    description:
      "Upload your lease and get a simple explanation. Identify hidden clauses, risks, and key terms instantly.",
    type: "website",
    url: "https://leaseplain.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lease Analyzer | Understand Your Lease in Plain English",
    description: "Upload your lease and get a simple explanation. Identify hidden clauses, risks, and key terms instantly.",
  },
  alternates: { canonical: "https://leaseplain.com" },
};

const faqs = [
  {
    q: "What is a lease agreement?",
    a: "A lease agreement is a legally binding contract between a landlord and tenant that outlines the terms of renting a property. It covers rent, duration, rules, and both parties' rights and responsibilities.",
  },
  {
    q: "What should I look for before signing a lease?",
    a: "Look for the rent amount and due date, security deposit terms, lease duration, early termination penalties, maintenance responsibilities, pet policies, and any clauses about rent increases. Red flags include vague language, one-sided penalties, and missing move-in inspection requirements.",
  },
  {
    q: "How does LeasePlain analyze my lease?",
    a: "LeasePlain uses AI to read every clause in your lease and produce a plain-English breakdown. It identifies key financial terms, red flags, unclear clauses, and gives you specific questions to ask your landlord before signing.",
  },
  {
    q: "Is my lease document private?",
    a: "Yes. Your document is processed securely and never stored on our servers. We analyze it in real time and discard it immediately after generating your report.",
  },
  {
    q: "Can LeasePlain replace a lawyer?",
    a: "No. LeasePlain is an informational tool, not legal advice. It helps you understand your lease faster and identify areas worth discussing with a legal professional, but it does not constitute legal counsel.",
  },
  {
    q: "What types of leases can I analyze?",
    a: "LeasePlain works with standard residential lease agreements including fixed-term leases, month-to-month agreements, and sublease agreements. It currently supports PDF uploads and plain-text paste.",
  },
  {
    q: "How long does it take to get my analysis?",
    a: "Most leases are fully analyzed in under 30 seconds. Longer documents may take slightly more time, but you will typically have your report in under a minute.",
  },
  {
    q: "What is a security deposit clause?",
    a: "A security deposit clause outlines how much you must pay upfront, the conditions under which it can be withheld, and the timeframe for its return. In Ontario, the maximum security deposit is one month's rent and must be returned within 72 hours after move-out unless there is damage.",
  },
  {
    q: "What is an early termination clause?",
    a: "An early termination clause specifies the penalties and notice requirements if you need to end your lease before the agreed end date. Some leases require you to pay 2–3 months of rent as a penalty, which LeasePlain will flag clearly.",
  },
  {
    q: "What is a rent increase clause?",
    a: "A rent increase clause defines when and by how much your landlord can raise your rent. In Ontario, rent increases are governed by the Rent Increase Guideline, and LeasePlain will highlight any clauses that appear to exceed legal limits.",
  },
  {
    q: "What are common red flags in a lease?",
    a: "Common red flags include: excessive security deposits, no move-in inspection clause, vague maintenance responsibilities, unreasonable early termination penalties, clauses allowing landlord entry without notice, and terms that waive your statutory rights as a tenant.",
  },
  {
    q: "What does 'joint and several liability' mean in a lease?",
    a: "Joint and several liability means that if you are co-signing a lease with others, each tenant is individually responsible for the entire rent — not just their share. If a roommate stops paying, the landlord can pursue you for the full amount.",
  },
  {
    q: "Can a landlord change the terms of my lease?",
    a: "Generally no — once a lease is signed, the terms are fixed for its duration. However, landlords can propose changes at renewal. Always review any addendums or renewal agreements carefully before signing.",
  },
  {
    q: "What is a subletting clause?",
    a: "A subletting clause defines whether you can rent your unit to someone else during your lease. In Ontario, tenants generally have the right to sublet with the landlord's consent, and a landlord cannot unreasonably withhold that consent.",
  },
  {
    q: "What is a lease renewal clause?",
    a: "A lease renewal clause specifies the process and terms for continuing your tenancy after the original lease expires. Pay attention to whether it automatically converts to month-to-month or requires a signed renewal.",
  },
  {
    q: "What are tenant rights in Ontario?",
    a: "In Ontario, tenant rights are protected under the Residential Tenancies Act. Key rights include: rent increase limits, right to a written lease, protection from illegal eviction, and the right to a safe and habitable unit. LeasePlain can flag clauses in your lease that may conflict with these rights.",
  },
  {
    q: "What is a 'last month's rent' deposit?",
    a: "In Ontario, landlords are permitted to collect a last month's rent deposit equal to one month's rent. This is held and applied to your final month — it is not a damage deposit and cannot be used for repairs.",
  },
  {
    q: "What happens if a clause in my lease violates tenant law?",
    a: "Illegal clauses are generally unenforceable, even if you signed the lease. For example, a clause waiving your right to repairs is void in Ontario. LeasePlain will flag potentially illegal clauses, but you should consult a tenant rights organization to confirm.",
  },
  {
    q: "Should I negotiate my lease?",
    a: "Yes. Many lease terms are negotiable, especially in a renter's market. LeasePlain provides specific negotiation suggestions based on your lease, including talking points around deposits, early termination penalties, and maintenance responsibilities.",
  },
  {
    q: "What is a standard lease in Ontario?",
    a: "Ontario requires most landlords to use the government's Standard Lease form. If your landlord uses a non-standard agreement, some clauses may be unenforceable. LeasePlain helps you identify terms that deviate from the Ontario Standard Lease.",
  },
  {
    q: "What formats does LeasePlain support?",
    a: "LeasePlain supports PDF uploads and direct text paste. Most leases shared digitally by landlords are compatible. Scanned image-only PDFs may have reduced accuracy.",
  },
  {
    q: "How much does LeasePlain cost?",
    a: "LeasePlain offers a free analysis for first-time users. Pro and Team plans are available for agents, property managers, and frequent renters who need unlimited analyses and advanced features.",
  },
];

const redFlags = [
  { icon: XCircle, flag: "No move-in inspection clause", why: "Leaves you liable for pre-existing damage you didn't cause." },
  { icon: XCircle, flag: "Excessive early termination penalty", why: "Some leases charge 3+ months rent to break early — LeasePlain surfaces the exact amount." },
  { icon: XCircle, flag: "Vague maintenance responsibilities", why: "Unclear wording can make you responsible for repairs your landlord should legally cover." },
  { icon: XCircle, flag: "No notice required for landlord entry", why: "In Ontario, landlords must give 24 hours written notice before entering. Any clause waiving this is illegal." },
  { icon: XCircle, flag: "Automatic rent increases above guideline", why: "Ontario caps annual rent increases. Any clause promising higher increases may be unenforceable." },
  { icon: XCircle, flag: "Clause waiving tenant rights", why: "Tenants cannot legally sign away rights protected under the Residential Tenancies Act — but many leases try anyway." },
];

const analyzeFeatures = [
  { icon: DollarSign, title: "Rent & Financial Terms", bullets: ["Base rent and due date", "Late payment penalties", "Utility responsibilities", "Parking and storage fees", "Security and last-month's deposit"] },
  { icon: AlertTriangle, title: "Red Flags & Risks", bullets: ["Illegal or unenforceable clauses", "One-sided penalty structures", "Entry-without-notice provisions", "Clauses waiving your rights", "Unusual restrictions on guests or subletting"] },
  { icon: FileText, title: "Key Dates & Durations", bullets: ["Lease start and end date", "Notice period to vacate", "Renewal terms and conditions", "Move-in inspection deadlines", "Rent increase schedule"] },
  { icon: HelpCircle, title: "Unclear & Missing Terms", bullets: ["Vague maintenance language", "Undefined shared costs", "Missing pet policy details", "Ambiguous repair timelines", "Gaps in dispute resolution process"] },
  { icon: Lightbulb, title: "Negotiation Opportunities", bullets: ["Deposit reduction talking points", "Early termination flexibility", "Repair and maintenance commitments", "Lease break conditions", "Subletting permission language"] },
  { icon: ShieldCheck, title: "Legal Compliance Check", bullets: ["Ontario Standard Lease alignment", "Rent Increase Guideline compliance", "Entry notice requirements", "Deposit limits under provincial law", "Repair obligation standards"] },
];

const howToSteps = [
  { step: "1", title: "Upload Your Lease", desc: "Drop in your PDF or paste your lease text. Supports all standard Canadian residential lease formats." },
  { step: "2", title: "AI Reads Every Clause", desc: "Our AI analyzes every paragraph, identifies key terms, flags risks, and structures a full plain-English report." },
  { step: "3", title: "Review & Sign with Confidence", desc: "See exactly what you're agreeing to — red flags, costs, and negotiation tips — before you put pen to paper." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Read a Lease Agreement",
  description: "A step-by-step guide to understanding your residential lease before signing.",
  step: [
    { "@type": "HowToStep", name: "Read the entire lease", text: "Never sign a lease you haven't read in full. Set aside at least 30 minutes to review every page." },
    { "@type": "HowToStep", name: "Identify all financial obligations", text: "Note rent amount, due date, late fees, deposits, utilities, and any additional charges." },
    { "@type": "HowToStep", name: "Check the lease duration and renewal terms", text: "Understand when the lease ends and what happens if you want to stay or leave." },
    { "@type": "HowToStep", name: "Look for red flag clauses", text: "Flag any clause that seems one-sided, vague, or that waives a right you're entitled to by law." },
    { "@type": "HowToStep", name: "Use LeasePlain to analyze your lease", text: "Upload your lease to LeasePlain for an instant AI-powered plain-English breakdown of every clause." },
    { "@type": "HowToStep", name: "Negotiate before signing", text: "Use the negotiation suggestions from your LeasePlain report to discuss improvements with your landlord." },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LeasePlain",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "AI-powered lease analysis tool that explains residential lease agreements in plain English.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  url: "https://leaseplain.com",
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <div className="flex flex-col min-h-full">
        <Navbar />

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32 bg-gradient-to-b from-slate-50 to-white">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-indigo-100">
            <Zap className="w-3.5 h-3.5" />
            AI lease review — results in under 30 seconds
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 max-w-3xl leading-tight">
            Understand Your Lease{" "}
            <span className="text-indigo-600">Before You Sign It</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
            Upload your lease and get a clear, plain-English breakdown of every clause, risk, and hidden term — in seconds.
          </p>

          <p className="mt-3 text-sm font-medium text-amber-700 bg-amber-50 border border-amber-100 px-4 py-2 rounded-full">
            Most renters sign leases they don&apos;t fully understand. Don&apos;t be one of them.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/upload"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-indigo-700 transition-colors shadow-sm text-base"
            >
              Upload Your Lease <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/analysis/demo"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors text-base"
            >
              See Example Breakdown
            </Link>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-center text-xs text-slate-400">
            <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> Your document is private and never stored</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Designed for renters in Canada</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" /> No legal knowledge required</span>
          </div>
        </section>

        {/* ── TRUST STRIP ──────────────────────────────────────────────────── */}
        <section className="py-8 px-4 bg-white border-y border-slate-100">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-4">
            {[
              { icon: Users, label: "Trusted by thousands of Canadian renters" },
              { icon: Clock, label: "Analysis in under 30 seconds" },
              { icon: ShieldCheck, label: "Private & secure — document never stored" },
              { icon: Eye, label: "Plain English, zero legal jargon" },
              { icon: TrendingUp, label: "AI trained on Canadian residential leases" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-slate-500 text-sm">
                <item.icon className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white" id="how-it-works">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-3">How It Works</h2>
            <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">
              Three steps between you and a lease you actually understand. Takes less than 30 seconds.
            </p>
            <div className="grid md:grid-cols-3 gap-10">
              {howToSteps.map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-indigo-600 text-white font-bold text-xl flex items-center justify-center shadow-md">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-slate-900 text-lg">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Link href="/upload" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-indigo-700 transition-colors shadow-sm">
                Analyze My Lease Free <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHAT WE ANALYZE ──────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-slate-50" id="features">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-3">What We Analyze</h2>
            <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">
              A structured report covering every section of your residential lease agreement — explained in plain English.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {analyzeFeatures.map((f) => (
                <div key={f.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-3">{f.title}</h3>
                  <ul className="space-y-1.5">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-slate-500 text-sm">
                        <CheckCircle className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RED FLAGS ────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white" id="red-flags">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Common Lease Red Flags</h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                These clauses appear in thousands of Canadian leases every year. Most renters sign without noticing them.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {redFlags.map((r) => (
                <div key={r.flag} className="flex gap-4 p-5 bg-red-50 border border-red-100 rounded-xl">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{r.flag}</p>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">{r.why}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-slate-500 text-sm">
              LeasePlain flags all of these automatically.{" "}
              <Link href="/upload" className="text-indigo-600 font-semibold hover:underline">
                Analyze your lease now →
              </Link>
            </p>
          </div>
        </section>

        {/* ── MID-PAGE CTA ─────────────────────────────────────────────────── */}
        <section className="py-14 px-4 bg-indigo-600">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-indigo-200 text-sm mb-2">Takes less than 30 seconds</p>
            <h2 className="text-2xl font-bold text-white mb-4">
              Don&apos;t sign until you understand every line.
            </h2>
            <Link href="/upload" className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-7 py-3 rounded-xl hover:bg-indigo-50 transition-colors shadow-sm">
              Upload Your Lease Free <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ── EXAMPLE OUTPUT ───────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-slate-50" id="example">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-3">Example Analysis Output</h2>
            <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">
              Here&apos;s what your plain-English lease report looks like. Every clause explained, every risk highlighted.
            </p>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-indigo-600 px-6 py-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-white" />
                <span className="text-white font-semibold text-sm">Sample Lease Report — 123 Main St, Toronto ON</span>
              </div>
              <div className="p-6 space-y-5">
                <div className="p-4 bg-green-50 border border-green-100 rounded-xl">
                  <p className="text-green-800 font-semibold text-sm mb-1">✓ Rent &amp; Financials</p>
                  <p className="text-green-700 text-sm">Rent: $2,200/month due on the 1st. Late fee: $50 after 5 days. Security deposit: $2,200 (1 month — within Ontario legal limit). Last month&apos;s rent: $2,200 collected upfront.</p>
                </div>
                <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
                  <p className="text-red-800 font-semibold text-sm mb-1">⚠ Red Flag Detected — Early Termination Penalty</p>
                  <p className="text-red-700 text-sm">Clause 14b requires you to pay 3 months&apos; rent ($6,600) if you end the lease early. This is above the Ontario standard. Consider negotiating this down to 1–2 months before signing.</p>
                </div>
                <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl">
                  <p className="text-amber-800 font-semibold text-sm mb-1">⚡ Unclear Term — Maintenance Responsibilities</p>
                  <p className="text-amber-700 text-sm">Clause 9 states "tenant is responsible for general upkeep" without defining what this includes. Ask your landlord to specify which repairs are tenant vs. landlord responsibility before signing.</p>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                  <p className="text-blue-800 font-semibold text-sm mb-1">💬 Suggested Question to Ask</p>
                  <p className="text-blue-700 text-sm">&ldquo;Can we define in writing which repairs I am responsible for, and what the landlord will handle within what timeframe?&rdquo;</p>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-slate-100 text-center">
                <Link href="/upload" className="text-indigo-600 font-semibold text-sm hover:underline">
                  Get this analysis for your lease →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── INTERNAL LINKS ───────────────────────────────────────────────── */}
        <section className="py-12 px-4 bg-white border-y border-slate-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-lg font-semibold text-slate-900 mb-6 text-center">Lease Clause Guides</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { href: "/lease-clause/security-deposit", label: "Security Deposit Clause" },
                { href: "/lease-clause/early-termination", label: "Early Termination Clause" },
                { href: "/lease-clause/rent-increase", label: "Rent Increase Clause" },
                { href: "/tenant-rights-ontario", label: "Tenant Rights in Ontario" },
                { href: "/how-to-read-a-lease", label: "How to Read a Lease" },
                { href: "/lease-clause/subletting", label: "Subletting Clause" },
                { href: "/lease-clause/maintenance", label: "Maintenance & Repairs" },
                { href: "/lease-clause/pet-policy", label: "Pet Policy Clause" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg border border-slate-100 text-slate-600 text-sm hover:border-indigo-200 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-slate-50" id="faq">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-center mb-12">
              Everything you need to know about lease agreements and how LeasePlain works.
            </p>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-slate-900 text-sm list-none">
                    {f.q}
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-3">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">What Renters Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { quote: "I finally understood my lease before signing. It flagged a clause that could have cost me my entire security deposit.", name: "Maria T.", location: "Renter, Toronto ON" },
                { quote: "Used LeasePlain on three apartments. Saved me hours of confusion and helped me negotiate lower fees each time.", name: "James K.", location: "Renter, Vancouver BC" },
                { quote: "The red flags section caught a penalty clause my landlord quietly added. Total game changer.", name: "Priya N.", location: "Renter, Ottawa ON" },
              ].map((t) => (
                <div key={t.name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
        <section className="py-24 px-4 bg-gradient-to-br from-indigo-600 to-indigo-800">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-indigo-300 text-sm font-medium mb-3">Takes less than 30 seconds · Free to start</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Understand Every Line of Your Lease Before You Sign
            </h2>
            <p className="text-indigo-200 mb-8 max-w-lg mx-auto">
              Don&apos;t let a confusing clause cost you thousands. Get your plain-English lease analysis now — no legal knowledge required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/upload" className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-indigo-50 transition-colors shadow-sm text-base">
                Upload Your Lease <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center gap-2 bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-xl border border-indigo-500 hover:bg-indigo-600 transition-colors text-base">
                View Pricing
              </Link>
            </div>
            <p className="mt-5 text-indigo-300 text-xs">
              Not legal advice. For informational purposes only.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
