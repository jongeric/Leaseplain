// Generates public/logo.png — the brand logo referenced by the Organization
// JSON-LD (schema.org logo). White background, brand-blue document mark +
// wordmark, sized for schema/logo use. Run: node scripts/gen-logo.mjs
import pkg from "next/dist/server/og/image-response.js";
const { ImageResponse } = pkg;
import { writeFileSync } from "node:fs";
import { createElement as h } from "react";

const SIZE = { width: 400, height: 120 }; // 2x for crispness

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
        width: "72px", height: "72px", background: "#2563eb",
        borderRadius: "18px", display: "flex", alignItems: "center", justifyContent: "center",
      },
    },
    h(
      "svg",
      { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none" },
      h("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
      h("polyline", { points: "14 2 14 8 20 8", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
      h("line", { x1: "16", y1: "13", x2: "8", y2: "13", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
      h("line", { x1: "16", y1: "17", x2: "8", y2: "17", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
      h("polyline", { points: "10 9 9 9 8 9", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
    ),
  ),
  h("span", { style: { fontSize: "48px", fontWeight: 700, color: "#0f172a", letterSpacing: "-1px" } }, "LeasePlain"),
);

const res = new ImageResponse(el, { ...SIZE });
const buf = Buffer.from(await res.arrayBuffer());
writeFileSync("public/logo.png", buf);
console.log(`wrote public/logo.png (${buf.length} bytes)`);
