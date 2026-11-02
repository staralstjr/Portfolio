# 권민석 포트폴리오

Next.js 15 (App Router) + Tailwind v4. 서버 컴포넌트 위주이고 클라이언트 JS는 네비 강조와 커서 스포트라이트 둘뿐입니다.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build
```

## 구조

| 경로 | 내용 |
|---|---|
| `src/content/profile.ts` | 소개, 경력, 쓰는 것, 링크. 글은 여기서 고친다 |
| `src/content/projects.ts` | 프로젝트 8개의 본문(개요, 성과, 트러블슈팅, 스크린샷). 카드와 상세 페이지가 같은 데이터를 쓴다 |
| `src/app/page.tsx` | 메인 한 장 (소개, 경력, 프로젝트, 글) |
| `src/app/p/[slug]/page.tsx` | 프로젝트 상세 |
| `src/app/globals.css` | 색과 글꼴 토큰 |
| `public/img/` | 스크린샷. 파일명을 유지한 채 교체하면 그대로 반영 |
| `pdf/` | 제출용 PDF 슬라이드(`pdf.html`)와 빌드 스크립트. 이전 단일 HTML 사이트는 `legacy-index.html` |

## 배포 (Vercel)

GitHub `main`에 푸시하면 자동 배포됩니다. 프로젝트 설정의 Framework Preset이 **Next.js**여야 합니다
(이전 사이트는 Other였으므로, 첫 배포 전에 Vercel 대시보드에서 한 번 바꿔야 합니다. `vercel.json`의 `framework` 값도 같은 역할을 합니다).

## 방문 측정 (Google Analytics)

`NEXT_PUBLIC_GA_ID`에 GA4 측정 ID(`G-...`)를 넣으면 모든 페이지에 GA 태그가 붙습니다. 비워 두면 아무것도 들어가지 않습니다.

- 로컬: `.env.local`에 `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
- 배포: Vercel 프로젝트 > Settings > Environment Variables에 같은 이름으로 추가한 뒤 재배포

GA4의 향상된 측정을 켜 두면 페이지 조회 외에 스크롤 90%, 외부 링크 클릭(운영 중인 서비스 버튼)도 자동으로 잡힙니다.
어느 프로젝트 상세를 봤는지는 `/p/...` 페이지 조회로 구분됩니다.

## 검색 노출

`layout.tsx`의 robots 메타와 `next.config.ts`의 `X-Robots-Tag`로 검색 수집을 막아 두었습니다.
링크를 아는 사람은 그대로 볼 수 있습니다. 공개하려면 두 곳을 지우면 됩니다.

## PDF

```bash
cd pdf && python3 build-pdf.py   # playwright, pypdf 필요
```
