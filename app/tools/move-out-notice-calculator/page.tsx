import type { Metadata } from "next";
import MoveOutNoticeClient from "./MoveOutNoticeClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Move-Out Notice Date Calculator (Canada) | LeasePlain",
  description:
    "Find the last day you can give proper written notice to move out of a month-to-month rental, based on your target move-out date and province. Free tool for Ontario, BC, Alberta, and every province.",
  alternates: { canonical: "https://leaseplain.com/tools/move-out-notice-calculator" },
  openGraph: {
    title: "Move-Out Notice Date Calculator (Canada) | LeasePlain",
    description:
      "The last day to give notice to end a month-to-month tenancy, by province, from your target move-out date.",
    url: "https://leaseplain.com/tools/move-out-notice-calculator",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Find Your Move-Out Notice Deadline",
  description: "Use LeasePlain's calculator to find the last day to give written notice to end a month-to-month tenancy.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Enter your move-out date", text: "Enter the date you want your tenancy to end." },
    { "@type": "HowToStep", position: 2, name: "Select your province", text: "Choose your province so the correct notice period applies." },
    { "@type": "HowToStep", position: 3, name: "View the deadline", text: "See the last day you can give proper written notice." },
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Move-Out Notice Date Calculator",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  url: "https://leaseplain.com/tools/move-out-notice-calculator",
  description:
    "Free calculator that finds the last day a tenant can give written notice to end a month-to-month tenancy, by Canadian province.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  provider: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
  featureList: [
    "Notice deadline from your move-out date",
    "Province-specific notice periods",
    "End-of-rental-period guidance",
    "Links to a ready-to-send notice letter",
  ],
};

export default function MoveOutNoticeCalculatorPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tools", href: "https://leaseplain.com/tools" },
        { name: "Move-Out Notice Calculator", href: "https://leaseplain.com/tools/move-out-notice-calculator" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, "\\u003c") }} />
      <MoveOutNoticeClient />
    </>
  );
}
