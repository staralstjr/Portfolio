import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, bySlug, type Shot } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = bySlug(slug);
  return { title: p ? p.title : "프로젝트" };
}

/*
 * 화면 갤러리. 비율별로 묶어서 놓는다.
 *  wide  (가로/세로 1.3 이상): 1장이면 전체 너비, 2장 이상이면 2열
 *  tall  (세로/가로 1.2 이상): 3열, 같은 높이 상자에 맞춰 넣음
 *  square(그 사이):           3열, 4:3 상자
 * 순서는 유지하되 같은 종류가 이어지면 한 그리드로 합친다. 커버로 쓴 이미지는 뺀다.
 */
type Kind = "banner" | "wide" | "tall" | "portrait" | "square";
// wide: 데스크톱 캡처 / tall: 폰 캡처(위를 맞춰 자름) / portrait: 카드뉴스, PR 같은 4:5 전후(자르지 않음) / square: 그 사이
const kindOf = (s: Shot): Kind => {
  const r = s.w / s.h;
  return r >= 2.2 ? "banner" : r >= 1.3 ? "wide" : r < 0.62 ? "tall" : r < 0.95 ? "portrait" : "square";
};

function Shots({ shots, exclude }: { shots: Shot[]; exclude?: string }) {
  const list = shots.filter((s) => s.src !== exclude);
  const groups: { kind: Kind; items: Shot[] }[] = [];
  for (const s of list) {
    const k = kindOf(s);
    const last = groups[groups.length - 1];
    if (last && last.kind === k) last.items.push(s);
    else groups.push({ kind: k, items: [s] });
  }
  return (
    <div className="space-y-6">
      {groups.map((g, i) => {
        if (g.kind === "wide" || g.kind === "banner") {
          // banner(가로 2.2배 이상)는 항상 한 장씩 전체 너비
          const two = g.kind === "wide" && g.items.length > 1;
          return (
            <div key={i} className={`grid gap-6 ${two ? "sm:grid-cols-2" : ""}`}>
              {g.items.map((s) => (
                <figure key={s.src}>
                  <Image src={s.src} alt={s.alt} width={s.w} height={s.h} sizes={two ? "(min-width: 900px) 420px, 100vw" : "(min-width: 900px) 852px, 100vw"} className="w-full" />
                  <figcaption>{s.caption}</figcaption>
                </figure>
              ))}
            </div>
          );
        }
        return (
          <div key={i} className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            {g.items.map((s) => (
              <figure key={s.src}>
                <div className={`frame ${g.kind}`}>
                  <Image src={s.src} alt={s.alt} width={s.w} height={s.h} sizes="(min-width: 900px) 280px, 50vw" />
                </div>
                <figcaption>{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-5 text-[22px] font-extrabold leading-tight">{children}</h2>;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = bySlug(slug);
  if (!p) notFound();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const coverShown = !!p.cover && p.cover.w > p.cover.h;
  const prev = projects[idx - 1];
  const next = projects[idx + 1];

  return (
    <article>
      {/* 머리 */}
      <header className="bg-paper border-b border-line">
        <div className="mx-auto max-w-[900px] px-6 pb-12 pt-12">
          <Link href="/#projects" className="text-[14px] font-bold text-mute hover:text-ink">
            ← PROJECTS
          </Link>
          <div className="mt-6">
            <span className="kind">{p.kind}</span>
          </div>
          <h1 className="mt-4 text-[30px] font-extrabold leading-[1.3] sm:text-[38px]">{p.title}</h1>
          <p className="mt-3 text-[17px] text-ink-2">{p.subtitle}</p>
          <dl className="facts mt-8">
            <dt>기간</dt>
            <dd>
              {p.period} ({p.team})
            </dd>
            <dt>역할</dt>
            <dd>{p.role}</dd>
            {p.scale && (
              <>
                <dt>규모</dt>
                <dd>{p.scale}</dd>
              </>
            )}
            <dt>기술</dt>
            <dd>
              <span className="tech !mt-0">{p.tags.map((t) => <span key={t}>{t}</span>)}</span>
            </dd>
            {p.links && p.links.length > 0 && (
              <>
                <dt>링크</dt>
                <dd>
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener" className="text-blue underline underline-offset-4">
                      {l.href}
                    </a>
                  ))}
                </dd>
              </>
            )}
          </dl>
        </div>
      </header>

      <div className="mx-auto max-w-[900px] px-6">
        {/* 커버 */}
        {p.cover && p.cover.w > p.cover.h && (
          <figure className="pt-12">
            <Image src={p.cover.src} alt={p.cover.alt} width={p.cover.w} height={p.cover.h} sizes="(min-width: 900px) 852px, 100vw" priority className="w-full" />
            <figcaption>{p.cover.caption}</figcaption>
          </figure>
        )}

        {/* 개요 */}
        <section className="pt-14">
          <H2>개요</H2>
          <div className="prose text-[16.5px] leading-[1.9] text-ink-2">
            {p.overview.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </div>
        </section>

        {/* 성과 */}
        <section className="mt-14">
          <H2>성과</H2>
          <ul className="list-disc space-y-2 pl-6 text-[16px] leading-[1.8]">
            {p.results.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          {p.note && <p className="mt-6 rounded-lg bg-tint px-5 py-4 text-[15px] text-ink-2">{p.note}</p>}
        </section>

        {/* 산출물 */}
        {p.evidence?.map((e) => (
          <section key={e.title} className="mt-14">
            <H2>{e.title}</H2>
            <pre className="evidence" dangerouslySetInnerHTML={{ __html: e.code }} />
            {e.note && <p className="mt-3 text-[14.5px] text-mute">{e.note}</p>}
          </section>
        ))}

        {/* 스크린샷 */}
        {p.shots && p.shots.length > 0 && (
          <section className="mt-14">
            <H2>화면</H2>
            <Shots shots={p.shots} exclude={coverShown ? p.cover?.src : undefined} />
          </section>
        )}

        {/* 트러블슈팅 */}
        {p.troubles.map((t, i) => (
          <section key={t.title} id={`t${i + 1}`} className="mt-20 rounded-2xl border border-line bg-paper p-7 sm:p-10">
            <div className="text-[13px] font-bold tracking-widest text-blue">TROUBLESHOOTING {i + 1}</div>
            <h2 className="mt-2 text-[24px] font-black leading-[1.4]">{t.title}</h2>

            <div className="mt-8 grid gap-10">
              <div>
                <h3 className="mb-3 text-[17px] font-bold">문제</h3>
                <div className="prose text-[15.5px] leading-[1.85] text-ink-2">
                  {t.problem.map((x, j) => (
                    <p key={j}>{x}</p>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-[17px] font-bold">조치</h3>
                <ol className="list-decimal space-y-2 pl-6 text-[15.5px] leading-[1.85] marker:font-bold">
                  {t.actions.map((x, j) => (
                    <li key={j}>{x}</li>
                  ))}
                </ol>
              </div>
              <div className="grid gap-6 rounded-xl bg-white p-6 sm:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-[15px] font-bold">결과</h3>
                  <p className="text-[15px] leading-[1.8] text-ink-2">{t.result}</p>
                </div>
                <div>
                  <h3 className="mb-2 text-[15px] font-bold">배운 점</h3>
                  <p className="text-[15px] leading-[1.8] text-ink-2">{t.learned}</p>
                </div>
              </div>
              {t.shots && t.shots.length > 0 && <Shots shots={t.shots} exclude={coverShown ? p.cover?.src : undefined} />}
            </div>
          </section>
        ))}

        {/* 이전 / 다음 */}
        <nav className="my-20 flex justify-between gap-6 border-t border-line pt-8 text-[15px]" aria-label="다른 프로젝트">
          {prev ? (
            <Link href={`/p/${prev.slug}`} className="max-w-[45%] font-bold hover:text-blue">
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/p/${next.slug}`} className="max-w-[45%] text-right font-bold hover:text-blue">
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  );
}
