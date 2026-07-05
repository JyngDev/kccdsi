"use client";

import { useEffect, useRef, useState } from "react";

const words = [
  { text: "그라스울", color: "#f6b23a" },
  { text: "고무발포보온재", color: "#2a7f62" },
  { text: "멜라민폼", color: "#a066cc" },
  { text: "세라크울", color: "#e85a2e" },
];

// duplicate the first word at the end so we can roll past the last one
// back to the first, then silently snap.
const items = [...words, words[0]];

const STEP_MS = 2200;
const TRANSITION_MS = 550;

export default function HeroWordRoll() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const snapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const tick = setInterval(() => {
      setAnimate(true);
      setIndex((prev) => {
        const next = prev + 1;
        // if we're about to show the duplicate-first, schedule a snap-back
        // to real index 0 after the animation completes.
        if (next === words.length) {
          if (snapTimerRef.current) clearTimeout(snapTimerRef.current);
          snapTimerRef.current = setTimeout(() => {
            setAnimate(false);
            setIndex(0);
            // re-enable the transition on the next frame so future ticks animate
            requestAnimationFrame(() => {
              requestAnimationFrame(() => setAnimate(true));
            });
          }, TRANSITION_MS + 20);
        }
        return next;
      });
    }, STEP_MS);
    return () => {
      clearInterval(tick);
      if (snapTimerRef.current) clearTimeout(snapTimerRef.current);
    };
  }, []);

  return (
    <span className="home-v2__word-roll" aria-live="polite">
      <span
        className="home-v2__word-roll-track"
        style={{
          transform: `translateY(-${index * 1.15}em)`,
          transition: animate
            ? `transform ${TRANSITION_MS}ms cubic-bezier(0.7, 0, 0.3, 1)`
            : "none",
        }}
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
