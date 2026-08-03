import { ImageResponse } from "next/og";

// Shared OpenGraph card renderer for blog posts. Keeps every post's social
// preview on-brand and consistent — dark blue gradient, LeasePlain wordmark,
// a category chip, and the post title. Used by each post's opengraph-image.tsx.

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export function blogOgImage(title: string, category = "Blog") {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
          padding: "64px 72px",
        }}
      >
        {/* Top: wordmark + category */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div style={{
              width: "64px", height: "64px", background: "rgba(255,255,255,0.15)",
              borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="14 2 14 8 20 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <polyline points="10 9 9 9 8 9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span style={{ fontSize: "34px", fontWeight: 700, color: "white", letterSpacing: "-0.5px" }}>
              LeasePlain
            </span>
          </div>
          <div style={{
            background: "rgba(255,255,255,0.15)", borderRadius: "999px",
            padding: "10px 24px", color: "white", fontSize: "22px", fontWeight: 600,
          }}>
            {category}
          </div>
        </div>

        {/* Middle: title */}
        <h1 style={{
          fontSize: title.length > 70 ? "56px" : "66px",
          fontWeight: 800, color: "white", lineHeight: 1.12,
          margin: 0, letterSpacing: "-1px", maxWidth: "1000px",
        }}>
          {title}
        </h1>

        {/* Bottom: accent bar + domain */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ width: "56px", height: "6px", background: "rgba(255,255,255,0.7)", borderRadius: "999px" }} />
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "22px", fontWeight: 600 }}>
              Plain-English tenant rights
            </span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "22px" }}>leaseplain.com</span>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
