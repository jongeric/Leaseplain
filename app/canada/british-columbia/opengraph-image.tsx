import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "British Columbia renting key numbers: 2.3% is the 2026 maximum allowable rent increase, 3 full months written notice required before a rent increase, security deposits capped at half a month's rent plus half a month for pets, deposits must be returned within 15 days, and disputes go to the Residential Tenancy Branch";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STATS = [
  { value: "2.3%", label: "2026 maximum allowable rent increase (BC CPI)" },
  { value: "3 months", label: "Written notice before a rent increase (RTB-7 form)" },
  { value: "0.5 month", label: "Security deposit cap (+0.5 month pet deposit)" },
  { value: "15 days", label: "Deadline to return your deposit after tenancy ends" },
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
          Renting in British Columbia: Key Numbers
        </div>
        <div style={{ display: "flex", fontSize: "24px", color: "#475569", marginBottom: "40px" }}>
          Residential Tenancy Act — disputes go to the Residential Tenancy Branch (RTB)
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
            Skipping the condition inspection costs landlords their deposit claim rights
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
