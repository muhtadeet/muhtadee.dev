import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Muhtadee Taron | Web Developer",
  description: "Web Developer, Muhtadee Taron",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={ubuntu.className && "bg-white"}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
