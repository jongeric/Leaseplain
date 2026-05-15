import { headers } from "next/headers";
import ArticleSchema from "@/components/ArticleSchema";

export default async function ResourcesLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const host = headersList.get("host") ?? "leaseplain.com";
  const pathname = headersList.get("x-invoke-path") ?? headersList.get("next-url") ?? "";
  const url = `https://${host}${pathname}`;

  return (
    <>
      <ArticleSchema
        headline="Tenant Resources | LeasePlain"
        description="Plain-English guides for Canadian renters — lease red flags, hidden fees, tenant rights, and more."
        url={url || "https://leaseplain.com/resources"}
        datePublished="2025-01-01"
        dateModified="2026-05-15"
        keywords={["lease guide", "tenant rights", "rental agreement Canada", "lease red flags"]}
      />
      {children}
    </>
  );
}
