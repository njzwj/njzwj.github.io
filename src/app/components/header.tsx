import Link from "next/link";
import ThemeSwitch from "./theme-switch";
import TranslationLink from "./translation-link";
import { localPath, type Locale } from "@/lib/locale";

export default function Header({ active, locale = "zh", languageHref }: { active?: string; locale?: Locale; languageHref?: string }) {
  return (
    <header className="site-header shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Link href={localPath("/", locale)} className="wordmark" aria-label="RDCG — home">RDCG<span className="wordmark-dot">.</span></Link>
      <nav aria-label="Main navigation" className="main-nav">
        <Link href={localPath("/", locale)} aria-current={active === "Home" ? "page" : undefined}>{locale === "en" ? "Journal" : <>文章 <span lang="en">Journal</span></>}</Link>
        <Link href={localPath("/about", locale)} aria-current={active === "About" ? "page" : undefined}>{locale === "en" ? "About" : <>关于 <span lang="en">About</span></>}</Link>
        <TranslationLink href={languageHref} />
        <ThemeSwitch />
      </nav>
    </header>
  );
}
