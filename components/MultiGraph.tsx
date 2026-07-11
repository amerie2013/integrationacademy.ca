"use client";

import { useMemo, useState } from "react";
import { safeCompile } from "../lib/mathExpr";

export type Curve = { expr: string; label?: string; color?: string };

const PALETTE = ["#1b7a44", "#0d9488", "#db2777", "#d97706", "#2563eb"];

/**
 * Plots several curves at once (e.g. a linear system), in distinct colours,
 * with an optional parameter slider. For the first two curves it numerically
 * finds and marks the intersection — and detects "parallel / no solution" and
 * "coincident / infinite solutions". This is the interactive replacement for a
 * static system-of-equations graph.
 */
export function MultiGraph({
  curves,
  param = "",
  paramMin = -5,
  paramMax = 5,
  paramInit = 1,
  xMin = -10,
  xMax = 10,
  yMin = -10,
  yMax = 10,
  markIntersection = true,
  caption,
  width = 540,
  height = 380,
}: {
  curves: Curve[];
  param?: string;
  paramMin?: number;
  paramMax?: number;
  paramInit?: number;
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  markIntersection?: boolean;
  caption?: string;
  width?: number;
  height?: number;
}) {
  const [a, setA] = useState(paramInit);
  const hasParam = param.trim().length > 0;

  const fns = useMemo(() => curves.map((c) => safeCompile(c.expr)), [curves]);
  const vars = (x: number) => (hasParam ? { x, [param]: a } : { x });

  const sx = (x: number) => ((x - xMin) / (xMax - xMin)) * width;
  const sy = (y: number) => height - ((y - yMin) / (yMax - yMin)) * height;

  const paths = useMemo(() => {
    const steps = 400;
    return fns.map((fn) => {
      let d = "";
      let pen = false;
      for (let i = 0; i <= steps; i++) {
        const x = xMin + ((xMax - xMin) * i) / steps;
        const y = fn(vars(x));
        if (!isFinite(y) || y < yMin - 100 || y > yMax + 100) { pen = false; continue; }
        d += `${pen ? "L" : "M"}${sx(x).toFixed(2)},${sy(y).toFixed(2)} `;
        pen = true;
      }
      return d;
    });
  }, [fns, a, xMin, xMax, yMin, yMax]);

  // Intersection of first two curves
  const intersection = useMemo(() => {
    if (!markIntersection || fns.length < 2) return null;
    const g = (x: number) => fns[0](vars(x)) - fns[1](vars(x));
    const steps = 2000;
    const dx = (xMax - xMin) / steps;
    let zeros = 0;
    let sample = 0;
    let root: number | null = null;
    let prev = g(xMin);
    for (let i = 1; i <= steps; i++) {
      const x = xMin + i * dx;
      const cur = g(x);
      if (Math.abs(cur) < 1e-9) zeros++;
      sample++;
      if (root === null && isFinite(prev) && isFinite(cur) && prev * cur <= 0 && prev !== cur) {
        // bisection refine
        let lo = x - dx, hi = x;
        for (let k = 0; k < 40; k++) {
          const mid = (lo + hi) / 2;
          (g(lo) * g(mid) <= 0 ? (hi = mid) : (lo = mid));
        }
        root = (lo + hi) / 2;
      }
      prev = cur;
    }
    if (zeros / sample > 0.9) return { kind: "infinite" as const };
    if (root === null) return { kind: "none" as const };
    return { kind: "point" as const, x: root, y: fns[0](vars(root)) };
  }, [fns, a, xMin, xMax, markIntersection]);

  const grid: React.ReactElement[] = [];
  for (let gx = Math.ceil(xMin); gx <= xMax; gx++)
    grid.push(<line key={`x${gx}`} x1={sx(gx)} y1={0} x2={sx(gx)} y2={height} stroke={gx === 0 ? "#94a3b8" : "#eef2f7"} strokeWidth={gx === 0 ? 1.5 : 1} />);
  for (let gy = Math.ceil(yMin); gy <= yMax; gy++)
    grid.push(<line key={`y${gy}`} x1={0} y1={sy(gy)} x2={width} y2={sy(gy)} stroke={gy === 0 ? "#94a3b8" : "#eef2f7"} strokeWidth={gy === 0 ? 1.5 : 1} />);

  return (
    <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 16, padding: 18, boxShadow: "0 1px 3px rgba(15,23,42,0.08)" }}>
      <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", height: "auto", display: "block", borderRadius: 10 }}>
        {grid}
        {paths.map((d, i) => (
          <path key={i} d={d} fill="none" stroke={curves[i].color ?? PALETTE[i % PALETTE.length]} strokeWidth={2.5} strokeLinecap="round" />
        ))}
        {intersection?.kind === "point" && (
          <>
            <circle cx={sx(intersection.x)} cy={sy(intersection.y)} r={6} fill="#0f172a" />
            <text x={sx(intersection.x) + 10} y={sy(intersection.y) - 10} fontSize={14} fontWeight={700} fill="#0f172a">
              ({round(intersection.x)}, {round(intersection.y)})
            </text>
          </>
        )}
      </svg>

      {/* legend */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 12 }}>
        {curves.map((c, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#334155" }}>
            <span style={{ width: 16, height: 3, borderRadius: 2, background: c.color ?? PALETTE[i % PALETTE.length], display: "inline-block" }} />
            {c.label || c.expr}
          </span>
        ))}
      </div>

      {markIntersection && intersection && (
        <div style={{ marginTop: 8, fontSize: 13, fontWeight: 700, color: intersection.kind === "point" ? "#059669" : intersection.kind === "none" ? "#dc2626" : "#7c3aed" }}>
          {intersection.kind === "point" && `One solution: (${round(intersection.x)}, ${round(intersection.y)})`}
          {intersection.kind === "none" && "Parallel lines — no solution"}
          {intersection.kind === "infinite" && "Same line — infinite solutions"}
        </div>
      )}

      {hasParam && (
        <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 14 }}>
          <label style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", minWidth: 70 }}>{param} = {a.toFixed(1)}</label>
          <input type="range" min={paramMin} max={paramMax} step={0.1} value={a} onChange={(e) => setA(parseFloat(e.target.value))} style={{ flex: 1, accentColor: "#1b7a44" }} />
        </div>
      )}

      {caption && <p style={{ margin: "8px 0 0", fontSize: 13, color: "#475569", fontWeight: 600 }}>{caption}</p>}
    </div>
  );
}

function round(n: number) {
  return Math.round(n * 100) / 100;
}
