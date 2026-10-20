// 메인 페이지의 글. 프로젝트 본문은 projects.ts

export const profile = {
  name: "권민석",
  greeting: ["안녕하세요.", "서비스를 만들고, 그 서비스가 도는 환경까지 책임지는 개발자", "권민석입니다."],
  email: "staralstjr@gmail.com",
  phone: "010-2399-3111",
};

// ABOUT ME 격자. icon은 page.tsx의 아이콘 이름
export const facts: { icon: "user" | "calendar" | "pin" | "phone" | "mail" | "pen"; label: string; value: string }[] = [
  { icon: "user", label: "이름", value: "권민석" },
  { icon: "calendar", label: "생년월일", value: "02.04.23" },
  { icon: "pin", label: "위치", value: "서울특별시 구로구" },
  { icon: "phone", label: "연락처", value: "010-2399-3111" },
  { icon: "mail", label: "이메일", value: "staralstjr@gmail.com" },
  { icon: "pen", label: "학력", value: "성공회대학교 IT융합자율학부 (2027.02 졸업 예정)" },
];

// SKILLS. 색은 cdg-portfolio처럼 기술마다 다르게
export type Chip = { name: string; main?: boolean };
export const skills: { icon: "code" | "web" | "server" | "cloud" | "ai"; cat: string; chips: Chip[] }[] = [
  {
    icon: "code",
    cat: "Language",
    chips: [
      { name: "Python", main: true },
      { name: "TypeScript", main: true },
      { name: "SQL", main: true },
      { name: "Dart" },
    ],
  },
  {
    icon: "web",
    cat: "Frontend",
    chips: [
      { name: "Next.js / React", main: true },
      { name: "Tailwind CSS", main: true },
      { name: "React-Query" },
      { name: "Flutter" },
    ],
  },
  {
    icon: "server",
    cat: "Backend",
    chips: [
      { name: "FastAPI", main: true },
      { name: "SQLAlchemy" },
      { name: "Node.js" },
      { name: "PostgreSQL", main: true },
      { name: "WebSocket" },
    ],
  },
  {
    icon: "cloud",
    cat: "DevOps",
    chips: [
      { name: "Docker", main: true },
      { name: "Kubernetes", main: true },
      { name: "Argo CD", main: true },
      { name: "NCP", main: true },
      { name: "AWS (SAA)" },
      { name: "Terraform" },
      { name: "Datadog" },
    ],
  },
  {
    icon: "ai",
    cat: "AI / 자동화",
    chips: [
      { name: "Anthropic API", main: true },
      { name: "Gemini" },
      { name: "MCP" },
      { name: "Playwright", main: true },
      { name: "Slack Bot" },
    ],
  },
];

export const archiving = [
  {
    name: "GitHub",
    href: "https://github.com/staralstjr",
    desc: ["소스 코드 저장소입니다.", "회사 서비스 코드는 사내 저장소에 있어 개인 프로젝트와 학습 코드가 올라가 있습니다."],
  },
  {
    name: "Blog",
    href: "https://blog.naver.com/staralstjr",
    desc: ["입사 초기에 공부한 것을 정리해 둔 블로그입니다.", "지금은 글을 올리지 않고, 기록은 저장소의 문서와 매니페스트 주석에 남깁니다."],
  },
];

// CAREER. 회사와 그 안에서 한 일
export type CareerItem = {
  org: string;
  logo: string; // 원 안에 들어갈 글자
  period: string;
  tagline: string;
  roles: string[];
  subs: { title: string; when: string; desc: string; slug?: string; href?: string }[];
};

