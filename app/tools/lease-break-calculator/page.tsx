import type { Metadata } from "next";
import LeaseBreakClient from "./LeaseBreakClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Lease Break Cost Estimator Canada | LeasePlain",
  description:
    "Estimate your cost exposure when breaking a lease early in Canada. See province-specific rules, landlord duty to mitigate, and action steps for Ontario, BC, Alberta, and all provinces.",
  alternates: { canonical: "https://leaseplain.com/tools/lease-break-calculator" },
  openGraph: {
    title: "Lease Break Cost Estimator Canada | LeasePlain",
    description:
      "How much will it cost to break your lease? Enter your province, rent, and months remaining to see your estimated exposure and province-specific rules.",
    url: "https://leaseplain.com/tools/lease-break-calculator",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Canada Lease Break Cost Estimator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://leaseplain.com/tools/lease-break-calculator",
  description:
    "Free tool that estimates the cost of breaking a lease early in any Canadian province, including landlord duty to mitigate and province-specific action steps.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  provider: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
  featureList: [
    "Province-specific lease break rules for all 10 Canadian provinces",
    "Maximum theoretical and realistic cost exposure estimates",
    "Landlord duty to mitigate explained by province",
    "Step-by-step action guidance",
  ],
};

export default function LeaseBreakCalculatorPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tools", href: "https://leaseplain.com/tools" },
        { name: "Lease Break Calculator", href: "https://leaseplain.com/tools/lease-break-calculator" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\u003c") }} />
      <LeaseBreakClient />
    </>
  );
}
