import { ANALYTICS_ENABLED } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer shell" lang="en">
      <p>© {new Date().getUTCFullYear()} randc0degen</p>
      <div className="footer-meta">
        <p>Suzhou, China <span aria-hidden="true">·</span> <a href="https://creativecommons.org/licenses/by-nc/4.0/" rel="license">CC BY-NC 4.0</a></p>
        {ANALYTICS_ENABLED && (
          <a className="analytics-note" href="https://policies.google.com/technologies/partner-sites">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" aria-hidden="true">
              <path d="M3 12V8m5 4V3m5 9V6" />
            </svg>
            Analytics by Google
          </a>
        )}
      </div>
    </footer>
  );
}
