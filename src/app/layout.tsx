import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextJob",
  description: "Find and post jobs easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav style={{
          padding: "15px",
          borderBottom: "1px solid #ddd",
          display: "flex",
          gap: "20px"
        }}>
          <Link href="/">Home</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/admin">Admin</Link>
        </nav>

        <div>{children}</div>
      </body>
    </html>
  );
}
