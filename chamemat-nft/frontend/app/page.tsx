export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 mb-8">
        참이맛 NFT 아이템 경제 시스템
      </h1>
      <p className="text-2xl text-gray-300 mb-4">2025 캡스톤디자인 최종 결과물</p>
      <p className="text-xl text-gray-400">팀 참이맛 · 지도교수 이병천</p>
      <div className="mt-12 text-lg text-gray-500">
        <p>계획서에 명시된 모든 기능 100% 구현</p>
        <p>Sepolia 테스트넷 배포 완료 · Vercel 운영 중</p>
      </div>
    </div>
  );
}
