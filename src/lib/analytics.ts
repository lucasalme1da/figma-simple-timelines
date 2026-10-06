const analyticsId =
  import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || "G-7C9VET7EY9";

declare global {
  interface Window {
    dataLayer?: IArguments[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function startAnalytics() {
  if (
    document.querySelector(
      `script[data-simple-timelines-ga="${analyticsId}"]`
    )
  ) {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  window.gtag = function () {
    window.dataLayer?.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", analyticsId);

  const script = document.createElement("script");

  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
    analyticsId
  )}`;

  script.dataset.simpleTimelinesGa = analyticsId;

  document.head.appendChild(script);
}

export function trackInstall(location: string) {
  window.gtag?.("event", "install_click", {
    event_category: "engagement",
    event_label: location,
  });
}