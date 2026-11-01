import type { Tag } from "@/interfaces/post";

export const TAGS: Record<Tag, { zh: string; en: string }> = {
  essays: { zh: "杂文", en: "Essays" },
  travel: { zh: "游记", en: "Travel" },
  photography: { zh: "摄影", en: "Photography" },
};

export function isTag(value: string): value is Tag {
  return Object.prototype.hasOwnProperty.call(TAGS, value);
}

export function parseTags(value: unknown): Tag[] {
  if (!Array.isArray(value)) return ["essays"];
  const tags = value.map((tag) => {
    if (typeof tag !== "string") throw new Error("Post tags must be strings.");
    if (isTag(tag)) return tag;
    const key = (Object.keys(TAGS) as Tag[]).find((key) => TAGS[key].zh === tag || TAGS[key].en.toLowerCase() === tag.toLowerCase());
    if (!key) throw new Error("Unknown tag: " + tag + ". Use 杂文, 游记, or 摄影.");
    return key;
  });
  return Array.from(new Set(tags.length ? tags : ["essays" as Tag]));
}
