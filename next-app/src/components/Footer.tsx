"use client";

import Link from "next/link";
import { ArrowUp } from "react-feather";
import { contactInfo, footerSections } from "@/data/nav";

export default function Footer() {
  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link className="site-footer__logo" href="/">
              <img src="/img/logo-dark.png" alt="대성단열" />
            </Link>
            <div className="site-footer__contact">
              <div className="site-footer__contact-line">
                고객 센터{" "}
                <a
                  className="site-footer__contact-value has-tooltip"
                  href={contactInfo.phoneRaw}
                  data-tooltip="연락처로 문의하기"
                  aria-label="연락처로 문의하기"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="site-footer__contact-line">
                팩스 <span className="site-footer__contact-value">{contactInfo.fax}</span>
              </div>
              <div className="site-footer__contact-line">
                이메일{" "}
                <a
                  className="site-footer__contact-value has-tooltip"
                  href={`mailto:${contactInfo.email}`}
                  data-tooltip="이메일 보내기"
                  aria-label="이메일 보내기"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="site-footer__contact-line">
                영업시간 평일 08:00~18:00 · 토 08:00~12:00 · 일 휴무
              </div>
            </div>
          </div>

          <nav className="site-footer__nav" aria-label="Footer">
            {footerSections.map((section, idx) => (
              <div key={idx} className="site-footer__col">
                {section.label.trim() && (
                  <h4 className="site-footer__col-title">{section.label}</h4>
                )}
                <ul className="site-footer__col-list">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link className="site-footer__col-link" href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="site-footer__business">
          <span>상호명 · 대성단열</span>
          <span>대표이사 · 정동조</span>
          <span>사업자등록번호 · 133-10-81054</span>
          <span>주소 · 경기도 안산시 단원구 원곡동 994-5번지 유통상가 9동 101호</span>
          <span>문의 · {contactInfo.email}</span>
        </div>

        <div className="site-footer__bottom">
          <div className="site-footer__copyright">
            © 2012–2026 대성단열. All rights reserved.
          </div>
          <button
            type="button"
            className="site-footer__top-btn"
            onClick={scrollTop}
            aria-label="맨 위로"
          >
            <ArrowUp size={16} strokeWidth={2} />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
