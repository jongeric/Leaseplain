// Generates a Civic Modern favicon source PNG (honey rounded-square document
// mark on transparent), then assemble app/favicon.ico from it with ImageMagick:
//   node scripts/gen-favicon.mjs
//   convert public/favicon-src.png -define icon:auto-resize=48,32,16 app/favicon.ico
import pkg from "next/dist/server/og/image-response.js";
const { ImageResponse } = pkg;
import { writeFileSync } from "node:fs";
import { createElement as h } from "react";

const SIZE = { width: 512, height: 512 };

// Civic Modern brand tokens (match app/globals.css + scripts/og-card.mjs)
const SLATE = "#2f3d4e";
const HONEY = "#cf9a5b";

const el = h(
  "div",
  {
    style: {
      width: "100%", height: "100%", background: "transparent",
      display: "flex", alignItems: "center", justifyContent: "center",
    },
  },
  h(
    "div",
    {
      style: {
        width: "448px", height: "448px", background: HONEY,
        borderRadius: "104px", display: "flex", alignItems: "center", justifyContent: "center",
      },
    },
    // Plainmark glyph (check over a baseline), thicker strokes so it reads at 16px.
    h(
      "svg",
      { width: "268", height: "268", viewBox: "0 0 24 24", fill: "none" },
      h("polyline", { points: "5.5 12 10.5 17 18.5 7", stroke: SLATE, strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round" }),
      h("line", { x1: "6.5", y1: "20", x2: "17.5", y2: "20", stroke: SLATE, strokeWidth: "2.8", strokeLinecap: "round" }),
    ),
  ),
);

const res = new ImageResponse(el, { ...SIZE });
const buf = Buffer.from(await res.arrayBuffer());
writeFileSync("public/favicon-src.png", buf);
console.log(`wrote public/favicon-src.png (${buf.length} bytes)`);
