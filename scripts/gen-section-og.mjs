// Renders static OpenGraph card PNGs for the site root and section landing
// pages, reproducing the existing centered opengraph-image.tsx design.
// Dynamic next/og routes 500 on the Cloudflare edge runtime, so these are
// prerendered to committed opengraph-image.png files.
import pkg from "next/dist/server/og/image-response.js";
const { ImageResponse } = pkg;
import { writeFileSync } from "node:fs";
import { createElement as h } from "react";

const SIZE = { width: 1200, height: 630 };

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
    subtitle: "9 free calculators — rent increase, deposits, notice periods, eviction checkers & more",
    chips: ["No sign-up", "Covers all provinces", "Instant results"],
  },
};

function logoSvg() {
  return h(
    "svg",
    { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none" },
    h("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
    h("polyline", { points: "14 2 14 8 20 8", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
    h("line", { x1: "16", y1: "13", x2: "8", y2: "13", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
    h("line", { x1: "16", y1: "17", x2: "8", y2: "17", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
    h("polyline", { points: "10 9 9 9 8 9", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
  );
}

function card(def) {
  const headingSize = def.headingSize ?? 60;
  const subtitleSize = def.subtitleSize ?? 25;
  const children = [];

  // Logo
  children.push(
    h(
      "div",
      { key: "logo", style: { display: "flex", alignItems: "center", gap: "20px", marginBottom: "32px" } },
      h(
        "div",
        { style: { width: "72px", height: "72px", background: "rgba(255,255,255,0.15)", borderRadius: "18px", display: "flex", alignItems: "center", justifyContent: "center" } },
        logoSvg(),
      ),
      h("span", { style: { fontSize: "36px", fontWeight: 700, color: "white", letterSpacing: "-0.5px" } }, "LeasePlain"),
    ),
  );

  // Optional badge
  if (def.badge) {
    children.push(
      h(
        "div",
        { key: "badge", style: { background: "rgba(255,255,255,0.12)", borderRadius: "12px", padding: "8px 20px", color: "rgba(255,255,255,0.85)", fontSize: "18px", fontWeight: 600, marginBottom: "24px", letterSpacing: "0.5px" } },
        def.badge,
      ),
    );
  }

  // Heading (lines stacked)
  children.push(
    h(
      "div",
      { key: "h1", style: { display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" } },
      ...def.lines.map((line, i) =>
        h("div", { key: i, style: { display: "flex", fontSize: `${headingSize}px`, fontWeight: 800, color: "white", textAlign: "center", lineHeight: 1.1, letterSpacing: "-1px" } }, line),
      ),
    ),
  );

  // Subtitle
  children.push(
    h(
      "div",
      { key: "sub", style: { display: "flex", fontSize: `${subtitleSize}px`, color: "rgba(255,255,255,0.8)", textAlign: "center", marginBottom: "48px", maxWidth: "760px", lineHeight: 1.3 } },
      def.subtitle,
    ),
  );

  // Chips
  children.push(
    h(
      "div",
      { key: "chips", style: { display: "flex", gap: "24px" } },
      ...def.chips.map((c) =>
        h(
          "div",
          { key: c, style: { display: "flex", alignItems: "center", gap: "10px", background: "rgba(255,255,255,0.15)", borderRadius: "12px", padding: "12px 20px", color: "white", fontSize: "18px", fontWeight: 600 } },
          h(
            "svg",
            { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none" },
            h("polyline", { points: "20 6 9 17 4 12", stroke: "white", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }),
          ),
          h("div", { style: { display: "flex" } }, c),
        ),
      ),
    ),
  );

  // Domain
  children.push(
    h("div", { key: "domain", style: { position: "absolute", bottom: "32px", right: "48px", color: "rgba(255,255,255,0.5)", fontSize: "18px" } }, "leaseplain.com"),
  );

  return h(
    "div",
    {
      style: {
        background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
        width: "100%", height: "100%", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", padding: "60px",
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
