import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingUp, DollarSign } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Free Tenant Tools | LeasePlain",
  description:
    "Free calculators and tools for Canadian renters — check if your rent increase is legal, calculate your security deposit return, and more.",
  alternates: { canonical: "https://leaseplain.com/tools" },
  openGraph: {
    title: "Free Tenant Tools | LeasePlain",
    description: "Free rent increase calculator, deposit return calculator, and more tools for Canadian tenants.",
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
];

export default function ToolsPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1 py-12 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Free Tenant Tools</h1>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Free calculators and resources for Canadian renters. Know your rights — without a lawyer.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {tools.map(({ href, icon: Icon, color, title, description }) => (
              <Link
                key={href}
                href={href}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition-shadow group"
              >
                <div className={`w-12 h-12 rounded-xl bg-${color}-50 flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 text-${color}-600`} />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900 mb-1 group-hover:text-indigo-700 transition-colors">{title}</h2>
                  <p className="text-sm text-slate-500">{description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center">
            <p className="text-slate-700 text-sm mb-3">
              Want a full analysis of your lease? LeasePlain reads the whole thing and flags what matters.
            </p>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors text-sm"
            >
              Analyze My Lease Free
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
