import NaverMap from "@/components/NaverMap";
import { contactInfo } from "@/data/nav";

export const metadata = {
  title: "위치 안내 — 대성단열",
  description: "대성단열 찾아오시는 길",
};

export default function LocationPage() {
  return (
    <div id="layouts" className="layouts">
      <div className="layouts__center center">
        <div className="layouts__wrap">
          <div className="layouts__head" data-aos="animation-scale-y">
            <h2 className="layouts__title title">
              대성단열
              <br />
              찾아오시는 길<span className="title__color">.</span>
            </h2>
          </div>
          <div className="layouts__list">
            <div className="layouts__item" data-aos="animation-scale-y">
              <div className="layouts__icon">
                <img className="layouts__pic" src="/img/layout-1.png" alt="" />
              </div>
              <div className="layouts__text">{contactInfo.address}</div>
            </div>
            <div className="layouts__item" data-aos="animation-scale-y">
              <div className="layouts__icon">
                <img className="layouts__pic" src="/img/layout-2.png" alt="" />
              </div>
              <div className="layouts__text">{contactInfo.phone}</div>
            </div>
            <div className="layouts__item" data-aos="animation-scale-y">
              <div className="layouts__icon">
                <img className="layouts__pic" src="/img/layout-3.png" alt="" />
              </div>
              <div className="layouts__text">{contactInfo.email}</div>
            </div>
          </div>
        </div>
        <NaverMap />
      </div>
    </div>
  );
}
