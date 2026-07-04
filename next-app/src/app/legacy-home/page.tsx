import Link from "next/link";
import FeaturesSlider from "@/components/sliders/FeaturesSlider";
import DesignSlider from "@/components/sliders/DesignSlider";
import TeamsSlider from "@/components/sliders/TeamsSlider";
import NaverMap from "@/components/NaverMap";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="main">
        <div className="main__center center">
          <div className="main__wrap">
            <h1 className="main__title title title_big" data-aos>
              <span className="title__box">
                <span className="title__text">그라스울</span>
              </span>
              <span className="title__box">
                <span className="title__text">
                  <span className="title__line">미네랄울</span>
                </span>
              </span>
              <span className="title__box">
                <span className="title__text">세라크울</span>
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
              data-aos-delay="400"
            >
              단열재의 모든 것, 대성단열
            </div>
          </div>
          <div className="main__view" data-aos>
            <div className="main__preview">
              <img className="main__pic" src="/img/main-pic-1.png" alt="" />
            </div>
            <div className="main__preview">
              <img className="main__pic" src="/img/main-pic-2.png" alt="" />
            </div>
            <div className="main__preview">
              <img className="main__pic" src="/img/mouse.png" alt="" />
            </div>
            <div className="main__preview">
              <img className="main__pic" src="/img/main-pic-3.png" alt="" />
            </div>
          </div>
          <div className="main__circles">
            <div className="main__circle" />
            <div className="main__circle" />
            <div className="main__circle" />
            <div className="main__circle" />
            <div className="main__circle" />
            <div className="main__circle" />
            <div className="main__circle" />
          </div>
        </div>
      </div>

      <div className="access">
        <div className="access__center center">
          <div className="access__view" data-aos data-aos-delay="300">
            <div className="access__preview">
              <img className="access__pic" src="/img/access-pic-2.png" alt="" />
            </div>
            <div className="access__preview">
              <img className="access__pic" src="/img/access-pic-1.png" alt="" />
            </div>
            <div className="access__preview">
              <img className="access__pic" src="/img/main-pic-2.png" alt="" />
            </div>
          </div>
          <div className="access__wrap" data-aos="animation-scale-y">
            <div className="access__info">
              더 좋은 삶을 위한 가치창조,
              <br />
              보온자재 전문{" "}
              <span style={{ color: "#e53c49" }}>대성단열</span>이 함께 합니다.
            </div>
          </div>
        </div>
        <div className="access__clouds">
          <div className="access__cloud">
            <img className="access__pic" src="/img/cloud.png" alt="" />
          </div>
          <div className="access__cloud">
            <img className="access__pic" src="/img/cloud.png" alt="" />
          </div>
        </div>
      </div>

      <div className="quality">
        <div className="quality__head">
          <div className="quality__center center">
            <div className="quality__top" data-aos="animation-scale-y">
              <h2 className="quality__title title">
                대성단열
                <br />
                주요 제품<span className="title__color">.</span>
              </h2>
            </div>
            <div
              className="quality__info info"
              data-aos="animation-scale-y"
              data-aos-delay="200"
              style={{ color: "#e53c49" }}
            >
              그라스울, 미네랄울, 세라크울, 고무발포보온재
            </div>
          </div>
          <div className="quality__line">
            <img className="quality__pic" src="/img/line-3.svg" alt="" />
          </div>
          <div className="quality__preview">
            <img className="quality__pic" src="/img/lamp.png" alt="" />
          </div>
        </div>
        <div className="quality__body">
          {[
            {
              icon: "/img/camera-big.png",
              category: "그라스울",
              text: "불연성과 단열성이 뛰어나고 친환경성을 입증한 단열재",
              href: "/items/ds-m-01",
              animation: "animation-scale-x-left",
            },
            {
              icon: "/img/clock-big.png",
              category: "미네랄울",
              text: "규산 칼슘계의 광석을 고온으로 용융시켜 만드는 단열재",
              href: "/items/ds-m-02",
              animation: "animation-scale-x-right",
            },
            {
              icon: "/img/cup-big.png",
              category: "세라크울",
              text: "최첨단 공법인 Spinning 공법으로 제조한 초고온 내화 단열재",
              href: "/items/ds-m-03",
              animation: "animation-scale-x-left",
            },
            {
              icon: "/img/chatbox-big.png",
              category: "고무발포보온재",
              text: "난연성능이 탁월하며 유해물질성분 제로, 친환경 보온재",
              href: "/items/ds-m-04",
              animation: "animation-scale-x-right",
            },
          ].map((card) => (
            <div className="quality__col" key={card.category}>
              <div
                className="quality__item"
                data-aos={card.animation}
                data-aos-delay="100"
              >
                <div className="quality__icon">
                  <img className="quality__pic" src={card.icon} alt="" />
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

      <div className="features js-features">
        <div className="features__center center">
          <div className="features__head" data-aos="animation-scale-y">
            <div className="features__stage stage">주요 제품 더 알아보기</div>
            <div className="features__box">
              <h2 className="features__title title">
                보온재의 모든 것,
                <br />
                대성단열
              </h2>
            </div>
          </div>
          <div className="features__body">
            <div className="features__container">
              <FeaturesSlider />
            </div>
          </div>
        </div>
        <div className="features__bg" data-aos data-aos-duration="1000">
          <img className="features__pic" src="/img/features-pic-1.svg" alt="" />
        </div>
      </div>

      <div className="design">
        <div className="design__center center">
          <div className="design__wrap" data-aos="animation-translate-y">
            <h2 className="design__title title">
              부자재도
              <br />
              준비되어 있습니다<span className="title__color">.</span>
            </h2>
            <div className="design__info info">
              더욱 다양한 부자재도 준비되어있으니, 전화문의 바랍니다.
            </div>
          </div>
          <div className="design__bg" data-aos data-aos-delay="400">
            <img className="design__pic" src="/img/design-pic.png" alt="" />
          </div>
          <div className="design__body">
            <div className="design__container">
              <DesignSlider />
            </div>
          </div>
        </div>
      </div>

      <div className="work">
        <div className="work__center center">
          <div className="work__head">
            <h2 className="work__title title">
              <span className="title__color">
                Get Work
                <br />
                with{" "}
              </span>
              Daesung
            </h2>
          </div>
          <div
            className="work__details"
            data-aos="animation-translate-y"
            data-aos-duration="800"
          >
            <div className="work__icon">
              <img className="work__pic" src="/img/balls.svg" alt="" />
            </div>
            <div className="work__text">
              대성단열만의 전문성으로 고객만족을 위해 최선을 다합니다
            </div>
            <Link className="work__link" href="/location">
              찾아오시는 길
            </Link>
          </div>
        </div>
      </div>

      <div className="speed">
        <div className="speed__center center">
          <div className="speed__wrap">
            <div className="speed__head" data-aos="animation-scale-y">
              <h2 className="speed__title title">
                신속한 준비
                <br />
                정확한 배송
                <br />
                합리적 가격<span className="title__color">.</span>
              </h2>
              <div className="speed__text">
                대성단열은 사업에 대한 풍부한 경험을 바탕으로 신속성, 정확성, 합리적인 가격으로 고객만족을 최우선합니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="like">
        <div className="like__center center">
          <div className="like__container">
            <div className="like__wrap">
              <h2 className="like__title title" data-aos="animation-scale-x">
                모두가 만족하는
                <br />
                대성단열<span className="title__color">.</span>
              </h2>
            </div>
            <div className="like__preview" data-aos>
              <img className="like__pic" src="/img/hand-1.png" alt="" />
            </div>
            <div className="like__circle" />
            <div className="like__circles">
              <div className="like__circle" />
              <div
                className="like__circle js-rellax"
                data-rellax-speed="-1"
              />
              <div
                className="like__circle js-rellax"
                data-rellax-speed=".8"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="teams">
        <div className="teams__center center">
          <div className="teams__body">
            <div className="teams__col" data-aos="animation-scale-y">
              <h3 className="teams__title title title_sm">생생한 현장 목소리</h3>
            </div>
            <div className="teams__col">
              <div className="teams__container">
                <TeamsSlider />
              </div>
            </div>
          </div>
        </div>
      </div>

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
                <div className="layouts__text">
                  경기도 안산시 단원구 산단로326 (원곡동 유통상가 9동 101호)
                </div>
              </div>
              <div className="layouts__item" data-aos="animation-scale-y">
                <div className="layouts__icon">
                  <img className="layouts__pic" src="/img/layout-2.png" alt="" />
                </div>
                <div className="layouts__text">031-493-0052</div>
              </div>
              <div className="layouts__item" data-aos="animation-scale-y">
                <div className="layouts__icon">
                  <img className="layouts__pic" src="/img/layout-3.png" alt="" />
                </div>
                <div className="layouts__text">jdj0001@naver.com</div>
              </div>
            </div>
          </div>
          <NaverMap />
        </div>
      </div>

      <div className="showcase">
        <div className="showcase__center center">
          <div className="showcase__wrap">
            <div className="showcase__top" data-aos="animation-scale-y">
              <h2 className="showcase__title title">
                단열재의 모든 것,
                <br />
                대성단열<span className="title__color">.</span>
              </h2>
            </div>
            <div
              className="showcase__info info"
              data-aos="animation-scale-y"
              data-aos-delay="150"
            >
              대성단열만의 전문성으로 고객만족을 위해 최선을 다합니다.
            </div>
          </div>
        </div>
        <div className="showcase__list">
          <div className="showcase__preview">
            <img className="showcase__pic" src="/img/group-1.png" alt="" />
          </div>
          <div className="showcase__preview">
            <img className="showcase__pic" src="/img/group-2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
