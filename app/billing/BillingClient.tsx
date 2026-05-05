"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSession } from "@/lib/auth-client";
import { CheckCircle, CreditCard, ExternalLink, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function BillingClient() {
  const { data: session, isPending } = useSession();
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const mock = searchParams.get("mock");
  const plan = searchParams.get("plan");
  const [portalLoading, setPortalLoading] = useState(false);
  const [portalError, setPortalError] = useState<string | null>(null);

  const openPortal = async () => {
    setPortalLoading(true);
    setPortalError(null);
    try {
      const res = await fetch("/api/stripe/portal", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error ?? "Could not open billing portal.");
      }
    } catch (err) {
      setPortalError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setPortalLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="flex flex-col min-h-full">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="w-6 h-6 animate-spin text-indigo-500" />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main className="flex-1 py-12 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-slate-900 mb-8">Billing &amp; Subscription</h1>

          {(success || mock === "success") && (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-6 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-green-800">Subscription activated!</p>
                <p className="text-sm text-green-700 mt-0.5">
                  {mock === "success"
                    ? `Your ${plan ?? "Pro"} plan is now active (mock mode — no charge applied).`
                    : `Your ${plan ?? "Pro"} plan is now active. Thank you!`}
                </p>
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-4">
            <h2 className="font-bold text-slate-900 mb-4">Current Plan</h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-900 capitalize">
                  {(session?.user as { plan?: string })?.plan ?? "Free"} Plan
                </p>
                <p className="text-sm text-slate-500 mt-0.5">
                  {!session
                    ? "Sign in to manage your subscription"
                    : ((session.user as { plan?: string })?.plan ?? "free") === "free"
                    ? "1 lease analysis per month"
                    : "Unlimited lease analyses"}
                </p>
              </div>
              <Link href="/pricing" className="text-sm text-indigo-600 hover:underline font-medium">
                Upgrade plan
              </Link>
            </div>
          </div>

          {session && (
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-4">
              <h2 className="font-bold text-slate-900 mb-2">Manage Subscription</h2>
              <p className="text-sm text-slate-500 mb-4">
                Update payment method, view invoices, or cancel via the Stripe billing portal.
              </p>

              {portalError && (
                <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-700 mb-4">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  {portalError}
                </div>
              )}

              <button
                onClick={openPortal}
                disabled={portalLoading}
                className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-slate-700 transition-colors text-sm disabled:opacity-60"
              >
                {portalLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CreditCard className="w-4 h-4" />}
                Open Billing Portal
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </button>
            </div>
          )}

          {!session && (
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center">
              <p className="text-slate-600 mb-4">Sign in to manage your subscription.</p>
              <Link
                href="/login?redirect=/billing"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors text-sm"
              >
                Sign In
              </Link>
            </div>
          )}

          <p className="text-xs text-slate-400 text-center mt-6">
            Payments are processed securely by Stripe. LeasePlain never stores your card details.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
