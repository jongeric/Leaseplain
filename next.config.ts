import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Initialize Cloudflare bindings (D1, R2, KV) in local dev via `next dev`
if (process.env.NODE_ENV === "development") {
  initOpenNextCloudflareForDev();
}

const nextConfig: NextConfig = {
  // Required for Cloudflare Pages deployment via OpenNext
  serverExternalPackages: ["pdf-parse"],
};

export default nextConfig;
