export type Locale = "zh" | "en";

export function localPath(path: string, locale: Locale) {
  return locale === "en" ? `/en${path === "/" ? "" : path}` : path;
}
