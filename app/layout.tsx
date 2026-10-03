import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { defaultSiteUrl, normalizeSiteUrl } from "./site-url";
import "./globals.css";

const title = "Simple Timelines — Figma Timeline & Calendar Plugin";
const description = "Create editable project timelines and multi-month calendars directly in Figma. Preview dates, milestones, and activities before adding them to your file.";
const socialImage = {
  width: 1672,
  height: 941,
  type: "image/png",
  alt: "A project timeline and calendar created with the Simple Timelines Figma plugin",
};

async function getRequestSiteUrl() {
  const configuredUrl = process.env.SITE_URL?.trim() || process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configuredUrl) return normalizeSiteUrl(configuredUrl);

  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  if (!host) return defaultSiteUrl;

  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return normalizeSiteUrl(`${protocol}://${host}`);
}

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = await getRequestSiteUrl();
  const socialImageUrl = new URL("og-v2.png", siteUrl).toString();
  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  const bingVerification = process.env.BING_SITE_VERIFICATION?.trim();

  return {
    metadataBase: siteUrl,
    title,
    description,
    applicationName: "Simple Timelines",
    authors: [{ name: "Lucas de Almeida", url: "https://github.com/lucasalme1da" }],
    creator: "Lucas de Almeida",
    publisher: "Lucas de Almeida",
    category: "Design tools",
    referrer: "origin-when-cross-origin",
    alternates: { canonical: siteUrl },
    manifest: new URL("site.webmanifest", siteUrl),
    icons: {
      icon: [{ url: new URL("plugin-icon-128.png", siteUrl), type: "image/png", sizes: "128x128" }],
      shortcut: new URL("plugin-icon-128.png", siteUrl),
      apple: [{ url: new URL("plugin-icon-128.png", siteUrl), sizes: "128x128", type: "image/png" }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    verification: googleVerification || bingVerification ? {
      google: googleVerification || undefined,
      other: bingVerification ? { "msvalidate.01": bingVerification } : undefined,
    } : undefined,
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: "Simple Timelines",
      type: "website",
      locale: "en_US",
      alternateLocale: ["pt_BR", "es_ES", "fr_FR", "de_DE", "it_IT", "nl_NL", "pl_PL", "tr_TR", "ru_RU", "ar_SA", "hi_IN", "zh_CN", "ja_JP", "ko_KR"],
      images: [{ ...socialImage, url: socialImageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImageUrl],
    },
  };
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#121118" },
  ],
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteUrl = await getRequestSiteUrl();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Simple Timelines",
        url: siteUrl,
        description,
        inLanguage: ["en-US", "pt-BR", "es-ES", "fr-FR", "de-DE", "it-IT", "nl-NL", "pl-PL", "tr-TR", "ru-RU", "ar-SA", "hi-IN", "zh-CN", "ja-JP", "ko-KR"],
        publisher: { "@id": `${siteUrl}#creator` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}#plugin`,
        name: "Simple Timelines",
        url: siteUrl,
        description,
        applicationCategory: "DesignApplication",
        applicationSubCategory: "Figma plugin",
        operatingSystem: "Figma",
        image: new URL("og-v2.png", siteUrl).toString(),
        screenshot: [
          new URL("timeline-example.png", siteUrl).toString(),
          new URL("calendar-example.png", siteUrl).toString(),
        ],
        author: { "@id": `${siteUrl}#creator` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}#creator`,
        name: "Lucas de Almeida",
        url: "https://github.com/lucasalme1da",
        sameAs: ["https://github.com/lucasalme1da"],
      },
    ],
  };

  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('simple-timelines-theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
