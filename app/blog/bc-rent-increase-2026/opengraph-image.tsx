import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Bar chart of British Columbia's maximum allowable rent increase from 2022 to 2026: 1.5% in 2022, 2.0% in 2023, 3.5% in 2024, 3.0% in 2025, and 2.3% in 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const DATA = [
  { year: "2022", pct: 1.5 },
  { year: "2023", pct: 2.0 },
  { year: "2024", pct: 3.5 },
  { year: "2025", pct: 3.0 },
  { year: "2026", pct: 2.3 },
];
const MAX = 3.5;
const PLOT_H = 300;

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
          padding: "56px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "40px" }}>
          <div style={{ display: "flex", fontSize: "40px", fontWeight: 700, color: "#0f172a" }}>
            BC Maximum Allowable Rent Increase, 2022–2026
          </div>
          <div style={{ display: "flex", fontSize: "24px", color: "#475569", marginTop: "8px" }}>
            2026 cap: 2.3%, tied to BC CPI — down from 3.0% in 2025
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "36px",
            height: `${PLOT_H + 60}px`,
            borderBottom: "3px solid #cbd5e1",
          }}
        >
          {DATA.map((d) => {
            const h = Math.max(Math.round((d.pct / MAX) * PLOT_H), 6);
            const current = d.year === "2026";
            return (
              <div
                key={d.year}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  flexGrow: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: "26px",
                    fontWeight: 700,
                    color: current ? "#2563eb" : "#334155",
                    marginBottom: "8px",
                  }}
                >
                  {d.pct.toFixed(1)}%
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "110px",
                    height: `${h}px`,
                    background: current ? "#2563eb" : "#64748b",
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                  }}
                />
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex", gap: "36px", marginTop: "10px" }}>
          {DATA.map((d) => (
            <div
              key={d.year}
              style={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: d.year === "2026" ? 700 : 400,
                color: d.year === "2026" ? "#2563eb" : "#475569",
              }}
            >
              {d.year}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto" }}>
          <div style={{ display: "flex", fontSize: "20px", color: "#94a3b8" }}>
            Source: BC Residential Tenancy Branch
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
