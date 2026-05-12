import type { FinancialTerm, RedFlag, UnclearClause, LeaseAnalysis } from "./types";

// ── Helpers ───────────────────────────────────────────────────────────────────

function first(text: string, ...patterns: RegExp[]): string | null {
  for (const re of patterns) {
    const m = text.match(re);
    if (m) return m[1]?.trim() ?? null;
  }
  return null;
}

function normalize(text: string): string {
  return text.replace(/\s+/g, " ").toLowerCase();
}

// ── Financial term extractors ─────────────────────────────────────────────────

function extractRent(text: string): FinancialTerm | null {
  const n = normalize(text);
  const value = first(
    n,
    /monthly (?:base )?rent(?:[^\$]*)\$\s*([\d,]+(?:\.\d{2})?)/,
    /rent(?:[^\$]{0,30})\$\s*([\d,]+(?:\.\d{2})?)\s*(?:per month|\/month|monthly)/,
    /\$\s*([\d,]+(?:\.\d{2})?)\s*(?:per month|\/month)\s*(?:as|for)?\s*(?:base )?rent/,
    /monthly rent[^$\d]*\$?\s*([\d,]+(?:\.\d{2})?)/,
  );
  if (!value) return null;
  return { label: "Monthly Rent", value: `$${value}` };
}

function extractDeposit(text: string): FinancialTerm | null {
  const n = normalize(text);
  const value = first(
    n,
    /security deposit[^$\d]*\$\s*([\d,]+(?:\.\d{2})?)/,
    /\$\s*([\d,]+(?:\.\d{2})?)\s*(?:security deposit|as deposit)/,
    /deposit[^$\d]{0,20}\$\s*([\d,]+(?:\.\d{2})?)/,
  );
  if (!value) return null;
  return { label: "Security Deposit", value: `$${value}` };
}

function extractLateFee(text: string): FinancialTerm | null {
  const n = normalize(text);
  const value = first(
    n,
    /late (?:charge|fee|payment)[^$\d]*\$\s*([\d,]+(?:\.\d{2})?)/,
    /\$\s*([\d,]+(?:\.\d{2})?)\s*(?:late (?:fee|charge))/,
    /late[^$\d]{0,15}\$\s*([\d,]+(?:\.\d{2})?)/,
  );
  if (!value) return null;

  const graceMatch = n.match(/(?:after|following)\s+(?:the\s+)?(\d+)(?:st|nd|rd|th)?\s*day/);
  const note = graceMatch ? `Applied after day ${graceMatch[1]} of the month` : undefined;
  return { label: "Late Fee", value: `$${value}`, note };
}

