// frontend/app/inventory/page.tsx
'use client';

import { useAccount, useAccount, useReadContract } from 'wagmi';
import { ChamematItemABI } from '@/lib/abi'; // 나중에 abi 폴더 만들면 연결

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_ITEM_CONTRACT || "0x...";

export default function Inventory() {
  const { address, isConnected } = useAccount();

  // 보유 NFT 개수 읽기 (예시)
  const { data: balance } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: ChamematItemABI,
    functionName: 'balanceOf',
    args: [address || '0x0'],
    enabled: isConnected,
  });

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">내 보유 아이템</h1>

      {!isConnected ? (
        <p className="text-xl text-gray-400">지갑을 연결해주세요</p>
      ) : (
        <div>
          <p className="text-2xl mb-6">보유 NFT 개수: {balance?.toString() || 0}개</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 실제로는 tokenOfOwnerByIndex로 반복 돌려서 ItemCard 표시 */}
            <div className="bg-gray-800 p-6 rounded-xl border border-yellow-600">
              <p className="text-yellow-400 font-bold">Legendary Sword</p>
              <p className="text-gray-300">공격력 150 | 방어력 50</p>
            </div>
            {/* 더미 데이터 예시 */}
          </div>
        </div>
      )}
    </div>
  );
}
