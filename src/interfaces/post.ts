export type Tag = "essays" | "travel" | "photography";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  coverAlt?: string;
  tags: Tag[];
  layout: "article" | "photo";
  lang: "zh-CN" | "en" | "ja";
  hasEnglish: boolean;
};
