import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cook Svg",
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
          "h-screen p-5 flex flex-col gap-3"
        )}
      >
        {children}
      </body>
    </html>
  );
}
