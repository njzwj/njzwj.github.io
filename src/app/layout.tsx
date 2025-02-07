import "./globals.css";
import { Noto_Sans, Noto_Serif, Noto_Serif_SC, Noto_Serif_TC, Noto_Serif_JP Noto_Sans_Mono } from "next/font/google";
import Providers from "./providers";

// const serif = Noto_Serif({
//   display: "swap",
//   variable: "--font-noto-serif",
// });
const serif_sc = Noto_Serif_SC({variable: "--font-noto-serif-sc"});
// const serif_tc = Noto_Serif_TC({variable: "--font-noto-serif-tc"});
// const serif_jp = Noto_Serif_JP({variable: "--font-noto-serif-jp"});
// const sans = Noto_Sans({
//   subsets: ["latin", "latin-ext"],
//   display: "swap",
//   variable: "--font-noto-sans",
// });
// const mono = Noto_Sans_Mono({
//   subsets: ["latin", "latin-ext"],
//   display: "swap",
//   variable: "--font-noto-sans-mono",
// });

export default function RootLayout(
  { children }: Readonly<{ children: React.ReactNode; }>
) {
  return (
    <html lang="zh">
      <head>
        { /* Favicons */ }
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
      <body className={`${serif_sc.variable} font-noto-serif-sc min-h-screen text-frontend bg-background`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
};
