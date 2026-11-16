import pkg from "next/dist/server/og/image-response.js";
const { ImageResponse } = pkg;
import { writeFileSync } from "node:fs";
import { centerCard, SIZE } from "./og-card.mjs";

const card = centerCard({
  lines: ["Free Tenant Letter Generators"],
  headingSize: 58,
  subtitle: "Fill in the blanks — copy, print, or save a ready-to-send letter",
  chips: ["Repair requests", "Rent disputes", "Move-out notice"],
});

writeFileSync("public/og/letters.png", Buffer.from(await new ImageResponse(card, { ...SIZE }).arrayBuffer()));
console.log("wrote public/og/letters.png");
