import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jose Carlos Alarcon Chacon | Fullstack Developer",
  description:
    "Portfolio of Jose Carlos Alarcon Chacon - Passionate software engineer showcasing innovative projects and technical expertise",
  keywords: [
    "fullstack developer",
    "software engineer",
    "web development",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
