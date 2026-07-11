import Link from "next/link";
import { Clock, Mail, MapPin, Phone, Printer } from "react-feather";
import NaverMap from "@/components/NaverMap";
import { contactInfo } from "@/data/nav";

export const metadata = {
  title: "위치 안내 — 대성단열",
  description: "대성단열 찾아오시는 길",
};

export default function LocationPage() {
  return (
    <div className="home-v2 location-v2">
      {/* HERO */}
      <section className="location-v2__hero">
        <div className="home-v2__container">
          <h1 className="home-v2__h1">
            찾아오시는 길
            <span className="home-v2__h1-accent">.</span>
          </h1>
          <p className="home-v2__lead">
            자재 확인부터 현장 맞춤 상담, 그리고 신속한 출고를 약속드립니다.
          </p>
        </div>
      </section>

      {/* MAP + INFO */}
      <section className="location-v2__main">
        <div className="home-v2__container location-v2__main-inner">
          <div className="location-v2__map">
            <NaverMap height="100%" />
          </div>

          <div className="location-v2__info">
            <div className="home-v2__contact-list">
              <div className="home-v2__contact-item">
                <MapPin size={18} strokeWidth={2} />
                <span>{contactInfo.address}</span>
              </div>
              <div className="home-v2__contact-item">
                <Phone size={18} strokeWidth={2} />
                <a
                  href={contactInfo.phoneRaw}
                  className="has-tooltip"
                  data-tooltip="연락처로 문의하기"
                  aria-label="연락처로 문의하기"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="home-v2__contact-item">
                <Printer size={18} strokeWidth={2} />
                <span>팩스 {contactInfo.fax}</span>
              </div>
              <div className="home-v2__contact-item">
                <Mail size={18} strokeWidth={2} />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="has-tooltip"
                  data-tooltip="이메일 보내기"
                  aria-label="이메일 보내기"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="home-v2__contact-item">
                <Clock size={18} strokeWidth={2} />
                <span>{contactInfo.weekdayHours}</span>
              </div>
              <div className="home-v2__contact-item">
                <Clock size={18} strokeWidth={2} />
                <span>{contactInfo.saturdayHours}</span>
              </div>
            </div>

            <div className="home-v2__cta-row">
              <a
                href={contactInfo.phoneRaw}
                className="home-v2__btn home-v2__btn--primary"
              >
                <Phone size={16} strokeWidth={2} />
                지금 전화하기
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
