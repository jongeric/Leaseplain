// Shared blog post index (title, url, excerpt, date, category).
// Single source of truth used by the blog listing page and site search.

export interface BlogPost {
  href: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    href: "/blog/cash-for-keys-ontario",
    title: "Cash for Keys in Ontario: Should You Take the Deal?",
    excerpt:
      "Your landlord is offering money to move out. It's legal in Ontario and can be worth it — but only on your terms. How much to ask for, what to get in writing, and when to just say no.",
    date: "September 7, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/how-to-break-a-lease-ontario",
    title: "How to Break a Lease in Ontario (Legally)",
    excerpt:
      "You can't just give notice and walk away from a fixed term. The real legal exits — assignment, subletting, an N11 agreement, and the landlord's duty to mitigate — plus what a lease break can actually cost you.",
    date: "September 7, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/bed-bugs-pests-landlord-ontario",
    title: "Bed Bugs and Pests in a Rental: Who's Responsible in Ontario?",
    excerpt:
      "Bed bugs, cockroaches, mice — dealing with pests is almost always the landlord's job in Ontario, even if nobody knows how they got in. Your rights, how to report it, and how to force action with a T6.",
    date: "September 7, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/roommates-co-tenants-ontario",
    title: "Roommates and Co-Tenants in Ontario: Who's Liable for What?",
    excerpt:
      "If your roommate stops paying or moves out, are you on the hook? It hinges on whether you're co-tenants on one lease or a tenant with a roommate. Joint liability, deposits, and how to leave cleanly.",
    date: "September 7, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/illegal-basement-apartment-ontario",
    title: "Renting an Illegal Basement Apartment in Ontario: What Are Your Rights?",
    excerpt:
      "An unregistered basement unit doesn't strip you of tenant rights. The Residential Tenancies Act protects you regardless — you can't be evicted just because the unit is 'illegal.' The real risks to weigh.",
    date: "September 7, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/landlord-harassment-ontario",
    title: "Landlord Harassment in Ontario: What Counts and How to Stop It",
    excerpt:
      "Surprise visits, shut-off utilities, threats, pressure to leave — that's illegal in Ontario, and you can be compensated. What counts as harassment, how to document it, and how to file a T2.",
    date: "September 7, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/tenant-insurance-ontario",
    title: "Is Tenant Insurance Mandatory in Ontario?",
    excerpt:
      "No law requires it — but your landlord can, and often does, in the lease. What tenant insurance covers, why the landlord's policy won't save your belongings, and whether the clause is enforceable.",
    date: "September 7, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/n4-non-payment-rent-ontario",
    title: "Got an N4 in Ontario? Eviction for Non-Payment of Rent, Explained",
    excerpt:
      "An N4 is not an eviction — and it doesn't mean you have to leave. How the 14-day window works, how to void the notice, your 'pay and stay' right, and how to ask for a payment plan at the LTB.",
    date: "August 3, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/landlord-heat-air-conditioning-ontario",
    title: "Is Your Landlord Required to Provide Heat and Air Conditioning in Ontario?",
    excerpt:
      "Heat is a vital service your landlord must provide and can never shut off. Air conditioning is treated very differently. The minimum-temperature rules, your right to install a unit, and what to do if the heat fails.",
    date: "August 3, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/post-2018-rent-control-exemption-ontario",
    title: "Why Isn't My Rent Capped? The Post-November 2018 Rent Control Exemption",
    excerpt:
      "If your unit was first occupied after November 15, 2018, it's exempt from Ontario's rent increase guideline — the landlord can raise rent by any amount. How the exemption and vacancy decontrol work, and what still protects you.",
    date: "August 3, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/withholding-rent-repairs-ontario",
    title: "Can I Withhold Rent if My Landlord Won't Make Repairs in Ontario?",
    excerpt:
      "Withholding rent over repairs can get you evicted in Ontario. Here's the route that actually works — the T6 application and rent abatement — which can even get you money back, without risking your tenancy.",
    date: "August 3, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/bad-faith-n12-t5-compensation-ontario",
    title: "Bad-Faith N12: What If Your Landlord Didn't Actually Move In?",
    excerpt:
      "Evicted for a landlord's 'own use' but they re-rented instead? The T5 application can win you rent-difference, moving costs, and more. How the one-year rule and the bad-faith presumption work in your favour.",
    date: "August 3, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/ltb-wait-times-2026",
    title: "How Long Does the LTB Take in 2026? The Backlog, Explained for Tenants",
    excerpt:
      "Ontario's Landlord and Tenant Board backlog shapes how long every dispute takes — including tenant T2 and T6 applications. Here's what wait times look like in 2026 and how to keep your case moving.",
    date: "August 3, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/notice-to-move-out-ontario",
    title: "How Much Notice Do You Have to Give to Move Out in Ontario?",
    excerpt:
      "The answer is 60 days — but when those days end matters just as much, and fixed-term leases carry a trap that catches renters every year. How to give notice on Form N9 that actually holds up.",
    date: "August 3, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/subletting-assignment-ontario",
    title: "Subletting and Assigning Your Lease in Ontario: A Tenant's Guide",
    excerpt:
      "Need to leave early or fill your unit while away? Ontario gives tenants a real right to sublet or assign — and limits what a landlord can do to block it. The key differences and how to do each properly.",
    date: "August 3, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/no-pet-clause-ontario",
    title: "Can Your Landlord Say \"No Pets\" in Ontario? What the Law Actually Says",
    excerpt:
      "In Ontario, a \"no pets\" clause in your lease is void — legally meaningless — even if you signed it. But that's not a blank cheque. Here's exactly where the line sits, including the condo exception.",
    date: "August 3, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/last-months-rent-deposit-ontario",
    title: "Last Month's Rent Deposit in Ontario: Rules, Interest, and Getting It Back",
    excerpt:
      "Your Ontario landlord can only collect a last month's rent deposit — never a damage or cleaning deposit. What it can be used for, the interest you're owed every year, and how to recover what you're owed.",
    date: "August 3, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/right-to-rent-canada",
    title: "Your Right to Rent in Canada: When Can a Landlord Refuse You?",
    excerpt:
      "Landlords cannot refuse you housing based on race, citizenship, family status, disability, or receiving public assistance. Here is what is illegal in tenant screening — and what to do if you are turned away.",
    date: "July 14, 2026",
    category: "Canada",
  },
  {
    href: "/blog/renting-without-credit-history-canada",
    title: "Renting in Canada With No Credit History: A Guide for Newcomers and Students",
    excerpt:
      "No Canadian credit file? Landlords cannot treat that as bad credit. How newcomers and students can prove reliability — and which landlord demands (12 months upfront, your SIN, immigration papers) are illegal.",
    date: "July 14, 2026",
    category: "Canada",
  },
  {
    href: "/blog/right-to-rent-uk-vs-canada",
    title: "What Is \"Right to Rent\"? UK Immigration Checks vs Canadian Tenant Rights",
    excerpt:
      "\"Right to rent\" means opposite things in the UK and Canada. In England, landlords must verify immigration status by law. In Canada, demanding immigration documents is illegal discrimination.",
    date: "July 14, 2026",
    category: "Canada",
  },
  {
    href: "/blog/tenant-repair-responsibilities-canada",
    title: "What Repairs Are Tenants Responsible For in Canada?",
    excerpt:
      "Canadian landlords must maintain the rental unit — but tenants are legally responsible for damage they cause. Here is a province-by-province breakdown of what falls on you versus your landlord.",
    date: "July 7, 2026",
    category: "Canada",
  },
  {
    href: "/blog/normal-wear-and-tear-vs-damage-canada",
    title: "Normal Wear and Tear vs. Damage in Canadian Rentals: What Tenants Need to Know",
    excerpt:
      "Landlords cannot charge tenants for normal wear and tear — ever. Learn exactly which marks, scuffs, and deterioration count as wear and tear vs. chargeable damage, with a room-by-room guide.",
    date: "July 7, 2026",
    category: "Canada",
  },
  {
    href: "/blog/tenant-maintenance-duties-ontario",
    title: "Tenant Maintenance Duties in Ontario: What You Are Legally Required to Upkeep",
    excerpt:
      "Ontario's RTA s.33 and s.34 require tenants to keep the unit ordinarily clean and pay for damage they — or their guests — cause. Failing either obligation can result in an N5 notice and eviction proceedings.",
    date: "July 7, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/landlord-repair-obligations-canada",
    title: "How to Get Your Landlord to Fix Something: Repair Rights Across Canada",
    excerpt:
      "Your landlord is legally required to maintain your rental unit. Here's exactly how to escalate a repair request in Ontario, BC, Alberta, and Quebec — and what to do if they won't act.",
    date: "June 5, 2026",
    category: "Canada",
  },
  {
    href: "/blog/month-to-month-vs-fixed-term-lease",
    title: "Month-to-Month vs Fixed-Term Lease in Canada: Key Differences and Tenant Rights",
    excerpt:
      "Your fixed-term lease expiring does NOT mean you have to move out. Here's how Ontario's RTA s.38 auto-conversion works, what notice tenants need to give, and which lease type is better for you.",
    date: "June 5, 2026",
    category: "Canada",
  },
  {
    href: "/blog/ontario-standard-lease-explained",
    title: "Ontario Standard Lease Explained: What Every Section of Form 2229E Actually Means",
    excerpt:
      "Ontario's mandatory standard lease has 17 sections. Here's a plain-English breakdown of each one — including what landlords can add in Section 15 and what happens if they don't use the form.",
    date: "June 5, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/landlord-entry-notice-canada",
    title: "Can a Landlord Enter Without Notice in Canada? Your Right to Privacy",
    excerpt:
      "In Ontario, BC, Alberta, and Quebec, landlords must give 24 hours written notice before entering your unit — except in genuine emergencies. Here's what counts and what to do if they don't comply.",
    date: "June 5, 2026",
    category: "Canada",
  },
  {
    href: "/blog/first-apartment-checklist-canada",
    title: "First Apartment Checklist: 25 Things to Do Before and After Signing Your Lease",
    excerpt:
      "Moving into your first apartment in Canada? This complete checklist covers what to verify before signing, what to document at move-in, and your key rights as a new tenant.",
    date: "May 20, 2026",
    category: "Canada",
  },
  {
    href: "/blog/above-guideline-rent-increase-ontario",
    title: "Above-Guideline Rent Increases in Ontario: What They Are and How to Fight One",
    excerpt:
      "Ontario landlords can apply to the LTB to raise rent above the annual guideline — but only for specific reasons. Here's how AGIs work and how tenants can dispute them.",
    date: "May 10, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/landlord-selling-property-tenant-rights",
    title: "Landlord Selling the Property? Here's What Canadian Tenants Need to Know",
    excerpt:
      "Your lease survives a property sale in almost every Canadian province. Here's exactly what your rights are in Ontario, BC, and Alberta when your landlord sells.",
    date: "May 1, 2026",
    category: "Canada",
  },
  {
    href: "/blog/n12-eviction-ontario",
    title: "N12 Eviction in Ontario: Your Rights When a Landlord Wants Their Unit Back",
    excerpt:
      "Received an N12 notice? You are entitled to one month's compensation, 60 days notice, and the right to dispute at the LTB. Here's everything you need to know.",
    date: "April 15, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/renoviction-canada-tenant-rights",
    title: "Renoviction in Canada: How to Fight Back When Your Landlord Claims Renovations",
    excerpt:
      "N13 notices (Ontario) and Four Month Notices (BC) can be challenged. Learn your right of first refusal, what makes a renoviction valid, and how to spot bad-faith evictions.",
    date: "April 20, 2026",
    category: "Canada",
  },
  {
    href: "/blog/ontario-rent-increase-guideline-2026",
    title: "Ontario Rent Increase Guideline 2026: What Tenants Need to Know",
    excerpt:
      "Ontario's rent increase guideline for 2026 is 2.1%. Here's what that means for your rent, who is exempt from rent control, and what to do if your landlord exceeds the limit.",
    date: "January 15, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/bc-rent-increase-2026",
    title: "BC Rent Increase Limit 2026: Rules for BC Tenants",
    excerpt:
      "BC's 2026 allowable rent increase is 2.3%. Learn the rules, the required 3-month notice period using RTB-7, and how the Residential Tenancy Branch enforces limits.",
    date: "February 1, 2026",
    category: "British Columbia",
  },
  {
    href: "/blog/how-to-fight-an-illegal-eviction-ontario",
    title: "How to Fight an Illegal Eviction in Ontario",
    excerpt:
      "Not every eviction notice in Ontario is valid. Learn what makes a notice invalid, what your rights are at the LTB, and how to file a T2 application for bad-faith eviction.",
    date: "February 15, 2026",
    category: "Ontario",
  },
  {
    href: "/blog/security-deposit-rules-canada",
    title: "Security Deposit Rules by Province: What Can Your Landlord Actually Charge?",
    excerpt:
      "Deposit rules vary dramatically across Canada — from no deposits at all in Quebec to one month's rent in Alberta. Here's a province-by-province breakdown of what landlords can and cannot charge.",
    date: "March 1, 2026",
    category: "Canada",
  },
  {
    href: "/blog/lease-red-flags-to-watch-for",
    title: "7 Lease Red Flags Every Canadian Renter Should Know Before Signing",
    excerpt:
      "Some lease clauses look official but are actually unenforceable — or even illegal. Here are seven red flags to spot before you put pen to paper.",
    date: "March 15, 2026",
    category: "Lease Tips",
  },
  {
    href: "/blog/moving-out-ontario-checklist",
    title: "Moving Out in Ontario: Tenant Checklist for Getting Your Deposit Back",
    excerpt:
      "Moving out in Ontario involves more steps than most tenants realize. Follow this checklist to serve proper notice, document the unit, and protect your last month's rent deposit.",
    date: "April 1, 2026",
    category: "Ontario",
  },
];
