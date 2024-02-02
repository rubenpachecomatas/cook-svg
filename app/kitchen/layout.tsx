import type { Metadata } from "next";
import "../globals.css";

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
    <div className="h-full">
      {children}
    </div>
  );
}
