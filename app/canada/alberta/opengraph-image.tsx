import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Alberta renting key numbers: no rent increase cap but increases allowed only once per year, 3 months written notice required before a rent increase, security deposits capped at one month's rent, deposits must be returned within 10 days, and disputes go to the Residential Tenancy Dispute Resolution Service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STATS = [
  { value: "No cap", label: "On rent increases — but only once every 12 months" },
  { value: "3 months", label: "Written notice before a rent increase" },
  { value: "1 month", label: "Security deposit cap, including any pet deposit" },
  { value: "10 days", label: "Deadline to return your deposit after tenancy ends" },
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
          Renting in Alberta: Key Numbers
        </div>
        <div style={{ display: "flex", fontSize: "24px", color: "#475569", marginBottom: "40px" }}>
          Residential Tenancies Act — disputes go to the RTDRS or Provincial Court
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
            Move-in and move-out inspections are required for deposit deductions
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
