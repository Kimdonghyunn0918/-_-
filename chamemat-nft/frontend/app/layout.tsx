import type { Metadata } from "next";
import "./globals.css";
import { ConnectWallet } from "@/components/ConnectWallet";
import Link from "next/link";

export const metadata: Metadata = {
  title: "참이맛 - NFT 아이템 경제 시스템",
  description: "2025 캡스톤디자인 | 정보보호학과 | 팀 참이맛",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-gray-900 text-white min-h-screen">
        <header className="bg-gray-800 p-6 text-center border-b border-gray-700">
          <h1 className="text-4xl font-bold text-yellow-400">참이맛 NFT 경제 시스템</h1>
          <p className="mt-2 text-gray-400">2025 캡스톤디자인 · 정보보호학과 · 팀 참이맛</p>
        </header>

        <nav className="bg-gray-800 p-4 border-b border-gray-700">
          <div className="max-w-5xl mx-auto flex justify-center gap-10">
            <Link href="/" className="text-xl hover:text-yellow-400 transition">홈</Link>
            <Link href="/inventory" className="text-xl hover:text-yellow-400 transition">내 아이템</Link>
            <Link href="/craft" className="text-xl hover:text-yellow-400 transition">조합</Link>
            <Link href="/auction" className="text-xl hover:text-yellow-400 transition">경매</Link>
          </div>
        </nav>

        <main className="min-h-screen">{children}</main>

        <div className="fixed top-4 right-4 z-50">
          <ConnectWallet />
        </div>
      </body>
    </html>
  );
}
