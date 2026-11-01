import ArticlePage, { postMetadata } from "@/app/components/article-page";
import { getAllPosts } from "@/lib/api";

type Props = { params: { slug: string } };
export default function EnglishArticle({ params }: Props) { return <ArticlePage params={params} locale="en" />; }
export function generateMetadata({ params }: Props) { return postMetadata({ params, locale: "en" }); }
export function generateStaticParams() { return getAllPosts("en").map((post) => ({ slug: post.slug })); }
