import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Timeline of Ontario's N5 notice process: day 0 the N5 is served, days 1 to 7 are the voiding window where the tenant can repair damage or clean to void the notice, from day 8 the landlord may file an L2 application with the LTB, and a second N5 within 6 months cannot be voided";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STEPS = [
  {
    label: "Day 0",
    title: "N5 served",
    desc: "Landlord serves N5 for damage, cleanliness, or interference",
    color: "#334155",
    bg: "#f1f5f9",
    border: "#cbd5e1",
  },
  {
    label: "Days 1–7",
    title: "Voiding window",
    desc: "Repair the damage, pay repair costs, or clean — the N5 becomes void",
    color: "#1e40af",
    bg: "#eff6ff",
    border: "#2563eb",
  },
  {
    label: "Day 8+",
    title: "LTB application",
    desc: "If not voided, landlord may file Form L2 seeking eviction and costs",
    color: "#991b1b",
    bg: "#fef2f2",
    border: "#fca5a5",
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
        <div style={{ display: "flex", fontSize: "38px", fontWeight: 700, color: "#0f172a", marginBottom: "10px" }}>
          The Ontario N5 Notice: Your 7-Day Window
        </div>
        <div style={{ display: "flex", fontSize: "24px", color: "#475569", marginBottom: "44px" }}>
          What happens after a landlord serves an N5 for damage or cleanliness
        </div>

        <div style={{ display: "flex", alignItems: "stretch", gap: "0px" }}>
          {STEPS.map((s, i) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "310px",
                  background: s.bg,
                  border: `3px solid ${s.border}`,
                  borderRadius: "18px",
                  padding: "24px 28px",
                }}
              >
                <div style={{ display: "flex", fontSize: "22px", fontWeight: 700, color: "#64748b", marginBottom: "6px" }}>
                  {s.label}
                </div>
                <div style={{ display: "flex", fontSize: "27px", fontWeight: 700, color: s.color, marginBottom: "10px" }}>
                  {s.title}
                </div>
                <div style={{ display: "flex", fontSize: "21px", color: "#334155", lineHeight: 1.4 }}>
                  {s.desc}
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <div style={{ display: "flex", width: "28px", height: "3px", background: "#94a3b8", margin: "0 8px" }} />
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            background: "#fffbeb",
            border: "3px solid #fcd34d",
            borderRadius: "14px",
            padding: "18px 28px",
            marginTop: "36px",
            fontSize: "23px",
            fontWeight: 700,
            color: "#92400e",
          }}
        >
          A second N5 within 6 months cannot be voided — the landlord can apply to the LTB immediately
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto" }}>
          <div style={{ display: "flex", fontSize: "20px", color: "#94a3b8" }}>
            Ontario Residential Tenancies Act, 2006 — s.33, s.34, s.62
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
