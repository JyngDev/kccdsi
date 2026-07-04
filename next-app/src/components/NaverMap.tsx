"use client";

import { useEffect, useRef } from "react";
import { NAVER_MAPS_CLIENT_ID, contactInfo } from "@/data/nav";

declare global {
  interface Window {
    naver?: any;
  }
}

const SCRIPT_ID = "naver-maps-script";

function loadNaverMaps(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") return resolve();
    if (window.naver?.maps) return resolve();
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("naver maps failed")), {
        once: true,
      });
      return;
    }
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    // NCP Maps Web Dynamic Map — new endpoint (`oapi.map.naver.com` + `ncpKeyId`)
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NAVER_MAPS_CLIENT_ID}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("naver maps failed"));
    document.head.appendChild(script);
  });
}

type Props = {
  height?: number | string;
  className?: string;
};

export default function NaverMap({ height = 600, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    loadNaverMaps()
      .then(() => {
        if (cancelled || !ref.current || !window.naver?.maps) return;
        const naver = window.naver;
        const center = new naver.maps.LatLng(37.323401, 126.787491);
        const map = new naver.maps.Map(ref.current, {
          center,
          zoom: 17,
          scaleControl: false,
          logoControl: false,
          mapDataControl: false,
          zoomControl: true,
          minZoom: 6,
        });
        const marker = new naver.maps.Marker({ map, position: center });
        const content = `<div class="iw_inner"><h3>대성단열</h3><p>${contactInfo.address}<br/>T.${contactInfo.phone}</p></div>`;
        const infowindow = new naver.maps.InfoWindow({ content });
        naver.maps.Event.addListener(marker, "click", () => {
          if (infowindow.getMap()) infowindow.close();
          else infowindow.open(map, marker);
        });
        infowindow.open(map, marker);
      })
      .catch(() => {
        /* ignore */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      id="map"
      ref={ref}
      className={`mt48 ${className}`}
      style={{ width: "100%", height }}
    />
  );
}
