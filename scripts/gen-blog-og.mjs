// Renders static OpenGraph card PNGs for blog posts using next/og in Node.
// Dynamic next/og routes 500 on the Cloudflare edge runtime, so we prerender
// to committed opengraph-image.png files (matching the existing posts).
import pkg from "next/dist/server/og/image-response.js";
const { ImageResponse } = pkg;
import { writeFileSync, mkdirSync } from "node:fs";
import { card, SIZE } from "./og-card.mjs";

const posts = [
  ["tenant-lawyer-cost-canada", "How Much Does a Tenant Lawyer Cost in Canada?"],
  ["subletting-without-permission-canada", "Subletting Without the Landlord's Permission: Your Rights"],
  ["rental-application-what-landlords-can-ask-canada", "What Can a Landlord Legally Ask For on a Rental Application?"],
  ["how-to-avoid-rental-scams-canada", "How to Spot and Avoid Rental Scams in Canada"],
  ["cosigner-guarantor-lease-rights-canada", "Co-signers & Guarantors on a Lease: Your Rights"],
  ["quiet-enjoyment-noise-complaints-canada", "Quiet Enjoyment & Noise Complaints: Your Rights"],
  ["landlord-must-provide-heat-canada", "Is My Landlord Required to Provide Heat?"],
  ["n12-own-use-eviction-family-member-canada", "Can My Landlord Evict Me to Move In a Family Member?"],
  ["ontario-rent-increase-2027-guideline", "Ontario Rent Increase Guideline 2027: 1.9%"],
  ["last-months-rent-deposit-ontario", "Last Month's Rent Deposit in Ontario: Rules, Interest & Refunds"],
  ["no-pet-clause-ontario", "Can Your Landlord Say “No Pets” in Ontario?"],
  ["subletting-assignment-ontario", "Subletting & Assigning Your Lease in Ontario"],
  ["notice-to-move-out-ontario", "How Much Notice to Move Out in Ontario?"],
  ["ltb-wait-times-2026", "How Long Does the LTB Take in 2026?"],
  ["n4-non-payment-rent-ontario", "Got an N4 in Ontario? Non-Payment of Rent, Explained"],
  ["landlord-heat-air-conditioning-ontario", "Is Your Landlord Required to Provide Heat & AC in Ontario?"],
  ["post-2018-rent-control-exemption-ontario", "Why Isn't My Rent Capped? The Post-2018 Exemption"],
  ["withholding-rent-repairs-ontario", "Can I Withhold Rent Over Repairs in Ontario?"],
  ["bad-faith-n12-t5-compensation-ontario", "Bad-Faith N12: What If Your Landlord Didn't Move In?"],
  ["how-to-break-a-lease-ontario", "How to Break a Lease in Ontario (Legally)"],
  ["bed-bugs-pests-landlord-ontario", "Bed Bugs & Pests: Who's Responsible in Ontario?"],
  ["roommates-co-tenants-ontario", "Roommates & Co-Tenants: Who's Liable in Ontario?"],
  ["illegal-basement-apartment-ontario", "Illegal Basement Apartment: Your Rights in Ontario"],
  ["landlord-harassment-ontario", "Landlord Harassment in Ontario: How to Stop It"],
  ["tenant-insurance-ontario", "Is Tenant Insurance Mandatory in Ontario?"],
  ["cash-for-keys-ontario", "Cash for Keys in Ontario: Should You Take the Deal?"],
  ["bc-security-deposit-rules", "BC Security Deposit Rules: Getting It Back"],
  ["bc-notice-to-end-tenancy", "How Much Notice to End a Tenancy in BC?"],
  ["bc-eviction-notices-rtb", "Can My Landlord Evict Me in BC?"],
  ["bc-rent-increase-rules", "BC Rent Increase Rules: Limits & Notice"],
  ["bc-breaking-a-lease", "Breaking a Lease in BC"],
  ["bc-landlord-repairs-maintenance", "Landlord Repairs & Maintenance in BC"],
  ["alberta-security-deposit-rules", "Alberta Security Deposit Rules & Refunds"],
  ["alberta-rent-increase-rules", "Alberta Rent Increase Rules: No Cap, Real Limits"],
  ["alberta-notice-to-end-tenancy", "How Much Notice to End a Tenancy in Alberta?"],
  ["alberta-eviction-process", "The Alberta Eviction Process Explained"],
  ["alberta-breaking-a-lease", "Breaking a Lease in Alberta"],
  ["alberta-landlord-repairs-maintenance", "Landlord Repairs & Maintenance in Alberta"],
  ["mould-in-a-rental-ontario", "Mould in a Rental: Whose Problem Is It?"],
  ["no-written-lease-tenant-rights-ontario", "No Written Lease in Ontario? Your Rights"],
  ["rooming-house-tenant-rights-ontario", "Rooming House Tenant Rights in Ontario"],
  ["rent-bank-arrears-help-ontario", "Behind on Rent? Rent Banks & Arrears Help"],
  ["how-to-dispute-a-rent-increase-ontario", "How to Dispute a Rent Increase in Ontario"],
  ["quebec-security-deposit-rules", "Can a Landlord Ask for a Deposit in Quebec?"],
  ["quebec-rent-increase-rules", "Quebec Rent Increase Rules: Refuse & Stay"],
  ["quebec-ending-your-lease", "Ending a Lease in Quebec"],
  ["quebec-repossession-eviction", "Repossession & Eviction in Quebec"],
  ["quebec-lease-assignment-sublet", "Assigning or Subletting a Lease in Quebec"],
  ["quebec-landlord-repairs", "Landlord Repairs & Maintenance in Quebec"],
  ["manitoba-security-deposit-rules", "Manitoba Security Deposit Rules"],
  ["manitoba-rent-increase-rules", "Manitoba Rent Increase Rules & Guideline"],
  ["manitoba-notice-to-end-tenancy", "How Much Notice to End a Tenancy in Manitoba?"],
  ["manitoba-eviction-process", "The Manitoba Eviction Process"],
  ["nova-scotia-security-deposit-rules", "Nova Scotia Security Deposit Rules"],
  ["nova-scotia-rent-increase-rules", "Nova Scotia Rent Increase Rules: The 5% Cap"],
  ["nova-scotia-notice-to-end-tenancy", "How Much Notice to End a Tenancy in Nova Scotia?"],
  ["nova-scotia-eviction-process", "The Nova Scotia Eviction Process"],
  ["saskatchewan-security-deposit-rules", "Saskatchewan Security Deposit Rules"],
  ["saskatchewan-rent-increase-rules", "Saskatchewan Rent Increase Rules"],
  ["saskatchewan-notice-to-end-tenancy", "How Much Notice to End a Tenancy in Saskatchewan?"],
  ["saskatchewan-eviction-process", "The Saskatchewan Eviction Process"],
  ["new-brunswick-security-deposit-rules", "New Brunswick Security Deposit Rules"],
  ["new-brunswick-rent-increase-rules", "New Brunswick Rent Increase Rules"],
  ["new-brunswick-notice-to-end-tenancy", "How Much Notice to End a Tenancy in New Brunswick?"],
  ["new-brunswick-eviction-process", "The New Brunswick Eviction Process"],
  ["pei-security-deposit-rules", "PEI Security Deposit Rules"],
  ["pei-rent-increase-rules", "PEI Rent Increase Rules: The IRAC Allowable Increase"],
  ["pei-notice-to-end-tenancy", "How Much Notice to End a Tenancy in PEI?"],
  ["pei-eviction-process", "The PEI Eviction Process"],
  ["newfoundland-security-deposit-rules", "Newfoundland Security Deposit Rules"],
  ["newfoundland-rent-increase-rules", "Newfoundland Rent Increase Rules"],
  ["newfoundland-notice-to-end-tenancy", "How Much Notice to End a Tenancy in Newfoundland?"],
  ["newfoundland-eviction-process", "The Newfoundland Eviction Process"],
];

for (const [slug, title] of posts) {
  const res = new ImageResponse(card(title), { ...SIZE });
  const buf = Buffer.from(await res.arrayBuffer());
  const dir = `app/blog/${slug}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/opengraph-image.png`, buf);
  console.log(`wrote ${dir}/opengraph-image.png (${buf.length} bytes)`);
}
