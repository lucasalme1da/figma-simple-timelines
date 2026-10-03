const analyticsId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || "G-7C9VET7EY9";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function startAnalytics() {
  if (document.querySelector(`script[data-simple-timelines-ga="${analyticsId}"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analyticsId)}`;
  script.dataset.simpleTimelinesGa = analyticsId;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag("js", new Date());
  window.gtag("config", analyticsId);
}

export function trackInstall(location: string) {
  window.gtag?.("event", "install_click", {
    event_category: "engagement",
    event_label: location,
  });
}

