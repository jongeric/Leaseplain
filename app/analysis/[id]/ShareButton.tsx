"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

export default function ShareButton({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = `${window.location.origin}/analysis/${id}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "My Lease Analysis — LeasePlain", url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={share}
      className="flex-1 text-center flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold py-3 rounded-xl hover:bg-slate-50 transition-colors text-sm"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-600" />
          Link Copied!
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          Share Report
        </>
      )}
    </button>
  );
}
