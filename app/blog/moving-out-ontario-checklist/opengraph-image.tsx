import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Timeline for moving out in Ontario: 60 or more days before, serve Form N9 written notice expiring on the last day of a rental period; final weeks, photograph the unit and book the elevator; final month, the last month's rent deposit is applied so you do not pay rent twice; move-out day, return keys and provide a forwarding address";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STEPS = [
  {
    label: "60+ days before",
    title: "Serve Form N9",
    desc: "Written notice expiring on the last day of a rental period",
  },
  {
    label: "Final weeks",
    title: "Document everything",
    desc: "Photograph every room; book elevators and movers",
  },
  {
    label: "Final month",
    title: "LMR applies",
    desc: "Your last month's rent deposit covers the final month",
  },
  {
    label: "Move-out day",
    title: "Hand over",
    desc: "Return all keys and give a forwarding address in writing",
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
          Moving Out in Ontario: The Timeline
        </div>
        <div style={{ display: "flex", fontSize: "23px", color: "#475569", marginBottom: "40px" }}>
          Four checkpoints between giving notice and getting your money back
        </div>

        <div style={{ display: "flex", gap: "0px", alignItems: "stretch" }}>
          {STEPS.map((s, i) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "236px",
                  background: i === 0 ? "#eff6ff" : "#f8fafc",
                  border: i === 0 ? "3px solid #2563eb" : "2px solid #e2e8f0",
                  borderRadius: "16px",
                  padding: "22px 24px",
                }}
              >
                <div style={{ display: "flex", fontSize: "19px", fontWeight: 700, color: "#2563eb", marginBottom: "8px" }}>
                  {s.label}
                </div>
                <div style={{ display: "flex", fontSize: "24px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
                  {s.title}
                </div>
                <div style={{ display: "flex", fontSize: "18px", color: "#475569", lineHeight: 1.4 }}>
                  {s.desc}
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <div style={{ display: "flex", width: "22px", height: "3px", background: "#94a3b8", margin: "0 6px" }} />
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
            padding: "16px 26px",
            marginTop: "36px",
            fontSize: "22px",
            fontWeight: 700,
            color: "#92400e",
          }}
        >
          Informal notice by text or email is not valid in Ontario — use LTB Form N9
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto" }}>
          <div style={{ display: "flex", fontSize: "20px", color: "#94a3b8" }}>
            Ontario Residential Tenancies Act, 2006
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
