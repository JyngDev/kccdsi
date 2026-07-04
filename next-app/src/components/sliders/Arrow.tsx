import type { ComponentProps } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

type Props = ComponentProps<"button"> & {
  direction: "prev" | "next";
  currentSlide?: number;
  slideCount?: number;
};

export default function Arrow({
  direction,
  className,
  currentSlide: _cs,
  slideCount: _sc,
  ...rest
}: Props) {
  const slickClass = direction === "prev" ? "slick-prev" : "slick-next";
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "이전" : "다음"}
      className={`${slickClass} simple-arrow ${className ?? ""}`.trim()}
      {...rest}
    >
      <Icon size={24} strokeWidth={2} aria-hidden="true" />
    </button>
  );
}
