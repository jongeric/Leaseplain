import type { Metadata } from "next";
import TenantRightsLookupClient from "./TenantRightsLookupClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tenant Rights Lookup by Province | LeasePlain",
  description:
    "Look up your tenant rights by province — deposits, rent control, notice periods, eviction rules, and more. Free instant reference for all 10 Canadian provinces.",
  alternates: { canonical: "https://leaseplain.com/tools/tenant-rights-lookup" },
  openGraph: {
    title: "Tenant Rights Lookup by Province | LeasePlain",
    description:
      "Select your province for an instant summary of tenant rights: deposit limits, rent control, entry notice, eviction rules, and tribunal contact. All 10 Canadian provinces covered.",
    url: "https://leaseplain.com/tools/tenant-rights-lookup",
  },
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
  "url": "https://leaseplain.com/tools/tenant-rights-lookup",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Tenant Rights Lookup by Province",
  applicationCategory: "LegalApplication",
  operatingSystem: "Web",
  url: "https://leaseplain.com/tools/tenant-rights-lookup",
  description:
    "Free reference tool that displays a comprehensive tenant rights card for any Canadian province — covering deposit rules, rent control, notice periods, subletting, pets, and key protections.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  provider: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
  featureList: [
    "Comprehensive tenant rights for all 10 Canadian provinces",
    "Deposit limits, rent control, notice periods, and tribunal links",
    "Instant results — no form submission needed",
  ],
};

export default function TenantRightsLookupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <TenantRightsLookupClient />
    </>
  );
}
