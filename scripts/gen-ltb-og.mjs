import pkg from "next/dist/server/og/image-response.js";
const { ImageResponse } = pkg;
import { writeFileSync } from "node:fs";
import { centerCard, SIZE } from "./og-card.mjs";

const card = centerCard({
  lines: ["Ontario LTB Forms, Explained"],
  headingSize: 58,
  subtitle: "Every N and T form in plain English — what it means and what to do",
  chips: ["N4", "N12", "N13", "T2", "T6"],
  checks: false,
});

writeFileSync("public/og/ltb-forms.png", Buffer.from(await new ImageResponse(card, { ...SIZE }).arrayBuffer()));
console.log("wrote public/og/ltb-forms.png");
