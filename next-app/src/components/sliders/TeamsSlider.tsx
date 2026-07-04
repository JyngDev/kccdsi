"use client";

import Slider from "react-slick";
import Arrow from "./Arrow";

const slides = [
  {
    title: "정말 만족합니다.",
    text: "“대성단열의 빠른 수급과 풍부한 재고로 인해 공사를 조속히 마무리 할 수 있었습니다. 감사합니다.”",
    name: "*** 페인트 보온공사 현장",
    role: "현장소장",
  },
  {
    title: "역시 대성단열입니다.",
    text: "“긴급한 물량 납기일을 신속히 맞춰주셔서 감사드립니다. 앞으로도 잘 부탁드립니다.”",
    name: "** 공조닥트",
    role: "대표이사",
  },
  {
    title: "항상 이용합니다.",
    text: "“수도권 및 지방 공사를 할일이 많은데 언제나 넉넉한 재고를 보유하고 있어 자주 거래하고 있습니다.”",
    name: "**단열",
    role: "실장",
  },
  {
    title: "너무 친절합니다.",
    text: "“자세한 설명과 적합한 자재들을 추천해주셔서 현장상황에 맞게 작업할 수 있었습니다. 다음 거래를 기대합니다.”",
    name: "**냉동기계",
    role: "과장",
  },
];

export default function TeamsSlider() {
  return (
    <Slider
      className="teams__slider js-teams-slider"
      slidesToShow={2}
      slidesToScroll={1}
      arrows
      dots={false}
      speed={700}
      prevArrow={<Arrow direction="prev" />}
      nextArrow={<Arrow direction="next" />}
      responsive={[{ breakpoint: 1200, settings: { slidesToShow: 1 } }]}
    >
        {slides.map((slide) => (
          <div className="teams__slide" key={slide.title}>
            <div className="teams__line" style={{ backgroundColor: "#111" }} />
            <div className="teams__name" style={{ color: "#e53c49" }}>
              {slide.title}
            </div>
            <div className="teams__text">{slide.text}</div>
            <div className="teams__user">
              <div className="teams__box">
                <div className="teams__man">{slide.name}</div>
                <div className="teams__login">{slide.role}</div>
              </div>
            </div>
          </div>
      ))}
    </Slider>
  );
}
