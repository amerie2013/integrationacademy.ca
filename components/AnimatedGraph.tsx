"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { safeCompile } from "../lib/mathExpr";

/**
 * Animates an authored expression by sweeping `param` from `from` to `to`
 * and back, on a loop. Great for showing phase shifts, transformations, limits…
 */
export function AnimatedGraph({
  expr,
  param,
  from,
  to,
  durationMs = 4000,
  xMin,
  xMax,
  yMin,
  yMax,
  caption,
  width = 520,
  height = 340,
}: {
  expr: string;
  param: string;
  from: number;
  to: number;
  durationMs?: number;
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  caption?: string;
  width?: number;
  height?: number;
}) {
  const fn = useMemo(() => safeCompile(expr), [expr]);
  const [playing, setPlaying] = useState(true);
  const [value, setValue] = useState(from);
  const raf = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!playing) {
      if (raf.current) cancelAnimationFrame(raf.current);
      return;
    }
    function step(ts: number) {
      if (startRef.current == null) startRef.current = ts;
      const elapsed = (ts - startRef.current) % (durationMs * 2);
      const phase = elapsed < durationMs ? elapsed / durationMs : 2 - elapsed / durationMs;
      setValue(from + (to - from) * phase);
      raf.current = requestAnimationFrame(step);
    }
    raf.current = requestAnimationFrame(step);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      startRef.current = null;
    };
  }, [playing, from, to, durationMs]);

  const sx = (x: number) => ((x - xMin) / (xMax - xMin)) * width;
  const sy = (y: number) => height - ((y - yMin) / (yMax - yMin)) * height;

  const path = useMemo(() => {
    const steps = 400;
    let d = "";
    let pen = false;
    for (let i = 0; i <= steps; i++) {
      const x = xMin + ((xMax - xMin) * i) / steps;
      const y = fn(param ? { x, [param]: value } : { x });
      if (!isFinite(y) || y < yMin - 50 || y > yMax + 50) {
        pen = false;
        continue;
      }
      d += `${pen ? "L" : "M"}${sx(x).toFixed(2)},${sy(y).toFixed(2)} `;
      pen = true;
    }
    return d;
  }, [value, fn, param, xMin, xMax, yMin, yMax]);

  const grid = [];
  for (let gx = Math.ceil(xMin); gx <= xMax; gx++)
    grid.push(<line key={`x${gx}`} x1={sx(gx)} y1={0} x2={sx(gx)} y2={height} stroke={gx === 0 ? "#94a3b8" : "#eef2f7"} strokeWidth={gx === 0 ? 1.5 : 1} />);
  for (let gy = Math.ceil(yMin); gy <= yMax; gy++)
    grid.push(<line key={`y${gy}`} x1={0} y1={sy(gy)} x2={width} y2={sy(gy)} stroke={gy === 0 ? "#94a3b8" : "#eef2f7"} strokeWidth={gy === 0 ? 1.5 : 1} />);

  return (
    <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 16, padding: 18, boxShadow: "0 1px 3px rgba(15,23,42,0.08)" }}>
      <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", height: "auto", display: "block", borderRadius: 10 }}>
        {grid}
        <path d={path} fill="none" stroke="#0d9488" strokeWidth={2.5} strokeLinecap="round" />
      </svg>
      <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 14 }}>
        <button
          onClick={() => setPlaying((p) => !p)}
          style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
        >
          {playing ? "⏸ Pause" : "▶ Play"}
        </button>
        <span style={{ fontWeight: 700, fontSize: 14, color: "#0f172a" }}>
          {param || "t"} = {value.toFixed(2)}
        </span>
      </div>
      {caption && <p style={{ margin: "8px 0 0", fontSize: 13, color: "#475569", fontWeight: 600 }}>{caption}</p>}
    </div>
  );
}
