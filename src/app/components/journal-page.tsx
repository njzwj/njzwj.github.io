import { Body, Footer, Header, PostList } from "@/app/components";
import TagNav from "./tag-nav";
import { getAllPosts } from "@/lib/api";
import { TAGS } from "@/lib/tags";
import type { Tag } from "@/interfaces/post";
import type { Locale } from "@/lib/locale";

export default function JournalPage({ locale = "zh", tag }: { locale?: Locale; tag?: Tag }) {
  const posts = getAllPosts(locale).filter((post) => !tag || post.tags.includes(tag));
  return <>
    <Header active="Home" locale={locale} />
    <Body locale={locale}>
      <section className="journal-intro">
        <p className="eyebrow" lang="en">{tag ? "COLLECTION" : "A PERSONAL JOURNAL"}</p>
        <h1>{tag ? TAGS[tag][locale] : locale === "en" ? "Notes, journeys & photographs." : "记录，思考，与远行。"}</h1>
        <p className="intro-subtitle" lang="en">{tag ? (locale === "en" ? "From the journal." : TAGS[tag].en) : locale === "en" ? "A record of things seen, places visited, and thoughts along the way." : "Notes, journeys & photographs."}</p>
      </section>
      <div className="archive-bar"><TagNav active={tag} locale={locale} /><span className="article-count" lang="en">{posts.length} entries</span></div>
      {posts.length ? <PostList posts={posts} locale={locale} /> : <p className="empty-state">{locale === "en" ? "No entries yet." : "暂无文章。"}</p>}
    </Body>
    <Footer />
  </>;
}
