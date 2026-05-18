import type { Metadata } from "next";
import NoticePeriodClient from "./NoticePeriodClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Notice Period Calculator Canada | LeasePlain",
  description:
    "Find out how much notice is legally required for rent increases, landlord entry, tenant move-out, and evictions in every Canadian province.",
  alternates: { canonical: "https://leaseplain.com/tools/notice-period-calculator" },
  openGraph: {
    title: "Notice Period Calculator Canada | LeasePlain",
    description:
      "Instantly look up required notice periods for any tenancy situation in Ontario, BC, Alberta, Quebec, and all Canadian provinces.",
    url: "https://leaseplain.com/tools/notice-period-calculator",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Canada Notice Period Calculator",
  applicationCategory: "LegalApplication",
  operatingSystem: "Web",
  url: "https://leaseplain.com/tools/notice-period-calculator",
  description:
    "Free tool that shows legally required notice periods for rent increases, landlord entry, tenant move-out, and evictions across all 10 Canadian provinces.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  provider: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
  featureList: [
    "Notice periods for all 10 Canadian provinces",
    "6 notice types: rent increase, entry, tenant ending, landlord ending, eviction",
    "Required forms and legal basis for each notice type",
  ],
};

export default function NoticePeriodCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <NoticePeriodClient />
    </>
  );
}
