import "./globals.css";
import { Noto_Serif_SC } from "next/font/google";
import Providers from "./providers";


const serif = Noto_Serif_SC({
  weight: ['200', '700'],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif",
});

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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css" integrity="sha384-zh0CIslj+VczCZtlzBcjt5ppRcsAmDnRem7ESsYwWwg3m/OaJ2l4x7YBZl9Kxxib" crossOrigin="anonymous"></link>
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={`${serif.className} min-h-screen text-frontend bg-background`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
};
