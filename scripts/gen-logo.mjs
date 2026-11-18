// Generates public/logo.png — the brand logo referenced by the Organization
// JSON-LD (schema.org logo). White background, Civic Modern honey document
// mark + two-tone wordmark, sized for schema/logo use. Run: node scripts/gen-logo.mjs
import pkg from "next/dist/server/og/image-response.js";
const { ImageResponse } = pkg;
import { writeFileSync } from "node:fs";
import { createElement as h } from "react";

const SIZE = { width: 400, height: 120 }; // 2x for crispness

// Civic Modern brand tokens (match app/globals.css + scripts/og-card.mjs)
const SLATE = "#2f3d4e";
const HONEY = "#cf9a5b";

const el = h(
  "div",
  {
    style: {
      width: "100%", height: "100%", background: "#ffffff",
      display: "flex", alignItems: "center", justifyContent: "center",
      gap: "20px", fontFamily: "sans-serif",
    },
  },
  h(
    "div",
    {
      style: {
        width: "72px", height: "72px", background: HONEY,
        borderRadius: "18px", display: "flex", alignItems: "center", justifyContent: "center",
      },
    },
    // Plainmark: a check over a clean baseline — a lease "made plain".
    h(
      "svg",
      { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none" },
      h("polyline", { points: "6 12 10.5 16.5 18 7.5", stroke: SLATE, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }),
      h("line", { x1: "7", y1: "19.2", x2: "17", y2: "19.2", stroke: SLATE, strokeWidth: "2.2", strokeLinecap: "round" }),
    ),
  ),
  h(
    "span",
    { style: { display: "flex", fontSize: "48px", fontWeight: 700, letterSpacing: "-1px" } },
    h("span", { style: { color: SLATE } }, "Lease"),
    h("span", { style: { color: HONEY } }, "Plain"),
  ),
);

const res = new ImageResponse(el, { ...SIZE });
const buf = Buffer.from(await res.arrayBuffer());
writeFileSync("public/logo.png", buf);
console.log(`wrote public/logo.png (${buf.length} bytes)`);
