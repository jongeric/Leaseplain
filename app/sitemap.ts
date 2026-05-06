import type { MetadataRoute } from "next";

const BASE = "https://leaseplain.com";
const NOW = new Date("2026-05-06");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core
    { url: BASE, lastModified: NOW, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/lease-analyzer`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/how-it-works`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/upload`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/pricing`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/example-report`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },

    // Lease Clauses
    { url: `${BASE}/lease-clause/security-deposit`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lease-clause/rent-increase`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lease-clause/early-termination`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lease-clause/maintenance`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lease-clause/subletting`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lease-clause/late-fees`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },

    // Tenant Rights
    { url: `${BASE}/tenant-rights`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tenant-rights/ontario`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tenant-rights/toronto`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tenant-rights/rent-increase-rules`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tenant-rights/breaking-a-lease`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tenant-rights/landlord-responsibilities`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },

    // Resources
    { url: `${BASE}/resources`, lastModified: NOW, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/resources/how-to-read-a-lease`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/lease-agreement-explained`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/check-before-signing-lease`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/ai-lease-review`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/lease-red-flags`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },

    // Company / utility
    { url: `${BASE}/faq`, lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/about`, lastModified: NOW, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: NOW, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: NOW, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: NOW, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/disclaimer`, lastModified: NOW, changeFrequency: "yearly", priority: 0.3 },
  ];
}
