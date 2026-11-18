// Renders static OpenGraph card PNGs for the site root and section landing
// pages. Civic Modern palette (soft slate ground, cream text, honey accents),
// matching scripts/og-card.mjs. Dynamic next/og routes 500 on the Cloudflare
// edge runtime, so these are prerendered to committed opengraph-image.png files.
import pkg from "next/dist/server/og/image-response.js";
const { ImageResponse } = pkg;
import { writeFileSync } from "node:fs";
import { createElement as h } from "react";

const SIZE = { width: 1200, height: 630 };

// Civic Modern brand tokens (match app/globals.css + scripts/og-card.mjs)
const SLATE = "#3e4f63";
const SLATE_2 = "#2f3d4e";
const CREAM = "#f7f1e7";
const HONEY = "#cf9a5b";
const BODY = "'Inter', sans-serif";
const DISPLAY = "Georgia, 'Times New Roman', serif";

// dir → card definition. `lines` is the heading split across visual lines.
const cards = {
  ".": {
    lines: ["Understand Your Lease", "in Plain English"],
    subtitle: "Upload a PDF or paste your lease text — get an instant plain-English breakdown",
    chips: ["Red Flag Detection", "Financial Terms", "Questions to Ask"],
    headingSize: 58,
    subtitleSize: 26,
  },
  blog: {
    badge: "BLOG",
    lines: ["Canadian Rental Law Blog"],
    subtitle: "Rent increase rules, eviction guides, and plain-English tenant rights updates",
    chips: ["Ontario", "BC", "Alberta", "Quebec"],
    headingSize: 64,
    subtitleSize: 24,
  },
  canada: {
    lines: ["Canadian Tenant Rights", "by Province"],
    subtitle: "Know your rights under Ontario, BC, Alberta, Quebec & more provincial tenancy laws",
    chips: ["10 provinces covered", "Plain English", "Free guides"],
  },
  glossary: {
    lines: ["Lease Glossary"],
    subtitle: "Plain-English definitions for every term in your residential lease",
    chips: ["Security deposit", "Rent increase", "Subletting"],
  },
  "lease-clauses": {
    lines: ["Lease Clause Explanations"],
    subtitle: "What every clause in your lease actually means — and when it's enforceable",
    chips: ["10 clause types", "Province-specific rules", "Free"],
  },
  locations: {
    lines: ["Lease Help by Location"],
    subtitle: "Find tenant rights guides for your province, city, or US state",
    chips: ["All Canadian provinces", "Major cities", "US states"],
  },
  resources: {
    lines: ["Lease Guides for Renters", "& Landlords"],
    subtitle: "Plain-English guides to understand leases, spot red flags, and know what to check",
    chips: ["Before you sign", "AI lease review", "Tenant guides"],
  },
  "tenant-rights": {
    lines: ["Tenant Rights Guides"],
    subtitle: "Province-by-province tenant rights, eviction rules, notice periods, and dispute resources",
    chips: ["Canada", "United States", "Plain English"],
  },
  tools: {
    lines: ["Free Tools for Canadian Renters"],
    subtitle: "Free calculators — rent increase, deposits, notice periods, eviction checkers & more",
    chips: ["No sign-up", "Covers all provinces", "Instant results"],
  },
};

function logoSvg() {
  // Plainmark: a check over a clean baseline.
  return h(
    "svg",
    { width: "36", height: "36", viewBox: "0 0 24 24", fill: "none" },
    h("polyline", { points: "6 12 10.5 16.5 18 7.5", stroke: SLATE, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }),
    h("line", { x1: "7", y1: "19.2", x2: "17", y2: "19.2", stroke: SLATE, strokeWidth: "2.2", strokeLinecap: "round" }),
  );
}

function card(def) {
  const headingSize = def.headingSize ?? 60;
  const subtitleSize = def.subtitleSize ?? 25;
  const children = [];

  // Logo: honey icon box + "Lease" cream / "Plain" honey wordmark
  children.push(
    h(
      "div",
      { key: "logo", style: { display: "flex", alignItems: "center", gap: "18px", marginBottom: "32px" } },
      h(
        "div",
        { style: { width: "64px", height: "64px", background: HONEY, borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center" } },
        logoSvg(),
      ),
      h(
        "div",
        { style: { display: "flex", fontSize: "36px", fontWeight: 700, letterSpacing: "-0.5px" } },
        h("span", { style: { color: CREAM } }, "Lease"),
        h("span", { style: { color: HONEY } }, "Plain"),
      ),
    ),
  );

  if (def.badge) {
    children.push(
      h(
        "div",
        { key: "badge", style: { background: "rgba(207,154,91,0.18)", border: `1px solid rgba(207,154,91,0.5)`, borderRadius: "999px", padding: "8px 20px", color: HONEY, fontSize: "18px", fontWeight: 600, marginBottom: "24px", letterSpacing: "0.5px", fontFamily: BODY } },
        def.badge,
      ),
    );
  }

  // Heading (serif, stacked lines)
  children.push(
    h(
      "div",
      { key: "h1", style: { display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" } },
      ...def.lines.map((line, i) =>
        h("div", { key: i, style: { display: "flex", fontSize: `${headingSize}px`, fontWeight: 700, color: CREAM, textAlign: "center", lineHeight: 1.1, letterSpacing: "-0.5px", fontFamily: DISPLAY } }, line),
      ),
    ),
  );

  // Subtitle (sans)
  children.push(
    h(
      "div",
      { key: "sub", style: { display: "flex", fontSize: `${subtitleSize}px`, color: "rgba(247,241,231,0.82)", textAlign: "center", marginBottom: "44px", maxWidth: "780px", lineHeight: 1.3, fontFamily: BODY } },
      def.subtitle,
    ),
  );

  // Chips (honey-tinted)
  children.push(
    h(
      "div",
      { key: "chips", style: { display: "flex", gap: "20px" } },
      ...def.chips.map((c) =>
        h(
          "div",
          { key: c, style: { display: "flex", alignItems: "center", gap: "10px", background: "rgba(207,154,91,0.16)", border: `1px solid rgba(207,154,91,0.45)`, borderRadius: "12px", padding: "12px 20px", color: CREAM, fontSize: "18px", fontWeight: 600, fontFamily: BODY } },
          h(
            "svg",
            { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none" },
            h("polyline", { points: "20 6 9 17 4 12", stroke: HONEY, strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }),
          ),
          h("div", { style: { display: "flex" } }, c),
        ),
      ),
    ),
  );

  children.push(
    h("div", { key: "domain", style: { position: "absolute", bottom: "32px", right: "48px", color: "rgba(247,241,231,0.55)", fontSize: "18px", fontFamily: BODY } }, "leaseplain.com"),
  );

  return h(
    "div",
    {
      style: {
        background: `linear-gradient(135deg, ${SLATE} 0%, ${SLATE_2} 100%)`,
        width: "100%", height: "100%", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", fontFamily: DISPLAY, padding: "60px",
      },
    },
    ...children,
  );
}

for (const [dir, def] of Object.entries(cards)) {
  const res = new ImageResponse(card(def), { ...SIZE });
  const buf = Buffer.from(await res.arrayBuffer());
  const path = dir === "." ? "app/opengraph-image.png" : `app/${dir}/opengraph-image.png`;
  writeFileSync(path, buf);
  console.log(`wrote ${path} (${buf.length} bytes)`);
}
