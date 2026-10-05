import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv, type Plugin } from "vite";

const fallbackSiteUrl = "https://lucasalme1da.github.io/figma-simple-timelines/";

function normalizeSiteUrl(value: string) {
  const url = new URL(value);
  url.hash = "";
  url.search = "";
  if (!url.pathname.endsWith("/")) url.pathname += "/";
  return url;
}

function injectSiteUrl(siteUrl: URL): Plugin {
  return {
    name: "inject-site-url",
    transformIndexHtml(html) {
      return html.replaceAll("__SITE_URL__", siteUrl.toString());
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const siteUrl = normalizeSiteUrl(env.VITE_SITE_URL?.trim() || fallbackSiteUrl);

  return {
    base: "./",
    plugins: [react(), injectSiteUrl(siteUrl)],
  };
});
