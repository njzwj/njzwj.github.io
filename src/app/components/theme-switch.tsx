"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === "dark";
  return (
    <button className="theme-switch" type="button" disabled={!mounted}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "浅色 / Light" : "深色 / Dark"}
      onClick={() => setTheme(dark ? "light" : "dark")}>
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        {dark ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></> : <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />}
      </svg>
    </button>
  );
}
