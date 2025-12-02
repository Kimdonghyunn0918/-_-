// frontend/app/auction/page.tsx
'use client';

export default function Auction() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8 text-purple-400">네덜란드 경매장</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 경매 중인 아이템 예시 */}
        <div className="bg-gray-800 p-6 rounded-xl border-2 border-purple-600">
          <div className="bg-gray-600 h-48 rounded mb-4 flex items-center justify-center">
            <p className="text-5xl">Sword</p>
          </div>
          <h3 className="text-2xl font-bold text-purple-300">Excalibur (Legendary)</h3>
          <p className="text-gray-300 my-2">공격력 150 | 방어력 50</p>
          
          <div className="mt-4 space-y-2">
            <p className="text-3xl font-bold text-yellow-400">현재 가격: 0.85 ETH</p>
            <p className="text-sm text-gray-400">1초마다 0.001 ETH 하락 중</p>
            <p className="text-red-400 animate-pulse">남은 시간: 4분 32초</p>
          </div>

          <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-lg text-xl transition">
            지금 구매하기
          </button>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400">새로운 아이템을 경매에 등록하려면 소유 아이템에서 선택하세요.</p>
      </div>
    </div>
  );
}
