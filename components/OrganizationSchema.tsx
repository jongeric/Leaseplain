export default function OrganizationSchema() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://leaseplain.com/#organization",
      name: "LeasePlain",
      url: "https://leaseplain.com",
      logo: {
        "@type": "ImageObject",
        url: "https://leaseplain.com/logo.png",
        width: 200,
        height: 60,
      },
      description:
        "LeasePlain is an AI-powered lease analysis tool that translates complex rental agreements into plain English, helping tenants understand what they're signing.",
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: "https://leaseplain.com/contact",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://leaseplain.com/#website",
      url: "https://leaseplain.com",
      name: "LeasePlain",
      description: "AI-powered plain-English lease analysis for tenants",
      publisher: {
        "@id": "https://leaseplain.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://leaseplain.com/glossary?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "LeasePlain",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://leaseplain.com",
      description:
        "Upload your residential lease and receive a plain-English analysis highlighting key clauses, financial terms, red flags, and tenant rights considerations.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free lease analysis",
      },
      publisher: {
        "@id": "https://leaseplain.com/#organization",
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
