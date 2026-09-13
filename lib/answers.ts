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

  // ---- Ontario: additional high-intent questions ----
  {
    slug: "does-my-landlord-have-to-give-me-a-rent-receipt-ontario",
    question: "Does my landlord have to give me a rent receipt in Ontario?",
    category: "Rent",
    shortAnswer:
      "Yes. On request, your Ontario landlord must give you a free rent receipt — and this applies even after you've moved out, for up to 12 months after the tenancy ends. They can't charge you for it.",
    blocks: [
      { type: "p", text: "A receipt should show the address, what the payment was for, the amount, the date, and the landlord's name. Receipts are useful proof for the LTB, for benefits and taxes, and if a payment is ever disputed." },
    ],
    related: [
      { label: "Last month's rent deposit rules", href: "/blog/last-months-rent-deposit-ontario" },
    ],
    keywords: ["rent receipt ontario", "does landlord have to give receipt ontario"],
  },
  {
    slug: "can-my-landlord-show-my-unit-to-buyers-ontario",
    question: "Can my landlord show my apartment to buyers or new tenants in Ontario?",
    category: "Privacy",
    shortAnswer:
      "Yes, but generally only with at least 24 hours' written notice stating a time between 8 a.m. and 8 p.m. — unless you agree to a specific showing. If the unit is being sold, the landlord (or their agent) can show it, but your privacy rights and the notice rules still apply.",
    blocks: [
      { type: "p", text: "There is a narrow exception: once either party has given notice to end the tenancy, a landlord can show the unit to prospective tenants with only reasonable effort to tell you, though good landlords still give proper notice." },
    ],
    related: [
      { label: "Landlord entry & notice rules", href: "/blog/landlord-entry-notice-canada" },
      { label: "When your landlord sells", href: "/blog/landlord-selling-property-tenant-rights" },
    ],
    keywords: ["landlord showing apartment ontario", "landlord entry to show unit ontario"],
  },
  {
    slug: "how-long-does-an-eviction-take-ontario",
    question: "How long does an eviction take in Ontario?",
    category: "Eviction",
    shortAnswer:
      "Usually several months. The landlord must first serve the correct notice, then apply to the LTB, wait for a hearing, and obtain an order — and only the Sheriff can actually enforce it. Backlogs at the LTB have made the process take many months in recent years.",
    blocks: [
      { type: "p", text: "You cannot be removed the day a notice expires. Each stage has its own timeline, and you have the right to a hearing and to respond before any eviction order is made or enforced." },
    ],
    related: [
      { label: "LTB wait times in 2026", href: "/blog/ltb-wait-times-2026" },
      { label: "How to fight an illegal eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
    ],
    keywords: ["how long does eviction take ontario", "ontario eviction timeline"],
  },
  {
    slug: "can-my-landlord-charge-me-for-repairs-ontario",
    question: "Can my landlord charge me for repairs in Ontario?",
    category: "Repairs",
    shortAnswer:
      "Only for damage you (or your guests) caused deliberately or through negligence — not for normal wear and tear or for the landlord's own maintenance obligations. Routine repairs and upkeep are the landlord's responsibility and can't be billed to you.",
    blocks: [
      { type: "p", text: "If a landlord claims you owe for damage, they must be able to prove it. Faded paint, worn carpet, and minor marks are normal wear and tear, which you can never be charged for." },
    ],
    related: [
      { label: "Landlord repair obligations", href: "/blog/landlord-repair-obligations-canada" },
      { label: "Normal wear and tear vs damage", href: "/blog/normal-wear-and-tear-vs-damage-canada" },
    ],
    keywords: ["can landlord charge for repairs ontario", "who pays for repairs ontario"],
  },
  {
    slug: "can-my-landlord-charge-a-late-fee-ontario",
    question: "Can my landlord charge a late fee for rent in Ontario?",
    category: "Rent",
    shortAnswer:
      "No. Ontario landlords cannot charge late fees, interest, or penalties for rent paid late. A lease clause imposing a late fee is not enforceable under the Residential Tenancies Act.",
    blocks: [
      { type: "p", text: "Persistent late payment can be a ground for the landlord to apply to end the tenancy (Form N8), but they still can't add monetary late-payment penalties. If you've been charged one, you can dispute it." },
    ],
    related: [
      { label: "Got an N4? Non-payment explained", href: "/blog/n4-non-payment-rent-ontario" },
    ],
    keywords: ["late fee rent ontario", "can landlord charge late fee ontario"],
  },
  {
    slug: "can-my-landlord-refuse-to-return-my-last-months-rent-ontario",
    question: "Can my landlord keep my last month's rent deposit in Ontario?",
    category: "Deposits",
    shortAnswer:
      "No — the last month's rent (LMR) deposit must be applied to your actual last month of rent. A landlord can't keep it for cleaning, damage, or any other purpose, and they owe you interest on it every year at the rent-increase guideline rate.",
    blocks: [
      { type: "p", text: "If your rent has increased since you paid the deposit, the landlord can ask you to top it up, or apply the annual interest toward that. They can't use the LMR deposit as a damage deposit." },
    ],
    related: [
      { label: "Last month's rent deposit rules", href: "/blog/last-months-rent-deposit-ontario" },
      { label: "Deposit interest calculator", href: "/tools/deposit-interest-calculator" },
    ],
    keywords: ["last months rent deposit ontario", "can landlord keep lmr deposit ontario"],
  },
  {
    slug: "what-is-the-rent-increase-guideline-for-2027-ontario",
    question: "What is the Ontario rent increase guideline for 2027?",
    category: "Rent",
    shortAnswer:
      "The 2027 rent increase guideline is 1.9% — the lowest since the 2021 freeze. It's the most a landlord can raise rent on most rent-controlled units in 2027 without LTB approval, with 90 days' written notice and only once every 12 months.",
    blocks: [
      { type: "p", text: "Units first occupied after November 15, 2018 are exempt from the guideline, so there's no percentage cap on them — but the 90-day notice and once-a-year rules still apply." },
    ],
    related: [
      { label: "Ontario rent increase history (2020–2027)", href: "/ontario-rent-increase-history" },
      { label: "2026 rent increase guideline", href: "/blog/ontario-rent-increase-guideline-2026" },
    ],
    keywords: ["ontario rent increase guideline 2027", "rent increase 2027 ontario"],
  },
  {
    slug: "can-my-landlord-increase-rent-on-a-new-building-ontario",
    question: "Why can my landlord raise my rent by any amount in Ontario?",
    category: "Rent",
    shortAnswer:
      "If your unit was first occupied for residential purposes after November 15, 2018, it's exempt from Ontario's rent-increase guideline, so there's no percentage cap. The landlord still needs to give 90 days' written notice and can only increase once every 12 months.",
    blocks: [
      { type: "p", text: "This exemption is why many tenants in newer buildings face large increases. Your security of tenure and all other RTA protections still apply — the exemption is only from the guideline percentage." },
    ],
    related: [
      { label: "The post-2018 rent control exemption", href: "/blog/post-2018-rent-control-exemption-ontario" },
    ],
    keywords: ["post 2018 rent exemption ontario", "no rent cap new building ontario"],
  },

  // ---- British Columbia ----
  {
    slug: "how-much-can-my-landlord-raise-my-rent-in-bc",
    question: "How much can my landlord raise my rent in BC?",
    category: "Rent",
    shortAnswer:
      "No more than the maximum allowable rent increase BC sets each year, and only once every 12 months, with at least three full months' written notice on the approved form. There's no percentage increase allowed above the annual limit except in narrow RTB-approved cases.",
    blocks: [
      { type: "p", text: "The cap applies while you stay in the unit. BC has no vacancy control, so a landlord can set any rent for a new tenant once you move out." },
    ],
    related: [
      { label: "BC rent increase rules", href: "/blog/bc-rent-increase-rules" },
      { label: "BC 2026 rent increase guide", href: "/blog/bc-rent-increase-2026" },
    ],
    keywords: ["how much can landlord raise rent bc", "bc rent increase limit"],
  },
  {
    slug: "how-much-notice-to-move-out-bc",
    question: "How much notice do I have to give to move out in BC?",
    category: "Moving",
    shortAnswer:
      "For a month-to-month tenancy, at least one full month's written notice, and it must be received before the day rent is due. A fixed-term lease commits you until the end date unless you assign, sublet, or reach an agreement to end early.",
    blocks: [
      { type: "p", text: "To leave at the end of a month, give notice before the first day of the preceding month. Keep proof of when you gave notice." },
    ],
    related: [
      { label: "How much notice to end a tenancy in BC", href: "/blog/bc-notice-to-end-tenancy" },
      { label: "Breaking a lease in BC", href: "/blog/bc-breaking-a-lease" },
    ],
    keywords: ["how much notice to move out bc", "notice to end tenancy bc"],
  },
  {
    slug: "how-much-deposit-can-a-landlord-charge-in-bc",
    question: "How much deposit can a landlord charge in BC?",
    category: "Deposits",
    shortAnswer:
      "A security deposit can be no more than half of one month's rent. If pets are allowed, the landlord can also collect a pet damage deposit of up to another half month's rent — but the two together can't exceed one month's rent.",
    blocks: [
      { type: "p", text: "Landlords can't charge extra cleaning, key, or administration deposits. Any deposit must be returned within 15 days of the tenancy ending and your giving a forwarding address, or the landlord may owe you double." },
    ],
    related: [
      { label: "BC security deposit rules", href: "/blog/bc-security-deposit-rules" },
    ],
    keywords: ["how much deposit can landlord charge bc", "damage deposit bc"],
  },
  {
    slug: "when-do-i-get-my-deposit-back-in-bc",
    question: "When does my landlord have to return my deposit in BC?",
    category: "Deposits",
    shortAnswer:
      "Within 15 days of the later of the day your tenancy ends and the day you give your forwarding address in writing. Within that window the landlord must return the deposit (with interest) or apply to the RTB to keep part of it — otherwise they generally owe you double.",
    blocks: [
      { type: "p", text: "Give your forwarding address in writing and keep proof of the date — that's what starts the 15-day clock." },
    ],
    related: [
      { label: "BC security deposit rules", href: "/blog/bc-security-deposit-rules" },
    ],
    keywords: ["when do i get my deposit back bc", "deposit return 15 days bc"],
  },
  {
    slug: "can-my-landlord-evict-me-without-a-reason-bc",
    question: "Can my landlord evict me without a reason in BC?",
    category: "Eviction",
    shortAnswer:
      "No. A BC landlord can only end your tenancy for a reason allowed by the Residential Tenancy Act, using the correct notice — and you can only be removed by an order of possession from the RTB, enforced by a court bailiff. Most notices can be disputed within a short deadline.",
    blocks: [
      { type: "p", text: "For the landlord's own use or renovations, longer notice and compensation apply. If they don't follow through on the stated reason, you may be entitled to significant compensation." },
    ],
    related: [
      { label: "BC eviction notices & the RTB", href: "/blog/bc-eviction-notices-rtb" },
    ],
    keywords: ["can landlord evict without reason bc", "no fault eviction bc"],
  },
  {
    slug: "can-my-landlord-enter-without-notice-bc",
    question: "Can my landlord enter my unit without notice in BC?",
    category: "Privacy",
    shortAnswer:
      "Generally no. A BC landlord must give at least 24 hours' written notice stating the reason and a time between 8 a.m. and 9 p.m., unless you agree, it's an emergency, or you've abandoned the unit. Repeated entry without proper notice is a violation of your rights.",
    blocks: [
      { type: "p", text: "If a landlord keeps entering without notice, document each time and apply to the RTB — the Branch can order them to stop and award compensation." },
    ],
    related: [
      { label: "Landlord entry & notice rules", href: "/blog/landlord-entry-notice-canada" },
    ],
    keywords: ["landlord enter without notice bc", "landlord entry rules bc"],
  },

  // ---- Alberta ----
  {
    slug: "is-there-rent-control-in-alberta",
    question: "Is there rent control in Alberta?",
    category: "Rent",
    shortAnswer:
      "No. Alberta has no rent control, so there's no percentage cap on how much a landlord can raise the rent. However, rent can only be increased once every 12 months, never during the first year of a tenancy, and only with proper written notice.",
    blocks: [
      { type: "p", text: "Because there's no cap, a fixed-term lease (which locks your rent for the whole term) can be valuable protection in a rising market." },
    ],
    related: [
      { label: "Alberta rent increase rules", href: "/blog/alberta-rent-increase-rules" },
    ],
    keywords: ["is there rent control in alberta", "rent increase cap alberta"],
  },
  {
    slug: "how-much-notice-for-a-rent-increase-in-alberta",
    question: "How much notice does my landlord need to raise rent in Alberta?",
    category: "Rent",
    shortAnswer:
      "For a month-to-month tenancy, at least three full tenancy months' written notice. For a weekly tenancy, at least 12 tenancy weeks' notice. Rent can't be raised at all during a fixed term, and only once every 12 months.",
    blocks: [
      { type: "p", text: "There's no cap on the amount in Alberta, so the timing and notice rules — plus your option to move at the end of the term — are your main protections." },
    ],
    related: [
      { label: "Alberta rent increase rules", href: "/blog/alberta-rent-increase-rules" },
    ],
    keywords: ["rent increase notice alberta", "how much notice rent increase alberta"],
  },
  {
    slug: "how-much-notice-to-move-out-alberta",
    question: "How much notice do I have to give to move out in Alberta?",
    category: "Moving",
    shortAnswer:
      "For a month-to-month tenancy, at least one full tenancy month's written notice, received before the first day of that month. A weekly tenancy needs one tenancy week. A fixed-term lease ends on its last day without notice, unless your agreement says otherwise.",
    blocks: [
      { type: "p", text: "Leaving a fixed term early is breaking the lease — you'll want to assign, sublet, or agree with the landlord to limit what you owe." },
    ],
    related: [
      { label: "How much notice to end a tenancy in Alberta", href: "/blog/alberta-notice-to-end-tenancy" },
      { label: "Breaking a lease in Alberta", href: "/blog/alberta-breaking-a-lease" },
    ],
    keywords: ["how much notice to move out alberta", "notice to end tenancy alberta"],
  },
  {
    slug: "how-much-deposit-can-a-landlord-charge-in-alberta",
    question: "How much deposit can a landlord charge in Alberta?",
    category: "Deposits",
    shortAnswer:
      "No more than one month's rent as of the start of the tenancy. Alberta doesn't allow a separate additional pet deposit on top — the total security (damage) deposit is capped at one month's rent, and it must be held in an interest-bearing trust account.",
    blocks: [
      { type: "p", text: "The landlord must pay interest at the prescribed rate, and generally return the deposit or provide a written statement of deductions within 10 days of move-out." },
    ],
    related: [
      { label: "Alberta security deposit rules", href: "/blog/alberta-security-deposit-rules" },
    ],
    keywords: ["how much deposit can landlord charge alberta", "damage deposit alberta"],
  },
  {
    slug: "when-do-i-get-my-deposit-back-in-alberta",
    question: "When do I get my security deposit back in Alberta?",
    category: "Deposits",
    shortAnswer:
      "Generally within 10 days of moving out, your landlord must either return the deposit (with interest) or give you a written statement of any deductions along with the remaining balance. Deductions are only allowed for unpaid rent or damage beyond normal wear and tear.",
    blocks: [
      { type: "p", text: "If you disagree with a deduction, ask for the itemized statement and file a claim through the RTDRS or Provincial Court. Move-out photos and the inspection report are strong evidence." },
    ],
    related: [
      { label: "Alberta security deposit rules", href: "/blog/alberta-security-deposit-rules" },
    ],
    keywords: ["when do i get deposit back alberta", "deposit return 10 days alberta"],
  },
  {
    slug: "can-my-landlord-evict-me-without-a-reason-alberta",
    question: "Can my landlord evict me without a reason in Alberta?",
    category: "Eviction",
    shortAnswer:
      "For a periodic tenancy, a landlord can end it for specified reasons (like moving in, major renovation, or sale to an occupying buyer) with the required notice — usually 90 days. For non-payment or a substantial breach, shorter notice applies. Only a court order and a bailiff can actually remove you.",
    blocks: [
      { type: "p", text: "A fixed-term lease simply ends on its last day. In all cases, a landlord can't lock you out or remove your belongings without an order from the RTDRS or the Court." },
    ],
    related: [
      { label: "The Alberta eviction process", href: "/blog/alberta-eviction-process" },
    ],
    keywords: ["can landlord evict without reason alberta", "no fault eviction alberta"],
  },

  // ---- Quebec ----
  {
    slug: "can-a-landlord-ask-for-a-deposit-in-quebec",
    question: "Can a landlord ask for a security deposit in Quebec?",
    category: "Deposits",
    shortAnswer:
      "No. Under article 1904 of the Civil Code of Québec, a landlord can't require any deposit — no damage deposit, last month's rent, pet deposit, or key deposit — and can't require post-dated cheques. The most they can ask for is the first month's rent.",
    blocks: [
      { type: "p", text: "If you paid a deposit that was demanded, you can ask for it back and, if refused, apply to the Tribunal administratif du logement (TAL). Landlords who demand illegal deposits can face penalties." },
    ],
    related: [
      { label: "Can a landlord ask for a deposit in Quebec?", href: "/blog/quebec-security-deposit-rules" },
    ],
    keywords: ["deposit illegal quebec", "can landlord ask deposit quebec"],
  },
  {
    slug: "can-i-refuse-a-rent-increase-in-quebec",
    question: "Can I refuse a rent increase in Quebec?",
    category: "Rent",
    shortAnswer:
      "Yes. Within one month of receiving the notice, you can refuse a rent increase in writing and stay in your home. Your tenancy continues at the existing rent, and the landlord must apply to the TAL to have the rent fixed — which is often set lower than they asked.",
    blocks: [
      { type: "p", text: "Quebec has no fixed percentage cap; the TAL sets a fair increase based on the landlord's documented costs. Note that units in buildings five years old or newer may carry an 'F' clause that removes the right to contest for that period." },
    ],
    related: [
      { label: "Quebec rent increase rules", href: "/blog/quebec-rent-increase-rules" },
    ],
    keywords: ["refuse rent increase quebec", "how much can landlord raise rent quebec"],
  },
  {
    slug: "how-much-notice-to-end-my-lease-in-quebec",
    question: "How much notice do I give to end my lease in Quebec?",
    category: "Moving",
    shortAnswer:
      "Quebec leases renew automatically, so you must give written notice not to renew: for a lease of 12 months or more, between three and six months before it ends; for a shorter fixed term, one to two months; for a month-to-month lease, one to two months.",
    blocks: [
      { type: "p", text: "You generally can't break a fixed-term lease early just by giving notice. Your main options are to assign (cession de bail) or sublet, or to use one of the Civil Code's specific early-termination grounds (subsidized housing, a seniors'/care residence, or a threat to your safety)." },
    ],
    related: [
      { label: "Ending a lease in Quebec", href: "/blog/quebec-ending-your-lease" },
      { label: "Assigning or subletting in Quebec", href: "/blog/quebec-lease-assignment-sublet" },
    ],
    keywords: ["notice to end lease quebec", "quebec lease non-renewal notice"],
  },
  {
    slug: "can-my-landlord-take-back-my-apartment-in-quebec",
    question: "Can my landlord take back my apartment in Quebec?",
    category: "Eviction",
    shortAnswer:
      "Only in limited cases. An individual landlord can repossess (reprise de logement) to house themselves or a close family member, with six months' notice for a lease over six months. You can refuse, and the landlord must then get the TAL's approval — and bad-faith repossession can lead to damages in your favour.",
    blocks: [
      { type: "p", text: "Eviction to subdivide, demolish, enlarge, or change the use of a dwelling is separate and entitles you to compensation. Long-term senior tenants with modest income often have added protection from repossession and eviction." },
    ],
    related: [
      { label: "Repossession & eviction in Quebec", href: "/blog/quebec-repossession-eviction" },
    ],
    keywords: ["reprise de logement", "landlord take back apartment quebec"],
  },
  {
    slug: "can-i-sublet-or-assign-my-lease-in-quebec",
    question: "Can I sublet or assign my lease in Quebec?",
    category: "Moving",
    shortAnswer:
      "Yes. You notify the landlord with the proposed tenant's details, and they have 15 days to respond. They can only refuse for a serious reason — and if they don't respond in 15 days, they're deemed to consent. Assigning (cession de bail) releases you from the lease; subletting keeps you responsible.",
    blocks: [
      { type: "p", text: "The landlord can only charge reasonable expenses (like a credit check), not a fee or higher rent for agreeing. For a permanent move, assignment is usually the better choice because it ends your obligations." },
    ],
    related: [
      { label: "Assigning or subletting in Quebec", href: "/blog/quebec-lease-assignment-sublet" },
    ],
    keywords: ["cession de bail", "sublet quebec"],
  },
];

export function getAnswer(slug: string): AnswerDef | undefined {
  return ANSWERS.find((a) => a.slug === slug);
}
