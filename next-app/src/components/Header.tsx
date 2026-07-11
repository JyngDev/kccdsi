"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { contactInfo, megaMenus } from "@/data/nav";

export default function Header() {
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [drawerTab, setDrawerTab] = useState(0);
  const pathname = usePathname() ?? "/";
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
                        <span className="mm-label">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isMobile && offCanvasOpen && (
        <div
          className="nav-dim"
          onClick={() => {
            setOffCanvasOpen(false);
            setOpenMenu(null);
          }}
        />
      )}
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
                  <img className="m-nav-logo" src="/img/logo-dark.png" alt="" />
                  {offCanvasOpen && (
                    <span
                      className="nav-menus-wrapper-close-button"
                      onClick={() => setOffCanvasOpen(false)}
                    >
                      &#10005;
                    </span>
                  )}
                  {isMobile && (
                    <div className="drawer-quicknav">
                      <div className="drawer-quicknav__tabs" role="tablist">
                        {megaMenus.map((menu, idx) => (
                          <button
                            key={menu.label}
                            type="button"
                            role="tab"
                            aria-selected={drawerTab === idx}
                            className={`drawer-quicknav__tab ${
                              drawerTab === idx ? "is-active" : ""
                            }`}
                            onClick={() => setDrawerTab(idx)}
                          >
                            {menu.label}
                          </button>
                        ))}
                      </div>
                      <div className="drawer-quicknav__grid" role="tabpanel">
                        {megaMenus[drawerTab].items.map((item) => {
                          const isCurrent = pathname === item.href;
                          return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`drawer-quicknav__tile ${isCurrent ? "is-current" : ""}`}
                            aria-current={isCurrent ? "page" : undefined}
                            onClick={() => setOffCanvasOpen(false)}
                          >
                            <span className="drawer-quicknav__tile-img">
                              <img src={item.icon} alt="" />
                            </span>
                            <span className="drawer-quicknav__tile-label">
                              {item.label}
                            </span>
                          </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  <ul className="nav-menu nav-menu-center">
                    {!isMobile &&
                      megaMenus.map((menu, idx) => (
                        <li
                          key={menu.label}
                          className={openMenu === idx ? "focus" : ""}
                          onMouseEnter={() => openMenuAt(idx)}
                          onMouseLeave={() => scheduleClose()}
                        >
                          <Link
                            href={menu.href}
                            onClick={() => setOpenMenu(null)}
                          >
                            {menu.label}
                            <span className="submenu-indicator">
                              <span className="submenu-indicator-chevron" />
                            </span>
                          </Link>
                        </li>
                      ))}
                    {!isMobile && (
                      <li>
                        <Link
                          href="/location"
                          onClick={() => setOpenMenu(null)}
                        >
                          위치 안내
                        </Link>
                      </li>
                    )}
                  </ul>
                  {!isMobile && (
                    <div className="nav-cta">
                      <a href={contactInfo.phoneRaw}>
                        <button>
                          <span>{contactInfo.phone}</span>
                        </button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
