import type { Metadata } from "next";
import ClauseCheckerClient from "./ClauseCheckerClient";

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ClauseCheckerClient />
    </>
  );
}
