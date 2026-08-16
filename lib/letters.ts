// Data-driven letter/template generators. Each definition supplies its form
// fields and a `build()` that turns the filled values into a ready-to-send
// letter. Imported directly by the client generator component (so build
// functions stay in-module and don't cross a server/client prop boundary).

export interface LetterField {
  name: string;
  label: string;
  type: "text" | "textarea" | "date";
  placeholder?: string;
  required?: boolean;
  half?: boolean; // render two-up on wider screens
}

export interface LetterDef {
  slug: string;
  title: string; // <title> / card title
  h1: string;
  metaDescription: string;
  intro: string;
  note?: string; // important caveat shown above the generator
  fields: LetterField[];
  build: (v: Record<string, string>) => string;
  faqs: Array<{ q: string; a: string }>;
  keywords: string[];
  related: Array<{ label: string; href: string }>;
}

const today = () => "[today's date]";
const val = (v: Record<string, string>, k: string, fallback: string) =>
  (v[k] && v[k].trim()) || fallback;

const signature = (v: Record<string, string>) =>
  `Sincerely,\n\n${val(v, "tenantName", "[Your name]")}`;

const header = (v: Record<string, string>) =>
  `${val(v, "tenantName", "[Your name]")}\n${val(v, "unitAddress", "[Your unit address]")}\n${val(v, "date", today())}\n\n` +
  `To: ${val(v, "landlordName", "[Landlord / property manager name]")}\n`;

