"use client";

import { Printer } from "lucide-react";
import { getChecklist } from "@/lib/checklists";

// Opens a clean, print-optimized version of the checklist in a new window and
// triggers the print dialog (which includes "Save as PDF" on every platform).
export default function PrintChecklistButton({ slug }: { slug: string }) {
  const c = getChecklist(slug);
  if (!c) return null;

  const print = () => {
    const w = window.open("", "_blank", "width=820,height=1000");
    if (!w) return;
    const esc = (s: string) => s.replace(/[&<>]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[ch] as string));
    const sections = c.sections
      .map(
        (s) =>
          `<h2>${esc(s.heading)}</h2><ul>${s.items
            .map((it) => `<li><span class="box"></span>${esc(it)}</li>`)
            .join("")}</ul>`
      )
      .join("");
    w.document.write(
      `<html><head><title>${esc(c.h1)} — LeasePlain</title><style>
        *{box-sizing:border-box}
        body{font-family:Arial,Helvetica,sans-serif;color:#0f172a;max-width:720px;margin:0 auto;padding:40px;line-height:1.5}
        .brand{font-size:13px;font-weight:700;color:#4f46e5;letter-spacing:.5px;margin-bottom:6px}
        h1{font-size:24px;margin:0 0 6px}
        .intro{color:#475569;font-size:13px;margin:0 0 22px}
        h2{font-size:15px;margin:22px 0 8px;color:#1e293b;border-bottom:1px solid #e2e8f0;padding-bottom:4px}
        ul{list-style:none;padding:0;margin:0}
        li{display:flex;align-items:flex-start;gap:10px;font-size:13px;padding:5px 0}
        .box{display:inline-block;width:14px;height:14px;border:1.5px solid #94a3b8;border-radius:3px;flex-shrink:0;margin-top:2px}
        .foot{margin-top:28px;font-size:11px;color:#94a3b8;border-top:1px solid #e2e8f0;padding-top:10px}
        @media print{body{padding:24px}}
      </style></head><body>
        <div class="brand">LeasePlain</div>
        <h1>${esc(c.h1)}</h1>
        <p class="intro">${esc(c.intro)}</p>
        ${sections}
        <p class="foot">leaseplain.com · General information only, not legal advice.</p>
      </body></html>`
    );
    w.document.close();
    w.focus();
    w.print();
  };

  return (
    <button
      type="button"
      onClick={print}
      className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-indigo-700 transition-colors text-sm"
    >
      <Printer className="w-4 h-4" aria-hidden="true" />
      Print / Save as PDF
    </button>
  );
}
