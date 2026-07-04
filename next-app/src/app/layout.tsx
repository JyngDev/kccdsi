import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RightFloat from "@/components/RightFloat";
import MobileFloatBtn from "@/components/MobileFloatBtn";
import AOSProvider from "@/components/AOSProvider";
import RellaxProvider from "@/components/RellaxProvider";

export const metadata: Metadata = {
  title: "대성단열 KCC안산대리점",
  description: "안산 보온단열재 판매, 대성단열",
  keywords: ["안산", "단열재", "대성단열", "kcc대리점"],
  authors: [{ name: "KCCDSI" }],
  openGraph: {
    type: "website",
    title: "안산 KCC, 대성단열",
    url: "http://kccdsi.com",
    siteName: "대성단열",
    description: "대성단열, KCC 안산 공식 대리점",
    images: ["https://s3.ap-northeast-2.amazonaws.com/kccdsi.com/img/ds-og-image.png"],
  },
  manifest: "/img/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body id="top">
        <AOSProvider />
        <RellaxProvider />
        <Header />
        <div className="page">{children}</div>
        <RightFloat />
        <MobileFloatBtn />
        <Footer />
      </body>
    </html>
  );
}
