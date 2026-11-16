import pkg from "next/dist/server/og/image-response.js";
const { ImageResponse } = pkg;
import { writeFileSync } from "node:fs";
import { centerCard, SIZE } from "./og-card.mjs";

const card = centerCard({
  lines: ["Find a Tenant Lawyer", "or Paralegal in Ontario"],
  headingSize: 56,
  subtitle: "Free clinics, duty counsel, licensed paralegals & lawyers — by city",
  chips: ["Free options first", "LTB representation", "By city"],
});

writeFileSync("public/og/tenant-lawyer.png", Buffer.from(await new ImageResponse(card, { ...SIZE }).arrayBuffer()));
console.log("wrote public/og/tenant-lawyer.png");
