"use client";

import { useEffect, useState } from "react";
import { contactInfo } from "@/data/nav";

const STORAGE_KEY = "kccdsi:right-float-open";

export default function RightFloat() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      setOpen(localStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = () => {
    setOpen((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  return (
    <div
      id="scroll_right"
      className="right-float"
      style={{ right: open ? 0 : -190 }}
    >
      <div className="scroll_right_overflow">
        <ul>
          <li>
            <div className="r-f-s primary">
              <p className="small">고객센터</p>
              <p className="medium">{contactInfo.phone}</p>
              <p className="x-small">
                평&nbsp;&nbsp;&nbsp;&nbsp;일&nbsp;&nbsp;08:00~18:00
              </p>
              <p className="x-small">토요일&nbsp;&nbsp;08:00~12:00</p>
            </div>
            <div className="r-f-s">
              <p className="small">팩스번호</p>
              <p className="medium">{contactInfo.fax}</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="right_quick_btn">
        <ul>
          <li className="right_quick_btn_open" onClick={toggle}>
            <a>
              <i className={`icon arrow ${open ? "left" : "right"}`} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
