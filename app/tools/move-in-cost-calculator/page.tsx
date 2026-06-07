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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Calculate Your Total Move-In Costs",
  "description": "Use LeasePlain's Move-In Cost Calculator to estimate your total upfront rental costs — including deposit, first month's rent, and pet deposit — by province.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Select your province", "text": "Choose your province so the calculator applies the correct deposit caps and rules for upfront charges." },
    { "@type": "HowToStep", "position": 2, "name": "Enter your monthly rent", "text": "Type in the monthly rent for the unit you're considering so the calculator can compute deposit and first-month amounts." },
    { "@type": "HowToStep", "position": 3, "name": "Add any pet or extra deposits", "text": "Indicate whether a pet deposit or other upfront fees apply, where permitted in your province." },
    { "@type": "HowToStep", "position": 4, "name": "Review your total upfront cost", "text": "See a complete breakdown of everything you should expect to pay before move-in, and flag any charges that exceed your province's legal limits." }
  ],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, "\u003c") }} />
      <MoveInCostClient />
    </>
  );
}
