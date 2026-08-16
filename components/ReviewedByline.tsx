import Link from "next/link";
import { ShieldCheck } from "lucide-react";

// Visible E-E-A-T byline. Points at the documented editorial process rather
// than a named individual — honest transparency, not a fabricated credential.
export default function ReviewedByline({
  updated,
  jurisdiction = "Ontario's Residential Tenancies Act",
}: {
  updated: string;
  jurisdiction?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 border border-slate-100 bg-slate-50 rounded-xl px-4 py-3">
      <ShieldCheck className="w-4 h-4 text-green-600 flex-shrink-0" aria-hidden="true" />
      <span>
        By the{" "}
        <Link href="/about" className="font-medium text-slate-700 hover:underline">LeasePlain Editorial Team</Link>
        {" "}· Checked against {jurisdiction} per our{" "}
        <Link href="/editorial-policy" className="font-medium text-slate-700 hover:underline">editorial standards</Link>
      </span>
      <span className="text-slate-300">·</span>
      <span>Last reviewed {updated}</span>
    </div>
  );
}
