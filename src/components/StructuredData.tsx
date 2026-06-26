import { absoluteUrl, seo, siteUrl } from "@/lib/seo";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Louise Raw",
    url: siteUrl,
    image: absoluteUrl(seo.portraitImage),
    jobTitle: [
      "Commercial Lead",
      "Founder-side Commercial Operator",
      "Growth Systems Partner",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Amsterdam",
      addressCountry: "NL",
    },
    knowsAbout: [
      "Commercial strategy",
      "Go-to-market strategy",
      "Sales and marketing alignment",
      "CRM architecture",
      "Revenue operations",
      "Retention strategy",
      "Customer experience",
      "B2B SaaS",
      "Startup growth",
      "Brand positioning",
      "Marketing automation",
      "Commercial reporting",
    ],
    description:
      "Amsterdam-based commercial lead helping founder-led companies diagnose and fix the commercial systems behind growth.",
    // Replace this placeholder once Louise's public LinkedIn URL is confirmed.
    sameAs: [seo.linkedInUrl],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seo.siteName,
    url: siteUrl,
    description: seo.description,
    inLanguage: "en-GB",
  },
];

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
