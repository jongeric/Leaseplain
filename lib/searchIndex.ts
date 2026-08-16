// Site-wide search index, assembled from the structured data modules plus a
// curated list of tools, glossary terms, and key pages. Bundled into the
// client search component — small enough to ship inline, no fetch needed.

import { BLOG_POSTS } from "@/lib/blogPosts";
import { ANSWERS } from "@/lib/answers";
import { LETTERS } from "@/lib/letters";
import { CHECKLISTS } from "@/lib/checklists";
import { DIRECTORY_CITIES } from "@/lib/legalHelp";
import { LTB_FORMS } from "@/lib/ltbForms";

export type SearchType =
  | "Page" | "Guide" | "Answer" | "Tool" | "Letter" | "Checklist" | "Legal help" | "Glossary" | "LTB form";

export interface SearchDoc {
  title: string;
  url: string;
  description?: string;
  type: SearchType;
  keywords?: string;
}

const PAGES: SearchDoc[] = [
  { type: "Page", title: "Check My Lease (Free Analysis)", url: "/upload", description: "Upload your lease and get a plain-English breakdown — red flags, financial terms, and questions to ask.", keywords: "analyze upload pdf review" },
  { type: "Page", title: "How LeasePlain Works", url: "/how-it-works", description: "How the free lease analyzer works, step by step." },
  { type: "Page", title: "For Lawyers — Get Listed", url: "/for-lawyers", description: "Tenant-rights lawyers and paralegals: reach renters who need representation and grow your practice.", keywords: "paralegal listing directory referral sponsor" },
  { type: "Page", title: "Find a Tenant Lawyer or Paralegal", url: "/tenant-lawyer", description: "How to get tenant legal help in Ontario — clinics, duty counsel, paralegals, and lawyers by city.", keywords: "legal help LTB representation" },
  { type: "Page", title: "Partners", url: "/partners", description: "Embed our free tenant tools or partner with LeasePlain." },
  { type: "Page", title: "Contact Us", url: "/contact", description: "Get in touch with LeasePlain." },
  { type: "Page", title: "Tenant Q&A (Answers)", url: "/answers", description: "Straight answers to common Ontario tenant questions." },
  { type: "Page", title: "Free Letter Generators", url: "/letters", description: "Repair requests, rent-increase disputes, deposit-interest requests, and move-out notices." },
  { type: "Page", title: "Printable Checklists", url: "/checklists", description: "Before-you-sign, move-in, and move-out checklists." },
  { type: "Page", title: "Free Tenant Tools", url: "/tools", description: "Calculators and checkers for Canadian renters." },
  { type: "Page", title: "Lease Glossary", url: "/glossary", description: "Plain-English definitions of lease terms." },
  { type: "Page", title: "Tenant Rights", url: "/tenant-rights", description: "Province-by-province tenant rights guides." },
  { type: "Page", title: "Renting in Canada", url: "/canada", description: "Tenant rights by province across Canada." },
  { type: "Page", title: "Resources & Guides", url: "/resources", description: "Guides for renters and landlords." },
  { type: "Page", title: "Blog", url: "/blog", description: "Plain-English guides and provincial law updates." },
  { type: "Page", title: "FAQ", url: "/faq", description: "Frequently asked questions about LeasePlain." },
  { type: "Page", title: "Ontario Rent Increase Guideline History (2020–2026)", url: "/ontario-rent-increase-history", description: "Every Ontario rent increase guideline by year.", keywords: "data 2.1% freeze" },
  { type: "Page", title: "Embeddable Widgets", url: "/widgets", description: "Free tenant tools you can embed on your site." },
];

