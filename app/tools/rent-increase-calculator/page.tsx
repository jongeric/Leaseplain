import type { Metadata } from "next";
import RentIncreaseClient from "./RentIncreaseClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Rent Increase Calculator Canada 2025 | LeasePlain",
  description:
    "Check if your landlord's rent increase is within the legal limit for your province. Free rent increase calculator for Ontario, BC, Alberta, Quebec, and all Canadian provinces.",
  alternates: { canonical: "https://leaseplain.com/tools/rent-increase-calculator" },
  openGraph: {
    title: "Rent Increase Calculator Canada 2025 | LeasePlain",
    description:
      "Is your rent increase legal? Enter your province and rent amounts to check against 2025 provincial guidelines instantly.",
    url: "https://leaseplain.com/tools/rent-increase-calculator",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Canada Rent Increase Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://leaseplain.com/tools/rent-increase-calculator",
  description:
    "Free calculator that checks whether a landlord's proposed rent increase is within the legal limit for any Canadian province in 2025.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  provider: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
  featureList: [
    "2025 rent increase limits for all 10 Canadian provinces",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <RentIncreaseClient />
    </>
  );
}
