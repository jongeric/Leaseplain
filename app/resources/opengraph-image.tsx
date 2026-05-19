import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lease Resources for Renters | LeasePlain";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "32px" }}>
          <div style={{
            width: "72px", height: "72px", background: "rgba(255,255,255,0.15)",
            borderRadius: "18px", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="14 2 14 8 20 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <polyline points="10 9 9 9 8 9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{ fontSize: "36px", fontWeight: "700", color: "white", letterSpacing: "-0.5px" }}>
            LeasePlain
          </span>
        </div>

        <div style={{
          background: "rgba(255,255,255,0.12)", borderRadius: "12px",
          padding: "8px 20px", color: "rgba(255,255,255,0.85)", fontSize: "18px",
          fontWeight: "600", marginBottom: "24px", letterSpacing: "0.5px",
        }}>
          RESOURCES
        </div>

        <h1 style={{
          fontSize: "58px", fontWeight: "800", color: "white",
          textAlign: "center", lineHeight: "1.1", margin: "0 0 20px",
          letterSpacing: "-1px",
        }}>
          Lease Guides for Renters &amp; Landlords
        </h1>

        <p style={{
          fontSize: "24px", color: "rgba(255,255,255,0.8)",
          textAlign: "center", margin: "0 0 48px", maxWidth: "780px",
        }}>
          Plain-English guides to understand leases, spot red flags, and know what to check
        </p>

        <div style={{ display: "flex", gap: "20px" }}>
          {["Before you sign", "AI lease review", "Tenant guides"].map((chip) => (
            <div key={chip} style={{
              background: "rgba(255,255,255,0.15)", borderRadius: "12px",
              padding: "12px 20px", color: "white", fontSize: "18px", fontWeight: "600",
            }}>
              ✓ {chip}
            </div>
          ))}
        </div>

        <div style={{
          position: "absolute", bottom: "32px", right: "48px",
          color: "rgba(255,255,255,0.5)", fontSize: "18px",
        }}>
          leaseplain.com
        </div>
      </div>
    ),
    { ...size }
  );
}
