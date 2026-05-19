import type { Metadata } from "next";
import LandlordQuizClient from "./LandlordQuizClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Is My Landlord Allowed To Do This? | LeasePlain",
  description:
    "Find out instantly whether your landlord is legally allowed to do something. Select your scenario and province to get a clear Yes, No, or Depends answer with an explanation.",
  alternates: { canonical: "https://leaseplain.com/tools/landlord-quiz" },
  openGraph: {
    title: "Is My Landlord Allowed To Do This? | LeasePlain",
    description:
      "Quick reference quiz covering 12 common landlord actions across all Canadian provinces — with clear Yes / No / Depends answers and what to do next.",
    url: "https://leaseplain.com/tools/landlord-quiz",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Is My Landlord Allowed To Do This? Quiz",
  applicationCategory: "LegalApplication",
  operatingSystem: "Web",
  url: "https://leaseplain.com/tools/landlord-quiz",
  description:
    "Free interactive quiz covering 12 common landlord actions across all 10 Canadian provinces. Returns a clear Yes, No, or Depends verdict with explanations and next steps.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  provider: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
  featureList: [
    "12 common landlord-tenant scenarios",
    "Province-specific answers for all 10 Canadian provinces",
    "Clear Yes / No / Depends verdict with explanation and next steps",
  ],
};

export default function LandlordQuizPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tools", href: "https://leaseplain.com/tools" },
        { name: "Landlord Quiz", href: "https://leaseplain.com/tools/landlord-quiz" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandlordQuizClient />
    </>
  );
}
