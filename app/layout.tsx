import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinay Kulkarni | Lead Software Engineer",
  description: "Portfolio of Vinay Kulkarni — Lead Software Engineer specializing in React, Next.js, Node.js, Cloud and Generative AI.",
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
