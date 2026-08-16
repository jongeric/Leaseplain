"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

// Submissions go to the email tied to the Web3Forms access key (never exposed
// in page source). Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to enable sending.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export default function GetListedForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ACCESS_KEY) {
      setStatus("error");
      setErrorMsg("The form isn't configured yet. Please email us via the contact page.");
      return;
    }
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "New tenant-lawyer directory listing request");
    data.append("from_name", "LeasePlain Directory");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again, or use the contact page.");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
        <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" aria-hidden="true" />
        <p className="font-semibold text-green-900">Thanks — we&apos;ve received your listing request.</p>
        <p className="text-sm text-green-800 mt-1">We review each submission before it goes live and will be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="gl-name" className="block text-xs font-semibold text-slate-700 mb-1">Your name</label>
          <input id="gl-name" name="name" required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100" />
        </div>
        <div>
          <label htmlFor="gl-firm" className="block text-xs font-semibold text-slate-700 mb-1">Firm / practice name</label>
          <input id="gl-firm" name="firm"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="gl-role" className="block text-xs font-semibold text-slate-700 mb-1">I am a…</label>
          <select id="gl-role" name="role"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100">
            <option>Licensed paralegal</option>
            <option>Lawyer</option>
            <option>Community legal clinic</option>
            <option>Other tenant advocate</option>
          </select>
        </div>
        <div>
          <label htmlFor="gl-lso" className="block text-xs font-semibold text-slate-700 mb-1">Law Society (LSO) number</label>
          <input id="gl-lso" name="lso_number" placeholder="For verification"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="gl-email" className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
          <input id="gl-email" name="email" type="email" required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100" />
        </div>
        <div>
          <label htmlFor="gl-cities" className="block text-xs font-semibold text-slate-700 mb-1">Cities / regions you serve</label>
          <input id="gl-cities" name="cities" placeholder="e.g. Toronto, Mississauga"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100" />
        </div>
      </div>

      <div>
        <label htmlFor="gl-msg" className="block text-xs font-semibold text-slate-700 mb-1">Anything else we should know?</label>
        <textarea id="gl-msg" name="message" rows={3}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100" />
      </div>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-700">
          <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" /> {errorMsg}
        </p>
      )}

      <button type="submit" disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 w-full bg-indigo-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-60">
        {status === "sending" ? (<><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>) : "Request a listing"}
      </button>
      <p className="text-xs text-slate-400 text-center">
        We verify licensing before publishing any listing. Free during launch.
      </p>
    </form>
  );
}
