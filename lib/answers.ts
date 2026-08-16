// Data-driven "Answers" hub — concise, directly-worded responses to the exact
// questions renters type/ask, optimized for featured snippets and AI answers
// (QAPage schema). Each answer links out to the deeper guide for detail.

export interface AnswerBlock {
  type: "p" | "list";
  text?: string;
  items?: string[];
}

export interface AnswerDef {
  slug: string;
  question: string;
  category: "Rent" | "Eviction" | "Deposits" | "Repairs" | "Privacy" | "Moving";
  shortAnswer: string; // the snippet — 1-3 sentences, direct
  blocks: AnswerBlock[];
  related: Array<{ label: string; href: string }>;
  keywords: string[];
}

export const ANSWERS: AnswerDef[] = [
  {
    slug: "how-much-can-my-landlord-raise-my-rent-in-ontario",
    question: "How much can my landlord raise my rent in Ontario?",
    category: "Rent",
    shortAnswer:
      "For most units, no more than the annual guideline — 2.1% for 2026 — with at least 90 days' written notice on Form N1, and only once every 12 months. Units first occupied after November 15, 2018 are exempt from the guideline, so there's no percentage cap, but the notice and once-a-year rules still apply.",
    blocks: [
      { type: "p", text: "Ontario sets a rent increase guideline each year. For 2026 it's 2.1%. A landlord of a rent-controlled unit can't exceed that without approval from the Landlord and Tenant Board (LTB) for an above-guideline increase." },
      { type: "p", text: "Three rules always apply, guideline or not: at least 90 days' written notice on Form N1, no more than one increase every 12 months, and the increase can't take effect until 12 months after you moved in." },
    ],
    related: [
      { label: "2026 rent increase guideline", href: "/blog/ontario-rent-increase-guideline-2026" },
      { label: "Why isn't my rent capped? (post-2018)", href: "/blog/post-2018-rent-control-exemption-ontario" },
      { label: "Rent Increase Calculator", href: "/tools/rent-increase-calculator" },
    ],
    keywords: ["how much can landlord raise rent ontario", "rent increase limit ontario 2026"],
  },
  {
    slug: "can-my-landlord-raise-rent-more-than-once-a-year-ontario",
    question: "Can my landlord raise my rent more than once a year in Ontario?",
    category: "Rent",
    shortAnswer:
      "No. In Ontario your rent can only be increased once every 12 months, and not until at least 12 months after you moved in or after your last increase — with 90 days' written notice on Form N1.",
    blocks: [
      { type: "p", text: "This 12-month rule applies to all tenancies, including units exempt from the rent increase guideline. A second increase within the same 12-month window is not valid, even if you were given notice." },
    ],
    related: [
      { label: "2026 rent increase guideline", href: "/blog/ontario-rent-increase-guideline-2026" },
      { label: "Rent increase dispute letter", href: "/letters/rent-increase-dispute-letter" },
    ],
    keywords: ["rent increase frequency ontario", "how often can rent go up ontario"],
  },
  {
    slug: "can-my-landlord-evict-me-without-a-reason-ontario",
    question: "Can my landlord evict me without a reason in Ontario?",
    category: "Eviction",
    shortAnswer:
      "No. A landlord can only end your tenancy for a specific reason allowed by the Residential Tenancies Act, using the correct notice form — and you can only actually be evicted by an order of the Landlord and Tenant Board, enforced by the Sheriff.",
    blocks: [
      { type: "p", text: "Common grounds include non-payment of rent (N4), the landlord or a buyer needing the unit for their own use (N12), or serious problems caused by the tenant (N5/N7). Each has strict requirements." },
      { type: "p", text: "An eviction notice is not an eviction. You have the right to dispute it at the LTB, and a landlord can never lock you out or remove your belongings on their own." },
    ],
    related: [
      { label: "How to fight an illegal eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
      { label: "N12 (own-use) evictions", href: "/blog/n12-eviction-ontario" },
      { label: "Got an N4?", href: "/blog/n4-non-payment-rent-ontario" },
    ],
    keywords: ["eviction without reason ontario", "can landlord evict me ontario"],
  },
  {
    slug: "what-happens-if-i-cant-pay-rent-ontario",
    question: "What happens if I can't pay my rent in Ontario?",
    category: "Eviction",
    shortAnswer:
      "Your landlord can serve an N4 notice giving you 14 days to pay. If you pay everything owed by the deadline, the notice is void and you stay. Even after that, you can generally 'pay and stay' by clearing the arrears plus costs before the Sheriff enforces an eviction order.",
    blocks: [
      { type: "p", text: "An N4 is only the first step — not an eviction. After the 14 days, the landlord must file with the LTB and wait for a hearing, where you can propose a payment plan." },
      { type: "p", text: "Don't move out just because you received an N4, and don't ignore it either. Get advice from a community legal clinic if you can't catch up." },
    ],
    related: [
      { label: "Got an N4? Full guide", href: "/blog/n4-non-payment-rent-ontario" },
      { label: "Find a tenant lawyer or paralegal", href: "/tenant-lawyer" },
    ],
    keywords: ["cant pay rent ontario", "behind on rent ontario eviction"],
  },
  {
    slug: "can-my-landlord-charge-a-damage-deposit-ontario",
    question: "Can my landlord charge a damage deposit in Ontario?",
    category: "Deposits",
    shortAnswer:
      "No. Ontario only allows a last month's rent deposit. Damage deposits, cleaning deposits, and pet deposits are illegal, and you can apply to the LTB to recover any you were charged.",
    blocks: [
      { type: "p", text: "The one permitted deposit — last month's rent — can only be applied to your final month of rent, never to damage or cleaning. A refundable key deposit capped at the actual replacement cost is the only other allowed charge." },
      { type: "p", text: "Your landlord also owes you interest on the rent deposit every year, at the guideline rate (2.1% for 2026)." },
    ],
    related: [
      { label: "Last month's rent deposit rules", href: "/blog/last-months-rent-deposit-ontario" },
      { label: "Deposit interest request letter", href: "/letters/deposit-interest-letter" },
    ],
    keywords: ["damage deposit ontario illegal", "security deposit ontario"],
  },
  {
    slug: "can-my-landlord-keep-my-deposit-for-cleaning-ontario",
    question: "Can my landlord keep my deposit for cleaning in Ontario?",
    category: "Deposits",
    shortAnswer:
      "No. The last month's rent deposit can only be applied to your final month's rent — not cleaning, not damage, not arrears. If the landlord thinks you owe for damage, they must apply to the LTB and prove it.",
    blocks: [
      { type: "p", text: "Landlords also can't charge you for normal wear and tear. Document the unit with dated photos at move-out to protect yourself." },
    ],
    related: [
      { label: "Normal wear and tear vs damage", href: "/blog/normal-wear-and-tear-vs-damage-canada" },
      { label: "Moving out checklist", href: "/blog/moving-out-ontario-checklist" },
    ],
    keywords: ["landlord keep deposit cleaning ontario", "deposit deductions ontario"],
  },
  {
    slug: "can-my-landlord-enter-without-notice-ontario",
    question: "Can my landlord enter my apartment without notice in Ontario?",
    category: "Privacy",
    shortAnswer:
      "Only in a genuine emergency. Otherwise your landlord must give at least 24 hours' written notice and enter between 8 a.m. and 8 p.m. for a lawful reason, such as repairs or a scheduled showing.",
    blocks: [
      { type: "p", text: "The notice must state the reason and a time. Routine 'random' inspections or dropping by unannounced are not allowed. Repeated illegal entry can be challenged with a T2 application at the LTB." },
    ],
    related: [
      { label: "Landlord entry & your privacy", href: "/blog/landlord-entry-notice-canada" },
    ],
    keywords: ["landlord enter without notice ontario", "24 hours notice ontario"],
  },
  {
    slug: "can-my-landlord-shut-off-my-heat-or-utilities-ontario",
    question: "Can my landlord shut off my heat or utilities in Ontario?",
    category: "Repairs",
    shortAnswer:
      "No. Heat, water, electricity, and fuel are vital services. A landlord can never deliberately shut them off or interfere with them — not even if you owe rent. Heat must meet the minimum temperature set by your municipality during the heating season.",
    blocks: [
      { type: "p", text: "If a vital service fails, notify your landlord in writing, call municipal property standards, and consider a T6 application at the LTB, which can order repairs and a rent abatement." },
    ],
    related: [
      { label: "Heat & air conditioning rules", href: "/blog/landlord-heat-air-conditioning-ontario" },
      { label: "Can I withhold rent over repairs?", href: "/blog/withholding-rent-repairs-ontario" },
    ],
    keywords: ["landlord shut off utilities ontario", "no heat apartment ontario"],
  },
  {
    slug: "can-i-withhold-rent-if-my-landlord-wont-repair-ontario",
    question: "Can I withhold rent if my landlord won't make repairs in Ontario?",
    category: "Repairs",
    shortAnswer:
      "No. Ontario has no rent-withholding right, and stopping payment can get you an N4 eviction notice. Instead, request repairs in writing and file a T6 with the LTB, which can order the repairs and a rent abatement — money back — without risking your tenancy.",
    blocks: [
      { type: "p", text: "Keep paying rent, document the problem, and build a paper trail. A repair request letter is the ideal first step and key evidence." },
    ],
    related: [
      { label: "Can I withhold rent? Full guide", href: "/blog/withholding-rent-repairs-ontario" },
      { label: "Repair request letter generator", href: "/letters/repair-request-letter" },
    ],
    keywords: ["withhold rent ontario repairs", "landlord wont fix ontario"],
  },
  {
    slug: "can-my-landlord-say-no-pets-in-ontario",
    question: "Can my landlord say no pets in Ontario?",
    category: "Rent",
    shortAnswer:
      "A 'no pets' clause in your lease is void in Ontario — it has no legal effect, even if you signed it. A landlord can refuse to rent to a pet owner before you sign, but can't evict you just for having a pet once you're a tenant.",
    blocks: [
      { type: "p", text: "There are narrow exceptions: a pet causing serious damage or disturbance, a genuine severe allergy in a small building, dangerous animals, or a condo declaration that bans a species. The landlord must prove the problem at the LTB." },
    ],
    related: [
      { label: "No-pet clauses explained", href: "/blog/no-pet-clause-ontario" },
    ],
    keywords: ["no pets clause ontario", "can landlord ban pets ontario"],
  },
  {
    slug: "how-much-notice-do-i-give-to-move-out-ontario",
    question: "How much notice do I have to give to move out in Ontario?",
    category: "Moving",
    shortAnswer:
      "Generally 60 days' written notice for a monthly tenancy, with the termination date on the last day of a rental period, using Form N9. Weekly tenancies need 28 days. A fixed-term lease usually can't be ended early just by giving notice.",
    blocks: [
      { type: "p", text: "To leave before a fixed term ends, you'd typically assign or sublet, or agree with your landlord to end early (Form N11). If you do nothing at the end of a fixed term, the tenancy simply continues month-to-month." },
    ],
    related: [
      { label: "How much notice to move out", href: "/blog/notice-to-move-out-ontario" },
      { label: "Notice to end tenancy letter", href: "/letters/notice-to-end-tenancy-letter" },
    ],
    keywords: ["notice to move out ontario", "60 day notice ontario"],
  },
  {
    slug: "can-i-sublet-my-apartment-in-ontario",
    question: "Can I sublet my apartment in Ontario?",
    category: "Moving",
    shortAnswer:
      "Yes, with your landlord's consent — which they can't unreasonably withhold. In a sublet you return before your tenancy ends; in an assignment you transfer it and leave for good. A landlord can only charge their actual costs, not a fee, and you can't charge a subtenant more than your lawful rent.",
    blocks: [
      { type: "p", text: "If the landlord unreasonably refuses or doesn't respond within seven days, you can apply to the LTB or, after asking to assign, give notice to end your tenancy on 30 days' notice." },
    ],
    related: [
      { label: "Subletting & assignment guide", href: "/blog/subletting-assignment-ontario" },
    ],
    keywords: ["can i sublet ontario", "assign lease ontario"],
  },
];

export function getAnswer(slug: string): AnswerDef | undefined {
  return ANSWERS.find((a) => a.slug === slug);
}
