import type { Item, ItemCategory } from "@/types/item";
import { itemContentOverrides } from "./items-content";

export const itemCategories: ItemCategory[] = [
  { slug: "ds-m", label: "전체 주요 제품", children: [] },
  {
    slug: "ds-m-01",
    label: "그라스울(유리섬유)",
    children: [
      { slug: "ds-m-01", label: "그라스울 소개" },
      { slug: "ds-m-01-01", label: "파이프 카바" },
      { slug: "ds-m-01-02", label: "셀프 카바" },
      { slug: "ds-m-01-03", label: "그라스울 블랭킷" },
      { slug: "ds-m-01-04", label: "크린롤 블랭킷" },
      { slug: "ds-m-01-05", label: "크린보드" },
      { slug: "ds-m-01-06", label: "크린매트" },
      { slug: "ds-m-01-07", label: "흡음보드" },
      { slug: "ds-m-01-08", label: "크린판넬" },
      { slug: "ds-m-01-09", label: "제품 포장규격" },
    ],
  },
  {
    slug: "ds-m-04",
    label: "고무발포보온재",
    children: [{ slug: "ds-m-04", label: "고무발포보온재 소개" }],
  },
  {
    slug: "ds-m-05",
    label: "가교(무)은박 보온재",
    children: [{ slug: "ds-m-05", label: "가교(무)은박 보온재 소개" }],
  },
  {
    slug: "ds-m-09",
    label: "멜라민폼",
    children: [{ slug: "ds-m-09", label: "멜라민폼 소개" }],
  },
  {
    slug: "ds-m-03",
    label: "세라크울(Bio)",
    children: [
      { slug: "ds-m-03", label: "세라크울 소개" },
      { slug: "ds-m-03-04", label: "바이오 세라크울" },
      { slug: "ds-m-03-01", label: "1300/HTZ Bulk Fiber" },
      { slug: "ds-m-03-02", label: "1300/HTZ 블랭킷" },
      { slug: "ds-m-03-03", label: "1100 펠트" },
      { slug: "ds-m-03-05", label: "Wet 펠트" },
      { slug: "ds-m-03-06", label: "하드보드" },
      { slug: "ds-m-03-07", label: "페이퍼" },
      { slug: "ds-m-03-08", label: "표면 경화제" },
      { slug: "ds-m-03-09", label: "본드/코팅시멘트" },
      { slug: "ds-m-03-10", label: "각종로별 적용표" },
    ],
  },
  {
    slug: "ds-s-ks",
    label: "케이싱 자재(함석, SUS, 알루미늄)",
    children: [
      { slug: "ds-s-ks", label: "케이싱 자재 소개" },
      { slug: "ds-s-ks-01", label: "케이싱 자재 장점" },
    ],
  },
  {
    slug: "ds-m-06",
    label: "APS/PPA 카바",
    children: [
      { slug: "ds-m-06", label: "APS 카바" },
      { slug: "ds-m-06-01", label: "PPA 카바" },
    ],
  },
  {
    slug: "ds-m-02",
    label: "미네랄울(암면)",
    children: [
      { slug: "ds-m-02", label: "벽산 미네랄울" },
      { slug: "ds-m-02-01", label: "파이프 카바" },
      { slug: "ds-m-02-02", label: "블랭킷" },
      { slug: "ds-m-02-03", label: "와이어드 블랭킷" },
      { slug: "ds-m-02-04", label: "보온판" },
      { slug: "ds-m-02-06", label: "루즈울" },
      { slug: "ds-m-02-07", label: "슈퍼울" },
    ],
  },
];

/**
 * Subsidiary/accessory categories — shown ONLY on subsidiary item pages.
 * Each entry is a flat top-level link (no expandable children), so the
 * left sidebar becomes a plain list of items.
 */
export const subsidiaryCategories: ItemCategory[] = [
  { slug: "ds-s", label: "전체 부자재", children: [] },
  { slug: "ds-s-mgt", label: "매직 테이프", children: [] },
  { slug: "ds-s-alt", label: "AL 은박테이프", children: [] },
  { slug: "ds-s-eva", label: "Eva 네오프렌", children: [] },
  { slug: "ds-s-rft", label: "고무발포 테이프", children: [] },
  { slug: "ds-s-al", label: "알루미늄 밴드", children: [] },
  { slug: "ds-s-dp", label: "동파방지선(열선)", children: [] },
  { slug: "ds-s-flx", label: "후렉시블(AL, TP, 보온)", children: [] },
  { slug: "ds-s-mp", label: "보온핀", children: [] },
  { slug: "ds-s-gp", label: "골판지", children: [] },
  { slug: "ds-s-bt", label: "불티 방지막", children: [] },
  { slug: "ds-s-mst", label: "마스 테이프", children: [] },
  { slug: "ds-s-bg", label: "단열벽지", children: [] },
  {
    slug: "ds-m-08",
    label: "열반사단열재",
    children: [
      { slug: "ds-m-08", label: "내벽열반사단열재" },
      { slug: "ds-m-08-01", label: "외벽열반사단열재" },
    ],
  },
  { slug: "ds-s-pe", label: "PE폼", children: [] },
];

