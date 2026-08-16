"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable — theme still applies for this session */
    }
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border border-line text-muted hover:text-ink hover:bg-surface-3 transition-colors ${className}`}
    >
      {/* Render both to avoid layout shift; visibility swaps with the theme. */}
      <Sun className="w-[18px] h-[18px] hidden dark:block" aria-hidden="true" />
      <Moon className="w-[18px] h-[18px] block dark:hidden" aria-hidden="true" />
    </button>
  );
}
