import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 홈 폴더에 다른 lockfile이 있어 워크스페이스 루트를 잘못 잡는 것을 막는다
  outputFileTracingRoot: __dirname,
  // 스크린샷은 이미 적당한 크기라 변환 없이 그대로 낸다. 로컬에는 sharp가 없고, 변환 캐시 실패를 피한다
  images: { unoptimized: true },
  // 링크를 아는 사람만 보는 사이트. 검색 수집은 막는다 (README 참고)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
