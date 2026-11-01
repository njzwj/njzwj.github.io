"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function TranslationLink({ href }: { href?: string }) {
  const path = usePathname();
  const english = path === "/en" || path.startsWith("/en/");
  const target = href || (english ? path.replace(/^\/en/, "") || "/" : `/en${path === "/" ? "" : path}`);
  return <Link href={target} hrefLang={english ? "zh-CN" : "en"} lang={english ? "zh-CN" : "en"} title={english ? "原文 / Original edition" : "English edition"}>{english ? "中文" : "English"}</Link>;
}
