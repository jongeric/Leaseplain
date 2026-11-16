import pkg from "next/dist/server/og/image-response.js";
const { ImageResponse } = pkg;
import { writeFileSync } from "node:fs";
import { centerCard, SIZE } from "./og-card.mjs";

const card = centerCard({
  lines: ["Free Printable Tenant Checklists"],
  headingSize: 58,
  subtitle: "Before you sign, move in, and move out — print or save as PDF",
  chips: ["Before you sign", "Move-in", "Move-out"],
});

writeFileSync("public/og/checklists.png", Buffer.from(await new ImageResponse(card, { ...SIZE }).arrayBuffer()));
console.log("wrote public/og/checklists.png");
