/**
 * Home — v2 (large, editorial, corporate)
 *
 * Rollback:
 *   Legacy home at /legacy-home. Restore by copying
 *   src/app/legacy-home/page.tsx over this file, then removing
 *   the legacy-home/ directory.
 */

import Link from "next/link";
import { ArrowRight, Phone, MapPin, Mail, Clock } from "react-feather";
import NaverMap from "@/components/NaverMap";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { contactInfo } from "@/data/nav";

const products = [
  {
    href: "/items/ds-m-01",
    title: "그라스울",
    subtitle: "Glass Wool",
    tag: "01",
    desc: "불연성과 단열성이 뛰어나고 친환경성을 입증한 무기질 인조광물섬유 단열재.",
    image: "/img/vt-gr01.jpg",
  },
  {
    href: "/items/ds-m-04",
    title: "고무발포보온재",
    subtitle: "Rubber Foam",
    tag: "02",
    desc: "난연 성능이 탁월하고 유해물질이 없는 친환경 발포 보온재.",
    image: "/img/vt-bp.jpg",
  },
  {
    href: "/items/ds-m-05",
    title: "가교(무) 은박보온재",
    subtitle: "Cross-linked Foil",
    tag: "03",
    desc: "은박 마감으로 복사열을 반사, 결로 방지에 특화된 다층 보온재.",
    image: "/img/nav-ec.png",
  },
  {
    href: "/items/ds-m-09",
    title: "멜라민폼",
    subtitle: "Melamine Foam",
    tag: "04",
    desc: "불연 등급의 3차원 오픈셀 폼. 흡음·단열·방음 성능을 동시에 만족합니다.",
    image: "/img/vt-mf.jpg",
  },
  {
    href: "/items/ds-m-03",
    title: "세라크울",
    subtitle: "Cera Wool",
    tag: "05",
    desc: "Spinning 공법으로 제조한 초고온 내화 단열재. 산업로·화학 플랜트용.",
    image: "/img/vt-cr.jpg",
  },
  {
    href: "/items/ds-s-ks",
    title: "케이싱 자재",
    subtitle: "Casing Materials",
    tag: "06",
    desc: "함석·SUS·알루미늄까지 — 배관 및 덕트 마감을 위한 케이싱 라인업.",
    image: "/img/nav-ks.png",
  },
  {
    href: "/items/ds-m-06",
    title: "APS / PPA 카바",
    subtitle: "APS / PPA Cover",
    tag: "07",
    desc: "배관·덕트에 감싸는 성형 보온카바. 시공성이 뛰어나 현장 대응력이 우수합니다.",
    image: "/img/vt-aps.jpg",
  },
  {
    href: "/items/ds-m-02",
    title: "미네랄울",
    subtitle: "Mineral Wool",
    tag: "08",
    desc: "규산 칼슘계 광석을 고온 용융시켜 만든, 뛰어난 흡음·단열 성능의 보온재.",
    image: "/img/vt-mn00.jpg",
  },
];

const subsidiaries = [
  { href: "/items/ds-s-mgt", label: "매직 테이프", icon: "/img/nav-mt.png" },
  { href: "/items/ds-s-alt", label: "AL 은박테이프", icon: "/img/vt007.jpg" },
  { href: "/items/ds-s-eva", label: "Eva 네오프렌", icon: "/img/vt008.jpg" },
  { href: "/items/ds-s-rft", label: "고무발포 테이프", icon: "/img/vt009.jpg" },
  { href: "/items/ds-s-al", label: "알루미늄 밴드", icon: "/img/nav-al.png" },
  { href: "/items/ds-s-dp", label: "동파방지선", icon: "/img/nav-dp.png" },
  { href: "/items/ds-s-flx", label: "후렉시블", icon: "/img/nav-fl.png" },
  { href: "/items/ds-s-mp", label: "보온핀", icon: "/img/nav-bo.png" },
  { href: "/items/ds-s-gp", label: "골판지", icon: "/img/nav-gp.png" },
  { href: "/items/ds-s-bt", label: "불티 방지막", icon: "/img/nav-bt.png" },
  { href: "/items/ds-s-bg", label: "단열벽지", icon: "/img/nav-dy.png" },
  { href: "/items/ds-m-08", label: "열반사단열재", icon: "/img/nav-rf.png" },
];

const pillars = [
  {
    number: "01",
    title: "신속한 준비",
    desc: "풍부한 재고와 검증된 유통 파트너로 긴급 물량도 빠르게 대응합니다.",
  },
  {
    number: "02",
    title: "정확한 배송",
    desc: "수도권/전국 배송망을 통해 납기일 준수, 현장에 정확히 도착시킵니다.",
  },
  {
    number: "03",
    title: "합리적 가격",
    desc: "KCC 안산 공식 대리점의 이점을 살려 합리적인 가격을 유지합니다.",
  },
];

const testimonials = [
  {
    quote:
      "대성단열의 빠른 수급과 풍부한 재고로 인해 공사를 조속히 마무리할 수 있었습니다. 앞으로도 잘 부탁드립니다.",
    author: "*** 페인트 보온공사",
    role: "현장소장",
  },
  {
    quote:
      "긴급한 물량 납기일을 신속히 맞춰주셔서 감사드립니다. 항상 믿고 거래할 수 있습니다.",
    author: "** 공조닥트",
    role: "대표이사",
  },
  {
    quote:
      "수도권 및 지방 공사를 할 일이 많은데 언제나 넉넉한 재고를 보유하고 있어 자주 거래하고 있습니다.",
    author: "** 단열",
    role: "실장",
  },
  {
    quote:
      "자세한 설명과 적합한 자재들을 추천해주셔서 현장 상황에 맞게 작업할 수 있었습니다.",
    author: "** 냉동기계",
    role: "팀장",
  },
  {
    quote:
      "보온자재 준비되는 시간이 신속합니다. 납품에 차질이 없게 해주어 감사합니다.",
    author: "**** 상사",
    role: "대표",
  },
];

