"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight } from "react-feather";
import type { ItemCategory } from "@/types/item";

type Props = {
  categories: ItemCategory[];
  currentSlug: string;
  initialOpenSlug: string | null;
};

export default function ItemsSidebar({
  categories,
  currentSlug,
  initialOpenSlug,
}: Props) {
  const [openSlug, setOpenSlug] = useState<string | null>(initialOpenSlug);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [tabbarHidden, setTabbarHidden] = useState(false);
  const tabbarScrollerRef = useRef<HTMLDivElement>(null);
  const topTabbarScrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 991);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Auto-hide the mobile tabbar on scroll down, reveal on scroll up.
  useEffect(() => {
    if (!isMobile) return;
    let lastY = window.scrollY;
    let ticking = false;
    const threshold = 6; // ignore tiny wobbles
    const showAboveY = 80; // always show near the top of the page
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const dy = y - lastY;
        if (y < showAboveY) {
          setTabbarHidden(false);
        } else if (dy > threshold) {
          setTabbarHidden(true);
        } else if (dy < -threshold) {
          setTabbarHidden(false);
        }
        lastY = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  // Preserve mobile tabbar scroll positions across navigation.
  // On tab click we save the (possibly adjusted) scrollLeft to sessionStorage;
  // on mount, we restore it. Fallback: center the active tab on first open.
  useEffect(() => {
    let raf1 = 0;
    let raf2 = 0;
    const restoreOrCenter = (
      scroller: HTMLDivElement | null,
      storageKey: string,
    ) => {
      if (!scroller) return;
      const saved = sessionStorage.getItem(storageKey);
      if (saved !== null) {
        scroller.scrollLeft = Number(saved) || 0;
        sessionStorage.removeItem(storageKey);
        return;
      }
      const active = scroller.querySelector<HTMLElement>(".is-active");
      if (!active) return;
      const scrollerRect = scroller.getBoundingClientRect();
      const activeRect = active.getBoundingClientRect();
      const target =
        scroller.scrollLeft +
        (activeRect.left - scrollerRect.left) -
        scrollerRect.width / 2 +
        activeRect.width / 2;
      scroller.scrollLeft = Math.max(0, target);
    };
    const run = () => {
      restoreOrCenter(topTabbarScrollerRef.current, "items-tabbar-scroll-top");
      restoreOrCenter(tabbarScrollerRef.current, "items-tabbar-scroll-sub");
    };
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(run);
    });
    return () => {
      if (raf1) cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, [currentSlug]);

  const makeTabClickHandler =
    (scrollerRef: React.RefObject<HTMLDivElement>, storageKey: string) =>
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const scroller = scrollerRef.current;
      if (!scroller) return;
      const link = e.currentTarget;
      const scrollerRect = scroller.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      const edgePadding = 16;
      let targetScroll = scroller.scrollLeft;
      if (linkRect.right > scrollerRect.right - edgePadding) {
        targetScroll += linkRect.right - scrollerRect.right + edgePadding;
      } else if (linkRect.left < scrollerRect.left + edgePadding) {
        targetScroll -= scrollerRect.left - linkRect.left + edgePadding;
      }
      sessionStorage.setItem(storageKey, String(Math.max(0, targetScroll)));
    };

  const handleTabClick = makeTabClickHandler(
    tabbarScrollerRef,
    "items-tabbar-scroll-sub",
  );
  const handleTopTabClick = makeTabClickHandler(
    topTabbarScrollerRef,
    "items-tabbar-scroll-top",
  );

  const toggle = (slug: string) => {
    setOpenSlug((prev) => (prev === slug ? null : slug));
  };

  // On mobile, restrict the dropdown to the 2nd-depth items of the current
  // active parent. Fallback to the full list when there's no parent match.
  const activeParent =
    categories.find(
      (cat) =>
        cat.slug === currentSlug ||
        cat.children.some((ch) => ch.slug === currentSlug),
    ) ?? null;
  const mobileCategories: ItemCategory[] =
    isMobile && activeParent && activeParent.children.length > 0
      ? activeParent.children.map((child) => ({
          slug: child.slug,
          label: child.label,
          children: [],
        }))
      : categories;
  const renderCategories = isMobile ? mobileCategories : categories;

  const currentLabel = (() => {
    for (const cat of categories) {
      if (cat.slug === currentSlug) return cat.label;
      for (const child of cat.children) {
        if (child.slug === currentSlug) return child.label;
      }
    }
    return "메뉴 선택";
  })();

  const showMobileTabs = isMobile && !!activeParent;
  const hasChildTabs = !!(activeParent && activeParent.children.length > 0);

  return (
    <aside className={`sidebar ${mobileOpen ? "sidebar--mobile-open" : ""}`}>
      {showMobileTabs && activeParent && (
        <nav
          className={`items-tabbar ${hasChildTabs ? "items-tabbar--dual" : ""} ${tabbarHidden ? "items-tabbar--hidden" : ""}`}
          aria-label="세부 메뉴"
        >
          <div
            className="items-tabbar__scroller items-tabbar__scroller--top"
            ref={topTabbarScrollerRef}
          >
            <div className="items-tabbar__list items-tabbar__list--top">
              {categories.map((cat) => {
                const active = cat.slug === activeParent.slug;
                return (
                  <Link
                    key={cat.slug}
                    href={`/items/${cat.slug}`}
                    className={`items-tabbar__item items-tabbar__item--top ${active ? "is-active" : ""}`}
                    aria-current={active ? "page" : undefined}
                    onClick={handleTopTabClick}
                  >
                    {cat.label}
                  </Link>
                );
              })}
            </div>
          </div>
          {hasChildTabs && (
            <div className="items-tabbar__scroller" ref={tabbarScrollerRef}>
              <div className="items-tabbar__list">
                {activeParent.children.map((child) => {
                  const active = child.slug === currentSlug;
                  return (
                    <Link
                      key={child.slug}
                      href={`/items/${child.slug}`}
                      className={`items-tabbar__item ${active ? "is-active" : ""}`}
                      aria-current={active ? "page" : undefined}
                      onClick={handleTabClick}
                    >
                      {child.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </nav>
      )}
      {!isMobile && (
        <button
          type="button"
          className="sidebar__mobile-trigger"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
        >
          <span>{currentLabel}</span>
          <ChevronDown size={18} strokeWidth={2} aria-hidden="true" />
        </button>
      )}
      <div id="leftside-navigation" className="nano">
        <ul className="nano-content" onClick={() => setMobileOpen(false)}>
          {renderCategories.map((cat) => {
            const hasChildren = cat.children.length > 0;
            const isOpen = openSlug === cat.slug;

            if (!hasChildren) {
              const active = cat.slug === currentSlug;
              return (
                <li
                  key={cat.slug}
                  className={`sub-menu sub-menu--flat ${active ? "active" : ""}`}
                >
                  <Link href={`/items/${cat.slug}`}>
                    <span>{cat.label}</span>
                    <ChevronRight
                      size={16}
                      strokeWidth={2}
                      className="flat-arrow"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            }

            return (
              <li
                key={cat.slug}
                className={`sub-menu ${isOpen ? "is-open" : ""}`}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggle(cat.slug);
                  }}
                >
                  <span>{cat.label}</span>
                  <ChevronDown
                    size={18}
                    strokeWidth={2}
                    className="dropdown icon"
                    aria-hidden="true"
                  />
                </a>
                <ul>
                  {cat.children.map((child) => (
                    <li
                      key={child.slug}
                      className={child.slug === currentSlug ? "active" : ""}
                    >
                      <Link href={`/items/${child.slug}`}>{child.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
