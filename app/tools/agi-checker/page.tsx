import type { Metadata } from "next";
import AgiCheckerClient from "./AgiCheckerClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Above-Guideline Rent Increase (AGI) Checker — Ontario | LeasePlain",
  description:
    "Is your Ontario rent increase legal or above the guideline? Enter your current and proposed rent to find out if it's within the limit, an above-guideline increase needing LTB approval, or exempt.",
  alternates: { canonical: "https://leaseplain.com/tools/agi-checker" },
  openGraph: {
    title: "Above-Guideline Rent Increase (AGI) Checker — Ontario | LeasePlain",
    description:
      "Check whether an Ontario rent increase is within the guideline or an above-guideline increase that needs LTB approval.",
    url: "https://leaseplain.com/tools/agi-checker",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Check an Ontario Rent Increase",
  description:
    "Use LeasePlain's AGI checker to see whether an Ontario rent increase is within the guideline or above it.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Enter your rents", text: "Enter your current monthly rent and the proposed new rent." },
    { "@type": "HowToStep", position: 2, name: "Pick the year and unit status", text: "Choose the year the increase takes effect and whether the unit was first occupied after November 15, 2018." },
    { "@type": "HowToStep", position: 3, name: "Read the verdict", text: "See whether the increase is within the guideline, above it (needing LTB approval), or exempt." },
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ontario Above-Guideline Increase Checker",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  url: "https://leaseplain.com/tools/agi-checker",
  description:
    "Free tool that checks whether an Ontario rent increase is within the guideline, above the guideline (requiring LTB approval), or exempt.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  provider: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
  featureList: [
    "Guideline vs above-guideline verdict",
    "Post-2018 exemption detection",
    "Percentage and dollar increase calculation",
    "Uses current Ontario guideline rates",
  ],
};

export default function AgiCheckerPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tools", href: "https://leaseplain.com/tools" },
        { name: "AGI Checker", href: "https://leaseplain.com/tools/agi-checker" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, "\\u003c") }} />
      <AgiCheckerClient />
    </>
  );
}
