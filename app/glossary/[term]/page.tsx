import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import { AlertTriangle, CheckCircle, TrendingDown } from "lucide-react";

export const dynamic = "force-static";

interface GlossaryEntry {
  slug: string;
  term: string;
  definition: string;
  plainEnglish: string;
  whyItMatters: string;
  riskLevel: "high" | "medium" | "low";
  riskExplanation: string;
  exampleClause: string;
  commonMistakes: string[];
  provinceConsiderations: string;
  faqs: Array<{ q: string; a: string }>;
  relatedTerms: string[];
  relatedClauses: Array<{ label: string; href: string }>;
}

const GLOSSARY_DATA: Record<string, GlossaryEntry> = {
  "security-deposit": {
    slug: "security-deposit",
    term: "Security Deposit",
    definition:
      "A sum of money paid by a tenant to a landlord at the start of a tenancy, held as financial protection against unpaid rent, property damage beyond normal wear and tear, or other lease violations.",
    plainEnglish:
      "A security deposit is money you pay upfront — usually equal to one or two months' rent — that your landlord holds while you live there. When you move out, you should get it back, minus any deductions for damage you caused (not normal wear). Think of it as a safety net for the landlord: if you trash the place or skip out on rent, they can use the deposit. But they have to follow specific rules about how they hold it, what they can deduct, and when they must return it — rules that vary by province and state.",
    whyItMatters:
      "Security deposit disputes are among the most common landlord-tenant conflicts. Knowing how large a deposit can legally be, what counts as a valid deduction versus normal wear, and what deadlines apply for return can be the difference between getting your money back and losing hundreds or thousands of dollars.",
    riskLevel: "medium",
    riskExplanation:
      "Security deposits are medium risk because the law provides clear protections — but those protections only work if you know them. Landlords who charge excessive deposits or make improper deductions are violating the law, but tenants who don't know their rights often simply accept the loss.",
    exampleClause:
      "Tenant agrees to pay a security deposit in the amount of $2,400 (the \"Deposit\") upon execution of this Agreement. The Deposit shall be held by Landlord in a trust account and returned to Tenant within 21 days of the termination of this tenancy, less any deductions for unpaid rent or damages beyond normal wear and tear, accompanied by an itemized written statement of deductions.",
    commonMistakes: [
      "Not documenting the property's condition with photos at move-in and move-out",
      "Confusing 'last month's rent' (LMR) with security deposit — they're separate in most provinces",
      "Missing the deadline to dispute improper deductions (usually 30–60 days after receiving the deduction statement)",
      "Accepting verbal promises about the deposit instead of getting terms in writing",
    ],
    provinceConsiderations:
      "In Ontario, landlords may only collect a last month's rent (LMR) deposit and, optionally, a refundable key deposit capped at the actual replacement cost — damage security deposits are prohibited under the Residential Tenancies Act. BC caps security deposits at half a month's rent; landlords may also collect a separate pet damage deposit also capped at half a month's rent (so a tenant with a pet may pay the equivalent of a full month's rent in deposits). Alberta's cap is one full month's rent. In most US states, deposits are typically capped at 1–2 months' rent, with strict timelines for return. Quebec has a unique system with no security deposits allowed by law.",
    faqs: [
      {
        q: "Can my landlord use my security deposit for last month's rent?",
        a: "This depends on your jurisdiction and your lease terms. In Ontario, landlords collect 'last month's rent' separately — and that amount can be used for the last month. In other provinces, a security deposit and last month's rent may both be collected. Check your specific lease and provincial rules.",
      },
      {
        q: "What counts as 'normal wear and tear' vs. damage?",
        a: "Normal wear and tear includes things like small nail holes from picture frames, minor scuffs on walls, or carpet wear from regular use. Damage includes large holes, stains, broken fixtures, or anything beyond what normal living would cause. Landlords cannot deduct for normal wear.",
      },
      {
        q: "What happens if my landlord doesn't return my deposit on time?",
        a: "Most jurisdictions have penalties for late return of security deposits, including requiring the landlord to return the full deposit without deductions, or paying damages equal to double or triple the deposit amount. File a complaint with your provincial or state tenancy tribunal.",
      },
      {
        q: "Do I need to be present for the move-out inspection?",
        a: "You don't usually have to be, but it's strongly recommended. Being present for the final inspection lets you dispute any findings on the spot and ensures you have a record of what the landlord notes. Request a written inspection report.",
      },
    ],
    relatedTerms: ["late-fees", "termination-clause", "habitability", "grace-period"],
    relatedClauses: [
      { label: "Security Deposit Clause Explained", href: "/lease-clause/security-deposit" },
      { label: "Move-Out Conditions", href: "/lease-clause/move-out-conditions" },
    ],
  },

  subletting: {
    slug: "subletting",
    term: "Subletting",
    definition:
      "An arrangement in which the original tenant (the sublandlord) rents their leased premises to a third party (the subtenant) while retaining their obligations under the original lease.",
    plainEnglish:
      "Subletting means you rent out your apartment to someone else while you're still the official tenant on the lease. Maybe you're going abroad for six months or need to leave before your lease ends — subletting lets someone else live there and pay rent while you're away. The catch: you're still responsible to your landlord for everything. If your subtenant doesn't pay or damages the place, that's still your problem. Most leases require landlord approval before subletting, though in many provinces the landlord cannot unreasonably refuse.",
    whyItMatters:
      "Subletting without permission can result in lease termination and eviction. On the flip side, knowing that landlords often cannot unreasonably withhold consent can protect you if you genuinely need to sublet. Understanding the difference between subletting and assignment (transferring the whole lease) also matters.",
    riskLevel: "medium",
    riskExplanation:
      "Subletting is medium risk because the rules vary significantly by jurisdiction. In some provinces, tenants have strong rights to sublet with landlord approval. In others, leases can validly prohibit subletting entirely. Getting it wrong — subletting without permission where it's not allowed — can cost you your tenancy.",
    exampleClause:
      "Tenant shall not sublet the premises or any part thereof, or assign this lease, without the prior written consent of the Landlord. Such consent shall not be unreasonably withheld. Any unauthorized sublet or assignment shall constitute grounds for termination of this lease.",
    commonMistakes: [
      "Subletting without landlord consent when the lease or local law requires it",
      "Not getting the sublease agreement in writing, leaving you exposed if the subtenant causes problems",
      "Confusing subletting (you remain on the lease) with lease assignment (you transfer the lease entirely)",
      "Forgetting that as the original tenant, you remain fully liable even while subletting",
    ],
    provinceConsiderations:
      "In Ontario, landlords cannot arbitrarily refuse subletting — they can only refuse for specific valid reasons. In BC, tenants generally have the right to sublet with landlord consent. In Alberta, lease terms govern subletting. In the US, rights vary widely: New York City has robust subletting protections; most other US cities follow the lease terms more strictly.",
    faqs: [
      {
        q: "What's the difference between subletting and lease assignment?",
        a: "When you sublet, you remain on the lease as a party — you're essentially becoming a mini-landlord to your subtenant. When you assign your lease, you transfer all your rights and obligations to the new tenant, removing yourself from the lease (usually requiring landlord approval).",
      },
      {
        q: "Can my landlord refuse my subletting request?",
        a: "It depends on your jurisdiction. In Ontario, a landlord can only refuse subletting for valid reasons — they cannot arbitrarily refuse. In BC, similar protections apply. In many US states, the lease terms govern, and landlords can refuse for any reason or no reason if the lease allows.",
      },
      {
        q: "Am I responsible if my subtenant damages the apartment?",
        a: "Yes. As the original tenant, you remain fully responsible to your landlord for rent, damages, and all lease obligations — even when subletting. If your subtenant causes damage or doesn't pay rent, the landlord can come after you, not just the subtenant.",
      },
    ],
    relatedTerms: ["guarantor", "termination-clause", "joint-and-several-liability"],
    relatedClauses: [
      { label: "Subletting & Assignment Clause", href: "/lease-clause/subletting-assignment" },
    ],
  },

  guarantor: {
    slug: "guarantor",
    term: "Guarantor",
    definition:
      "A third party who agrees to be legally responsible for a tenant's lease obligations — including rent payments and damages — if the tenant fails to fulfill them.",
    plainEnglish:
      "A guarantor is someone who promises your landlord: 'If this tenant doesn't pay, I will.' It's usually a parent, family member, or employer who signs a separate guarantee agreement alongside your lease. From the landlord's perspective, a guarantor provides additional security when a tenant has limited credit history or income. For the guarantor, it's a serious financial commitment — they could be on the hook for potentially thousands of dollars if you can't pay your rent.",
    whyItMatters:
      "Guarantors face real and significant financial exposure. A guarantor agreement is a legally binding contract, not a formality. If you're being asked to act as a guarantor, you should fully understand the extent of your potential liability before signing. If you're a tenant whose landlord is requesting a guarantor, know what your guarantor is agreeing to.",
    riskLevel: "high",
    riskExplanation:
      "Guarantor arrangements are high risk because guarantors often don't realize the full scope of what they're signing. Some guarantee agreements cover only rent, while others cover all lease obligations including damages, legal costs, and even lease renewals. The liability can persist for years.",
    exampleClause:
      "In consideration of the Landlord entering into the Lease with the Tenant, the Guarantor hereby unconditionally and irrevocably guarantees to the Landlord the payment of all rent and the performance of all obligations of the Tenant under the Lease. This guarantee shall remain in full force for the duration of the Lease and any renewals thereof.",
    commonMistakes: [
      "Signing a guarantee without reading exactly what obligations are covered",
      "Not understanding that the guarantee may extend to lease renewals automatically",
      "Failing to get a copy of the lease being guaranteed (guarantors should read it in full)",
      "Assuming the landlord must pursue the tenant first before coming to the guarantor",
    ],
    provinceConsiderations:
      "In Ontario, guarantor agreements are governed by general contract law, not the Residential Tenancies Act directly. Demanding a guarantor in a discriminatory manner (e.g., only from tenants of a specific national origin) would violate the Ontario Human Rights Code, but there is no specific statute setting a reasonableness limit on guarantor terms. In Quebec, guarantors (called 'sureties') are common in student housing. In the US, guarantor agreements are common for student rentals and high-cost city apartments; liability scope varies by state.",
    faqs: [
      {
        q: "Can a landlord require a guarantor?",
        a: "Generally yes, landlords can require a guarantor as part of their tenant screening criteria, provided the requirement is not discriminatory. However, they cannot require it in a way that discriminates based on protected characteristics.",
      },
      {
        q: "Does a guarantor's obligation end when the lease ends?",
        a: "Not always. Many guarantee agreements include language that extends liability to renewals, holdover periods, or lease modifications. Always check whether the guarantee covers just the original term or also renewals.",
      },
      {
        q: "Can a guarantor get out of a guarantee agreement?",
        a: "This is difficult while the lease is active. A guarantor typically cannot unilaterally withdraw. Some agreements allow withdrawal with written notice and landlord consent. If the original tenant's lease is reassigned to a new tenant, the guarantor's obligation may end depending on the agreement's terms.",
      },
    ],
    relatedTerms: ["joint-and-several-liability", "subletting", "security-deposit"],
    relatedClauses: [{ label: "Guarantor Clause", href: "/lease-clause/guarantor-clause" }],
  },

  "rent-increase": {
    slug: "rent-increase",
    term: "Rent Increase",
    definition:
      "A provision in a lease or tenancy law that permits a landlord to increase the amount of rent paid by a tenant, subject to conditions around notice, frequency, and maximum amounts.",
    plainEnglish:
      "A rent increase clause tells you when and by how much your landlord can raise your rent. Even if your lease doesn't spell out the rules in detail, your province or state's tenancy law fills in the blanks — setting limits on how often rent can go up, how much notice the landlord must give, and (in rent-controlled jurisdictions) a ceiling on the annual increase amount. Understanding this clause matters enormously because rent is your biggest housing cost.",
    whyItMatters:
      "Rent increases are one of the most impactful aspects of your tenancy. An unexpected large increase can make your home unaffordable. Knowing whether your unit is rent-controlled, what the guideline increase is for your jurisdiction, and what notice you're entitled to gives you the information you need to plan and, if necessary, challenge an improper increase.",
    riskLevel: "high",
    riskExplanation:
      "Rent increase provisions are high risk because the financial impact is direct and significant. Lease clauses that attempt to exceed legally permitted increases, or that give insufficient notice, are the kind of violation that tenants need to be able to identify and challenge.",
    exampleClause:
      "The Landlord may increase the Tenant's rent once per year by providing written notice of at least 90 days prior to the effective date of the increase. Rent increases shall not exceed the annual rent increase guideline published by the relevant provincial authority.",
    commonMistakes: [
      "Assuming that because you signed a lease with a fixed rent, the rent can never change",
      "Not knowing whether your unit is exempt from rent control (new units are often exempt in Ontario)",
      "Accepting a rent increase without checking whether it exceeds the legal guideline",
      "Missing the deadline to dispute a rent increase (usually within a specific window after receiving notice)",
    ],
    provinceConsiderations:
      "Ontario publishes an annual rent increase guideline; increases above the guideline require a Landlord and Tenant Board order except for units first occupied after November 15, 2018 (which have no rent control). BC similarly has an annual allowable increase. Alberta has no rent control. Quebec's process involves a rent adjustment committee. Many US cities (New York, San Francisco, Los Angeles) have rent stabilization laws; most US states do not.",
    faqs: [
      {
        q: "How much notice does my landlord need to give before raising rent?",
        a: "In most Canadian provinces, landlords must give 90 days' written notice before a rent increase takes effect. In BC, it's also 3 months. US requirements vary by state — often 30–60 days for month-to-month tenancies. Check your jurisdiction's specific rules.",
      },
      {
        q: "Can my landlord increase rent during a fixed-term lease?",
        a: "Generally no. If you're in a fixed-term lease (e.g., a one-year lease at a set rent), most jurisdictions prohibit mid-term rent increases. The landlord typically must wait until renewal to raise rent. Check your lease and local law.",
      },
      {
        q: "What can I do if my landlord tries to raise rent by more than the legal amount?",
        a: "In rent-controlled jurisdictions, you can file a complaint with the relevant tribunal (e.g., the Landlord and Tenant Board in Ontario). You are generally not required to pay the amount above the legal guideline. Seek advice from a tenant advocacy organization.",
      },
    ],
    relatedTerms: ["lease-renewal", "termination-clause", "grace-period"],
    relatedClauses: [{ label: "Rent Increase Clause", href: "/lease-clause/rent-increase" }],
  },

  "late-fees": {
    slug: "late-fees",
    term: "Late Fees",
    definition:
      "A monetary penalty charged to a tenant when rent is not paid by the date specified in the lease, typically after a grace period.",
    plainEnglish:
      "A late fee is an extra charge your landlord can assess if you pay rent after the due date. They're meant to incentivize on-time payment. Most leases set a specific amount (e.g., $50) or percentage (e.g., 2% of monthly rent) as the late fee. Importantly, many jurisdictions limit how much landlords can charge as a late fee — and some, like Ontario, prohibit late fees on residential leases entirely.",
    whyItMatters:
      "Unreasonable or legally invalid late fees are surprisingly common in residential leases. Knowing whether late fees are even permitted in your jurisdiction — and if so, what caps apply — protects you from paying fees you don't owe.",
    riskLevel: "medium",
    riskExplanation:
      "Late fees are medium risk. The fee amounts themselves are usually modest, but leases that charge excessive or legally prohibited late fees indicate a landlord unfamiliar with (or willing to violate) tenancy law — which may signal other issues too.",
    exampleClause:
      "Rent is due on the 1st day of each month. If Tenant fails to pay rent within five (5) days of the due date, Tenant shall pay a late fee of $75 per occurrence. This late fee is agreed to constitute a genuine pre-estimate of the Landlord's administrative costs for processing late rent.",
    commonMistakes: [
      "Paying a late fee in a jurisdiction where late fees are prohibited (e.g., Ontario)",
      "Not knowing about your lease's grace period before late fees kick in",
      "Confusing the right to charge late fees with the right to terminate for late payment — these are different things",
      "Allowing repeated late fees to accumulate without addressing the underlying payment issue",
    ],
    provinceConsiderations:
      "Ontario specifically prohibits late fees on residential leases. BC and Alberta do not have explicit statutory caps on residential late fees — fees are subject to a legal reasonableness standard under contract law, and courts can void punitive amounts. In the US, late fees are generally allowed and regulated at the state level — California has no fixed statutory percentage cap; under Civil Code §1671, fees must be a reasonable estimate of actual damages and courts have found rates above ~5–6% difficult to enforce. Other states have different rules. Always verify whether late fees in your lease comply with local law.",
    faqs: [
      {
        q: "Can my landlord charge late fees in Ontario?",
        a: "No. Ontario's Residential Tenancies Act prohibits landlords from charging tenants a fee for paying rent late. Any late fee clause in an Ontario residential lease is void and unenforceable.",
      },
      {
        q: "What's a typical grace period before late fees apply?",
        a: "Leases often specify a 3–5 day grace period after the rent due date before late fees kick in. Some jurisdictions also have statutory grace periods. Check your specific lease and local law.",
      },
      {
        q: "What if I regularly have trouble paying on the 1st?",
        a: "Talk to your landlord about adjusting the rent due date. Many landlords are open to this, especially if you've been a reliable tenant. Get any date change in writing as an amendment to the lease.",
      },
    ],
    relatedTerms: ["grace-period", "rent-increase", "security-deposit"],
    relatedClauses: [{ label: "Rent Payment Clause", href: "/lease-clause/rent-payment" }],
  },

  "maintenance-clause": {
    slug: "maintenance-clause",
    term: "Maintenance Clause",
    definition:
      "A provision in a lease that allocates responsibility for maintaining and repairing the rental property between the landlord and the tenant.",
    plainEnglish:
      "A maintenance clause spells out who's responsible for what when something needs fixing or upkeep. Generally, landlords are legally required to maintain the structure, plumbing, heating, and major systems. Tenants are responsible for keeping things clean and reporting issues promptly. But leases often try to shift more responsibility onto tenants — sometimes going beyond what the law allows. This clause is where you find out who pays for a broken appliance, who mows the lawn, and who calls the plumber.",
    whyItMatters:
      "Maintenance disputes are common and expensive. A lease that improperly assigns landlord responsibilities to the tenant can leave you paying for repairs you legally shouldn't. Conversely, knowing your obligation to report issues promptly protects you from being blamed for damage that worsened because you didn't report it.",
    riskLevel: "medium",
    riskExplanation:
      "Maintenance clauses are medium risk — the law sets a floor of landlord obligations that can't be contracted away, but leases vary widely in what additional obligations they place on tenants. Clauses assigning all appliance repair costs to the tenant, for example, are worth scrutinizing.",
    exampleClause:
      "Landlord shall maintain the structure, roof, and major systems (plumbing, heating, electrical) in good repair. Tenant shall maintain the premises in a clean and sanitary condition, promptly report any damage or defects to the Landlord in writing, and shall be responsible for minor repairs costing less than $100.",
    commonMistakes: [
      "Not reporting maintenance issues in writing (verbal reports are hard to prove later)",
      "Assuming a tenant can be held responsible for repairs that are legally the landlord's obligation",
      "Delaying reporting an issue and then being blamed for the resulting damage",
      "Not understanding the difference between maintenance (keeping things working) and improvements (upgrades)",
    ],
    provinceConsiderations:
      "In all Canadian provinces and most US states, landlords have a statutory duty to maintain rental units in a good state of repair and fit for habitation. This duty cannot be waived by lease agreement. Province-specific rules govern specific systems (e.g., heating must be maintained to specific temperatures in Ontario from Sept 1 to June 15).",
    faqs: [
      {
        q: "Can my lease require me to pay for all repairs?",
        a: "No. Landlords have a statutory duty to maintain rental units in habitable condition. A lease clause purporting to make tenants responsible for structural repairs, major systems, or habitability defects is void and unenforceable.",
      },
      {
        q: "What should I do if my landlord ignores a maintenance request?",
        a: "Document all requests in writing (email or text). If ignored, file a complaint with your provincial or state tenancy tribunal. In Ontario, you can apply to the Landlord and Tenant Board. In BC, contact the Residential Tenancy Branch. Keep records of all correspondence.",
      },
      {
        q: "Am I responsible for appliance maintenance?",
        a: "It depends on your lease. If the landlord provides appliances (as part of the tenancy), the landlord is generally responsible for major repairs. If you brought the appliances yourself, you're responsible. Read your lease carefully for how appliances are classified.",
      },
    ],
    relatedTerms: ["habitability", "quiet-enjoyment", "termination-clause"],
    relatedClauses: [{ label: "Maintenance & Repairs Clause", href: "/lease-clause/maintenance-repairs" }],
  },

  "occupancy-limits": {
    slug: "occupancy-limits",
    term: "Occupancy Limits",
    definition:
      "A clause that restricts the number of people who may reside in the rental unit as their primary residence.",
    plainEnglish:
      "An occupancy limit clause sets a maximum number of people who can live in your rental. On its face, it seems reasonable — landlords want to prevent overcrowding. But these clauses can become problematic when they're used to discriminate against families with children or when they're set at levels unreasonably lower than what's appropriate for the unit size. Most jurisdictions have rules about what constitutes a reasonable occupancy limit.",
    whyItMatters:
      "Occupancy limit clauses can be used to discriminate against families, though human rights law prohibits this in most jurisdictions. Understanding what's legally reasonable — often expressed as 2 people per bedroom plus 1 — helps you identify clauses that may be discriminatory or legally unenforceable.",
    riskLevel: "medium",
    riskExplanation:
      "Occupancy limits are medium risk. An overly restrictive limit may constitute family status discrimination, which is prohibited by human rights codes in Canada. However, reasonable occupancy standards are legitimate.",
    exampleClause:
      "The Premises shall be occupied only by the persons named in this Agreement as Tenants. No additional persons shall take up permanent residency in the Premises without the prior written consent of the Landlord. Occupancy is limited to a maximum of two (2) persons per bedroom.",
    commonMistakes: [
      "Not questioning an occupancy limit that seems unreasonably low for the unit size",
      "Failing to add a new partner or family member to the lease through proper channels",
      "Confusing visitors (who can stay temporarily) with permanent occupants",
      "Not knowing that in many jurisdictions, landlords cannot deny tenancy or set limits that effectively exclude families with children",
    ],
    provinceConsiderations:
      "In Canada, family status is a protected ground under human rights legislation. A landlord cannot set occupancy limits designed to exclude families with children. Ontario's guidelines suggest 2 people per bedroom is generally reasonable. BC and Alberta have similar human rights protections. In the US, the Fair Housing Act protects against familial status discrimination, with a general standard of 2 persons per bedroom.",
    faqs: [
      {
        q: "Can my landlord evict me for having an extra occupant?",
        a: "Potentially, if the additional occupant violates a valid occupancy limit and you don't address it. However, if you added a family member (especially a child), human rights protections may apply. Talk to a tenant advocacy organization before acting.",
      },
      {
        q: "Can I add a roommate to my lease?",
        a: "You generally need landlord consent to add a new tenant to the lease. Landlords cannot unreasonably refuse to allow a reasonable occupant. However, they can update the lease to reflect the new occupant and may screen them.",
      },
    ],
    relatedTerms: ["subletting", "habitability", "termination-clause"],
    relatedClauses: [{ label: "Occupancy Clause", href: "/lease-clause/occupancy-clause" }],
  },

  "termination-clause": {
    slug: "termination-clause",
    term: "Termination Clause",
    definition:
      "A provision specifying the conditions, notice requirements, and procedures under which either party may end the lease before or at the end of its term.",
    plainEnglish:
      "A termination clause is the exit plan in your lease — it tells you when and how either you or your landlord can end the tenancy. For tenants, this usually means required notice periods and specific procedures for giving notice. For landlords, it typically requires valid grounds (like non-payment or damage) and often a formal process through a tribunal. Residential leases have strong tenant protections around termination — landlords generally cannot simply evict tenants whenever they want.",
    whyItMatters:
      "Termination clauses are critical because your housing security depends on them. Knowing how much notice you must give (to avoid losing your security deposit), what grounds a landlord can use to evict you, and what the process looks like helps you plan moves and protect yourself from improper eviction.",
    riskLevel: "high",
    riskExplanation:
      "Termination clauses are high risk because they directly affect housing security. Lease clauses that purport to allow landlords to terminate for almost any reason, or that require tenants to provide unreasonably long notice, warrant careful scrutiny.",
    exampleClause:
      "Either party may terminate this lease at the end of the fixed term by providing not less than sixty (60) days' written notice prior to the last day of the term. The Landlord may terminate this lease during the term only for cause as permitted by applicable residential tenancy legislation.",
    commonMistakes: [
      "Missing the notice deadline and being liable for an extra month's rent",
      "Giving notice verbally rather than in writing",
      "Not knowing that many provinces require notice to be given on the first day of the rental period",
      "Signing a 'break clause' that commits you to significant penalties for early termination",
    ],
    provinceConsiderations:
      "In Ontario, a fixed-term lease ends automatically at the term's expiry — tenants do not need to give notice to vacate at the end of a fixed term. For month-to-month tenancies, tenants must give 60 days' written notice, ending on the last day of a rental period. Landlords can only terminate for specific reasons (non-payment, damage, personal use, etc.). In BC, tenants in a month-to-month tenancy give one full rental month's notice; fixed-term leases end at the agreed date without requiring notice. Alberta requires one full tenancy period notice. In the US, notice requirements vary by state, but month-to-month tenancies usually require 30–60 days' notice.",
    faqs: [
      {
        q: "Can my landlord evict me without cause?",
        a: "In most Canadian provinces, landlords cannot evict tenants without a valid reason recognized by tenancy law — such as non-payment of rent, damage, or the landlord needing the unit for personal use. In most US states, landlords must also have cause for eviction during a lease term, but month-to-month tenants may have fewer protections.",
      },
      {
        q: "What happens if I need to leave before my lease ends?",
        a: "You may be responsible for rent until the end of the lease term, unless you find a subtenant or assignee (if permitted), or negotiate a mutual agreement with the landlord. Some jurisdictions have specific early termination processes for situations like domestic violence or job relocation.",
      },
      {
        q: "How do I properly give notice to terminate?",
        a: "Written notice, typically delivered in person, by registered mail, or by another method specified in your lease. Keep a copy. The notice date usually must fall on the first day of a rental period for the 60-day count to start correctly.",
      },
    ],
    relatedTerms: ["holdover-tenant", "lease-renewal", "subletting"],
    relatedClauses: [
      { label: "Termination Clause Explained", href: "/lease-clause/termination-clause" },
      { label: "Notice to Vacate", href: "/lease-clause/notice-to-vacate" },
    ],
  },

  "lease-renewal": {
    slug: "lease-renewal",
    term: "Lease Renewal",
    definition:
      "The process by which an existing lease is extended for an additional term, either automatically or through the mutual agreement of landlord and tenant.",
    plainEnglish:
      "A lease renewal is what happens when your lease term ends and you (and your landlord) agree to continue. Some leases renew automatically unless you give notice — which means if you forget to tell your landlord you're leaving, you could find yourself locked in for another year. Others convert to month-to-month tenancy at the end of the fixed term, giving you more flexibility. Understanding exactly what your lease says about renewal prevents unwelcome surprises.",
    whyItMatters:
      "Renewal terms directly affect your housing flexibility and cost. An automatic renewal you didn't intend can trap you in a lease, while a failure to negotiate at renewal can mean accepting a significant rent increase. Knowing your timeline keeps you in control.",
    riskLevel: "medium",
    riskExplanation:
      "Lease renewal clauses are medium risk. The biggest danger is auto-renewal traps where tenants miss the notice window and find themselves committed to another full term. Rent increases at renewal also represent a significant financial risk.",
    exampleClause:
      "This Lease shall be automatically renewed for successive one-year terms unless either party provides written notice of non-renewal at least 60 days prior to the expiration of the then-current term. Rent for any renewal term shall be subject to adjustment pursuant to applicable rent increase guidelines.",
    commonMistakes: [
      "Missing the notice deadline that triggers automatic renewal",
      "Not negotiating rent at renewal — landlords may expect it",
      "Assuming renewal locks in all the old terms when the landlord may have added new conditions",
      "Not knowing your rights if you want to continue month-to-month rather than renew for a fixed term",
    ],
    provinceConsiderations:
      "In Ontario, after a fixed term, the lease automatically continues month-to-month under the same terms — not as a new fixed term. Landlords cannot force tenants to sign a new fixed-term lease. In BC, similar rules apply. In Alberta, leases can convert to periodic tenancy. In the US, state law varies widely on automatic renewal enforceability.",
    faqs: [
      {
        q: "Do I have to sign a new lease when my current one ends?",
        a: "In most Canadian provinces, no. After your fixed term ends, you have the right to continue on a month-to-month basis under the same terms. You cannot be forced to sign a new fixed-term lease to continue your tenancy.",
      },
      {
        q: "Can my landlord raise rent at renewal?",
        a: "Yes, with proper notice and subject to any applicable rent increase guidelines. In Ontario, rent can only increase by the annual guideline amount (with exceptions), and 90 days' notice is required. Check your province's or state's rules.",
      },
    ],
    relatedTerms: ["termination-clause", "holdover-tenant", "rent-increase"],
    relatedClauses: [{ label: "Renewal Clause", href: "/lease-clause/renewal-clause" }],
  },

  "grace-period": {
    slug: "grace-period",
    term: "Grace Period",
    definition:
      "A specified number of days after a payment due date during which a tenant may make a rent payment without incurring a late fee or being considered in default.",
    plainEnglish:
      "A grace period is a buffer between when rent is technically due and when you'll face consequences for being late. If your rent is due on the 1st but you have a 5-day grace period, you can pay up to the 5th without triggering late fees. Some grace periods are written into leases; others exist by statute. Note: a grace period doesn't mean your rent isn't due on the first — it just means consequences are delayed briefly.",
    whyItMatters:
      "Knowing your grace period helps you avoid unnecessary late fees and understand when you're actually in default under your lease. Some tenants mistakenly treat the grace period as the actual rent due date, which can cause problems if the grace period is not consistent or is removed.",
    riskLevel: "low",
    riskExplanation:
      "Grace periods are low risk and generally tenant-friendly. The main risk is misunderstanding the grace period as the actual due date, which can create a pattern of late payment that a landlord may eventually use as grounds for termination.",
    exampleClause:
      "Rent is due and payable on the 1st day of each calendar month. A grace period of five (5) days is provided solely as an administrative accommodation. Payment received after the 5th day of the month shall be considered late and subject to the late fee specified in this Agreement.",
    commonMistakes: [
      "Treating the last day of the grace period as the actual rent due date",
      "Assuming all leases have grace periods — some don't",
      "Not knowing that your landlord may be able to serve a notice for late payment even during a grace period in some jurisdictions",
      "Letting the grace period lapse into a pattern of late payment",
    ],
    provinceConsiderations:
      "Grace periods are not required by law in most provinces or states — they are a lease term. In Ontario, a landlord can give an N4 notice (non-payment) as soon as rent is a day late, regardless of any grace period. In BC, a landlord can serve notice after the 5th day of the month. Grace periods offer practical flexibility but limited legal protection.",
    faqs: [
      {
        q: "Does a grace period protect me from eviction notices?",
        a: "Not necessarily. In Ontario, a landlord can serve an N4 Notice to End a Tenancy for Non-payment the day after rent is due, regardless of any grace period in the lease. A grace period may delay late fees but doesn't always prevent a legal notice from being served.",
      },
      {
        q: "What if my lease doesn't mention a grace period?",
        a: "Then there may be no grace period — rent is due on the stated date and late fees can apply from the next day (subject to your jurisdiction's rules). Some jurisdictions have statutory grace periods; check your local rules.",
      },
    ],
    relatedTerms: ["late-fees", "rent-increase", "termination-clause"],
    relatedClauses: [{ label: "Rent Payment Clause", href: "/lease-clause/rent-payment" }],
  },

  "holdover-tenant": {
    slug: "holdover-tenant",
    term: "Holdover Tenant",
    definition:
      "A tenant who remains in the rental unit after their lease has expired without entering into a new lease or receiving the landlord's explicit permission to stay.",
    plainEnglish:
      "A holdover tenant is someone who stays in their apartment after their lease officially ends without signing a new one or formally converting to month-to-month. What happens next depends on the jurisdiction and the landlord's response: the landlord may accept rent and thereby create a new month-to-month tenancy, or may treat the holdover as a trespass and pursue eviction. In some jurisdictions and leases, holding over can result in automatic renewal of the entire lease — potentially for another full year.",
    whyItMatters:
      "Holding over without clarity can expose you to significant liability. Some lease clauses impose punitive holdover rent (e.g., 150–200% of regular rent) for each month you stay without a new agreement. In other jurisdictions, you're protected by automatic month-to-month conversion. Knowing which applies to you is important.",
    riskLevel: "high",
    riskExplanation:
      "Holdover tenant situations are high risk because of the significant uncertainty and potential financial exposure. Punitive holdover provisions, automatic full-term renewal clauses, and eviction risk all make this an area where tenants need to understand their rights before the lease end date arrives.",
    exampleClause:
      "If Tenant holds over after the expiration of this Lease without the written consent of Landlord, Tenant shall be deemed a month-to-month tenant, subject to all terms of this Lease, and shall pay rent at 150% of the monthly rate specified herein until the premises are vacated.",
    commonMistakes: [
      "Assuming holdover is always treated as month-to-month — some leases have harsher consequences",
      "Not communicating with the landlord before the lease end date about your plans",
      "Missing the notice deadline to avoid automatic renewal, creating an unintended holdover situation",
      "Not knowing that in most Canadian provinces, the law overrides harsh holdover clauses",
    ],
    provinceConsiderations:
      "In most Canadian provinces, a holdover after a fixed-term lease results in a month-to-month tenancy by operation of law — harsh holdover penalties in leases are generally unenforceable. In Ontario, the Residential Tenancies Act governs, and lease clauses cannot create punitive holdover provisions. In the US, holdover law varies significantly: some states allow automatic renewal for a full year; others default to month-to-month.",
    faqs: [
      {
        q: "What happens if I stay in my Ontario apartment after my lease ends?",
        a: "In Ontario, your tenancy automatically continues on a month-to-month basis under the same terms as your previous lease. You do not need to sign a new lease. The landlord cannot force you to move out simply because the fixed term has ended.",
      },
      {
        q: "Can a landlord charge me more rent for holding over?",
        a: "In most Canadian provinces, no — punitive holdover rent provisions are unenforceable in residential leases. In many US states, landlords can charge holdover rent at a higher rate if the lease specifies it. Check your jurisdiction.",
      },
    ],
    relatedTerms: ["termination-clause", "lease-renewal", "rent-increase"],
    relatedClauses: [{ label: "Holdover Clause", href: "/lease-clause/holdover-clause" }],
  },

  "force-majeure": {
    slug: "force-majeure",
    term: "Force Majeure",
    definition:
      "A clause that excuses one or both parties from performing their lease obligations due to extraordinary events or circumstances beyond their control, such as natural disasters, pandemics, or government-mandated restrictions. In residential tenancy, force majeure clauses rarely suspend rent obligations and are more commonly found in commercial leases.",
    plainEnglish:
      "A force majeure clause (French for 'superior force') is the lease's emergency exit for situations that are truly outside anyone's control — think earthquakes, floods, or (as the COVID-19 pandemic reminded everyone) government-mandated closures. If something extreme happens that makes it impossible to fulfill the lease, this clause may temporarily suspend or reduce the obligations of one or both parties. Force majeure is more commonly seen in commercial leases; in residential leases, it's less common and has limited practical application because habitability obligations usually persist regardless.",
    whyItMatters:
      "While force majeure rarely affects day-to-day residential tenancy, its scope and language matter during truly extreme events. If your rental unit becomes uninhabitable due to a disaster, understanding what protections exist — whether through the lease's force majeure clause or through statutory rights — determines your path forward.",
    riskLevel: "low",
    riskExplanation:
      "Force majeure clauses are low risk in residential leases because landlord habitability obligations and tenant rights typically continue regardless of what a lease clause says. Provincial legislation protects tenants even when force majeure clauses would otherwise apply.",
    exampleClause:
      "Neither party shall be in default under this Lease to the extent that performance of their obligations is prevented by circumstances beyond their reasonable control, including without limitation acts of God, natural disaster, pandemic, or government orders, provided that the affected party provides prompt written notice and takes reasonable steps to mitigate the impact.",
    commonMistakes: [
      "Assuming force majeure automatically suspends rent obligations — it usually doesn't in residential tenancy",
      "Not knowing that statutory habitability obligations override lease-based force majeure provisions",
      "Confusing personal financial hardship with force majeure (they are different concepts)",
      "Failing to give prompt written notice when a force majeure event affects your ability to perform",
    ],
    provinceConsiderations:
      "Canadian residential tenancy legislation generally does not recognize force majeure as a basis for rent suspension — tenants must pay rent regardless. However, if the unit is made uninhabitable by a disaster, separate statutory provisions (like abatement of rent for uninhabitable conditions) may apply. US residential leases similarly rarely allow rent abatement through force majeure, though pandemic-era legislation created temporary exceptions in some states.",
    faqs: [
      {
        q: "Does force majeure mean I don't have to pay rent during a disaster?",
        a: "Almost certainly not, in a residential context. Force majeure clauses typically do not suspend rent obligations unless the unit is rendered completely uninhabitable. If the unit is uninhabitable, separate rights (rent abatement, termination) usually apply through tenancy law, not force majeure.",
      },
      {
        q: "Is force majeure relevant for COVID-19-era lease disputes?",
        a: "Courts in Canada and the US largely declined to apply force majeure to suspend residential rent obligations during COVID-19. Some temporary government rent relief programs existed, but these operated separately from lease force majeure clauses.",
      },
    ],
    relatedTerms: ["habitability", "termination-clause", "maintenance-clause"],
    relatedClauses: [{ label: "Force Majeure Clause", href: "/lease-clause/force-majeure" }],
  },

  "quiet-enjoyment": {
    slug: "quiet-enjoyment",
    term: "Quiet Enjoyment",
    definition:
      "A tenant's right to use and enjoy their rental property without interference, harassment, or unreasonable disturbance by the landlord.",
    plainEnglish:
      "Despite the name, 'quiet enjoyment' isn't mainly about noise — it's about your right to live in your home without the landlord bothering you. It means your landlord can't show up unannounced, harass you, interfere with your use of the property, or try to force you out through coercive behavior. It's both a common law right that exists automatically and often an explicit clause in leases. The landlord must give proper notice before entering your unit except in emergencies.",
    whyItMatters:
      "Quiet enjoyment is foundational to your housing security. When landlords violate it — through harassment, unauthorized entry, cutting utilities, or other interference — you have legal recourse. Knowing this right exists and how to enforce it protects you from landlords who try to pressure tenants into leaving.",
    riskLevel: "low",
    riskExplanation:
      "Quiet enjoyment clauses are low risk because they're tenant-protective by nature. The risk is in not knowing the right exists and therefore not asserting it when landlords violate it through unauthorized entry or harassment.",
    exampleClause:
      "Landlord covenants that Tenant shall have quiet enjoyment of the Premises during the term of this Lease. Landlord shall not interfere with Tenant's use and enjoyment of the Premises except as expressly permitted by this Lease or applicable law. Landlord shall provide at least 24 hours' written notice before entering the Premises for non-emergency inspections or repairs.",
    commonMistakes: [
      "Not knowing that landlords must give advance notice (usually 24 hours) before entering",
      "Tolerating repeated unauthorized entries without asserting your right to quiet enjoyment",
      "Not documenting violations (unauthorized entries, harassment) in writing",
      "Confusing quiet enjoyment with noise regulations — they're different concepts",
    ],
    provinceConsiderations:
      "All Canadian provinces have statutory quiet enjoyment protections as part of their tenancy legislation. In Ontario, landlords must give 24 hours' written notice before entry (with exceptions for emergencies). BC requires 24 hours. Alberta requires reasonable notice. In the US, the implied covenant of quiet enjoyment exists in all states, with varying rules on notice for entry.",
    faqs: [
      {
        q: "Can my landlord enter my apartment without notice?",
        a: "Only in genuine emergencies (e.g., fire, flood). For all other purposes — repairs, inspections, showing to prospective tenants — landlords must give advance written notice, usually 24 hours. Repeated unauthorized entry may constitute harassment and a breach of quiet enjoyment.",
      },
      {
        q: "What can I do if my landlord is violating my right to quiet enjoyment?",
        a: "Document all violations (dates, times, descriptions) in writing. Send a written letter to your landlord asserting your rights. If violations continue, file a complaint with your provincial or state tenancy tribunal. In serious cases, you may be entitled to rent abatement or termination of the lease.",
      },
    ],
    relatedTerms: ["habitability", "maintenance-clause", "termination-clause"],
    relatedClauses: [{ label: "Entry and Notice Clause", href: "/lease-clause/entry-notice" }],
  },

  "joint-and-several-liability": {
    slug: "joint-and-several-liability",
    term: "Joint and Several Liability",
    definition:
      "A legal arrangement in which each co-tenant in a shared lease is individually and collectively responsible for the full amount of rent and all lease obligations, not merely their proportionate share.",
    plainEnglish:
      "When you share an apartment with roommates and your lease has joint and several liability, everyone who signed the lease is fully responsible for everything — not just their portion. If your roommate skips town and stops paying rent, the landlord can demand the entire amount from you alone. You'd have to pay their share and then try to recover it from them separately. It's the most important clause in any shared housing arrangement, and it's worth understanding deeply before you sign with people you don't fully trust.",
    whyItMatters:
      "Joint and several liability is one of the most financially significant clauses in any multi-party lease. Signing with someone who turns out to be unreliable can leave you paying their rent or facing eviction through no fault of your own. This clause is why the people you live with matter as much as the apartment itself.",
    riskLevel: "high",
    riskExplanation:
      "Joint and several liability is high risk precisely because many tenants don't understand it until they're facing the consequences. The potential financial exposure — being on the hook for 100% of rent and damages even when you only intended to pay your share — is significant.",
    exampleClause:
      "Each Tenant executing this Lease shall be jointly and severally liable for all obligations under this Lease, including but not limited to the payment of rent in full, compliance with all terms and conditions, and liability for any damages to the premises. The Landlord may pursue any or all Tenants for the full amount of any obligation without first proceeding against any other Tenant.",
    commonMistakes: [
      "Not understanding that you can be held fully responsible for your roommate's portion of rent",
      "Assuming the landlord must go after all roommates equally — they can target just one",
      "Not having a separate roommate agreement that governs your financial relationship with co-tenants",
      "Signing a joint lease with someone whose financial reliability you're not confident about",
    ],
    provinceConsiderations:
      "Joint and several liability is standard in shared residential leases across Canada and the US. It is legally enforceable in all provinces and states. The only protection against it is either having your own separate lease with the landlord (instead of a joint lease) or having a co-tenant agreement that governs internal financial responsibilities — though this doesn't affect your liability to the landlord.",
    faqs: [
      {
        q: "How do I protect myself in a joint lease?",
        a: "Beyond choosing reliable roommates carefully, create a written roommate agreement that specifies each person's share of rent, consequences for non-payment, and procedures for disputes. This doesn't change your liability to the landlord, but it gives you a legal basis to recover from a roommate who doesn't pay their share.",
      },
      {
        q: "Can the landlord evict everyone if only one roommate doesn't pay?",
        a: "Yes. Under joint and several liability, if the total rent isn't paid, the landlord can pursue eviction of all tenants — regardless of which individual failed to pay their portion. This is one of the most serious practical consequences of shared leases.",
      },
      {
        q: "Is there a way to have separate liability instead of joint liability?",
        a: "Yes — by having separate leases with the landlord, where each tenant leases their specific bedroom. This is common in purpose-built student housing and some co-living arrangements. In these cases, each tenant is only responsible for their own rent.",
      },
    ],
    relatedTerms: ["guarantor", "subletting", "termination-clause"],
    relatedClauses: [{ label: "Co-tenant Liability Clause", href: "/lease-clause/co-tenant-liability" }],
  },

  habitability: {
    slug: "habitability",
    term: "Habitability",
    definition:
      "The legal standard requiring rental properties to be fit for human occupancy, including safe and functional structural components, plumbing, heating, electrical systems, and freedom from serious health hazards.",
    plainEnglish:
      "Habitability is your right to live in a place that is actually liveable. Your landlord must keep your home structurally sound, weatherproof, with working heat, plumbing, and electricity, and free from serious health hazards like mold, pests, or lead. This isn't just a nice-to-have — it's a legal obligation in every Canadian province and US state. And critically, it cannot be waived by a lease clause. Even if your lease says you're taking the place 'as-is,' your landlord still has to meet habitability standards.",
    whyItMatters:
      "Habitability is the bedrock of tenant rights. When a landlord allows a rental unit to fall below habitability standards — persistent mold, no heat in winter, infestations — tenants have specific remedies including rent abatement, the right to terminate the lease, and the right to have repairs made. But these remedies only work if you know about them.",
    riskLevel: "low",
    riskExplanation:
      "Habitability clauses in leases are typically low risk because they reflect and reinforce statutory rights that already exist. The risk isn't in the clause itself — it's in tenants not knowing they have the right to demand habitable conditions and not knowing how to enforce that right.",
    exampleClause:
      "Landlord warrants that the Premises are in a habitable condition at the commencement of this Lease and shall maintain the Premises in compliance with all applicable health and safety codes throughout the tenancy. Tenant shall promptly notify Landlord of any conditions that may affect the habitability of the Premises.",
    commonMistakes: [
      "Accepting a lease 'as-is' without understanding that habitability obligations still apply",
      "Not documenting pre-existing habitability issues in writing at move-in",
      "Delaying reporting habitability issues, which can complicate later claims",
      "Not knowing the specific remedies available (rent abatement, repair orders, lease termination) when habitability is breached",
    ],
    provinceConsiderations:
      "All Canadian provinces have statutory habitability requirements. Ontario's standard is 'good state of repair and fit for habitation.' BC and Alberta have similar requirements. Quebec requires 'good condition.' In the US, the 'implied warranty of habitability' is recognized in virtually all states, with specific standards varying. Landlords cannot contract out of this obligation.",
    faqs: [
      {
        q: "What makes a rental unit 'uninhabitable'?",
        a: "Serious conditions that affect health or safety: no heat in cold weather, sewage backup, significant mold, structural instability, no running water, serious pest infestations, or building code violations that create safety hazards. Minor inconveniences don't typically meet the legal standard for uninhabitability.",
      },
      {
        q: "Can I withhold rent if my unit is uninhabitable?",
        a: "In most jurisdictions, you should not simply stop paying rent — this can trigger eviction proceedings even when the landlord is at fault. Instead, file a formal complaint with the relevant tribunal, which can order rent abatement or repair. In some US states, rent escrow or repair-and-deduct remedies exist. Always seek advice before withholding rent.",
      },
      {
        q: "Can a landlord charge me for habitability repairs?",
        a: "No. The duty to maintain habitable conditions is the landlord's obligation by law. They cannot shift the cost of structural repairs, major system maintenance, or health/safety corrections onto the tenant through a lease clause.",
      },
    ],
    relatedTerms: ["maintenance-clause", "quiet-enjoyment", "termination-clause"],
    relatedClauses: [
      { label: "Maintenance & Repairs Clause", href: "/lease-clause/maintenance-repairs" },
      { label: "Health and Safety Clause", href: "/lease-clause/health-safety" },
    ],
  },
};

