import { contactInfo } from "@/data/nav";
import NaverMap from "@/components/NaverMap";

export const metadata = {
  title: "고객센터 — 대성단열",
  description: "대성단열 고객센터 안내",
};

export default function CustomerPage() {
  return (
    <div className="layouts">
      <div className="layouts__center center">
        <div className="layouts__wrap">
          <div className="layouts__head" data-aos="animation-scale-y">
            <h2 className="layouts__title title">
              당신에게 힘이 되는 파트너
              <br />
              대성단열<span className="title__color">.</span>
            </h2>
            <div className="layouts__info info">
              필요할 땐 언제든지 문의하세요. 우리는 당신에게 힘이 되는 파트너가 될 것이라 믿습니다.
            </div>
          </div>
          <div className="layouts__list">
            <div className="layouts__item" data-aos="animation-scale-y">
              <div className="layouts__icon">
                <img className="layouts__pic" src="/img/layout-2.png" alt="" />
              </div>
              <div className="layouts__text">
                <strong>대표전화</strong>
                <br />
                <a href={contactInfo.phoneRaw}>{contactInfo.phone}</a>
              </div>
            </div>
            <div className="layouts__item" data-aos="animation-scale-y">
              <div className="layouts__icon">
                <img className="layouts__pic" src="/img/layout-2.png" alt="" />
              </div>
              <div className="layouts__text">
                <strong>팩스</strong>
                <br />
                {contactInfo.fax}
              </div>
            </div>
            <div className="layouts__item" data-aos="animation-scale-y">
              <div className="layouts__icon">
                <img className="layouts__pic" src="/img/layout-3.png" alt="" />
              </div>
              <div className="layouts__text">
                <strong>이메일</strong>
                <br />
                {contactInfo.email}
              </div>
            </div>
          </div>
          <div className="layouts__list" style={{ marginTop: 32 }}>
            <div className="layouts__item">
              <div className="layouts__text">
                <strong>운영시간</strong>
                <br />
                {contactInfo.weekdayHours}
                <br />
                {contactInfo.saturdayHours}
              </div>
            </div>
            <div className="layouts__item">
              <div className="layouts__text">
                <strong>주소</strong>
                <br />
                경기도 안산시 단원구 원곡동 994번지
                <br />
                유통상가 9동 101호
              </div>
            </div>
          </div>
          <div style={{ marginTop: 48 }}>
            <NaverMap />
          </div>
        </div>
      </div>
    </div>
  );
}
