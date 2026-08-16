// Ontario Landlord and Tenant Board (LTB) forms reference. An authoritative,
// plain-English guide to the forms tenants file and receive. Descriptions are
// general information (not legal advice) — the hub links to Tribunals Ontario
// for the official forms and current details.

export type FormGroup = "tenant-notice" | "tenant-application" | "landlord-notice" | "landlord-application";

export const GROUP_LABEL: Record<FormGroup, string> = {
  "tenant-notice": "Notices you (the tenant) give",
  "tenant-application": "Applications you (the tenant) file",
  "landlord-notice": "Notices you might receive from your landlord",
  "landlord-application": "Applications your landlord files",
};

export const GROUP_ORDER: FormGroup[] = ["landlord-notice", "tenant-application", "tenant-notice", "landlord-application"];

export interface LTBForm {
  code: string;       // e.g. "N12"
  slug: string;       // e.g. "n12"
  name: string;       // official-ish name
  group: FormGroup;
  purpose: string;    // one-line plain-English summary (the "quick answer")
  detail: string[];   // paragraphs
  keyPoints: string[];
  relatedGuides: Array<{ label: string; href: string }>;
  keywords: string[];
}

function mk(f: Omit<LTBForm, "slug">): LTBForm {
  return { ...f, slug: f.code.toLowerCase() };
}

