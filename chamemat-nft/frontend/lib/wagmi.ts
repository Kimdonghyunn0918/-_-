import { http, createConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

export const config = getDefaultConfig({
  appName: '참이맛 NFT',
  projectId: 'YOUR_PROJECT_ID', // WalletConnect 프로젝트 ID (테스트용으로 이 상태 OK)
  chains: [sepolia],
  transports: {
    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/demo'), // 무료 demo RPC
  },
});
