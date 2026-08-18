"use client";

import { useEffect, useState } from "react";

// Thin scroll-progress bar fixed under the sticky navbar. Modern reading cue
// that also signals article length. Respects reduced-motion via CSS.
export default function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setPct(max > 0 ? Math.min(100, (el.scrollTop / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed top-16 left-0 right-0 z-40 h-1 bg-transparent pointer-events-none" aria-hidden="true">
      <div className="h-full bg-brand transition-[width] duration-75 ease-linear" style={{ width: `${pct}%` }} />
    </div>
  );
}
