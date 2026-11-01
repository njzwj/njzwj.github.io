"use client";

import Link from "next/link";
import type { Post } from "@/interfaces/post";
import { TAGS } from "@/lib/tags";
import { formatDate, formatYear } from "@/lib/date";
import { useTimeZone } from "@/lib/use-time-zone";
import { localPath, type Locale } from "@/lib/locale";

export default function PostList({ posts, locale = "zh" }: { posts: Omit<Post, "content">[]; locale?: Locale }) {
  const timeZone = useTimeZone();
  const years = Array.from(new Set(posts.map((post) => formatYear(post.date, timeZone))));
  return (
    <div className="timeline">
      {years.map((year) => (
        <section key={year} className="timeline-year" aria-labelledby={"year-" + year}>
          <h2 id={"year-" + year} className="year-label">{year}<span aria-hidden="true">—</span></h2>
          <ol className="post-list">
            {posts.filter((post) => formatYear(post.date, timeZone) === year).map((post) => (
              <li key={post.slug} className={"post-row " + (post.coverImage ? "has-cover" : "")}>
                <div>
                  <div className="post-meta"><time dateTime={post.date} lang="en">{formatDate(post.date, true, timeZone)}</time><span aria-hidden="true">/</span>{post.tags.map((tag) => <Link key={tag} href={localPath("/tags/" + tag, locale)} title={TAGS[tag].en}>{TAGS[tag][locale]}</Link>)}</div>
                  <h3 lang={post.lang}><Link href={localPath("/posts/" + post.slug, locale)}>{post.title}</Link></h3>
                  {post.excerpt && <p className="post-excerpt" lang={post.lang}>{post.excerpt}</p>}
                </div>
                {post.coverImage && <Link href={localPath("/posts/" + post.slug, locale)} className="post-thumbnail" tabIndex={-1} aria-hidden="true"><img src={post.coverImage} alt="" loading="lazy" decoding="async" width="144" height="104" /></Link>}
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
