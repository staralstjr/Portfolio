import Link from "next/link";

const items = [
  { href: "/#about", label: "소개" },
  { href: "/#skills", label: "기술" },
  { href: "/#projects", label: "프로젝트" },
  { href: "/#career", label: "경력" },
];

export default function TopNav() {
  return (
    <header className="topnav">
      <div className="mx-auto flex h-full max-w-[1100px] items-center justify-between px-6">
        <Link href="/" className="brand">
          권민석
        </Link>
        <nav className="links flex items-center gap-1" aria-label="섹션">
          {items.map((i) => (
            <Link key={i.href} href={i.href}>
              {i.label}
            </Link>
          ))}
          <a href="https://github.com/staralstjr" target="_blank" rel="noopener" className="hidden sm:inline">
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
