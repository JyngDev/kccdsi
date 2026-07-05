"use client";

import { useEffect, useState } from "react";

const words = [
  { text: "그라스울", color: "#f6b23a" },
  { text: "고무발포보온재", color: "#2a7f62" },
  { text: "멜라민폼", color: "#a066cc" },
  { text: "세라크울", color: "#e85a2e" },
];

// duplicate the first word at the end so the slot can roll from the last
// word back to the first without a visible jump, then snap silently.
const items = [...words, words[0]];

export default function HeroWordRoll() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setAnimate(true);
      setIndex((v) => v + 1);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const onTransitionEnd = () => {
    if (index === words.length) {
      // silently reset to first without animation
      setAnimate(false);
      setIndex(0);
    }
  };

  return (
    <span className="home-v2__word-roll" aria-live="polite">
      <span
        className="home-v2__word-roll-track"
        style={{
          transform: `translateY(-${index * 1.15}em)`,
          transition: animate
            ? "transform 0.55s cubic-bezier(0.7, 0, 0.3, 1)"
            : "none",
        }}
        onTransitionEnd={onTransitionEnd}
      >
        {items.map((w, i) => (
          <span
            key={`${w.text}-${i}`}
            className="home-v2__word-roll-item"
            style={{ color: w.color }}
          >
            {w.text}
          </span>
        ))}
      </span>
    </span>
  );
}
