import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import GNB from "@/components/molecules/GNB/gnb";
import Footer from "@/components/molecules/Footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GNB />
        {children}
        <Footer />
      </body>
    </html>
  );
}
