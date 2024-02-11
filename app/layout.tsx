import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cook SVG",
  description: "Editing svg has never been easier!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={cn(onest.className, "h-svh flex flex-col")}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
