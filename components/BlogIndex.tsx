"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Tag, Calendar } from "lucide-react";
import type { BlogPost } from "@/lib/blogPosts";

const CATEGORY_DOT: Record<string, string> = {
  Ontario: "bg-blue-500",
  "British Columbia": "bg-emerald-500",
  Canada: "bg-slate-400",
  "Lease Tips": "bg-amber-500",
};

export default function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const categories = useMemo(() => ["All", ...Array.from(new Set(posts.map((p) => p.category)))], [posts]);
  const [active, setActive] = useState("All");

  const [featured, ...rest] = posts;
  const filtered = active === "All" ? rest : rest.filter((p) => p.category === active);
  // If a filter is active, also consider the featured post part of the grid.
  const grid = active === "All" ? rest : posts.filter((p) => p.category === active);
  const showFeatured = active === "All";

  return (
    <div className="space-y-10">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors border ${
              active === c
                ? "bg-brand text-brand-fg border-brand"
                : "bg-card text-muted border-line hover:border-brand hover:text-ink"
            }`}
          >
            {c !== "All" && <span className={`w-2 h-2 rounded-full ${CATEGORY_DOT[c] ?? "bg-slate-400"}`} />}
            {c}
          </button>
        ))}
      </div>

      {/* Featured post */}
      {showFeatured && featured && (
        <Link
          href={featured.href}
          className="group block rounded-3xl border border-line bg-card overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand">
                  <span className={`w-2 h-2 rounded-full ${CATEGORY_DOT[featured.category] ?? "bg-slate-400"}`} />
                  Latest · {featured.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-subtle">
                  <Calendar className="w-3 h-3" aria-hidden="true" /> {featured.date}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink leading-tight mb-3 group-hover:text-brand transition-colors">
                {featured.title}
              </h2>
              <p className="text-muted leading-relaxed mb-5 line-clamp-3">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Read the guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </div>
            <div className="relative hidden md:block bg-gradient-to-br from-indigo-600 to-violet-800 min-h-[260px]">
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <Tag className="w-20 h-20 text-white/20" aria-hidden="true" />
              </div>
              <span className="absolute bottom-6 left-6 text-white/80 text-sm font-semibold">Featured guide</span>
            </div>
          </div>
        </Link>
      )}

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {grid.map((post) => (
          <article
            key={post.href}
            className="group rounded-2xl border border-line bg-card p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col gap-3"
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted">
                <span className={`w-2 h-2 rounded-full ${CATEGORY_DOT[post.category] ?? "bg-slate-400"}`} />
                {post.category}
              </span>
              <span className="text-subtle">·</span>
              <span className="text-[11px] text-subtle">{post.date}</span>
            </div>
            <h3 className="text-base font-bold text-ink leading-snug">
              <Link href={post.href} className="group-hover:text-brand transition-colors">
                {post.title}
              </Link>
            </h3>
            <p className="text-sm text-muted leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
            <Link href={post.href} className="inline-flex items-center gap-1 text-sm font-semibold text-brand mt-auto">
              Read more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>

      {filtered.length === 0 && active !== "All" && (
        <p className="text-center text-muted py-8">No posts in {active} yet.</p>
      )}
    </div>
  );
}
