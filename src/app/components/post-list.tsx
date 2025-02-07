"use client";

import _ from "underscore";
import { Post } from "@/interfaces/post";
import {
  Card, CardHeader, CardBody, CardFooter,
  Divider, Link, Image
} from "@nextui-org/react";
import { useEffect, useState } from "react";

type Props = {
  posts: Post[];
};

function PostCard (
  { title, date, excerpt, slug, coverImage }:
  { title: string, date: string, excerpt: string, slug: string, coverImage: string }
) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const coverImagePath = coverImage || "/assets/hero/wooden-bench.webp";

  return (
    <Card
      isFooterBlurred
      isPressable
      onClick={() => window.location.href = `/posts/${slug}`}
    >
      {/* <CardFooter className="absolute z-10 bottom-0 flex-col !items-start border-t-1 bg-white/60 border-zinc-100/50 dark:bg-black/40 dark:border-default-300">
        <h4 className="text-md font-bold text-left">{title}</h4>
        <p className="text-sm text-default-500">
          {excerpt}
        </p>
        <p className="text-small text-default-500">
          {new Date(date).toLocaleDateString("en-US")}
        </p>
      </CardFooter> */}

      <CardBody className="overflow-visible p-2">
        <Image
          alt={title}
          removeWrapper
          className="object-cover rounded-xl mb-4"
          src={coverImagePath}
        />
        <small className="text-sm text-default-500">{new Date(date).toLocaleDateString("en-US")}</small>
        <h4 className="font-bold text-lg text-left">{title}</h4>
        <small className="text-sm text-default-500">{excerpt}</small>
      </CardBody>
    </Card>
  );
}

const PostList = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
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
