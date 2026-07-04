"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "./Arrow";

const slides = [
  {
    img: "/img/camera.png",
    category: "가교 은박보온재",
    text: "파이프 보온단열재, 덕트 보온단열재",
    href: "/items/ds-m-05",
  },
  {
    img: "/img/calendar.png",
    category: "APS/PPA",
    text: "직관 카바, 엘보 카바",
    href: "/items/ds-m-06",
  },
  {
    img: "/img/m-m-3.png",
    category: "열반사단열재",
    text: "내벽/외벽 열반사 단열재",
    href: "/items/ds-m-07",
  },
];

export default function FeaturesSlider() {
  return (
    <Slider
      className="features__slider js-features-slider"
      slidesToShow={2}
      slidesToScroll={1}
      arrows
      dots={false}
      infinite={false}
      speed={600}
      prevArrow={<Arrow direction="prev" />}
      nextArrow={<Arrow direction="next" />}
      responsive={[{ breakpoint: 1024, settings: { slidesToShow: 1 } }]}
    >
      {slides.map((slide) => (
        <div className="features__slide" key={slide.category}>
          <div className="features__details">
            <div className="features__preview">
              <img className="features__pic" src={slide.img} alt="" />
            </div>
            <div className="features__category">{slide.category}</div>
            <div className="features__text">{slide.text}</div>
            <Link className="features__link" href={slide.href}>
              바로가기
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
}
