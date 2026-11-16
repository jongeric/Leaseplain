import pkg from "next/dist/server/og/image-response.js";
const { ImageResponse } = pkg;
import { writeFileSync } from "node:fs";
import { centerCard, SIZE } from "./og-card.mjs";

const card = centerCard({
  lines: ["For Tenant-Rights Lawyers", "& Paralegals"],
  headingSize: 54,
  subtitle: "Reach renters who need representation. Get listed. Grow your practice.",
  chips: ["High-intent clients", "Verified listings", "By city"],
});

writeFileSync("public/og/for-lawyers.png", Buffer.from(await new ImageResponse(card, { ...SIZE }).arrayBuffer()));
console.log("wrote public/og/for-lawyers.png");
