import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Quebec renting key numbers: security deposits are prohibited entirely, landlords must use the TAL standard lease form called the bail, tenants have the right to refuse a rent increase and stay, and disputes go to the Tribunal administratif du logement";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STATS = [
  { value: "$0", label: "Security deposits are prohibited — landlords cannot ask" },
  { value: "The bail", label: "Mandatory TAL standard lease form for most tenancies" },
  { value: "Right to refuse", label: "You can refuse a rent increase and stay in the unit" },
  { value: "TAL", label: "Tribunal administratif du logement resolves disputes" },
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
          Renting in Quebec: Key Facts
        </div>
        <div style={{ display: "flex", fontSize: "24px", color: "#475569", marginBottom: "40px" }}>
          Civil Code of Quebec — disputes go to the Tribunal administratif du logement
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
            If you refuse an increase, the landlord must apply to the TAL to authorize it
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