export default function HomePage() {
  return (
    <div className="home-v2">
      {/* ================ HERO ================ */}
      <section className="home-v2__hero">
        <div className="home-v2__container home-v2__hero-copy">
          <h1 className="home-v2__h1">
            산업 현장을 지키는
            <br />
            <span className="home-v2__h1-accent">보온단열의 표준.</span>
          </h1>
          <p className="home-v2__lead">
            검증된 품질과 신속한 공급으로 현장을 함께합니다.
          </p>
          <div className="home-v2__cta-row">
            <Link href="/items/ds-m" className="home-v2__btn home-v2__btn--primary">
              제품 살펴보기
              <ArrowRight size={16} strokeWidth={2.2} />
            </Link>
            <a href={contactInfo.phoneRaw} className="home-v2__btn home-v2__btn--link">
              문의하기
              <ArrowRight size={14} strokeWidth={2.2} />
            </a>
          </div>
        </div>
        <div className="home-v2__hero-image">
          <img src="/img/vt-gr.jpg" alt="대성단열 대표 제품" />
        </div>
        <div className="home-v2__hero-metrics">
          <div className="home-v2__container home-v2__hero-metrics-inner">
            <div>
              <div className="home-v2__metric-value">30+</div>
              <div className="home-v2__metric-label">년 업력</div>
            </div>
            <div>
              <div className="home-v2__metric-value">100+</div>
              <div className="home-v2__metric-label">취급 품목</div>
            </div>
            <div>
              <div className="home-v2__metric-value">1,000+</div>
              <div className="home-v2__metric-label">시공 현장</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================ PRODUCTS ================ */}
      <section className="home-v2__products">
        <div className="home-v2__container">
          <div className="home-v2__section-head">
            <h2 className="home-v2__h2">
              모든 현장을 위한 전문 라인업.
            </h2>
            <Link href="/items/ds-m" className="home-v2__section-cta">
              전체 보기
              <ArrowRight size={14} strokeWidth={2.2} />
            </Link>
          </div>
          <div className="home-v2__product-grid">
            {products.map((p) => (
              <Link key={p.href} href={p.href} className="home-v2__product-card">
                <div className="home-v2__product-thumb">
                  <img src={p.image} alt={p.title} />
                </div>
                <div className="home-v2__product-body">
                  <div className="home-v2__product-title">{p.title}</div>
                  <div className="home-v2__product-desc">{p.desc}</div>
                  <div className="home-v2__product-more">
                    더 알아보기
                    <ArrowRight size={14} strokeWidth={2.2} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================ SUBSIDIARIES ================ */}
      <section className="home-v2__subs-section">
        <div className="home-v2__container">
          <div className="home-v2__section-head">
            <h2 className="home-v2__h2">
              부자재도 함께 준비되어 있습니다.
            </h2>
            <p className="home-v2__section-lead">
              보온핀, 알루미늄 밴드, 매직 테이프까지 — 시공에 꼭 필요한 부자재 라인업.
            </p>
          </div>
          <div className="home-v2__subs-grid" aria-label="부자재 목록">
            {subsidiaries.map((s) => (
              <Link key={s.href} href={s.href} className="home-v2__sub-card">
                <div className="home-v2__sub-icon">
                  <img src={s.icon} alt="" />
                </div>
                <div className="home-v2__sub-label">{s.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================ VALUE PILLARS ================ */}
      <section className="home-v2__pillars-section">
        <div className="home-v2__container">
          <div className="home-v2__section-head">
            <h2 className="home-v2__h2">
              신속함, 정확함, 그리고 합리성.
            </h2>
          </div>
          <div className="home-v2__pillar-grid">
            {pillars.map((p) => (
              <div key={p.title} className="home-v2__pillar">
                <div className="home-v2__pillar-number">{p.number}</div>
                <div className="home-v2__pillar-title">{p.title}</div>
                <div className="home-v2__pillar-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================ TESTIMONIALS ================ */}
      <section className="home-v2__quote-section">
        <div className="home-v2__container">
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      {/* ================ CONTACT / LOCATION ================ */}
      <section className="home-v2__contact-section">
        <div className="home-v2__container home-v2__contact-inner">
          <div className="home-v2__contact-copy">
            <h2 className="home-v2__h2">
              필요한 순간,
              <br />
              바로 연락 주세요.
            </h2>
            <div className="home-v2__contact-list">
              <div className="home-v2__contact-item">
                <MapPin size={18} strokeWidth={2} />
                <span>{contactInfo.address}</span>
              </div>
              <div className="home-v2__contact-item">
                <Phone size={18} strokeWidth={2} />
                <a href={contactInfo.phoneRaw}>{contactInfo.phone}</a>
                <span className="home-v2__contact-sub">
                  · 팩스 {contactInfo.fax}
                </span>
              </div>
              <div className="home-v2__contact-item">
                <Mail size={18} strokeWidth={2} />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
              <div className="home-v2__contact-item">
                <Clock size={18} strokeWidth={2} />
                <span>
                  {contactInfo.weekdayHours} · {contactInfo.saturdayHours}
                </span>
              </div>
            </div>
            <div className="home-v2__cta-row">
              <a href={contactInfo.phoneRaw} className="home-v2__btn home-v2__btn--primary">
                <Phone size={16} strokeWidth={2} />
                지금 전화하기
              </a>
              <Link href="/location" className="home-v2__btn home-v2__btn--ghost">
                오시는 길
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>
          </div>
          <div className="home-v2__contact-map">
            <NaverMap />
          </div>
        </div>
      </section>
    </div>
  );
}
