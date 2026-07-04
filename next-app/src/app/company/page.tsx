import Link from "next/link";
import NaverMap from "@/components/NaverMap";

export const metadata = {
  title: "회사소개 — 대성단열",
  description: "대성단열 회사소개",
};

const reviews = [
  {
    text: "“대성단열의 빠른 수급과 풍부한 재고로 인해 공사를 조속히 마무리 할 수 있었습니다. 감사합니다.”",
    author: "*** 페인트 보온공사 현장",
  },
  {
    text: "“긴급한 물량 납기일을 신속히 맞춰주셔서 감사드립니다. 앞으로도 잘 부탁드립니다.”",
    author: "**공조닥트",
  },
  {
    text: "“수도권 및 지방 공사를 할일이 많은데 언제나 넉넉한 재고를 보유하고 있어 자주 거래하고 있습니다.”",
    author: "**단열",
  },
  {
    text: "“자세한 설명과 적합한 자재들을 추천해주셔서 현장상황에 맞게 작업할 수 있었습니다. 다음 거래를 기대합니다.”",
    author: "**냉동기계",
  },
  {
    text: "“보온자재 준비되는 시간이 신속합니다. 납품에 차질이 없게 해주어 감사합니다.”",
    author: "****상사",
  },
];

const products = [
  {
    href: "/items/ds-m-01",
    img: "/img/camera-big.png",
    category: "그라스울",
    text: "유리원료를 고온에 녹여 이를 섬유화한 뒤 일정 형태로 만든 무기질의 인조 광물 섬유 단열재",
  },
  {
    href: "/items/ds-m-02",
    img: "/img/hand.png",
    category: "미네랄울",
    text: "규산 칼슘계의 광석을 고온으로 용융시켜 만드는 단열재",
  },
  {
    href: "/items/ds-m-03",
    img: "/img/color-picker.png",
    category: "세라크울",
    text: "최첨단 공법인 Spinning 공법으로 제조한 초고온 내화 단열재",
  },
];

export default function CompanyPage() {
  return (
    <>
      <div className="main">
        <div className="main__center center">
          <div className="main__wrap">
            <h1 className="main__title title" data-aos>
              <span className="title__box">
                <span className="title__text">
                  차별화된 경쟁력과
                  <br />
                  전문성으로
                </span>
              </span>
              <span className="title__box">
                <span className="title__text" style={{ color: "#e53c49" }}>
                  대성단열<span className="title__color">.</span>
                </span>
              </span>
            </h1>
            <div
              className="main__info info"
              data-aos="animation-scale-y"
              data-aos-delay="300"
            >
              고객에게 신뢰받는 회사, 대성단열이 항상 함께하겠습니다.
            </div>
          </div>
        </div>
      </div>

      <div className="quality">
        <div className="quality__head">
          <div className="quality__center center">
            <div className="quality__top" data-aos="animation-scale-y">
              <h2 className="quality__title title">
                대성단열의 약속
                <span className="title__color">.</span>
              </h2>
            </div>
            <div
              className="quality__info info"
              data-aos="animation-scale-y"
              data-aos-delay="200"
            >
              우리는 산업에 대한 경험을 바탕으로 최고 품질의 제품을 상시 확보하여 합리적인 가격으로 제공합니다.
            </div>
          </div>
        </div>
        <div className="quality__body">
          {products.map((card) => (
            <div className="quality__col" key={card.category}>
              <div className="quality__item" data-aos="animation-scale-x-left">
                <div className="quality__icon">
                  <img className="quality__pic" src={card.img} alt="" />
                </div>
                <div className="quality__details">
                  <div className="quality__category">{card.category}</div>
                  <div className="quality__text">{card.text}</div>
                  <Link className="quality__link" href={card.href}>
                    바로가기
                    <img src="/img/arrow-right.svg" className="mmj" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="speed">
        <div className="speed__center center">
          <div className="speed__wrap">
            <div className="speed__head" data-aos="animation-scale-y">
              <h2 className="speed__title title">
                Professional
                <br />
                Integrity
                <span className="title__color">.</span>
              </h2>
              <div className="speed__text">
                우리는 산업에 대한 경험을 바탕으로 최고 품질의 제품을 상시 확보하여 합리적인 가격으로 제공합니다.
              </div>
              <div className="speed__signature" style={{ marginTop: 16 }}>
                대성단열만의 전문성으로
                <br />
                고객만족을 위해 최선을 다합니다
                <br />
                <strong>임직원 일동</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contacts">
        <div className="contacts__center center">
          <div className="contacts__container">
            <div className="contacts__wrap">
              <div
                className="contacts__stage stage"
                data-aos="animation-scale-y"
              >
                Contact us 👋
              </div>
              <h2
                className="contacts__title title"
                data-aos="animation-scale-y"
                data-aos-delay="200"
              >
                대성단열 찾아오시는 길
              </h2>
              <div
                className="contacts__info info"
                data-aos="animation-scale-y"
                data-aos-delay="400"
              >
                경기도 안산시 단원구 원곡동 994-5번지 유통상가 9동 101호
                <br />
                (구 주소: 원곡동 994-5번지)
                <br />
                전화: 031-493-0052 / 팩스: 031-493-0054
                <br />
                메일: jdj0001@naver.com
              </div>
            </div>
            <div className="contacts__row">
              <NaverMap />
            </div>
          </div>
        </div>
      </div>

      <div className="review">
        <div className="review__center center">
          <div className="review__stage stage" data-aos="animation-scale-y">
            DSI Partners
          </div>
          <h2
            className="review__title title"
            data-aos="animation-scale-y"
            data-aos-delay="200"
          >
            대성단열과 함께하는
            <br />
            파트너사
          </h2>
          <h3
            className="review__subtitle"
            data-aos="animation-scale-y"
            data-aos-delay="300"
          >
            많은 고객 분들이 대성단열과 함께 해주시고 계십니다
          </h3>
          <div
            className="review__container"
            data-aos="animation-translate-y"
            data-aos-delay="400"
          >
            {reviews.map((r, i) => (
              <div className="review__item" key={i}>
                <div className="review__text">{r.text}</div>
                <div className="review__author">
                  <div className="review__ava">
                    <img className="review__pic" src="/img/ava-1.jpg" alt="" />
                  </div>
                  <div className="review__details">
                    <div className="review__man">{r.author}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="closing">
        <div className="closing__center center">
          <div className="closing__wrap" data-aos="animation-scale-y">
            <div className="closing__title title">
              차별화된 경쟁력과 전문성으로
              <br />
              고객에게 신뢰받는 회사
            </div>
            <div className="closing__info info">
              대성단열이 항상 함께하겠습니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
