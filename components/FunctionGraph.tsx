"use client";

import { useMemo, useState } from "react";

/**
 * A dependency-free interactive function plotter.
 * Plots y = f(x, a) over [xMin, xMax] with a live parameter slider for `a`.
 * This is the building block for the "interactive math" lessons — drop it into
 * any lesson with a different `fn` to make a concept explorable.
 */
export function FunctionGraph({
  fn,
  label = "f(x)",
  xMin = -10,
  xMax = 10,
  yMin = -10,
  yMax = 10,
  paramName = "a",
  paramMin = -5,
  paramMax = 5,
  paramInit = 1,
  width = 520,
  height = 360,
  hideSlider = false,
}: {
  fn: (x: number, a: number) => number;
  label?: string;
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  paramName?: string;
  paramMin?: number;
  paramMax?: number;
  paramInit?: number;
  width?: number;
  height?: number;
  hideSlider?: boolean;
}) {
  const [a, setA] = useState(paramInit);

  const sx = (x: number) => ((x - xMin) / (xMax - xMin)) * width;
  const sy = (y: number) => height - ((y - yMin) / (yMax - yMin)) * height;

  const path = useMemo(() => {
    const steps = 400;
    let d = "";
    let pen = false;
    for (let i = 0; i <= steps; i++) {
      const x = xMin + ((xMax - xMin) * i) / steps;
      const y = fn(x, a);
      if (!isFinite(y) || y < yMin - 50 || y > yMax + 50) {
        pen = false;
        continue;
      }
      const px = sx(x);
      const py = sy(y);
      d += `${pen ? "L" : "M"}${px.toFixed(2)},${py.toFixed(2)} `;
      pen = true;
    }
    return d;
  }, [a, fn, xMin, xMax, yMin, yMax, width, height]);

  const gridLines = [];
  for (let gx = Math.ceil(xMin); gx <= xMax; gx++) {
    gridLines.push(
      <line
        key={`vx${gx}`}
        x1={sx(gx)}
        y1={0}
        x2={sx(gx)}
        y2={height}
        stroke={gx === 0 ? "#94a3b8" : "#eef2f7"}
        strokeWidth={gx === 0 ? 1.5 : 1}
      />,
    );
  }
  for (let gy = Math.ceil(yMin); gy <= yMax; gy++) {
    gridLines.push(
      <line
        key={`hy${gy}`}
        x1={0}
        y1={sy(gy)}
        x2={width}
        y2={sy(gy)}
        stroke={gy === 0 ? "#94a3b8" : "#eef2f7"}
        strokeWidth={gy === 0 ? 1.5 : 1}
      />,
    );
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: 18,
        boxShadow: "0 1px 3px rgba(15,23,42,0.08)",
      }}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{ width: "100%", height: "auto", display: "block", borderRadius: 10 }}
      >
        {gridLines}
        <path d={path} fill="none" stroke="#1b7a44" strokeWidth={2.5} strokeLinecap="round" />
      </svg>

      {!hideSlider && (
        <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 14 }}>
          <label style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", minWidth: 70 }}>
            {paramName} = {a.toFixed(1)}
          </label>
          <input
            type="range"
            min={paramMin}
            max={paramMax}
            step={0.1}
            value={a}
            onChange={(e) => setA(parseFloat(e.target.value))}
            style={{ flex: 1, accentColor: "#1b7a44" }}
          />
        </div>
      )}
      <p style={{ margin: "8px 0 0", fontSize: 13, color: "#475569", fontWeight: 600 }}>
        {label}
        {!hideSlider ? " — drag the slider to explore." : ""}
      </p>
    </div>
  );
}
