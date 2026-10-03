import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const fallbackSiteUrl = "https://lucasalme1da.github.io/figma-simple-timelines/";
const siteUrl = new URL(process.env.VITE_SITE_URL?.trim() || fallbackSiteUrl);
siteUrl.hash = "";
siteUrl.search = "";
if (!siteUrl.pathname.endsWith("/")) siteUrl.pathname += "/";

const outputDirectory = resolve("dist");
await mkdir(outputDirectory, { recursive: true });

const robots = [
  "User-agent: *",
  "Allow: /",
  `Sitemap: ${new URL("sitemap.xml", siteUrl)}`,
  `Host: ${siteUrl.origin}`,
  "",
].join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

await Promise.all([
  writeFile(resolve(outputDirectory, "robots.txt"), robots, "utf8"),
  writeFile(resolve(outputDirectory, "sitemap.xml"), sitemap, "utf8"),
]);
