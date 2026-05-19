"use client";

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 900);
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-2xl mx-auto bg-blue-50 border border-blue-100 rounded-2xl p-8">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
            <Mail className="w-5 h-5 text-blue-600" aria-hidden="true" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Get the Free Tenant Checklist
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md">
              Download our Lease Red Flags Checklist PDF — the 15 clauses to watch
              for before signing.
            </p>
          </div>

          {status === "success" ? (
            <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-100 rounded-xl px-5 py-3 text-sm font-medium">
              <CheckCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              Thank you! Check your inbox.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col sm:flex-row gap-2">
              <label htmlFor="email-capture-input" className="sr-only">
                Email address
              </label>
              <input
                id="email-capture-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 px-4 py-2.5 rounded-xl border border-blue-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-60 whitespace-nowrap"
              >
                {status === "submitting" ? "Sending…" : "Send me the checklist"}
              </button>
            </form>
          )}

          <p className="text-xs text-slate-400">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
