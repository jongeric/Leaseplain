import { LeaseAnalysis } from "./types";

export const MOCK_ANALYSIS: LeaseAnalysis = {
  id: "mock",
  createdAt: new Date().toISOString(),
  filename: "sample-lease.pdf",
  summary:
    "This is a standard 12-month residential lease for an apartment at 123 Main Street, Apt 4B, starting June 1, 2026. Monthly rent is $1,850, due on the 1st of each month. A $3,700 security deposit (equal to 2 months' rent) is required at signing. The lease auto-renews month-to-month after the initial term unless 60 days' written notice is given. The landlord may enter the unit with 24 hours' notice except in emergencies. Pets are not allowed. Utilities (electricity, gas, internet) are the tenant's responsibility. Subletting requires written landlord approval and may be denied at landlord's sole discretion.",

  financialTerms: [
    { label: "Monthly Rent", value: "$1,850", note: "Due on the 1st; grace period ends on the 5th" },
    { label: "Security Deposit", value: "$3,700", note: "2 months' rent; returned within 30 days of move-out" },
    { label: "Late Fee", value: "$150", note: "Applied after day 5 of the month" },
    { label: "NSF / Returned Check Fee", value: "$50 per occurrence" },
    { label: "Lease Term", value: "12 months (June 1, 2026 – May 31, 2027)" },
    { label: "Utilities", value: "Tenant pays electricity, gas, and internet" },
    { label: "Parking", value: "$75/month (optional, one space)" },
    { label: "Pet Deposit", value: "N/A – no pets allowed" },
  ],

  redFlags: [
    {
      title: "Auto-Renewal Clause",
      description:
        "The lease automatically converts to a month-to-month tenancy at $2,100/month (a $250 increase) unless you provide written 60-day notice before the lease end date. Many tenants miss this window and get locked into a higher rate.",
      severity: "high",
    },
    {
      title: "Broad Landlord Entry Rights",
      description:
        "Section 12 allows the landlord to enter the unit 'for any reasonable purpose' with 24 hours' notice. The term 'reasonable purpose' is vague and may grant broader access than local law allows. Some states only permit entry for repairs, inspections, or emergencies.",
      severity: "medium",
    },
    {
      title: "One-Sided Repair Responsibility",
      description:
        "You are responsible for 'minor repairs' costing under $150, but the lease doesn't define what qualifies as minor. This could lead to disputes about who pays for routine maintenance items.",
      severity: "medium",
    },
  ],

  unclearClauses: [
    {
      title: "Subletting Policy",
      description:
        "The lease requires written approval for subletting but says the landlord 'may approve or deny at sole discretion' with no criteria given. It's unclear whether denial requires a reason or if you'd get any portion of fees back.",
    },
    {
      title: "Move-Out Cleaning Standards",
      description:
        "The lease requires returning the unit in 'broom-clean condition' but doesn't define this or reference a move-in checklist. Without documentation, disputes over your security deposit are likely.",
    },
    {
      title: "Noise and Nuisance Clause",
      description:
        "Section 9 prohibits 'excessive noise or disturbances' but provides no decibel levels, time windows, or other objective measures. What counts as excessive is entirely subjective.",
    },
  ],

  questionsToAsk: [
    "What is your process for approving or denying a sublet request?",
    "Can you provide a move-in inspection checklist to document the apartment's current condition?",
    "Are there any planned rent increases if I renew after the initial term?",
    "What specific repairs fall under 'minor repairs' that I'd be responsible for?",
    "How do you define 'reasonable purpose' for landlord entry, and will you give more than 24 hours' notice for routine visits?",
    "Is the $75 parking fee included in the lease or a separate monthly agreement?",
  ],

  negotiationSuggestions: [
    "Request a 30-day (rather than 60-day) notice requirement for auto-renewal, or ask for explicit notification from the landlord 90 days before the lease ends.",
    "Ask to cap the auto-renewal rent at the original $1,850 or tied to CPI (inflation index) rather than a flat $250 increase.",
    "Negotiate a move-in checklist and condition report, signed by both parties, to protect your security deposit.",
    "Request that landlord entry for non-emergency inspections require at least 48 hours' notice and be limited to business hours.",
    "Ask for a written definition of 'minor repairs' with a specific dollar threshold and scope.",
    "If you have pets, request a pet addendum with a refundable pet deposit rather than a blanket no-pets policy.",
  ],
};