/** true when a slug belongs to the subsidiary set (checks list membership). */
export function isSubsidiarySlug(slug: string): boolean {
  if (slug === "ds-s") return true;
  return subsidiaryCategories.some(
    (c) => c.slug === slug || c.children.some((ch) => ch.slug === slug)
  );
}

/** Pick the right sidebar tree for a given slug. */
export function getCategoriesForSlug(slug: string): ItemCategory[] {
  return isSubsidiarySlug(slug) ? subsidiaryCategories : itemCategories;
}

/** true when the slug represents an overview landing page. */
export function isOverviewSlug(slug: string): boolean {
  return slug === "ds-m" || slug === "ds-s";
}

export type OverviewItem = {
  slug: string;
  label: string;
  image: string;
};

/** Grid data for the overview pages. */
export const mainOverviewItems: OverviewItem[] = [
  { slug: "ds-m-01", label: "그라스울(유리섬유)", image: "/img/vt-gr.jpg" },
  { slug: "ds-m-04", label: "고무발포보온재", image: "/img/vt-bp.jpg" },
  { slug: "ds-m-05", label: "가교(무)은박 보온재", image: "/img/vt-al.jpg" },
  { slug: "ds-m-09", label: "멜라민폼", image: "/img/vx800.jpg" },
  { slug: "ds-m-03", label: "세라크울(Bio)", image: "/img/vt-cr.jpg" },
  { slug: "ds-s-ks", label: "케이싱 자재", image: "/img/nav-ks.png" },
  { slug: "ds-m-06", label: "APS/PPA 카바", image: "/img/vt-aps.jpg" },
  { slug: "ds-m-02", label: "미네랄울(암면)", image: "/img/vt-mn00.jpg" },
];

export const subsidiaryOverviewItems: OverviewItem[] = [
  { slug: "ds-s-mgt", label: "매직 테이프", image: "/img/nav-mt.png" },
  { slug: "ds-s-alt", label: "AL 은박테이프", image: "/img/vt007.jpg" },
  { slug: "ds-s-eva", label: "Eva 네오프렌", image: "/img/vt008.jpg" },
  { slug: "ds-s-rft", label: "고무발포 테이프", image: "/img/vt009.jpg" },
  { slug: "ds-s-al", label: "알루미늄 밴드", image: "/img/vt-al.jpg" },
  { slug: "ds-s-dp", label: "동파방지선(열선)", image: "/img/vt-dp.jpg" },
  { slug: "ds-s-flx", label: "후렉시블(AL, TP, 보온)", image: "/img/nav-fl.png" },
  { slug: "ds-s-mp", label: "보온핀", image: "/img/nav-bo.png" },
  { slug: "ds-s-gp", label: "골판지", image: "/img/vt-gp.jpg" },
  { slug: "ds-s-bt", label: "불티 방지막", image: "/img/vt-bt.jpg" },
  { slug: "ds-s-mst", label: "마스 테이프", image: "/img/nav-mas.png" },
  { slug: "ds-s-bg", label: "단열벽지", image: "/img/vt-bg.jpg" },
  { slug: "ds-m-08", label: "열반사단열재", image: "/img/nav-rf.png" },
  { slug: "ds-s-pe", label: "PE폼", image: "/img/vt-pe.jpg" },
];

export function getOverviewItems(slug: string): OverviewItem[] {
  if (slug === "ds-m") return mainOverviewItems;
  if (slug === "ds-s") return subsidiaryOverviewItems;
  return [];
}

