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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Find Out If Your Landlord's Action Is Legal",
  "description": "Use LeasePlain's 'Is My Landlord Allowed to Do This?' quiz to get a clear Yes, No, or Depends answer about a specific landlord action in your province.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Pick a scenario", "text": "Choose the situation closest to what your landlord did or is asking to do — such as entering without notice, withholding your deposit, or raising rent." },
    { "@type": "HowToStep", "position": 2, "name": "Select your province", "text": "Choose your province so the quiz can apply the correct provincial tenancy rules to your scenario." },
    { "@type": "HowToStep", "position": 3, "name": "Get your answer", "text": "Receive a clear Yes, No, or Depends answer along with a plain-English explanation of the relevant law and what you can do next." }
  ],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, "\u003c") }} />
      <LandlordQuizClient />
    </>
  );
}
