# 권민석 포트폴리오 (정적 사이트)

단일 HTML 파일입니다. 빌드 과정이 없습니다.

## 배포 (Vercel)

1. 이 폴더를 GitHub 저장소로 올립니다
2. vercel.com → Add New → Project → 저장소 선택
3. Framework Preset을 **Other**로 두고 나머지는 기본값으로 Deploy

## 검색 노출

`index.html`의 `<meta name="robots" content="noindex, nofollow">`와 `vercel.json`의 `X-Robots-Tag`로
검색 엔진 수집을 막아 두었습니다. 링크를 아는 사람은 그대로 볼 수 있습니다.
공개 노출을 원하면 두 곳을 지우면 됩니다.

## 이미지

`img/` 폴더에 있습니다. 파일명을 유지한 채 교체하면 그대로 반영됩니다.
