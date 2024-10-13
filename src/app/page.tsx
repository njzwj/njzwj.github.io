import type { Metadata } from "next";
import Header from "./components/header";
import Body from "./components/body";
import { PostList } from "./components/post-list";
import { getAllPosts } from "@/lib/api";

export const metadata: Metadata = {
  title: `RandC0deGen's Blog ｜ RDCG`,
  description: `A blog about web development, programming, and other tech-related topics, by randC0deGen.`,
};

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <section>
      <Header active="Home" />
      <Body>
        <h1>Welcome to RandC0deGen's Blog!</h1>
        <p>
          This is a blog about web development, programming, and other tech-related topics, by randC0deGen.
        </p>
        <PostList posts={allPosts} />
      </Body>
    </section>
  );
}
