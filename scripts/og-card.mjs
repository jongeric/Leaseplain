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
const BODY = "'Inter', sans-serif";
const DISPLAY = "Georgia, 'Times New Roman', serif";

// Honey icon box + "Lease" cream / "Plain" honey wordmark (shared).
function wordmark(iconStroke = SLATE) {
  return h(
    "div",
    { style: { display: "flex", alignItems: "center", gap: "18px", marginBottom: "32px" } },
    h(
      "div",
      { style: { width: "64px", height: "64px", background: HONEY, borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center" } },
      h(
        "svg",
        { width: "36", height: "36", viewBox: "0 0 24 24", fill: "none" },
        h("polyline", { points: "6 12 10.5 16.5 18 7.5", stroke: iconStroke, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }),
        h("line", { x1: "7", y1: "19.2", x2: "17", y2: "19.2", stroke: iconStroke, strokeWidth: "2.2", strokeLinecap: "round" }),
      ),
    ),
    h(
      "div",
      { style: { display: "flex", fontSize: "36px", fontWeight: 700, letterSpacing: "-0.5px" } },
      h("span", { style: { color: CREAM } }, "Lease"),
      h("span", { style: { color: HONEY } }, "Plain"),
    ),
  );
}

// Centered single-card layout used by the page-level OG generators
// (answers, checklists, letters, ltb-forms, directory, for-lawyers).
// def: { lines: string[], subtitle, chips: string[], headingSize?, checks? }
// checks defaults true (checkmark chips); false renders plain label chips (LTB forms).
export function centerCard(def) {
  const headingSize = def.headingSize ?? 60;
  const checks = def.checks !== false;

  const chip = (label) =>
    h(
      "div",
      { key: label, style: { display: "flex", alignItems: "center", gap: "10px", background: "rgba(207,154,91,0.16)", border: `1px solid rgba(207,154,91,0.45)`, borderRadius: "12px", padding: "12px 20px", color: CREAM, fontSize: "18px", fontWeight: 600, fontFamily: BODY } },
      checks
        ? h(
            "svg",
            { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none" },
            h("polyline", { points: "20 6 9 17 4 12", stroke: HONEY, strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }),
          )
        : null,
      h("div", { style: { display: "flex" } }, label),
    );

  return h(
    "div",
    {
      style: {
        background: `linear-gradient(135deg, ${SLATE} 0%, ${SLATE_2} 100%)`,
        width: "100%", height: "100%", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", fontFamily: DISPLAY, padding: "60px",
      },
    },
    wordmark(),
    h(
      "div",
      { style: { display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" } },
      ...def.lines.map((line, i) =>
        h("div", { key: i, style: { display: "flex", fontSize: `${headingSize}px`, fontWeight: 700, color: CREAM, textAlign: "center", lineHeight: 1.1, letterSpacing: "-0.5px", fontFamily: DISPLAY } }, line),
      ),
    ),
    h(
      "div",
      { style: { display: "flex", fontSize: "25px", color: "rgba(247,241,231,0.82)", textAlign: "center", marginBottom: "44px", maxWidth: "800px", lineHeight: 1.3, fontFamily: BODY } },
      def.subtitle,
    ),
    h("div", { style: { display: "flex", gap: "18px" } }, ...def.chips.map(chip)),
    h("div", { style: { position: "absolute", bottom: "32px", right: "48px", color: "rgba(247,241,231,0.55)", fontSize: "18px", fontFamily: BODY } }, "leaseplain.com"),
  );
}

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
            h("polyline", { points: "6 12 10.5 16.5 18 7.5", stroke: SLATE, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }),
            h("line", { x1: "7", y1: "19.2", x2: "17", y2: "19.2", stroke: SLATE, strokeWidth: "2.2", strokeLinecap: "round" }),
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
