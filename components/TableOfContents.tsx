"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface Heading {
  id: string;
  text: string;
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 60);
}

// Auto-generates an "On this page" list from the article's <h2> headings.
// Assigns ids to headings that don't have them, and highlights the section in
// view. Improves navigation (UX) and gives crawlers/AI a clear outline (AEO).
export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("main h2")) as HTMLHeadingElement[];
    const hs: Heading[] = [];
    const seen = new Set<string>();
    for (const node of nodes) {
      const text = (node.textContent ?? "").trim();
      if (!text) continue;
      let id = node.id || slugify(text);
      while (seen.has(id)) id += "-x";
      seen.add(id);
      if (!node.id) node.id = id;
      node.style.scrollMarginTop = "90px";
      hs.push({ id, text });
    }
    setHeadings(hs);

    if (hs.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActiveId((e.target as HTMLElement).id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  if (headings.length < 3) return null; // not worth it for short pages

  return (
    <nav aria-label="On this page" className="rounded-2xl border border-line bg-surface-2 p-5">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-subtle mb-3">
        <List className="w-3.5 h-3.5" aria-hidden="true" /> On this page
      </p>
      <ul className="flex flex-col gap-1.5">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block text-sm leading-snug transition-colors ${
                activeId === h.id ? "text-brand font-semibold" : "text-muted hover:text-ink"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
