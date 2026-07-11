"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

type Props = {
  items: Testimonial[];
  interval?: number;
};

export default function TestimonialCarousel({
  items,
  interval = 5000,
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = items.length;

  useEffect(() => {
    if (paused || total <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, interval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, total, interval]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div
      className="home-v2__quote-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        type="button"
        className="home-v2__quote-arrow home-v2__quote-arrow--prev"
        onClick={prev}
        aria-label="이전 후기"
      >
        <ChevronLeft size={22} strokeWidth={2} />
      </button>

      <div className="home-v2__quote-stage">
        {items.map((t, i) => (
          <div
            key={i}
            className={`home-v2__quote-slide ${
              i === index ? "is-active" : ""
            }`}
            aria-hidden={i !== index}
          >
            <blockquote className="home-v2__quote">
              <span className="home-v2__quote-mark">“</span>
              {t.quote}
              <span className="home-v2__quote-mark">”</span>
            </blockquote>
            <div className="home-v2__quote-meta">
              <span className="home-v2__quote-author">{t.author}</span>
              <span className="home-v2__quote-role">{t.role}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="home-v2__quote-arrow home-v2__quote-arrow--next"
        onClick={next}
        aria-label="다음 후기"
      >
        <ChevronRight size={22} strokeWidth={2} />
      </button>

    </div>
  );
}
