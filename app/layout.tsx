import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const title = "Simple Timelines — Timelines and calendars in Figma";
  const description = "Create clear, editable timelines and calendars directly in Figma.";

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title,
    description,
    icons: {
      icon: "/plugin-icon-128.png",
      shortcut: "/plugin-icon-128.png",
      apple: "/plugin-icon-128.png",
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_US",
      images: [{ url: "/og-v2.png", width: 1536, height: 921, alt: "Simple Timelines — clear timelines built inside Figma" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-v2.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('simple-timelines-theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
