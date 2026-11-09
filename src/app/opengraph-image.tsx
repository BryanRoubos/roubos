import { ImageResponse } from "next/og";

export const alt = "Bryan Roubos — How & why. Then build.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: "#080c12", color: "#f1f0e9", fontFamily: "Georgia, serif" }}>
        <div style={{ display: "flex", fontSize: 28, color: "#a9b4c0" }}>Bryan Roubos</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 120, lineHeight: 1.02, letterSpacing: -4 }}>
          <span>How &amp; why.</span>
          <span style={{ color: "#c5d8d2" }}>Then build.</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a9b4c0" }}>Software Engineering · AI Infrastructure · Where the Light Falls</div>
      </div>
    ),
    size
  );
}
