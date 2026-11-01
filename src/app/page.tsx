import type { Metadata } from "next";
import JournalPage from "./components/journal-page";

export const metadata: Metadata = {
  title: "Journal | RDCG",
  description: "Notes, journeys and photographs by randc0degen. 随笔、游记与摄影。",
  alternates: { canonical: "/", languages: { "zh-CN": "/", en: "/en" } },
};
export default function Home() { return <JournalPage />; }
