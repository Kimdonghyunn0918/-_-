// frontend/app/craft/page.tsx
'use client';

export default function Craft() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8 text-green-400">조합소 (Crafting)</h1>
      
      <div className="bg-gray-800 p-8 rounded-xl max-w-2xl mx-auto border border-green-600">
        <p className="text-xl mb-6">동일 티어 아이템 3개를 선택하여 상위 티어로 조합합니다.</p>
        
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <p>선택된 아이템: 3 / 3</p>
            <p className="text-green-400 mt-2">현재 조합 가능: Common ×3 → Uncommon</p>
          </div>
          
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg text-xl transition">
            조합 실행 (온체인 트랜잭션)
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          조합 성공 시 하위 아이템은 소각되고 상위 아이템이 민팅됩니다.
        </p>
      </div>
    </div>
  );
}
