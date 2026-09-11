import { BLOG_POSTS } from "@/lib/blogPosts";

// Static RSS 2.0 feed of the blog, generated at build time. Helps search
// engines discover new posts quickly and lets readers/aggregators subscribe.
export const dynamic = "force-static";

const BASE = "https://leaseplain.com";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = BLOG_POSTS.map((p) => {
    const url = `${BASE}${p.href}`;
    const pub = new Date(p.date);
    const pubDate = isNaN(pub.getTime()) ? new Date().toUTCString() : pub.toUTCString();
    return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <category>${escapeXml(p.category)}</category>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(p.excerpt)}</description>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>LeasePlain Blog — Canadian Tenant Rights</title>
    <link>${BASE}/blog</link>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Plain-English guides to tenant rights, rent increases, evictions, deposits, and leases across Canada.</description>
    <language>en-ca</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
