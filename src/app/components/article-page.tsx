import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";
import { Header, Body, Footer } from "@/app/components";
import ArticleContent from "@/app/components/article-content";
import Comments from "@/app/components/comments";
import { TAGS } from "@/lib/tags";
import PostDate from "./post-date";
import { localPath, type Locale } from "@/lib/locale";
import markdownStyles from "@/app/posts/[slug]/markdown-styles.module.css";

type Params = { params: { slug: string }; locale?: Locale };

export default async function Post({ params, locale = "zh" }: Params) {
  const post = getPostBySlug(params.slug, locale);
  if (!post) notFound();
  const content = await markdownToHtml(post.content);
  return <>
    <Header locale={locale} languageHref={locale === "zh" && !post.hasEnglish ? "/en" : undefined} />
    <Body locale={locale}>
      <article lang={post.lang}>
        <header className="article-header">
          <Link className="back-link" href={localPath("/", locale)}>{locale === "en" ? "← All entries" : "← 全部文章 / All entries"}</Link>
          <div className="post-meta">
            <PostDate date={post.date} />
            <span aria-hidden="true">/</span>
            {post.tags.map((tag) => <Link key={tag} href={localPath("/tags/" + tag, locale)}>{TAGS[tag][locale]}</Link>)}
          </div>
          <h1>{post.title}</h1>
          {post.excerpt && <p className="article-description">{post.excerpt}</p>}
          {post.hasEnglish && <div className="article-tools"><Link href={localPath("/posts/" + post.slug, locale === "en" ? "zh" : "en")} lang={locale === "en" ? "zh-CN" : "en"}>{locale === "en" ? "阅读原文" : "Read in English"}</Link></div>}
        </header>
        {post.coverImage && <figure className="article-cover"><img src={post.coverImage} alt={post.coverAlt || post.title} decoding="async" /></figure>}
        <ArticleContent html={content} className={markdownStyles.markdown + (post.layout === "photo" ? " " + markdownStyles.photo : "")} />
        <footer className="article-end"><Link href={localPath("/", locale)}>{locale === "en" ? "← Back to journal" : "← 返回文章列表"}</Link><a href="#main">{locale === "en" ? "Back to top ↑" : "回到顶部 ↑"}</a></footer>
      </article>
      <Comments key={post.slug} slug={post.slug} title={post.title} locale={locale} />
    </Body>
    <Footer />
  </>;
}

export function postMetadata({ params, locale = "zh" }: Params): Metadata {
  const post = getPostBySlug(params.slug, locale);
  if (!post) notFound();
  return {
    title: post.title + " | RDCG",
    description: post.excerpt || undefined,
    alternates: { canonical: localPath("/posts/" + post.slug, locale), languages: post.hasEnglish ? { "zh-CN": "/posts/" + post.slug, en: "/en/posts/" + post.slug } : undefined },
    openGraph: {
      type: "article", title: post.title, description: post.excerpt,
      publishedTime: post.date, images: post.coverImage ? [post.coverImage] : [],
    },
  };
}
