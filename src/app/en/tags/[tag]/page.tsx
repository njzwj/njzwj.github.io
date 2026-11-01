import { notFound } from "next/navigation";
import JournalPage from "@/app/components/journal-page";
import { isTag, TAGS } from "@/lib/tags";

type Props = { params: { tag: string } };
export function generateStaticParams() { return Object.keys(TAGS).map((tag) => ({ tag })); }
export function generateMetadata({ params }: Props) {
  if (!isTag(params.tag)) notFound();
  return { title: TAGS[params.tag].en + " | RDCG", alternates: { canonical: "/en/tags/" + params.tag, languages: { "zh-CN": "/tags/" + params.tag, en: "/en/tags/" + params.tag } } };
}
export default function TagPage({ params }: Props) {
  if (!isTag(params.tag)) notFound();
  return <JournalPage tag={params.tag} locale="en" />;
}
