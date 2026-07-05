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
  icons: {
    icon: [
      { url: "/img/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/img/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/img/favicon/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/img/favicon/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/img/favicon/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/img/favicon/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/img/favicon/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/img/favicon/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/img/favicon/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/img/favicon/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/img/favicon/apple-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "icon",
        url: "/img/favicon/android-icon-192x192.png",
        sizes: "192x192",
      },
    ],
  },
  manifest: "/img/favicon/site.webmanifest",
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
