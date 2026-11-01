import type { Metadata } from "next";
import "./globals.css";
import { Noto_Serif_SC, Noto_Serif_JP } from "next/font/google";
import Providers from "./providers";

const serif = Noto_Serif_SC({
  weight: ["400", "600"], subsets: ["latin"], display: "swap", preload: false,
  variable: "--font-noto-serif",
});
const japanese = Noto_Serif_JP({
  weight: ["400", "600"], subsets: ["latin"], display: "swap", preload: false,
  variable: "--font-noto-jp",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://njzwj.github.io"),
  icons: { icon: "/favicon/favicon.ico", apple: "/favicon/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={serif.variable + " " + japanese.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
