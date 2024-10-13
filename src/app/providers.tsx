import { Noto_Sans, Noto_Serif, Noto_Sans_Mono } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";

const sans = Noto_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-noto-sans",
});
const serif = Noto_Serif({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-noto-serif",
});
const mono = Noto_Sans_Mono({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-noto-sans-mono",
});

export default function Providers(
  { children }: Readonly<{ children: React.ReactNode; }>
) {
  return (
    <div className={`${sans.variable} ${serif.variable} ${mono.variable} font-sans`}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </div>
  );
};
