import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Decision flowchart for Canadian rentals: if damage was caused by the tenant, a guest, or misuse, the tenant pays for the repair; if it is normal wear and tear, aging, or a building system failure, the landlord must repair it";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          alignItems: "center",
          padding: "48px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: "38px", fontWeight: 700, color: "#0f172a", marginBottom: "36px" }}>
          Who Pays for a Repair in a Canadian Rental?
        </div>

        <div
          style={{
            display: "flex",
            background: "#f1f5f9",
            border: "3px solid #cbd5e1",
            borderRadius: "16px",
            padding: "20px 48px",
            fontSize: "28px",
            fontWeight: 700,
            color: "#0f172a",
          }}
        >
          Something in the unit needs fixing
        </div>

        <div style={{ display: "flex", width: "3px", height: "26px", background: "#94a3b8", margin: "4px 0" }} />

        <div
          style={{
            display: "flex",
            background: "#eff6ff",
            border: "3px solid #2563eb",
            borderRadius: "16px",
            padding: "20px 48px",
            fontSize: "28px",
            fontWeight: 700,
            color: "#1e40af",
          }}
        >
          Was it caused by you, a guest, or misuse?
        </div>

        <div style={{ display: "flex", width: "900px", justifyContent: "space-between", margin: "4px 0" }}>
          <div style={{ display: "flex", width: "420px", justifyContent: "center", fontSize: "26px", fontWeight: 700, color: "#dc2626" }}>
            YES
          </div>
          <div style={{ display: "flex", width: "420px", justifyContent: "center", fontSize: "26px", fontWeight: 700, color: "#16a34a" }}>
            NO
          </div>
        </div>

        <div style={{ display: "flex", width: "900px", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "420px",
              background: "#fef2f2",
              border: "3px solid #fca5a5",
              borderRadius: "16px",
              padding: "24px 32px",
            }}
          >
            <div style={{ display: "flex", fontSize: "28px", fontWeight: 700, color: "#991b1b", marginBottom: "10px" }}>
              Tenant pays
            </div>
            <div style={{ display: "flex", fontSize: "22px", color: "#7f1d1d", lineHeight: 1.4 }}>
              Damage beyond normal use: holes in walls, burns, pet damage, clogs you caused. Report it in writing anyway.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "420px",
              background: "#f0fdf4",
              border: "3px solid #86efac",
              borderRadius: "16px",
              padding: "24px 32px",
            }}
          >
            <div style={{ display: "flex", fontSize: "28px", fontWeight: 700, color: "#166534", marginBottom: "10px" }}>
              Landlord repairs
            </div>
            <div style={{ display: "flex", fontSize: "22px", color: "#14532d", lineHeight: 1.4 }}>
              Normal wear and tear, aging, plumbing/electrical/HVAC failures, structural issues. Request repairs in writing.
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "auto" }}>
          <div style={{ display: "flex", fontSize: "20px", color: "#94a3b8" }}>
            Ontario RTA s.20 &amp; s.34 · BC RTA s.32 · Alberta RTA s.16 &amp; s.21
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