export const LTB_FORMS: LTBForm[] = [
  // ── Landlord notices a tenant might receive ──
  mk({
    code: "N1", name: "Notice of Rent Increase", group: "landlord-notice",
    purpose: "Your landlord's official notice that your rent is going up.",
    detail: [
      "Form N1 is how a landlord must tell you about a rent increase. It states your current rent, the new rent, the increase, and the date it takes effect.",
      "For rent-controlled units the increase can't exceed the year's guideline (2.1% for 2026) without LTB approval. You must get at least 90 days' written notice, and rent can only rise once every 12 months.",
    ],
    keyPoints: ["At least 90 days' notice required", "Once every 12 months only", "Must not exceed the guideline for controlled units"],
    relatedGuides: [
      { label: "2026 rent increase guideline", href: "/blog/ontario-rent-increase-guideline-2026" },
      { label: "Rent Increase Calculator", href: "/tools/rent-increase-calculator" },
      { label: "Rent increase dispute letter", href: "/letters/rent-increase-dispute-letter" },
    ],
    keywords: ["N1 form ontario", "notice of rent increase", "rent increase form"],
  }),
  mk({
    code: "N2", name: "Notice of Rent Increase (Unit Partially Exempt)", group: "landlord-notice",
    purpose: "A rent-increase notice for certain units not covered by the guideline.",
    detail: [
      "Form N2 is used for units where the annual guideline doesn't apply in the usual way — for example some care homes or partially-exempt units. Proper written notice and the once-a-year rule still apply.",
    ],
    keyPoints: ["Used for partially-exempt units", "90 days' notice still required", "Once every 12 months"],
    relatedGuides: [
      { label: "Why isn't my rent capped?", href: "/blog/post-2018-rent-control-exemption-ontario" },
      { label: "Rent Increase Calculator", href: "/tools/rent-increase-calculator" },
    ],
    keywords: ["N2 form ontario", "rent increase exempt unit"],
  }),
  mk({
    code: "N4", name: "Notice to End your Tenancy Early for Non-payment of Rent", group: "landlord-notice",
    purpose: "A notice that rent is overdue — not an eviction, and you can void it by paying.",
    detail: [
      "An N4 gives you 14 days (7 for weekly tenancies) to pay everything owed. Pay in full by the deadline and the notice is void — the tenancy simply continues.",
      "An N4 is only the first step. Your landlord still has to apply to the LTB (Form L1) and get an order before you can be evicted, and you can generally 'pay and stay' right up until the Sheriff enforces it.",
    ],
    keyPoints: ["14 days to pay (7 if weekly)", "Paying in full voids the notice", "Not an eviction on its own"],
    relatedGuides: [
      { label: "Got an N4? Full guide", href: "/blog/n4-non-payment-rent-ontario" },
      { label: "Find a tenant lawyer", href: "/tenant-lawyer" },
    ],
    keywords: ["N4 form ontario", "non payment of rent notice", "void N4"],
  }),
  mk({
    code: "N5", name: "Notice to End your Tenancy for Interfering, Damage or Overcrowding", group: "landlord-notice",
    purpose: "A notice alleging disturbance, damage, or too many occupants — often 'voidable'.",
    detail: [
      "An N5 alleges you (or a guest) interfered with others, damaged the unit, or that there are too many people living there. A first N5 is usually 'voidable': you have 7 days to correct the problem, and if you do, the notice is void.",
      "The landlord must prove the allegation at the LTB. Keep records and get advice if you believe the notice is unjustified.",
    ],
    keyPoints: ["First N5 is usually voidable in 7 days", "Landlord must prove the allegation", "Correcting the problem can void it"],
    relatedGuides: [
      { label: "Tenant maintenance duties", href: "/blog/tenant-maintenance-duties-ontario" },
      { label: "How to fight an illegal eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
    ],
    keywords: ["N5 form ontario", "notice interference damage overcrowding"],
  }),
  mk({
    code: "N6", name: "Notice to End your Tenancy for an Illegal Act or Misrepresenting Income", group: "landlord-notice",
    purpose: "A notice alleging an illegal act in the unit, or misrepresented income in subsidized housing.",
    detail: [
      "An N6 is a serious notice. It must set out specific allegations, and the landlord has to prove them at the LTB. If you receive one, get legal advice quickly.",
    ],
    keyPoints: ["Serious allegations must be specific", "Landlord must prove it at the LTB", "Get legal advice promptly"],
    relatedGuides: [
      { label: "How to fight an illegal eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
      { label: "Find a tenant lawyer", href: "/tenant-lawyer" },
    ],
    keywords: ["N6 form ontario", "illegal act notice"],
  }),
  mk({
    code: "N7", name: "Notice to End your Tenancy for Causing Serious Problems", group: "landlord-notice",
    purpose: "A short-notice notice for serious safety issues or wilful damage.",
    detail: [
      "An N7 is used for the most serious situations — for example seriously impairing safety or wilfully causing significant damage — and can carry a short termination date. Because the stakes are high, seek legal help immediately.",
    ],
    keyPoints: ["Used for serious safety issues", "Can have a short notice period", "Get legal help immediately"],
    relatedGuides: [
      { label: "How to fight an illegal eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
      { label: "Find a tenant lawyer", href: "/tenant-lawyer" },
    ],
    keywords: ["N7 form ontario", "serious problems notice"],
  }),
  mk({
    code: "N8", name: "Notice to End your Tenancy at the End of the Term", group: "landlord-notice",
    purpose: "A notice to end the tenancy at term's end — e.g. for persistent late payment.",
    detail: [
      "An N8 is used to end a tenancy at the end of the term for reasons like persistently paying rent late, the unit no longer being your principal residence, or too many occupants. The landlord must prove the ground at the LTB.",
    ],
    keyPoints: ["Ends the tenancy at the end of the term", "Common ground: persistent late payment", "Landlord must prove it"],
    relatedGuides: [
      { label: "How much notice to move out", href: "/blog/notice-to-move-out-ontario" },
      { label: "How to fight an illegal eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
    ],
    keywords: ["N8 form ontario", "end of term notice", "persistent late payment"],
  }),
  mk({
    code: "N12", name: "Notice to End your Tenancy for Landlord's or Purchaser's Own Use", group: "landlord-notice",
    purpose: "A notice ending your tenancy so the landlord, a buyer, or family can move in.",
    detail: [
      "An N12 requires 60 days' notice ending on the last day of a rental period, one month's rent in compensation, and a genuine intention for the named person to move in for at least a year.",
      "If the person never moves in — the unit is re-rented or sold shortly after — that may be a bad-faith eviction, and you can file a T5 for compensation within a year of moving out.",
    ],
    keyPoints: ["60 days' notice + one month's compensation", "Person must intend to live there ≥ 1 year", "Bad faith → T5 compensation"],
    relatedGuides: [
      { label: "N12 eviction guide", href: "/blog/n12-eviction-ontario" },
      { label: "Bad-faith N12 & T5 compensation", href: "/blog/bad-faith-n12-t5-compensation-ontario" },
    ],
    keywords: ["N12 form ontario", "own use eviction", "landlord moving in"],
  }),
  mk({
    code: "N13", name: "Notice to End your Tenancy for Demolition, Repairs or Conversion", group: "landlord-notice",
    purpose: "A notice ending your tenancy for major renovations, demolition, or conversion (a 'renoviction').",
    detail: [
      "An N13 requires 120 days' notice and compensation, and for major repairs you usually have a right of first refusal to move back at a similar rent. Renovictions are often challenged when the work doesn't truly require the unit to be empty.",
    ],
    keyPoints: ["120 days' notice + compensation", "Right of first refusal for repairs", "Bad-faith renovictions can be challenged"],
    relatedGuides: [
      { label: "Renoviction tenant rights", href: "/blog/renoviction-canada-tenant-rights" },
      { label: "How to fight an illegal eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
    ],
    keywords: ["N13 form ontario", "renoviction notice", "demolition repairs conversion"],
  }),

  // ── Tenant applications ──
  mk({
    code: "T1", name: "Tenant Application for a Rebate", group: "tenant-application",
    purpose: "Get back money your landlord charged illegally — like an illegal deposit or overpaid rent.",
    detail: [
      "A T1 lets you recover money the landlord wasn't entitled to: an illegal damage deposit, rent charged above the lawful amount, or unpaid deposit interest. There are time limits, so file promptly.",
    ],
    keyPoints: ["Recovers illegal charges & overpayments", "Covers unpaid deposit interest", "Time limits apply"],
    relatedGuides: [
      { label: "Last month's rent deposit rules", href: "/blog/last-months-rent-deposit-ontario" },
      { label: "Deposit interest request letter", href: "/letters/deposit-interest-letter" },
    ],
    keywords: ["T1 application ontario", "rebate illegal charges", "recover deposit"],
  }),
  mk({
    code: "T2", name: "Application about Tenant Rights", group: "tenant-application",
    purpose: "Take action when a landlord interferes with your rights — illegal entry, harassment, or lockouts.",
    detail: [
      "A T2 is how you hold a landlord accountable for substantially interfering with your reasonable enjoyment, harassing you, entering illegally, or changing the locks. The LTB can order remedies including rent abatements and fines.",
    ],
    keyPoints: ["Covers illegal entry, harassment, lockouts", "Can win a rent abatement", "The LTB can fine the landlord"],
    relatedGuides: [
      { label: "Can a landlord enter without notice?", href: "/blog/landlord-entry-notice-canada" },
      { label: "Find a tenant lawyer", href: "/tenant-lawyer" },
    ],
    keywords: ["T2 application ontario", "tenant rights application", "illegal entry harassment"],
  }),
  mk({
    code: "T3", name: "Tenant Application for a Rent Reduction", group: "tenant-application",
    purpose: "Ask for lower rent when your costs or services have dropped.",
    detail: [
      "A T3 can be used to seek a rent reduction — for example when municipal property taxes have gone down, or when a service or facility you were paying for has been reduced or removed.",
    ],
    keyPoints: ["For reduced services or lower taxes", "Seeks an ongoing rent reduction"],
    relatedGuides: [
      { label: "Rent increase rules", href: "/tenant-rights/rent-increase-rules" },
    ],
    keywords: ["T3 application ontario", "rent reduction"],
  }),
  mk({
    code: "T5", name: "Landlord Gave a Notice of Termination in Bad Faith", group: "tenant-application",
    purpose: "Claim compensation when an 'own use' (N12) or renoviction (N13) eviction was in bad faith.",
    detail: [
      "If you moved out because of an N12 or N13 and the landlord didn't really need the unit — they re-rented it, sold it, or left it empty — a T5 can recover your rent difference, moving costs, and more. File within one year of moving out.",
    ],
    keyPoints: ["For bad-faith N12 / N13 evictions", "File within one year of moving out", "Can recover rent difference + costs + fine"],
    relatedGuides: [
      { label: "Bad-faith N12 & T5 compensation", href: "/blog/bad-faith-n12-t5-compensation-ontario" },
      { label: "Renoviction tenant rights", href: "/blog/renoviction-canada-tenant-rights" },
    ],
    keywords: ["T5 application ontario", "bad faith eviction", "N12 compensation"],
  }),
  mk({
    code: "T6", name: "Tenant Application about Maintenance", group: "tenant-application",
    purpose: "Force repairs and claim money back when your landlord won't maintain the unit.",
    detail: [
      "A T6 is the right way to deal with a landlord who won't repair or maintain your home — never withhold rent. The LTB can order the repairs done and grant a rent abatement (money back) for the time you went without.",
    ],
    keyPoints: ["Never withhold rent — file a T6 instead", "Can order repairs + rent abatement", "Document everything first"],
    relatedGuides: [
      { label: "Can I withhold rent over repairs?", href: "/blog/withholding-rent-repairs-ontario" },
      { label: "Repair request letter", href: "/letters/repair-request-letter" },
    ],
    keywords: ["T6 application ontario", "maintenance application", "rent abatement"],
  }),

  // ── Tenant notices ──
  mk({
    code: "N9", name: "Tenant's Notice to End the Tenancy", group: "tenant-notice",
    purpose: "The official form you use to tell your landlord you're moving out.",
    detail: [
      "Use Form N9 to give notice. For a monthly tenancy that's at least 60 days, with the termination date on the last day of a rental period. A fixed-term lease generally can't be ended early with an N9.",
    ],
    keyPoints: ["60 days for monthly (28 for weekly)", "End date must be the last day of a period", "Can't break a fixed term early"],
    relatedGuides: [
      { label: "How much notice to move out", href: "/blog/notice-to-move-out-ontario" },
      { label: "Notice to end tenancy letter", href: "/letters/notice-to-end-tenancy-letter" },
    ],
    keywords: ["N9 form ontario", "tenant notice to end tenancy", "move out notice"],
  }),
  mk({
    code: "N11", name: "Agreement to End the Tenancy", group: "tenant-notice",
    purpose: "A mutual agreement between you and your landlord to end the tenancy.",
    detail: [
      "An N11 is signed by both the tenant and landlord to end a tenancy by agreement — useful for leaving a fixed term early. Because it's voluntary, never sign one you don't fully agree to; a landlord can't force it.",
    ],
    keyPoints: ["Voluntary, signed by both parties", "Useful for early exit from a fixed term", "Never sign under pressure"],
    relatedGuides: [
      { label: "Month-to-month vs fixed-term", href: "/blog/month-to-month-vs-fixed-term-lease" },
      { label: "Subletting & assignment", href: "/blog/subletting-assignment-ontario" },
    ],
    keywords: ["N11 form ontario", "agreement to end tenancy", "mutual termination"],
  }),
  mk({
    code: "N15", name: "Tenant's Notice to End the Tenancy Because of Violence or Abuse", group: "tenant-notice",
    purpose: "Lets a tenant experiencing violence or abuse end the tenancy early with 28 days' notice.",
    detail: [
      "If you or a child are experiencing violence or abuse, Form N15 lets you end your tenancy on 28 days' notice, even in a fixed term. Support is available — you don't have to go through this alone; a legal clinic or a support service can help you use this safely.",
    ],
    keyPoints: ["28 days' notice, even mid-fixed-term", "For tenants experiencing violence/abuse", "Support services can help"],
    relatedGuides: [
      { label: "Find tenant legal help", href: "/tenant-lawyer" },
    ],
    keywords: ["N15 form ontario", "end tenancy violence abuse", "28 days notice"],
  }),

  // ── Landlord applications ──
  mk({
    code: "L1", name: "Application to Evict for Non-payment of Rent", group: "landlord-application",
    purpose: "The application a landlord files at the LTB after an N4 to seek eviction.",
    detail: [
      "After serving an N4, a landlord files an L1 to ask the LTB for an eviction order and the rent owed. You'll get a hearing — attend it. You can usually still stop the eviction by paying everything owed plus costs before the Sheriff enforces the order.",
    ],
    keyPoints: ["Follows an unpaid N4", "You get a hearing — attend it", "'Pay and stay' still available"],
    relatedGuides: [
      { label: "Got an N4? Full guide", href: "/blog/n4-non-payment-rent-ontario" },
      { label: "How long does the LTB take?", href: "/blog/ltb-wait-times-2026" },
    ],
    keywords: ["L1 application ontario", "eviction non payment", "landlord L1"],
  }),
  mk({
    code: "L2", name: "Application to End a Tenancy and Evict a Tenant", group: "landlord-application",
    purpose: "The application a landlord files to act on an N5–N13 notice.",
    detail: [
      "An L2 is how a landlord asks the LTB to end a tenancy based on a notice like an N5, N7, N8, N12, or N13. You'll receive notice of a hearing where you can raise your defences — this is your chance to challenge the eviction.",
    ],
    keyPoints: ["Acts on an N5–N13 notice", "You can raise defences at the hearing", "Get advice before the hearing"],
    relatedGuides: [
      { label: "How to fight an illegal eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
      { label: "Find a tenant lawyer", href: "/tenant-lawyer" },
    ],
    keywords: ["L2 application ontario", "landlord eviction application"],
  }),
];

export function getForm(slug: string): LTBForm | undefined {
  return LTB_FORMS.find((f) => f.slug === slug);
}
