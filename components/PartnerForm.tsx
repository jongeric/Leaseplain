"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { submitForm } from "@/lib/submitForm";

export default function PartnerForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const result = await submitForm(data, { subject: "New LeasePlain partner / widget enquiry" });
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
        <p className="font-semibold text-green-900">Thanks — we&apos;ve got your message.</p>
        <p className="text-sm text-green-800 mt-1">We&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
      {/* Honeypot */}
      <input type="checkbox" name="_honey" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="pf-name" className="block text-xs font-semibold text-slate-700 mb-1">Your name</label>
          <input id="pf-name" name="name" required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100" />
        </div>
        <div>
          <label htmlFor="pf-org" className="block text-xs font-semibold text-slate-700 mb-1">Organization</label>
          <input id="pf-org" name="organization"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="pf-email" className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
          <input id="pf-email" name="email" type="email" required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100" />
        </div>
        <div>
          <label htmlFor="pf-website" className="block text-xs font-semibold text-slate-700 mb-1">Website (optional)</label>
          <input id="pf-website" name="website"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100" />
        </div>
      </div>

      <div>
        <label htmlFor="pf-interest" className="block text-xs font-semibold text-slate-700 mb-1">I&apos;m interested in</label>
        <select id="pf-interest" name="interest"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100">
          <option>Embedding a free widget on our site</option>
          <option>A co-branded / custom widget</option>
          <option>Content partnership or linking</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="pf-msg" className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
        <textarea id="pf-msg" name="message" rows={4} required
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100" />
      </div>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-700">
          <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" /> {errorMsg}
        </p>
      )}

      <button type="submit" disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 w-full bg-indigo-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-60">
        {status === "sending" ? (<><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>) : "Send enquiry"}
      </button>
    </form>
  );
}
