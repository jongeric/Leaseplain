import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Bar chart of Ontario's annual rent increase guideline from 2020 to 2026: 2.2% in 2020, 0% rent freeze in 2021, 1.2% in 2022, 2.5% in 2023 through 2025, and 2.1% in 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const DATA = [
  { year: "2020", pct: 2.2 },
  { year: "2021", pct: 0 },
  { year: "2022", pct: 1.2 },
  { year: "2023", pct: 2.5 },
  { year: "2024", pct: 2.5 },
  { year: "2025", pct: 2.5 },
  { year: "2026", pct: 2.1 },
];
const MAX = 2.5;
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
            Ontario Rent Increase Guideline, 2020–2026
          </div>
          <div style={{ display: "flex", fontSize: "24px", color: "#475569", marginTop: "8px" }}>
            2026 guideline: 2.1% — the maximum most Ontario landlords can raise rent
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "28px",
            height: `${PLOT_H + 60}px`,
            borderBottom: "3px solid #cbd5e1",
            paddingBottom: "0px",
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
                  {d.pct === 0 ? "0% freeze" : `${d.pct}%`}
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "88px",
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

        <div style={{ display: "flex", gap: "28px", marginTop: "10px" }}>
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
            Source: Ontario Ministry of Municipal Affairs and Housing
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
