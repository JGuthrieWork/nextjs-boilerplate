// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import the navbar

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sparkle Detail | Premium Car Care",
  description: "Professional car detailing and ceramic coating services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100`}>
        <Navbar />
        {children}
        <footer className="py-8 text-center text-sm text-gray-500 border-t border-gray-200 dark:border-gray-800 mt-20">
          © {new Date().getFullYear()} Sparkle Detail. All rights reserved.
        </footer>
      </body>
    </html>
  );
}