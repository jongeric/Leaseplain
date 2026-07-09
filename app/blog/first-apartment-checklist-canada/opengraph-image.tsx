import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "First apartment checklist for Canadian renters in three phases: before signing (read every clause, verify the landlord, check deposit limits), at move-in (photograph every room, complete a condition inspection report, email a copy to the landlord), and keep on file (lease, photos, and all written communication for at least two years after moving out)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PHASES = [
  {
    title: "Before signing",
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#2563eb",
    items: ["Read every clause", "Verify the landlord", "Check deposit limits", "Confirm what's included"],
  },
  {
    title: "At move-in",
    color: "#166534",
    bg: "#f0fdf4",
    border: "#86efac",
    items: ["Photograph every room", "Condition inspection report", "Email landlord a copy", "Test locks and alarms"],
  },
  {
    title: "Keep on file",
    color: "#92400e",
    bg: "#fffbeb",
    border: "#fcd34d",
    items: ["Signed lease copy", "Move-in photos", "All written communication", "For 2+ years after moving out"],
  },
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
          First Apartment Checklist for Canadian Renters
        </div>
        <div style={{ display: "flex", fontSize: "23px", color: "#475569", marginBottom: "36px" }}>
          The three phases that protect your deposit and your rights
        </div>

        <div style={{ display: "flex", gap: "24px", flexGrow: 1 }}>
          {PHASES.map((p, i) => (
            <div
              key={p.title}
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                background: p.bg,
                border: `3px solid ${p.border}`,
                borderRadius: "18px",
                padding: "24px 28px",
              }}
            >
              <div style={{ display: "flex", fontSize: "20px", fontWeight: 700, color: "#64748b", marginBottom: "4px" }}>
                Phase {i + 1}
              </div>
              <div style={{ display: "flex", fontSize: "27px", fontWeight: 700, color: p.color, marginBottom: "16px" }}>
                {p.title}
              </div>
              {p.items.map((item) => (
                <div key={item} style={{ display: "flex", fontSize: "20px", color: "#334155", marginBottom: "10px" }}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "28px" }}>
          <div style={{ display: "flex", fontSize: "20px", color: "#94a3b8" }}>
            25-point full checklist inside
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
