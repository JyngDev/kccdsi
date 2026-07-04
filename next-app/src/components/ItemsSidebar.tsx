"use client";

import Link from "next/link";
import { useState } from "react";
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

  const toggle = (slug: string) => {
    setOpenSlug((prev) => (prev === slug ? null : slug));
  };

  const currentLabel = (() => {
    for (const cat of categories) {
      if (cat.slug === currentSlug) return cat.label;
      for (const child of cat.children) {
        if (child.slug === currentSlug) return child.label;
      }
    }
    return "메뉴 선택";
  })();

  return (
    <aside className={`sidebar ${mobileOpen ? "sidebar--mobile-open" : ""}`}>
      <button
        type="button"
        className="sidebar__mobile-trigger"
        onClick={() => setMobileOpen((v) => !v)}
        aria-expanded={mobileOpen}
      >
        <span>{currentLabel}</span>
        <ChevronDown size={18} strokeWidth={2} aria-hidden="true" />
      </button>
      <div id="leftside-navigation" className="nano">
        <ul className="nano-content" onClick={() => setMobileOpen(false)}>
          {categories.map((cat) => {
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
