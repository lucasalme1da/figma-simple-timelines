import { useEffect, useState } from "react";
import type { Copy } from "../content";
import { startAnalytics } from "../lib/analytics";

type Decision = "pending" | "granted" | "denied";

export function AnalyticsConsent({ copy }: { copy: Copy }) {
  const [decision, setDecision] = useState<Decision>("pending");

  useEffect(() => {
    const saved = localStorage.getItem("simple-timelines-analytics");
    if (saved === "granted") {
      setDecision("granted");
      startAnalytics();
    } else if (saved === "denied") {
      setDecision("denied");
    }
  }, []);

  if (decision !== "pending") return null;

  return (
    <aside className="analytics-consent" aria-label="Analytics consent">
      <p>{copy.analyticsText}</p>
      <button
        type="button"
        onClick={() => {
          localStorage.setItem("simple-timelines-analytics", "granted");
          setDecision("granted");
          startAnalytics();
        }}
      >
        {copy.analyticsAccept}
      </button>
      <button
        className="consent-secondary"
        type="button"
        onClick={() => {
          localStorage.setItem("simple-timelines-analytics", "denied");
          setDecision("denied");
        }}
      >
        {copy.analyticsReject}
      </button>
    </aside>
  );
}

