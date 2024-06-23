import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs // if env is development, return all posts, otherwise filter out the one with "_draft" in the filename
  .filter((slug) => process.env.NODE_ENV === "development" || !slug.includes("_draft"))
  .map((slug) => getPostBySlug(slug))
  // sort posts by date in descending order
  .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
