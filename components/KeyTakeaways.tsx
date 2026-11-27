import { Lightbulb, Check } from "lucide-react";

// Scannable answer-first summary box for the top of articles. Distinct from the
// prose intro: 3–5 self-contained bullets that AI assistants and featured
// snippets can lift verbatim. The list carries `speakable-summary` so it's
// included in the page's SpeakableSpecification. Items may contain simple
// inline HTML (e.g. <strong>) and are author-controlled.
export default function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <aside
      aria-label="Key takeaways"
      className="rounded-2xl border border-accent/40 bg-accent-soft p-5 sm:p-6"
    >
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent mb-3">
        <Lightbulb className="w-4 h-4" aria-hidden="true" /> Key Takeaways
      </p>
      <ul className="space-y-2.5 speakable-summary">
        {items.map((t, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-ink leading-relaxed">
            <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
            <span dangerouslySetInnerHTML={{ __html: t }} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
