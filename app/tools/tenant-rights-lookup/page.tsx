import type { Metadata } from "next";
import TenantRightsLookupClient from "./TenantRightsLookupClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Look Up Tenant Rights in Your Province",
  "description": "Use LeasePlain's Tenant Rights Lookup to get an instant reference card covering deposits, rent control, notice periods, and tribunal contacts for any Canadian province.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Select your province", "text": "Choose the province you live in or are renting in from the list of all 10 Canadian provinces." },
    { "@type": "HowToStep", "position": 2, "name": "View your reference card", "text": "Instantly see a summary of key tenant protections — deposit limits, rent control rules, required notice periods, and how to file a dispute." },
    { "@type": "HowToStep", "position": 3, "name": "Use the tribunal links", "text": "Follow direct links to your province's tenancy tribunal (such as the LTB or RTB) to file an application or get more help." }
  ],
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
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tools", href: "https://leaseplain.com/tools" },
        { name: "Tenant Rights Lookup", href: "https://leaseplain.com/tools/tenant-rights-lookup" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, "\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema).replace(/</g, "\u003c") }} />
      <TenantRightsLookupClient />
    </>
  );
}