export const LETTERS: LetterDef[] = [
  {
    slug: "repair-request-letter",
    title: "Repair Request Letter Generator (Ontario)",
    h1: "Repair Request Letter Generator",
    metaDescription:
      "Free repair request letter template for Ontario tenants. Fill in the blanks and generate a dated written request that creates the paper trail you need if you later file a T6.",
    intro:
      "A written, dated repair request is the single most useful piece of evidence in a maintenance dispute. It proves your landlord knew about the problem and when. Fill in the fields below to generate a clear letter you can copy, print, or email.",
    note:
      "Keep a copy and proof you sent it (a saved email or a photo of the letter). If the repair still isn't made, this letter supports a T6 application to the Landlord and Tenant Board.",
    fields: [
      { name: "tenantName", label: "Your name", type: "text", required: true, half: true },
      { name: "landlordName", label: "Landlord / property manager", type: "text", half: true },
      { name: "unitAddress", label: "Your unit address", type: "text", required: true },
      { name: "date", label: "Date", type: "date", half: true },
      { name: "noticedDate", label: "When you first noticed the problem", type: "text", placeholder: "e.g. around June 3", half: true },
      { name: "issue", label: "Describe the repair needed", type: "textarea", required: true, placeholder: "e.g. The kitchen ceiling is leaking whenever it rains, leaving a growing water stain and a puddle on the floor." },
    ],
    build: (v) =>
      `${header(v)}\nRe: Request for repair — ${val(v, "unitAddress", "[unit address]")}\n\n` +
      `Dear ${val(v, "landlordName", "[Landlord / property manager]")},\n\n` +
      `I am writing to formally request a repair at my rental unit at ${val(v, "unitAddress", "[unit address]")}.\n\n` +
      `Issue: ${val(v, "issue", "[describe the issue]")}\n\n` +
      `I first noticed this problem ${val(v, "noticedDate", "[when]")}. As my landlord, you are responsible under Ontario's Residential Tenancies Act for maintaining the unit in a good state of repair and fit for habitation.\n\n` +
      `Please arrange for this repair to be completed as soon as possible, and let me know when I can expect it to be addressed. I am happy to provide access at a mutually convenient time with proper notice.\n\n` +
      `Thank you for your prompt attention to this matter.\n\n` +
      `${signature(v)}`,
    faqs: [
      { q: "Do I have to put a repair request in writing?", a: "It's strongly recommended. A dated written request is proof your landlord knew about the problem, which is essential evidence if you later file a T6 maintenance application with the Landlord and Tenant Board." },
      { q: "What if my landlord ignores the letter?", a: "Keep a copy and proof you sent it, then escalate: contact municipal property standards for health-and-safety issues, and file a T6 with the LTB, which can order repairs and a rent abatement. Do not withhold rent." },
      { q: "Can I email the repair request instead of mailing it?", a: "Yes. Email is fine and actually creates an easy timestamped record. Save the sent email as your proof." },
    ],
    keywords: ["repair request letter ontario", "tenant repair letter template", "landlord repair request", "T6 evidence letter"],
    related: [
      { label: "Can I withhold rent over repairs?", href: "/blog/withholding-rent-repairs-ontario" },
      { label: "How to get your landlord to make repairs", href: "/blog/landlord-repair-obligations-canada" },
      { label: "Heat & air conditioning rules", href: "/blog/landlord-heat-air-conditioning-ontario" },
    ],
  },
  {
    slug: "rent-increase-dispute-letter",
    title: "Rent Increase Dispute Letter Generator (Ontario)",
    h1: "Rent Increase Dispute Letter Generator",
    metaDescription:
      "Free letter template to dispute an improper or above-guideline rent increase in Ontario. Generate a written response telling your landlord you'll pay only the lawful amount.",
    intro:
      "If your landlord's rent increase exceeds the guideline, wasn't given on proper notice, or came less than 12 months after the last one, you can put your objection in writing. This letter states that you'll pay the lawful amount while the issue is resolved.",
    note:
      "Check the increase first with our Rent Increase Calculator. This letter is a first step — it is not a substitute for filing with the Landlord and Tenant Board if the dispute continues.",
    fields: [
      { name: "tenantName", label: "Your name", type: "text", required: true, half: true },
      { name: "landlordName", label: "Landlord / property manager", type: "text", half: true },
      { name: "unitAddress", label: "Your unit address", type: "text", required: true },
      { name: "date", label: "Date", type: "date", half: true },
      { name: "currentRent", label: "Current monthly rent", type: "text", placeholder: "e.g. $1,800", half: true },
      { name: "proposedRent", label: "Proposed new rent", type: "text", placeholder: "e.g. $1,950", half: true },
      { name: "reason", label: "Why you believe it's improper", type: "textarea", placeholder: "e.g. The increase is above the 2026 guideline of 2.1%, and I did not receive 90 days' written notice on Form N1." },
    ],
    build: (v) =>
      `${header(v)}\nRe: Objection to rent increase — ${val(v, "unitAddress", "[unit address]")}\n\n` +
      `Dear ${val(v, "landlordName", "[Landlord / property manager]")},\n\n` +
      `I am writing regarding the proposed increase of my rent from ${val(v, "currentRent", "[current rent]")} to ${val(v, "proposedRent", "[proposed rent]")}.\n\n` +
      `I do not believe this increase complies with Ontario's Residential Tenancies Act for the following reason:\n\n` +
      `${val(v, "reason", "[explain why the increase appears improper]")}\n\n` +
      `Unless and until a compliant notice is provided (or the Landlord and Tenant Board orders otherwise), I will continue to pay the lawful rent amount. Please confirm in writing that the increase will be corrected.\n\n` +
      `I would prefer to resolve this directly and amicably. Thank you for your attention.\n\n` +
      `${signature(v)}`,
    faqs: [
      { q: "What is the 2026 rent increase guideline in Ontario?", a: "For 2026 the guideline is 2.1%. Units first occupied after November 15, 2018 are exempt from the guideline, but proper notice and the once-every-12-months rule still apply." },
      { q: "Do I have to pay a rent increase I'm disputing?", a: "You must keep paying the lawful rent. If the increase is invalid, you generally continue paying the current amount; if you've already overpaid, you can file a T1 with the LTB to recover it." },
      { q: "Is this letter enough to stop the increase?", a: "It's a strong first step that creates a record, but if your landlord insists, the dispute may need to go to the Landlord and Tenant Board." },
    ],
    keywords: ["rent increase dispute letter ontario", "dispute rent increase template", "above guideline increase letter", "N1 dispute"],
    related: [
      { label: "Rent Increase Calculator", href: "/tools/rent-increase-calculator" },
      { label: "2026 rent increase guideline", href: "/blog/ontario-rent-increase-guideline-2026" },
      { label: "Above-guideline increases", href: "/blog/above-guideline-rent-increase-ontario" },
    ],
  },
  {
    slug: "deposit-interest-letter",
    title: "Last Month's Rent Interest Request Letter (Ontario)",
    h1: "Last Month's Rent Interest Request Letter",
    metaDescription:
      "Free letter template for Ontario tenants to request the annual interest owed on their last month's rent deposit — a payment most tenants never claim.",
    intro:
      "In Ontario, your landlord must pay interest on your last month's rent deposit every year, at the rent increase guideline rate (2.1% for 2026). Most tenants never claim it. This letter requests the interest you're owed, including for past years.",
    note:
      "The deposit itself is applied to your final month of rent — this letter is specifically about the annual interest. It can also be adapted to request the return of an illegal damage or cleaning deposit.",
    fields: [
      { name: "tenantName", label: "Your name", type: "text", required: true, half: true },
      { name: "landlordName", label: "Landlord / property manager", type: "text", half: true },
      { name: "unitAddress", label: "Your unit address", type: "text", required: true },
      { name: "date", label: "Date", type: "date", half: true },
      { name: "depositAmount", label: "Deposit amount held", type: "text", placeholder: "e.g. $1,800", half: true },
      { name: "sinceWhen", label: "Deposit held since", type: "text", placeholder: "e.g. September 2023", half: true },
    ],
    build: (v) =>
      `${header(v)}\nRe: Interest owed on last month's rent deposit — ${val(v, "unitAddress", "[unit address]")}\n\n` +
      `Dear ${val(v, "landlordName", "[Landlord / property manager]")},\n\n` +
      `You are holding a last month's rent deposit of ${val(v, "depositAmount", "[deposit amount]")} for my unit at ${val(v, "unitAddress", "[unit address]")}, held since ${val(v, "sinceWhen", "[date]")}.\n\n` +
      `Under Ontario's Residential Tenancies Act, a landlord must pay the tenant interest on the rent deposit every 12 months, at the annual rent increase guideline rate (2.1% for 2026). I am requesting payment of the interest owed to date, including for any prior years in which it was not paid.\n\n` +
      `Please pay the outstanding interest, or apply it toward the deposit as permitted, and confirm the amount in writing. Thank you.\n\n` +
      `${signature(v)}`,
    faqs: [
      { q: "How much interest is owed on my deposit?", a: "Interest is owed every 12 months at that year's rent increase guideline rate — 2.1% for 2026. On a $1,800 deposit, that's roughly $38 for the year, and it can add up across multiple years." },
      { q: "Can my landlord refuse to pay deposit interest?", a: "No. It's a legal requirement. If they refuse, you can file a T1 application with the Landlord and Tenant Board to recover it." },
      { q: "What if I was charged a damage deposit?", a: "Damage and cleaning deposits are illegal in Ontario. You can adapt this letter to request its return, and file a T1 if the landlord refuses." },
    ],
    keywords: ["last month rent deposit interest ontario", "deposit interest letter", "LMR interest request", "rent deposit interest"],
    related: [
      { label: "Last month's rent deposit rules", href: "/blog/last-months-rent-deposit-ontario" },
      { label: "Security deposit rules by province", href: "/blog/security-deposit-rules-canada" },
      { label: "Deposit return calculator", href: "/tools/deposit-calculator" },
    ],
  },
  {
    slug: "notice-to-end-tenancy-letter",
    title: "Notice to End Your Tenancy Letter (Ontario)",
    h1: "Notice to End Your Tenancy Letter Generator",
    metaDescription:
      "Free template to give your Ontario landlord written notice that you're moving out. Generate a clear notice letter — and a reminder to also file the official LTB Form N9.",
    intro:
      "Moving out of an Ontario rental means giving proper written notice — generally 60 days, ending on the last day of a rental period. This generates a clear notice letter for your records.",
    note:
      "For a month-to-month or expiring fixed-term tenancy, you should also submit the official LTB Form N9 (Tenant's Notice to End the Tenancy). This letter accompanies or restates that notice — it does not replace the official form.",
    fields: [
      { name: "tenantName", label: "Your name", type: "text", required: true, half: true },
      { name: "landlordName", label: "Landlord / property manager", type: "text", half: true },
      { name: "unitAddress", label: "Your unit address", type: "text", required: true },
      { name: "date", label: "Date of this notice", type: "date", half: true },
      { name: "moveOutDate", label: "Your move-out (termination) date", type: "text", placeholder: "e.g. October 31, 2026", half: true },
    ],
    build: (v) =>
      `${header(v)}\nRe: Notice to end my tenancy — ${val(v, "unitAddress", "[unit address]")}\n\n` +
      `Dear ${val(v, "landlordName", "[Landlord / property manager]")},\n\n` +
      `This letter is to give you written notice that I will be ending my tenancy at ${val(v, "unitAddress", "[unit address]")}.\n\n` +
      `My termination (move-out) date will be ${val(v, "moveOutDate", "[move-out date]")}. I am providing this notice in accordance with Ontario's Residential Tenancies Act, which requires at least 60 days' written notice ending on the last day of a rental period for a monthly tenancy.\n\n` +
      `I will also complete the official LTB Form N9. Please let me know the process for the final inspection and return of any keys, and confirm receipt of this notice.\n\n` +
      `Thank you.\n\n` +
      `${signature(v)}`,
    faqs: [
      { q: "How much notice do I give to move out in Ontario?", a: "Generally 60 days for a monthly tenancy, with the termination date falling on the last day of a rental period. Weekly tenancies require 28 days. You should use the official LTB Form N9." },
      { q: "Does this letter replace Form N9?", a: "No. The official notice is Form N9 from the Landlord and Tenant Board. This letter is a plain-language companion for your records and to communicate clearly with your landlord." },
      { q: "Can I end a fixed-term lease early with this?", a: "No. A fixed-term lease generally can't be ended early just by giving notice. You'd need to assign or sublet, or agree with your landlord to end early (Form N11)." },
    ],
    keywords: ["notice to end tenancy ontario", "form N9 letter", "tenant move out notice template", "60 day notice ontario"],
    related: [
      { label: "How much notice to move out", href: "/blog/notice-to-move-out-ontario" },
      { label: "Moving out checklist", href: "/blog/moving-out-ontario-checklist" },
      { label: "Subletting & assignment", href: "/blog/subletting-assignment-ontario" },
    ],
  },
];

export function getLetter(slug: string): LetterDef | undefined {
  return LETTERS.find((l) => l.slug === slug);
}
