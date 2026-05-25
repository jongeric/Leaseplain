interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  keywords?: string[];
  imageUrl?: string;
}

export default function ArticleSchema({
  headline,
  description,
  url,
  datePublished = "2025-01-01",
  dateModified = "2026-05-15",
  keywords = [],
  imageUrl = "https://leaseplain.com/opengraph-image",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    datePublished,
    dateModified,
    keywords: keywords.join(", "),
    image: { "@type": "ImageObject", url: imageUrl, width: 1200, height: 630 },
    author: {
      "@type": "Organization",
      name: "LeasePlain Editorial Team",
      url: "https://leaseplain.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "LeasePlain",
      url: "https://leaseplain.com",
      logo: { "@type": "ImageObject", url: "https://leaseplain.com/opengraph-image" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    isPartOf: { "@type": "WebSite", name: "LeasePlain", url: "https://leaseplain.com" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
