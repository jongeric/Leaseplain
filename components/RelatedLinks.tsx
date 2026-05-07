import Link from "next/link";
import { BookOpen, FileText, Scale, HelpCircle } from "lucide-react";

interface LinkItem {
  label: string;
  href: string;
}

interface RelatedLinksProps {
  clauses?: LinkItem[];
  glossary?: LinkItem[];
  rights?: LinkItem[];
  resources?: LinkItem[];
}

export default function RelatedLinks({ clauses, glossary, rights, resources }: RelatedLinksProps) {
  const sections = [
    { title: "Related Lease Clauses", items: clauses, icon: FileText, color: "text-indigo-600" },
    { title: "Glossary Terms", items: glossary, icon: BookOpen, color: "text-blue-600" },
    { title: "Tenant Rights", items: rights, icon: Scale, color: "text-green-600" },
    { title: "Resources", items: resources, icon: HelpCircle, color: "text-amber-600" },
  ].filter((s) => s.items && s.items.length > 0);

  if (sections.length === 0) return null;

  return (
    <section className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
      <h2 className="text-lg font-bold text-slate-900 mb-6">Related Reading</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.title}>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                <Icon className={`w-4 h-4 ${section.color}`} aria-hidden="true" />
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items!.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
