import ArticlePage, { postMetadata } from "@/app/components/article-page";
import { getAllPosts } from "@/lib/api";

type Props = { params: { slug: string } };
export default function Article({ params }: Props) { return <ArticlePage params={params} />; }
export function generateMetadata({ params }: Props) { return postMetadata({ params }); }
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}
