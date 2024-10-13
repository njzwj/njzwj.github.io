import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export const PostList = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-y-5 mb-32 max-w-3xl mx-auto">
        {
          posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              slug={post.slug}
            />
          ))
        }
      </div>
    </section>
  );
};
