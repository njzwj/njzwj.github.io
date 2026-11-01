"use client";

import { formatDate } from "@/lib/date";
import { useTimeZone } from "@/lib/use-time-zone";

export default function PostDate({ date }: { date: string }) {
  const timeZone = useTimeZone();
  return <time dateTime={date} lang="en">{formatDate(date, false, timeZone)}</time>;
}
