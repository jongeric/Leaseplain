import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Initialize Cloudflare bindings (D1, R2, KV) in local dev via `next dev`
if (process.env.NODE_ENV === "development") {
  initOpenNextCloudflareForDev();
}

const nextConfig: NextConfig = {
  // 301s for old/removed URLs that Google still has indexed (from GSC 404 report).
  // Recovers link equity and clears the "Not found (404)" coverage errors.
  async redirects() {
    const toProvinceHub = (slug: string) => ({
      source: `/tenant-rights/${slug}`,
      destination: `/canada/${slug}`,
      permanent: true,
    });
    const cityToProvince = (province: string, city: string) => ({
      source: `/canada/${province}/${city}`,
      destination: `/canada/${province}`,
      permanent: true,
    });
    return [
      { source: "/how-to-read-a-lease", destination: "/resources/how-to-read-a-lease", permanent: true },
      // tenant-rights/<province> pages were never built; content lives at /canada/<province>
      toProvinceHub("manitoba"),
      toProvinceHub("nova-scotia"),
      toProvinceHub("saskatchewan"),
      toProvinceHub("new-brunswick"),
      toProvinceHub("newfoundland-and-labrador"),
      // province city pages that don't exist -> their province hub
      cityToProvince("manitoba", "winnipeg"),
      cityToProvince("new-brunswick", "fredericton"),
      cityToProvince("new-brunswick", "moncton"),
      cityToProvince("new-brunswick", "saint-john"),
      cityToProvince("nova-scotia", "halifax"),
      cityToProvince("saskatchewan", "regina"),
    ];
  },
  // Required for Cloudflare Pages deployment via OpenNext
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=604800, stale-while-revalidate=86400",
          },
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