const grassullSections = [
  {
    heading: "보온/보냉/단열성",
    body: "KCC 그라스울은 고속회전원심공법으로 제조되어 섬유굵기가 가늘고 균일합니다. 또한 비섬유질이 없고 많은 양의 섬유가 섬세하게 집면되어 있어 공기층을 미세하게 분할하여 열의 이동경로를 효과적으로 차단하여 탁월한 단열성능을 발휘합니다.",
  },
  {
    heading: "시공성",
    body: "KCC 그라스울은 우수한 보온단열성은 물론 결로방지, 소음방지의 특성을 겸비하고 있는 고급 무기질 보온단열재로서 시공 1회당 50%의 에너지 절약효과, 건물의 영구성 증진, 쾌적한 주거성 등의 3가지 효과를 동시에 얻을 수 있으며, 가격도 저렴한 경제적인 보온단열재입니다.",
  },
  {
    heading: "불연성",
    body: "KCC 그라스울은 무기질 섬유 보온단열재로서 KS, ASTM 등 국내외 시험규격에 합격한 불연재로써 불에 타지 않으며 인체에 해로운 유독가스도 발생하지 않습니다.",
  },
  {
    heading: "친환경성",
    body: "KCC 그라스울은 폐유리 등 재활용 원료의 사용으로 환경보호 및 자원절약에 이바지하는 GR인증 제품이며, HCHO, TVOC 등 각종 오염물질 방출량을 최소화하여 새집증후군의 예방효과가 뛰어난 제품입니다. (환경표지인증서, HB마크 최우수등급, S마크, 비석면성적서 보유)",
  },
  {
    heading: "흡음성",
    body: "KCC 그라스울은 가늘고 균일한 유리섬유가 연속된 미세 공극을 형성하므로 각종 소음이 그라스울을 통과할 때 음압에너지가 마찰에너지로 변화되어 음을 흡수하는 효과를 발휘하므로 안락한 생활을 영위할 수 있습니다.",
  },
  {
    heading: "발수/내구성",
    body: "KCC 그라스울은 흡수율이 1% 미만인 발수처리 제품이며, 부식되지 않아 반영구적인 사용이 가능합니다.",
  },
  { heading: "밀도, 두께별 흡음성능 (KS F 2805)", image: "/img/grass0001.jpg" },
  { heading: "불연성능", image: "/img/grass0002.jpg" },
  { heading: "내습성능", image: "/img/grass0003.jpg" },
  { heading: "내부식성 (ASTM C 795)", image: "/img/grass0004.jpg" },
  { heading: "방산열량 및 표면온도", image: "/img/grass0005.jpg" },
];

