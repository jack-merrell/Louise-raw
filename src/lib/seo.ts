export const siteUrl =
  // Set NEXT_PUBLIC_SITE_URL in Vercel once the production domain is final.
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.louiseraw.xyz";

export const seo = {
  siteName: "Louise Raw — Commercial Lead",
  defaultTitle: "Louise Raw — Commercial Lead | Growth Systems & GTM Strategy",
  titleTemplate: "%s | Louise Raw",
  description:
    "Amsterdam-based commercial lead helping founder-led companies fix growth systems across sales, marketing, CRM, retention and customer experience.",
  openGraphTitle: "Louise Raw — Commercial Lead",
  openGraphDescription:
    "I help founder-led companies diagnose and fix the commercial systems behind growth — across sales, marketing, retention, CRM, reporting and customer experience.",
  twitterTitle: "Louise Raw — Commercial Lead",
  twitterDescription:
    "Commercial systems, growth alignment and GTM strategy for founder-led startups and scale-ups.",
  keywords: [
    "Louise Raw",
    "Commercial Lead",
    "Commercial Operator",
    "Founder-side Commercial Operator",
    "Growth Systems",
    "GTM Strategy",
    "Go-to-Market Strategy",
    "Sales and Marketing Alignment",
    "CRM Strategy",
    "CRM Architecture",
    "Revenue Operations",
    "Commercial Strategy",
    "Startup Growth",
    "Scale-up Growth",
    "SaaS Growth",
    "B2B SaaS",
    "Retention Strategy",
    "Customer Experience",
    "Amsterdam Commercial Lead",
    "Fractional Commercial Lead",
  ],
  ogImage: {
    // Replace /public/og-image.jpg to update social sharing previews.
    path: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Louise Raw — Commercial Lead, growth systems and GTM strategy for founder-led companies.",
  },
  portraitImage: "/louise-portrait.jpg",
  // Replace with Louise's real LinkedIn profile before launch.
  linkedInUrl: "https://www.linkedin.com/in/louise-raw-9987045a/",
} as const;

export const absoluteUrl = (path = "/") => new URL(path, siteUrl).toString();
