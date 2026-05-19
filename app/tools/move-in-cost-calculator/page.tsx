import type { Metadata } from "next";
import MoveInCostClient from "./MoveInCostClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Move-In Cost Calculator Canada | LeasePlain",
  description:
    "Calculate your total upfront move-in costs by province — first month, last month's rent, security deposit, and pet deposit. Know exactly what your landlord can legally charge.",
  alternates: { canonical: "https://leaseplain.com/tools/move-in-cost-calculator" },
  openGraph: {
    title: "Move-In Cost Calculator Canada | LeasePlain",
    description:
      "Find out the maximum legal move-in costs in Ontario, BC, Alberta, Quebec, and all Canadian provinces. Includes security deposit caps and pet deposit rules.",
    url: "https://leaseplain.com/tools/move-in-cost-calculator",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Canada Move-In Cost Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://leaseplain.com/tools/move-in-cost-calculator",
  description:
    "Free calculator that shows the legally permitted upfront move-in costs — first month, last month's rent deposit, security deposit, and pet deposit — for any Canadian province.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  provider: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
  featureList: [
    "Move-in cost breakdown for all 10 Canadian provinces",
    "Security deposit and pet deposit caps by province",
    "What landlords are NOT allowed to charge",
  ],
};

export default function MoveInCostCalculatorPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tools", href: "https://leaseplain.com/tools" },
        { name: "Move-In Cost Calculator", href: "https://leaseplain.com/tools/move-in-cost-calculator" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <MoveInCostClient />
    </>
  );
}
