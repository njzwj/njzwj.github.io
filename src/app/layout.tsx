import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif, Noto_Sans_Mono } from "next/font/google";
import Footer from "@/app/components/footer";

import "./globals.css";

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

export const metadata: Metadata = {
  title: `randC0deGen's Blog`,
  description: `A blog about web development, programming, and other tech-related topics, by randC0deGen.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
        <div className="flex flex-col min-h-screen justify-between font-sans">
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
