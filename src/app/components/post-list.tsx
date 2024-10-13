import _ from "underscore";
import { Post } from "@/interfaces/post";
import {
  Card, CardHeader, CardBody, CardFooter,
  Divider, Link
} from "@nextui-org/react";

type Props = {
  posts: Post[];
};

function PostCard (
  { title, date, excerpt, slug }: { title: string, date: string, excerpt: string, slug: string }
) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md font-bold">{title}</p>
          <p className="text-small text-default-500">
            {new Date(date).toLocaleDateString("en-US")}
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{excerpt}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link href={`/posts/${slug}`}>
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
}

export const PostList = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          title={post.title}
          date={post.date}
          excerpt={post.excerpt}
          slug={post.slug}
        />
      ))}
    </div>
  );
};
