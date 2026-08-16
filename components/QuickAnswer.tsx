import { Zap } from "lucide-react";

// A "quick answer" / TL;DR box for the top of a guide. Front-loads the direct
// answer for readers who skim and for AI answer engines / featured snippets.
export default function QuickAnswer({ children, label = "Quick answer" }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="rounded-2xl border-l-4 border-brand bg-brand-soft/60 p-5">
      <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand mb-1.5">
        <Zap className="w-3.5 h-3.5" aria-hidden="true" /> {label}
      </p>
      <div className="text-ink leading-relaxed [&_a]:text-brand [&_a]:underline">{children}</div>
    </div>
  );
}
