import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, ChevronRight, Upload, Shield, TrendingUp, DoorOpen, Wrench, Share2, DollarSign, Zap, Heart, Users, Hammer } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Clauses Explained: Common Terms in Residential Agreements | LeasePlain",
  description:
    "Understand every clause in your residential lease. Plain-English explanations of security deposits, rent increases, pets, utilities, subletting, and more — with Ontario law context.",
  alternates: { canonical: "https://leaseplain.com/lease-clauses" },
  openGraph: {
    title: "Lease Clauses Explained: Common Terms in Residential Agreements | LeasePlain",
    description: "Understand every clause in your residential lease. Plain-English explanations of security deposits, rent increases, pets, utilities, subletting, and more — with Ontario law context.",
    url: "https://leaseplain.com/lease-clauses",
    type: "website",
  },
};

const clauses = [
  {
    name: "Security Deposit",
    description: "Rules on how much you can be charged upfront, how it must be held, and when you get it back.",
    href: "/lease-clause/security-deposit",
    icon: Shield,
  },
  {
    name: "Rent Increase",
    description: "How and when your landlord can raise your rent, and what the annual Ontario guideline means for you.",
    href: "/lease-clause/rent-increase",
    icon: TrendingUp,
  },
  {
    name: "Early Termination",
    description: "What happens if you need to leave before your lease ends — penalties, notice, and your options.",
    href: "/lease-clause/early-termination",
    icon: DoorOpen,
  },
  {
    name: "Maintenance Responsibilities",
    description: "Who is responsible for keeping the unit in good repair — and what the RTA says about it.",
    href: "/lease-clause/maintenance",
    icon: Wrench,
  },
  {
    name: "Subletting",
    description: "Your rights to sublet or assign your unit, and when a landlord can legally refuse consent.",
    href: "/lease-clause/subletting",
    icon: Share2,
  },
  {
    name: "Late Fees",
    description: "Whether late payment fees are enforceable in Ontario and what your lease can and cannot say.",
    href: "/lease-clause/late-fees",
    icon: DollarSign,
  },
  {
    name: "Utilities",
    description: "Who pays for hydro, gas, water, and heat — and what the law says when utilities are included in rent.",
    href: "/lease-clause/utilities",
    icon: Zap,
  },
  {
    name: "Pets",
    description: "Why 'no pets' clauses are void in Ontario, and what landlords can legitimately require around pets.",
    href: "/lease-clause/pets",
    icon: Heart,
  },
  {
    name: "Guests",
    description: "How long guests can stay, when a guest becomes an occupant, and what your lease can restrict.",
    href: "/lease-clause/guests",
    icon: Users,
  },
  {
    name: "Repairs",
    description: "Landlord vs. tenant repair duties, how to request repairs, and what to do if they're ignored.",
    href: "/lease-clause/repairs",
    icon: Hammer,
  },
];

export default function LeaseClausesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/lease-clauses",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".speakable-summary"]
            }
          }).replace(/</g, "\u003c")
        }}
      />
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Lease Clauses</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Clause Library
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Lease Clauses Explained: Common Terms in Residential Agreements
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
              Every residential lease is packed with legal language. Some clauses protect you.
              Others can be unenforceable — or outright illegal under Ontario&apos;s{" "}
              <em>Residential Tenancies Act</em>. This library breaks down the most important
              clauses in plain English so you know exactly what you&apos;re signing.
            </p>
          </div>
        </section>

        {/* What are lease clauses? */}
        <section className="py-14 px-4 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What Are Lease Clauses and Why Do They Matter?</h2>
            <div className="grid md:grid-cols-2 gap-6 text-slate-700 leading-relaxed text-sm">
              <div>
                <p className="mb-3">
                  A lease clause is a specific provision in your rental agreement that sets out the
                  rights and responsibilities of both the tenant and landlord. Standard lease clauses
                  cover everything from how much deposit you pay upfront to who fixes a broken furnace.
                </p>
                <p>
                  In Ontario, the standard lease form (Form 2229E) is prescribed by regulation — but
                  additional clauses can be added. When those additional clauses conflict with the{" "}
                  <em>Residential Tenancies Act, 2006</em> (RTA), the RTA wins. A clause cannot take
                  away rights the law gives you.
                </p>
              </div>
              <div>
                <p className="mb-3">
                  Why does this matter? Because many leases — even those from professional property
                  management companies — contain clauses that are illegal or unenforceable. You might
                  agree to something you never had to pay, or give up protections you were always entitled to.
                </p>
                <p>
                  Understanding the key clauses before you sign can save you thousands of dollars and
                  months of stress. Use the guides below to decode your lease — and then upload it to
                  LeasePlain for an AI-powered analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clause grid */}
        <section className="py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Clause-by-Clause Guides</h2>
            <p className="text-slate-600 text-sm mb-8 leading-relaxed">
              Select a clause to read a full explanation of what it means, what Ontario law says, and what red flags to watch for.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {clauses.map((clause) => {
                const Icon = clause.icon;
                return (
                  <Link
                    key={clause.href}
                    href={clause.href}
                    className="group flex items-start gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:border-blue-200 hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                      <Icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-blue-700 transition-colors flex items-center gap-1">
                        {clause.name}
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed">{clause.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-14 px-4 bg-blue-600">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Not sure what your lease actually says?</h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Upload your lease to LeasePlain and our AI will identify every significant clause,
              flag potential red flags, and explain what each section means in plain English —
              specific to Ontario law.
            </p>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
            >
              <Upload className="w-4 h-4" aria-hidden="true" />
              Analyze My Lease Free
            </Link>
            <p className="text-xs text-blue-200 mt-4">Not legal advice. For informational purposes only.</p>
          </div>
        </section>
      

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "What are the most important clauses to review in a Canadian lease?", a: "Focus on rent amount and due date, deposit terms, termination notice periods, maintenance responsibilities, subletting rights, pet policies, rent increase procedures, and any fees for things like parking, lockers, or amenities." },
                  { q: "Are all clauses in a signed lease enforceable?", a: "No. A clause that violates provincial tenancy law is automatically void, even if you signed the lease. Provincial legislation sets minimum rights that landlords cannot contract out of, no matter what the lease says." },
                  { q: "What is an illegal lease clause?", a: "An illegal clause is one that attempts to remove or restrict rights granted by provincial tenancy law. Examples include waiving notice periods, charging deposits beyond the legal limit, banning pets in Ontario, or waiving the right to a habitability standard." },
                  { q: "How does LeasePlain identify problem clauses?", a: "LeasePlain's AI reads your full lease text or PDF and flags clauses that are unusual, one-sided, or potentially illegal under your province's rules. It explains each clause in plain English so you can decide whether to negotiate or sign." },
                  { q: "Should I negotiate lease clauses before signing?", a: "Yes, especially in a tenant's market. Common negotiable items include rent amount, parking fees, early termination rights, pet permissions, and the inclusion of appliances or utilities. LeasePlain's negotiation suggestions can guide what to ask for." }
                ]} />
              </div>
      </main>

      <Footer />
    </div>
    </>
  );
}
