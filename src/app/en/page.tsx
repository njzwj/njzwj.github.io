import type { Metadata } from "next";
import JournalPage from "@/app/components/journal-page";

export const metadata: Metadata = {
  title: "Journal | RDCG",
  description: "Notes, journeys and photographs by randc0degen.",
  alternates: { canonical: "/en", languages: { "zh-CN": "/", en: "/en" } },
};
export default function EnglishJournal() { return <JournalPage locale="en" />; }
