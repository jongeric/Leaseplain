import type { MetadataRoute } from "next";

const BASE = "https://leaseplain.com";
const NOW = new Date("2026-05-18");

type Entry = MetadataRoute.Sitemap[number];

function url(path: string, priority: number, changeFrequency: Entry["changeFrequency"] = "monthly"): Entry {
  return { url: `${BASE}${path}`, lastModified: NOW, changeFrequency, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Core ──────────────────────────────────────────────────────────────────
    url("/",                    1.0, "weekly"),
    url("/upload",              0.9, "monthly"),
    url("/lease-analyzer",      0.9, "monthly"),
    url("/how-it-works",        0.9, "monthly"),
    url("/how-leaseplain-works",0.8, "monthly"),
    url("/pricing",             0.8, "monthly"),
    url("/example-report",      0.7, "monthly"),
    url("/login",               0.5, "monthly"),

    // ── Free Tools ────────────────────────────────────────────────────────────
    url("/tools",                                    0.9, "monthly"),
    url("/tools/rent-increase-calculator",           0.9, "monthly"),
    url("/tools/deposit-calculator",                 0.9, "monthly"),

    // ── Locations hub ─────────────────────────────────────────────────────────
    url("/locations",           0.9, "monthly"),

    // Canada — provinces
    url("/canada",                         0.9, "monthly"),
    url("/canada/ontario",                 0.9, "monthly"),
    url("/canada/british-columbia",        0.9, "monthly"),
    url("/canada/alberta",                 0.9, "monthly"),
    url("/canada/quebec",                  0.9, "monthly"),
    url("/canada/manitoba",                0.7, "monthly"),
    url("/canada/nova-scotia",             0.7, "monthly"),
    url("/canada/new-brunswick",           0.7, "monthly"),
    url("/canada/prince-edward-island",    0.7, "monthly"),
    url("/canada/newfoundland-and-labrador", 0.7, "monthly"),
    url("/canada/saskatchewan",            0.7, "monthly"),

    // Canada — Ontario cities
    url("/canada/ontario/toronto",     0.8, "monthly"),
    url("/canada/ontario/ottawa",      0.8, "monthly"),
    url("/canada/ontario/mississauga", 0.7, "monthly"),
    url("/canada/ontario/hamilton",    0.7, "monthly"),
    url("/canada/ontario/brampton",    0.7, "monthly"),
    url("/canada/ontario/london",      0.7, "monthly"),
    url("/canada/ontario/kitchener",   0.7, "monthly"),
    url("/canada/ontario/waterloo",    0.7, "monthly"),
    url("/canada/ontario/kingston",    0.6, "monthly"),
    url("/canada/ontario/oshawa",      0.6, "monthly"),

    // Canada — BC cities
    url("/canada/british-columbia/vancouver", 0.8, "monthly"),
    url("/canada/british-columbia/burnaby",   0.7, "monthly"),
    url("/canada/british-columbia/surrey",    0.7, "monthly"),
    url("/canada/british-columbia/victoria",  0.7, "monthly"),

    // Canada — Alberta cities
    url("/canada/alberta/calgary",   0.8, "monthly"),
    url("/canada/alberta/edmonton",  0.8, "monthly"),

    // Canada — Quebec cities
    url("/canada/quebec/montreal",      0.8, "monthly"),
    url("/canada/quebec/quebec-city",   0.7, "monthly"),
    url("/canada/quebec/laval",         0.6, "monthly"),

    // Canada — guides
    url("/canadian-lease-laws",  0.8, "monthly"),
    url("/renting-in-canada",    0.8, "monthly"),

    // United States — states
    url("/united-states",                        0.8, "monthly"),
    url("/united-states/new-york",               0.7, "monthly"),
    url("/united-states/new-york/new-york-city", 0.7, "monthly"),
    url("/united-states/california",             0.7, "monthly"),
    url("/united-states/california/los-angeles", 0.7, "monthly"),
    url("/united-states/florida",                0.7, "monthly"),
    url("/united-states/florida/miami",          0.7, "monthly"),

    // ── Lease Clauses ─────────────────────────────────────────────────────────
    url("/lease-clauses",                  0.9, "monthly"),
    url("/lease-clause/security-deposit",  0.8, "monthly"),
    url("/lease-clause/rent-increase",     0.8, "monthly"),
    url("/lease-clause/early-termination", 0.8, "monthly"),
    url("/lease-clause/maintenance",       0.8, "monthly"),
    url("/lease-clause/subletting",        0.8, "monthly"),
    url("/lease-clause/late-fees",         0.8, "monthly"),
    url("/lease-clause/utilities",         0.8, "monthly"),
    url("/lease-clause/pets",              0.8, "monthly"),
    url("/lease-clause/guests",            0.8, "monthly"),
    url("/lease-clause/repairs",           0.8, "monthly"),

    // ── Glossary ──────────────────────────────────────────────────────────────
    url("/glossary",                              0.8, "monthly"),
    url("/glossary/security-deposit",             0.7, "monthly"),
    url("/glossary/subletting",                   0.7, "monthly"),
    url("/glossary/guarantor",                    0.7, "monthly"),
    url("/glossary/rent-increase",                0.7, "monthly"),
    url("/glossary/late-fees",                    0.7, "monthly"),
    url("/glossary/maintenance-clause",           0.7, "monthly"),
    url("/glossary/occupancy-limits",             0.7, "monthly"),
    url("/glossary/termination-clause",           0.7, "monthly"),
    url("/glossary/lease-renewal",                0.7, "monthly"),
    url("/glossary/grace-period",                 0.7, "monthly"),
    url("/glossary/holdover-tenant",              0.7, "monthly"),
    url("/glossary/force-majeure",                0.7, "monthly"),
    url("/glossary/quiet-enjoyment",              0.7, "monthly"),
    url("/glossary/joint-and-several-liability",  0.7, "monthly"),
    url("/glossary/habitability",                 0.7, "monthly"),

    // ── Tenant Rights ─────────────────────────────────────────────────────────
    url("/tenant-rights",                            0.9, "monthly"),
    url("/tenant-rights/canada",                     0.9, "monthly"),
    url("/tenant-rights/ontario",                    0.9, "monthly"),
    url("/tenant-rights/british-columbia",           0.9, "monthly"),
    url("/tenant-rights/alberta",                    0.9, "monthly"),
    url("/tenant-rights/quebec",                     0.9, "monthly"),
    url("/tenant-rights/toronto",                    0.8, "monthly"),
    url("/tenant-rights/united-states",              0.7, "monthly"),
    url("/tenant-rights/rent-increase-rules",        0.8, "monthly"),
    url("/tenant-rights/breaking-a-lease",           0.8, "monthly"),
    url("/tenant-rights/landlord-responsibilities",  0.8, "monthly"),
    url("/tenant-rights/eviction-notices",           0.8, "monthly"),
    url("/tenant-rights/repairs-maintenance",        0.8, "monthly"),

    // ── Resources ─────────────────────────────────────────────────────────────
    url("/resources",                                   0.9, "weekly"),
    url("/resources/lease-basics",                      0.8, "monthly"),
    url("/resources/what-is-a-lease-agreement",         0.8, "monthly"),
    url("/resources/how-to-read-a-lease",               0.8, "monthly"),
    url("/resources/lease-agreement-explained",         0.8, "monthly"),
    url("/resources/lease-vs-rental-agreement",         0.7, "monthly"),
    url("/resources/before-you-sign",                   0.8, "monthly"),
    url("/resources/check-before-signing-lease",        0.8, "monthly"),
    url("/resources/lease-red-flags",                   0.8, "monthly"),
    url("/resources/questions-before-signing",          0.7, "monthly"),
    url("/resources/hidden-lease-fees",                 0.7, "monthly"),
    url("/resources/ai-lease-review",                   0.8, "monthly"),
    url("/resources/what-is-ai-lease-analyzer",         0.7, "monthly"),
    url("/resources/ai-lease-review-vs-lawyer",         0.7, "monthly"),
    url("/resources/can-ai-explain-a-lease",            0.7, "monthly"),
    url("/resources/is-ai-lease-review-accurate",       0.7, "monthly"),
    url("/resources/leaseplain-vs-chatgpt",             0.7, "monthly"),
    url("/resources/upload-lease-for-review",           0.7, "monthly"),
    url("/resources/tenant-guides",                     0.8, "monthly"),
    url("/resources/first-time-renter-guide",           0.7, "monthly"),
    url("/resources/student-lease-guide",               0.7, "monthly"),
    url("/resources/condo-lease-guide",                 0.7, "monthly"),
    url("/resources/apartment-lease-guide",             0.7, "monthly"),
    url("/resources/landlord-guides",                   0.7, "monthly"),
    url("/resources/landlord-lease-checklist",          0.7, "monthly"),
    url("/resources/landlord-lease-mistakes",           0.7, "monthly"),
    url("/resources/should-you-pay-lawyer-review-lease",0.7, "monthly"),

    // ── Company / utility ─────────────────────────────────────────────────────
    url("/faq",              0.6, "monthly"),
    url("/about",            0.5, "yearly"),
    url("/contact",          0.5, "yearly"),
    url("/methodology",      0.5, "yearly"),
    url("/editorial-policy", 0.4, "yearly"),
    url("/privacy",          0.3, "yearly"),
    url("/terms",            0.3, "yearly"),
    url("/disclaimer",       0.3, "yearly"),
    url("/legal-disclaimer", 0.3, "yearly"),
  ];
}
