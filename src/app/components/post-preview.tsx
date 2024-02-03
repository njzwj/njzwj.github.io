import Link from "next/link";
import DateFormatter from "./utils/date-formatter";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export const PostPreview = ({ title, date, excerpt, slug }: Props) => {
  return (
    <div className="mb-4 border-l-2 border-gray-400 pl-4">
      <h3 className="md:text-xl font-semibold">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-sm md:text-md">
        <DateFormatter dateString={date} />
      </div>
      {excerpt &&
        <p className="mt-1 text-sm md:text-md text-gray-500">
          {excerpt}
        </p>}
    </div>
  );
};
