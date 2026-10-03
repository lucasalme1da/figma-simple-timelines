export const defaultSiteUrl = new URL("https://simple-timelines-plugin.lucasdealmeida-ss.chatgpt.site/");

export function normalizeSiteUrl(value: string) {
  const url = new URL(value);
  url.hash = "";
  url.search = "";
  if (!url.pathname.endsWith("/")) url.pathname += "/";
  return url;
}

export function getConfiguredSiteUrl() {
  const configuredUrl = process.env.SITE_URL?.trim() || process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return configuredUrl ? normalizeSiteUrl(configuredUrl) : defaultSiteUrl;
}
