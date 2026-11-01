import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { parseTags } from "./tags";
import type { Locale } from "./locale";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((slug) => slug.endsWith(".md"));
}

export function getPostBySlug(slug: string, locale: Locale = "zh"): Post | undefined {
  const realSlug = slug.replace(/\.md$/, "");
  if (!getPostSlugs().includes(`${realSlug}.md`)) return undefined;
  if (realSlug.includes("_draft")) return undefined;
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const original = matter(fileContents);
  const translationPath = join(postsDirectory, "en", `${realSlug}.md`);
  const hasTranslation = fs.existsSync(translationPath);
  const hasEnglish = hasTranslation || original.data.lang === "en";
  if (locale === "en" && !hasEnglish) return undefined;
  const translated = locale === "en" && hasTranslation ? matter(fs.readFileSync(translationPath, "utf8")) : undefined;
  const data = { ...original.data, ...translated?.data };
  const content = translated?.content ?? original.content;

  if (typeof data.title !== "string" || !data.date || !Number.isFinite(Date.parse(String(data.date)))) {
    throw new Error(`Invalid title or date in ${realSlug}.md`);
  }
  return {
    slug: realSlug, title: data.title, date: new Date(data.date).toISOString(),
    excerpt: data.excerpt || "", content,
    coverImage: data.coverImage || undefined, coverAlt: data.coverAlt || data.title,
    tags: parseTags(data.tags), layout: data.layout === "photo" ? "photo" : "article",
    lang: locale === "en" ? "en" : data.lang === "en" || data.lang === "ja" ? data.lang : "zh-CN",
    hasEnglish,
  };
}

export function getAllPosts(locale: Locale = "zh"): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
  .filter((slug) => !slug.includes("_draft"))
  .map((slug) => getPostBySlug(slug, locale))
  .filter((post): post is Post => Boolean(post))
  // sort posts by date in descending order
  .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
