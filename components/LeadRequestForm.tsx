"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { submitForm } from "@/lib/submitForm";

// Tenant-side lead capture. Routes match requests to jf@ for manual routing to
// listed professionals (the referral / lead-gen mechanism). `city` prefills
// from the page it's placed on.
export default function LeadRequestForm({ city }: { city?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const result = await submitForm(data, {
      subject: `Tenant lawyer match request${city ? ` — ${city}` : ""}`,
    });
    if (result.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.message ?? "Something went wrong. Please try again.");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
        <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" aria-hidden="true" />
        <p className="font-semibold text-green-900">Request received.</p>
        <p className="text-sm text-green-800 mt-1">We&apos;ll connect you with a tenant-rights professional as soon as we can. This is not legal advice or a guarantee of representation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-card p-6 shadow-sm space-y-4">
      <input type="checkbox" name="_honey" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
      {city && <input type="hidden" name="city" value={city} />}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lr-name" className="block text-xs font-semibold text-muted mb-1">Your name</label>
          <input id="lr-name" name="name" required
            className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" />
        </div>
        <div>
          <label htmlFor="lr-email" className="block text-xs font-semibold text-muted mb-1">Email</label>
          <input id="lr-email" name="email" type="email" required
            className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" />
        </div>
      </div>

      <div>
        <label htmlFor="lr-issue" className="block text-xs font-semibold text-muted mb-1">What&apos;s your situation?</label>
        <select id="lr-issue" name="issue"
          className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20">
          <option>Facing an eviction (N4/N12/N13)</option>
          <option>Rent increase dispute</option>
          <option>Landlord won&apos;t make repairs</option>
          <option>Deposit / last month&apos;s rent issue</option>
          <option>Illegal entry or harassment</option>
          <option>Bad-faith eviction (T5)</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="lr-msg" className="block text-xs font-semibold text-muted mb-1">Briefly, what&apos;s happening? (optional)</label>
        <textarea id="lr-msg" name="message" rows={3}
          className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" />
      </div>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" /> {errorMsg}
        </p>
      )}

      <button type="submit" disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 w-full bg-brand text-brand-fg font-semibold px-5 py-3 rounded-xl hover:bg-brand-hover transition-colors disabled:opacity-60">
        {status === "sending" ? (<><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>) : "Connect me with help"}
      </button>
      <p className="text-xs text-subtle text-center">
        LeasePlain is not a law firm. We help connect renters with verified professionals; this isn&apos;t legal advice.
      </p>
    </form>
  );
}