const TOOLS: SearchDoc[] = [
  { type: "Tool", title: "Rent Increase Calculator", url: "/tools/rent-increase-calculator", description: "Check if a rent increase is within the legal limit for your province.", keywords: "guideline 2.1% legal" },
  { type: "Tool", title: "Security Deposit Return Calculator", url: "/tools/deposit-calculator", description: "How much deposit you should get back and the deadline." },
  { type: "Tool", title: "Notice Period Calculator", url: "/tools/notice-period-calculator", description: "Required notice for rent increases, evictions, entry, and move-out." },
  { type: "Tool", title: "Move-In Cost Calculator", url: "/tools/move-in-cost-calculator", description: "Total upfront rental costs by province." },
  { type: "Tool", title: "Lease Break Cost Estimator", url: "/tools/lease-break-calculator", description: "Estimate your exposure if you break your lease early." },
  { type: "Tool", title: "Eviction Notice Validity Checker", url: "/tools/eviction-notice-checker", description: "Find out if an eviction notice is legally valid." },
  { type: "Tool", title: "Lease Clause Red Flag Scanner", url: "/tools/clause-checker", description: "Scan a lease clause for common red flags." },
  { type: "Tool", title: "Is My Landlord Allowed To Do This?", url: "/tools/landlord-quiz", description: "Pick a scenario and province for a clear answer." },
  { type: "Tool", title: "Tenant Rights Lookup by Province", url: "/tools/tenant-rights-lookup", description: "Deposits, rent control, notice periods for all provinces." },
];

const GLOSSARY_TERMS: Array<[string, string]> = [
  ["security-deposit", "Security Deposit"], ["subletting", "Subletting"], ["guarantor", "Guarantor"],
  ["rent-increase", "Rent Increase"], ["late-fees", "Late Fees"], ["maintenance-clause", "Maintenance Clause"],
  ["occupancy-limits", "Occupancy Limits"], ["termination-clause", "Termination Clause"], ["lease-renewal", "Lease Renewal"],
  ["grace-period", "Grace Period"], ["holdover-tenant", "Holdover Tenant"], ["force-majeure", "Force Majeure"],
  ["quiet-enjoyment", "Quiet Enjoyment"], ["joint-and-several-liability", "Joint and Several Liability"], ["habitability", "Habitability"],
];

let cached: SearchDoc[] | null = null;

export function getSearchIndex(): SearchDoc[] {
  if (cached) return cached;
  const docs: SearchDoc[] = [
    ...PAGES,
    ...TOOLS,
    ...BLOG_POSTS.map((p): SearchDoc => ({ type: "Guide", title: p.title, url: p.href, description: p.excerpt, keywords: p.category })),
    ...ANSWERS.map((a): SearchDoc => ({ type: "Answer", title: a.question, url: `/answers/${a.slug}`, description: a.shortAnswer, keywords: a.keywords.join(" ") })),
    ...LETTERS.map((l): SearchDoc => ({ type: "Letter", title: l.h1, url: `/letters/${l.slug}`, description: l.metaDescription, keywords: l.keywords.join(" ") })),
    ...CHECKLISTS.map((c): SearchDoc => ({ type: "Checklist", title: c.h1, url: `/checklists/${c.slug}`, description: c.metaDescription, keywords: c.keywords.join(" ") })),
    ...DIRECTORY_CITIES.map((c): SearchDoc => ({ type: "Legal help", title: `Tenant Lawyers & Paralegals in ${c.name}`, url: `/tenant-lawyer/${c.slug}`, description: `Get tenant legal help in ${c.name}, Ontario.`, keywords: `${c.region} lawyer paralegal` })),
    ...GLOSSARY_TERMS.map(([slug, term]): SearchDoc => ({ type: "Glossary", title: term, url: `/glossary/${slug}`, description: `Plain-English definition of ${term}.` })),
    ...LTB_FORMS.map((fm): SearchDoc => ({ type: "LTB form", title: `${fm.code} — ${fm.name}`, url: `/ltb-forms/${fm.slug}`, description: fm.purpose, keywords: fm.keywords.join(" ") })),
  ];
  cached = docs;
  return docs;
}

/** Rank docs against a query. Title hits score highest, then keywords, then description. */
export function searchDocs(query: string, limit = 24): SearchDoc[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);
  const scored: Array<{ doc: SearchDoc; score: number }> = [];
  for (const doc of getSearchIndex()) {
    const title = doc.title.toLowerCase();
    const kw = (doc.keywords ?? "").toLowerCase();
    const desc = (doc.description ?? "").toLowerCase();
    let score = 0;
    for (const t of terms) {
      if (title.includes(t)) score += title.startsWith(t) ? 5 : 3;
      else if (kw.includes(t)) score += 2;
      else if (desc.includes(t)) score += 1;
      else { score = -Infinity; break; } // every term must match somewhere
    }
    if (score > 0) scored.push({ doc, score });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.doc);
}
