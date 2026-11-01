import Link from "next/link";
import { TAGS } from "@/lib/tags";
import type { Tag } from "@/interfaces/post";
import { localPath, type Locale } from "@/lib/locale";

export default function TagNav({ active, locale = "zh" }: { active?: Tag; locale?: Locale }) {
  return (
    <nav className="tag-nav" aria-label="Article categories">
      <Link href={localPath("/", locale)} aria-current={!active ? "page" : undefined}>{locale === "en" ? "All" : <>全部 <span lang="en">All</span></>}</Link>
      {(Object.keys(TAGS) as Tag[]).map((tag) => <Link key={tag} href={localPath("/tags/" + tag, locale)} aria-current={active === tag ? "page" : undefined}>{locale === "en" ? TAGS[tag].en : <>{TAGS[tag].zh} <span lang="en">{TAGS[tag].en}</span></>}</Link>)}
    </nav>
  );
}
