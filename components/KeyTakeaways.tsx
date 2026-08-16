import { CheckCircle2 } from "lucide-react";

// "Key takeaways" summary box — scannable bullet points. Good for readers who
// skim and strong for AI answer extraction.
export default function KeyTakeaways({ items, title = "Key takeaways" }: { items: string[]; title?: string }) {
  if (!items?.length) return null;
  return (
    <div className="rounded-2xl border border-line bg-surface-2 p-6">
      <h2 className="text-base font-bold text-ink mb-4">{title}</h2>
      <ul className="flex flex-col gap-2.5">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
            <CheckCircle2 className="w-4.5 h-4.5 text-brand flex-shrink-0 mt-0.5" aria-hidden="true" style={{ width: "1.05rem", height: "1.05rem" }} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
