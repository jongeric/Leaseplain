import pkg from "next/dist/server/og/image-response.js";
const { ImageResponse } = pkg;
import { writeFileSync } from "node:fs";
import { centerCard, SIZE } from "./og-card.mjs";

const card = centerCard({
  lines: ["Ontario Tenant Questions, Answered"],
  headingSize: 58,
  subtitle: "Straight, plain-English answers on rent, evictions, deposits & repairs",
  chips: ["Rent", "Evictions", "Deposits", "Repairs"],
});

writeFileSync("public/og/answers.png", Buffer.from(await new ImageResponse(card, { ...SIZE }).arrayBuffer()));
console.log("wrote public/og/answers.png");
