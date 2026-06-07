import type { Metadata } from "next";
import EvictionNoticeClient from "./EvictionNoticeClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Eviction Notice Validity Checker Canada | LeasePlain",
  description:
    "Check if an eviction notice in Canada is valid. Enter your province, notice type, and days of notice to instantly see if the notice period meets legal requirements.",
  alternates: { canonical: "https://leaseplain.com/tools/eviction-notice-checker" },
  openGraph: {
    title: "Eviction Notice Validity Checker Canada | LeasePlain",
    description:
      "Is your eviction notice legally valid? Check Ontario N4/N12 notices, BC notices, Alberta notices, and more — instantly and for free.",
    url: "https://leaseplain.com/tools/eviction-notice-checker",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Check If an Eviction Notice Is Valid",
  "description": "Use LeasePlain's Eviction Notice Validity Checker to find out whether an eviction notice you received follows the legal requirements for your province.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Select your province", "text": "Choose your province so the checker can apply the correct eviction notice rules and required forms." },
    { "@type": "HowToStep", "position": 2, "name": "Select the notice type", "text": "Pick the type of eviction notice you received, such as for non-payment of rent, landlord's own use, or property sale." },
    { "@type": "HowToStep", "position": 3, "name": "Enter the number of days given", "text": "Type in how many days of notice your landlord provided so the checker can compare it to the legal minimum." },
    { "@type": "HowToStep", "position": 4, "name": "View the validity result", "text": "See whether the notice meets the legal requirements, what to do next, and where to dispute an invalid notice." }
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Canada Eviction Notice Validity Checker",
  applicationCategory: "LegalApplication",
  operatingSystem: "Web",
  url: "https://leaseplain.com/tools/eviction-notice-checker",
  description:
    "Free tool that checks whether an eviction notice in any Canadian province meets the legally required notice period, with guidance on what to do next.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  provider: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
  featureList: [
    "Notice validity check for Ontario, BC, and Alberta",
    "Province-specific notice type library",
    "Required vs. given days comparison",
    "Guidance on disputing invalid notices",
  ],
};

export default function EvictionNoticeCheckerPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Tools", href: "https://leaseplain.com/tools" },
        { name: "Eviction Notice Checker", href: "https://leaseplain.com/tools/eviction-notice-checker" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, "\u003c") }} />
      <EvictionNoticeClient />
    </>
  );
}
