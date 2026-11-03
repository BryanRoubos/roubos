"use client";

import { useCallback, useEffect, useRef } from "react";
import { accuracy, makeData, makeNet, predict, trainStep, type Net } from "@/lib/tiny-network";

const MAX_STEPS = 900;
const STEPS_PER_FRAME = 2;
const GRID = 44;
const INNER = "197,216,210"; // accent
const RING = "212,182,155"; // gold

export function LiveNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const readoutRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number>(0);
  const runRef = useRef(0);

  const start = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    cancelAnimationFrame(frameRef.current);
    const run = ++runRef.current;
    const data = makeData();
    const net: Net = makeNet(8, 3 + run * 11);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const size = 440;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    let step = 0;
    let loss = 0;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      const cell = size / GRID;
      for (let i = 0; i < GRID; i++) {
        for (let j = 0; j < GRID; j++) {
          const x = ((i + 0.5) / GRID) * 2 - 1;
          const y = ((j + 0.5) / GRID) * 2 - 1;
          const p = predict(net, x * 1.05, y * 1.05);
          ctx.fillStyle = p > 0.5 ? `rgba(${INNER},${(p - 0.5) * 0.9})` : `rgba(${RING},${(0.5 - p) * 0.9})`;
          ctx.fillRect(i * cell, j * cell, cell + 0.5, cell + 0.5);
        }
      }
      for (const pt of data) {
        ctx.beginPath();
        ctx.arc(((pt.x / 1.05 + 1) / 2) * size, ((pt.y / 1.05 + 1) / 2) * size, 4.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${pt.label ? INNER : RING})`;
        ctx.fill();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = "#080c12";
        ctx.stroke();
      }
      if (readoutRef.current) {
        readoutRef.current.textContent = `STEP ${String(step).padStart(3, "0")} · LOSS ${loss.toFixed(2)} · ACC ${Math.round(accuracy(net, data) * 100)}%`;
      }
    };

    if (reduce) {
      for (; step < MAX_STEPS; step++) loss = trainStep(net, data, 0.35);
      draw();
      return;
    }
    const tick = () => {
      for (let k = 0; k < STEPS_PER_FRAME && step < MAX_STEPS; k++, step++) loss = trainStep(net, data, 0.35);
      draw();
      if (step < MAX_STEPS) frameRef.current = requestAnimationFrame(tick);
    };
    tick();
  }, []);

  useEffect(() => {
    start();
    return () => cancelAnimationFrame(frameRef.current);
  }, [start]);

  return (
    <div className="live-net">
      <div className="live-net-bar"><span>ML / 001 · LIVE</span><span ref={readoutRef} aria-hidden="true" /></div>
      <canvas ref={canvasRef} role="img" aria-label="A tiny neural network learning to separate two groups of points, drawn live in your browser" />
      <div className="live-net-foot">
        <p>A tiny neural network, learning live in your browser. Eight hidden units, no libraries.</p>
        <button type="button" onClick={start}>Retrain <span aria-hidden="true">↻</span></button>
      </div>
    </div>
  );
}
