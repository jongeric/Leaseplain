// Renders static OpenGraph card PNGs for blog posts using next/og in Node.
// Dynamic next/og routes 500 on the Cloudflare edge runtime, so we prerender
// to committed opengraph-image.png files (matching the existing posts).
import pkg from "next/dist/server/og/image-response.js";
const { ImageResponse } = pkg;
import { writeFileSync, mkdirSync } from "node:fs";
import { createElement as h } from "react";

const SIZE = { width: 1200, height: 630 };

const posts = [
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
];

function card(title, category = "Ontario") {
  return h(
    "div",
    {
      style: {
        background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
        padding: "64px 72px",
      },
    },
    // Top row: wordmark + category
    h(
      "div",
      { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
      h(
        "div",
        { style: { display: "flex", alignItems: "center", gap: "18px" } },
        h(
          "div",
          {
            style: {
              width: "64px", height: "64px", background: "rgba(255,255,255,0.15)",
              borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center",
            },
          },
          h(
            "svg",
            { width: "36", height: "36", viewBox: "0 0 24 24", fill: "none" },
            h("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
            h("polyline", { points: "14 2 14 8 20 8", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
            h("line", { x1: "16", y1: "13", x2: "8", y2: "13", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
            h("line", { x1: "16", y1: "17", x2: "8", y2: "17", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
            h("polyline", { points: "10 9 9 9 8 9", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
          ),
        ),
        h("span", { style: { fontSize: "34px", fontWeight: 700, color: "white", letterSpacing: "-0.5px" } }, "LeasePlain"),
      ),
      h(
        "div",
        {
          style: {
            background: "rgba(255,255,255,0.15)", borderRadius: "999px",
            padding: "10px 24px", color: "white", fontSize: "22px", fontWeight: 600,
          },
        },
        category,
      ),
    ),
    // Title
    h(
      "div",
      {
        style: {
          display: "flex",
          fontSize: title.length > 70 ? "56px" : "66px",
          fontWeight: 800, color: "white", lineHeight: 1.12,
          letterSpacing: "-1px", maxWidth: "1000px",
        },
      },
      title,
    ),
    // Bottom row
    h(
      "div",
      { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
      h(
        "div",
        { style: { display: "flex", alignItems: "center", gap: "14px" } },
        h("div", { style: { width: "56px", height: "6px", background: "rgba(255,255,255,0.7)", borderRadius: "999px" } }),
        h("span", { style: { color: "rgba(255,255,255,0.85)", fontSize: "22px", fontWeight: 600 } }, "Plain-English tenant rights"),
      ),
      h("span", { style: { color: "rgba(255,255,255,0.6)", fontSize: "22px" } }, "leaseplain.com"),
    ),
  );
}

for (const [slug, title] of posts) {
  const res = new ImageResponse(card(title), { ...SIZE });
  const buf = Buffer.from(await res.arrayBuffer());
  const dir = `app/blog/${slug}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/opengraph-image.png`, buf);
  console.log(`wrote ${dir}/opengraph-image.png (${buf.length} bytes)`);
}
