"use client";

import { useEffect, useState } from "react";

export function useTimeZone() {
  const [timeZone, setTimeZone] = useState("UTC");

  useEffect(() => {
    setTimeZone(new Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  return timeZone;
}
