import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Ontario renting key numbers: 2.1% is the 2026 rent increase guideline, 90 days written notice required before a rent increase, deposits limited to last month's rent with no damage deposit allowed, 24 hours written notice required before landlord entry, and disputes go to the Landlord and Tenant Board";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STATS = [
  { value: "2.1%", label: "2026 rent increase guideline (most units)" },
  { value: "90 days", label: "Written notice before any rent increase" },
  { value: "LMR only", label: "Last month's rent — no damage deposit allowed" },
  { value: "24 hours", label: "Written notice before landlord entry" },
];

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "52px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: "40px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
          Renting in Ontario: Key Numbers
        </div>
        <div style={{ display: "flex", fontSize: "24px", color: "#475569", marginBottom: "40px" }}>
          Residential Tenancies Act, 2006 — disputes go to the Landlord and Tenant Board
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "500px",
                background: "#f8fafc",
                border: "2px solid #e2e8f0",
                borderLeft: "6px solid #2563eb",
                borderRadius: "14px",
                padding: "24px 30px",
              }}
            >
              <div style={{ display: "flex", fontSize: "42px", fontWeight: 700, color: "#2563eb", marginBottom: "6px" }}>
                {s.value}
              </div>
              <div style={{ display: "flex", fontSize: "21px", color: "#334155", lineHeight: 1.35 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto" }}>
          <div style={{ display: "flex", fontSize: "20px", color: "#94a3b8" }}>
            Units first occupied after Nov 15, 2018 are exempt from the guideline
          </div>
          <div style={{ display: "flex", fontSize: "20px", fontWeight: 700, color: "#2563eb" }}>
            leaseplain.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
