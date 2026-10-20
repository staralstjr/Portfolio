import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32">
      <div className="label">404</div>
      <h1 className="mt-3 text-2xl font-bold text-ink">없는 페이지입니다</h1>
      <Link href="/" className="mt-6 inline-block text-accent">
        ← 처음으로
      </Link>
    </div>
  );
}
