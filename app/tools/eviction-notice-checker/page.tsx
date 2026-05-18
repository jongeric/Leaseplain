import type { Metadata } from "next";
import EvictionNoticeClient from "./EvictionNoticeClient";

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <EvictionNoticeClient />
    </>
  );
}
