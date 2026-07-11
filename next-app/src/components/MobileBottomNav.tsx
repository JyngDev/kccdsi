"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid, Layers, MapPin } from "react-feather";

const items = [
  { href: "/", label: "홈", Icon: Home, match: (p: string) => p === "/" },
  {
    href: "/items/ds-m",
    label: "주요 제품",
    Icon: Grid,
    match: (p: string) => p.startsWith("/items/ds-m"),
  },
  {
    href: "/items/ds-s",
    label: "부자재",
    Icon: Layers,
    match: (p: string) => p.startsWith("/items/ds-s"),
  },
  {
    href: "/location",
    label: "위치 안내",
    Icon: MapPin,
    match: (p: string) => p.startsWith("/location"),
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname() ?? "/";

  return (
    <nav className="mobile-bnav" aria-label="주요 메뉴">
      <ul className="mobile-bnav__list">
        {items.map(({ href, label, Icon, match }) => {
          const active = match(pathname);
          return (
            <li key={href} className="mobile-bnav__item">
              <Link
                href={href}
                className={`mobile-bnav__link ${active ? "is-active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                <Icon size={20} strokeWidth={2} aria-hidden="true" />
                <span className="mobile-bnav__label">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
