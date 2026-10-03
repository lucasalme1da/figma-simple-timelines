import type { MetadataRoute } from "next";
import { getConfiguredSiteUrl } from "./site-url";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getConfiguredSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: new URL("sitemap.xml", siteUrl).toString(),
    host: siteUrl.origin,
  };
}
