import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const title = "Simple Timelines — Timelines e calendários no Figma";
  const description = "Crie timelines e calendários claros, bonitos e editáveis diretamente no Figma.";

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
      locale: "pt_BR",
      images: [{ url: "/og.png", width: 1536, height: 921, alt: "Simple Timelines — timelines e calendários no Figma" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
