#!/usr/bin/env python3
"""pdf.html(슬라이드 20장) -> 16:9 페이지 단위 PDF."""
import asyncio, pathlib
from playwright.async_api import async_playwright
from pypdf import PdfReader

ROOT = pathlib.Path(__file__).parent
SRC  = (ROOT / "pdf.html").as_uri()
OUT  = ROOT / "권민석_포트폴리오.pdf"
W, H = 1456, 816

async def main():
    async with async_playwright() as p:
        b  = await p.chromium.launch(channel="chrome")
        pg = await b.new_page(viewport={"width": W, "height": H})
        await pg.goto(SRC, wait_until="networkidle")
        await pg.wait_for_function(
            "() => Array.from(document.images).every(i => i.complete && i.naturalHeight > 0)",
            timeout=90000)
        await pg.wait_for_timeout(900)
        # 슬라이드 개수와 넘침 검사
        info = await pg.evaluate("""() => {
            const s = [...document.querySelectorAll('.slide')];
            return { n: s.length, over: s.map((el,i) => {
                const pad = el.querySelector('.pad');
                return pad && pad.scrollHeight > el.clientHeight ? i+1 : null;
            }).filter(Boolean) };
        }""")
        await pg.pdf(path=str(OUT), prefer_css_page_size=True, print_background=True,
                     margin={k: "0" for k in ("top","bottom","left","right")})
        await b.close()
    n = len(PdfReader(str(OUT)).pages)
    print(f"완료: {OUT.name} / 슬라이드 {info['n']}장 -> PDF {n}쪽 / {OUT.stat().st_size/1048576:.1f}MB")
    if info["over"]:
        print(f"  ⚠ 내용이 넘친 슬라이드: {info['over']}")

asyncio.run(main())
