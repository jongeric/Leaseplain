import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try LeasePlain with one lease analysis per month.",
    cta: "Get Started",
    ctaHref: "/upload",
    highlight: false,
    features: [
      "1 lease analysis per month",
      "Plain-English summary",
      "Key financial terms",
      "Red flag detection",
      "PDF or text upload",
    ],
    missing: ["Analysis history", "Priority processing", "Email support"],
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "For active renters who need unlimited analysis and history.",
    cta: "Start Free Trial",
    ctaHref: "/login",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Unlimited lease analyses",
      "Full analysis report (all 6 sections)",
      "Analysis history & saved reports",
      "PDF and text upload",
      "Priority AI processing",
      "Email support",
    ],
    missing: [],
  },
  {
    name: "Team",
    price: "$29",
    period: "per month",
    description: "For property managers, real estate agents, and relocation teams.",
    cta: "Contact Us",
    ctaHref: "/login",
    highlight: false,
    features: [
      "Everything in Pro",
      "Up to 5 team members",
      "Bulk lease upload",
      "Team analysis dashboard",
      "Priority support",
      "Custom branding (coming soon)",
    ],
    missing: [],
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main className="flex-1 py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-indigo-100">
              <Zap className="w-3.5 h-3.5" />
              Simple, transparent pricing
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Plans for every renter
            </h1>
            <p className="text-slate-500 max-w-md mx-auto">
              Start free. Upgrade when you need more. Cancel anytime.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 text-xs text-amber-700 font-medium">
              Payments are currently mocked — no real charges apply
            </div>
          </div>

          {/* Plans grid */}
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 border ${
                  plan.highlight
                    ? "bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-200"
                    : "bg-white border-slate-100 shadow-sm"
                }`}
              >
                {plan.highlight && plan.badge && (
                  <div className="inline-block bg-white text-indigo-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {plan.badge}
                  </div>
                )}
                <h2
                  className={`text-lg font-bold mb-1 ${
                    plan.highlight ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h2>
                <div className="flex items-end gap-1 mb-2">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlight ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm mb-1 ${
                      plan.highlight ? "text-indigo-200" : "text-slate-400"
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm mb-6 ${
                    plan.highlight ? "text-indigo-100" : "text-slate-500"
                  }`}
                >
                  {plan.description}
                </p>

                <Link
                  href={plan.ctaHref}
                  className={`block w-full text-center font-semibold py-3 rounded-xl text-sm transition-colors mb-6 ${
                    plan.highlight
                      ? "bg-white text-indigo-700 hover:bg-indigo-50"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  {plan.cta}
                </Link>

                <ul className="flex flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          plan.highlight ? "text-indigo-200" : "text-indigo-500"
                        }`}
                      />
                      <span className={plan.highlight ? "text-indigo-50" : "text-slate-700"}>
                        {f}
                      </span>
                    </li>
                  ))}
                  {plan.missing.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-sm opacity-40`}
                    >
                      <span className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center">
                        &mdash;
                      </span>
                      <span className={plan.highlight ? "text-indigo-100" : "text-slate-500"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FAQ / disclaimer */}
          <div className="mt-14 text-center text-sm text-slate-400 max-w-xl mx-auto">
            <p>
              All plans include our standard disclaimer:{" "}
              <strong className="text-slate-500">
                LeasePlain is not a law firm and does not provide legal advice.
              </strong>{" "}
              Analyses are for informational purposes only. Always consult a
              licensed attorney before signing any legal agreement.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
