"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { copy, locales, type Copy, type Locale } from "./content";

const communityUrl = "https://www.figma.com/community/search?query=Simple%20Timelines&resource_type=plugins";
const coffeeUrl = "https://www.buymeacoffee.com/";
const githubUrl = "https://github.com/lucasalme1da";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>;
}

function detectLocale(): Locale {
  const supported = locales.map(([locale]) => locale);
  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const candidate of candidates) {
    const exact = supported.find((locale) => locale.toLowerCase() === candidate.toLowerCase());
    if (exact) return exact;
    const base = candidate.split("-")[0].toLowerCase();
    const partial = supported.find((locale) => locale.toLowerCase().startsWith(`${base}-`));
    if (partial) return partial;
  }
  return "en-US";
}

function startAnalytics(id: string) {
  if (document.querySelector(`script[data-simple-timelines-ga="${id}"]`)) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  script.dataset.simpleTimelinesGa = id;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag("js", new Date());
  window.gtag("config", id);
}

function trackInstall(location: string) {
  window.gtag?.("event", "install_click", {
    event_category: "engagement",
    event_label: location,
  });
}

function InstallButton({ label, location, compact = false }: { label: string; location: string; compact?: boolean }) {
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

function Screenshot({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" />;
}

function AnalyticsConsent({ t }: { t: Copy }) {
  const [gaId, setGaId] = useState<string | null>(null);
  const [decision, setDecision] = useState<"pending" | "granted" | "denied">("pending");

  useEffect(() => {
    let active = true;
    fetch("/api/analytics-config", { cache: "no-store" })
      .then((response) => response.json())
      .then((data: { id?: string | null }) => {
        if (!active || !data.id) return;
        setGaId(data.id);
        const saved = localStorage.getItem("simple-timelines-analytics");
        if (saved === "granted") {
          setDecision("granted");
          startAnalytics(data.id);
        } else if (saved === "denied") {
          setDecision("denied");
        }
      })
      .catch(() => undefined);
    return () => { active = false; };
  }, []);

  if (!gaId || decision !== "pending") return null;

  return (
    <aside className="analytics-consent" aria-label="Analytics consent">
      <p>{t.analyticsText}</p>
      <button
        type="button"
        onClick={() => {
          localStorage.setItem("simple-timelines-analytics", "granted");
          setDecision("granted");
          startAnalytics(gaId);
        }}
      >{t.analyticsAccept}</button>
      <button
        className="consent-secondary"
        type="button"
        onClick={() => {
          localStorage.setItem("simple-timelines-analytics", "denied");
          setDecision("denied");
        }}
      >{t.analyticsReject}</button>
    </aside>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en-US");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const localeMenuRef = useRef<HTMLDetailsElement>(null);
  const t = copy[locale];
  const currentLocale = useMemo(() => locales.find(([value]) => value === locale)!, [locale]);
  const featureStories = useMemo(() => [
    {
      title: `${t.features[0].title} ↔ ${t.features[1].title}`,
      paragraphs: [
        `${t.features[0].text} ${t.features[1].text}`,
        `${t.features[5].title}: ${t.features[5].text} ${t.features[6].title}: ${t.features[6].text}`,
      ],
    },
    {
      title: `${t.features[2].title} · ${t.features[3].title}`,
      paragraphs: [
        `${t.features[2].text} ${t.features[3].text}`,
        `${t.features[4].title}: ${t.features[4].text}`,
      ],
    },
    {
      title: t.features[8].title,
      paragraphs: [
        `${t.features[7].text} ${t.features[8].text}`,
        `${t.features[9].title}: ${t.features[9].text}`,
      ],
    },
  ], [t]);

  useEffect(() => {
    const savedLocale = localStorage.getItem("simple-timelines-locale") as Locale | null;
    const isSupported = savedLocale && locales.some(([value]) => value === savedLocale);
    setLocale(isSupported ? savedLocale : detectLocale());

    const savedTheme = localStorage.getItem("simple-timelines-theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(savedTheme === "dark" || savedTheme === "light" ? savedTheme : preferredTheme);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar-SA" ? "rtl" : "ltr";
  }, [locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const closeMenu = (event: PointerEvent) => {
      if (localeMenuRef.current && !localeMenuRef.current.contains(event.target as Node)) {
        localeMenuRef.current.open = false;
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && localeMenuRef.current) localeMenuRef.current.open = false;
    };
    document.addEventListener("pointerdown", closeMenu);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeMenu);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -45px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const changeLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    localStorage.setItem("simple-timelines-locale", nextLocale);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("simple-timelines-theme", nextTheme);
  };

  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Simple Timelines home">
          <BrandMark /><span>Simple Timelines</span><small>{t.beta}</small>
        </a>
        <div className="nav-links">
          <a href="#features">{t.navFeatures}</a>
          <a href="#examples">{t.navExamples}</a>
          <div className="nav-tools">
            <details className="locale-menu" ref={localeMenuRef}>
              <summary aria-label={t.language} title={t.language}>
                <span className="current-flag" aria-hidden="true">{currentLocale[1]}</span>
                <span className="locale-code">{locale.split("-")[0].toUpperCase()}</span>
                <span className="locale-chevron" aria-hidden="true">⌄</span>
              </summary>
              <div className="locale-options" role="listbox" aria-label={t.language}>
                {locales.map(([value, flag, label]) => (
                  <button
                    type="button"
                    role="option"
                    aria-selected={value === locale}
                    className={value === locale ? "active" : ""}
                    onClick={() => {
                      changeLocale(value);
                      if (localeMenuRef.current) localeMenuRef.current.open = false;
                    }}
                    key={value}
                  >
                    <span aria-hidden="true">{flag}</span><span>{label}</span>{value === locale && <i aria-hidden="true">✓</i>}
                  </button>
                ))}
              </div>
            </details>
            <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={t.theme} title={t.theme}>
              <span aria-hidden="true">{theme === "light" ? "◐" : "☼"}</span>
            </button>
          </div>
          <InstallButton label={t.install} location="navigation" compact />
        </div>
      </nav>

      <section className="hero section hero-enter" id="top">
        <div className="hero-copy">
          <span className="eyebrow"><i /> {t.eyebrow} · {t.beta}</span>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroBody}</p>
          <div className="hero-actions">
            <InstallButton label={t.install} location="hero" />
            <a href="#examples" className="secondary-link">{t.seeExamples}<span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-points"><span>✓ {t.heroPoint1}</span><span>✓ {t.heroPoint2}</span></div>
        </div>
        <figure className="product-shot hero-shot">
          <Screenshot src="/plugin-overview.png" alt={t.altOverview} priority />
          <span className="shot-label shot-label-preview">01</span>
          <span className="shot-label shot-label-settings">02</span>
        </figure>
      </section>

      <section className="guided section reveal">
        <div className="guided-copy">
          <span className="kicker">{t.setupKicker}</span>
          <h2>{t.setupTitle}</h2>
          <p>{t.setupBody}</p>
          <ol className="detail-list">
            {t.setupPoints.map((point, index) => <li key={point}><span>{String(index + 1).padStart(2, "0")}</span>{point}</li>)}
          </ol>
        </div>
        <figure className="product-shot annotated-shot">
          <Screenshot src="/plugin-overview.png" alt={t.altOverview} />
          <span className="shot-label setup-one">01</span>
          <span className="shot-label setup-two">02</span>
          <span className="shot-label setup-three">03</span>
        </figure>
      </section>

      <section className="guided guided-reverse section reveal">
        <figure className="product-shot annotated-shot activities-shot">
          <Screenshot src="/plugin-activities.png" alt={t.altActivities} />
          <span className="shot-label activity-one">01</span>
          <span className="shot-label activity-two">02</span>
          <span className="shot-label activity-three">03</span>
        </figure>
        <div className="guided-copy">
          <span className="kicker">{t.activitiesKicker}</span>
          <h2>{t.activitiesTitle}</h2>
          <p>{t.activitiesBody}</p>
          <ol className="detail-list">
            {t.activitiesPoints.map((point, index) => <li key={point}><span>{String(index + 1).padStart(2, "0")}</span>{point}</li>)}
          </ol>
        </div>
      </section>

      <section className="examples section reveal" id="examples">
        <header className="section-heading">
          <span className="kicker">{t.examplesKicker}</span>
          <h2>{t.examplesTitle}</h2>
        </header>
        <div className="example-list">
          <article>
            <div className="example-caption"><span>01</span><div><h3>{t.timelineTitle}</h3><p>{t.timelineText}</p></div></div>
            <figure className="artifact-shot"><Screenshot src="/timeline-example.png" alt={t.altTimeline} /></figure>
          </article>
          <article>
            <div className="example-caption"><span>02</span><div><h3>{t.calendarTitle}</h3><p>{t.calendarText}</p></div></div>
            <figure className="artifact-shot calendar-shot"><Screenshot src="/calendar-example.png" alt={t.altCalendar} /></figure>
          </article>
        </div>
      </section>

      <section className="feature-section section reveal" id="features">
        <header className="section-heading compact-heading">
          <span className="kicker">{t.featuresKicker}</span>
          <h2>{t.featuresTitle}</h2>
          <p>{t.featuresBody}</p>
        </header>
        <div className="feature-story-list">
          {featureStories.map((story, index) => (
            <article className={`feature-story story-${index + 1}`} key={story.title}>
              <span className="story-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{story.title}</h3>
              <div className="story-copy">
                {story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="beta-note section reveal">
        <span className="beta-pill">{t.beta}</span>
        <div><h2>{t.betaTitle}</h2><p>{t.betaText}</p></div>
      </aside>

      <section className="final-cta section reveal">
        <BrandMark />
        <h2>{t.finalTitle}</h2>
        <p>{t.finalBody}</p>
        <InstallButton label={t.install} location="final_cta" />
      </section>

      <footer className="site-footer section">
        <div className="footer-brand"><BrandMark /><span>Simple Timelines <small>{t.beta}</small></span></div>
        <div className="footer-links">
          <a className="coffee-link" href={coffeeUrl} target="_blank" rel="noreferrer">☕ {t.coffee}</a>
          <span>{t.madeWith} <a href={githubUrl} target="_blank" rel="noreferrer">@lucasalme1da</a> ♥</span>
        </div>
      </footer>

      <AnalyticsConsent t={t} />
    </main>
  );
}
