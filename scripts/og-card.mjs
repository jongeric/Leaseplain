// Shared OpenGraph card design — Civic Modern (soft deep-slate ground, warm
// cream text, muted honey accent + "Plain" wordmark). Used by gen-blog-og.mjs
// and gen-hub-og.mjs so every social card is on-brand.
import { createElement as h } from "react";

export const SIZE = { width: 1200, height: 630 };

// Brand tokens (match app/globals.css Civic Modern palette)
const SLATE = "#3e4f63";
const SLATE_2 = "#2f3d4e";
const CREAM = "#f7f1e7";
const HONEY = "#cf9a5b";

export function card(title, category = "Canada") {
  return h(
    "div",
    {
      style: {
        background: `linear-gradient(135deg, ${SLATE} 0%, ${SLATE_2} 100%)`,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "Georgia, 'Times New Roman', serif",
        padding: "64px 72px",
      },
    },
    // Top row: wordmark + category pill
    h(
      "div",
      { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
      h(
        "div",
        { style: { display: "flex", alignItems: "center", gap: "18px" } },
        h(
          "div",
          {
            style: {
              width: "60px", height: "60px", background: HONEY,
              borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center",
            },
          },
          h(
            "svg",
            { width: "34", height: "34", viewBox: "0 0 24 24", fill: "none" },
            h("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", stroke: SLATE, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
            h("polyline", { points: "14 2 14 8 20 8", stroke: SLATE, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
            h("line", { x1: "16", y1: "13", x2: "8", y2: "13", stroke: SLATE, strokeWidth: "2", strokeLinecap: "round" }),
            h("line", { x1: "16", y1: "17", x2: "8", y2: "17", stroke: SLATE, strokeWidth: "2", strokeLinecap: "round" }),
            h("polyline", { points: "10 9 9 9 8 9", stroke: SLATE, strokeWidth: "2", strokeLinecap: "round" }),
          ),
        ),
        h(
          "div",
          { style: { display: "flex", fontSize: "34px", fontWeight: 700, letterSpacing: "-0.5px" } },
          h("span", { style: { color: CREAM } }, "Lease"),
          h("span", { style: { color: HONEY } }, "Plain"),
        ),
      ),
      h(
        "div",
        {
          style: {
            background: "rgba(207,154,91,0.18)", border: "1px solid rgba(207,154,91,0.5)",
            borderRadius: "999px", padding: "10px 24px", color: HONEY, fontSize: "22px", fontWeight: 600,
          },
        },
        category,
      ),
    ),
    // Title
    h(
      "div",
      {
        style: {
          display: "flex",
          fontSize: title.length > 70 ? "54px" : "64px",
          fontWeight: 700, color: CREAM, lineHeight: 1.12,
          letterSpacing: "-0.5px", maxWidth: "1040px",
        },
      },
      title,
    ),
    // Bottom row: honey accent bar + tagline + domain
    h(
      "div",
      { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
      h(
        "div",
        { style: { display: "flex", alignItems: "center", gap: "14px" } },
        h("div", { style: { width: "56px", height: "6px", background: HONEY, borderRadius: "999px" } }),
        h("span", { style: { color: "rgba(247,241,231,0.85)", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif" } }, "Plain-English tenant rights"),
      ),
      h("span", { style: { color: "rgba(247,241,231,0.6)", fontSize: "22px", fontFamily: "sans-serif" } }, "leaseplain.com"),
    ),
  );
}
