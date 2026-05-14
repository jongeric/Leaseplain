import type { Metadata } from "next";
import RentIncreaseClient from "./RentIncreaseClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Rent Increase Calculator Canada 2025 | LeasePlain",
  description:
    "Check if your landlord's rent increase is within the legal limit for your province. Free rent increase calculator for Ontario, BC, Alberta, Quebec, and all Canadian provinces.",
  alternates: { canonical: "https://leaseplain.com/tools/rent-increase-calculator" },
  openGraph: {
    title: "Rent Increase Calculator Canada 2025 | LeasePlain",
    description:
      "Is your rent increase legal? Enter your province and rent amounts to check against 2025 provincial guidelines instantly.",
    url: "https://leaseplain.com/tools/rent-increase-calculator",
  },
};

export default function RentIncreaseCalculatorPage() {
  return <RentIncreaseClient />;
}
