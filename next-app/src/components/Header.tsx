"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { contactInfo, megaMenus } from "@/data/nav";

export default function Header() {
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  // sizeMenu = which panel contributes to curtain height right now.
  // Follows openMenu when opening/switching; lingers for the close transition
  // so the curtain can shrink from the last panel's height instead of snapping.
  const [sizeMenu, setSizeMenu] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sizeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (sizeTimerRef.current) clearTimeout(sizeTimerRef.current);
    if (openMenu !== null) {
      setSizeMenu(openMenu);          // opening or switching — update immediately
    } else {
      // closing — hold the last panel in flow until curtain finishes retracting
      sizeTimerRef.current = setTimeout(() => setSizeMenu(null), 360);
    }
    return () => {
      if (sizeTimerRef.current) clearTimeout(sizeTimerRef.current);
    };
  }, [openMenu]);

  const openMenuAt = (idx: number) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenMenu(idx);
  };
  const scheduleClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setOpenMenu(null), 70);
  };
  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 991);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!offCanvasOpen) return;
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, [offCanvasOpen]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <header className={openMenu !== null ? "megamenu-open" : ""}>
      <div
        className={`megamenu-curtain-wrap ${
          openMenu !== null ? "open" : ""
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <div className="megamenu-curtain">
          {megaMenus.map((menu, idx) => (
            <div
              key={menu.label}
              className={`megamenu-panel ${
                openMenu === idx ? "panel-open" : ""
              } ${sizeMenu === idx ? "panel-in-flow" : ""}`}
              aria-hidden={openMenu !== idx}
            >
              <div className="megamenu-lists center">
                <ul className="megamenu-list megamenu-grid-5">
                  {menu.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>
                        <img src={item.icon} alt="" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="header_area">
        <div className="main_header_area animated">
          <div className="container">
            <nav
              id="navigation1"
              ref={navRef}
              className={`navigation ${isMobile ? "navigation-portrait" : "navigation-landscape"}`}
            >
              <div className="width1176">
                <div className="nav-header">
                  <Link className="nav-brand" href="/">
                    <img src="/img/ds-logo-ex.png" alt="대성단열" />
                  </Link>
                  <div
                    className="nav-toggle"
                    onClick={() => setOffCanvasOpen((v) => !v)}
                  />
                </div>
                <div
                  className={`nav-menus-wrapper ${
                    offCanvasOpen ? "nav-menus-wrapper-open" : ""
                  }`}
                >
                  <img className="m-nav-logo" src="/img/ds-m-logo.png" alt="" />
                  {offCanvasOpen && (
                    <span
                      className="nav-menus-wrapper-close-button"
                      onClick={() => setOffCanvasOpen(false)}
                    >
                      &#10005;
                    </span>
                  )}
                  <ul className="nav-menu nav-menu-center">
                    {megaMenus.map((menu, idx) => (
                      <li
                        key={menu.label}
                        className={openMenu === idx ? "focus" : ""}
                        onMouseEnter={() => !isMobile && openMenuAt(idx)}
                        onMouseLeave={() => !isMobile && scheduleClose()}
                      >
                        <Link
                          href={menu.href}
                          onClick={(e) => {
                            // On mobile, tapping the label just toggles the dropdown
                            if (isMobile) {
                              e.preventDefault();
                              setOpenMenu(openMenu === idx ? null : idx);
                            } else {
                              // Desktop: navigate; close the dropdown
                              setOpenMenu(null);
                            }
                          }}
                        >
                          {menu.label}
                          <span className="submenu-indicator">
                            <span className="submenu-indicator-chevron" />
                          </span>
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href="/location">위치 안내</Link>
                    </li>
                  </ul>
                  <div className="nav-cta">
                    <a href={contactInfo.phoneRaw}>
                      <button>
                        <span>{contactInfo.phone}</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
