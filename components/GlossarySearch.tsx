"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

type Term = { slug: string; term: string; category: string };

export default function GlossarySearch({ terms }: { terms: Term[] }) {
  // Initialize from ?q= so the WebSite SearchAction (sitelinks search box)
  // lands users on real, filtered results.
  const initial =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("q") ?? ""
      : "";
  const [query, setQuery] = useState(initial);

  const q = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!q) return [];
    return terms.filter(
      (t) => t.term.toLowerCase().includes(q) || t.category.toLowerCase().includes(q),
    );
  }, [q, terms]);

  return (
    <section aria-label="Search lease terms">
      <label htmlFor="glossary-search" className="sr-only">
        Search lease terms
      </label>
      <div className="relative">
        <Search
          className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"
          aria-hidden="true"
        />
        <input
          id="glossary-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a lease term (e.g. deposit, guarantor, subletting)…"
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      {q && (
        <div className="mt-3 rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
          {results.length === 0 ? (
            <p className="px-2 py-2 text-sm text-slate-500">
              No terms match &ldquo;{query}&rdquo;. Browse the full glossary below.
            </p>
          ) : (
            <ul className="divide-y divide-slate-50">
              {results.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/glossary/${t.slug}`}
                    className="flex items-center justify-between px-2 py-2.5 text-sm hover:bg-indigo-50/40 rounded-lg"
                  >
                    <span className="font-medium text-slate-900">{t.term}</span>
                    <span className="text-xs text-slate-400">{t.category}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}
