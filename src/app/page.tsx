import Link from "next/link";
import Image from "next/image";
import { profile, facts, skills, archiving, career, awards } from "@/content/profile";
import { projects } from "@/content/projects";
import MajorToggle from "@/components/MajorToggle";

/* ───── 아이콘 (인라인 SVG) ───── */
const I = {
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  pen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4 3 9l9 5 9-5-9-5Z" />
      <path d="M7 11.5V16c0 1.5 2.5 3 5 3s5-1.5 5-3v-4.5" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="7" rx="1.5" />
      <rect x="3" y="14" width="18" height="7" rx="1.5" />
      <path d="M7 6.5h.01M7 17.5h.01" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 18a4 4 0 0 1-.6-7.95A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9H7Z" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  ),
  blog: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
      <path d="M4 4h16v16H4z" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
      <path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4V4ZM20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7V4Z" />
    </svg>
  ),
  ext: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
      <path d="M14 4h6v6M20 4l-9 9M19 13v6H5V5h6" />
    </svg>
  ),
};

function SecHead({ id, en, ko, desc }: { id: string; en: string; ko: string; desc?: string }) {
  return (
    <div className="sec-head" id={id}>
      <div className="en">{en}</div>
      <h2>{ko}</h2>
      {desc && <p>{desc}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* ───── 히어로 ───── */}
      <section className="hero">
        <div className="mx-auto grid max-w-[1100px] items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <div className="text-[14px] font-bold tracking-wide text-blue">SOFTWARE ENGINEER</div>
            <h1 className="mt-4">
              서비스를 만들고,
              <br />그 서비스가 도는 환경까지
              <br />
              옮기고 운영합니다.
            </h1>
            <p className="mt-6 max-w-[520px] text-[17px] leading-[1.8] text-ink-2">
              스타트업에서 뉴스, 창업 지원, 투자 리포트 세 서비스를 개발하고 운영합니다. 화면과 API, 데이터베이스, 배치 파이프라인, 그리고 그것이 도는 쿠버네티스
              클러스터까지 한 서비스의 전 계층을 다룹니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-blue">
                프로젝트 보기
              </a>
              <a href="https://github.com/staralstjr" target="_blank" rel="noopener" className="btn btn-line">
                GitHub ↗
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-line">
                {profile.email}
              </a>
            </div>
          </div>
          <div className="browser">
            <div className="bar">
              <i /> <i /> <i />
              <span>newsboy.news/issue</span>
            </div>
            <Image src="/img/site/newsboy-issue-detail.jpg" alt="내가 만든 뉴스보이 이슈 페이지" width={1600} height={1000} priority />
          </div>
        </div>
      </section>

      {/* ───── 소개 ───── */}
      <section className="py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <SecHead id="about" en="ABOUT" ko="소개" />
          <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:items-start">
            <div className="text-[16.5px] leading-[1.9] text-ink-2">
              <p>
                제일 오래 붙잡은 일은 사건 하나를 한 페이지로 정리해 주는 <Link href="/p/newsboy-issue" className="font-bold text-ink underline underline-offset-4">이슈 페이지</Link>입니다.
                기획과 DB 설계, LLM 파이프라인, 백엔드와 화면까지 디자인을 뺀 전 과정을 맡았고, 지금 68개 이슈가 하루 두 번 자동으로 갱신됩니다. LLM의 출력을 믿지 않고 코드가
                검증하는 지점을 어디에 둘지 고민하는 습관이 여기서 생겼습니다.
              </p>
              <p className="mt-4">
                자동화를 돌리다 메모리 과부하와 IP 차단을 겪으면서 코드 바깥의 문제에 관심이 생겼고, 실행 환경을 VM에서{" "}
                <Link href="/p/nks-gitops" className="font-bold text-ink underline underline-offset-4">쿠버네티스와 Argo CD</Link>로 직접 옮겼습니다. 두 번의 장애가 모두 코드가
                아니라 자원과 네트워크에서 왔기 때문에, 지금은 문제를 만나면 애플리케이션 쪽인지 그 아래쪽인지부터 나눠 봅니다.
              </p>
              <p className="mt-4">한번 맡은 일은 끝까지 보고, 같은 실수를 반복하지 않기 위해 판단 근거를 매니페스트와 문서에 남깁니다.</p>
              <ul className="mt-8 grid gap-1.5 text-[15px] sm:grid-cols-2">
                {awards.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="text-blue">✓</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {facts.map((f) => (
                <div key={f.label} className="fact">
                  <div className="ico">{I[f.icon]}</div>
                  <div>
                    <b>{f.label}</b>
                    <span>{f.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {archiving.map((a) => (
              <a key={a.name} href={a.href} target="_blank" rel="noopener" className="arc">
                <div className="text-ink-2">{a.name === "GitHub" ? I.github : I.blog}</div>
                <div>
                  <div className="name">{a.name}</div>
                  <span className="url">{a.href}</span>
                  <p className="mt-2 text-[14px] text-ink-2">{a.desc.join(" ")}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 기술 ───── */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <SecHead id="skills" en="SKILLS" ko="쓰는 기술" desc="검은 칩은 실무에서 매일 쓰는 것, 흰 칩은 써 본 것입니다." />
          <div>
            {skills.map((s) => (
              <div key={s.cat} className="skill-row">
                <div className="cat">
                  {I[s.icon]}
                  {s.cat}
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.chips.map((c) => (
                    <span key={c.name} className={`chip ${c.main ? "main" : ""}`}>
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 프로젝트 ───── */}
      <section className="py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <SecHead id="projects" en="PROJECTS" ko="프로젝트" desc="카드의 「상세 보기」를 누르면 문제, 조치, 결과, 배운 점을 적은 트러블슈팅과 화면이 나옵니다." />
          <MajorToggle>
            <div className="grid gap-7 md:grid-cols-2">
              {projects.map((p) => (
                <article key={p.slug} className="pcard" data-major={p.major}>
                  {p.cover ? (
                    <div className="shot">
                      <Image src={p.cover.src} alt={p.cover.alt} width={p.cover.w} height={p.cover.h} sizes="(min-width: 768px) 520px, 100vw" />
                    </div>
                  ) : (
                    <div className="shot placeholder">{p.coverText ?? p.title}</div>
                  )}
                  <div className="inner">
                    <span className="kind">{p.kind}</span>
                    <span className="meta">
                      {p.period}, {p.team}
                    </span>
                    <h3>{p.title}</h3>
                    <div className="sub">{p.subtitle}</div>
                    <ul>
                      {p.results.slice(0, 3).map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                    <div className="tech">
                      {p.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <Link href={`/p/${p.slug}`} className="pbtn fill">
                        {I.book} 상세 보기
                      </Link>
                      {p.links?.[0] && (
                        <a href={p.links[0].href} target="_blank" rel="noopener" className="pbtn line">
                          {I.ext} 운영 중인 사이트
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </MajorToggle>
        </div>
      </section>

      {/* ───── 경력 ───── */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <SecHead id="career" en="CAREER" ko="경력과 활동" />
          <div className="tl max-w-[820px]">
            {career.map((c) => (
              <div key={c.org} className="tl-item">
                <div className="when">{c.period}</div>
                <h3>{c.org}</h3>
                <p className="mt-1 text-[15.5px] text-ink-2">{c.tagline}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.roles.map((r) => (
                    <span key={r} className="role">
                      {r}
                    </span>
                  ))}
                </div>
                <div className="mt-5">
                  {c.subs.map((s) => (
                    <div key={s.title + s.when} className="sub-item">
                      <h4>{s.title}</h4>
                      <div className="when">{s.when}</div>
                      <p>
                        {s.desc}
                        {s.slug && (
                          <>
                            {" "}
                            <Link href={`/p/${s.slug}`}>자세히 →</Link>
                          </>
                        )}
                        {!s.slug && s.href && (
                          <>
                            {" "}
                            <a href={s.href} target="_blank" rel="noopener">
                              {s.href.replace("https://", "")} ↗
                            </a>
                          </>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="tl-item !pb-0">
              <div className="when">2021.03 - 2027.02 (졸업 예정)</div>
              <h3>성공회대학교 IT융합자율학부</h3>
              <p className="mt-1 text-[15.5px] text-ink-2">
                소프트웨어 4.30 / 4.5, 컴퓨터공학 4.25 / 4.5. 운영체제, 네트워크프로그래밍, 데이터통신, 데이터베이스, 알고리즘 A+. 5학기 연속 성적 우수 장학금.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line py-10 text-center text-[14px] text-mute">
        © 2026 권민석. {profile.email}, {profile.phone}
      </footer>
    </main>
  );
}
