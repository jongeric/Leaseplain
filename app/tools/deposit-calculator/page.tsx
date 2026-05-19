import type { Metadata } from "next";
import DepositCalculatorClient from "./DepositCalculatorClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Security Deposit Return Calculator Canada | LeasePlain",
  description:
    "Calculate how much of your security deposit you should get back and your landlord's legal deadline to return it. Free tool for Ontario, BC, Alberta, Quebec, and all Canadian provinces.",
  alternates: { canonical: "https://leaseplain.com/tools/deposit-calculator" },
  openGraph: {
    title: "Security Deposit Return Calculator Canada | LeasePlain",
    description:
      "Find out exactly how much deposit you're owed back and when your landlord must return it — by province.",
    url: "https://leaseplain.com/tools/deposit-calculator",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Canada Security Deposit Return Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://leaseplain.com/tools/deposit-calculator",
  description:
    "Free calculator that determines how much security deposit a tenant should receive back and the landlord's legal return deadline by Canadian province.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  provider: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
  featureList: [
    "Deposit return amount calculation",
    "Province-specific return deadlines (7–21 days)",
    "Wear-and-tear deduction warnings",
    "Landlord overcharge detection",
  ],
};

export default function DepositCalculatorPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tools", href: "https://leaseplain.com/tools" },
        { name: "Deposit Calculator", href: "https://leaseplain.com/tools/deposit-calculator" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <DepositCalculatorClient />
    </>
  );
}
