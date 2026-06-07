import type { Metadata } from "next";
import ClauseCheckerClient from "./ClauseCheckerClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Clause Red Flag Scanner | LeasePlain",
  description:
    "Paste a lease clause to instantly scan for common red flags. Identifies high-risk clauses like illegal entry, unlimited rent increases, and waived rights — free and instant.",
  alternates: { canonical: "https://leaseplain.com/tools/clause-checker" },
  openGraph: {
    title: "Lease Clause Red Flag Scanner | LeasePlain",
    description:
      "Paste any lease clause and instantly check it for common red flags. Covers illegal entry clauses, rent increase violations, waived rights, and more.",
    url: "https://leaseplain.com/tools/clause-checker",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Scan a Lease Clause for Red Flags",
  "description": "Use LeasePlain's Lease Clause Red Flag Scanner to paste any clause from your lease and instantly check it against common red-flag patterns.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Copy a clause from your lease", "text": "Find a clause in your lease agreement that seems unusual, one-sided, or unclear." },
    { "@type": "HowToStep", "position": 2, "name": "Paste it into the scanner", "text": "Paste the clause text into the Lease Clause Red Flag Scanner box." },
    { "@type": "HowToStep", "position": 3, "name": "Run the scan", "text": "Click scan to instantly check the clause against 19 common red-flag patterns seen in Canadian residential leases." },
    { "@type": "HowToStep", "position": 4, "name": "Review the risk rating and explanation", "text": "See whether the clause may be unenforceable or illegal in your province, with a plain-English explanation of why." }
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lease Clause Red Flag Scanner",
  applicationCategory: "LegalApplication",
  operatingSystem: "Web",
  url: "https://leaseplain.com/tools/clause-checker",
  description:
    "Free tool that scans a pasted lease clause for common legal red flags using keyword and pattern matching. Identifies high, medium, and low-risk clause language common in Canadian residential leases.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  provider: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
  featureList: [
    "Detects high-risk lease clause patterns",
    "Covers Ontario, BC, Alberta, Quebec and all Canadian provinces",
    "Instant client-side pattern matching — no data sent to server",
  ],
};

export default function ClauseCheckerPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tools", href: "https://leaseplain.com/tools" },
        { name: "Clause Red Flag Scanner", href: "https://leaseplain.com/tools/clause-checker" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, "\u003c") }} />
      <ClauseCheckerClient />
    </>
  );
}
