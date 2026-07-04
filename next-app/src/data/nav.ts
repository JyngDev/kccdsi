export type MegaItem = {
  href: string;
  label: string;
  icon: string;
};

export type MegaMenu = {
  label: string;
  /** landing route when the label itself is clicked */
  href: string;
  items: MegaItem[];
};

export const megaMenus: MegaMenu[] = [
  {
    label: "주요 제품",
    href: "/items/ds-m",
    items: [
      { href: "/items/ds-m-01", label: "그라스울(유리섬유)", icon: "/img/vt-gr01.jpg" },
      { href: "/items/ds-m-04", label: "고무발포보온재", icon: "/img/nav-bp.png" },
      { href: "/items/ds-m-05", label: "가교(무)은박 보온재", icon: "/img/nav-ec.png" },
      { href: "/items/ds-m-09", label: "멜라민폼", icon: "/img/vt-mf.jpg" },
      { href: "/items/ds-m-03", label: "세라크울(Bio)", icon: "/img/nav-cr.png" },
      { href: "/items/ds-s-ks", label: "케이싱 자재", icon: "/img/nav-ks.png" },
      { href: "/items/ds-m-06", label: "APS/PPA", icon: "/img/nav-apsppa.png" },
      { href: "/items/ds-m-02", label: "미네랄울(암면)", icon: "/img/nav-mn.png" },
    ],
  },
  {
    label: "부자재",
    href: "/items/ds-s",
    items: [
      { href: "/items/ds-s-mgt", label: "매직 테이프", icon: "/img/nav-mt.png" },
      { href: "/items/ds-s-alt", label: "AL 은박테이프", icon: "/img/vt007.jpg" },
      { href: "/items/ds-s-eva", label: "Eva 네오프렌", icon: "/img/vt008.jpg" },
      { href: "/items/ds-s-rft", label: "고무발포 테이프", icon: "/img/vt009.jpg" },
      { href: "/items/ds-s-al", label: "알루미늄 밴드", icon: "/img/nav-al.png" },
      { href: "/items/ds-s-dp", label: "동파방지선(열선)", icon: "/img/nav-dp.png" },
      { href: "/items/ds-s-flx", label: "후렉시블(AL, TP, 보온)", icon: "/img/nav-fl.png" },
      { href: "/items/ds-s-mp", label: "보온핀", icon: "/img/nav-bo.png" },
      { href: "/items/ds-s-gp", label: "골판지", icon: "/img/nav-gp.png" },
      { href: "/items/ds-s-bt", label: "불티 방지막", icon: "/img/nav-bt.png" },
      { href: "/items/ds-s-mst", label: "마스 테이프", icon: "/img/nav-mas.png" },
      { href: "/items/ds-s-bg", label: "단열벽지", icon: "/img/nav-dy.png" },
      { href: "/items/ds-m-08", label: "열반사단열재", icon: "/img/nav-rf.png" },
      { href: "/items/ds-s-pe", label: "PE폼", icon: "/img/nav-pe.png" },
    ],
  },
];

export const footerSections = [
  {
    label: "주요 제품",
    links: [
      { href: "/items/ds-m-01", label: "그라스울(유리섬유)" },
      { href: "/items/ds-m-04", label: "고무발포보온재" },
      { href: "/items/ds-m-05", label: "가교(무)은박 보온재" },
      { href: "/items/ds-m-09", label: "멜라민폼" },
      { href: "/items/ds-m-03", label: "세라크울(Bio)" },
      { href: "/items/ds-s-ks", label: "케이싱 자재" },
      { href: "/items/ds-m-06", label: "APS/PPA" },
      { href: "/items/ds-m-02", label: "미네랄울(암면)" },
    ],
  },
  {
    label: "부자재",
    links: [
      { href: "/items/ds-s-mgt", label: "매직 테이프" },
      { href: "/items/ds-s-alt", label: "AL 은박테이프" },
      { href: "/items/ds-s-eva", label: "Eva 네오프렌" },
      { href: "/items/ds-s-rft", label: "고무발포 테이프" },
      { href: "/items/ds-s-al", label: "알루미늄 밴드" },
      { href: "/items/ds-s-dp", label: "동파방지선(열선)" },
      { href: "/items/ds-s-flx", label: "후렉시블" },
    ],
  },
  {
    label: " ",
    links: [
      { href: "/items/ds-s-mp", label: "보온핀" },
      { href: "/items/ds-s-gp", label: "골판지" },
      { href: "/items/ds-s-bt", label: "불티 방지막" },
      { href: "/items/ds-s-mst", label: "마스 테이프" },
      { href: "/items/ds-s-bg", label: "단열벽지" },
      { href: "/items/ds-m-08", label: "열반사단열재" },
      { href: "/items/ds-s-pe", label: "PE폼" },
    ],
  },
];

export const contactInfo = {
  phone: "031-493-0052",
  phoneRaw: "tel:0314930052",
  fax: "031-493-0054",
  email: "jdj0001@naver.com",
  address: "경기도 안산시 단원구 산단로326 (원곡동 유통상가 9동 101호)",
  weekdayHours: "평일 08:00~18:00",
  saturdayHours: "토요일 08:00~12:00",
};

export const NAVER_MAPS_CLIENT_ID = "s1btssudkc";
