import type { Metadata } from "next";
import UploadClient from "./UploadClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Analyze Your Lease | LeasePlain",
  description:
    "Upload your residential lease PDF or paste the text. LeasePlain's AI translates it into plain English — highlighting red flags, financial terms, and questions to ask your landlord.",
  alternates: { canonical: "https://leaseplain.com/upload" },
  openGraph: {
    title: "Analyze Your Lease | LeasePlain",
    description:
      "Get a plain-English breakdown of your lease in seconds. Upload a PDF or paste text — free, no account required.",
    url: "https://leaseplain.com/upload",
  },
};

export default function UploadPage() {
  return <UploadClient />;
}
