"use client";

import { useState } from "react";

// Self-contained, no-API embeddable widget. Any external site can iframe this;
// every embed carries a "Powered by LeasePlain" backlink. Province data mirrors
// the verified figures in the main Rent Increase Calculator.
const PROVINCE_LIMITS: Record<string, { limit: number | null; note: string }> = {
  ON: { limit: 2.1, note: "Ontario guideline for 2026" },
  BC: { limit: 2.3, note: "BC allowable increase for 2026" },
  AB: { limit: null, note: "Alberta has no rent increase cap (once per 12 months)" },
  QC: { limit: null, note: "Quebec uses a TAL formula — contact the TAL" },
  MB: { limit: null, note: "Manitoba: increases must be reasonable; guideline varies" },
  SK: { limit: null, note: "Saskatchewan has no provincial cap" },
  NS: { limit: 5.0, note: "Nova Scotia 5% cap (through 2027)" },
  NB: { limit: 3.0, note: "New Brunswick 3% cap (from Feb 1, 2025)" },
  PE: { limit: 2.0, note: "PEI 2026 maximum allowable increase" },
  NL: { limit: null, note: "Newfoundland & Labrador has no cap" },
};
const NAMES: Record<string, string> = {
  ON: "Ontario", BC: "British Columbia", AB: "Alberta", QC: "Quebec", MB: "Manitoba",
  SK: "Saskatchewan", NS: "Nova Scotia", NB: "New Brunswick", PE: "PEI", NL: "Newfoundland & Labrador",
};

export default function RentIncreaseEmbed() {
  const [province, setProvince] = useState("");
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [result, setResult] = useState<null | { pct: number; over: boolean | null; limit: number | null; note: string }>(null);

  const calc = () => {
    const c = parseFloat(current.replace(/[^0-9.]/g, ""));
    const n = parseFloat(next.replace(/[^0-9.]/g, ""));
    if (!c || !n || c <= 0 || !province) return;
    const pct = ((n - c) / c) * 100;
    const p = PROVINCE_LIMITS[province];
    setResult({ pct, over: p.limit === null ? null : pct > p.limit + 0.001, limit: p.limit, note: p.note });
  };

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", maxWidth: 440, margin: "0 auto", padding: 16 }}>
      <div style={{ border: "1px solid #e2e8f0", borderRadius: 16, padding: 20, background: "#fff" }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", margin: "0 0 4px" }}>
          Is your rent increase legal?
        </h2>
        <p style={{ fontSize: 13, color: "#64748b", margin: "0 0 16px" }}>
          Check a proposed increase against your province&apos;s limit.
        </p>

        <label style={{ fontSize: 12, fontWeight: 600, color: "#334155" }}>Province</label>
        <select
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          style={{ width: "100%", padding: "9px 10px", borderRadius: 10, border: "1px solid #cbd5e1", margin: "4px 0 12px", fontSize: 14 }}
        >
          <option value="">Select a province…</option>
          {Object.keys(NAMES).map((k) => <option key={k} value={k}>{NAMES[k]}</option>)}
        </select>

        <div style={{ display: "flex", gap: 10 }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#334155" }}>Current rent</label>
            <input inputMode="decimal" value={current} onChange={(e) => setCurrent(e.target.value)} placeholder="$1,800"
              style={{ width: "100%", padding: "9px 10px", borderRadius: 10, border: "1px solid #cbd5e1", margin: "4px 0 12px", fontSize: 14, boxSizing: "border-box" }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#334155" }}>Proposed rent</label>
            <input inputMode="decimal" value={next} onChange={(e) => setNext(e.target.value)} placeholder="$1,900"
              style={{ width: "100%", padding: "9px 10px", borderRadius: 10, border: "1px solid #cbd5e1", margin: "4px 0 12px", fontSize: 14, boxSizing: "border-box" }} />
          </div>
        </div>

        <button onClick={calc}
          style={{ width: "100%", padding: "11px", borderRadius: 10, border: "none", background: "#4f46e5", color: "#fff", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
          Check increase
        </button>

        {result && (
          <div style={{ marginTop: 14, padding: 14, borderRadius: 12,
            background: result.over === null ? "#f1f5f9" : result.over ? "#fef2f2" : "#f0fdf4",
            border: `1px solid ${result.over === null ? "#e2e8f0" : result.over ? "#fca5a5" : "#86efac"}` }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a" }}>
              Proposed increase: {result.pct.toFixed(1)}%
            </div>
            <div style={{ fontSize: 13, color: "#475569", marginTop: 4 }}>
              {result.over === null
                ? result.note
                : result.over
                ? `Above the ${result.limit}% limit — this may exceed what your landlord can charge. ${result.note}.`
                : `Within the ${result.limit}% limit. ${result.note}.`}
            </div>
          </div>
        )}
      </div>

      <a href="https://leaseplain.com/tools/rent-increase-calculator?utm_source=embed"
        target="_blank" rel="noopener"
        style={{ display: "block", textAlign: "center", marginTop: 10, fontSize: 12, color: "#64748b", textDecoration: "none" }}>
        Powered by <span style={{ fontWeight: 700, color: "#4f46e5" }}>LeasePlain</span> — free lease &amp; tenant-rights tools
      </a>
    </div>
  );
}
