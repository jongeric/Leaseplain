import type { Metadata } from "next";
import DepositInterestCalculatorClient from "./DepositInterestCalculatorClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Last Month's Rent Deposit Interest Calculator (Ontario) | LeasePlain",
  description:
    "Ontario landlords owe you interest on your last month's rent deposit every year, at the rent increase guideline rate. Free calculator to see how much interest has built up and what you're owed.",
  alternates: { canonical: "https://leaseplain.com/tools/deposit-interest-calculator" },
  openGraph: {
    title: "Last Month's Rent Deposit Interest Calculator (Ontario) | LeasePlain",
    description:
      "See how much interest your landlord owes on your last month's rent deposit in Ontario — year by year.",
    url: "https://leaseplain.com/tools/deposit-interest-calculator",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Deposit Interest in Ontario",
  description:
    "Use LeasePlain's calculator to find the interest your landlord owes on your last month's rent deposit in Ontario.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Enter your deposit", text: "Enter the last month's rent deposit amount you originally paid." },
    { "@type": "HowToStep", position: 2, name: "Select the year you paid it", text: "Choose the year you paid the deposit so the calculator can apply each year's guideline rate." },
    { "@type": "HowToStep", position: 3, name: "View the interest owed", text: "See a year-by-year breakdown of the interest that has accrued and the total you're owed." },
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ontario Deposit Interest Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://leaseplain.com/tools/deposit-interest-calculator",
  description:
    "Free calculator that determines the interest an Ontario landlord owes on a last month's rent deposit, year by year, using the rent increase guideline.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  provider: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
  featureList: [
    "Year-by-year interest breakdown",
    "Uses Ontario's rent increase guideline rates",
    "Total interest owed calculation",
    "Deposit top-up guidance",
  ],
};

export default function DepositInterestCalculatorPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tools", href: "https://leaseplain.com/tools" },
        { name: "Deposit Interest Calculator", href: "https://leaseplain.com/tools/deposit-interest-calculator" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, "\\u003c") }} />
      <DepositInterestCalculatorClient />
    </>
  );
}
