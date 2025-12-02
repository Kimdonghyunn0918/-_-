# 참이맛 - 블록체인 기반 NFT 아이템 경제 시스템

**2025-2학기 캡스톤디자인 | 정보보호학과**  
**팀 참이맛**  
김동현(팀장) · 이현 · 이재민 · 홍영재  
지도교수: 이병천 교수님

### 실제 서비스 (Vercel 배포 완료)
https://chamemat-nft.vercel.app

### 기능 (계획서 100% 이상 구현)
- ERC-721 NFT 5티어 시스템 (Common → Legendary)
- 온체인 조합 시스템 (3개 소각 → 1개 생성)
- 네덜란드식 경매 (시간 경과에 따라 가격 하락)
- MetaMask 연동 웹 프론트엔드 (Next.js + RainbowKit)
- Sepolia 테스트넷 실제 배포 완료
- IPFS 메타데이터 지원 준비

### 실행 방법
```bash
# 스마트 컨트랙트
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia

# 프론트엔드
cd frontend && npm run dev
