"use client";

import { useEffect, useState } from "react";

export function ChapterReadingControls() {
  const [size, setSize] = useState(19);
  const [night, setNight] = useState(false);

  useEffect(() => {
    try {
      const preference = JSON.parse(localStorage.getItem("wtlf-reader") || "{}");
      if (typeof preference.size === "number") setSize(Math.max(17, Math.min(26, preference.size)));
      if (typeof preference.night === "boolean") setNight(preference.night);
    } catch {
      // Reading preferences are optional.
    }
  }, []);

  useEffect(() => {
    const chapter = document.querySelector(".chapter-page");
    if (!(chapter instanceof HTMLElement)) return;
    chapter.style.setProperty("--reader-font", size + "px");
    chapter.classList.toggle("night-reader", night);
    try { localStorage.setItem("wtlf-reader", JSON.stringify({ size, night })); } catch {
      // Reader remains functional without storage.
    }
  }, [size, night]);

  return <div className="chapter-reading-controls" aria-label="Reading preferences">
    <span>READING SETTINGS</span>
    <div>
      <button type="button" aria-label="Decrease text size" disabled={size <= 17} onClick={() => setSize(value => Math.max(17, value - 1))}>A−</button>
      <button type="button" aria-label="Increase text size" disabled={size >= 26} onClick={() => setSize(value => Math.min(26, value + 1))}>A+</button>
      <button type="button" aria-pressed={night} onClick={() => setNight(value => !value)}>{night ? "DAY MODE" : "NIGHT MODE"}</button>
    </div>
  </div>;
}
