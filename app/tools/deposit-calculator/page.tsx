import type { Metadata } from "next";
import DepositCalculatorClient from "./DepositCalculatorClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Security Deposit Return Calculator Canada | LeasePlain",
  description:
    "Calculate how much of your security deposit you should get back and your landlord's legal deadline to return it. Free tool for Ontario, BC, Alberta, Quebec, and all Canadian provinces.",
  alternates: { canonical: "https://leaseplain.com/tools/deposit-calculator" },
  openGraph: {
    title: "Security Deposit Return Calculator Canada | LeasePlain",
    description:
      "Find out exactly how much deposit you're owed back and when your landlord must return it — by province.",
    url: "https://leaseplain.com/tools/deposit-calculator",
  },
};

export default function DepositCalculatorPage() {
  return <DepositCalculatorClient />;
}
