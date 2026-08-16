"use client";

import { useState, useMemo } from "react";
import { Copy, Check, Printer } from "lucide-react";
import { getLetter } from "@/lib/letters";

export default function LetterGenerator({ slug }: { slug: string }) {
  const def = getLetter(slug);
  const [values, setValues] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => (def ? def.build(values) : ""), [def, values]);

  if (!def) return null;

  const set = (name: string, v: string) => setValues((s) => ({ ...s, [name]: v }));

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — user can select the text manually */
    }
  };

  const print = () => {
    const w = window.open("", "_blank", "width=800,height=900");
    if (!w) return;
    const safe = output.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c] as string));
    w.document.write(
      `<html><head><title>${def.h1}</title><style>body{font-family:Georgia,serif;white-space:pre-wrap;line-height:1.6;padding:48px;max-width:720px;margin:0 auto;color:#111}</style></head><body>${safe}</body></html>`
    );
    w.document.close();
    w.focus();
    w.print();
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Form */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid sm:grid-cols-2 gap-4">
          {def.fields.map((f) => (
            <div key={f.name} className={f.half ? "" : "sm:col-span-2"}>
              <label htmlFor={`lf-${f.name}`} className="block text-xs font-semibold text-slate-700 mb-1">
                {f.label}{f.required && <span className="text-red-500"> *</span>}
              </label>
              {f.type === "textarea" ? (
                <textarea
                  id={`lf-${f.name}`}
                  rows={4}
                  placeholder={f.placeholder}
                  value={values[f.name] ?? ""}
                  onChange={(e) => set(f.name, e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              ) : (
                <input
                  id={`lf-${f.name}`}
                  type={f.type === "date" ? "date" : "text"}
                  placeholder={f.placeholder}
                  value={values[f.name] ?? ""}
                  onChange={(e) => set(f.name, e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Your letter</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
            >
              {copied ? <><Check className="w-3.5 h-3.5 text-green-600" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
            </button>
            <button
              type="button"
              onClick={print}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
            >
              <Printer className="w-3.5 h-3.5" /> Print / PDF
            </button>
          </div>
        </div>
        <pre className="flex-1 whitespace-pre-wrap font-serif text-sm text-slate-800 leading-relaxed bg-white rounded-xl border border-slate-200 p-5 overflow-auto">
{output}
        </pre>
      </div>
    </div>
  );
}