const raw: Array<[string, string, string, string?]> = [
  ["ds-m", "주요 제품", "전체 라인업"],
  ["ds-m-01", "그라스울(유리섬유)", "그라스울", "/img/vt-gr.jpg"],
  ["ds-m-01-01", "그라스울(유리섬유)", "파이프 카바"],
  ["ds-m-01-02", "그라스울(유리섬유)", "셀프 카바"],
  ["ds-m-01-03", "그라스울(유리섬유)", "그라스울 블랭킷"],
  ["ds-m-01-04", "그라스울(유리섬유)", "크린롤 블랭킷"],
  ["ds-m-01-05", "그라스울(유리섬유)", "크린보드"],
  ["ds-m-01-06", "그라스울(유리섬유)", "크린매트"],
  ["ds-m-01-07", "그라스울(유리섬유)", "흡음보드"],
  ["ds-m-01-08", "그라스울(유리섬유)", "크린판넬"],
  ["ds-m-01-09", "그라스울(유리섬유)", "제품 포장규격"],
  ["ds-m-02", "미네랄울(암면)", "벽산 미네랄울"],
  ["ds-m-02-01", "미네랄울(암면)", "파이프 카바"],
  ["ds-m-02-02", "미네랄울(암면)", "블랭킷"],
  ["ds-m-02-03", "미네랄울(암면)", "와이어드 블랭킷"],
  ["ds-m-02-04", "미네랄울(암면)", "보온판"],
  ["ds-m-02-06", "미네랄울(암면)", "루즈울"],
  ["ds-m-02-07", "미네랄울(암면)", "슈퍼울"],
  ["ds-m-03", "세라크울", "세라크울"],
  ["ds-m-03-01", "세라크울", "1300/HTZ Bulk Fiber"],
  ["ds-m-03-02", "세라크울", "1300/HTZ 블랭킷"],
  ["ds-m-03-03", "세라크울", "1100 펠트"],
  ["ds-m-03-04", "세라크울", "바이오 세라크울"],
  ["ds-m-03-05", "세라크울", "Wet 펠트"],
  ["ds-m-03-06", "세라크울", "하드보드"],
  ["ds-m-03-07", "세라크울", "페이퍼"],
  ["ds-m-03-08", "세라크울", "표면 경화제"],
  ["ds-m-03-09", "세라크울", "본드/코팅시멘트"],
  ["ds-m-03-10", "세라크울", "각종로별 적용표"],
  ["ds-m-04", "고무발포보온재", "고무발포보온재"],
  ["ds-m-05", "가교(무)은박 보온재", "가교(무)은박 보온재"],
  ["ds-m-09", "멜라민폼", "멜라민폼", "/img/vt-mf.jpg"],
  ["ds-m-06", "APS/PPA 카바", "APS 카바"],
  ["ds-m-06-01", "APS/PPA 카바", "PPA 카바"],
  ["ds-m-07", "PE폼", "PE폼"],
  ["ds-m-08", "열반사단열재", "내벽열반사단열재"],
  ["ds-m-08-01", "열반사단열재", "외벽열반사단열재"],
  ["ds-s", "부자재", "전체 라인업"],
  ["ds-s-al", "부자재", "알루미늄 밴드"],
  ["ds-s-aps", "부자재", "APS 카바"],
  ["ds-s-bg", "부자재", "단열벽지"],
  ["ds-s-bt", "부자재", "불티 방지막"],
  ["ds-s-dp", "부자재", "동파방지선(열선)"],
  ["ds-s-flx", "부자재", "후렉시블(AL, TP, 보온)"],
  ["ds-s-gp", "부자재", "골판지"],
  ["ds-s-ks", "부자재", "케이싱 자재(함석, SUS, 알루미늄)"],
  ["ds-s-ks-01", "부자재", "케이싱 자재 장점"],
  ["ds-s-mgt", "부자재", "매직 테이프"],
  ["ds-s-alt", "부자재", "AL 은박테이프", "/img/vt007.jpg"],
  ["ds-s-eva", "부자재", "Eva 네오프렌", "/img/vt008.jpg"],
  ["ds-s-rft", "부자재", "고무발포 테이프", "/img/vt009.jpg"],
  ["ds-s-mp", "부자재", "보온핀"],
  ["ds-s-mst", "부자재", "마스 테이프"],
  ["ds-s-pe", "부자재", "PE폼"],
  ["ds-s-pps", "부자재", "PPS 카바"],
];

export const items: Record<string, Item> = Object.fromEntries(
  raw.map(([slug, title, subtitle, mainImage]) => {
    const parentSlug = slug.startsWith("ds-s-")
      ? "ds-s"
      : slug.split("-").slice(0, 3).join("-");
    const override = itemContentOverrides[slug] ?? {};
    return [
      slug,
      {
        slug,
        title,
        subtitle,
        category: parentSlug,
        mainImage,
        sections: [],
        ...override,
      },
    ];
  })
);

items["ds-m-01"] = {
  ...items["ds-m-01"],
  intro:
    "KCC 그라스울은 불연성과 단열성이 뛰어나고 친환경성을 입증한 단열재입니다.",
  description:
    "KCC 그라스울은 유리원료를 고온에서 용융한 후 고속회전력을 이용하여 섬유화한 뒤 바인더를 사용하여 일정한 형태로 성형한 무기질의 인조광물섬유 단열재입니다. 유연하고 부드러운 섬유가 섬세하게 집면되어 단열 및 흡음 성능이 뛰어나며, 무기질 원료로서 불에 잘 타지 않고 시간경과에 따른 변형이 없어 반영구적인 적용이 가능합니다. 칼 등의 간단한 도구로 쉽게 재단이 가능하고 용도에 맞게 다양한 규격으로 생산되기 때문에 보온, 단열, 흡음이 필요한 모든 건축물에 꼭 필요한 제품입니다.\n\nKCC 그라스울은 규사(모래)가 주된 원료로 석유를 여러 차례 정제가공한 유기단열재와 달리 프레온가스, 휘발성 유기화합물 등의 오염물질이 거의 방출되지 않으며, 제품의 생산에서 폐기까지의 전생애주기(LIFE CYCLE)에 걸쳐 사용되는 에너지 소모량이 유기 단열재에 비해 적어 지구온난화 방지 및 에너지 자원 보존에 앞장서는 제품입니다.",
  sections: grassullSections,
};

export function getItem(slug: string): Item | undefined {
  return items[slug];
}

export function getCategoryFor(slug: string): ItemCategory | undefined {
  const set = getCategoriesForSlug(slug);
  return set.find(
    (c) => c.slug === slug || c.children.some((ch) => ch.slug === slug)
  );
}
