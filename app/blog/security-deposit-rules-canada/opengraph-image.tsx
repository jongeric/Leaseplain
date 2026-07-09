import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Maximum security deposit by Canadian province: Quebec none permitted, Ontario last month's rent only, BC half a month plus half a month pet deposit, Manitoba and Nova Scotia half a month, Newfoundland and Labrador 75% of a month, Alberta, Saskatchewan, New Brunswick and PEI one month";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ROWS = [
  { prov: "Quebec", cap: "No deposit permitted", accent: "#16a34a" },
  { prov: "Ontario", cap: "Last month's rent only", accent: "#16a34a" },
  { prov: "British Columbia", cap: "0.5 month (+0.5 pet)", accent: "#2563eb" },
  { prov: "Manitoba", cap: "0.5 month", accent: "#2563eb" },
  { prov: "Nova Scotia", cap: "0.5 month", accent: "#2563eb" },
  { prov: "Newfoundland & Lab.", cap: "75% of one month", accent: "#d97706" },
  { prov: "Alberta", cap: "1 month", accent: "#dc2626" },
  { prov: "Saskatchewan", cap: "1 month", accent: "#dc2626" },
  { prov: "New Brunswick", cap: "1 month", accent: "#dc2626" },
  { prov: "PEI", cap: "1 month", accent: "#dc2626" },
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
          padding: "48px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: "38px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
          Maximum Security Deposit by Province
        </div>
        <div style={{ display: "flex", fontSize: "23px", color: "#475569", marginBottom: "30px" }}>
          From banned outright in Quebec to a full month&apos;s rent in four provinces
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "20px" }}>
          {ROWS.map((r) => (
            <div
              key={r.prov}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "198px",
                background: "#f8fafc",
                border: "2px solid #e2e8f0",
                borderTop: `6px solid ${r.accent}`,
                borderRadius: "12px",
                padding: "22px 18px",
              }}
            >
              <div style={{ display: "flex", fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
                {r.prov}
              </div>
              <div style={{ display: "flex", fontSize: "19px", color: "#475569", lineHeight: 1.3 }}>
                {r.cap}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto" }}>
          <div style={{ display: "flex", fontSize: "20px", color: "#94a3b8" }}>
            Return deadlines and interest rules vary by province
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
