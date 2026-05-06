import type { MetadataRoute } from "next";

const BASE = "https://leaseplain.com";
const NOW = new Date("2026-05-06");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Core ──────────────────────────────────────────────────────────────────
    { url: BASE,                           lastModified: NOW, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/lease-analyzer`,       lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/how-it-works`,         lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/upload`,               lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/pricing`,              lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/example-report`,       lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },

    // ── Locations ─────────────────────────────────────────────────────────────
    { url: `${BASE}/locations`,                            lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/canada`,                               lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/canada/ontario`,                       lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/canada/ontario/toronto`,               lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/canada/ontario/ottawa`,                lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/canada/ontario/mississauga`,           lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/canada/ontario/hamilton`,              lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/canada/british-columbia`,              lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/canada/british-columbia/vancouver`,    lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/canada/alberta`,                       lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/canada/alberta/calgary`,               lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/canada/alberta/edmonton`,              lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/canada/quebec`,                        lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/canada/quebec/montreal`,               lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/united-states`,                        lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/united-states/new-york`,               lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/united-states/new-york/new-york-city`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/united-states/california`,             lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/united-states/california/los-angeles`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/united-states/florida`,                lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/united-states/florida/miami`,          lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },

    // ── Lease Clauses ─────────────────────────────────────────────────────────
    { url: `${BASE}/lease-clauses`,                           lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/lease-clause/security-deposit`,           lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lease-clause/rent-increase`,              lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lease-clause/early-termination`,          lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lease-clause/maintenance`,                lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lease-clause/subletting`,                 lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lease-clause/late-fees`,                  lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lease-clause/utilities`,                  lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lease-clause/pets`,                       lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lease-clause/guests`,                     lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lease-clause/repairs`,                    lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },

    // ── Tenant Rights ─────────────────────────────────────────────────────────
    { url: `${BASE}/tenant-rights`,                           lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/tenant-rights/canada`,                    lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/tenant-rights/united-states`,             lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/tenant-rights/ontario`,                   lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/tenant-rights/toronto`,                   lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tenant-rights/british-columbia`,          lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/tenant-rights/alberta`,                   lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/tenant-rights/quebec`,                    lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/tenant-rights/rent-increase-rules`,       lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tenant-rights/breaking-a-lease`,          lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tenant-rights/landlord-responsibilities`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tenant-rights/eviction-notices`,          lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tenant-rights/repairs-maintenance`,       lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },

    // ── Resources ─────────────────────────────────────────────────────────────
    { url: `${BASE}/resources`,                               lastModified: NOW, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/resources/lease-basics`,                  lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources/what-is-a-lease-agreement`,     lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources/how-to-read-a-lease`,           lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources/lease-agreement-explained`,     lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources/lease-vs-rental-agreement`,     lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/before-you-sign`,               lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources/check-before-signing-lease`,    lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources/lease-red-flags`,               lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources/questions-before-signing`,      lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/hidden-lease-fees`,             lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/ai-lease-review`,               lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources/what-is-ai-lease-analyzer`,     lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/ai-lease-review-vs-lawyer`,     lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/can-ai-explain-a-lease`,        lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/upload-lease-for-review`,       lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/tenant-guides`,                 lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources/first-time-renter-guide`,       lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/student-lease-guide`,           lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/condo-lease-guide`,             lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/apartment-lease-guide`,         lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/landlord-guides`,               lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/landlord-lease-checklist`,      lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/landlord-lease-mistakes`,       lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },

    // ── Company / utility ─────────────────────────────────────────────────────
    { url: `${BASE}/faq`,        lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/about`,      lastModified: NOW, changeFrequency: "yearly",  priority: 0.5 },
    { url: `${BASE}/contact`,    lastModified: NOW, changeFrequency: "yearly",  priority: 0.5 },
    { url: `${BASE}/privacy`,    lastModified: NOW, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms`,      lastModified: NOW, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/disclaimer`, lastModified: NOW, changeFrequency: "yearly",  priority: 0.3 },
  ];
}
