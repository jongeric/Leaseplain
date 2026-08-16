"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, X, CornerDownLeft } from "lucide-react";
import { searchDocs, type SearchDoc, type SearchType } from "@/lib/searchIndex";

const TYPE_ORDER: SearchType[] = ["Answer", "LTB form", "Guide", "Tool", "Letter", "Checklist", "Legal help", "Glossary", "Page"];

const TYPE_STYLE: Record<SearchType, string> = {
  Answer: "bg-indigo-100 text-indigo-700",
  Guide: "bg-blue-100 text-blue-700",
  Tool: "bg-emerald-100 text-emerald-700",
  Letter: "bg-amber-100 text-amber-700",
  Checklist: "bg-teal-100 text-teal-700",
  "Legal help": "bg-violet-100 text-violet-700",
  "LTB form": "bg-rose-100 text-rose-700",
  Glossary: "bg-slate-100 text-slate-600",
  Page: "bg-slate-100 text-slate-600",
};

export default function SiteSearch({ variant = "bar" }: { variant?: "bar" | "icon" }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = useMemo(() => searchDocs(q), [q]);
  const flat = results; // already ranked & flat; we group only for display

  // Global ⌘K / Ctrl+K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 20);
      document.body.style.overflow = "hidden";
    } else {
      setQ("");
      setActive(0);
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => setActive(0), [q]);

  const go = useCallback((doc: SearchDoc) => {
    setOpen(false);
    router.push(doc.url);
  }, [router]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, flat.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === "Enter" && flat[active]) { e.preventDefault(); go(flat[active]); }
    else if (e.key === "Escape") { setOpen(false); }
  };

  // Group results by type in display order, preserving rank within group.
  const grouped = useMemo(() => {
    const map = new Map<SearchType, SearchDoc[]>();
    for (const d of flat) { (map.get(d.type) ?? map.set(d.type, []).get(d.type)!).push(d); }
    return TYPE_ORDER.filter((t) => map.has(t)).map((t) => ({ type: t, docs: map.get(t)! }));
  }, [flat]);

  // Index within the flat list, for keyboard highlighting
  const indexOf = (doc: SearchDoc) => flat.indexOf(doc);

  return (
    <>
      {variant === "bar" ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 w-full max-w-56 rounded-lg border border-line bg-surface-2 px-3 py-2 text-sm text-subtle hover:border-brand/40 transition-colors"
          aria-label="Search the site"
        >
          <Search className="w-4 h-4" aria-hidden="true" />
          <span className="flex-1 text-left">Search…</span>
          <kbd className="hidden sm:inline text-[10px] font-semibold border border-line rounded px-1.5 py-0.5 text-subtle">⌘K</kbd>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-line text-muted hover:text-ink hover:bg-surface-3 transition-colors"
          aria-label="Search the site"
        >
          <Search className="w-[18px] h-[18px]" aria-hidden="true" />
        </button>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:pt-24 bg-slate-900/40 backdrop-blur-sm"
          onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="w-full max-w-xl rounded-2xl bg-card border border-line shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-4 border-b border-line">
              <Search className="w-5 h-5 text-subtle flex-shrink-0" aria-hidden="true" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search guides, answers, tools, lawyers…"
                className="flex-1 py-4 bg-transparent text-ink placeholder:text-subtle outline-none text-[15px]"
                aria-label="Search"
              />
              <button type="button" onClick={() => setOpen(false)} className="p-1.5 text-subtle hover:text-ink" aria-label="Close search">
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
              {q && flat.length === 0 && (
                <p className="px-4 py-10 text-center text-sm text-muted">No results for &ldquo;{q}&rdquo;.</p>
              )}
              {!q && (
                <p className="px-4 py-8 text-center text-sm text-subtle">
                  Try &ldquo;rent increase&rdquo;, &ldquo;N12&rdquo;, &ldquo;deposit&rdquo;, or &ldquo;lawyer&rdquo;.
                </p>
              )}
              {grouped.map((group) => (
                <div key={group.type} className="py-2">
                  <p className="px-4 py-1 text-[11px] font-bold uppercase tracking-wide text-subtle">{group.type}</p>
                  {group.docs.map((doc) => {
                    const i = indexOf(doc);
                    const isActive = i === active;
                    return (
                      <button
                        key={doc.url}
                        type="button"
                        onMouseEnter={() => setActive(i)}
                        onClick={() => go(doc)}
                        className={`w-full text-left px-4 py-2.5 flex items-start gap-3 ${isActive ? "bg-brand-soft" : ""}`}
                      >
                        <span className={`mt-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded ${TYPE_STYLE[doc.type]}`}>{doc.type}</span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium text-ink truncate">{doc.title}</span>
                          {doc.description && <span className="block text-xs text-muted line-clamp-1">{doc.description}</span>}
                        </span>
                        {isActive && <CornerDownLeft className="w-3.5 h-3.5 text-subtle flex-shrink-0 mt-1" aria-hidden="true" />}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
