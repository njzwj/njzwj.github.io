"use client";

import _ from "underscore";
import { Post } from "@/interfaces/post";
import {
  Card, CardHeader, CardBody, CardFooter,
  Divider, Link, Image
} from "@nextui-org/react";

type Props = {
  posts: Post[];
};

function PostCard (
  { title, date, excerpt, slug, coverImage }:
  { title: string, date: string, excerpt: string, slug: string, coverImage: string }
) {

  const coverImagePath = coverImage || "/assets/hero/wooden-bench.webp";

  return (
    <Card
      isFooterBlurred
      isPressable
      onClick={() => window.location.href = `/posts/${slug}`}
      className="min-h-[300px] shadow-lg"
    >
      <CardFooter className="absolute z-10 bottom-0 flex-col !items-start border-t-1 bg-white/60 border-zinc-100/50 dark:bg-black/40 dark:border-default-100">
        <h4 className="text-md font-bold text-left">{title}</h4>
        <p className="text-small text-default-500">
          {new Date(date).toLocaleDateString("en-US")}
        </p>
      </CardFooter>

      <Image
        removeWrapper
        className="z-0 w-full h-full object-cover"
        src={coverImagePath}
      />
    </Card>
  );
}

const PostList = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          title={post.title}
          date={post.date}
          excerpt={post.excerpt}
          slug={post.slug}
          coverImage={post.coverImage}
        />
      ))}
    </div>
  );
};

export default PostList;
