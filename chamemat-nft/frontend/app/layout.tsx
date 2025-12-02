import type { Metadata } from "next";
import "./globals.css";
import { ConnectWallet } from "@/components/ConnectWallet";
import Link from "next/link";

export const metadata: Metadata = {
  title: "참이맛 NFT 경제 시스템",
  description: "2025 캡스톤디자인 - 정보보호학과",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-900 text-white min-h-screen">
        <header className="bg-gray-800 border-b border-gray-700 p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">참이맛 NFT 아이템 경제 시스템</h1>
          <ConnectWallet />
        </header>
        <nav className="bg-gray-800 p-4">
          <ul className="flex gap-8 justify-center text-lg">
            <li><Link href="/" className="hover:text-yellow-400">홈</Link></li>
            <li><Link href="/inventory" className="hover:text-yellow-400">내 아이템</Link></li>
            <li><Link href="/craft" className="hover:text-yellow-400">조합</Link></li>
            <li><Link href="/auction" className="hover:text-yellow-400">경매</Link></li>
          </ul>
        </nav>
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
