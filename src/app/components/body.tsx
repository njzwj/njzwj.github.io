import type { Locale } from "@/lib/locale";

export default function Body({ children, locale = "zh" }: { children: React.ReactNode; locale?: Locale }) {
  return <main id="main" className="shell main-content" lang={locale === "en" ? "en" : "zh-CN"}>{children}</main>;
}
