// Content specs for province blog posts. Prose lives here; the generator
// (gen-province-posts.mjs) turns each into a page.tsx identical in structure to
// the hand-written posts. Text supports **bold** and [label](/href) markdown.
const DATE = "2026-09-11";
const DATE_LABEL = "September 11, 2026";

const BC = "British Columbia";
const AB = "Alberta";
const ON = "Ontario";

export const POSTS = [
  // ---------------------------------------------------------------- BC cluster
  {
    slug: "bc-security-deposit-rules",
    category: BC,
    date: DATE, dateLabel: DATE_LABEL, readMins: 6,
    title: "BC Security Deposit Rules: Damage Deposits & Getting It Back",
    headline: "BC Security Deposit Rules: Damage Deposits, Interest & Getting It Back",
    h1: "BC Security Deposit Rules: Damage Deposits & Getting It Back",
    crumb: "BC Security Deposit Rules",
    description: "In British Columbia your landlord can charge a security deposit of up to half a month's rent, plus a separate pet damage deposit. The rules on deposits, deductions, and the 15-day return deadline — with the double-your-money penalty.",
    ogDescription: "Deposit caps, deductions, and the 15-day return rule in BC — plus when the landlord owes you double.",
    keywords: ["bc security deposit rules", "damage deposit bc", "pet damage deposit bc", "getting security deposit back bc", "how much deposit can a landlord charge bc"],
    lead: "Unlike Ontario, British Columbia lets landlords collect a real security deposit — but it's capped, tightly regulated, and must come back to you fast. Here's exactly what a landlord can charge, what they can deduct, and how to get every dollar back.",
    sections: [
      { h2: "How Much Can They Charge?", paras: [
        "In BC a **security deposit is capped at half of one month's rent**. If the landlord allows pets, they can collect a separate **pet damage deposit** of up to another half month's rent. Combined, deposits can't exceed one month's rent.",
        "Landlords **cannot** demand extra deposits for cleaning, keys, or \"administration.\" If your lease asks for more than the legal maximum, that term isn't enforceable.",
      ] },
      { h2: "The Condition Inspection Matters", paras: [
        "BC requires a **move-in and move-out condition inspection report**, done together by you and the landlord. This report is your best protection. If the landlord doesn't offer you two opportunities to do the move-out inspection, they generally **lose the right to claim against your deposit** for damage. Always get a copy.",
      ] },
      { h2: "The 15-Day Return Rule", paras: [
        "After your tenancy ends and you've given your **forwarding address in writing**, the landlord has **15 days** to either return your full deposit (plus any interest owed) or apply to the Residential Tenancy Branch (RTB) to keep some or all of it.",
        "You can also agree in writing to let them keep a specific amount. Anything else, and the clock is against them.",
      ] },
      { h2: "Miss the Deadline? They Owe You Double", paras: [
        "This is the rule landlords forget. If the 15 days pass and the landlord hasn't returned the deposit or applied to the RTB, they generally must pay you **double the deposit amount**. To claim it, file for dispute resolution at the RTB. Keep proof of the date you gave your forwarding address — that starts the clock.",
      ] },
      { h2: "What They Can (and Can't) Deduct", paras: ["A landlord can only make deductions in specific situations:"], list: [
        "**Can:** unpaid rent, damage beyond reasonable wear and tear, and amounts you agree to in writing.",
        "**Can't:** normal wear and tear — faded paint, worn carpet, minor scuffs, small nail holes.",
        "**Can't:** routine cleaning if you left the unit reasonably clean.",
      ] },
    ],
    faqs: [
      { q: "How much can a landlord charge for a deposit in BC?", a: "A security deposit can be no more than half of one month's rent. If pets are allowed, the landlord can also collect a pet damage deposit of up to another half month's rent. Together they can't exceed one month's rent. Landlords can't demand extra 'cleaning' or 'key' deposits." },
      { q: "When does my landlord have to return my deposit in BC?", a: "Within 15 days of the later of the day the tenancy ends and the day you give your forwarding address in writing. Within that window the landlord must either return the full deposit (with interest) or apply to the Residential Tenancy Branch to keep some or all of it." },
      { q: "What if the landlord doesn't return my deposit on time?", a: "If the landlord misses the 15-day deadline and hasn't applied to the RTB, they generally must pay you double the deposit. You can file for dispute resolution at the Residential Tenancy Branch to recover it." },
      { q: "Can the landlord keep my deposit for normal wear and tear?", a: "No. Landlords can only deduct for damage beyond reasonable wear and tear, unpaid rent, or amounts you agree to in writing — and only through a proper move-out condition inspection or an RTB order. Faded paint, worn carpet, and minor marks are normal wear and tear." },
    ],
    cta: { title: "How much should you get back?", blurb: "Estimate your deposit refund and the landlord's deadline with our free calculator.", href: "/tools/deposit-calculator", label: "Deposit Return Calculator" },
    related: [
      { label: "How Much Notice to End a Tenancy in BC", href: "/blog/bc-notice-to-end-tenancy" },
      { label: "BC Rent Increase Rules", href: "/blog/bc-rent-increase-rules" },
      { label: "Security Deposit Rules Across Canada", href: "/blog/security-deposit-rules-canada" },
      { label: "BC Tenant Rights", href: "/canada/british-columbia" },
    ],
  },
  {
    slug: "bc-notice-to-end-tenancy",
    category: BC,
    date: DATE, dateLabel: DATE_LABEL, readMins: 6,
    title: "How Much Notice to End a Tenancy in BC?",
    headline: "How Much Notice to End a Tenancy in BC?",
    h1: "How Much Notice to End a Tenancy in BC?",
    crumb: "Notice to End a Tenancy in BC",
    description: "How much notice must you give to move out of a BC rental — and how much notice must your landlord give you? Tenant notice, landlord's use of property, the four-month notice, and what makes a notice invalid.",
    ogDescription: "Tenant and landlord notice periods to end a tenancy in British Columbia, explained.",
    keywords: ["how much notice to move out bc", "notice to end tenancy bc", "one month notice bc", "landlord notice to end tenancy bc", "four month notice bc"],
    lead: "Ending a tenancy in BC follows strict notice rules — and they're different depending on whether you're the one leaving or your landlord wants the unit back. Get the timing wrong and the notice may be worthless.",
    sections: [
      { h2: "If You Want to Move Out", paras: [
        "For a **month-to-month (periodic) tenancy**, you must give at least **one full month's written notice**, and it has to be received before the day rent is due. So to leave at the end of a month, give notice before the first of the prior month.",
        "In a **fixed-term lease**, you generally can't just give notice and leave early — you're committed until the end date. See [breaking a lease in BC](/blog/bc-breaking-a-lease) for your legal options.",
      ] },
      { h2: "Landlord's Notice for Their Own Use", paras: [
        "If a landlord wants the unit for themselves or a close family member (or a buyer who will move in), they must give **four months' written notice** and pay you **one month's rent in compensation**. You also have the right to dispute the notice at the RTB within the time limit, and to move out earlier by giving 10 days' notice.",
      ] },
      { h2: "The Four-Month Notice for Renovations or Demolition", paras: [
        "To end a tenancy for major renovations, demolition, or converting the unit, the landlord must give **four months' notice**, hold the necessary permits, and pay compensation. For significant renovations, you may have a **right of first refusal** to move back in at a rent set by the guideline — if you tell the landlord in writing that you want it.",
      ] },
      { h2: "Ending for Non-Payment or Cause", paras: [
        "Different rules apply when there's a problem:",
      ], list: [
        "**Unpaid rent:** a 10-day notice to end tenancy — but you can cancel it by paying the full amount owing within 5 days.",
        "**Cause** (e.g. serious breach): a one-month notice you can dispute at the RTB.",
        "You can only actually be removed by an **order of possession** and the court bailiff — never by the landlord directly.",
      ] },
      { h2: "What Makes a Notice Invalid", paras: [
        "A notice to end tenancy must be in the approved form, signed and dated, give the correct effective date, and state the reason (for landlord notices). A notice with the wrong date or missing information can be challenged. If in doubt, don't move out — dispute it at the RTB first.",
      ] },
    ],
    faqs: [
      { q: "How much notice do I give to move out in BC?", a: "For a month-to-month tenancy, at least one full month's written notice, received before the day rent is due. To leave at the end of a month, give notice before the first day of the preceding month." },
      { q: "How much notice does my landlord have to give me in BC?", a: "It depends on the reason: four months (plus one month's compensation) for the landlord's own use, renovations, or demolition; one month for cause; and a 10-day notice for unpaid rent that you can cancel by paying within 5 days." },
      { q: "Can my landlord evict me to move in a family member?", a: "Yes, but only with a four-month written notice, one month's compensation, and a genuine intention to occupy. If they don't follow through, you may be entitled to significant additional compensation." },
      { q: "Do I have to leave when a fixed-term lease ends in BC?", a: "Usually no. Most fixed-term leases continue as month-to-month after the end date unless you and the landlord agree otherwise or a limited vacate clause applies. You can't be forced out just because the term ended." },
    ],
    cta: { title: "Ending your lease early?", blurb: "See what breaking a fixed-term lease in BC could involve and cost.", href: "/blog/bc-breaking-a-lease", label: "Breaking a Lease in BC" },
    related: [
      { label: "Breaking a Lease in BC", href: "/blog/bc-breaking-a-lease" },
      { label: "BC Eviction Notices & the RTB", href: "/blog/bc-eviction-notices-rtb" },
      { label: "BC Security Deposit Rules", href: "/blog/bc-security-deposit-rules" },
      { label: "BC Tenant Rights", href: "/canada/british-columbia" },
    ],
  },
  {
    slug: "bc-eviction-notices-rtb",
    category: BC,
    date: DATE, dateLabel: DATE_LABEL, readMins: 7,
    title: "BC Eviction Notices & the RTB Process, Explained",
    headline: "Can My Landlord Evict Me in BC? Notices & the RTB Process",
    h1: "Can My Landlord Evict Me in BC? Notices & the RTB Process",
    crumb: "BC Eviction Notices & the RTB",
    description: "Getting an eviction notice in BC doesn't mean you have to leave. The types of notice, how to dispute one at the Residential Tenancy Branch, the deadlines that matter, and how the process really ends.",
    ogDescription: "BC eviction notice types, RTB dispute deadlines, and how the eviction process actually works.",
    keywords: ["eviction notice bc", "how to fight eviction bc", "rtb dispute resolution", "10 day notice bc", "one month notice to end tenancy bc"],
    lead: "An eviction notice in BC is the start of a process, not the end of your tenancy. You have the right to dispute most notices at the Residential Tenancy Branch — but the deadlines are short and unforgiving.",
    sections: [
      { h2: "A Notice Is Not an Eviction", paras: [
        "In BC, only an **order of possession** from the Residential Tenancy Branch (RTB), enforced by a court bailiff, can actually remove you. A notice from your landlord is a claim that they want to end the tenancy — you can accept it or dispute it. Never assume you must leave just because you received a form.",
      ] },
      { h2: "The Main Types of Notice", paras: ["The type of notice tells you your rights and your deadline to respond:"], list: [
        "**10-Day Notice (unpaid rent or utilities):** you can cancel it entirely by paying the full amount owing within **5 days**.",
        "**One-Month Notice (for cause):** for serious problems like repeated late rent, significant damage, or unreasonable disturbance — you have **10 days** to dispute.",
        "**Two-Month Notice (landlord's use):** replaced in most cases by longer notice requirements — check the current form and compensation rules.",
        "**Four-Month Notice (renovation/demolition/landlord use):** longer notice plus compensation, and sometimes a right of first refusal.",
      ] },
      { h2: "Disputing a Notice at the RTB", paras: [
        "To fight a notice you apply for **dispute resolution** through the RTB, usually online, before your deadline. The RTB holds a hearing (often by phone) where both sides present evidence. If you miss the dispute deadline, you may be treated as having accepted the notice — so act fast.",
        "There's a filing fee, and **fee waivers** are available if you can't afford it.",
      ] },
      { h2: "Build Your Evidence", paras: [
        "Whatever the reason, your case is only as strong as your records: keep the notice itself, rent payment history, texts and emails, photos, and names of any witnesses. If the notice is for the landlord's own use, evidence of bad faith (like the unit being re-rented instead) can win you compensation.",
      ] },
      { h2: "Free Help Is Available", paras: [
        "BC has strong tenant supports: TRAC (the Tenant Resource & Advisory Centre) provides information and templates, and legal aid or advocacy organizations can help with hearings. Don't go it alone if the stakes are high.",
      ] },
    ],
    faqs: [
      { q: "Can my landlord evict me without going to the RTB in BC?", a: "No. A landlord can serve a notice, but they can only physically remove you with an order of possession from the Residential Tenancy Branch, enforced by a court bailiff. Changing the locks or removing your belongings without an order is illegal." },
      { q: "How long do I have to dispute an eviction notice in BC?", a: "It depends on the notice. For a 10-day notice for unpaid rent, you have 5 days to pay (which cancels it) or dispute. For a one-month notice for cause, you generally have 10 days to apply for dispute resolution. Missing the deadline can mean the notice takes effect." },
      { q: "What is a 10-day notice in BC?", a: "It's a notice to end tenancy for unpaid rent or utilities. You can cancel it completely by paying the full outstanding amount within 5 days of receiving it. If you don't pay or dispute, the landlord can seek an order of possession." },
      { q: "Where can I get free help fighting an eviction in BC?", a: "The Tenant Resource & Advisory Centre (TRAC) offers information and dispute templates, and legal aid and community advocacy groups can assist with RTB hearings. Fee waivers are also available for the RTB application fee." },
    ],
    cta: { title: "Is your eviction notice even valid?", blurb: "Check the notice type and days given with our free validity checker.", href: "/tools/eviction-notice-checker", label: "Eviction Notice Checker" },
    related: [
      { label: "How Much Notice to End a Tenancy in BC", href: "/blog/bc-notice-to-end-tenancy" },
      { label: "BC Rent Increase Rules", href: "/blog/bc-rent-increase-rules" },
      { label: "Fighting an Illegal Eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
      { label: "BC Tenant Rights", href: "/canada/british-columbia" },
    ],
  },
  {
    slug: "bc-rent-increase-rules",
    category: BC,
    date: DATE, dateLabel: DATE_LABEL, readMins: 6,
    title: "BC Rent Increase Rules: Limits, Notice & Disputes",
    headline: "BC Rent Increase Rules: How Much, How Often, and the Notice Required",
    h1: "BC Rent Increase Rules: Limits, Notice & Disputes",
    crumb: "BC Rent Increase Rules",
    description: "In BC your landlord can raise rent only once a year, up to the annual limit set by the province, with three full months' written notice. How the cap works, what's exempt, and how to challenge an illegal increase.",
    ogDescription: "How much and how often rent can rise in British Columbia, the notice required, and how to dispute an illegal increase.",
    keywords: ["bc rent increase rules", "how much can landlord raise rent bc", "rent increase notice bc", "bc rent increase limit", "illegal rent increase bc"],
    lead: "British Columbia caps how much your rent can go up each year and demands long notice. If your landlord asks for more, or more often, the increase usually isn't legal — and you don't have to pay it.",
    sections: [
      { h2: "The Annual Limit", paras: [
        "Each year BC sets a **maximum allowable rent increase** that applies to existing tenancies. A landlord can't raise your rent above that percentage without your agreement, and the limit is tied to inflation. For the current year's exact figure, see our [BC 2026 rent increase guide](/blog/bc-rent-increase-2026).",
      ] },
      { h2: "Once a Year, With Three Months' Notice", paras: [
        "Two timing rules always apply: rent can only be increased **once every 12 months**, and the landlord must give at least **three full months' written notice** on the approved form. An increase can't take effect until you've been a tenant for at least a year.",
      ] },
      { h2: "There's No Vacancy Control", paras: [
        "The annual cap applies while you stay in the unit. When a tenancy ends and a **new tenant** moves in, the landlord can set any starting rent they want — BC doesn't have vacancy control. That's why staying put often protects a below-market rent.",
      ] },
      { h2: "Additional (Above-Limit) Increases", paras: [
        "A landlord can apply to the RTB for an increase above the annual limit only in narrow circumstances (for example, significant financial loss from an unavoidable cost increase). These are the exception, and you have the right to respond. Don't agree to pay more than the cap unless the RTB has approved it.",
      ] },
      { h2: "If the Increase Is Illegal", paras: [
        "If your landlord tries to raise rent by more than the limit, more than once a year, or without proper notice, the increase isn't valid. Put your objection in writing, keep paying your lawful rent, and apply to the RTB if needed. You can recover overpayments you were wrongly charged.",
      ] },
    ],
    faqs: [
      { q: "How much can my landlord raise my rent in BC?", a: "No more than the maximum allowable rent increase the province sets each year, and only once every 12 months. The increase requires three full months' written notice on the approved form." },
      { q: "How often can rent be increased in BC?", a: "Only once every 12 months, and not until you've been a tenant for at least a year. A second increase within the same 12-month window isn't valid, even with notice." },
      { q: "How much notice is required for a rent increase in BC?", a: "At least three full months' written notice, using the government's approved rent increase form. A verbal increase or short notice isn't enforceable." },
      { q: "Can a landlord raise rent above the annual limit in BC?", a: "Only in limited situations approved by the Residential Tenancy Branch, such as certain unavoidable cost increases. Otherwise the annual cap applies, and you shouldn't pay more unless the RTB has ordered it." },
    ],
    cta: { title: "Is your rent increase legal?", blurb: "Check any proposed increase against the rules with our free calculator.", href: "/tools/rent-increase-calculator", label: "Rent Increase Calculator" },
    related: [
      { label: "BC 2026 Rent Increase Guide", href: "/blog/bc-rent-increase-2026" },
      { label: "How Much Notice to End a Tenancy in BC", href: "/blog/bc-notice-to-end-tenancy" },
      { label: "BC Security Deposit Rules", href: "/blog/bc-security-deposit-rules" },
      { label: "BC Tenant Rights", href: "/canada/british-columbia" },
    ],
  },
  {
    slug: "bc-breaking-a-lease",
    category: BC,
    date: DATE, dateLabel: DATE_LABEL, readMins: 6,
    title: "Breaking a Lease in BC: How to End a Fixed Term Early",
    headline: "Breaking a Lease in BC: How to End a Fixed-Term Tenancy Early",
    h1: "Breaking a Lease in BC: How to End a Fixed Term Early",
    crumb: "Breaking a Lease in BC",
    description: "You generally can't just give notice to leave a fixed-term lease early in BC — but you have real options: assignment, subletting, mutual agreement, and the landlord's duty to limit your losses. Plus the special exits the law allows.",
    ogDescription: "Assignment, subletting, mutual agreement, and duty to mitigate — the legal ways to break a lease early in BC.",
    keywords: ["breaking a lease bc", "end fixed term lease early bc", "get out of a lease bc", "assign sublet lease bc", "duty to mitigate bc"],
    lead: "A job across the province, a breakup, a rent you can no longer afford — sometimes you have to leave mid-lease. In BC you can't simply walk away from a fixed term, but the law limits what you owe and gives you several legal exits.",
    sections: [
      { h2: "First: A Fixed Term Binds You", paras: [
        "A fixed-term lease commits you until the end date. Giving one month's notice ends a **month-to-month** tenancy, not a fixed term. So the real question is which legal exit fits your situation — and how to limit what you owe if you must go.",
      ] },
      { h2: "Assign or Sublet (With Consent)", paras: [
        "You can **assign** the tenancy (transfer it entirely to someone new) or **sublet** (someone lives there while you remain the tenant). The landlord's **consent can't be unreasonably withheld**, and for tenancies of six months or more they generally can't refuse a reasonable assignment or sublet. They can only charge their actual reasonable costs — no fee for saying yes.",
      ] },
      { h2: "Mutual Agreement to End", paras: [
        "If your landlord is willing, you can both sign a **mutual agreement to end the tenancy**. This is voluntary — you can't be forced into it — but a landlord with a waiting list or a higher-paying tenant may happily agree. Get the end date in writing.",
      ] },
      { h2: "The Landlord's Duty to Minimize Loss", paras: [
        "If you leave anyway, the landlord **can't leave the unit empty and bill you for the whole remaining term**. They must take reasonable steps to re-rent. You're only responsible for lost rent until a new tenant moves in (or the term ends), plus reasonable costs. Give written notice, keep records, and document their re-rental efforts.",
      ] },
      { h2: "Special Situations", paras: ["Some circumstances let you end a tenancy early regardless of the term:"], list: [
        "**Fleeing family or household violence, or needing long-term care:** BC allows early termination with notice and supporting confirmation.",
        "**The landlord breaches a material term** and doesn't fix it after written notice: you may be able to end the tenancy.",
        "**Month-to-month already?** You're not breaking anything — just give one month's proper notice.",
      ] },
    ],
    faqs: [
      { q: "Can I break a fixed-term lease early in BC?", a: "Not just by giving notice. You can assign or sublet the tenancy (the landlord can't unreasonably refuse), reach a mutual agreement to end, or end early in special situations like fleeing violence or needing long-term care. If you leave otherwise, the landlord must still try to re-rent." },
      { q: "Does my BC landlord have to try to re-rent if I leave early?", a: "Yes. The landlord has a duty to minimize their loss by making reasonable efforts to re-rent the unit. You're only liable for rent until a new tenant moves in or the term ends, plus reasonable costs — not automatically the whole remaining term." },
      { q: "Can my landlord charge a penalty for breaking my lease in BC?", a: "No. There's no lawful 'lease-break penalty' beyond your actual rent obligation reduced by the landlord's duty to re-rent, plus genuine costs like advertising. A flat penalty clause isn't enforceable." },
      { q: "Can I end my lease early because of domestic violence in BC?", a: "Yes. BC lets tenants end a tenancy early to escape family or household violence, or to move into long-term care, with the required notice and confirmation. Ask a tenant advocate or the RTB about the current form and process." },
    ],
    cta: { title: "What could leaving early cost?", blurb: "Estimate your exposure before you decide with our free lease-break tool.", href: "/tools/lease-break-calculator", label: "Lease Break Estimator" },
    related: [
      { label: "How Much Notice to End a Tenancy in BC", href: "/blog/bc-notice-to-end-tenancy" },
      { label: "BC Security Deposit Rules", href: "/blog/bc-security-deposit-rules" },
      { label: "BC Rent Increase Rules", href: "/blog/bc-rent-increase-rules" },
      { label: "BC Tenant Rights", href: "/canada/british-columbia" },
    ],
  },
  {
    slug: "bc-landlord-repairs-maintenance",
    category: BC,
    date: DATE, dateLabel: DATE_LABEL, readMins: 6,
    title: "Landlord Repairs & Maintenance in BC: Your Rights",
    headline: "Landlord Repairs and Maintenance in BC: Your Rights",
    h1: "Landlord Repairs & Maintenance in BC: Your Rights",
    crumb: "Landlord Repairs in BC",
    description: "Your BC landlord must keep the unit repaired, safe, and meeting health and safety standards — including heat and pest control. What counts as their responsibility, how to demand repairs, and how to get a rent reduction if they don't act.",
    ogDescription: "Repairs, heat, pests, and emergency repairs in BC — your landlord's obligations and how to enforce them.",
    keywords: ["landlord repairs bc", "landlord maintenance obligations bc", "emergency repairs bc", "no heat rental bc", "rent reduction repairs bc"],
    lead: "In BC your landlord is legally on the hook for keeping your home in good repair — heat, plumbing, pests, and safety included. Here's what they must fix, how to make them, and what to do when they drag their feet.",
    sections: [
      { h2: "What the Landlord Must Maintain", paras: [
        "Under BC's Residential Tenancy Act, the landlord must keep the unit and property **in a state of repair that complies with health, safety, and housing standards** and makes it suitable for occupation. This applies even if you knew about a problem before moving in, and even if a lease clause tries to offload it onto you.",
      ] },
      { h2: "Heat, Water, and Pests Are Their Job", paras: [
        "Vital services and infestations fall squarely on the landlord:",
      ], list: [
        "**Heat and hot water** must be provided and maintained — a landlord can't cut them off during a dispute.",
        "**Pest infestations** (bed bugs, cockroaches, rodents) are the landlord's responsibility to treat professionally.",
        "**Structural, plumbing, and electrical** repairs are the landlord's, not yours.",
      ] },
      { h2: "Emergency Repairs", paras: [
        "For urgent problems — major leaks, no heat, broken locks, blocked plumbing — BC has an **emergency repair** process. If you can't reach the landlord after reasonable attempts, you may be able to arrange the repair yourself and be reimbursed. Keep receipts and follow the required steps so your claim holds up.",
      ] },
      { h2: "How to Demand Repairs", paras: [
        "Put every request **in writing** and keep a copy, with dates and photos. A clear paper trail is what turns a dispute in your favour. If the landlord ignores you, you can apply to the RTB for an order that they complete the repairs.",
      ] },
      { h2: "Rent Reductions and Compensation", paras: [
        "When repairs aren't done or a service is lost, the RTB can order a **rent reduction** for the period you went without, plus other remedies. You generally shouldn't just stop paying rent on your own — apply to the RTB instead, so you're protected.",
      ] },
    ],
    faqs: [
      { q: "Is my landlord responsible for repairs in BC?", a: "Yes. BC landlords must keep the unit and residential property in a state that complies with health, safety, and housing standards and is suitable for occupation. This can't be waived by a lease clause, and applies even to problems that existed before you moved in." },
      { q: "Can I do the repair myself and deduct it from rent in BC?", a: "Only for qualifying emergency repairs, and only after making reasonable attempts to contact the landlord and following the proper process. Keep receipts. For non-emergencies, apply to the RTB rather than withholding or deducting rent on your own." },
      { q: "What if my landlord won't fix something in BC?", a: "Request the repair in writing and keep records. If the landlord doesn't act, apply to the Residential Tenancy Branch for an order to complete the repairs and, where appropriate, a rent reduction for the time you went without." },
      { q: "Can my landlord shut off my heat in BC?", a: "No. Heat and hot water are vital services the landlord must provide. Deliberately cutting them off — even during a dispute — is a serious violation you can take to the RTB." },
    ],
    cta: { title: "Landlord ignoring repairs?", blurb: "Send a clear, dated repair request they can't say they never received.", href: "/letters/repair-request-letter", label: "Repair Request Letter" },
    related: [
      { label: "BC Security Deposit Rules", href: "/blog/bc-security-deposit-rules" },
      { label: "Bed Bugs & Pests: Who's Responsible?", href: "/blog/bed-bugs-pests-landlord-ontario" },
      { label: "BC Eviction Notices & the RTB", href: "/blog/bc-eviction-notices-rtb" },
      { label: "BC Tenant Rights", href: "/canada/british-columbia" },
    ],
  },

  // ----------------------------------------------------------- Alberta cluster
  {
    slug: "alberta-security-deposit-rules",
    category: AB,
    date: DATE, dateLabel: DATE_LABEL, readMins: 6,
    title: "Alberta Security Deposit Rules: Damage Deposits & Refunds",
    headline: "Alberta Security Deposit Rules: Damage Deposits, Interest & Refunds",
    h1: "Alberta Security Deposit Rules: Damage Deposits & Refunds",
    crumb: "Alberta Security Deposit Rules",
    description: "In Alberta a security (damage) deposit can't exceed one month's rent, must be held in an interest-bearing trust account, and has to be returned within 10 days of move-out. The rules on deductions, interest, and inspections.",
    ogDescription: "Deposit caps, interest, inspection reports, and the 10-day refund rule in Alberta.",
    keywords: ["alberta security deposit rules", "damage deposit alberta", "getting damage deposit back alberta", "how much deposit can a landlord charge alberta", "security deposit interest alberta"],
    lead: "Alberta lets landlords collect a damage deposit, but caps it, requires it to earn interest, and gives them a tight 10-day deadline to return it. Here's exactly what a landlord can charge and keep — and how to get your money back.",
    sections: [
      { h2: "How Much Can They Charge?", paras: [
        "In Alberta, a **security deposit (damage deposit) can't be more than one month's rent** at the start of the tenancy. Unlike some provinces, there's no separate pet deposit allowed on top — a landlord can require a higher single deposit (still capped at one month's rent) but can't stack an extra pet deposit beyond that.",
      ] },
      { h2: "It Must Earn Interest", paras: [
        "Your deposit has to be held in an **interest-bearing trust account**, and the landlord must pay you interest at the province's prescribed rate. Depending on your agreement, interest is paid annually or at the end of the tenancy. It's small, but it's yours.",
      ] },
      { h2: "Inspection Reports Protect You", paras: [
        "Alberta requires a **move-in and move-out inspection report**. The landlord must give you the chance to be present for both, and complete a written report. Without a proper inspection, it's much harder for a landlord to justify keeping your deposit for damage. Always get a copy and note existing damage at move-in.",
      ] },
      { h2: "The 10-Day Refund Rule", paras: [
        "After you move out, the landlord generally has **10 days** to return your deposit, or to provide a **written statement of deductions** with any remaining balance. They can deduct for unpaid rent and damage beyond normal wear and tear — but must account for it.",
      ] },
      { h2: "Disputing Deductions", paras: [
        "If you think a deduction is unfair, ask for the itemized statement and compare it against what's actually allowed. You can bring a claim through the **Residential Tenancy Dispute Resolution Service (RTDRS)** or Provincial Court to recover money wrongly withheld. Photos from move-out are powerful evidence.",
      ] },
    ],
    faqs: [
      { q: "How much can a landlord charge for a deposit in Alberta?", a: "No more than one month's rent as of the start of the tenancy. Alberta doesn't allow a separate additional pet deposit stacked on top — the total security deposit is capped at one month's rent." },
      { q: "Does my deposit earn interest in Alberta?", a: "Yes. Security deposits must be held in an interest-bearing trust account, and the landlord must pay interest at the province's prescribed rate, paid annually or at the end of the tenancy depending on your agreement." },
      { q: "When do I get my deposit back in Alberta?", a: "Generally within 10 days of moving out, the landlord must return the deposit or provide a written statement of any deductions along with the remaining balance. Deductions are only allowed for unpaid rent and damage beyond normal wear and tear." },
      { q: "What can I do if my Alberta landlord keeps my deposit unfairly?", a: "Request the itemized statement of deductions, then file a claim through the Residential Tenancy Dispute Resolution Service (RTDRS) or Provincial Court. Move-out photos and the inspection report are strong evidence." },
    ],
    cta: { title: "How much should you get back?", blurb: "Estimate your deposit refund and the landlord's deadline with our free calculator.", href: "/tools/deposit-calculator", label: "Deposit Return Calculator" },
    related: [
      { label: "How Much Notice to End a Tenancy in Alberta", href: "/blog/alberta-notice-to-end-tenancy" },
      { label: "Alberta Rent Increase Rules", href: "/blog/alberta-rent-increase-rules" },
      { label: "Security Deposit Rules Across Canada", href: "/blog/security-deposit-rules-canada" },
      { label: "Alberta Tenant Rights", href: "/canada/alberta" },
    ],
  },
  {
    slug: "alberta-rent-increase-rules",
    category: AB,
    date: DATE, dateLabel: DATE_LABEL, readMins: 6,
    title: "Alberta Rent Increase Rules: No Cap, But Real Limits",
    headline: "Alberta Rent Increase Rules: How Much and How Often",
    h1: "Alberta Rent Increase Rules: No Cap, But Real Limits",
    crumb: "Alberta Rent Increase Rules",
    description: "Alberta has no rent control, so there's no percentage cap on increases — but landlords can only raise rent once a year and must give proper written notice. How the timing rules work and what still protects you.",
    ogDescription: "Alberta has no rent cap, but strict once-a-year timing and notice rules still apply. Here's how.",
    keywords: ["alberta rent increase rules", "how much can landlord raise rent alberta", "rent increase notice alberta", "is there rent control in alberta", "rent increase frequency alberta"],
    lead: "Alberta is one of the few provinces with no rent control — there's no percentage limit on how much your rent can rise. But that doesn't mean anything goes: strict rules govern how often and with how much notice.",
    sections: [
      { h2: "No Cap on the Amount", paras: [
        "Alberta has **no rent control**, so there's no legal maximum percentage for a rent increase. A landlord can, in principle, raise rent by any amount when an increase is allowed. This makes the **timing and notice rules** — and your leverage to negotiate or move — the real protections.",
      ] },
      { h2: "Only Once Every 12 Months", paras: [
        "Rent can't be increased **more than once in a 12-month period**, and not during the first year of a tenancy. The clock runs from the start of the tenancy or the date of the last increase. A second increase inside that window isn't valid.",
      ] },
      { h2: "The Notice You Must Get", paras: [
        "Your landlord must give written notice well ahead of the increase:",
      ], list: [
        "**Periodic (month-to-month) tenancy:** at least three full tenancy months' written notice.",
        "**Weekly tenancy:** at least 12 tenancy weeks' written notice.",
        "**Fixed-term lease:** rent can't be increased during the term — only when it renews or converts, with proper notice.",
      ] },
      { h2: "Your Real Leverage", paras: [
        "Because there's no cap, the market is your main check. If an increase is unaffordable, you can try to negotiate, or give proper notice and move at the end of your term. In a fixed-term lease, your rent is locked for the whole term — a strong reason to consider a longer term in a rising market.",
      ] },
      { h2: "What Still Protects You", paras: [
        "Even without rent control, a landlord can't use a rent increase as a disguised eviction or to retaliate, can't skip the notice rules, and can't increase more than once a year. If the timing or notice is wrong, the increase isn't valid — put your objection in writing.",
      ] },
    ],
    faqs: [
      { q: "Is there rent control in Alberta?", a: "No. Alberta has no rent control, so there's no percentage limit on how much a landlord can raise the rent. However, rent can only be increased once every 12 months, not in the first year, and only with proper written notice." },
      { q: "How much notice does my landlord need to raise rent in Alberta?", a: "For a month-to-month tenancy, at least three full tenancy months' written notice. For a weekly tenancy, at least 12 tenancy weeks' notice. Rent can't be raised at all during a fixed term." },
      { q: "How often can my rent go up in Alberta?", a: "Only once in any 12-month period, and not during the first year of the tenancy. An increase within that window, or without proper notice, isn't valid." },
      { q: "Can my landlord raise rent during my fixed-term lease in Alberta?", a: "No. Rent is fixed for the duration of a fixed-term lease. A landlord can only propose a new rent when the term ends and the lease renews or converts to periodic, with the required notice." },
    ],
    cta: { title: "Check your increase timing", blurb: "Confirm whether an increase's timing and notice are valid with our free tool.", href: "/tools/rent-increase-calculator", label: "Rent Increase Calculator" },
    related: [
      { label: "Alberta Security Deposit Rules", href: "/blog/alberta-security-deposit-rules" },
      { label: "How Much Notice to End a Tenancy in Alberta", href: "/blog/alberta-notice-to-end-tenancy" },
      { label: "Alberta Eviction Process", href: "/blog/alberta-eviction-process" },
      { label: "Alberta Tenant Rights", href: "/canada/alberta" },
    ],
  },
  {
    slug: "alberta-notice-to-end-tenancy",
    category: AB,
    date: DATE, dateLabel: DATE_LABEL, readMins: 6,
    title: "How Much Notice to End a Tenancy in Alberta?",
    headline: "How Much Notice to End a Tenancy in Alberta?",
    h1: "How Much Notice to End a Tenancy in Alberta?",
    crumb: "Notice to End a Tenancy in Alberta",
    description: "How much notice you must give to move out of an Alberta rental, and how much your landlord must give you. Periodic tenancy notice, landlord reasons, fixed-term rules, and what makes a notice valid.",
    ogDescription: "Tenant and landlord notice periods to end a tenancy in Alberta, explained simply.",
    keywords: ["how much notice to move out alberta", "notice to end tenancy alberta", "one month notice alberta", "landlord notice alberta", "ending periodic tenancy alberta"],
    lead: "Ending a tenancy in Alberta depends on the type of tenancy and who's ending it. Give the wrong amount of notice, or time it wrong, and the notice may not count. Here's how to do it right.",
    sections: [
      { h2: "If You Want to Move Out (Periodic Tenancy)", paras: [
        "For a **month-to-month tenancy**, you must give at least **one full tenancy month's written notice**, and it has to be received before the first day of that month. So to leave at the end of a month, the landlord must have your notice before the month begins. For a **weekly** tenancy, the notice is one tenancy week.",
      ] },
      { h2: "Fixed-Term Leases End on Their Own", paras: [
        "A **fixed-term lease** simply ends on the last day of the term — in Alberta neither party has to give notice for it to end, unless your agreement says otherwise. If you want to leave before the end date, that's breaking the lease; see [breaking a lease in Alberta](/blog/alberta-breaking-a-lease).",
      ] },
      { h2: "When the Landlord Ends a Periodic Tenancy", paras: [
        "A landlord can end a periodic tenancy for specific reasons with set notice, such as:",
      ], list: [
        "**Landlord or family moving in, major renovations, sale to a buyer who'll occupy, or conversion:** typically 90 days' written notice.",
        "**Certain condominium conversions:** longer notice applies.",
        "The notice must be in writing, signed, dated, state the reason, and give the correct effective date.",
      ] },
      { h2: "Ending for Non-Payment or Breach", paras: [
        "Problems have their own faster process:",
      ], list: [
        "**Unpaid rent:** a 14-day notice — which you can stop by paying the overdue rent before it takes effect.",
        "**Substantial breach:** a 14-day notice to end the tenancy.",
        "**Serious cases** (major damage, endangering others): as little as 24 hours' notice.",
      ] },
      { h2: "What Makes a Notice Valid", paras: [
        "Any notice to end a tenancy must be **in writing**, signed and dated, name the rental, give the correct termination date, and (for landlord notices) state the reason. A notice with the wrong date or missing details can be challenged through the RTDRS or court — so read it carefully before you act.",
      ] },
    ],
    faqs: [
      { q: "How much notice do I give to move out in Alberta?", a: "For a month-to-month tenancy, at least one full tenancy month's written notice, received before the first day of that month. For a weekly tenancy, one tenancy week's notice. A fixed-term lease ends on its last day without notice unless the agreement says otherwise." },
      { q: "How much notice does my landlord have to give in Alberta?", a: "For landlord reasons like moving in, major renovation, or sale to an occupying buyer, usually 90 days' written notice. For unpaid rent or a substantial breach, a 14-day notice; for serious cases, as little as 24 hours." },
      { q: "Do I have to give notice when my fixed-term lease ends in Alberta?", a: "Generally no. In Alberta a fixed-term lease ends automatically on its last day, and neither party needs to give notice unless your lease specifically requires it. Check your agreement." },
      { q: "Can I be evicted with only 24 hours' notice in Alberta?", a: "Only in serious situations — such as significant damage, or where a person's safety is at risk. Most cause-based and non-payment terminations use a 14-day notice, and you can only be physically removed by an order and a civil enforcement bailiff." },
    ],
    cta: { title: "Ending your lease early?", blurb: "See what breaking a fixed-term lease in Alberta involves before you decide.", href: "/blog/alberta-breaking-a-lease", label: "Breaking a Lease in Alberta" },
    related: [
      { label: "Breaking a Lease in Alberta", href: "/blog/alberta-breaking-a-lease" },
      { label: "Alberta Eviction Process", href: "/blog/alberta-eviction-process" },
      { label: "Alberta Security Deposit Rules", href: "/blog/alberta-security-deposit-rules" },
      { label: "Alberta Tenant Rights", href: "/canada/alberta" },
    ],
  },
  {
    slug: "alberta-eviction-process",
    category: AB,
    date: DATE, dateLabel: DATE_LABEL, readMins: 7,
    title: "The Alberta Eviction Process: Notices, RTDRS & Your Rights",
    headline: "The Alberta Eviction Process: Notices, RTDRS & Your Rights",
    h1: "The Alberta Eviction Process: Notices, RTDRS & Your Rights",
    crumb: "Alberta Eviction Process",
    description: "An eviction notice in Alberta isn't an automatic removal. The notice types, how to respond, the RTDRS and court process, and why only a bailiff — never the landlord — can actually remove you.",
    ogDescription: "Alberta eviction notice types, the RTDRS and court process, and how eviction actually works.",
    keywords: ["alberta eviction process", "eviction notice alberta", "rtdrs alberta", "14 day eviction notice alberta", "how to fight eviction alberta"],
    lead: "Getting an eviction notice in Alberta is frightening, but it's the start of a legal process — not the end of your tenancy. Knowing the notice types and your right to respond can change the outcome.",
    sections: [
      { h2: "A Notice Is Not an Eviction", paras: [
        "In Alberta, a landlord can serve a notice, but they **cannot physically remove you themselves**. Only after obtaining an order — through the **Residential Tenancy Dispute Resolution Service (RTDRS)** or the Court — can a **civil enforcement (bailiff)** carry out an eviction. Changing the locks or removing your belongings without an order is illegal.",
      ] },
      { h2: "The Main Notice Types", paras: ["What you're facing depends on the notice:"], list: [
        "**14-day notice for unpaid rent:** you can usually stop it by paying the overdue rent before the termination date.",
        "**14-day notice for a substantial breach:** for serious or repeated problems; you can dispute it.",
        "**24-hour notice:** only for the most serious situations, like major damage or a threat to safety.",
        "**90-day notice:** for landlord reasons such as moving in, major renovation, or a sale to an occupying buyer.",
      ] },
      { h2: "How to Respond", paras: [
        "If you disagree with a notice, don't just move out. For unpaid rent, paying what's owed can cancel the notice. Otherwise, you can make your case at the **RTDRS** (a faster, cheaper alternative to court) or in **Provincial Court**. There's a modest filing fee, and you can present evidence at a hearing.",
      ] },
      { h2: "Build Your Case", paras: [
        "Gather everything: the notice, your rent payment records, texts and emails, photos, and witness names. If the landlord claims a breach you dispute, or a 'landlord's use' reason you think is pretextual, your documentation is what wins.",
      ] },
      { h2: "Where to Get Help", paras: [
        "Alberta tenants can get support from organizations like the Centre for Public Legal Education Alberta (CPLEA), which publishes plain-language guides, and local legal clinics. If the stakes are high, get advice before your hearing.",
      ] },
    ],
    faqs: [
      { q: "Can my landlord evict me without a court order in Alberta?", a: "No. A landlord can serve a notice, but can only remove you after obtaining an order from the RTDRS or the Court, carried out by a civil enforcement bailiff. Locking you out or removing your belongings without an order is illegal." },
      { q: "What is the RTDRS in Alberta?", a: "The Residential Tenancy Dispute Resolution Service is a faster, lower-cost alternative to court for most residential tenancy disputes in Alberta, including many evictions and deposit claims. Both sides present evidence at a hearing and receive a binding order." },
      { q: "Can I stop an eviction for unpaid rent in Alberta?", a: "Often, yes. A 14-day notice for unpaid rent can usually be cancelled by paying the overdue amount before the termination date. Keep proof of payment. If you can't pay, you can still attend the hearing to explain your circumstances." },
      { q: "How long does eviction take in Alberta?", a: "It varies. Non-payment matters can move quickly once a notice period passes, while disputed cases go through an RTDRS or court hearing. Only after an order is granted can a bailiff schedule the actual removal." },
    ],
    cta: { title: "Is your eviction notice valid?", blurb: "Check the notice type and days given against the rules with our free checker.", href: "/tools/eviction-notice-checker", label: "Eviction Notice Checker" },
    related: [
      { label: "How Much Notice to End a Tenancy in Alberta", href: "/blog/alberta-notice-to-end-tenancy" },
      { label: "Alberta Rent Increase Rules", href: "/blog/alberta-rent-increase-rules" },
      { label: "Fighting an Illegal Eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
      { label: "Alberta Tenant Rights", href: "/canada/alberta" },
    ],
  },
  {
    slug: "alberta-breaking-a-lease",
    category: AB,
    date: DATE, dateLabel: DATE_LABEL, readMins: 6,
    title: "Breaking a Lease in Alberta: How to End a Fixed Term Early",
    headline: "Breaking a Lease in Alberta: How to End a Fixed-Term Tenancy Early",
    h1: "Breaking a Lease in Alberta: How to End a Fixed Term Early",
    crumb: "Breaking a Lease in Alberta",
    description: "You generally can't just give notice to leave a fixed-term lease early in Alberta — but you have options: assignment, subletting, mutual agreement, and the landlord's duty to limit your losses. Plus the situations that end a tenancy early.",
    ogDescription: "Assignment, subletting, mutual agreement, and duty to mitigate — the legal ways to break a lease early in Alberta.",
    keywords: ["breaking a lease alberta", "end fixed term lease early alberta", "get out of a lease alberta", "sublet assign lease alberta", "duty to mitigate alberta"],
    lead: "A new job, a breakup, a rent you can't manage — sometimes you have to leave before your term is up. In Alberta you can't simply walk away from a fixed term, but the law limits what you owe and offers several legal exits.",
    sections: [
      { h2: "First: A Fixed Term Is a Commitment", paras: [
        "A fixed-term lease binds you until its end date. Giving notice ends a periodic (month-to-month) tenancy, not a fixed term. So the question is which legal exit fits — and how to limit what you owe if you must leave.",
      ] },
      { h2: "Assign or Sublet", paras: [
        "You can ask to **assign** (transfer the lease to a new tenant) or **sublet** (someone lives there while you stay the tenant). Your landlord's consent is usually required, but they can't withhold it unreasonably. This is often the cleanest way to limit your costs — line up a qualified replacement and put the landlord's approval in writing.",
      ] },
      { h2: "Mutual Agreement to End", paras: [
        "If your landlord agrees, you can both sign a **written agreement to end the tenancy** early. It's voluntary — no one can force it — but a landlord who can quickly re-rent (especially in a strong market) may be happy to. Always get the agreed end date in writing.",
      ] },
      { h2: "The Landlord's Duty to Minimize Loss", paras: [
        "If you leave without one of the above, the landlord **can't just leave the unit empty and charge you the whole remaining term**. They must take reasonable steps to re-rent. You're liable only for lost rent until a new tenant moves in (or the term ends), plus reasonable costs. Give written notice and keep records of their efforts.",
      ] },
      { h2: "Situations That Can End a Tenancy Early", paras: ["Some circumstances allow an early end regardless of the term:"], list: [
        "**Fleeing domestic violence:** Alberta lets tenants end a tenancy early with a certificate confirming the situation.",
        "**A substantial breach by the landlord** that isn't fixed: may allow you to end the tenancy.",
        "**Already periodic?** You're not breaking anything — just give proper notice.",
      ] },
    ],
    faqs: [
      { q: "Can I break a fixed-term lease early in Alberta?", a: "Not just by giving notice. You can ask to assign or sublet (the landlord can't unreasonably refuse), reach a mutual written agreement to end, or end early in specific situations like fleeing domestic violence. If you leave otherwise, the landlord must still try to re-rent." },
      { q: "Does my Alberta landlord have to try to re-rent if I leave early?", a: "Yes. The landlord has a duty to take reasonable steps to minimize their loss by re-renting. You're only responsible for rent until a new tenant moves in or the term ends, plus reasonable costs — not automatically the entire remaining term." },
      { q: "Can I end my lease early for domestic violence in Alberta?", a: "Yes. Alberta allows a tenant to end a tenancy early to flee domestic violence, using a certificate that confirms the circumstances. Ask a legal clinic or CPLEA about the current process and required form." },
      { q: "Will my landlord charge a penalty for breaking my lease in Alberta?", a: "There's no lawful flat 'penalty' beyond your actual rent obligation, reduced by the landlord's duty to re-rent, plus genuine costs. If a lease imposes an automatic multi-month penalty, that may not be enforceable — get advice." },
    ],
    cta: { title: "What could leaving early cost?", blurb: "Estimate your exposure before deciding with our free lease-break tool.", href: "/tools/lease-break-calculator", label: "Lease Break Estimator" },
    related: [
      { label: "How Much Notice to End a Tenancy in Alberta", href: "/blog/alberta-notice-to-end-tenancy" },
      { label: "Alberta Security Deposit Rules", href: "/blog/alberta-security-deposit-rules" },
      { label: "Alberta Rent Increase Rules", href: "/blog/alberta-rent-increase-rules" },
      { label: "Alberta Tenant Rights", href: "/canada/alberta" },
    ],
  },
  {
    slug: "alberta-landlord-repairs-maintenance",
    category: AB,
    date: DATE, dateLabel: DATE_LABEL, readMins: 6,
    title: "Landlord Repairs & Maintenance in Alberta: Your Rights",
    headline: "Landlord Repairs and Maintenance in Alberta: Your Rights",
    h1: "Landlord Repairs & Maintenance in Alberta: Your Rights",
    crumb: "Landlord Repairs in Alberta",
    description: "Your Alberta landlord must meet minimum housing, health, and safety standards — including heat and essential services. What they must maintain, how minimum housing standards work, and how to get repairs done.",
    ogDescription: "Repairs, heat, minimum housing standards, and enforcement in Alberta — your landlord's obligations.",
    keywords: ["landlord repairs alberta", "minimum housing standards alberta", "no heat rental alberta", "landlord maintenance obligations alberta", "rental repairs alberta"],
    lead: "In Alberta your landlord must keep your home meeting minimum housing and health standards — heat and essential services included. Here's what they're responsible for, and how to force action when they won't fix things.",
    sections: [
      { h2: "Minimum Housing Standards", paras: [
        "Alberta rentals must meet the province's **Minimum Housing and Health Standards** and the **Public Health Act**. That covers structural safety, heating, plumbing, electrical, and freedom from health hazards. A lease clause can't sign these obligations away, and they apply even to problems you noticed before moving in.",
      ] },
      { h2: "Heat and Essential Services", paras: [
        "Landlords must provide and maintain **heat and essential services** where they're included in the tenancy. A landlord can't cut off heat, water, or power to pressure a tenant — doing so is a serious violation. Alberta's standards set minimum heating requirements for the cold months.",
      ] },
      { h2: "Report to the Landlord — In Writing", paras: [
        "Start with a clear **written request** to the landlord, with dates and photos, and keep a copy. Most disputes turn on who can prove what, and a paper trail is your strongest asset. Give a reasonable deadline to respond.",
      ] },
      { h2: "Escalate to Public Health / the Municipality", paras: [
        "If the landlord ignores you, you can contact **Alberta Health Services (environmental public health)** or your municipality about breaches of the minimum housing standards. An inspector can order the landlord to fix the problem — often faster than a tribunal, and a strong piece of evidence.",
      ] },
      { h2: "RTDRS and Compensation", paras: [
        "You can also bring a claim through the **RTDRS** or Provincial Court for the landlord's failure to maintain the premises, seeking remedies such as compensation. Don't simply withhold rent on your own — pursue the proper channels so you stay protected.",
      ] },
    ],
    faqs: [
      { q: "Is my landlord responsible for repairs in Alberta?", a: "Yes. Alberta landlords must keep rentals meeting the Minimum Housing and Health Standards and the Public Health Act, including structural, heating, plumbing, and electrical systems. These obligations can't be waived by a lease clause." },
      { q: "What do I do if my landlord won't make repairs in Alberta?", a: "Request the repair in writing and keep records. If the landlord ignores you, contact Alberta Health Services (environmental public health) or your municipality about minimum-standards violations, and consider a claim through the RTDRS or Provincial Court." },
      { q: "Can my landlord shut off my heat in Alberta?", a: "No. Where heat and essential services are part of the tenancy, the landlord must maintain them and can't cut them off to pressure you. Alberta's housing standards set minimum heating requirements, and a shut-off is a serious violation." },
      { q: "Can I withhold rent for repairs in Alberta?", a: "It's risky to simply stop paying — that can put you in breach and lead to eviction. Instead, document the problem, report it to public health or the municipality, and pursue a claim through the RTDRS or court for the landlord's failure to maintain the unit." },
    ],
    cta: { title: "Landlord ignoring repairs?", blurb: "Send a clear, dated repair request they can't claim they never received.", href: "/letters/repair-request-letter", label: "Repair Request Letter" },
    related: [
      { label: "Alberta Security Deposit Rules", href: "/blog/alberta-security-deposit-rules" },
      { label: "Bed Bugs & Pests: Who's Responsible?", href: "/blog/bed-bugs-pests-landlord-ontario" },
      { label: "Alberta Eviction Process", href: "/blog/alberta-eviction-process" },
      { label: "Alberta Tenant Rights", href: "/canada/alberta" },
    ],
  },

  // ------------------------------------------------ Ontario high-intent gaps
  {
    slug: "mould-in-a-rental-ontario",
    category: ON,
    date: DATE, dateLabel: DATE_LABEL, readMins: 6,
    title: "Mould in a Rental in Ontario: Whose Problem Is It?",
    headline: "Mould in a Rental in Ontario: Your Landlord's Responsibility",
    h1: "Mould in a Rental in Ontario: Whose Problem Is It?",
    crumb: "Mould in a Rental in Ontario",
    description: "Mould in your Ontario rental is almost always the landlord's responsibility to fix — especially when it comes from a leak or poor ventilation. How to report it, escalate to the city, and claim a rent abatement.",
    ogDescription: "Who's responsible for mould in an Ontario rental, how to report it, and how to force a fix.",
    keywords: ["mould in rental ontario", "black mold apartment ontario landlord", "mould tenant rights ontario", "landlord won't fix mould ontario", "is landlord responsible for mold ontario"],
    lead: "A patch of black mould on the bathroom ceiling or behind a leaky window is more than ugly — it's a health hazard, and in Ontario it's almost always your landlord's job to fix. Here's how to make that happen.",
    sections: [
      { h2: "The Landlord Has to Deal With It", paras: [
        "Under the Residential Tenancies Act, your landlord must keep the unit **in a good state of repair and fit for habitation** and comply with health and safety standards. Mould caused by a **maintenance defect** — a roof or plumbing leak, failed window seals, poor ventilation — is squarely the landlord's responsibility to remediate, at their cost.",
      ] },
      { h2: "When Could It Be on You?", paras: [
        "The narrow exception is mould that results from a tenant's own **negligence** — for example, never using the bathroom fan, blocking vents, or failing to report an obvious leak for months. Even then, the landlord usually has to fix the underlying problem; the dispute is about who pays. Reporting promptly protects you.",
      ] },
      { h2: "Report It in Writing — Immediately", paras: [
        "Tell your landlord **in writing** (text or email) as soon as you see mould, with photos and the date. Keep the copy. A written record is what turns a he-said/she-said into a winnable case, and it starts the clock on the landlord's duty to act.",
      ] },
      { h2: "Escalate If They Ignore You", paras: ["You have more than one lever, and can use them together:"], list: [
        "**Municipal property standards / 311:** the city can inspect and order remediation, often faster than the LTB.",
        "**Public health:** significant mould can be a health-hazard complaint.",
        "**File a T6 at the LTB:** ask for an order to remediate plus a **rent abatement** for the time you lived with it.",
      ] },
      { h2: "Don't Just Stop Paying Rent", paras: [
        "Withholding rent on your own can put you at risk of an N4 and eviction. Instead, document everything, escalate through the city and the LTB, and let a T6 application recover an abatement. See [can I withhold rent over repairs?](/blog/withholding-rent-repairs-ontario) for why the formal route is safer.",
      ] },
    ],
    faqs: [
      { q: "Is my landlord responsible for mould in Ontario?", a: "Almost always, yes. Landlords must keep the unit in a good state of repair and fit for habitation. Mould from a leak, failed seals, or poor ventilation is the landlord's responsibility to remediate at their cost, even if it's unclear exactly when it started." },
      { q: "What do I do if my landlord won't remove mould?", a: "Report it in writing with photos and keep a copy. If the landlord doesn't act, call 311 for municipal property standards, consider a public-health complaint, and file a T6 application at the LTB for an order to remediate plus a rent abatement." },
      { q: "Can I break my lease because of mould in Ontario?", a: "Mould alone isn't an automatic right to leave, but if the unit becomes uninhabitable and the landlord won't act, that can support a T6, a rent abatement, and in serious cases an argument to end the tenancy. Get advice from a tenant clinic first." },
      { q: "Can I get money back for living with mould?", a: "Yes. Through a T6 application the LTB can order a rent abatement — a partial refund — for the period you lived with an unremediated hazard, on top of ordering the landlord to fix it." },
    ],
    cta: { title: "Landlord ignoring the problem?", blurb: "Send a clear, dated repair request that puts them on notice.", href: "/letters/repair-request-letter", label: "Repair Request Letter" },
    related: [
      { label: "Can I Withhold Rent Over Repairs?", href: "/blog/withholding-rent-repairs-ontario" },
      { label: "Bed Bugs & Pests: Who's Responsible?", href: "/blog/bed-bugs-pests-landlord-ontario" },
      { label: "Landlord Repair Obligations", href: "/blog/landlord-repair-obligations-canada" },
      { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
    ],
  },
  {
    slug: "no-written-lease-tenant-rights-ontario",
    category: ON,
    date: DATE, dateLabel: DATE_LABEL, readMins: 6,
    title: "No Written Lease in Ontario? You Still Have Full Rights",
    headline: "No Written Lease in Ontario? Your Rights With a Verbal Tenancy",
    h1: "No Written Lease in Ontario? You Still Have Full Rights",
    crumb: "No Written Lease in Ontario",
    description: "A handshake or verbal rental deal in Ontario is a real tenancy with full protection under the Residential Tenancies Act. Your rights without a written lease, the Standard Lease rule, and the one-month-rent remedy.",
    ogDescription: "Verbal tenancies are fully covered by the RTA. Your rights without a written lease in Ontario.",
    keywords: ["no written lease ontario", "verbal lease ontario tenant rights", "no lease agreement rights ontario", "ontario standard lease not provided", "month to month no lease ontario"],
    lead: "No paper, no problem — at least not for your rights. In Ontario a verbal or handshake tenancy is fully valid and protected by the Residential Tenancies Act. In fact, the law gives you a powerful tool when a landlord won't give you a proper written lease.",
    sections: [
      { h2: "A Verbal Tenancy Is a Real Tenancy", paras: [
        "If you pay rent and the landlord accepts it, you have a tenancy — written lease or not. Every core RTA protection applies: **security of tenure, rent-increase limits, proper notice, the right to repairs, and protection from illegal eviction**. A landlord can't treat you as having fewer rights because nothing was signed.",
      ] },
      { h2: "The Ontario Standard Lease Rule", paras: [
        "For most tenancies, landlords must use the **Ontario Standard Lease** form. If you don't have one, you can **ask for it in writing**. If the landlord doesn't provide it within **21 days**, you may **withhold one month's rent** — and if they still don't provide it within 30 days after that, you may not have to repay that month at all.",
      ] },
      { h2: "Prove the Terms", paras: [
        "The catch with a verbal deal is proving what was agreed. Protect yourself:",
      ], list: [
        "Keep records of **rent payments** — e-transfers are ideal.",
        "Save **texts and emails** discussing rent, repairs, or move-in.",
        "Note the **rent amount, due date, and what's included** (utilities, parking).",
      ] },
      { h2: "Your Rent Is Still Protected", paras: [
        "Even without a signed lease, the landlord can only raise your rent by the guideline (unless the unit is exempt), once every 12 months, with **90 days' written notice on Form N1**. A verbal 'agreement' to a bigger increase isn't binding.",
      ] },
      { h2: "Ending a Verbal Tenancy", paras: [
        "A verbal periodic tenancy is treated as month-to-month. To leave, give **60 days' written notice on Form N9**. The landlord can only end it for a valid reason through the LTB — never by simply telling you to go.",
      ] },
    ],
    faqs: [
      { q: "Do I have rights without a written lease in Ontario?", a: "Yes — full rights. A verbal or unwritten tenancy is completely covered by the Residential Tenancies Act, including security of tenure, rent-increase limits, notice rules, repairs, and protection from illegal eviction." },
      { q: "My landlord never gave me a Standard Lease — what can I do?", a: "Ask for it in writing. If the landlord doesn't provide the Ontario Standard Lease within 21 days, you can withhold one month's rent. If they still don't provide it within 30 days after that, you may not have to repay that withheld month." },
      { q: "Can my landlord raise rent if I have no lease in Ontario?", a: "Only under the normal rules: by the guideline (unless the unit is exempt), once every 12 months, with 90 days' written notice on Form N1. A verbal agreement to a larger increase isn't enforceable." },
      { q: "How do I end a tenancy with no written lease?", a: "A verbal tenancy is treated as month-to-month, so you give 60 days' written notice on Form N9. The landlord can only end it for a valid reason through the LTB." },
    ],
    cta: { title: "Check what a lease really says", blurb: "Have a written lease now? Paste it and get a plain-English breakdown, free.", href: "/tools/clause-checker", label: "Free Clause Checker" },
    related: [
      { label: "Ontario Standard Lease Explained", href: "/blog/ontario-standard-lease-explained" },
      { label: "Month-to-Month vs Fixed-Term", href: "/blog/month-to-month-vs-fixed-term-lease" },
      { label: "How Much Notice to Move Out", href: "/blog/notice-to-move-out-ontario" },
      { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
    ],
  },
  {
    slug: "rooming-house-tenant-rights-ontario",
    category: ON,
    date: DATE, dateLabel: DATE_LABEL, readMins: 6,
    title: "Rooming House & Shared Housing Tenant Rights in Ontario",
    headline: "Rooming House and Shared Housing Tenant Rights in Ontario",
    h1: "Rooming House & Shared Housing Tenant Rights in Ontario",
    crumb: "Rooming House Rights in Ontario",
    description: "Renting a room in a rooming or boarding house in Ontario? You usually have full Residential Tenancies Act rights — with one key exception for sharing a kitchen or bathroom with the owner. Your rights explained.",
    ogDescription: "When rooming-house and shared-housing renters are covered by the RTA in Ontario — and the owner-sharing exception.",
    keywords: ["rooming house tenant rights ontario", "renting a room ontario rights", "boarding house rights ontario", "shared kitchen bathroom landlord ontario", "single room occupancy ontario"],
    lead: "Renting a single room is one of the most affordable ways to live in Ontario's cities — and one of the most misunderstood. Most roomers have the same rights as any tenant, but one specific living arrangement changes everything.",
    sections: [
      { h2: "Most Roomers Are Full Tenants", paras: [
        "If you rent a room in a rooming or boarding house, you're usually a **tenant under the Residential Tenancies Act**, with the same core rights as anyone: proper notice, rent-increase limits, the right to repairs, receipts on request, and protection from illegal eviction. The landlord can't just change your lock or put your things on the curb.",
      ] },
      { h2: "The One Big Exception", paras: [
        "The RTA does **not** apply if you share a **kitchen or bathroom with the owner** (or the owner's close family member) who lives in the building. In that situation you're not covered by the Act, and different, weaker rules apply. This exception is specifically about sharing with the **owner** — not with other roomers or tenants.",
      ] },
      { h2: "Sharing With Other Tenants Is Fine", paras: [
        "If you share a kitchen or bathroom with **other renters** (but not the owner), you're still a full tenant under the Act. A house full of roomers who each rent their own room, sharing common areas, are generally all covered.",
      ] },
      { h2: "Your Everyday Rights as a Roomer", paras: ["When you're covered, you're entitled to:"], list: [
        "**Rent receipts** on request, for free.",
        "**Proper notice** before the landlord enters your room (24 hours, in writing, for most reasons).",
        "**Rent-increase protection** — the guideline, once a year, with 90 days' notice.",
        "**A real eviction process** — only the LTB and Sheriff can remove you.",
      ] },
      { h2: "Watch for Illegal Rooming Houses", paras: [
        "Some rooming houses aren't licensed or up to fire code. As with an [illegal basement apartment](/blog/illegal-basement-apartment-ontario), that doesn't strip your tenant rights — but do check you have working smoke and carbon-monoxide alarms and a safe exit.",
      ] },
    ],
    faqs: [
      { q: "Do I have tenant rights renting a room in Ontario?", a: "Usually yes. If you rent a room in a rooming or boarding house, you're generally a full tenant under the Residential Tenancies Act — unless you share a kitchen or bathroom with the owner (or their close family) who lives in the building." },
      { q: "What is the shared-kitchen-or-bathroom exception?", a: "The RTA doesn't apply if you share a kitchen or bathroom with the owner or the owner's close family member living in the same building. Sharing with other tenants or roomers (not the owner) doesn't remove your coverage." },
      { q: "Can a rooming-house landlord evict me without the LTB?", a: "If you're covered by the RTA, no — only the Landlord and Tenant Board can order an eviction, enforced by the Sheriff. A landlord who locks you out or removes your belongings is acting illegally." },
      { q: "Does the landlord have to give me a receipt for room rent?", a: "Yes, if you're covered by the RTA. On request, the landlord must provide a free rent receipt, including for up to 12 months after you move out." },
    ],
    cta: { title: "Know your rights by province", blurb: "Get an instant reference card for deposits, notice, and rent rules.", href: "/tools/tenant-rights-lookup", label: "Tenant Rights Lookup" },
    related: [
      { label: "Illegal Basement Apartments in Ontario", href: "/blog/illegal-basement-apartment-ontario" },
      { label: "Roommates & Co-Tenants in Ontario", href: "/blog/roommates-co-tenants-ontario" },
      { label: "Landlord Entry & Notice Rules", href: "/blog/landlord-entry-notice-canada" },
      { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
    ],
  },
  {
    slug: "rent-bank-arrears-help-ontario",
    category: ON,
    date: DATE, dateLabel: DATE_LABEL, readMins: 6,
    title: "Behind on Rent in Ontario? Rent Banks & Arrears Help",
    headline: "Behind on Rent in Ontario? Rent Banks and Arrears Help",
    h1: "Behind on Rent in Ontario? Rent Banks &amp; Arrears Help",
    crumb: "Rent Banks & Arrears Help",
    description: "Falling behind on rent in Ontario doesn't have to mean eviction. Rent banks, the Canada-Ontario Housing Benefit, LTB payment plans, and how to act before an N4 becomes an eviction order.",
    ogDescription: "Rent banks, housing benefits, and LTB payment plans for tenants behind on rent in Ontario.",
    keywords: ["rent bank ontario", "help paying rent arrears ontario", "behind on rent ontario", "emergency rent assistance ontario", "can't pay rent ontario help"],
    lead: "If you've fallen behind on rent, the worst thing you can do is nothing. Ontario has real programs — rent banks, benefits, and payment plans — that can stop a missed month from turning into an eviction. Here's where to turn, fast.",
    sections: [
      { h2: "First: An N4 Is Not an Eviction", paras: [
        "If your landlord serves an **N4** for unpaid rent, you can **void it by paying the full amount owing** within the notice period — and even later, you can often 'pay and stay' right up to the eviction. So the goal is to find the money or a plan. See [got an N4?](/blog/n4-non-payment-rent-ontario) for exactly how the timeline works.",
      ] },
      { h2: "Rent Banks", paras: [
        "Many Ontario municipalities fund **rent banks** — programs that provide grants or interest-free loans to cover rent arrears for tenants at risk of eviction. Eligibility varies by area, but they're designed precisely for a short-term shortfall. Contact your municipality or 211 Ontario to find the rent bank serving your area.",
      ] },
      { h2: "The Canada-Ontario Housing Benefit", paras: [
        "The **Canada-Ontario Housing Benefit (COHB)** is a portable monthly benefit that helps eligible households with rent. It's not instant, but if your income is low relative to your rent, it can make your housing sustainable going forward. Ask your local service manager how to be considered.",
      ] },
      { h2: "Other Emergency Help", paras: ["Depending on your situation, you may also qualify for:"], list: [
        "**Ontario Works / ODSP** emergency or discretionary housing assistance.",
        "**Community and charitable funds** for one-time rent help (ask 211).",
        "**Utility arrears programs** like LEAP, which free up cash for rent.",
      ] },
      { h2: "Ask the LTB for a Payment Plan", paras: [
        "If your case reaches the Landlord and Tenant Board, you can ask for a **repayment plan** to clear the arrears over time and keep your home. Bring a realistic budget. Tenant Duty Counsel at the hearing can help you request one — don't skip the hearing.",
      ] },
    ],
    faqs: [
      { q: "What is a rent bank in Ontario?", a: "A rent bank is a municipally funded program that provides grants or interest-free loans to cover rent arrears for tenants at risk of eviction. Eligibility and amounts vary by area — contact your municipality or 211 Ontario to find yours." },
      { q: "Can I get help paying rent arrears in Ontario?", a: "Yes. Options include local rent banks, the Canada-Ontario Housing Benefit, Ontario Works/ODSP emergency assistance, community funds through 211, and utility-arrears programs. Acting early, before an N4 becomes an eviction order, gives you the most options." },
      { q: "Will I be evicted if I miss one month's rent in Ontario?", a: "Not automatically. A missed payment can lead to an N4, but you can void it by paying what's owed within the notice period, and you can often pay and stay even later. Rent banks and payment plans exist to help you catch up." },
      { q: "Can I set up a payment plan with the LTB?", a: "Yes. At a hearing you can ask the Landlord and Tenant Board for a repayment plan to clear arrears over time and keep your tenancy. Bring a realistic budget, and use Tenant Duty Counsel for free help." },
    ],
    cta: { title: "Facing an N4 or hearing?", blurb: "See how the non-payment timeline works and how to void the notice.", href: "/blog/n4-non-payment-rent-ontario", label: "N4 Non-Payment Guide" },
    related: [
      { label: "Got an N4? Non-Payment Explained", href: "/blog/n4-non-payment-rent-ontario" },
      { label: "LTB Fees & Wait Times", href: "/ltb-fees-timeline" },
      { label: "How to Fight an Illegal Eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
      { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
    ],
  },
  {
    slug: "how-to-dispute-a-rent-increase-ontario",
    category: ON,
    date: DATE, dateLabel: DATE_LABEL, readMins: 6,
    title: "How to Dispute a Rent Increase in Ontario",
    headline: "How to Dispute an Illegal or Above-Guideline Rent Increase in Ontario",
    h1: "How to Dispute a Rent Increase in Ontario",
    crumb: "Dispute a Rent Increase in Ontario",
    description: "Think your Ontario rent increase is too high or invalid? When an increase is illegal, how to respond to an N1 or an above-guideline (AGI) application, and how to recover money you were wrongly charged.",
    ogDescription: "When an Ontario rent increase is invalid, how to respond, and how to recover an illegal charge.",
    keywords: ["how to dispute rent increase ontario", "illegal rent increase ontario", "fight rent increase ontario", "n1 rent increase ontario", "above guideline increase dispute ontario"],
    lead: "A rent increase notice isn't the final word. In Ontario, plenty of increases are invalid — wrong notice, wrong timing, or above what's allowed — and you have clear ways to push back without risking your tenancy.",
    sections: [
      { h2: "First, Check If It's Even Valid", paras: [
        "Many increases fail on the basics. An increase is **not valid** unless it uses proper **written notice (Form N1)** given at least **90 days** ahead, comes no more than **once every 12 months**, and (for rent-controlled units) stays at or below the **annual guideline**. If any of those is off, the increase doesn't take effect.",
      ] },
      { h2: "Is Your Unit Exempt?", paras: [
        "Units first occupied after **November 15, 2018** are exempt from the guideline, so there's no percentage cap — but the 90-day notice and once-a-year rules still apply. Confirm your unit's status before assuming an increase is illegal. Our [AGI checker](/tools/agi-checker) walks through this in seconds.",
      ] },
      { h2: "Above-Guideline Increases (AGIs)", paras: [
        "If the increase is above the guideline, the landlord **must apply to the LTB** for an above-guideline increase order (usually for major capital work or big cost increases). You'll get notice and the right to participate in the hearing. **Don't pay the excess** unless and until the LTB approves it.",
      ] },
      { h2: "How to Respond", paras: ["A calm, documented response wins:"], list: [
        "**Put your objection in writing** and keep a copy — our [dispute letter](/letters/rent-increase-dispute-letter) gives you a template.",
        "**Keep paying your lawful rent** (the old amount, or the valid guideline amount) so you're never in arrears.",
        "**Gather evidence:** the notice, your lease, and payment history.",
        "For an AGI, **attend the hearing** and use Tenant Duty Counsel.",
      ] },
      { h2: "Recovering an Illegal Increase", paras: [
        "If you already paid an increase that turns out to be invalid, you can apply to the LTB (a **T1**) to recover the overpayment. There are time limits, so act rather than waiting. An illegal increase doesn't become legal just because you paid it for a while.",
      ] },
    ],
    faqs: [
      { q: "When is a rent increase illegal in Ontario?", a: "An increase is invalid if it lacks proper written notice (Form N1) at least 90 days ahead, happens more than once in 12 months, or exceeds the annual guideline for a rent-controlled unit without LTB approval. Any of these makes the increase ineffective." },
      { q: "How do I dispute a rent increase in Ontario?", a: "Check the notice, timing, and amount first. Put your objection in writing, keep paying your lawful rent, and gather your lease and payment records. For an above-guideline increase, participate in the LTB hearing; if you already overpaid an invalid increase, file a T1 to recover it." },
      { q: "Do I have to pay an above-guideline increase in Ontario?", a: "Not unless the Landlord and Tenant Board approves it. A landlord must apply to the LTB for an above-guideline increase, and you can dispute it. Don't pay the portion above the guideline until there's an order." },
      { q: "Can I get back rent I overpaid on an illegal increase?", a: "Yes. You can file a T1 application at the LTB to recover money collected through an illegal rent increase, subject to time limits — so it's best to act promptly rather than letting it continue." },
    ],
    cta: { title: "Is your increase legal?", blurb: "Check any proposed increase in seconds with our free AGI checker.", href: "/tools/agi-checker", label: "AGI Checker" },
    related: [
      { label: "Above-Guideline Rent Increases", href: "/blog/above-guideline-rent-increase-ontario" },
      { label: "2026 Rent Increase Guideline", href: "/blog/ontario-rent-increase-guideline-2026" },
      { label: "The Post-2018 Exemption", href: "/blog/post-2018-rent-control-exemption-ontario" },
      { label: "Rent Increase Dispute Letter", href: "/letters/rent-increase-dispute-letter" },
    ],
  },
];
