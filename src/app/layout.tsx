import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { StructuredData } from "@/components/StructuredData";
import { absoluteUrl, seo, siteUrl } from "@/lib/seo";
import "./globals.css";

const googleSans = localFont({
  variable: "--font-google-sans",
  src: [
    {
      path: "../fonts/google-sans-latin.woff2",
      style: "normal",
      weight: "400 700",
    },
    {
      path: "../fonts/google-sans-latin-italic.woff2",
      style: "italic",
      weight: "400 700",
    },
  ],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.description,
  applicationName: seo.siteName,
  authors: [{ name: "Louise Raw", url: siteUrl }],
  creator: "Louise Raw",
  publisher: "Louise Raw",
  keywords: [...seo.keywords],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: seo.siteName,
    title: seo.openGraphTitle,
    description: seo.openGraphDescription,
    images: [
      {
        url: seo.ogImage.path,
        width: seo.ogImage.width,
        height: seo.ogImage.height,
        alt: seo.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.twitterTitle,
    description: seo.twitterDescription,
    images: [absoluteUrl(seo.ogImage.path)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        type: "image/png",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f5f4",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${googleSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