function extractLeaseTerm(text: string): FinancialTerm | null {
  const n = normalize(text);

  // "12-month" / "12 month" term
  const monthsMatch = n.match(/(\d+)[- ]month\s+(?:lease|term|tenancy)/);
  const months = monthsMatch ? monthsMatch[1] : null;

  // Date range like "January 1, 2026" or "01/01/2026"
  const dateRe =
    /(?:january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{1,2},?\s+\d{4}|\d{1,2}\/\d{1,2}\/\d{4}/gi;
  const dates = text.match(dateRe);

  if (months && dates && dates.length >= 2) {
    return { label: "Lease Term", value: `${months} months (${dates[0]} – ${dates[1]})` };
  }
  if (months) return { label: "Lease Term", value: `${months} months` };
  if (dates && dates.length >= 2) return { label: "Lease Term", value: `${dates[0]} – ${dates[1]}` };
  return null;
}

function extractPetDeposit(text: string): FinancialTerm | null {
  const n = normalize(text);
  if (/no pets?(?: allowed| permitted)/i.test(n)) {
    return { label: "Pet Policy", value: "No pets allowed" };
  }
  const value = first(n, /pet (?:deposit|fee)[^$\d]*\$\s*([\d,]+(?:\.\d{2})?)/);
  if (value) return { label: "Pet Deposit", value: `$${value}` };
  if (/pets?\s*(?:are\s*)?(?:allowed|permitted|welcome)/i.test(n)) {
    return { label: "Pet Policy", value: "Pets allowed (see lease for details)" };
  }
  return null;
}

function extractParking(text: string): FinancialTerm | null {
  const n = normalize(text);
  const value = first(n, /parking[^$\d]*\$\s*([\d,]+(?:\.\d{2})?)/);
  if (value) return { label: "Parking", value: `$${value}/month` };
  if (/parking\s+(?:is\s+)?included/i.test(n)) {
    return { label: "Parking", value: "Included" };
  }
  return null;
}

function extractUtilities(text: string): FinancialTerm | null {
  const n = normalize(text);
  const tenantPays: string[] = [];
  const utilities = ["electricity", "gas", "water", "sewer", "trash", "internet", "cable", "heat"];
  for (const u of utilities) {
    const re = new RegExp(`tenant(?:[^.]{0,60})${u}|${u}(?:[^.]{0,60})tenant(?:[^.]{0,20})(?:pay|responsible|liable)`, "i");
    if (re.test(n)) tenantPays.push(u);
  }
  if (tenantPays.length > 0) {
    return { label: "Utilities", value: `Tenant pays: ${tenantPays.join(", ")}` };
  }
  if (/(?:all\s+)?utilities\s+included/i.test(n)) {
    return { label: "Utilities", value: "All utilities included in rent" };
  }
  return null;
}

// ── Red flag detectors ────────────────────────────────────────────────────────

function detectAutoRenewal(text: string): RedFlag | null {
  const n = normalize(text);
  if (!/auto.?renew|automatically renew|month.to.month/i.test(n)) return null;
  const noticeMatch = n.match(/(\d+)\s*(?:days?|day)\s*(?:written\s*)?notice/);
  const notice = noticeMatch ? `${noticeMatch[1]}-day` : "advance";
  return {
    title: "Auto-Renewal Clause",
    description: `The lease automatically renews unless you provide ${notice} written notice before the end date. Missing this window can lock you into another term or a higher month-to-month rate.`,
    severity: "high",
  };
}

function detectEntryRights(text: string): RedFlag | null {
  const n = normalize(text);
  if (!/landlord(?:[^.]{0,40})enter|right of entry|right to enter/i.test(n)) return null;
  const noticeMatch = n.match(/(\d+)\s*(?:hours?|days?)\s*(?:written\s*)?notice/);
  const notice = noticeMatch ? noticeMatch[1] + "-hour" : "advance";
  return {
    title: "Landlord Entry Rights",
    description: `The landlord may enter your unit with ${notice} notice. Confirm this matches your local tenant-protection laws, which may require more notice or limit entry to specific reasons.`,
    severity: "medium",
  };
}

function detectEarlyTermination(text: string): RedFlag | null {
  const n = normalize(text);
  if (!/early termination|break(?:ing)? (?:the )?lease|lease break/i.test(n)) return null;
  const feeMatch = n.match(/early termination[^$\d]*\$\s*([\d,]+(?:\.\d{2})?)/);
  const fee = feeMatch ? ` ($${feeMatch[1]} fee)` : "";
  return {
    title: "Early Termination Penalty",
    description: `Breaking the lease early carries a penalty${fee}. Review whether valid exceptions exist (job relocation, domestic violence, military service).`,
    severity: "high",
  };
}

function detectRentIncrease(text: string): RedFlag | null {
  const n = normalize(text);
  if (!/rent increase|increase(?:[^.]{0,30})rent|landlord(?:[^.]{0,30})increase/i.test(n)) return null;
  return {
    title: "Rent Increase Provision",
    description: "The lease contains language allowing rent increases. Check whether the amount or notice period is capped, and whether it applies during or only at renewal.",
    severity: "medium",
  };
}

function detectJointSeveralLiability(text: string): RedFlag | null {
  if (!/jointly and severally/i.test(text)) return null;
  return {
    title: "Joint & Several Liability",
    description: "If multiple tenants sign, each is individually responsible for the full rent. If a roommate doesn't pay their share, you are still on the hook for the entire amount.",
    severity: "high",
  };
}

function detectWaiverOfRights(text: string): RedFlag | null {
  const n = normalize(text);
  if (!/waiv(?:e|es|er|ing)\s+(?:any|all|the)?\s*(?:right|claim|jury|trial)/i.test(n)) return null;
  return {
    title: "Waiver of Legal Rights",
    description: "The lease asks you to waive certain legal rights (e.g., jury trial, class action). These clauses may not be enforceable in all jurisdictions, but consult a lawyer if concerned.",
    severity: "high",
  };
}

function detectArbitrationClause(text: string): RedFlag | null {
  if (!/arbitration/i.test(text)) return null;
  return {
    title: "Mandatory Arbitration",
    description: "Disputes must go to private arbitration instead of court. Arbitration is often faster but limits your right to appeal and may favour the landlord.",
    severity: "medium",
  };
}

function detectSubletRestriction(text: string): RedFlag | null {
  const n = normalize(text);
  if (!/sublet|sublease|sub-let/i.test(n)) return null;
  if (/sublet(?:ting)?\s+(?:is\s+)?(?:not\s+)?(?:allowed|permitted|prohibited)/i.test(n) ||
    /no\s+sublet/i.test(n)) {
    return {
      title: "Subletting Restriction",
      description: "Subletting requires landlord approval or is prohibited. Violating this could be grounds for eviction.",
      severity: "medium",
    };
  }
  return null;
}

function detectRepairThreshold(text: string): RedFlag | null {
  const n = normalize(text);
  const m = n.match(/(?:minor|small)\s+repairs?(?:[^$\d]{0,30})\$\s*([\d,]+)/);
  if (!m) return null;
  return {
    title: "Tenant Repair Responsibility",
    description: `You are responsible for "minor" repairs up to $${m[1]}. The definition of minor is often vague and can lead to disputes. Ask for a written list of what qualifies.`,
    severity: "medium",
  };
}

// ── Unclear clause detectors ──────────────────────────────────────────────────

function detectVagueCleaningStandard(text: string): UnclearClause | null {
  if (!/broom.?clean|move.?out\s+condition|clean\s+condition/i.test(text)) return null;
  return {
    title: "Move-Out Cleaning Standard",
    description: "The lease requires the unit to be returned in 'broom-clean' or similar condition, but no checklist or standard is defined. Request a move-in inspection report to protect your deposit.",
  };
}

function detectVagueNuisance(text: string): UnclearClause | null {
  if (!/nuisance|excessive noise|disturb/i.test(text)) return null;
  return {
    title: "Noise / Nuisance Standard",
    description: "The lease prohibits 'excessive noise' or 'disturbances' without defining them. What counts as excessive is subjective and could be used as grounds for a lease violation.",
  };
}

function detectVagueNormalWear(text: string): UnclearClause | null {
  if (!/normal\s+wear\s+and\s+tear|ordinary\s+wear/i.test(text)) return null;
  return {
    title: "Normal Wear and Tear Definition",
    description: "The lease references 'normal wear and tear' but doesn't define it. This is a common source of deposit disputes — document the unit's condition thoroughly at move-in.",
  };
}

function detectAgentClause(text: string): UnclearClause | null {
  const n = normalize(text);
  if (!/(?:property\s+)?manager|management\s+company|agent(?:\s+of\s+landlord)?/i.test(n)) return null;
  return {
    title: "Property Manager Authority",
    description: "The lease references a property manager or agent, but their scope of authority (who can authorize repairs, receive notices, etc.) may not be clearly defined.",
  };
}

// ── Summary builder ───────────────────────────────────────────────────────────

function buildSummary(
  text: string,
  financialTerms: FinancialTerm[],
  redFlags: RedFlag[],
): string {
  const n = normalize(text);
  const parts: string[] = [];

  const rent = financialTerms.find((t) => t.label === "Monthly Rent");
  const deposit = financialTerms.find((t) => t.label === "Security Deposit");
  const term = financialTerms.find((t) => t.label === "Lease Term");
  const utilities = financialTerms.find((t) => t.label === "Utilities");
  const pets = financialTerms.find((t) => t.label === "Pet Policy");

  // Property address
  const addressMatch = text.match(/(?:located at|property at|premises at|unit at)\s+([^\n,]{5,60})/i) ||
    text.match(/(\d{1,5}\s+[A-Za-z][A-Za-z\s]+(?:Street|St|Avenue|Ave|Drive|Dr|Road|Rd|Blvd|Lane|Ln|Court|Ct)[^\n,]{0,30})/i);
  const address = addressMatch ? addressMatch[1].trim() : null;

  if (address) parts.push(`This lease covers the residential property at ${address}.`);

  if (term) parts.push(`The lease term is ${term.value}.`);
  if (rent) {
    const dueMatch = n.match(/(?:due|payable)\s+on\s+the\s+(\d+)(?:st|nd|rd|th)/);
    const dueDay = dueMatch ? `, due on the ${dueMatch[1]}${["st","nd","rd"][+dueMatch[1]-1]??"th"} of each month` : "";
    parts.push(`Monthly rent is ${rent.value}${dueDay}.`);
  }
  if (deposit) parts.push(`A ${deposit.value} security deposit is required.`);
  if (utilities) parts.push(`${utilities.value}.`);
  if (pets) parts.push(pets.value === "No pets allowed" ? "No pets are permitted." : `Pet policy: ${pets.value}.`);

  const autoRenew = redFlags.find((r) => r.title === "Auto-Renewal Clause");
  if (autoRenew) parts.push("The lease includes an auto-renewal clause — review the notice requirements carefully.");

  if (parts.length === 0) {
    parts.push(
      "This lease agreement has been scanned for key terms. Review the financial terms and red flags below for items that need your attention.",
    );
  }

  parts.push("This summary is for informational purposes only and is not legal advice.");
  return parts.join(" ");
}

// ── Standard questions and suggestions ───────────────────────────────────────

const STANDARD_QUESTIONS = [
  "Can you provide a move-in inspection checklist so we can document the unit's current condition?",
  "What is the process for requesting repairs, and what is the expected response time?",
  "Are there any planned rent increases if I renew after the initial term?",
  "Who do I contact in an emergency (after hours)?",
  "What is your policy on security deposit returns — what deductions are typically made?",
];

const STANDARD_SUGGESTIONS = [
  "Request a written move-in condition report signed by both parties before taking possession.",
  "Get any verbal promises (parking, repairs, appliances) added to the lease in writing.",
  "Confirm that the lease term, rent amount, and deposit match what was advertised or discussed.",
  "Ask for 48+ hours' notice for non-emergency landlord entry and limit it to business hours.",
];

// ── Main export ───────────────────────────────────────────────────────────────

export function analyzeLeaseRuleBased(
  leaseText: string,
): Omit<LeaseAnalysis, "id" | "createdAt"> {
  const text = leaseText;

  // Financial terms
  const financialTerms: FinancialTerm[] = [
    extractRent(text),
    extractDeposit(text),
    extractLateFee(text),
    extractLeaseTerm(text),
    extractUtilities(text),
    extractPetDeposit(text),
    extractParking(text),
  ].filter(Boolean) as FinancialTerm[];

  // Red flags
  const redFlags: RedFlag[] = [
    detectAutoRenewal(text),
    detectEntryRights(text),
    detectEarlyTermination(text),
    detectRentIncrease(text),
    detectJointSeveralLiability(text),
    detectWaiverOfRights(text),
    detectArbitrationClause(text),
    detectSubletRestriction(text),
    detectRepairThreshold(text),
  ].filter(Boolean) as RedFlag[];

  // Unclear clauses
  const unclearClauses: UnclearClause[] = [
    detectVagueCleaningStandard(text),
    detectVagueNuisance(text),
    detectVagueNormalWear(text),
    detectAgentClause(text),
  ].filter(Boolean) as UnclearClause[];

  const summary = buildSummary(text, financialTerms, redFlags);

  return {
    summary,
    financialTerms,
    redFlags,
    unclearClauses,
    questionsToAsk: STANDARD_QUESTIONS,
    negotiationSuggestions: STANDARD_SUGGESTIONS,
  };
}
