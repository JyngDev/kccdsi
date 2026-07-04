"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RellaxProvider() {
  const pathname = usePathname();

  useEffect(() => {
    let instance: { destroy?: () => void } | null = null;
    let cancelled = false;

    import("rellax")
      .then((mod) => {
        if (cancelled) return;
        const Rellax = (mod.default ?? mod) as new (
          sel: string,
          opts?: Record<string, unknown>
        ) => { destroy?: () => void };
        if (document.querySelectorAll(".js-rellax").length === 0) return;
        instance = new Rellax(".js-rellax", { center: true });
      })
      .catch(() => {
        /* rellax is optional */
      });

    return () => {
      cancelled = true;
      instance?.destroy?.();
    };
  }, [pathname]);

  return null;
}