function getRiskBadge(riskLevel: "high" | "medium" | "low") {
  if (riskLevel === "high") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold border bg-red-100 text-red-700 border-red-200">
        <AlertTriangle className="w-3.5 h-3.5" /> High Risk
      </span>
    );
  }
  if (riskLevel === "medium") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold border bg-amber-100 text-amber-700 border-amber-200">
        <TrendingDown className="w-3.5 h-3.5" /> Medium Risk
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold border bg-green-100 text-green-700 border-green-200">
      <CheckCircle className="w-3.5 h-3.5" /> Low Risk
    </span>
  );
}

export async function generateStaticParams() {
  return Object.keys(GLOSSARY_DATA).map((slug) => ({ term: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>;
}): Promise<Metadata> {
  const { term } = await params;
  const entry = GLOSSARY_DATA[term];
  if (!entry) return { title: "Term Not Found | LeasePlain" };
  return {
    title: `${entry.term} | Lease Glossary | LeasePlain`,
    description: `${entry.definition} Plain-English explanation, examples, common mistakes, and what it means for you as a tenant.`,
    alternates: { canonical: `https://leaseplain.com/glossary/${entry.slug}` },
    openGraph: {
      title: `${entry.term} | Lease Glossary | LeasePlain`,
      description: `${entry.definition} Plain-English explanation, examples, common mistakes, and what it means for you as a tenant.`,
      url: `https://leaseplain.com/glossary/${entry.slug}`,
      type: "website",
    },
  };
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term } = await params;
  const entry = GLOSSARY_DATA[term];

  if (!entry) {
    notFound();
  }

  const relatedGlossary = entry.relatedTerms.map((slug) => ({
    label: GLOSSARY_DATA[slug]?.term ?? slug,
    href: `/glossary/${slug}`,
  }));

  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `https://leaseplain.com/glossary/${entry.slug}`,
    url: `https://leaseplain.com/glossary/${entry.slug}`,
    name: entry.term,
    description: entry.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "LeasePlain Lease Glossary",
      url: "https://leaseplain.com/glossary",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entry.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema).replace(/</g, "\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `https://leaseplain.com/glossary/${entry.slug}`,
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".speakable-summary"]
            }
          }).replace(/</g, "\u003c")
        }}
      />
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        {/* Hero */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <BreadcrumbNav
              items={[
                { label: "Home", href: "/" },
                { label: "Glossary", href: "/glossary" },
                { label: entry.term },
              ]}
              className="text-indigo-300 mb-6 [&_a]:text-indigo-300 [&_a:hover]:text-white [&_span.text-slate-900]:text-white"
            />
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold">{entry.term}</h1>
              {getRiskBadge(entry.riskLevel)}
            </div>
            <p className="text-xl text-slate-300 max-w-2xl speakable-summary">{entry.definition}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
          {/* Plain English */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">In Plain English</h2>
            <p className="text-slate-600 leading-relaxed">{entry.plainEnglish}</p>
          </section>

          {/* Why It Matters */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Why It Matters for Tenants</h2>
            <p className="text-slate-600 leading-relaxed">{entry.whyItMatters}</p>
          </section>

          {/* Risk Level */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Risk Level</h2>
            <div className="flex items-start gap-4">
              <div>{getRiskBadge(entry.riskLevel)}</div>
              <p className="text-sm text-slate-600 leading-relaxed">{entry.riskExplanation}</p>
            </div>
          </section>

          {/* Example Clause */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Example Clause</h2>
            <blockquote className="bg-slate-50 border-l-4 border-indigo-400 rounded-r-xl p-5 text-sm text-slate-700 leading-relaxed font-mono">
              {entry.exampleClause}
            </blockquote>
            <p className="text-xs text-slate-500 mt-3">
              This is a representative example for educational purposes. Actual lease language varies.
            </p>
          </section>

          {/* Common Mistakes */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Common Mistakes Tenants Make</h2>
            <ul className="space-y-3">
              {entry.commonMistakes.map((mistake, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  {mistake}
                </li>
              ))}
            </ul>
          </section>

          {/* Province/State Considerations */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Provincial and State Variations
            </h2>
            <p className="text-slate-600 leading-relaxed">{entry.provinceConsiderations}</p>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions about {entry.term}
            </h2>
            <FAQAccordion items={entry.faqs} includeSchema={false} />
          </section>

          {/* Related Links */}
          <RelatedLinks
            glossary={relatedGlossary}
            clauses={entry.relatedClauses}
            resources={[
              { label: "How LeasePlain Works", href: "/how-leaseplain-works" },
              { label: "Lease Red Flags to Watch For", href: "/resources/lease-red-flags" },
            ]}
          />
        </div>
      </main>

      <CTASection
        heading={`Does your lease have a ${entry.term.toLowerCase()} clause?`}
        subheading="Upload your lease and LeasePlain will identify this clause, explain it in plain English, and flag any issues."
        variant="dark"
      />

      <Footer />
    </div>
    </>
  );
}
