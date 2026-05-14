"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Zap, Loader2 } from "lucide-react";
import { useSession } from "@/lib/auth-client";
import FAQAccordion from "@/components/FAQAccordion";

const plans = [
  {
    key: "free" as const,
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try LeasePlain with one lease analysis per month.",
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
    key: "pro" as const,
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "For active renters who need unlimited analysis and history.",
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
    key: "team" as const,
    name: "Team",
    price: "$29",
    period: "per month",
    description: "For property managers, agents, and relocation teams.",
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

export default function PricingClient() {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState<string | null>(null);

  const PAYMENT_LINKS: Record<"pro" | "team", string> = {
    pro: "https://buy.stripe.com/aFabJ3deScjyb4mes7enS00",
    team: "https://buy.stripe.com/aFa28tcaOdnC3BU4RxenS02",
  };

  const handleSubscribe = (planKey: "pro" | "team") => {
    if (!session) {
      router.push(`/login?redirect=/pricing`);
      return;
    }

    setLoading(planKey);

    const base = PAYMENT_LINKS[planKey];
    const params = new URLSearchParams({
      client_reference_id: session.user.id,
      prefilled_email: session.user.email,
    });
    window.location.href = `${base}?${params.toString()}`;
  };

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
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Plans for every renter</h1>
            <p className="text-slate-500 max-w-md mx-auto">
              Start free. Upgrade when you need more. Cancel anytime.
            </p>
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
                <h2 className={`text-lg font-bold mb-1 ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h2>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-1 ${plan.highlight ? "text-indigo-200" : "text-slate-400"}`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`text-sm mb-6 ${plan.highlight ? "text-indigo-100" : "text-slate-500"}`}>
                  {plan.description}
                </p>

                {plan.key === "free" ? (
                  <Link
                    href="/upload"
                    className={`block w-full text-center font-semibold py-3 rounded-xl text-sm transition-colors mb-6 bg-indigo-600 text-white hover:bg-indigo-700`}
                  >
                    Get Started Free
                  </Link>
                ) : (
                  <button
                    onClick={() => handleSubscribe(plan.key)}
                    disabled={loading === plan.key}
                    className={`w-full flex items-center justify-center gap-2 font-semibold py-3 rounded-xl text-sm transition-colors mb-6 disabled:opacity-70 ${
                      plan.highlight
                        ? "bg-white text-indigo-700 hover:bg-indigo-50"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
                  >
                    {loading === plan.key ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Redirecting...</>
                    ) : session ? (
                      `Subscribe to ${plan.name}`
                    ) : (
                      "Sign in to Subscribe"
                    )}
                  </button>
                )}

                <ul className="flex flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-indigo-200" : "text-indigo-500"}`} />
                      <span className={plan.highlight ? "text-indigo-50" : "text-slate-700"}>{f}</span>
                    </li>
                  ))}
                  {plan.missing.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm opacity-40">
                      <span className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center">&mdash;</span>
                      <span className={plan.highlight ? "text-indigo-100" : "text-slate-500"}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-sm text-slate-400 max-w-xl mx-auto">
            <p>
              <strong className="text-slate-500">Not legal advice.</strong>{" "}
              LeasePlain is not a law firm. Analyses are for informational purposes only.
              Always consult a licensed attorney before signing any lease.
            </p>
          </div>
        </div>
      

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "What does LeasePlain's free plan include?", a: "The free plan includes a full AI lease analysis with summary, red flags, unclear clauses, questions to ask, and negotiation suggestions. Financial terms are available on Pro plans. Analyses are saved to your account." },
                  { q: "What does LeasePlain Pro include?", a: "Pro unlocks the complete financial terms section, unlimited lease analyses, priority processing, and downloadable PDF reports. It is designed for frequent renters, agents, and property managers." },
                  { q: "Is there a free trial of LeasePlain Pro?", a: "LeasePlain's free tier provides substantial value with no credit card required. Pro features are available on a monthly subscription. Check the Pricing page for current plans and any available promotions." },
                  { q: "Can I cancel my LeasePlain subscription?", a: "Yes. Subscriptions are month-to-month and can be cancelled at any time through your account settings. Access continues until the end of the paid billing period." },
                  { q: "Is LeasePlain affordable for first-time renters?", a: "Yes. LeasePlain offers meaningful free functionality, and Pro is priced to be accessible. Compared to the cost of a single hour of lawyer time, LeasePlain Pro provides significant value for tenants who sign multiple leases or need ongoing peace of mind." }
                ]} />
              </div>
      </main>

      <Footer />
    </div>
  );
}
