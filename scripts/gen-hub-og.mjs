// Renders static OpenGraph card PNGs for the comparison / data hubs.
// Next.js serves an opengraph-image.png placed in a route directory, so each
// card is written into its hub's app/ folder. Civic Modern design, shared with
// the blog cards via scripts/og-card.mjs.
import pkg from "next/dist/server/og/image-response.js";
const { ImageResponse } = pkg;
import { writeFileSync, mkdirSync } from "node:fs";
import { card, SIZE } from "./og-card.mjs";

// [route dir under app/, title, category]
const hubs = [
  // US by-state hubs (held noindex, but cards help when shared)
  ["united-states/security-deposit-limits-by-state", "Security Deposit Limits by State", "United States"],
  ["united-states/rent-control-by-state", "Rent Control by State", "United States"],
  ["united-states/eviction-notice-periods-by-state", "Eviction Notice Periods by State", "United States"],
  ["united-states/landlord-entry-rules-by-state", "Landlord Entry Rules by State", "United States"],
  // Canada national comparison / data hubs
  ["security-deposit-limits-canada", "Security Deposit Limits by Province in Canada", "Canada"],
  ["rent-increase-rules-canada", "Rent Increase Rules by Province in Canada", "Canada"],
  ["eviction-notice-periods-canada", "Eviction Notice Periods by Province", "Canada"],
  ["landlord-entry-rules-canada", "Landlord Entry Rules by Province", "Canada"],
  ["breaking-a-lease-canada", "Breaking a Lease: Rules by Province", "Canada"],
  ["pet-rules-by-province-canada", "Can a Landlord Say No Pets? By Province", "Canada"],
  ["average-rent-by-city-canada", "Average Rent by City in Canada", "Canada"],
  ["ontario-rent-increase-history", "Ontario Rent Increase Guideline History", "Ontario"],
  ["bc-rent-increase-history", "BC Rent Increase History", "British Columbia"],
  ["ltb-fees-timeline", "LTB Fees & Wait Times", "Ontario"],
];

for (const [route, title, category] of hubs) {
  const res = new ImageResponse(card(title, category), { ...SIZE });
  const buf = Buffer.from(await res.arrayBuffer());
  const dir = `app/${route}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/opengraph-image.png`, buf);
  console.log(`wrote ${dir}/opengraph-image.png (${buf.length} bytes)`);
}
