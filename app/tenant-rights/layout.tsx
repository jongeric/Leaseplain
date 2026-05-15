import { headers } from "next/headers";
import ArticleSchema from "@/components/ArticleSchema";

export default async function TenantRightsLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const host = headersList.get("host") ?? "leaseplain.com";
  const pathname = headersList.get("x-invoke-path") ?? headersList.get("next-url") ?? "";
  const url = `https://${host}${pathname}`;

  return (
    <>
      <ArticleSchema
        headline="Tenant Rights in Canada | LeasePlain"
        description="Plain-English guides to tenant rights across Canadian provinces — Ontario, BC, Alberta, Quebec, and more."
        url={url || "https://leaseplain.com/tenant-rights"}
        datePublished="2025-01-01"
        dateModified="2026-05-15"
        keywords={["tenant rights Canada", "Ontario tenant rights", "BC tenant rights", "renter rights", "residential tenancies"]}
      />
      {children}
    </>
  );
}
