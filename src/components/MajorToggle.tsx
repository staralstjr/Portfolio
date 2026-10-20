"use client";

import { useState } from "react";

// 「주요 프로젝트만 보기」 체크박스. 카드는 서버에서 전부 그려 두고, 여기서는 data-major 속성으로 숨기기만 한다
export default function MajorToggle({ children }: { children: React.ReactNode }) {
  const [onlyMajor, setOnlyMajor] = useState(true);
  return (
    <div data-only-major={onlyMajor}>
      <label className="mb-8 flex items-center justify-center gap-2 text-[15px]">
        주요 프로젝트만 보기
        <input type="checkbox" className="h-[18px] w-[18px] accent-blue" checked={onlyMajor} onChange={(e) => setOnlyMajor(e.target.checked)} />
      </label>
      <style>{`[data-only-major="true"] [data-major="false"]{display:none}`}</style>
      {children}
    </div>
  );
}
