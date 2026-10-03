import { communityUrl } from "../config";
import { trackInstall } from "../lib/analytics";

export function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>;
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

