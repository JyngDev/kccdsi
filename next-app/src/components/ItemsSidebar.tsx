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

  const toggle = (slug: string) => {
    setOpenSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <aside className="sidebar">
      <div id="leftside-navigation" className="nano">
        <ul className="nano-content">
          {categories.map((cat) => {
            const hasChildren = cat.children.length > 0;
            const isOpen = openSlug === cat.slug;

            // Flat entry — no expandable children: direct link to the item
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

            // Expandable parent — never marked `.active`. Selection is
            // represented by the highlighted child; the parent only carries
            // the `.is-open` state for expand/collapse.
            return (
              <li
                key={cat.slug}
                className={`sub-menu ${isOpen ? "is-open" : ""}`}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
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
