import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav";
import ToTop from "@/components/ToTop";

export const metadata: Metadata = {
  title: {
    default: "권민석 | 개발자 포트폴리오",
    template: "%s | 권민석",
  },
  description: "서비스를 만들고, 그 서비스가 도는 환경까지 옮기고 운영하는 개발자 권민석의 포트폴리오",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body id="top">
        <TopNav />
        {children}
        <ToTop />
      </body>
    </html>
  );
}
