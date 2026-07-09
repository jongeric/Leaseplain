import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Side-by-side comparison for Canadian rentals: normal wear and tear (faded paint, worn carpet, minor scuffs — landlord's cost) versus tenant damage (holes in walls, burns, pet damage, large stains — tenant's cost)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const WEAR = [
  "Faded or scuffed paint",
  "Carpet worn from foot traffic",
  "Minor scratches on floors",
  "Loose hinges and worn knobs",
  "Grout discolouration from age",
];

const DAMAGE = [
  "Holes punched or drilled in walls",
  "Burns on carpet or counters",
  "Pet scratches and stains",
  "Large stains from spills",
  "Broken fixtures from misuse",
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
        <div style={{ display: "flex", fontSize: "38px", fontWeight: 700, color: "#0f172a", marginBottom: "10px" }}>
          Normal Wear and Tear vs. Damage
        </div>
        <div style={{ display: "flex", fontSize: "24px", color: "#475569", marginBottom: "36px" }}>
          Landlords in Canada can never charge tenants for normal wear and tear
        </div>

        <div style={{ display: "flex", gap: "32px", flexGrow: 1 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              background: "#f0fdf4",
              border: "3px solid #86efac",
              borderRadius: "20px",
              padding: "28px 36px",
            }}
          >
            <div style={{ display: "flex", fontSize: "28px", fontWeight: 700, color: "#166534", marginBottom: "18px" }}>
              Wear &amp; Tear — Landlord&apos;s cost
            </div>
            {WEAR.map((item) => (
              <div key={item} style={{ display: "flex", fontSize: "23px", color: "#14532d", marginBottom: "12px" }}>
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              background: "#fef2f2",
              border: "3px solid #fca5a5",
              borderRadius: "20px",
              padding: "28px 36px",
            }}
          >
            <div style={{ display: "flex", fontSize: "28px", fontWeight: 700, color: "#991b1b", marginBottom: "18px" }}>
              Damage — Tenant&apos;s cost
            </div>
            {DAMAGE.map((item) => (
              <div key={item} style={{ display: "flex", fontSize: "23px", color: "#7f1d1d", marginBottom: "12px" }}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "28px" }}>
          <div style={{ display: "flex", fontSize: "20px", color: "#94a3b8" }}>
            Even for damage, tenants owe depreciated value — not new-item price
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
