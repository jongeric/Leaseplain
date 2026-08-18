import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import {
  TrendingUp, DollarSign, Clock, Home, FileX, Shield,
  HelpCircle, BookOpen, Search, ChevronRight,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Free Tenant Tools for Canadian Renters | LeasePlain",
  description:
    "Free interactive tools for Canadian renters — rent increase calculator, notice period calculator, lease break estimator, eviction checker, deposit calculator, and more.",
  alternates: { canonical: "https://leaseplain.com/tools" },
  openGraph: {
    title: "Free Tenant Tools for Canadian Renters | LeasePlain",
    description: "9 free calculators and tools for Canadian tenants — know your rights in seconds.",
    url: "https://leaseplain.com/tools",
  },
};

const tools = [
  {
    href: "/tools/rent-increase-calculator",
    icon: TrendingUp,
    color: "indigo",
    title: "Rent Increase Calculator",
    description: "Check if your landlord's proposed rent increase is within the legal limit for your province.",
  },
  {
    href: "/tools/deposit-calculator",
    icon: DollarSign,
    color: "green",
    title: "Security Deposit Return Calculator",
    description: "Find out how much of your deposit you should get back and your landlord's legal deadline.",
  },
  {
    href: "/tools/notice-period-calculator",
    icon: Clock,
    color: "blue",
    title: "Notice Period Calculator",
    description: "Find out exactly how much notice is required for rent increases, evictions, entry, and more.",
  },
  {
    href: "/tools/move-in-cost-calculator",
    icon: Home,
    color: "emerald",
    title: "Move-In Cost Calculator",
    description: "Calculate your total upfront rental costs including deposit, first month, and pet deposit by province.",
  },
  {
    href: "/tools/lease-break-calculator",
    icon: FileX,
    color: "amber",
    title: "Lease Break Cost Estimator",
    description: "Estimate your financial exposure if you need to break your lease early — province by province.",
  },
  {
    href: "/tools/eviction-notice-checker",
    icon: Shield,
    color: "red",
    title: "Eviction Notice Validity Checker",
    description: "Enter your province, notice type, and days given to find out if an eviction notice is legally valid.",
  },
  {
    href: "/tools/clause-checker",
    icon: Search,
    color: "violet",
    title: "Lease Clause Red Flag Scanner",
    description: "Paste any lease clause and instantly scan it for 19 common red flag patterns with risk ratings.",
  },
  {
    href: "/tools/landlord-quiz",
    icon: HelpCircle,
    color: "orange",
    title: "Is My Landlord Allowed To Do This?",
    description: "Pick a scenario and your province — get a clear Yes, No, or Depends answer with an explanation.",
  },
  {
    href: "/tools/tenant-rights-lookup",
    icon: BookOpen,
    color: "teal",
    title: "Tenant Rights Lookup by Province",
    description: "Instant reference card: deposits, rent control, notice periods, and tribunal links for all 10 provinces.",
  },
];

const toolsPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://leaseplain.com/tools",
  "name": "Free Tenant Tools | LeasePlain",
  "description": "Free calculators and checkers for Canadian renters.",
  "url": "https://leaseplain.com/tools",
  "hasPart": tools.map((tool) => ({
    "@type": "SoftwareApplication",
    "name": tool.title,
    "description": tool.description,
    "url": `https://leaseplain.com${tool.href}`,
    "applicationCategory": "UtilityApplication",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CAD" },
  })),
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/tools",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
};

const colorMap: Record<string, { bg: string; text: string }> = {
  indigo:  { bg: "bg-indigo-50",  text: "text-indigo-600" },
  green:   { bg: "bg-green-50",   text: "text-green-600" },
  blue:    { bg: "bg-blue-50",    text: "text-blue-600" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600" },
  amber:   { bg: "bg-amber-50",   text: "text-amber-600" },
  red:     { bg: "bg-red-50",     text: "text-red-600" },
  violet:  { bg: "bg-violet-50",  text: "text-violet-600" },
  orange:  { bg: "bg-orange-50",  text: "text-orange-600" },
  teal:    { bg: "bg-teal-50",    text: "text-teal-600" },
};

export default function ToolsPage() {
  return (
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Free Tools", href: "https://leaseplain.com/tools" },
      ]} />
      <Navbar />

      <main>
        <section className="bg-surface-2 border-b border-line py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Free Tools</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
              Free Tenant Tools
            </div>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsPageSchema).replace(/</g, "\\u003c") }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema).replace(/</g, "\\u003c") }}
            />
            <h1 className="text-4xl font-bold text-ink mb-4 leading-tight">
              Free Tools for Canadian Renters
            </h1>
            <p className="speakable-summary text-lg text-muted max-w-2xl leading-relaxed">
              9 free calculators and reference tools covering rent increases, notice periods, lease
              breaks, eviction notices, deposits, and more. No sign-up required.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {tools.map(({ href, icon: Icon, color, title, description }) => {
                const c = colorMap[color] ?? { bg: "bg-surface-2", text: "text-muted" };
                return (
                  <Link
                    key={href}
                    href={href}
                    className="bg-white rounded-2xl border border-line shadow-sm p-6 flex flex-col gap-3 hover:border-blue-200 hover:shadow-md transition-all group"
                  >
                    <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${c.text}`} aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="font-bold text-ink mb-1.5 group-hover:text-blue-700 transition-colors leading-snug">
                        {title}
                      </h2>
                      <p className="text-sm text-muted leading-relaxed">{description}</p>
                    </div>
                    <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
                      Open tool
                      <ChevronRight className="w-3 h-3" aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-12 bg-blue-600 rounded-2xl p-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Want a Full Lease Analysis?</h2>
                <p className="text-blue-100 text-sm leading-relaxed max-w-lg">
                  These tools answer specific questions — but our AI reads your entire lease and flags
                  every clause that may violate your provincial rights.
                </p>
              </div>
              <Link
                href="/upload"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Analyze My Lease Free
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
