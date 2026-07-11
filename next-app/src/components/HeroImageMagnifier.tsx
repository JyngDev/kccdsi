"use client";

import { useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  zoom?: number;
  lensSize?: number;
};

export default function HeroImageMagnifier({
  src,
  alt,
  zoom = 2.5,
  lensSize = 180,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ w: 0, h: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setSize({ w: rect.width, h: rect.height });
  };

  return (
    <div
      ref={wrapRef}
      className="hero-magnifier"
      onMouseEnter={(e) => {
        setActive(true);
        handleMove(e);
      }}
      onMouseMove={handleMove}
      onMouseLeave={() => setActive(false)}
    >
      <img src={src} alt={alt} draggable={false} />
      <div
        className="hero-magnifier__lens"
        style={{
          width: lensSize,
          height: lensSize,
          left: pos.x - lensSize / 2,
          top: pos.y - lensSize / 2,
          opacity: active ? 1 : 0,
          backgroundImage: `url(${src})`,
          backgroundSize: `${size.w * zoom}px ${size.h * zoom}px`,
          backgroundPosition: `-${pos.x * zoom - lensSize / 2}px -${
            pos.y * zoom - lensSize / 2
          }px`,
        }}
        aria-hidden="true"
      />
    </div>
  );
}
