import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";
import { Header, Body, Footer } from "@/app/components";

import markdownStyles from "./markdown-styles.module.css";
import { BLOG_NAME } from "@/lib/constants";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <section className="text-foreground">
      <Header />
      <Body>
        <article>
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tighter leading-tight">
            {post.title}
          </h1>
          <div className="mb-10 text-default-500">
            <p>{new Date(post.date).toLocaleDateString("en-US")}</p>
          </div>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
      </Body>
      <Footer />
    </section>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | ${BLOG_NAME}`;

  return {
    title,
    description: post.excerpt,
  };
};

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};
