import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import BlogIndex from "@/components/BlogIndex";
import { BLOG_POSTS } from "@/lib/blogPosts";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tenant Rights Blog | Canadian Rental Law Updates | LeasePlain",
  description:
    "Guides, updates, and plain-English explanations of Canadian rental law — rent increase rules, eviction notices, tenant rights by province, and more.",
  alternates: { canonical: "https://leaseplain.com/blog" },
  openGraph: {
    title: "Tenant Rights Blog | Canadian Rental Law Updates | LeasePlain",
    description:
      "Guides, updates, and plain-English explanations of Canadian rental law — rent increase rules, eviction notices, tenant rights by province, and more.",
    url: "https://leaseplain.com/blog",
    type: "website",
  },
};

const posts = BLOG_POSTS;

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Tenant Rights Blog — LeasePlain",
  "url": "https://leaseplain.com/blog",
  "itemListElement": posts.map((post, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": post.title,
    "url": `https://leaseplain.com${post.href}`,
    "description": post.excerpt,
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema).replace(/</g, "<") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://leaseplain.com/blog",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".speakable-summary"]
            }
          }).replace(/</g, "\u003c")
        }}
      />
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Blog", href: "https://leaseplain.com/blog" },
      ]} />
      <Navbar />

      <main>
        <section className="bg-surface-2 border-b border-line py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-brand mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Blog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-ink mb-5 leading-tight">
              Tenant Rights Blog
            </h1>
            <p className="text-lg text-muted max-w-2xl leading-relaxed speakable-summary">
              Plain-English guides, provincial law updates, and practical advice for Canadian
              renters — covering rent increases, eviction rules, deposits, and more.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <BlogIndex posts={posts} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
