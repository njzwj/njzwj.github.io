export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://njzwj.github.io").replace(/\/$/, "");
export const DISQUS_SHORTNAME = process.env.NEXT_PUBLIC_DISQUS_SHORTNAME ?? "rdcgblog";
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";
export const ANALYTICS_ENABLED = process.env.NODE_ENV === "production" && /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID);
