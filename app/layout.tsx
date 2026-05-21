import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProBest Painting | Painters in Surrey & Fraser Valley",
  description:
    "Professional interior and exterior painting services in Surrey, BC. Residential and commercial painters. Free quotes available.",
  keywords: [
    "painters Surrey",
    "painting company Surrey BC",
    "interior painting Surrey",
    "exterior painting Surrey",
    "house painters BC",
    "Fraser Valley painters",
  ],
  openGraph: {
    title: "ProBest Painting",
    description:
      "Professional painting services in Surrey & Fraser Valley",
    url: "https://probest-painting.vercel.app",
    siteName: "ProBest Painting",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}