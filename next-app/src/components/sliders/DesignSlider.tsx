"use client";

import Link from "next/link";
import Slider from "react-slick";
import Arrow from "./Arrow";

const slides = [
  {
    img: "/img/design-pic-1.png",
    info: "매직테이프",
    text: "컬러별 보온마감 테이프",
    href: "/items/ds-s-mgt",
  },
  {
    img: "/img/design-pic-2.png",
    info: "알루미늄 밴드",
    text: "소방/배관 보온재 마감시 보강자재",
    href: "/items/ds-s-al",
  },
  {
    img: "/img/design-pic-3.png",
    info: "케이싱 자재",
    text: "단열재 보호/이탈방지 고정용 자재",
    href: "/items/ds-s-ks",
  },
  {
    img: "/img/design-pic-4.png",
    info: "후렉시블",
    text: "타포린, 알루미늄, 크린솜 외",
    href: "/items/ds-s-flx",
  },
  {
    img: "/img/design-pic-5.png",
    info: "동파방지열선",
    text: "겨울철 동파방지 시공자재",
    href: "/items/ds-s-dp",
  },
];

export default function DesignSlider() {
  return (
    <Slider
      className="design__slider js-design-slider"
      slidesToShow={3}
      slidesToScroll={1}
      arrows
      dots={false}
      infinite={false}
      speed={700}
      prevArrow={<Arrow direction="prev" />}
      nextArrow={<Arrow direction="next" />}
      responsive={[
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
      ]}
    >
        {slides.map((slide) => (
          <div className="design__slide" key={slide.info}>
            <div className="design__view">
              <div className="design__preview">
                <img className="design__pic" src={slide.img} alt="" />
              </div>
            </div>
            <div className="design__details">
              <div className="design__category">부자재</div>
              <div className="design__info">{slide.info}</div>
              <div className="design__text">{slide.text}</div>
              <Link className="design__link" href={slide.href}>
                바로가기
              </Link>
            </div>
          </div>
      ))}
    </Slider>
  );
}
