import type { Metadata } from "next";
import NoticePeriodClient from "./NoticePeriodClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Calculate the Required Notice Period",
  "description": "How to determine the legally required notice period for rent increases, evictions, entry, and tenancy terminations in your Canadian province.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Select your province", "text": "Notice periods vary significantly by province. Choose the province where your rental unit is located." },
    { "@type": "HowToStep", "position": 2, "name": "Select the notice type", "text": "Choose whether you need a rent increase notice, landlord entry notice, tenant termination notice, landlord termination notice, or eviction notice." },
    { "@type": "HowToStep", "position": 3, "name": "Read the required period and legal basis", "text": "The calculator shows the exact required notice period, the specific legislation that mandates it, and the official form required." },
    { "@type": "HowToStep", "position": 4, "name": "Count from today's date", "text": "The notice period begins on the day the written notice is delivered, not the day it is sent. Factor in delivery time if mailing." },
  ],
};

export default function NoticePeriodCalculatorPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tools", href: "https://leaseplain.com/tools" },
        { name: "Notice Period Calculator", href: "https://leaseplain.com/tools/notice-period-calculator" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, "\u003c") }} />
      <NoticePeriodClient />
    </>
  );
}
