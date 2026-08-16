// Printable tenant checklists. Rendered on-page and printable/savable as PDF.

export interface ChecklistSection {
  heading: string;
  items: string[];
}

export interface ChecklistDef {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  intro: string;
  sections: ChecklistSection[];
  keywords: string[];
  related: Array<{ label: string; href: string }>;
}

export const CHECKLISTS: ChecklistDef[] = [
  {
    slug: "before-you-sign-a-lease",
    title: "Before You Sign a Lease: Tenant Checklist (Ontario)",
    h1: "Before You Sign a Lease — Checklist",
    metaDescription:
      "A printable checklist of everything to verify before you sign a rental lease in Ontario — the unit, the terms, the deposit rules, and the red flags to catch first.",
    intro:
      "Signing is the moment you have the most leverage — and the least, once the ink is dry. Run through this before you commit. Print it or save it as a PDF to bring to your viewing.",
    sections: [
      {
        heading: "Inspect the unit",
        items: [
          "Test taps, toilet, shower pressure, and hot water",
          "Check heating and any air conditioning actually work",
          "Look for signs of pests, mould, or water damage",
          "Confirm all appliances included work",
          "Test window and door locks; check smoke and CO detectors",
          "Note existing damage with dated photos before you move in",
        ],
      },
      {
        heading: "Check the lease terms",
        items: [
          "Confirm it uses the Ontario Standard Lease (Form 2229E)",
          "Verify the rent amount, due date, and what's included (heat, water, hydro, parking)",
          "Check the term — fixed-term end date vs. month-to-month",
          "Read any added terms in the extra-clauses section carefully",
          "Confirm there is no illegal 'no pets' or damage-deposit clause",
        ],
      },
      {
        heading: "Money and deposits",
        items: [
          "Only a last month's rent deposit is legal in Ontario — no damage deposit",
          "Confirm the deposit is no more than one month's rent",
          "Get every payment receipted or use a traceable method",
          "Ask how you'll receive annual interest on your deposit",
        ],
      },
      {
        heading: "Before you commit",
        items: [
          "Meet or confirm who the landlord/property manager is",
          "Get all verbal promises added to the written lease",
          "Keep a signed copy of the lease for your records",
          "Never pay a deposit for a unit you haven't seen",
        ],
      },
    ],
    keywords: ["before you sign a lease checklist", "renting checklist ontario", "what to check before renting"],
    related: [
      { label: "7 lease red flags to watch for", href: "/blog/lease-red-flags-to-watch-for" },
      { label: "Ontario Standard Lease explained", href: "/blog/ontario-standard-lease-explained" },
      { label: "Last month's rent deposit rules", href: "/blog/last-months-rent-deposit-ontario" },
    ],
  },
  {
    slug: "move-in-checklist",
    title: "Move-In Checklist for Tenants (Ontario)",
    h1: "Move-In Checklist",
    metaDescription:
      "A printable move-in checklist for Ontario tenants — document the unit's condition, set up utilities, and protect your deposit from day one.",
    intro:
      "The first 48 hours protect you for the whole tenancy. Document everything now so a move-out dispute later is easy to win. Print or save this as a PDF.",
    sections: [
      {
        heading: "Document the condition (day one)",
        items: [
          "Photograph and video every room before you unpack",
          "Capture existing scuffs, stains, chips, and worn areas with timestamps",
          "Note any issues in writing and email them to your landlord",
          "Test everything again: heat, water, appliances, locks, detectors",
        ],
      },
      {
        heading: "Set up essentials",
        items: [
          "Transfer or set up hydro, gas, internet as required",
          "Confirm which utilities the landlord pays vs. you",
          "Get all keys, fobs, and mailbox access; confirm any refundable key deposit is at cost",
          "Locate the breaker panel, water shut-off, and thermostat",
        ],
      },
      {
        heading: "Paperwork",
        items: [
          "Store your signed lease and all receipts together",
          "Save your landlord's contact details for repair requests",
          "Update your address (ID, bank, employer, mail forwarding)",
          "Consider tenant insurance for your belongings",
        ],
      },
    ],
    keywords: ["move in checklist ontario", "tenant move in inspection", "rental move in checklist"],
    related: [
      { label: "First apartment checklist", href: "/blog/first-apartment-checklist-canada" },
      { label: "Normal wear and tear vs damage", href: "/blog/normal-wear-and-tear-vs-damage-canada" },
      { label: "Repair request letter generator", href: "/letters/repair-request-letter" },
    ],
  },
  {
    slug: "move-out-checklist",
    title: "Move-Out Checklist for Tenants (Ontario)",
    h1: "Move-Out Checklist",
    metaDescription:
      "A printable move-out checklist for Ontario tenants — serve proper notice, document the unit, and protect your last month's rent deposit.",
    intro:
      "Moving out well is mostly about proof and timing. Follow these steps to give proper notice and leave with no disputes hanging over you. Print or save as a PDF.",
    sections: [
      {
        heading: "Notice and timing",
        items: [
          "Give at least 60 days' written notice on Form N9 (monthly tenancy)",
          "Make sure your termination date is the last day of a rental period",
          "Keep proof you served the notice (saved email or a copy)",
          "Confirm you can't be forced out early from a fixed term without agreement",
        ],
      },
      {
        heading: "Clean and repair",
        items: [
          "Clean the unit to the condition you received it (minus normal wear)",
          "Repair any damage you caused — but not normal wear and tear",
          "Remove all belongings and garbage",
          "Return keys, fobs, and remotes",
        ],
      },
      {
        heading: "Protect yourself",
        items: [
          "Photograph and video every room after cleaning, with timestamps",
          "Do a walkthrough with the landlord if possible",
          "Provide a forwarding address in writing",
          "Remember: your last month's rent deposit covers your final month — it can't be kept for cleaning or damage",
          "Request any unpaid deposit interest you're owed",
        ],
      },
    ],
    keywords: ["move out checklist ontario", "moving out tenant checklist", "get deposit back ontario"],
    related: [
      { label: "Moving out in Ontario: full guide", href: "/blog/moving-out-ontario-checklist" },
      { label: "How much notice to move out", href: "/blog/notice-to-move-out-ontario" },
      { label: "Notice to end tenancy letter", href: "/letters/notice-to-end-tenancy-letter" },
    ],
  },
];

export function getChecklist(slug: string): ChecklistDef | undefined {
  return CHECKLISTS.find((c) => c.slug === slug);
}
