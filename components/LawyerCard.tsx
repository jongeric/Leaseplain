import { Star, BadgeCheck, ExternalLink, MapPin } from "lucide-react";
import type { DirectoryListing } from "@/lib/legalHelp";
import { DIRECTORY_CITIES } from "@/lib/legalHelp";

const cityName = (slug: string) => DIRECTORY_CITIES.find((c) => c.slug === slug)?.name ?? slug;

export default function LawyerCard({ listing }: { listing: DirectoryListing }) {
  return (
    <div className={`rounded-2xl p-6 shadow-sm ${listing.featured ? "border-2 border-brand bg-card" : "border border-line bg-card"}`}>
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <h3 className="font-bold text-ink">{listing.name}</h3>
          <p className="text-xs font-medium text-muted">{listing.role}</p>
        </div>
        {listing.featured ? (
          <span className="inline-flex items-center gap-1 bg-brand text-brand-fg text-[11px] font-bold px-2 py-0.5 rounded-full flex-shrink-0">
            <Star className="w-3 h-3" aria-hidden="true" /> Featured
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand flex-shrink-0">
            <BadgeCheck className="w-3.5 h-3.5" aria-hidden="true" /> Verified
          </span>
        )}
      </div>
      <p className="text-sm text-muted leading-relaxed mb-3">{listing.blurb}</p>
      <div className="flex flex-wrap items-center gap-1.5 mb-4">
        {listing.cities.map((c) => (
          <span key={c} className="inline-flex items-center gap-1 text-[11px] text-subtle bg-surface-2 border border-line rounded-full px-2 py-0.5">
            <MapPin className="w-3 h-3" aria-hidden="true" /> {cityName(c)}
          </span>
        ))}
      </div>
      {listing.contactUrl && (
        <a
          href={listing.contactUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
        >
          Contact <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
