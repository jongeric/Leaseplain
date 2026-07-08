import type { Metadata } from "next";
import RentIncreaseClient from "./RentIncreaseClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Rent Increase Calculator Canada 2026 | LeasePlain",
  description:
    "Check if your landlord's rent increase is within the legal limit for your province. Free rent increase calculator for Ontario, BC, Alberta, Quebec, and all Canadian provinces.",
  alternates: { canonical: "https://leaseplain.com/tools/rent-increase-calculator" },
  openGraph: {
    title: "Rent Increase Calculator Canada 2026 | LeasePlain",
    description:
      "Is your rent increase legal? Enter your province and rent amounts to check against 2026 provincial guidelines instantly.",
    url: "https://leaseplain.com/tools/rent-increase-calculator",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Check If Your Rent Increase Is Legal",
  "description": "Use LeasePlain's Rent Increase Calculator to check whether your landlord's proposed rent increase is within the legal limit for your province.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Select your province", "text": "Choose the Canadian province where your rental unit is located. Each province sets its own annual rent increase guideline or limit." },
    { "@type": "HowToStep", "position": 2, "name": "Enter your current rent", "text": "Type in the amount you currently pay each month so the calculator can determine the maximum legal increase in dollars." },
    { "@type": "HowToStep", "position": 3, "name": "Enter the proposed new rent", "text": "Enter the rent amount your landlord wants to charge so the calculator can compare it to the legal limit." },
    { "@type": "HowToStep", "position": 4, "name": "Review your result", "text": "Instantly see whether the proposed increase is within the legal guideline, exceeds it, or requires special approval (such as an above-guideline increase application)." }
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Canada Rent Increase Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://leaseplain.com/tools/rent-increase-calculator",
  description:
    "Free calculator that checks whether a landlord's proposed rent increase is within the legal limit for any Canadian province in 2026.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  provider: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
  featureList: [
    "2026 rent increase limits for all 10 Canadian provinces",
    "Instant legal compliance check",
    "Province-specific guidelines and notices",
  ],
};

export default function RentIncreaseCalculatorPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tools", href: "https://leaseplain.com/tools" },
        { name: "Rent Increase Calculator", href: "https://leaseplain.com/tools/rent-increase-calculator" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, "\u003c") }} />
      <RentIncreaseClient />
    </>
  );
}
