import type { Metadata } from "next";
import RentIncreaseDateClient from "./RentIncreaseDateClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "When Can My Landlord Raise My Rent? Date Calculator | LeasePlain",
  description:
    "Find the earliest date your landlord can legally raise your rent in Canada — and the deadline for their notice — based on your move-in date and province. Free tool for Ontario, BC, Alberta, Quebec, and more.",
  alternates: { canonical: "https://leaseplain.com/tools/rent-increase-date-calculator" },
  openGraph: {
    title: "When Can My Landlord Raise My Rent? Date Calculator | LeasePlain",
    description:
      "The earliest legal rent-increase date and notice deadline, by province, from your move-in or last increase.",
    url: "https://leaseplain.com/tools/rent-increase-date-calculator",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Find When Your Rent Can Be Increased",
  description: "Use LeasePlain's calculator to find the earliest date your rent can legally rise and your landlord's notice deadline.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Enter your date", text: "Enter your move-in date or the date of your last rent increase." },
    { "@type": "HowToStep", position: 2, name: "Select your province", text: "Choose your province so the correct notice period and rules apply." },
    { "@type": "HowToStep", position: 3, name: "View the dates", text: "See the earliest legal increase date and the deadline for your landlord's written notice." },
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Rent Increase Date Calculator",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  url: "https://leaseplain.com/tools/rent-increase-date-calculator",
  description:
    "Free calculator that finds the earliest date a landlord can legally raise rent and the required notice deadline, by Canadian province.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  provider: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
  featureList: [
    "Earliest legal rent-increase date",
    "Landlord notice deadline by province",
    "Once-per-12-months rule",
    "Province-specific notice periods",
  ],
};

export default function RentIncreaseDateCalculatorPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tools", href: "https://leaseplain.com/tools" },
        { name: "Rent Increase Date Calculator", href: "https://leaseplain.com/tools/rent-increase-date-calculator" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, "\\u003c") }} />
      <RentIncreaseDateClient />
    </>
  );
}
