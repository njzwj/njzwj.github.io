import type { Metadata } from "next";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { Body, Footer, Header, PostList } from "@/app/components";
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
        <div className="flex flex-col items-center gap-8">
          <Card isFooterBlurred className="max-h-96">
            <CardFooter className="absolute z-10 bottom-0 flex-col !items-start border-t-1 bg-white/60 border-zinc-100/50 dark:bg-black/40 dark:border-default-100">
              <h1 className="text-foreground font-semibold">
                Welcome to RandC0deGen's Blog!
              </h1>
              <p className="text-small text-default-500">
                This is a blog about web development, programming, and other tech-related topics, by randC0deGen.
              </p>
            </CardFooter>
            <Image
              removeWrapper
              className="z-0 object-cover min-w-full min-h-full h-full"
              src="/assets/hero/tree-and-construction.webp"
            />
          </Card>
          <PostList posts={allPosts} />
        </div>
      </Body>
      <Footer />
    </section>
  );
}
