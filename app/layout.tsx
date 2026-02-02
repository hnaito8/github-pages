import "./globals.css";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "Tech Notes",
  description: "Next.js × GitHub Pages Tech Notes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b">
          <nav className="mx-auto max-w-3xl p-r">
            <Link href="/" className="font-bold text-lg">
              Tech Notes
            </Link>
          </nav>
        </header>

        <main className="mx-auto max-w-3xl p-4">{children}</main>
        <footer className="border-t text-sm text-center p-4 text-gray-500">
          <Link href="./default-page">
            <Image
              className="dark:invert mx-auto"
              src={`${basePath}/next.svg`}
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
          </Link>
          <div>©︎ 2026 Tech Notes</div>
        </footer>
      </body>
    </html>
  );
}
