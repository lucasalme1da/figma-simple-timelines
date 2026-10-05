import { communityUrl } from "../config";
import { trackInstall } from "../lib/analytics";

export function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>;
}

export function ViewIcon({ type }: { type: "timeline" | "calendar" }) {
  return (
    <span className="example-icon" aria-hidden="true">
      {type === "timeline" ? (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M5 6v12M5 8h6M5 12h11M5 16h8" />
          <circle cx="5" cy="8" r="1.5" /><circle cx="5" cy="12" r="1.5" /><circle cx="5" cy="16" r="1.5" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="4" y="5.5" width="16" height="14" rx="2" />
          <path d="M8 3.5v4M16 3.5v4M4 9.5h16M8 13h.01M12 13h.01M16 13h.01M8 16.5h.01M12 16.5h.01" />
        </svg>
      )}
    </span>
  );
}

export function FlagIcon({ country, eager = false }: { country: string; eager?: boolean }) {
  return (
    <img
      className="flag-icon"
      src={`flags/${country}.svg`}
      alt=""
      aria-hidden="true"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "low"}
    />
  );
}

export function InstallButton({ label, location, compact = false }: { label: string; location: string; compact?: boolean }) {
  return (
    <a
      className={`button button-primary${compact ? " button-compact" : ""}`}
      href={communityUrl}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackInstall(location)}
    >
      {label}<span aria-hidden="true">↗</span>
    </a>
  );
}

export function Screenshot({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}

