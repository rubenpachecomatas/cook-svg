import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
      <body
        className={cn(
          onest.className,
          "h-screen flex flex-col"
        )}
      >
        {children}
      </body>
    </html>
  );
}
