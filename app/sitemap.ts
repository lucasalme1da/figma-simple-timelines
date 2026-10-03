import type { MetadataRoute } from "next";
import { getConfiguredSiteUrl } from "./site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getConfiguredSiteUrl();

  return [{
    url: siteUrl.toString(),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }];
}
