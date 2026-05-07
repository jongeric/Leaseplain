import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CTASectionProps {
  heading: string;
  subheading: string;
  variant?: "indigo" | "dark";
}

export default function CTASection({
  heading,
  subheading,
  variant = "indigo",
}: CTASectionProps) {
  if (variant === "dark") {
    return (
      <section className="bg-[#0a1628] text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">{heading}</h2>
          <p className="text-slate-300 mb-8 text-lg">{subheading}</p>
          <Link
            href="/upload"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
          >
            Analyze My Lease Free
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-indigo-600 py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-4">{heading}</h2>
        <p className="text-indigo-100 mb-8 text-lg">{subheading}</p>
        <Link
          href="/upload"
          className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-indigo-50 transition-colors"
        >
          Analyze My Lease Free
          <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
