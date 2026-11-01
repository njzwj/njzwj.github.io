"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { DISQUS_SHORTNAME, SITE_URL } from "@/lib/site";
import type { Locale } from "@/lib/locale";

type DisqusConfig = { page: { identifier: string; url: string; title: string }; language: string };
declare global {
  interface Window {
    disqus_config?: (this: DisqusConfig) => void;
    DISQUS?: { reset: (options: { reload: boolean; config: (this: DisqusConfig) => void }) => void };
  }
}

export default function Comments({ slug, title, locale = "zh" }: { slug: string; title: string; locale?: Locale }) {
  const [enabled, setEnabled] = useState(false);
  const [failed, setFailed] = useState(false);
  const { resolvedTheme } = useTheme();
  const configured = /^[a-z0-9][a-z0-9-]*$/i.test(DISQUS_SHORTNAME);

  useEffect(() => {
    if (!enabled || !configured) return;
    function config(this: DisqusConfig) {
      this.page.identifier = slug;
      this.page.url = `${SITE_URL}/posts/${slug}`;
      this.page.title = title;
      this.language = locale === "en" ? "en" : "zh";
    }
    if (window.DISQUS) {
      window.DISQUS.reset({ reload: true, config });
      return;
    }
    window.disqus_config = config;
    const script = document.createElement("script");
    script.src = `https://${DISQUS_SHORTNAME}.disqus.com/embed.js`;
    script.async = true;
    script.onerror = () => setFailed(true);
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, [enabled, configured, slug, title, resolvedTheme, locale]);

  if (!configured) return null;
  return (
    <section className="comments" aria-labelledby="comments-title">
      <h2 id="comments-title">{locale === "en" ? "Discussion" : "讨论 / Discussion"}</h2>
      {!enabled && <><p className="comment-note">{locale === "en" ? "Comments are hosted by Disqus. Load them to connect to this service." : "评论由 Disqus 提供，加载后将连接第三方服务。"}</p><button className="text-button" onClick={() => setEnabled(true)}>{locale === "en" ? "Load comments" : "加载评论 / Load comments"}</button></>}
      {enabled && <div id="disqus_thread" />}
      {failed && <p className="comment-note" role="status">Comments could not load. <a href={`https://${DISQUS_SHORTNAME}.disqus.com/`} target="_blank" rel="noopener noreferrer">Open Disqus ↗</a></p>}
    </section>
  );
}
