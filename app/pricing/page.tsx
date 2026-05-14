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
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
