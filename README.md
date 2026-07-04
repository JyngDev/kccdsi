# 대성단열 (KCCDSI) — 웹사이트

KCC 안산 공식대리점 **대성단열**의 웹사이트 리포지토리입니다.

## 구성

- **`next-app/`** — 현재 사용하는 Next.js 14 (App Router) 애플리케이션
- **`img/`, `css/`, `js/`, `items/`, `*.html`** — 마이그레이션 이전 정적 HTML 사이트 (레거시)

## 개발

```bash
cd next-app
npm install
npm run dev
```

- Dev server: `http://localhost:3000`
- Build: `npm run build`
- Start: `npm run start`

## 주요 페이지

- `/` — 홈
- `/company` — 회사 소개
- `/customer` — 고객센터
- `/location` — 오시는 길
- `/items/[slug]` — 제품 상세 (49개 제품 라인업)

## 주요 스택

- Next.js 14 (App Router, TypeScript)
- React 18
- Pretendard 폰트, Feather Icons
- Naver Maps NCP Web Dynamic Map
- Custom Slick 슬라이더, AOS, Rellax
