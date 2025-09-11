import { Noto_Sans_KR } from "next/font/google";
import localFont from "next/font/local";

import type { Metadata } from "next";
import "./globals.css";

import GNB from "@/components/molecules/GNB/gnb";
import Footer from "@/components/molecules/Footer/footer";
import { cn } from "@/utils/cn";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

const helveticaNeue = localFont({
  src: [
    {
      path: "./fonts/HelveticaNeueLTW15-45Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueLTW15-55Roman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueLTW15-65Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueLTW15-65Medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueLTW15-75Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-neue",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Samil Tax Agent",
  description: "AI Tax Agent Made by Samil PwC",
  keywords: [
    "Samil Tax Agent",
    "Tax Agent",
    "Tax",
    "Agent",
    "AI",
    "Tax AI",
    "Samil PwC",
    "PwC",
    "Korea",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={cn(helveticaNeue.variable, notoSansKr.variable)} // font variable을 전달한다.
    >
      <body>
        <GNB />
        {children}
        <Footer />
      </body>
    </html>
  );
}
