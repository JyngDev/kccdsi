"use client";

import { useEffect, useState } from "react";
import { X } from "react-feather";

const MOBILE_BREAKPOINT = 991;

export default function MobileImageLightbox() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (window.innerWidth > MOBILE_BREAKPOINT) return;
      const el = e.target as HTMLElement | null;
      if (!el || el.tagName !== "IMG") return;
      if (!el.closest(".vertical_tab_content")) return;
      if (el.closest("a")) return;
      const url =
        (el as HTMLImageElement).currentSrc || (el as HTMLImageElement).src;
      if (!url) return;
      e.preventDefault();
      setSrc(url);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!src) return;
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, [src]);

  if (!src) return null;

  return (
    <div className="img-lightbox" onClick={() => setSrc(null)}>
      <button
        type="button"
        className="img-lightbox__close"
        onClick={(e) => {
          e.stopPropagation();
          setSrc(null);
        }}
        aria-label="닫기"
      >
        <X size={22} strokeWidth={2.2} />
      </button>
      <div
        className="img-lightbox__viewport"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt="" />
      </div>
    </div>
  );
}