export const career: CareerItem[] = [
  {
    org: "(주)커브길에서",
    logo: "커브길에서",
    period: "2026.01 - (재직 중)",
    tagline: "AI 뉴스 서비스 뉴스보이를 만드는 스타트업. 개발부 사원",
    roles: ["백엔드 개발", "프론트엔드 개발", "쿠버네티스 운영"],
    subs: [
      {
        title: "머니웨이 리포트 결제, 생성 워커, 배포",
        when: "2026.10 - (진행 중)",
        desc: "투자 성향 리포트 서비스의 정기결제와 구독, 리포트 생성 서버 워커, 데일리 엔진, 광고 측정. 팀 PR 병합과 배포 담당",
        slug: "moneyway",
      },
      {
        title: "배치 워크로드의 쿠버네티스 이관과 GitOps 운영",
        when: "2026.08 - 2026.09",
        desc: "VM crontab으로 돌던 배치와 상주 봇을 NKS로 옮기고 Argo CD로 운영. SealedSecret, 컷오버, 장애 3건 복구",
        slug: "nks-gitops",
      },
      {
        title: "창업 지원 AI 서비스 Mallo 개발",
        when: "2026.08 - 2026.09",
        desc: "음성 전사, 사업계획서 생성과 HWP/DOCX 내려받기, 정기 뉴스레터 CronJob, 구독 결제와 환불 웹훅까지 전 구간",
        slug: "mallo",
      },
      {
        title: "이슈 페이지 자동 생성 파이프라인과 웹, API",
        when: "2026.06 - (운영 중)",
        desc: "기사 수십 건을 사건 하나로 묶는 LLM 파이프라인 설계와 22개 테이블 적재, FastAPI와 Next.js 화면. 68개 이슈가 하루 두 번 갱신",
        slug: "newsboy-issue",
      },
      {
        title: "카드뉴스 자동 생성",
        when: "2026.07 - 2026.08",
        desc: "이슈 DB 한 건을 HTML/CSS 템플릿과 Playwright로 인스타그램 규격 카드 세트로. Threads 조회 5.1만",
        slug: "card-news",
      },
      {
        title: "커뮤니티 자동화 파이프라인",
        when: "2026.03 - 2026.04 (이후 운영)",
        desc: "기사를 커뮤니티 4곳에 올리는 배치. 메모리 과부하와 IP 차단을 겪으며 실행 환경을 두 번 이관. 일일 방문자 158명에서 1,759명",
        slug: "community-pipeline",
      },
      {
        title: "뉴스보이 웹 개발",
        when: "2026.01 - 2026.08",
        desc: "Next.js 15 App Router와 React Query로 홈, 뉴스 목록, 데일리 TOP10, 이슈 화면을 개발. 웹 저장소 커밋 210건 중 134건",
        href: "https://newsboy.news",
      },
    ],
  },
  {
    org: "GDG on Campus SKHU",
    logo: "GDG",
    period: "2024.06 - 2025.06",
    tagline: "성공회대학교 Google Developer Groups 학생 커뮤니티",
    roles: ["Flutter 파트원"],
    subs: [
      {
        title: "백야 해커톤 (GDGoC KR, 중앙대) 완주",
        when: "2025.04.10",
        desc: "취업 준비생 학습 서비스 K-word의 프론트 모바일. 팀원 한 명이 환경 문제로 멈춘 상황에서 마이페이지를 뺀 모든 화면을 개발해 제출",
        slug: "flutter-apps",
      },
      {
        title: "연합 프로젝트 고민중독 (Flutter)",
        when: "2025.02 - 2025.08",
        desc: "3인 모바일 팀. 고민 등록 전 과정, 오늘의 고민과 마이페이지, 카카오와 구글, 애플 로그인과 회원 탈퇴. 2025년 2월 데모데이",
        slug: "flutter-apps",
      },
      {
        title: "앱 파트 정규 세션 수료",
        when: "2024.09 - 2025.05",
        desc: "Dart 객체지향, Git과 GitHub, Flutter 과제 9회분",
      },
    ],
  },
];

export const awards = [
  "2026 AWS Certified Solutions Architect Associate",
  "2025 성공회대학교 IT 경진대회 은상, 인기상",
  "2025 성공회대학교 창업 아이디어 경진대회 장려상",
  "2025 GoodWin Incubating 최우수 창업동아리 선정",
  "성공회대학교 5학기 연속 성적 우수 장학금 (SW 4.30 / 4.5)",
];
