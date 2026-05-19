import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Pricing | LeasePlain – Free & Pro Lease Analysis Plans",
  description:
    "LeasePlain is free to start. Upgrade to Pro for unlimited analyses, full financial terms, and saved reports. Simple, transparent pricing for every renter.",
  alternates: { canonical: "https://leaseplain.com/pricing" },
  openGraph: {
    title: "Pricing | LeasePlain",
    description:
      "Start free. Upgrade to Pro for unlimited lease analyses and full reports. Cancel anytime.",
    url: "https://leaseplain.com/pricing",
    type: "website",
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "LeasePlain Lease Analyzer",
  "description": "AI-powered residential lease analysis tool for Canadian renters.",
  "url": "https://leaseplain.com/pricing",
  "brand": { "@type": "Organization", "name": "LeasePlain" },
  "offers": [
    {
      "@type": "Offer",
      "name": "Free Plan",
      "price": "0",
      "priceCurrency": "CAD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "0",
        "priceCurrency": "CAD",
        "billingDuration": "P1M",
      },
      "availability": "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      "name": "Pro Plan",
      "price": "9",
      "priceCurrency": "CAD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "9",
        "priceCurrency": "CAD",
        "billingDuration": "P1M",
      },
      "availability": "https://schema.org/InStock",
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema).replace(/</g, "\\u003c") }}
      />
      <PricingClient />
    </>
  );
}
